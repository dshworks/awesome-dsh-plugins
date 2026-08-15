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

const HARNESS = "deepseek-ai/deepseek-harness";
const BADGE = "https://img.shields.io/badge/powered__by-dsh-4D6BFE?logo=deepseek";
const GALLERY = `https://${cfg.org}.github.io/${cfg.repo}/`;

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

A spam-filtered, open-data registry of [DeepSeek Harness](https://github.com/${HARNESS}) (\`dsh\`) plugins, bundles, and skills — ${data.plugins.length} entries across ${TAGS.length} functional areas, every one stating the dsh version it was last verified against.

**[Browse the reef](${GALLERY})** — the same registry as a filterable, sortable gallery.

Most awesome lists are prose. This one is data: [\`data/plugins.json\`](data/plugins.json) is the source of truth, this README is rendered from it. Build on the JSON directly:

\`\`\`sh
curl -s https://raw.githubusercontent.com/${cfg.org}/${cfg.repo}/main/data/plugins.json
\`\`\`

Each entry carries two orthogonal dimensions: \`category\` is the form factor (bundle, plugin, skill, theme, tool — what dsh docs call things) and \`tags\` is the functional area (what it actually does). \`stars\` is the linked repo's GitHub count (refreshed by \`scripts/stars.mjs\`, display signal only), and \`featured\` marks a hand-curated editor's pick.

## Why a filtered registry

DeepSeek delegates the ecosystem to the community: no first-party marketplace, discovery happens on the [\`dsh-plugin\`](https://github.com/topics/dsh-plugin) GitHub topic. On launch day that topic held 431 repositories. Two days later it holds 2,999, template spam and topic-riders included, and 1,666 of them were created in a single day. A raw topic feed is not a registry; the filter is the value this repo adds.

How much filtering that is, measured: the 2026-08-15 sweep examined 2,382 topic repositories not already in the registry and found no dsh install path at all in 964 of them — no \`dsh\` manifest in \`package.json\`, no dsh dependency, no \`SKILL.md\`. Those repositories carry the topic and nothing else.

If you prefer a curated prose list, [AdamPlatin123/awesome-dsh-plugins](https://github.com/AdamPlatin123/awesome-dsh-plugins) does that well, with daily compatibility tracking. This repo is the machine-readable complement, not a replacement.

## Why "verified against" is a schema field

dsh is a developer preview and the team promises compatibility-breaking changes. Example: the \`.dsh-plugin\` manifest format was deleted on 2026-08-09 with no migration path, silently stranding every tutorial written against it. A compatibility claim without a version and a date rots, so the schema records both (\`verifiedAgainst\`, \`lastVerified\`) and stale entries get re-checked or flagged.

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

## Field notes

Verified dsh traps, skill discovery rules, and hook-bridge limits live in [howto-dsh](https://github.com/${cfg.org}/howto-dsh).

## License

MIT. Not affiliated with DeepSeek; the harness README calls itself "an idea, an official showcase, and a source of inspiration", and the ecosystem belongs to the community.
`;

mkdirSync(join(ROOT, "docs"), { recursive: true });
mkdirSync(join(ROOT, "lists"), { recursive: true });
const artifacts = [
  { rel: "README.md", body: readme },
  ...lists,
  { rel: "docs/plugins.json", body: `${JSON.stringify(data, null, 2)}\n` },
  { rel: "docs/plugins-embed.js", body: `window.__PLUGINS__ = ${JSON.stringify(data, null, 2)};\n` },
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
