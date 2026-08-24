#!/usr/bin/env node
// Stage 2 of the pipeline. discover.mjs finds repositories; this decides them.
//
// For every queued candidate it tries to PROVE a dsh install path by reading
// the repo's own files, and records where the proof was found. A candidate
// that can be proven becomes a registry entry carrying its `evidence`; one
// that cannot becomes a dated rejection with a recheck date; one that needs a
// human keeps its place in the queue.
//
// Why this exists as a committed script: the registry's first 2,700 entries
// were triaged by an agent running throwaway scripts, so the most valuable
// step in the pipeline — the one that decides what the registry means — was
// the only step nobody could re-run, review, or correct. Discovery is capped
// at 400/run for a queue nothing could drain. Both are fixed by making the
// judgement reproducible.
//
// What "proven" means here is narrow and stated in the evidence string: this
// file was fetched from the repo's default branch and it carries this key.
// It is not "we installed it and it worked" — dsh has no resolver to ask —
// but it is a claim a reader can click and check, which `status: verified`
// alone never was.
//
// Usage:
//   node scripts/triage.mjs                drain data/candidates.json
//   node scripts/triage.mjs --dry-run      decide everything, write nothing
//   node scripts/triage.mjs --prove        re-prove entries already listed
//   node scripts/triage.mjs --limit 50     stop after 50 repos
//   node scripts/triage.mjs --report f.json  write the full per-repo trace
//
// Env: GITHUB_TOKEN (required for the deep pass; raw file reads need no token)

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const TODAY = new Date().toISOString().slice(0, 10);
const TOKEN = process.env.GITHUB_TOKEN ?? "";

const argv = process.argv.slice(2);
const has = (flag) => argv.includes(flag);
const opt = (flag, fallback) => {
  const i = argv.indexOf(flag);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : fallback;
};
const DRY = has("--dry-run");
const PROVE = has("--prove");
const LIMIT = Number(opt("--limit", Infinity));
const REPORT = opt("--report", null);

// A rejection for absence of evidence is a snapshot, not a verdict: the repo
// may ship its manifest next week. Three weeks is long enough that a re-sweep
// is not a treadmill and short enough that a late publisher is not buried.
const RECHECK_DAYS = 21;
// raw.githubusercontent has no published quota, so the ceiling here is
// politeness, not a limit. 12 in flight drains 6k repos in ~10 minutes.
const CONCURRENCY = 12;
// The dsh version entries are verified against. Bump when dsh ships and the
// prover has been re-checked against it — not automatically, or the field
// starts asserting compatibility nobody looked at.
//
// Re-checked against 0.1.0-rc.8 (released 2026-08-19) before this bump:
// docs/user/develop/basic/publish.md is byte-identical to rc.7, and the only
// `dsh` manifest keys in the harness tree are still `bundle` and `client`. The
// two install paths this prover reads did not move. rc.8's new surfaces —
// Profile Bundles and the experimental `ctx.agentTeams` service — ride on
// `dsh.bundle`, so they need no new proof shape.
const DSH_VERSION = process.env.DSH_VERSION ?? "0.1.0-rc.8";

const read = (rel) => JSON.parse(readFileSync(join(ROOT, rel), "utf8"));
const write = (rel, value) => writeFileSync(join(ROOT, rel), `${JSON.stringify(value, null, 2)}\n`);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const addDays = (iso, n) => new Date(Date.parse(iso) + n * 86400000).toISOString().slice(0, 10);

// --- fetchers ---------------------------------------------------------------

// Files come off raw.githubusercontent, which costs no GitHub API budget at
// all. That is the whole reason a full-ecosystem pass is affordable: the API
// would allow 5,000 reads an hour, and this pass wants tens of thousands.
async function raw(repo, path) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(`https://raw.githubusercontent.com/${repo}/HEAD/${path}`, {
        headers: { "user-agent": "awesome-dsh-plugins-triage" },
        signal: AbortSignal.timeout(15000),
      });
      if (res.status === 404) return null;
      if (res.status === 429 || res.status >= 500) {
        await sleep(1500 * (attempt + 1));
        continue;
      }
      if (!res.ok) return null;
      const text = await res.text();
      return text.length > 400000 ? text.slice(0, 400000) : text;
    } catch {
      await sleep(800 * (attempt + 1));
    }
  }
  return null;
}

