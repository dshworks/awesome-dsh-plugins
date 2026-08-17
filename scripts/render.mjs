#!/usr/bin/env node
// Render README.md, docs/plugins.json, and docs/plugins-embed.js from
// data/plugins.json. The data is the source of truth; everything else is a
// build artifact. Prose lives in the template below, the org and repo names
// come from package.json "registry" so they are defined in exactly one place.
// Node stdlib only.
//
// Usage: node scripts/render.mjs [--check]
//   --check  exit 1 if any artifact is out of sync with the data (for CI)

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => JSON.parse(readFileSync(join(ROOT, rel), "utf8"));

const { registry: cfg } = read("package.json");
const data = read("data/plugins.json");
// How big the ecosystem was at the last sweep, measured by scripts/discover.mjs.
// Every number in the prose below comes from here or from the data; the README
// used to hand-type them, so the one claim this repo makes about why it exists
// was the one claim that went stale.
const coverage = read("data/coverage.json");
const rejectedRows = read("data/rejected.json").rejected ?? [];
const num = (n) => n.toLocaleString("en-US");
const authors = new Set(data.plugins.map((p) => p.repo.split("/")[0])).size;
const noInstallPath = rejectedRows.filter((r) => /no dsh install path/.test(r.reason ?? "")).length;
const pct = Math.round((coverage.decided / coverage.unique) * 100);

const HARNESS = "deepseek-ai/deepseek-harness";
const BADGE = "https://img.shields.io/badge/powered__by-dsh-4D6BFE?logo=deepseek";
// The org's own domain when it has one; GitHub's default host otherwise. Pages
// serves the project sites under both, but only one of them is the brand, and
// a canonical pointing at the other is a canonical pointing at a redirect.
const SITE = cfg.site ?? `https://${cfg.org}.github.io`;
const GALLERY = `${SITE}/${cfg.repo}/`;

const CATEGORIES = [
  ["bundle", "Bundles", "npm packages with a `dsh.bundle` manifest: composition layers a profile boots from."],
  ["skill", "Skills", "Anthropic-format `SKILL.md` units; dsh discovers them from its skill roots (no nested discovery, kebab-case names only)."],
  ["theme", "Themes", `UI skins. The dedicated registry is [awesome-dsh-themes](https://github.com/${cfg.org}/awesome-dsh-themes); only themes that also ship plugin machinery live here.`],
  ["tool", "Tools", "Developer tooling around dsh."],
];

// Functional areas, in browse order. Tag ids match data/schema.json.
const TAGS = [
  ["ui", "Web UI", "Panels, composer upgrades, navigation, layout, mobile."],
  ["terminal", "Terminals & desktop", "TUIs, desktop shells, headless runners."],
  ["capabilities", "Tools & capabilities", "New things the model can do: search, browser, files, databases, devices, media."],
  ["vision", "Vision", "Image understanding for text-only models."],
  ["agents", "Agents & orchestration", "Subagents, workflows, cross-session coordination."],
  ["memory", "Memory & sessions", "Memory systems, context management, session search/rewind/export."],
  ["models", "Models & providers", "Providers, routing, fallbacks, subscription adapters."],
  ["interop", "Interop & migration", "Bridges to and from Claude Code, Codex, and other harnesses."],
  ["channels", "Channels & remote", "IM bridges and remote control: Feishu, Telegram, WeCom, DingTalk."],
  ["notifications", "Notifications", "Alerting the human: desktop, sound, even a phone call."],
  ["usage", "Usage & cost", "Token accounting, billing, balance, quota."],
  ["observability", "Observability & evidence", "Diagnostics, logs, audits, content-addressed proofs."],
  ["safety", "Safety & approvals", "Permission tiers, gates, redaction, protection."],
  ["marketplace", "Plugin managers & stores", "In-UI stores, installers, skill managers."],
  ["devtools", "Developer tools", "Building, testing, and publishing plugins."],
  ["knowledge", "Knowledge & research", "Research workbenches, RAG, learning modes."],
  ["fun", "Fun", "Games, pets, memes, ambience. The reef has coral."],
];

const esc = (s) => s.replaceAll("|", "\\|");
const slug = (s) => s.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9 -]/g, "").trim().replace(/\s+/g, "-");

