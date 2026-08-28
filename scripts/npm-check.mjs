#!/usr/bin/env node
// Stage 3. discover.mjs finds repos, triage.mjs decides them, this one checks
// the single field in an entry that is an instruction rather than a fact.
//
// `npm` renders as `npm i <name>`. On 2026-08-21 that command failed for 298
// of the registry's 582 npm fields — 51% — and every one of them had been
// added on 2026-08-14, the bulk pass that predates a committed triage script.
// The method that day read `name` out of the repo's package.json, which is the
// name an author would publish under, not evidence they did. Nothing after
// that date is wrong, because the committed pipeline only takes `npm` from an
// npm search hit, and a search hit is a published package by construction.
//
// So this is not a live bug; it is 298 rows of debris from before the rules,
// and it is the same sin the registry accuses others of. `status: verified`
// with no evidence was decoration. `npm i` for a package that 404s is worse:
// decoration a reader can run.
//
// Existing is not the same as belonging, and the second failure is worse. The
// 2026-08-14 names were checked against npm's *catalogue*: `dsh-tool-git`
// resolves, so the field stayed. It resolves to `lxj808624/dsh-tool-git`, and
// it was sitting on `Huasfan/dsh-tool-git` — a reader following that entry
// installs a different author's code under the name of the repo they were
// reading about. 26 pairs of entries claimed the same package as each other;
// in 25 of them the wrong claimant was the 2026-08-14 row.
//
// So a name is only kept when the published package's own `repository.url`
// names the repo back. That is the same rule triage.mjs uses to refuse a
// vendored @deepseek-ai/* package as proof: the artifact has to say whose it
// is, and we have to read that line.
//
// A name that fails either test is moved to data/unpublished.json rather than
// deleted, with the reason it failed, because an author who has not published
// yet may publish next week and the name is how we would notice. That file is
// the restore path, so a later run puts the field back rather than waiting to
// rediscover it.
//
// The field also under-claims. `dsh-reference-anything` publishes under that
// exact name, from that exact repo, and carried no `npm` field — because the
// field only ever arrived from an npm-search hit, and search is not
// exhaustive. `--adopt` closes that direction: it reads each entry's own
// package.json `name`, asks npm, and adds the field only when the published
// package's `repository.url` names the same repo back. That match is what
// makes it a fact rather than a guess — it is the same rule that refuses a
// vendored @deepseek-ai/* package as proof in triage.mjs. It is off by default
// because it costs one raw fetch per entry, and the scheduled job runs 4x/day.
//
// Usage:
//   node scripts/npm-check.mjs             verify every npm field, both ways
//   node scripts/npm-check.mjs --adopt     also adopt names entries have earned
//   node scripts/npm-check.mjs --adopt --added-since 2026-08-21
//                                          adopt over one day's admissions only
//   node scripts/npm-check.mjs --dry-run   report, write nothing
//   node scripts/npm-check.mjs --limit 50  stop after 50 packages
//
// Env: none. registry.npmjs.org needs no token.

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const TODAY = new Date().toISOString().slice(0, 10);

const argv = process.argv.slice(2);
const has = (flag) => argv.includes(flag);
const opt = (flag, fallback) => {
  const i = argv.indexOf(flag);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : fallback;
};
const DRY = has("--dry-run");
const ADOPT = has("--adopt");
// Adoption reads one manifest per entry, so a full pass is ~7k fetches. Over a
// whole registry that is a once-in-a-while job; over the day's admissions it is
// seconds, which is what makes it something a scheduled run can afford.
const ADDED_SINCE = opt("--added-since", null);
const LIMIT = Number(opt("--limit", Infinity));
const CONCURRENCY = 10;

const read = (rel) => JSON.parse(readFileSync(join(ROOT, rel), "utf8"));

// Same order triage.mjs writes, so adding a field to an entry shows up as one
// added line rather than as the serializer shuffling fifteen. Unknown keys keep
// their value and land at the end — a reorderer that drops what it does not
// recognise is a data-loss bug waiting for the next schema field.
const KEY_ORDER = ["name", "repo", "path", "description", "category", "official", "featured", "added",
  "lastVerified", "verifiedAgainst", "status", "evidence", "npm", "stars", "starsUpdated", "tags", "pushedAt"];
