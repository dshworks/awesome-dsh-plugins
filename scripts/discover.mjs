#!/usr/bin/env node
// Scheduled ecosystem discovery. Sweeps three sources for dsh extensions and
// merges new finds into data/candidates.json, the human/agent triage queue.
// Candidates NEVER flow into data/plugins.json automatically. Repos already
// triaged and rejected live in data/rejected.json and are never re-queued.
//
// Sources:
//   1. GitHub repo search on the official discovery topic `dsh-plugin`
//   2. npm search for packages referencing @deepseek-ai/dsh
//   3. GitHub code search for `.agents/skills` SKILL.md layouts (best effort;
//      the code-search API needs a token and rations heavily)
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
const MAX_NEW_PER_RUN = 25;
const SLUG_RE = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;

const read = (rel) => JSON.parse(readFileSync(join(ROOT, rel), "utf8"));

async function gh(path) {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: {
      accept: "application/vnd.github+json",
      "user-agent": "awesome-dsh-plugins-watch",
      ...(TOKEN ? { authorization: `Bearer ${TOKEN}` } : {}),
    },
  });
  if (!res.ok) throw new Error(`GitHub ${path}: HTTP ${res.status}`);
  return res.json();
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

async function fromTopic() {
  const q = encodeURIComponent("topic:dsh-plugin");
  const data = await gh(`/search/repositories?q=${q}&sort=stars&order=desc&per_page=50`);
  return data.items.map((r) => ({
    repo: r.full_name,
    source: "github-topic",
    stars: r.stargazers_count,
    description: r.description ?? null,
    fork: r.fork,
    archived: r.archived,
  }));
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
const rejected = new Set(rejectedFile.rejected.map((r) => r.repo.toLowerCase()));
const queue = new Map(file.candidates.map((c) => [c.repo.toLowerCase(), c]));

const found = [];
for (const [name, fn] of [
  ["github-topic", fromTopic],
  ["npm-search", fromNpm],
  ["code-search", fromCodeSearch],
]) {
  try {
    found.push(...(await fn()));
  } catch (err) {
    console.error(`discover: ${name} failed: ${err.message}`);
  }
}

let added = 0;
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
  if (added >= MAX_NEW_PER_RUN) continue;
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

if (JSON.stringify(next.candidates) === JSON.stringify(file.candidates)) {
  console.log(`discover: no changes (${candidates.length} candidates queued)`);
} else {
  next.updated = TODAY;
  writeFileSync(
    join(ROOT, "data/candidates.json"),
    `${JSON.stringify(next, null, 2)}\n`);
  console.log(`discover: ${added} new, ${candidates.length} total candidates`);
}
