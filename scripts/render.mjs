#!/usr/bin/env node
// Render README.md from data/plugins.json. The data is the source of truth;
// the README is a build artifact. Prose lives in the template below, the org
// and repo names come from package.json "registry" so they are defined in
// exactly one place. Node stdlib only.
//
// Usage: node scripts/render.mjs [--check]
//   --check  exit 1 if README.md is out of sync with the data (for CI)

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => JSON.parse(readFileSync(join(ROOT, rel), "utf8"));

const { registry: cfg } = read("package.json");
const data = read("data/plugins.json");

const HARNESS = "deepseek-ai/deepseek-harness";
const BADGE = "https://img.shields.io/badge/powered__by-dsh-4D6BFE?logo=deepseek";

const CATEGORIES = [
  ["bundle", "Bundles", "npm packages with a `dsh.bundle` manifest: composition layers a profile boots from."],
  ["plugin", "Plugins", "Cordis plugins activated through patch rows in a bundle or profile."],
  ["skill", "Skills", "Anthropic-format `SKILL.md` units; dsh discovers them from its skill roots (no nested discovery, kebab-case names only)."],
  ["theme", "Themes", "UI skins. Note: third-party theme ids do not yet persist to settings; most skins ship as plugins instead."],
  ["tool", "Tools", "Developer tooling around dsh."],
];

const esc = (s) => s.replaceAll("|", "\\|");

function repoCell(p) {
  const url = p.path
    ? `https://github.com/${p.repo}/tree/HEAD/${p.path}`
    : `https://github.com/${p.repo}`;
  return `[${p.repo}](${url})`;
}

function npmCell(p) {
  return p.npm ? `[\`${p.npm}\`](https://www.npmjs.com/package/${p.npm})` : "-";
}

function verifiedCell(p) {
  if (p.status === "verified") return `${p.verifiedAgainst} (${p.lastVerified})`;
  if (p.status === "broken") return `broken against ${p.verifiedAgainst}`;
  return "unverified";
}

function table(plugins) {
  const rows = plugins
    .slice()
    .sort((a, b) => Number(b.official ?? false) - Number(a.official ?? false) || a.name.localeCompare(b.name))
    .map((p) =>
      `| ${esc(p.name)}${p.official ? " (official)" : ""} | ${repoCell(p)} | ${npmCell(p)} | ${esc(p.description)} | ${verifiedCell(p)} |`);
  return [
    "| Name | Repo | npm | Description | Verified against |",
    "|---|---|---|---|---|",
    ...rows,
  ].join("\n");
}

function registrySection() {
  const parts = [];
  for (const [key, heading, blurb] of CATEGORIES) {
    const plugins = data.plugins.filter((p) => p.category === key);
    if (plugins.length === 0) continue;
    parts.push(`### ${heading}\n\n${blurb}\n\n${table(plugins)}`);
  }
  return parts.join("\n\n");
}

const readme = `<!-- Rendered by scripts/render.mjs from data/plugins.json. Do not edit by hand: edit the data or the template, then run \`npm run render\`. -->

# awesome-dsh-plugins

[![powered by dsh](${BADGE})](https://github.com/${HARNESS})
[![license: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)

A spam-filtered, open-data registry of [DeepSeek Harness](https://github.com/${HARNESS}) (\`dsh\`) plugins, bundles, and skills.

Most awesome lists are prose. This one is data: [\`data/plugins.json\`](data/plugins.json) is the source of truth, this README is rendered from it, and every entry states an install path and the dsh version it was last verified against. Build on the JSON directly:

\`\`\`sh
curl -s https://raw.githubusercontent.com/${cfg.org}/${cfg.repo}/main/data/plugins.json
\`\`\`

## Why a filtered registry

DeepSeek delegates the ecosystem to the community: no first-party marketplace, discovery happens on the [\`dsh-plugin\`](https://github.com/topics/dsh-plugin) GitHub topic. On launch day that topic already held 431 repositories, template forks and topic-riders included. A raw topic feed is not a registry; the filter is the value this repo adds.

If you prefer a curated prose list, [AdamPlatin123/awesome-dsh-plugins](https://github.com/AdamPlatin123/awesome-dsh-plugins) does that well, with daily compatibility tracking. This repo is the machine-readable complement, not a replacement.

## Why "verified against" is a schema field

dsh is a developer preview and the team promises compatibility-breaking changes. Example: the \`.dsh-plugin\` manifest format was deleted on 2026-08-09 with no migration path, silently stranding every tutorial written against it. A compatibility claim without a version and a date rots, so the schema records both (\`verifiedAgainst\`, \`lastVerified\`) and stale entries get re-checked or flagged.

## Registry

${data.plugins.length} entries. Data updated ${data.updated}.

${registrySection()}

## Add your plugin

Open a PR against [\`data/plugins.json\`](data/plugins.json) only; the README is regenerated. See [CONTRIBUTING.md](CONTRIBUTING.md). The spam gate in short: a real install path (a \`dsh.bundle\` manifest, a published npm package, or a \`SKILL.md\` layout dsh discovers), not a renamed template fork, and it loads against the dsh version you claim.

A scheduled workflow also sweeps the \`dsh-plugin\` topic, npm, and GitHub code search; new finds queue in [\`data/candidates.json\`](data/candidates.json) on a single reused triage PR and never enter the registry without review. Rejected candidates are recorded with one-line reasons in [\`data/rejected.json\`](data/rejected.json) and are not re-queued.

## Field notes

Verified dsh traps, skill discovery rules, and hook-bridge limits live in [howto-dsh](https://github.com/${cfg.org}/howto-dsh).

## License

MIT. Not affiliated with DeepSeek; the harness README calls itself "an idea, an official showcase, and a source of inspiration", and the ecosystem belongs to the community.
`;

const target = join(ROOT, "README.md");
if (process.argv.includes("--check")) {
  let current = "";
  try {
    current = readFileSync(target, "utf8");
  } catch {}
  if (current !== readme) {
    console.error("render: README.md is out of sync with data/plugins.json; run `npm run render`");
    process.exit(1);
  }
  console.log("render: README.md is in sync");
} else {
  writeFileSync(target, readme);
  console.log(`render: wrote README.md (${data.plugins.length} entries)`);
}
