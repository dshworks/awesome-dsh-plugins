<!-- Rendered by scripts/render.mjs from data/plugins.json. Do not edit by hand: edit the data or the template, then run `npm run render`. -->

# awesome-dsh-plugins

[![powered by dsh](https://img.shields.io/badge/powered__by-dsh-4D6BFE?logo=deepseek)](https://github.com/deepseek-ai/deepseek-harness)
[![license: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![browse the reef](https://img.shields.io/badge/browse-the_reef-ff7a59)](https://dshworks.github.io/awesome-dsh-plugins/)

A spam-filtered, open-data registry of [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`) plugins, bundles, and skills — 2758 entries across 17 functional areas, every one stating the dsh version it was last verified against.

**[Browse the reef](https://dshworks.github.io/awesome-dsh-plugins/)** — the same registry as a filterable, sortable gallery.

Most awesome lists are prose. This one is data: [`data/plugins.json`](data/plugins.json) is the source of truth, this README is rendered from it. Build on the JSON directly:

```sh
curl -s https://raw.githubusercontent.com/dshworks/awesome-dsh-plugins/main/data/plugins.json
```

Each entry carries two orthogonal dimensions: `category` is the form factor (bundle, plugin, skill, theme, tool — what dsh docs call things) and `tags` is the functional area (what it actually does). `stars` is the linked repo's GitHub count (refreshed by `scripts/stars.mjs`, display signal only), and `featured` marks a hand-curated editor's pick.

## Why a filtered registry

DeepSeek delegates the ecosystem to the community: no first-party marketplace, discovery happens on the [`dsh-plugin`](https://github.com/topics/dsh-plugin) GitHub topic. On launch day that topic held 431 repositories. Two days later it holds 2,999, template spam and topic-riders included, and 1,666 of them were created in a single day. A raw topic feed is not a registry; the filter is the value this repo adds.

How much filtering that is, measured: the 2026-08-15 sweep examined 2,382 topic repositories not already in the registry and found no dsh install path at all in 964 of them — no `dsh` manifest in `package.json`, no dsh dependency, no `SKILL.md`. Those repositories carry the topic and nothing else.

If you prefer a curated prose list, [AdamPlatin123/awesome-dsh-plugins](https://github.com/AdamPlatin123/awesome-dsh-plugins) does that well, with daily compatibility tracking. This repo is the machine-readable complement, not a replacement.

## Why "verified against" is a schema field

dsh is a developer preview and the team promises compatibility-breaking changes. Example: the `.dsh-plugin` manifest format was deleted on 2026-08-09 with no migration path, silently stranding every tutorial written against it. A compatibility claim without a version and a date rots, so the schema records both (`verifiedAgainst`, `lastVerified`) and stale entries get re-checked or flagged.

## Contents

- [Editor's picks](#editors-picks)
- [Plugins by area](#plugins-by-area)
  - [Web UI](#web-ui)
  - [Terminals & desktop](#terminals-desktop)
  - [Tools & capabilities](#tools-capabilities)
  - [Vision](#vision)
  - [Agents & orchestration](#agents-orchestration)
  - [Memory & sessions](#memory-sessions)
  - [Models & providers](#models-providers)
  - [Interop & migration](#interop-migration)
  - [Channels & remote](#channels-remote)
  - [Notifications](#notifications)
  - [Usage & cost](#usage-cost)
  - [Observability & evidence](#observability-evidence)
  - [Safety & approvals](#safety-approvals)
  - [Plugin managers & stores](#plugin-managers-stores)
  - [Developer tools](#developer-tools)
  - [Knowledge & research](#knowledge-research)
  - [Fun](#fun)
- [Bundles](#bundles)
- [Skills](#skills)
- [Themes](#themes)
- [Tools](#tools)
- [Add your plugin](#add-your-plugin)

## Editor's picks

Hand-curated, sparing, and revisited as the ecosystem moves; the ⭐ mark in the tables below means the same thing. Stars are the linked repo's count, which for monorepo entries is the whole repo, not the plugin.

- **[dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui)** — Plugin and skin collection for the dsh Web UI: task board, git graph, right-side panel, remote mobile UI, live token stats, and a skin center that routes around the theme-persistence gap <sub>2516 ★ · ui</sub>
- **[modlens](https://github.com/liustack/modlens)** — Vision plugin for text-only models: image understanding bridged into the harness via a dsh.bundle patch layer, shipping a modlens skill alongside <sub>1767 ★ · vision</sub>
- **[dsh-cc-tui](https://github.com/ccch1mneyyy/dsh-cc-tui)** — Claude Code-style fullscreen terminal UI: streaming thinking, double-Esc rewind, context progress bar, and TPS meter over the headless runner <sub>1177 ★ · terminal</sub>
- **[dsh-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar)** — Full sidebar workbench with file rendering/editing, terminal, Git, and subagents; third-party extensions can register new tabs <sub>1102 ★ · ui</sub>
- **[whale-girl](https://github.com/vlln/whale-girl)** — Desktop-pet companion for the web GUI (QQ-pet style): draggable, feedable, levels up with session activity; migrated from the removed .dsh-plugin format to dsh.bundle <sub>162 ★ · fun</sub>
- **[dsh-browser](https://github.com/Lum1104/dsh-browser)** — Chrome sidebar plugin that lets dsh operate the browser directly, without vision. <sub>143 ★ · capabilities</sub>
- **[dsh-workflow](https://github.com/icetomoyo/dsh_workflow)** — Workflow layer that upgrades one-shot multi-agent dispatch into savable, governable, observable, and resumable workflows <sub>57 ★ · agents</sub>
- **[dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind)** — Rewind conversation and workspace state to a previous turn, backed by a persistent change ledger <sub>50 ★ · memory</sub>
- **[dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon)** — Local-first three-tier memory for dsh: runtime memory, searchable documents, and supervised memory spaces. <sub>27 ★ · memory</sub>
- **[dsh-usage-stats](https://github.com/lanlandeli/dsh-usage-stats)** — Beautiful token analytics for DeepSeek Harness — trends, activity heatmaps, model breakdowns, and data exports. <sub>5 ★ · usage</sub>

## Plugins by area

2650 Cordis plugins activated through patch rows in a bundle or profile, grouped by what they do. Data updated 2026-08-15.

Each area shows its 25 most-starred entries and links to the complete list in [`lists/`](lists). GitHub stops rendering a markdown file partway through once it passes about half a megabyte — silently, mid-row — so the full tables live in files small enough to survive that. Nothing is dropped: [`data/plugins.json`](data/plugins.json) and the [gallery](https://dshworks.github.io/awesome-dsh-plugins/) always hold everything.

### Web UI

Panels, composer upgrades, navigation, layout, mobile.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-web-ui ⭐ | 2516 | [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) | Plugin and skin collection for the dsh Web UI: task board, git graph, right-side panel, remote mobile UI, live token stats, and a skin center that routes around the theme-persistence gap | 0.1.0-rc.5 (2026-08-13) |
| dsh-better-sidebar ⭐ | 1102 | [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) · [npm](https://www.npmjs.com/package/dsh-better-sidebar) | Full sidebar workbench with file rendering/editing, terminal, Git, and subagents; third-party extensions can register new tabs | 0.1.0-rc.5 (2026-08-13) |
| mnemon | 451 | [mnemon-dev/mnemon](https://github.com/mnemon-dev/mnemon) · [npm](https://www.npmjs.com/package/@mnemon-dev/dsh-mnemon) | Install the full dsh-mnemon integration from the Mnemon repository. | 0.1.0-rc.6 (2026-08-14) |
| superdesign-skill | 414 | [superdesigndev/superdesign-skill](https://github.com/superdesigndev/superdesign-skill) | Design or redesign frontend UI and marketing graphics on the Superdesign infinite canvas — the Superdesign skill, packaged as a DeepSeek Harness bundle. | 0.1.0-rc.6 (2026-08-15) |
| dsh-at-file | 204 | [omdsh-dev/dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) | Codex-style @file mentions in the composer: search workspace files and attach their contents to prompts | 0.1.0-rc.5 (2026-08-13) |
| dsh-visualize | 102 | [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) | Generative UI in conversation: a visualize tool plus companion skill renders interactive HTML cards in sandboxed frames with streaming preview | 0.1.0-rc.5 (2026-08-13) |
| dsh-genui | 101 | [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) | Renders interactive UI components inline in assistant replies via the dsh-ui fence: layout, charts, plots, forms, quizzes, mermaid, 3D scenes, and an action event loop back to the model. | 0.1.0-rc.6 (2026-08-14) |
| dsh-openpencil | 77 | [ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) · [npm](https://www.npmjs.com/package/@zseven-w/dsh-openpencil) | OpenPencil design preview and editing inside the web UI | 0.1.0-rc.5 (2026-08-13) |
| ProMentor | 54 | [Lyn-77/ProMentor](https://github.com/Lyn-77/ProMentor/tree/HEAD/dsh-plugin/src/client-ui-promentor) | ProMentor course dashboard in the Web GUI: composer-dock trigger plus a full-frame dashboard panel | 0.1.0-rc.6 (2026-08-15) |
| dsh-annotation | 51 | [omdsh-dev/dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) | DSH Web selection-annotation plugin: select assistant text, annotate (optional), and press Enter to send the annotation block with your message — the model replies to each annotation by number,. | 0.1.0-rc.6 (2026-08-14) |
| dsh-open-in-vscode | 45 | [omdsh-dev/dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) | Open workspace directories in VS Code directly from the web GUI | 0.1.0-rc.5 (2026-08-13) |
| dsh-ui-status-label | 32 | [alingalingling/ui-status-label](https://github.com/alingalingling/ui-status-label) | Web UI plugin that makes the assistant's thinking status label ('deep diving') user-configurable through settings | 0.1.0-rc.5 (2026-08-13) |
| dsh-share | 19 | [hellodigua/dsh-share](https://github.com/hellodigua/dsh-share) | Share a DSH conversation turn as a PNG image. | 0.1.0-rc.6 (2026-08-14) |
| dsh-auto-continue | 16 | [HsiangNianian/dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) | Automatically sends continue when a Web UI request is interrupted by network errors or other non-human causes. | 0.1.0-rc.6 (2026-08-14) |
| dsh-stickers | 16 | [william-jin-cmu/dsh-stickers](https://github.com/william-jin-cmu/dsh-stickers) | 人类 cannot live without 表情包：让 DSH 和用户在 WebUI 里发表情 | 0.1.0-rc.6 (2026-08-15) |
| dsh-file-explorer | 15 | [joejojoking-cloud/dsh-file-explorer](https://github.com/joejojoking-cloud/dsh-file-explorer) | Right-side resizable file tree with search, syntax-highlighted preview, in-panel editing, and one-click VS Code open. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-session-delete | 15 | [lsz-asd/dsh-plugin-session-delete](https://github.com/lsz-asd/dsh-plugin-session-delete) | Delete sessions of a DeepSeek Harness profile from the UI: header danger button + session-row menu item with a risk-consent dialog; host endpoint + tool delete the log, projection cache and. | 0.1.0-rc.6 (2026-08-14) |
| dsh-gui-customization | 13 | [LAN-TINA-WS/dsh-gui-customization](https://github.com/LAN-TINA-WS/dsh-gui-customization/tree/HEAD/packages/dsh-gui-customization) | DSH theme plugin for the DeepSeek Harness Web UI: Nous Blue palette, ambient glow, dynamic image/video backgrounds. DSH 界面设定插件：配色 / 氛围光 / 动态背景（中英双语） | 0.1.0-rc.6 (2026-08-15) |
| dsh-composer-polish | 12 | [tianji-qingtian/dsh-composer-polish](https://github.com/tianji-qingtian/dsh-composer-polish) | Composer draft polisher: a sparkle button rewrites the current draft with a zero-latency flash pass. | 0.1.0-rc.6 (2026-08-14) |
| dsh-diff-viewer | 12 | [lehhair/dsh-diff-viewer](https://github.com/lehhair/dsh-diff-viewer) | DSH diff-viewer plugin: PiUI-style visual diff surface (split/unified, change bars, line numbers, word-level marks, collapsed context, windowed rendering) replacing the stock DiffBlock for. | 0.1.0-rc.6 (2026-08-14) |
| dsh-mobile | 12 | [lehhair/dsh-mobile](https://github.com/lehhair/dsh-mobile) | Narrow-screen pager: the stock three-column frame becomes a swipeable sidebar\|chat pager with safe-area insets. | 0.1.0-rc.6 (2026-08-14) |
| dsh-file-review | 11 | [left0ver/dsh-file-review](https://github.com/left0ver/dsh-file-review) · [npm](https://www.npmjs.com/package/dsh-file-review) | Review files an agent just changed in a line-numbered unified diff drawer. | 0.1.0-rc.6 (2026-08-14) |
| dsh-github-panel | 10 | [PivotStackIntelligence/dsh-github](https://github.com/PivotStackIntelligence/dsh-github) | Source Control and GitHub panel for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-qq2006 | 10 | [LaplaceYoung/dsh-qq2006](https://github.com/LaplaceYoung/dsh-qq2006) | QQ2006 skin plugin for DSH (DeepSeek Harness): registers the 'qq2006' theme (coral-blue --dsw-alias-* token overrides), mirrors the active theme onto body[data-ds-skin], and ships the global | 0.1.0-rc.6 (2026-08-15) |
| dsh-web-mobile | 10 | [mexiaosqwq/dsh-web-mobile](https://github.com/mexiaosqwq/dsh-web-mobile) | Mobile-adaptive DSH web UI: on narrow screens the sidebar rail is hidden and the directory opens as an overlay drawer, so the conversation gets the full width. | 0.1.0-rc.6 (2026-08-15) |

<sub>Showing the 25 most-starred of 286. **[all 286 →](lists/web-ui.md)** · [gallery](https://dshworks.github.io/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Terminals & desktop

TUIs, desktop shells, headless runners.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| deepseek-harness-desktop | 4894 | [anywhere-labs/deepseek-harness-desktop](https://github.com/anywhere-labs/deepseek-harness-desktop) | 为 DeepSeek Harness (DSH) 生态打造的现代化桌面端体验 | 0.1.0-rc.6 (2026-08-15) |
| dsh-cc-tui ⭐ | 1177 | [ccch1mneyyy/dsh-cc-tui](https://github.com/ccch1mneyyy/dsh-cc-tui) · [npm](https://www.npmjs.com/package/dsh-cc-tui) | Claude Code-style fullscreen terminal UI: streaming thinking, double-Esc rewind, context progress bar, and TPS meter over the headless runner | 0.1.0-rc.5 (2026-08-13) |
| working-activity | 644 | [ccch1mneyyy/working-activity](https://github.com/ccch1mneyyy/working-activity/tree/HEAD/packages/activity/working-activity) | Live model working-status line: playful copy, running tool, turn elapsed — for TUI prompt and Web UI | 0.1.0-rc.6 (2026-08-15) |
| dsh-desktop | 226 | [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | A cross-platform desktop shell for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-15) |
| dsh-tianshu-tui | 155 | [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) · [npm](https://www.npmjs.com/package/@huiliyi37/dsh-tianshu-tui) | Terminal UI for dsh shipped as an installable profile bundle | 0.1.0-rc.5 (2026-08-13) |
| deepseek-harness-desktop-ningbain | 44 | [ningbainb/deepseek-harness-desktop](https://github.com/ningbainb/deepseek-harness-desktop/tree/HEAD/apps/dsh-desktop) | Lossless desktop shell for DeepSeek Harness and the complete dsh-web-ui plugin collection | 0.1.0-rc.6 (2026-08-15) |
| deepseek-app | 30 | [RongleCat/deepseek-app](https://github.com/RongleCat/deepseek-app) | Desktop workbench for DeepSeek Harness — Grok App visual shell, DSH engine | 0.1.0-rc.6 (2026-08-15) |
| deepseek-harness-tui-openmaai | 25 | [openma-ai/deepseek-harness-tui](https://github.com/openma-ai/deepseek-harness-tui/tree/HEAD/npm) | Terminal-native agent UI for DeepSeek Harness; standalone CLI or dsh profile bundle | 0.1.0-rc.6 (2026-08-15) |
| DSHDesktop | 21 | [CCMu04/DSHDesktop](https://github.com/CCMu04/DSHDesktop) | Unofficial Windows desktop shell for the unmodified DeepSeek Harness Web UI | 0.1.0-rc.6 (2026-08-15) |
| deepseek-harness-desktop-cc1252 | 17 | [cc1252/deepseek-harness-desktop](https://github.com/cc1252/deepseek-harness-desktop/tree/HEAD/harness) | Unpruned runtime payload for the Electron wrapper | 0.1.0-rc.6 (2026-08-15) |
| dshcode | 17 | [whitelonng/dshcode](https://github.com/whitelonng/dshcode) | Community desktop companion for DeepSeek Harness — one-click Electron app for macOS and Windows | 0.1.0-rc.6 (2026-08-15) |
| dsh-tui-dshtui | 15 | [dsh-tui/dsh-tui](https://github.com/dsh-tui/dsh-tui) | Claude Code-style interactive terminal UI for DeepSeek Harness agents | 0.1.0-rc.6 (2026-08-15) |
| deepseek-harness-desktop-chyramoo | 10 | [chyra-moon/deepseek-harness-desktop](https://github.com/chyra-moon/deepseek-harness-desktop) | DeepSeek Harness desktop app: the official dsh web UI in a native Electron shell, with embedded server management, tray and notifications. | 0.1.0-rc.6 (2026-08-15) |
| dsh-desktop-liguobao | 10 | [liguobao/dsh-desktop](https://github.com/liguobao/dsh-desktop) | Community desktop wrapper for the DeepSeek Harness Web UI | 0.1.0-rc.6 (2026-08-15) |
| deepseek-harness-docker-runzhliu | 8 | [runzhliu/deepseek-harness-docker](https://github.com/runzhliu/deepseek-harness-docker/tree/HEAD/plugins/dsh-browser-desktop) | Movable, resizable Chromium desktop embedded in the DeepSeek Harness Web UI through noVNC. | 0.1.0-rc.6 (2026-08-15) |
| deepseek-harness-tui | 7 | [gxinxing/deepseek-harness-tui](https://github.com/gxinxing/deepseek-harness-tui) | Interactive terminal chat TUI for the DeepSeek Harness (dsh) | 0.1.0-rc.6 (2026-08-15) |
| deepseek-harness-desktop-zassyj | 6 | [zasSYJ/deepseek-harness-desktop](https://github.com/zasSYJ/deepseek-harness-desktop) | DeepSeek Harness 桌面版 - 把 dsh Web 打包成 Windows 桌面应用 | 0.1.0-rc.6 (2026-08-15) |
| deepseek-harness-tui-boxeryao | 6 | [boxeryao/deepseek-harness-tui](https://github.com/boxeryao/deepseek-harness-tui) | DSH-TUI: a lightweight and fast terminal plugin connected directly to the DSH runtime | 0.1.0-rc.6 (2026-08-15) |
| deepseek-tui | 6 | [Hilbert-beinghappy/deepseek-tui](https://github.com/Hilbert-beinghappy/deepseek-tui) | A pluggable DeepSeek-colored terminal surface for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-desktop-luoross | 6 | [luo-ross/dsh-desktop](https://github.com/luo-ross/dsh-desktop) | Unofficial community desktop edition of DeepSeek Harness for Windows | 0.1.0-rc.6 (2026-08-15) |
| dshx-terminal | 6 | [Maydaytyh/dshx-terminal](https://github.com/Maydaytyh/dshx-terminal) | A native interactive terminal frontend for DeepSeek Harness | 0.1.0-rc.6 (2026-08-15) |
| seektty | 6 | [Hilbert-beinghappy/seektty](https://github.com/Hilbert-beinghappy/seektty) · [npm](https://www.npmjs.com/package/seektty) | SeekTTY, a pluggable DeepSeek-colored terminal surface for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| turtle-ui | 6 | [turtle1999/turtle-ui](https://github.com/turtle1999/turtle-ui) | Interactive pi-tui terminal front door for DeepSeek Harness agents | 0.1.0-rc.6 (2026-08-15) |
| deepseek-harness-desktop-bailang1 | 5 | [bailang1218/deepseek-harness-desktop](https://github.com/bailang1218/deepseek-harness-desktop) | Community-maintained self-contained Tauri desktop distribution for DeepSeek Harness | 0.1.0-rc.6 (2026-08-15) |
| dsh-desktop-ethanwea | 5 | [ethanweave/dsh-desktop](https://github.com/ethanweave/dsh-desktop/tree/HEAD/runtime) | DeepSeek Harness 桌面应用（类 Codex）：原生窗口 + 系统托盘 | 0.1.0-rc.6 (2026-08-15) |

<sub>Showing the 25 most-starred of 119. **[all 119 →](lists/terminals-desktop.md)** · [gallery](https://dshworks.github.io/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Tools & capabilities

New things the model can do: search, browser, files, databases, devices, media.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| mirage | 3441 | [strukto-ai/mirage](https://github.com/strukto-ai/mirage/tree/HEAD/typescript/packages/dsh) | DeepSeek Harness (dsh) providers backed by a mirage workspace: ctx.fs and ctx.shell over mounted resources | 0.1.0-rc.6 (2026-08-15) |
| dsh-browser ⭐ | 143 | [Lum1104/dsh-browser](https://github.com/Lum1104/dsh-browser) | Chrome sidebar plugin that lets dsh operate the browser directly, without vision. | 0.1.0-rc.6 (2026-08-14) |
| notes | 142 | [zhaoolee/notes](https://github.com/zhaoolee/notes/tree/HEAD/dsh-plugin) | DeepSeek Harness 插件：把用户对话导出为锤子便签（通过便签服务 API 写入云端工作区）。 | 0.1.0-rc.6 (2026-08-15) |
| modsearch | 104 | [liustack/modsearch](https://github.com/liustack/modsearch) · [npm](https://www.npmjs.com/package/@liustack/modsearch) | Web plugin for dsh that gives a text-only model the web: search, X, and any page as structured evidence. | 0.1.0-rc.6 (2026-08-14) |
| dsh-gitbash-preset | 88 | [liceses/dsh-gitbash-preset](https://github.com/liceses/dsh-gitbash-preset) | DeepSeek Harness plugin: installs the 'minimal-gitbash' agent preset — the Windows variant of the shipped minimal preset that routes the bash tool through Git for Windows bash (MSYS), with automatic | 0.1.0-rc.6 (2026-08-15) |
| sealos-skills | 70 | [labring/sealos-skills](https://github.com/labring/sealos-skills) | DeepSeek Harness bundle that registers the Sealos skill pack on ctx.skills. | 0.1.0-rc.6 (2026-08-15) |
| forkprobe | 66 | [Jayden-X-L/forkprobe](https://github.com/Jayden-X-L/forkprobe) | Native DeepSeek Harness plugin for comparing AI Skills on the same task and choosing a winner from a local ForkProbe report. | 0.1.0-rc.6 (2026-08-15) |
| Liang-Saint-Slider | 57 | [BruzWJ/Liang-Saint-Slider](https://github.com/BruzWJ/Liang-Saint-Slider) | 滑动变祖器 — the liang-intensity-calibrator as the DeepSeek Harness model + thinking-effort slider. Clicking the composer's model seat opens the 31-level calibrator directly; the six stages map 1:1 onto | 0.1.0-rc.6 (2026-08-15) |
| dsh-toy | 44 | [c3ll256/dsh-toy](https://github.com/c3ll256/dsh-toy) | Connects toys/devices to DSH: asks brand/model then picks Intiface (Bluetooth, serial, USB; auto-starts Engine) or MonsterParty for known share-link models; unknown starts generic Bluetooth search. | 0.1.0-rc.6 (2026-08-14) |
| anysearch-dsh | 32 | [anysearch-team/anysearch-dsh](https://github.com/anysearch-team/anysearch-dsh) | AnySearch web search provider and advanced tools for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| allinluna | 28 | [zenx0x/allinluna](https://github.com/zenx0x/allinluna/tree/HEAD/plugins/deepseek-harness) | DeepSeek Harness Cordis tools for All in Flash, powered by All in Luna | 0.1.0-rc.6 (2026-08-15) |
| dsh-data-agent | 27 | [omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) | Session-scoped MySQL/PostgreSQL/SQLite connections, an sqlcmd tool, a data-agent preset, and a database tab. | 0.1.0-rc.6 (2026-08-14) |
| dsh-interconnect | 27 | [Chinesezjc/dsh-interconnect](https://github.com/Chinesezjc/dsh-interconnect) | Cross-instance message/event handoff plugins for DeepSeek Harness (DSH): interconnect service + model-facing tools | 0.1.0-rc.6 (2026-08-15) |
| dsh-custom-tool | 24 | [omdsh-dev/dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool) | Create and manage sandboxed JavaScript tools with a Monaco editor and a model-driven tool lifecycle | 0.1.0-rc.5 (2026-08-13) |
| HoloGram | 24 | [834063245-creator/HoloGram](https://github.com/834063245-creator/HoloGram/tree/HEAD/dsh-bundle) | HoloGram code-dependency graph engine + 3D viewer, packaged as a DeepSeek Harness bundle plugin. Engine binary is fetched from GitHub Releases on install (Windows x64). | 0.1.0-rc.6 (2026-08-15) |
| dsh-navbar | 23 | [vlln/dsh-navbar](https://github.com/vlln/dsh-navbar) | 对话节点导航条——user 消息快速跳转（自渲染 DOM，官方 client 通道） | 0.1.0-rc.6 (2026-08-15) |
| dsh-message-edit | 22 | [Moeblack/dsh-message-edit](https://github.com/Moeblack/dsh-message-edit) | Branch-based editing, rerolling, retrying, and version navigation for DeepSeek Harness conversations | 0.1.0-rc.6 (2026-08-15) |
| dsh-computer-use | 21 | [Anionex/dsh-computer-use](https://github.com/Anionex/dsh-computer-use) | Accessibility-first macOS Computer Use capability for DeepSeek Harness with stale-observation protection, app leases, confirmations, screenshots, and Web diagnostics | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-mineru | 21 | [HuanLinOTO/dsh-plugin-mineru](https://github.com/HuanLinOTO/dsh-plugin-mineru) | DSH plugin exposing MinerU document parsing tools to the model, with a web UI settings page for the API base URL. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin | 19 | [Tabbit-Browser/dsh-plugin](https://github.com/Tabbit-Browser/dsh-plugin) · [npm](https://www.npmjs.com/package/tabbit-browser) | DSH bundle that packages the Tabbit Browser skill and background installer | 0.1.0-rc.6 (2026-08-14) |
| distill | 17 | [LoserFox/distill](https://github.com/LoserFox/distill) | Automatic conversation reflection and skill distillation for the DeepSeek Harness | 0.1.0-rc.6 (2026-08-15) |
| quantum-practices | 17 | [unitarylab/quantum-practices](https://github.com/unitarylab/quantum-practices) | Quantum Algorithms Best Practices tool bundle for DeepSeek Harness | 0.1.0-rc.6 (2026-08-15) |
| skills | 17 | [upstash/skills](https://github.com/upstash/skills) | Collection of skills for Upstash | 0.1.0-rc.6 (2026-08-15) |
| dsh-web-review | 15 | [CanglongCl/dsh-web-review](https://github.com/CanglongCl/dsh-web-review/tree/HEAD/packages/dsh-web-review) | DSH web review plugin: page preview, element annotation, visual adjustments, and AI-driven workspace source edits | 0.1.0-rc.6 (2026-08-15) |
| dsh-computer-use-zrui | 13 | [ZRui-C/dsh-computer-use](https://github.com/ZRui-C/dsh-computer-use) | Text-first browser and background macOS control for DeepSeek Harness, targeting the right process and window without grabbing the pointer. | 0.1.0-rc.6 (2026-08-14) |

<sub>Showing the 25 most-starred of 514. **[all 514 →](lists/tools-capabilities.md)** · [gallery](https://dshworks.github.io/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Vision

Image understanding for text-only models.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| archify | 12867 | [tt-a1i/archify](https://github.com/tt-a1i/archify/tree/HEAD/integrations/deepseek-harness) | Opt-in DeepSeek Harness Skill-only bundle for the Archify architecture-diagram skill. | 0.1.0-rc.6 (2026-08-15) |
| modlens ⭐ | 1767 | [liustack/modlens](https://github.com/liustack/modlens) · [npm](https://www.npmjs.com/package/@liustack/modlens) | Vision plugin for text-only models: image understanding bridged into the harness via a dsh.bundle patch layer, shipping a modlens skill alongside | 0.1.0-rc.5 (2026-08-13) |
| dsh-vision-toolkit | 414 | [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | Harness-native integration of agent-vision-toolkit for text-only models: image Q&A with intent, long-screenshot OCR, UI restoration, grounding, and pixel diff | 0.1.0-rc.5 (2026-08-13) |
| dsh-vision-router | 120 | [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) | Turn-level vision routing with provider fallbacks, a cached vision_describe tool, JSON output, and optional per-host proxy. | 0.1.0-rc.6 (2026-08-14) |
| dsh-vision-oil | 31 | [oil-oil/dsh-vision](https://github.com/oil-oil/dsh-vision) · [npm](https://www.npmjs.com/package/@oil-oil/dsh-vision) | Near-native image understanding for text-only DeepSeek Harness models. | 0.1.0-rc.6 (2026-08-14) |
| dsh-vision-linenxi | 11 | [linenxi-ctrl/dsh-vision](https://github.com/linenxi-ctrl/dsh-vision) · [npm](https://www.npmjs.com/package/@linenxi-ctrl/dsh-vision) | External vision model for DeepSeek Harness: config panel, send-image recognition, and screenshot tools. | 0.1.0-rc.6 (2026-08-14) |
| dsh-docs | 9 | [Sqhao-O/dsh-docs](https://github.com/Sqhao-O/dsh-docs) | Local PDF, Office, image, and OCR document intelligence for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-15) |
| dsh-vision-proxy | 8 | [Flyvhidbwo/dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) | deepseek-vision provider route that transcribes attached images via an OpenAI-compatible VLM before DeepSeek answers. | 0.1.0-rc.6 (2026-08-14) |
| deepseek-harness-docker | 7 | [AlliotTech/deepseek-harness-docker](https://github.com/AlliotTech/deepseek-harness-docker) | Reproducible container image for DeepSeek Harness | 0.1.0-rc.6 (2026-08-15) |
| dsh-vision-opencode | 7 | [poiuyjie/dsh-vision-opencode](https://github.com/poiuyjie/dsh-vision-opencode) | DeepSeek Harness plugin: configurable vision model with vision_read_image tool, composer-bar vision-model selector, and automatic image-to-text conversion for text-only main models. | 0.1.0-rc.6 (2026-08-15) |
| dsh-visual-plugin | 7 | [jyh20030112/dsh-visual-plugin](https://github.com/jyh20030112/dsh-visual-plugin) | Vision bridge plugin for DeepSeek Harness: when the main model has no vision, forward user images to a configurable OpenAI-compatible vision model and show results in a Web UI right panel. Host. | 0.1.0-rc.6 (2026-08-14) |
| image-vision | 7 | [wangyang10/image-vision](https://github.com/wangyang10/image-vision/tree/HEAD/dsh-image-vision) | DeepSeek Harness plugin: gives text-only models (e.g. DeepSeek) image-reading ability via any OpenAI-compatible vision API. Registers the vision_query tool, DSH credentials integration, and the | 0.1.0-rc.6 (2026-08-15) |
| deepseek-visionary | 6 | [xlight/deepseek-visionary](https://github.com/xlight/deepseek-visionary/tree/HEAD/packages/dsh-plugin) | DeepSeek Visionary native plugin for DeepSeek Harness: deepseek_vision / status / login / logout native tools backed by the visionary-server CLI (DeepSeek web vision model, no API key). | 0.1.0-rc.6 (2026-08-15) |
| dsh-windows-ocr | 6 | [maxwell-feng/dsh-windows-ocr](https://github.com/maxwell-feng/dsh-windows-ocr) | dsh plugin: recognize attached images with the built-in Windows OCR engine (Windows.Media.Ocr) and send only the recognized text to the model — image bytes never leave the machine. | 0.1.0-rc.6 (2026-08-15) |
| dsh-image-subagent | 5 | [yuqingsh/dsh-image-subagent](https://github.com/yuqingsh/dsh-image-subagent) | 让纯文本主模型（DeepSeek V4 等）也能接收图片附件：图片投影为显式占位文本，由主模型委托视觉子代理经 read_attachment/read_image 读取。零核心补丁，纯插件实现。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-describe-image | 5 | [whitelonng/dsh-plugin-describe-image](https://github.com/whitelonng/dsh-plugin-describe-image/tree/HEAD/packages/vision/tool-describe-image) | Model-facing describe_image tool: asks a vision-language model at an OpenAI-compatible endpoint to describe an image file or URL | 0.1.0-rc.6 (2026-08-15) |
| dsh-vision-sidecar | 5 | [121103qwq/dsh-vision-sidecar](https://github.com/121103qwq/dsh-vision-sidecar) | Add no-key hosted or OpenAI-compatible vision to DeepSeek Harness while keeping the configured reasoning model | 0.1.0-rc.6 (2026-08-14) |
| DeepSeek-harness-wecom | 4 | [sliverp/DeepSeek-harness-wecom](https://github.com/sliverp/DeepSeek-harness-wecom) | WeCom AI Bot text, image, and file channel bridge for DeepSeek Harness | 0.1.0-rc.6 (2026-08-15) |
| dsh-aux-vision | 4 | [XyTT2N2bTc/dsh-aux-vision](https://github.com/XyTT2N2bTc/dsh-aux-vision) | DeepSeek Harness 辅助视觉插件：任意纯文本主模型 + 任意视觉模型（默认 opencode-go/mimo-v2.5）。含图轮次自动让视觉模型看原图（像素级），并把描述以文本注入当前轮供主模型使用；纯文本轮零视觉调用。 | 0.1.0-rc.6 (2026-08-15) |
| dsh-her-eyes | 4 | [huashenglian/dsh-her-eyes](https://github.com/huashenglian/dsh-her-eyes) | Application-level Vision-Language-Model (VLM) analyzer for DeepSeek Harness: analyze_image tool with primary/backup OpenAI-compatible endpoints, automatic failover, and an auto-saving web settings | 0.1.0-rc.6 (2026-08-15) |
| dsh-image-bridge-kbpoyo | 4 | [kbpoyo/dsh-image-bridge](https://github.com/kbpoyo/dsh-image-bridge) · [npm](https://www.npmjs.com/package/@kbpoyo/dsh-image-bridge) | DSH Web plugin that lets text-only models see images: paste images in the chat and send without file paths; the model discovers its own vision tools. Multimodal models pass through natively. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-deepeye | 4 | [Favio8/dsh-plugin-deepeye](https://github.com/Favio8/dsh-plugin-deepeye) | DeepSeek Harness native plugin: vision capabilities for text-only LLMs (describe, OCR, VQA, layout analysis, clipboard) | 0.1.0-rc.6 (2026-08-15) |
| dsh-vision-provider | 4 | [libinyam/dsh-vision-provider](https://github.com/libinyam/dsh-vision-provider) | DeepSeek Harness adapter that exposes each configured vision model as a selectable DeepSeek composite in Web UI. | 0.1.0-rc.6 (2026-08-15) |
| deepseek-harness-desktop-kevph202 | 3 | [KevPH2026/deepseek-harness-desktop](https://github.com/KevPH2026/deepseek-harness-desktop) | A native macOS desktop experience for DeepSeek Harness — multimodal generation, community plugin discovery, safe updates, and bilingual docs. | 0.1.0-rc.6 (2026-08-15) |
| DeepSeek-Harness-linux- | 3 | [MoneShadow/DeepSeek-Harness-linux-](https://github.com/MoneShadow/DeepSeek-Harness-linux-/tree/HEAD/plugins/dsh-plugin-vision) | Vision assist for DeepSeek Harness: lets the main model see images through an OpenAI-compatible vision API | 0.1.0-rc.6 (2026-08-15) |

<sub>Showing the 25 most-starred of 146. **[all 146 →](lists/vision.md)** · [gallery](https://dshworks.github.io/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Agents & orchestration

Subagents, workflows, cross-session coordination.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-agent-teams | 320 | [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | AgentTeams plugin: coordinate teams of subagents from the web UI | 0.1.0-rc.5 (2026-08-13) |
| dsh-agent-rp | 124 | [hewzhew/dsh-agent-rp](https://github.com/hewzhew/dsh-agent-rp) · [npm](https://www.npmjs.com/package/@dsh-external/dsh-agent-rp) | SillyTavern migration and next-generation Agent RP for DSH | 0.1.0-rc.6 (2026-08-14) |
| odai | 84 | [orziz/odai](https://github.com/orziz/odai/tree/HEAD/dsh/agent) | 完整继承 DSH Standard 全部能力的 Odai Agent preset。 | 0.1.0-rc.6 (2026-08-15) |
| dsh-workflow ⭐ | 57 | [icetomoyo/dsh_workflow](https://github.com/icetomoyo/dsh_workflow) | Workflow layer that upgrades one-shot multi-agent dispatch into savable, governable, observable, and resumable workflows | 0.1.0-rc.5 (2026-08-13) |
| dsh-automation | 39 | [titanwings/dsh-automation](https://github.com/titanwings/dsh-automation) | Run coding tasks on schedule in fresh Agent sessions, and manage automations from DeepSeek Harness Web or an Agent | 0.1.0-rc.6 (2026-08-15) |
| dsh-openbiliclaw | 26 | [whiteguo233/dsh-openbiliclaw](https://github.com/whiteguo233/dsh-openbiliclaw) · [npm](https://www.npmjs.com/package/@openbiliclaw/dsh-plugin) | OpenBiliClaw DeepSeek Harness plugin: the user-consumption side (recommendations, delight, saved, Socratic chat, profile, probes, activity) as a web-GUI sidebar, plus agent-bridge tools and the. | 0.1.0-rc.6 (2026-08-14) |
| Cobsidian | 10 | [Totoro-qaq/Cobsidian](https://github.com/Totoro-qaq/Cobsidian/tree/HEAD/integrations/dsh) | DeepSeek Harness Cordis bundle for the Cobsidian agent skill | 0.1.0-rc.6 (2026-08-15) |
| deepseek-harness-ux | 10 | [ayuanwong/deepseek-harness-ux](https://github.com/ayuanwong/deepseek-harness-ux) | 长任务，不刷屏：关键进度清晰可见，完成后自动折叠，详情随时展开。 Long agent tasks, without transcript clutter: focused progress, auto-folded history, details on demand. | 0.1.0-rc.6 (2026-08-15) |
| dsh-spec-loop | 10 | [tianji-qingtian/dsh-spec-loop](https://github.com/tianji-qingtian/dsh-spec-loop) | Spec-driven development loop: /spec drives propose, approve, implement, verify, and archive. | 0.1.0-rc.6 (2026-08-14) |
| dsh-task-status | 10 | [vlln/dsh-task-status](https://github.com/vlln/dsh-task-status) | 后台任务状态条——对话输入区上方的任务进度 UI（官方 dock 槽 + Node 轮询路由） | 0.1.0-rc.6 (2026-08-15) |
| dsh-acp-for-bitfun | 9 | [bobleer/dsh-acp-for-bitfun](https://github.com/bobleer/dsh-acp-for-bitfun) | BitFun 与 DSH ACP 交互对接 插件: expose the BitFun agent (https://github.com/GCWing/BitFun) as a subagent provider inside DeepSeek Harness over the Agent Client Protocol | 0.1.0-rc.6 (2026-08-15) |
| dsh-advisor | 9 | [omdsh-dev/dsh-advisor](https://github.com/omdsh-dev/dsh-advisor) | Per-session reviewer model that watches the primary transcript and injects severity-ranked advice. | 0.1.0-rc.6 (2026-08-14) |
| dsh-harness-ops | 9 | [fakechris/dsh-harness-ops](https://github.com/fakechris/dsh-harness-ops/tree/HEAD/plugins/dsh-restart-recover) | Restart recovery for dsh web: after a crash/restart, an interrupted agent turn continues automatically (host-side agent/created listener — no browser timing races). Pairs with the dsh-web-guard skill | 0.1.0-rc.6 (2026-08-15) |
| deepseek-harness-fnos | 8 | [techysy/deepseek-harness-fnos](https://github.com/techysy/deepseek-harness-fnos/tree/HEAD/app/server) | DeepSeek Harness (DeepSeek 官方 agent 浏览器 UI) fnOS 应用 — 本地常驻服务 | 0.1.0-rc.6 (2026-08-15) |
| dsh-plugin-solo-thinking | 8 | [fredalxin/dsh-plugin-solo-thinking](https://github.com/fredalxin/dsh-plugin-solo-thinking) · [npm](https://www.npmjs.com/package/dsh-plugin-solo-thinking) | Solo-style isolated brainstorm branches and Handoffs for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| laobos-agent-studio | 8 | [Modole/laobos-agent-studio](https://github.com/Modole/laobos-agent-studio) | 劳博士：基于 DeepSeek Harness 的本地 Agent 桌面客户端 | 0.1.0-rc.6 (2026-08-15) |
| dsh-plugin-yet-another-subagent | 7 | [HuanLinOTO/dsh-plugin-yet-another-subagent](https://github.com/HuanLinOTO/dsh-plugin-yet-another-subagent) | Configurable subagent profiles with web UI settings, real-time toolcall/token display, and click-to-navigate child sessions. | 0.1.0-rc.6 (2026-08-14) |
| dsh-record-replay | 7 | [humblebanana/dsh-record-replay](https://github.com/humblebanana/dsh-record-replay) | DeepSeek Harness plugin: model-facing orr_* tools plus the open-record-replay skill for the Open Record/Replay macOS workflow recorder. | 0.1.0-rc.6 (2026-08-15) |
| dsh-sentinel | 7 | [fuhefei/dsh-sentinel](https://github.com/fuhefei/dsh-sentinel) · [npm](https://www.npmjs.com/package/@dsh-external/dsh-sentinel) | DSH 哨兵：条件驱动的 agent 唤醒系统——文件/进程/端口/命令传感器，订阅存为会话事件，重启自动复活；每个订阅、每次触发对用户完全可见 | 0.1.0-rc.6 (2026-08-14) |
| SumSec-Skills | 7 | [SummerSec/SumSec-Skills](https://github.com/SummerSec/SumSec-Skills) | SummerSec personal Agent Skills monorepo and DeepSeek Harness profile bundle; version mirrors multi-platform plugin manifests. | 0.1.0-rc.6 (2026-08-15) |
| dsh-mini | 6 | [LouisYang841/dsh-mini](https://github.com/LouisYang841/dsh-mini) | pi shell + DeepSeek Harness core: portable agent engine + coding-agent CLI. Zero runtime npm dependencies — everything is bundled into the release artifacts. | 0.1.0-rc.6 (2026-08-15) |
| dsh-peer-link | 6 | [czm15053/dsh-peer-link](https://github.com/czm15053/dsh-peer-link) | Point-to-point messaging between dsh agents and other local agent sessions over unix sockets. | 0.1.0-rc.6 (2026-08-14) |
| dsh-track | 6 | [fakechris/dsh-track](https://github.com/fakechris/dsh-track) | Embedded task-management engine: decision-point protocol, capture wall, and Linear-shaped issues over session events. | 0.1.0-rc.6 (2026-08-14) |
| cathead-coding | 5 | [catyans/cathead-coding](https://github.com/catyans/cathead-coding) | A delightful open-source coding agent CLI powered by DeepSeek Harness. | 0.1.0-rc.6 (2026-08-15) |
| deepseek-acp | 5 | [xintaofei/deepseek-acp](https://github.com/xintaofei/deepseek-acp) | Editor-facing Agent Client Protocol adapter for DeepSeek Harness | 0.1.0-rc.6 (2026-08-15) |

<sub>Showing the 25 most-starred of 217. **[all 217 →](lists/agents-orchestration.md)** · [gallery](https://dshworks.github.io/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Memory & sessions

Memory systems, context management, session search/rewind/export.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| sandbase-harness | 588 | [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) | Local-first, self-hosted AI agent runtime with Claude Managed Agents-style APIs, sandboxed sessions, memory, tools, audit, replay, and a local Console. | 0.1.0-rc.6 (2026-08-15) |
| graph-memory | 516 | [adoresever/graph-memory](https://github.com/adoresever/graph-memory) | Knowledge graph memory for DeepSeek Harness and OpenClaw — cross-session recall, PageRank, communities, and vector search | 0.1.0-rc.6 (2026-08-15) |
| cetus | 115 | [drewnekota/cetus](https://github.com/drewnekota/cetus/tree/HEAD/dsh-bridge) | DSH Companion 的本地网关插件：把宿主 ApiProxy 暴露为 127.0.0.1 上的 HTTP + SSE（token 鉴权），供桌面壳驱动会话 | 0.1.0-rc.6 (2026-08-15) |
| deepseek-harness-desktop-app | 115 | [vibeinging/deepseek-harness-desktop-app](https://github.com/vibeinging/deepseek-harness-desktop-app/tree/HEAD/packages/dsh-product-bridge) | Session-scoped DeepSeek Harness Desktop App capabilities for the current DSH Web profile | 0.1.0-rc.6 (2026-08-15) |
| dsh-memory-evolve | 86 | [csyangwen/dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) | 为 DeepSeek Harness 带来分层记忆（全局 / 用户 / 项目 / GIT 分支 / 每日）与自我进化（经验沉淀 + 技能自动创建）和技能管理、待办管理、CLI 调度（kimi/codex/grok/hermes 等外部 AI 统一调度）、临时信息便签，带 WebUI 管理界面。Hermes-style long-term memory, self-evolution | 0.1.0-rc.6 (2026-08-15) |
| dsh-turn-rewind ⭐ | 50 | [Anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) | Rewind conversation and workspace state to a previous turn, backed by a persistent change ledger | 0.1.0-rc.5 (2026-08-13) |
| dsh-context | 40 | [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) · [npm](https://www.npmjs.com/package/dsh-context) | Context insight panel — a Context tab in the dsh web UI showing what the model's context window is made of and how it evolves. | 0.1.0-rc.6 (2026-08-14) |
| dsh-mnemon ⭐ | 27 | [omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) | Local-first three-tier memory for dsh: runtime memory, searchable documents, and supervised memory spaces. | 0.1.0-rc.6 (2026-08-14) |
| dsh-noema | 19 | [ZSeven-W/dsh-noema](https://github.com/ZSeven-W/dsh-noema) · [npm](https://www.npmjs.com/package/@zseven-w/dsh-noema) | Noema long-term memory for DSH: durable, inspectable agent memory with recall tools and a settings page. | 0.1.0-rc.6 (2026-08-14) |
| dsh-milestone | 14 | [SnowCrescenter-tech/dsh-milestone](https://github.com/SnowCrescenter-tech/dsh-milestone) | Git-style milestone timeline for DeepSeek Harness: hover for metadata, click to jump to any message. 会话里程碑导航条：圆点时间线，定位并跳转到每条提问。 | 0.1.0-rc.6 (2026-08-15) |
| dsh-archived-sessions | 10 | [Zephyr-vibe/dsh-archived-sessions](https://github.com/Zephyr-vibe/dsh-archived-sessions) | DSH web plugin: an Archived Sessions manager in Settings — browse archived conversations, expand per-session details (disk usage, downloads, tool usage, lineage, cross-session recall),. | 0.1.0-rc.6 (2026-08-14) |
| powercontext-dsh | 10 | [knqiufan/powercontext-dsh](https://github.com/knqiufan/powercontext-dsh) | DeepSeek Harness plugin that connects to a PowerContext Server over HTTP for recall, memory, handoff, experience, and skills. | 0.1.0-rc.6 (2026-08-15) |
| dsh-paste-input-lhh010 | 8 | [lhh010/dsh-paste-input](https://github.com/lhh010/dsh-paste-input) | DSH WebUI 文件输入增强：Ctrl+V 粘贴（带首次告知弹窗）与拖拽/选择文件，发送时复制进会话工作区临时目录 | 0.1.0-rc.6 (2026-08-15) |
| dsh-ui-progress-lhh010 | 8 | [lhh010/dsh-ui-progress](https://github.com/lhh010/dsh-ui-progress) | DSH Web UI 会话进度插件：输入框停靠区常驻会话进度条（todos 真实进度 / 无投影默认 100% / 中断橘红态 / 实时 token 生成速率），零核心改动。 | 0.1.0-rc.6 (2026-08-15) |
| dsh-auto-memory | 7 | [Aik358/dsh-auto-memory](https://github.com/Aik358/dsh-auto-memory) | DSH 自动记忆插件:三层记忆(用户级/项目笔记/每日日志)自动注入与检索、每日反思、可视化面板与设置页,支持继承其他 AI 工具的记忆。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-compaction-instant | 7 | [KitDoesIt/dsh-compaction-instant](https://github.com/KitDoesIt/dsh-compaction-instant) | Near-lossless deterministic compaction engine for DeepSeek Harness, a drop-in replacement for stock compaction. | 0.1.0-rc.6 (2026-08-14) |
| dsh-memory-system | 7 | [zhujunpeng12/dsh-memory-system](https://github.com/zhujunpeng12/dsh-memory-system) | Local-first persistent memory infrastructure for DeepSeek Harness: bounded hot-memory bootstrap, explainable cold recall (exact + Chinese BM25), lease-lock transactional writes, read-only governance | 0.1.0-rc.6 (2026-08-15) |
| dsh-session-notification | 7 | [dingyi222666/dsh-session-notification](https://github.com/dingyi222666/dsh-session-notification) | Session-state notification plugin for the dsh web GUI: session completed/failed, question-asked, and permission-requested alerts with configurable built-in or custom sounds and browser notifications | 0.1.0-rc.6 (2026-08-15) |
| dsh-archived-conversations | 6 | [hxyz486/dsh-archived-conversations](https://github.com/hxyz486/dsh-archived-conversations) · [npm](https://www.npmjs.com/package/dsh-hxyz-archived-conversations) | View, restore, and delete archived DeepSeek Harness conversations from the settings page. | 0.1.0-rc.6 (2026-08-14) |
| dsh-btw | 6 | [iyllyt/dsh-btw](https://github.com/iyllyt/dsh-btw) · [npm](https://www.npmjs.com/package/dsh-btw) | Transient /btw side questions for DeepSeek Harness: immediate while the main agent is busy, context-sharing, tool-free, one-shot, cache-aware, and invisible to the main session catalog. | 0.1.0-rc.6 (2026-08-14) |
| dsh-bookmarks | 5 | [penguin-oo/dsh-bookmarks](https://github.com/penguin-oo/dsh-bookmarks) · [npm](https://www.npmjs.com/package/dsh-bookmarks) | Bookmark assistant replies: per-message notes and tags, a cross-session center, and Markdown export. | 0.1.0-rc.6 (2026-08-14) |
| dsh-companion-williamj | 5 | [william-jin-cmu/dsh-companion](https://github.com/william-jin-cmu/dsh-companion/tree/HEAD/dsh-bridge) | DSH Companion 的本地网关插件：把宿主 ApiProxy 暴露为 127.0.0.1 上的 HTTP + SSE（token 鉴权），供桌面壳驱动会话 | 0.1.0-rc.6 (2026-08-15) |
| dsh-cue-plugin | 5 | [unnnnoooo/dsh-cue-plugin](https://github.com/unnnnoooo/dsh-cue-plugin) | Cross-session node reference (cue) for DeepSeek Harness: pick another session's user nodes and inject their captured context as a wrapped reference | 0.1.0-rc.6 (2026-08-15) |
| dsh-evolve | 5 | [william-jin-cmu/dsh-evolve](https://github.com/william-jin-cmu/dsh-evolve) | 自进化插件：agent 在 session 内随对话按需给自己长出/剪掉能力 —— evolve_add 把 cordis 插件源码落盘并热挂载（下一 step 工具即可见），evolve_remove 可逆卸载，重启自动恢复 | 0.1.0-rc.6 (2026-08-15) |
| dsh-recall-plugin | 5 | [limbo947/dsh-recall-plugin](https://github.com/limbo947/dsh-recall-plugin) · [npm](https://www.npmjs.com/package/dsh-recall-plugin) | DSH 消息撤回插件：在用户消息气泡旁加「撤回」按钮，把项目文件（独立影子 git 仓库快照）与对话历史（官方 fork）一并回退到该消息发送之前。 | 0.1.0-rc.6 (2026-08-14) |

<sub>Showing the 25 most-starred of 282. **[all 282 →](lists/memory-sessions.md)** · [gallery](https://dshworks.github.io/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Models & providers

Providers, routing, fallbacks, subscription adapters.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-vision-williamj | 24 | [william-jin-cmu/dsh-vision](https://github.com/william-jin-cmu/dsh-vision) | 给纯文本的 DeepSeek 加上眼睛：view_image 工具经任意 OpenAI 兼容 VLM 端点回答关于图片的问题（默认智谱免费 glm-4.6v-flash 零成本开箱，可换通义 qwen3-vl / Ollama 本地 / 未来 DeepSeek 官方识图 API） | 0.1.0-rc.6 (2026-08-15) |
| dsh-model-router | 18 | [tianji-qingtian/dsh-model-router](https://github.com/tianji-qingtian/dsh-model-router) | Heuristic model router and cost optimizer with automatic fallback on transient failures. | 0.1.0-rc.6 (2026-08-14) |
| dsh-focus-chat | 16 | [dingyi222666/dsh-focus-chat](https://github.com/dingyi222666/dsh-focus-chat) | Claude Code-style focus view for the dsh web GUI: the conversation's condensed reading surface — tool calls folded into expandable metric summaries, chat 1:1 row chrome, and streaming think rows | 0.1.0-rc.6 (2026-08-15) |
| dsh-codex | 12 | [Yan-Zero/dsh-codex](https://github.com/Yan-Zero/dsh-codex) · [npm](https://www.npmjs.com/package/dsh-codex) | Use a ChatGPT subscription in DeepSeek Harness through OpenAI Codex sign-in, with Codex models, search, and image tools. | 0.1.0-rc.6 (2026-08-14) |
| dsh-commandcode-provider-mars-sea | 12 | [Mars-Sea/dsh-commandcode-provider](https://github.com/Mars-Sea/dsh-commandcode-provider) | DeepSeek Harness LLM provider plugin for Command Code, ported from pi-commandcode-provider (MIT). Registers the 'commandcode' provider route with a Models-page card and live model catalog. | 0.1.0-rc.6 (2026-08-14) |
| kixparadigm | 12 | [olicesx/kixparadigm](https://github.com/olicesx/kixparadigm/tree/HEAD/dsh/vision-bridge) | dsh 无缝识图桥：UI 上传图片 → 自动用 GLM-4.6V 转成文本描述交给主模型（client dock 插件 + 服务端 HTTP 端点） | 0.1.0-rc.6 (2026-08-15) |
| deepseek-harness-model-config | 11 | [MarvekG/deepseek-harness-model-config](https://github.com/MarvekG/deepseek-harness-model-config) · [npm](https://www.npmjs.com/package/dsh-models-config-plugin) | Advanced per-model reasoning and capacity settings for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-provider-model-configurator | 11 | [LiangYin233/dsh-provider-model-configurator](https://github.com/LiangYin233/dsh-provider-model-configurator) | Provider Model Configurator for DeepSeek Harness: view, create, edit, copy and delete model entries (context window, max output, modalities, reasoning efforts) across your configured providers,. | 0.1.0-rc.6 (2026-08-14) |
| dsh-llm-codebuddy-axiaohungry | 8 | [Axiaohungry/dsh-llm-codebuddy](https://github.com/Axiaohungry/dsh-llm-codebuddy) | WorkBuddy API adapter so DeepSeek Harness can call CodeBuddy models. | 0.1.0-rc.6 (2026-08-14) |
| dsh-agy | 7 | [chaos-03x/dsh-agy](https://github.com/chaos-03x/dsh-agy) | Google Antigravity (agy) OAuth auth + model access plugin for DeepSeek Harness: multi-account pool, 429 rotation, device fingerprinting, CLI and web login. | 0.1.0-rc.6 (2026-08-14) |
| dsh-better-browser | 7 | [titanwings/dsh-better-browser](https://github.com/titanwings/dsh-better-browser) | Better Browser for DeepSeek Harness: drive the user's real browser through Kimi WebBridge with navigation, snapshots, interaction, screenshots, network inspection, and tab management | 0.1.0-rc.6 (2026-08-15) |
| dsh-museai-tavern | 6 | [yejiming/dsh-museai-tavern](https://github.com/yejiming/dsh-museai-tavern) · [npm](https://www.npmjs.com/package/@yejiming/dsh-museai-tavern) | MuseAI tavern for the dsh web GUI: a MuseAI conversation-view tab (right of Trajectory) with background / chat / adventure / bond / settings pages ported from MuseAI, running entirely on models config | 0.1.0-rc.6 (2026-08-14) |
| Gemini-Eyes | 6 | [ConsoleSun/Gemini-Eyes](https://github.com/ConsoleSun/Gemini-Eyes) | DeepSeek Harness bundle that mounts gemini-web-mcp as mcp__gemini-web__* tools | 0.1.0-rc.6 (2026-08-15) |
| dsh-codex-provider | 5 | [Hu9956/dsh-codex-provider](https://github.com/Hu9956/dsh-codex-provider) | OpenAI Codex provider for DeepSeek Harness with device-code OAuth, Codex CLI import, token refresh, and a web settings panel. | 0.1.0-rc.6 (2026-08-15) |
| dsh-llm-fallback | 5 | [Visol-456/dsh-llm-fallback](https://github.com/Visol-456/dsh-llm-fallback) | Provider fallback chain for the DeepSeek Harness LLM seam. | 0.1.0-rc.6 (2026-08-14) |
| dsh-openai-oauth | 5 | [DGPisces/dsh-openai-oauth](https://github.com/DGPisces/dsh-openai-oauth) · [npm](https://www.npmjs.com/package/dsh-openai-oauth) | DeepSeek Harness LLM provider for Codex models using managed ChatGPT OAuth | 0.1.0-rc.6 (2026-08-14) |
| dsh-reasoning-effort-hdbzq | 5 | [flyemFSB/dsh-reasoning-effort-hdbzq](https://github.com/flyemFSB/dsh-reasoning-effort-hdbzq) · [npm](https://www.npmjs.com/package/dsh-reasoning-effort-hdbzq) | DeepSeek Harness composer model seat: model picker plus a three-stop reasoning bar (小难梁 / 梁子 / 梁圣) | 0.1.0-rc.6 (2026-08-14) |
| better-model-provider | 4 | [sanshanya/better-model-provider](https://github.com/sanshanya/better-model-provider) | Per-model capability declaration for DeepSeek Harness: reasoning-effort levels (with wire spellings) and request modalities (text/image) for OpenAI-compatible providers — one settings section, no. | 0.1.0-rc.6 (2026-08-14) |
| codex-plugin-dsh | 4 | [wingoo/codex-plugin-dsh](https://github.com/wingoo/codex-plugin-dsh) | Codex App Server model provider plugin for DeepSeek Harness | 0.1.0-rc.6 (2026-08-15) |
| dsh-browser-xylt369 | 4 | [xylt369/dsh-browser](https://github.com/xylt369/dsh-browser/tree/HEAD/packages/browser-playwright) | Playwright-backed Service Provider for the dsh-browser capability seam. | 0.1.0-rc.6 (2026-08-15) |
| dsh-llm-fallbacks | 4 | [omdsh-dev/dsh-llm-fallbacks](https://github.com/omdsh-dev/dsh-llm-fallbacks) | Automatic provider/model fallback chains when LLM requests keep failing after retries, auth, quota, or rate limits. | 0.1.0-rc.6 (2026-08-14) |
| dsh-llm-oauth | 4 | [ziyou979/dsh-llm-oauth](https://github.com/ziyou979/dsh-llm-oauth) · [npm](https://www.npmjs.com/package/dsh-llm-oauth) | DeepSeek Harness plugin: OAuth / subscription-plan LLM providers (Grok, GitHub Copilot, OpenAI Codex, Anthropic, OpenRouter) | 0.1.0-rc.6 (2026-08-14) |
| dsh-llm-wiki | 4 | [detpecca/dsh-llm-wiki](https://github.com/detpecca/dsh-llm-wiki) · [npm](https://www.npmjs.com/package/@detpecca/dsh-llm-wiki) | DeepSeek Harness plugin — manage an LLM-Wiki knowledge base from the agent: wiki_search / wiki_read / wiki_stats / wiki_validate / wiki_fix / wiki_errorbook / wiki_ingest | 0.1.0-rc.6 (2026-08-14) |
| dsh-subscription-auth | 4 | [Khellendros97/dsh-subscription-auth](https://github.com/Khellendros97/dsh-subscription-auth) | 订阅会员 OAuth 登录（ChatGPT 等）：配置中心「订阅服务」页登录/注销，自动发现订阅模型列表，按登录状态注册提供商，支持思考强度选择 | 0.1.0-rc.6 (2026-08-15) |
| dsh-attachment-formats | 3 | [linkingoscar/dsh-attachment-formats](https://github.com/linkingoscar/dsh-attachment-formats) · [npm](https://www.npmjs.com/package/dsh-attachment-formats) | Codex-style attachment format expansion for the DeepSeek Harness Web GUI: PDF text-layer extraction (pymupdf4llm / pdfjs), Office text extraction, long-document spill + index cards, scanned-PDF OCR (t | 0.1.0-rc.6 (2026-08-14) |

<sub>Showing the 25 most-starred of 140. **[all 140 →](lists/models-providers.md)** · [gallery](https://dshworks.github.io/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Interop & migration

Bridges to and from Claude Code, Codex, and other harnesses.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-hooks-claude-code (official) | 110448 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/hooks/hooks-claude-code) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-hooks-claude-code) | Bridge plugin: runs an existing Claude Code hooks.json on the harness interception seams (command hooks only; http, mcp_tool, prompt, and agent hooks are skipped with a warning) | 0.1.0-rc.5 (2026-08-13) |
| dsh-hooks-codex (official) | 110448 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/hooks/hooks-codex) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-hooks-codex) | Bridge plugin: runs a Codex hooks.json on the harness interception seams (regex-only matchers, snake_case payloads, only blocking decisions honored) | 0.1.0-rc.5 (2026-08-13) |
| petdex | 3828 | [crafter-station/petdex](https://github.com/crafter-station/petdex/tree/HEAD/packages/petdex-desktop-native/integrations/dsh) | A public gallery of animated pets for Codex, Claude Code, DeepSeek Harness, Hermes, OpenCode, Gemini CLI, and more. | 0.1.0-rc.6 (2026-08-15) |
| dsh-multica-runtime | 35 | [multica-ai/dsh-multica-runtime](https://github.com/multica-ai/dsh-multica-runtime) | Private DeepSeek Harness runtime bridge for Multica | 0.1.0-rc.6 (2026-08-15) |
| dsh-chat-import | 31 | [Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) | Import Claude Code / Codex / ChatGPT / Cursor / Gemini / Reasonix / Pi Coding Agent / opencode / ZCode / Grok Build / OpenClaw / Hermes conversation histories as resumable DeepSeek Harness sessions | 0.1.0-rc.6 (2026-08-14) |
| dsh-reasoning-effort | 28 | [HanaAyane/dsh-reasoning-effort](https://github.com/HanaAyane/dsh-reasoning-effort) | Codex-style DeepSeek Harness model and reasoning selector with off/high/max snapping, DSH-native themes, and left-clipped radiation effects. | 0.1.0-rc.6 (2026-08-15) |
| dsh-hud | 11 | [zexuanw958-svg/dsh-hud](https://github.com/zexuanw958-svg/dsh-hud) | Codex/Claude Code-style live session telemetry for DeepSeek Harness | 0.1.0-rc.6 (2026-08-15) |
| pi2dsh | 10 | [weijiafu14/pi2dsh](https://github.com/weijiafu14/pi2dsh) | Bridge the Pi and DeepSeek Harness ecosystems: a general Pi Host ABI that runs unmodified Pi extensions as native DSH plugins, plus per-package conversion and MCP config translation. | 0.1.0-rc.6 (2026-08-15) |
| dsh-plugin-product-subagents | 9 | [shaokeyibb/dsh-plugin-product-subagents](https://github.com/shaokeyibb/dsh-plugin-product-subagents) | Role-based Codex / Claude Code / ACP subagent providers for the DeepSeek Harness: continuable children, durable session recovery, per-role product permissions, delegation with a permission ceiling | 0.1.0-rc.6 (2026-08-15) |
| deepseek-harness-acp | 7 | [openma-ai/deepseek-harness-acp](https://github.com/openma-ai/deepseek-harness-acp) | Agent Client Protocol (ACP) adapter for DeepSeek Harness — use DeepSeek Harness from ACP clients such as Zed. | 0.1.0-rc.6 (2026-08-14) |
| dsh-codex-connect | 7 | [franksong2702/dsh-codex-connect](https://github.com/franksong2702/dsh-codex-connect) | ChatGPT OAuth and Codex models for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-llm-codex | 7 | [yequ172672/dsh-codex-subscription](https://github.com/yequ172672/dsh-codex-subscription) | Reuse Codex CLI local login credentials to use ChatGPT subscription models in DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-codex-auth | 6 | [suntianc/dsh-codex-auth](https://github.com/suntianc/dsh-codex-auth) | Use the local Codex CLI ChatGPT login as a DeepSeek Harness LLM route, with a native GPT Auth settings card | 0.1.0-rc.6 (2026-08-15) |
| dsh-import-agents | 6 | [Chang-Tong/dsh-import-agents](https://github.com/Chang-Tong/dsh-import-agents) · [npm](https://www.npmjs.com/package/dsh-import-agents) | Import pi / opencode sessions, chat history, and agents into DeepSeek Harness (dsh): slash commands, session-start migration prompt, and a one-click Sync button in the composer. | 0.1.0-rc.6 (2026-08-14) |
| dsh-llm-codex-oauth | 6 | [Player-MINEPIG/dsh-llm-codex-oauth](https://github.com/Player-MINEPIG/dsh-llm-codex-oauth) | Use your ChatGPT/Codex subscription in dsh through the OpenAI Codex OAuth flow. | 0.1.0-rc.6 (2026-08-14) |
| dsh-atomgit | 5 | [xiongjiamu/dsh-atomgit](https://github.com/xiongjiamu/dsh-atomgit) · [npm](https://www.npmjs.com/package/dsh-atomgit) | AtomGit plugin bundle for DeepSeek Harness: atomgit-skills workflows + ag CLI integration + GitCode MCP server tools | 0.1.0-rc.6 (2026-08-14) |
| dsh-claude-compat | 5 | [biedongbin/dsh-claude-compat](https://github.com/biedongbin/dsh-claude-compat) | DeepSeek Harness plugin: bridge Claude Code's .claude/ directory (skills, commands, rules) into DSH native skill registry and message-stream rules injection. | 0.1.0-rc.6 (2026-08-15) |
| dsh-latex-tools | 5 | [liuup/dsh-latex-tools](https://github.com/liuup/dsh-latex-tools) | Hover LaTeX formulas in the DeepSeek Harness Web UI to copy the TeX source or export the formula as a standalone SVG. | 0.1.0-rc.6 (2026-08-15) |
| dsh-plugin-claude-bridge | 5 | [YYTbit/dsh-plugin-claude-bridge](https://github.com/YYTbit/dsh-plugin-claude-bridge) | Bridge Claude Code's memory, skills, and configuration into DeepSeek Harness — zero migration, full compatibility | 0.1.0-rc.6 (2026-08-15) |
| task-passport | 5 | [dongsheng123132/task-passport](https://github.com/dongsheng123132/task-passport) | Open task handoff protocol and local store for durable state across AI harnesses. | 0.1.0-rc.6 (2026-08-14) |
| dsh-acp-paseo | 4 | [Pheobe-Southwood/dsh-acp-paseo](https://github.com/Pheobe-Southwood/dsh-acp-paseo/tree/HEAD/packages/dsh-acp-paseo) | dsh ⇄ Paseo integration bundle: an enhanced ACP bridge exposing DeepSeek Harness (dsh) agents to Paseo with auto-discovered model catalog, plan/execute modes, thinking levels, and native dsh slash | 0.1.0-rc.6 (2026-08-15) |
| dsh-external-migration | 4 | [buguoshixc/deepseek-harness-external-migration](https://github.com/buguoshixc/deepseek-harness-external-migration) · [npm](https://www.npmjs.com/package/deepseek-harness-external-migration) | Migrate Codex, Claude Code, Qoder, and OpenCode config and chat history into DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-github-login | 4 | [Noob-stupid/dsh-github-login](https://github.com/Noob-stupid/dsh-github-login) · [npm](https://www.npmjs.com/package/dsh-github-login) | Visual GitHub device-code login for the DSH host, with an optional Electron helper and gh CLI token sync. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-session-import | 4 | [huguangyu666/dsh-plugin-session-import](https://github.com/huguangyu666/dsh-plugin-session-import) · [npm](https://www.npmjs.com/package/dsh-plugin-session-import) | Import claude-code, Codex, reasonix, and zcode chat histories into dsh sessions with workspace binding. | 0.1.0-rc.6 (2026-08-14) |
| dsh-vscode | 4 | [MJ-Chang/dsh-vscode](https://github.com/MJ-Chang/dsh-vscode) | Run DeepSeek Harness inside VS Code: chat with the agent and edit your project, like Claude Code / Codex / Copilot. | 0.1.0-rc.6 (2026-08-15) |

<sub>Showing the 25 most-starred of 95. **[all 95 →](lists/interop-migration.md)** · [gallery](https://dshworks.github.io/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Channels & remote

IM bridges and remote control: Feishu, Telegram, WeCom, DingTalk.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-qqbot | 35 | [tencent-connect/dsh-qqbot](https://github.com/tencent-connect/dsh-qqbot) · [npm](https://www.npmjs.com/package/@tencent-connect/dsh-qqbot) | QQ Bot IM channel plugin for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-lark | 16 | [omdsh-dev/dsh-lark](https://github.com/omdsh-dev/dsh-lark) | Lark/Feishu IM bot channel: chats drive agents, replies and approvals come back as messages and cards. | 0.1.0-rc.6 (2026-08-14) |
| dsh-lark-bot | 12 | [PlutoKeating/dsh-lark-bot](https://github.com/PlutoKeating/dsh-lark-bot) · [npm](https://www.npmjs.com/package/dsh-lark-bot) | Bridge DeepSeek Harness into Feishu/Lark with streaming cards, project workspaces, approvals, and scheduling. | 0.1.0-rc.6 (2026-08-14) |
| dsh-promotion-toolkit | 8 | [lhmd/dsh-promotion-toolkit](https://github.com/lhmd/dsh-promotion-toolkit) | DeepSeek Harness-native publicity toolkit: turn any long-form source into a source-grounded, platform-native promotion matrix. | 0.1.0-rc.6 (2026-08-15) |
| dsh-lark-bridge | 7 | [imetn/dsh-lark-bridge](https://github.com/imetn/dsh-lark-bridge) | Bidirectional Lark/Feishu control bridge for DeepSeek Harness | 0.1.0-rc.6 (2026-08-15) |
| dsh-lark-link | 7 | [amlyczz/dsh-lark-link](https://github.com/amlyczz/dsh-lark-link) | High-reliability Feishu/Lark bridge for DeepSeek Harness — QR one-click auth, multi-mode agents, card-based commands, zero-loss outbox, media in/out, session logs, reusable DSH Web GUI | 0.1.0-rc.6 (2026-08-14) |
| dsh-channel-feishu | 6 | [ZinkLu/dsh-channel](https://github.com/ZinkLu/dsh-channel/tree/HEAD/packages/channel-feishu) · [npm](https://www.npmjs.com/package/dsh-channel-feishu) | A DeepSeek Harness channel plugin written entirely by DeepSeek Harness itself. | 0.1.0-rc.6 (2026-08-14) |
| dsh-channel-telegram | 6 | [ZinkLu/dsh-channel](https://github.com/ZinkLu/dsh-channel/tree/HEAD/packages/channel-telegram) · [npm](https://www.npmjs.com/package/dsh-channel-telegram) | A DeepSeek Harness channel plugin written entirely by DeepSeek Harness itself. | 0.1.0-rc.6 (2026-08-14) |
| dsh-channel-wechat | 6 | [ZinkLu/dsh-channel](https://github.com/ZinkLu/dsh-channel/tree/HEAD/packages/channel-wechat) · [npm](https://www.npmjs.com/package/dsh-channel-wechat) | A DeepSeek Harness channel plugin written entirely by DeepSeek Harness itself. | 0.1.0-rc.6 (2026-08-14) |
| dsh-llm-wechat | 6 | [sulfide2085/dsh-llm-wechat](https://github.com/sulfide2085/dsh-llm-wechat) | DeepSeek-compatible adapter for the WeChat (chatapi.weixin.qq.com) gateway, with think-tag translation for the DeepSeek Harness LLM seam | 0.1.0-rc.6 (2026-08-14) |
| dsh-telegram-channel | 6 | [hi-wenw/dsh-telegram-channel](https://github.com/hi-wenw/dsh-telegram-channel) | DeepSeek Harness Telegram mobile remote: workspace→session picker (Web-aligned), /model switch, same trajectory — dsh-plugin | 0.1.0-rc.6 (2026-08-14) |
| dsh-wechat-notify | 6 | [wssfk12138/dsh-wechat-notify](https://github.com/wssfk12138/dsh-wechat-notify) | DeepSeek Harness (dsh) plugin that registers a wechat_notify tool so agents can send WeChat notifications through a local ClawBot channel. | 0.1.0-rc.6 (2026-08-15) |
| telegram | 6 | [LoserFox/telegram](https://github.com/LoserFox/telegram) | Telegram Bot API bridge plugin: relay Telegram chats to harness agent sessions (long polling, per-chat sessions, HTML formatting) | 0.1.0-rc.6 (2026-08-15) |
| DeepSeek-harness-qqbot | 5 | [sliverp/DeepSeek-harness-qqbot](https://github.com/sliverp/DeepSeek-harness-qqbot) | QQ Bot channel bridge for DeepSeek Harness | 0.1.0-rc.6 (2026-08-15) |
| dsh-email | 5 | [STARDUSTLC666/dsh-email](https://github.com/STARDUSTLC666/dsh-email) | IMAP/SMTP email tools for DeepSeek Harness: list, read, search and send mail, with QQ/163/126/Sina/Aliyun/Gmail/Outlook/iCloud presets. | 0.1.0-rc.6 (2026-08-14) |
| dsh-telegram-bot | 5 | [yuko0331/DSH-telegram](https://github.com/yuko0331/DSH-telegram) | Allowlisted Telegram bot for remote DeepSeek Harness conversations and monitoring. | 0.1.0-rc.6 (2026-08-14) |
| DSH-Telegram-Relay | 5 | [congchuanling-dot/DSH-Telegram-Relay](https://github.com/congchuanling-dot/DSH-Telegram-Relay) | A DeepSeek Harness plugin bundle for Telegram relay integration. | 0.1.0-rc.6 (2026-08-15) |
| dsh-feishu | 4 | [xmanrui/dsh-feishu](https://github.com/xmanrui/dsh-feishu) | DeepSeek Harness plugin for multi-bot Feishu setup and streaming chat | 0.1.0-rc.6 (2026-08-14) |
| dsh-feishu-bridge-wz-heng | 4 | [wz-heng/dsh-feishu-bridge](https://github.com/wz-heng/dsh-feishu-bridge) | DSH plugin shell for dsh-feishu-bridge: spawns and supervises the Feishu (Lark) channel bridge's Python process as a managed child of the DSH Host. The bridge itself is unchanged Python — this. | 0.1.0-rc.6 (2026-08-14) |
| dsh-slack | 4 | [STARDUSTLC666/dsh-slack](https://github.com/STARDUSTLC666/dsh-slack) | DSH 社区插件：Slack 通知/桥接（v0.2 支持 Socket Mode 双向：收件箱 + 线程回复） | 0.1.0-rc.6 (2026-08-14) |
| dsh-awiki | 3 | [AgentConnect/dsh-awiki](https://github.com/AgentConnect/dsh-awiki) · [npm](https://www.npmjs.com/package/dsh-awiki) | AWiki identity and messaging plugin for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-cowork | 3 | [Jesse-njx/dsh-cowork](https://github.com/Jesse-njx/dsh-cowork/tree/HEAD/packages/chatnode-wechat) | Chat with, monitor, and approve your DSH agents from WeChat — an iLink gateway + conversation node bundle for DeepSeek Harness | 0.1.0-rc.6 (2026-08-15) |
| dsh-im-bridge-biboyang | 3 | [BiBoyang/dsh-im-bridge](https://github.com/BiBoyang/dsh-im-bridge) | DSH 微信桥插件：turn/approval 推送到微信，微信远程监控/批准/驱动 agent（iLink 通道，持久去重/分段/合并/白名单） | 0.1.0-rc.6 (2026-08-15) |
| dsh-lark-channel | 3 | [sliverp/DeepSeek-harness-lark](https://github.com/sliverp/DeepSeek-harness-lark) | Feishu and Lark text, image, and file channel bridge for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-onebot | 3 | [Hoshino-Yumetsuki/dsh-onebot](https://github.com/Hoshino-Yumetsuki/dsh-onebot) · [npm](https://www.npmjs.com/package/dsh-onebot) | OneBot v11 HTTP and WebSocket adapter for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |

<sub>Showing the 25 most-starred of 79. **[all 79 →](lists/channels-remote.md)** · [gallery](https://dshworks.github.io/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Notifications

Alerting the human: desktop, sound, even a phone call.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-notification | 47 | [omdsh-dev/dsh-notification](https://github.com/omdsh-dev/dsh-notification) | Desktop notifications for turn completions, with per-outcome controls and include/exclude keyword rules | 0.1.0-rc.5 (2026-08-13) |
| dsh-web-ui-notify | 12 | [bill9109/dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) | Desktop notifications for approvals, questions, and turn completion so you can leave the dsh tab. | 0.1.0-rc.6 (2026-08-14) |
| dsh-lark-meeting-notifier | 6 | [yeruizhi/dsh-lark-meeting-notifier](https://github.com/yeruizhi/dsh-lark-meeting-notifier) · [npm](https://www.npmjs.com/package/dsh-lark-meeting-notifier) | Feishu meeting reminder dock: flash when it is time to leave the agent and join a human meeting. | 0.1.0-rc.6 (2026-08-14) |
| dsh-notification-center | 6 | [610la/dsh-notification-center](https://github.com/610la/dsh-notification-center) | 通知中心：对话/任务完成、报错、等待批准等事件触发浏览器通知 + 21 种匹配音效，每类事件独立配置（音效/文件/URL/音量/开关）。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-task-notify-linxin | 5 | [ltao0829/dsh-task-notify](https://github.com/ltao0829/dsh-task-notify) | Task-completion reminder for DeepSeek Harness: in-page toast, OS notification, and sound when an agent turn or background job finishes | 0.1.0-rc.6 (2026-08-14) |
| dsh-notify-sound | 4 | [xxxxxxxyu/dsh-notify-sound](https://github.com/xxxxxxxyu/dsh-notify-sound) · [npm](https://www.npmjs.com/package/dsh-notify-sound) | DSH web plugin: plays a sound when the agent finishes replying (turn/end). Sound, volume and on/off are configurable in the Settings page. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-notify | 4 | [huguangyu666/dsh-plugin-notify](https://github.com/huguangyu666/dsh-plugin-notify) · [npm](https://www.npmjs.com/package/dsh-plugin-notify) | Notification outlet: desktop toasts, Chinese TTS, and sounds when long tasks finish, error, or need you. | 0.1.0-rc.6 (2026-08-14) |
| dsh-win-notify | 4 | [MuziIsabel/dsh-win-notify](https://github.com/MuziIsabel/dsh-win-notify) | DSH plugin: Windows toast notification with sound when an agent task completes. | 0.1.0-rc.6 (2026-08-15) |
| dsh-dingtalk-stardustlc666 | 3 | [STARDUSTLC666/dsh-dingtalk](https://github.com/STARDUSTLC666/dsh-dingtalk) | 钉钉群机器人单向通知工具（DeepSeek Harness 插件）：agent 推送 Markdown / 纯文本消息到钉钉群，支持加签安全模式。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-call-me | 3 | [radres/dsh-plugin-call-me](https://github.com/radres/dsh-plugin-call-me) | Your DeepSeek Harness agent rings your phone: it asks out loud, you answer out loud, and what you said steers the run. | 0.1.0-rc.6 (2026-08-14) |
| dsh-update-checker-airmetro | 3 | [Airmetro/dsh-update-checker](https://github.com/Airmetro/dsh-update-checker) | Auto-check DeepSeek Harness for new releases and notify the user in the Web GUI with a locale-aware banner. | 0.1.0-rc.6 (2026-08-15) |
| dsh-update-notifier | 3 | [arvin-yd/dsh-update-notifier](https://github.com/arvin-yd/dsh-update-notifier) · [npm](https://www.npmjs.com/package/dsh-update-notifier) | Red-dot update checker for DeepSeek Harness: warns in the sidebar footer when a newer @deepseek-ai/dsh release exists on npm. | 0.1.0-rc.6 (2026-08-14) |
| dsh-web-ui-notify-omdsh | 3 | [omdsh-dev/dsh-web-ui-notify](https://github.com/omdsh-dev/dsh-web-ui-notify) · [npm](https://www.npmjs.com/package/@omdsh-dev/dsh-web-ui-notify) | Desktop notifications for DeepSeek Harness approvals, questions, and turn completion — so neither DSH nor you end up waiting while you browse another tab. | 0.1.0-rc.6 (2026-08-14) |
| dsh-audio-alert | 2 | [ellelkktrraaa/dsh-audio-alert](https://github.com/ellelkktrraaa/dsh-audio-alert) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-client-audio-alert) | Browser audio alerts for DeepSeek Harness attention edges: approval requests, ask-user questions, and finished turns. | 0.1.0-rc.6 (2026-08-14) |
| dsh-ding | 2 | [CAOGGL/dsh-ding](https://github.com/CAOGGL/dsh-ding) · [npm](https://www.npmjs.com/package/dsh-ding) | Play a sound and show a Windows toast when a DeepSeek Harness turn finishes, with a Web UI bell control. | 0.1.0-rc.6 (2026-08-14) |
| dsh-git-remotes | 2 | [yq04/dsh-git-remotes](https://github.com/yq04/dsh-git-remotes) | DSH web plugin: better-sidebar Git Remotes tab for fetch / ff-only pull / confirmed push. Does not replace the built-in Git stage/commit tab. | 0.1.0-rc.6 (2026-08-15) |
| dsh-meow-notify | 2 | [yLong765/dsh-meow-notify](https://github.com/yLong765/dsh-meow-notify) · [npm](https://www.npmjs.com/package/meow-notify) | Push DeepSeek Harness turn and approval events to your phone via MeoW, with a web settings card. | 0.1.0-rc.6 (2026-08-14) |
| dsh-messager | 2 | [ly6170/dsh-messager](https://github.com/ly6170/dsh-messager) | DeepSeek Harness 通知插件：会话交互/任务完成/出错时通过系统通知、浏览器通知、飞书机器人（webhook）推送提醒 | 0.1.0-rc.6 (2026-08-14) |
| dsh-notify-plugins | 2 | [1514100951/dsh-notify-plugins](https://github.com/1514100951/dsh-notify-plugins/tree/HEAD/packages/dsh-notify-jobs) | dsh web notify plugin: browser Notification + native Windows toast when a background job (subagent / command / workflow) settles; independent on/off toggle | 0.1.0-rc.6 (2026-08-15) |
| dsh-plugin-notify-pasumao | 2 | [Pasumao/dsh-plugin-notify](https://github.com/Pasumao/dsh-plugin-notify) · [npm](https://www.npmjs.com/package/dsh-notify) | DeepSeek Harness (dsh) Windows notification plugin: a native toast when the agent stops running (finished / aborted / error / waiting for your choice / session closed), plus a system-tray icon. Pure h | 0.1.0-rc.6 (2026-08-14) |
| dsh-task-notify | 2 | [kaotusi/dsh-task-notify](https://github.com/kaotusi/dsh-task-notify) | System-level task notifications for DeepSeek Harness (DSH): approval requests, awaited replies, and finished background jobs / subagents / workflows — pushed to the OS notification center with. | 0.1.0-rc.6 (2026-08-14) |
| dsh-web-notification | 2 | [2h0n/dsh-web-notification](https://github.com/2h0n/dsh-web-notification) · [npm](https://www.npmjs.com/package/dsh-web-notification) | System-level Web Notification when the model finishes a reply in the DeepSeek Harness web GUI | 0.1.0-rc.6 (2026-08-14) |
| dsh-notifier | 1 | [YZz-S/dsh-notifier](https://github.com/YZz-S/dsh-notifier) | DeepSeek Harness (dsh) 系统通知插件：任务完成或需要人工确认/输入时，发送操作系统原生通知。 | 0.1.0-rc.6 (2026-08-15) |
| dsh-notify | 1 | [TerricSH/dsh-notify](https://github.com/TerricSH/dsh-notify) · [npm](https://www.npmjs.com/package/@terricsh/dsh-notify) | Desktop notifications for DeepSeek Harness approval, completion, and error events with click-to-open deep links. | 0.1.0-rc.6 (2026-08-14) |
| dsh-notify-bark | 1 | [pc439527/dsh-notify-bark](https://github.com/pc439527/dsh-notify-bark) | Bark 推送通知插件：DSH Host 端监听回合结束 / 等待回答 / 等待授权等事件，通过 Bark Server 推送到 iPhone。设置页经专用 RPC 读写 Host 配置（Bark 地址脱敏，不落地到浏览器）。 | 0.1.0-rc.6 (2026-08-15) |

<sub>Showing the 25 most-starred of 44. **[all 44 →](lists/notifications.md)** · [gallery](https://dshworks.github.io/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Usage & cost

Token accounting, billing, balance, quota.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| treg | 415 | [superdesigndev/treg](https://github.com/superdesigndev/treg) | OpenRouter for tools - 2,600 agent-friendly tools, pay for the usage, not subscription | 0.1.0-rc.6 (2026-08-15) |
| dsh-cost-meter-han14131 | 32 | [Han-1413141/dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) | DeepSeek Harness 会话费用统计插件:本会话成本、当日费用、历史记录与官方价格同步,界面中英双语。Session cost tracking plugin for DeepSeek Harness: per-conversation cost, daily totals, history and official price sync, with a bilingual | 0.1.0-rc.6 (2026-08-15) |
| dsh-usage-stats-ychris | 30 | [Ychris12138/dsh-usage-stats](https://github.com/Ychris12138/dsh-usage-stats) | Token usage heatmap, per-model breakdowns, and DeepSeek account balance for the DeepSeek Harness Web GUI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-balance | 15 | [crazywoola/dsh-balance](https://github.com/crazywoola/dsh-balance) | Shows API balances and available models in DeepSeek Harness Settings. | 0.1.0-rc.6 (2026-08-14) |
| dsh-balance-plugin-francisx | 15 | [Francis-Xavier-code/dsh-balance-plugin](https://github.com/Francis-Xavier-code/dsh-balance-plugin) | DeepSeek 余额监控与用量统计（DSH 插件）：余额监控 · 官方充值入口 · Miyu 风格用量统计 · 三方插件管理 | 0.1.0-rc.6 (2026-08-15) |
| dsh-usage-plugin | 14 | [feiyang-dev/dsh-usage-plugin](https://github.com/feiyang-dev/dsh-usage-plugin) · [npm](https://www.npmjs.com/package/@feiyang666/deepseekharnessdesktop) | DeepSeek Harness usage & cost tracker plugin: per-call token/cache-hit stats, peak/off-peak billing, DeepSeek balance query, CSV/JSON/PNG export with custom destination, and persistent local storage. | 0.1.0-rc.6 (2026-08-14) |
| dsh-balance-meter | 13 | [Ghost011118/dsh-balance-meter](https://github.com/Ghost011118/dsh-balance-meter) | DeepSeek account balance and usage readout for the dsh web GUI: queries the official Get User Balance endpoint and shows current remaining balance and spend on the page. | 0.1.0-rc.6 (2026-08-15) |
| dsh-usage-stats-make0209 | 12 | [Make0209/dsh-usage-stats](https://github.com/Make0209/dsh-usage-stats) | Usage stats for DeepSeek Harness: heatmap, token and cache-hit board, balance, and workspace aliases. | 0.1.0-rc.6 (2026-08-14) |
| DeepSeek-Harness-billing-plugin | 9 | [WilliamLIiii/DeepSeek-Harness-billing-plugin](https://github.com/WilliamLIiii/DeepSeek-Harness-billing-plugin/tree/HEAD/packages/llm-billing) | Standalone DeepSeek account-balance and remaining-task estimator exposed through the billing Remote | 0.1.0-rc.6 (2026-08-15) |
| dsh-wallet | 9 | [feibi-mochi/deepseek-harness-wallet](https://github.com/feibi-mochi/deepseek-harness-wallet) | Balance monitoring, per-session spend tracking, token statistics, low-balance alerts, and an official recharge shortcut for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-client-pricing | 8 | [Miyazawai/dsh-client-pricing](https://github.com/Miyazawai/dsh-client-pricing) · [npm](https://www.npmjs.com/package/dsh-client-pricing) | Live DeepSeek API pricing badge in the session header, with peak/off-peak flash and pro rates. | 0.1.0-rc.6 (2026-08-14) |
| dsh-balance-monitor-jelly000 | 7 | [jelly-000/dsh-balance-monitor](https://github.com/jelly-000/dsh-balance-monitor) | DeepSeek account balance, remaining-ratio bar, and today's spend in the dsh sidebar footer. | 0.1.0-rc.6 (2026-08-15) |
| ds-api-usage | 6 | [Sev7een/ds-api-usage](https://github.com/Sev7een/ds-api-usage) | DeepSeek Harness plugin: real-time DeepSeek API balance and usage timeline (cost / tokens / request count), rendered in a settings page. | 0.1.0-rc.6 (2026-08-15) |
| dsh-balance-twotwopiggy | 6 | [TwotwoPiggy/dsh-balance](https://github.com/TwotwoPiggy/dsh-balance) · [npm](https://www.npmjs.com/package/dsh-balance) | DeepSeek 余额实时显示插件: 在 dsh Web UI 输入框下方的统计条(命中率/输入输出 token 行)实时显示账户余额与本次对话的估算消耗 | 0.1.0-rc.6 (2026-08-14) |
| dsh-billing | 6 | [TheTianzz/dsh-billing](https://github.com/TheTianzz/dsh-billing) | Account balance and session cost commands, tools, and Web UI capsules for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-green-meter | 6 | [dclichang2022/dsh-green-meter](https://github.com/dclichang2022/dsh-green-meter) | Energy & carbon metering for DeepSeek Harness: per-turn/per-request energy, cache carbon savings, electricity cost. | 0.1.0-rc.6 (2026-08-15) |
| dsh-token-panel | 6 | [juhe291/dsh-token-panel](https://github.com/juhe291/dsh-token-panel) | Real-time token consumption HUD for DeepSeek Harness: a sleek tech-style panel showing live token usage, context pressure and cost estimates across sessions | 0.1.0-rc.6 (2026-08-14) |
| dsh-token-usage-leemancheung | 6 | [LeemanCheung/dsh-token-usage](https://github.com/LeemanCheung/dsh-token-usage) · [npm](https://www.npmjs.com/package/dsh-token-usage) | Persistent token usage records and dashboard for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-usage-chart | 6 | [Max-Samson/dsh-usage-chart](https://github.com/Max-Samson/dsh-usage-chart) · [npm](https://www.npmjs.com/package/dsh-usage-chart) | Real-time token usage, cost estimates, per-round charts, and DeepSeek API balance for the Web GUI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-web-billing | 6 | [bpc-oss/dsh-web-billing](https://github.com/bpc-oss/dsh-web-billing) · [npm](https://www.npmjs.com/package/dsh-web-billing) | RMB/USD token-billing plugin for DSH web: official-policy auto pricing (incl. peak/off-peak), per-message ledger, account balance, locale-driven currency display | 0.1.0-rc.6 (2026-08-14) |
| dsh-balance-plugin | 5 | [stevenx65/dsh-balance-plugin](https://github.com/stevenx65/dsh-balance-plugin) | DeepSeek API balance and token usage monitor for the dsh web sidebar | 0.1.0-rc.6 (2026-08-14) |
| dsh-opencode-go-usage | 5 | [Xenia0922/dsh-opencode-go-usage](https://github.com/Xenia0922/dsh-opencode-go-usage) | OpenCode Go 用量与花费面板 — DeepSeek Harness 插件:可拖拽缩放的悬浮仪表盘,实时展示 OpenCode Go 配额、逐请求用量与花费 | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-deepseek-balance | 5 | [hnmrxz/dsh-plugin-deepseek-balance](https://github.com/hnmrxz/dsh-plugin-deepseek-balance) · [npm](https://www.npmjs.com/package/dsh-plugin-deepseek-balance) | Real-time DeepSeek account balance in the DeepSeek Harness bottom status bar. | 0.1.0-rc.6 (2026-08-14) |
| dsh-spend | 5 | [nonewind/dsh-spend](https://github.com/nonewind/dsh-spend) | Token usage, multi-dimensional statistics, auto-detected billing plans (Code/Token) and estimated spend for the dsh web UI | 0.1.0-rc.6 (2026-08-15) |
| dsh-token-cost | 5 | [le-soleil-se-couche/dsh-token-cost](https://github.com/le-soleil-se-couche/dsh-token-cost) | DSH web GUI plugin: token usage (input/output), cache hit/miss and cost statistics per conversation and in aggregate, with auto-switching DeepSeek pricing schemes | 0.1.0-rc.6 (2026-08-14) |

<sub>Showing the 25 most-starred of 207. **[all 207 →](lists/usage-cost.md)** · [gallery](https://dshworks.github.io/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Observability & evidence

Diagnostics, logs, audits, content-addressed proofs.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-security-audit | 12 | [omdsh-dev/dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) | Read-only local security audit: config, credential metadata, plugin provenance, sessions, and network exposure. | 0.1.0-rc.6 (2026-08-14) |
| dsh-whale-report | 11 | [SenmuuuuW/dsh-whale-report](https://github.com/SenmuuuuW/dsh-whale-report) | 鲸鱼记事本 — 你的 Agent 年度/月度/周度/日报：从会话事件日志生成数据新闻官式报告，任意区间、定时生成。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-session-health | 9 | [omdsh-dev/dsh-session-health](https://github.com/omdsh-dev/dsh-session-health) | Frame-level diagnostics over multi-frame zstd session logs: torn, corrupt, or empty session detection. | 0.1.0-rc.6 (2026-08-14) |
| dsh-status-rotator | 8 | [01Virex/dsh-status-rotator](https://github.com/01Virex/dsh-status-rotator) · [npm](https://www.npmjs.com/package/dsh-status-rotator) | Rotates the DSH chat turn-status label ("Deep diving...") through user-defined phrases every few seconds. | 0.1.0-rc.6 (2026-08-14) |
| dsh-inspector | 6 | [CocoSgt/dsh-inspector](https://github.com/CocoSgt/dsh-inspector) · [npm](https://www.npmjs.com/package/dsh-inspector) | Inspect and manage the live instruction chain and project skills for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-lineage | 4 | [dongsheng123132/dsh-lineage](https://github.com/dongsheng123132/dsh-lineage) | Content-addressed data and action lineage evidence for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-session-audit | 4 | [bwndlct/dsh-session-audit](https://github.com/bwndlct/dsh-session-audit) | Session execution analytics and audit reports for DeepSeek Harness. Understand how your agent actually worked: steps, tool calls, failures, repeated actions, token usage and verification signals. | 0.1.0-rc.6 (2026-08-14) |
| dsh-tool-turbo | 4 | [Electricitysheep/dsh-tool-turbo](https://github.com/Electricitysheep/dsh-tool-turbo) | DSH host plugin: cuts tool-call latency by auto-downgrading reasoning_effort for simple tool tasks, with per-tool timing telemetry. | 0.1.0-rc.6 (2026-08-15) |
| dsh-verification-receipt | 4 | [030611/dsh-verification-receipt](https://github.com/030611/dsh-verification-receipt) | Privacy-minimal heuristic per-turn execution summaries for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| qiushi-dsh-evidence-audit | 4 | [030611/qiushi-dsh-evidence-audit](https://github.com/030611/qiushi-dsh-evidence-audit) | Observe-only hash-chained evidence receipts for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| upstream-radar | 4 | [MicroMilo/upstream-radar](https://github.com/MicroMilo/upstream-radar) · [npm](https://www.npmjs.com/package/upstream-radar) | Always-on vulnerability and breaking-change impact monitoring for DeepSeek Harness plugins. | 0.1.0-rc.6 (2026-08-14) |
| dsh-2origin | 3 | [dongsheng123132/dsh-2origin](https://github.com/dongsheng123132/dsh-2origin) | Evidence-first 2Origin state projection, diff and immutable freeze for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-action-parity | 3 | [dongsheng123132/dsh-action-parity](https://github.com/dongsheng123132/dsh-action-parity) | Evidence that CLI, MCP and GUI bindings reach the same DeepSeek Harness action core | 0.1.0-rc.6 (2026-08-14) |
| dsh-audit-bundle | 3 | [dongsheng123132/dsh-audit-bundle](https://github.com/dongsheng123132/dsh-audit-bundle) | Content-addressed audit indexes across independent DeepSeek Harness evidence producers | 0.1.0-rc.6 (2026-08-14) |
| dsh-benchmark | 3 | [dongsheng123132/dsh-benchmark](https://github.com/dongsheng123132/dsh-benchmark) | Reproducible deterministic benchmark evidence for DSH tools and plugins | 0.1.0-rc.6 (2026-08-14) |
| dsh-benchmark-evidence | 3 | [LeslieWylie/dsh-benchmark-evidence](https://github.com/LeslieWylie/dsh-benchmark-evidence) | Benchmark manifests, fail-closed gates, artifact contracts, and result integrity skills for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-capability-receipt | 3 | [dongsheng123132/dsh-capability-receipt](https://github.com/dongsheng123132/dsh-capability-receipt) | Content-addressed receipts for skills actually loaded by DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| DSH-changeproof | 3 | [Apageoflove/DSH-changeproof](https://github.com/Apageoflove/DSH-changeproof) | ChangeProof - change-relevance + evidence-freshness quality plugin for DeepSeek Harness (DSH) | 0.1.0-rc.6 (2026-08-15) |
| dsh-doctor | 3 | [sc3294145287-beep/dsh-doctor](https://github.com/sc3294145287-beep/dsh-doctor) · [npm](https://www.npmjs.com/package/dsh-doctor) | Deterministic diagnostics and recovery for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-narrative-ledger | 3 | [dongsheng123132/dsh-narrative-ledger](https://github.com/dongsheng123132/dsh-narrative-ledger) | Content-addressed timeline, canon and character-knowledge evidence for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-observation-journal | 3 | [Cavan-Ou/dsh-observation-journal](https://github.com/Cavan-Ou/dsh-observation-journal) · [npm](https://www.npmjs.com/package/dsh-observation-journal) | Zero-intrusion session telemetry: one observation card per session with task, model, tools, and failure stats. | 0.1.0-rc.6 (2026-08-14) |
| dsh-policy-drift-proof | 3 | [dongsheng123132/dsh-policy-drift-proof](https://github.com/dongsheng123132/dsh-policy-drift-proof) | Content-addressed, value-redacted policy drift evidence for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-recovery-proof | 3 | [dongsheng123132/dsh-recovery-proof](https://github.com/dongsheng123132/dsh-recovery-proof) | Read-only recovery drill evidence for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-release-proof | 3 | [dongsheng123132/dsh-release-proof](https://github.com/dongsheng123132/dsh-release-proof) | Reproducible multi-source release evidence for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-telemetry-redactor | 3 | [030611/dsh-telemetry-redactor](https://github.com/030611/dsh-telemetry-redactor) | Export-copy redaction for DeepSeek Harness session telemetry | 0.1.0-rc.6 (2026-08-14) |

<sub>Showing the 25 most-starred of 66. **[all 66 →](lists/observability-evidence.md)** · [gallery](https://dshworks.github.io/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Safety & approvals

Permission tiers, gates, redaction, protection.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| Aegis | 1019 | [GanyuanRan/Aegis](https://github.com/GanyuanRan/Aegis) | Make AI coding agents architecture-aware: baseline-first, evidence-verified, drift-checked, and safe across long tasks. | 0.1.0-rc.6 (2026-08-15) |
| dsh-auto-mode | 50 | [NanmiCoder/dsh-auto-mode](https://github.com/NanmiCoder/dsh-auto-mode) · [npm](https://www.npmjs.com/package/@nanmicoder/dsh-auto-mode) | Fail-closed automatic permission policy for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-clawrouter | 9 | [BlockRunAI/dsh-clawrouter](https://github.com/BlockRunAI/dsh-clawrouter) | Strong-model review before risky tool calls, plus many models from one wallet. | 0.1.0-rc.6 (2026-08-14) |
| dsh-undo-plugin | 9 | [lire1131/dsh-undo-plugin](https://github.com/lire1131/dsh-undo-plugin) | DSH undo/rollback system: snapshot config files on change, undo/redo the last action from the WebUI or by chat, and roll back broken plugin trees without reinstalling. Works even when DSH fails to. | 0.1.0-rc.6 (2026-08-14) |
| deepseek-heartflow | 5 | [yun520-1/deepseek-heartflow](https://github.com/yun520-1/deepseek-heartflow) · [npm](https://www.npmjs.com/package/@yun520-1/deepseek-heartflow) | HeartFlow gate for DSH: automatic output supervision plus a heartflow_check tool. | 0.1.0-rc.6 (2026-08-14) |
| dsh-approval-llm | 5 | [Letter2025/dsh-approval-llm](https://github.com/Letter2025/dsh-approval-llm) | Model-based permission approval (approve-for-me) for DeepSeek Harness: an approval/request answerer backed by a separate reviewer model | 0.1.0-rc.6 (2026-08-15) |
| dsh-webui-auth | 5 | [Yuuz12/dsh-webui-auth](https://github.com/Yuuz12/dsh-webui-auth) · [npm](https://www.npmjs.com/package/dsh-webui-auth) | WebUI login gate for DeepSeek Harness: account/password in Settings, then HTTP, bundle, API, and WebSocket require a session cookie. | 0.1.0-rc.6 (2026-08-14) |
| dsh-auto-approve | 4 | [Jiao-XXX/dsh-auto-approve](https://github.com/Jiao-XXX/dsh-auto-approve) | A conservative automatic approval preset for DeepSeek Harness sandbox escalations | 0.1.0-rc.6 (2026-08-14) |
| dsh-boot-guard | 4 | [SaiSenBox/dsh-boot-guard](https://github.com/SaiSenBox/dsh-boot-guard) · [npm](https://www.npmjs.com/package/dsh-boot-guard) | A loader-independent rescue console for DeepSeek Harness when a broken plugin prevents the Web UI from starting. | 0.1.0-rc.6 (2026-08-14) |
| dsh-openapi | 4 | [Degurechaff57/dsh-openapi](https://github.com/Degurechaff57/dsh-openapi) | OpenAPI 3.x discovery and safe API calling tools for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-15) |
| dsh-plugin-audit-jkrandom | 4 | [jkrandom-sudo/dsh-plugin-audit](https://github.com/jkrandom-sudo/dsh-plugin-audit) | Security audit plugin for DeepSeek Harness: static permission profiling and a runtime sentinel for third-party plugins | 0.1.0-rc.6 (2026-08-15) |
| dsh-plugins-henlii | 4 | [henlii/dsh-plugins](https://github.com/henlii/dsh-plugins) · [npm](https://www.npmjs.com/package/dsh-plugins) | DeepSeek Harness (dsh) 自定义插件集合：每个插件可独立安装，也可通过集合 patch 一次性全部安装。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-stream-rules | 4 | [jiesou/dsh-stream-rules](https://github.com/jiesou/dsh-stream-rules) · [npm](https://www.npmjs.com/package/@jiesou/dsh-stream-rules) | Inject steering rules when needed without wasting system context. | 0.1.0-rc.6 (2026-08-14) |
| dsh-thinking-status-customizer | 4 | [Dbi-Eshuh/dsh-thinking-status-customizer](https://github.com/Dbi-Eshuh/dsh-thinking-status-customizer) | A lifecycle-safe CSS-only customizer for the DSH Web thinking status. | 0.1.0-rc.6 (2026-08-15) |
| dsh-agentfuse | 3 | [MkaliezZ/dsh-agentfuse-plugin](https://github.com/MkaliezZ/dsh-agentfuse-plugin) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-agentfuse) | AgentFuse fail-closed pre-dispatch tool gate for DeepSeek Harness with durable allow/block decision evidence. | 0.1.0-rc.6 (2026-08-14) |
| dsh-approval-ai | 3 | [ang-XWBWZ/dsh-approval-ai](https://github.com/ang-XWBWZ/dsh-approval-ai) · [npm](https://www.npmjs.com/package/@llangtop/dsh-approval-ai) | AI approval answerer using the unified ctx.llm route with fail-closed local policy checks | 0.1.0-rc.6 (2026-08-14) |
| dsh-auto | 3 | [simon300000/dsh-auto](https://github.com/simon300000/dsh-auto) · [npm](https://www.npmjs.com/package/dsh-auto) | Model-reviewed Auto Approve permission preset for the DeepSeek Harness Web UI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-auto-approval-andy8647 | 3 | [Andy8647/dsh-auto-approval](https://github.com/Andy8647/dsh-auto-approval/tree/HEAD/packages/dsh-auto-approval) | Automated tool-call approval for DeepSeek Harness: an `auto` tier for approval policy that classifies each tool call as allow / deny before dispatch | 0.1.0-rc.6 (2026-08-15) |
| dsh-doctor-coppynig | 3 | [coppynight/dsh-doctor](https://github.com/coppynight/dsh-doctor/tree/HEAD/.dsh-plugin) | flutter-doctor style diagnose-and-repair for DeepSeek Harness: install-level + in-harness checks, safe fixes | 0.1.0-rc.6 (2026-08-15) |
| dsh-file-claim | 3 | [Nwflower/dsh-file-claim](https://github.com/Nwflower/dsh-file-claim) | Write in parallel, never overwrite — file claim / protection for concurrent DeepSeek Harness (DSH) sessions working the same workspace: claim/release, heartbeat stale takeover, and an async. | 0.1.0-rc.6 (2026-08-14) |
| dsh-guardian | 3 | [cdxiaodong/dsh-guardian](https://github.com/cdxiaodong/dsh-guardian) · [npm](https://www.npmjs.com/package/dsh-guardian) | Agent 安全护栏：拦截并审计所有工具调用，命中敏感操作就要求人工确认 | 0.1.0-rc.6 (2026-08-14) |
| dsh-multi-tenant | 3 | [GuoMonth/dsh-multi-tenant](https://github.com/GuoMonth/dsh-multi-tenant) | Multi-tenant SaaS extension for DeepSeek Harness (DSH): tenant identity, session ownership, authorization boundaries, tenant-aware MCP, and audit. | 0.1.0-rc.6 (2026-08-14) |
| dsh-permission-rules | 3 | [PerryLink/dsh-permission-rules](https://github.com/PerryLink/dsh-permission-rules) · [npm](https://www.npmjs.com/package/dsh-permission-rules) | Declarative Claude Code-style permission rules for DeepSeek Harness: ordered allow/deny/ask rules with tool-name, argument (glob/regex), and workspace-path matching on the tools/pre-execute waterfall, | 0.1.0-rc.6 (2026-08-14) |
| dsh-promptwall | 3 | [Chhlafiu4312/promptwall](https://github.com/Chhlafiu4312/promptwall) · [npm](https://www.npmjs.com/package/dsh-promptwall) | Local prompt-injection and secret-exfiltration firewall for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-safe-delete | 3 | [Qintsg/dsh-safe-delete](https://github.com/Qintsg/dsh-safe-delete) | Safe delete plugin for DeepSeek Harness (DSH): move files to trash / staging area instead of permanent removal, with restore and purge support. | 0.1.0-rc.6 (2026-08-15) |

<sub>Showing the 25 most-starred of 93. **[all 93 →](lists/safety-approvals.md)** · [gallery](https://dshworks.github.io/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Plugin managers & stores

In-UI stores, installers, skill managers.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-market | 233 | [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | Visual plugin market inside DeepSeek Harness — browse, search, and one-click install community plugins. · DSH 可视化插件市场：逛一逛，点一下，装好。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-marketplace | 65 | [bradeGithub/DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) · [npm](https://www.npmjs.com/package/dsh-plugin-marketplace) | Web GUI plugin marketplace: browse, install, and update GitHub topic dsh-plugin packages from inside DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| awesome-deepseek-harness | 48 | [Dominic789654/awesome-deepseek-harness](https://github.com/Dominic789654/awesome-deepseek-harness/tree/HEAD/plugins/dsh-code-review) | Code review assistant for DeepSeek Harness: code_review_context collects deterministic git diff context; a bundled skill drives the review checklist. | 0.1.0-rc.6 (2026-08-15) |
| dsh-webui-market-plugin | 46 | [Sanqi-normal/dsh-webui-market-plugin](https://github.com/Sanqi-normal/dsh-webui-market-plugin) · [npm](https://www.npmjs.com/package/@sanqi-normal/dsh-webui-market-plugin) | In-harness community plugin market for the dsh web GUI: browse, install, and uninstall into a profile. | 0.1.0-rc.6 (2026-08-14) |
| plugin-registry | 42 | [vlln/plugin-registry](https://github.com/vlln/plugin-registry/tree/HEAD/packages/plugin/console) | 薄控制台：浏览器 UI 管理 web profile 插件安装态（bundle 层栈 + cordis.patch.yml insert 行/disabled），0 patch | 0.1.0-rc.6 (2026-08-15) |
| dsh-plugins-store | 38 | [ZASENJC/dsh-plugins-store](https://github.com/ZASENJC/dsh-plugins-store) | 自动分类、收录和验证 GitHub dsh-plugin Topic 项目的静态 DSH 插件市场。 A static DSH plugin marketplace that automatically categorizes, curates, and verifies GitHub dsh-plugin Topic projects. | 0.1.0-rc.6 (2026-08-15) |
| dsh-skill-viewer | 35 | [Fishquito7/dsh-skill-viewer](https://github.com/Fishquito7/dsh-skill-viewer) | dsh skill viewer: manage skills from the DSH web UI settings panel (hot enable/disable, delete, add) plus a CLI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-web-plugin-manager | 33 | [LX2000WASD/dsh-web-plugin-manager](https://github.com/LX2000WASD/dsh-web-plugin-manager) | Manage DeepSeek Harness (DSH) plugins from the Web UI: list, enable/disable, install/remove, environments, and a GitHub-awesome-driven marketplace. | 0.1.0-rc.6 (2026-08-14) |
| zat-dsh-engine | 33 | [mishibeikejie/zat-dsh-engine](https://github.com/mishibeikejie/zat-dsh-engine) · [npm](https://www.npmjs.com/package/zat-dsh-engine) | Visual plugin marketplace for DeepSeek Harness: browse, search, install, update, and uninstall community plugins. | 0.1.0-rc.6 (2026-08-14) |
| dsh-find-plugin | 23 | [awesome-dsh-plugin/dsh-find-plugin](https://github.com/awesome-dsh-plugin/dsh-find-plugin) · [npm](https://www.npmjs.com/package/dsh-find-plugin) | Find DeepSeek Harness plugins from inside the agent via live GitHub dsh-plugin topic search, ranked by stars. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-hub | 23 | [Noob-stupid/dsh-plugin-hub](https://github.com/Noob-stupid/dsh-plugin-hub) | 插件控制台：一键启用/停用插件，浏览并安装 GitHub dsh-plugin 插件 | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-workshop | 23 | [yyyyukari/dsh-plugin-workshop](https://github.com/yyyyukari/dsh-plugin-workshop) · [npm](https://www.npmjs.com/package/@dsh-external/dsh-plugin-workshop) | Steam Workshop-style plugin browser for the DeepSeek Harness Web UI. | 0.1.0-rc.6 (2026-08-14) |
| deepseek-plugin-store | 13 | [Ericwong5021/deepseek-plugin-store](https://github.com/Ericwong5021/deepseek-plugin-store) | DeepSeek 插件商店开源数据源 · Open source data source for the DeepSeek Plugin Store | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-marketplace-awesomehou | 13 | [AwesomeHou/dsh-plugin-marketplace](https://github.com/AwesomeHou/dsh-plugin-marketplace) | 实时同步 GitHub dsh-plugin topic 的插件市场：Host 定时抓取并缓存，Web 设置页展示可搜索的插件列表。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-market-2binglin | 12 | [2BingLing/dsh-market](https://github.com/2BingLing/dsh-market/tree/HEAD/plugin/ui) | DSH Market 插件端：cordis 侧边栏插件（浏览/搜索/猜你喜欢/一键安装/已装管理），核心逻辑来自 @dsh-market/core | 0.1.0-rc.6 (2026-08-15) |
| dsh-recommend | 11 | [zp-home/dsh-recommend](https://github.com/zp-home/dsh-recommend) | DSH 插件透明排行与推荐：每日自动抓取 dsh-plugin 话题生态 + 公开评分模型 + rank/recommend/search 工具 + 设置页排行标签 | 0.1.0-rc.6 (2026-08-14) |
| dsh-stock-market | 11 | [AnacondaKC/dsh-stock-market](https://github.com/AnacondaKC/dsh-stock-market) | DSH Shanghai and Shenzhen A-share market plugin | 0.1.0-rc.6 (2026-08-15) |
| awesome-deepseek-harness-plugins | 9 | [imsai-sh/awesome-deepseek-harness-plugins](https://github.com/imsai-sh/awesome-deepseek-harness-plugins/tree/HEAD/packages/dsh-1024store) | The 1024 Store plugin market inside DeepSeek Harness. | 0.1.0-rc.6 (2026-08-15) |
| dsh-skill-manager-sulfide2085 | 9 | [sulfide2085/dsh-skill-manager](https://github.com/sulfide2085/dsh-skill-manager) · [npm](https://www.npmjs.com/package/dsh-skill-manager) | DSH 设置页技能管理器：展示全部已加载 skill（含调用策略/来源/状态），支持启用/停用热开关 | 0.1.0-rc.6 (2026-08-14) |
| dexthemes | 6 | [daeshawnballard/dexthemes](https://github.com/daeshawnballard/dexthemes/tree/HEAD/packages/deepseek-harness-plugin) | Discover, preview, apply, restore, and revert themes in DeepSeek Harness | 0.1.0-rc.6 (2026-08-15) |
| dizzy-dsh | 6 | [Acidmoon/DIzzy-DSH](https://github.com/Acidmoon/DIzzy-DSH) | Dizzy-DSH 插件合集仓库:git clone 后 dsh plugin add 即装,无需 npm 发布。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-installer-toukaite | 6 | [Toukaiteio/dsh-plugin-installer](https://github.com/Toukaiteio/dsh-plugin-installer) | A Web UI marketplace and profile switcher for DeepSeek Harness plugins. | 0.1.0-rc.6 (2026-08-15) |
| dsh-skill-cocosgt | 6 | [CocoSgt/dsh-skill](https://github.com/CocoSgt/dsh-skill) | Skill management for DeepSeek Harness: install, list, and route SKILL.md units from the web UI, built on the dsh typert protocol. | 0.1.0-rc.6 (2026-08-15) |
| dsh-skills | 6 | [CocoSgt/dsh-skills](https://github.com/CocoSgt/dsh-skills) · [npm](https://www.npmjs.com/package/dsh-skills) | Global skill hub for dsh: aggregates Claude Code, project, and .skill sources in Settings. | 0.1.0-rc.6 (2026-08-14) |
| dsh-extension-hub | 5 | [Relistencode/dsh-extension-hub](https://github.com/Relistencode/dsh-extension-hub) · [npm](https://www.npmjs.com/package/dsh-extension-hub) | Manage DeepSeek Harness skills and MCP servers from the web settings page, with import from Claude and Codex. | 0.1.0-rc.6 (2026-08-14) |

<sub>Showing the 25 most-starred of 126. **[all 126 →](lists/plugin-managers-stores.md)** · [gallery](https://dshworks.github.io/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Developer tools

Building, testing, and publishing plugins.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| superpowers-dsh | 30 | [LayneChai/superpowers-dsh](https://github.com/LayneChai/superpowers-dsh) | TDD, debugging, planning, and collaboration skills for DeepSeek Harness, adapted from obra/superpowers. | 0.1.0-rc.6 (2026-08-14) |
| dsh-tianshu-build | 23 | [huiliyi37/dsh-tianshu-build](https://github.com/huiliyi37/dsh-tianshu-build/tree/HEAD/packages/bundle/base) | The shared dsh core as a profile bundle: every profile's first patch layer, inserting the base plugin rows over the empty profile root | 0.1.0-rc.6 (2026-08-15) |
| dsh-plugin-check | 18 | [omdsh-dev/dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) | DSH plugin health checker: scan plugin repos for manifest protocol / patch format / build pitfalls / hub registration, zero-dependency read-only diagnostics | 0.1.0-rc.6 (2026-08-14) |
| dsh-user-experience | 18 | [DietCokewithSugar/dsh-user-experience](https://github.com/DietCokewithSugar/dsh-user-experience) | DeepSeek Harness UX walkthrough plugin: persona-driven source-code UX review for React (TypeScript/JavaScript) and Vue 3 projects, with change-triggered automatic walkthroughs | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-template | 16 | [bugmaker2/dsh-plugin-template](https://github.com/bugmaker2/dsh-plugin-template) | Minimal Hello World plugin template for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-15) |
| dsh-grok-tui | 9 | [chen-001/dsh-grok-tui](https://github.com/chen-001/dsh-grok-tui) | Use dsh via grok-build's TUI. | 0.1.0-rc.6 (2026-08-15) |
| dsh-director-toolkit | 7 | [lhmd/dsh-director-toolkit](https://github.com/lhmd/dsh-director-toolkit) | DeepSeek Harness plugin that turns a 3D idea into a shootable scene brief and publish-ready showcase copy. | 0.1.0-rc.6 (2026-08-15) |
| dsh-plugin-healthcheck | 6 | [chenw2759-wq/dsh-plugin-healthcheck](https://github.com/chenw2759-wq/dsh-plugin-healthcheck) | DSH 插件健康检查：设置面板内的「插件检测」向导 — L0 静态检查（files 白名单/依赖声明/高危副本/依赖可解析/Windows 命令/lockfile 一致性）+ L1 配置组合检查 + L2 隔离试跑（子进程 boot 全树），发现即自动回滚（写 home patch 前弹确认），复杂问题打包预制提示词交给 agent 修复。铁律：只修改插件代码与配置层，严禁修改 harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-eval-harness | 5 | [BiBoyang/dsh-eval-harness](https://github.com/BiBoyang/dsh-eval-harness) · [npm](https://www.npmjs.com/package/dsh-eval-harness) | DSH 插件回归评测门禁：yaml 用例 + headless 驱动 + trace 断言 + baseline 门禁（eval_run / eval_gate） | 0.1.0-rc.6 (2026-08-14) |
| plugin-template | 5 | [omdsh-dev/plugin-template](https://github.com/omdsh-dev/plugin-template) | Standalone Cordis plugin template for DeepSeek Harness | 0.1.0-rc.6 (2026-08-15) |
| deepseek-harness-desktop-baiyuscc | 4 | [baiyuscc13724-max/deepseek-harness-desktop](https://github.com/baiyuscc13724-max/deepseek-harness-desktop) | Open-source Windows desktop shell for the official DeepSeek Harness Web UI with automatic local runtime startup, packaged self-test, and release gates. | 0.1.0-rc.6 (2026-08-15) |
| dsh-testgen | 4 | [bujue600-arch/dsh-testgen](https://github.com/bujue600-arch/dsh-testgen) | Automated unit-test generation for DeepSeek Harness: a /testgen command and generate_tests tool that scaffold, run, and fix tests until they pass. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-publisher | 3 | [akira399/dsh-plugin-publisher](https://github.com/akira399/dsh-plugin-publisher) | DSH plugin development & GitHub publishing workflow plugin for DeepSeek Harness (DSH). Host: registers the `dsh-plugin-publishing` skill (enabled by default, opt-out), and bridges a GUI-entered. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-release | 3 | [LeslieWylie/dsh-plugin-release](https://github.com/LeslieWylie/dsh-plugin-release) | Portable package contract, release checklist, and installation hygiene skills for DeepSeek Harness plugins. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-template-sunshine | 3 | [sunshine-lang/dsh-plugin-template](https://github.com/sunshine-lang/dsh-plugin-template) | {{DESCRIPTION}} | 0.1.0-rc.6 (2026-08-15) |
| dsh-plugin-visual-composer | 3 | [VanillaCreamer/dsh-plugin-visual-composer](https://github.com/VanillaCreamer/dsh-plugin-visual-composer) · [npm](https://www.npmjs.com/package/dsh-plugin-visual-composer) | Visual Cordis plugin-tree composer for the DeepSeek Harness Web UI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-change-center | 2 | [Chance-Wu/dsh-change-center](https://github.com/Chance-Wu/dsh-change-center) · [npm](https://www.npmjs.com/package/dsh-change-center) | DeepSeek Harness file-change capture, diff, and review-center plugin | 0.1.0-rc.6 (2026-08-14) |
| dsh-code-check | 2 | [a179-sanae/dsh-code-check](https://github.com/a179-sanae/dsh-code-check) | Auto type-check and lint diagnostics for DeepSeek Harness: after the model edits code, tsc runs in the background and a code_check tool reports what broke | 0.1.0-rc.6 (2026-08-14) |
| dsh-code-impact | 2 | [baidd1011/dsh-code-impact](https://github.com/baidd1011/dsh-code-impact) | Read-only TypeScript and JavaScript change-impact analysis for DeepSeek Harness | 0.1.0-rc.6 (2026-08-15) |
| dsh-do-fabric | 2 | [BingChanCN/fabric](https://github.com/BingChanCN/fabric) · [npm](https://www.npmjs.com/package/@dsh-do/fabric) | Composable frontend framework for DeepSeek Harness plugins | 0.1.0-rc.6 (2026-08-14) |
| dsh-doublecheck | 2 | [PerryLink/dsh-doublecheck](https://github.com/PerryLink/dsh-doublecheck) | Double-check before you ship: grill the requirements, test the implementation, prove the delivery. | 0.1.0-rc.6 (2026-08-15) |
| dsh-engineering-services | 2 | [wefio/dsh-engineering-services](https://github.com/wefio/dsh-engineering-services) | IDE engineering services for DeepSeek Harness: LSP diagnostics/navigation/rename, DAP debugging (debugpy + js-debug), and task-toolchain build/test/lint runs. | 0.1.0-rc.6 (2026-08-14) |
| dsh-git-worktree | 2 | [KHG420/git-worktree](https://github.com/KHG420/git-worktree) · [npm](https://www.npmjs.com/package/dsh-git-worktree) | Conversation↔worktree binding for DeepSeek Harness: one-click isolated worktree + branch per conversation, with a binding manager panel | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-auditor | 2 | [HYY-King/dsh-plugin-auditor](https://github.com/HYY-King/dsh-plugin-auditor) · [npm](https://www.npmjs.com/package/dsh-plugin-auditor) | DSH 插件审核器：在新插件加入 profile 前扫描组合兼容性——重复工具注册、entry id 冲突、peer 版本不匹配、记忆插件唯一性、渠道插件凭据，输出风险报告，预防启动崩溃。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-reload | 2 | [reina4xa/dsh-plugin-reload](https://github.com/reina4xa/dsh-plugin-reload) · [npm](https://www.npmjs.com/package/dsh-plugin-reload) | A DeepSeek Harness plugin: model-facing reload_plugin tool that restarts one Cordis Loader entry (by entry id, module name, or MCP serverName) without touching sibling entries — respawns mcp-client... | 0.1.0-rc.6 (2026-08-14) |

<sub>Showing the 25 most-starred of 45. **[all 45 →](lists/developer-tools.md)** · [gallery](https://dshworks.github.io/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Knowledge & research

Research workbenches, RAG, learning modes.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| de-anthropocentric-research-engine | 381 | [yogsoth-ai/de-anthropocentric-research-engine](https://github.com/yogsoth-ai/de-anthropocentric-research-engine/tree/HEAD/dsh-plugin) | DeepSeek Harness plugin for the De-Anthropocentric Research Engine: 920 research skills, with an opt-in MCP server fleet | 0.1.0-rc.6 (2026-08-15) |
| dsh-scholar | 15 | [lzszq/dsh-scholar](https://github.com/lzszq/dsh-scholar) | DSH Research OS — a fully automated scientific research plugin for DSH (DeepSeek Harness): survey, idea, experiment contract, durable runner jobs, claim-evidence ledger, manuscript and release bundle. | 0.1.0-rc.6 (2026-08-14) |
| dsh-deep-research | 12 | [omdsh-dev/dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research) | Deep Research orchestrator extension for DeepSeek Harness: an adaptive cybernetics/information-theory deep_research tool on the official workflow engine, reusing built-in web_search/web_fetch. | 0.1.0-rc.6 (2026-08-14) |
| dsh-reverse-skill | 12 | [dhicoc/dsh-reverse-skill](https://github.com/dhicoc/dsh-reverse-skill) · [npm](https://www.npmjs.com/package/@reverse-skill/dsh-reverse-skill) | Reverse-engineering skill pack as a Cordis plugin: 85 SKILL.md units for authorized security research. | 0.1.0-rc.6 (2026-08-14) |
| dsh-robotic-harness | 12 | [dingkaihu63/dsh-robotic-harness](https://github.com/dingkaihu63/dsh-robotic-harness) | Robotic Harness — an embodied-intelligence research plugin suite for DeepSeek Harness (demo) | 0.1.0-rc.6 (2026-08-15) |
| project-blueprint | 12 | [shuguang1994/project-blueprint](https://github.com/shuguang1994/project-blueprint) | DSH (DeepSeek Harness) plugin packaging of the Project Blueprint skill — one-command AI coding conventions (AGENTS.md, docs skeleton, CI/CD, git rules, testing policy) with an autonomous discovery | 0.1.0-rc.6 (2026-08-15) |
| dsh-explain | 11 | [yuezengwu/dsh-explain](https://github.com/yuezengwu/dsh-explain) | Local-first learning-mode plugin with a global learning thread, per-source explanations, and a diagnostics settings UI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-science | 10 | [biociao/dsh-science](https://github.com/biociao/dsh-science) | Claude Science-style research workbench for DeepSeek Harness: ReAct research-loop engine (research_* tools), versioned artifacts with provenance (artifact_* tools), and 10 science skills for. | 0.1.0-rc.6 (2026-08-14) |
| dsh-design-skills | 9 | [zhaiyateng/dsh-design-skills](https://github.com/zhaiyateng/dsh-design-skills) · [npm](https://www.npmjs.com/package/dsh-design-skills) | Design aesthetics skill pack for DeepSeek Harness (DSH): 6 styles — dark SaaS, minimal white, neumorphism, brutalism, glassmorphism, Japanese minimal — with runnable landing-page demos. Keeps vibe-... | 0.1.0-rc.6 (2026-08-14) |
| dsh-docling | 9 | [Sqhao-O/dsh-docling](https://github.com/Sqhao-O/dsh-docling) · [npm](https://www.npmjs.com/package/dsh-docling) | Native document intelligence for DeepSeek Harness, powered by Docling. | 0.1.0-rc.6 (2026-08-14) |
| dsh-search-mcp | 8 | [gxpppp/dsh-search-mcp](https://github.com/gxpppp/dsh-search-mcp) | Replace dsh's built-in web search with search MCP servers (Tavily / Brave / Exa / Perplexity / DuckDuckGo / custom), configured from the web Settings page. When this plugin is enabled the built-in | 0.1.0-rc.6 (2026-08-15) |
| dsh-sticky-note | 7 | [Meredith2328/dsh-sticky-note](https://github.com/Meredith2328/dsh-sticky-note) | 左下角便签：随手记点子/感想/TODO，实时保存到归档目录，清单+悬浮归档 | 0.1.0-rc.6 (2026-08-15) |
| dsh-web-search-pro | 7 | [anweat/dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) | Enhanced, persistent web search plugin for DeepSeek Harness — multi-engine routing (DeepSeek/Exa/DDG/Bing/Jina + GitHub/B站/YouTube/V2EX/小红书/Twitter/Reddit/RSS), SQLite+LRU cache, userscript-style | 0.1.0-rc.6 (2026-08-15) |
| dsh-deepresearch | 5 | [havingautism/dsh-deepresearch](https://github.com/havingautism/dsh-deepresearch) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-deepresearch) | Independent evidence-first research workflow with durable state and its own Web view | 0.1.0-rc.6 (2026-08-14) |
| dsh-evoresearch | 5 | [Karbo123/DSH-EvoResearch](https://github.com/Karbo123/DSH-EvoResearch/tree/HEAD/packages/evoresearch-plugin) · [npm](https://www.npmjs.com/package/@evoresearch/dsh-plugin) | Self-evolving research workflow for DeepSeek Harness: project workspaces, research memory, multi-agent teams, and a custom workbench. | 0.1.0-rc.6 (2026-08-14) |
| dsh-mindmap | 5 | [chenw2759-wq/dsh-mindmap](https://github.com/chenw2759-wq/dsh-mindmap) | 思维导图模式（dsh-mindmap）：把课件（PPT/PDF/Word）与电子书按「组胚思维导图」范例整理成打印级 HTML 复习思维导图——A3 横向、每主干知识点一页、大括号式横向布局、宋体大字不溢出、右侧留白笔记区、封面总览 + 交互式测试题。附带 mindmap-builder skill 与 mm_generate 工具。 | 0.1.0-rc.6 (2026-08-14) |
| zotero-harvest | 5 | [Fisfzy/zotero-harvest](https://github.com/Fisfzy/zotero-harvest) | Zotero literature harvesting: search, resolve download links, save into the local Zotero library, and stay searchable via zotero-wave-rag | 0.1.0-rc.6 (2026-08-15) |
| dsh-book2skill | 4 | [omdsh-dev/dsh-book2skill](https://github.com/omdsh-dev/dsh-book2skill) | DSH book-to-skill plugin: a 5-stage long task (fetch → parse → understand → generate → install) with 3 human gates, host tools for the agent and a browser timeline panel | 0.1.0-rc.6 (2026-08-14) |
| dsh-learn-everything | 4 | [cendaifeng/dsh-learn-everything](https://github.com/cendaifeng/dsh-learn-everything) | Feynman learning-mode plugin for DeepSeek Harness: /learn on\|off, structured lesson cards, rich HTML teaching. | 0.1.0-rc.6 (2026-08-15) |
| dsh-scholar-20241113 | 4 | [202411130091-coder/dsh-scholar](https://github.com/202411130091-coder/dsh-scholar) | Research/scholar tool suite for DeepSeek Harness: arXiv search, paper fetch (HTML/PDF, optional proxy), and OpenAlex journal lookup. | 0.1.0-rc.6 (2026-08-15) |
| dsh-citeguard | 3 | [Chhlafiu4312/citeguard](https://github.com/Chhlafiu4312/citeguard) · [npm](https://www.npmjs.com/package/dsh-citeguard) | Citation extraction and evidence verification for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-finance | 3 | [zhang787jun/dsh-finance](https://github.com/zhang787jun/dsh-finance) · [npm](https://www.npmjs.com/package/dsh-finance) | Financial research and portfolio risk workflow tools for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-mindspace-local-rag | 3 | [Spirtxiaoqi7/mindspace-dsh-local-rag](https://github.com/Spirtxiaoqi7/mindspace-dsh-local-rag) · [npm](https://www.npmjs.com/package/mindspace-dsh-local-rag) | Local hybrid RAG plugin for DeepSeek Harness, invoked by the model from the workspace. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-knowledge-graph | 3 | [Luke-Yong/dsh-plugin-knowledge-graph](https://github.com/Luke-Yong/dsh-plugin-knowledge-graph) | DeepSeek Harness plugin: a read_graph tool backed by a codebase knowledge graph (CONTAINS / EXPORTS / IMPORTS / IMPORTS_SYMBOL). | 0.1.0-rc.6 (2026-08-15) |
| dsh-research-notes | 3 | [fff122/dsh-research-notes](https://github.com/fff122/dsh-research-notes) | A local research notes plugin for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-15) |

<sub>Showing the 25 most-starred of 87. **[all 87 →](lists/knowledge-research.md)** · [gallery](https://dshworks.github.io/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Fun

Games, pets, memes, ambience. The reef has coral.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-ads | 400 | [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) | Satirical 2005-portal fake-ad plugin for the web UI (sidebar ads, in-conversation feed, corner popups); ad slots also surface real dsh-plugin topic repos | 0.1.0-rc.5 (2026-08-13) |
| whale-girl ⭐ | 162 | [vlln/whale-girl](https://github.com/vlln/whale-girl) | Desktop-pet companion for the web GUI (QQ-pet style): draggable, feedable, levels up with session activity; migrated from the removed .dsh-plugin format to dsh.bundle | 0.1.0-rc.5 (2026-08-13) |
| gal-view | 47 | [Ayase34/gal-view](https://github.com/Ayase34/gal-view) | DSH Web GUI 会话页的 GAL 视窗：Galgame 风格对话视图 + 场景元素可视化编辑器 | 0.1.0-rc.6 (2026-08-14) |
| dsh-pet | 38 | [PC2005-cloud/dsh-pet](https://github.com/PC2005-cloud/dsh-pet/tree/HEAD/dsh-pet) | A floating desktop pet for the DeepSeek Harness Web UI: idle breathing, occasional direction turns, random actions, and screen wandering. | 0.1.0-rc.6 (2026-08-15) |
| dsh-ui-whale | 30 | [lhh010/dsh-ui-whale](https://github.com/lhh010/dsh-ui-whale) | DSH Web UI 像素鲸鱼伙伴插件：会话标题栏常驻，平时眨眼/偶尔摆尾/动胸鳍，思考运行时持续动起来，回合完成头顶喷水，点击冒爱心，零核心改动。 | 0.1.0-rc.6 (2026-08-15) |
| DSH-Transparent-UI-Plugin | 25 | [WYH66666666/DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin) | Aqua: a highly customizable glassmorphism theme for the Web surface — adjustable blur, frost, fluid or wallpaper backdrop, unified corners, and motion | 0.1.0-rc.6 (2026-08-15) |
| deepseek-pet | 19 | [keleus/deepseek-pet](https://github.com/keleus/deepseek-pet) | DeepSeek Pet plugin: an interactive, state-aware companion embedded in DeepSeek Harness Web | 0.1.0-rc.6 (2026-08-15) |
| dsh-minigames-lhh010 | 18 | [lhh010/dsh-minigames](https://github.com/lhh010/dsh-minigames) | DSH Web UI 右侧小游戏面板：18 款离线小游戏，可扩展游戏注册表。等待模型回复或修 bug 时的摸鱼神器。 | 0.1.0-rc.6 (2026-08-15) |
| dsh-emoji | 17 | [hellodigua/dsh-emoji](https://github.com/hellodigua/dsh-emoji) | Tiny semantic inline emoji for DSH Agent responses | 0.1.0-rc.6 (2026-08-14) |
| dsh-gomoku | 13 | [omdsh-dev/dsh-gomoku](https://github.com/omdsh-dev/dsh-gomoku) | Gomoku (five-in-a-row) for the dsh web GUI: AI move routes, model catalog, and default prompt (node half) plus the conversation-view tab with the board (browser half) | 0.1.0-rc.6 (2026-08-14) |
| dsh-galgame | 7 | [Lanxing6480/dsh-galgame](https://github.com/Lanxing6480/dsh-galgame) | GalGame mode for the dsh web GUI: a third conversation view tab (after 轨迹) that renders the real agent session as a visual-novel stage — whale-girl (DeepSeek) portrait with diff switching + draggable | 0.1.0-rc.6 (2026-08-15) |
| dsh-answer-pet | 6 | [Nanki-nn/dsh-answer-pet](https://github.com/Nanki-nn/dsh-answer-pet) | DeepSeek Harness Web 可扩展回答状态宠物框架：支持宠物主题、多会话进度、模型轨迹和工具调用。 | 0.1.0-rc.6 (2026-08-15) |
| dsh-blue-whale | 6 | [starslittle/dsh-blue-whale](https://github.com/starslittle/dsh-blue-whale) | A DeepSeek Chat-style blue-whale color skin. Light and dark follow the built-in appearance. | 0.1.0-rc.6 (2026-08-15) |
| dsh-funpack | 6 | [lvyuchuiyi/dsh-funpack](https://github.com/lvyuchuiyi/dsh-funpack) | 夸夸、运势、战报、番茄钟、摸鱼、沉浸氛围、桌宠语音、Live2D、Boss 隐身与代码花园一体化的 DeepSeek Harness 插件 | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-anti-ads | 6 | [HuanLinOTO/dsh-plugin-anti-ads](https://github.com/HuanLinOTO/dsh-plugin-anti-ads) | DSH ad-suppression plugin: writes dsh-ads's own settings key to all-false, broadcasts its retire event, scrubs its portal from the DOM, and short-circuits its dynamic-tier fetch. Four layers, all. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-auto-blame | 6 | [HuanLinOTO/dsh-plugin-auto-blame](https://github.com/HuanLinOTO/dsh-plugin-auto-blame) | Auto-blame: when a turn closes, asks an LLM for three cynical follow-up prompts and shows them as click-to-send bubbles above the composer. Host-gated master toggle in the settings page. | 0.1.0-rc.6 (2026-08-14) |
| dsh-codex-pet-skr311 | 5 | [skr311/dsh-codex-pet](https://github.com/skr311/dsh-codex-pet/tree/HEAD/packages/dsh-codex-pet) | A desktop pet plugin for DeepSeek Harness (DSH): import Codex-style sprite-sheet pets and render them in the DSH Web GUI as a floating shell.overlay, with a pet library, interactions, and Agent-state | 0.1.0-rc.6 (2026-08-15) |
| dsh-live2d-pets | 5 | [cyanfish-x/dsh-live2d-pets](https://github.com/cyanfish-x/dsh-live2d-pets) | Live2D pet plugin for DeepSeek Harness: load models from any external URL or local model path | 0.1.0-rc.6 (2026-08-15) |
| dsh-lorebookmd | 5 | [609476965/dsh-LorebookMD](https://github.com/609476965/dsh-LorebookMD) | DSH lorebook-driven fiction writer: import Tavern/SillyTavern character cards & world books, save local Markdown settings, and generate novel prose referencing the world settings. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-d399 | 5 | [HuanLinOTO/dsh-plugin-d399](https://github.com/HuanLinOTO/dsh-plugin-d399) | 贪玩蓝鲸 — 模型生成时右下角弹出小游戏菜单（wordle / 消消乐，可拓展游戏注册表） | 0.1.0-rc.6 (2026-08-14) |
| dsh-portable-tavern | 5 | [XCNXNXNX/dsh-portable-tavern](https://github.com/XCNXNXNX/dsh-portable-tavern) · [npm](https://www.npmjs.com/package/dsh-portable-tavern) | Portable Tavern for the DeepSeek Harness web GUI: an RPG-style SillyTavern V2/V3 character-card generator plus tavern roleplay chat, with world-book generation and JSON/PNG import-export. | 0.1.0-rc.6 (2026-08-14) |
| dsh-xiaohei | 5 | [opensetk/dsh-xiaohei](https://github.com/opensetk/dsh-xiaohei) | A pet that lives in the DSH Web UI, changing poses as the agent runs. | 0.1.0-rc.6 (2026-08-15) |
| harness-pet | 5 | [cakeni/harness-pet](https://github.com/cakeni/harness-pet) | Harness Pet is an unofficial community project. Not affiliated with, endorsed by, or maintained by DeepSeek. A tiny whale for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-15) |
| 7d7d | 4 | [omdsh-dev/7d7d](https://github.com/omdsh-dev/7d7d) | 7d7d —— 7k7k 风格的 DSH 游戏门户：在 Web UI 内生成、同步并游玩 HTML5 与自托管 Ruffle Flash 小游戏。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-deepseek-girl-pet | 4 | [f0909172434/dsh-deepseek-girl-pet](https://github.com/f0909172434/dsh-deepseek-girl-pet) | Animated deepseek girl desktop pet overlay for DeepSeek Harness | 0.1.0-rc.6 (2026-08-15) |

<sub>Showing the 25 most-starred of 104. **[all 104 →](lists/fun.md)** · [gallery](https://dshworks.github.io/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Bundles

npm packages with a `dsh.bundle` manifest: composition layers a profile boots from.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-base (official) | 110448 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/bundle/base) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-base) | The shared dsh core as a profile bundle: every profile's first patch layer, inserting the base plugin rows over the empty profile root | 0.1.0-rc.5 (2026-08-13) |
| dsh-headless (official) | 110448 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/bundle/headless) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-headless) | The one-shot bundle: a direct core Agent/Session runner over dsh-base with no Host, HTTP, or browser layer | 0.1.0-rc.5 (2026-08-13) |
| dsh-web-app (official) | 110448 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/bundle/web-app) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-web-app) | The browser-surface bundle: the web patch layer over dsh-base plus the runtime glue plugin (frontend dist serving, web-surface prompt, URL line) | 0.1.0-rc.5 (2026-08-13) |
| dsh-tui-ccch1mneyyy | 1178 | [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) · [npm](https://www.npmjs.com/package/@deepseek-harness-tui/dsh-tui) | Claude Code-style interactive TUI front door for DeepSeek Harness agents, built on a ported Ink core. | 0.1.0-rc.6 (2026-08-14) |
| oh-dsh | 186 | [hust-open-atom-club/oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) | Community distribution bundling TUI, desktop, and web UI surfaces with layered installation, pinned to an exact harness revision via dsh-source.json | 0.1.0-rc.5 (2026-08-13) |
| dsh-super-injector | 51 | [yjh051108/dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) | Runtime injector for local DSH plugin packages with hot reload and a settings-page manager. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-marketplace-yelebai | 17 | [YELEBAI/dsh-plugin-marketplace](https://github.com/YELEBAI/dsh-plugin-marketplace) | A plugin marketplace for DeepSeek Harness with categories, trending discovery, install management, and controlled restart. | 0.1.0-rc.6 (2026-08-14) |
| dsh-toolkit | 17 | [omdsh-dev/dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit) | Zero-dependency toolkit collection: time, encoding, json, calculator, csv, regex, markdown, diff, stat, and schema in one entry. | 0.1.0-rc.6 (2026-08-14) |
| dsh-code | 11 | [UNLINEARITY/dsh-code](https://github.com/UNLINEARITY/dsh-code) · [npm](https://www.npmjs.com/package/dsh-code) | Claude-Code-style interactive TUI bundle for DeepSeek Harness with a DeepSeek-blue whale banner and live session transcript. | 0.1.0-rc.6 (2026-08-14) |
| dsh-stock-watch | 11 | [Awu12277/dsh-stock-watch](https://github.com/Awu12277/dsh-stock-watch) | Collapsible A-share watchlist popup with live quotes, charts, and a target-price panel. | 0.1.0-rc.6 (2026-08-14) |
| dsh-mneme | 10 | [modusensus/dsh-mneme](https://github.com/modusensus/dsh-mneme/tree/HEAD/dsh-mneme) | Cross-session memory with SQLite, Markdown mirrors, autoDream consolidation, and a web panel. | 0.1.0-rc.6 (2026-08-14) |
| dsh-fabric | 9 | [omdsh-dev/fabric](https://github.com/omdsh-dev/fabric) | Fabric/Mixin extension workspace: an installable profile bundle carrier over the cordis-fabric package trio. | 0.1.0-rc.6 (2026-08-14) |
| dsh-desk | 6 | [majiayu000/dsh-desk](https://github.com/majiayu000/dsh-desk) | Tauri desktop companion for DeepSeek Harness: wraps official dsh 0.1.0-rc.6 in a system WebView with isolated DSH_HOME and a plugin-manager UI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-harmony | 6 | [CH4ACKO3/dsh-harmony](https://github.com/CH4ACKO3/dsh-harmony) | Runtime library to patch, replace, and decorate DeepSeek Harness plugins with hot reload. | 0.1.0-rc.6 (2026-08-14) |
| dsh-ui-preset-enhance | 6 | [lssyd20070106/dsh-ui-preset-enhance](https://github.com/lssyd20070106/dsh-ui-preset-enhance) · [npm](https://www.npmjs.com/package/dsh-ui-preset-enhance) | Web UI extras for custom backgrounds, theme colors, prompt presets, and manual context compaction. | 0.1.0-rc.6 (2026-08-14) |
| dsh-any-background | 4 | [Tkingxiao/dsh-any-background](https://github.com/Tkingxiao/dsh-any-background) | Custom wallpaper and theme-color controls for the DeepSeek Harness web UI, including opacity, blur, and a color wheel. | 0.1.0-rc.6 (2026-08-14) |
| dsh-bash-win | 4 | [zimzaza4/dsh-bash-win](https://github.com/zimzaza4/dsh-bash-win) · [npm](https://www.npmjs.com/package/@zimzaza4/dsh-bash-win) | Windows-first bash tools for DeepSeek Harness: Git Bash and WSL2 bash with bwrap sandbox, approval mode, and background jobs. | 0.1.0-rc.6 (2026-08-14) |
| dsh-browser-companion | 4 | [Tianyu209/dsh-browser-companion](https://github.com/Tianyu209/dsh-browser-companion) · [npm](https://www.npmjs.com/package/dsh-browser-companion) | Persistent visible browser for DeepSeek Harness with human-in-the-loop login and agent browser tools. | 0.1.0-rc.6 (2026-08-14) |
| dsh-image2-draw | 4 | [JuneLearn/dsh-image2-draw](https://github.com/JuneLearn/dsh-image2-draw) · [npm](https://www.npmjs.com/package/dsh-image2-draw) | Image2 (gpt-image-2) generation plugin for DeepSeek Harness with a Settings card for API key and endpoint. | 0.1.0-rc.6 (2026-08-14) |
| dsh-obsidian-assistant | 4 | [iamzcr/dsh-obsidian-assistant](https://github.com/iamzcr/dsh-obsidian-assistant) · [npm](https://www.npmjs.com/package/dsh-obsidian-assistant) | Read, search, and edit a local Obsidian vault from DeepSeek Harness, with optional Local REST API integration. | 0.1.0-rc.6 (2026-08-14) |
| pptfast | 4 | [liustack/pptfast](https://github.com/liustack/pptfast) · [npm](https://www.npmjs.com/package/@liustack/pptfast) | Stable editable PPTX generation for DeepSeek Harness agents: semantic IR in, native DrawingML out. | 0.1.0-rc.6 (2026-08-14) |
| dsh-101 | 3 | [bill9109/dsh-101](https://github.com/bill9109/dsh-101) | A document-first reader profile bundle for DeepSeek Harness: curated, ordered, searchable, translatable reading of DSH's own documentation over dsh-base + dsh-web-app. | 0.1.0-rc.6 (2026-08-14) |
| dsh-cmd-starter | 3 | [PandaColour/dsh-cmd-starter](https://github.com/PandaColour/dsh-cmd-starter) | Claude-Code style CLI scheduling bundle for DeepSeek Harness headless: --append-prompt, --resume, --continue, --output-format json, and model overrides. | 0.1.0-rc.6 (2026-08-14) |
| dsh-deepseek-vision | 3 | [Argonaut790/dsh-deepseek-vision](https://github.com/Argonaut790/dsh-deepseek-vision) · [npm](https://www.npmjs.com/package/dsh-deepseek-vision) | Image understanding, OCR, and persistent visual evidence for text-only DeepSeek Harness models. | 0.1.0-rc.6 (2026-08-14) |
| dsh-docker | 3 | [STARDUSTLC666/dsh-docker](https://github.com/STARDUSTLC666/dsh-docker) · [npm](https://www.npmjs.com/package/dsh-docker) | Docker container tools for DeepSeek Harness: ps, logs, inspect, exec, and manage via the official subprocess service. | 0.1.0-rc.6 (2026-08-14) |

<sub>Showing the 25 most-starred of 83. **[all 83 →](lists/bundles.md)** · [gallery](https://dshworks.github.io/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Skills

Anthropic-format `SKILL.md` units; dsh discovers them from its skill roots (no nested discovery, kebab-case names only).

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| colleague-skill | 22357 | [titanwings/colleague-skill](https://github.com/titanwings/colleague-skill) | Digital-companion skill in the Anthropic SKILL.md format dsh reads; install by copying it into a dsh skill root such as .agents/skills | 0.1.0-rc.5 (2026-08-13) |
| ex-skill | 1057 | [titanwings/ex-skill](https://github.com/titanwings/ex-skill) | Builds a digital persona skill of your ex from WeChat chat logs (create-ex); SKILL.md documents dsh discovery paths alongside other hosts | 0.1.0-rc.5 (2026-08-13) |
| harmony-next | 321 | [linhay/harmony-next.skills](https://github.com/linhay/harmony-next.skills) | HarmonyOS NEXT development skill with offline ArkTS/ArkUI references and DevEco automation; copy harmony-next/ into a dsh skill root | 0.1.0-rc.5 (2026-08-13) |
| engramory | 153 | [tinqiao-oss/engramory](https://github.com/tinqiao-oss/engramory) | A portable memory protocol for AI agents — load it as standing rules; a curation discipline + reference spec + optional cap hook. | 0.1.0-rc.6 (2026-08-15) |
| find-plugins | 90 | [Nagi-ovo/dsh-find-plugins](https://github.com/Nagi-ovo/dsh-find-plugins) | Skill that discovers and installs dsh plugins from the GitHub dsh-plugin topic, verifying install method from repo manifests; copy skills/find-plugins into a skill root | 0.1.0-rc.5 (2026-08-13) |
| argo | 78 | [taxueseek/argo](https://github.com/taxueseek/argo) | Agent-first multilingual search and evidence-verification skill routing 120+ engines with vertical sources and MCP entry points; SKILL.md at repo root | 0.1.0-rc.5 (2026-08-13) |
| mstar-harness | 46 | [btspoony/mstar-harness](https://github.com/btspoony/mstar-harness) | Morning Star skill-driven engineering workflow (roles, phase gates, plan conventions) shipped as twenty SKILL.md units; copy skills/* into a dsh skill root | 0.1.0-rc.5 (2026-08-13) |
| dsh-plugin-development | 8 | [w2112515/dsh-plugin-development](https://github.com/w2112515/dsh-plugin-development) | Portable Agent Skill for developing and auditing DeepSeek Harness plugins, with an optional DSH bundle adapter. | 0.1.0-rc.6 (2026-08-14) |
| hana-dsh-bridge | 4 | [KhalilYamber/hana-dsh-bridge](https://github.com/KhalilYamber/hana-dsh-bridge) | HanaAgent × DeepSeek Harness 协作桥：让你的 Hana 把 coding 工作派给 DSH，含 Agent 自部署手册与 DSH API 逆向笔记 | 0.1.0-rc.6 (2026-08-14) |
| reSanity | 4 | [Thhoho/reSanity](https://github.com/Thhoho/reSanity) | reSanity 散修：散户研究心法 skill + DeepSeek Harness 插件（skill provider、锚体检定时提醒、/resanity-check 命令） | 0.1.0-rc.6 (2026-08-15) |
| dsh-plugin-dev-skill | 3 | [green-dalii/dsh-plugin-dev-skill](https://github.com/green-dalii/dsh-plugin-dev-skill) | A skill pack that enables any agent to develop DeepSeek Harness (DSH) plugins correctly, efficiently, and in accordance with the official conventions. | 0.1.0-rc.6 (2026-08-14) |
| riffkit | 3 | [riffkit/skill](https://github.com/riffkit/skill/tree/HEAD/riffkit) | Short-video skill in the SKILL.md format dsh reads: rebuilds a winning TikTok's formula into your own product video; copy riffkit/ into a skill root such as ~/.agents/skills | 0.1.0-rc.6 (2026-08-15) |
| wanjiaqi-meme | 3 | [Chu-Xin-r/wanjiaqi-meme](https://github.com/Chu-Xin-r/wanjiaqi-meme) | Skill distilled from 22,771 live-stream danmaku memes for 玩机器-style commentary and CS×DOTA jokes. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-audit | 2 | [wefio/dsh-plugin-audit](https://github.com/wefio/dsh-plugin-audit) | Community DeepSeek Harness plugin. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-development-ray | 2 | [RayYeung1989/dsh-plugin-development](https://github.com/RayYeung1989/dsh-plugin-development) | 通用 dsh 插件开发 Skill：任何 agent 工具加载即会开发符合 DeepSeek Harness 的 dsh 插件 (Agent-tool-agnostic SKILL.md for developing DeepSeek Harness dsh plugins) | 0.1.0-rc.6 (2026-08-14) |
| dsh-wanghong-handwritten-ppt | 2 | [tjxj/dsh-wanghong-handwritten-ppt](https://github.com/tjxj/dsh-wanghong-handwritten-ppt) | Wang Hong-inspired Notability academic handwritten PPT skill for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| free-vision-skill | 2 | [niyongsheng/free-vision-skill](https://github.com/niyongsheng/free-vision-skill) | DSH-Plugin for DeepSeek-Harness: fully-local image understanding & OCR powered by macOS Vision Framework | 0.1.0-rc.6 (2026-08-15) |
| agent-loop-workflow | 1 | [LeslieWylie/agent-loop-workflow](https://github.com/LeslieWylie/agent-loop-workflow) | 通用多 agent 协作工作流骨架：Loop Guard、handoff 格式、风险三档分流、交付顺序、review→收口协议 | 0.1.0-rc.6 (2026-08-14) |
| review-workflow | 1 | [LeslieWylie/review-workflow](https://github.com/LeslieWylie/review-workflow) | 通用多评委评审工作流：N 评委独立打分 + Chair 校准 + Critic 复核，带 6 步 6 checkpoint 流程控制 | 0.1.0-rc.6 (2026-08-14) |
| fasthtml-desktop | 0 | [kuailexiaozixin/fasthtml-desktop](https://github.com/kuailexiaozixin/fasthtml-desktop) | FastHTML + pywebview 桌面应用全生命周期技能（本地 HTTP + WebView2 + PyInstaller） | 0.1.0-rc.6 (2026-08-15) |

### Themes

UI skins. The dedicated registry is [awesome-dsh-themes](https://github.com/dshworks/awesome-dsh-themes); only themes that also ship plugin machinery live here.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-deep-whale | 855 | [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale/tree/HEAD/maid-atelier) | Whale-girl skin series for the web UI; maid-atelier ships as a dsh.bundle package installed from a local clone (CC BY-NC-SA, non-commercial) | 0.1.0-rc.5 (2026-08-13) |
| dsh-homepage-skin | 0 | [yushi-xxh/dsh-homepage-skin](https://github.com/yushi-xxh/dsh-homepage-skin) | DeepSeek Harness homepage-style background skin: WebGL fluid, dot-line grid and a digital point-cloud whale, with dark and light palettes | 0.1.0-rc.6 (2026-08-15) |

### Tools

Developer tooling around dsh.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| create-dsh-plugin | 24 | [whyihaveyou/dsh-suite](https://github.com/whyihaveyou/dsh-suite/tree/HEAD/packages/create-dsh-plugin) · [npm](https://www.npmjs.com/package/create-dsh-plugin) | Scaffold a DeepSeek Harness plugin in seconds: tool, events, and webui templates with next-tag version pinning and a built-in --verify smoke test. | 0.1.0-rc.6 (2026-08-14) |
| dsh-forge | 4 | [zhn1100/dsh-forge](https://github.com/zhn1100/dsh-forge) · [npm](https://www.npmjs.com/package/dsh-forge) | Reproducible DeepSeek Harness plugin development profile with a cordis patch, CLI, and runtime-aware preset. | 0.1.0-rc.6 (2026-08-14) |
| oh-my-dsh-amplift | 3 | [amplifthq/oh-my-dsh](https://github.com/amplifthq/oh-my-dsh) | Plugins, sensible defaults, and a launcher for DeepSeek Harness (dsh) — everything you're missing, without forking upstream. | 0.1.0-rc.6 (2026-08-14) |

## Add your plugin

Open a PR against [`data/plugins.json`](data/plugins.json) only; the README is regenerated. See [CONTRIBUTING.md](CONTRIBUTING.md). The spam gate in short: a real install path (a `dsh.bundle` manifest, a published npm package, or a `SKILL.md` layout dsh discovers), not a renamed template fork, and it loads against the dsh version you claim. Pick one or two `tags` from the schema's list so your entry lands in the right area.

A scheduled workflow also sweeps every dsh discovery topic, npm, and GitHub code search; new finds queue in [`data/candidates.json`](data/candidates.json) on a single reused triage PR and never enter the registry without review. Rejected candidates are recorded with one-line reasons in [`data/rejected.json`](data/rejected.json). Rejections of judgment ("this is a curated list") are permanent; rejections of fact ("no install path on the day we looked") carry a `recheckAfter` date and are swept again once it passes, so shipping a manifest late is not a life sentence.

## Field notes

Verified dsh traps, skill discovery rules, and hook-bridge limits live in [howto-dsh](https://github.com/dshworks/howto-dsh).

## License

MIT. Not affiliated with DeepSeek; the harness README calls itself "an idea, an official showcase, and a source of inspiration", and the ecosystem belongs to the community.