let apiCalls = 0;
async function gh(path) {
  for (let attempt = 0; attempt < 5; attempt++) {
    let res;
    try {
      res = await fetch(`https://api.github.com${path}`, {
        headers: {
          accept: "application/vnd.github+json",
          "user-agent": "awesome-dsh-plugins-triage",
          ...(TOKEN ? { authorization: `Bearer ${TOKEN}` } : {}),
        },
        signal: AbortSignal.timeout(25000),
      });
      apiCalls += 1;
    } catch {
      await sleep(1500 * (attempt + 1));
      continue;
    }
    if (res.status === 404) return { __missing: true };
    if (res.status === 403 || res.status === 429) {
      const reset = Number(res.headers.get("x-ratelimit-reset") ?? 0) * 1000;
      await sleep(Math.min(Math.max(5000, reset - Date.now() + 2000), 65000));
      continue;
    }
    if (!res.ok) return null;
    return res.json();
  }
  return null;
}

// --- the prover -------------------------------------------------------------

// Everything dsh will actually load, in the order the evidence is worth. A
// root manifest is the strongest claim a repo can make about itself; a
// stylesheet full of `--dsw-*` overrides is the weakest thing still real.
const SKIP_PATH = /(^|\/)(node_modules|dist|build|out|vendor|\.git|coverage|fixtures?|examples?|tests?|__tests__)\//;
const DSW_TOKEN = /--dsw-[a-z0-9-]+/i;
// dsh's own rule, ported from the rc.8 source rather than approximated:
// packages/skill/skill-filesystem/src/index.ts `parseFrontmatter` (the first
// line must be exactly `---`, closed by a later line that is exactly `---`,
// both `\r`-tolerant) plus the three refusals in `loadSkillFile` — missing
// frontmatter, `name` or `description` absent, and a `name` that is not
// kebab-case (`SKILL_NAME` in packages/skill/skill/src/index.ts).
//
// The regex this replaces was `/^---\s*\n[\s\S]*?\nname:/m`, which needed a
// newline *before* `name:` — so `---\nname: foo` on the first line, the most
// natural way anyone writes it, did not match, and neither did any CRLF file.
// dsh loads both. 163 candidates were parked under "SKILL.md without
// frontmatter" waiting for a human to look at skills the harness would have
// loaded fine.
const SKILL_NAME = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function skillFrontmatter(raw) {
  if (!raw) return null;
  const firstEnd = raw.indexOf("\n");
  if (firstEnd < 0) return null;
  if (raw.slice(0, firstEnd).replace(/\r$/, "") !== "---") return null;
  let lineStart = firstEnd + 1;
  let closing = -1;
  while (lineStart <= raw.length) {
    const nl = raw.indexOf("\n", lineStart);
    const lineEnd = nl < 0 ? raw.length : nl;
    if (raw.slice(lineStart, lineEnd).replace(/\r$/, "") === "---") {
      closing = lineStart;
      break;
    }
    if (nl < 0) return null;
    lineStart = nl + 1;
  }
  if (closing < 0) return null;
  // Top-level `key: value` only. A real YAML parse is not worth a dependency
  // here: dsh needs `name` and `description` to be plain strings, and a nested
  // or folded value for either would fail its `stringField` check too.
  const fields = {};
  for (const line of raw.slice(firstEnd + 1, closing).split("\n")) {
    const m = line.replace(/\r$/, "").match(/^([A-Za-z][\w-]*)\s*:\s*(.*)$/);
    if (!m) continue;
    fields[m[1]] = m[2].trim().replace(/^['"]|['"]$/g, "");
  }
  const { name, description } = fields;
  if (!name || !description) return null;
  if (!SKILL_NAME.test(name)) return null;
  return { name, description };
}

const SKILL_FRONTMATTER = { test: (raw) => skillFrontmatter(raw) !== null };

const parse = (text) => {
  if (!text) return null;
  try { return JSON.parse(text); } catch { return null; }
};

// Returns [section, name] pairs, not bare names: `evidence` is a receipt a
// reader is meant to follow to the exact key, and a plugin's dsh dependency
// lands in peerDependencies or devDependencies about as often as in
// dependencies. Writing `#dependencies.X` for all three produced a path that
// does not resolve in the file it names -- a receipt for the wrong drawer.
const DEP_SECTIONS = ["dependencies", "peerDependencies", "devDependencies"];
const depsOf = (pkg) => DEP_SECTIONS.flatMap(
  (section) => Object.keys(pkg?.[section] ?? {}).map((name) => [section, name]));

// A package.json that is not this repo's own work proves nothing about this
// repo. Distributions and desktop shells vendor the harness tree wholesale, and
// a vendored `@deepseek-ai/dsh-client-connection/package.json` carries a real
// `dsh.client` key — the harness's own. Reading it as the vendoring repo's
// install path admits a fork of dsh as a plugin of dsh.
//
// Caught on cocode-agency/cocode, whose "proof" was a verbatim copy of the
// harness file, `repository.url` still naming deepseek-ai/deepseek-harness. The
// file says whose it is; we just were not reading that line.
//
// Two tells, both from the file itself:
//   - the package NAME is under @deepseek-ai/ — first-party, so a copy
//   - `repository.url` points at a GitHub repo other than the one being proven
//
// Deliberately narrow. A repo publishing under its own scope and depending on
// @deepseek-ai/* is the normal case and stays proven; only a copy of a
// first-party package, or a file that names someone else's repo, is refused.
const ghSlug = (url) => {
  const m = String(url ?? "").match(/github\.com[/:]([^/]+\/[^/#?]+?)(?:\.git)?(?:[/#?]|$)/i);
  return m ? m[1].toLowerCase() : null;
};

function vendoredFrom(pkg, repo) {
  if (typeof pkg?.name === "string" && pkg.name.startsWith("@deepseek-ai/")) {
    return `vendored first-party package ${pkg.name}`;
  }
  const declared = ghSlug(pkg?.repository?.url ?? pkg?.repository);
  if (declared && repo && declared !== repo.toLowerCase()) {
    return `package.json declares repository ${declared}`;
  }
  return null;
}

// A package.json is a proof if it names dsh in a way dsh itself reads — and if
// it is this repo's own file rather than a copy of somebody else's.
function proveFromPackage(pkg, path, repo) {
  if (!pkg) return null;
  if (vendoredFrom(pkg, repo)) return null;
  if (pkg.dsh?.bundle) return { evidence: `${path}#dsh.bundle`, why: "dsh.bundle manifest" };
  if (pkg.dsh) return { evidence: `${path}#dsh.${Object.keys(pkg.dsh).join("+")}`, why: "dsh manifest" };
  const ds = depsOf(pkg).filter(([, d]) => d.startsWith("@deepseek-ai/"));
  if (ds.length) {
    const [section, name] = ds[0];
    return { evidence: `${path}#${section}.${name}`, why: `depends on ${name}` };
  }
  return null;
}

// Plenty of real plugins ship with the GitHub description field blank and
// their package.json description missing, and say what they are in the first
// line of the README instead. Reading that line is still copying the author,
// which is the rule; skipping it threw away one proven plugin in eight.
function ledeFromReadme(text) {
  if (!text) return null;
  const body = text
    .slice(0, 8000)
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/<[^>]+>/g, " ");
  for (let line of body.split(/\r?\n/)) {
    line = line.trim();
    if (!line) continue;
    if (/^#{1,6}\s/.test(line)) continue; // the title repeats the repo name
    if (/^[-*_]{3,}$/.test(line)) continue;
    if (/^[[!|>]/.test(line) && !/[.。！!？?]/.test(line)) continue; // badge wall, TOC, language switcher
    line = line
      .replace(/!\[[^\]]*\]\([^)]*\)/g, " ") // images
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // links keep their text
      .replace(/[*_`]+/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (line.length >= 20) return line;
  }
  return null;
}

// Root read: three free file fetches, which settles most repos.
async function proveRoot(repo) {
  const [pkgText, skill, readme] = await Promise.all([
    raw(repo, "package.json"),
    raw(repo, "SKILL.md"),
    raw(repo, "README.md"),
  ]);
  const pkg = parse(pkgText);
  const facts = {
    hasPkg: !!pkg,
    pkgName: pkg?.name ?? null,
    pkgDesc: pkg?.description ?? null,
    private: pkg?.private === true,
    cordis: depsOf(pkg).some(([, d]) => d === "cordis" || d.startsWith("cordis-")),
    hasSkill: !!skill,
    skillFrontmatter: skill ? SKILL_FRONTMATTER.test(skill) : false,
    hasReadme: !!readme,
    readmeLede: ledeFromReadme(readme),
    empty: !pkg && !readme && !skill,
  };

  const fromPkg = proveFromPackage(pkg, "package.json", repo);
  if (fromPkg) return { proof: fromPkg, facts };
  if (facts.hasSkill && facts.skillFrontmatter) {
    return { proof: { evidence: "SKILL.md#frontmatter", why: "SKILL.md with frontmatter" }, facts };
  }
  return { proof: null, facts };
}

// Deep read: one API call for the tree, then free reads of whatever it points
// at. Most theme and monorepo repos ship their plugin under packages/<name>/,
// and a root-only gate throws every one of them away — that mistake cost the
// registry 271 real entries once already.
async function proveDeep(repo) {
  const tree = await gh(`/repos/${repo}/git/trees/HEAD?recursive=1`);
  // Gone and unreadable are different facts and deserve different words: one
  // is a repo that 404s, the other is a fetch that lost. Neither is a verdict
  // on one observation — krimvp/dsh-airlock 404'd for fifteen hours and came
  // back — so both are reported, and nothing is deleted here.
  if (tree?.__missing) return { proof: null, facts: { tree: "gone" } };
  if (!tree || !Array.isArray(tree.tree)) return { proof: null, facts: { tree: "unreadable" } };
  const paths = tree.tree
    .filter((n) => n.type === "blob")
    .map((n) => n.path)
    .filter((p) => !SKIP_PATH.test(p));

  const nestedPkgs = paths.filter((p) => p.endsWith("package.json") && p !== "package.json").slice(0, 20);
  for (const p of nestedPkgs) {
    const pkg = parse(await raw(repo, p));
    const proof = proveFromPackage(pkg, p, repo);
    if (proof) {
      return {
        proof: { ...proof, path: dirname(p), pkgName: pkg.name ?? null, pkgDesc: pkg.description ?? null },
        facts: { tree: paths.length },
      };
    }
  }

  const skills = paths.filter((p) => /(^|\/)SKILL\.md$/i.test(p) && p.split("/").length <= 3);
  for (const p of skills) {
    const text = await raw(repo, p);
    if (text && SKILL_FRONTMATTER.test(text)) {
      return {
        proof: { evidence: `${p}#frontmatter`, why: "nested SKILL.md", path: dirname(p) === "." ? undefined : dirname(p) },
        facts: { tree: paths.length },
      };
    }
  }

  const patch = paths.find((p) => /cordis\.patch\.ya?ml$/i.test(p));
  if (patch) {
    return {
      proof: { evidence: patch, why: "cordis patch layer", path: dirname(patch) === "." ? undefined : dirname(patch) },
      facts: { tree: paths.length },
    };
  }

  // A stylesheet that overrides dsh's own `--dsw-*` design tokens is a real
  // install path for a skin, and the only one a pure-CSS theme has.
  for (const p of paths.filter((x) => /\.(css|scss)$/i.test(x)).slice(0, 6)) {
    const text = await raw(repo, p);
    if (text && DSW_TOKEN.test(text)) {
      return { proof: { evidence: `${p}#--dsw-tokens`, why: "dsw token override" }, facts: { tree: paths.length } };
    }
  }

  return { proof: null, facts: { tree: paths.length } };
}

const NO_PATH = "no dsh install path at any depth: no dsh manifest, no @deepseek-ai dependency, no SKILL.md";

async function triage(repo, { deep = true } = {}) {
  const root = await proveRoot(repo);
  if (root.proof) return { repo, verdict: "accept", ...root.proof, facts: root.facts };

  if (deep) {
    const deepRead = await proveDeep(repo);
    if (deepRead.proof) {
      return { repo, verdict: "accept", ...deepRead.proof, facts: { ...root.facts, ...deepRead.facts } };
    }
    if (deepRead.facts.tree === "gone") {
      return { repo, verdict: "reject", reason: "repo gone (404) at triage time", gone: true, recheck: true, facts: root.facts };
    }
    if (deepRead.facts.tree === "unreadable") {
      return { repo, verdict: "reject", reason: "repo tree unreadable at triage time", recheck: true, facts: root.facts };
    }
    root.facts.tree = deepRead.facts.tree;
  }

  // Two shapes are close enough to real that a machine should not decide them.
  if (root.facts.cordis) {
    return { repo, verdict: "review", reason: "cordis plugin with no dsh manifest", facts: root.facts };
  }
  // Not a close call once you read the loader. dsh logs
  // `skill file <path> ignored: missing YAML frontmatter` and returns
  // undefined, so a SKILL.md without usable frontmatter is not a skill dsh
  // discovers — it is a markdown file. Held for a human, this was the largest
  // and fastest-growing bucket in the queue and nobody could have decided it
  // any differently. It rechecks like any other snapshot rejection, so adding
  // frontmatter is all it takes to come back.
  if (root.facts.hasSkill) {
    return {
      repo,
      verdict: "reject",
      reason: "SKILL.md present but dsh would ignore it: frontmatter must open on line 1 with `---` and set a kebab-case `name` plus a `description` (packages/skill/skill-filesystem/src/index.ts)",
      recheck: true,
      facts: root.facts,
    };
  }
  if (root.facts.empty) {
    return { repo, verdict: "reject", reason: "empty repo: no package.json, no README, no SKILL.md", recheck: true, facts: root.facts };
  }
  return { repo, verdict: "reject", reason: NO_PATH, recheck: true, facts: root.facts };
}

// --- entry construction -----------------------------------------------------

// Descriptions are copied from upstream and only cleaned, never written. The
// registry does not get to improve on what an author said about their own
// project; it only refuses to pass on star-begging and emoji walls.
const STAR_BEG = /[【\[(]\s*(求[⭐★*]+|求star|please\s*star|star\s*me|点个?[⭐★]|欢迎star)\s*[】\])]/gi;
const EMOJI = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{2B00}-\u{2BFF}]/gu;
const MOJIBAKE = /\?{4,}|�/;

function cleanDescription(input) {
  if (!input) return null;
  let s = String(input)
    .replace(/\r?\n/g, " ")
    .replace(STAR_BEG, " ")
    .replace(EMOJI, " ")
    .replace(/\s+/g, " ")
    .replace(/^[\s|·•\-—:：,，.。]+/, "")
    .trim();
  if (MOJIBAKE.test(s)) return null; // arrives destroyed; passing it on helps nobody
  if (s.length < 8) return null;
  if (s.length > 200) {
    const cut = s.slice(0, 200);
    const at = Math.max(
      cut.lastIndexOf("; "), cut.lastIndexOf("。"), cut.lastIndexOf("，"),
      cut.lastIndexOf(", "), cut.lastIndexOf(" · "), cut.lastIndexOf(" "));
    s = (at > 120 ? cut.slice(0, at) : cut.slice(0, 197)).replace(/[\s,;·、，。]+$/, "");
  }
  return s.length >= 8 ? s : null;
}

// Functional areas, matching data/schema.json's tag enum. Bilingual because
// most of this ecosystem writes its descriptions in Chinese.
const TAG_RULES = [
  ["fun", /\b(pet|pets|desktop.?pet|game|tamagotchi|toy|fortune|music|ambien|mascot|wallpaper|emoji|cat|dog|whale|christmas|firework)\b|宠物|桌宠|游戏|摸鱼|娱乐|音乐|壁纸/i],
  ["vision", /\b(vision|image|ocr|screenshot|multimodal|vlm|diagram|图像|截图|视觉|识图|绘图|画图)\b/i],
  ["channels", /\b(telegram|feishu|lark|wecom|wechat|dingtalk|slack|discord|whatsapp|qq|matrix|email|sms|bark)\b|飞书|钉钉|企业微信|微信|邮件/i],
  ["notifications", /\b(notif|notify|alert|toast|remind|ding|bell|push)\b|通知|提醒|提示音/i],
  ["usage", /\b(cost|token.?(usage|count|stat)|billing|quota|spend|price|balance|budget|usage)\b|费用|成本|额度|余额|计费|用量/i],
  ["memory", /\b(memory|memories|recall|context.?(engine|manage|compact)|session|history|rewind|checkpoint|compact|persist)\b|记忆|上下文|会话|历史|回滚/i],
  ["agents", /\b(agent|subagent|sub-agent|orchestrat|workflow|multi.?agent|swarm|team|roundtable|plan.?mode|task.?(graph|queue|runner)|schedul|cron|autonom|pipeline)\b|智能体|多agent|编排|工作流|任务|计划|定时/i],
  ["models", /\b(provider|router|routing|fallback|model.?(switch|select|route|config)|openrouter|anthropic|openai|gemini|claude|kimi|glm|qwen|ollama|litellm|proxy|relay|api.?key)\b|模型|路由|中转|供应商/i],
  ["interop", /\b(claude.?code|codex|opencode|gemini.?cli|cursor|migrat|import|export|bridge|compat|convert|hermes|copilot|zed)\b|迁移|互通|兼容/i],
  ["marketplace", /\b(marketplace|market|store|registry|installer|manager|hub|catalog|awesome|discover)\b|市场|商店|安装器|插件管理/i],
  ["safety", /\b(permission|approval|guard|gate|sandbox|redact|secret|audit.?(log)?|security|allowlist|blocklist|confirm|safe)\b|权限|审批|安全|脱敏|防护/i],
  ["observability", /\b(observab|telemetry|trace|tracing|log|logging|monitor|diagnos|evidence|provenance|inspect|debug|metrics|dashboard|stat)\b|监控|日志|追踪|诊断|可观测/i],
  ["devtools", /\b(scaffold|template|boilerplate|dev.?(kit|tool|skill)|sdk|test|lint|publish|build|release|plugin.?dev|hot.?reload|typescript|cli.?tool)\b|脚手架|开发|模板|调试工具|发布/i],
  ["knowledge", /\b(rag|research|knowledge|wiki|docs?|documentation|paper|search.?(engine)?|learn|note|obsidian|zotero|arxiv)\b|知识|文档|论文|笔记|检索/i],
  ["terminal", /\b(tui|terminal|cli.?(ui|shell)|desktop|tray|menubar|electron|tauri|native.?app|status.?line|statusline)\b|终端|桌面|托盘/i],
  ["ui", /\b(web.?ui|webui|gui|panel|sidebar|theme|skin|layout|css|frontend|interface|render|markdown.?(view|render)|chat.?ui|ux)\b|界面|侧边栏|面板|主题|皮肤|前端/i],
  ["capabilities", /\b(tool|browser|fetch|crawl|scrape|file|filesystem|database|sql|shell|bash|exec|mcp|api|voice|tts|stt|speech|pdf|excel|office|weather|map|calendar)\b|工具|浏览器|抓取|文件|数据库|语音|朗读/i],
];

// Score by how many distinct keywords each area hits; rule order only breaks
// ties. Order alone made the first-listed area win even when a later one was
// the obvious subject, e.g. an approval gate tagged `models` for naming one.
// `capabilities` is the catch-all, so it needs a real hit to beat a specific.
function tagsFor(text) {
  const scored = [];
  TAG_RULES.forEach(([tag, re], order) => {
    const m = text.match(new RegExp(re.source, `${re.flags.replace("g", "")}g`));
    if (!m) return;
    const distinct = new Set(m.map((x) => x.toLowerCase())).size;
    scored.push({ tag, score: tag === "capabilities" ? distinct - 0.5 : distinct, order });
  });
  scored.sort((a, b) => b.score - a.score || a.order - b.order);
  return scored.slice(0, 2).map((s) => s.tag).length ? scored.slice(0, 2).map((s) => s.tag) : ["capabilities"];
}

// Themes belong to the sibling registry, so this one routes them out rather
// than absorbing them. The repo name has to say what the thing is: a launcher
// and a balance HUD both embed the web UI and both ship `--dsw-*` CSS.
const THEME_WORDS = /\b(theme|skin|colou?r.?scheme|palette|dark.?mode|light.?mode|wallpaper|background)\b|主题|皮肤|配色|壁纸|背景|换肤/i;
const isTheme = (repo, description) =>
  THEME_WORDS.test(description ?? "") && /theme|skin|配色|主题|皮肤|wallpaper|壁纸|background|-bg\b|_bg\b/i.test(repo.split("/")[1]);

function nameFor(repo, taken) {
  const [owner, base] = repo.split("/");
  const stem = base.replace(/\.git$/, "").slice(0, 64);
  if (!taken.has(stem.toLowerCase())) { taken.add(stem.toLowerCase()); return stem; }
  // Collision policy: rename upstream if you can, suffix only if you cannot.
  // The suffix is the owner, so two projects with the same idea stay telling
  // apart at a glance.
  const suffix = owner.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 8) || "x";
  let candidate = `${stem.slice(0, 63 - suffix.length)}-${suffix}`;
  let n = 2;
  while (taken.has(candidate.toLowerCase())) candidate = `${stem.slice(0, 60 - suffix.length)}-${suffix}-${n++}`;
  taken.add(candidate.toLowerCase());
  return candidate;
}

// Key order matches the existing file so a diff shows what changed, not that
// the serializer moved. Anything not on the list keeps its value and lands at
// the end: a reorderer that drops what it does not recognise is a data-loss
// bug waiting for the next schema field, and this one ate every `featured`
// pick on its first run.
const KEY_ORDER = ["name", "repo", "path", "description", "category", "official", "featured", "added",
  "lastVerified", "verifiedAgainst", "status", "evidence", "npm", "stars", "starsUpdated", "tags", "pushedAt"];
const ordered = (o) => {
  const rest = Object.keys(o).filter((k) => !KEY_ORDER.includes(k));
  return Object.fromEntries(
    [...KEY_ORDER, ...rest].filter((k) => o[k] !== undefined).map((k) => [k, o[k]]));
};

// --- runner -----------------------------------------------------------------

async function pooled(items, worker, label) {
  const results = [];
  const queue = [...items];
  let done = 0;
  await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const item = queue.shift();
      results.push(await worker(item));
      if (++done % 100 === 0) console.error(`triage: ${label} ${done}/${items.length} (api ${apiCalls})`);
    }
  }));
  return results;
}

