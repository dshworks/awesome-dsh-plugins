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
//   4. data/seeds.json — repos hand-fed because no search can reach them
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
//
// The `dsh-*` five were the whole list until 2026-08-20, and that made the
// repo's own coverage claim narrower than it read: "carries a dsh discovery
// topic" meant "carries one of ours". Authors who spell the project out
// instead of abbreviating it were invisible. Measured on 2026-08-20, in
// repos carrying NONE of the original five:
//
//   topic:deepseek-harness          892
//   topic:dsh                       163
//   topic:deepseek-harness-plugin     3
//   ------------------------------------
//   1,058 repositories, ~13% of the real universe, never swept
//
// `dsh` is the noisy one — it also means distributed shell — but 163 is a
// small enough queue for triage to prove or reject one at a time, and the
// alternative is dropping every author who tagged the harness by its short
// name. Re-measure before removing any of these; a topic that goes quiet and
// a topic nobody sweeps produce the same zero.
const TOPICS = [
  "dsh-plugin",
  "dsh-plugins",
  "dsh-theme",
  "dsh-skin",
  "dsh-skill",
  "dsh-bundle",
  "dsh",
  "deepseek-harness",
  "deepseek-harness-plugin",
  "deepseek-harness-plugins",
  "deepseekharness",
];
// Sibling registry. Themes carry the dsh-plugin topic like everything else, so
// without this every entry in awesome-dsh-themes re-enters this queue on every
// run, forever — 138 of the first 248 candidates were already listed there.
// Fetched rather than vendored so it cannot go stale; a failed fetch degrades
// to "queue them and let triage catch it", never to a wrong rejection.
const THEMES_REGISTRY = "https://raw.githubusercontent.com/dshworks/awesome-dsh-themes/main/data/themes.json";
// The lane back. This registry routes anything theme-shaped to the themes
// registry by name (data/routed-to-themes.json); when a human over there opens
// it and finds a launcher, a palette board or a skin *authoring* tool -- a
// plugin wearing a skin's name -- they write that decision to
// data/routed-to-plugins.json and it comes back here as a candidate that
// triage must not route away again. Until 2026-09-02 that verdict had nowhere
// to go, and the repo sat in both queues forever.
const ROUTED_TO_PLUGINS = "https://raw.githubusercontent.com/dshworks/awesome-dsh-themes/main/data/routed-to-plugins.json";
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

  await sweepStars(q, out);
}

// Progressively finer axes for one over-cap day. Stars split a busy day, but
// the zero-star bucket has no finer star axis below it and is exactly where a
// spam wave lands: on 2026-08-17 it held 957 of the 1000 the API will return.
// Repo size splits it further, and if even that saturates the run says which
// slice it could not finish rather than reporting a short list as complete.
const STAR_SLICES = ["0", "1", "2", "3", "4..5", "6..10", "11..30", ">30"];
const SIZE_SLICES = ["0..10", "11..50", "51..200", "201..1000", "1001..10000", ">10000"];

async function sweepStars(q, out) {
  for (const stars of STAR_SLICES) {
    const sq = `${q} stars:${stars}`;
    if ((await drain(sq, out)) > SEARCH_CAP) await sweepSize(sq, out);
  }
}

async function sweepSize(q, out) {
  for (const size of SIZE_SLICES) {
    const sq = `${q} size:${size}`;
    const total = await drain(sq, out);
    if (total > SEARCH_CAP) {
      console.error(`discover: ${sq} holds ${total}, over the ${SEARCH_CAP} the API will return, and no finer axis is left; ~${total - SEARCH_CAP} repo(s) in this slice went unread`);
    }
  }
}

// How big the ecosystem is, per topic, as of this run. The README used to
// hand-type these numbers into its own thesis paragraph, which meant the one
// claim the repo makes about why it exists was the one claim that rotted.
const topicTotals = {};
let topicRepos = new Set();