const ordered = (o) => {
  const rest = Object.keys(o).filter((k) => !KEY_ORDER.includes(k));
  return Object.fromEntries(
    [...KEY_ORDER, ...rest].filter((k) => o[k] !== undefined).map((k) => [k, o[k]]));
};
const write = (rel, data) =>
  writeFileSync(join(ROOT, rel), `${JSON.stringify(data, null, 2)}\n`);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// A scoped name keeps its `@` and its `/`; encodeURIComponent would turn the
// slash into %2F, which the registry also accepts — but the unencoded form is
// what `npm i` sends, and matching npm exactly is the whole point of this file.
const url = (name) => `https://registry.npmjs.org/${name}`;

const normalizeRepo = (value) => {
  if (!value) return null;
  const raw = typeof value === "string" ? value : value.url;
  if (typeof raw !== "string") return null;
  const m = raw.match(/github\.com[/:]([^/]+)\/([^/#]+?)(?:\.git)?(?:[/#].*)?$/i);
  return m ? `${m[1]}/${m[2]}`.toLowerCase() : null;
};

// Full packument, because adoption needs `repository`, which the abbreviated
// install-v1 document omits. Only called on the adopt path.
async function packument(name) {
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const res = await fetch(url(name), {
        headers: { "user-agent": "awesome-dsh-plugins-npm-check" },
        signal: AbortSignal.timeout(20000),
      });
      if (res.status === 404) return { state: "missing" };
      if (res.ok) return { state: "published", doc: await res.json() };
      if (res.status === 429 || res.status >= 500) {
        await sleep(1500 * (attempt + 1));
        continue;
      }
      return { state: "unknown" };
    } catch {
      await sleep(800 * (attempt + 1));
    }
  }
  return { state: "unknown" };
}

// Four states, and the last one matters most. A 404 and a foreign owner are
// both answers. A timeout is not, and treating it as one would strip a live
// package off an entry because the network hiccuped — the same failure that let
// `--prove` erase 59 rows of confirmed-dead markings in one run. `unknown`
// means leave everything exactly as it is.
//
// A package that states no `repository` at all is the awkward case, and
// stripping it would be the wrong kind of strict: plenty of small honest
// packages simply never set the field, and npm not saying who owns something
// is not npm saying somebody else does. For those we ask the other side —
// if the repo's own package.json declares this exact name, then the repo
// claims the package and npm does not contradict it, which is two independent
// files agreeing. Nothing else is enough.
async function check(name, repo, path) {
  const { state, doc } = await packument(name);
  if (state !== "published") return { state };
  const latest = doc?.["dist-tags"]?.latest;
  const claims = normalizeRepo(doc?.repository ?? doc?.versions?.[latest]?.repository);
  if (claims === repo.toLowerCase()) return { state: "published" };
  if (claims !== null) return { state: "foreign", owner: claims };

  const manifest = await raw(repo, path ? `${path}/package.json` : "package.json");
  let declared;
  try {
    declared = manifest ? JSON.parse(manifest).name : undefined;
  } catch {
    declared = undefined;
  }
  if (declared === name) return { state: "published" };
  return { state: "foreign", owner: "nobody — the package states no repository and the repo does not claim the name" };
}

async function raw(repo, path) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(`https://raw.githubusercontent.com/${repo}/HEAD/${path}`, {
        headers: { "user-agent": "awesome-dsh-plugins-npm-check" },
        signal: AbortSignal.timeout(15000),
      });
      if (res.status === 404) return null;
      if (res.status === 429 || res.status >= 500) {
        await sleep(1500 * (attempt + 1));
        continue;
      }
      if (!res.ok) return null;
      return await res.text();
    } catch {
      await sleep(800 * (attempt + 1));
    }
  }
  return null;
}

async function pooled(items, worker) {
  const out = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(CONCURRENCY, items.length) }, async () => {
      while (true) {
        const i = next++;
        if (i >= items.length) return;
        out[i] = await worker(items[i], i);
      }
    }),
  );
  return out;
}

const registry = read("data/plugins.json");
let unpublishedFile;
try {
  unpublishedFile = read("data/unpublished.json");
} catch {
  unpublishedFile = {
    _comment: [
      "npm names an entry claimed that registry.npmjs.org does not serve.",
      "Kept rather than deleted: the name is how we notice the author publishing later.",
      "scripts/npm-check.mjs restores the field to plugins.json when one resolves.",
    ],
    checked: TODAY,
    method: "GET registry.npmjs.org/<name>; 404 is missing, timeout is unknown and changes nothing",
    count: 0,
    packages: [],
  };
}

