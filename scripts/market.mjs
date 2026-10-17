#!/usr/bin/env node
// Build docs/market/index.json: a plugin market index for dsh's Discover tab.
//
// dsh 0.2.1 added an experimental "Custom plugin markets" bundle. Its Discover
// tab reads one JSON index from a URL the user adds; dsh ships no index of its
// own. Pages serves this file at
//   https://dsh.works/awesome-dsh-plugins/market/index.json
// and that is the URL to give dsh: the github.io address answers with a 301,
// and dsh refuses redirects.
//
// The format is dsh's plugin market index format 1 (deepseek-harness,
// .agents/notes/implemented/feature/2026-10-02-plugin-market-index-format.md).
// The whole index goes through dsh's own validator,
// @deepseek-ai/dsh-plugin-market-index, before anything is written; an index
// it refuses is never written, because dsh rejects a whole index over one bad
// value.
//
// What is listed: registry rows with an `npm` name. That name is one
// npm-check.mjs has proven belongs to the row's repo (the package's
// repository.url names the repo back), so the market never offers a package
// under somebody else's repo. Per row, every published version that
//   - is not deprecated, and
//   - declares `dsh.bundle` with a string or string[] `patch`
// (the reference generator's rule; dsh refuses to install anything else).
// A row with no such version is left out, and so is a row marked `broken`:
// the registry already says it does not work, and a market card is an
// install button.
//
// Per version: `publishTimestamp` is npm's `time[version]`, `source` is
// {type: "npm"} (no registry: dsh asks its configured registries, npmjs by
// default), and `engines.dsh` is the version's own `engines.dsh`, copied
// unchanged, or absent. Absent means "any dsh" to the 0.2.1-rc.2 reader;
// installation still applies dsh's peer gate. We do not synthesise a range
// from @deepseek-ai/dsh* peers the way dsh's reference generator does: a range
// the author never declared would be our claim printed as theirs.
//
// Per plugin: title and description come from the registry row (the curated
// text), repository from the row's verified repo and path; author, homepage,
// and keywords from the highest listed version's manifest, as the reference
// generator reads them. category is the row's first tag (the README area it
// lands in), labels are all its tags, and `stars` is a sort key.
//
// Not in v0:
//   - git-only rows. A git source must pin a 40-hex commit per version, which
//     means reading tags and manifests per repo; the registry has neither.
//   - icons. They live in package tarballs, one download per plugin.
//   - dist-tags. The 0.2.1-rc.2 reader and reference generator ignore them.
//
// A package npm cannot answer for (timeouts, 5xx after retries) keeps its
// entry from the previous index, so a bad npm hour does not empty the market.
//
// Usage:
//   node scripts/market.mjs              build and write docs/market/index.json
//   node scripts/market.mjs --sample 50  check the first 50 npm rows, write nothing
//
// Needs `npm install` once: the validator is dsh's published package.
// Env: none. registry.npmjs.org needs no token.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { parseMarketIndex } from "@deepseek-ai/dsh-plugin-market-index";
import semver from "semver";
import { TAGS } from "./tags.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT_REL = "docs/market/index.json";
const CONCURRENCY = 16;
const ATTEMPTS = 5;

const argv = process.argv.slice(2);
const sampleAt = argv.indexOf("--sample");
const SAMPLE = sampleAt >= 0 ? Number(argv[sampleAt + 1]) : null;
if (SAMPLE !== null && !(SAMPLE > 0)) throw new Error("--sample needs a positive count");

const read = (rel) => JSON.parse(readFileSync(join(ROOT, rel), "utf8"));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const { registry: cfg } = read("package.json");
// Same host rule as render.mjs: the org's own domain, because the github.io
// project URL redirects to it and dsh will not follow.
const SITE = cfg.site ?? `https://${cfg.org}.github.io`;
const INDEX_URL = `${SITE}/${cfg.repo}/${OUT_REL.replace(/^docs\//, "")}`;

const areas = Object.fromEntries(TAGS.map(([id, title]) => [id, { title }]));
const METADATA = {
  categories: areas,
  labels: areas,
  sortKeys: { stars: { title: "GitHub stars", order: "desc" } },
};
const HEAD = {
  format: 1,
  title: cfg.repo,
  description: `dsh bundles published to npm, from the ${cfg.org}/${cfg.repo} registry. Each npm name is checked to name its repository back.`,
  metadata: METADATA,
};