function repoCell(p) {
  const url = p.path
    ? `https://github.com/${p.repo}/tree/HEAD/${p.path}`
    : `https://github.com/${p.repo}`;
  const npm = p.npm ? ` · [npm](https://www.npmjs.com/package/${p.npm})` : "";
  return `[${p.repo}](${url})${npm}`;
}

function starsCell(p) {
  return p.stars === undefined ? "-" : String(p.stars);
}

function verifiedCell(p) {
  if (p.status === "verified") return `${p.verifiedAgainst} (${p.lastVerified})`;
  if (p.status === "broken") return `broken against ${p.verifiedAgainst}`;
  return "unverified";
}

function byRank(a, b) {
  return Number(b.official ?? false) - Number(a.official ?? false)
    || (b.stars ?? 0) - (a.stars ?? 0)
    || a.name.localeCompare(b.name);
}

// GitHub stops rendering a markdown file at ~512 KB, silently: the page just
// ends mid-row and every section below it disappears. At 2,642 entries the
// full README crossed that and cut off inside the Skills table. So the README
// shows the top of each section and links to a complete per-section list in
// lists/, which stays small enough to render.
const README_ROWS = 25;

function tableRows(plugins) {
  return plugins
    .slice()
    .sort(byRank)
    .map((p) =>
      `| ${esc(p.name)}${p.official ? " (official)" : ""}${p.featured ? " ⭐" : ""} | ${starsCell(p)} | ${repoCell(p)} | ${esc(p.description)} | ${verifiedCell(p)} |`);
}

function table(plugins, { limit = Infinity, listFile = null } = {}) {
  const rows = tableRows(plugins);
  const shown = rows.slice(0, limit);
  const out = [
    "| Name | Repo ★ | Repo | Description | Verified against |",
    "|---|---|---|---|---|",
    ...shown,
  ].join("\n");
  if (rows.length <= limit) return out;
  const more = listFile
    ? `**[all ${rows.length} →](${listFile})**`
    : `all ${rows.length}`;
  return `${out}\n\n<sub>Showing the ${shown.length} most-starred of ${rows.length}. ${more} · [gallery](${GALLERY}) · [JSON](data/plugins.json)</sub>`;
}

// Full listings, one file per section. Written alongside the README so nothing
// is only reachable through the gallery.
const lists = [];
function listFor(title, blurb, plugins) {
  const rel = `lists/${slug(title)}.md`;
  lists.push({
    rel,
    body: `<!-- Rendered by scripts/render.mjs from data/plugins.json. Do not edit by hand. -->

# ${title}

${blurb}

${plugins.length} entries, most-starred first. Back to the [registry README](../README.md) · [gallery](${GALLERY}).

${[
  "| Name | Repo ★ | Repo | Description | Verified against |",
  "|---|---|---|---|---|",
  ...tableRows(plugins),
].join("\n")}
`,
  });
  return rel;
}

function featuredSection() {
  const picks = data.plugins.filter((p) => p.featured).sort(byRank);
  if (!picks.length) return "";
  const rows = picks.map((p) =>
    `- **[${p.name}](https://github.com/${p.repo})** — ${p.description} <sub>${starsCell(p)} ★ · ${p.tags?.[0] ?? ""}</sub>`);
  return `## Editor's picks\n\nHand-curated, sparing, and revisited as the ecosystem moves; the ⭐ mark in the tables below means the same thing. Stars are the linked repo's count, which for monorepo entries is the whole repo, not the plugin.\n\n${rows.join("\n")}`;
}

function pluginSections() {
  const plugins = data.plugins.filter((p) => p.category === "plugin");
  const parts = [];
  for (const [id, title, blurb] of TAGS) {
    const rows = plugins.filter((p) => (p.tags?.[0] ?? "untagged") === id);
    if (!rows.length) continue;
    const listFile = rows.length > README_ROWS ? listFor(title, blurb, rows) : null;
    parts.push(`### ${title}\n\n${blurb}\n\n${table(rows, { limit: README_ROWS, listFile })}`);
  }
  const untagged = plugins.filter((p) => !p.tags?.length);
  if (untagged.length) {
    const blurb = "Fresh from the watch, not yet placed in an area.";
    const listFile = untagged.length > README_ROWS ? listFor("Untagged", blurb, untagged) : null;
    parts.push(`### Untagged\n\n${blurb}\n\n${table(untagged, { limit: README_ROWS, listFile })}`);
  }
  return parts.join("\n\n");
}