// Both directions in one pass. Checking only the listed names would never
// notice a package coming back, and checking only the parked ones would never
// notice one going away — an author can unpublish inside npm's 72-hour window
// and has.
const listed = registry.plugins
  .filter((p) => p.npm)
  .map((p) => ({ repo: p.repo, path: p.path ?? "", npm: p.npm, from: "registry" }));
const parked = (unpublishedFile.packages ?? [])
  .map((p) => ({ repo: p.repo, path: p.path ?? "", npm: p.npm, from: "unpublished", since: p.since }));
const work = [...listed, ...parked].slice(0, LIMIT);

console.error(`npm-check: ${listed.length} listed + ${parked.length} parked = ${work.length} name(s)`);

let done = 0;
const results = await pooled(work, async (row) => {
  const verdict = await check(row.npm, row.repo, row.path);
  if (++done % 100 === 0) console.error(`npm-check: ${done}/${work.length}`);
  return { ...row, ...verdict };
});

// --- adopt: entries that have earned an npm name and do not carry one -------
// Keyed by entry, not by name: a name parked against one repo is silent about
// every other repo, and several of these names have a rightful owner listed
// elsewhere in the registry.
const parkedHere = new Set(
  (unpublishedFile.packages ?? []).map((p) => `${p.repo}#${p.path ?? ""}#${p.npm}`));
const adopted = [];
let adoptSkipped = 0;
if (ADOPT) {
  const naked = registry.plugins
    .filter((p) => !p.npm && !p.official)
    .filter((p) => !ADDED_SINCE || (p.added ?? "") >= ADDED_SINCE)
    .slice(0, LIMIT === Infinity ? undefined : LIMIT);
  console.error(`npm-check: --adopt, reading ${naked.length} entr(ies) with no npm name`);
  let seen = 0;
  await pooled(naked, async (p) => {
    if (++seen % 500 === 0) console.error(`npm-check: adopt ${seen}/${naked.length}`);
    const path = p.path ? `${p.path}/package.json` : "package.json";
    const text = await raw(p.repo, path);
    if (!text) return;
    let name;
    try {
      name = JSON.parse(text).name;
    } catch {
      return;
    }
    if (typeof name !== "string" || !name) return;
    if (parkedHere.has(`${p.repo}#${p.path ?? ""}#${name}`)) return;
    // The name resolving is not enough. Anyone can publish `dsh-explorer`;
    // only the author of this repo can publish one whose own metadata points
    // back at this repo. On the first full run 1,462 names resolved to someone
    // else's package — more than a third of everything the adopt pass looked
    // at — so this branch is the difference between a field and a guess.
    const { state, owner } = await check(name, p.repo, p.path);
    if (state !== "published") {
      if (state === "foreign") adoptSkipped++;
      return;
    }
    adopted.push({ repo: p.repo, path: p.path ?? "", npm: name });
  });
}

const strip = results.filter(
  (r) => r.from === "registry" && (r.state === "missing" || r.state === "foreign"));
const restore = results.filter((r) => r.from === "unpublished" && r.state === "published");
const unknown = results.filter((r) => r.state === "unknown");

const key = (r) => `${r.repo}#${r.path}`;
const stripKeys = new Set(strip.map(key));
const restoreBy = new Map([
  ...restore.map((r) => [key(r), r.npm]),
  ...adopted.map((r) => [key(r), r.npm]),
]);

const nextPlugins = registry.plugins.map((p) => {
  const k = `${p.repo}#${p.path ?? ""}`;
  if (stripKeys.has(k)) {
    const { npm, ...rest } = p;
    return rest;
  }
  if (restoreBy.has(k) && !p.npm) return ordered({ ...p, npm: restoreBy.get(k) });
  return p;
});

