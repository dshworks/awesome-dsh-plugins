#!/usr/bin/env node
// Scheduled ecosystem discovery. Sweeps three sources for dsh extensions and
// merges new finds into data/candidates.json, the human/agent triage queue.
// Candidates NEVER flow into data/plugins.json automatically. Repos already
// triaged and rejected live in data/rejected.json; a rejection is skipped
// while it is live, and re-queued once its `recheckAfter` date passes.
//
// Sources:
//   1. GitHub repo search across every dsh discovery topic (see TOPICS)
//   2. npm search for packages referencing @deepseek-ai/dsh
//   3. GitHub code search for `.agents/skills` SKILL.md layouts (best effort;
//      the code-search API needs a token and rations heavily)
//
// Topic sweeps are exhaustive, which takes work: GitHub caps search at 1000
// results per query, and `dsh-plugin` passed that on 2026-08-14. The sweep
// slices a topic by creation date, and a single over-cap day by star count,
// until every slice fits, then drains every page of every slice. Reading one
// star-sorted page instead — which this script used to do — is worse than
// partial coverage: it is anchored to the top, so a plugin published an hour
// ago at zero stars is never reachable on any run.
//
// The file is only touched when the candidate set actually changes, so the
// watch workflow's reused PR stays quiet on empty days. Node stdlib only.
//
// Env: GITHUB_TOKEN (optional, raises rate limits and enables code search)

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const TODAY = new Date().toISOString().slice(0, 10);
const TOKEN = process.env.GITHUB_TOKEN ?? "";
// Cap on how many NEW candidates one run may queue. High enough that a normal
// day never hits it; it exists so a topic getting spammed cannot open a
// 3000-row triage PR overnight. When it does bind, the run says so.
const MAX_NEW_PER_RUN = Number(process.env.DISCOVER_MAX_NEW ?? 400);
const SLUG_RE = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;
// Every topic the ecosystem actually uses. `dsh-plugin` is the one dsh's docs
// name; the rest accumulated on their own and hold repos the official topic
// does not.
const TOPICS = ["dsh-plugin", "dsh-plugins", "dsh-theme", "dsh-skill", "dsh-bundle"];
// Sibling registry. Themes carry the dsh-plugin topic like everything else, so
// without this every entry in awesome-dsh-themes re-enters this queue on every
// run, forever — 138 of the first 248 candidates were already listed there.
// Fetched rather than vendored so it cannot go stale; a failed fetch degrades
// to "queue them and let triage catch it", never to a wrong rejection.
const THEMES_REGISTRY = "https://raw.githubusercontent.com/dshworks/awesome-dsh-themes/main/data/themes.json";
const SEARCH_CAP = 1000; // GitHub returns at most this many results per query
const EPOCH = "2020-01-01"; // no dsh repo predates this; keeps the first slice cheap

const read = (rel) => JSON.parse(readFileSync(join(ROOT, rel), "utf8"));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function gh(path) {
  for (let attempt = 0; attempt < 5; attempt++) {
    let res;
    try {
      res = await fetch(`https://api.github.com${path}`, {
        headers: {
          accept: "application/vnd.github+json",
          "user-agent": "awesome-dsh-plugins-watch",
          ...(TOKEN ? { authorization: `Bearer ${TOKEN}` } : {}),
        },
        signal: AbortSignal.timeout(30000),
      });
    } catch (err) {
      await sleep(2000 * (attempt + 1)); // transient socket error, not a verdict
      continue;
    }
    if (res.status === 403 || res.status === 429) {
      // search is 30/min; wait for the window rather than losing the sweep
      const reset = Number(res.headers.get("x-ratelimit-reset") ?? 0) * 1000;
      await sleep(Math.min(Math.max(5000, reset - Date.now() + 2000), 70000));
      continue;
    }
    if (!res.ok) throw new Error(`GitHub ${path}: HTTP ${res.status}`);
    if (Number(res.headers.get("x-ratelimit-remaining") ?? 30) <= 1) await sleep(3000);
    else await sleep(1100);
    return res.json();
  }
  throw new Error(`GitHub ${path}: gave up after retries`);
}