const registry = read("data/plugins.json");
const rejectedFile = read("data/rejected.json");
const candidatesFile = read("data/candidates.json");

// --- mode: --prove ----------------------------------------------------------
// Re-read every listed entry and record where its install path actually is.
// 2,751 of 2,760 rows say `status: verified` and nothing in the repo has ever
// checked one. This turns that claim into a citation, or removes it.

if (PROVE) {
  const targets = registry.plugins.filter((p) => !p.official).slice(0, LIMIT);
  console.error(`triage: proving ${targets.length} listed entries (skipping ${registry.plugins.length - targets.length} first-party/limited)`);
  const results = await pooled(targets, async (p) => {
    // An entry with a `path` names its own subdirectory: prove that, not the
    // repo root, or a monorepo's root package.json answers for all of them.
    if (p.path) {
      const pkg = parse(await raw(p.repo, `${p.path}/package.json`));
      const proof = proveFromPackage(pkg, `${p.path}/package.json`, p.repo);
      if (proof) return { entry: p, verdict: "accept", ...proof };
      const skill = await raw(p.repo, `${p.path}/SKILL.md`);
      if (skill && SKILL_FRONTMATTER.test(skill)) {
        return { entry: p, verdict: "accept", evidence: `${p.path}/SKILL.md#frontmatter`, why: "SKILL.md" };
      }
    }
    const t = await triage(p.repo, { deep: !p.path });
    return { entry: p, ...t };
  }, "prove");

  const proven = results.filter((r) => r.verdict === "accept");
  const unproven = results.filter((r) => r.verdict !== "accept");
  const gone = unproven.filter((r) => r.gone);
  console.error(`triage: proven ${proven.length}, unproven ${unproven.length} of ${results.length}`);
  // Nothing in this pipeline has ever checked whether a listed repo still
  // exists. A row pointing at a 404 is the one kind of wrong a registry
  // cannot argue with, so it gets named rather than buried in a tally.
  if (gone.length) {
    console.error(`triage: ${gone.length} listed repo(s) now 404 — confirm on a second run before removing:`);
    for (const g of gone) console.error(`  - ${g.entry.repo} (${g.entry.name})`);
  }

  // `broken` means a human confirmed the repository is gone, singly, against
  // the REST API — the method data/gone.json documents. It is a stronger claim
  // than anything this pass makes, and this pass used to overwrite it: a
  // --prove run flipped 59 confirmed-dead rows to verified/unverified, which
  // took `gone` on /api/plugins from 59 to 0. A registry that quietly stops
  // disclosing its dead rows is doing the exact thing this one accuses other
  // directories of, and it took one flag to do it.
  //
  // So a prove pass may PROMOTE a broken row it can now read — repos do come
  // back; two of these did — but it may never silently demote the marking to
  // "unverified" on a tree it merely failed to fetch.
  const goneNow = new Set(gone.map((g) => g.entry.name));

  const byEntry = new Map(results.map((r) => [r.entry.name, r]));
  for (const p of registry.plugins) {
    const r = byEntry.get(p.name);
    if (!r) continue;
    if (p.status === "broken" && r.verdict !== "accept") {
      // Still unreadable, and already confirmed dead by hand. Leave it alone.
      continue;
    }
    if (r.verdict !== "accept" && goneNow.has(p.name)) {
      // Newly 404 on this pass. One observation is not a confirmation, so the
      // row keeps its claim and the run names it for a human to check.
      continue;
    }
    if (r.verdict === "accept") {
      p.evidence = r.evidence;
      p.status = "verified";
      p.lastVerified = TODAY;
      p.verifiedAgainst = DSH_VERSION;
    } else {
      // Never delete a row on a machine's say-so — an unreadable tree and a
      // dead project look identical from here. Drop the claim, keep the row,
      // and let the next pass or a human settle it.
      delete p.evidence;
      p.status = "unverified";
    }
  }
  const rewritten = registry.plugins.map(ordered);

  if (REPORT) {
    writeFileSync(REPORT, `${JSON.stringify(results.map((r) => ({
      repo: r.entry.repo, name: r.entry.name, verdict: r.verdict, evidence: r.evidence ?? null, reason: r.reason ?? null,
    })), null, 2)}\n`);
  }
  if (!DRY) {
    write("data/plugins.json", { ...registry, updated: TODAY, plugins: rewritten });
    console.error(`triage: rewrote data/plugins.json with evidence on ${proven.length} entries`);
  } else {
    console.error("triage: --dry-run, nothing written");
  }
  process.exit(0);
}

