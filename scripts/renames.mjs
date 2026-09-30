#!/usr/bin/env node
// Apply the renames that scripts/stars.mjs reports, and stop counting one
// plugin twice.
//
// GitHub's API follows a rename silently, so a moved repo keeps refreshing
// under its old slug. stars.mjs has reported those since 2026-08-19 and, on
// purpose, never applied them: changing a row's `repo` is a decision, not a
// refresh. Nothing else applied them either, so the report grew every run (177
// rows on 2026-09-30). Meanwhile discovery meets each moved repo under its new
// name, finds it unlisted, and triage admits it again: one plugin, two rows.
//
// This is the decision, run by a person in a sweep, as a reviewed PR:
//   - a moved row gets its `repo` updated (recorded under `renames`)
//   - a moved row whose new slug is already listed at the same `path` is the
//     same plugin twice; the older row survives (recorded under
//     `duplicates.merges`)
//   - two or more rows moved into one repo at the same `path`, with no row
//     already there, is an author folding projects into one repo. That is not
//     a rename, and it is held for a person (`held`)
// Rows at different `path`s of one repo are a monorepo, and each keeps its own.
//
// What it does NOT do: re-date `lastVerified` or invent `evidence`. A rename
// does not move files, and re-stamping a check nobody re-ran is the lie this
// registry exists to avoid. (A merge keeps the later of the two rows' proofs:
// both are real checks of the same files.) 404s are left to stars' report and
// triage --prove.
//
// Usage:
//   node scripts/renames.mjs             probe, apply, write
//   node scripts/renames.mjs --dry-run   probe and report only
//
// Needs gh auth (GraphQL, 100 repos per request, the same batching as stars).

import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const TODAY = new Date().toISOString().slice(0, 10);
const DRY = process.argv.includes("--dry-run");

const read = (rel) => JSON.parse(readFileSync(join(ROOT, rel), "utf8"));
const write = (rel, data) => writeFileSync(join(ROOT, rel), `${JSON.stringify(data, null, 2)}\n`);
const lc = (s) => s.toLowerCase();
const at = (repo, path) => `${lc(repo)}#${path ?? ""}`;

const registry = read("data/plugins.json");
const plugins = registry.plugins;

function gql(query) {
  try {
    return JSON.parse(execFileSync("gh", ["api", "graphql", "-f", `query=${query}`], {
      encoding: "utf8", maxBuffer: 16 * 1024 * 1024, stdio: ["ignore", "pipe", "ignore"],
    }));
  } catch (err) {
    // Some aliases 404: gh exits non-zero but still prints the partial data.
    const text = String(err.stdout || "");
    const start = text.indexOf("{");
    return start >= 0 ? JSON.parse(text.slice(start)) : null;
  }
}

const repos = [...new Set(plugins.map((p) => p.repo))];
const now = new Map(); // listed slug -> current nameWithOwner, for moved repos only
const unanswered = []; // row ranges the API would not answer after retries
for (let i = 0; i < repos.length; i += 100) {
  const batch = repos.slice(i, i + 100);
  const fields = batch.map((slug, j) => {
    const [owner, name] = slug.split("/");
    return `r${j}: repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(name)}) { nameWithOwner }`;
  }).join("\n");
  let res = null;
  for (let attempt = 0; attempt < 3 && !res; attempt++) {
    res = gql(`query {\n${fields}\n}`);
    if (!res && attempt < 2) execFileSync("sleep", [String(2 * (attempt + 1))]);
  }
  if (!res) { unanswered.push(`${i}-${i + batch.length - 1}`); continue; }
  batch.forEach((slug, j) => {
    const to = res.data?.[`r${j}`]?.nameWithOwner;
    if (to && lc(to) !== lc(slug)) now.set(slug, to);
  });
  if ((i / 100) % 50 === 49) console.error(`renames: probed ${i + batch.length}/${repos.length}`);
}
console.error(`renames: ${repos.length} repos probed, ${now.size} moved${unanswered.length ? `; batches unanswered after retries (rows ${unanswered.join(", ")}), a rename there is caught next run` : ""}`);

const byAt = new Map(plugins.map((p) => [at(p.repo, p.path), p]));
const moved = plugins.filter((p) => now.has(p.repo));
const movers = new Map(); // target at() -> rows moving into it
for (const p of moved) {
  const key = at(now.get(p.repo), p.path);
  movers.set(key, [...(movers.get(key) ?? []), p]);
}

const renames = [];
const merges = [];
const held = [];
const dropped = new Set();

for (const row of moved) {
  const to = now.get(row.repo);
  const key = at(to, row.path);
  const existing = byAt.get(key);

  if (existing && existing !== row) {
    // The same plugin listed twice. Keep the row that has been here longest:
    // it has the earlier `added` and the older inbound links.
    const [keep, drop] = (existing.added ?? "9999") <= (row.added ?? "9999") ? [existing, row] : [row, existing];
    merges.push({
      repo: to, path: row.path ?? null, renamedFrom: row.repo,
      kept: keep.name, dropped: [drop.name], evidence: keep.evidence ?? null, on: TODAY,
    });
    // Both rows name the same files. If the dropped one was proven later, its
    // proof is the newer check that actually ran; keep that, not the older one.
    if ((drop.lastVerified ?? "") > (keep.lastVerified ?? "")) {
      for (const k of ["status", "evidence", "lastVerified", "verifiedAgainst", "description", "tags"]) {
        if (drop[k] === undefined) delete keep[k]; else keep[k] = drop[k];
      }
    }
    keep.repo = to;
    dropped.add(drop);
    byAt.set(key, keep); // a third row at this slug merges into the survivor
    continue;
  }
  if (movers.get(key).length > 1) {
    held.push({ from: row.repo, to, path: row.path ?? null, name: row.name,
      why: "two or more listed rows were renamed into this repository at one path; that is a fold, not a rename" });
    continue;
  }
  renames.push({
    from: row.repo, to,
    // An ownership transfer is not a URL change: the install decision now
    // rests on a different person, which is a fact about trust.
    ownerChanged: lc(to.split("/")[0]) !== lc(row.repo.split("/")[0]),
    name: row.name, on: TODAY,
  });
  row.repo = to;
}

