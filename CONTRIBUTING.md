# Contributing

The registry is the JSON, not the README. All contributions are PRs against
[`data/plugins.json`](data/plugins.json); the README is regenerated from it.

## Submit a plugin

1. Add one entry to the `plugins` array in `data/plugins.json`. Field
   reference lives in [`data/schema.json`](data/schema.json); copy an existing
   entry as a starting point.
2. Regenerate and check:

   ```sh
   node scripts/validate.mjs
   node scripts/render.mjs
   ```

3. Commit both files and open the PR. CI runs the same two checks.

Set `verifiedAgainst` to the dsh version you actually tested, `lastVerified`
to today, and `status` honestly. `unverified` entries are accepted; lying in
`verified` gets the entry pulled.

## The spam gate

Every entry, whether submitted by PR or promoted from the discovery queue,
must clear this bar:

1. Real install path. One of:
   - a `dsh.bundle` manifest in `package.json` (bundle or plugin),
   - a published npm package a profile can depend on,
   - a `SKILL.md` layout dsh actually discovers (top-level `<name>/SKILL.md`
     or flat `<name>.md`, kebab-case name; dsh does no nested discovery).
2. Not a fork of a template with the name swapped. History and substance are
   checked, not just the GitHub fork flag; generated template spam counts too.
3. Loads against the dsh version claimed in `verifiedAgainst`, for example
   `dsh --profile <p> --dump-config` succeeds with the package installed, or
   the skill appears in the skill list.
4. Honest description, no keyword stuffing. Riding the `dsh-plugin` topic
   without extending dsh is exactly what this registry filters out.

## The discovery queue

A scheduled workflow ([`.github/workflows/watch.yml`](.github/workflows/watch.yml))
sweeps every dsh discovery topic (`dsh-plugin`, `dsh-plugins`, `dsh-theme`,
`dsh-skill`, `dsh-bundle`), npm, and GitHub code search, and queues new finds
in [`data/candidates.json`](data/candidates.json) on a single reused triage PR.
Nothing is promoted automatically. To triage: apply the spam gate, then either
move the entry into `plugins.json` (fill in every schema field yourself;
candidate metadata is a lead, not a record) or record it in
[`data/rejected.json`](data/rejected.json) with a one-line reason and remove
it from the queue.

Topic sweeps are exhaustive. GitHub caps search at 1000 results per query and
`dsh-plugin` passed that on 2026-08-14, so the sweep slices a topic by creation
date — and a single over-cap day by star count — until every slice fits, then
drains every page. Each topic reports `examined N/total`: a run that reads part
of a topic has to say so, because a saturating sweep and a quieting ecosystem
produce the same falling batch sizes.

### Rejections expire

Two kinds of rejection live in the ledger, and they are not the same thing:

- **Judgment.** "Curated list, not an installable extension." "Standalone agent
  platform, topic-riding." These are permanent: omit `recheckAfter`.
- **Snapshot.** "No dsh install path" is a fact about the day it was checked. A
  project that ships its manifest a week later would be buried forever by a
  permanent row. These carry `recheckAfter`, and discovery re-queues them once
  that date passes — 21 days for a missing install path, 7 for a repo that was
  unreadable, 90 for one that vendors the runtime instead of extending it.

To appeal a live rejection, delete its ledger row in the same PR that adds the
entry.

## Field ownership

Human judgment always wins over automation. `tags` picked by a person during
triage or review are never overwritten by the watch — automation may only fill
fields that are empty. `featured` is hand-curated and off-limits to automation
entirely. `stars`, `starsUpdated`, and `pushedAt` are the reverse: machine
fields refreshed by `scripts/stars.mjs`, not worth editing by hand.

## Verification sweeps

dsh is a developer preview with promised breaking changes, so entries rot.
Re-verification PRs that only bump `lastVerified` / `verifiedAgainst`, or flip
`status` to `broken` with a one-line reason, are always welcome.