// --- mode: drain the queue --------------------------------------------------

const takenNames = new Set(registry.plugins.map((p) => p.name.toLowerCase()));
const listed = new Set(registry.plugins.map((p) => p.repo.toLowerCase()));
const alreadyRejected = new Map(rejectedFile.rejected.map((r) => [r.repo.toLowerCase(), r]));
let recheckedRejections = 0;

const queue = candidatesFile.candidates.filter((c) => !listed.has(c.repo.toLowerCase())).slice(0, LIMIT);
console.error(`triage: ${queue.length} candidate(s) to decide`);

const decided = await pooled(queue, async (c) => ({ candidate: c, ...(await triage(c.repo)) }), "decide");
decided.sort((a, b) => (b.candidate.stars ?? 0) - (a.candidate.stars ?? 0) || a.repo.localeCompare(b.repo));

const admitted = [];
const rejects = [];
const held = [];
const routed = [];

for (const d of decided) {
  const c = d.candidate;
  if (d.verdict === "review") { held.push({ ...c, note: d.reason }); continue; }
  if (d.verdict === "reject") {
    // An expired rejection that fails again is the same verdict, freshly
    // dated — not a second row, and not a candidate left in the queue for a
    // human who would reach the same conclusion.
    const prior = alreadyRejected.get(c.repo.toLowerCase());
    if (prior) {
      prior.reason = d.reason;
      prior.date = TODAY;
      if (d.recheck) prior.recheckAfter = addDays(TODAY, RECHECK_DAYS);
      recheckedRejections += 1;
      continue;
    }
    rejects.push({
      repo: c.repo,
      reason: d.reason,
      date: TODAY,
      ...(d.recheck ? { recheckAfter: addDays(TODAY, RECHECK_DAYS) } : {}),
    });
    continue;
  }

  // Precedence: what the package says it is, then what the repo advertises,
  // then the README's first real line. All three are the author's own words.
  const description = cleanDescription(d.pkgDesc ?? d.facts?.pkgDesc)
    ?? cleanDescription(c.description)
    ?? cleanDescription(d.facts?.readmeLede);
  if (!description) {
    // Nothing upstream to copy, and this registry does not write one.
    held.push({ ...c, note: "install path proven, but no usable description upstream" });
    continue;
  }
  if (isTheme(c.repo, description)) {
    routed.push({ ...c, note: "looks like a theme; belongs in awesome-dsh-themes" });
    continue;
  }

  const category = d.evidence.includes("SKILL.md") ? "skill" : "plugin";
  admitted.push(ordered({
    name: nameFor(c.repo, takenNames),
    repo: c.repo,
    path: d.path,
    description,
    category,
    official: false,
    added: TODAY,
    lastVerified: TODAY,
    verifiedAgainst: DSH_VERSION,
    status: "verified",
    evidence: d.evidence,
    npm: c.npm,
    stars: c.stars,
    starsUpdated: c.stars === undefined ? undefined : TODAY,
    tags: tagsFor(`${c.repo} ${description}`),
  }));
}