// The validator throws on the first violation, so checking one plugin (or one
// version) at a time is how a single bad value costs that value, not the index.
function refusal(plugin) {
  try {
    parseMarketIndex({ ...HEAD, plugins: [plugin] }, INDEX_URL);
    return null;
  } catch (error) {
    return error.message.replace(/^\$\.plugins\[0\](\.versions\[0\])?/, (_, v) => (v ? "version" : "plugin"));
  }
}

const isObject = (v) => typeof v === "object" && v !== null && !Array.isArray(v);
const text = (v) => (typeof v === "string" && v.trim() !== "" ? v : undefined);

// Reference generator rule (apps/plugin-market-generator/src/packages.ts).
function isBundle(manifest) {
  const bundle = manifest?.dsh?.bundle;
  if (!isObject(bundle)) return false;
  return typeof bundle.patch === "string" || (Array.isArray(bundle.patch) && bundle.patch.every((f) => typeof f === "string"));
}

// npm person: an object's `name`, or the name part of `Name <email> (url)`.
// Contact fields never reach the index, and neither does a "name" that is
// itself an email address.
function authorOf(manifest) {
  const person = isObject(manifest.author) ? manifest.author.name : manifest.author;
  const name = text(typeof person === "string" ? person.replace(/<[^>]*>|\([^)]*\)/g, "").trim() : undefined);
  return name !== undefined && /^\S+@\S+\.\S+$/.test(name) ? undefined : name;
}

function homepageOf(manifest) {
  const homepage = text(manifest.homepage);
  if (homepage === undefined || !URL.canParse(homepage)) return undefined;
  return ["https:", "http:"].includes(new URL(homepage).protocol) ? homepage : undefined;
}

const PATH_SEGMENT = /^[A-Za-z0-9._@+-]+$/;
function repositoryOf(row) {
  const directory = row.path?.replace(/^\.\/|\/$/g, "");
  const valid = directory !== undefined && directory.split("/").every((s) => s !== "." && s !== ".." && PATH_SEGMENT.test(s));
  return { url: `https://github.com/${row.repo}`, ...(valid ? { directory } : {}) };
}

async function packument(name) {
  for (let attempt = 0; attempt < ATTEMPTS; attempt++) {
    let wait = 1000 * 2 ** attempt;
    try {
      const res = await fetch(`https://registry.npmjs.org/${name}`, {
        headers: { "user-agent": "awesome-dsh-plugins-market", accept: "application/json" },
        signal: AbortSignal.timeout(30000),
      });
      if (res.status === 404) return { state: "missing" };
      if (res.ok) return { state: "published", doc: await res.json() };
      if (res.status !== 429 && res.status < 500) return { state: "unknown", why: `HTTP ${res.status}` };
      const retryAfter = Number(res.headers.get("retry-after"));
      if (retryAfter > 0) wait = Math.max(wait, retryAfter * 1000);
    } catch {
      // Network error or timeout: retry like a 5xx.
    }
    if (attempt < ATTEMPTS - 1) await sleep(wait + Math.random() * 500);
  }
  return { state: "unknown", why: `no answer after ${ATTEMPTS} attempts` };
}

const tally = (map, key, n = 1) => map.set(key, (map.get(key) ?? 0) + n);

// One row -> { plugin } or { skip: reason }, with per-version skip reasons.
async function entryFor(row, versionSkips) {
  if (row.status === "broken") return { skip: "row status is broken" };
  const answer = await packument(row.npm);
  if (answer.state === "missing") return { skip: "npm answers 404" };
  if (answer.state === "unknown") return { unknown: answer.why };
  const doc = answer.doc;
  if (doc.name !== row.npm) return { skip: "packument name differs from the row" };
  if (!isObject(doc.versions) || Object.keys(doc.versions).length === 0) return { skip: "every version unpublished" };

  const versions = [];
  let bundles = 0;
  for (const [version, manifest] of Object.entries(doc.versions)) {
    if (!isBundle(manifest)) continue;
    bundles++;
    if (text(manifest.deprecated) !== undefined) {
      tally(versionSkips, "deprecated");
      continue;
    }
    const published = Date.parse(doc.time?.[version]);
    if (!Number.isFinite(published)) {
      tally(versionSkips, "no publish time in npm `time`");
      continue;
    }
    if (semver.valid(version) !== version) {
      tally(versionSkips, "not a canonical SemVer version");
      continue;
    }
    const declared = isObject(manifest.engines) && Object.hasOwn(manifest.engines, "dsh") ? manifest.engines.dsh : undefined;
    const entry = {
      version,
      publishTimestamp: Math.floor(published / 1000),
      source: { type: "npm" },
      ...(declared === undefined ? {} : { engines: { dsh: declared } }),
    };
    const why = refusal({ name: row.npm, versions: [entry] });
    if (why) {
      tally(versionSkips, `validator: ${why}`);
      continue;
    }
    versions.push(entry);
  }
  if (bundles === 0) return { skip: "no published version declares dsh.bundle" };
  if (versions.length === 0) return { skip: "every dsh.bundle version is deprecated or refused" };

  // rsort keeps npm's order for ties, as the format asks.
  const order = semver.rsort(versions.map((v) => v.version));
  const byVersion = new Map(versions.map((v) => [v.version, v]));
  const top = doc.versions[order[0]];
  const author = authorOf(top);
  const homepage = homepageOf(top);
  const keywords = Array.isArray(top.keywords) && top.keywords.every((k) => typeof k === "string") ? top.keywords : undefined;
  const plugin = {
    name: row.npm,
    title: row.name,
    description: row.description,
    ...(author === undefined ? {} : { author }),
    ...(homepage === undefined ? {} : { homepage }),
    repository: repositoryOf(row),
    metadata: {
      // tags are optional in the schema; every row carries them today.
      ...(row.tags?.length ? { category: row.tags[0], labels: row.tags } : {}),
      ...(keywords === undefined ? {} : { keywords }),
      ...(Number.isFinite(row.stars) ? { sortKeys: { stars: row.stars } } : {}),
    },
    versions: order.map((v) => byVersion.get(v)),
  };
  const why = refusal(plugin);
  return why ? { skip: `validator refused the entry: ${why}` } : { plugin };
}