// Filter on what was actually restored, not on restoreBy — that map also
// carries adoptions, and an adoption is a *different* name for the same entry.
// Dropping the parked row on an adoption would erase the record of a name that
// still does not exist.
const restoredKeys = new Set(restore.map(key));
// One last reconciliation, and it can only ever fire on the weaker branch.
// A name backed by the package's own `repository.url` matches exactly one repo
// by construction, so any name left on two entries got there through the
// two-sided-declaration fallback — which means two repos declare it and npm
// states no repository, so *neither* of them has shown it is theirs.
// `dsh-memory` is declared by `lifensame/dsh-plugin` and `BayInl/dsh-memory`;
// npm names no repo and the maintainer is a third account. Picking one would
// be a coin flip published as a fact, so both are parked.
const claimants = new Map();
for (const p of nextPlugins) {
  if (p.npm) claimants.set(p.npm, (claimants.get(p.npm) ?? 0) + 1);
}
const contested = nextPlugins.filter((p) => p.npm && claimants.get(p.npm) > 1);
for (const p of contested) {
  strip.push({
    repo: p.repo, path: p.path ?? "", npm: p.npm,
    state: "contested", claimants: claimants.get(p.npm),
  });
}
const contestedKeys = new Set(contested.map((p) => `${p.repo}#${p.path ?? ""}`));
if (contested.length) {
  console.error(`npm-check: ${contested.length} entr(ies) parked for claiming a name another entry also declares`);
}

// `since` answers "how long has this name been unavailable", so it may only be
// stamped the first time an entry is parked for a given reason. A contested
// entry goes round this loop on every run -- it is parked, the next run finds
// its package resolvable and restores it, the contested check re-parks it --
// and stamping TODAY each lap made four names that have been contested for
// days read as discovered this morning. Nothing failed; the field just stopped
// measuring anything.
const priorSince = new Map(
  (unpublishedFile.packages ?? []).map((p) => [`${p.repo}#${p.path ?? ""}#${p.npm}#${p.why}`, p.since]),
);

const stillParked = [
  ...(unpublishedFile.packages ?? []).filter((p) => !restoredKeys.has(`${p.repo}#${p.path ?? ""}`)),
  ...strip.map((r) => {
    const why = r.state === "missing" ? "no such package"
      : r.state === "contested" ? `${r.claimants} listed repos declare this name and the package states no repository`
        : `published by ${r.owner}`;
    return {
      repo: r.repo,
      ...(r.path ? { path: r.path } : {}),
      npm: r.npm,
      why,
      since: priorSince.get(`${r.repo}#${r.path ?? ""}#${r.npm}#${why}`) ?? TODAY,
    };
  }),
].sort((a, b) => a.npm.localeCompare(b.npm));

const count = (state) => strip.filter((r) => r.state === state).length;
console.error(
  `npm-check: ${results.filter((r) => r.state === "published").length} kept, ` +
  `${count("missing")} stripped (no such package), ` +
  `${count("foreign")} stripped (published by someone else), ` +
  `${count("contested")} stripped (contested), ` +
  `${restore.length} restored, ${adopted.length} adopted, ${unknown.length} unknown (left alone)`,
);
for (const r of strip.filter((r) => r.state === "foreign").slice(0, 15)) {
  console.error(`npm-check: ${r.repo} claimed ${r.npm} — published by ${r.owner}`);
}
if (adoptSkipped) {
  console.error(`npm-check: ${adoptSkipped} name(s) resolve to another repo's package; not adopted`);
}
for (const r of restore) console.error(`npm-check: restored ${r.npm} -> ${r.repo}`);
if (unknown.length) {
  for (const r of unknown.slice(0, 10)) console.error(`npm-check: unknown ${r.npm}`);
  if (unknown.length > 10) console.error(`npm-check: ...and ${unknown.length - 10} more`);
}

if (DRY) {
  console.error("npm-check: --dry-run, nothing written");
  process.exit(0);
}
if (!strip.length && !restore.length && !adopted.length) {
  // Touching the files anyway would rewrite `checked` on a no-op day and make
  // the watch workflow's reused PR noisy, which is what stops people reading it.
  console.error("npm-check: nothing changed");
  process.exit(0);
}

const finalPlugins = nextPlugins.map((p) => {
  if (!contestedKeys.has(`${p.repo}#${p.path ?? ""}`)) return p;
  const { npm, ...rest } = p;
  return rest;
});

write("data/plugins.json", {
  ...registry,
  updated: TODAY,
  // Rebuilt rather than mutated in place: `nextPlugins` shares object identity
  // with `registry.plugins` for every untouched row.
  plugins: finalPlugins,
});
if (strip.length || restore.length) write("data/unpublished.json", {
  ...unpublishedFile,
  checked: TODAY,
  count: stillParked.length,
  packages: stillParked,
});
console.error(`npm-check: ${listed.length} -> ${finalPlugins.filter((p) => p.npm).length} entries carry an npm name`);