// --- spam gate -------------------------------------------------------------
// STUB: the automated part only rejects the obvious. The real bar, applied by
// a human or agent at triage time before anything reaches plugins.json:
//   1. real install path: a `dsh.bundle` manifest in package.json, a published
//      npm package, or a SKILL.md layout dsh actually discovers
//   2. not a fork of a template with the name swapped (check history, not
//      just the fork flag; template spam is usually generated, not forked)
//   3. loads against the current dsh version, e.g.
//      `dsh --profile <p> --dump-config` succeeds with the package installed
//   4. honest description, no keyword stuffing
function passesSpamGate(c) {
  if (c.fork) return false; // forks of anything are never candidates
  if (c.archived) return false;
  const [owner] = c.repo.split("/");
  if (owner === "deepseek-ai") return false; // first-party, tracked directly
  return true;
}

// --- sources ---------------------------------------------------------------

const asEntry = (r) => ({
  repo: r.full_name, // resolved name, so a rename redirect cannot fork an entry
  source: "github-topic",
  stars: r.stargazers_count,
  description: r.description ?? null,
  fork: r.fork,
  archived: r.archived,
});

async function searchRepos(q, page = 1) {
  return gh(`/search/repositories?q=${encodeURIComponent(q)}&per_page=100&page=${page}&sort=updated&order=desc`);
}

// Drain a query known to be under the cap.
async function drain(q, out) {
  const first = await searchRepos(q, 1);
  first.items.forEach((r) => out.push(asEntry(r)));
  const pages = Math.min(10, Math.ceil(first.total_count / 100));
  for (let p = 2; p <= pages; p++) {
    (await searchRepos(q, p)).items.forEach((r) => out.push(asEntry(r)));
  }
  return first.total_count;
}

const isoDay = (t) => new Date(t).toISOString().slice(0, 10);

// Slice `base` by creation date until every slice fits under SEARCH_CAP; when a
// single day is still over it (2026-08-14 was, at 1666), slice that day by stars.
async function sweepRange(base, lo, hi, out) {
  const q = `${base} ${lo === hi ? `created:${lo}` : `created:${lo}..${hi}`}`;
  const probe = await searchRepos(q, 1);
  const total = probe.total_count;
  if (total === 0) return;

  if (total <= SEARCH_CAP) {
    probe.items.forEach((r) => out.push(asEntry(r)));
    const pages = Math.min(10, Math.ceil(total / 100));
    for (let p = 2; p <= pages; p++) {
      (await searchRepos(q, p)).items.forEach((r) => out.push(asEntry(r)));
    }
    return;
  }

  if (lo !== hi) {
    const mid = isoDay((Date.parse(lo) + Date.parse(hi)) / 2);
    await sweepRange(base, lo, mid, out);
    await sweepRange(base, isoDay(Date.parse(mid) + 86400000), hi, out);
    return;
  }

  for (const stars of ["0", "1", "2", "3", "4..5", "6..10", "11..30", ">30"]) {
    await drain(`${q} stars:${stars}`, out);
  }
}

async function fromTopics() {
  const out = [];
  for (const topic of TOPICS) {
    const base = `topic:${topic}`;
    const probe = await searchRepos(base, 1);
    const total = probe.total_count;
    const before = new Set(out.map((r) => r.repo)).size;
    if (total <= SEARCH_CAP) {
      await drain(base, out);
    } else {
      const tomorrow = isoDay(Date.now() + 86400000);
      await sweepRange(base, EPOCH, tomorrow, out);
    }
    // Coverage, not just yield. A run that reads 50 of 2999 must say so:
    // a saturating instrument and a quieting ecosystem draw the same curve.
    // Counted as unique repos, so overlap between topics is not double-billed.
    const seen = new Set(out.map((r) => r.repo)).size - before;
    console.error(`discover: ${base} -> examined ${seen} new / ${total} in topic`);
  }
  return out;
}