// A row that moved can land on a slug this registry already decided under the
// new name: rejected, or sitting in the queue. validate refuses both states.
// The rule is the one renamed.json's `collisions` recorded on 2026-08-19: the
// better-evidenced decision wins.
//   - a row with no evidence loses to the rejection (the August cases)
//   - a peer-gate refusal loses to a proven row: listed rows the gate refuses
//     stay listed, as the re-verification queue, like every other such row
//   - otherwise the later of the rejection and the row's proof wins
//   - a queued candidate is not a decision; it goes, the row is listed
const ledger = read("data/rejected.json");
const queue = read("data/candidates.json");
const movedTo = new Set([...renames.map((r) => lc(r.to)), ...merges.map((m) => lc(m.repo))]);
const listedNow = new Map(plugins.filter((p) => !dropped.has(p)).map((p) => [lc(p.repo), p]));
const collisions = { rowsDropped: [], rejectionsDropped: [], dequeued: [] };
ledger.rejected = ledger.rejected.filter((r) => {
  const row = movedTo.has(lc(r.repo)) && listedNow.get(lc(r.repo));
  if (!row) return true;
  const gate = /refuses to install it/.test(r.reason);
  const rowWins = row.evidence && (gate || (row.lastVerified ?? "") >= (r.date ?? ""));
  if (rowWins) {
    collisions.rejectionsDropped.push({ repo: r.repo, row: row.name, reason: r.reason, date: r.date, on: TODAY });
    return false;
  }
  collisions.rowsDropped.push({ repo: row.repo, name: row.name, status: row.status, lastVerified: row.lastVerified,
    hadEvidence: Boolean(row.evidence), rejected: r.date, on: TODAY });
  dropped.add(row);
  return true;
});
queue.candidates = queue.candidates.filter((c) => {
  if (!movedTo.has(lc(c.repo)) || !listedNow.has(lc(c.repo)) || dropped.has(listedNow.get(lc(c.repo)))) return true;
  collisions.dequeued.push({ repo: c.repo, row: listedNow.get(lc(c.repo)).name, on: TODAY });
  return false;
});

registry.plugins = plugins.filter((p) => !dropped.has(p));

console.error(`renames: ${renames.length} repo field(s) updated, ${merges.length} duplicate row(s) merged, ${held.length} held`);
for (const r of renames) console.error(`  move  ${r.from} -> ${r.to}${r.ownerChanged ? "  (OWNER CHANGED)" : ""}`);
for (const m of merges) console.error(`  dupe  ${m.renamedFrom} -> ${m.repo}${m.path ? `#${m.path}` : ""}  (kept ${m.kept}, dropped ${m.dropped[0]})`);
for (const h of held) console.error(`  held  ${h.from} -> ${h.to}${h.path ? `#${h.path}` : ""}  (${h.name})`);
for (const c of collisions.rejectionsDropped) console.error(`  keep  ${c.repo} listed as ${c.row}; its rejection (${c.date}) is dropped`);
for (const c of collisions.rowsDropped) console.error(`  drop  ${c.repo} row ${c.name}; the rejection (${c.rejected}) is better evidenced`);
for (const c of collisions.dequeued) console.error(`  dequeue  ${c.repo}, listed as ${c.row}`);

if (DRY) { console.error("renames: --dry-run, nothing written"); process.exit(0); }
if (!renames.length && !merges.length && !held.length) { console.error("renames: nothing to write"); process.exit(0); }
const touched = Object.values(collisions).some((l) => l.length);

const file = read("data/renamed.json");
file.detected = TODAY;
file.renames = [...file.renames, ...renames];
file.count = file.renames.length;
file.ownerChanged = file.renames.filter((r) => r.ownerChanged).length;
file.duplicates.merges = [...file.duplicates.merges, ...merges];
file.duplicates.groupsMerged = file.duplicates.merges.length;
file.duplicates.rowsRemoved += merges.length;
file.held = [...(file.held ?? []).filter((h) => !held.some((x) => x.from === h.from && x.path === h.path)), ...held];
for (const [k, list] of Object.entries(collisions)) {
  if (list.length) file.collisions[k] = [...(file.collisions[k] ?? []), ...list];
}
write("data/renamed.json", file);
if (touched) {
  write("data/rejected.json", { ...ledger, updated: TODAY });
  write("data/candidates.json", { ...queue, updated: TODAY });
}
write("data/plugins.json", { ...registry, updated: TODAY });
console.error(`renames: registry ${plugins.length} -> ${registry.plugins.length}`);
