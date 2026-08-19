<!-- Rendered by scripts/render.mjs from data/plugins.json. Do not edit by hand: edit the data or the template, then run `npm run render`. -->

# awesome-dsh-plugins

[![powered by dsh](https://img.shields.io/badge/powered__by-dsh-4D6BFE?logo=deepseek)](https://github.com/deepseek-ai/deepseek-harness)
[![license: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![browse the reef](https://img.shields.io/badge/browse-the_reef-ff7a59)](https://dsh.works/awesome-dsh-plugins/)

A spam-filtered, open-data registry of [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`) plugins, bundles, and skills — 6,191 entries from 4,222 authors across 17 functional areas, every one carrying the file its install path was proven in and the dsh version it was checked against.

**[Browse the reef](https://dsh.works/awesome-dsh-plugins/)** — the same registry as a filterable, sortable gallery.

Most awesome lists are prose. This one is data: [`data/plugins.json`](data/plugins.json) is the source of truth, this README is rendered from it. Build on the JSON directly:

```sh
curl -s https://dsh.works/awesome-dsh-plugins/plugins.json                 # every entry
curl -s https://dsh.works/awesome-dsh-plugins/stats.json                   # just the counts, ~150 bytes
```

Each entry carries two orthogonal dimensions: `category` is the form factor (bundle, plugin, skill, theme, tool — what dsh docs call things) and `tags` is the functional area (what it actually does). `stars` is the linked repo's GitHub count (refreshed by `scripts/stars.mjs`, display signal only), and `featured` marks a hand-curated editor's pick.

## Why a filtered registry

DeepSeek delegates the ecosystem to the community: no first-party marketplace, discovery happens on the [`dsh-plugin`](https://github.com/topics/dsh-plugin) GitHub topic. On launch day that topic held 431 repositories. As of 2026-08-18 it holds 7,086, template spam and topic-riders included. A raw topic feed is not a registry; the filter is the value this repo adds.

How much filtering that is, measured on 2026-08-18: **7,146** repositories carry a dsh discovery topic and **7,057** of them — 99% — have been opened, read, and decided. 1,330 were rejected, **1,211** of those for having no install path at any depth: no `dsh` manifest in `package.json`, no dsh dependency, no `SKILL.md`. They carry the topic and nothing else. Every rejection is published with its reason and a recheck date in [`data/rejected.json`](data/rejected.json).

That is the number worth comparing. A topic count says how many people typed a tag. **7,057 of 7,146** says how many repositories somebody actually opened.

If you prefer a curated prose list, [AdamPlatin123/awesome-dsh-plugins](https://github.com/AdamPlatin123/awesome-dsh-plugins) does that well, with daily compatibility tracking. This repo is the machine-readable complement, not a replacement.

## Why "verified against" is a schema field

dsh is a developer preview and the team promises compatibility-breaking changes. Example: the `.dsh-plugin` manifest format was deleted on 2026-08-09 with no migration path, silently stranding every tutorial written against it. A compatibility claim without a version and a date rots, so the schema records both (`verifiedAgainst`, `lastVerified`) and stale entries get re-checked or flagged.

A version and a date still only say *when* somebody looked. `evidence` says *where*, as `path#key`:

```
"evidence": "package.json#dsh.bundle"
"evidence": "packages/theme/package.json#dependencies.@deepseek-ai/dsh-base"
"evidence": "skills/reviewer/SKILL.md#frontmatter"
```

Open the file and check. `scripts/validate.mjs` refuses a `verified` row that cannot cite one, so the status cannot quietly become decoration — which it had, on 2,751 rows, before this field existed.

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

- **[dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui)** — Plugin and skin collection for the dsh Web UI: task board, git graph, right-side panel, remote mobile UI, live token stats, and a skin center that routes around the theme-persistence gap <sub>4819 ★ · ui</sub>
- **[modlens](https://github.com/liustack/modlens)** — Vision plugin for text-only models: image understanding bridged into the harness via a dsh.bundle patch layer, shipping a modlens skill alongside <sub>3240 ★ · vision</sub>
- **[dsh-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar)** — Full sidebar workbench with file rendering/editing, terminal, Git, and subagents; third-party extensions can register new tabs <sub>2297 ★ · ui</sub>
- **[dsh-browser](https://github.com/Lum1104/dsh-browser)** — Chrome sidebar plugin that lets dsh operate the browser directly, without vision. <sub>319 ★ · capabilities</sub>
- **[whale-girl](https://github.com/vlln/whale-girl)** — Desktop-pet companion for the web GUI (QQ-pet style): draggable, feedable, levels up with session activity; migrated from the removed .dsh-plugin format to dsh.bundle <sub>246 ★ · fun</sub>
- **[dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon)** — Local-first three-tier memory for dsh: runtime memory, searchable documents, and supervised memory spaces. <sub>122 ★ · memory</sub>
- **[dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind)** — Rewind conversation and workspace state to a previous turn, backed by a persistent change ledger <sub>87 ★ · memory</sub>
- **[dsh-usage-stats](https://github.com/lanlandeli/dsh-usage-stats)** — Beautiful token analytics for DeepSeek Harness — trends, activity heatmaps, model breakdowns, and data exports. <sub>10 ★ · usage</sub>

## Plugins by area

6080 Cordis plugins activated through patch rows in a bundle or profile, grouped by what they do. Data updated 2026-08-19.

Each area shows its 25 most-starred entries and links to the complete list in [`lists/`](lists). GitHub stops rendering a markdown file partway through once it passes about half a megabyte — silently, mid-row — so the full tables live in files small enough to survive that. Nothing is dropped: [`data/plugins.json`](data/plugins.json) and the [gallery](https://dsh.works/awesome-dsh-plugins/) always hold everything.

### Web UI

Panels, composer upgrades, navigation, layout, mobile.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-web-ui ⭐ | 4819 | [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) | Plugin and skin collection for the dsh Web UI: task board, git graph, right-side panel, remote mobile UI, live token stats, and a skin center that routes around the theme-persistence gap | 0.1.0-rc.6 (2026-08-17) |
| dsh-better-sidebar ⭐ | 2297 | [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) · [npm](https://www.npmjs.com/package/dsh-better-sidebar) | Full sidebar workbench with file rendering/editing, terminal, Git, and subagents; third-party extensions can register new tabs | 0.1.0-rc.6 (2026-08-17) |
| mnemon | 486 | [mnemon-dev/mnemon](https://github.com/mnemon-dev/mnemon) · [npm](https://www.npmjs.com/package/@mnemon-dev/dsh-mnemon) | Install the full dsh-mnemon integration from the Mnemon repository. | 0.1.0-rc.6 (2026-08-17) |
| superdesign-skill | 436 | [superdesigndev/superdesign-skill](https://github.com/superdesigndev/superdesign-skill) | Design or redesign frontend UI and marketing graphics on the Superdesign infinite canvas — the Superdesign skill, packaged as a DeepSeek Harness bundle. | 0.1.0-rc.6 (2026-08-17) |
| dsh-at-file | 410 | [omdsh-dev/dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) | Codex-style @file mentions in the composer: search workspace files and attach their contents to prompts | 0.1.0-rc.6 (2026-08-17) |
| dsh-genui | 242 | [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) | Renders interactive UI components inline in assistant replies via the dsh-ui fence: layout, charts, plots, forms, quizzes, mermaid, 3D scenes, and an action event loop back to the model. | 0.1.0-rc.6 (2026-08-17) |
| dsh-visualize | 184 | [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) | Generative UI in conversation: a visualize tool plus companion skill renders interactive HTML cards in sandboxed frames with streaming preview | 0.1.0-rc.6 (2026-08-17) |
| dsh-openpencil | 121 | [ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) · [npm](https://www.npmjs.com/package/@zseven-w/dsh-openpencil) | OpenPencil design preview and editing inside the web UI | 0.1.0-rc.6 (2026-08-17) |
| dsh-annotation | 78 | [omdsh-dev/dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) | DSH Web selection-annotation plugin: select assistant text, annotate (optional), and press Enter to send the annotation block with your message — the model replies to each annotation by number,. | 0.1.0-rc.6 (2026-08-17) |
| ProMentor | 64 | [Lyn-77/ProMentor](https://github.com/Lyn-77/ProMentor/tree/HEAD/dsh-plugin/src/client-ui-promentor) | ProMentor course dashboard in the Web GUI: composer-dock trigger plus a full-frame dashboard panel | 0.1.0-rc.6 (2026-08-17) |
| dsh-open-in-vscode | 52 | [omdsh-dev/dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) | Open workspace directories in VS Code directly from the web GUI | 0.1.0-rc.6 (2026-08-17) |
| dsh-ui-status-label | 38 | [alingalingling/ui-status-label](https://github.com/alingalingling/ui-status-label) | Web UI plugin that makes the assistant's thinking status label ('deep diving') user-configurable through settings | 0.1.0-rc.6 (2026-08-17) |
| recruiting-copilot | 38 | [Viy1204/recruiting-copilot](https://github.com/Viy1204/recruiting-copilot) | AI 招聘副驾 —— DeepSeek Harness profile bundle：注册招聘工作流 skills（岗位梳理、双通道寻源初筛、约面试、简历评估、台账与日报），并在 Web UI 右侧提供一只可直接操作的 boss/liepin 浏览器面板。 | 0.1.0-rc.6 (2026-08-18) |
| dsh-smooth-stream-laplaceb | 37 | [Laplace-bit/dsh-smooth-stream](https://github.com/Laplace-bit/dsh-smooth-stream) | Smooth streaming reveal and conversation follow for the DeepSeek Harness Web UI | 0.1.0-rc.6 (2026-08-17) |
| dsh-web-mobile | 33 | [mexiaosqwq/dsh-web-mobile](https://github.com/mexiaosqwq/dsh-web-mobile) | Mobile-adaptive DSH web UI: on narrow screens the sidebar rail is hidden and the directory opens as an overlay drawer, so the conversation gets the full width. | 0.1.0-rc.6 (2026-08-17) |
| dsh-ui-web | 31 | [CAPTAIN1275/dsh-ui-web](https://github.com/CAPTAIN1275/dsh-ui-web/tree/HEAD/packages/dsh-aionui-panel) | DSH web GUI right-panel system: a pixel-faithful re-implementation of AionUi's Explorer + Preview columns (file tree, filename search, git changes, multi-tab preview of 10+ formats) driven by real | 0.1.0-rc.6 (2026-08-17) |
| dsh-auto-continue | 30 | [HsiangNianian/dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) | Automatically sends continue when a Web UI request is interrupted by network errors or other non-human causes. | 0.1.0-rc.6 (2026-08-17) |
| dsh-share | 28 | [hellodigua/dsh-share](https://github.com/hellodigua/dsh-share) | Share a DSH conversation turn as a PNG image. | 0.1.0-rc.6 (2026-08-17) |
| dsh-prompt-enhancer | 25 | [Fishsb/dsh-prompt-enhancer](https://github.com/Fishsb/dsh-prompt-enhancer) | One-click prompt enhancement: fuzzy draft to an independent LLM call, then polished composer text with undo. | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-session-delete | 24 | [lsz-asd/dsh-plugin-session-delete](https://github.com/lsz-asd/dsh-plugin-session-delete) | Delete sessions of a DeepSeek Harness profile from the UI: header danger button + session-row menu item with a risk-consent dialog; host endpoint + tool delete the log, projection cache and. | 0.1.0-rc.6 (2026-08-17) |
| dsh-sidebar-qa | 23 | [ChenRuoT/dsh-sidebar-qa](https://github.com/ChenRuoT/dsh-sidebar-qa) · [npm](https://www.npmjs.com/package/dsh-sidebar-qa) | DSH web plugin: select conversation text -> ask in a right-side panel -> a dedicated follow-up session (❓追问) in the same workspace, without interrupting the main conversation. Thin consumer of dsh-... | 0.1.0-rc.6 (2026-08-17) |
| dsh-IDE | 22 | [chenw2759-wq/dsh-IDE](https://github.com/chenw2759-wq/dsh-IDE/tree/HEAD/packages/dsh-aionui-panel) | DSH web GUI right-panel system: a pixel-faithful re-implementation of AionUi's Explorer + Preview columns (file tree, filename search, git changes, multi-tab preview of 10+ formats) driven by real | 0.1.0-rc.6 (2026-08-17) |
| dsh-web-lan-access | 22 | [AcidGr/dsh-web-lan-access](https://github.com/AcidGr/dsh-web-lan-access) · [npm](https://www.npmjs.com/package/dsh-web-lan-access) | LAN and remote access for the DeepSeek Harness Web UI, including polyfills so the GUI works off localhost. | 0.1.0-rc.6 (2026-08-17) |
| dsh-stickers | 21 | [william-jin-cmu/dsh-stickers](https://github.com/william-jin-cmu/dsh-stickers) | 人类 cannot live without 表情包：让 DSH 和用户在 WebUI 里发表情 | 0.1.0-rc.6 (2026-08-17) |
| dsh-diff-viewer | 20 | [lehhair/dsh-diff-viewer](https://github.com/lehhair/dsh-diff-viewer) | DSH diff-viewer plugin: PiUI-style visual diff surface (split/unified, change bars, line numbers, word-level marks, collapsed context, windowed rendering) replacing the stock DiffBlock for. | 0.1.0-rc.6 (2026-08-17) |

<sub>Showing the 25 most-starred of 605. **[all 605 →](lists/web-ui.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Terminals & desktop

TUIs, desktop shells, headless runners.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| deepseek-harness-desktop | 14804 | [anywhere-labs/deepseek-harness-desktop](https://github.com/anywhere-labs/deepseek-harness-desktop) | 为 DeepSeek Harness (DSH) 生态打造的现代化桌面端体验 | 0.1.0-rc.6 (2026-08-17) |
| dsh-desktop | 1046 | [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | A cross-platform desktop shell for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-17) |
| working-activity | 653 | [ccch1mneyyy/working-activity](https://github.com/ccch1mneyyy/working-activity/tree/HEAD/packages/activity/working-activity) | Live model working-status line: playful copy, running tool, turn elapsed — for TUI prompt and Web UI | 0.1.0-rc.6 (2026-08-17) |
| deepseek-harness-desktop-hairyf | 593 | [hairyf/deepseek-harness-desktop](https://github.com/hairyf/deepseek-harness-desktop) | Desktop application for DeepSeek Harness (dsh) — one-click local install and launch, no Node.js setup required. | 0.1.0-rc.6 (2026-08-17) |
| deepseek-harness-studio-fufankej | 330 | [fufankeji/deepseek-harness-studio](https://github.com/fufankeji/deepseek-harness-studio) | DeepSeek Harness 零代码桌面端｜一键启动，支持 Windows 与 macOS；内置插件发现、热点插件推送、一键安装与管理、AI 智能推荐和视觉增强。 | 0.1.0-rc.6 (2026-08-17) |
| dsh-tianshu-tui | 220 | [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) · [npm](https://www.npmjs.com/package/@huiliyi37/dsh-tianshu-tui) | Terminal UI for dsh shipped as an installable profile bundle | 0.1.0-rc.6 (2026-08-17) |
| pilot-harness | 217 | [op7418/pilot-harness](https://github.com/op7418/pilot-harness) | Pilot Harness — a CodePilot-inspired desktop client and plugin suite for DeepSeek Harness on macOS, Windows, and Linux. | 0.1.0-rc.6 (2026-08-18) |
| deepseek-harness-desktop-ningbain | 148 | [ningbainb/deepseek-harness-desktop](https://github.com/ningbainb/deepseek-harness-desktop/tree/HEAD/apps/dsh-desktop) | Lossless desktop shell for DeepSeek Harness and the complete dsh-web-ui plugin collection | 0.1.0-rc.6 (2026-08-17) |
| Tydora | 51 | [zuorn/Tydora](https://github.com/zuorn/Tydora) | Let Your Ideas Flow — Tydora is a modern desktop Markdown editor combining WYSIWYG editing, bidirectional links, mind maps, and an infinite canvas — empowering deep thinking and effortless expression. | 0.1.0-rc.6 (2026-08-17) |
| deepseek-harness-tui-openmaai | 43 | [openma-ai/Martty](https://github.com/openma-ai/Martty/tree/HEAD/npm) | Terminal-native agent UI for DeepSeek Harness; standalone CLI or dsh profile bundle | 0.1.0-rc.6 (2026-08-17) |
| deepseek-app | 37 | [RongleCat/deepseek-app](https://github.com/RongleCat/deepseek-app) | Desktop workbench for DeepSeek Harness — Grok App visual shell, DSH engine | 0.1.0-rc.6 (2026-08-17) |
| seektty | 34 | [Hilbert-beinghappy/seektty](https://github.com/Hilbert-beinghappy/seektty) · [npm](https://www.npmjs.com/package/seektty) | SeekTTY, a pluggable DeepSeek-colored terminal surface for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |
| dsh-desktop-hub | 33 | [FlashingChen/dsh-desktop-hub](https://github.com/FlashingChen/dsh-desktop-hub/tree/HEAD/resources/rt) | DSH Desktop Hub — DeepSeek Harness 桌面管理控制台（多 Tab：Harness / Plugin / MCP / Skills） | 0.1.0-rc.6 (2026-08-17) |
| dshcode | 30 | [whitelonng/dshcode](https://github.com/whitelonng/dshcode) | Community desktop companion for DeepSeek Harness — one-click Electron app for macOS and Windows | 0.1.0-rc.6 (2026-08-17) |
| deepseek-harness-docker-runzhliu | 23 | [runzhliu/deepseek-harness-docker](https://github.com/runzhliu/deepseek-harness-docker/tree/HEAD/plugins/dsh-browser-desktop) | Movable, resizable Chromium desktop embedded in the DeepSeek Harness Web UI through noVNC. | 0.1.0-rc.6 (2026-08-17) |
| deepseek-harness-desktop-chokwinl | 22 | [chokwinlee/deepseek-harness-desktop](https://github.com/chokwinlee/deepseek-harness-desktop) | Compact unofficial desktop host for DeepSeek Harness, powered by Tauri on macOS | 0.1.0-rc.6 (2026-08-17) |
| dsh-tui-dshtui | 21 | [dsh-tui/dsh-tui](https://github.com/dsh-tui/dsh-tui) | Claude Code-style interactive terminal UI for DeepSeek Harness agents | 0.1.0-rc.6 (2026-08-17) |
| DSHDesktop | 21 | [CCMu04/DSHDesktop](https://github.com/CCMu04/DSHDesktop) | Unofficial Windows desktop shell for the unmodified DeepSeek Harness Web UI | 0.1.0-rc.6 (2026-08-17) |
| deepseek-harness-desktop-cc1252 | 19 | [cc1252/deepseek-harness-desktop](https://github.com/cc1252/deepseek-harness-desktop/tree/HEAD/harness) | Unpruned runtime payload for the Electron wrapper | 0.1.0-rc.6 (2026-08-17) |
| dsh-desktop-liguobao | 18 | [liguobao/dsh-desktop](https://github.com/liguobao/dsh-desktop) | Community desktop wrapper for the DeepSeek Harness Web UI | 0.1.0-rc.6 (2026-08-17) |
| DeepSeek-Harness-Token-Free | 17 | [hyqibot/DeepSeek-Harness-Token-Free](https://github.com/hyqibot/DeepSeek-Harness-Token-Free/tree/HEAD/dsh-plugin-desktop) | DSH Desktop: an Electron shell composed as a DeepSeek Harness Cordis plugin | 0.1.0-rc.6 (2026-08-17) |
| deepseek-harness-desktop-wjzp | 14 | [WJZ-P/deepseek-harness-desktop](https://github.com/WJZ-P/deepseek-harness-desktop/tree/HEAD/harness/apps/cli) | dsh CLI: profile boot, plugin management, and the browser UI alias | 0.1.0-rc.6 (2026-08-17) |
| deepseek-harness-desktop-chyramoo | 11 | [chyra-moon/deepseek-harness-desktop](https://github.com/chyra-moon/deepseek-harness-desktop) | DeepSeek Harness desktop app: the official dsh web UI in a native Electron shell, with embedded server management, tray and notifications. | 0.1.0-rc.6 (2026-08-17) |
| dsh-mini-tui | 10 | [boxeryao/dsh-mini-tui](https://github.com/boxeryao/dsh-mini-tui) | DSH Mini TUI: a minimalist terminal interface plugin for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |
| deepseek-harness-desktop-bailang1 | 8 | [bailang1218/deepseek-harness-desktop](https://github.com/bailang1218/deepseek-harness-desktop) | Community-maintained self-contained Tauri desktop distribution for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |

<sub>Showing the 25 most-starred of 234. **[all 234 →](lists/terminals-desktop.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Tools & capabilities

New things the model can do: search, browser, files, databases, devices, media.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| mirage | 3530 | [strukto-ai/mirage](https://github.com/strukto-ai/mirage/tree/HEAD/typescript/packages/dsh) | DeepSeek Harness (dsh) providers backed by a mirage workspace: ctx.fs and ctx.shell over mounted resources | 0.1.0-rc.6 (2026-08-17) |
| openpets | 1086 | [alvinunreal/openpets](https://github.com/alvinunreal/openpets/tree/HEAD/packages/dsh) | OpenPets 2.0 workspace | 0.1.0-rc.6 (2026-08-18) |
| MisakaNet | 409 | [Ikalus1988/MisakaNet](https://github.com/Ikalus1988/MisakaNet) | Deployment scripts for MisakaNet Workers | 0.1.0-rc.6 (2026-08-17) |
| dsh-browser ⭐ | 319 | [Lum1104/dsh-browser](https://github.com/Lum1104/dsh-browser) | Chrome sidebar plugin that lets dsh operate the browser directly, without vision. | 0.1.0-rc.6 (2026-08-17) |
| dsh-pocket | 209 | [shaobeichen/dsh-pocket](https://github.com/shaobeichen/dsh-pocket) | 把 DeepSeek Harness 装进你的口袋：一个包、一个设置页，手机扫码即同步访问电脑上的 DSH（局域网 + 公网，实时同屏）。 | 0.1.0-rc.6 (2026-08-17) |
| modsearch | 168 | [liustack/modsearch](https://github.com/liustack/modsearch) · [npm](https://www.npmjs.com/package/@liustack/modsearch) | Web plugin for dsh that gives a text-only model the web: search, X, and any page as structured evidence. | 0.1.0-rc.6 (2026-08-17) |
| anime-find | 152 | [cocofhu/anime-find](https://github.com/cocofhu/anime-find) | DeepSeek Harness 插件：对话内多源搜番，卡片详情、磁力复制与规则流媒体在线播放 | 0.1.0-rc.6 (2026-08-17) |
| deepseek-design | 148 | [Devin-AXIS/deepseek-design](https://github.com/Devin-AXIS/deepseek-design/tree/HEAD/packages/deepseek-idesign) | iPolloWork Design Studio and its curated design templates as a native DeepSeek Harness conversation view. | 0.1.0-rc.6 (2026-08-17) |
| notes | 148 | [zhaoolee/notes](https://github.com/zhaoolee/notes/tree/HEAD/dsh-plugin) | DeepSeek Harness 插件：把用户对话导出为锤子便签（通过便签服务 API 写入云端工作区）。 | 0.1.0-rc.6 (2026-08-17) |
| dsh-gitbash-preset | 132 | [liceses/dsh-gitbash-preset](https://github.com/liceses/dsh-gitbash-preset) | DeepSeek Harness plugin: installs the 'minimal-gitbash' agent preset — the Windows variant of the shipped minimal preset that routes the bash tool through Git for Windows bash (MSYS), with automatic | 0.1.0-rc.6 (2026-08-17) |
| anysearch-dsh | 128 | [anysearch-team/anysearch-dsh](https://github.com/anysearch-team/anysearch-dsh) | AnySearch web search provider and advanced tools for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |
| humanizer-ru | 105 | [Vladimir-Human/humanizer-ru](https://github.com/Vladimir-Human/humanizer-ru/tree/HEAD/dsh) | Скилл для ИИ-агентов: находит и убирает следы машинной генерации из русского текста. 38 паттернов, 39 regex-маркеров с реестром доказательств, слепые парные прогоны, файловый слой снятия C2PA/EXIF/XMP | 0.1.0-rc.6 (2026-08-17) |
| dsh-pentest | 90 | [howmp/dsh-pentest](https://github.com/howmp/dsh-pentest) | DSH 渗透测试模式：以探索链路记录目标、线索、资产与漏洞，并在 Web 中可视化展示。 | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin | 90 | [Tabbit-Browser/dsh-plugin](https://github.com/Tabbit-Browser/dsh-plugin) · [npm](https://www.npmjs.com/package/tabbit-browser) | DSH bundle that packages the Tabbit Browser skill and background installer | 0.1.0-rc.6 (2026-08-17) |
| Liang-Saint-Slider | 88 | [BruzWJ/Liang-Saint-Slider](https://github.com/BruzWJ/Liang-Saint-Slider) | 滑动变祖器 — the liang-intensity-calibrator as the DeepSeek Harness model + thinking-effort slider. Clicking the composer's model seat opens the 31-level calibrator directly; the six stages map 1:1 onto | 0.1.0-rc.6 (2026-08-17) |
| sealos-skills | 72 | [labring/sealos-skills](https://github.com/labring/sealos-skills) | DeepSeek Harness bundle that registers the Sealos skill pack on ctx.skills. | 0.1.0-rc.6 (2026-08-17) |
| forkprobe | 68 | [Jayden-X-L/forkprobe](https://github.com/Jayden-X-L/forkprobe) | Native DeepSeek Harness plugin for comparing AI Skills on the same task and choosing a winner from a local ForkProbe report. | 0.1.0-rc.6 (2026-08-17) |
| dsh-data-agent | 62 | [omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) | Session-scoped MySQL/PostgreSQL/SQLite connections, an sqlcmd tool, a data-agent preset, and a database tab. | 0.1.0-rc.6 (2026-08-17) |
| dsh-toy | 57 | [c3ll256/dsh-toy](https://github.com/c3ll256/dsh-toy) | Connects toys/devices to DSH: asks brand/model then picks Intiface (Bluetooth, serial, USB; auto-starts Engine) or MonsterParty for known share-link models; unknown starts generic Bluetooth search. | 0.1.0-rc.6 (2026-08-17) |
| local-shell-mcp | 51 | [fwerkor/local-shell-mcp](https://github.com/fwerkor/local-shell-mcp) | DeepSeek Harness bridge for the full local-shell-mcp tool surface and per-session Live Workspace. | 0.1.0-rc.6 (2026-08-17) |
| DSH-taskboard-shengshe | 49 | [shengsheng90/DSH-taskboard](https://github.com/shengsheng90/DSH-taskboard) | Native local project taskboard bundle for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |
| deepseek-harness-genui | 47 | [pengyue-polaron/deepseek-harness-genui](https://github.com/pengyue-polaron/deepseek-harness-genui) | Code-first generative UI artifacts for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |
| dsh-navbar | 44 | [vlln/dsh-navbar](https://github.com/vlln/dsh-navbar) | 对话节点导航条——user 消息快速跳转（自渲染 DOM，官方 client 通道） | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-mineru | 37 | [HuanLinOTO/dsh-plugin-mineru](https://github.com/HuanLinOTO/dsh-plugin-mineru) | DSH plugin exposing MinerU document parsing tools to the model, with a web UI settings page for the API base URL. | 0.1.0-rc.6 (2026-08-17) |
| allinluna | 34 | [zenx0x/allinluna](https://github.com/zenx0x/allinluna/tree/HEAD/plugins/deepseek-harness) | DeepSeek Harness Cordis tools for All in Flash, powered by All in Luna | 0.1.0-rc.6 (2026-08-17) |

<sub>Showing the 25 most-starred of 1280. **[all 1280 →](lists/tools-capabilities.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Vision

Image understanding for text-only models.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| archify | 14401 | [tt-a1i/archify](https://github.com/tt-a1i/archify/tree/HEAD/integrations/deepseek-harness) | Opt-in DeepSeek Harness Skill-only bundle for the Archify architecture-diagram skill. | 0.1.0-rc.6 (2026-08-17) |
| modlens ⭐ | 3240 | [liustack/modlens](https://github.com/liustack/modlens) · [npm](https://www.npmjs.com/package/@liustack/modlens) | Vision plugin for text-only models: image understanding bridged into the harness via a dsh.bundle patch layer, shipping a modlens skill alongside | 0.1.0-rc.6 (2026-08-17) |
| dsh-vision-router | 821 | [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) | Turn-level vision routing with provider fallbacks, a cached vision_describe tool, JSON output, and optional per-host proxy. | 0.1.0-rc.6 (2026-08-17) |
| dsh-vision-toolkit | 744 | [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | Harness-native integration of agent-vision-toolkit for text-only models: image Q&A with intent, long-screenshot OCR, UI restoration, grounding, and pixel diff | 0.1.0-rc.6 (2026-08-17) |
| dsh-vision-oil | 69 | [oil-oil/dsh-vision](https://github.com/oil-oil/dsh-vision) · [npm](https://www.npmjs.com/package/@oil-oil/dsh-vision) | Near-native image understanding for text-only DeepSeek Harness models. | 0.1.0-rc.6 (2026-08-17) |
| picturereader | 25 | [jing-hy/picturereader](https://github.com/jing-hy/picturereader) | DSH plugin: pixel-to-text image reading for text-only models. Downscales and color-quantizes PNG/JPEG/GIF/BMP and feeds the coarse pixel grid to the model so DeepSeek can 'see' layout, colors and | 0.1.0-rc.6 (2026-08-17) |
| dsh-ocr-plugin | 13 | [CraZY222123/dsh-ocr-plugin](https://github.com/CraZY222123/dsh-ocr-plugin) | Local OCR provider (rapidocr fast + DeepSeek-OCR-2 deep) registered as the 'ocr' service for the llm-deepseek adapter seam. Unofficial community plugin for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-17) |
| dsh-vision-linenxi | 12 | [linenxi-ctrl/dsh-vision](https://github.com/linenxi-ctrl/dsh-vision) · [npm](https://www.npmjs.com/package/@linenxi-ctrl/dsh-vision) | External vision model for DeepSeek Harness: config panel, send-image recognition, and screenshot tools. | 0.1.0-rc.6 (2026-08-17) |
| deepseek-visionary | 11 | [xlight/deepseek-visionary](https://github.com/xlight/deepseek-visionary/tree/HEAD/packages/dsh-plugin) | DeepSeek Visionary native plugin for DeepSeek Harness: deepseek_vision / status / login / logout native tools backed by the visionary-server CLI (DeepSeek web vision model, no API key). | 0.1.0-rc.6 (2026-08-17) |
| dsh-codex-oauth-wnjxyk | 11 | [WNJXYK/dsh-codex-oauth](https://github.com/WNJXYK/dsh-codex-oauth) | Unified OpenAI Codex subscription plugin for DeepSeek Harness: GPT models, OAuth, quota, image generation, and web search. | 0.1.0-rc.6 (2026-08-17) |
| dsh-media-skills-mjorgin | 11 | [MJorgin/dsh-media-skills](https://github.com/MJorgin/dsh-media-skills) | Free image reading (vision) and image generation skills for DeepSeek Harness — Zhipu GLM-4V-Flash (Google Gemini optional) for reading, SiliconFlow Kolors for generation. | 0.1.0-rc.6 (2026-08-18) |
| dsh-vision-proxy | 11 | [Flyvhidbwo/dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) | deepseek-vision provider route that transcribes attached images via an OpenAI-compatible VLM before DeepSeek answers. | 0.1.0-rc.6 (2026-08-17) |
| deepseek-harness-docker | 10 | [AlliotTech/deepseek-harness-docker](https://github.com/AlliotTech/deepseek-harness-docker) | Reproducible container image for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |
| dsh-vision-opencode | 10 | [poiuyjie/dsh-vision-opencode](https://github.com/poiuyjie/dsh-vision-opencode) | DeepSeek Harness plugin: configurable vision model with vision_read_image tool, composer-bar vision-model selector, and automatic image-to-text conversion for text-only main models. | 0.1.0-rc.6 (2026-08-17) |
| dsh-web-file-uploader | 10 | [Mooling0602/dsh-web-file-uploader](https://github.com/Mooling0602/dsh-web-file-uploader) | A DeepSeek-style paperclip attach button in the DSH web composer; uploads files to the DSH host (model-aware: native image blocks for multimodal models, file paths for text-only models). | 0.1.0-rc.6 (2026-08-17) |
| dsh-visual-plugin | 9 | [jyh20030112/dsh-visual-plugin](https://github.com/jyh20030112/dsh-visual-plugin) | Vision bridge plugin for DeepSeek Harness: when the main model has no vision, forward user images to a configurable OpenAI-compatible vision model and show results in a Web UI right panel. Host. | 0.1.0-rc.6 (2026-08-17) |
| image-vision | 8 | [wangyang10/image-vision](https://github.com/wangyang10/image-vision/tree/HEAD/dsh-image-vision) | DeepSeek Harness plugin: gives text-only models (e.g. DeepSeek) image-reading ability via any OpenAI-compatible vision API. Registers the vision_query tool, DSH credentials integration, and the | 0.1.0-rc.6 (2026-08-17) |
| dsh-chat-imagine | 7 | [corrinehu/dsh-chat-imagine](https://github.com/corrinehu/dsh-chat-imagine) | Generate images via API (image models filtered from those already set up in DSH) or local CLIs (MiniMax mmx), probe available backends, and display images inline in the chat. | 0.1.0-rc.6 (2026-08-17) |
| dsh-imagegen | 7 | [dickpy/dsh-imagegen](https://github.com/dickpy/dsh-imagegen) | AI 生图 (image generation) plugin for the dsh web GUI: text-to-image and image-to-image through a configurable OpenAI-compatible endpoint (gpt-image-2 / gpt-image-1 / dall-e-3), with a settings card | 0.1.0-rc.6 (2026-08-17) |
| deepseek-harness-desktop-kevph202 | 6 | [KevPH2026/deepseek-harness-desktop](https://github.com/KevPH2026/deepseek-harness-desktop) | A native macOS desktop experience for DeepSeek Harness — multimodal generation, community plugin discovery, safe updates, and bilingual docs. | 0.1.0-rc.6 (2026-08-17) |
| dsh-deepseek-vision-siegfly | 6 | [siegfly/dsh-deepseek-vision](https://github.com/siegfly/dsh-deepseek-vision) | Out-of-tree dsh provider plugin: a DeepSeek gateway route that claims image input and transparently describes pasted images through a configured vision-language model (e.g. Qwen-VL) before the | 0.1.0-rc.6 (2026-08-17) |
| dsh-file-upload-a9030672 | 6 | [a903067276-rgb/dsh-file-upload](https://github.com/a903067276-rgb/dsh-file-upload) | Upload button + drag-and-drop files into DSH conversation as local paths (works with any vision plugin) | 0.1.0-rc.6 (2026-08-17) |
| dsh-minimal-vision | 6 | [Flora233333/dsh-minimal-vision](https://github.com/Flora233333/dsh-minimal-vision) | Lightweight vision assist preset and CLI for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-17) |
| dsh-mmx-bridge | 6 | [welsione/dsh-mmx-bridge](https://github.com/welsione/dsh-mmx-bridge) · [npm](https://www.npmjs.com/package/dsh-mmx-multimodal) | MiniMax multimodal bridge for DeepSeek Harness (DSH). One mmx_bridge tool covers describe/image/video/speech/music/cover/search/quota; optional web_search/read_image takeover; built-in client | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-describe-image | 6 | [whitelonng/dsh-plugin-describe-image](https://github.com/whitelonng/dsh-plugin-describe-image/tree/HEAD/packages/vision/tool-describe-image) | Model-facing describe_image tool: asks a vision-language model at an OpenAI-compatible endpoint to describe an image file or URL | 0.1.0-rc.6 (2026-08-17) |

<sub>Showing the 25 most-starred of 270. **[all 270 →](lists/vision.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Agents & orchestration

Subagents, workflows, cross-session coordination.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| BitFun | 1797 | [GCWing/BitFun](https://github.com/GCWing/BitFun/tree/HEAD/packages/dsh-acp) | IDE-oriented Agent Client Protocol server for DeepSeek Harness: publishes tool calls, reasoning, and plans that the automation-only @deepseek-ai/dsh-acp deliberately withholds | 0.1.0-rc.6 (2026-08-17) |
| dsh-agent-teams | 599 | [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | AgentTeams plugin: coordinate teams of subagents from the web UI | 0.1.0-rc.6 (2026-08-17) |
| Polaris | 183 | [ZJU-REAL/Polaris](https://github.com/ZJU-REAL/Polaris/tree/HEAD/integrations/deepseek-harness) | DeepSeek Harness bundle for Polaris MCP tools and native agent skills | 0.1.0-rc.6 (2026-08-17) |
| dsh-agent-rp | 158 | [hewzhew/dsh-agent-rp](https://github.com/hewzhew/dsh-agent-rp) · [npm](https://www.npmjs.com/package/@dsh-external/dsh-agent-rp) | SillyTavern migration and next-generation Agent RP for DSH | 0.1.0-rc.6 (2026-08-17) |
| dsh-agent-team-gui | 106 | [toolclub/dsh-agent-team-gui](https://github.com/toolclub/dsh-agent-team-gui) | Persistent multi-model squads for DeepSeek Harness — manage teams in Settings and use them in ordinary conversations | 0.1.0-rc.6 (2026-08-17) |
| odai | 92 | [orziz/odai](https://github.com/orziz/odai/tree/HEAD/dsh/agent) | 完整继承 DSH Standard 全部能力的 Odai Agent preset。 | 0.1.0-rc.6 (2026-08-17) |
| dsh_workflow | 88 | [omdsh-dev/dsh_workflow](https://github.com/omdsh-dev/dsh_workflow) | KodaX-parity dynamic workflow harness for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |
| dsh-automation | 65 | [titanwings/dsh-automation](https://github.com/titanwings/dsh-automation) | Run coding tasks on schedule in fresh Agent sessions, and manage automations from DeepSeek Harness Web or an Agent | 0.1.0-rc.6 (2026-08-17) |
| dsh-openbiliclaw | 46 | [whiteguo233/dsh-openbiliclaw](https://github.com/whiteguo233/dsh-openbiliclaw) · [npm](https://www.npmjs.com/package/@openbiliclaw/dsh-plugin) | OpenBiliClaw DeepSeek Harness plugin: the user-consumption side (recommendations, delight, saved, Socratic chat, profile, probes, activity) as a web-GUI sidebar, plus agent-bridge tools and the. | 0.1.0-rc.6 (2026-08-17) |
| dsh-deepseek-flow | 42 | [kanghelyu/dsh-deepseek-flow](https://github.com/kanghelyu/dsh-deepseek-flow) | DeepSeek Flow — Markdown-first visual workflow plugin for DeepSeek Harness with executable Boolean gate semantics, two-way canvas sync, and AI review/optimization. | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-guard | 27 | [lxzy-7/dsh-plugin-guard](https://github.com/lxzy-7/dsh-plugin-guard) | Install safety net for DeepSeek Harness: pre-install snapshots, one-click/automatic rollback, guarded boot, and incident reports that auto-trigger agent analysis. DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |
| DSH-pipeline-kernel | 20 | [not-big-dog/DSH-pipeline-kernel](https://github.com/not-big-dog/DSH-pipeline-kernel) | 管线管理内核（pipeline-kernel）：单向任务链的任务板/台账/注册表/巡检/生图（轻量版）。v0.7：审查修复（S-1 路径穿越/C-1 路由兜底/D 组多管线一致性等）。 | 0.1.0-rc.6 (2026-08-17) |
| dsh-solo-thinking | 17 | [fredalxin/dsh-solo-thinking](https://github.com/fredalxin/dsh-solo-thinking) · [npm](https://www.npmjs.com/package/dsh-plugin-solo-thinking) | Solo-style isolated brainstorm branches and Handoffs for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |
| oh-my-dsh-agifans | 17 | [agi-fans/oh-my-dsh](https://github.com/agi-fans/oh-my-dsh) | omdsh: a TUI coding agent on the DeepSeek Harness core runtime | 0.1.0-rc.6 (2026-08-17) |
| deepseek-harness-fnos | 16 | [techysy/deepseek-harness-fnos](https://github.com/techysy/deepseek-harness-fnos/tree/HEAD/app/server) | DeepSeek Harness (DeepSeek 官方 agent 浏览器 UI) fnOS 应用 — 本地常驻服务 | 0.1.0-rc.6 (2026-08-17) |
| deepseek-harness-ux | 14 | [ayuanwong/deepseek-harness-ux](https://github.com/ayuanwong/deepseek-harness-ux) | 长任务，不刷屏：关键进度清晰可见，完成后自动折叠，详情随时展开。 Long agent tasks, without transcript clutter: focused progress, auto-folded history, details on demand. | 0.1.0-rc.6 (2026-08-17) |
| dsh-chinese-traditional-wisdom-skill | 14 | [dhicoc/dsh-chinese-traditional-wisdom-skill](https://github.com/dhicoc/dsh-chinese-traditional-wisdom-skill) | 中华传统智慧（玄枢）AI Agent 技能包的 DeepSeek Harness（dsh）Cordis 插件：八字/紫微/六爻/梅花/奇门/风水/五运六气/体质全融合，本地确定性引擎 + 可视化 Dashboard，一行 dsh plugin add 安装。 | 0.1.0-rc.6 (2026-08-17) |
| dsh-continual-evolve | 14 | [ZK-Andy/dsh-continual-evolve](https://github.com/ZK-Andy/dsh-continual-evolve) · [npm](https://www.npmjs.com/package/dsh-continual-evolve) | Continual self-evolution for DeepSeek Harness: versioned, auditable, rollback-safe harness state refined from session trajectories. | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-writing-guard | 13 | [xmutfyh/dsh-plugin-writing-guard](https://github.com/xmutfyh/dsh-plugin-writing-guard) | DSH plugin: deterministic academic-writing linter — incremental lint (fingerprint diff: only new/resolved issues injected), segment-pipeline preprocessing with section detection | 0.1.0-rc.6 (2026-08-17) |
| dsh-router-flash | 13 | [xiaoxianyu-office/dsh-router-flash](https://github.com/xiaoxianyu-office/dsh-router-flash) | DSH agent preset 分发包：V4 Flash 神模式（opencode-go）——启动时自动把 router-flash preset 安装到 ~/.dsh/.agent-presets。 | 0.1.0-rc.6 (2026-08-17) |
| dsh-advisor | 12 | [omdsh-dev/dsh-advisor](https://github.com/omdsh-dev/dsh-advisor) | Per-session reviewer model that watches the primary transcript and injects severity-ranked advice. | 0.1.0-rc.6 (2026-08-17) |
| Flowboard | 12 | [juntaoding/Flowboard](https://github.com/juntaoding/Flowboard) | 运行在 DeepSeek Harness 中的开源办公协作与团队管理插件，让目标、会议、Agent 执行、进度和资料在同一套办公逻辑中持续流动。 | 0.1.0-rc.6 (2026-08-18) |
| aflare | 11 | [alib8b8/aflare](https://github.com/alib8b8/aflare/tree/HEAD/integrations/dsh-plugin) | DeepSeek Harness (DSH) Cordis plugin exposing aflare workflow tools | 0.1.0-rc.6 (2026-08-17) |
| Cobsidian | 11 | [Totoro-qaq/Cobsidian](https://github.com/Totoro-qaq/Cobsidian/tree/HEAD/integrations/dsh) | DeepSeek Harness Cordis bundle for the Cobsidian agent skill | 0.1.0-rc.6 (2026-08-17) |
| dsh-harness-ops | 11 | [fakechris/dsh-harness-ops](https://github.com/fakechris/dsh-harness-ops/tree/HEAD/plugins/dsh-restart-recover) | Restart recovery for dsh web: after a crash/restart, an interrupted agent turn continues automatically (host-side agent/created listener — no browser timing races). Pairs with the dsh-web-guard skill | 0.1.0-rc.6 (2026-08-17) |

<sub>Showing the 25 most-starred of 529. **[all 529 →](lists/agents-orchestration.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Memory & sessions

Memory systems, context management, session search/rewind/export.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| sandbase-harness | 623 | [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) | Local-first, self-hosted AI agent runtime with Claude Managed Agents-style APIs, sandboxed sessions, memory, tools, audit, replay, and a local Console. | 0.1.0-rc.6 (2026-08-17) |
| graph-memory | 557 | [adoresever/graph-memory](https://github.com/adoresever/graph-memory) | Knowledge graph memory for DeepSeek Harness and OpenClaw — cross-session recall, PageRank, communities, and vector search | 0.1.0-rc.6 (2026-08-17) |
| deepseek-harness-desktop-app | 489 | [vibeinging/deepseek-harness-desktop-app](https://github.com/vibeinging/deepseek-harness-desktop-app/tree/HEAD/packages/dsh-product-bridge) | Session-scoped DeepSeek Harness Desktop App capabilities for the current DSH Web profile | 0.1.0-rc.6 (2026-08-17) |
| dsh-context | 462 | [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) · [npm](https://www.npmjs.com/package/dsh-context) | Context insight panel — a Context tab in the dsh web UI showing what the model's context window is made of and how it evolves. | 0.1.0-rc.6 (2026-08-17) |
| dsh-memory-evolve | 190 | [csyangwen/dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) | 为 DeepSeek Harness 带来分层记忆（全局 / 用户 / 项目 / GIT 分支 / 每日）与自我进化（经验沉淀 + 技能自动创建）和技能管理、待办管理、CLI 调度（kimi/codex/grok/hermes 等外部 AI 统一调度）、临时信息便签，带 WebUI 管理界面。Hermes-style long-term memory, self-evolution | 0.1.0-rc.6 (2026-08-17) |
| dsh-dafeiyu | 172 | [QCYTSN/dsh-dafeiyu](https://github.com/QCYTSN/dsh-dafeiyu) | A desktop-native BigFish companion driven by DeepSeek Harness session events. | 0.1.0-rc.6 (2026-08-17) |
| cetus | 122 | [drewnekota/cetus](https://github.com/drewnekota/cetus/tree/HEAD/dsh-bridge) | DSH Companion 的本地网关插件：把宿主 ApiProxy 暴露为 127.0.0.1 上的 HTTP + SSE（token 鉴权），供桌面壳驱动会话 | 0.1.0-rc.6 (2026-08-17) |
| dsh-mnemon ⭐ | 122 | [omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) | Local-first three-tier memory for dsh: runtime memory, searchable documents, and supervised memory spaces. | 0.1.0-rc.6 (2026-08-17) |
| dsh-noema | 113 | [ZSeven-W/dsh-noema](https://github.com/ZSeven-W/dsh-noema) · [npm](https://www.npmjs.com/package/@zseven-w/dsh-noema) | Noema long-term memory for DSH: durable, inspectable agent memory with recall tools and a settings page. | 0.1.0-rc.6 (2026-08-17) |
| dsh-turn-rewind ⭐ | 87 | [Anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) | Rewind conversation and workspace state to a previous turn, backed by a persistent change ledger | 0.1.0-rc.6 (2026-08-17) |
| dsh-memento | 59 | [PerryLink/dsh-memento](https://github.com/PerryLink/dsh-memento) · [npm](https://www.npmjs.com/package/dsh-memento) | Bounded, layered, approval-gated, auditable cross-session memory for DeepSeek Harness — a capability seam (ctx.memory service + local SQLite provider + memory tool + frozen snapshot injection), not an | 0.1.0-rc.6 (2026-08-17) |
| dsh-damage-pulse | 56 | [wssfk12138/dsh-damage-pulse](https://github.com/wssfk12138/dsh-damage-pulse/tree/HEAD/packages/client/ui-token-monitor) | Token 用量与金额面板：对话流内单次用量行 + 输入区会话累计条，读自 tokenCost session projection | 0.1.0-rc.6 (2026-08-17) |
| dsh-auto-review | 42 | [PerryLink/dsh-auto-review](https://github.com/PerryLink/dsh-auto-review) | Second-model AI auto-review for DeepSeek Harness approval requests: a read-only reviewer subagent decides allow/deny on the approval answerer chain, with fail-closed fallback and full session-log | 0.1.0-rc.6 (2026-08-17) |
| dsh-auto-collapse | 29 | [a179-sanae/dsh-auto-collapse](https://github.com/a179-sanae/dsh-auto-collapse) | DeepSeek Harness Web 客户端插件：把会话里的工具卡片与 Think 推理块折叠成一行，折叠态实时显示当前正在进行的工作（工具名 + 正在执行的命令/参数、或思考内容），运行中带流光动画；点击展开/收起。让界面只保留模型说的话。 | 0.1.0-rc.6 (2026-08-17) |
| dsh-session-manager-dream123 | 23 | [dream12347/dsh-session-manager](https://github.com/dream12347/dsh-session-manager) · [npm](https://www.npmjs.com/package/dsh-delete-session) | Full session management for the DSH web UI: delete (with trash/restore/purge), restore archived sessions, activity stats, continue/pause, fork to a new chat, unread markers, and open log folders. | 0.1.0-rc.6 (2026-08-17) |
| dsh-memory | 21 | [FuRongJun-1999/dsh-memory](https://github.com/FuRongJun-1999/dsh-memory) · [npm](https://www.npmjs.com/package/@furongjun1999/dsh-memory) | 灵枢（Lingshu·líng shū）DeepSeek Harness 插件：完整大脑——长期记忆/知识飞轮/自我认知/递归反思接入 DSH，对话自动沉淀进记忆库 | 0.1.0-rc.6 (2026-08-17) |
| dsh-recall-plugin | 21 | [limbo947/dsh-recall-plugin](https://github.com/limbo947/dsh-recall-plugin) · [npm](https://www.npmjs.com/package/dsh-recall-plugin) | DSH 消息撤回插件：在用户消息气泡旁加「撤回」按钮，把项目文件（独立影子 git 仓库快照）与对话历史（官方 fork）一并回退到该消息发送之前。 | 0.1.0-rc.6 (2026-08-17) |
| dsh-auto-memory | 17 | [Aik358/dsh-auto-memory](https://github.com/Aik358/dsh-auto-memory) | DSH 自动记忆插件:三层记忆(用户级/项目笔记/每日日志)自动注入与检索、每日反思、可视化面板与设置页,支持继承其他 AI 工具的记忆。 | 0.1.0-rc.6 (2026-08-17) |
| dsh-milestone | 17 | [SnowCrescenter-tech/dsh-milestone](https://github.com/SnowCrescenter-tech/dsh-milestone) | Git-style milestone timeline for DeepSeek Harness: hover for metadata, click to jump to any message. 会话里程碑导航条：圆点时间线，定位并跳转到每条提问。 | 0.1.0-rc.6 (2026-08-17) |
| amadeus-for-dsh | 15 | [yyxcnasd/amadeus-for-dsh](https://github.com/yyxcnasd/amadeus-for-dsh/tree/HEAD/package) | Steins;Gate 0 Amadeus (Makise Kurisu) 助手：Live2D 翻盖手机 + 日语语音 + 长期记忆，DeepSeek Harness 插件 | 0.1.0-rc.6 (2026-08-17) |
| dsh-meow-memory | 15 | [Phant0Meow/dsh-meow-memory](https://github.com/Phant0Meow/dsh-meow-memory) | Cross-session project memory for DeepSeek Harness: seven-layer SQLite memory, first-turn snapshot injection, per-message keyword hits, memory_remember/search/project tools, automatic reflection with | 0.1.0-rc.6 (2026-08-18) |
| dsh-session-notification | 15 | [dingyi222666/dsh-session-notification](https://github.com/dingyi222666/dsh-session-notification) | Session-state notification plugin for the dsh web GUI: session completed/failed, question-asked, and permission-requested alerts with configurable built-in or custom sounds and browser notifications | 0.1.0-rc.6 (2026-08-17) |
| dsh-archived-sessions | 14 | [Zephyr-vibe/dsh-archived-sessions](https://github.com/Zephyr-vibe/dsh-archived-sessions) | DSH web plugin: an Archived Sessions manager in Settings — browse archived conversations, expand per-session details (disk usage, downloads, tool usage, lineage, cross-session recall),. | 0.1.0-rc.6 (2026-08-17) |
| dsh-memoir | 14 | [Qinling-Melon-Farmers/dsh-memoir](https://github.com/Qinling-Melon-Farmers/dsh-memoir) · [npm](https://www.npmjs.com/package/dsh-memoir) | Project persistent memory and session-lessons distillation for DeepSeek Harness (DSH): an agent records a session's work summary, lessons learned, and next-action guide (memoir_record) into a per-p... | 0.1.0-rc.6 (2026-08-17) |
| harness-ai-kit | 12 | [seed-forge/harness-ai-kit](https://github.com/seed-forge/harness-ai-kit/tree/HEAD/plugins/harness-ai-kit-plugin) | harness-ai-kit dsh 插件：会话内查询/安装团队资产（list/search/info/install/doctor）+ 随包核心操作技能。 | 0.1.0-rc.6 (2026-08-17) |

<sub>Showing the 25 most-starred of 731. **[all 731 →](lists/memory-sessions.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Models & providers

Providers, routing, fallbacks, subscription adapters.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| api-relay-audit | 793 | [toby-bridges/api-relay-audit](https://github.com/toby-bridges/api-relay-audit) | DeepSeek Harness bundle for running API Relay Audit locally | 0.1.0-rc.6 (2026-08-18) |
| dsh-image-gen-shanliul | 76 | [shanliuling/dsh-image-gen](https://github.com/shanliuling/dsh-image-gen) | Bring ChatGPT-like image generation to DeepSeek Harness — Gemini, OpenAI, Seedream & more. | 0.1.0-rc.6 (2026-08-18) |
| dockyard-dsh | 72 | [AITabby/dockyard-dsh](https://github.com/AITabby/dockyard-dsh) | A macOS-only native account-pool and provider plugin for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-17) |
| dsh-commandcode-provider-mars-sea | 68 | [Mars-Sea/dsh-commandcode-provider](https://github.com/Mars-Sea/dsh-commandcode-provider) | DeepSeek Harness LLM provider plugin for Command Code, ported from pi-commandcode-provider (MIT). Registers the 'commandcode' provider route with a Models-page card and live model catalog. | 0.1.0-rc.6 (2026-08-17) |
| dsh-claude-ux | 58 | [eri64/dsh-claude-ux](https://github.com/eri64/dsh-claude-ux) | Claude-style region risk-control (China / non-China target, reversible) + abusive-interaction auto-end for DeepSeek Harness web profile | 0.1.0-rc.6 (2026-08-17) |
| dsh-codex | 35 | [Yan-Zero/dsh-codex](https://github.com/Yan-Zero/dsh-codex) · [npm](https://www.npmjs.com/package/dsh-codex) | Use a ChatGPT subscription in DeepSeek Harness through OpenAI Codex sign-in, with Codex models, search, and image tools. | 0.1.0-rc.6 (2026-08-17) |
| dsh-vision-williamj | 35 | [william-jin-cmu/dsh-vision](https://github.com/william-jin-cmu/dsh-vision) | 给纯文本的 DeepSeek 加上眼睛：view_image 工具经任意 OpenAI 兼容 VLM 端点回答关于图片的问题（默认智谱免费 glm-4.6v-flash 零成本开箱，可换通义 qwen3-vl / Ollama 本地 / 未来 DeepSeek 官方识图 API） | 0.1.0-rc.6 (2026-08-17) |
| deepseek-harness-model-config | 23 | [MarvekG/deepseek-harness-model-config](https://github.com/MarvekG/deepseek-harness-model-config) · [npm](https://www.npmjs.com/package/dsh-models-config-plugin) | Advanced per-model reasoning and capacity settings for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |
| kixparadigm | 22 | [olicesx/kixparadigm](https://github.com/olicesx/kixparadigm/tree/HEAD/dsh/vision-bridge) | dsh 无缝识图桥：UI 上传图片 → 自动用 GLM-4.6V 转成文本描述交给主模型（client dock 插件 + 服务端 HTTP 端点） | 0.1.0-rc.6 (2026-08-17) |
| dsh-focus-chat | 21 | [dingyi222666/dsh-focus-chat](https://github.com/dingyi222666/dsh-focus-chat) | Claude Code-style focus view for the dsh web GUI: the conversation's condensed reading surface — tool calls folded into expandable metric summaries, chat 1:1 row chrome, and streaming think rows | 0.1.0-rc.6 (2026-08-17) |
| dsh-agy | 18 | [chaos-03x/dsh-agy](https://github.com/chaos-03x/dsh-agy) | Google Antigravity (agy) OAuth auth + model access plugin for DeepSeek Harness: multi-account pool, 429 rotation, device fingerprinting, CLI and web login. | 0.1.0-rc.6 (2026-08-17) |
| rapid-mlx-dsh-provider | 18 | [raullenchai/rapid-mlx-dsh-provider](https://github.com/raullenchai/rapid-mlx-dsh-provider) | Native Rapid-MLX provider for DeepSeek Harness — teaches DSH what the local server already knows. | 0.1.0-rc.6 (2026-08-18) |
| dsh-full-remote | 17 | [JUANWANG-BUAA/dsh-full-remote](https://github.com/JUANWANG-BUAA/dsh-full-remote) | DeepSeek Harness plugin for remote access: a token-gated reverse proxy keeps settings, credentials, and file access working over public tunnels and on other devices instead of returning 403. | 0.1.0-rc.6 (2026-08-17) |
| dsh-llm-codebuddy-axiaohungry | 16 | [Axiaohungry/dsh-llm-codebuddy](https://github.com/Axiaohungry/dsh-llm-codebuddy) | WorkBuddy API adapter so DeepSeek Harness can call CodeBuddy models. | 0.1.0-rc.6 (2026-08-17) |
| deepseek-harness-auth | 14 | [taichuy/deepseek-harness-auth](https://github.com/taichuy/deepseek-harness-auth) | Fail-closed password authentication proxy bundle for the DeepSeek Harness Web profile | 0.1.0-rc.6 (2026-08-17) |
| dsh-routing-suite | 13 | [dragonbaba/dsh-routing-suite](https://github.com/dragonbaba/dsh-routing-suite) | A lightweight, selectable smart-routing mode for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-17) |
| dsh-claude-provider | 12 | [MoFeng2223/dsh-claude-provider](https://github.com/MoFeng2223/dsh-claude-provider) · [npm](https://www.npmjs.com/package/@mofeng2223/dsh-claude-provider) | Custom Claude provider support for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-17) |
| dsh-file-mentions | 11 | [a903067276-rgb/dsh-file-mentions](https://github.com/a903067276-rgb/dsh-file-mentions) | Clickable file paths in DSH replies: open files/directories from inline paths (Codex-style), with a mentioned-files chip list as fallback | 0.1.0-rc.6 (2026-08-17) |
| dsh-file-upload | 11 | [HongMing-Huang/dsh-file-upload](https://github.com/HongMing-Huang/dsh-file-upload) | DeepSeek Harness dual-face plugin: Claude-style drag-and-drop / paperclip file upload, content sniffing, document-to-Markdown conversion (built-in JS parsers with optional Microsoft MarkItDown CLI) | 0.1.0-rc.6 (2026-08-17) |
| dsh-llm-fallbacks | 11 | [omdsh-dev/dsh-llm-fallbacks](https://github.com/omdsh-dev/dsh-llm-fallbacks) | Automatic provider/model fallback chains when LLM requests keep failing after retries, auth, quota, or rate limits. | 0.1.0-rc.6 (2026-08-17) |
| dsh-desktop-yxccai | 10 | [yxccai/dsh-desktop](https://github.com/yxccai/dsh-desktop) | Unofficial cross-platform desktop shell with a bundled fallback runtime for DeepSeek Harness Web. | 0.1.0-rc.6 (2026-08-17) |
| dsh-museai-tavern | 10 | [yejiming/dsh-museai-tavern](https://github.com/yejiming/dsh-museai-tavern) · [npm](https://www.npmjs.com/package/@yejiming/dsh-museai-tavern) | MuseAI tavern for the dsh web GUI: a MuseAI conversation-view tab (right of Trajectory) with background / chat / adventure / bond / settings pages ported from MuseAI, running entirely on models config | 0.1.0-rc.6 (2026-08-17) |
| dsh-provider-model-configurator | 10 | [LiangYin233/dsh-provider-model-configurator](https://github.com/LiangYin233/dsh-provider-model-configurator) | Provider Model Configurator for DeepSeek Harness: view, create, edit, copy and delete model entries (context window, max output, modalities, reasoning efforts) across your configured providers,. | 0.1.0-rc.6 (2026-08-17) |
| dsh-better-browser | 9 | [titanwings/dsh-better-browser](https://github.com/titanwings/dsh-better-browser) | Better Browser for DeepSeek Harness: drive the user's real browser through Kimi WebBridge with navigation, snapshots, interaction, screenshots, network inspection, and tab management | 0.1.0-rc.6 (2026-08-17) |
| codex-plugin-dsh | 8 | [wingoo/codex-plugin-dsh](https://github.com/wingoo/codex-plugin-dsh) | Codex App Server model provider plugin for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |

<sub>Showing the 25 most-starred of 360. **[all 360 →](lists/models-providers.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Interop & migration

Bridges to and from Claude Code, Codex, and other harnesses.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-hooks-claude-code (official) | 165344 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/hooks/hooks-claude-code) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-hooks-claude-code) | Bridge plugin: runs an existing Claude Code hooks.json on the harness interception seams (command hooks only; http, mcp_tool, prompt, and agent hooks are skipped with a warning) | 0.1.0-rc.5 (2026-08-13) |
| dsh-hooks-codex (official) | 165344 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/hooks/hooks-codex) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-hooks-codex) | Bridge plugin: runs a Codex hooks.json on the harness interception seams (regex-only matchers, snake_case payloads, only blocking decisions honored) | 0.1.0-rc.5 (2026-08-13) |
| petdex | 3916 | [crafter-station/petdex](https://github.com/crafter-station/petdex/tree/HEAD/packages/petdex-desktop-native/integrations/dsh) | A public gallery of animated pets for Codex, Claude Code, DeepSeek Harness, Hermes, OpenCode, Gemini CLI, and more. | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-subscriptions | 148 | [V1ki/dsh-plugin-subscriptions](https://github.com/V1ki/dsh-plugin-subscriptions) | Use ChatGPT (Codex), Claude, and Grok (X Premium) subscriptions as DeepSeek Harness LLM providers, with OAuth login from the web Settings page | 0.1.0-rc.6 (2026-08-17) |
| dsh-reasoning-effort | 87 | [HanaAyane/dsh-reasoning-effort](https://github.com/HanaAyane/dsh-reasoning-effort) | Codex-style DeepSeek Harness model and reasoning selector with off/high/max snapping, DSH-native themes, and left-clipped radiation effects. | 0.1.0-rc.6 (2026-08-17) |
| dsh-chat-import | 75 | [Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) | Import Claude Code / Codex / ChatGPT / Cursor / Gemini / Reasonix / Pi Coding Agent / opencode / ZCode / Grok Build / OpenClaw / Hermes conversation histories as resumable DeepSeek Harness sessions | 0.1.0-rc.6 (2026-08-17) |
| dsh-crew | 61 | [ZSeven-W/dsh-crew](https://github.com/ZSeven-W/dsh-crew) | DeepSeek Harness plugin: dispatch work to DSH agents from Claude Code / Codex, as native subagents with live progress | 0.1.0-rc.6 (2026-08-17) |
| dsh-multica-runtime | 52 | [multica-ai/dsh-multica-runtime](https://github.com/multica-ai/dsh-multica-runtime) | Private DeepSeek Harness runtime bridge for Multica | 0.1.0-rc.6 (2026-08-17) |
| dsh-codex-connect | 29 | [franksong2702/dsh-codex-connect](https://github.com/franksong2702/dsh-codex-connect) | ChatGPT OAuth and Codex models for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-17) |
| pi2dsh | 24 | [weijiafu14/pi2dsh](https://github.com/weijiafu14/pi2dsh) | Bridge the Pi and DeepSeek Harness ecosystems: a general Pi Host ABI that runs unmodified Pi extensions as native DSH plugins, plus per-package conversion and MCP config translation. | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-product-subagents | 18 | [shaokeyibb/dsh-plugin-product-subagents](https://github.com/shaokeyibb/dsh-plugin-product-subagents) | Role-based Codex / Claude Code / ACP subagent providers for the DeepSeek Harness: continuable children, durable session recovery, per-role product permissions, delegation with a permission ceiling | 0.1.0-rc.6 (2026-08-17) |
| dsh-llm-codex | 14 | [yequ172672/dsh-codex-subscription](https://github.com/yequ172672/dsh-codex-subscription) | Reuse Codex CLI local login credentials to use ChatGPT subscription models in DeepSeek Harness. | 0.1.0-rc.6 (2026-08-17) |
| deepseek-harness-acp | 12 | [openma-ai/deepseek-harness-acp](https://github.com/openma-ai/deepseek-harness-acp) | Agent Client Protocol (ACP) adapter for DeepSeek Harness — use DeepSeek Harness from ACP clients such as Zed. | 0.1.0-rc.6 (2026-08-17) |
| dsh-hud | 12 | [zexuanw958-svg/dsh-hud](https://github.com/zexuanw958-svg/dsh-hud) | Codex/Claude Code-style live session telemetry for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |
| dsh-better-deepseek | 11 | [EdgeTypE/dsh-better-deepseek](https://github.com/EdgeTypE/dsh-better-deepseek) · [npm](https://www.npmjs.com/package/dsh-better-deepseek) | DeepSeek Harness bridge plugin for Better-DeepSeek Chrome extension integration | 0.1.0-rc.6 (2026-08-17) |
| dsh-codex-auth | 11 | [suntianc/dsh-codex-auth](https://github.com/suntianc/dsh-codex-auth) | Use the local Codex CLI ChatGPT login as a DeepSeek Harness LLM route, with a native GPT Auth settings card | 0.1.0-rc.6 (2026-08-17) |
| dsh-tavern-lingyeso | 11 | [LingyeSoul/dsh-tavern](https://github.com/LingyeSoul/dsh-tavern/tree/HEAD/packages/plugin) | DSH plugin: SillyTavern-compatible roleplay workspace with Character Card V2/V3/PNG import, World Info lore engine, presets, swipes, chat editing and streaming LLM generation. Official bundle | 0.1.0-rc.6 (2026-08-17) |
| dsh-import-agents | 10 | [Chang-Tong/dsh-import-agents](https://github.com/Chang-Tong/dsh-import-agents) · [npm](https://www.npmjs.com/package/dsh-import-agents) | Import pi / opencode sessions, chat history, and agents into DeepSeek Harness (dsh): slash commands, session-start migration prompt, and a one-click Sync button in the composer. | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-integration | 10 | [MutaLucem/dsh-plugin-integration](https://github.com/MutaLucem/dsh-plugin-integration) | DSH 插件整合中心：识别已装插件并打 tag 分类、功能重叠识别与实时切换、兼容性自检（存在性/共用性冲突）与修复预案、启用/停用及安全性预检。 | 0.1.0-rc.6 (2026-08-17) |
| write-chinese-long-screenplay | 10 | [mudden2380078550-creator/write-chinese-long-screenplay](https://github.com/mudden2380078550-creator/write-chinese-long-screenplay) | 中文电影与剧集长剧本写作 skill（SKILL.md）——双输入板块 + 因果—价值内核，保证长篇幅连续性与人物声音；兼容 Codex / Claude Code / DeepSeek Harness (dsh) / zcode | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-claude-bridge | 9 | [YYTbit/dsh-plugin-claude-bridge](https://github.com/YYTbit/dsh-plugin-claude-bridge) | Bridge Claude Code's memory, skills, and configuration into DeepSeek Harness — zero migration, full compatibility | 0.1.0-rc.6 (2026-08-17) |
| task-passport | 9 | [dongsheng123132/task-passport](https://github.com/dongsheng123132/task-passport) | Open task handoff protocol and local store for durable state across AI harnesses. | 0.1.0-rc.6 (2026-08-17) |
| dsh-claude-compat | 8 | [biedongbin/dsh-claude-compat](https://github.com/biedongbin/dsh-claude-compat) | DeepSeek Harness plugin: bridge Claude Code's .claude/ directory (skills, commands, rules) into DSH native skill registry and message-stream rules injection. | 0.1.0-rc.6 (2026-08-17) |
| dsh-llm-codex-oauth | 8 | [Player-MINEPIG/dsh-llm-codex-oauth](https://github.com/Player-MINEPIG/dsh-llm-codex-oauth) | Use your ChatGPT/Codex subscription in dsh through the OpenAI Codex OAuth flow. | 0.1.0-rc.6 (2026-08-17) |
| dsh-atomgit | 7 | [xiongjiamu/dsh-atomgit](https://github.com/xiongjiamu/dsh-atomgit) · [npm](https://www.npmjs.com/package/dsh-atomgit) | AtomGit plugin bundle for DeepSeek Harness: atomgit-skills workflows + ag CLI integration + GitCode MCP server tools | 0.1.0-rc.6 (2026-08-17) |

<sub>Showing the 25 most-starred of 223. **[all 223 →](lists/interop-migration.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Channels & remote

IM bridges and remote control: Feishu, Telegram, WeCom, DingTalk.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-qqbot | 66 | [tencent-connect/dsh-qqbot](https://github.com/tencent-connect/dsh-qqbot) · [npm](https://www.npmjs.com/package/@tencent-connect/dsh-qqbot) | QQ Bot IM channel plugin for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-17) |
| dsh-notifier-thewolfw | 45 | [THEWOLFWALKER/dsh-notifier](https://github.com/THEWOLFWALKER/dsh-notifier) | DSH 统一通知推送插件：一个 notify() API 打天下 + 多渠道 adapter（telegram/dingtalk/feishu/wxpusher/pushplus/serverchan/bark/webhook），两条触发线（session/event 自动推送 + agent 工具调用）共用 adapter 注册表。零运行时依赖（只用 fetch + node:crypto）。 | 0.1.0-rc.6 (2026-08-17) |
| dsh-lark | 37 | [omdsh-dev/dsh-lark](https://github.com/omdsh-dev/dsh-lark) | Lark/Feishu IM bot channel: chats drive agents, replies and approvals come back as messages and cards. | 0.1.0-rc.6 (2026-08-17) |
| ax-feishu-bridge | 33 | [AX1202/ax-feishu-bridge](https://github.com/AX1202/ax-feishu-bridge) | Feishu/Lark bridge for coding agents — chat with Pi or DeepSeek Harness from Feishu or Lark | 0.1.0-rc.6 (2026-08-17) |
| dsh-im-gateway-zhuiyuey | 29 | [zhuiyueya/dsh-im-gateway](https://github.com/zhuiyueya/dsh-im-gateway) | 聚合 IM 网关插件（DeepSeek Harness）：把 dsh agent 接入 Telegram / Discord / Slack / 飞书 / 微信 / QQ / WhatsApp / Signal / Teams / LINE / Matrix / Mattermost / Google Chat / IRC / Twitch / Nostr / Nextcloud Talk / | 0.1.0-rc.6 (2026-08-17) |
| deepseek-harness-remote | 28 | [liguobao/deepseek-harness-remote](https://github.com/liguobao/deepseek-harness-remote) · [npm](https://www.npmjs.com/package/deepseek-harness-remote) | Secure remote control for DeepSeek Harness: paired clients view sessions, continue chats, and handle approvals while the harness stays on the host. | 0.1.0-rc.6 (2026-08-17) |
| dsh-lark-bot | 22 | [PlutoKeating/dsh-lark-bot](https://github.com/PlutoKeating/dsh-lark-bot) · [npm](https://www.npmjs.com/package/dsh-lark-bot) | Bridge DeepSeek Harness into Feishu/Lark with streaming cards, project workspaces, approvals, and scheduling. | 0.1.0-rc.6 (2026-08-17) |
| dsh-lark-link | 20 | [amlyczz/dsh-lark-link](https://github.com/amlyczz/dsh-lark-link) | High-reliability Feishu/Lark bridge for DeepSeek Harness — QR one-click auth, multi-mode agents, card-based commands, zero-loss outbox, media in/out, session logs, reusable DSH Web GUI | 0.1.0-rc.6 (2026-08-17) |
| dsh-lark-sugarfor | 20 | [sugarforever/dsh-lark](https://github.com/sugarforever/dsh-lark) | Feishu/Lark WebSocket channel plugin for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |
| dsh-feishu-pgzxb | 13 | [PGZXB/dsh-feishu](https://github.com/PGZXB/dsh-feishu) | The Feishu UI for DeepSeek Harness (dsh) — a dsh-native plugin: live streaming cards, in-card questions & approvals, one-QR setup. | 0.1.0-rc.6 (2026-08-17) |
| dsh-promotion-toolkit | 9 | [lhmd/dsh-promotion-toolkit](https://github.com/lhmd/dsh-promotion-toolkit) | DeepSeek Harness-native publicity toolkit: turn any long-form source into a source-grounded, platform-native promotion matrix. | 0.1.0-rc.6 (2026-08-17) |
| dsh-telegram-channel | 8 | [hi-wenw/dsh-telegram-channel](https://github.com/hi-wenw/dsh-telegram-channel) | DeepSeek Harness Telegram mobile remote: workspace→session picker (Web-aligned), /model switch, same trajectory — dsh-plugin | 0.1.0-rc.6 (2026-08-17) |
| DeepSeek-harness-qqbot | 7 | [sliverp/DeepSeek-harness-qqbot](https://github.com/sliverp/DeepSeek-harness-qqbot) | QQ Bot channel bridge for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |
| dsh-feishu | 7 | [xmanrui/dsh-feishu](https://github.com/xmanrui/dsh-feishu) | DeepSeek Harness plugin for multi-bot Feishu setup and streaming chat | 0.1.0-rc.6 (2026-08-17) |
| dsh-im-bridge-biboyang | 7 | [BiBoyang/dsh-im-bridge](https://github.com/BiBoyang/dsh-im-bridge) | DSH 微信桥插件：turn/approval 推送到微信，微信远程监控/批准/驱动 agent（iLink 通道，持久去重/分段/合并/白名单） | 0.1.0-rc.6 (2026-08-17) |
| dsh-lark-bridge | 7 | [imetn/dsh-lark-bridge](https://github.com/imetn/dsh-lark-bridge) | Bidirectional Lark/Feishu control bridge for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |
| dsh-wechat-notify | 7 | [wssfk12138/dsh-wechat-notify](https://github.com/wssfk12138/dsh-wechat-notify) | DeepSeek Harness (dsh) plugin that registers a wechat_notify tool so agents can send WeChat notifications through a local ClawBot channel. | 0.1.0-rc.6 (2026-08-17) |
| dsh-channel-feishu | 6 | [ZinkLu/dsh-channel](https://github.com/ZinkLu/dsh-channel/tree/HEAD/packages/channel-feishu) · [npm](https://www.npmjs.com/package/dsh-channel-feishu) | A DeepSeek Harness channel plugin written entirely by DeepSeek Harness itself. | 0.1.0-rc.6 (2026-08-17) |
| dsh-channel-telegram | 6 | [ZinkLu/dsh-channel](https://github.com/ZinkLu/dsh-channel/tree/HEAD/packages/channel-telegram) · [npm](https://www.npmjs.com/package/dsh-channel-telegram) | A DeepSeek Harness channel plugin written entirely by DeepSeek Harness itself. | 0.1.0-rc.6 (2026-08-17) |
| dsh-channel-wechat | 6 | [ZinkLu/dsh-channel](https://github.com/ZinkLu/dsh-channel/tree/HEAD/packages/channel-wechat) · [npm](https://www.npmjs.com/package/dsh-channel-wechat) | A DeepSeek Harness channel plugin written entirely by DeepSeek Harness itself. | 0.1.0-rc.6 (2026-08-17) |
| dsh-chatnode-wechat | 6 | [Jesse-njx/dsh-chatnode-wechat](https://github.com/Jesse-njx/dsh-chatnode-wechat) | Chat with, monitor, and approve your DSH agents from WeChat — an iLink gateway + conversation node bundle for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |
| dsh-email | 6 | [STARDUSTLC666/dsh-email](https://github.com/STARDUSTLC666/dsh-email) | IMAP/SMTP email tools for DeepSeek Harness: list, read, search and send mail, with QQ/163/126/Sina/Aliyun/Gmail/Outlook/iCloud presets. | 0.1.0-rc.6 (2026-08-17) |
| dsh-llm-wechat | 6 | [sulfide2085/dsh-llm-wechat](https://github.com/sulfide2085/dsh-llm-wechat) | DeepSeek-compatible adapter for the WeChat (chatapi.weixin.qq.com) gateway, with think-tag translation for the DeepSeek Harness LLM seam | 0.1.0-rc.6 (2026-08-17) |
| DSH-Telegram-Relay | 6 | [congchuanling-dot/DSH-Telegram-Relay](https://github.com/congchuanling-dot/DSH-Telegram-Relay) | A DeepSeek Harness plugin bundle for Telegram relay integration. | 0.1.0-rc.6 (2026-08-17) |
| telegram | 6 | [LoserFox/telegram](https://github.com/LoserFox/telegram) | Telegram Bot API bridge plugin: relay Telegram chats to harness agent sessions (long polling, per-chat sessions, HTML formatting) | 0.1.0-rc.6 (2026-08-17) |

<sub>Showing the 25 most-starred of 146. **[all 146 →](lists/channels-remote.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Notifications

Alerting the human: desktop, sound, even a phone call.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-notification | 65 | [omdsh-dev/dsh-notification](https://github.com/omdsh-dev/dsh-notification) | Desktop notifications for turn completions, with per-outcome controls and include/exclude keyword rules | 0.1.0-rc.6 (2026-08-17) |
| dsh-web-ui-notify | 18 | [bill9109/dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) | Desktop notifications for approvals, questions, and turn completion so you can leave the dsh tab. | 0.1.0-rc.6 (2026-08-17) |
| dsh-notification-center | 8 | [610la/dsh-notification-center](https://github.com/610la/dsh-notification-center) | 通知中心：对话/任务完成、报错、等待批准等事件触发浏览器通知 + 21 种匹配音效，每类事件独立配置（音效/文件/URL/音量/开关）。 | 0.1.0-rc.6 (2026-08-17) |
| dsh-update-checker-airmetro | 8 | [Airmetro/dsh-update-checker](https://github.com/Airmetro/dsh-update-checker) | Auto-check DeepSeek Harness for new releases and notify the user in the Web GUI with a locale-aware banner. | 0.1.0-rc.6 (2026-08-17) |
| dsh-grafana | 7 | [guhanfei-ai/dsh-grafana](https://github.com/guhanfei-ai/dsh-grafana) | Grafana dashboard editor for DeepSeek Harness: paste a dashboard URL, edit JSON via conversation, push back via HTTP API | 0.1.0-rc.6 (2026-08-18) |
| dsh-lark-meeting-notifier | 7 | [yeruizhi/dsh-lark-meeting-notifier](https://github.com/yeruizhi/dsh-lark-meeting-notifier) · [npm](https://www.npmjs.com/package/dsh-lark-meeting-notifier) | Feishu meeting reminder dock: flash when it is time to leave the agent and join a human meeting. | 0.1.0-rc.6 (2026-08-17) |
| dsh-task-notify-linxin | 7 | [ltao0829/dsh-task-notify](https://github.com/ltao0829/dsh-task-notify) | Task-completion reminder for DeepSeek Harness: in-page toast, OS notification, and sound when an agent turn or background job finishes | 0.1.0-rc.6 (2026-08-17) |
| dsh-ding | 4 | [CAOGGL/dsh-ding](https://github.com/CAOGGL/dsh-ding) · [npm](https://www.npmjs.com/package/dsh-ding) | Play a sound and show a Windows toast when a DeepSeek Harness turn finishes, with a Web UI bell control. | 0.1.0-rc.6 (2026-08-17) |
| dsh-messager | 4 | [ly6170/dsh-messager](https://github.com/ly6170/dsh-messager) | DeepSeek Harness 通知插件：会话交互/任务完成/出错时通过系统通知、浏览器通知、飞书机器人（webhook）推送提醒 | 0.1.0-rc.6 (2026-08-17) |
| dsh-notify-on-complete | 4 | [pitetow/dsh-notify-on-complete](https://github.com/pitetow/dsh-notify-on-complete) | Desktop notifications for DeepSeek Harness (dsh): get a system notification when a run completes, the model asks a question, or waits for approval. Zero-dependency Cordis plugin. | 0.1.0-rc.6 (2026-08-17) |
| dsh-notify-sound | 4 | [xxxxxxxyu/dsh-notify-sound](https://github.com/xxxxxxxyu/dsh-notify-sound) · [npm](https://www.npmjs.com/package/dsh-notify-sound) | DSH web plugin: plays a sound when the agent finishes replying (turn/end). Sound, volume and on/off are configurable in the Settings page. | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-call-me | 4 | [radres/dsh-plugin-call-me](https://github.com/radres/dsh-plugin-call-me) | Your DeepSeek Harness agent rings your phone: it asks out loud, you answer out loud, and what you said steers the run. | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-notify | 4 | [huguangyu666/dsh-plugin-notify](https://github.com/huguangyu666/dsh-plugin-notify) · [npm](https://www.npmjs.com/package/dsh-plugin-notify) | Notification outlet: desktop toasts, Chinese TTS, and sounds when long tasks finish, error, or need you. | 0.1.0-rc.6 (2026-08-17) |
| dsh-win-notify | 4 | [MuziIsabel/dsh-win-notify](https://github.com/MuziIsabel/dsh-win-notify) | DSH plugin: Windows toast notification with sound when an agent task completes. | 0.1.0-rc.6 (2026-08-17) |
| dsh-dingtalk-stardustlc666 | 3 | [STARDUSTLC666/dsh-dingtalk](https://github.com/STARDUSTLC666/dsh-dingtalk) | 钉钉群机器人单向通知工具（DeepSeek Harness 插件）：agent 推送 Markdown / 纯文本消息到钉钉群，支持加签安全模式。 | 0.1.0-rc.6 (2026-08-17) |
| dsh-perlica-ding | 3 | [117BS/dsh-perlica-ding](https://github.com/117BS/dsh-perlica-ding) | 佩丽卡终端 (Perlica Terminal)：明日方舟终末地佩丽卡主题的分级任务提示音插件。计划出方案、任务完成、需要你回应、出错时播放不同提示音，普通问答静音。Perlica-themed tiered sound notifications for DeepSeek Harness: plan ready, task done, needs your input, error tones. | 0.1.0-rc.6 (2026-08-17) |
| dsh-task-notify | 3 | [kaotusi/dsh-task-notify](https://github.com/kaotusi/dsh-task-notify) | System-level task notifications for DeepSeek Harness (DSH): approval requests, awaited replies, and finished background jobs / subagents / workflows — pushed to the OS notification center with. | 0.1.0-rc.6 (2026-08-17) |
| dsh-update-notifier | 3 | [arvin-yd/dsh-update-notifier](https://github.com/arvin-yd/dsh-update-notifier) · [npm](https://www.npmjs.com/package/dsh-update-notifier) | Red-dot update checker for DeepSeek Harness: warns in the sidebar footer when a newer @deepseek-ai/dsh release exists on npm. | 0.1.0-rc.6 (2026-08-17) |
| dsh-web-ui-notify-omdsh | 3 | [omdsh-dev/dsh-web-ui-notify](https://github.com/omdsh-dev/dsh-web-ui-notify) · [npm](https://www.npmjs.com/package/@omdsh-dev/dsh-web-ui-notify) | Desktop notifications for DeepSeek Harness approvals, questions, and turn completion — so neither DSH nor you end up waiting while you browse another tab. | 0.1.0-rc.6 (2026-08-17) |
| OffPeak | 3 | [christophersmith2737-commits/OffPeak](https://github.com/christophersmith2737-commits/OffPeak) | Peak-hour price guard for DeepSeek API tidal pricing: intercept sends during peak hours (Beijing 09:00-12:00 / 14:00-18:00) and schedule them to run at off-peak prices. / DeepSeek 峰谷定价高峰拦截提醒：高峰时段拦截发送 | 0.1.0-rc.6 (2026-08-17) |
| dsh-audio-alert | 2 | [ellelkktrraaa/dsh-audio-alert](https://github.com/ellelkktrraaa/dsh-audio-alert) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-client-audio-alert) | Browser audio alerts for DeepSeek Harness attention edges: approval requests, ask-user questions, and finished turns. | 0.1.0-rc.6 (2026-08-17) |
| dsh-bell-notify | 2 | [Laplace-bit/dsh-bell-notify](https://github.com/Laplace-bit/dsh-bell-notify) | DeepSeek Harness (dsh) plugin: lifecycle bells & status. dsh Agent 生命周期铃声与状态插件（零音频文件，Web Audio 合成）。 | 0.1.0-rc.6 (2026-08-17) |
| dsh-git-remotes | 2 | [yq04/dsh-git-remotes](https://github.com/yq04/dsh-git-remotes) | DSH web plugin: better-sidebar Git Remotes tab for fetch / ff-only pull / confirmed push. Does not replace the built-in Git stage/commit tab. | 0.1.0-rc.6 (2026-08-17) |
| dsh-meow-notify | 2 | [yLong765/dsh-meow-notify](https://github.com/yLong765/dsh-meow-notify) · [npm](https://www.npmjs.com/package/meow-notify) | Push DeepSeek Harness turn and approval events to your phone via MeoW, with a web settings card. | 0.1.0-rc.6 (2026-08-17) |
| dsh-notify-center | 2 | [SingleOne/dsh-notify-center](https://github.com/SingleOne/dsh-notify-center) | Unified native desktop and webhook notifications for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-17) |

<sub>Showing the 25 most-starred of 112. **[all 112 →](lists/notifications.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Usage & cost

Token accounting, billing, balance, quota.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| treg | 494 | [superdesigndev/treg](https://github.com/superdesigndev/treg) | OpenRouter for tools - 2,600 agent-friendly tools, pay for the usage, not subscription | 0.1.0-rc.6 (2026-08-17) |
| anolisa | 358 | [alibaba/anolisa](https://github.com/alibaba/anolisa/tree/HEAD/src/tokenless/adapters/tokenless/dsh) | ANOLISA (Agentic Nexus Operating Layer & Interface System Architecture) \| Agentic OS with runtime, security, observability, and Tokenless response compression for lower token usage and cost. | 0.1.0-rc.6 (2026-08-18) |
| dsh-cost-meter-han14131 | 112 | [Han-1413141/dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) | DeepSeek Harness 会话费用统计插件:本会话成本、当日费用、历史记录与官方价格同步,界面中英双语。Session cost tracking plugin for DeepSeek Harness: per-conversation cost, daily totals, history and official price sync, with a bilingual | 0.1.0-rc.6 (2026-08-17) |
| dsh-tokenledger | 108 | [zh667/TokenLedger](https://github.com/zh667/TokenLedger) | Token usage accounting for DeepSeek Harness, reconciled against New API and Sub2API relay-site billing | 0.1.0-rc.6 (2026-08-17) |
| dsh-usage-stats-ychris | 84 | [Ychris12138/dsh-usage-stats](https://github.com/Ychris12138/dsh-usage-stats) | Token usage heatmap, per-model breakdowns, and DeepSeek account balance for the DeepSeek Harness Web GUI. | 0.1.0-rc.6 (2026-08-17) |
| deepseek-harness-control-center | 53 | [feibi-mochi/deepseek-harness-control-center](https://github.com/feibi-mochi/deepseek-harness-control-center) | Local-first account monitoring, usage accounting, official recharge, completion reminders, flexible layout, and host-gated session controls for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-17) |
| dsh-balance-plugin-francisx | 50 | [Francis-Xavier-code/dsh-balance-plugin](https://github.com/Francis-Xavier-code/dsh-balance-plugin) | DeepSeek 余额监控与用量统计（DSH 插件）：余额监控 · 官方充值入口 · Miyu 风格用量统计 · 三方插件管理 | 0.1.0-rc.6 (2026-08-17) |
| dsh-usage-plugin | 30 | [feiyang-dev/dsh-usage-plugin](https://github.com/feiyang-dev/dsh-usage-plugin) · [npm](https://www.npmjs.com/package/@feiyang666/deepseekharnessdesktop) | DeepSeek Harness usage & cost tracker plugin: per-call token/cache-hit stats, peak/off-peak billing, DeepSeek balance query, CSV/JSON/PNG export with custom destination, and persistent local storage. | 0.1.0-rc.6 (2026-08-17) |
| dsh-AuthInOne | 28 | [Stormycry-cryp/dsh-AuthInOne](https://github.com/Stormycry-cryp/dsh-AuthInOne) · [npm](https://www.npmjs.com/package/dsh-auth-in-one) | OpenAI Codex, Kimi Code, and compatibility Provider login, API/custom providers, model switching, token usage analytics, and cost tracking for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |
| dsh-green-meter | 27 | [dclichang2022/dsh-green-meter](https://github.com/dclichang2022/dsh-green-meter) | Energy & carbon metering for DeepSeek Harness: per-turn/per-request energy, cache carbon savings, electricity cost. | 0.1.0-rc.6 (2026-08-17) |
| dsh-balance | 21 | [crazywoola/dsh-balance](https://github.com/crazywoola/dsh-balance) | Shows API balances and available models in DeepSeek Harness Settings. | 0.1.0-rc.6 (2026-08-17) |
| dsh-usage | 20 | [Aisland-SJL/dsh-usage](https://github.com/Aisland-SJL/dsh-usage) | Persistent balance badge and token usage panel for the dsh web GUI | 0.1.0-rc.6 (2026-08-17) |
| dsh-whale-balance | 20 | [enchangcui340-cloud/dsh-whale-balance](https://github.com/enchangcui340-cloud/dsh-whale-balance) | DeepSeek Harness 原生插件：页面右下角的小鲸鱼余额提醒挂件 | 0.1.0-rc.6 (2026-08-17) |
| dsh-usage-stats-make0209 | 19 | [Make0209/dsh-usage-stats](https://github.com/Make0209/dsh-usage-stats) | Usage stats for DeepSeek Harness: heatmap, token and cache-hit board, balance, and workspace aliases. | 0.1.0-rc.6 (2026-08-17) |
| dsh-balance-meter | 17 | [Ghost011118/dsh-balance-meter](https://github.com/Ghost011118/dsh-balance-meter) | DeepSeek account balance and usage readout for the dsh web GUI: queries the official Get User Balance endpoint and shows current remaining balance and spend on the page. | 0.1.0-rc.6 (2026-08-17) |
| dsh-client-pricing | 16 | [Miyazawai/dsh-client-pricing](https://github.com/Miyazawai/dsh-client-pricing) · [npm](https://www.npmjs.com/package/dsh-client-pricing) | Live DeepSeek API pricing badge in the session header, with peak/off-peak flash and pro rates. | 0.1.0-rc.6 (2026-08-17) |
| dsh-codex-subscription | 16 | [WSL043/dsh-codex-subscription](https://github.com/WSL043/dsh-codex-subscription) | Native ChatGPT and Codex subscription route with quota for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |
| dsh-opencode-go-usage | 12 | [Xenia0922/dsh-opencode-go-usage](https://github.com/Xenia0922/dsh-opencode-go-usage) | OpenCode Go 用量与花费面板 — DeepSeek Harness 插件:可拖拽缩放的悬浮仪表盘,实时展示 OpenCode Go 配额、逐请求用量与花费 | 0.1.0-rc.6 (2026-08-17) |
| dsh-token-usage-leemancheung | 11 | [LeemanCheung/dsh-token-usage](https://github.com/LeemanCheung/dsh-token-usage) · [npm](https://www.npmjs.com/package/dsh-token-usage) | Persistent token usage records and dashboard for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |
| dsh-web-billing | 11 | [bpc-oss/dsh-web-billing](https://github.com/bpc-oss/dsh-web-billing) · [npm](https://www.npmjs.com/package/dsh-web-billing) | RMB/USD token-billing plugin for DSH web: official-policy auto pricing (incl. peak/off-peak), per-message ledger, account balance, locale-driven currency display | 0.1.0-rc.6 (2026-08-17) |
| context-vista | 10 | [GooodWei/context-vista](https://github.com/GooodWei/context-vista) | A live context-window donut for DeepSeek Harness: token usage, compaction savings, and cost at a glance | 0.1.0-rc.6 (2026-08-17) |
| dsh-balance-monitor-jelly000 | 10 | [jelly-000/dsh-balance-monitor](https://github.com/jelly-000/dsh-balance-monitor) | DeepSeek account balance, remaining-ratio bar, and today's spend in the dsh sidebar footer. | 0.1.0-rc.6 (2026-08-17) |
| dsh-ocgo-lite | 10 | [OK-wx/dsh-ocgo-lite](https://github.com/OK-wx/dsh-ocgo-lite) | OpenCode Go 用量常驻条 — DeepSeek Harness 插件:聊天输入框下方常驻显示套餐余量(滚动/周/月)、总消耗 token 与金额,点击展开明细。零外部依赖(node:sqlite + fetch)。 | 0.1.0-rc.6 (2026-08-17) |
| dsh-usage-stats ⭐ | 10 | [lanlandeli/dsh-usage-stats](https://github.com/lanlandeli/dsh-usage-stats) | Beautiful token analytics for DeepSeek Harness — trends, activity heatmaps, model breakdowns, and data exports. | 0.1.0-rc.6 (2026-08-17) |
| DeepSeek-Harness-billing-plugin | 9 | [WilliamLIiii/DeepSeek-Harness-billing-plugin](https://github.com/WilliamLIiii/DeepSeek-Harness-billing-plugin/tree/HEAD/packages/llm-billing) | Standalone DeepSeek account-balance and remaining-task estimator exposed through the billing Remote | 0.1.0-rc.6 (2026-08-17) |

<sub>Showing the 25 most-starred of 468. **[all 468 →](lists/usage-cost.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Observability & evidence

Diagnostics, logs, audits, content-addressed proofs.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-status-rotator | 39 | [01Virex/dsh-status-rotator](https://github.com/01Virex/dsh-status-rotator) · [npm](https://www.npmjs.com/package/dsh-status-rotator) | Rotates the DSH chat turn-status label ("Deep diving...") through user-defined phrases every few seconds. | 0.1.0-rc.6 (2026-08-17) |
| dsh-whale-report | 22 | [SenmuuuuW/dsh-whale-report](https://github.com/SenmuuuuW/dsh-whale-report) | 鲸鱼记事本 — 你的 Agent 年度/月度/周度/日报：从会话事件日志生成数据新闻官式报告，任意区间、定时生成。 | 0.1.0-rc.6 (2026-08-17) |
| dsh-security-audit | 12 | [omdsh-dev/dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) | Read-only local security audit: config, credential metadata, plugin provenance, sessions, and network exposure. | 0.1.0-rc.6 (2026-08-17) |
| dsh-session-health | 8 | [omdsh-dev/dsh-session-health](https://github.com/omdsh-dev/dsh-session-health) | Frame-level diagnostics over multi-frame zstd session logs: torn, corrupt, or empty session detection. | 0.1.0-rc.6 (2026-08-17) |
| dsh-inspector | 7 | [CocoSgt/dsh-inspector](https://github.com/CocoSgt/dsh-inspector) · [npm](https://www.npmjs.com/package/dsh-inspector) | Inspect and manage the live instruction chain and project skills for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-17) |
| DSH-changeproof | 5 | [Apageoflove/DSH-changeproof](https://github.com/Apageoflove/DSH-changeproof) | ChangeProof - change-relevance + evidence-freshness quality plugin for DeepSeek Harness (DSH) | 0.1.0-rc.6 (2026-08-17) |
| dsh-verification-receipt | 5 | [030611/dsh-verification-receipt](https://github.com/030611/dsh-verification-receipt) | Privacy-minimal heuristic per-turn execution summaries for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |
| qiushi-dsh-evidence-audit | 5 | [030611/qiushi-dsh-evidence-audit](https://github.com/030611/qiushi-dsh-evidence-audit) | Observe-only hash-chained evidence receipts for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |
| upstream-radar | 5 | [MicroMilo/upstream-radar](https://github.com/MicroMilo/upstream-radar) · [npm](https://www.npmjs.com/package/upstream-radar) | Always-on vulnerability and breaking-change impact monitoring for DeepSeek Harness plugins. | 0.1.0-rc.6 (2026-08-17) |
| dsh-capability-receipt | 4 | [dongsheng123132/dsh-capability-receipt](https://github.com/dongsheng123132/dsh-capability-receipt) | Content-addressed receipts for skills actually loaded by DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |
| dsh-lineage | 4 | [dongsheng123132/dsh-lineage](https://github.com/dongsheng123132/dsh-lineage) | Content-addressed data and action lineage evidence for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |
| dsh-observation-journal | 4 | [Cavan-Ou/dsh-observation-journal](https://github.com/Cavan-Ou/dsh-observation-journal) · [npm](https://www.npmjs.com/package/dsh-observation-journal) | Zero-intrusion session telemetry: one observation card per session with task, model, tools, and failure stats. | 0.1.0-rc.6 (2026-08-17) |
| dsh-session-audit | 4 | [bwndlct/dsh-session-audit](https://github.com/bwndlct/dsh-session-audit) | Session execution analytics and audit reports for DeepSeek Harness. Understand how your agent actually worked: steps, tool calls, failures, repeated actions, token usage and verification signals. | 0.1.0-rc.6 (2026-08-17) |
| dsh-tool-turbo | 4 | [Electricitysheep/dsh-tool-turbo](https://github.com/Electricitysheep/dsh-tool-turbo) | DSH host plugin: cuts tool-call latency by auto-downgrading reasoning_effort for simple tool tasks, with per-tool timing telemetry. | 0.1.0-rc.6 (2026-08-17) |
| dsh-trajectory-governance | 4 | [dfycaly98931680/dsh-trajectory-governance](https://github.com/dfycaly98931680/dsh-trajectory-governance) · [npm](https://www.npmjs.com/package/dsh-trajectory-governance) | Agent trajectory governance & anomaly diagnosis for DeepSeek Harness: rebuild structured multi-branch trajectory trees from the session/event feed, keep observation-layer snapshots, and run three t... | 0.1.0-rc.6 (2026-08-17) |
| dsh-2origin | 3 | [dongsheng123132/dsh-2origin](https://github.com/dongsheng123132/dsh-2origin) | Evidence-first 2Origin state projection, diff and immutable freeze for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |
| dsh-action-parity | 3 | [dongsheng123132/dsh-action-parity](https://github.com/dongsheng123132/dsh-action-parity) | Evidence that CLI, MCP and GUI bindings reach the same DeepSeek Harness action core | 0.1.0-rc.6 (2026-08-17) |
| dsh-anchored-monitor | 3 | [Aik358/dsh-anchored-monitor](https://github.com/Aik358/dsh-anchored-monitor) | DSH 实时思维链锚定监控插件: we/let's/let me 指纹波段检测(spec/mixed/react) + L1温和引导/L2强制重置/L3会话重启分级干预; 左侧栏入口 + 液体毛玻璃浮层 + 变阻器式思考强度条; 独立监控进程 + JSONL 实验日志 + 离线回放/参数校准; 变阻器条可选严肃/「滑动变祖器」梗双皮肤。 | 0.1.0-rc.6 (2026-08-18) |
| dsh-audit-bundle | 3 | [dongsheng123132/dsh-audit-bundle](https://github.com/dongsheng123132/dsh-audit-bundle) | Content-addressed audit indexes across independent DeepSeek Harness evidence producers | 0.1.0-rc.6 (2026-08-17) |
| dsh-benchmark | 3 | [dongsheng123132/dsh-benchmark](https://github.com/dongsheng123132/dsh-benchmark) | Reproducible deterministic benchmark evidence for DSH tools and plugins | 0.1.0-rc.6 (2026-08-17) |
| dsh-benchmark-evidence | 3 | [LeslieWylie/dsh-benchmark-evidence](https://github.com/LeslieWylie/dsh-benchmark-evidence) | Benchmark manifests, fail-closed gates, artifact contracts, and result integrity skills for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-17) |
| dsh-download-progress | 3 | [Fro2en12/dsh-download-progress](https://github.com/Fro2en12/dsh-download-progress) | DSH web plugin: 下载进度面板——URL 下载器、agent shell/SSH 传输追踪、工作区黑箱下载监控，拖拽浮窗实时显示进度。（AI 产物：设计、编码、测试与文档均由 AI 完成） | 0.1.0-rc.6 (2026-08-17) |
| dsh-keepalive | 3 | [xiaohj233/dsh-keepalive](https://github.com/xiaohj233/dsh-keepalive) | Opt-in detached watchdog for the DSH Web process with snapshot-checked repair. | 0.1.0-rc.6 (2026-08-17) |
| dsh-llm-inspector | 3 | [cdxiaodong/dsh-llm-inspector](https://github.com/cdxiaodong/dsh-llm-inspector) · [npm](https://www.npmjs.com/package/dsh-llm-inspector) | 统一 LLM 请求/响应检查器：调 reasoning effort、外部思考(think)导出、流量与包分析 —— DeepSeek Harness 插件 | 0.1.0-rc.6 (2026-08-17) |
| dsh-narrative-ledger | 3 | [dongsheng123132/dsh-narrative-ledger](https://github.com/dongsheng123132/dsh-narrative-ledger) | Content-addressed timeline, canon and character-knowledge evidence for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |

<sub>Showing the 25 most-starred of 99. **[all 99 →](lists/observability-evidence.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Safety & approvals

Permission tiers, gates, redaction, protection.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| Aegis | 1068 | [GanyuanRan/Aegis](https://github.com/GanyuanRan/Aegis) | Make AI coding agents architecture-aware: baseline-first, evidence-verified, drift-checked, and safe across long tasks. | 0.1.0-rc.6 (2026-08-17) |
| k8e | 477 | [xiaods/k8e](https://github.com/xiaods/k8e/tree/HEAD/plugins/deepseek-harness/packages/dsh-k8e-sandbox-bundle) | Installable dsh bundle mounting the k8e-sandbox execution world (KIP-20). | 0.1.0-rc.6 (2026-08-17) |
| dsh-auto-mode | 108 | [NanmiCoder/dsh-auto-mode](https://github.com/NanmiCoder/dsh-auto-mode) · [npm](https://www.npmjs.com/package/@nanmicoder/dsh-auto-mode) | Fail-closed automatic permission policy for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-17) |
| dsh-undo-plugin | 93 | [lire1131/dsh-undo-savepoint](https://github.com/lire1131/dsh-undo-savepoint) | DSH undo/rollback system: snapshot config files on change, undo/redo the last action from the WebUI or by chat, and roll back broken plugin trees without reinstalling. Works even when DSH fails to. | 0.1.0-rc.6 (2026-08-17) |
| dsh-mobile-sayach | 36 | [saya-ch/dsh-mobile](https://github.com/saya-ch/dsh-mobile) | DeepSeek Harness 移动端适配与安全局域网访问插件，支持 Android App 和手机浏览器。 | 0.1.0-rc.6 (2026-08-18) |
| dsh-clawrouter | 17 | [BlockRunAI/dsh-clawrouter](https://github.com/BlockRunAI/dsh-clawrouter) | Strong-model review before risky tool calls, plus many models from one wallet. | 0.1.0-rc.6 (2026-08-17) |
| dsh-permission-rules | 17 | [PerryLink/dsh-permission-rules](https://github.com/PerryLink/dsh-permission-rules) · [npm](https://www.npmjs.com/package/dsh-permission-rules) | Declarative Claude Code-style permission rules for DeepSeek Harness: ordered allow/deny/ask rules with tool-name, argument (glob/regex), and workspace-path matching on the tools/pre-execute waterfall, | 0.1.0-rc.6 (2026-08-17) |
| dsh-approve-for-me | 12 | [timeance/dsh-approve-for-me](https://github.com/timeance/dsh-approve-for-me) | Rule-gated automatic approval for DeepSeek Harness sandbox escalations with an optional LLM reviewer and native human fallback. | 0.1.0-rc.6 (2026-08-17) |
| dsh-reminder | 12 | [Aisland-SJL/dsh-reminder](https://github.com/Aisland-SJL/dsh-reminder) | Bottom-right reminder cards for the DeepSeek Harness web GUI: an amber persistent card when an approval waits for you, a green self-dismissing card when a task completes | 0.1.0-rc.6 (2026-08-17) |
| dsh-auto-approve | 7 | [Jiao-XXX/dsh-auto-approve](https://github.com/Jiao-XXX/dsh-auto-approve) | A conservative automatic approval preset for DeepSeek Harness sandbox escalations | 0.1.0-rc.6 (2026-08-17) |
| dsh-webui-auth | 7 | [Yuuz12/dsh-webui-auth](https://github.com/Yuuz12/dsh-webui-auth) · [npm](https://www.npmjs.com/package/dsh-webui-auth) | WebUI login gate for DeepSeek Harness: account/password in Settings, then HTTP, bundle, API, and WebSocket require a session cookie. | 0.1.0-rc.6 (2026-08-17) |
| dsh-approval-llm | 6 | [Letter2025/dsh-approval-llm](https://github.com/Letter2025/dsh-approval-llm) | Model-based permission approval (approve-for-me) for DeepSeek Harness: an approval/request answerer backed by a separate reviewer model | 0.1.0-rc.6 (2026-08-17) |
| dsh-file-claim | 6 | [Nwflower/dsh-file-claim](https://github.com/Nwflower/dsh-file-claim) | Write in parallel, never overwrite — file claim / protection for concurrent DeepSeek Harness (DSH) sessions working the same workspace: claim/release, heartbeat stale takeover, and an async. | 0.1.0-rc.6 (2026-08-17) |
| dsh-multi-tenant | 6 | [GuoMonth/dsh-multi-tenant](https://github.com/GuoMonth/dsh-multi-tenant) | Multi-tenant SaaS extension for DeepSeek Harness (DSH): tenant identity, session ownership, authorization boundaries, tenant-aware MCP, and audit. | 0.1.0-rc.6 (2026-08-17) |
| deepseek-heartflow | 5 | [yun520-1/deepseek-heartflow](https://github.com/yun520-1/deepseek-heartflow) · [npm](https://www.npmjs.com/package/@yun520-1/deepseek-heartflow) | HeartFlow gate for DSH: automatic output supervision plus a heartflow_check tool. | broken against 0.1.0-rc.6 |
| dsh-mobile-gate | 5 | [Bernardxu123/dsh-mobile-gate](https://github.com/Bernardxu123/dsh-mobile-gate) · [npm](https://www.npmjs.com/package/dsh-mobile-gate) | LAN mobile gateway for DeepSeek Harness (DSH): isolated Node gateway on 0.0.0.0 reverse-proxying the DSH Web UI with first-visit approval, per-device tokens, rate limiting, and mobile layout inject... | 0.1.0-rc.6 (2026-08-17) |
| dsh-multi-folder | 5 | [AngelosZou/dsh-multi-folder](https://github.com/AngelosZou/dsh-multi-folder) · [npm](https://www.npmjs.com/package/dsh-multi-folder) | DeepSeek Harness plugin: secondary working directories for a project. The agent keeps the primary workspace as cwd, gains equal write/exec permissions on configured secondary directories under workspa | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-net-access | 5 | [Gumiho12345/dsh-plugin-net-access](https://github.com/Gumiho12345/dsh-plugin-net-access) | Net Access permission preset for DeepSeek Harness (Windows): HTTPS works inside the sandbox while file writes stay confined like workspace-write. | 0.1.0-rc.6 (2026-08-17) |
| dsh-self-control-guard | 5 | [pandashere/dsh-self-control-guard](https://github.com/pandashere/dsh-self-control-guard) | Self-control guard for DeepSeek Harness: intercept host-kill attempts from bash, teach the controlled exit/restart tools, run token-confirmed graceful exit/restart, and write the restart recovery | 0.1.0-rc.6 (2026-08-17) |
| dsh-ankh-guard | 4 | [Khorsheed/dsh-ankh-guard](https://github.com/Khorsheed/dsh-ankh-guard) | Hard gate for self-modification restarts: a green-build credential bound to the git HEAD, checked before any restart of the running instance | 0.1.0-rc.6 (2026-08-17) |
| dsh-auth-gateway | 4 | [xbzbing/dsh-auth-gateway](https://github.com/xbzbing/dsh-auth-gateway) · [npm](https://www.npmjs.com/package/dsh-password-gate) | Password login gateway plugin for dsh web: auto-generated initial password with forced onboarding, login, password change with real request interception, and OTP two-factor authentication. | 0.1.0-rc.6 (2026-08-18) |
| dsh-auto | 4 | [simon300000/dsh-auto](https://github.com/simon300000/dsh-auto) · [npm](https://www.npmjs.com/package/dsh-auto) | Model-reviewed Auto Approve permission preset for the DeepSeek Harness Web UI. | 0.1.0-rc.6 (2026-08-17) |
| dsh-auto-approval-andy8647 | 4 | [Andy8647/dsh-auto-approval](https://github.com/Andy8647/dsh-auto-approval/tree/HEAD/packages/dsh-auto-approval) | Automated tool-call approval for DeepSeek Harness: an `auto` tier for approval policy that classifies each tool call as allow / deny before dispatch | 0.1.0-rc.6 (2026-08-17) |
| dsh-boot-guard | 4 | [SaiSenBox/dsh-boot-guard](https://github.com/SaiSenBox/dsh-boot-guard) · [npm](https://www.npmjs.com/package/dsh-boot-guard) | A loader-independent rescue console for DeepSeek Harness when a broken plugin prevents the Web UI from starting. | 0.1.0-rc.6 (2026-08-17) |
| dsh-doctor-coppynig | 4 | [coppynight/dsh-doctor](https://github.com/coppynight/dsh-doctor/tree/HEAD/.dsh-plugin) | flutter-doctor style diagnose-and-repair for DeepSeek Harness: install-level + in-harness checks, safe fixes | 0.1.0-rc.6 (2026-08-17) |

<sub>Showing the 25 most-starred of 225. **[all 225 →](lists/safety-approvals.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Plugin managers & stores

In-UI stores, installers, skill managers.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-market | 1198 | [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | Visual plugin market inside DeepSeek Harness — browse, search, and one-click install community plugins. · DSH 可视化插件市场：逛一逛，点一下，装好。 | 0.1.0-rc.6 (2026-08-17) |
| agentrq | 1081 | [agentrq/agentrq](https://github.com/agentrq/agentrq/tree/HEAD/plugins/deepseek-harness) | AgentRQ task manager for DeepSeek Harness: create, manage, and auto-pull AgentRQ tasks without leaving the harness | 0.1.0-rc.6 (2026-08-17) |
| awesome-deepseek-harness | 159 | [Dominic789654/awesome-deepseek-harness](https://github.com/Dominic789654/awesome-deepseek-harness/tree/HEAD/plugins/dsh-code-review) | Code review assistant for DeepSeek Harness: code_review_context collects deterministic git diff context; a bundled skill drives the review checklist. | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-marketplace | 124 | [bradeGithub/DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) · [npm](https://www.npmjs.com/package/dsh-plugin-marketplace) | Web GUI plugin marketplace: browse, install, and update GitHub topic dsh-plugin packages from inside DeepSeek Harness. | 0.1.0-rc.6 (2026-08-17) |
| awesome-deepseek-harness-plugins | 110 | [imsai-sh/awesome-deepseek-harness-plugins](https://github.com/imsai-sh/awesome-deepseek-harness-plugins/tree/HEAD/packages/dsh-1024store) | The 1024 Store plugin market inside DeepSeek Harness. | unverified |
| dsh-webui-market-plugin | 90 | [Sanqi-normal/dsh-webui-market-plugin](https://github.com/Sanqi-normal/dsh-webui-market-plugin) · [npm](https://www.npmjs.com/package/@sanqi-normal/dsh-webui-market-plugin) | In-harness community plugin market for the dsh web GUI: browse, install, and uninstall into a profile. | 0.1.0-rc.6 (2026-08-17) |
| dsh-skill-mcp-panel | 75 | [Fishquito7/dsh-skill-mcp-panel](https://github.com/Fishquito7/dsh-skill-mcp-panel) | dsh-skill-mcp-panel: manage skills and MCP servers from the DSH web settings UI plus the unified dsh-panel CLI. | 0.1.0-rc.6 (2026-08-18) |
| zat-dsh-engine | 73 | [mishibeikejie/zat-dsh-engine](https://github.com/mishibeikejie/zat-dsh-engine) · [npm](https://www.npmjs.com/package/zat-dsh-engine) | Visual plugin marketplace for DeepSeek Harness: browse, search, install, update, and uninstall community plugins. | 0.1.0-rc.6 (2026-08-17) |
| ru-marketplace-mcp | 65 | [Vladimir-Human/ru-marketplace-mcp](https://github.com/Vladimir-Human/ru-marketplace-mcp/tree/HEAD/dsh) | Девять российских маркетплейсов и китайский Taobao как MCP-серверы: Wildberries, Ozon, Яндекс Маркет, Детский мир, Авито, Мегамаркет, Lamoda, DNS, Ситилинк. Плюс сравнение цен по всем сразу. Только чт | 0.1.0-rc.6 (2026-08-17) |
| dsh-find-plugin | 61 | [awesome-dsh-plugin/dsh-find-plugin](https://github.com/awesome-dsh-plugin/dsh-find-plugin) · [npm](https://www.npmjs.com/package/dsh-find-plugin) | Find DeepSeek Harness plugins from inside the agent via live GitHub dsh-plugin topic search, ranked by stars. | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-hub | 60 | [Noob-stupid/dsh-plugin-hub](https://github.com/Noob-stupid/dsh-plugin-hub) | 插件控制台：一键启用/停用插件，浏览并安装 GitHub dsh-plugin 插件 | 0.1.0-rc.6 (2026-08-17) |
| dsh-web-plugin-manager | 59 | [LX2000WASD/dsh-web-plugin-manager](https://github.com/LX2000WASD/dsh-web-plugin-manager) | Manage DeepSeek Harness (DSH) plugins from the Web UI: list, enable/disable, install/remove, environments, and a GitHub-awesome-driven marketplace. | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugins-store | 58 | [ZASENJC/dsh-plugins-store](https://github.com/ZASENJC/dsh-plugins-store) | 自动分类、收录和验证 GitHub dsh-plugin Topic 项目的静态 DSH 插件市场。 A static DSH plugin marketplace that automatically categorizes, curates, and verifies GitHub dsh-plugin Topic projects. | 0.1.0-rc.6 (2026-08-17) |
| plugin-registry | 57 | [vlln/plugin-registry](https://github.com/vlln/plugin-registry/tree/HEAD/packages/plugin/console) | 薄控制台：浏览器 UI 管理 web profile 插件安装态（bundle 层栈 + cordis.patch.yml insert 行/disabled），0 patch | 0.1.0-rc.6 (2026-08-17) |
| dsh-market-2binglin | 28 | [2BingLing/dsh-market](https://github.com/2BingLing/dsh-market/tree/HEAD/plugin/ui) | DSH Market 插件端：cordis 侧边栏插件（浏览/搜索/猜你喜欢/一键安装/已装管理），核心逻辑来自 @dsh-market/core | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-marketplace-awesomehou | 27 | [AwesomeHou/dsh-plugin-marketplace](https://github.com/AwesomeHou/dsh-plugin-marketplace) | 实时同步 GitHub dsh-plugin topic 的插件市场：Host 定时抓取并缓存，Web 设置页展示可搜索的插件列表。 | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-workshop | 25 | [yyyyukari/dsh-plugin-workshop](https://github.com/yyyyukari/dsh-plugin-workshop) · [npm](https://www.npmjs.com/package/@dsh-external/dsh-plugin-workshop) | Steam Workshop-style plugin browser for the DeepSeek Harness Web UI. | 0.1.0-rc.6 (2026-08-17) |
| deepseek-plugin-store | 23 | [Ericwong5021/deepseek-plugin-store](https://github.com/Ericwong5021/deepseek-plugin-store) | DeepSeek 插件商店开源数据源 · Open source data source for the DeepSeek Plugin Store | 0.1.0-rc.6 (2026-08-17) |
| dsh-recommend | 18 | [zp-home/dsh-recommend](https://github.com/zp-home/dsh-recommend) | DSH 插件透明排行与推荐：每日自动抓取 dsh-plugin 话题生态 + 公开评分模型 + rank/recommend/search 工具 + 设置页排行标签 | 0.1.0-rc.6 (2026-08-17) |
| dsh-quant | 16 | [pengpengyi92/dsh-quant](https://github.com/pengpengyi92/dsh-quant) | dsh plugin: quantitative tools for agents — market data (Binance public API), technical indicators (SMA/EMA/RSI/MACD/Bollinger/ATR) and MA-crossover backtest, with structured canonical outputs | 0.1.0-rc.6 (2026-08-17) |
| dsh-stock-market | 16 | [AnacondaKC/dsh-stock-market](https://github.com/AnacondaKC/dsh-stock-market) | DSH Shanghai and Shenzhen A-share market plugin | 0.1.0-rc.6 (2026-08-17) |
| dsh-skill-cocosgt | 12 | [CocoSgt/dsh-skills](https://github.com/CocoSgt/dsh-skills) · [npm](https://www.npmjs.com/package/dsh-skills) | Skill management for DeepSeek Harness: install, list, and route SKILL.md units from the web UI, built on the dsh typert protocol. | 0.1.0-rc.6 (2026-08-17) |
| dsh-hub-plugin | 11 | [sliverp/dsh-hub-plugin](https://github.com/sliverp/dsh-hub-plugin) | The native DSH plugin marketplace backed by dsh-hub.cc | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-manager-liqichen | 11 | [liqichen/dsh-plugin-manager](https://github.com/liqichen/dsh-plugin-manager) | GUI in the DSH settings panel: toggle/delete MCP servers, browse and trash skills, list built-in plugin packages — hot-applied without restart. | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-marketplace-w2112515 | 11 | [w2112515/dsh-plugin-marketplace](https://github.com/w2112515/dsh-plugin-marketplace) | Out-of-tree installable plugin marketplace bundle for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |

<sub>Showing the 25 most-starred of 277. **[all 277 →](lists/plugin-managers-stores.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Developer tools

Building, testing, and publishing plugins.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| superpowers-dsh | 63 | [LayneChai/superpowers-dsh](https://github.com/LayneChai/superpowers-dsh) | TDD, debugging, planning, and collaboration skills for DeepSeek Harness, adapted from obra/superpowers. | 0.1.0-rc.6 (2026-08-17) |
| dsh-tianshu-build | 32 | [huiliyi37/oh-my-tianshu](https://github.com/huiliyi37/oh-my-tianshu/tree/HEAD/packages/bundle/base) | The shared dsh core as a profile bundle: every profile's first patch layer, inserting the base plugin rows over the empty profile root | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-check | 24 | [omdsh-dev/dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) | DSH plugin health checker: scan plugin repos for manifest protocol / patch format / build pitfalls / hub registration, zero-dependency read-only diagnostics | 0.1.0-rc.6 (2026-08-17) |
| dsh-user-experience | 19 | [DietCokewithSugar/dsh-user-experience](https://github.com/DietCokewithSugar/dsh-user-experience) | DeepSeek Harness UX walkthrough plugin: persona-driven source-code UX review for React (TypeScript/JavaScript) and Vue 3 projects, with change-triggered automatic walkthroughs | 0.1.0-rc.6 (2026-08-17) |
| webdsh | 16 | [futrime/webdsh](https://github.com/futrime/webdsh) | Pure-static, browser-only build of DeepSeek Harness (dsh web) — no server, deployable to GitHub Pages | 0.1.0-rc.6 (2026-08-18) |
| dsh-plugin-healthcheck | 12 | [chenw2759-wq/dsh-plugin-healthcheck](https://github.com/chenw2759-wq/dsh-plugin-healthcheck) | DSH 插件健康检查：设置面板内的「插件检测」向导 — L0 静态检查（files 白名单/依赖声明/高危副本/依赖可解析/Windows 命令/lockfile 一致性）+ L1 配置组合检查 + L2 隔离试跑（子进程 boot 全树），发现即自动回滚（写 home patch 前弹确认），复杂问题打包预制提示词交给 agent 修复。铁律：只修改插件代码与配置层，严禁修改 harness. | 0.1.0-rc.6 (2026-08-17) |
| plugin-template | 11 | [omdsh-dev/plugin-template](https://github.com/omdsh-dev/plugin-template) | Standalone Cordis plugin template for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |
| dsh-grok-tui | 10 | [chen-001/dsh-grok-tui](https://github.com/chen-001/dsh-grok-tui) | Use dsh via grok-build's TUI. | 0.1.0-rc.6 (2026-08-17) |
| deepseek-harness-desktop-baiyuscc | 7 | [baiyuscc13724-max/deepseek-harness-desktop](https://github.com/baiyuscc13724-max/deepseek-harness-desktop) | Open-source Windows desktop shell for the official DeepSeek Harness Web UI with automatic local runtime startup, packaged self-test, and release gates. | 0.1.0-rc.6 (2026-08-17) |
| dsh-director-toolkit | 7 | [lhmd/dsh-director-toolkit](https://github.com/lhmd/dsh-director-toolkit) | DeepSeek Harness plugin that turns a 3D idea into a shootable scene brief and publish-ready showcase copy. | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-template-sunshine | 6 | [sunshine-lang/dsh-plugin-template](https://github.com/sunshine-lang/dsh-plugin-template) | {{DESCRIPTION}} | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugins-horizon2 | 6 | [Horizon215/dsh-plugins](https://github.com/Horizon215/dsh-plugins/tree/HEAD/packages/prompt-templates) | Prompt template library for the DeepSeek Harness web UI: save reusable prompts, insert or insert-and-send them from a composer button | 0.1.0-rc.6 (2026-08-18) |
| dsh-eval-harness | 5 | [BiBoyang/dsh-eval-harness](https://github.com/BiBoyang/dsh-eval-harness) · [npm](https://www.npmjs.com/package/dsh-eval-harness) | DSH 插件回归评测门禁：yaml 用例 + headless 驱动 + trace 断言 + baseline 门禁（eval_run / eval_gate） | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-template | 5 | [bugmaker2/dsh-plugin-template](https://github.com/bugmaker2/dsh-plugin-template) | Minimal Hello World plugin template for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-17) |
| gongwen-skill | 5 | [linhut/gongwen-skill](https://github.com/linhut/gongwen-skill) | 中文公文全流程处理工具 - GB/T 9704 格式检查/修复/内容优化/模板生成/版式注入 | 0.1.0-rc.6 (2026-08-17) |
| Succinix | 5 | [CJackHwang/Succinix](https://github.com/CJackHwang/Succinix) | POC: Lifo (Unix-in-TypeScript) running inside WebContainer, sharing the container filesystem via node:fs mount. | 0.1.0-rc.6 (2026-08-18) |
| tencentcloud-agentobs-sdk-dsh | 5 | [TencentCloud/tencentcloud-agentobs-sdk-dsh](https://github.com/TencentCloud/tencentcloud-agentobs-sdk-dsh) | Tencent Cloud Service CLS observability plugin for DeepSeek Harness — direct upload to Tencent Cloud CLS | 0.1.0-rc.6 (2026-08-18) |
| dsh-doublecheck | 4 | [PerryLink/dsh-doublecheck](https://github.com/PerryLink/dsh-doublecheck) | Double-check before you ship: grill the requirements, test the implementation, prove the delivery. | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-doctor-zoahdev | 4 | [zoahdev/dsh-plugin-doctor](https://github.com/zoahdev/dsh-plugin-doctor) | Health checks for DeepSeek Harness: plugin manifest/patch/entry/build/pack/install verification, model-callable plugin_check, profile host-shadowing detection, and environment diagnostics | 0.1.0-rc.6 (2026-08-17) |
| dsh-devquest | 3 | [lucky8197/dsh-devquest](https://github.com/lucky8197/dsh-devquest) | 把开发变成 RPG：回合/工具/todo 积累 XP、成就徽章、等级与赛季。事件流驱动，纯函数计分。 | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-doctor-whitesan | 3 | [white-sand-grand/dsh-plugin-doctor](https://github.com/white-sand-grand/dsh-plugin-doctor) | DSH plugin doctor: community search, similarity analysis, and install/dedupe/build-it-yourself decisions for the dsh-plugin ecosystem. | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-publisher | 3 | [akira399/dsh-plugin-publisher](https://github.com/akira399/dsh-plugin-publisher) | DSH plugin development & GitHub publishing workflow plugin for DeepSeek Harness (DSH). Host: registers the `dsh-plugin-publishing` skill (enabled by default, opt-out), and bridges a GUI-entered. | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-release | 3 | [LeslieWylie/dsh-plugin-release](https://github.com/LeslieWylie/dsh-plugin-release) | Portable package contract, release checklist, and installation hygiene skills for DeepSeek Harness plugins. | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-template-kun25cod | 3 | [kun2-5code/dsh-plugin-template](https://github.com/kun2-5code/dsh-plugin-template) | A starter template for DeepSeek Harness (dsh) plugins: GUI-editable config, tools, events, services, hooks, and a browser client half in one installable bundle. | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-visual-composer | 3 | [VanillaCreamer/dsh-plugin-visual-composer](https://github.com/VanillaCreamer/dsh-plugin-visual-composer) · [npm](https://www.npmjs.com/package/dsh-plugin-visual-composer) | Visual Cordis plugin-tree composer for the DeepSeek Harness Web UI. | 0.1.0-rc.6 (2026-08-17) |

<sub>Showing the 25 most-starred of 92. **[all 92 →](lists/developer-tools.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Knowledge & research

Research workbenches, RAG, learning modes.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| de-anthropocentric-research-engine | 376 | [yogsoth-ai/de-anthropocentric-research-engine](https://github.com/yogsoth-ai/de-anthropocentric-research-engine/tree/HEAD/dsh-plugin) | DeepSeek Harness plugin for the De-Anthropocentric Research Engine: 920 research skills, with an opt-in MCP server fleet | 0.1.0-rc.6 (2026-08-17) |
| SpecFusion | 53 | [wxkingstar/SpecFusion](https://github.com/wxkingstar/SpecFusion/tree/HEAD/dsh-plugin) | SpecFusion skill + native API-docs search tools for DeepSeek Harness: 65,000+ API docs across 20 Chinese open platforms | 0.1.0-rc.6 (2026-08-17) |
| hn-cli | 51 | [heartleo/hn-cli](https://github.com/heartleo/hn-cli/tree/HEAD/plugins/hacker-news) | Hacker News tools for DeepSeek Harness: front-page feeds, item comment trees, Algolia search, user profiles. | 0.1.0-rc.6 (2026-08-18) |
| dsh-reverse-skill | 41 | [dhicoc/dsh-reverse-skill](https://github.com/dhicoc/dsh-reverse-skill) · [npm](https://www.npmjs.com/package/@reverse-skill/dsh-reverse-skill) | Reverse-engineering skill pack as a Cordis plugin: 85 SKILL.md units for authorized security research. | 0.1.0-rc.6 (2026-08-17) |
| dsh-web-search-pro | 26 | [anweat/dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) | Enhanced, persistent web search plugin for DeepSeek Harness — multi-engine routing (DeepSeek/Exa/DDG/Bing/Jina + GitHub/B站/YouTube/V2EX/小红书/Twitter/Reddit/RSS), SQLite+LRU cache, userscript-style | 0.1.0-rc.6 (2026-08-17) |
| dsh-scholar | 24 | [lzszq/dsh-scholar](https://github.com/lzszq/dsh-scholar) | DSH Research OS — a fully automated scientific research plugin for DSH (DeepSeek Harness): survey, idea, experiment contract, durable runner jobs, claim-evidence ledger, manuscript and release bundle. | 0.1.0-rc.6 (2026-08-17) |
| dsh-science | 21 | [biociao/dsh-science](https://github.com/biociao/dsh-science) | Claude Science-style research workbench for DeepSeek Harness: ReAct research-loop engine (research_* tools), versioned artifacts with provenance (artifact_* tools), and 10 science skills for. | 0.1.0-rc.6 (2026-08-17) |
| dsh-deep-research | 17 | [omdsh-dev/dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research) | Deep Research orchestrator extension for DeepSeek Harness: an adaptive cybernetics/information-theory deep_research tool on the official workflow engine, reusing built-in web_search/web_fetch. | 0.1.0-rc.6 (2026-08-17) |
| dsh-robotic-harness | 17 | [dingkaihu63/dsh-robotic-harness](https://github.com/dingkaihu63/dsh-robotic-harness) | Robotic Harness — an embodied-intelligence research plugin suite for DeepSeek Harness (demo) | 0.1.0-rc.6 (2026-08-17) |
| dsh-design-skills | 14 | [zhaiyateng/dsh-design-skills](https://github.com/zhaiyateng/dsh-design-skills) · [npm](https://www.npmjs.com/package/dsh-design-skills) | Design aesthetics skill pack for DeepSeek Harness (DSH): 6 styles — dark SaaS, minimal white, neumorphism, brutalism, glassmorphism, Japanese minimal — with runnable landing-page demos. Keeps vibe-... | 0.1.0-rc.6 (2026-08-17) |
| project-blueprint | 13 | [shuguang1994/project-blueprint](https://github.com/shuguang1994/project-blueprint) | DSH (DeepSeek Harness) plugin packaging of the Project Blueprint skill — one-command AI coding conventions (AGENTS.md, docs skeleton, CI/CD, git rules, testing policy) with an autonomous discovery | 0.1.0-rc.6 (2026-08-17) |
| dsh-md-notes | 12 | [XieZongChen/dsh-md-notes](https://github.com/XieZongChen/dsh-md-notes) | MD 笔记插件：侧边栏笔记管理入口（列表/编辑/预览）+ 回答下方记入笔记，笔记存于工作区 .dsh-notes/ | 0.1.0-rc.6 (2026-08-17) |
| dsh-search-boost | 12 | [Mr-remon219/dsh-search-boost](https://github.com/Mr-remon219/dsh-search-boost) | Multi-engine fused web search, page fetch, real-time X (Twitter) search with credential-free fallback, deep research and parallel multi-agent research for DeepSeek Harness. Free-by-default engine | 0.1.0-rc.6 (2026-08-17) |
| dsh-explain | 11 | [yuezengwu/dsh-explain](https://github.com/yuezengwu/dsh-explain) | Local-first learning-mode plugin with a global learning thread, per-source explanations, and a diagnostics settings UI. | 0.1.0-rc.6 (2026-08-17) |
| dsh-search-mcp | 11 | [gxpppp/dsh-search-mcp](https://github.com/gxpppp/dsh-search-mcp) | Replace dsh's built-in web search with search MCP servers (Tavily / Brave / Exa / Perplexity / DuckDuckGo / custom), configured from the web Settings page. When this plugin is enabled the built-in | 0.1.0-rc.6 (2026-08-17) |
| dsh-ai4scholar | 10 | [literaf/dsh-ai4scholar](https://github.com/literaf/dsh-ai4scholar) | AI4Scholar for DeepSeek Harness (dsh): 38 native academic tools — Semantic Scholar, PubMed, Google Scholar, arXiv, bioRxiv/medRxiv, DOI resolution, PDF full text, auto-cite, scientific figures | 0.1.0-rc.6 (2026-08-17) |
| dsh-directorx | 10 | [LaplaceYoung/dsh-directorx](https://github.com/LaplaceYoung/dsh-directorx) | DirectorX：给 DeepSeek Harness 装上 AI 视频导演能力——视频生成、智能剪辑、成片质检、无限画布分镜与 350+ 导演知识库。AI video director plugin for DeepSeek Harness: text-to-video, smart editing, QC, storyboard canvas. | 0.1.0-rc.6 (2026-08-17) |
| dsh-docs | 10 | [Sqhao-O/dsh-docs](https://github.com/Sqhao-O/dsh-docs) · [npm](https://www.npmjs.com/package/dsh-docling) | Local PDF, Office, image, and OCR document intelligence for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-17) |
| dsh-sticky-note | 10 | [Meredith2328/dsh-sticky-note](https://github.com/Meredith2328/dsh-sticky-note) | 左下角便签：随手记点子/感想/TODO，实时保存到归档目录，清单+悬浮归档 | 0.1.0-rc.6 (2026-08-17) |
| dsh-deepresearch | 8 | [havingautism/dsh-deepresearch](https://github.com/havingautism/dsh-deepresearch) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-deepresearch) | Independent evidence-first research workflow with durable state and its own Web view | 0.1.0-rc.6 (2026-08-17) |
| dsh-evoresearch | 8 | [Karbo123/DSH-EvoResearch](https://github.com/Karbo123/DSH-EvoResearch/tree/HEAD/packages/evoresearch-plugin) · [npm](https://www.npmjs.com/package/@evoresearch/dsh-plugin) | Self-evolving research workflow for DeepSeek Harness: project workspaces, research memory, multi-agent teams, and a custom workbench. | 0.1.0-rc.6 (2026-08-17) |
| snapgrep | 8 | [Owen718/snapgrep](https://github.com/Owen718/snapgrep) | An in-process trigram index that makes code search in Pi and DeepSeek Harness 20-90x faster than ripgrep, with identical results. | 0.1.0-rc.6 (2026-08-17) |
| dsh-science-workbench | 7 | [poplarity/dsh-science-workbench](https://github.com/poplarity/dsh-science-workbench) · [npm](https://www.npmjs.com/package/dsh-science-workbench) | Reproducible science workbench: agent-driven cells, inline figures, provenance, and environment snapshots. | 0.1.0-rc.6 (2026-08-17) |
| dsh-zotero-vncntvx | 7 | [Vncntvx/dsh-zotero](https://github.com/Vncntvx/dsh-zotero) | Let agents search, read, and cite your local Zotero library: find papers, browse notes and annotations, pull evidence by question, open the source document, generate citations. | 0.1.0-rc.6 (2026-08-17) |
| querit-plugins | 7 | [querit-ai/querit-plugins](https://github.com/querit-ai/querit-plugins/tree/HEAD/dsh-querit) | Querit-backed search and fetch providers for the DeepSeek Harness web capability seam (ctx.web) | 0.1.0-rc.6 (2026-08-17) |

<sub>Showing the 25 most-starred of 207. **[all 207 →](lists/knowledge-research.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Fun

Games, pets, memes, ambience. The reef has coral.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-ads | 510 | [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) | Satirical 2005-portal fake-ad plugin for the web UI (sidebar ads, in-conversation feed, corner popups); ad slots also surface real dsh-plugin topic repos | 0.1.0-rc.6 (2026-08-17) |
| DSH-Transparent-UI-Plugin | 318 | [WYH66666666/DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin) | Aqua: a highly customizable glassmorphism theme for the Web surface — adjustable blur, frost, fluid or wallpaper backdrop, unified corners, and motion | 0.1.0-rc.6 (2026-08-17) |
| whale-girl ⭐ | 246 | [vlln/whale-girl](https://github.com/vlln/whale-girl) | Desktop-pet companion for the web GUI (QQ-pet style): draggable, feedable, levels up with session activity; migrated from the removed .dsh-plugin format to dsh.bundle | 0.1.0-rc.6 (2026-08-17) |
| dsh-pet | 194 | [PC2005-cloud/dsh-pet](https://github.com/PC2005-cloud/dsh-pet/tree/HEAD/dsh-pet) | A floating desktop pet for the DeepSeek Harness Web UI: idle breathing, occasional direction turns, random actions, and screen wandering. | 0.1.0-rc.6 (2026-08-17) |
| gal-view | 104 | [Ayase34/gal-view](https://github.com/Ayase34/gal-view) | DSH Web GUI 会话页的 GAL 视窗：Galgame 风格对话视图 + 场景元素可视化编辑器 | 0.1.0-rc.6 (2026-08-17) |
| deepseek-pet | 33 | [keleus/deepseek-pet](https://github.com/keleus/deepseek-pet) | DeepSeek Pet plugin: an interactive, state-aware companion embedded in DeepSeek Harness Web | 0.1.0-rc.6 (2026-08-17) |
| dsh-emoji | 30 | [hellodigua/dsh-emoji](https://github.com/hellodigua/dsh-emoji) | Tiny semantic inline emoji for DSH Agent responses | 0.1.0-rc.6 (2026-08-17) |
| dsh-ui-whale | 29 | [lhh010/dsh-ui-whale](https://github.com/lhh010/dsh-ui-whale) | DSH Web UI 像素鲸鱼伙伴插件：会话标题栏常驻，平时眨眼/偶尔摆尾/动胸鳍，思考运行时持续动起来，回合完成头顶喷水，点击冒爱心，零核心改动。 | 0.1.0-rc.6 (2026-08-17) |
| dsh-minigames-lhh010 | 23 | [lhh010/dsh-minigames](https://github.com/lhh010/dsh-minigames) | DSH Web UI 右侧小游戏面板：18 款离线小游戏，可扩展游戏注册表。等待模型回复或修 bug 时的摸鱼神器。 | 0.1.0-rc.6 (2026-08-17) |
| dsh-whale-musume | 23 | [Sutera-Diffusus/dsh-whale-musume](https://github.com/Sutera-Diffusus/dsh-whale-musume) | A whale-girl Kanban Musume mascot for DeepSeek Harness | 0.1.0-rc.6 (2026-08-18) |
| dsh-pet-remielle | 21 | [Gin-7/dsh-pet-remielle](https://github.com/Gin-7/dsh-pet-remielle) | Hot-pluggable Remielle (蕾米埃尔) sticker pet for the dsh web GUI: a transparent floating companion from Zenless Zone Zero that switches animated GIF moods with the harness work state | 0.1.0-rc.6 (2026-08-17) |
| dsh-portable-tavern | 18 | [XCNXNXNX/dsh-portable-tavern](https://github.com/XCNXNXNX/dsh-portable-tavern) · [npm](https://www.npmjs.com/package/dsh-portable-tavern) | Portable Tavern for the DeepSeek Harness web GUI: an RPG-style SillyTavern V2/V3 character-card generator plus tavern roleplay chat, with world-book generation and JSON/PNG import-export. | 0.1.0-rc.6 (2026-08-17) |
| dsh-lorebookmd | 15 | [609476965/dsh-LorebookMD](https://github.com/609476965/dsh-LorebookMD) | DSH lorebook-driven fiction writer: import Tavern/SillyTavern character cards & world books, save local Markdown settings, and generate novel prose referencing the world settings. | 0.1.0-rc.6 (2026-08-17) |
| dsh-gomoku | 14 | [omdsh-dev/dsh-gomoku](https://github.com/omdsh-dev/dsh-gomoku) | Gomoku (five-in-a-row) for the dsh web GUI: AI move routes, model catalog, and default prompt (node half) plus the conversation-view tab with the board (browser half) | 0.1.0-rc.6 (2026-08-17) |
| dsh-galgame | 12 | [Lanxing6480/dsh-galgame](https://github.com/Lanxing6480/dsh-galgame) | GalGame mode for the dsh web GUI: a third conversation view tab (after 轨迹) that renders the real agent session as a visual-novel stage — whale-girl (DeepSeek) portrait with diff switching + draggable | 0.1.0-rc.6 (2026-08-17) |
| dsh-liquid-glass | 11 | [xingyingyuzhui/dsh-liquid-glass](https://github.com/xingyingyuzhui/dsh-liquid-glass) | Wallpaper plus an optional Liquid Glass overlay for DeepSeek Harness. Sits on official light / dark / system. 官方浅色/深色/跟随系统上的壁纸与液态玻璃叠加。 | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-anti-ads | 10 | [HuanLinOTO/dsh-plugin-anti-ads](https://github.com/HuanLinOTO/dsh-plugin-anti-ads) | DSH ad-suppression plugin: writes dsh-ads's own settings key to all-false, broadcasts its retire event, scrubs its portal from the DOM, and short-circuits its dynamic-tier fetch. Four layers, all. | 0.1.0-rc.6 (2026-08-17) |
| dsh-answer-pet | 9 | [Nanki-nn/dsh-answer-pet](https://github.com/Nanki-nn/dsh-answer-pet) | DeepSeek Harness Web 可扩展回答状态宠物框架：支持宠物主题、多会话进度、模型轨迹和工具调用。 | 0.1.0-rc.6 (2026-08-17) |
| dsh-godot-skill | 9 | [akira399/dsh-godot-skill](https://github.com/akira399/dsh-godot-skill) | Godot Engine 4.x full-stack game development skill for DeepSeek Harness (DSH). A host plugin that registers the `godot-4-development` skill — covering renderers, 2D/3D graphics & physics | 0.1.0-rc.6 (2026-08-17) |
| dsh-live2d-pets | 9 | [cyanfish-x/dsh-live2d-pets](https://github.com/cyanfish-x/dsh-live2d-pets) | Live2D pet plugin for DeepSeek Harness: load models from any external URL or local model path | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-auto-blame | 9 | [HuanLinOTO/dsh-plugin-auto-blame](https://github.com/HuanLinOTO/dsh-plugin-auto-blame) | Auto-blame: when a turn closes, asks an LLM for three cynical follow-up prompts and shows them as click-to-send bubbles above the composer. Host-gated master toggle in the settings page. | 0.1.0-rc.6 (2026-08-17) |
| whale-purse | 9 | [Suiwan/whale-purse](https://github.com/Suiwan/whale-purse) | 鲸鱼娘桌宠 · DeepSeek 余额 + 会话用量/花费监视，直接挂进 DSH Web profile 的组合层（cordis.patch.yml insert，热重载） | 0.1.0-rc.6 (2026-08-17) |
| dsh-ikun-pet | 8 | [eric-song-dev/dsh-ikun-pet](https://github.com/eric-song-dev/dsh-ikun-pet) | dsh-ikun-pet · ikun 桌宠 —— DeepSeek Harness 永久插件：在 DSH Deep diving 回答期间，用坤宠动图填满深潜状态行下方区块，进度 0%→100%，每 20% 切换动作与文案，完成时系统级播放提示音 | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-d399 | 8 | [HuanLinOTO/dsh-plugin-d399](https://github.com/HuanLinOTO/dsh-plugin-d399) | 贪玩蓝鲸 — 模型生成时右下角弹出小游戏菜单（wordle / 消消乐，可拓展游戏注册表） | 0.1.0-rc.6 (2026-08-17) |
| dsh-aemeath-pet | 7 | [culture-flask/dsh-aemeath-pet](https://github.com/culture-flask/dsh-aemeath-pet) | Aemeath desktop pet for the DeepSeek Harness web GUI: a pixel-art companion that idles, works, waits, and reacts alongside the agent. | 0.1.0-rc.6 (2026-08-17) |

<sub>Showing the 25 most-starred of 222. **[all 222 →](lists/fun.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Bundles

npm packages with a `dsh.bundle` manifest: composition layers a profile boots from.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-base (official) | 165344 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/bundle/base) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-base) | The shared dsh core as a profile bundle: every profile's first patch layer, inserting the base plugin rows over the empty profile root | 0.1.0-rc.5 (2026-08-13) |
| dsh-headless (official) | 165344 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/bundle/headless) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-headless) | The one-shot bundle: a direct core Agent/Session runner over dsh-base with no Host, HTTP, or browser layer | 0.1.0-rc.5 (2026-08-13) |
| dsh-web-app (official) | 165344 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/bundle/web-app) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-web-app) | The browser-surface bundle: the web patch layer over dsh-base plus the runtime glue plugin (frontend dist serving, web-surface prompt, URL line) | 0.1.0-rc.5 (2026-08-13) |
| dsh-tui-ccch1mneyyy | 2055 | [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) · [npm](https://www.npmjs.com/package/@deepseek-harness-tui/dsh-tui) | Claude Code-style interactive TUI front door for DeepSeek Harness agents, built on a ported Ink core. | 0.1.0-rc.6 (2026-08-17) |
| oh-dsh | 256 | [hust-open-atom-club/oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) | Community distribution bundling TUI, desktop, and web UI surfaces with layered installation, pinned to an exact harness revision via dsh-source.json | 0.1.0-rc.6 (2026-08-17) |
| dsh-super-injector | 123 | [yjh051108/dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) | Runtime injector for local DSH plugin packages with hot reload and a settings-page manager. | 0.1.0-rc.6 (2026-08-17) |
| dsh-im | 68 | [xmanrui/dsh-im](https://github.com/xmanrui/dsh-im) | QR-code IM channel plugin that connects Feishu, WeChat, and DingTalk bots to DeepSeek Harness. | 0.1.0-rc.6 (2026-08-17) |
| dsh-stock-watch | 54 | [Awu12277/dsh-stock-watch](https://github.com/Awu12277/dsh-stock-watch) | Collapsible A-share watchlist popup with live quotes, charts, and a target-price panel. | 0.1.0-rc.6 (2026-08-17) |
| dsh-code | 28 | [UNLINEARITY/dsh-code](https://github.com/UNLINEARITY/dsh-code) · [npm](https://www.npmjs.com/package/dsh-code) | Claude-Code-style interactive TUI bundle for DeepSeek Harness with a DeepSeek-blue whale banner and live session transcript. | 0.1.0-rc.6 (2026-08-17) |
| dsh-mneme | 27 | [modusensus/dsh-mneme](https://github.com/modusensus/dsh-mneme/tree/HEAD/dsh-mneme) | Cross-session memory with SQLite, Markdown mirrors, autoDream consolidation, and a web panel. | 0.1.0-rc.6 (2026-08-17) |
| dsh-toolkit | 23 | [omdsh-dev/dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit) | Zero-dependency toolkit collection: time, encoding, json, calculator, csv, regex, markdown, diff, stat, and schema in one entry. | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-marketplace-yelebai | 20 | [YELEBAI/dsh-plugin-marketplace](https://github.com/YELEBAI/dsh-plugin-marketplace) | A plugin marketplace for DeepSeek Harness with categories, trending discovery, install management, and controlled restart. | 0.1.0-rc.6 (2026-08-17) |
| dsh-fabric | 15 | [omdsh-dev/fabric](https://github.com/omdsh-dev/fabric) | Fabric/Mixin extension workspace: an installable profile bundle carrier over the cordis-fabric package trio. | 0.1.0-rc.6 (2026-08-17) |
| dsh-any-background | 12 | [Tkingxiao/dsh-any-background](https://github.com/Tkingxiao/dsh-any-background) | Custom wallpaper and theme-color controls for the DeepSeek Harness web UI, including opacity, blur, and a color wheel. | 0.1.0-rc.6 (2026-08-17) |
| dsh-harmony | 12 | [memorax-ai/dsh-harmony](https://github.com/memorax-ai/dsh-harmony) | Runtime library to patch, replace, and decorate DeepSeek Harness plugins with hot reload. | 0.1.0-rc.6 (2026-08-17) |
| dsh-desk | 11 | [majiayu000/dsh-desk](https://github.com/majiayu000/dsh-desk) | Tauri desktop companion for DeepSeek Harness: wraps official dsh 0.1.0-rc.6 in a system WebView with isolated DSH_HOME and a plugin-manager UI. | 0.1.0-rc.6 (2026-08-17) |
| dsh-image2-draw | 9 | [JuneLearn/dsh-image2-draw](https://github.com/JuneLearn/dsh-image2-draw) · [npm](https://www.npmjs.com/package/dsh-image2-draw) | Image2 (gpt-image-2) generation plugin for DeepSeek Harness with a Settings card for API key and endpoint. | 0.1.0-rc.6 (2026-08-17) |
| dsh-mermaid | 9 | [AKS1st/dsh-mermaid](https://github.com/AKS1st/dsh-mermaid) · [npm](https://www.npmjs.com/package/@dsh-external/dsh-mermaid) | Renders Mermaid code fences as SVG diagrams in DeepSeek Harness web conversations. | 0.1.0-rc.6 (2026-08-17) |
| dsh-bash-win | 8 | [zimzaza4/dsh-bash-win](https://github.com/zimzaza4/dsh-bash-win) · [npm](https://www.npmjs.com/package/@zimzaza4/dsh-bash-win) | Windows-first bash tools for DeepSeek Harness: Git Bash and WSL2 bash with bwrap sandbox, approval mode, and background jobs. | 0.1.0-rc.6 (2026-08-17) |
| dsh-codex-port | 8 | [STARDUSTLC666/dsh-codex-port](https://github.com/STARDUSTLC666/dsh-codex-port) · [npm](https://www.npmjs.com/package/dsh-codex-port) | One-command port of Codex plugins from ~/.codex into DeepSeek Harness skills, with frontmatter conversion. | 0.1.0-rc.6 (2026-08-17) |
| dsh-ui-preset-enhance | 7 | [lssyd20070106/dsh-ui-preset-enhance](https://github.com/lssyd20070106/dsh-ui-preset-enhance) · [npm](https://www.npmjs.com/package/dsh-ui-preset-enhance) | Web UI extras for custom backgrounds, theme colors, prompt presets, and manual context compaction. | 0.1.0-rc.6 (2026-08-17) |
| dsh-model-usage | 6 | [AKS1st/model-usage-plugin](https://github.com/AKS1st/model-usage-plugin) · [npm](https://www.npmjs.com/package/musage-stats) | Model token usage stats, cost estimates, and account balance for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-17) |
| dsh-obsidian-assistant | 6 | [iamzcr/dsh-obsidian-assistant](https://github.com/iamzcr/dsh-obsidian-assistant) · [npm](https://www.npmjs.com/package/dsh-obsidian-assistant) | Read, search, and edit a local Obsidian vault from DeepSeek Harness, with optional Local REST API integration. | 0.1.0-rc.6 (2026-08-17) |
| dsh-workmate | 6 | [halosb/dsh-workmate](https://github.com/halosb/dsh-workmate) · [npm](https://www.npmjs.com/package/dsh-workmate) | Task-completion toasts and webhooks plus a private local knowledge base with kb_search. | 0.1.0-rc.6 (2026-08-17) |
| pptfast | 6 | [liustack/pptfast](https://github.com/liustack/pptfast) · [npm](https://www.npmjs.com/package/@liustack/pptfast) | Stable editable PPTX generation for DeepSeek Harness agents: semantic IR in, native DrawingML out. | 0.1.0-rc.6 (2026-08-17) |

<sub>Showing the 25 most-starred of 83. **[all 83 →](lists/bundles.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Skills

Anthropic-format `SKILL.md` units; dsh discovers them from its skill roots (no nested discovery, kebab-case names only).

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| colleague-skill | 23512 | [titanwings/colleague-skill](https://github.com/titanwings/colleague-skill) | Digital-companion skill in the Anthropic SKILL.md format dsh reads; install by copying it into a dsh skill root such as .agents/skills | unverified |
| ex-skill | 1062 | [titanwings/ex-skill](https://github.com/titanwings/ex-skill) | Builds a digital persona skill of your ex from WeChat chat logs (create-ex); SKILL.md documents dsh discovery paths alongside other hosts | unverified |
| harmony-next | 331 | [linhay/harmony-next.skills](https://github.com/linhay/harmony-next.skills) | HarmonyOS NEXT development skill with offline ArkTS/ArkUI references and DevEco automation; copy harmony-next/ into a dsh skill root | 0.1.0-rc.6 (2026-08-17) |
| engramory | 161 | [tinqiao-oss/engramory](https://github.com/tinqiao-oss/engramory) | A portable memory protocol for AI agents — load it as standing rules; a curation discipline + reference spec + optional cap hook. | 0.1.0-rc.6 (2026-08-17) |
| find-plugins | 153 | [Nagi-ovo/dsh-find-plugins](https://github.com/Nagi-ovo/dsh-find-plugins) | Skill that discovers and installs dsh plugins from the GitHub dsh-plugin topic, verifying install method from repo manifests; copy skills/find-plugins into a skill root | unverified |
| argo | 104 | [taxueseek/argo](https://github.com/taxueseek/argo) | Agent-first multilingual search and evidence-verification skill routing 120+ engines with vertical sources and MCP entry points; SKILL.md at repo root | 0.1.0-rc.6 (2026-08-17) |
| mstar-harness | 51 | [btspoony/mstar-harness](https://github.com/btspoony/mstar-harness) | Morning Star skill-driven engineering workflow (roles, phase gates, plan conventions) shipped as twenty SKILL.md units; copy skills/* into a dsh skill root | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-development | 13 | [w2112515/dsh-plugin-development](https://github.com/w2112515/dsh-plugin-development) | Portable Agent Skill for developing and auditing DeepSeek Harness plugins, with an optional DSH bundle adapter. | 0.1.0-rc.6 (2026-08-17) |
| reSanity | 4 | [Thhoho/reSanity](https://github.com/Thhoho/reSanity) | reSanity 散修：散户研究心法 skill + DeepSeek Harness 插件（skill provider、锚体检定时提醒、/resanity-check 命令） | 0.1.0-rc.6 (2026-08-17) |
| riffkit | 4 | [riffkit/skill](https://github.com/riffkit/skill/tree/HEAD/riffkit) | Short-video skill in the SKILL.md format dsh reads: rebuilds a winning TikTok's formula into your own product video; copy riffkit/ into a skill root such as ~/.agents/skills | unverified |
| dsh-plugin-dev-skill | 3 | [green-dalii/dsh-plugin-dev-skill](https://github.com/green-dalii/dsh-plugin-dev-skill) | A skill pack that enables any agent to develop DeepSeek Harness (DSH) plugins correctly, efficiently, and in accordance with the official conventions. | unverified |
| free-vision-skill | 3 | [niyongsheng/free-vision-skill](https://github.com/niyongsheng/free-vision-skill) | DSH-Plugin for DeepSeek-Harness: fully-local image understanding & OCR powered by macOS Vision Framework | 0.1.0-rc.6 (2026-08-17) |
| dsh-plugin-audit | 2 | [wefio/dsh-plugin-audit](https://github.com/wefio/dsh-plugin-audit) | Community DeepSeek Harness plugin. | unverified |
| dsh-plugin-development-ray | 2 | [RayYeung1989/dsh-plugin-development](https://github.com/RayYeung1989/dsh-plugin-development) | 通用 dsh 插件开发 Skill：任何 agent 工具加载即会开发符合 DeepSeek Harness 的 dsh 插件 (Agent-tool-agnostic SKILL.md for developing DeepSeek Harness dsh plugins) | 0.1.0-rc.6 (2026-08-17) |
| dsh-wanghong-handwritten-ppt | 2 | [tjxj/dsh-wanghong-handwritten-ppt](https://github.com/tjxj/dsh-wanghong-handwritten-ppt) | Wang Hong-inspired Notability academic handwritten PPT skill for DeepSeek Harness | 0.1.0-rc.6 (2026-08-17) |
| agent-loop-workflow | 1 | [LeslieWylie/agent-loop-workflow](https://github.com/LeslieWylie/agent-loop-workflow) | 通用多 agent 协作工作流骨架：Loop Guard、handoff 格式、风险三档分流、交付顺序、review→收口协议 | 0.1.0-rc.6 (2026-08-17) |
| deepseek-vl-support | 1 | [limccn/deepseek-vl-support](https://github.com/limccn/deepseek-vl-support/tree/HEAD/skills/deepseek-vision) | Give DeepSeek (text-only) models vision in Claude Code, Codex, and Agent Plugins clients: describe images via any OpenAI-compatible vision endpoint. | 0.1.0-rc.6 (2026-08-18) |
| review-workflow | 1 | [LeslieWylie/review-workflow](https://github.com/LeslieWylie/review-workflow) | 通用多评委评审工作流：N 评委独立打分 + Chair 校准 + Critic 复核，带 6 步 6 checkpoint 流程控制 | 0.1.0-rc.6 (2026-08-17) |
| agents-skills | 0 | [Jensen-Yao/agents-skills](https://github.com/Jensen-Yao/agents-skills/tree/HEAD/skills/a-evolve) | 个人 Agent 技能库（SKILL.md）：140+ 技能，供 DeepSeek Harness / Claude Code 等 agent 使用 | 0.1.0-rc.6 (2026-08-17) |
| dsh-skills-alicep19 | 0 | [Alice-P197/dsh-skills](https://github.com/Alice-P197/dsh-skills/tree/HEAD/write-dsh-skill) | [Skill] DSH 技能（非插件，复制进 skills/ 自动加载）：add-llm-provider 接入第三方 LLM + write-dsh-skill 编写技能 | 0.1.0-rc.6 (2026-08-18) |
| fasthtml-desktop | 0 | [kuailexiaozixin/fasthtml-desktop](https://github.com/kuailexiaozixin/fasthtml-desktop) | FastHTML + pywebview 桌面应用全生命周期技能（本地 HTTP + WebView2 + PyInstaller） | 0.1.0-rc.6 (2026-08-17) |
| multi-skilled-repository | 0 | [High-cla/multi-skilled-repository](https://github.com/High-cla/multi-skilled-repository/tree/HEAD/skills/customize-dsh) | AI Agent Skills 合集 — CMD+PowerShell 避坑指南 · CLI 优先决策矩阵 · 更多技能持续添加 | 0.1.0-rc.6 (2026-08-17) |
| repo-cover | 0 | [sjh9714/repo-cover](https://github.com/sjh9714/repo-cover) | Agent designs a GitHub social-preview card as one self-contained 1280x640 HTML file; flat repo-cover.md skill, editorial mood inline, CJK-aware line breaking. | unverified |

### Themes

UI skins. The dedicated registry is [awesome-dsh-themes](https://github.com/dshworks/awesome-dsh-themes); only themes that also ship plugin machinery live here.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-deep-whale | 1443 | [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale/tree/HEAD/maid-atelier) | Whale-girl skin series for the web UI; maid-atelier ships as a dsh.bundle package installed from a local clone (CC BY-NC-SA, non-commercial) | 0.1.0-rc.6 (2026-08-17) |
| dsh-homepage-skin | 1 | [yushi-xxh/dsh-homepage-skin](https://github.com/yushi-xxh/dsh-homepage-skin) · [npm](https://www.npmjs.com/package/dsh-homepage-skin) | DeepSeek Harness homepage-style background skin: WebGL fluid, dot grid and digital whale. Dark and light variants included. | 0.1.0-rc.6 (2026-08-17) |

### Tools

Developer tooling around dsh.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| create-dsh-plugin | 42 | [whyihaveyou/dsh-suite](https://github.com/whyihaveyou/dsh-suite/tree/HEAD/packages/create-dsh-plugin) · [npm](https://www.npmjs.com/package/create-dsh-plugin) | Scaffold a DeepSeek Harness plugin in seconds: tool, events, and webui templates with next-tag version pinning and a built-in --verify smoke test. | unverified |
| oh-my-dsh-amplift | 7 | [amplifthq/oh-my-dsh](https://github.com/amplifthq/oh-my-dsh) | Plugins, sensible defaults, and a launcher for DeepSeek Harness (dsh) — everything you're missing, without forking upstream. | 0.1.0-rc.6 (2026-08-17) |
| dsh-forge | 4 | [zhn1100/dsh-forge](https://github.com/zhn1100/dsh-forge) · [npm](https://www.npmjs.com/package/dsh-forge) | Reproducible DeepSeek Harness plugin development profile with a cordis patch, CLI, and runtime-aware preset. | 0.1.0-rc.6 (2026-08-17) |

## Add your plugin

Open a PR against [`data/plugins.json`](data/plugins.json) only; the README is regenerated. See [CONTRIBUTING.md](CONTRIBUTING.md). The spam gate in short: a real install path (a `dsh.bundle` manifest, a published npm package, or a `SKILL.md` layout dsh discovers), not a renamed template fork, and it loads against the dsh version you claim. Pick one or two `tags` from the schema's list so your entry lands in the right area.

A scheduled workflow also sweeps every dsh discovery topic, npm, and GitHub code search; new finds queue in [`data/candidates.json`](data/candidates.json) on a single reused triage PR and never enter the registry without review. Rejected candidates are recorded with one-line reasons in [`data/rejected.json`](data/rejected.json). Rejections of judgment ("this is a curated list") are permanent; rejections of fact ("no install path on the day we looked") carry a `recheckAfter` date and are swept again once it passes, so shipping a manifest late is not a life sentence.

### Already listed?

Most entries here arrived by sweep, not by PR, so plenty of authors are in the registry without knowing it. Search this README, or:

```sh
curl -s https://dsh.works/awesome-dsh-plugins/plugins.json | jq '.plugins[] | select(.repo=="you/your-plugin")'
```

If the row is wrong — bad description, wrong tags, a version you have since moved past — the fix is a PR against the data file, and it is the fastest way to correct it.

If you want to say so in your own README, this badge is static — it points here and needs no upkeep:

```md
[![listed on dsh.works](https://img.shields.io/badge/listed_on-dsh.works-00c2e9?labelColor=0d0d0d)](https://dsh.works/awesome-dsh-plugins/)
```

It is a link, not a certification: it means your plugin is in an open-data registry that publishes its rejections too, and nothing more.

## Field notes

Verified dsh traps, skill discovery rules, and hook-bridge limits live in [howto-dsh](https://github.com/dshworks/howto-dsh).

## License

MIT. Not affiliated with DeepSeek; the harness README calls itself "an idea, an official showcase, and a source of inspiration", and the ecosystem belongs to the community.
