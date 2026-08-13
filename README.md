<!-- Rendered by scripts/render.mjs from data/plugins.json. Do not edit by hand: edit the data or the template, then run `npm run render`. -->

# awesome-dsh-plugins

[![powered by dsh](https://img.shields.io/badge/powered__by-dsh-4D6BFE?logo=deepseek)](https://github.com/deepseek-ai/deepseek-harness)
[![license: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)

A spam-filtered, open-data registry of [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`) plugins, bundles, and skills.

Most awesome lists are prose. This one is data: [`data/plugins.json`](data/plugins.json) is the source of truth, this README is rendered from it, and every entry states an install path and the dsh version it was last verified against. Build on the JSON directly:

```sh
curl -s https://raw.githubusercontent.com/dshworks/awesome-dsh-plugins/main/data/plugins.json
```

## Why a filtered registry

DeepSeek delegates the ecosystem to the community: no first-party marketplace, discovery happens on the [`dsh-plugin`](https://github.com/topics/dsh-plugin) GitHub topic. On launch day that topic already held 431 repositories, template forks and topic-riders included. A raw topic feed is not a registry; the filter is the value this repo adds.

If you prefer a curated prose list, [AdamPlatin123/awesome-dsh-plugins](https://github.com/AdamPlatin123/awesome-dsh-plugins) does that well, with daily compatibility tracking. This repo is the machine-readable complement, not a replacement.

## Why "verified against" is a schema field

dsh is a developer preview and the team promises compatibility-breaking changes. Example: the `.dsh-plugin` manifest format was deleted on 2026-08-09 with no migration path, silently stranding every tutorial written against it. A compatibility claim without a version and a date rots, so the schema records both (`verifiedAgainst`, `lastVerified`) and stale entries get re-checked or flagged.

## Registry

31 entries. Data updated 2026-08-13.

### Bundles

npm packages with a `dsh.bundle` manifest: composition layers a profile boots from.

| Name | Repo | npm | Description | Verified against |
|---|---|---|---|---|
| dsh-base (official) | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/bundle/base) | [`@deepseek-ai/dsh-base`](https://www.npmjs.com/package/@deepseek-ai/dsh-base) | The shared dsh core as a profile bundle: every profile's first patch layer, inserting the base plugin rows over the empty profile root | 0.1.0-rc.5 (2026-08-13) |
| dsh-headless (official) | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/bundle/headless) | [`@deepseek-ai/dsh-headless`](https://www.npmjs.com/package/@deepseek-ai/dsh-headless) | The one-shot bundle: a direct core Agent/Session runner over dsh-base with no Host, HTTP, or browser layer | 0.1.0-rc.5 (2026-08-13) |
| dsh-web-app (official) | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/bundle/web-app) | [`@deepseek-ai/dsh-web-app`](https://www.npmjs.com/package/@deepseek-ai/dsh-web-app) | The browser-surface bundle: the web patch layer over dsh-base plus the runtime glue plugin (frontend dist serving, web-surface prompt, URL line) | 0.1.0-rc.5 (2026-08-13) |
| oh-dsh | [hust-open-atom-club/oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) | - | Community distribution bundling TUI, desktop, and web UI surfaces with layered installation, pinned to an exact harness revision via dsh-source.json | 0.1.0-rc.5 (2026-08-13) |

### Plugins

Cordis plugins activated through patch rows in a bundle or profile.

| Name | Repo | npm | Description | Verified against |
|---|---|---|---|---|
| dsh-hooks-claude-code (official) | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/hooks/hooks-claude-code) | [`@deepseek-ai/dsh-hooks-claude-code`](https://www.npmjs.com/package/@deepseek-ai/dsh-hooks-claude-code) | Bridge plugin: runs an existing Claude Code hooks.json on the harness interception seams (command hooks only; http, mcp_tool, prompt, and agent hooks are skipped with a warning) | 0.1.0-rc.5 (2026-08-13) |
| dsh-hooks-codex (official) | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/hooks/hooks-codex) | [`@deepseek-ai/dsh-hooks-codex`](https://www.npmjs.com/package/@deepseek-ai/dsh-hooks-codex) | Bridge plugin: runs a Codex hooks.json on the harness interception seams (regex-only matchers, snake_case payloads, only blocking decisions honored) | 0.1.0-rc.5 (2026-08-13) |
| dsh-ads | [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) | - | Satirical 2005-portal fake-ad plugin for the web UI (sidebar ads, in-conversation feed, corner popups); ad slots also surface real dsh-plugin topic repos | 0.1.0-rc.5 (2026-08-13) |
| dsh-agent-teams | [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | - | AgentTeams plugin: coordinate teams of subagents from the web UI | 0.1.0-rc.5 (2026-08-13) |
| dsh-at-file | [omdsh-dev/dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) | - | Codex-style @file mentions in the composer: search workspace files and attach their contents to prompts | 0.1.0-rc.5 (2026-08-13) |
| dsh-better-sidebar | [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | [`dsh-better-sidebar`](https://www.npmjs.com/package/dsh-better-sidebar) | Full sidebar workbench with file rendering/editing, terminal, Git, and subagents; third-party extensions can register new tabs | 0.1.0-rc.5 (2026-08-13) |
| dsh-cc-tui | [ccch1mneyyy/dsh-cc-tui](https://github.com/ccch1mneyyy/dsh-cc-tui) | [`dsh-cc-tui`](https://www.npmjs.com/package/dsh-cc-tui) | Claude Code-style fullscreen terminal UI: streaming thinking, double-Esc rewind, context progress bar, and TPS meter over the headless runner | 0.1.0-rc.5 (2026-08-13) |
| dsh-custom-tool | [omdsh-dev/dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool) | - | Create and manage sandboxed JavaScript tools with a Monaco editor and a model-driven tool lifecycle | 0.1.0-rc.5 (2026-08-13) |
| dsh-notification | [omdsh-dev/dsh-notification](https://github.com/omdsh-dev/dsh-notification) | - | Desktop notifications for turn completions, with per-outcome controls and include/exclude keyword rules | 0.1.0-rc.5 (2026-08-13) |
| dsh-open-in-vscode | [omdsh-dev/dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) | - | Open workspace directories in VS Code directly from the web GUI | 0.1.0-rc.5 (2026-08-13) |
| dsh-openpencil | [ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) | [`@zseven-w/dsh-openpencil`](https://www.npmjs.com/package/@zseven-w/dsh-openpencil) | OpenPencil design preview and editing inside the web UI | 0.1.0-rc.5 (2026-08-13) |
| dsh-tianshu-tui | [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | [`@huiliyi37/dsh-tianshu-tui`](https://www.npmjs.com/package/@huiliyi37/dsh-tianshu-tui) | Terminal UI for dsh shipped as an installable profile bundle | 0.1.0-rc.5 (2026-08-13) |
| dsh-turn-rewind | [Anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) | - | Rewind conversation and workspace state to a previous turn, backed by a persistent change ledger | 0.1.0-rc.5 (2026-08-13) |
| dsh-ui-status-label | [alingalingling/ui-status-label](https://github.com/alingalingling/ui-status-label) | - | Web UI plugin that makes the assistant's thinking status label ('deep diving') user-configurable through settings | 0.1.0-rc.5 (2026-08-13) |
| dsh-vision-toolkit | [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | - | Harness-native integration of agent-vision-toolkit for text-only models: image Q&A with intent, long-screenshot OCR, UI restoration, grounding, and pixel diff | 0.1.0-rc.5 (2026-08-13) |
| dsh-visualize | [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) | - | Generative UI in conversation: a visualize tool plus companion skill renders interactive HTML cards in sandboxed frames with streaming preview | 0.1.0-rc.5 (2026-08-13) |
| dsh-web-ui | [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) | - | Plugin and skin collection for the dsh Web UI: task board, git graph, right-side panel, remote mobile UI, live token stats, and a skin center that routes around the theme-persistence gap | 0.1.0-rc.5 (2026-08-13) |
| dsh-workflow | [icetomoyo/dsh_workflow](https://github.com/icetomoyo/dsh_workflow) | - | Workflow layer that upgrades one-shot multi-agent dispatch into savable, governable, observable, and resumable workflows | 0.1.0-rc.5 (2026-08-13) |
| modlens | [liustack/modlens](https://github.com/liustack/modlens) | [`@liustack/modlens`](https://www.npmjs.com/package/@liustack/modlens) | Vision plugin for text-only models: image understanding bridged into the harness via a dsh.bundle patch layer, shipping a modlens skill alongside | 0.1.0-rc.5 (2026-08-13) |
| whale-girl | [vlln/whale-girl](https://github.com/vlln/whale-girl) | - | Desktop-pet companion for the web GUI (QQ-pet style): draggable, feedable, levels up with session activity; migrated from the removed .dsh-plugin format to dsh.bundle | 0.1.0-rc.5 (2026-08-13) |

### Skills

Anthropic-format `SKILL.md` units; dsh discovers them from its skill roots (no nested discovery, kebab-case names only).

| Name | Repo | npm | Description | Verified against |
|---|---|---|---|---|
| argo | [taxueseek/argo](https://github.com/taxueseek/argo) | - | Agent-first multilingual search and evidence-verification skill routing 120+ engines with vertical sources and MCP entry points; SKILL.md at repo root | 0.1.0-rc.5 (2026-08-13) |
| colleague-skill | [titanwings/colleague-skill](https://github.com/titanwings/colleague-skill) | - | Digital-companion skill in the Anthropic SKILL.md format dsh reads; install by copying it into a dsh skill root such as .agents/skills | 0.1.0-rc.5 (2026-08-13) |
| ex-skill | [titanwings/ex-skill](https://github.com/titanwings/ex-skill) | - | Builds a digital persona skill of your ex from WeChat chat logs (create-ex); SKILL.md documents dsh discovery paths alongside other hosts | 0.1.0-rc.5 (2026-08-13) |
| find-plugins | [Nagi-ovo/dsh-find-plugins](https://github.com/Nagi-ovo/dsh-find-plugins) | - | Skill that discovers and installs dsh plugins from the GitHub dsh-plugin topic, verifying install method from repo manifests; copy skills/find-plugins into a skill root | 0.1.0-rc.5 (2026-08-13) |
| harmony-next | [linhay/harmony-next.skills](https://github.com/linhay/harmony-next.skills) | - | HarmonyOS NEXT development skill with offline ArkTS/ArkUI references and DevEco automation; copy harmony-next/ into a dsh skill root | 0.1.0-rc.5 (2026-08-13) |
| mstar-harness | [btspoony/mstar-harness](https://github.com/btspoony/mstar-harness) | - | Morning Star skill-driven engineering workflow (roles, phase gates, plan conventions) shipped as twenty SKILL.md units; copy skills/* into a dsh skill root | 0.1.0-rc.5 (2026-08-13) |

### Themes

UI skins. Note: third-party theme ids do not yet persist to settings; most skins ship as plugins instead.

| Name | Repo | npm | Description | Verified against |
|---|---|---|---|---|
| dsh-deep-whale | [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale/tree/HEAD/maid-atelier) | - | Whale-girl skin series for the web UI; maid-atelier ships as a dsh.bundle package installed from a local clone (CC BY-NC-SA, non-commercial) | 0.1.0-rc.5 (2026-08-13) |

## Add your plugin

Open a PR against [`data/plugins.json`](data/plugins.json) only; the README is regenerated. See [CONTRIBUTING.md](CONTRIBUTING.md). The spam gate in short: a real install path (a `dsh.bundle` manifest, a published npm package, or a `SKILL.md` layout dsh discovers), not a renamed template fork, and it loads against the dsh version you claim.

A scheduled workflow also sweeps the `dsh-plugin` topic, npm, and GitHub code search; new finds queue in [`data/candidates.json`](data/candidates.json) on a single reused triage PR and never enter the registry without review. Rejected candidates are recorded with one-line reasons in [`data/rejected.json`](data/rejected.json) and are not re-queued.

## Field notes

Verified dsh traps, skill discovery rules, and hook-bridge limits live in [howto-dsh](https://github.com/dshworks/howto-dsh).

## License

MIT. Not affiliated with DeepSeek; the harness README calls itself "an idea, an official showcase, and a source of inspiration", and the ecosystem belongs to the community.