async function fromTopics() {
  const out = [];
  for (const topic of TOPICS) {
    const base = `topic:${topic}`;
    const probe = await searchRepos(base, 1);
    const total = probe.total_count;
    topicTotals[topic] = total;
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
  topicRepos = new Set(out.map((r) => r.repo.toLowerCase()));
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

// Repos that no search can reach. Every other source here asks GitHub a
// question, so all three are blind to a plugin whose author tagged nothing,
// published nothing to npm, and used no conventional layout — and those exist:
// `yjh051108/dsh-routing-suite` had 6,415 stars and zero topics on the day it
// was seeded. They surface where people talk instead: chat groups, forum
// threads, conference slides, a link in someone's README.
//
// `data/seeds.json` is that lane, and it is deliberately dumb: a slug, the
// date, and one word for where it came from. It grants nothing — a seed enters
// the queue at the back like every other candidate and still has to prove an
// install path in triage. The point is only that a repo nobody tagged can be
// looked at, not that hearing about it somewhere counts as evidence.
//
// Keep the `via` field categorical. Seeds get their provenance from private
// places sometimes; a slug is a public fact, and who said it in which room is
// not ours to publish.
async function fromRoutedThemes() {
  const res = await fetch(ROUTED_TO_PLUGINS, { signal: AbortSignal.timeout(20000) });
  if (res.status === 404) return []; // the sibling has not written one yet
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const { repos = [] } = await res.json();
  console.error(`discover: ${repos.length} repo(s) routed here by the themes registry`);
  return repos.map((r) => ({
    repo: r.repo,
    source: "routed-from-themes",
    description: r.description ?? null,
    ...(r.stars !== undefined ? { stars: r.stars } : {}),
  }));
}

function fromSeeds() {
  let file;
  try {
    file = read("data/seeds.json");
  } catch {
    return []; // the lane is optional
  }
  const seeds = file.seeds ?? [];
  console.error(`discover: ${seeds.length} hand-seeded repo(s) from outside search`);
  return seeds.map((s) => ({
    repo: s.repo,
    source: "seed",
    description: s.note ?? null,
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
// Coverage counts every rejection, live or expired: an expired one was still
// read, it just earned another look.
const rejectedAll = new Set(rejectedFile.rejected.map((r) => r.repo.toLowerCase()));
const expired = rejectedFile.rejected.filter((r) => r.recheckAfter && r.recheckAfter <= TODAY).length;
if (expired) console.error(`discover: ${expired} rejection(s) expired and are eligible again`);
// The exclusion set applies to the whole queue, not just to today's finds.
// Rows routed here to the themes registry used to sit in this file forever:
// once that registry lists them they are decided, and a queue that keeps
// showing decided work reads as a backlog nobody is draining.
const queue = new Map(
  file.candidates
    .filter((c) => !known.has(c.repo.toLowerCase()))
    .map((c) => [c.repo.toLowerCase(), c]));
const settledElsewhere = file.candidates.length - queue.size;
if (settledElsewhere) console.error(`discover: dropped ${settledElsewhere} queued repo(s) now decided in a sibling registry`);

const found = [];
const failed = [];
for (const [name, fn] of [
  ["github-topic", fromTopics],
  ["npm-search", fromNpm],
  ["code-search", fromCodeSearch],
  ["seed", fromSeeds],
  ["routed-from-themes", fromRoutedThemes],
]) {
  try {
    found.push(...(await fn()));
  } catch (err) {
    console.error(`discover: ${name} failed: ${err.message}`);
    failed.push(name);
  }
}

// A sweep that could not read the ecosystem and a quiet ecosystem both end
// here with nothing new to queue, and until now both exited 0 and read green:
// three "failed:" lines on stderr, then "no changes", then a green check. On
// 2026-08-26 every one of the three search sources gave up under a rate limit
// and the run still reported success.
//
// github-topic is not one lane among four. It is the only one that measures
// the denominator the README publishes, so losing it means this run has no
// opinion about the ecosystem at all -- not that the ecosystem is unchanged.
// Fail the run rather than let it certify silence. The auxiliary lanes are
// supplementary: say they broke, but a bad npm day is not a failed sweep.
if (failed.includes("github-topic")) {
  console.error(`discover: FATAL the topic sweep failed, so this run measured nothing; the queue and data/coverage.json are unchanged and must not be read as "the ecosystem is quiet"`);
  process.exit(1);
}
if (failed.length) {
  console.error(`discover: degraded — ${failed.join(", ")} failed; the topic sweep carried the run`);
}

// When the per-run cap binds it must keep the most substantial finds, not
// whichever source happened to run first.
// Seeds first, and they never carry a star count, so they would sort to the
// bottom and get eaten by the per-run cap on any busy day — which is every
// day. A hand-fed lane that silently loses its entries to machine finds is
// worse than no lane, because it looks like it ran.
found.sort((a, b) => {
  if ((a.source === "seed") !== (b.source === "seed")) return a.source === "seed" ? -1 : 1;
  return (b.stars ?? 0) - (a.stars ?? 0);
});

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

// Ecosystem size, written whenever a sweep actually measured it. Separate from
// candidates.json because it is a measurement, not a queue: it changes on a run
// that queues nothing, and render.mjs reads it so the README's own numbers
// cannot drift from what the last sweep saw.
if (topicRepos.size) {
  // Coverage is the intersection, not two separate tallies: how many of the
  // repos carrying a topic *today* this org has actually read. The registry
  // also holds repos that have since dropped the topic or were renamed, so
  // counting listed+rejected against the topic total would exceed 100%.
  const decidedHere = [...topicRepos].filter((r) => known.has(r) || rejectedAll.has(r)).length;
  const queuedHere = [...topicRepos].filter((r) => queue.has(r)).length;
  const coverage = {
    measured: TODAY,
    topics: {},
    unique: topicRepos.size,
    decided: decidedHere,
    queued: queuedHere,
  };
  for (const t of TOPICS) if (topicTotals[t] !== undefined) coverage.topics[t] = topicTotals[t];
  writeFileSync(join(ROOT, "data/coverage.json"), `${JSON.stringify(coverage, null, 2)}\n`);
  console.error(`discover: coverage — ${decidedHere}/${topicRepos.size} topic repos decided, ${queuedHere} queued`);
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
