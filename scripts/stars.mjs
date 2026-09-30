#!/usr/bin/env node
// Refresh the `stars` / `starsUpdated` fields in data/plugins.json from the
// GitHub GraphQL API, batched 100 repos per request. Stars are a display and
// ranking signal only; the registry's trust fields (status, verifiedAgainst)
// are untouched. Repos that 404 keep their last known count and are listed on
// stderr so the watch can re-check whether the entry moved or died.
//
// Usage: node scripts/stars.mjs        (needs GITHUB_TOKEN or gh auth)

import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const FILE = join(ROOT, "data", "plugins.json");
const data = JSON.parse(readFileSync(FILE, "utf8"));

const repos = [...new Set(data.plugins.map((p) => p.repo))];
const today = new Date().toISOString().slice(0, 10);
const counts = new Map();
const missing = [];
const renamed = []; // repos that answered under a new name
const stalled = []; // batches the API would not answer; their entries keep last known stars

function gql(query) {
  const out = execFileSync("gh", ["api", "graphql", "-f", `query=${query}`, "--jq", "."], {
    encoding: "utf8", maxBuffer: 16 * 1024 * 1024,
  });
  return JSON.parse(out);
}

for (let i = 0; i < repos.length; i += 100) {
  const batch = repos.slice(i, i + 100);
  const fields = batch.map((slug, j) => {
    const [owner, name] = slug.split("/");
    return `r${j}: repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(name)}) { stargazerCount pushedAt nameWithOwner }`;
  }).join("\n");
  // A batch can fail two ways. gh exits non-zero but still prints partial data
  // when some aliases 404 — that is normal and recoverable from stdout. A
  // transient API blip prints nothing parseable; retry that, and if it still
  // will not answer, skip the batch rather than lose every batch before it.
  // The file is only written at the end, so one unhandled throw used to cost
  // the whole run.
  let res = null;
  for (let attempt = 0; attempt < 3 && !res; attempt++) {
    try {
      res = gql(`query {\n${fields}\n}`);
    } catch (err) {
      const text = String(err.stdout || "");
      const start = text.indexOf("{");
      if (start >= 0) {
        try { res = JSON.parse(text.slice(start)); } catch { /* fall through to retry */ }
      }
      if (!res) {
        if (attempt === 2) break;
        execFileSync("sleep", [String(2 * (attempt + 1))]);
      }
    }
  }
  if (!res) {
    stalled.push(`${i}-${i + batch.length - 1}`);
    continue;
  }
  batch.forEach((slug, j) => {
    const node = res.data?.[`r${j}`];
    if (node && typeof node.stargazerCount === "number") {
      counts.set(slug, { stars: node.stargazerCount, pushedAt: node.pushedAt?.slice(0, 10) });
      // The API follows renames and hands back the current nameWithOwner, so a
      // moved repo keeps refreshing happily under its old slug and nothing ever
      // says the registry's link is now a redirect. We already have the answer
      // in the response — it was just being thrown away. Renames are reported,
      // not applied: the row is somebody's entry and changing its repo is a
      // decision, not a refresh.
      if (node.nameWithOwner && node.nameWithOwner.toLowerCase() !== slug.toLowerCase()) {
        renamed.push(`${slug} -> ${node.nameWithOwner}`);
      }
    } else {
      missing.push(slug);
    }
  });
}

let touched = 0;
for (const p of data.plugins) {
  const hit = counts.get(p.repo);
  if (hit) {
    p.stars = hit.stars;
    p.starsUpdated = today;
    if (hit.pushedAt) p.pushedAt = hit.pushedAt;
    touched++;
  }
}

writeFileSync(FILE, `${JSON.stringify(data, null, 2)}\n`);
console.log(`stars: refreshed ${touched}/${data.plugins.length} entries (${repos.length} unique repos)`);
if (renamed.length) {
  console.error(`stars: ${renamed.length} repo(s) answered under a new name — apply with scripts/renames.mjs in a sweep:`);
  for (const line of renamed) console.error(`  - ${line}`);
}
if (stalled.length) {
  console.error(`stars: ${stalled.length} batch(es) unanswered after retries (rows ${stalled.join(", ")}); those entries kept their previous counts`);
}
if (missing.length) {
  console.error(`stars: ${missing.length} repo(s) not found — moved or deleted, re-check the entries:`);
  for (const slug of missing) console.error(`  - ${slug}`);
}
