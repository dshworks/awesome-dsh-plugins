<!-- Rendered by scripts/render.mjs from data/plugins.json. Do not edit by hand: edit the data or the template, then run `npm run render`. -->

# awesome-dsh-plugins

[![powered by dsh](https://img.shields.io/badge/powered__by-dsh-4D6BFE?logo=deepseek)](https://github.com/deepseek-ai/deepseek-harness)
[![license: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![browse the reef](https://img.shields.io/badge/browse-the_reef-ff7a59)](https://dsh.works/awesome-dsh-plugins/)

A spam-filtered, open-data registry of [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`) plugins, bundles, and skills — 9,660 entries from 5,706 authors across 17 functional areas, every one carrying the file its install path was proven in and the dsh version it was checked against.

**[Browse the reef](https://dsh.works/awesome-dsh-plugins/)** — the same registry as a filterable, sortable gallery.

Most awesome lists are prose. This one is data: [`data/plugins.json`](data/plugins.json) is the source of truth, this README is rendered from it. Build on the JSON directly:

```sh
curl -s https://dsh.works/awesome-dsh-plugins/plugins.json                 # every entry
curl -s https://dsh.works/awesome-dsh-plugins/stats.json                   # just the counts, ~150 bytes
```

Each entry carries two orthogonal dimensions: `category` is the form factor (bundle, plugin, skill, theme, tool — what dsh docs call things) and `tags` is the functional area (what it actually does). `stars` is the linked repo's GitHub count (refreshed by `scripts/stars.mjs`, display signal only), and `featured` marks a hand-curated editor's pick.

## Why a filtered registry

DeepSeek delegates the ecosystem to the community: no first-party marketplace, discovery happens on the [`dsh-plugin`](https://github.com/topics/dsh-plugin) GitHub topic. On launch day that topic held 431 repositories. As of 2026-08-21 it holds 9,852, template spam and topic-riders included. A raw topic feed is not a registry; the filter is the value this repo adds.

How much filtering that is, measured on 2026-08-21: **11,011** repositories carry a dsh discovery topic and **10,377** of them — 94% — have been opened, read, and decided. 1,883 were rejected, **1,758** of those for having no install path at any depth: no `dsh` manifest in `package.json`, no dsh dependency, no `SKILL.md`. They carry the topic and nothing else. Every rejection is published with its reason and a recheck date in [`data/rejected.json`](data/rejected.json).

That is the number worth comparing. A topic count says how many people typed a tag. **10,377 of 11,011** says how many repositories somebody actually opened.

On 2026-08-20 that percentage fell, and it fell because the denominator got honest. Until then "carries a dsh discovery topic" quietly meant "carries one of the five `dsh-*` topics we sweep", so every author who spelled the project out instead of abbreviating it was invisible to us while we published a coverage figure that read as though they were not there. Measured that day, in repositories carrying none of the original five: `topic:deepseek-harness` held 892, `topic:dsh` 163, `topic:deepseek-harness-plugin` 3 — **1,058 repositories, about 13% of the real universe, that a 99% claim had silently excluded.** All of them are swept now. The percentage a wider net produces is lower and means more; a coverage number you can raise by narrowing what you count is not a coverage number.

Search is still not the whole ecosystem. A plugin whose author tagged nothing, published nothing to npm, and used no conventional layout is unreachable by any query — `yjh051108/dsh-routing-suite` had 6,415 stars and zero topics the day it was seeded. [`data/seeds.json`](data/seeds.json) is the hand-fed lane for those, and it grants nothing: a seed queues at the back like every other find and still has to prove an install path. If that is your repo, open an issue.

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

### And why `npm` is checked the same way

`npm` is the only field in an entry that is an *instruction*: dsh.works renders it as `dsh plugin --profile web add <name>`, this README links it, and the spam gate accepts "a published npm package" as an install path. A reader can run it. So it gets the same treatment as `evidence`, and on 2026-08-21 it turned out not to have had it.

Of 582 names on that morning, **298 named a package registry.npmjs.org has never served** — every one written on 2026-08-14, by a pass that read `name` out of the repo's own `package.json`. That is the name an author *would* publish under, not evidence they did. On the site those 298 also *replaced* the git-install security warning with the sentence "Published to npm as", so the wrong ones were quieter than the missing ones.

Fixing that surfaced the worse half. The names that did resolve had been checked against npm's catalogue and not against ownership: `dsh-tool-git` resolves, so the field stayed — it resolves to `lxj808624/dsh-tool-git`, and it was sitting on `Huasfan/dsh-tool-git`. **26 pairs of entries claimed the same package as each other**, and in 25 of them the wrong claimant was the 2026-08-14 row. Following one installed a different author's code under the name of the repo you were reading about, which is a worse outcome than a 404.

A name is kept now only when the published package's own `repository.url` names the repo back, or — for the packages that state no repository at all — when the repo's `package.json` declares that exact name, so two independent files agree. `npm run npm-check` re-asks in both directions on a schedule; a name that stops resolving is parked in [`data/unpublished.json`](data/unpublished.json) with the reason, a parked name that starts resolving is restored, and a name that merely times out changes nothing. Re-adding a parked name by hand fails `validate`.

The same pass answered the opposite question. Reading every entry's manifest and asking npm about the name it declares **adopted 1,741 packages the registry had found but never claimed** — and refused 1,462 more whose name belongs to someone else, which is a third of everything it looked at.

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

- **[dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui)** — Plugin and skin collection for the dsh Web UI: task board, git graph, right-side panel, remote mobile UI, live token stats, and a skin center that routes around the theme-persistence gap <sub>5842 ★ · ui</sub>
- **[modlens](https://github.com/liustack/modlens)** — Vision plugin for text-only models: image understanding bridged into the harness via a dsh.bundle patch layer, shipping a modlens skill alongside <sub>3583 ★ · vision</sub>
- **[dsh-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar)** — Full sidebar workbench with file rendering/editing, terminal, Git, and subagents; third-party extensions can register new tabs <sub>2774 ★ · ui</sub>
- **[dsh-browser](https://github.com/Lum1104/dsh-browser)** — Chrome sidebar plugin that lets dsh operate the browser directly, without vision. <sub>418 ★ · capabilities</sub>
- **[whale-girl](https://github.com/vlln/whale-girl)** — Desktop-pet companion for the web GUI (QQ-pet style): draggable, feedable, levels up with session activity; migrated from the removed .dsh-plugin format to dsh.bundle <sub>278 ★ · fun</sub>
- **[dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon)** — Local-first three-tier memory for dsh: runtime memory, searchable documents, and supervised memory spaces. <sub>192 ★ · memory</sub>
- **[dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind)** — Rewind conversation and workspace state to a previous turn, backed by a persistent change ledger <sub>100 ★ · memory</sub>
- **[dsh-usage-stats](https://github.com/lanlandeli/dsh-usage-stats)** — Beautiful token analytics for DeepSeek Harness — trends, activity heatmaps, model breakdowns, and data exports. <sub>12 ★ · usage</sub>

## Plugins by area

9444 Cordis plugins activated through patch rows in a bundle or profile, grouped by what they do. Data updated 2026-08-24.

Each area shows its 25 most-starred entries and links to the complete list in [`lists/`](lists). GitHub stops rendering a markdown file partway through once it passes about half a megabyte — silently, mid-row — so the full tables live in files small enough to survive that. Nothing is dropped: [`data/plugins.json`](data/plugins.json) and the [gallery](https://dsh.works/awesome-dsh-plugins/) always hold everything.

### Web UI

Panels, composer upgrades, navigation, layout, mobile.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-web-ui ⭐ | 5842 | [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) | Plugin and skin collection for the dsh Web UI: task board, git graph, right-side panel, remote mobile UI, live token stats, and a skin center that routes around the theme-persistence gap | 0.1.0-rc.8 (2026-08-20) |
| dsh-better-sidebar ⭐ | 2774 | [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) · [npm](https://www.npmjs.com/package/dsh-better-sidebar) | Full sidebar workbench with file rendering/editing, terminal, Git, and subagents; third-party extensions can register new tabs | 0.1.0-rc.8 (2026-08-20) |
| mnemon | 516 | [mnemon-dev/mnemon](https://github.com/mnemon-dev/mnemon) | Install the full dsh-mnemon integration from the Mnemon repository. | 0.1.0-rc.8 (2026-08-20) |
| dsh-at-file | 465 | [FSMargoo/dsh-at-file](https://github.com/FSMargoo/dsh-at-file) | Codex-style @file mentions in the composer: search workspace files and attach their contents to prompts | 0.1.0-rc.8 (2026-08-20) |
| superdesign-skill | 442 | [superdesigndev/superdesign-skill](https://github.com/superdesigndev/superdesign-skill) | Design or redesign frontend UI and marketing graphics on the Superdesign infinite canvas — the Superdesign skill, packaged as a DeepSeek Harness bundle. | 0.1.0-rc.8 (2026-08-20) |
| dsh-genui | 321 | [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) | Renders interactive UI components inline in assistant replies via the dsh-ui fence: layout, charts, plots, forms, quizzes, mermaid, 3D scenes, and an action event loop back to the model. | 0.1.0-rc.8 (2026-08-20) |
| dsh-visualize | 208 | [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) | Generative UI in conversation: a visualize tool plus companion skill renders interactive HTML cards in sandboxed frames with streaming preview | 0.1.0-rc.8 (2026-08-20) |
| dsh-openpencil | 151 | [ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) · [npm](https://www.npmjs.com/package/@zseven-w/dsh-openpencil) | OpenPencil design preview and editing inside the web UI | 0.1.0-rc.8 (2026-08-20) |
| dsh-remote-web-gateway | 135 | [summer1238/dsh-remote-web-gateway](https://github.com/summer1238/dsh-remote-web-gateway/tree/HEAD/plugin) · [npm](https://www.npmjs.com/package/dsh-remote-web-gateway) | DSH Remote Web Gateway — DSH native plugin: one-click phone/tablet remote access to the DeepSeek Harness Web GUI via Cloudflare Quick Tunnel + QR pairing + device management + optional GitHub login | 0.1.0-rc.8 (2026-08-20) |
| dsh-annotation | 95 | [omdsh-dev/dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) | DSH Web selection-annotation plugin: select assistant text, annotate (optional), and press Enter to send the annotation block with your message — the model replies to each annotation by number,. | 0.1.0-rc.8 (2026-08-20) |
| dsh-popout-sidebar | 80 | [e2mcc/dsh-popout-sidebar](https://github.com/e2mcc/dsh-popout-sidebar) · [npm](https://www.npmjs.com/package/dsh-popout-sidebar) | 可弹出侧边栏 · A DeepSeek Harness sidebar that shows artifacts and pops out into a larger web tab. | 0.1.0-rc.8 (2026-08-20) |
| ProMentor | 66 | [Lyn-77/ProMentor](https://github.com/Lyn-77/ProMentor/tree/HEAD/dsh-plugin/src/client-ui-promentor) | ProMentor course dashboard in the Web GUI: composer-dock trigger plus a full-frame dashboard panel | unverified |
| dsh-open-in-vscode | 54 | [omdsh-dev/dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) | Open workspace directories in VS Code directly from the web GUI | 0.1.0-rc.8 (2026-08-20) |
| dsh-smooth-stream-laplaceb | 54 | [Laplace-bit/dsh-smooth-stream](https://github.com/Laplace-bit/dsh-smooth-stream) · [npm](https://www.npmjs.com/package/dsh-smooth-stream) | Smooth streaming reveal and conversation follow for the DeepSeek Harness Web UI | 0.1.0-rc.8 (2026-08-20) |
| dsh-web-mobile | 53 | [mexiaosqwq/dsh-web-mobile](https://github.com/mexiaosqwq/dsh-web-mobile) | Mobile-adaptive DSH web UI: on narrow screens the sidebar rail is hidden and the directory opens as an overlay drawer, so the conversation gets the full width. | 0.1.0-rc.8 (2026-08-20) |
| dsh-prompt-enhancer | 48 | [Fishsb/dsh-prompt-enhancer](https://github.com/Fishsb/dsh-prompt-enhancer) | One-click prompt enhancement: fuzzy draft to an independent LLM call, then polished composer text with undo. | 0.1.0-rc.8 (2026-08-20) |
| recruiting-copilot | 42 | [Viy1204/recruiting-copilot](https://github.com/Viy1204/recruiting-copilot) | AI 招聘副驾 —— DeepSeek Harness profile bundle：注册招聘工作流 skills（岗位梳理、双通道寻源初筛、约面试、简历评估、台账与日报），并在 Web UI 右侧提供一只可直接操作的 boss/liepin 浏览器面板。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-ui-status-label | 40 | [alingalingling/ui-status-label](https://github.com/alingalingling/ui-status-label) | Web UI plugin that makes the assistant's thinking status label ('deep diving') user-configurable through settings | 0.1.0-rc.8 (2026-08-20) |
| dsh-auto-continue | 36 | [HsiangNianian/dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) · [npm](https://www.npmjs.com/package/dsh-client-auto-continue) | Automatically sends continue when a Web UI request is interrupted by network errors or other non-human causes. | 0.1.0-rc.8 (2026-08-20) |
| dsh-ui-web | 36 | [CAPTAIN1275/dsh-ui-web](https://github.com/CAPTAIN1275/dsh-ui-web/tree/HEAD/packages/dsh-aionui-panel) · [npm](https://www.npmjs.com/package/@captain1275/dsh-client-ui-aionui-panel) | DSH web GUI right-panel system: a pixel-faithful re-implementation of AionUi's Explorer + Preview columns (file tree, filename search, git changes, multi-tab preview of 10+ formats) driven by real | 0.1.0-rc.8 (2026-08-20) |
| dsh-endfield-ui | 33 | [rison114514/dsh-endfield-ui](https://github.com/rison114514/dsh-endfield-ui/tree/HEAD/endfield-ui-plugin) | Endfield-inspired industrial UI shell for DeepSeek Harness (non-official fan theme) | 0.1.0-rc.8 (2026-08-20) |
| dsh-share | 33 | [hellodigua/dsh-share](https://github.com/hellodigua/dsh-share) · [npm](https://www.npmjs.com/package/dsh-share) | Share a DSH conversation turn as a PNG image. | 0.1.0-rc.8 (2026-08-20) |
| dsh-sidebar-qa | 31 | [ChenRuoT/dsh-sidebar-qa](https://github.com/ChenRuoT/dsh-sidebar-qa) · [npm](https://www.npmjs.com/package/dsh-sidebar-qa) | DSH web plugin: select conversation text -> ask in a right-side panel -> a dedicated follow-up session (❓追问) in the same workspace, without interrupting the main conversation. Thin consumer of dsh-... | 0.1.0-rc.8 (2026-08-20) |
| dsh-chat-timeline | 28 | [jjxjjjjiik-bot/dsh-chat-timeline](https://github.com/jjxjjjjiik-bot/dsh-chat-timeline) · [npm](https://www.npmjs.com/package/dsh-chat-timeline) | DeepSeek 官网风格右侧消息时间线：常驻显示当前会话的用户消息卡片，悬停高亮、点击跳转到对应消息。 | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-workbench-plugin | 27 | [loadingvx/deepseek-harness-workbench-plugin](https://github.com/loadingvx/deepseek-harness-workbench-plugin) | DeepSeek Harness Web UI 工作台：聊天 / 编辑器（语法高亮） / 文件与 Git、侧边栏、模型工具 | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 778. **[all 778 →](lists/web-ui.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Terminals & desktop

TUIs, desktop shells, headless runners.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| deepseek-harness-desktop | 19380 | [anywhere-labs/deepseek-harness-desktop](https://github.com/anywhere-labs/deepseek-harness-desktop) | 为 DeepSeek Harness (DSH) 生态打造的现代化桌面端体验 | 0.1.0-rc.8 (2026-08-20) |
| dsh-desktop | 2106 | [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | A cross-platform desktop shell for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-desktop-hairyf | 1072 | [dsh-tauri-desk/deepseek-harness-desktop](https://github.com/dsh-tauri-desk/deepseek-harness-desktop) | Desktop application for DeepSeek Harness (dsh) — one-click local install and launch, no Node.js setup required. | 0.1.0-rc.8 (2026-08-20) |
| working-activity | 653 | [ccch1mneyyy/working-activity](https://github.com/ccch1mneyyy/working-activity/tree/HEAD/packages/activity/working-activity) · [npm](https://www.npmjs.com/package/dsh-working-activity) | Live model working-status line: playful copy, running tool, turn elapsed — for TUI prompt and Web UI | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-studio-fufankej | 490 | [fufankeji/deepseek-harness-studio](https://github.com/fufankeji/deepseek-harness-studio) | DeepSeek Harness 零代码桌面端｜一键启动，支持 Windows 与 macOS；内置插件发现、热点插件推送、一键安装与管理、AI 智能推荐和视觉增强。 | 0.1.0-rc.8 (2026-08-20) |
| dshcode | 290 | [whitelonng/dshcode](https://github.com/whitelonng/dshcode) | Community desktop companion for DeepSeek Harness — one-click Electron app for macOS and Windows | 0.1.0-rc.8 (2026-08-20) |
| pilot-harness | 252 | [op7418/pilot-harness](https://github.com/op7418/pilot-harness) | Pilot Harness — a CodePilot-inspired desktop client and plugin suite for DeepSeek Harness on macOS, Windows, and Linux. | 0.1.0-rc.8 (2026-08-20) |
| dsh-tianshu-tui | 232 | [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) · [npm](https://www.npmjs.com/package/@huiliyi37/dsh-tianshu-tui) | Terminal UI for dsh shipped as an installable profile bundle | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-desktop-ningbain | 180 | [ningbainb/deepseek-harness-desktop](https://github.com/ningbainb/deepseek-harness-desktop/tree/HEAD/apps/dsh-desktop) | Lossless desktop shell for DeepSeek Harness and the complete dsh-web-ui plugin collection | unverified |
| Tydora | 89 | [zuorn/Tydora](https://github.com/zuorn/Tydora) | Let Your Ideas Flow — Tydora is a modern desktop Markdown editor combining WYSIWYG editing, bidirectional links, mind maps, and an infinite canvas — empowering deep thinking and effortless expression. | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-desktop-chokwinl | 73 | [chokwinlee/deepseek-harness-desktop](https://github.com/chokwinlee/deepseek-harness-desktop) | Compact unofficial desktop host for DeepSeek Harness, powered by Tauri on macOS | 0.1.0-rc.8 (2026-08-20) |
| seektty | 62 | [Hilbert-beinghappy/seektty](https://github.com/Hilbert-beinghappy/seektty) | SeekTTY, a pluggable DeepSeek-colored terminal surface for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-tui-openmaai | 56 | [openma-ai/Martty](https://github.com/openma-ai/Martty/tree/HEAD/npm) · [npm](https://www.npmjs.com/package/@openma/deepseek-harness-tui) | Terminal-native agent UI for DeepSeek Harness; standalone CLI or dsh profile bundle | 0.1.0-rc.8 (2026-08-20) |
| dsh-desktop-hub | 52 | [FlashingChen/dsh-desktop-hub](https://github.com/FlashingChen/dsh-desktop-hub/tree/HEAD/resources/rt) | DSH Desktop Hub — DeepSeek Harness 桌面管理控制台（多 Tab：Harness / Plugin / MCP / Skills） | 0.1.0-rc.8 (2026-08-20) |
| DeepSeek-Harness-Desktop-webcasa | 43 | [web-casa/DeepSeek-Harness-Desktop](https://github.com/web-casa/DeepSeek-Harness-Desktop/tree/HEAD/runtime) | Bundled DeepSeek Harness runtime for the desktop packaging. Pin exactly; upgrades happen only through prepare-harness + CI smoke. | 0.1.0-rc.8 (2026-08-20) |
| deepseek-app | 37 | [RongleCat/deepseek-app](https://github.com/RongleCat/deepseek-app) | Desktop workbench for DeepSeek Harness — Grok App visual shell, DSH engine | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-docker-runzhliu | 34 | [runzhliu/deepseek-harness-docker](https://github.com/runzhliu/deepseek-harness-docker/tree/HEAD/plugins/dsh-browser-desktop) | Movable, resizable Chromium desktop embedded in the DeepSeek Harness Web UI through noVNC. | 0.1.0-rc.8 (2026-08-20) |
| dsh-tui-dshtui | 27 | [dsh-tui/dsh-tui](https://github.com/dsh-tui/dsh-tui) · [npm](https://www.npmjs.com/package/@dsh-tui/dsh-tui) | Claude Code-style interactive terminal UI for DeepSeek Harness agents | 0.1.0-rc.8 (2026-08-20) |
| dsh-desktop-liguobao | 24 | [liguobao/dsh-desktop](https://github.com/liguobao/dsh-desktop) | Community desktop wrapper for the DeepSeek Harness Web UI | 0.1.0-rc.8 (2026-08-20) |
| DSHDesktop | 22 | [CCMu04/DSHDesktop](https://github.com/CCMu04/DSHDesktop) | Unofficial Windows desktop shell for the unmodified DeepSeek Harness Web UI | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-desktop-cc1252 | 20 | [cc1252/deepseek-harness-desktop](https://github.com/cc1252/deepseek-harness-desktop/tree/HEAD/harness) | Unpruned runtime payload for the Electron wrapper | 0.1.0-rc.8 (2026-08-20) |
| dsh-side-panel-ccq1 | 16 | [ccq1/dsh-side-panel](https://github.com/ccq1/dsh-side-panel) | Git review, terminal, and file workspace panel for DSH Web | 0.1.0-rc.8 (2026-08-21) |
| deepseek-harness-desktop-wjzp | 15 | [WJZ-P/deepseek-harness-desktop](https://github.com/WJZ-P/deepseek-harness-desktop/tree/HEAD/harness/apps/cli) | dsh CLI: profile boot, plugin management, and the browser UI alias | unverified |
| deepseek-harness-desktop-chyramoo | 11 | [chyra-moon/deepseek-harness-desktop](https://github.com/chyra-moon/deepseek-harness-desktop) | DeepSeek Harness desktop app: the official dsh web UI in a native Electron shell, with embedded server management, tray and notifications. | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-desktop-lburny | 10 | [LBurny/deepseek-harness-desktop](https://github.com/LBurny/deepseek-harness-desktop) | Windows desktop shell for DeepSeek's agent harness CLI (dsh). The installer bundles Node.js and dsh, so the official Web UI runs as a native app with tray, notifications, and theme following. No prere | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 337. **[all 337 →](lists/terminals-desktop.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Tools & capabilities

New things the model can do: search, browser, files, databases, devices, media.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| mirage | 3559 | [strukto-ai/mirage](https://github.com/strukto-ai/mirage/tree/HEAD/typescript/packages/dsh) · [npm](https://www.npmjs.com/package/@struktoai/mirage-dsh) | DeepSeek Harness (dsh) providers backed by a mirage workspace: ctx.fs and ctx.shell over mounted resources | 0.1.0-rc.8 (2026-08-20) |
| openpets | 1110 | [alvinunreal/openpets](https://github.com/alvinunreal/openpets/tree/HEAD/packages/dsh) · [npm](https://www.npmjs.com/package/@open-pets/dsh) | OpenPets 2.0 workspace | 0.1.0-rc.8 (2026-08-20) |
| dsh-pocket | 570 | [shaobeichen/dsh-pocket](https://github.com/shaobeichen/dsh-pocket) · [npm](https://www.npmjs.com/package/dsh-pocket) | 把 DeepSeek Harness 装进你的口袋：一个包、一个设置页，手机扫码即同步访问电脑上的 DSH（局域网 + 公网，实时同屏）。 | 0.1.0-rc.8 (2026-08-20) |
| MisakaNet | 424 | [Ikalus1988/MisakaNet](https://github.com/Ikalus1988/MisakaNet) | Deployment scripts for MisakaNet Workers | 0.1.0-rc.8 (2026-08-20) |
| dsh-browser ⭐ | 418 | [Lum1104/dsh-browser](https://github.com/Lum1104/dsh-browser) | Chrome sidebar plugin that lets dsh operate the browser directly, without vision. | 0.1.0-rc.8 (2026-08-20) |
| deepseek-design | 381 | [Devin-AXIS/deepseek-design](https://github.com/Devin-AXIS/deepseek-design/tree/HEAD/packages/deepseek-idesign) | iPolloWork Design Studio and its curated design templates as a native DeepSeek Harness conversation view. | unverified |
| Perfect-Web-Clone | 255 | [ericshang98/Perfect-Web-Clone](https://github.com/ericshang98/Perfect-Web-Clone) | Pixel-perfect clones of any webpage. Paste a URL, get a measured Vite + React replica. | 0.1.0-rc.8 (2026-08-24) |
| modsearch | 242 | [liustack/modsearch](https://github.com/liustack/modsearch) · [npm](https://www.npmjs.com/package/@liustack/modsearch) | Web plugin for dsh that gives a text-only model the web: search, X, and any page as structured evidence. | 0.1.0-rc.8 (2026-08-20) |
| dsh-pentest | 236 | [howmp/dsh-pentest](https://github.com/howmp/dsh-pentest) | DSH 渗透测试模式：以探索链路记录目标、线索、资产与漏洞，并在 Web 中可视化展示。 | 0.1.0-rc.8 (2026-08-20) |
| anysearch-dsh | 232 | [anysearch-team/anysearch-dsh](https://github.com/anysearch-team/anysearch-dsh) · [npm](https://www.npmjs.com/package/@anysearch/anysearch-dsh) | AnySearch web search provider and advanced tools for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-synapse | 194 | [liangmianya/dsh-synapse](https://github.com/liangmianya/dsh-synapse) | A visual, non-linear conversation workspace plugin for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-21) |
| oh-story-dsh | 169 | [worldwonderer/oh-story-dsh](https://github.com/worldwonderer/oh-story-dsh/tree/HEAD/packages/dsh-plugin) | A DSH plugin for fiction and short-drama production | 0.1.0-rc.8 (2026-08-21) |
| dsh-data-agent | 162 | [omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) · [npm](https://www.npmjs.com/package/@yejiming/dsh-data-agent) | Session-scoped MySQL/PostgreSQL/SQLite connections, an sqlcmd tool, a data-agent preset, and a database tab. | 0.1.0-rc.8 (2026-08-20) |
| anime-find | 159 | [cocofhu/anime-find](https://github.com/cocofhu/anime-find) · [npm](https://www.npmjs.com/package/@cocofhu/anime-find) | DeepSeek Harness 插件：对话内多源搜番，卡片详情、磁力复制与规则流媒体在线播放 | 0.1.0-rc.8 (2026-08-20) |
| notes | 150 | [zhaoolee/notes](https://github.com/zhaoolee/notes/tree/HEAD/dsh-plugin) · [npm](https://www.npmjs.com/package/@zhaoolee/dsh-notes) | DeepSeek Harness 插件：把用户对话导出为锤子便签（通过便签服务 API 写入云端工作区）。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-gitbash-preset | 135 | [liceses/dsh-gitbash-preset](https://github.com/liceses/dsh-gitbash-preset) | DeepSeek Harness plugin: installs the 'minimal-gitbash' agent preset — the Windows variant of the shipped minimal preset that routes the bash tool through Git for Windows bash (MSYS), with automatic | 0.1.0-rc.8 (2026-08-20) |
| dsh-oil-creator | 134 | [oil-oil/dsh-oil-creator](https://github.com/oil-oil/dsh-oil-creator) | AI-assisted local creator workbench for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| humanizer-ru | 113 | [Vladimir-Human/humanizer-ru](https://github.com/Vladimir-Human/humanizer-ru/tree/HEAD/dsh) | Скилл для ИИ-агентов: находит и убирает следы машинной генерации из русского текста. 38 паттернов, 39 regex-маркеров с реестром доказательств, слепые парные прогоны, файловый слой снятия C2PA/EXIF/XMP | 0.1.0-rc.8 (2026-08-20) |
| DSH-taskboard-shengshe | 111 | [shengsheng90/DSH-taskboard](https://github.com/shengsheng90/DSH-taskboard) | Native local project taskboard bundle for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| ark-cli | 104 | [volcengine/ark-cli](https://github.com/volcengine/ark-cli/tree/HEAD/dsh-plugins/ark-managed-agents) | Volcengine Ark Managed Agents plugin for DeepSeek Harness (DSH): a Managed Agents settings tab plus tools to dispatch tasks to Ark cloud Managed Agents and retrieve their trajectory, result, and | 0.1.0-rc.8 (2026-08-24) |
| dsh-univer-office | 101 | [dream-num/dsh-univer-office](https://github.com/dream-num/dsh-univer-office) · [npm](https://www.npmjs.com/package/dsh-univer-office) | DSH × Univer integration with a bundled collaboration Gateway and Viewer: inline previews, live floating Worktree windows, and session-end review actions in DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-genui | 97 | [pengyue-polaron/deepseek-harness-genui](https://github.com/pengyue-polaron/deepseek-harness-genui) · [npm](https://www.npmjs.com/package/dsh-plugin-genui) | Code-first generative UI artifacts for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin | 96 | [Tabbit-Browser/dsh-tabbit](https://github.com/Tabbit-Browser/dsh-tabbit) | DSH bundle that packages the Tabbit Browser skill and background installer | 0.1.0-rc.8 (2026-08-20) |
| cocode | 95 | [cocode-agency/cocode](https://github.com/cocode-agency/cocode/tree/HEAD/cocode-gui/packages/client/connection) | Wire consumer layer: HTTP-up/WebSocket-down client, ConnectionController dual streams with reconnect, and fixture api | unverified |
| Liang-Saint-Slider | 94 | [BruzWJ/Liang-Saint-Slider](https://github.com/BruzWJ/Liang-Saint-Slider) | 滑动变祖器 — the liang-intensity-calibrator as the DeepSeek Harness model + thinking-effort slider. Clicking the composer's model seat opens the 31-level calibrator directly; the six stages map 1:1 onto | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 2576. **[all 2576 →](lists/tools-capabilities.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Vision

Image understanding for text-only models.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| archify | 15228 | [tt-a1i/archify](https://github.com/tt-a1i/archify/tree/HEAD/integrations/deepseek-harness) · [npm](https://www.npmjs.com/package/@tt-a1i/archify-dsh) | Opt-in DeepSeek Harness Skill-only bundle for the Archify architecture-diagram skill. | 0.1.0-rc.8 (2026-08-20) |
| modlens ⭐ | 3583 | [liustack/modlens](https://github.com/liustack/modlens) · [npm](https://www.npmjs.com/package/@liustack/modlens) | Vision plugin for text-only models: image understanding bridged into the harness via a dsh.bundle patch layer, shipping a modlens skill alongside | 0.1.0-rc.8 (2026-08-20) |
| dsh-vision-router | 955 | [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) · [npm](https://www.npmjs.com/package/dsh-vision-router) | Turn-level vision routing with provider fallbacks, a cached vision_describe tool, JSON output, and optional per-host proxy. | 0.1.0-rc.8 (2026-08-20) |
| dsh-vision-toolkit | 818 | [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) · [npm](https://www.npmjs.com/package/@anionex/dsh-vision-toolkit) | Harness-native integration of agent-vision-toolkit for text-only models: image Q&A with intent, long-screenshot OCR, UI restoration, grounding, and pixel diff | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-android-app | 98 | [woaiys3/deepseek-harness-android-app](https://github.com/woaiys3/deepseek-harness-android-app/tree/HEAD/plugins/dsh-tool-android) | Model-facing Android system tools (package/app/setting/screenshot/input) over Shizuku shell. | unverified |
| dsh-vision-oil | 87 | [oil-oil/dsh-vision](https://github.com/oil-oil/dsh-vision) | Near-native image understanding for text-only DeepSeek Harness models. | 0.1.0-rc.8 (2026-08-20) |
| beautiCode | 61 | [starsstreaming/beautiCode](https://github.com/starsstreaming/beautiCode/tree/HEAD/integrations/deepseek-harness) | Cordis plugin: image/video backgrounds for DeepSeek Harness web. | 0.1.0-rc.8 (2026-08-20) |
| picturereader | 35 | [jing-hy/picturereader](https://github.com/jing-hy/picturereader) · [npm](https://www.npmjs.com/package/picturereader) | DSH plugin: pixel-to-text image reading for text-only models. Downscales and color-quantizes PNG/JPEG/GIF/BMP and feeds the coarse pixel grid to the model so DeepSeek can 'see' layout, colors and | 0.1.0-rc.8 (2026-08-20) |
| dsh-video-lens | 30 | [dundunhan/dsh-video-lens](https://github.com/dundunhan/dsh-video-lens) · [npm](https://www.npmjs.com/package/dsh-video-lens) | Give text-only DeepSeek Harness agents video understanding: scene-aware frame sampling + VLM + optional ASR transcript fused into timeline evidence. / 给纯文本模型的视频理解插件（场景感知抽帧 + VLM + 可选语音转录） | 0.1.0-rc.8 (2026-08-20) |
| dsh-imagegen | 20 | [dickpy/dsh-imagegen](https://github.com/dickpy/dsh-imagegen) · [npm](https://www.npmjs.com/package/@dickpy/dsh-imagegen) | AI 生图 (image generation) plugin for the dsh web GUI: text-to-image and image-to-image through a configurable OpenAI-compatible endpoint (gpt-image-2 / gpt-image-1 / dall-e-3), with a settings card | 0.1.0-rc.8 (2026-08-20) |
| deepseek-visionary | 16 | [xlight/deepseek-visionary](https://github.com/xlight/deepseek-visionary/tree/HEAD/packages/dsh-plugin) · [npm](https://www.npmjs.com/package/@xlight-oss/visionary-dsh) | DeepSeek Visionary native plugin for DeepSeek Harness: deepseek_vision / status / login / logout native tools backed by the visionary-server CLI (DeepSeek web vision model, no API key). | 0.1.0-rc.8 (2026-08-20) |
| dsh-media-skills-mjorgin | 16 | [MJorgin/dsh-media-skills](https://github.com/MJorgin/dsh-media-skills) | Free image reading (vision) and image generation skills for DeepSeek Harness — Zhipu GLM-4V-Flash (Google Gemini optional) for reading, SiliconFlow Kolors for generation. | 0.1.0-rc.8 (2026-08-20) |
| dsh-codex-oauth-wnjxyk | 14 | [WNJXYK/dsh-codex-oauth](https://github.com/WNJXYK/dsh-codex-oauth) · [npm](https://www.npmjs.com/package/@wnjxyk/dsh-codex-oauth) | Unified OpenAI Codex subscription plugin for DeepSeek Harness: GPT models, OAuth, quota, image generation, and web search. | 0.1.0-rc.8 (2026-08-20) |
| dsh-vision-proxy | 14 | [Flyvhidbwo/dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) · [npm](https://www.npmjs.com/package/dsh-vision-proxy) | deepseek-vision provider route that transcribes attached images via an OpenAI-compatible VLM before DeepSeek answers. | 0.1.0-rc.8 (2026-08-20) |
| dsh-ocr-plugin | 13 | [CraZY222123/dsh-ocr-plugin](https://github.com/CraZY222123/dsh-ocr-plugin) | Local OCR provider (rapidocr fast + DeepSeek-OCR-2 deep) registered as the 'ocr' service for the llm-deepseek adapter seam. Unofficial community plugin for DeepSeek Harness. | unverified |
| dsh-vision-opencode | 13 | [poiuyjie/dsh-vision-opencode](https://github.com/poiuyjie/dsh-vision-opencode) | DeepSeek Harness plugin: configurable vision model with vision_read_image tool, composer-bar vision-model selector, and automatic image-to-text conversion for text-only main models. | 0.1.0-rc.8 (2026-08-20) |
| dsh-vision-linenxi | 12 | [linenxi-ctrl/dsh-vision](https://github.com/linenxi-ctrl/dsh-vision) · [npm](https://www.npmjs.com/package/@linenxi-ctrl/dsh-vision) | External vision model for DeepSeek Harness: config panel, send-image recognition, and screenshot tools. | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-docker | 11 | [AlliotTech/deepseek-harness-docker](https://github.com/AlliotTech/deepseek-harness-docker) | Reproducible container image for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-visual-plugin | 11 | [jyh20030112/dsh-visual-plugin](https://github.com/jyh20030112/dsh-visual-plugin) | Vision bridge plugin for DeepSeek Harness: when the main model has no vision, forward user images to a configurable OpenAI-compatible vision model and show results in a Web UI right panel. Host. | 0.1.0-rc.8 (2026-08-20) |
| dsh-web-file-uploader | 11 | [Mooling0602/dsh-web-file-uploader](https://github.com/Mooling0602/dsh-web-file-uploader) | A DeepSeek-style paperclip attach button in the DSH web composer; uploads files to the DSH host (model-aware: native image blocks for multimodal models, file paths for text-only models). | 0.1.0-rc.8 (2026-08-20) |
| dsh-chat-imagine | 10 | [corrinehu/dsh-chat-imagine](https://github.com/corrinehu/dsh-chat-imagine) | Generate images via API (image models filtered from those already set up in DSH) or local CLIs (MiniMax mmx), probe available backends, and display images inline in the chat. | 0.1.0-rc.8 (2026-08-20) |
| vision-exp-tile | 10 | [Nicholas023/vision-exp-tile](https://github.com/Nicholas023/vision-exp-tile) | 为 deepseek-v4-flash-vision-exp 量身定制的大图智能识图插件：整图预检 → 本地 OCR+像素网格（文字）+ 兴趣点按比例切块（最长边 800）→ 汇总；保留全图 800x800 网格切块模式。不统计 token、不计算费用。v0.4.1：慢机测试自适应（设备档位/可配置OCR池超时/设置页跳过声明/自检入口/安装即优化）。 | 0.1.0-rc.8 (2026-08-24) |
| dsh-mmx-bridge | 8 | [welsione/dsh-mmx-bridge](https://github.com/welsione/dsh-mmx-bridge) | MiniMax multimodal bridge for DeepSeek Harness (DSH). One mmx_bridge tool covers describe/image/video/speech/music/cover/search/quota; optional web_search/read_image takeover; built-in client | 0.1.0-rc.8 (2026-08-20) |
| image-vision | 8 | [wangyang10/image-vision](https://github.com/wangyang10/image-vision/tree/HEAD/dsh-image-vision) · [npm](https://www.npmjs.com/package/dsh-image-vision) | DeepSeek Harness plugin: gives text-only models (e.g. DeepSeek) image-reading ability via any OpenAI-compatible vision API. Registers the vision_query tool, DSH credentials integration, and the | 0.1.0-rc.8 (2026-08-20) |
| dsh-deepseek-vision-siegfly | 7 | [siegfly/dsh-deepseek-vision](https://github.com/siegfly/dsh-deepseek-vision) · [npm](https://www.npmjs.com/package/dsh-deepseek-vision) | Out-of-tree dsh provider plugin: a DeepSeek gateway route that claims image input and transparently describes pasted images through a configured vision-language model (e.g. Qwen-VL) before the | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 350. **[all 350 →](lists/vision.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Agents & orchestration

Subagents, workflows, cross-session coordination.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| BitFun | 1810 | [GCWing/BitFun](https://github.com/GCWing/BitFun/tree/HEAD/packages/dsh-acp) | IDE-oriented Agent Client Protocol server for DeepSeek Harness: publishes tool calls, reasoning, and plans that the automation-only @deepseek-ai/dsh-acp deliberately withholds | 0.1.0-rc.8 (2026-08-20) |
| dsh-agent-teams | 937 | [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) · [npm](https://www.npmjs.com/package/@nanmicoder/dsh-agent-teams) | AgentTeams plugin: coordinate teams of subagents from the web UI | 0.1.0-rc.8 (2026-08-20) |
| tongflow | 919 | [tong-io/tongflow](https://github.com/tong-io/tongflow/tree/HEAD/packages/dsh-tongflow) · [npm](https://www.npmjs.com/package/dsh-tongflow) | TongFlow studio plugin for DeepSeek Harness (dsh): agent-designed project folders, one TongFlow workflow per generated asset stored next to its outputs, deterministic media generation, embedded | 0.1.0-rc.8 (2026-08-20) |
| Polaris | 205 | [ZJU-REAL/Polaris](https://github.com/ZJU-REAL/Polaris/tree/HEAD/integrations/deepseek-harness) | DeepSeek Harness bundle for Polaris MCP tools and native agent skills | 0.1.0-rc.8 (2026-08-20) |
| dsh-agent-rp | 183 | [hewzhew/dsh-agent-rp](https://github.com/hewzhew/dsh-agent-rp) | SillyTavern migration and next-generation Agent RP for DSH | 0.1.0-rc.8 (2026-08-20) |
| dsh-agent-team-gui | 123 | [toolclub/dsh-agent-team-gui](https://github.com/toolclub/dsh-agent-team-gui) | Persistent multi-model squads for DeepSeek Harness — manage teams in Settings and use them in ordinary conversations | 0.1.0-rc.8 (2026-08-20) |
| dsh_workflow | 98 | [omdsh-dev/dsh_workflow](https://github.com/omdsh-dev/dsh_workflow) | KodaX-parity dynamic workflow harness for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| odai | 98 | [orziz/odai](https://github.com/orziz/odai/tree/HEAD/dsh/agent) · [npm](https://www.npmjs.com/package/odai-dsh-agent) | 完整继承 DSH Standard 全部能力的 Odai Agent preset。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-automation | 75 | [titanwings/dsh-automation](https://github.com/titanwings/dsh-automation) | Run coding tasks on schedule in fresh Agent sessions, and manage automations from DeepSeek Harness Web or an Agent | 0.1.0-rc.8 (2026-08-20) |
| dsh-openbiliclaw | 52 | [whiteguo233/dsh-openbiliclaw](https://github.com/whiteguo233/dsh-openbiliclaw) | OpenBiliClaw DeepSeek Harness plugin: the user-consumption side (recommendations, delight, saved, Socratic chat, profile, probes, activity) as a web-GUI sidebar, plus agent-bridge tools and the. | 0.1.0-rc.8 (2026-08-20) |
| dsh-deepseek-flow | 50 | [kanghelyu/dsh-deepseek-flow](https://github.com/kanghelyu/dsh-deepseek-flow) · [npm](https://www.npmjs.com/package/deepseek-flow) | DeepSeek Flow — Markdown-first visual workflow plugin for DeepSeek Harness with executable Boolean gate semantics, two-way canvas sync, and AI review/optimization. | 0.1.0-rc.8 (2026-08-20) |
| dsh-worktable | 46 | [Aisland-SJL/dsh-worktable](https://github.com/Aisland-SJL/dsh-worktable/tree/HEAD/01_content) | 工作台 Worktable：DeepSeek Harness 侧边栏的 agent 级项目容器（应用抽屉） | 0.1.0-rc.8 (2026-08-24) |
| DSH-pipeline-kernel | 36 | [not-big-dog/DSH-pipeline-kernel](https://github.com/not-big-dog/DSH-pipeline-kernel) | 管线管理内核（pipeline-kernel）：单向任务链的任务板/台账/注册表/巡检/生图（轻量版）。v0.7：审查修复（S-1 路径穿越/C-1 路由兜底/D 组多管线一致性等）。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-guard | 31 | [lxzy-7/dsh-plugin-guard](https://github.com/lxzy-7/dsh-plugin-guard) | Install safety net for DeepSeek Harness: pre-install snapshots, one-click/automatic rollback, guarded boot, and incident reports that auto-trigger agent analysis. DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-fnos | 22 | [techysy/deepseek-harness-fnos](https://github.com/techysy/deepseek-harness-fnos/tree/HEAD/app/server) | DeepSeek Harness (DeepSeek 官方 agent 浏览器 UI) fnOS 应用 — 本地常驻服务 | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-writing-guard | 22 | [xmutfyh/dsh-plugin-writing-guard](https://github.com/xmutfyh/dsh-plugin-writing-guard) · [npm](https://www.npmjs.com/package/dsh-plugin-writing-guard) | DSH plugin: deterministic academic-writing linter — incremental lint (fingerprint diff: only new/resolved issues injected), segment-pipeline preprocessing with section detection | 0.1.0-rc.8 (2026-08-20) |
| oh-my-dsh-agifans | 22 | [agi-fans/oh-my-dsh](https://github.com/agi-fans/oh-my-dsh) | omdsh: a TUI coding agent on the DeepSeek Harness core runtime | 0.1.0-rc.8 (2026-08-20) |
| dsh-chinese-traditional-wisdom-skill | 21 | [dhicoc/dsh-chinese-traditional-wisdom-skill](https://github.com/dhicoc/dsh-chinese-traditional-wisdom-skill) | 中华传统智慧（玄枢）AI Agent 技能包的 DeepSeek Harness（dsh）Cordis 插件：八字/紫微/六爻/梅花/奇门/风水/五运六气/体质全融合，本地确定性引擎 + 可视化 Dashboard，一行 dsh plugin add 安装。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-solo-thinking | 21 | [fredalxin/dsh-solo-thinking](https://github.com/fredalxin/dsh-solo-thinking) · [npm](https://www.npmjs.com/package/dsh-plugin-solo-thinking) | Solo-style isolated brainstorm branches and Handoffs for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| agent-team | 19 | [limuyang2/agent-team](https://github.com/limuyang2/agent-team) · [npm](https://www.npmjs.com/package/@limuyang2/dsh-agent-team) | Multi-agent team management plugin for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-skills-manager-michenga | 19 | [MichengAI/dsh-skills-manager](https://github.com/MichengAI/dsh-skills-manager) · [npm](https://www.npmjs.com/package/@michengai/dsh-skills-manager) | NPM-installable DSH Web plugin for managing local skills and viewing shared Agent skills safely. | 0.1.0-rc.8 (2026-08-20) |
| dsh-taskboard | 19 | [cloader/dsh-taskboard](https://github.com/cloader/dsh-taskboard) · [npm](https://www.npmjs.com/package/dsh-taskboard) | Agent-first task board for the DSH web GUI: host-authoritative task ledger with taskboard_* agent tools, project (= workspace) claim boundaries, per-task model execution in fresh sessions, host-side | 0.1.0-rc.8 (2026-08-20) |
| grove | 17 | [alxshelepenok/grove](https://github.com/alxshelepenok/grove/tree/HEAD/packages/dsh) | DeepSeek Harness bundle that exposes the Grove CLI as agent tools. | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-yet-another-subagent | 15 | [HuanLinOTO/dsh-plugin-yet-another-subagent](https://github.com/HuanLinOTO/dsh-plugin-yet-another-subagent) | Configurable subagent profiles with web UI settings, real-time toolcall/token display, and click-to-navigate child sessions. | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-ux | 14 | [ayuanwong/dsh-ux](https://github.com/ayuanwong/dsh-ux) | 长任务，不刷屏：关键进度清晰可见，完成后自动折叠，详情随时展开。 Long agent tasks, without transcript clutter: focused progress, auto-folded history, details on demand. | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 773. **[all 773 →](lists/agents-orchestration.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Memory & sessions

Memory systems, context management, session search/rewind/export.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| MemOS | 10946 | [MemTensor/MemOS](https://github.com/MemTensor/MemOS/tree/HEAD/apps/memos-local-plugin) | Reflect2Evolve memory plugin: layered L1/L2/L3 memory, reflection-weighted value backprop, cross-task policy induction, skill crystallization, and three-tier retrieval for OpenClaw, Hermes Agent, and | 0.1.0-rc.8 (2026-08-20) |
| memsearch | 2496 | [zilliztech/memsearch](https://github.com/zilliztech/memsearch/tree/HEAD/plugins/dsh) | MemSearch plugin for DeepSeek Harness: shared markdown memory across agents, with capture, pre-step context injection, memory-recall skill, and a skill-candidate review panel. | 0.1.0-rc.8 (2026-08-24) |
| mem9 | 1198 | [mem9-ai/mem9](https://github.com/mem9-ai/mem9/tree/HEAD/dsh-plugin) | Mem9 persistent memory for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-context | 979 | [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) · [npm](https://www.npmjs.com/package/dsh-context) | Context insight panel — a Context tab in the dsh web UI showing what the model's context window is made of and how it evolves. | 0.1.0-rc.8 (2026-08-20) |
| MindMemOS | 949 | [mindscale-noah/MindMemOS](https://github.com/mindscale-noah/MindMemOS/tree/HEAD/plugins/deepseek-harness-plugin) · [npm](https://www.npmjs.com/package/@mindmemos/deepseek-harness-plugin) | DeepSeek Harness (dsh) plugin that recalls and writes MindMemOS memories through the mindmemos CLI. | 0.1.0-rc.8 (2026-08-20) |
| deja-vu | 690 | [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu/tree/HEAD/extensions/dsh) | Brings the session history of nineteen other coding agents into DeepSeek Harness: recall, session digest and per-file history tools over a local index, plus optional automatic recall before each step. | 0.1.0-rc.8 (2026-08-24) |
| sandbase-harness | 631 | [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) | Local-first, self-hosted AI agent runtime with Claude Managed Agents-style APIs, sandboxed sessions, memory, tools, audit, replay, and a local Console. | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-desktop-app | 627 | [vibeinging/dsh-desktop](https://github.com/vibeinging/dsh-desktop/tree/HEAD/packages/dsh-product-bridge) | Session-scoped DeepSeek Harness Desktop App capabilities for the current DSH Web profile | unverified |
| graph-memory | 569 | [adoresever/graph-memory](https://github.com/adoresever/graph-memory) | Knowledge graph memory for DeepSeek Harness and OpenClaw — cross-session recall, PageRank, communities, and vector search | 0.1.0-rc.8 (2026-08-20) |
| dsh-dafeiyu | 250 | [QCYTSN/dsh-dafeiyu](https://github.com/QCYTSN/dsh-dafeiyu) · [npm](https://www.npmjs.com/package/dsh-dafeiyu) | A desktop-native BigFish companion driven by DeepSeek Harness session events. | 0.1.0-rc.8 (2026-08-20) |
| dsh-memory-evolve | 236 | [csyangwen/dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) | 为 DeepSeek Harness 带来分层记忆（全局 / 用户 / 项目 / GIT 分支 / 每日）与自我进化（经验沉淀 + 技能自动创建）和技能管理、待办管理、CLI 调度（kimi/codex/grok/hermes 等外部 AI 统一调度）、临时信息便签，带 WebUI 管理界面。Hermes-style long-term memory, self-evolution | 0.1.0-rc.8 (2026-08-20) |
| dsh-mnemon ⭐ | 192 | [omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) · [npm](https://www.npmjs.com/package/dsh-mnemon) | Local-first three-tier memory for dsh: runtime memory, searchable documents, and supervised memory spaces. | 0.1.0-rc.8 (2026-08-20) |
| cetus | 129 | [drewnekota/cetus](https://github.com/drewnekota/cetus/tree/HEAD/dsh-bridge) | DSH Companion 的本地网关插件：把宿主 ApiProxy 暴露为 127.0.0.1 上的 HTTP + SSE（token 鉴权），供桌面壳驱动会话 | 0.1.0-rc.8 (2026-08-20) |
| dsh-noema | 124 | [ZSeven-W/dsh-noema](https://github.com/ZSeven-W/dsh-noema) · [npm](https://www.npmjs.com/package/@zseven-w/dsh-noema) | Noema long-term memory for DSH: durable, inspectable agent memory with recall tools and a settings page. | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-bridge | 120 | [Totoro-qaq/dsh-plugin-bridge](https://github.com/Totoro-qaq/dsh-plugin-bridge) | DeepSeek Harness Cordis bundle for cross-preset session migration via fixed-schema handoff summaries | 0.1.0-rc.8 (2026-08-20) |
| dsh-damage-pulse | 114 | [wssfk12138/dsh-damage-pulse](https://github.com/wssfk12138/dsh-damage-pulse/tree/HEAD/packages/client/ui-token-monitor) | Token 用量与金额面板：对话流内单次用量行 + 输入区会话累计条，读自 tokenCost session projection | 0.1.0-rc.8 (2026-08-20) |
| dsh-turn-rewind ⭐ | 100 | [Anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) · [npm](https://www.npmjs.com/package/@anionex/dsh-turn-rewind) | Rewind conversation and workspace state to a previous turn, backed by a persistent change ledger | 0.1.0-rc.8 (2026-08-20) |
| dsh-auto-review | 91 | [PerryLink/dsh-auto-review](https://github.com/PerryLink/dsh-auto-review) · [npm](https://www.npmjs.com/package/dsh-auto-review) | Second-model AI auto-review for DeepSeek Harness approval requests: a read-only reviewer subagent decides allow/deny on the approval answerer chain, with fail-closed fallback and full session-log | 0.1.0-rc.8 (2026-08-20) |
| dsh-turn-delete | 68 | [hanshenmesen/dsh-turn-delete](https://github.com/hanshenmesen/dsh-turn-delete) · [npm](https://www.npmjs.com/package/dsh-turn-delete) | Delete one complete closed turn from a DeepSeek Harness session without deleting the session | 0.1.0-rc.8 (2026-08-20) |
| dsh-memento | 60 | [PerryLink/dsh-memento](https://github.com/PerryLink/dsh-memento) · [npm](https://www.npmjs.com/package/dsh-memento) | Bounded, layered, approval-gated, auditable cross-session memory for DeepSeek Harness — a capability seam (ctx.memory service + local SQLite provider + memory tool + frozen snapshot injection), not an | 0.1.0-rc.8 (2026-08-20) |
| DSH-EasyRewrite | 55 | [Renzic-Stone/DSH-EasyRewrite](https://github.com/Renzic-Stone/DSH-EasyRewrite) | DSH Web内目前最无感的消息撤回、重编辑插件，原版体验，兼容性强，功能简单可开关，设置丰富，现代化轻量ui框架。The most seamless message recall & re-edit plugin for DSH Web — native experience, strong compatibility, simple toggles, rich settings | 0.1.0-rc.8 (2026-08-20) |
| dsh-session-manager-dream123 | 49 | [dream12347/dsh-session-manager](https://github.com/dream12347/dsh-session-manager) | Full session management for the DSH web UI: delete (with trash/restore/purge), restore archived sessions, activity stats, continue/pause, fork to a new chat, unread markers, and open log folders. | 0.1.0-rc.8 (2026-08-20) |
| opencontext | 49 | [melandlabs/opencontext](https://github.com/melandlabs/opencontext/tree/HEAD/plugins/dsh-opencontext) | opencontext — open-source runtime substrate for agentic applications. A temporal context graph, 4-verb memory API, retrieval-augmented generation primitives, and a multi-platform integration mesh. | 0.1.0-rc.8 (2026-08-20) |
| dsh-auto-collapse | 46 | [a179-sanae/dsh-auto-collapse](https://github.com/a179-sanae/dsh-auto-collapse) | DeepSeek Harness Web 客户端插件：把会话里的工具卡片与 Think 推理块折叠成一行，折叠态实时显示当前正在进行的工作（工具名 + 正在执行的命令/参数、或思考内容），运行中带流光动画；点击展开/收起。让界面只保留模型说的话。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-remote-xgone | 45 | [xgone/dsh-remote](https://github.com/xgone/dsh-remote) · [npm](https://www.npmjs.com/package/@xgone/dsh-remote) | Account/password authentication for the DeepSeek Harness web UI: login gate, signed session cookies, role-based access, and a Settings page for account management. | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 1198. **[all 1198 →](lists/memory-sessions.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Models & providers

Providers, routing, fallbacks, subscription adapters.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| api-relay-audit | 802 | [toby-bridges/api-relay-audit](https://github.com/toby-bridges/api-relay-audit) | DeepSeek Harness bundle for running API Relay Audit locally | 0.1.0-rc.8 (2026-08-20) |
| dsh-image-gen-shanliul | 164 | [shanliuling/dsh-image-gen](https://github.com/shanliuling/dsh-image-gen) · [npm](https://www.npmjs.com/package/dsh-image-gen) | Bring ChatGPT-like image generation to DeepSeek Harness — Gemini, OpenAI, Seedream & more. | 0.1.0-rc.8 (2026-08-20) |
| dsh-commandcode-provider-mars-sea | 95 | [Mars-Sea/dsh-commandcode-provider](https://github.com/Mars-Sea/dsh-commandcode-provider) · [npm](https://www.npmjs.com/package/@mars-sea/dsh-commandcode-provider) | DeepSeek Harness LLM provider plugin for Command Code, ported from pi-commandcode-provider (MIT). Registers the 'commandcode' provider route with a Models-page card and live model catalog. | 0.1.0-rc.8 (2026-08-20) |
| dockyard-dsh | 77 | [AITabby/dockyard-dsh](https://github.com/AITabby/dockyard-dsh) | A macOS-only native account-pool and provider plugin for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-claude-ux | 64 | [eri64/dsh-claude-ux](https://github.com/eri64/dsh-claude-ux) | Claude-style region risk-control (China / non-China target, reversible) + abusive-interaction auto-end for DeepSeek Harness web profile | 0.1.0-rc.8 (2026-08-20) |
| dsh-codex | 45 | [Yan-Zero/dsh-codex](https://github.com/Yan-Zero/dsh-codex) · [npm](https://www.npmjs.com/package/dsh-codex) | Use a ChatGPT subscription in DeepSeek Harness through OpenAI Codex sign-in, with Codex models, search, and image tools. | 0.1.0-rc.8 (2026-08-20) |
| dsh-claude-provider | 38 | [MoFeng2223/dsh-claude-provider](https://github.com/MoFeng2223/dsh-claude-provider) · [npm](https://www.npmjs.com/package/@mofeng2223/dsh-claude-provider) | Custom Claude provider support for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-vision-williamj | 35 | [william-jin-cmu/dsh-vision](https://github.com/william-jin-cmu/dsh-vision) | 给纯文本的 DeepSeek 加上眼睛：view_image 工具经任意 OpenAI 兼容 VLM 端点回答关于图片的问题（默认智谱免费 glm-4.6v-flash 零成本开箱，可换通义 qwen3-vl / Ollama 本地 / 未来 DeepSeek 官方识图 API） | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-model-config | 31 | [MarvekG/deepseek-harness-model-config](https://github.com/MarvekG/deepseek-harness-model-config) | Advanced per-model reasoning and capacity settings for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-agy | 23 | [chaos-03x/dsh-agy](https://github.com/chaos-03x/dsh-agy) · [npm](https://www.npmjs.com/package/dsh-agy) | Google Antigravity (agy) OAuth auth + model access plugin for DeepSeek Harness: multi-account pool, 429 rotation, device fingerprinting, CLI and web login. | 0.1.0-rc.8 (2026-08-20) |
| kixparadigm | 23 | [olicesx/kixparadigm](https://github.com/olicesx/kixparadigm/tree/HEAD/dsh/vision-bridge) | dsh 无缝识图桥：UI 上传图片 → 自动用 GLM-4.6V 转成文本描述交给主模型（client dock 插件 + 服务端 HTTP 端点） | 0.1.0-rc.8 (2026-08-20) |
| dsh-focus-chat | 22 | [dingyi222666/dsh-focus-chat](https://github.com/dingyi222666/dsh-focus-chat) | Claude Code-style focus view for the dsh web GUI: the conversation's condensed reading surface — tool calls folded into expandable metric summaries, chat 1:1 row chrome, and streaming think rows | 0.1.0-rc.8 (2026-08-20) |
| dsh-full-remote | 22 | [JUANWANG-BUAA/dsh-full-remote](https://github.com/JUANWANG-BUAA/dsh-full-remote) · [npm](https://www.npmjs.com/package/dsh-full-remote) | DeepSeek Harness plugin for remote access: a token-gated reverse proxy keeps settings, credentials, and file access working over public tunnels and on other devices instead of returning 403. | 0.1.0-rc.8 (2026-08-20) |
| rapid-mlx-dsh-provider | 21 | [raullenchai/rapid-mlx-dsh-provider](https://github.com/raullenchai/rapid-mlx-dsh-provider) · [npm](https://www.npmjs.com/package/@raullenchai/dsh-provider) | Native Rapid-MLX provider for DeepSeek Harness — teaches DSH what the local server already knows. | 0.1.0-rc.8 (2026-08-20) |
| dsh-llm-codebuddy-axiaohungry | 20 | [Axiaohungry/dsh-llm-codebuddy](https://github.com/Axiaohungry/dsh-llm-codebuddy) · [npm](https://www.npmjs.com/package/dsh-llm-codebuddy) | WorkBuddy API adapter so DeepSeek Harness can call CodeBuddy models. | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-auth | 19 | [taichuy/deepseek-harness-auth](https://github.com/taichuy/deepseek-harness-auth) · [npm](https://www.npmjs.com/package/deepseek-harness-auth) | Fail-closed password authentication proxy bundle for the DeepSeek Harness Web profile | 0.1.0-rc.8 (2026-08-20) |
| dsh-llm-fallbacks | 17 | [omdsh-dev/dsh-llm-fallbacks](https://github.com/omdsh-dev/dsh-llm-fallbacks) · [npm](https://www.npmjs.com/package/dsh-llm-fallbacks) | Automatic provider/model fallback chains when LLM requests keep failing after retries, auth, quota, or rate limits. | 0.1.0-rc.8 (2026-08-20) |
| dsh-museai-tavern | 16 | [yejiming/dsh-museai-tavern](https://github.com/yejiming/dsh-museai-tavern) | MuseAI tavern for the dsh web GUI: a MuseAI conversation-view tab (right of Trajectory) with background / chat / adventure / bond / settings pages ported from MuseAI, running entirely on models config | 0.1.0-rc.8 (2026-08-20) |
| dsh-routing-suite | 16 | [dragonbaba/dsh-routing-suite](https://github.com/dragonbaba/dsh-routing-suite) · [npm](https://www.npmjs.com/package/dsh-routing-suite) | A lightweight, selectable smart-routing mode for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-web-tools | 16 | [A3Boy/dsh-web-tools](https://github.com/A3Boy/dsh-web-tools) | Unified multi-provider web search and fetch for DeepSeek Harness — BYOK, per-provider credential pools, quota & health monitoring, deterministic fallback, native settings UI, and self-hosted search | 0.1.0-rc.8 (2026-08-20) |
| dsh-file-upload | 14 | [HongMing-Huang/dsh-file-upload](https://github.com/HongMing-Huang/dsh-file-upload) · [npm](https://www.npmjs.com/package/dsh-file-upload) | DeepSeek Harness dual-face plugin: Claude-style drag-and-drop / paperclip file upload, content sniffing, document-to-Markdown conversion (built-in JS parsers with optional Microsoft MarkItDown CLI) | 0.1.0-rc.8 (2026-08-20) |
| dsh-provider-model-configurator | 14 | [LiangYin233/dsh-provider-model-configurator](https://github.com/LiangYin233/dsh-provider-model-configurator) | Provider Model Configurator for DeepSeek Harness: view, create, edit, copy and delete model entries (context window, max output, modalities, reasoning efforts) across your configured providers,. | 0.1.0-rc.8 (2026-08-20) |
| dsh-agy-link | 12 | [amlyczz/dsh-agy-link](https://github.com/amlyczz/dsh-agy-link) · [npm](https://www.npmjs.com/package/dsh-agy-link) | Google Antigravity (agy CLI) models for DeepSeek Harness — stream Gemini/Claude/GPT-OSS subscriptions into DSH with thinking, tool activity, token usage and in-GUI Google OAuth login. | 0.1.0-rc.8 (2026-08-20) |
| dsh-computer-use-988hj7tc | 12 | [988hj7tczd-oss/dsh-computer-use](https://github.com/988hj7tczd-oss/dsh-computer-use) | Computer Use 插件：虚拟鼠标真人操作（screen_observe + computer_click 等 11 个模型友好工具，跨平台 cua-driver 引擎） | 0.1.0-rc.8 (2026-08-20) |
| dsh-file-mentions | 12 | [a903067276-rgb/dsh-file-mentions](https://github.com/a903067276-rgb/dsh-file-mentions) | Clickable file paths in DSH replies: open files/directories from inline paths (Codex-style), with a mentioned-files chip list as fallback | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 534. **[all 534 →](lists/models-providers.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Interop & migration

Bridges to and from Claude Code, Codex, and other harnesses.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-hooks-claude-code (official) | 190089 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/hooks/hooks-claude-code) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-hooks-claude-code) | Bridge plugin: runs an existing Claude Code hooks.json on the harness interception seams (command hooks only; http, mcp_tool, prompt, and agent hooks are skipped with a warning) | 0.1.0-rc.5 (2026-08-13) |
| dsh-hooks-codex (official) | 190089 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/hooks/hooks-codex) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-hooks-codex) | Bridge plugin: runs a Codex hooks.json on the harness interception seams (regex-only matchers, snake_case payloads, only blocking decisions honored) | 0.1.0-rc.5 (2026-08-13) |
| petdex | 3959 | [crafter-station/petdex](https://github.com/crafter-station/petdex/tree/HEAD/packages/petdex-desktop-native/integrations/dsh) | A public gallery of animated pets for Codex, Claude Code, DeepSeek Harness, Hermes, OpenCode, Gemini CLI, and more. | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-subscriptions | 260 | [V1ki/dsh-plugin-subscriptions](https://github.com/V1ki/dsh-plugin-subscriptions) · [npm](https://www.npmjs.com/package/dsh-plugin-subscriptions) | Use ChatGPT (Codex), Claude, and Grok (X Premium) subscriptions as DeepSeek Harness LLM providers, with OAuth login from the web Settings page | 0.1.0-rc.8 (2026-08-20) |
| pi2dsh | 159 | [weijiafu14/pi2dsh](https://github.com/weijiafu14/pi2dsh) · [npm](https://www.npmjs.com/package/pi2dsh) | Bridge the Pi and DeepSeek Harness ecosystems: a general Pi Host ABI that runs unmodified Pi extensions as native DSH plugins, plus per-package conversion and MCP config translation. | 0.1.0-rc.8 (2026-08-20) |
| dsh-crew | 108 | [ZSeven-W/dsh-crew](https://github.com/ZSeven-W/dsh-crew) · [npm](https://www.npmjs.com/package/@zseven-w/dsh-crew) | DeepSeek Harness plugin: dispatch work to DSH agents from Claude Code / Codex, as native subagents with live progress | 0.1.0-rc.8 (2026-08-20) |
| dsh-reasoning-effort | 106 | [HanaAyane/dsh-reasoning-effort](https://github.com/HanaAyane/dsh-reasoning-effort) | Codex-style DeepSeek Harness model and reasoning selector with off/high/max snapping, DSH-native themes, and left-clipped radiation effects. | 0.1.0-rc.8 (2026-08-20) |
| dsh-chat-import | 102 | [Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) · [npm](https://www.npmjs.com/package/dsh-chat-import) | Import Claude Code / Codex / ChatGPT / Cursor / Gemini / Reasonix / Pi Coding Agent / opencode / ZCode / Grok Build / OpenClaw / Hermes conversation histories as resumable DeepSeek Harness sessions | 0.1.0-rc.8 (2026-08-20) |
| dsh-multica-runtime | 56 | [multica-ai/dsh-multica-runtime](https://github.com/multica-ai/dsh-multica-runtime) | Private DeepSeek Harness runtime bridge for Multica | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugins-ephemera | 47 | [Ephemeral-AI-Lab/dsh-plugins](https://github.com/Ephemeral-AI-Lab/dsh-plugins/tree/HEAD/codex-shell) | Exclusive Codex-style exec_command and write_stdin shell tools for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-codex-connect | 41 | [franksong2702/dsh-codex-connect](https://github.com/franksong2702/dsh-codex-connect) · [npm](https://www.npmjs.com/package/dsh-codex-connect) | ChatGPT OAuth and Codex models for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-codex-ui | 30 | [MichengAI/dsh-codex-ui](https://github.com/MichengAI/dsh-codex-ui) · [npm](https://www.npmjs.com/package/@michengai/dsh-codex-ui) | 以 Codex 风格重构 DSH Web 侧栏的独立客户端插件 | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-gpt-desktop | 23 | [R3hb/deepseek-harness-gpt-desktop](https://github.com/R3hb/deepseek-harness-gpt-desktop/tree/HEAD/desktop/codex-llm-plugin) | DeepSeek Harness LLM adapter backed by the official Codex SDK and ChatGPT sign-in. | 0.1.0-rc.8 (2026-08-20) |
| dsh-codex-sync | 22 | [Walvez/dsh-codex-sync](https://github.com/Walvez/dsh-codex-sync) · [npm](https://www.npmjs.com/package/dsh-codex-sync) | One-stop bidirectional sync between OpenAI Codex and DeepSeek Harness (dsh): first-class skills, session import, workspace attach, MCP client mounting, and a Codex-side reverse MCP installer. | 0.1.0-rc.8 (2026-08-20) |
| dsh-better-deepseek | 19 | [EdgeTypE/dsh-better-deepseek](https://github.com/EdgeTypE/dsh-better-deepseek) | DeepSeek Harness bridge plugin for Better-DeepSeek Chrome extension integration | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-product-subagents | 18 | [shaokeyibb/dsh-plugin-product-subagents](https://github.com/shaokeyibb/dsh-plugin-product-subagents) · [npm](https://www.npmjs.com/package/dsh-plugin-product-subagents) | Role-based Codex / Claude Code / ACP subagent providers for the DeepSeek Harness: continuable children, durable session recovery, per-role product permissions, delegation with a permission ceiling | 0.1.0-rc.8 (2026-08-20) |
| dsh-llm-codex | 16 | [yequ172672/dsh-codex-subscription](https://github.com/yequ172672/dsh-codex-subscription) · [npm](https://www.npmjs.com/package/dsh-llm-codex) | Reuse Codex CLI local login credentials to use ChatGPT subscription models in DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-acp | 15 | [openma-ai/deepseek-harness-acp](https://github.com/openma-ai/deepseek-harness-acp) · [npm](https://www.npmjs.com/package/@openma/deepseek-harness-acp) | Agent Client Protocol (ACP) adapter for DeepSeek Harness — use DeepSeek Harness from ACP clients such as Zed. | 0.1.0-rc.8 (2026-08-20) |
| dsh-timeline-houyanch | 15 | [houyanchao/dsh-timeline](https://github.com/houyanchao/dsh-timeline) · [npm](https://www.npmjs.com/package/dsh-timeline) | DeepSeek Harness (DSH) plugin: timeline navigation, starred folders, conversation export, prompt library, and quick notes in one. | 0.1.0-rc.8 (2026-08-20) |
| dsh-tavern-lingyeso | 14 | [LingyeSoul/dsh-tavern](https://github.com/LingyeSoul/dsh-tavern/tree/HEAD/packages/plugin) | DSH plugin: SillyTavern-compatible roleplay workspace with Character Card V2/V3/PNG import, World Info lore engine, presets, swipes, chat editing and streaming LLM generation. Official bundle | 0.1.0-rc.8 (2026-08-20) |
| dsh-codex-auth | 13 | [suntianc/dsh-codex-auth](https://github.com/suntianc/dsh-codex-auth) · [npm](https://www.npmjs.com/package/dsh-codex-auth) | Use the local Codex CLI ChatGPT login as a DeepSeek Harness LLM route, with a native GPT Auth settings card | 0.1.0-rc.8 (2026-08-20) |
| dsh-message-rail | 13 | [wx-yss/dsh-message-rail](https://github.com/wx-yss/dsh-message-rail) · [npm](https://www.npmjs.com/package/dsh-message-rail) | Codex 风格左侧消息导航轨道：等距刻度 + 悬停波纹 + 预览浮层 + 点击跳转用户消息 | 0.1.0-rc.8 (2026-08-20) |
| dsh-opencode-palette | 13 | [FeatherHunter/dsh-opencode-palette](https://github.com/FeatherHunter/dsh-opencode-palette/tree/HEAD/package) | 让 DeepSeek Harness 穿上 34 款经典皮肤——东京的霓虹夜色、德古拉的暗红月光、复古工坊的暖黄灯火、黑客帝国的数字雨、玫瑰松林间的风……一键换肤，即点即换，重启不丢。34 legendary skins for DeepSeek Harness — tokyonight's neon dusk, dracula's crimson moon, gruvbox's retro | 0.1.0-rc.8 (2026-08-20) |
| dsh-hud | 12 | [zexuanw958-svg/dsh-hud](https://github.com/zexuanw958-svg/dsh-hud) | Codex/Claude Code-style live session telemetry for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| runtime36 | 12 | [398894496-arch/runtime36](https://github.com/398894496-arch/runtime36) | DSH-KRouter — Agent knowledge OS. Self-evolution. Timer on by default; your vault-page API key or logged-in CLI is the key. Cursor, Codex, Claude Code, DeepSeek Harness. No vector store. | 0.1.0-rc.8 (2026-08-24) |

<sub>Showing the 25 most-starred of 310. **[all 310 →](lists/interop-migration.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Channels & remote

IM bridges and remote control: Feishu, Telegram, WeCom, DingTalk.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-qqbot | 74 | [tencent-connect/dsh-qqbot](https://github.com/tencent-connect/dsh-qqbot) · [npm](https://www.npmjs.com/package/@tencent-connect/dsh-qqbot) | QQ Bot IM channel plugin for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-remote | 70 | [liguobao/deepseek-harness-remote](https://github.com/liguobao/deepseek-harness-remote) | Secure remote control for DeepSeek Harness: paired clients view sessions, continue chats, and handle approvals while the harness stays on the host. | 0.1.0-rc.8 (2026-08-20) |
| dsh-notifier-thewolfw | 62 | [THEWOLFWALKER/dsh-notifier](https://github.com/THEWOLFWALKER/dsh-notifier) · [npm](https://www.npmjs.com/package/dsh-notifier) | DSH 统一通知推送插件：一个 notify() API 打天下 + 多渠道 adapter（telegram/dingtalk/feishu/wxpusher/pushplus/serverchan/bark/webhook），两条触发线（session/event 自动推送 + agent 工具调用）共用 adapter 注册表。零运行时依赖（只用 fetch + node:crypto）。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-lark | 42 | [omdsh-dev/dsh-lark](https://github.com/omdsh-dev/dsh-lark) · [npm](https://www.npmjs.com/package/dsh-lark-channel) | Lark/Feishu IM bot channel: chats drive agents, replies and approvals come back as messages and cards. | 0.1.0-rc.8 (2026-08-20) |
| ax-feishu-bridge | 35 | [AX1202/ax-feishu-bridge](https://github.com/AX1202/ax-feishu-bridge) · [npm](https://www.npmjs.com/package/ax-feishu-bridge) | Feishu/Lark bridge for coding agents — chat with Pi or DeepSeek Harness from Feishu or Lark | 0.1.0-rc.8 (2026-08-20) |
| dsh-lark-bridge-bihangch | 35 | [bihangchi9-creator/dsh-lark-bridge](https://github.com/bihangchi9-creator/dsh-lark-bridge) | A DeepSeek Harness (dsh) plugin that bridges dsh agents to Feishu/Lark group chats — one group, one project directory. | 0.1.0-rc.8 (2026-08-20) |
| dsh-im-gateway-zhuiyuey | 34 | [zhuiyueya/dsh-im-gateway](https://github.com/zhuiyueya/dsh-im-gateway) | 聚合 IM 网关插件（DeepSeek Harness）：把 dsh agent 接入 Telegram / Discord / Slack / 飞书 / 微信 / QQ / WhatsApp / Signal / Teams / LINE / Matrix / Mattermost / Google Chat / IRC / Twitch / Nostr / Nextcloud Talk / | 0.1.0-rc.8 (2026-08-20) |
| dsh-lark-bot | 32 | [PlutoKeating/dsh-lark-bot](https://github.com/PlutoKeating/dsh-lark-bot) · [npm](https://www.npmjs.com/package/dsh-lark-bot) | Bridge DeepSeek Harness into Feishu/Lark with streaming cards, project workspaces, approvals, and scheduling. | 0.1.0-rc.8 (2026-08-20) |
| dsh-lark-link | 27 | [amlyczz/dsh-lark-link](https://github.com/amlyczz/dsh-lark-link) | High-reliability Feishu/Lark bridge for DeepSeek Harness — QR one-click auth, multi-mode agents, card-based commands, zero-loss outbox, media in/out, session logs, reusable DSH Web GUI | 0.1.0-rc.8 (2026-08-20) |
| dsh-bridge-wenbinwb | 25 | [wenbin-wb/dsh-bridge](https://github.com/wenbin-wb/dsh-bridge) · [npm](https://www.npmjs.com/package/@wenbin_wb/dsh-bridge) | 手机扫码即可在移动端/公网继续用 DeepSeek Harness，人不在电脑前也能接着干。一键局域网二维码、Cloudflare 公网隧道、自建隧道与微信 Bot（多工作区/会话持久化/媒体/审批），无需自己搭公网服务器。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-lark-sugarfor | 25 | [sugarforever/dsh-lark](https://github.com/sugarforever/dsh-lark) · [npm](https://www.npmjs.com/package/@sugarforever/dsh-lark) | Feishu/Lark WebSocket channel plugin for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-feishu-pgzxb | 24 | [PGZXB/dsh-feishu](https://github.com/PGZXB/dsh-feishu) | The Feishu UI for DeepSeek Harness (dsh) — a dsh-native plugin: live streaming cards, in-card questions & approvals, one-QR setup. | 0.1.0-rc.8 (2026-08-20) |
| dsh-awiki | 10 | [AgentConnect/dsh-awiki](https://github.com/AgentConnect/dsh-awiki) · [npm](https://www.npmjs.com/package/dsh-awiki) | AWiki identity and messaging plugin for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-telegram-channel | 10 | [hi-wenw/dsh-telegram-channel](https://github.com/hi-wenw/dsh-telegram-channel) | DeepSeek Harness Telegram mobile remote: workspace→session picker (Web-aligned), /model switch, same trajectory — dsh-plugin | 0.1.0-rc.8 (2026-08-20) |
| dsh-promotion-toolkit | 9 | [lhmd/dsh-promotion-toolkit](https://github.com/lhmd/dsh-promotion-toolkit) | DeepSeek Harness-native publicity toolkit: turn any long-form source into a source-grounded, platform-native promotion matrix. | 0.1.0-rc.8 (2026-08-20) |
| DeepSeek-harness-qqbot | 8 | [sliverp/DeepSeek-harness-qqbot](https://github.com/sliverp/DeepSeek-harness-qqbot) | QQ Bot channel bridge for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-email | 8 | [STARDUSTLC666/dsh-email](https://github.com/STARDUSTLC666/dsh-email) · [npm](https://www.npmjs.com/package/dsh-email) | IMAP/SMTP email tools for DeepSeek Harness: list, read, search and send mail, with QQ/163/126/Sina/Aliyun/Gmail/Outlook/iCloud presets. | 0.1.0-rc.8 (2026-08-20) |
| dsh-feishu | 8 | [xmanrui/dsh-feishu](https://github.com/xmanrui/dsh-feishu) | DeepSeek Harness plugin for multi-bot Feishu setup and streaming chat | 0.1.0-rc.8 (2026-08-20) |
| dsh-im-bridge-biboyang | 8 | [BiBoyang/dsh-im-bridge](https://github.com/BiBoyang/dsh-im-bridge) | DSH 微信桥插件：turn/approval 推送到微信，微信远程监控/批准/驱动 agent（iLink 通道，持久去重/分段/合并/白名单） | 0.1.0-rc.8 (2026-08-20) |
| dsh-wechat-notify | 8 | [wssfk12138/dsh-wechat-notify](https://github.com/wssfk12138/dsh-wechat-notify) | DeepSeek Harness (dsh) plugin that registers a wechat_notify tool so agents can send WeChat notifications through a local ClawBot channel. | 0.1.0-rc.8 (2026-08-20) |
| dsh-channel-feishu | 7 | [ZinkLu/dsh-channel](https://github.com/ZinkLu/dsh-channel/tree/HEAD/packages/channel-feishu) | A DeepSeek Harness channel plugin written entirely by DeepSeek Harness itself. | 0.1.0-rc.8 (2026-08-20) |
| dsh-channel-telegram | 7 | [ZinkLu/dsh-channel](https://github.com/ZinkLu/dsh-channel/tree/HEAD/packages/channel-telegram) | A DeepSeek Harness channel plugin written entirely by DeepSeek Harness itself. | 0.1.0-rc.8 (2026-08-20) |
| dsh-channel-wechat | 7 | [ZinkLu/dsh-channel](https://github.com/ZinkLu/dsh-channel/tree/HEAD/packages/channel-wechat) | A DeepSeek Harness channel plugin written entirely by DeepSeek Harness itself. | 0.1.0-rc.8 (2026-08-20) |
| dsh-chatnode-wechat | 7 | [Jesse-njx/dsh-chatnode-wechat](https://github.com/Jesse-njx/dsh-chatnode-wechat) | Chat with, monitor, and approve your DSH agents from WeChat — an iLink gateway + conversation node bundle for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-lark-bridge | 7 | [imetn/dsh-lark-bridge](https://github.com/imetn/dsh-lark-bridge) | Bidirectional Lark/Feishu control bridge for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 197. **[all 197 →](lists/channels-remote.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Notifications

Alerting the human: desktop, sound, even a phone call.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-notification | 74 | [omdsh-dev/dsh-notification](https://github.com/omdsh-dev/dsh-notification) | Desktop notifications for turn completions, with per-outcome controls and include/exclude keyword rules | 0.1.0-rc.8 (2026-08-20) |
| dsh-web-ui-notify | 22 | [bill9109/dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) | Desktop notifications for approvals, questions, and turn completion so you can leave the dsh tab. | 0.1.0-rc.8 (2026-08-20) |
| dsh-update-checker-airmetro | 10 | [Airmetro/dsh-update-checker](https://github.com/Airmetro/dsh-update-checker) · [npm](https://www.npmjs.com/package/dsh-update-checker) | Auto-check DeepSeek Harness for new releases and notify the user in the Web GUI with a locale-aware banner. | 0.1.0-rc.8 (2026-08-20) |
| dsh-notification-center | 9 | [610la/dsh-notification-center](https://github.com/610la/dsh-notification-center) | 通知中心：对话/任务完成、报错、等待批准等事件触发浏览器通知 + 21 种匹配音效，每类事件独立配置（音效/文件/URL/音量/开关）。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-grafana | 7 | [guhanfei-ai/dsh-grafana](https://github.com/guhanfei-ai/dsh-grafana) · [npm](https://www.npmjs.com/package/dsh-grafana) | Grafana dashboard editor for DeepSeek Harness: paste a dashboard URL, edit JSON via conversation, push back via HTTP API | 0.1.0-rc.8 (2026-08-20) |
| dsh-lark-meeting-notifier | 7 | [yeruizhi/dsh-lark-meeting-notifier](https://github.com/yeruizhi/dsh-lark-meeting-notifier) | Feishu meeting reminder dock: flash when it is time to leave the agent and join a human meeting. | 0.1.0-rc.8 (2026-08-20) |
| dsh-task-notify-linxin | 7 | [ltao0829/dsh-task-notify](https://github.com/ltao0829/dsh-task-notify) · [npm](https://www.npmjs.com/package/@ltao0829/dsh-task-notify) | Task-completion reminder for DeepSeek Harness: in-page toast, OS notification, and sound when an agent turn or background job finishes | 0.1.0-rc.8 (2026-08-20) |
| dsh-zen-remote | 7 | [KyoMio/dsh-zen-remote](https://github.com/KyoMio/dsh-zen-remote) · [npm](https://www.npmjs.com/package/dsh-zen-remote) | 把 DeepSeek Harness 变成手机 App：移动端界面重排（两级页面栈、会话列表主屏、composer 重排、手势、附件上传）+ 配对码认证网关 + PWA 安装 + 真 Web Push。Complete mobile plugin for DeepSeek Harness (DSH): app-shell mobile UI, pairing-code gateway for | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-call-me | 6 | [radres/dsh-plugin-call-me](https://github.com/radres/dsh-plugin-call-me) | Your DeepSeek Harness agent rings your phone: it asks out loud, you answer out loud, and what you said steers the run. | 0.1.0-rc.8 (2026-08-20) |
| dsh-ding | 5 | [CAOGGL/dsh-ding](https://github.com/CAOGGL/dsh-ding) | Play a sound and show a Windows toast when a DeepSeek Harness turn finishes, with a Web UI bell control. | 0.1.0-rc.8 (2026-08-20) |
| dsh-notify-on-complete | 5 | [pitetow/dsh-notify-on-complete](https://github.com/pitetow/dsh-notify-on-complete) | Desktop notifications for DeepSeek Harness (dsh): get a system notification when a run completes, the model asks a question, or waits for approval. Zero-dependency Cordis plugin. | 0.1.0-rc.8 (2026-08-20) |
| dsh-messager | 4 | [ly6170/dsh-messager](https://github.com/ly6170/dsh-messager) | DeepSeek Harness 通知插件：会话交互/任务完成/出错时通过系统通知、浏览器通知、飞书机器人（webhook）推送提醒 | 0.1.0-rc.8 (2026-08-20) |
| dsh-notify-sound | 4 | [xxxxxxxyu/dsh-notify-sound](https://github.com/xxxxxxxyu/dsh-notify-sound) | DSH web plugin: plays a sound when the agent finishes replying (turn/end). Sound, volume and on/off are configurable in the Settings page. | 0.1.0-rc.8 (2026-08-20) |
| dsh-perlica-ding | 4 | [117BS/dsh-perlica-ding](https://github.com/117BS/dsh-perlica-ding) | 佩丽卡终端 (Perlica Terminal)：明日方舟终末地佩丽卡主题的分级任务提示音插件。计划出方案、任务完成、需要你回应、出错时播放不同提示音，普通问答静音。Perlica-themed tiered sound notifications for DeepSeek Harness: plan ready, task done, needs your input, error tones. | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-notify | 4 | [huguangyu666/dsh-plugin-notify](https://github.com/huguangyu666/dsh-plugin-notify) · [npm](https://www.npmjs.com/package/dsh-plugin-notify) | Notification outlet: desktop toasts, Chinese TTS, and sounds when long tasks finish, error, or need you. | 0.1.0-rc.8 (2026-08-20) |
| dsh-task-notify | 4 | [kaotusi/dsh-task-notify](https://github.com/kaotusi/dsh-task-notify) | System-level task notifications for DeepSeek Harness (DSH): approval requests, awaited replies, and finished background jobs / subagents / workflows — pushed to the OS notification center with. | 0.1.0-rc.8 (2026-08-20) |
| dsh-win-notify | 4 | [MuziIsabel/dsh-win-notify](https://github.com/MuziIsabel/dsh-win-notify) | DSH plugin: Windows toast notification with sound when an agent task completes. | 0.1.0-rc.8 (2026-08-20) |
| dsh-dingtalk-stardustlc666 | 3 | [STARDUSTLC666/dsh-dingtalk](https://github.com/STARDUSTLC666/dsh-dingtalk) · [npm](https://www.npmjs.com/package/dsh-dingtalk) | 钉钉群机器人单向通知工具（DeepSeek Harness 插件）：agent 推送 Markdown / 纯文本消息到钉钉群，支持加签安全模式。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-notify-center | 3 | [SingleOne/dsh-notify-center](https://github.com/SingleOne/dsh-notify-center) | Unified native desktop and webhook notifications for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-update-notifier | 3 | [arvin-yd/dsh-update-notifier](https://github.com/arvin-yd/dsh-update-notifier) | Red-dot update checker for DeepSeek Harness: warns in the sidebar footer when a newer @deepseek-ai/dsh release exists on npm. | 0.1.0-rc.8 (2026-08-20) |
| dsh-web-ui-notify-omdsh | 3 | [omdsh-dev/dsh-web-ui-notify](https://github.com/omdsh-dev/dsh-web-ui-notify) | Desktop notifications for DeepSeek Harness approvals, questions, and turn completion — so neither DSH nor you end up waiting while you browse another tab. | 0.1.0-rc.8 (2026-08-20) |
| OffPeak | 3 | [christophersmith2737-commits/OffPeak](https://github.com/christophersmith2737-commits/OffPeak) | Peak-hour price guard for DeepSeek API tidal pricing: intercept sends during peak hours (Beijing 09:00-12:00 / 14:00-18:00) and schedule them to run at off-peak prices. / DeepSeek 峰谷定价高峰拦截提醒：高峰时段拦截发送 | 0.1.0-rc.8 (2026-08-20) |
| dsh-audio-alert | 2 | [ellelkktrraaa/dsh-audio-alert](https://github.com/ellelkktrraaa/dsh-audio-alert) | Browser audio alerts for DeepSeek Harness attention edges: approval requests, ask-user questions, and finished turns. | 0.1.0-rc.8 (2026-08-20) |
| dsh-bell-notify | 2 | [Laplace-bit/dsh-bell-notify](https://github.com/Laplace-bit/dsh-bell-notify) · [npm](https://www.npmjs.com/package/dsh-bell-notify) | DeepSeek Harness (dsh) plugin: lifecycle bells & status. dsh Agent 生命周期铃声与状态插件（零音频文件，Web Audio 合成）。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-client-ui-notify | 2 | [byh819-png/dsh-client-ui-notify](https://github.com/byh819-png/dsh-client-ui-notify) | Sound-alert plugin: rings on answer-complete and authorization-needed edges; built-in ringtone, text-to-speech, or a custom audio file, configurable from a General settings row | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 153. **[all 153 →](lists/notifications.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Usage & cost

Token accounting, billing, balance, quota.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| treg | 574 | [superdesigndev/treg](https://github.com/superdesigndev/treg) | OpenRouter for tools - 2,600 agent-friendly tools, pay for the usage, not subscription | 0.1.0-rc.8 (2026-08-20) |
| anolisa | 389 | [alibaba/anolisa](https://github.com/alibaba/anolisa/tree/HEAD/src/tokenless/adapters/tokenless/dsh) | ANOLISA (Agentic Nexus Operating Layer & Interface System Architecture) \| Agentic OS with runtime, security, observability, and Tokenless response compression for lower token usage and cost. | unverified |
| dsh-cost-meter-han14131 | 175 | [Han-1413141/dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) · [npm](https://www.npmjs.com/package/dsh-cost-meter) | DeepSeek Harness 会话费用统计插件:本会话成本、当日费用、历史记录与官方价格同步,界面中英双语。Session cost tracking plugin for DeepSeek Harness: per-conversation cost, daily totals, history and official price sync, with a bilingual | 0.1.0-rc.8 (2026-08-20) |
| dsh-tokenledger | 142 | [zh667/TokenLedger](https://github.com/zh667/TokenLedger) · [npm](https://www.npmjs.com/package/dsh-tokenledger) | Token usage accounting for DeepSeek Harness, reconciled against New API and Sub2API relay-site billing | 0.1.0-rc.8 (2026-08-20) |
| dsh-usage-stats-ychris | 114 | [Ychris12138/dsh-usage-stats](https://github.com/Ychris12138/dsh-usage-stats) · [npm](https://www.npmjs.com/package/@ychris12138/dsh-usage-stats) | Token usage heatmap, per-model breakdowns, and DeepSeek account balance for the DeepSeek Harness Web GUI. | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-control-center | 64 | [feibi-mochi/deepseek-harness-control-center](https://github.com/feibi-mochi/deepseek-harness-control-center) · [npm](https://www.npmjs.com/package/deepseek-harness-wallet) | Local-first account monitoring, usage accounting, official recharge, completion reminders, flexible layout, and host-gated session controls for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-AuthInOne | 61 | [Stormycry-cryp/dsh-AuthInOne](https://github.com/Stormycry-cryp/dsh-AuthInOne) | OpenAI Codex, Kimi Code, and compatibility Provider login, API/custom providers, model switching, token usage analytics, and cost tracking for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-green-meter | 61 | [dclichang2022/dsh-green-meter](https://github.com/dclichang2022/dsh-green-meter) | Energy & carbon metering for DeepSeek Harness: per-turn/per-request energy, cache carbon savings, electricity cost. | 0.1.0-rc.8 (2026-08-20) |
| dsh-balance-plugin-francisx | 55 | [yxxbc/dsh-balance-plugin](https://github.com/yxxbc/dsh-balance-plugin) | DeepSeek 余额监控与用量统计（DSH 插件）：余额监控 · 官方充值入口 · Miyu 风格用量统计 · 三方插件管理 | 0.1.0-rc.8 (2026-08-20) |
| dsh-usage-plugin | 35 | [feiyang-dev/dsh-usage-plugin](https://github.com/feiyang-dev/dsh-usage-plugin) · [npm](https://www.npmjs.com/package/@feiyang666/deepseekharnessdesktop) | DeepSeek Harness usage & cost tracker plugin: per-call token/cache-hit stats, peak/off-peak billing, DeepSeek balance query, CSV/JSON/PNG export with custom destination, and persistent local storage. | 0.1.0-rc.8 (2026-08-20) |
| dsh-usage-stats-make0209 | 27 | [Make0209/dsh-usage-stats](https://github.com/Make0209/dsh-usage-stats) | Usage stats for DeepSeek Harness: heatmap, token and cache-hit board, balance, and workspace aliases. | 0.1.0-rc.8 (2026-08-20) |
| dsh-balance | 23 | [crazywoola/dsh-balance](https://github.com/crazywoola/dsh-balance) · [npm](https://www.npmjs.com/package/@pinkbanana/dsh-balance) | Shows API balances and available models in DeepSeek Harness Settings. | 0.1.0-rc.8 (2026-08-20) |
| dsh-whale-balance | 23 | [enchangcui340-cloud/dsh-whale-balance](https://github.com/enchangcui340-cloud/dsh-whale-balance) | DeepSeek Harness 原生插件：页面右下角的小鲸鱼余额提醒挂件 | 0.1.0-rc.8 (2026-08-20) |
| dsh-usage | 22 | [Aisland-SJL/dsh-usage](https://github.com/Aisland-SJL/dsh-usage) | Persistent balance badge and token usage panel for the dsh web GUI | 0.1.0-rc.8 (2026-08-20) |
| dsh-balance-meter | 19 | [Ghost011118/dsh-balance-meter](https://github.com/Ghost011118/dsh-balance-meter) | DeepSeek account balance and usage readout for the dsh web GUI: queries the official Get User Balance endpoint and shows current remaining balance and spend on the page. | 0.1.0-rc.8 (2026-08-20) |
| dsh-codex-subscription | 19 | [WSL043/dsh-codex-subscription](https://github.com/WSL043/dsh-codex-subscription) · [npm](https://www.npmjs.com/package/dsh-codex-subscription) | Native ChatGPT and Codex subscription route with quota for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-client-pricing | 17 | [Miyazawai/dsh-client-pricing](https://github.com/Miyazawai/dsh-client-pricing) · [npm](https://www.npmjs.com/package/dsh-client-pricing) | Live DeepSeek API pricing badge in the session header, with peak/off-peak flash and pro rates. | 0.1.0-rc.8 (2026-08-20) |
| dsh-bottom-info-bar | 14 | [songoao25/dsh-bottom-info-bar](https://github.com/songoao25/dsh-bottom-info-bar/tree/HEAD/plugin) · [npm](https://www.npmjs.com/package/dsh-bottom-info-bar) | DeepSeek Harness 底部信息栏插件：替换对话输入框下方的原生统计栏，显示服务商/具体模型、真实余额、高峰(琥珀)/空闲(绿)价与倒计时、本对话·今日·近一月·全部花费。安装一次，每次打开 DSH 自动生效。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-opencode-go-usage | 13 | [Xenia0922/dsh-opencode-go-usage](https://github.com/Xenia0922/dsh-opencode-go-usage) | OpenCode Go 用量与花费面板 — DeepSeek Harness 插件:可拖拽缩放的悬浮仪表盘,实时展示 OpenCode Go 配额、逐请求用量与花费 | 0.1.0-rc.8 (2026-08-20) |
| dsh-quota-meter-aishushu | 13 | [ai-shushu/dsh-quota-meter](https://github.com/ai-shushu/dsh-quota-meter) | 会话额度监控（官方 dsh bundle）：按 DeepSeek 官方价格记账、额度耗尽拦截 + 输入框上方进度条 UI | 0.1.0-rc.8 (2026-08-20) |
| context-vista | 12 | [GooodWei/context-vista](https://github.com/GooodWei/context-vista) · [npm](https://www.npmjs.com/package/context-vista) | A live context-window donut for DeepSeek Harness: token usage, compaction savings, and cost at a glance | 0.1.0-rc.8 (2026-08-20) |
| dsh-redteam-model | 12 | [SeaOf0/dsh-redteam-model](https://github.com/SeaOf0/dsh-redteam-model/tree/HEAD/plugins/dsh-hunter) | DSH hunter plugin: FOFA / Hunter(qianxin) / Quake(360) aggregated asset search with unified DSL → per-platform syntax conversion, quota-aware pagination/export, API-key settings panel, and the | 0.1.0-rc.8 (2026-08-20) |
| dsh-token-usage-leemancheung | 12 | [LeemanCheung/dsh-token-usage](https://github.com/LeemanCheung/dsh-token-usage) | Persistent token usage records and dashboard for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-usage-stats ⭐ | 12 | [lanlandeli/dsh-usage-stats](https://github.com/lanlandeli/dsh-usage-stats) · [npm](https://www.npmjs.com/package/dsh-usage-stats) | Beautiful token analytics for DeepSeek Harness — trends, activity heatmaps, model breakdowns, and data exports. | 0.1.0-rc.8 (2026-08-20) |
| dsh-web-billing | 12 | [bpc-oss/dsh-web-billing](https://github.com/bpc-oss/dsh-web-billing) | RMB/USD token-billing plugin for DSH web: official-policy auto pricing (incl. peak/off-peak), per-message ledger, account balance, locale-driven currency display | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 620. **[all 620 →](lists/usage-cost.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Observability & evidence

Diagnostics, logs, audits, content-addressed proofs.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-status-rotator | 52 | [01Virex/dsh-status-rotator](https://github.com/01Virex/dsh-status-rotator) · [npm](https://www.npmjs.com/package/dsh-status-rotator) | Rotates the DSH chat turn-status label ("Deep diving...") through user-defined phrases every few seconds. | 0.1.0-rc.8 (2026-08-20) |
| dsh-whale-report | 28 | [SenmuuuuW/dsh-whale-report](https://github.com/SenmuuuuW/dsh-whale-report) | 鲸鱼记事本 — 你的 Agent 年度/月度/周度/日报：从会话事件日志生成数据新闻官式报告，任意区间、定时生成。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-security-audit | 14 | [omdsh-dev/dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) | Read-only local security audit: config, credential metadata, plugin provenance, sessions, and network exposure. | 0.1.0-rc.8 (2026-08-20) |
| dsh-session-health | 9 | [omdsh-dev/dsh-session-health](https://github.com/omdsh-dev/dsh-session-health) | Frame-level diagnostics over multi-frame zstd session logs: torn, corrupt, or empty session detection. | 0.1.0-rc.8 (2026-08-20) |
| dsh-anchored-monitor | 8 | [Aik358/dsh-anchored-monitor](https://github.com/Aik358/dsh-anchored-monitor) · [npm](https://www.npmjs.com/package/@a9i5k4/dsh-anchored-monitor) | DSH 实时思维链锚定监控插件: we/let's/let me 指纹波段检测(spec/mixed/react) + L1温和引导/L2强制重置/L3会话重启分级干预; 左侧栏入口 + 液体毛玻璃浮层 + 变阻器式思考强度条; 独立监控进程 + JSONL 实验日志 + 离线回放/参数校准; 变阻器条可选严肃/「滑动变祖器」梗双皮肤。 | 0.1.0-rc.8 (2026-08-20) |
| upstream-radar | 8 | [MicroMilo/upstream-radar](https://github.com/MicroMilo/upstream-radar) · [npm](https://www.npmjs.com/package/upstream-radar) | Always-on vulnerability and breaking-change impact monitoring for DeepSeek Harness plugins. | 0.1.0-rc.8 (2026-08-20) |
| dsh-inspector | 7 | [CocoSgt/dsh-inspector](https://github.com/CocoSgt/dsh-inspector) · [npm](https://www.npmjs.com/package/dsh-inspector) | Inspect and manage the live instruction chain and project skills for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-tool-turbo | 7 | [Electricitysheep/dsh-tool-turbo](https://github.com/Electricitysheep/dsh-tool-turbo) | DSH host plugin: cuts tool-call latency by auto-downgrading reasoning_effort for simple tool tasks, with per-tool timing telemetry. | 0.1.0-rc.8 (2026-08-20) |
| DSH-changeproof | 5 | [Apageoflove/DSH-changeproof](https://github.com/Apageoflove/DSH-changeproof) | ChangeProof - change-relevance + evidence-freshness quality plugin for DeepSeek Harness (DSH) | 0.1.0-rc.8 (2026-08-20) |
| dsh-capability-receipt | 4 | [dongsheng123132/dsh-capability-receipt](https://github.com/dongsheng123132/dsh-capability-receipt) | Content-addressed receipts for skills actually loaded by DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-lineage | 4 | [dongsheng123132/dsh-lineage](https://github.com/dongsheng123132/dsh-lineage) | Content-addressed data and action lineage evidence for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-monitor-iambbp | 4 | [iambbp/dsh-monitor](https://github.com/iambbp/dsh-monitor) | DEEPSEEK 监控插件（峰谷时段版）— DSH 原生插件：实时 API 用量监控与峰谷价格提示悬浮窗 | 0.1.0-rc.8 (2026-08-24) |
| dsh-observation-journal | 4 | [Cavan-Ou/dsh-observation-journal](https://github.com/Cavan-Ou/dsh-observation-journal) | Zero-intrusion session telemetry: one observation card per session with task, model, tools, and failure stats. | 0.1.0-rc.8 (2026-08-20) |
| dsh-session-audit | 4 | [bwndlct/dsh-session-audit](https://github.com/bwndlct/dsh-session-audit) | Session execution analytics and audit reports for DeepSeek Harness. Understand how your agent actually worked: steps, tool calls, failures, repeated actions, token usage and verification signals. | 0.1.0-rc.8 (2026-08-20) |
| dsh-trajectory-governance | 4 | [dfycaly98931680/dsh-trajectory-governance](https://github.com/dfycaly98931680/dsh-trajectory-governance) | Agent trajectory governance & anomaly diagnosis for DeepSeek Harness: rebuild structured multi-branch trajectory trees from the session/event feed, keep observation-layer snapshots, and run three t... | 0.1.0-rc.8 (2026-08-20) |
| dsh-verification-receipt | 4 | [030611/dsh-verification-receipt](https://github.com/030611/dsh-verification-receipt) · [npm](https://www.npmjs.com/package/dsh-verification-receipt) | Privacy-minimal heuristic per-turn execution summaries for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| MathModelingAgent | 4 | [yohanchen1/MathModelingAgent](https://github.com/yohanchen1/MathModelingAgent) | Evidence-driven mathematical modeling and verification skills for DeepSeek Harness | 0.1.0-rc.8 (2026-08-24) |
| qiushi-dsh-evidence-audit | 4 | [030611/qiushi-dsh-evidence-audit](https://github.com/030611/qiushi-dsh-evidence-audit) · [npm](https://www.npmjs.com/package/qiushi-dsh-evidence-audit) | Observe-only hash-chained evidence receipts for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-2origin | 3 | [dongsheng123132/dsh-2origin](https://github.com/dongsheng123132/dsh-2origin) | Evidence-first 2Origin state projection, diff and immutable freeze for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-action-parity | 3 | [dongsheng123132/dsh-action-parity](https://github.com/dongsheng123132/dsh-action-parity) | Evidence that CLI, MCP and GUI bindings reach the same DeepSeek Harness action core | 0.1.0-rc.8 (2026-08-20) |
| dsh-audit-bundle | 3 | [dongsheng123132/dsh-audit-bundle](https://github.com/dongsheng123132/dsh-audit-bundle) | Content-addressed audit indexes across independent DeepSeek Harness evidence producers | 0.1.0-rc.8 (2026-08-20) |
| dsh-benchmark | 3 | [dongsheng123132/dsh-benchmark](https://github.com/dongsheng123132/dsh-benchmark) | Reproducible deterministic benchmark evidence for DSH tools and plugins | 0.1.0-rc.8 (2026-08-20) |
| dsh-benchmark-evidence | 3 | [LeslieWylie/dsh-benchmark-evidence](https://github.com/LeslieWylie/dsh-benchmark-evidence) | Benchmark manifests, fail-closed gates, artifact contracts, and result integrity skills for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-character-profiler | 3 | [MlittleFriend/dsh-character-profiler](https://github.com/MlittleFriend/dsh-character-profiler) | DSH 写作插件：角色性格侧写档案 + 出场权重/占比统计 + 行为偏离度检测。为长篇小说提供人物一致性的量化监控。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-download-progress | 3 | [Fro2en12/dsh-download-progress](https://github.com/Fro2en12/dsh-download-progress) | DSH web plugin: 下载进度面板——URL 下载器、agent shell/SSH 传输追踪、工作区黑箱下载监控，拖拽浮窗实时显示进度。（AI 产物：设计、编码、测试与文档均由 AI 完成） | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 141. **[all 141 →](lists/observability-evidence.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Safety & approvals

Permission tiers, gates, redaction, protection.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| Aegis | 1120 | [GanyuanRan/Aegis](https://github.com/GanyuanRan/Aegis) | Make AI coding agents architecture-aware: baseline-first, evidence-verified, drift-checked, and safe across long tasks. | 0.1.0-rc.8 (2026-08-20) |
| k8e | 478 | [xiaods/k8e](https://github.com/xiaods/k8e/tree/HEAD/plugins/deepseek-harness/packages/dsh-k8e-sandbox-bundle) | Installable dsh bundle mounting the k8e-sandbox execution world (KIP-20). | 0.1.0-rc.8 (2026-08-20) |
| dsh-mobile-sayach | 138 | [saya-ch/dsh-mobile](https://github.com/saya-ch/dsh-mobile) · [npm](https://www.npmjs.com/package/dsh-mobile) | DeepSeek Harness 移动端适配与安全局域网访问插件，支持 Android App 和手机浏览器。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-auto-mode | 124 | [NanmiCoder/dsh-auto-mode](https://github.com/NanmiCoder/dsh-auto-mode) · [npm](https://www.npmjs.com/package/@nanmicoder/dsh-auto-mode) | Fail-closed automatic permission policy for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-undo-plugin | 120 | [lire1131/dsh-undo-savepoint](https://github.com/lire1131/dsh-undo-savepoint) · [npm](https://www.npmjs.com/package/dsh-undo-savepoint) | DSH undo/rollback system: snapshot config files on change, undo/redo the last action from the WebUI or by chat, and roll back broken plugin trees without reinstalling. Works even when DSH fails to. | 0.1.0-rc.8 (2026-08-20) |
| codex-guard | 49 | [Akimiya-z/codex-guard](https://github.com/Akimiya-z/codex-guard) | Quality gate for AI/Codex-generated pull requests: blocks TODO leftovers, leaked secrets, messy commits and failing CI before they hit main. | 0.1.0-rc.8 (2026-08-24) |
| dsh-permission-rules | 31 | [PerryLink/dsh-permission-rules](https://github.com/PerryLink/dsh-permission-rules) · [npm](https://www.npmjs.com/package/dsh-permission-rules) | Declarative Claude Code-style permission rules for DeepSeek Harness: ordered allow/deny/ask rules with tool-name, argument (glob/regex), and workspace-path matching on the tools/pre-execute waterfall, | 0.1.0-rc.8 (2026-08-20) |
| dsh-secure-audit | 23 | [PensiveFei/dsh-secure-audit](https://github.com/PensiveFei/dsh-secure-audit) | Read-only security & compliance toolkit for DeepSeek Harness: prompt-injection detection (rule engine with a pluggable model classifier), Chinese-PII redaction, and a local configuration security | 0.1.0-rc.8 (2026-08-20) |
| dsh-clawrouter | 20 | [BlockRunAI/dsh-clawrouter](https://github.com/BlockRunAI/dsh-clawrouter) · [npm](https://www.npmjs.com/package/dsh-clawrouter) | Strong-model review before risky tool calls, plus many models from one wallet. | 0.1.0-rc.8 (2026-08-20) |
| dsh-network-settings | 20 | [kanneiren/dsh-network-settings](https://github.com/kanneiren/dsh-network-settings) | DSH Network Settings: Windows / WSL network status, diagnostics and safe repair for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-reminder | 13 | [Aisland-SJL/dsh-reminder](https://github.com/Aisland-SJL/dsh-reminder) | Bottom-right reminder cards for the DeepSeek Harness web GUI: an amber persistent card when an approval waits for you, a green self-dismissing card when a task completes | 0.1.0-rc.8 (2026-08-20) |
| dsh-approve-for-me | 12 | [timeance/dsh-approve-for-me](https://github.com/timeance/dsh-approve-for-me) · [npm](https://www.npmjs.com/package/dsh-approve-for-me) | Rule-gated automatic approval for DeepSeek Harness sandbox escalations with an optional LLM reviewer and native human fallback. | 0.1.0-rc.8 (2026-08-20) |
| dsh-auto-approve | 10 | [Jiao-XXX/dsh-auto-approve](https://github.com/Jiao-XXX/dsh-auto-approve) · [npm](https://www.npmjs.com/package/dsh-auto-approve) | A conservative automatic approval preset for DeepSeek Harness sandbox escalations | 0.1.0-rc.8 (2026-08-20) |
| dsh-webui-auth | 8 | [Yuuz12/dsh-webui-auth](https://github.com/Yuuz12/dsh-webui-auth) · [npm](https://www.npmjs.com/package/dsh-webui-auth) | WebUI login gate for DeepSeek Harness: account/password in Settings, then HTTP, bundle, API, and WebSocket require a session cookie. | 0.1.0-rc.8 (2026-08-20) |
| dshscan | 8 | [shaoshi20/dshscan](https://github.com/shaoshi20/dshscan) · [npm](https://www.npmjs.com/package/@shaoshi/dshscan) | DShScan - DSH plugin security scanner inspired by NVIDIA SkillSpector | 0.1.0-rc.8 (2026-08-20) |
| dsh-approval-llm | 7 | [Letter2025/dsh-approval-llm](https://github.com/Letter2025/dsh-approval-llm) · [npm](https://www.npmjs.com/package/dsh-approval-llm) | Model-based permission approval (approve-for-me) for DeepSeek Harness: an approval/request answerer backed by a separate reviewer model | 0.1.0-rc.8 (2026-08-20) |
| dsh-multi-tenant | 7 | [GuoMonth/dsh-multi-tenant](https://github.com/GuoMonth/dsh-multi-tenant) | Multi-tenant SaaS extension for DeepSeek Harness (DSH): tenant identity, session ownership, authorization boundaries, tenant-aware MCP, and audit. | 0.1.0-rc.8 (2026-08-20) |
| dsh-ankh-guard | 6 | [Khorsheed/dsh-ankh-guard](https://github.com/Khorsheed/dsh-ankh-guard) | Hard gate for self-modification restarts: a green-build credential bound to the git HEAD, checked before any restart of the running instance | 0.1.0-rc.8 (2026-08-20) |
| dsh-file-claim | 6 | [Nwflower/dsh-file-claim](https://github.com/Nwflower/dsh-file-claim) · [npm](https://www.npmjs.com/package/dsh-file-claim) | Write in parallel, never overwrite — file claim / protection for concurrent DeepSeek Harness (DSH) sessions working the same workspace: claim/release, heartbeat stale takeover, and an async. | 0.1.0-rc.8 (2026-08-20) |
| dsh-multi-folder | 6 | [AngelosZou/dsh-multi-folder](https://github.com/AngelosZou/dsh-multi-folder) · [npm](https://www.npmjs.com/package/dsh-multi-folder) | DeepSeek Harness plugin: secondary working directories for a project. The agent keeps the primary workspace as cwd, gains equal write/exec permissions on configured secondary directories under workspa | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-net-access | 6 | [Gumiho12345/dsh-plugin-net-access](https://github.com/Gumiho12345/dsh-plugin-net-access) | Net Access permission preset for DeepSeek Harness (Windows): HTTPS works inside the sandbox while file writes stay confined like workspace-write. | 0.1.0-rc.8 (2026-08-20) |
| deepseek-heartflow | 5 | [yun520-1/deepseek-heartflow](https://github.com/yun520-1/deepseek-heartflow) · [npm](https://www.npmjs.com/package/@yun520-1/deepseek-heartflow) | HeartFlow gate for DSH: automatic output supervision plus a heartflow_check tool. | broken against 0.1.0-rc.6 |
| dsh-auth-gateway | 5 | [xbzbing/dsh-auth-gateway](https://github.com/xbzbing/dsh-auth-gateway) | Password login gateway plugin for dsh web: auto-generated initial password with forced onboarding, login, password change with real request interception, and OTP two-factor authentication. | 0.1.0-rc.8 (2026-08-20) |
| dsh-auto | 5 | [simon300000/dsh-auto](https://github.com/simon300000/dsh-auto) | Model-reviewed Auto Approve permission preset for the DeepSeek Harness Web UI. | 0.1.0-rc.8 (2026-08-20) |
| dsh-doctor-coppynig | 5 | [coppynight/dsh-doctor](https://github.com/coppynight/dsh-doctor/tree/HEAD/.dsh-plugin) | flutter-doctor style diagnose-and-repair for DeepSeek Harness: install-level + in-harness checks, safe fixes | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 319. **[all 319 →](lists/safety-approvals.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Plugin managers & stores

In-UI stores, installers, skill managers.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-market | 2113 | [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) · [npm](https://www.npmjs.com/package/dshmarket) | Visual plugin market inside DeepSeek Harness — browse, search, and one-click install community plugins. · DSH 可视化插件市场：逛一逛，点一下，装好。 | 0.1.0-rc.8 (2026-08-20) |
| agentrq | 1088 | [agentrq/agentrq](https://github.com/agentrq/agentrq/tree/HEAD/plugins/deepseek-harness) · [npm](https://www.npmjs.com/package/@agentrq/dsh-plugin-agentrq) | AgentRQ task manager for DeepSeek Harness: create, manage, and auto-pull AgentRQ tasks without leaving the harness | 0.1.0-rc.8 (2026-08-20) |
| awesome-deepseek-harness | 187 | [Dominic789654/awesome-deepseek-harness](https://github.com/Dominic789654/awesome-deepseek-harness/tree/HEAD/plugins/dsh-code-review) | Code review assistant for DeepSeek Harness: code_review_context collects deterministic git diff context; a bundled skill drives the review checklist. | 0.1.0-rc.8 (2026-08-20) |
| awesome-deepseek-harness-plugins | 176 | [imsai-sh/awesome-deepseek-harness-plugins](https://github.com/imsai-sh/awesome-deepseek-harness-plugins/tree/HEAD/packages/dsh-1024store) | The 1024 Store plugin market inside DeepSeek Harness. | unverified |
| dsh-plugin-marketplace | 140 | [bradeGithub/DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) | Web GUI plugin marketplace: browse, install, and update GitHub topic dsh-plugin packages from inside DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-skill-mcp-panel | 100 | [Fishquito7/dsh-skill-mcp-panel](https://github.com/Fishquito7/dsh-skill-mcp-panel) | dsh-skill-mcp-panel: manage skills and MCP servers from the DSH web settings UI plus the unified dsh-panel CLI. | 0.1.0-rc.8 (2026-08-20) |
| dsh-webui-market-plugin | 100 | [Sanqi-normal/dsh-webui-market-plugin](https://github.com/Sanqi-normal/dsh-webui-market-plugin) · [npm](https://www.npmjs.com/package/@sanqi-normal/dsh-webui-market-plugin) | In-harness community plugin market for the dsh web GUI: browse, install, and uninstall into a profile. | 0.1.0-rc.8 (2026-08-20) |
| dsh-find-plugin | 84 | [awesome-dsh-plugin/dsh-find-plugin](https://github.com/awesome-dsh-plugin/dsh-find-plugin) · [npm](https://www.npmjs.com/package/dsh-find-plugin) | Find DeepSeek Harness plugins from inside the agent via live GitHub dsh-plugin topic search, ranked by stars. | 0.1.0-rc.8 (2026-08-20) |
| zat-dsh-engine | 79 | [mishibeikejie/zat-dsh-engine](https://github.com/mishibeikejie/zat-dsh-engine) | Visual plugin marketplace for DeepSeek Harness: browse, search, install, update, and uninstall community plugins. | 0.1.0-rc.8 (2026-08-20) |
| ru-marketplace-mcp | 71 | [Vladimir-Human/ru-marketplace-mcp](https://github.com/Vladimir-Human/ru-marketplace-mcp/tree/HEAD/dsh) | Девять российских маркетплейсов и китайский Taobao как MCP-серверы: Wildberries, Ozon, Яндекс Маркет, Детский мир, Авито, Мегамаркет, Lamoda, DNS, Ситилинк. Плюс сравнение цен по всем сразу. Только чт | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-hub | 69 | [Noob-stupid/dsh-plugin-hub](https://github.com/Noob-stupid/dsh-plugin-hub) | 插件控制台：一键启用/停用插件，浏览并安装 GitHub dsh-plugin 插件 | 0.1.0-rc.8 (2026-08-20) |
| dsh-web-plugin-manager | 67 | [LX2000WASD/dsh-web-plugin-manager](https://github.com/LX2000WASD/dsh-web-plugin-manager) · [npm](https://www.npmjs.com/package/dsh-web-plugin-manager) | Manage DeepSeek Harness (DSH) plugins from the Web UI: list, enable/disable, install/remove, environments, and a GitHub-awesome-driven marketplace. | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugins-store | 65 | [ZASENJC/dsh-plugins-store](https://github.com/ZASENJC/dsh-plugins-store) · [npm](https://www.npmjs.com/package/dsh-plugins-store) | 自动分类、收录和验证 GitHub dsh-plugin Topic 项目的静态 DSH 插件市场。 A static DSH plugin marketplace that automatically categorizes, curates, and verifies GitHub dsh-plugin Topic projects. | 0.1.0-rc.8 (2026-08-20) |
| dsh-market-2binglin | 64 | [2BingLing/dsh-market](https://github.com/2BingLing/dsh-market/tree/HEAD/plugin/ui) | DSH Market 插件端：cordis 侧边栏插件（浏览/搜索/猜你喜欢/一键安装/已装管理），核心逻辑来自 @dsh-market/core | 0.1.0-rc.8 (2026-08-20) |
| plugin-registry | 57 | [vlln/plugin-registry](https://github.com/vlln/plugin-registry/tree/HEAD/packages/plugin/console) · [npm](https://www.npmjs.com/package/@vlln/plugin-console) | 薄控制台：浏览器 UI 管理 web profile 插件安装态（bundle 层栈 + cordis.patch.yml insert 行/disabled），0 patch | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-hub-dshplugi | 36 | [dshplugin/dsh-plugin-hub](https://github.com/dshplugin/dsh-plugin-hub) · [npm](https://www.npmjs.com/package/dsh-plugin) | A community plugin marketplace for DeepSeek Harness, built to the official plugin spec — browse, search and install 4000+ human-curated community plugins without leaving the app. · DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-marketplace-awesomehou | 27 | [AwesomeHou/dsh-plugin-marketplace](https://github.com/AwesomeHou/dsh-plugin-marketplace) | 实时同步 GitHub dsh-plugin topic 的插件市场：Host 定时抓取并缓存，Web 设置页展示可搜索的插件列表。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-workshop | 25 | [yyyyukari/dsh-plugin-workshop](https://github.com/yyyyukari/dsh-plugin-workshop) | Steam Workshop-style plugin browser for the DeepSeek Harness Web UI. | 0.1.0-rc.8 (2026-08-20) |
| deepseek-plugin-store | 24 | [Ericwong5021/deepseek-plugin-store](https://github.com/Ericwong5021/deepseek-plugin-store) | DeepSeek 插件商店开源数据源 · Open source data source for the DeepSeek Plugin Store | 0.1.0-rc.8 (2026-08-20) |
| dsh-quant | 20 | [pengpengyi92/dsh-quant](https://github.com/pengpengyi92/dsh-quant) | dsh plugin: quantitative tools for agents — market data (Binance public API), technical indicators (SMA/EMA/RSI/MACD/Bollinger/ATR) and MA-crossover backtest, with structured canonical outputs | 0.1.0-rc.8 (2026-08-20) |
| dsh-recommend | 19 | [zp-home/dsh-recommend](https://github.com/zp-home/dsh-recommend) · [npm](https://www.npmjs.com/package/dsh-recommend) | DSH 插件透明排行与推荐：每日自动抓取 dsh-plugin 话题生态 + 公开评分模型 + rank/recommend/search 工具 + 设置页排行标签 | 0.1.0-rc.8 (2026-08-20) |
| dsh-trading | 18 | [maddogfinance/dsh-trading](https://github.com/maddogfinance/dsh-trading) | Trading research workbench for DeepSeek Harness — market-data seam, BYO data providers, and model-facing analysis tools | 0.1.0-rc.8 (2026-08-20) |
| dsh-stock-market | 17 | [AnacondaKC/dsh-stock-market](https://github.com/AnacondaKC/dsh-stock-market) | DSH Shanghai and Shenzhen A-share market plugin | 0.1.0-rc.8 (2026-08-20) |
| dsh-hub-plugin | 16 | [sliverp/dsh-hub-plugin](https://github.com/sliverp/dsh-hub-plugin) | The native DSH plugin marketplace backed by dsh-hub.cc | 0.1.0-rc.8 (2026-08-20) |
| dsh-skill-cocosgt | 16 | [CocoSgt/dsh-skills](https://github.com/CocoSgt/dsh-skills) · [npm](https://www.npmjs.com/package/dsh-skills) | Skill management for DeepSeek Harness: install, list, and route SKILL.md units from the web UI, built on the dsh typert protocol. | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 365. **[all 365 →](lists/plugin-managers-stores.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Developer tools

Building, testing, and publishing plugins.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-ios | 236 | [ZSeven-W/dsh-ios](https://github.com/ZSeven-W/dsh-ios) · [npm](https://www.npmjs.com/package/@zseven-w/dsh-ios) | DeepSeek Harness plugin for the iOS Simulator — build, run, and interact with a live simulator stream inside a conversation. Tested with DSH 0.1.0-rc.6. | 0.1.0-rc.8 (2026-08-21) |
| dsh-android | 105 | [ZSeven-W/dsh-android](https://github.com/ZSeven-W/dsh-android) | DeepSeek Harness plugin for Android — build, run, and interact with a live emulator or USB device stream inside a conversation, driven entirely through adb. Tested with DSH 0.1.1-rc.1. | 0.1.0-rc.8 (2026-08-24) |
| superpowers-dsh | 85 | [LayneChai/superpowers-dsh](https://github.com/LayneChai/superpowers-dsh) | TDD, debugging, planning, and collaboration skills for DeepSeek Harness, adapted from obra/superpowers. | 0.1.0-rc.8 (2026-08-20) |
| dsh-tianshu-build | 36 | [huiliyi37/oh-my-tianshu](https://github.com/huiliyi37/oh-my-tianshu/tree/HEAD/packages/bundle/base) · [npm](https://www.npmjs.com/package/@huiliyi37/dsh-base) | The shared dsh core as a profile bundle: every profile's first patch layer, inserting the base plugin rows over the empty profile root | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-check | 27 | [omdsh-dev/dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) | DSH plugin health checker: scan plugin repos for manifest protocol / patch format / build pitfalls / hub registration, zero-dependency read-only diagnostics | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-template | 22 | [bugmaker2/dsh-plugin-template](https://github.com/bugmaker2/dsh-plugin-template) | Minimal Hello World plugin template for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| webdsh | 20 | [futrime/webdsh](https://github.com/futrime/webdsh) | Pure-static, browser-only build of DeepSeek Harness (dsh web) — no server, deployable to GitHub Pages | 0.1.0-rc.8 (2026-08-20) |
| dsh-user-experience | 19 | [DietCokewithSugar/dsh-user-experience](https://github.com/DietCokewithSugar/dsh-user-experience) · [npm](https://www.npmjs.com/package/dsh-user-experience) | DeepSeek Harness UX walkthrough plugin: persona-driven source-code UX review for React (TypeScript/JavaScript) and Vue 3 projects, with change-triggered automatic walkthroughs | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-healthcheck | 14 | [chenw2759-wq/dsh-plugin-healthcheck](https://github.com/chenw2759-wq/dsh-plugin-healthcheck) | DSH 插件健康检查：设置面板内的「插件检测」向导 — L0 静态检查（files 白名单/依赖声明/高危副本/依赖可解析/Windows 命令/lockfile 一致性）+ L1 配置组合检查 + L2 隔离试跑（子进程 boot 全树），发现即自动回滚（写 home patch 前弹确认），复杂问题打包预制提示词交给 agent 修复。铁律：只修改插件代码与配置层，严禁修改 harness. | 0.1.0-rc.8 (2026-08-20) |
| gongwen-skill | 14 | [linhut/gongwen-skill](https://github.com/linhut/gongwen-skill) · [npm](https://www.npmjs.com/package/gongwen-skill) | 中文公文全流程处理工具 - GB/T 9704 格式检查/修复/内容优化/模板生成/版式注入 | 0.1.0-rc.8 (2026-08-20) |
| dsh-eval-harness | 12 | [BiBoyang/dsh-eval-harness](https://github.com/BiBoyang/dsh-eval-harness) · [npm](https://www.npmjs.com/package/dsh-eval-harness) | DSH 插件回归评测门禁：yaml 用例 + headless 驱动 + trace 断言 + baseline 门禁（eval_run / eval_gate） | 0.1.0-rc.8 (2026-08-20) |
| plugin-template | 12 | [omdsh-dev/plugin-template](https://github.com/omdsh-dev/plugin-template) | Standalone Cordis plugin template for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-grok-tui | 11 | [chen-001/dsh-grok-tui](https://github.com/chen-001/dsh-grok-tui) · [npm](https://www.npmjs.com/package/dsh-grok-tui) | Use dsh via grok-build's TUI. | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-desktop-baiyuscc | 9 | [baiyuscc13724-max/deepseek-harness-desktop](https://github.com/baiyuscc13724-max/deepseek-harness-desktop) | Open-source Windows desktop shell for the official DeepSeek Harness Web UI with automatic local runtime startup, packaged self-test, and release gates. | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugins-horizon2 | 8 | [Horizon215/dsh-plugins](https://github.com/Horizon215/dsh-plugins/tree/HEAD/packages/prompt-templates) | Prompt template library for the DeepSeek Harness web UI: save reusable prompts, insert or insert-and-send them from a composer button | 0.1.0-rc.8 (2026-08-20) |
| dsh-director-toolkit | 7 | [lhmd/dsh-director-toolkit](https://github.com/lhmd/dsh-director-toolkit) | DeepSeek Harness plugin that turns a 3D idea into a shootable scene brief and publish-ready showcase copy. | 0.1.0-rc.8 (2026-08-20) |
| dsh-skill-7d-code-reviewer | 7 | [7dgroup-ai/dsh-skill-7d-code-reviewer](https://github.com/7dgroup-ai/dsh-skill-7d-code-reviewer) | Installable composition bundle contributing the 7DGroup template-driven code review skill to DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-devquest | 6 | [lucky8197/dsh-devquest](https://github.com/lucky8197/dsh-devquest) · [npm](https://www.npmjs.com/package/dsh-devquest) | 把开发变成 RPG：回合/工具/todo 积累 XP、成就徽章、等级与赛季。事件流驱动，纯函数计分。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-template-sunshine | 6 | [sunshine-lang/dsh-plugin-template](https://github.com/sunshine-lang/dsh-plugin-template) | {{DESCRIPTION}} | 0.1.0-rc.8 (2026-08-20) |
| dsh-ios-everettj | 5 | [everettjf/dsh-ios](https://github.com/everettjf/dsh-ios/tree/HEAD/rootfs/staging) | Pins the @deepseek-ai/dsh tree that build-rootfs.sh installs into the guest (linux/arm64/musl). | 0.1.0-rc.8 (2026-08-21) |
| dsh-plugin-doctor-zoahdev | 5 | [zoahdev/dsh-plugin-doctor](https://github.com/zoahdev/dsh-plugin-doctor) | Health checks for DeepSeek Harness: plugin manifest/patch/entry/build/pack/install verification, model-callable plugin_check, profile host-shadowing detection, and environment diagnostics | 0.1.0-rc.8 (2026-08-20) |
| Succinix | 5 | [CJackHwang/Succinix](https://github.com/CJackHwang/Succinix) | POC: Lifo (Unix-in-TypeScript) running inside WebContainer, sharing the container filesystem via node:fs mount. | 0.1.0-rc.8 (2026-08-20) |
| tencentcloud-agentobs-sdk-dsh | 5 | [TencentCloud/tencentcloud-agentobs-sdk-dsh](https://github.com/TencentCloud/tencentcloud-agentobs-sdk-dsh) | Tencent Cloud Service CLS observability plugin for DeepSeek Harness — direct upload to Tencent Cloud CLS | 0.1.0-rc.8 (2026-08-20) |
| dsh-doublecheck | 4 | [PerryLink/dsh-doublecheck](https://github.com/PerryLink/dsh-doublecheck) · [npm](https://www.npmjs.com/package/dsh-doublecheck) | Double-check before you ship: grill the requirements, test the implementation, prove the delivery. | 0.1.0-rc.8 (2026-08-20) |
| dsh-engineering-services | 3 | [wefio/dsh-engineering-services](https://github.com/wefio/dsh-engineering-services) | IDE engineering services for DeepSeek Harness: LSP diagnostics/navigation/rename, DAP debugging (debugpy + js-debug), and task-toolchain build/test/lint runs. | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 130. **[all 130 →](lists/developer-tools.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Knowledge & research

Research workbenches, RAG, learning modes.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| WeKnora | 20498 | [Tencent/WeKnora](https://github.com/Tencent/WeKnora/tree/HEAD/packages/dsh-weknora) | WeKnora knowledge retrieval tools for DeepSeek Harness (dsh): semantic search, document reading and RAG/agent answers over your own knowledge bases. | 0.1.0-rc.8 (2026-08-24) |
| de-anthropocentric-research-engine | 379 | [yogsoth-ai/de-anthropocentric-research-engine](https://github.com/yogsoth-ai/de-anthropocentric-research-engine/tree/HEAD/dsh-plugin) · [npm](https://www.npmjs.com/package/@yogsoth-ai/dare-dsh) | DeepSeek Harness plugin for the De-Anthropocentric Research Engine: 920 research skills, with an opt-in MCP server fleet | 0.1.0-rc.8 (2026-08-20) |
| dsh-reverse-skill | 72 | [dhicoc/dsh-reverse-skill](https://github.com/dhicoc/dsh-reverse-skill) | Reverse-engineering skill pack as a Cordis plugin: 85 SKILL.md units for authorized security research. | 0.1.0-rc.8 (2026-08-20) |
| SpecFusion | 55 | [wxkingstar/SpecFusion](https://github.com/wxkingstar/SpecFusion/tree/HEAD/dsh-plugin) · [npm](https://www.npmjs.com/package/@wxkingstar/specfusion-dsh) | SpecFusion skill + native API-docs search tools for DeepSeek Harness: 65,000+ API docs across 20 Chinese open platforms | 0.1.0-rc.8 (2026-08-20) |
| hn-cli | 51 | [heartleo/hn-cli](https://github.com/heartleo/hn-cli/tree/HEAD/plugins/hacker-news) · [npm](https://www.npmjs.com/package/dsh-hacker-news) | Hacker News tools for DeepSeek Harness: front-page feeds, item comment trees, Algolia search, user profiles. | 0.1.0-rc.8 (2026-08-20) |
| OpenQuantum | 45 | [xi-zhao/OpenQuantum](https://github.com/xi-zhao/OpenQuantum) | A DeepSeek Harness distribution for open quantum research | 0.1.0-rc.8 (2026-08-24) |
| dsh-web-search-pro | 40 | [anweat/dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) · [npm](https://www.npmjs.com/package/dsh-web-search-pro) | Enhanced, persistent web search plugin for DeepSeek Harness — multi-engine routing (DeepSeek/Exa/DDG/Bing/Jina + GitHub/B站/YouTube/V2EX/小红书/Twitter/Reddit/RSS), SQLite+LRU cache, userscript-style | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-guide | 29 | [PerryLink/dsh-plugin-guide](https://github.com/PerryLink/dsh-plugin-guide) · [npm](https://www.npmjs.com/package/dsh-plugin-guide) | The dsh-plugin-guide knowledge base as an installable DeepSeek Harness plugin: official docs, Cordis primer, community deep-dives, and battle-tested pitfalls registered as an on-demand agent skill. | 0.1.0-rc.8 (2026-08-20) |
| dsh-science | 26 | [biociao/dsh-science](https://github.com/biociao/dsh-science) · [npm](https://www.npmjs.com/package/dsh-science) | Claude Science-style research workbench for DeepSeek Harness: ReAct research-loop engine (research_* tools), versioned artifacts with provenance (artifact_* tools), and 10 science skills for. | 0.1.0-rc.8 (2026-08-20) |
| dsh-scholar | 25 | [lzszq/dsh-scholar](https://github.com/lzszq/dsh-scholar) | DSH Research OS — a fully automated scientific research plugin for DSH (DeepSeek Harness): survey, idea, experiment contract, durable runner jobs, claim-evidence ledger, manuscript and release bundle. | 0.1.0-rc.8 (2026-08-20) |
| deep-read-summarize | 21 | [PensiveFei/deep-read-summarize](https://github.com/PensiveFei/deep-read-summarize) | Deep reading & summarization for DSH: books/papers/videos/web → structured Obsidian notes. Plugin parsers, MapReduce deep-read, JSON Schema output, idempotent cache. | 0.1.0-rc.8 (2026-08-21) |
| dsh-deep-research | 18 | [omdsh-dev/dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research) | Deep Research orchestrator extension for DeepSeek Harness: an adaptive cybernetics/information-theory deep_research tool on the official workflow engine, reusing built-in web_search/web_fetch. | 0.1.0-rc.8 (2026-08-20) |
| dsh-design-skills | 18 | [zhaiyateng/dsh-design-skills](https://github.com/zhaiyateng/dsh-design-skills) | Design aesthetics skill pack for DeepSeek Harness (DSH): 6 styles — dark SaaS, minimal white, neumorphism, brutalism, glassmorphism, Japanese minimal — with runnable landing-page demos. Keeps vibe-... | 0.1.0-rc.8 (2026-08-20) |
| dsh-robotic-harness | 17 | [dingkaihu63/dsh-robotic-harness](https://github.com/dingkaihu63/dsh-robotic-harness) | Robotic Harness — an embodied-intelligence research plugin suite for DeepSeek Harness (demo) | 0.1.0-rc.8 (2026-08-20) |
| dsh-directorx | 13 | [LaplaceYoung/dsh-directorx](https://github.com/LaplaceYoung/dsh-directorx) | DirectorX：给 DeepSeek Harness 装上 AI 视频导演能力——视频生成、智能剪辑、成片质检、无限画布分镜与 350+ 导演知识库。AI video director plugin for DeepSeek Harness: text-to-video, smart editing, QC, storyboard canvas. | 0.1.0-rc.8 (2026-08-20) |
| dsh-evoresearch | 13 | [Karbo123/DSH-EvoResearch](https://github.com/Karbo123/DSH-EvoResearch/tree/HEAD/packages/evoresearch-plugin) | Self-evolving research workflow for DeepSeek Harness: project workspaces, research memory, multi-agent teams, and a custom workbench. | 0.1.0-rc.8 (2026-08-20) |
| dsh-md-notes | 13 | [XieZongChen/dsh-md-notes](https://github.com/XieZongChen/dsh-md-notes) · [npm](https://www.npmjs.com/package/dsh-md-notes) | MD 笔记插件：侧边栏笔记管理入口（列表/编辑/预览）+ 回答下方记入笔记，笔记存于工作区 .dsh-notes/ | 0.1.0-rc.8 (2026-08-20) |
| project-blueprint | 13 | [shuguang1994/project-blueprint](https://github.com/shuguang1994/project-blueprint) | DSH (DeepSeek Harness) plugin packaging of the Project Blueprint skill — one-command AI coding conventions (AGENTS.md, docs skeleton, CI/CD, git rules, testing policy) with an autonomous discovery | 0.1.0-rc.8 (2026-08-20) |
| dsh-docs | 12 | [Sqhao-O/dsh-docs](https://github.com/Sqhao-O/dsh-docs) | Local PDF, Office, image, and OCR document intelligence for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-explain | 12 | [yuezengwu/dsh-explain](https://github.com/yuezengwu/dsh-explain) | Local-first learning-mode plugin with a global learning thread, per-source explanations, and a diagnostics settings UI. | 0.1.0-rc.8 (2026-08-20) |
| dsh-search-boost | 12 | [Mr-remon219/dsh-search-boost](https://github.com/Mr-remon219/dsh-search-boost) · [npm](https://www.npmjs.com/package/dsh-search-boost) | Multi-engine fused web search, page fetch, real-time X (Twitter) search with credential-free fallback, deep research and parallel multi-agent research for DeepSeek Harness. Free-by-default engine | 0.1.0-rc.8 (2026-08-20) |
| dsh-search-mcp | 12 | [gxpppp/dsh-search-mcp](https://github.com/gxpppp/dsh-search-mcp) | Replace dsh's built-in web search with search MCP servers (Tavily / Brave / Exa / Perplexity / DuckDuckGo / custom), configured from the web Settings page. When this plugin is enabled the built-in | 0.1.0-rc.8 (2026-08-20) |
| dsh-ai4scholar | 11 | [literaf/dsh-ai4scholar](https://github.com/literaf/dsh-ai4scholar) · [npm](https://www.npmjs.com/package/dsh-ai4scholar) | AI4Scholar for DeepSeek Harness (dsh): 38 native academic tools — Semantic Scholar, PubMed, Google Scholar, arXiv, bioRxiv/medRxiv, DOI resolution, PDF full text, auto-cite, scientific figures | 0.1.0-rc.8 (2026-08-20) |
| dsh-sticky-note | 11 | [Meredith2328/dsh-sticky-note](https://github.com/Meredith2328/dsh-sticky-note) | 左下角便签：随手记点子/感想/TODO，实时保存到归档目录，清单+悬浮归档 | 0.1.0-rc.8 (2026-08-20) |
| hanai-investment-dsh | 11 | [hancao97/hanai-investment-dsh](https://github.com/hancao97/hanai-investment-dsh) | Hanai Investment — a local-first A-share research workbench powered by DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 305. **[all 305 →](lists/knowledge-research.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Fun

Games, pets, memes, ambience. The reef has coral.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-ads | 558 | [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) | Satirical 2005-portal fake-ad plugin for the web UI (sidebar ads, in-conversation feed, corner popups); ad slots also surface real dsh-plugin topic repos | 0.1.0-rc.8 (2026-08-20) |
| dsh-pet | 383 | [PC2005-cloud/dsh-pet](https://github.com/PC2005-cloud/dsh-pet/tree/HEAD/dsh-pet) · [npm](https://www.npmjs.com/package/dsh-pet) | A floating desktop pet for the DeepSeek Harness Web UI: idle breathing, occasional direction turns, random actions, and screen wandering. | 0.1.0-rc.8 (2026-08-20) |
| DSH-Transparent-UI-Plugin | 375 | [WYH66666666/DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin) | Aqua: a highly customizable glassmorphism theme for the Web surface — adjustable blur, frost, fluid or wallpaper backdrop, unified corners, and motion | 0.1.0-rc.8 (2026-08-20) |
| whale-girl ⭐ | 278 | [vlln/whale-girl](https://github.com/vlln/whale-girl) · [npm](https://www.npmjs.com/package/whale-girl) | Desktop-pet companion for the web GUI (QQ-pet style): draggable, feedable, levels up with session activity; migrated from the removed .dsh-plugin format to dsh.bundle | 0.1.0-rc.8 (2026-08-20) |
| gal-view | 125 | [Ayase34/gal-view](https://github.com/Ayase34/gal-view) | DSH Web GUI 会话页的 GAL 视窗：Galgame 风格对话视图 + 场景元素可视化编辑器 | 0.1.0-rc.8 (2026-08-20) |
| dsh-meme-yyh001 | 53 | [yyh-001/dsh-meme](https://github.com/yyh-001/dsh-meme) · [npm](https://www.npmjs.com/package/dsh-meme) | DeepSeek Harness 表情包插件:内置默认图库(官方-001,92 张),按情绪随机抽图,send_meme 发图(Web/QQ),设置页管理面板。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-emoji | 39 | [hellodigua/dsh-emoji](https://github.com/hellodigua/dsh-emoji) · [npm](https://www.npmjs.com/package/dsh-emoji) | Tiny semantic inline emoji for DSH Agent responses | 0.1.0-rc.8 (2026-08-20) |
| deepseek-pet | 35 | [keleus/deepseek-pet](https://github.com/keleus/deepseek-pet) | DeepSeek Pet plugin: an interactive, state-aware companion embedded in DeepSeek Harness Web | 0.1.0-rc.8 (2026-08-20) |
| dsh-whale-musume | 35 | [Sutera-Diffusus/dsh-whale-musume](https://github.com/Sutera-Diffusus/dsh-whale-musume) | A whale-girl Kanban Musume mascot for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-tavern-flizzywi | 32 | [flizzywine/dsh-tavern](https://github.com/flizzywine/dsh-tavern) | 基于 DeepSeek Harness（DSH）的 SillyTavern 类文字游戏 Agent，支持候选项生成、对话式人物卡编辑、剧本模式与素材抽取。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-pet-remielle | 31 | [Gin-7/dsh-pet-remielle](https://github.com/Gin-7/dsh-pet-remielle) · [npm](https://www.npmjs.com/package/dsh-pet-remielle) | Hot-pluggable Remielle (蕾米埃尔) sticker pet for the dsh web GUI: a transparent floating companion from Zenless Zone Zero that switches animated GIF moods with the harness work state | 0.1.0-rc.8 (2026-08-20) |
| dsh-ui-whale | 30 | [lhh010/dsh-ui-whale](https://github.com/lhh010/dsh-ui-whale) | DSH Web UI 像素鲸鱼伙伴插件：会话标题栏常驻，平时眨眼/偶尔摆尾/动胸鳍，思考运行时持续动起来，回合完成头顶喷水，点击冒爱心，零核心改动。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-minigames-lhh010 | 27 | [lhh010/dsh-minigames](https://github.com/lhh010/dsh-minigames) | DSH Web UI 右侧小游戏面板：18 款离线小游戏，可扩展游戏注册表。等待模型回复或修 bug 时的摸鱼神器。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-personal-center | 22 | [PolinniZhong/dsh-personal-center](https://github.com/PolinniZhong/dsh-personal-center) | DSH 个人中心:设置 →「个人」分区(个人资料统计 UI + 个性化自定义指令 + 成本估算 + 桌面宠物) | 0.1.0-rc.8 (2026-08-20) |
| dsh-portable-tavern | 20 | [XCNXNXNX/dsh-portable-tavern](https://github.com/XCNXNXNX/dsh-portable-tavern) · [npm](https://www.npmjs.com/package/dsh-portable-tavern) | Portable Tavern for the DeepSeek Harness web GUI: an RPG-style SillyTavern V2/V3 character-card generator plus tavern roleplay chat, with world-book generation and JSON/PNG import-export. | 0.1.0-rc.8 (2026-08-20) |
| dsh-jingling | 18 | [Yi-111-a/dsh-jingling](https://github.com/Yi-111-a/dsh-jingling) | Jingling companion for DeepSeek Harness: reviewable local memory, a restricted preset, and an optional desktop-pet sidecar. | 0.1.0-rc.8 (2026-08-20) |
| dsh-lorebookmd | 17 | [609476965/dsh-LorebookMD](https://github.com/609476965/dsh-LorebookMD) | DSH lorebook-driven fiction writer: import Tavern/SillyTavern character cards & world books, save local Markdown settings, and generate novel prose referencing the world settings. | 0.1.0-rc.8 (2026-08-20) |
| dsh-galgame | 16 | [Lanxing6480/dsh-galgame](https://github.com/Lanxing6480/dsh-galgame) | GalGame mode for the dsh web GUI: a third conversation view tab (after 轨迹) that renders the real agent session as a visual-novel stage — whale-girl (DeepSeek) portrait with diff switching + draggable | 0.1.0-rc.8 (2026-08-20) |
| dsh-client-ui-custom | 15 | [yoli-mi/dsh-client-ui-custom](https://github.com/yoli-mi/dsh-client-ui-custom) · [npm](https://www.npmjs.com/package/@ha-na-bi/dsh-client-ui-custom) | 客制化DSH（Custom DSH）: web-surface theming (wallpaper, frosted glass, accent, translucent surfaces), configurable keyboard shortcuts (new conversation / model / thinking effort / composer gestures / | 0.1.0-rc.8 (2026-08-20) |
| dsh-gomoku | 15 | [omdsh-dev/dsh-gomoku](https://github.com/omdsh-dev/dsh-gomoku) · [npm](https://www.npmjs.com/package/@yejiming/dsh-gomoku) | Gomoku (five-in-a-row) for the dsh web GUI: AI move routes, model catalog, and default prompt (node half) plus the conversation-view tab with the board (browser half) | 0.1.0-rc.8 (2026-08-20) |
| dsh-whale-galgame | 13 | [JAdpp/dsh-whale-galgame](https://github.com/JAdpp/dsh-whale-galgame) · [npm](https://www.npmjs.com/package/dsh-whale-galgame) | A multi-character Galgame interface and optional desktop companion for DeepSeek Harness Web. | 0.1.0-rc.8 (2026-08-20) |
| dsh-live2d-pets | 12 | [cyanfish-x/dsh-live2d-pets](https://github.com/cyanfish-x/dsh-live2d-pets) · [npm](https://www.npmjs.com/package/dsh-live2d-pets) | Live2D pet plugin for DeepSeek Harness: load models from any external URL or local model path | 0.1.0-rc.8 (2026-08-20) |
| dsh-answer-pet | 11 | [Nanki-nn/dsh-answer-pet](https://github.com/Nanki-nn/dsh-answer-pet) | DeepSeek Harness Web 可扩展回答状态宠物框架：支持宠物主题、多会话进度、模型轨迹和工具调用。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-godot-skill | 11 | [akira399/dsh-godot-skill](https://github.com/akira399/dsh-godot-skill) | Godot Engine 4.x full-stack game development skill for DeepSeek Harness (DSH). A host plugin that registers the `godot-4-development` skill — covering renderers, 2D/3D graphics & physics | 0.1.0-rc.8 (2026-08-20) |
| dsh-liquid-glass | 11 | [xingyingyuzhui/dsh-liquid-glass](https://github.com/xingyingyuzhui/dsh-liquid-glass) | Wallpaper plus an optional Liquid Glass overlay for DeepSeek Harness. Sits on official light / dark / system. 官方浅色/深色/跟随系统上的壁纸与液态玻璃叠加。 | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 358. **[all 358 →](lists/fun.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Bundles

npm packages with a `dsh.bundle` manifest: composition layers a profile boots from.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-base (official) | 190089 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/bundle/base) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-base) | The shared dsh core as a profile bundle: every profile's first patch layer, inserting the base plugin rows over the empty profile root | 0.1.0-rc.5 (2026-08-13) |
| dsh-headless (official) | 190089 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/bundle/headless) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-headless) | The one-shot bundle: a direct core Agent/Session runner over dsh-base with no Host, HTTP, or browser layer | 0.1.0-rc.5 (2026-08-13) |
| dsh-web-app (official) | 190089 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/bundle/web-app) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-web-app) | The browser-surface bundle: the web patch layer over dsh-base plus the runtime glue plugin (frontend dist serving, web-surface prompt, URL line) | 0.1.0-rc.5 (2026-08-13) |
| dsh-tui-ccch1mneyyy | 2417 | [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) · [npm](https://www.npmjs.com/package/@deepseek-harness-tui/dsh-tui) | Claude Code-style interactive TUI front door for DeepSeek Harness agents, built on a ported Ink core. | 0.1.0-rc.8 (2026-08-20) |
| dsh-im | 736 | [xmanrui/dsh-im](https://github.com/xmanrui/dsh-im) · [npm](https://www.npmjs.com/package/@xmanrui/dsh-im) | QR-code IM channel plugin that connects Feishu, WeChat, and DingTalk bots to DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| oh-dsh | 260 | [hust-open-atom-club/oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) | Community distribution bundling TUI, desktop, and web UI surfaces with layered installation, pinned to an exact harness revision via dsh-source.json | 0.1.0-rc.8 (2026-08-20) |
| dsh-super-injector | 145 | [yjh051108/dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) | Runtime injector for local DSH plugin packages with hot reload and a settings-page manager. | 0.1.0-rc.8 (2026-08-20) |
| dsh-invoice-downloader | 134 | [EthanYoQ/Invoice-Downloader](https://github.com/EthanYoQ/Invoice-Downloader/tree/HEAD/plugins/dsh-invoice-downloader) · [npm](https://www.npmjs.com/package/@ethanyoq/dsh-invoice-downloader) | Local IMAP invoice download, OCR, archival, and Excel reimbursement summaries through a DSH profile bundle. | 0.1.0-rc.5 (2026-08-22) |
| dsh-memory-safe | 72 | [seriousz158/dsh-memory](https://github.com/seriousz158/dsh-memory) · [npm](https://www.npmjs.com/package/dsh-git-memory) | Local Git-backed long-term memory for DeepSeek Harness with cited context, usage-aware read tools, safe sync, preview, and rollback. | 0.1.0-rc.7 (2026-08-21) |
| dsh-stock-watch | 61 | [Awu12277/dsh-stock-watch](https://github.com/Awu12277/dsh-stock-watch) | Collapsible A-share watchlist popup with live quotes, charts, and a target-price panel. | 0.1.0-rc.8 (2026-08-20) |
| dsh-mneme | 41 | [modusensus/dsh-mneme](https://github.com/modusensus/dsh-mneme/tree/HEAD/dsh-mneme) · [npm](https://www.npmjs.com/package/@modusensus/dsh-mneme) | Cross-session memory with SQLite, Markdown mirrors, autoDream consolidation, and a web panel. | 0.1.0-rc.8 (2026-08-20) |
| dsh-code | 27 | [UNLINEARITY/dsh-code](https://github.com/UNLINEARITY/dsh-code) · [npm](https://www.npmjs.com/package/dsh-code) | Claude-Code-style interactive TUI bundle for DeepSeek Harness with a DeepSeek-blue whale banner and live session transcript. | 0.1.0-rc.8 (2026-08-20) |
| dsh-toolkit | 26 | [omdsh-dev/dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit) | Zero-dependency toolkit collection: time, encoding, json, calculator, csv, regex, markdown, diff, stat, and schema in one entry. | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-marketplace-yelebai | 21 | [YELEBAI/dsh-plugin-marketplace](https://github.com/YELEBAI/dsh-plugin-marketplace) | A plugin marketplace for DeepSeek Harness with categories, trending discovery, install management, and controlled restart. | 0.1.0-rc.8 (2026-08-20) |
| dsh-fabric | 18 | [omdsh-dev/stent](https://github.com/omdsh-dev/stent) | Fabric/Mixin extension workspace: an installable profile bundle carrier over the cordis-fabric package trio. | 0.1.0-rc.8 (2026-08-20) |
| dsh-config-manager | 17 | [xiajiajun516/dsh-config-manager](https://github.com/xiajiajun516/dsh-config-manager) · [npm](https://www.npmjs.com/package/dsh-config-manager) | Backup, export, import, and migrate DeepSeek Harness configuration from the web UI. | 0.1.0-rc.8 (2026-08-20) |
| dsh-harmony | 17 | [memorax-ai/dsh-harmony](https://github.com/memorax-ai/dsh-harmony) · [npm](https://www.npmjs.com/package/dsh-harmony) | Runtime library to patch, replace, and decorate DeepSeek Harness plugins with hot reload. | 0.1.0-rc.8 (2026-08-20) |
| dsh-any-background | 16 | [Tkingxiao/dsh-any-background](https://github.com/Tkingxiao/dsh-any-background) · [npm](https://www.npmjs.com/package/dsh-any-background) | Custom wallpaper and theme-color controls for the DeepSeek Harness web UI, including opacity, blur, and a color wheel. | 0.1.0-rc.8 (2026-08-20) |
| dsh-desk | 15 | [majiayu000/dsh-desk](https://github.com/majiayu000/dsh-desk) | Tauri desktop companion for DeepSeek Harness: wraps official dsh 0.1.0-rc.6 in a system WebView with isolated DSH_HOME and a plugin-manager UI. | 0.1.0-rc.8 (2026-08-20) |
| dsh-image2-draw | 10 | [JuneLearn/dsh-image2-draw](https://github.com/JuneLearn/dsh-image2-draw) | Image2 (gpt-image-2) generation plugin for DeepSeek Harness with a Settings card for API key and endpoint. | 0.1.0-rc.8 (2026-08-20) |
| dsh-mermaid | 10 | [AKS1st/dsh-mermaid](https://github.com/AKS1st/dsh-mermaid) | Renders Mermaid code fences as SVG diagrams in DeepSeek Harness web conversations. | 0.1.0-rc.8 (2026-08-20) |
| dsh-bash-win | 9 | [zimzaza4/dsh-bash-win](https://github.com/zimzaza4/dsh-bash-win) · [npm](https://www.npmjs.com/package/@zimzaza4/dsh-bash-win) | Windows-first bash tools for DeepSeek Harness: Git Bash and WSL2 bash with bwrap sandbox, approval mode, and background jobs. | 0.1.0-rc.8 (2026-08-20) |
| dsh-codex-port | 8 | [STARDUSTLC666/dsh-codex-port](https://github.com/STARDUSTLC666/dsh-codex-port) · [npm](https://www.npmjs.com/package/dsh-codex-port) | One-command port of Codex plugins from ~/.codex into DeepSeek Harness skills, with frontmatter conversion. | 0.1.0-rc.8 (2026-08-20) |
| dsh-model-usage | 7 | [AKS1st/model-usage-plugin](https://github.com/AKS1st/model-usage-plugin) | Model token usage stats, cost estimates, and account balance for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-ui-preset-enhance | 7 | [lssyd20070106/dsh-ui-preset-enhance](https://github.com/lssyd20070106/dsh-ui-preset-enhance) | Web UI extras for custom backgrounds, theme colors, prompt presets, and manual context compaction. | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 86. **[all 86 →](lists/bundles.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Skills

Anthropic-format `SKILL.md` units; dsh discovers them from its skill roots (no nested discovery, kebab-case names only).

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| ruflo | 69205 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | Ruflo - Enterprise AI agent orchestration for Claude Code. Deploy 60+ specialized agents in coordinated swarms with self-learning, fault-tolerant consensus, vector memory, and MCP integration | 0.1.0-rc.8 (2026-08-24) |
| colleague-skill | 23886 | [titanwings/distilly](https://github.com/titanwings/distilly) | Digital-companion skill in the Anthropic SKILL.md format dsh reads; install by copying it into a dsh skill root such as .agents/skills | unverified |
| J-Space-Cognition-Suite-V3.7 | 3012 | [Tiger3807861189/J-Space-Cognition-Suite-V3.7](https://github.com/Tiger3807861189/J-Space-Cognition-Suite-V3.7/tree/HEAD/j-space) | J-Space Cognition Suite V3.7 - AI cognitive-enhancement Skills based on Anthropic's J-space global workspace research. \| 哔哩哔哩：Tiger380 (UID 3494375382321675) — https://space.bilibili.com/3494375382321 | 0.1.0-rc.8 (2026-08-24) |
| last30days-skill-cn | 1622 | [Jesseovo/last30days-skill-cn](https://github.com/Jesseovo/last30days-skill-cn) | last30days-cn 是一个 AI Agent 技能（Skill），能够自动搜索中国互联网 8 大主流平台最近 30 天的内容，综合分析后生成有据可查的研究报告。 | 0.1.0-rc.8 (2026-08-21) |
| vox-director | 1522 | [Alisa0808/vox-director](https://github.com/Alisa0808/vox-director) | Vox Director — an open-source Agent Skill that turns one topic into a finished Vox-style paper-collage explainer/ad video: script, collage keyframes, motion, voice-over, music and captions, automated | 0.1.0-rc.8 (2026-08-21) |
| ex-skill | 1069 | [titanwings/ex-skill](https://github.com/titanwings/ex-skill) | Builds a digital persona skill of your ex from WeChat chat logs (create-ex); SKILL.md documents dsh discovery paths alongside other hosts | unverified |
| math-modeling-skill | 843 | [XiaoMaColtAI/math-modeling-skill](https://github.com/XiaoMaColtAI/math-modeling-skill) | 数学建模技能 - 面向 CUMCM、MCM/ICM 等数学建模竞赛的三阶段工作流：建模分析、Python/MATLAB 编程与 DOCX 论文生成。包含丰富的算法资源库(优化/预测/评价/图论/机器学习等)、角色指导文档、论文模板和实用工具脚本 | 0.1.0-rc.8 (2026-08-21) |
| harmony-next | 337 | [linhay/harmony-next.skills](https://github.com/linhay/harmony-next.skills) | HarmonyOS NEXT development skill with offline ArkTS/ArkUI references and DevEco automation; copy harmony-next/ into a dsh skill root | 0.1.0-rc.8 (2026-08-20) |
| engramory | 171 | [tinqiao-oss/engramory](https://github.com/tinqiao-oss/engramory) · [npm](https://www.npmjs.com/package/dsh-engramory) | A portable memory protocol for AI agents — load it as standing rules; a curation discipline + reference spec + optional cap hook. | 0.1.0-rc.8 (2026-08-20) |
| find-plugins | 169 | [Nagi-ovo/dsh-find-plugins](https://github.com/Nagi-ovo/dsh-find-plugins) | Skill that discovers and installs dsh plugins from the GitHub dsh-plugin topic, verifying install method from repo manifests; copy skills/find-plugins into a skill root | unverified |
| argo | 108 | [taxueseek/argo](https://github.com/taxueseek/argo) · [npm](https://www.npmjs.com/package/argo-search) | Agent-first multilingual search and evidence-verification skill routing 120+ engines with vertical sources and MCP entry points; SKILL.md at repo root | 0.1.0-rc.8 (2026-08-20) |
| mstar-harness | 53 | [btspoony/mstar-harness](https://github.com/btspoony/mstar-harness) | Morning Star skill-driven engineering workflow (roles, phase gates, plan conventions) shipped as twenty SKILL.md units; copy skills/* into a dsh skill root | 0.1.0-rc.8 (2026-08-20) |
| PatentRadar | 52 | [yuc16/PatentRadar](https://github.com/yuc16/PatentRadar/tree/HEAD/skills/patentradar) | 专利侵权分析系统 —— 输入专利公开号，产出竞品侵权分析报告；同时打包成 skill，可被任意 agent（codex，claude code 等） 调用。 | 0.1.0-rc.8 (2026-08-24) |
| dsh-plugin-dev-skills | 39 | [zimodzh/dsh-plugin-dev-skills](https://github.com/zimodzh/dsh-plugin-dev-skills) | An Agent Skills skill for developing DeepSeek Harness (DSH) plugins（开发 DSH 插件的 Agent Skill）——插件/服务/事件/工具/LLM 适配器/打包安装的标准。Works with Claude Code, Codex, DSH, VS Code Copilot & any compatible agent. | 0.1.0-rc.8 (2026-08-21) |
| hedgehog | 30 | [skyf0xx/hedgehog](https://github.com/skyf0xx/hedgehog/tree/HEAD/skills/hedgehog) | Install the Hedgehog build discipline (agents + skills) into a repo, for Claude Code, Cursor, or Gemini CLI. | 0.1.0-rc.8 (2026-08-24) |
| dsh-plugin-development | 14 | [w2112515/dsh-plugin-development](https://github.com/w2112515/dsh-plugin-development) | Portable Agent Skill for developing and auditing DeepSeek Harness plugins, with an optional DSH bundle adapter. | 0.1.0-rc.8 (2026-08-20) |
| dsh-skill-adult-tension-narrative | 9 | [daha1216/dsh-adult-tension](https://github.com/daha1216/dsh-adult-tension) | DeepSeek Harness 成年人(18+/adult)互动叙事 Skill：NPC 活人感（有记忆/立场/底线）、自带破甲与张力引擎、随机开局可预锁、时间推进、全维 YAML 存档。仅限虚构成年人。 | 0.1.0-rc.8 (2026-08-21) |
| video-shotcraft-dsh | 5 | [kingselyjoe/video-shotcraft-dsh](https://github.com/kingselyjoe/video-shotcraft-dsh) | 面向 DeepSeek Harness 的电影感产品视频 Agent Skill，包含 152 张镜头配方卡、Remotion 模板、代码组件和音频资产。 | 0.1.0-rc.8 (2026-08-21) |
| create-dsh-plugin-kaijia32 | 4 | [kaijia323/create-dsh-plugin](https://github.com/kaijia323/create-dsh-plugin) | 创建、开发、调试、打包 DeepSeek Harness（DSH）插件的 AI 技能。覆盖插件开发的完整流程：最小可加载插件、工具（tool）、事件监听、服务（service）、LLM 适配器（adapter）、插件配置，以及 cordis.yml / cordis.patch.yml 覆盖层编写、`dsh web --patch` 本地调试和 bundle 打包发布。基于官方文档编写，附可运行的 | 0.1.0-rc.8 (2026-08-21) |
| reSanity | 4 | [Thhoho/reSanity](https://github.com/Thhoho/reSanity) | reSanity 散修：散户研究心法 skill + DeepSeek Harness 插件（skill provider、锚体检定时提醒、/resanity-check 命令） | 0.1.0-rc.8 (2026-08-20) |
| riffkit | 4 | [riffkit/skill](https://github.com/riffkit/skill/tree/HEAD/riffkit) | Short-video skill in the SKILL.md format dsh reads: rebuilds a winning TikTok's formula into your own product video; copy riffkit/ into a skill root such as ~/.agents/skills | unverified |
| team-orchestration-skill | 4 | [edisonzerolam/team-orchestration-skill](https://github.com/edisonzerolam/team-orchestration-skill) | 多智能体对抗编排引擎 — 五阶段对抗协议(二审终审制) + 40专家团8聚合域 + 动态派数 + 任务级Skill封装（专家池借鉴了 WorkBuddy、QoderWork 的专家功能） | 0.1.0-rc.8 (2026-08-21) |
| DSH-Context-Length-Window-Fix | 3 | [xiaohui5206/DSH-Context-Length-Window-Fix](https://github.com/xiaohui5206/DSH-Context-Length-Window-Fix) | 针对DSH：添加第三方中转站模型时上下文长度被默认256K问题（DeepSeek Harness小完善计划其一）· Agent Skill 维修手册 | 0.1.0-rc.8 (2026-08-21) |
| dsh-plugin-dev-skill | 3 | [green-dalii/dsh-plugin-dev-skill](https://github.com/green-dalii/dsh-plugin-dev-skill) | A skill pack that enables any agent to develop DeepSeek Harness (DSH) plugins correctly, efficiently, and in accordance with the official conventions. | unverified |
| dsh-wanghong-handwritten-ppt | 3 | [tjxj/dsh-wanghong-handwritten-ppt](https://github.com/tjxj/dsh-wanghong-handwritten-ppt) | Wang Hong-inspired Notability academic handwritten PPT skill for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 125. **[all 125 →](lists/skills.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Themes

UI skins. The dedicated registry is [awesome-dsh-themes](https://github.com/dshworks/awesome-dsh-themes); only themes that also ship plugin machinery live here.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-deep-whale | 1656 | [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale/tree/HEAD/maid-atelier) | Whale-girl skin series for the web UI; maid-atelier ships as a dsh.bundle package installed from a local clone (CC BY-NC-SA, non-commercial) | 0.1.0-rc.8 (2026-08-20) |
| dsh-homepage-skin | 1 | [yushi-xxh/dsh-homepage-skin](https://github.com/yushi-xxh/dsh-homepage-skin) · [npm](https://www.npmjs.com/package/dsh-homepage-skin) | DeepSeek Harness homepage-style background skin: WebGL fluid, dot grid and digital whale. Dark and light variants included. | 0.1.0-rc.8 (2026-08-20) |

### Tools

Developer tooling around dsh.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| create-dsh-plugin | 47 | [whyihaveyou/dsh-suite](https://github.com/whyihaveyou/dsh-suite/tree/HEAD/packages/create-dsh-plugin) · [npm](https://www.npmjs.com/package/create-dsh-plugin) | Scaffold a DeepSeek Harness plugin in seconds: tool, events, and webui templates with next-tag version pinning and a built-in --verify smoke test. | unverified |
| oh-my-dsh-amplift | 11 | [amplifthq/oh-my-dsh](https://github.com/amplifthq/oh-my-dsh) · [npm](https://www.npmjs.com/package/oh-my-dsh) | Plugins, sensible defaults, and a launcher for DeepSeek Harness (dsh) — everything you're missing, without forking upstream. | 0.1.0-rc.8 (2026-08-20) |
| dsh-forge | 4 | [zhn1100/dsh-forge](https://github.com/zhn1100/dsh-forge) | Reproducible DeepSeek Harness plugin development profile with a cordis patch, CLI, and runtime-aware preset. | 0.1.0-rc.8 (2026-08-20) |

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