console.error([
  `triage: ${admitted.length} admitted, ${rejects.length} rejected,`,
  `${recheckedRejections} rejection(s) re-dated,`,
  `${held.length} held for review, ${routed.length} routed to themes (api ${apiCalls})`,
].join(" "));

if (REPORT) {
  writeFileSync(REPORT, `${JSON.stringify({ admitted, rejects, held, routed }, null, 2)}\n`);
  console.error(`triage: wrote ${REPORT}`);
}

if (DRY) {
  console.error("triage: --dry-run, nothing written");
  process.exit(0);
}

const nextPlugins = [...registry.plugins, ...admitted];
write("data/plugins.json", { ...registry, updated: TODAY, plugins: nextPlugins });
write("data/rejected.json", {
  ...rejectedFile,
  updated: rejects.length ? TODAY : rejectedFile.updated,
  rejected: [...rejectedFile.rejected, ...rejects].sort((a, b) => a.repo.localeCompare(b.repo)),
});
// What stays in the queue is what a machine should not have decided: the
// close calls, the theme routing, and the entries with nothing to quote.
write("data/candidates.json", {
  updated: TODAY,
  candidates: [...held, ...routed].sort((a, b) => a.repo.localeCompare(b.repo)),
});

// Keep the published coverage figure honest between sweeps.
//
// `decided` is written by discover.mjs as `topicRepos ∩ (listed ∪ rejected)`,
// and only discover holds `topicRepos`, so it was a snapshot that went stale
// the moment this script ran: today it said 9,987/11,011 — 91% — while triage
// had since decided another 941, making it 99%. Understating our own coverage
// is the safe direction to be wrong in, but it is still wrong, and the README
// prints it as a headline.
//
// Every candidate carrying `github-topic` came from that sweep, so deciding
// one moves the numerator by exactly one. Seeds and npm-search finds do not
// count: they were never in the topic denominator.
const queued = new Map(queue.map((c) => [c.repo.toLowerCase(), c]));
const fromTopic = (repo) =>
  (queued.get(repo.toLowerCase())?.sources ?? []).includes("github-topic");
const decidedNow = [...admitted, ...rejects].filter((row) => fromTopic(row.repo)).length;
if (decidedNow) {
  try {
    const coverage = read("data/coverage.json");
    write("data/coverage.json", {
      ...coverage,
      decided: Math.min(coverage.decided + decidedNow, coverage.unique),
      queued: Math.max(coverage.queued - decidedNow, 0),
    });
    console.error(`triage: coverage ${coverage.decided} -> ${coverage.decided + decidedNow} of ${coverage.unique}`);
  } catch {
    // No sweep has run yet; there is no figure to keep honest.
  }
}
console.error(`triage: registry ${registry.plugins.length} -> ${nextPlugins.length}`);