async function mapLimited(items, limit, work) {
  const results = new Array(items.length);
  let next = 0;
  let done = 0;
  const worker = async () => {
    while (next < items.length) {
      const i = next++;
      results[i] = await work(items[i]);
      if (++done % 500 === 0) console.error(`market: ${done}/${items.length} packages read`);
    }
  };
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

const data = read("data/plugins.json");
// Default order: editor's picks, then stars, then name, so the index only
// changes when the data does.
const rows = data.plugins
  .filter((p) => p.npm)
  .sort((a, b) => Number(!!b.featured) - Number(!!a.featured) || (b.stars ?? 0) - (a.stars ?? 0) || a.name.localeCompare(b.name))
  .slice(0, SAMPLE ?? undefined);
const previous = existsSync(join(ROOT, OUT_REL))
  ? new Map(read(OUT_REL).plugins.map((p) => [p.name, p]))
  : new Map();

const versionSkips = new Map();
const results = await mapLimited(rows, CONCURRENCY, (row) => entryFor(row, versionSkips));

const plugins = [];
const pluginSkips = new Map();
let kept = 0;
results.forEach((result, i) => {
  if (result.plugin) plugins.push(result.plugin);
  else if (result.unknown !== undefined && previous.has(rows[i].npm)) {
    plugins.push(previous.get(rows[i].npm));
    kept++;
  } else tally(pluginSkips, result.skip ?? `npm unreachable (${result.unknown}), not in the last index`);
});

const index = { ...HEAD, plugins };
// The acceptance bar: dsh's own reader logic over the exact bytes we publish.
const body = `${JSON.stringify(index, null, 2)}\n`;
parseMarketIndex(JSON.parse(body), INDEX_URL);

const nVersions = plugins.reduce((n, p) => n + p.versions.length, 0);
const nEngines = plugins.reduce((n, p) => n + p.versions.filter((v) => v.engines?.dsh !== undefined).length, 0);
const nGitOnly = data.plugins.length - data.plugins.filter((p) => p.npm).length;
console.log(`market: ${plugins.length} plugins, ${nVersions} versions (${nEngines} declare engines.dsh), from ${rows.length} npm rows`);
if (kept) console.log(`market: ${kept} kept from the last index (npm did not answer)`);
for (const [why, n] of [...pluginSkips].sort((a, b) => b[1] - a[1])) console.log(`market: skipped ${n} rows: ${why}`);
for (const [why, n] of [...versionSkips].sort((a, b) => b[1] - a[1])) console.log(`market: skipped ${n} bundle versions: ${why}`);
if (SAMPLE === null) console.log(`market: ${nGitOnly} git-only rows not listed (v0 lists npm sources only)`);
console.log(`market: validator accepts the index (${(Buffer.byteLength(body) / 1024 / 1024).toFixed(2)} MiB) for ${INDEX_URL}`);

if (SAMPLE === null) {
  mkdirSync(join(ROOT, dirname(OUT_REL)), { recursive: true });
  writeFileSync(join(ROOT, OUT_REL), body);
  console.log(`market: wrote ${OUT_REL}`);
}