function categorySections() {
  const parts = [];
  for (const [key, heading, blurb] of CATEGORIES) {
    const plugins = data.plugins.filter((p) => p.category === key);
    if (plugins.length === 0) continue;
    const listFile = plugins.length > README_ROWS ? listFor(heading, blurb, plugins) : null;
    parts.push(`### ${heading}\n\n${blurb}\n\n${table(plugins, { limit: README_ROWS, listFile })}`);
  }
  return parts.join("\n\n");
}

const nPlugins = data.plugins.filter((p) => p.category === "plugin").length;
const toc = [
  "- [Editor's picks](#editors-picks)",
  `- [Plugins by area](#plugins-by-area)`,
  ...TAGS.filter(([id]) => data.plugins.some((p) => p.category === "plugin" && p.tags?.[0] === id))
    .map(([, title]) => `  - [${title}](#${slug(title)})`),
  ...CATEGORIES.filter(([key]) => data.plugins.some((p) => p.category === key))
    .map(([, title]) => `- [${title}](#${slug(title)})`),
  "- [Add your plugin](#add-your-plugin)",
].join("\n");

const readme = `<!-- Rendered by scripts/render.mjs from data/plugins.json. Do not edit by hand: edit the data or the template, then run \`npm run render\`. -->

# awesome-dsh-plugins

[![powered by dsh](${BADGE})](https://github.com/${HARNESS})
[![license: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![browse the reef](https://img.shields.io/badge/browse-the_reef-ff7a59)](${GALLERY})

A spam-filtered, open-data registry of [DeepSeek Harness](https://github.com/${HARNESS}) (\`dsh\`) plugins, bundles, and skills — ${num(data.plugins.length)} entries from ${num(authors)} authors across ${TAGS.length} functional areas, every one carrying the file its install path was proven in and the dsh version it was checked against.

**[Browse the reef](${GALLERY})** — the same registry as a filterable, sortable gallery.

Most awesome lists are prose. This one is data: [\`data/plugins.json\`](data/plugins.json) is the source of truth, this README is rendered from it. Build on the JSON directly:

\`\`\`sh
curl -s ${GALLERY}plugins.json                 # every entry
curl -s ${GALLERY}stats.json                   # just the counts, ~150 bytes
\`\`\`

Each entry carries two orthogonal dimensions: \`category\` is the form factor (bundle, plugin, skill, theme, tool — what dsh docs call things) and \`tags\` is the functional area (what it actually does). \`stars\` is the linked repo's GitHub count (refreshed by \`scripts/stars.mjs\`, display signal only), and \`featured\` marks a hand-curated editor's pick.

## Why a filtered registry

DeepSeek delegates the ecosystem to the community: no first-party marketplace, discovery happens on the [\`dsh-plugin\`](https://github.com/topics/dsh-plugin) GitHub topic. On launch day that topic held 431 repositories. As of ${coverage.measured} it holds ${num(coverage.topics["dsh-plugin"])}, template spam and topic-riders included. A raw topic feed is not a registry; the filter is the value this repo adds.

How much filtering that is, measured on ${coverage.measured}: **${num(coverage.unique)}** repositories carry a dsh discovery topic and **${num(coverage.decided)}** of them — ${pct}% — have been opened, read, and decided. ${num(rejectedRows.length)} were rejected, **${num(noInstallPath)}** of those for having no install path at any depth: no \`dsh\` manifest in \`package.json\`, no dsh dependency, no \`SKILL.md\`. They carry the topic and nothing else. Every rejection is published with its reason and a recheck date in [\`data/rejected.json\`](data/rejected.json).

That is the number worth comparing. A topic count says how many people typed a tag. **${num(coverage.decided)} of ${num(coverage.unique)}** says how many repositories somebody actually opened.

If you prefer a curated prose list, [AdamPlatin123/awesome-dsh-plugins](https://github.com/AdamPlatin123/awesome-dsh-plugins) does that well, with daily compatibility tracking. This repo is the machine-readable complement, not a replacement.

## Why "verified against" is a schema field

dsh is a developer preview and the team promises compatibility-breaking changes. Example: the \`.dsh-plugin\` manifest format was deleted on 2026-08-09 with no migration path, silently stranding every tutorial written against it. A compatibility claim without a version and a date rots, so the schema records both (\`verifiedAgainst\`, \`lastVerified\`) and stale entries get re-checked or flagged.

A version and a date still only say *when* somebody looked. \`evidence\` says *where*, as \`path#key\`:

\`\`\`
"evidence": "package.json#dsh.bundle"
"evidence": "packages/theme/package.json#dependencies.@deepseek-ai/dsh-base"
"evidence": "skills/reviewer/SKILL.md#frontmatter"
\`\`\`

Open the file and check. \`scripts/validate.mjs\` refuses a \`verified\` row that cannot cite one, so the status cannot quietly become decoration — which it had, on 2,751 rows, before this field existed.

## Contents

${toc}

${featuredSection()}

## Plugins by area

${nPlugins} Cordis plugins activated through patch rows in a bundle or profile, grouped by what they do. Data updated ${data.updated}.

Each area shows its ${README_ROWS} most-starred entries and links to the complete list in [\`lists/\`](lists). GitHub stops rendering a markdown file partway through once it passes about half a megabyte — silently, mid-row — so the full tables live in files small enough to survive that. Nothing is dropped: [\`data/plugins.json\`](data/plugins.json) and the [gallery](${GALLERY}) always hold everything.

${pluginSections()}

${categorySections()}

## Add your plugin

Open a PR against [\`data/plugins.json\`](data/plugins.json) only; the README is regenerated. See [CONTRIBUTING.md](CONTRIBUTING.md). The spam gate in short: a real install path (a \`dsh.bundle\` manifest, a published npm package, or a \`SKILL.md\` layout dsh discovers), not a renamed template fork, and it loads against the dsh version you claim. Pick one or two \`tags\` from the schema's list so your entry lands in the right area.

A scheduled workflow also sweeps every dsh discovery topic, npm, and GitHub code search; new finds queue in [\`data/candidates.json\`](data/candidates.json) on a single reused triage PR and never enter the registry without review. Rejected candidates are recorded with one-line reasons in [\`data/rejected.json\`](data/rejected.json). Rejections of judgment ("this is a curated list") are permanent; rejections of fact ("no install path on the day we looked") carry a \`recheckAfter\` date and are swept again once it passes, so shipping a manifest late is not a life sentence.

### Already listed?

Most entries here arrived by sweep, not by PR, so plenty of authors are in the registry without knowing it. Search this README, or:

\`\`\`sh
curl -s ${GALLERY}plugins.json | jq '.plugins[] | select(.repo=="you/your-plugin")'
\`\`\`

If the row is wrong — bad description, wrong tags, a version you have since moved past — the fix is a PR against the data file, and it is the fastest way to correct it.

If you want to say so in your own README, this badge is static — it points here and needs no upkeep:

\`\`\`md
[![listed on dsh.works](https://img.shields.io/badge/listed_on-dsh.works-00c2e9?labelColor=0d0d0d)](${GALLERY})
\`\`\`

It is a link, not a certification: it means your plugin is in an open-data registry that publishes its rejections too, and nothing more.

## Field notes

Verified dsh traps, skill discovery rules, and hook-bridge limits live in [howto-dsh](https://github.com/${cfg.org}/howto-dsh).

## License

MIT. Not affiliated with DeepSeek; the harness README calls itself "an idea, an official showcase, and a source of inspiration", and the ecosystem belongs to the community.
`;