async function fromNpm() {
  const q = encodeURIComponent("@deepseek-ai/dsh");
  const res = await fetch(`https://registry.npmjs.org/-/v1/search?text=${q}&size=50`);
  if (!res.ok) throw new Error(`npm search: HTTP ${res.status}`);
  const data = await res.json();
  const out = [];
  for (const { package: pkg } of data.objects ?? []) {
    if (pkg.name.startsWith("@deepseek-ai/")) continue; // first-party
    const m = (pkg.links?.repository ?? "").match(/github\.com\/([^/]+\/[^/#?]+)/);
    if (!m) continue;
    out.push({
      repo: m[1].replace(/\.git$/, ""),
      npm: pkg.name,
      source: "npm-search",
      description: pkg.description ?? null,
    });
  }
  return out;
}

async function fromCodeSearch() {
  if (!TOKEN) {
    console.error("discover: skipping code search (no GITHUB_TOKEN)");
    return [];
  }
  const q = encodeURIComponent("filename:SKILL.md path:.agents/skills");
  const data = await gh(`/search/code?q=${q}&per_page=30`);
  return data.items.map((i) => ({
    repo: i.repository.full_name,
    source: "code-search",
    fork: i.repository.fork,
    description: i.repository.description ?? null,
  }));
}

// --- merge -----------------------------------------------------------------

const registry = read("data/plugins.json");
const file = read("data/candidates.json");
const rejectedFile = read("data/rejected.json");

const known = new Set(registry.plugins.map((p) => p.repo.toLowerCase()));

// Anything already listed in the themes registry is triaged, just not here.
try {
  const res = await fetch(THEMES_REGISTRY, { signal: AbortSignal.timeout(20000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const themes = await res.json();
  for (const t of themes.themes ?? []) known.add(t.repo.toLowerCase());
  console.error(`discover: excluding ${themes.themes?.length ?? 0} repo(s) already in awesome-dsh-themes`);
} catch (err) {
  console.error(`discover: could not read the themes registry (${err.message}); its entries may re-queue here`);
}
// A rejection carrying `recheckAfter` is a snapshot ("no install path on the
// day we looked"), not a verdict. Once it expires the repo is a candidate
// again — otherwise a project that ships its manifest a week late is buried
// forever and only a human deleting a ledger row can dig it out.
const rejected = new Set(
  rejectedFile.rejected
    .filter((r) => !r.recheckAfter || r.recheckAfter > TODAY)
    .map((r) => r.repo.toLowerCase()));
const expired = rejectedFile.rejected.filter((r) => r.recheckAfter && r.recheckAfter <= TODAY).length;
if (expired) console.error(`discover: ${expired} rejection(s) expired and are eligible again`);
const queue = new Map(file.candidates.map((c) => [c.repo.toLowerCase(), c]));

const found = [];
for (const [name, fn] of [
  ["github-topic", fromTopics],
  ["npm-search", fromNpm],
  ["code-search", fromCodeSearch],
]) {
  try {
    found.push(...(await fn()));
  } catch (err) {
    console.error(`discover: ${name} failed: ${err.message}`);
  }
}

// When the per-run cap binds it must keep the most substantial finds, not
// whichever source happened to run first.
found.sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0));

let added = 0;
let overflow = 0;
for (const c of found) {
  if (!SLUG_RE.test(c.repo ?? "")) continue;
  const slug = c.repo.toLowerCase();
  if (known.has(slug)) continue;
  if (rejected.has(slug)) continue; // triaged and rejected; do not requeue
  const existing = queue.get(slug);
  if (existing) {
    // refresh metadata, union sources, keep the original discovered date
    if (!existing.sources.includes(c.source)) existing.sources.push(c.source);
    if (c.stars !== undefined) existing.stars = c.stars;
    if (c.description) existing.description = c.description.slice(0, 200);
    if (c.npm) existing.npm = c.npm;
    continue;
  }
  if (!passesSpamGate(c)) continue;
  if (added >= MAX_NEW_PER_RUN) { overflow += 1; continue; }
  queue.set(slug, {
    repo: c.repo,
    ...(c.npm ? { npm: c.npm } : {}),
    sources: [c.source],
    ...(c.stars !== undefined ? { stars: c.stars } : {}),
    ...(c.description ? { description: c.description.slice(0, 200) } : {}),
    discovered: TODAY,
  });
  added += 1;
}

const candidates = [...queue.values()].sort((a, b) => a.repo.localeCompare(b.repo));
const next = { updated: file.updated, candidates };

// A cap that truncates quietly reads as "that was everything".
if (overflow) {
  console.error(`discover: ${overflow} find(s) over the ${MAX_NEW_PER_RUN}/run cap were NOT queued; raise DISCOVER_MAX_NEW or run again after triage`);
}

if (JSON.stringify(next.candidates) === JSON.stringify(file.candidates)) {
  console.log(`discover: no changes (${candidates.length} candidates queued)`);
} else {
  next.updated = TODAY;
  writeFileSync(
    join(ROOT, "data/candidates.json"),
    `${JSON.stringify(next, null, 2)}\n`);
  console.log(`discover: ${added} new, ${candidates.length} total candidates${overflow ? `, ${overflow} held back by the cap` : ""}`);
}