mkdirSync(join(ROOT, "docs"), { recursive: true });
mkdirSync(join(ROOT, "lists"), { recursive: true });
// The hero count is filled in by reef.js at runtime, but a crawler and a chat
// unfurl only ever see the served HTML — so the count in the head has to be
// rendered from the data too, or it freezes at whatever it said the day it was
// typed. Everything between the markers is generated; the rest of the page is
// hand-written.
const escAttr = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const PAGE_TITLE = "awesome-dsh-plugins — the reef";
const PAGE_DESC = `${data.plugins.length} DeepSeek Harness plugins, bundles, and skills as a filterable reef: search, areas, stars, editor's picks. Not affiliated with DeepSeek.`;
const headMeta = [
  `<meta name="description" content="${escAttr(PAGE_DESC)}">`,
  `<link rel="canonical" href="${GALLERY}">`,
  `<meta property="og:type" content="website">`,
  `<meta property="og:site_name" content="${escAttr(cfg.org)}">`,
  `<meta property="og:title" content="${escAttr(PAGE_TITLE)}">`,
  `<meta property="og:description" content="${escAttr(PAGE_DESC)}">`,
  `<meta property="og:url" content="${GALLERY}">`,
  `<meta name="twitter:card" content="summary">`,
  `<meta name="twitter:title" content="${escAttr(PAGE_TITLE)}">`,
  `<meta name="twitter:description" content="${escAttr(PAGE_DESC)}">`,
].map((line) => `  ${line}`).join("\n");

const INDEX_REL = "docs/index.html";
const indexSrc = readFileSync(join(ROOT, INDEX_REL), "utf8");
const MARKERS = /<!-- render:meta -->[\s\S]*?<!-- \/render:meta -->/;
if (!MARKERS.test(indexSrc)) {
  console.error(`render: ${INDEX_REL} is missing the <!-- render:meta --> markers; head cannot be rendered`);
  process.exit(1);
}
const indexBody = indexSrc.replace(MARKERS, `<!-- render:meta -->\n${headMeta}\n  <!-- /render:meta -->`);

// A counts-only file so a page can quote this registry's size without
// pulling the whole 1.6MB of it. dsh.works reads it on load; anything
// else that wants the numbers gets them for ~150 bytes.
const rejected = rejectedRows;
const stats = {
  updated: data.updated,
  plugins: data.plugins.length,
  authors,
  npm: data.plugins.filter((p) => p.npm).length,
  categories: Object.fromEntries(
    [...new Set(data.plugins.map((p) => p.category))]
      .sort()
      .map((c) => [c, data.plugins.filter((p) => p.category === c).length]),
  ),
  tags: TAGS.length,
  rejected: rejected.length,
  rejectedRecheck: rejected.filter((r) => r.recheckAfter).length,
  // The comparable number: how much of the topic was read, not how much of it
  // is listed. `examined` is listed + rejected; `topic` is what the last sweep
  // counted across every dsh discovery topic.
  coverage: {
    measured: coverage.measured,
    topic: coverage.unique,
    decided: coverage.decided,
    rejected: rejected.length,
    noInstallPath,
  },
  verifiedAgainst: data.plugins
    .map((p) => p.verifiedAgainst)
    .filter(Boolean)
    .sort()
    .at(-1) ?? null,
};

const artifacts = [
  { rel: "README.md", body: readme },
  ...lists,
  { rel: INDEX_REL, body: indexBody },
  { rel: "docs/plugins.json", body: `${JSON.stringify(data, null, 2)}\n` },
  // The embed is a build artifact the browser parses before it can paint, not
  // a file anyone reads: pretty-printing it spent a megabyte of a visitor's
  // bandwidth on indentation. docs/plugins.json stays formatted for humans.
  {
    rel: "docs/plugins-embed.js",
    body: `window.__PLUGINS__ = ${JSON.stringify(data)};\nwindow.__COVERAGE__ = ${JSON.stringify(stats.coverage)};\n`,
  },
  { rel: "docs/stats.json", body: `${JSON.stringify(stats, null, 2)}\n` },
];

// A README that GitHub truncates looks complete until you scroll to the cut.
// Fail the render rather than ship one.
const README_LIMIT = 512 * 1024;
if (Buffer.byteLength(readme, "utf8") > README_LIMIT) {
  console.error(`render: README.md is ${Buffer.byteLength(readme, "utf8")} bytes, over GitHub's ~${README_LIMIT} render limit; lower README_ROWS`);
  process.exit(1);
}

if (process.argv.includes("--check")) {
  let bad = false;
  for (const { rel, body } of artifacts) {
    let current = "";
    try { current = readFileSync(join(ROOT, rel), "utf8"); } catch {}
    if (current !== body) {
      console.error(`render: ${rel} is out of sync with data/plugins.json; run \`npm run render\``);
      bad = true;
    }
  }
  if (bad) process.exit(1);
  console.log("render: README.md and docs artifacts are in sync");
} else {
  for (const { rel, body } of artifacts) writeFileSync(join(ROOT, rel), body);
  console.log(`render: wrote README.md + docs artifacts (${data.plugins.length} entries)`);
}
