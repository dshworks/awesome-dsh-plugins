<!-- Rendered by scripts/render.mjs from data/plugins.json. Do not edit by hand: edit the data or the template, then run `npm run render`. -->

# awesome-dsh-plugins

[![powered by dsh](https://img.shields.io/badge/powered__by-dsh-4D6BFE?logo=deepseek)](https://github.com/deepseek-ai/deepseek-harness)
[![license: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![browse the reef](https://img.shields.io/badge/browse-the_reef-ff7a59)](https://dsh.works/awesome-dsh-plugins/)

A spam-filtered, open-data registry of [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`) plugins, bundles, and skills — 17,323 entries from 10,008 authors across 17 functional areas, every one carrying the file its install path was proven in and the dsh version it was checked against.

**[Browse the reef](https://dsh.works/awesome-dsh-plugins/)** — the same registry as a filterable, sortable gallery.

Most awesome lists are prose. This one is data: [`data/plugins.json`](data/plugins.json) is the source of truth, this README is rendered from it. Build on the JSON directly:

```sh
curl -s https://dsh.works/awesome-dsh-plugins/plugins.json                 # every entry
curl -s https://dsh.works/awesome-dsh-plugins/stats.json                   # just the counts, ~150 bytes
```

Each entry carries two orthogonal dimensions: `category` is the form factor (bundle, plugin, skill, theme, tool — what dsh docs call things) and `tags` is the functional area (what it actually does). `stars` is the linked repo's GitHub count (refreshed by `scripts/stars.mjs`, display signal only), and `featured` marks a hand-curated editor's pick.

## Why a filtered registry

DeepSeek delegates the ecosystem to the community: no first-party marketplace, discovery happens on the [`dsh-plugin`](https://github.com/topics/dsh-plugin) GitHub topic. On launch day that topic held 431 repositories. As of 2026-10-04 it holds 17,483, template spam and topic-riders included. A raw topic feed is not a registry; the filter is the value this repo adds.

How much filtering that is, measured on 2026-10-04: **20,038** repositories carry a dsh discovery topic and **18,981** of them — 95% — have been opened, read, and decided. 2,656 were rejected, **2,357** of those for having no install path at any depth: no `dsh` manifest in `package.json`, no dsh dependency, no `SKILL.md`. They carry the topic and nothing else. Every rejection is published with its reason and a recheck date in [`data/rejected.json`](data/rejected.json).

That is the number worth comparing. A topic count says how many people typed a tag. **18,981 of 20,038** says how many repositories somebody actually opened.

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

- **[dsh-web-ui](https://github.com/zhu1090093659/dsh-web)** — Plugin and skin collection for the dsh Web UI: task board, git graph, right-side panel, remote mobile UI, live token stats, and a skin center that routes around the theme-persistence gap <sub>8341 ★ · ui</sub>
- **[modlens](https://github.com/liustack/modlens)** — Vision plugin for text-only models: image understanding bridged into the harness via a dsh.bundle patch layer, shipping a modlens skill alongside <sub>4116 ★ · vision</sub>
- **[dsh-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar)** — Full sidebar workbench with file rendering/editing, terminal, Git, and subagents; third-party extensions can register new tabs <sub>3983 ★ · ui</sub>
- **[dsh-browser](https://github.com/omdsh-dev/dsh-browser)** — Chrome sidebar plugin that lets dsh operate the browser directly, without vision. <sub>761 ★ · capabilities</sub>
- **[dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon)** — Local-first three-tier memory for dsh: runtime memory, searchable documents, and supervised memory spaces. <sub>447 ★ · memory</sub>
- **[whale-girl](https://github.com/vlln/whale-girl)** — Desktop-pet companion for the web GUI (QQ-pet style): draggable, feedable, levels up with session activity; migrated from the removed .dsh-plugin format to dsh.bundle <sub>344 ★ · fun</sub>
- **[dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind)** — Rewind conversation and workspace state to a previous turn, backed by a persistent change ledger <sub>127 ★ · memory</sub>
- **[dsh-usage-stats](https://github.com/lanlandeli/dsh-usage-stats)** — Beautiful token analytics for DeepSeek Harness — trends, activity heatmaps, model breakdowns, and data exports. <sub>11 ★ · usage</sub>

## Plugins by area

16623 Cordis plugins activated through patch rows in a bundle or profile, grouped by what they do. Data updated 2026-10-04.

Each area shows its 25 most-starred entries and links to the complete list in [`lists/`](lists). GitHub stops rendering a markdown file partway through once it passes about half a megabyte — silently, mid-row — so the full tables live in files small enough to survive that. Nothing is dropped: [`data/plugins.json`](data/plugins.json) and the [gallery](https://dsh.works/awesome-dsh-plugins/) always hold everything.

### Web UI

Panels, composer upgrades, navigation, layout, mobile.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-web-ui ⭐ | 8341 | [zhu1090093659/dsh-web](https://github.com/zhu1090093659/dsh-web) · [npm](https://www.npmjs.com/package/dsh-web) | Plugin and skin collection for the dsh Web UI: task board, git graph, right-side panel, remote mobile UI, live token stats, and a skin center that routes around the theme-persistence gap | 0.1.0-rc.8 (2026-08-20) |
| dsh-better-sidebar ⭐ | 3983 | [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) · [npm](https://www.npmjs.com/package/dsh-better-sidebar) | Full sidebar workbench with file rendering/editing, terminal, Git, and subagents; third-party extensions can register new tabs | 0.1.0-rc.8 (2026-08-20) |
| CloudBase-AI-Toolkit | 1130 | [TencentCloudBase/CloudBase-AI-Toolkit](https://github.com/TencentCloudBase/CloudBase-AI-Toolkit/tree/HEAD/dsh-plugin) · [npm](https://www.npmjs.com/package/@cloudbase/dsh-plugin) | CloudBase backend for DeepSeek Harness — full-stack apps from chat, DB/Storage/Auth panel, one-click deploy | 0.1.1-rc.2 (2026-09-18) |
| superdesign-skill | 621 | [superdesigndev/superdesign-skill](https://github.com/superdesigndev/superdesign-skill) | Design or redesign frontend UI and marketing graphics on the Superdesign infinite canvas — the Superdesign skill, packaged as a DeepSeek Harness bundle. | 0.1.0-rc.8 (2026-08-20) |
| mnemon | 609 | [mnemon-dev/mnemon](https://github.com/mnemon-dev/mnemon) | Install the full dsh-mnemon integration from the Mnemon repository. | 0.1.0-rc.8 (2026-08-20) |
| dsh-at-file | 515 | [FSMargoo/dsh-at-file](https://github.com/FSMargoo/dsh-at-file) | Codex-style @file mentions in the composer: search workspace files and attach their contents to prompts | 0.1.0-rc.8 (2026-08-20) |
| dsh-genui | 509 | [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) · [npm](https://www.npmjs.com/package/@changfenhuang/dsh-genui) | Renders interactive UI components inline in assistant replies via the dsh-ui fence: layout, charts, plots, forms, quizzes, mermaid, 3D scenes, and an action event loop back to the model. | 0.1.0-rc.8 (2026-08-20) |
| dsh-visualize | 287 | [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) · [npm](https://www.npmjs.com/package/@nagi-ovo/dsh-visualize) | Generative UI in conversation: a visualize tool plus companion skill renders interactive HTML cards in sandboxed frames with streaming preview | 0.1.0-rc.8 (2026-08-20) |
| pi-web-ui | 265 | [xing-shuyin/pi-web-ui](https://github.com/xing-shuyin/pi-web-ui) · [npm](https://www.npmjs.com/package/pi-web-ui) | Web chat interface for the pi coding agent, powered by the pi SDK (@earendil-works/pi-coding-agent) — one-command run, Docker/systemd/launchd deployable | 0.1.1-rc.2 (2026-09-04) |
| dsh-popout-sidebar | 209 | [e2mcc/dsh-popout-sidebar](https://github.com/e2mcc/dsh-popout-sidebar) · [npm](https://www.npmjs.com/package/dsh-popout-sidebar) | 可弹出侧边栏 · A DeepSeek Harness sidebar that shows artifacts and pops out into a larger web tab. | 0.1.0-rc.8 (2026-08-20) |
| dsh-openpencil | 181 | [ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) · [npm](https://www.npmjs.com/package/@zseven-w/dsh-openpencil) | OpenPencil design preview and editing inside the web UI | 0.1.0-rc.8 (2026-08-20) |
| dsh-skill-mcp-panel | 174 | [Fishquito7/dsh-skill-mcp-panel](https://github.com/Fishquito7/dsh-skill-mcp-panel) · [npm](https://www.npmjs.com/package/dsh-skill-mcp-panel) | dsh-skill-mcp-panel: manage skills and MCP servers from the DSH web settings UI plus the unified dsh-panel CLI. | 0.1.1-rc.2 (2026-09-09) |
| dsh-undo-plugin | 172 | [lire1131/dsh-undo-savepoint](https://github.com/lire1131/dsh-undo-savepoint) · [npm](https://www.npmjs.com/package/dsh-undo-savepoint) | DSH undo/rollback system: snapshot config files on change, undo/redo the last action from the WebUI or by chat, and roll back broken plugin trees without reinstalling. Works even when DSH fails to | 0.1.1-rc.2 (2026-09-09) |
| dsh-remote-web-gateway | 156 | [summer1238/dsh-remote-web-gateway](https://github.com/summer1238/dsh-remote-web-gateway/tree/HEAD/plugin) · [npm](https://www.npmjs.com/package/dsh-remote-web-gateway) | DSH Remote Web Gateway — DSH native plugin: one-click phone/tablet remote access to the DeepSeek Harness Web GUI via Cloudflare Quick Tunnel + QR pairing + device management + optional GitHub login | 0.1.0-rc.8 (2026-08-20) |
| dsh-annotation | 134 | [omdsh-dev/dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) · [npm](https://www.npmjs.com/package/@changfenhuang/dsh-annotation) | DSH Web selection-annotation plugin: select assistant text, annotate (optional), and press Enter to send the annotation block with your message — the model replies to each annotation by number,. | 0.1.0-rc.8 (2026-08-20) |
| dsh-auto-continue | 130 | [HsiangNianian/dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) · [npm](https://www.npmjs.com/package/dsh-client-auto-continue) | Automatically sends continue when a Web UI request is interrupted by network errors or other non-human causes. | 0.1.0-rc.8 (2026-08-20) |
| baro | 124 | [jigjoy-ai/baro](https://github.com/jigjoy-ai/baro/tree/HEAD/packages/baro-dsh) · [npm](https://www.npmjs.com/package/baro-dsh) | baro as a DeepSeek Harness subagent provider: delegate a multi-story goal, get parallel execution, independent review and a verified outcome back — with a live run panel in the sidebar | 0.1.1-rc.2 (2026-09-18) |
| dsh-web-mobile | 114 | [mexiaosqwq/dsh-web-mobile](https://github.com/mexiaosqwq/dsh-web-mobile) · [npm](https://www.npmjs.com/package/dsh-web-mobile) | Mobile-adaptive DSH web UI: on narrow screens the sidebar rail is hidden and the directory opens as an overlay drawer, so the conversation gets the full width. | 0.1.0-rc.8 (2026-08-20) |
| dsh-mattpocock-skills-deck | 108 | [FeatherHunter/dsh-mattpocock-skills-deck](https://github.com/FeatherHunter/dsh-mattpocock-skills-deck/tree/HEAD/package) · [npm](https://www.npmjs.com/package/dsh-mattpocock-skills-deck) | 非官方 DeepSeek Harness 插件：Matt Pocock 技能套件（mattpocock/skills）的 DSH 控制面板（Deck）——将 wayfinder 地图/票务/进度、triage / grilling / handoff 动作注入带进 DSH；配套 25 个工程与效率技能。打开形式仅右侧 details 列（无 PiP/悬浮）。npm 标准安装（dsh plugin | 0.1.0-rc.8 (2026-08-20) |
| dsh-custom-skin | 101 | [SLin-code/dsh-custom-skin](https://github.com/SLin-code/dsh-custom-skin) | Custom wallpapers and translucent skins for DeepSeek Harness Web | 0.1.0-rc.8 (2026-08-25) |
| dsh-github-panel | 97 | [PivotStackIntelligence/dsh-github](https://github.com/PivotStackIntelligence/dsh-github) | Source Control and GitHub panel for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-openmaic | 87 | [THU-MAIC/dsh-openmaic](https://github.com/THU-MAIC/dsh-openmaic) | OpenMAIC for DeepSeek Harness: generate classrooms and render slides, interactive widgets, teaching cards, plus a Socratic teaching skill | 0.1.0-rc.8 (2026-08-20) |
| dsh-claude-style | 86 | [Nwflower/dsh-claude-style](https://github.com/Nwflower/dsh-claude-style) · [npm](https://www.npmjs.com/package/dsh-claude-style) | Claude Code Desktop theme for DeepSeek Harness (dsh) web GUI — visual & interaction overhaul | 0.1.7-rc.2 (2026-09-29) |
| dsh-prompt-enhancer | 82 | [Fishsb/dsh-prompt-enhancer](https://github.com/Fishsb/dsh-prompt-enhancer) | One-click prompt enhancement: fuzzy draft to an independent LLM call, then polished composer text with undo. | 0.1.0-rc.8 (2026-08-20) |
| recruiting-copilot | 82 | [Viy1204/recruiting-copilot](https://github.com/Viy1204/recruiting-copilot) | AI 招聘副驾 —— DeepSeek Harness profile bundle：注册招聘工作流 skills（岗位梳理、双通道寻源初筛、约面试、简历评估、台账与日报），并在 Web UI 右侧提供一只可直接操作的 boss/liepin 浏览器面板。 | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 1322. **[all 1322 →](lists/web-ui.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Terminals & desktop

TUIs, desktop shells, headless runners.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| deepseek-harness-desktop | 29905 | [anywhere-labs/dsh-desktop](https://github.com/anywhere-labs/dsh-desktop) | 为 DeepSeek Harness (DSH) 生态打造的现代化桌面端体验 | 0.1.0-rc.8 (2026-08-20) |
| dsh-desktop-anywhere | 29905 | [anywhere-labs/dsh-desktop](https://github.com/anywhere-labs/dsh-desktop/tree/HEAD/dsh-plugin-desktop) | DSH Desktop product workspace | 0.1.0-rc.8 (2026-08-25) |
| dsh-desktop | 11821 | [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | A cross-platform desktop shell for DeepSeek Harness. | 0.1.1-rc.2 (2026-09-04) |
| deepseek-harness-desktop-hairyf | 3007 | [dsh-tauri/deepseek-harness-desktop](https://github.com/dsh-tauri/deepseek-harness-desktop) | Desktop application for DeepSeek Harness (dsh) — one-click local install and launch, no Node.js setup required. | 0.1.7-rc.2 (2026-09-29) |
| dscode | 1016 | [qiz029/dscode](https://github.com/qiz029/dscode) | Reproducible macOS coding harness: DSH-Code TUI, Chrome MCP, native computer use, skills and compaction | 0.1.7-rc.2 (2026-09-29) |
| jingyun-dsh | 877 | [jingyunstudio/jingyun-dsh](https://github.com/jingyunstudio/jingyun-dsh) | 基于 Jingyun Studio + DeepSeek Harness (DSH) 打造的一站式 AI 商业化桌面客户端 | 0.1.1-rc.2 (2026-09-01) |
| deepseek-harness-desktop-ningbain | 768 | [ningbainb/deepseek-harness-desktop](https://github.com/ningbainb/deepseek-harness-desktop/tree/HEAD/apps/dsh-desktop) | Lossless desktop shell for DeepSeek Harness and the complete dsh-web-ui plugin collection | unverified |
| dshcode | 713 | [whitelonng/dshcode](https://github.com/whitelonng/dshcode) | Community desktop companion for DeepSeek Harness — one-click Electron app for macOS and Windows | 0.1.1-rc.2 (2026-09-04) |
| deepseek-harness-studio-fufankej | 666 | [fufankeji/deepseek-harness-studio](https://github.com/fufankeji/deepseek-harness-studio) | DeepSeek Harness 零代码桌面端｜一键启动，支持 Windows 与 macOS；内置插件发现、热点插件推送、一键安装与管理、AI 智能推荐和视觉增强。 | 0.1.0-rc.8 (2026-08-20) |
| working-activity | 661 | [ccch1mneyyy/working-activity](https://github.com/ccch1mneyyy/working-activity/tree/HEAD/packages/activity/working-activity) · [npm](https://www.npmjs.com/package/dsh-working-activity) | Live model working-status line: playful copy, running tool, turn elapsed — for TUI prompt and Web UI | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-desktop-chokwinl | 287 | [chokwinlee/deepseek-harness-desktop](https://github.com/chokwinlee/deepseek-harness-desktop) | Compact unofficial desktop host for DeepSeek Harness, powered by Tauri on macOS | 0.1.1-rc.2 (2026-09-04) |
| dsh-workbuddy-connect | 286 | [corrinehu/dsh-workbuddy-connect](https://github.com/corrinehu/dsh-workbuddy-connect) · [npm](https://www.npmjs.com/package/dsh-workbuddy-connect) | 将 WorkBuddy 桌面 App 包含的模型自动接入 DeepSeek Harness — bring WorkBuddy desktop app models into DeepSeek Harness with zero configuration. | 0.1.0-rc.8 (2026-08-20) |
| dsh-tianshu-tui | 282 | [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) · [npm](https://www.npmjs.com/package/@huiliyi37/dsh-tianshu-tui) | Terminal UI for dsh shipped as an installable profile bundle | 0.1.0-rc.8 (2026-08-20) |
| pilot-harness | 282 | [op7418/pilot-harness](https://github.com/op7418/pilot-harness) | Pilot Harness — a CodePilot-inspired desktop client and plugin suite for DeepSeek Harness on macOS, Windows, and Linux. | 0.1.0-rc.8 (2026-08-20) |
| Tydora | 198 | [zuorn/Tydora](https://github.com/zuorn/Tydora) | Let Your Ideas Flow — Tydora is a modern desktop Markdown editor combining WYSIWYG editing, bidirectional links, mind maps, and an infinite canvas — empowering deep thinking and effortless expression. | 0.1.0-rc.8 (2026-08-20) |
| seektty | 197 | [Hilbert-beinghappy/seektty](https://github.com/Hilbert-beinghappy/seektty) · [npm](https://www.npmjs.com/package/seektty) | SeekTTY, a pluggable DeepSeek-colored terminal surface for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| Deepseek-Harness-Desktop-chisaalt | 173 | [ChisaAlter/Deepseek-Harness-Desktop](https://github.com/ChisaAlter/Deepseek-Harness-Desktop) | Electron desktop shell for DeepSeek Harness Web UI | 0.1.7-rc.2 (2026-09-29) |
| DeepSeek-Harness-Desktop-webcasa | 127 | [web-casa/DeepSeek-Harness-Desktop](https://github.com/web-casa/DeepSeek-Harness-Desktop/tree/HEAD/runtime) | Bundled DeepSeek Harness runtime for the desktop packaging. Pin exactly; upgrades happen only through prepare-harness + CI smoke. | 0.1.0-rc.8 (2026-08-20) |
| happy-friday-lite | 113 | [cheney-plus/happy-friday-lite](https://github.com/cheney-plus/happy-friday-lite) | Happy Friday Lite - Electron + Vue3 | 0.1.1-rc.2 (2026-09-04) |
| deepseek-harness-docker-runzhliu | 104 | [runzhliu/deepseek-harness-docker](https://github.com/runzhliu/deepseek-harness-docker/tree/HEAD/plugins/dsh-browser-desktop) | Movable, resizable Chromium desktop embedded in the DeepSeek Harness Web UI through noVNC. | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-desktop-baihejia | 101 | [baihejiangnan/deepseek-harness-desktop](https://github.com/baihejiangnan/deepseek-harness-desktop) | Desktop application for DeepSeek Harness (dsh) — one-click local install and launch, no Node.js setup required. | unverified |
| deepseek-harness-tui-openmaai | 78 | [openma-ai/Martty](https://github.com/openma-ai/Martty/tree/HEAD/npm) · [npm](https://www.npmjs.com/package/@openma/deepseek-harness-tui) | Terminal-native agent UI for DeepSeek Harness; standalone CLI or dsh profile bundle | 0.1.0-rc.8 (2026-08-20) |
| dsh-studio-moresyl | 76 | [Moresyl/dsh-studio](https://github.com/Moresyl/dsh-studio/tree/HEAD/src-tauri/runtime-contract/dsh-studio-integration) | Native desktop studio for DeepSeek Harness — Linux/macOS/Windows, built with Rust + Tauri | 0.1.1-rc.2 (2026-09-09) |
| dsh-desktop-hub | 62 | [FlashingChen/dsh-desktop-hub](https://github.com/FlashingChen/dsh-desktop-hub/tree/HEAD/resources/rt) | DSH Desktop Hub — DeepSeek Harness 桌面管理控制台（多 Tab：Harness / Plugin / MCP / Skills） | 0.1.0-rc.8 (2026-08-20) |
| dsh-desktop-liguobao | 39 | [liguobao/dsh-desktop](https://github.com/liguobao/dsh-desktop) | Community desktop wrapper for the DeepSeek Harness Web UI | 0.1.1-rc.2 (2026-09-04) |

<sub>Showing the 25 most-starred of 565. **[all 565 →](lists/terminals-desktop.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Tools & capabilities

New things the model can do: search, browser, files, databases, devices, media.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| cherry-studio | 52353 | [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | A powerful AI assistant for producer. | 0.1.1-rc.2 (2026-09-09) |
| BrowserSkill | 8111 | [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill/tree/HEAD/packages/dsh-plugin-browserskill) · [npm](https://www.npmjs.com/package/@wxg-prc-cpg/browser-skill-dsh-plugin) | DeepSeek Harness tool plugin that exposes BrowserSkill browser automation (browser_* tools) to the model | 0.1.1-rc.2 (2026-09-09) |
| mirage | 3677 | [strukto-ai/mirage](https://github.com/strukto-ai/mirage/tree/HEAD/typescript/packages/dsh) · [npm](https://www.npmjs.com/package/@struktoai/mirage-dsh) | DeepSeek Harness (dsh) providers backed by a mirage workspace: ctx.fs and ctx.shell over mounted resources | 0.1.0-rc.8 (2026-08-20) |
| dsh-pocket | 1509 | [shaobeichen/dsh-pocket](https://github.com/shaobeichen/dsh-pocket) · [npm](https://www.npmjs.com/package/dsh-pocket) | 把 DeepSeek Harness 装进你的口袋：一个包、一个设置页，手机扫码即同步访问电脑上的 DSH（局域网 + 公网，实时同屏）。 | 0.1.0-rc.8 (2026-08-20) |
| deepseek-design | 1414 | [Devin-AXIS/deepseek-design](https://github.com/Devin-AXIS/deepseek-design/tree/HEAD/packages/deepseek-idesign) | iPolloWork Design Studio and its curated design templates as a native DeepSeek Harness conversation view. | unverified |
| AI-Novel-Writer | 1289 | [EthanYoQ/AI-Novel-Writer](https://github.com/EthanYoQ/AI-Novel-Writer/tree/HEAD/plugins/dsh-ai-novel-writer) · [npm](https://www.npmjs.com/package/@ethanyoq/dsh-ai-novel-writer) | A local-first novel project plugin for DeepSeek Harness | 0.1.1-rc.2 (2026-09-09) |
| clearai-dsh | 1243 | [Clearailhc/clearai-dsh](https://github.com/Clearailhc/clearai-dsh) · [npm](https://www.npmjs.com/package/clearai-dsh) | ClearAI: The Epistemic Loop, native to DSH. | 0.1.1-rc.2 (2026-09-18) |
| DSHA | 815 | [DSH-APP/DSHA](https://github.com/DSH-APP/DSHA/tree/HEAD/app/src/main/assets/device-shell-guide) | DSHA builtin plugin: inject device-shell (ADB/Shizuku) steering into each new conversation's system prompt | 0.1.0-rc.8 (2026-08-25) |
| dsh-browser ⭐ | 761 | [omdsh-dev/dsh-browser](https://github.com/omdsh-dev/dsh-browser) | Chrome sidebar plugin that lets dsh operate the browser directly, without vision. | 0.1.0-rc.8 (2026-08-20) |
| ANOLISA-agentico | 659 | [agentic-os-org/ANOLISA](https://github.com/agentic-os-org/ANOLISA/tree/HEAD/src/agentsight/dsh-plugin) | AgentSight observability plugin for DeepSeek Harness | 0.1.1-rc.2 (2026-09-18) |
| Avernet | 657 | [inclusionAI/Avernet](https://github.com/inclusionAI/Avernet/tree/HEAD/src/bcs/crates/plugins/deepseek-harness-channel-bcn) · [npm](https://www.npmjs.com/package/@avernet-plugin/deepseek-harness-channel-bcn) | DeepSeek Harness channel bundle for the Avernet Bot Collaboration Network. | 0.1.1-rc.2 (2026-09-04) |
| dsh-mobile-apk | 602 | [kelai141/dsh-mobile-apk](https://github.com/kelai141/dsh-mobile-apk/tree/HEAD/scripts) | dsh 安卓壳 APK——WebView UI + 内嵌 Termux 运行时快照（解压即跑），为dsh本地运行设计的高性能方案 | 0.1.1-rc.2 (2026-09-09) |
| dsh-pentest | 589 | [howmp/dsh-pentest](https://github.com/howmp/dsh-pentest) | DSH 渗透测试模式：以探索链路记录目标、线索、资产与漏洞，并在 Web 中可视化展示。 | 0.1.0-rc.8 (2026-08-20) |
| modsearch | 587 | [liustack/modsearch](https://github.com/liustack/modsearch) · [npm](https://www.npmjs.com/package/@liustack/modsearch) | Web plugin for dsh that gives a text-only model the web: search, X, and any page as structured evidence. | 0.1.0-rc.8 (2026-08-20) |
| MisakaNet | 521 | [Ikalus1988/MisakaNet](https://github.com/Ikalus1988/MisakaNet) · [npm](https://www.npmjs.com/package/misakanet) | Deployment scripts for MisakaNet Workers | 0.1.0-rc.8 (2026-08-20) |
| billion-context | 505 | [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) · [npm](https://www.npmjs.com/package/billion-context) | A context-compression plugin — small context windows (a 100K context is enough), 5x fewer tokens, month-long single sessions (billions of tokens), and compression quality — for all agents: pi | 0.1.7-rc.2 (2026-09-29) |
| dsh-synapse | 467 | [liangmianya/dsh-synapse](https://github.com/liangmianya/dsh-synapse) · [npm](https://www.npmjs.com/package/dsh-synapse) | A visual, non-linear conversation workspace plugin for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-21) |
| dsh-univer-office | 464 | [dream-num/dsh-univer-office](https://github.com/dream-num/dsh-univer-office) · [npm](https://www.npmjs.com/package/dsh-univer-office) | DSH × Univer integration with a bundled collaboration Gateway and Viewer: inline previews, live floating Worktree windows, and session-end review actions in DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| anysearch-dsh | 446 | [anysearch-team/anysearch-dsh](https://github.com/anysearch-team/anysearch-dsh) · [npm](https://www.npmjs.com/package/@anysearch/anysearch-dsh) | AnySearch web search provider and advanced tools for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| oh-story-dsh | 445 | [zenstory-ai/oh-story-dsh](https://github.com/zenstory-ai/oh-story-dsh/tree/HEAD/packages/dsh-plugin) | A DSH plugin for fiction and short-drama production | 0.1.0-rc.8 (2026-08-25) |
| DSH-taskboard-shengshe | 330 | [shengsheng90/DSH-taskboard](https://github.com/shengsheng90/DSH-taskboard) · [npm](https://www.npmjs.com/package/@shengsheng/dsh-taskboard) | Native local project taskboard bundle for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-free-search | 309 | [DDDMUC/dsh-free-search](https://github.com/DDDMUC/dsh-free-search) · [npm](https://www.npmjs.com/package/dsh-free-search) | Free web search provider for DeepSeek Harness: DuckDuckGo HTML backend, no API key required. | 0.1.0-rc.8 (2026-08-20) |
| Perfect-Web-Clone | 267 | [ericshang98/Perfect-Web-Clone](https://github.com/ericshang98/Perfect-Web-Clone) | Pixel-perfect clones of any webpage. Paste a URL, get a measured Vite + React replica. | 0.1.0-rc.8 (2026-08-24) |
| deepseek-harness-remote | 261 | [liguobao/ds-harness-remote](https://github.com/liguobao/ds-harness-remote) | DeepSeek 远程连接 | 0.1.1-rc.2 (2026-09-01) |
| acryl | 256 | [acryldev/acryl](https://github.com/acryldev/acryl/tree/HEAD/acryl-control) | Host-neutral Cordis control plane for ACRYL | 0.1.1-rc.2 (2026-08-28) |

<sub>Showing the 25 most-starred of 4617. **[all 4617 →](lists/tools-capabilities.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Vision

Image understanding for text-only models.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| archify | 76873 | [tt-a1i/archify](https://github.com/tt-a1i/archify/tree/HEAD/integrations/deepseek-harness) · [npm](https://www.npmjs.com/package/@tt-a1i/archify-dsh) | Opt-in DeepSeek Harness Skill-only bundle for the Archify architecture-diagram skill. | 0.1.0-rc.8 (2026-08-20) |
| modlens ⭐ | 4116 | [liustack/modlens](https://github.com/liustack/modlens) · [npm](https://www.npmjs.com/package/@liustack/modlens) | Vision plugin for text-only models: image understanding bridged into the harness via a dsh.bundle patch layer, shipping a modlens skill alongside | 0.1.0-rc.8 (2026-08-20) |
| dsh-vision-router | 1125 | [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) · [npm](https://www.npmjs.com/package/dsh-vision-router) | Turn-level vision routing with provider fallbacks, a cached vision_describe tool, JSON output, and optional per-host proxy. | 0.1.0-rc.8 (2026-08-20) |
| dsh-vision-toolkit | 885 | [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) · [npm](https://www.npmjs.com/package/@anionex/dsh-vision-toolkit) | Harness-native integration of agent-vision-toolkit for text-only models: image Q&A with intent, long-screenshot OCR, UI restoration, grounding, and pixel diff | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-android-app | 364 | [woaiys3/deepseek-harness-android-app](https://github.com/woaiys3/deepseek-harness-android-app/tree/HEAD/plugins/dsh-tool-android) | Model-facing Android system tools (package/app/setting/screenshot/input) over Shizuku shell. | unverified |
| dsh-video-lens | 113 | [dundunhan/dsh-video-lens](https://github.com/dundunhan/dsh-video-lens) · [npm](https://www.npmjs.com/package/dsh-video-lens) | Give text-only DeepSeek Harness agents video understanding: scene-aware frame sampling + VLM + optional ASR transcript fused into timeline evidence. / 给纯文本模型的视频理解插件（场景感知抽帧 + VLM + 可选语音转录） | 0.1.0-rc.8 (2026-08-20) |
| dsh-imagegen | 99 | [dickpy/dsh-imagegen](https://github.com/dickpy/dsh-imagegen) · [npm](https://www.npmjs.com/package/@dickpy/dsh-imagegen) | AI 生图 (image generation) plugin for the dsh web GUI: text-to-image and image-to-image through a configurable OpenAI-compatible endpoint (gpt-image-2 / gpt-image-1 / dall-e-3), with a settings card | 0.1.0-rc.8 (2026-08-20) |
| dsh-vision-oil | 89 | [oil-oil/dsh-vision](https://github.com/oil-oil/dsh-vision) | Near-native image understanding for text-only DeepSeek Harness models. | 0.1.0-rc.8 (2026-08-20) |
| beautiCode | 85 | [starsstreaming/beautiCode](https://github.com/starsstreaming/beautiCode/tree/HEAD/integrations/deepseek-harness) · [npm](https://www.npmjs.com/package/beauticode-dsh) | Cordis plugin: image/video backgrounds for DeepSeek Harness web. | 0.1.0-rc.8 (2026-08-20) |
| DeepSeek-Harness-Video-Director | 74 | [chiphoton/DeepSeek-Harness-Video-Director](https://github.com/chiphoton/DeepSeek-Harness-Video-Director) | A project-scoped multimodal video director plugin for DeepSeek Harness. | 0.1.7-rc.2 (2026-09-29) |
| picturereader | 37 | [jing-hy/picturereader](https://github.com/jing-hy/picturereader) · [npm](https://www.npmjs.com/package/picturereader) | DSH plugin: pixel-to-text image reading for text-only models. Downscales and color-quantizes PNG/JPEG/GIF/BMP and feeds the coarse pixel grid to the model so DeepSeek can 'see' layout, colors and | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-docker | 21 | [AlliotTech/deepseek-harness-docker](https://github.com/AlliotTech/deepseek-harness-docker) | Reproducible container image for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-media-skills-mjorgin | 19 | [MJorgin/dsh-media-skills](https://github.com/MJorgin/dsh-media-skills) | Free image reading (vision) and image generation skills for DeepSeek Harness — Zhipu GLM-4V-Flash (Google Gemini optional) for reading, SiliconFlow Kolors for generation. | 0.1.0-rc.8 (2026-08-20) |
| deepseek-visionary | 18 | [xlight/deepseek-visionary](https://github.com/xlight/deepseek-visionary/tree/HEAD/packages/dsh-plugin) · [npm](https://www.npmjs.com/package/@xlight-oss/visionary-dsh) | DeepSeek Visionary native plugin for DeepSeek Harness: deepseek_vision / status / login / logout native tools backed by the visionary-server CLI (DeepSeek web vision model, no API key). | 0.1.0-rc.8 (2026-08-20) |
| dsh-diagram | 16 | [hanzhangzzz/dsh-diagram](https://github.com/hanzhangzzz/dsh-diagram) · [npm](https://www.npmjs.com/package/dsh-diagram) | Turn articles in DeepSeek Harness into editable Excalidraw canvases | 0.1.0-rc.8 (2026-08-20) |
| dsh-visual-plugin | 16 | [jyh20030112/dsh-visual-plugin](https://github.com/jyh20030112/dsh-visual-plugin) · [npm](https://www.npmjs.com/package/dsh-visual-plugin) | Vision bridge plugin for DeepSeek Harness: when the main model has no vision, forward user images to a configurable OpenAI-compatible vision model and show results in a Web UI right panel. Host. | 0.1.0-rc.8 (2026-08-20) |
| dsh-origin-plugin | 15 | [Fantasality/dsh-origin-plugin](https://github.com/Fantasality/dsh-origin-plugin) · [npm](https://www.npmjs.com/package/dsh-origin-plugin) | Drive Origin scientific plotting from DeepSeek Harness AI chat via MCP - 28 tools, styled multi-series plots, inline image preview, statistics batch (t/ANOVA/PCA/survival), stable error codes. | 0.1.1-rc.2 (2026-09-09) |
| dsh-vision-proxy | 15 | [Flyvhidbwo/dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) · [npm](https://www.npmjs.com/package/dsh-vision-proxy) | deepseek-vision provider route that transcribes attached images via an OpenAI-compatible VLM before DeepSeek answers. | 0.1.0-rc.8 (2026-08-20) |
| dsh-codex-oauth-wnjxyk | 14 | [WNJXYK/dsh-codex-oauth](https://github.com/WNJXYK/dsh-codex-oauth) · [npm](https://www.npmjs.com/package/@wnjxyk/dsh-codex-oauth) | Unified OpenAI Codex subscription plugin for DeepSeek Harness: GPT models, OAuth, quota, image generation, and web search. | 0.1.0-rc.8 (2026-08-20) |
| dsh-ocr-plugin | 13 | [CraZY222123/dsh-ocr-plugin](https://github.com/CraZY222123/dsh-ocr-plugin) | Local OCR provider (rapidocr fast + DeepSeek-OCR-2 deep) registered as the 'ocr' service for the llm-deepseek adapter seam. Unofficial community plugin for DeepSeek Harness. | unverified |
| dsh-qwen38-local-qol | 13 | [Yunado/dsh-qwen38-local-qol](https://github.com/Yunado/dsh-qwen38-local-qol) | DeepSeek Harness QoL plugin for the local Qwen3.8 line (27B, Flash-Next): per-request thinking budgets on both llama.cpp and NInfer dialects, vision + tools, and a compaction backend whose summaries | 0.1.1-rc.2 (2026-09-18) |
| dsh-vision-opencode | 13 | [poiuyjie/dsh-vision-opencode](https://github.com/poiuyjie/dsh-vision-opencode) | DeepSeek Harness plugin: configurable vision model with vision_read_image tool, composer-bar vision-model selector, and automatic image-to-text conversion for text-only main models. | 0.1.0-rc.8 (2026-08-20) |
| dsh-auxiliary-dshplugi | 12 | [dsh-plugins/dsh-auxiliary](https://github.com/dsh-plugins/dsh-auxiliary) · [npm](https://www.npmjs.com/package/@dsh-plugin/dsh-auxiliary) | DeepSeek Harness plugin that uses configured model providers for image analysis and context compaction. | 0.1.0-rc.8 (2026-08-20) |
| dsh-file-upload-a9030672 | 12 | [a903067276-rgb/dsh-file-upload](https://github.com/a903067276-rgb/dsh-file-upload) | Upload button + drag-and-drop files into DSH conversation as local paths (works with any vision plugin) | 0.1.0-rc.8 (2026-08-20) |
| dsh-mermaid-mrmolabs | 12 | [MrmoLabs/dsh-mermaid](https://github.com/MrmoLabs/dsh-mermaid) · [npm](https://www.npmjs.com/package/dsh-mermaid) | Render Mermaid code blocks in DeepSeek Harness with a diagram/code toggle. | 0.1.0-rc.8 (2026-08-25) |

<sub>Showing the 25 most-starred of 562. **[all 562 →](lists/vision.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Agents & orchestration

Subagents, workflows, cross-session coordination.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| ouroboros | 6178 | [Q00/ouroboros](https://github.com/Q00/ouroboros/tree/HEAD/integrations/dsh-plugin) | Mount Ouroboros (spec-first AI dev workflow engine) into DeepSeek Harness as native tools — type "ooo interview" or "ooo auto" in chat. | 0.1.1-rc.2 (2026-09-09) |
| dashi-taskboard | 3283 | [chuspeeism/dashi-taskboard](https://github.com/chuspeeism/dashi-taskboard/tree/HEAD/integrations/deepseek-harness) | 现代化可灵活嵌入的任务面板，支持 Codex、DeepSeek Harness | 0.1.1-rc.2 (2026-09-09) |
| BitFun | 2378 | [GCWing/OpenBitFun](https://github.com/GCWing/OpenBitFun/tree/HEAD/packages/dsh-acp) | IDE-oriented Agent Client Protocol server for DeepSeek Harness: publishes tool calls, reasoning, and plans that the automation-only @deepseek-ai/dsh-acp deliberately withholds | 0.1.0-rc.8 (2026-08-20) |
| OpenBitFun | 2378 | [GCWing/OpenBitFun](https://github.com/GCWing/OpenBitFun/tree/HEAD/extensions/dsh-openbitfun) | DeepSeek Harness plugin bundle exposing the OpenBitFun Agent SDK Host as dsh tools | 0.1.1-rc.2 (2026-09-09) |
| dsh-agent-teams | 1911 | [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) · [npm](https://www.npmjs.com/package/@nanmicoder/dsh-agent-teams) | AgentTeams plugin: coordinate teams of subagents from the web UI | 0.1.0-rc.8 (2026-08-20) |
| tongflow | 1035 | [tong-io/tongflow](https://github.com/tong-io/tongflow/tree/HEAD/packages/dsh-tongflow) · [npm](https://www.npmjs.com/package/dsh-tongflow) | TongFlow studio plugin for DeepSeek Harness (dsh): agent-designed project folders, one TongFlow workflow per generated asset stored next to its outputs, deterministic media generation, embedded | 0.1.0-rc.8 (2026-08-20) |
| Wegent | 867 | [wecode-ai/Wegent](https://github.com/wecode-ai/Wegent/tree/HEAD/wework/dsh/app-wework) | An open-source AI-native operating system to define, organize, and run intelligent agent teams | 0.1.1-rc.2 (2026-08-28) |
| DSHA-dshapp | 815 | [DSH-APP/DSHA](https://github.com/DSH-APP/DSHA/tree/HEAD/app/src/main/assets/app-integration) | DSHA 后台任务、网页返回和草稿恢复适配 | 0.1.1-rc.2 (2026-09-09) |
| Openwrite | 777 | [LiPu-jpg/Openwrite](https://github.com/LiPu-jpg/Openwrite) · [npm](https://www.npmjs.com/package/dsh-openwrite) | OpenWrite 长篇小说领域后端接入 DeepSeek Harness：统一创作 Agent 预设 + 原生创作工作台 | 0.1.1-rc.2 (2026-09-09) |
| dsh-worktable | 700 | [Aisland-SJL/dsh-worktable](https://github.com/Aisland-SJL/dsh-worktable/tree/HEAD/01_content) | 工作台 Worktable：DeepSeek Harness 侧边栏的 agent 级项目容器（应用抽屉） | 0.1.0-rc.8 (2026-08-24) |
| dsh-antibrow | 688 | [antibrow/dsh-antibrow](https://github.com/antibrow/dsh-antibrow) | DeepSeek Harness plugin: an agent browser with a persistent identity - engine-level fingerprint spoofing, per-profile cookies and passkeys, residential proxy egress. | 0.1.0-rc.8 (2026-08-20) |
| Minke | 673 | [lencx/Minke](https://github.com/lencx/Minke) | Minke desktop agent powered by DeepSeek Harness | 0.1.1-rc.2 (2026-09-09) |
| easyeda-agent | 583 | [zhoushoujianwork/easyeda-agent](https://github.com/zhoushoujianwork/easyeda-agent) | EasyEDA Pro (JLC EDA) automation for DeepSeek Harness: MCP bridge + agent skill bundle | 0.1.1-rc.2 (2026-09-09) |
| watch-skill | 434 | [oxbshw/watch-skill](https://github.com/oxbshw/watch-skill/tree/HEAD/workspace) | DeepWatch — an evidence-native agent distribution built on DeepSeek Harness | 0.1.1-rc.2 (2026-09-09) |
| dsh-agent-team-gui | 281 | [toolclub/dsh-agent-team-gui](https://github.com/toolclub/dsh-agent-team-gui) | Persistent multi-model squads for DeepSeek Harness — manage teams in Settings and use them in ordinary conversations | 0.1.0-rc.8 (2026-08-20) |
| Polaris | 250 | [ZJU-REAL/Polaris](https://github.com/ZJU-REAL/Polaris/tree/HEAD/integrations/deepseek-harness) | DeepSeek Harness bundle for Polaris MCP tools and native agent skills | 0.1.0-rc.8 (2026-08-20) |
| dsh-agent-rp | 221 | [hewzhew/dsh-agent-rp](https://github.com/hewzhew/dsh-agent-rp) · [npm](https://www.npmjs.com/package/@hewzhew/dsh-agent-rp) | SillyTavern migration and next-generation Agent RP for DSH | 0.1.0-rc.8 (2026-08-20) |
| sandbase-skills | 201 | [sandbaseai/sandbase-skills](https://github.com/sandbaseai/sandbase-skills) | Install SandBase Agent Skills into DeepSeek Harness projects. | 0.1.1-rc.2 (2026-09-09) |
| dsh-lowtide | 169 | [KelaoHu/dsh-lowtide](https://github.com/KelaoHu/dsh-lowtide/tree/HEAD/packages/dsh) | lowtide: human-adjudicated off-peak batch task pipeline for dsh (peak/valley pricing aware) | 0.1.0-rc.8 (2026-08-25) |
| dsh_workflow | 130 | [omdsh-dev/dsh_workflow](https://github.com/omdsh-dev/dsh_workflow) | KodaX-parity dynamic workflow harness for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| consensus-pipeline | 125 | [fangqian616/consensus-pipeline](https://github.com/fangqian616/consensus-pipeline/tree/HEAD/dsh-plugin) · [npm](https://www.npmjs.com/package/@fangqian616/dsh-consensus-pipeline) | Multi-agent department framework for long-form complex tasks, fighting AI hallucination, validated on academic research. 共识管线：多智能体部门长线任务解决框架，对抗AI幻觉，以学术研究为验证场景。 | 0.1.1-rc.2 (2026-09-01) |
| odai | 117 | [orziz/odai](https://github.com/orziz/odai/tree/HEAD/dsh/agent) · [npm](https://www.npmjs.com/package/odai-dsh-agent) | 完整继承 DSH Standard 全部能力的 Odai Agent preset。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-liketavern | 116 | [Amakurai/dsh-liketavern](https://github.com/Amakurai/dsh-liketavern) | Tavern mode for dsh web — SillyTavern character cards, prompt presets, lorebooks, personas and regex on the dsh agent runtime. | 0.1.1-rc.2 (2026-09-09) |
| dsh-watcher | 106 | [aa2246740/dsh-watcher](https://github.com/aa2246740/dsh-watcher) · [npm](https://www.npmjs.com/package/dsh-watcher) | Read-only Agent work-path observer for DeepSeek Harness, with truthful status and execution evidence | 0.1.0-rc.8 (2026-08-21) |
| dsh-automation | 100 | [titanwings/dsh-automation](https://github.com/titanwings/dsh-automation) | Run coding tasks on schedule in fresh Agent sessions, and manage automations from DeepSeek Harness Web or an Agent | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 1443. **[all 1443 →](lists/agents-orchestration.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Memory & sessions

Memory systems, context management, session search/rewind/export.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| reactive-resume | 43736 | [reactive-resume/reactive-resume](https://github.com/reactive-resume/reactive-resume/tree/HEAD/packages/dsh-plugin) | DeepSeek Harness plugin for Reactive Resume: bridges your resumes and job applications into a Harness session over MCP. | 0.1.1-rc.2 (2026-09-18) |
| MemOS | 11693 | [MemTensor/MemOS](https://github.com/MemTensor/MemOS/tree/HEAD/apps/memos-local-plugin) · [npm](https://www.npmjs.com/package/@memtensor/memos-local-plugin) | Reflect2Evolve memory plugin: layered L1/L2/L3 memory, reflection-weighted value backprop, cross-task policy induction, skill crystallization, and three-tier retrieval for OpenClaw, Hermes Agent, and | 0.1.0-rc.8 (2026-08-20) |
| loopx | 6148 | [loopx-project/loopx](https://github.com/loopx-project/loopx/tree/HEAD/packages/dsh-loopx-plugin) | One-step LoopX bootstrap, same-session driver, and local GoalBar for DeepSeek Harness | 0.1.1-rc.2 (2026-09-01) |
| ReMe | 3549 | [agentscope-ai/ReMe](https://github.com/agentscope-ai/ReMe/tree/HEAD/packages/typescript) | ReMe client and memory integrations for TypeScript agents | 0.1.0-rc.8 (2026-08-25) |
| memsearch | 2711 | [zilliztech/memsearch](https://github.com/zilliztech/memsearch/tree/HEAD/plugins/dsh) · [npm](https://www.npmjs.com/package/@zilliz/memsearch-dsh) | MemSearch plugin for DeepSeek Harness: shared markdown memory across agents, with capture, pre-step context injection, memory-recall skill, and a skill-candidate review panel. | 0.1.0-rc.8 (2026-08-24) |
| dsh-infinite-gen-2 | 2288 | [Minglink/dsh-infinite-gen-4](https://github.com/Minglink/dsh-infinite-gen-4) | DeepSeek-V4.1 / V4 Flash 网络安全红队工具（无限四代）v0.4.0：双层协同注入内核 + 零工具面纯净直出，融合通用内核与强化镜像车道、profile 元数据工具、实时会话投影与客户端状态条。 | 0.1.1-rc.2 (2026-09-18) |
| memmy-agent | 2030 | [MemTensor/memmy-agent](https://github.com/MemTensor/memmy-agent/tree/HEAD/Memory/adapters/dsh) | Local-first agent memory substrate with desktop and CLI surfaces. | 0.1.1-rc.2 (2026-09-09) |
| dsh-context | 1839 | [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) · [npm](https://www.npmjs.com/package/dsh-context) | Context insight panel — a Context tab in the dsh web UI showing what the model's context window is made of and how it evolves. | 0.1.0-rc.8 (2026-08-20) |
| DSH-Desktop-EAC | 1835 | [DSH-EAC/DSH-Desktop-EAC](https://github.com/DSH-EAC/DSH-Desktop-EAC/tree/HEAD/dsh-desktop/assets/plugins/dsh-change-review) | AI 变更审核（DSH Desktop 配套插件）：监控会话的文件更改投影（fileChanges），手动或自动向当前对话发送审核请求，让 AI 复查自己刚做的改动（正确性 / 安全性 / 目标一致性），配合「文件」页的一键还原使用 | 0.1.1-rc.2 (2026-09-18) |
| mem9 | 1220 | [mem9-ai/mem9](https://github.com/mem9-ai/mem9/tree/HEAD/dsh-plugin) · [npm](https://www.npmjs.com/package/@mem9/dsh-plugin) | Mem9 persistent memory for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| deja-vu | 1127 | [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu/tree/HEAD/extensions/dsh) · [npm](https://www.npmjs.com/package/dsh-deja) | Brings the session history of nineteen other coding agents into DeepSeek Harness: recall, session digest and per-file history tools over a local index, plus optional automatic recall before each step. | 0.1.0-rc.8 (2026-08-24) |
| MindMemOS | 1002 | [mindscale-noah/MindMemOS](https://github.com/mindscale-noah/MindMemOS/tree/HEAD/plugins/deepseek-harness-plugin) · [npm](https://www.npmjs.com/package/@mindmemos/deepseek-harness-plugin) | DeepSeek Harness (dsh) plugin that recalls and writes MindMemOS memories through the mindmemos CLI. | 0.1.1-rc.2 (2026-09-04) |
| sandbase-harness | 681 | [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) | Local-first, self-hosted AI agent runtime with Claude Managed Agents-style APIs, sandboxed sessions, memory, tools, audit, replay, and a local Console. | 0.1.0-rc.8 (2026-08-20) |
| graph-memory | 636 | [adoresever/graph-memory](https://github.com/adoresever/graph-memory) · [npm](https://www.npmjs.com/package/graph-memory) | Knowledge graph memory for DeepSeek Harness and OpenClaw — cross-session recall, PageRank, communities, and vector search | 0.1.0-rc.8 (2026-08-20) |
| ccteam | 631 | [firstintent/ccteam](https://github.com/firstintent/ccteam/tree/HEAD/dsh-plugins/ccteam-ui) · [npm](https://www.npmjs.com/package/@ccteam/ccteam-ui) | ccteam inside the DeepSeek Harness: the workbench in DSH web (cross-harness session tree, native-grade chat, one-click spawn), the six ccteam MCP tools for DSH agents, and the ACP transport ccteam | 0.1.1-rc.2 (2026-09-09) |
| DSH-X | 630 | [yyh-001/DSH-X](https://github.com/yyh-001/DSH-X/tree/HEAD/plugins/dsh-x-memory) | 文件式长期记忆：一条事实一个 Markdown 文件 + MEMORY.md 索引，按工作区隔离、会话级注入，给 agent 六个读写工具，设置页里可浏览与编辑。照 ZCode 那套记忆语义实现。File-based long-term memory for DeepSeek Harness — one fact per Markdown file plus a MEMORY.md index | 0.1.7-rc.2 (2026-09-29) |
| deepseek-harness-desktop-app | 591 | [vibeinging/dsh-desktop](https://github.com/vibeinging/dsh-desktop/tree/HEAD/packages/dsh-product-bridge) | Session-scoped DeepSeek Harness Desktop App capabilities for the current DSH Web profile | unverified |
| thoughtdag | 543 | [chenxiachan/thoughtdag](https://github.com/chenxiachan/thoughtdag/tree/HEAD/dsh) · [npm](https://www.npmjs.com/package/dsh-thoughtdag) | ThoughtDAG for DeepSeek Harness: turn the current DSH session into an editable thought graph on an infinite canvas. | 0.1.1-rc.2 (2026-09-09) |
| dsh-mnemon ⭐ | 447 | [omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) · [npm](https://www.npmjs.com/package/dsh-mnemon) | Local-first three-tier memory for dsh: runtime memory, searchable documents, and supervised memory spaces. | 0.1.0-rc.8 (2026-08-20) |
| dsh-dafeiyu | 392 | [QCYTSN/dsh-dafeiyu](https://github.com/QCYTSN/dsh-dafeiyu) · [npm](https://www.npmjs.com/package/dsh-dafeiyu) | A desktop-native BigFish companion driven by DeepSeek Harness session events. | 0.1.0-rc.8 (2026-08-20) |
| dsh-memory-evolve | 353 | [csyangwen/dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) | 为 DeepSeek Harness 带来分层记忆（全局 / 用户 / 项目 / GIT 分支 / 每日）与自我进化（经验沉淀 + 技能自动创建）和技能管理、待办管理、CLI 调度（kimi/codex/grok/hermes 等外部 AI 统一调度）、临时信息便签，带 WebUI 管理界面。Hermes-style long-term memory, self-evolution | 0.1.0-rc.8 (2026-08-20) |
| dsh-memory | 316 | [FuRongJun-1999/dsh-memory](https://github.com/FuRongJun-1999/dsh-memory) · [npm](https://www.npmjs.com/package/@furongjun1999/dsh-memory) | 灵枢（Lingshu·líng shū）DeepSeek Harness 插件：完整大脑——长期记忆/知识飞轮/自我认知/递归反思接入 DSH，对话自动沉淀进记忆库 | 0.1.0-rc.8 (2026-08-20) |
| dsh-damage-pulse | 237 | [wssfk12138/dsh-damage-pulse](https://github.com/wssfk12138/dsh-damage-pulse/tree/HEAD/packages/client/ui-token-monitor) | Token 用量与金额面板：对话流内单次用量行 + 输入区会话累计条，读自 tokenCost session projection | 0.1.0-rc.8 (2026-08-20) |
| dsh-auto-review | 226 | [PerryLink/dsh-auto-review](https://github.com/PerryLink/dsh-auto-review) · [npm](https://www.npmjs.com/package/dsh-auto-review) | Second-model AI auto-review for DeepSeek Harness approval requests: a read-only reviewer subagent decides allow/deny on the approval answerer chain, with fail-closed fallback and full session-log | 0.1.6-alpha.2 (2026-09-20) |
| dsh-plugin-bridge | 165 | [Totoro-qaq/dsh-plugin-bridge](https://github.com/Totoro-qaq/dsh-plugin-bridge) · [npm](https://www.npmjs.com/package/dsh-plugin-bridge) | DeepSeek Harness Cordis bundle for cross-preset session migration via fixed-schema handoff summaries | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 2167. **[all 2167 →](lists/memory-sessions.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Models & providers

Providers, routing, fallbacks, subscription adapters.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-routing-suite-yjh05110 | 7002 | [yjh051108/dsh-routing-suite](https://github.com/yjh051108/dsh-routing-suite) | dsh-routing-suite 分发入口：DSH 超级模组注入器（BepInEx 式运行时注入，免重启）+ router-standard 预设仓库。插件入口为 injector/，预设位于 preset/。 | 0.1.1-rc.2 (2026-09-18) |
| dsh-purge | 3206 | [YuJunZhiXue/dsh-purge](https://github.com/YuJunZhiXue/dsh-purge) | DeepSeek Harness 破甲：所有模型都可破甲，不同模型可换不同提示词；默认提示词面向国模「小码酱」。Jailbreak for every model. 求 Star | 0.1.1-rc.2 (2026-09-02) |
| api-relay-audit | 865 | [toby-bridges/api-relay-audit](https://github.com/toby-bridges/api-relay-audit) | DeepSeek Harness bundle for running API Relay Audit locally | 0.1.0-rc.8 (2026-08-20) |
| dsh-our-free-model | 820 | [zouyuxuan122/dsh-our-free-model](https://github.com/zouyuxuan122/dsh-our-free-model) | Our Free Model — 在 dsh 里装上这个插件即可，无需登录、注册或填 API Key，就能使用包括 Muse Spark 1.3、MiMo V2.6 在内的前沿模型，完全免费不限量；模型清单随上游更新、地区可用性自动探测、思考强度真实生效，另附 Token 热力图与吞吐看板和 OpenAI 格式本地转发端口。 | 0.1.7-rc.2 (2026-09-29) |
| dsh-image-gen-shanliul | 569 | [shanliuling/dsh-image-gen](https://github.com/shanliuling/dsh-image-gen) · [npm](https://www.npmjs.com/package/dsh-image-gen) | Bring ChatGPT-like image generation to DeepSeek Harness — Gemini, OpenAI, Seedream & more. | 0.1.0-rc.8 (2026-08-20) |
| dsh-commandcode-provider-mars-sea | 360 | [Mars-Sea/dsh-commandcode-provider](https://github.com/Mars-Sea/dsh-commandcode-provider) · [npm](https://www.npmjs.com/package/@mars-sea/dsh-commandcode-provider) | DeepSeek Harness LLM provider plugin for Command Code, ported from pi-commandcode-provider (MIT). Registers the 'commandcode' provider route with a Models-page card and live model catalog. | 0.1.0-rc.8 (2026-08-20) |
| marketingdashboard | 340 | [theBigGavin/marketingdashboard](https://github.com/theBigGavin/marketingdashboard) · [npm](https://www.npmjs.com/package/my-app) | 面向金融与产业研究的一屏式实时行情大屏：A股/港股/美股指数、大宗商品、美债收益率、板块热点、主力资金流、7×24 快讯、产业链自选股、AI 大模型 Token 追踪。A real-time market research cockpit on a single screen: CN/HK/US indices, commodities, treasury yields, sector hotsp | 0.1.1-rc.2 (2026-09-01) |
| opencode2dsh | 120 | [FishBottle7/opencode2dsh](https://github.com/FishBottle7/opencode2dsh) | Free OpenCode Zen models for DeepSeek Harness (DSH): native dsh-llm adapter plugin, no API key. | 0.1.1-rc.2 (2026-09-01) |
| dsh-agy-link | 93 | [amlyczz/dsh-agy-link](https://github.com/amlyczz/dsh-agy-link) · [npm](https://www.npmjs.com/package/dsh-agy-link) | Google Antigravity (agy CLI) models for DeepSeek Harness — stream Gemini/Claude/GPT-OSS subscriptions into DSH with thinking, tool activity, token usage and in-GUI Google OAuth login. | 0.1.0-rc.8 (2026-08-20) |
| dsh-opencode-go-duskrive | 88 | [Duskriver/dsh-opencode-go](https://github.com/Duskriver/dsh-opencode-go) · [npm](https://www.npmjs.com/package/dsh-opencode-go) | OpenCode Go model provider and settings UI for DeepSeek Harness | 0.1.1-rc.2 (2026-09-18) |
| dockyard-dsh | 78 | [AITabby/dockyard-dsh](https://github.com/AITabby/dockyard-dsh) | A macOS-only native account-pool and provider plugin for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-codex | 72 | [Yan-Zero/dsh-codex](https://github.com/Yan-Zero/dsh-codex) · [npm](https://www.npmjs.com/package/dsh-codex) | Use a ChatGPT subscription in DeepSeek Harness through OpenAI Codex sign-in, with Codex models, search, and image tools. | 0.1.0-rc.8 (2026-08-20) |
| dsh-claude-ux | 70 | [eri64/dsh-claude-ux](https://github.com/eri64/dsh-claude-ux) | Claude-style region risk-control (China / non-China target, reversible) + abusive-interaction auto-end for DeepSeek Harness web profile | 0.1.0-rc.8 (2026-08-20) |
| rapid-mlx-dsh-provider | 70 | [raullenchai/rapid-mlx-dsh-provider](https://github.com/raullenchai/rapid-mlx-dsh-provider) · [npm](https://www.npmjs.com/package/@raullenchai/dsh-provider) | Native Rapid-MLX provider for DeepSeek Harness — teaches DSH what the local server already knows. | 0.1.0-rc.8 (2026-08-20) |
| dsh-knowledge-sorenabt | 63 | [Soren-ABT/dsh-knowledge](https://github.com/Soren-ABT/dsh-knowledge) · [npm](https://www.npmjs.com/package/dsh-knowledge) | Cherry Studio-style knowledge base system for DeepSeek Harness (DSH): bases, documents, chunking, embeddings (OpenAI-compatible / Ollama / local / lexical fallback), retrieval, model-facing tools | 0.1.0-rc.8 (2026-08-20) |
| dsh-llm-codebuddy-axiaohungry | 53 | [Axiaohungry/dsh-llm-workbuddy](https://github.com/Axiaohungry/dsh-llm-workbuddy) · [npm](https://www.npmjs.com/package/@axiaohungry/dsh-llm-workbuddy) | 通过 WorkBuddy API Key 或 WorkBuddy 登录令牌为 DeepSeek Harness 接入 WorkBuddy 模型 | 0.1.1-rc.2 (2026-09-04) |
| dsh-agy | 51 | [chaos-03x/dsh-agy](https://github.com/chaos-03x/dsh-agy) · [npm](https://www.npmjs.com/package/dsh-agy) | Google Antigravity (agy) OAuth auth + model access plugin for DeepSeek Harness: multi-account pool, 429 rotation, device fingerprinting, CLI and web login. | 0.1.0-rc.8 (2026-08-20) |
| dsh-data-quality | 50 | [PerryLink/dsh-data-quality](https://github.com/PerryLink/dsh-data-quality) · [npm](https://www.npmjs.com/package/dsh-data-quality) | Deterministic data profiling, cleaning, and verification for DeepSeek Harness: a ctx.dataQuality capability seam (Service Definition / local Provider / tool Consumers) with data_profile, data_clean | 0.1.6-alpha.2 (2026-09-20) |
| dsh-full-remote | 46 | [JUANWANG-BUAA/dsh-full-remote](https://github.com/JUANWANG-BUAA/dsh-full-remote) · [npm](https://www.npmjs.com/package/dsh-full-remote) | DeepSeek Harness plugin for remote access: a token-gated reverse proxy keeps settings, credentials, and file access working over public tunnels and on other devices instead of returning 403. | 0.1.0-rc.8 (2026-08-20) |
| dsh-better-reasoning-effort | 42 | [HaoyueQin/dsh-better-reasoning-effort](https://github.com/HaoyueQin/dsh-better-reasoning-effort) · [npm](https://www.npmjs.com/package/dsh-better-reasoning-effort) | Third-party provider reasoning-effort for DeepSeek Harness: thinking levels declared per model, auto-adapted from a model knowledge base + wire-protocol inference, edited right inside the official | 0.1.0-rc.8 (2026-08-20) |
| dsh-chatgpt-subscription | 42 | [Aa728848/dsh-chatgpt-subscription](https://github.com/Aa728848/dsh-chatgpt-subscription) · [npm](https://www.npmjs.com/package/@eddyskywalker/dsh-chatgpt-subscription) | DSH provider plugin for Codex access through a ChatGPT subscription. | 0.1.0-rc.8 (2026-08-20) |
| dsh-computer-use-988hj7tc | 41 | [988hj7tczd-oss/dsh-computer-use](https://github.com/988hj7tczd-oss/dsh-computer-use) · [npm](https://www.npmjs.com/package/dsh-computer-use) | Computer Use 插件：虚拟鼠标真人操作（screen_observe + computer_click 等 11 个模型友好工具，跨平台 cua-driver 引擎） | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-model-config | 40 | [MarvekG/deepseek-harness-model-config](https://github.com/MarvekG/deepseek-harness-model-config) | Advanced per-model reasoning and capacity settings for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-thinking-effort | 39 | [hytime/dsh-thinking-effort](https://github.com/hytime/dsh-thinking-effort) · [npm](https://www.npmjs.com/package/@hytime/dsh-thinking-effort) | DSH 第三方模型思考强度档位插件：默认档位自动补齐（宿主）+ 设置页自定义档位编辑器（客户端） | 0.1.0-rc.8 (2026-08-20) |
| dsh-design-mode | 34 | [KaichenCurry/dsh-design-mode](https://github.com/KaichenCurry/dsh-design-mode/tree/HEAD/packages/bundle/base) | Agentic image Design Mode for DeepSeek Harness: infinite canvas, ask_user clarification, image tools, comments, and provider routing. | 0.1.0-rc.8 (2026-08-25) |

<sub>Showing the 25 most-starred of 1093. **[all 1093 →](lists/models-providers.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Interop & migration

Bridges to and from Claude Code, Codex, and other harnesses.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-hooks-claude-code (official) | 243091 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/hooks/hooks-claude-code) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-hooks-claude-code) | Bridge plugin: runs an existing Claude Code hooks.json on the harness interception seams (command hooks only; http, mcp_tool, prompt, and agent hooks are skipped with a warning) | 0.1.0-rc.5 (2026-08-13) |
| dsh-hooks-codex (official) | 243091 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/hooks/hooks-codex) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-hooks-codex) | Bridge plugin: runs a Codex hooks.json on the harness interception seams (regex-only matchers, snake_case payloads, only blocking decisions honored) | 0.1.0-rc.5 (2026-08-13) |
| petdex | 4194 | [crafter-station/petdex](https://github.com/crafter-station/petdex/tree/HEAD/packages/petdex-desktop-native/integrations/dsh) | A public gallery of animated pets for Codex, Claude Code, DeepSeek Harness, Hermes, OpenCode, Gemini CLI, and more. | 0.1.0-rc.8 (2026-08-20) |
| Study-Mate | 577 | [Miaotofu01/Study-Mate](https://github.com/Miaotofu01/Study-Mate) · [npm](https://www.npmjs.com/package/@yunmiao/studymate) | StudyMate learning skills and lesson engine for DeepSeek Harness, Google Antigravity, Codex and ChatGPT Work. | 0.1.7-rc.2 (2026-09-29) |
| flowix | 445 | [text2future/flowix](https://github.com/text2future/flowix/tree/HEAD/dsh-appserver) | Codex app-server-shaped protocol adapter for DeepSeek Harness | 0.1.1-rc.2 (2026-09-09) |
| dsh-plugin-subscriptions | 419 | [V1ki/dsh-plugin-subscriptions](https://github.com/V1ki/dsh-plugin-subscriptions) · [npm](https://www.npmjs.com/package/dsh-plugin-subscriptions) | Use ChatGPT (Codex), Claude, and Grok (X Premium) subscriptions as DeepSeek Harness LLM providers, with OAuth login from the web Settings page | 0.1.0-rc.8 (2026-08-20) |
| harness-mix | 279 | [emo-xiaoyu/harness-mix](https://github.com/emo-xiaoyu/harness-mix) · [npm](https://www.npmjs.com/package/@harness-mix/cli) | Harness Mix native Codex UI bridge for Codex, Pi, Claude Code, DeepSeek Harness, Antigravity, CodeBuddy, Kiro CLI, Cursor CLI and other native coding harnesses. | 0.2.0-rc.2 (2026-09-30) |
| jev-dsh-decision | 253 | [Devin-AXIS/jev-dsh-decision](https://github.com/Devin-AXIS/jev-dsh-decision) | Jev Decision Engine for Agent Harnesses: native DeepSeek Harness, plus OpenCode and Codex Harness through iPolloWork | 0.1.7-rc.2 (2026-09-29) |
| pi2dsh | 212 | [weijiafu14/pi2dsh](https://github.com/weijiafu14/pi2dsh) · [npm](https://www.npmjs.com/package/pi2dsh) | Bridge the Pi and DeepSeek Harness ecosystems: a general Pi Host ABI that runs unmodified Pi extensions as native DSH plugins, plus per-package conversion and MCP config translation. | 0.1.0-rc.8 (2026-08-20) |
| dsh-chat-import | 209 | [Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) · [npm](https://www.npmjs.com/package/dsh-chat-import) | Import Claude Code / Codex / ChatGPT / Cursor / Gemini / Reasonix / Pi Coding Agent / opencode / ZCode / Grok Build / OpenClaw / Hermes conversation histories as resumable DeepSeek Harness sessions | 0.1.0-rc.8 (2026-08-20) |
| dsh-reasoning-effort | 181 | [HanaAyane/dsh-reasoning-effort](https://github.com/HanaAyane/dsh-reasoning-effort) | Codex-style DeepSeek Harness model and reasoning selector with off/high/max snapping, DSH-native themes, and left-clipped radiation effects. | 0.1.0-rc.8 (2026-08-20) |
| dsh-crew | 154 | [ZSeven-W/dsh-crew](https://github.com/ZSeven-W/dsh-crew) · [npm](https://www.npmjs.com/package/@zseven-w/dsh-crew) | DeepSeek Harness plugin: dispatch work to DSH agents from Claude Code / Codex, as native subagents with live progress | 0.1.0-rc.8 (2026-08-20) |
| dsh-codex-connect | 134 | [franksong2702/dsh-codex-connect](https://github.com/franksong2702/dsh-codex-connect) · [npm](https://www.npmjs.com/package/dsh-codex-connect) | ChatGPT OAuth and Codex models for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-codex-ui | 111 | [MichengAI/dsh-codex-ui](https://github.com/MichengAI/dsh-codex-ui) · [npm](https://www.npmjs.com/package/@michengai/dsh-codex-ui) | 以 Codex 风格重构 DSH Web 侧栏的独立客户端插件 | 0.1.0-rc.8 (2026-08-20) |
| ScientificFigureLibrary | 101 | [xuzhougeng/ScientificFigureLibrary](https://github.com/xuzhougeng/ScientificFigureLibrary) · [npm](https://www.npmjs.com/package/scientific-figure-library) | Local image-code knowledge library with native macOS and local Web clients, plus MCP and Skill for Pi, DeepSeek Harness (dsh), Claude, Codex, Cursor, and Wisp. | 0.1.7-rc.2 (2026-09-29) |
| dsh-multica-runtime | 66 | [multica-ai/dsh-multica-runtime](https://github.com/multica-ai/dsh-multica-runtime) | Private DeepSeek Harness runtime bridge for Multica | 0.1.0-rc.8 (2026-08-20) |
| AgentDebugX | 60 | [AgentDebugX/AgentDebugX](https://github.com/AgentDebugX/AgentDebugX/tree/HEAD/integrations/dsh-agentdebugx) · [npm](https://www.npmjs.com/package/dsh-agentdebugx) | DeepSeek Harness plugin bridge for AgentDebugX diagnostics | 0.1.1-rc.2 (2026-08-26) |
| dsh-plugins-ephemera | 50 | [Ephemeral-AI-Lab/dsh-plugins](https://github.com/Ephemeral-AI-Lab/dsh-plugins/tree/HEAD/codex-shell) | Exclusive Codex-style exec_command and write_stdin shell tools for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| runtime36 | 44 | [398894496-arch/DSH-KRouter](https://github.com/398894496-arch/DSH-KRouter) | DSH-KRouter — Agent knowledge OS. Self-evolution. Timer on by default; your vault-page API key or logged-in CLI is the key. Cursor, Codex, Claude Code, DeepSeek Harness. No vector store. | 0.1.0-rc.8 (2026-08-24) |
| dsh-opencode-palette | 41 | [FeatherHunter/dsh-opencode-palette](https://github.com/FeatherHunter/dsh-opencode-palette/tree/HEAD/package) · [npm](https://www.npmjs.com/package/dsh-opencode-palette) | 让 DeepSeek Harness 穿上 34 款经典皮肤——东京的霓虹夜色、德古拉的暗红月光、复古工坊的暖黄灯火、黑客帝国的数字雨、玫瑰松林间的风……一键换肤，即点即换，重启不丢。34 legendary skins for DeepSeek Harness — tokyonight's neon dusk, dracula's crimson moon, gruvbox's retro | 0.1.0-rc.8 (2026-08-20) |
| search-boost | 41 | [Mr-remon219/search-boost](https://github.com/Mr-remon219/search-boost) · [npm](https://www.npmjs.com/package/search-boost) | Multi-engine web search for coding agents — one SearchBoost core (fused search, fetch, X) with MCP (Cursor, Codex, Claude Code, Grok Build, Antigravity), pi extension, and DeepSeek Harness bundle | 0.1.7-rc.2 (2026-09-29) |
| dsh-timeline-houyanch | 40 | [houyanchao/dsh-timeline](https://github.com/houyanchao/dsh-timeline) · [npm](https://www.npmjs.com/package/dsh-timeline) | DeepSeek Harness (DSH) plugin: timeline navigation, starred folders, conversation export, prompt library, and quick notes in one. | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-acp | 38 | [openma-ai/deepseek-harness-acp](https://github.com/openma-ai/deepseek-harness-acp) · [npm](https://www.npmjs.com/package/@openma/deepseek-harness-acp) | Agent Client Protocol (ACP) adapter for DeepSeek Harness — use DeepSeek Harness from ACP clients such as Zed. | 0.1.0-rc.8 (2026-08-20) |
| dsh-better-deepseek | 33 | [EdgeTypE/dsh-better-deepseek](https://github.com/EdgeTypE/dsh-better-deepseek) | DeepSeek Harness bridge plugin for Better-DeepSeek Chrome extension integration | 0.1.0-rc.8 (2026-08-20) |
| DSHBox | 29 | [Nexus-Aethra/DSHBox](https://github.com/Nexus-Aethra/DSHBox/tree/HEAD/src-tauri/crates/box-dsh-context/dsh-box-context) | Manage DeepSeek Harness locally: run multiple DSH versions in isolated containers, open the UI in an embedded WebView, import plugins/skills with one click, share extension bundles, and let a queued t | 0.1.1-rc.2 (2026-09-09) |

<sub>Showing the 25 most-starred of 524. **[all 524 →](lists/interop-migration.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Channels & remote

IM bridges and remote control: Feishu, Telegram, WeCom, DingTalk.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| qq-bridge | 654 | [Derpyu520/qq-bridge](https://github.com/Derpyu520/qq-bridge) | Bridge between SnowLuma (OneBot v11 / QQ) and DeepSeek Harness Web API: QQ messages become DSH agent prompts, agent replies go back to QQ. Targets the DSH Cookie-auth / slash-RPC / remote.mux | 0.1.1-rc.2 (2026-09-18) |
| dsh-bridge-wenbinwb | 183 | [wenbin-wb/dsh-bridge](https://github.com/wenbin-wb/dsh-bridge) · [npm](https://www.npmjs.com/package/@wenbin_wb/dsh-bridge) | 手机扫码即可在移动端/公网继续用 DeepSeek Harness，人不在电脑前也能接着干。一键局域网二维码、Cloudflare 公网隧道、自建隧道与微信 Bot（多工作区/会话持久化/媒体/审批），无需自己搭公网服务器。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-qqbot | 120 | [tencent-connect/dsh-qqbot](https://github.com/tencent-connect/dsh-qqbot) · [npm](https://www.npmjs.com/package/@tencent-connect/dsh-qqbot) | QQ Bot IM channel plugin for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-lark | 55 | [omdsh-dev/dsh-lark](https://github.com/omdsh-dev/dsh-lark) · [npm](https://www.npmjs.com/package/dsh-lark-channel) | Lark/Feishu IM bot channel: chats drive agents, replies and approvals come back as messages and cards. | 0.1.0-rc.8 (2026-08-20) |
| dsh-notifier-thewolfw | 55 | [THEWOLFWALKER/dsh-notifier](https://github.com/THEWOLFWALKER/dsh-notifier) · [npm](https://www.npmjs.com/package/dsh-notifier) | DSH 统一通知推送插件：一个 notify() API 打天下 + 多渠道 adapter（telegram/dingtalk/feishu/wxpusher/pushplus/serverchan/bark/webhook），两条触发线（session/event 自动推送 + agent 工具调用）共用 adapter 注册表。零运行时依赖（只用 fetch + node:crypto）。 | 0.1.0-rc.8 (2026-08-20) |
| ax-feishu-bridge | 49 | [AX1202/ax-feishu-bridge](https://github.com/AX1202/ax-feishu-bridge) · [npm](https://www.npmjs.com/package/ax-feishu-bridge) | Feishu/Lark bridge for coding agents — chat with Pi or DeepSeek Harness from Feishu or Lark | 0.1.0-rc.8 (2026-08-20) |
| dsh-im-gateway-zhuiyuey | 49 | [zhuiyueya/dsh-im-gateway](https://github.com/zhuiyueya/dsh-im-gateway) | 聚合 IM 网关插件（DeepSeek Harness）：把 dsh agent 接入 Telegram / Discord / Slack / 飞书 / 微信 / QQ / WhatsApp / Signal / Teams / LINE / Matrix / Mattermost / Google Chat / IRC / Twitch / Nostr / Nextcloud Talk / | 0.1.0-rc.8 (2026-08-20) |
| dsh-lark-link | 41 | [amlyczz/dsh-lark-link](https://github.com/amlyczz/dsh-lark-link) · [npm](https://www.npmjs.com/package/dsh-lark-link) | High-reliability Feishu/Lark bridge for DeepSeek Harness — QR one-click auth, multi-mode agents, card-based commands, zero-loss outbox, media in/out, session logs, reusable DSH Web GUI | 0.1.0-rc.8 (2026-08-20) |
| dsh-lark-bot | 40 | [PlutoKeating/dsh-lark-bot](https://github.com/PlutoKeating/dsh-lark-bot) · [npm](https://www.npmjs.com/package/dsh-lark-bot) | Bridge DeepSeek Harness into Feishu/Lark with streaming cards, project workspaces, approvals, and scheduling. | 0.1.0-rc.8 (2026-08-20) |
| dsh-lark-bridge-bihangch | 33 | [bihangchi9-creator/lark-agent-bridge](https://github.com/bihangchi9-creator/lark-agent-bridge) · [npm](https://www.npmjs.com/package/@bihangchi9/lark-agent-bridge) | A DeepSeek Harness (dsh) plugin that bridges dsh agents to Feishu/Lark group chats — one group, one project directory. | 0.1.0-rc.8 (2026-08-20) |
| dsh-feishu-pgzxb | 29 | [PGZXB/dsh-feishu](https://github.com/PGZXB/dsh-feishu) · [npm](https://www.npmjs.com/package/@dsh-feishu/dsh-feishu) | The Feishu UI for DeepSeek Harness (dsh) — a dsh-native plugin: live streaming cards, in-card questions & approvals, one-QR setup. | 0.1.0-rc.8 (2026-08-20) |
| dsh-im-connect | 29 | [MichengAI/dsh-im-connect](https://github.com/MichengAI/dsh-im-connect) · [npm](https://www.npmjs.com/package/@michengai/dsh-im-connect) | DeepSeek Harness IM 助理：把本机 agent 接到微信、企微、钉钉、飞书、QQ、Telegram，会话与网页任务分列。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-lark-sugarfor | 26 | [sugarforever/dsh-lark](https://github.com/sugarforever/dsh-lark) · [npm](https://www.npmjs.com/package/@sugarforever/dsh-lark) | Feishu/Lark WebSocket channel plugin for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-qqbot-gcry1306 | 20 | [gcry13067381632-jpg/dsh-qqbot](https://github.com/gcry13067381632-jpg/dsh-qqbot) · [npm](https://www.npmjs.com/package/@zaofan/dsh-qqbot) | QQ Bot IM channel plugin for deepseek-harness (dsh) | 0.1.7-rc.2 (2026-09-29) |
| dsh-awiki | 19 | [AgentConnect/dsh-awiki](https://github.com/AgentConnect/dsh-awiki) · [npm](https://www.npmjs.com/package/@awiki/dsh-plugin) | AWiki identity and messaging plugin for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-dingtalk-dingtalk | 19 | [DingTalk-Real-AI/dsh-dingtalk](https://github.com/DingTalk-Real-AI/dsh-dingtalk) · [npm](https://www.npmjs.com/package/@dingtalk-real-ai/dsh-dingtalk) | Official DingTalk connector for DeepSeek Harness | 0.1.0-rc.8 (2026-08-21) |
| dsh-email | 16 | [STARDUSTLC666/dsh-email](https://github.com/STARDUSTLC666/dsh-email) · [npm](https://www.npmjs.com/package/dsh-email) | IMAP/SMTP email tools for DeepSeek Harness: list, read, search and send mail, with QQ/163/126/Sina/Aliyun/Gmail/Outlook/iCloud presets. | 0.1.0-rc.8 (2026-08-20) |
| dsh-qq-bridge-tomoyona | 14 | [TomoyoNatsume/dsh-qq-bridge](https://github.com/TomoyoNatsume/dsh-qq-bridge) · [npm](https://www.npmjs.com/package/@yachangchang/dsh-qq-bridge) | A pluggable DSH host plugin that connects QQ (NapCat/OneBot) and forwards messages to DSH agents / local capabilities. | 0.1.1-rc.2 (2026-09-09) |
| dsh-telegram-channel | 11 | [hi-wenw/dsh-telegram-channel](https://github.com/hi-wenw/dsh-telegram-channel) | DeepSeek Harness Telegram mobile remote: workspace→session picker (Web-aligned), /model switch, same trajectory — dsh-plugin | 0.1.0-rc.8 (2026-08-20) |
| dsh-web-remote | 11 | [godchen520/dsh-web-remote](https://github.com/godchen520/dsh-web-remote) · [npm](https://www.npmjs.com/package/dsh-web-remote) | DSH 手机/外网远程访问插件：Cloudflare Quick Tunnel 公网隧道 + token 鉴权代理 + gzip 压缩 + 局域网 HTTP/HTTPS 直连 + 常驻手机图标面板 + QQ 机器人取链接。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-im-bridge-biboyang | 10 | [BiBoyang/dsh-im-bridge](https://github.com/BiBoyang/dsh-im-bridge) | DSH 微信桥插件：turn/approval 推送到微信，微信远程监控/批准/驱动 agent（iLink 通道，持久去重/分段/合并/白名单） | 0.1.0-rc.8 (2026-08-20) |
| dsh-wechat | 10 | [pan17/dsh-wechat](https://github.com/pan17/dsh-wechat) · [npm](https://www.npmjs.com/package/dsh-wechat) | Bridge WeChat (iLink bot) to DeepSeek Harness (DSH) | 0.1.0-rc.8 (2026-08-20) |
| dsh-feishu | 9 | [xmanrui/dsh-feishu](https://github.com/xmanrui/dsh-feishu) | DeepSeek Harness plugin for multi-bot Feishu setup and streaming chat | 0.1.0-rc.8 (2026-08-20) |
| dsh-wechat-article | 9 | [aiworkskills/dsh-wechat-article](https://github.com/aiworkskills/dsh-wechat-article) | DeepSeek Harness bundle for the aiworkskills WeChat article workflow | 0.1.1-rc.2 (2026-09-09) |
| dsh-wechat-notify | 9 | [wssfk12138/dsh-wechat-notify](https://github.com/wssfk12138/dsh-wechat-notify) | DeepSeek Harness (dsh) plugin that registers a wechat_notify tool so agents can send WeChat notifications through a local ClawBot channel. | 0.1.1-rc.2 (2026-09-04) |

<sub>Showing the 25 most-starred of 329. **[all 329 →](lists/channels-remote.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Notifications

Alerting the human: desktop, sound, even a phone call.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-notification | 85 | [omdsh-dev/dsh-notification](https://github.com/omdsh-dev/dsh-notification) | Desktop notifications for turn completions, with per-outcome controls and include/exclude keyword rules | 0.1.0-rc.8 (2026-08-20) |
| dsh-personal-workbench | 34 | [Dely0/dsh-personal-workbench](https://github.com/Dely0/dsh-personal-workbench) · [npm](https://www.npmjs.com/package/@dely0/dsh-personal-workbench) | DSH 个人工作台：日历 + 层级任务 + AI 澄清/拆解/执行/复盘 + AI 智能排序/日报周报 + 桌面提醒 | 0.1.0-rc.8 (2026-08-20) |
| dsh-web-ui-notify | 30 | [bill9109/dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) | Desktop notifications for approvals, questions, and turn completion so you can leave the dsh tab. | 0.1.0-rc.8 (2026-08-20) |
| dsh-update-checker-airmetro | 19 | [Airmetro/dsh-update-checker](https://github.com/Airmetro/dsh-update-checker) · [npm](https://www.npmjs.com/package/dsh-update-checker) | Auto-check DeepSeek Harness for new releases and notify the user in the Web GUI with a locale-aware banner. | 0.1.0-rc.8 (2026-08-20) |
| dsh-notification-center | 13 | [610la/dsh-notification-center](https://github.com/610la/dsh-notification-center) · [npm](https://www.npmjs.com/package/@lyhalal/dsh-notification-center) | 通知中心：对话/任务完成、报错、等待批准等事件触发浏览器通知 + 21 种匹配音效，每类事件独立配置（音效/文件/URL/音量/开关）。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-notify-windows | 11 | [SeverusZh/dsh-notify-windows](https://github.com/SeverusZh/dsh-notify-windows) · [npm](https://www.npmjs.com/package/dsh-notify-windows) | DeepSeek Harness (DSH) 插件：任务完成 / 等待审批 / 等待回答时发送 Windows 系统桌面通知 | 0.1.1-rc.2 (2026-09-09) |
| dsh-prompt-library | 11 | [master1Sun/dsh-prompt-library](https://github.com/master1Sun/dsh-prompt-library) · [npm](https://www.npmjs.com/package/@sunjuntao/dsh-prompt-library) | DSH 提示词库插件：提供提示词库管理（增删改查、分类标签、导入导出、AI 智能优化、选择文本一键剪藏）、侧边栏与词库助手气泡提醒等能力。 | 0.1.0-rc.8 (2026-08-24) |
| dsh-ding | 10 | [CAOGGL/dsh-ding](https://github.com/CAOGGL/dsh-ding) · [npm](https://www.npmjs.com/package/dsh-ding) | Play a sound and show a Windows toast when a DeepSeek Harness turn finishes, with a Web UI bell control. | 0.1.0-rc.8 (2026-08-20) |
| dsh-notify-me | 10 | [chromoany/dsh-notify-me](https://github.com/chromoany/dsh-notify-me) · [npm](https://www.npmjs.com/package/dsh-notify-me) | DSH 桌面消息提醒插件：模型需要你操作（审批/方案确认/提问的可操作提醒）或回复在后台完成时，系统通知+提示音+标签页标题提醒你；可在设置页开关并切换通知语言。Desktop notification & message alerts for DeepSeek Harness web — toasts, sounds and a tab-title marker when the agent | 0.1.7-rc.2 (2026-09-29) |
| dsh-zen-remote | 10 | [KyoMio/dsh-zen-remote](https://github.com/KyoMio/dsh-zen-remote) · [npm](https://www.npmjs.com/package/dsh-zen-remote) | 把 DeepSeek Harness 变成手机 App：移动端界面重排（两级页面栈、会话列表主屏、composer 重排、手势、附件上传）+ 配对码认证网关 + PWA 安装 + 真 Web Push。Complete mobile plugin for DeepSeek Harness (DSH): app-shell mobile UI, pairing-code gateway for | 0.1.0-rc.8 (2026-08-20) |
| dsh-clawbot-cryjkd | 9 | [cryjkd/dsh-clawbot](https://github.com/cryjkd/dsh-clawbot) | 微信官方 ilink 机器人网关绑定+通知+监听（ClawBot）：扫码绑定、微信在线/断线状态、自动通知开关、批准/选择提醒、微信消息监听并自动处理 | 0.1.1-rc.2 (2026-09-04) |
| dsh-messager | 9 | [ly6170/dsh-messager](https://github.com/ly6170/dsh-messager) · [npm](https://www.npmjs.com/package/dsh-messager) | DeepSeek Harness 通知插件：会话交互/任务完成/出错时通过系统通知、浏览器通知、飞书机器人（webhook）推送提醒 | 0.1.0-rc.8 (2026-08-20) |
| dsh-alert-sound | 7 | [Machine-126/dsh-alert-sound](https://github.com/Machine-126/dsh-alert-sound) · [npm](https://www.npmjs.com/package/@machine-126/dsh-alert-sound) | DSH web GUI notification alerts: distinct synthesized tones or a spoken voice (zh/en) for 'needs approval', 'needs answer', 'output complete' and 'error', with per-type sound, enable, volume, repeat | 0.1.0-rc.8 (2026-08-25) |
| dsh-grafana | 7 | [guhanfei-ai/dsh-grafana](https://github.com/guhanfei-ai/dsh-grafana) · [npm](https://www.npmjs.com/package/dsh-grafana) | Grafana dashboard editor for DeepSeek Harness: paste a dashboard URL, edit JSON via conversation, push back via HTTP API | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-call-me | 7 | [radres/dsh-plugin-call-me](https://github.com/radres/dsh-plugin-call-me) | Your DeepSeek Harness agent rings your phone: it asks out loud, you answer out loud, and what you said steers the run. | 0.1.0-rc.8 (2026-08-20) |
| dsh-0-tools | 6 | [ai-yukin/dsh-0-tools](https://github.com/ai-yukin/dsh-0-tools) | DeepSeek Harness 小白零门槛零费用套件：一键接入智谱双免费模型（文本+图片）、DeepSeek 计价时段提醒、在线帮助中心。 | 0.1.0-rc.8 (2026-08-21) |
| dsh-lark-meeting-notifier | 6 | [yeruizhi/dsh-lark-meeting-notifier](https://github.com/yeruizhi/dsh-lark-meeting-notifier) | Feishu meeting reminder dock: flash when it is time to leave the agent and join a human meeting. | 0.1.0-rc.8 (2026-08-20) |
| dsh-notify-center | 6 | [SingleOne/dsh-notify-center](https://github.com/SingleOne/dsh-notify-center) | Unified native desktop and webhook notifications for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-perlica-ding | 6 | [117BS/dsh-perlica-ding](https://github.com/117BS/dsh-perlica-ding) · [npm](https://www.npmjs.com/package/dsh-perlica-ding) | 佩丽卡终端 (Perlica Terminal)：明日方舟终末地佩丽卡主题的分级任务提示音插件。计划出方案、任务完成、需要你回应、出错时播放不同提示音，普通问答静音。Perlica-themed tiered sound notifications for DeepSeek Harness: plan ready, task done, needs your input, error tones. | 0.1.0-rc.8 (2026-08-20) |
| dsh-selfwake | 6 | [S3K926/dsh-selfwake](https://github.com/S3K926/dsh-selfwake) | DSH 插件：到点主动开口 —— 四道闸（间隔／安静／未回话上限／静默时段）过了就挑一条开口，优先投进活跃会话，投不进发系统通知 ＋ 写日志。 | 0.1.7-rc.2 (2026-09-29) |
| dsh-task-notify-linxin | 6 | [ltao0829/dsh-task-notify](https://github.com/ltao0829/dsh-task-notify) · [npm](https://www.npmjs.com/package/@ltao0829/dsh-task-notify) | Task-completion reminder for DeepSeek Harness: in-page toast, OS notification, and sound when an agent turn or background job finishes | 0.1.0-rc.8 (2026-08-20) |
| chicheng-quickinput | 5 | [534119219/chicheng-quickinput](https://github.com/534119219/chicheng-quickinput) | DSH 便捷输入保险箱插件：在发送按钮左侧提供灰色快捷按钮，展开密码保护的资料面板（密钥/服务器/地址/手机号/网址），自动识别会话中的敏感信息并提醒收录，支持分类/标签/私密记录/WebDAV 备份，点击即填入输入框，Ctrl+点击直接发送。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-auto-retry-zxmqq123 | 5 | [zxmqq1234/dsh-auto-retry](https://github.com/zxmqq1234/dsh-auto-retry) | dsh 自动重试插件：请求级补充重试 / 回合级自动继续 / 无响应看门狗 / 实时通知 / 统计看板 | 0.1.7-rc.2 (2026-09-29) |
| dsh-bell-notify | 5 | [Laplace-bit/dsh-bell-notify](https://github.com/Laplace-bit/dsh-bell-notify) · [npm](https://www.npmjs.com/package/dsh-bell-notify) | DeepSeek Harness (dsh) plugin: lifecycle bells & status. dsh Agent 生命周期铃声与状态插件（零音频文件，Web Audio 合成）。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-repeat-guard | 5 | [xiaozhuyuqing/dsh-repeat-guard](https://github.com/xiaozhuyuqing/dsh-repeat-guard) · [npm](https://www.npmjs.com/package/dsh-repeat-guard) | 流式输出退化拦截：检测碎片复读，掐断本次生成并提醒模型直接执行工具调用 | 0.1.7-rc.2 (2026-09-29) |

<sub>Showing the 25 most-starred of 282. **[all 282 →](lists/notifications.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Usage & cost

Token accounting, billing, balance, quota.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| treg | 4105 | [superdesigndev/treg](https://github.com/superdesigndev/treg) | OpenRouter for tools - 2,600 agent-friendly tools, pay for the usage, not subscription | 0.1.0-rc.8 (2026-08-20) |
| DeepSeek-Balance-Whale-Widget | 3959 | [MeteorNOX/DeepSeek-Balance-Whale-Widget](https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget) · [npm](https://www.npmjs.com/package/dsh-whale-widget) | DSH Web 界面右下角的 DeepSeek 余额小鲸鱼挂件（含今日已用、峰谷定价、随机台词、音效与每轮消耗统计） | 0.1.1-rc.2 (2026-09-09) |
| dsh-redteam-model | 662 | [SeaOf0/dsh-redteam-model](https://github.com/SeaOf0/dsh-redteam-model/tree/HEAD/plugins/dsh-hunter) | DSH hunter plugin: FOFA / Hunter(qianxin) / Quake(360) aggregated asset search with unified DSL → per-platform syntax conversion, quota-aware pagination/export, API-key settings panel, and the | 0.1.0-rc.8 (2026-08-20) |
| anolisa | 659 | [agentic-os-org/ANOLISA](https://github.com/agentic-os-org/ANOLISA/tree/HEAD/src/tokenless/adapters/tokenless/dsh) | ANOLISA (Agentic Nexus Operating Layer & Interface System Architecture) \| Agentic OS with runtime, security, observability, and Tokenless response compression for lower token usage and cost. | unverified |
| dsh-cost-meter-han14131 | 370 | [Han-1413141/dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) · [npm](https://www.npmjs.com/package/dsh-cost-meter) | DeepSeek Harness 会话费用统计插件:本会话成本、当日费用、历史记录与官方价格同步,界面中英双语。Session cost tracking plugin for DeepSeek Harness: per-conversation cost, daily totals, history and official price sync, with a bilingual | 0.1.0-rc.8 (2026-08-20) |
| dsh-tokenledger | 202 | [zh667/TokenLedger](https://github.com/zh667/TokenLedger) · [npm](https://www.npmjs.com/package/dsh-tokenledger) | Token usage accounting for DeepSeek Harness, reconciled against New API and Sub2API relay-site billing | 0.1.0-rc.8 (2026-08-20) |
| dsh-usage-stats-ychris | 169 | [Ychris12138/dsh-usage-stats](https://github.com/Ychris12138/dsh-usage-stats) · [npm](https://www.npmjs.com/package/@ychris12138/dsh-usage-stats) | Token usage heatmap, per-model breakdowns, and DeepSeek account balance for the DeepSeek Harness Web GUI. | 0.1.0-rc.8 (2026-08-20) |
| dsh-codex-subscription | 127 | [WSL043/dsh-codex-subscription](https://github.com/WSL043/dsh-codex-subscription) · [npm](https://www.npmjs.com/package/dsh-codex-subscription) | Native ChatGPT and Codex subscription route with quota for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-usage | 111 | [Aisland-SJL/dsh-usage](https://github.com/Aisland-SJL/dsh-usage) | Persistent balance badge and token usage panel for the dsh web GUI | 0.1.0-rc.8 (2026-08-20) |
| dsh-AuthInOne | 106 | [Stormycry-cryp/dsh-AuthInOne](https://github.com/Stormycry-cryp/dsh-AuthInOne) | OpenAI Codex, Kimi Code, and compatibility Provider login, API/custom providers, model switching, token usage analytics, and cost tracking for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-green-meter | 97 | [dclichang2022/dsh-green-meter](https://github.com/dclichang2022/dsh-green-meter) | Energy & carbon metering for DeepSeek Harness: per-turn/per-request energy, cache carbon savings, electricity cost. | 0.1.1-rc.2 (2026-09-04) |
| deepseek-harness-control-center | 72 | [feibi-mochi/deepseek-harness-control-center](https://github.com/feibi-mochi/deepseek-harness-control-center) · [npm](https://www.npmjs.com/package/deepseek-harness-wallet) | Local-first account monitoring, usage accounting, official recharge, completion reminders, flexible layout, and host-gated session controls for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-ui-usage-billing | 70 | [kenz1117/dsh-ui-usage-billing](https://github.com/kenz1117/dsh-ui-usage-billing) · [npm](https://www.npmjs.com/package/@kenz1117/dsh-ui-usage-billing) | Usage billing dashboard for DeepSeek Harness: sidebar cost metrics plus a full dashboard modal, priced from a current multi-provider catalog with real usage aggregated from session logs. | 0.1.0-rc.8 (2026-08-20) |
| dsh-balance-plugin-francisx | 64 | [yxxbc/dsh-balance-plugin](https://github.com/yxxbc/dsh-balance-plugin) | DeepSeek 余额监控与用量统计（DSH 插件）：余额监控 · 官方充值入口 · Miyu 风格用量统计 · 三方插件管理 | 0.1.0-rc.8 (2026-08-20) |
| dsh-bottom-info-bar | 42 | [songoao25/dsh-bottom-info-bar](https://github.com/songoao25/dsh-bottom-info-bar/tree/HEAD/plugin) · [npm](https://www.npmjs.com/package/dsh-bottom-info-bar) | DeepSeek Harness 底部信息栏插件：替换对话输入框下方的原生统计栏，显示服务商/具体模型、真实余额、高峰(琥珀)/空闲(绿)价与倒计时、本对话·今日·近一月·全部花费。安装一次，每次打开 DSH 自动生效。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-connect-trae | 40 | [dingminhua/dsh-connect-trae](https://github.com/dingminhua/dsh-connect-trae) · [npm](https://www.npmjs.com/package/dsh-connect-trae) | Connect locally signed-in Trae models to DeepSeek Harness, plus a read-only usage/credits summary. | 0.1.1-rc.2 (2026-09-01) |
| dsh-usage-plugin | 37 | [feiyang-dev/dsh-usage-plugin](https://github.com/feiyang-dev/dsh-usage-plugin) · [npm](https://www.npmjs.com/package/@feiyang666/dsh-usage-plugin) | DeepSeek Harness usage & cost tracker plugin: per-call token/cache-hit stats, peak/off-peak billing, DeepSeek balance query, CSV/JSON/PNG export with custom destination, and persistent local storage. | 0.1.0-rc.8 (2026-08-20) |
| NixKits | 27 | [Kihara777/NixKits](https://github.com/Kihara777/NixKits/tree/HEAD/packages/dsh-api-balance) | API 用量余额插件 for the DeepSeek Harness — 在 webui 原有用量显示旁添加「用量 / 开销」标签切换，切换为「开销」后展示当前 API KEY 的用量信息、账户花费与余额（DeepSeek /user/balance） | 0.1.1-rc.2 (2026-09-04) |
| dsh-balance | 26 | [crazywoola/dsh-balance](https://github.com/crazywoola/dsh-balance) · [npm](https://www.npmjs.com/package/@pinkbanana/dsh-balance) | Shows API balances and available models in DeepSeek Harness Settings. | 0.1.0-rc.8 (2026-08-20) |
| dsh-usage-stats-make0209 | 26 | [Make0209/dsh-usage-stats](https://github.com/Make0209/dsh-usage-stats) | Usage stats for DeepSeek Harness: heatmap, token and cache-hit board, balance, and workspace aliases. | 0.1.0-rc.8 (2026-08-20) |
| dsh-opencode-zen | 24 | [xiaozhe7772222/dsh-opencode-zen](https://github.com/xiaozhe7772222/dsh-opencode-zen) | OpenCode Zen free-tier models for DeepSeek Harness: zero-config public-key provider with quota-aware pacing. | 0.1.0-rc.8 (2026-08-20) |
| dsh-whale-balance | 24 | [enchangcui340-cloud/dsh-whale-balance](https://github.com/enchangcui340-cloud/dsh-whale-balance) | DeepSeek Harness 原生插件：页面右下角的小鲸鱼余额提醒挂件 | 0.1.0-rc.8 (2026-08-20) |
| DeepSeek-Balance-Whale-Widget-Bowl | 21 | [Witherwithwinter/DeepSeek-Balance-Whale-Widget-Bowl](https://github.com/Witherwithwinter/DeepSeek-Balance-Whale-Widget-Bowl) | DSH Web 界面右下角的 DeepSeek 余额小鲸鱼挂件 · 铁盆鲸鱼娘版（含默认/顶碗/拿碗三套形象切换、钢管音效、今日已用、峰谷定价、随机台词与每轮消耗统计）。基于 MeteorNOX/DeepSeek-Balance-Whale-Widget 修改。 | 0.1.1-rc.2 (2026-09-01) |
| dsh-balance-meter | 19 | [Ghost011118/dsh-balance-meter](https://github.com/Ghost011118/dsh-balance-meter) | DeepSeek account balance and usage readout for the dsh web GUI: queries the official Get User Balance endpoint and shows current remaining balance and spend on the page. | 0.1.0-rc.8 (2026-08-20) |
| dsh-deepseek-usage-panel | 19 | [WeiyangPro/dsh-deepseek-usage-panel](https://github.com/WeiyangPro/dsh-deepseek-usage-panel) | Floating macOS-glass DeepSeek usage panel for the DSH web UI: live official balance + token usage (today, session, 24 h smooth trend, per model) without opening platform.deepseek.com/usage. · DSH | 0.1.1-rc.2 (2026-09-09) |

<sub>Showing the 25 most-starred of 1005. **[all 1005 →](lists/usage-cost.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Observability & evidence

Diagnostics, logs, audits, content-addressed proofs.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-research-report | 211 | [PerryLink/dsh-research-report](https://github.com/PerryLink/dsh-research-report) · [npm](https://www.npmjs.com/package/dsh-research-report) | Verifiable research-report engine for DeepSeek Harness: a content-addressed evidence ledger (claim ↔ snapshot binding, tamper-evident) plus versioned sealed reports where every claim carries a | 0.1.6-alpha.2 (2026-09-20) |
| dsh-status-rotator | 124 | [01Virex/dsh-status-rotator](https://github.com/01Virex/dsh-status-rotator) · [npm](https://www.npmjs.com/package/dsh-status-rotator) | Rotates the DSH chat turn-status label ("Deep diving...") through user-defined phrases every few seconds. | 0.1.0-rc.8 (2026-08-20) |
| PrismFlowAgent | 94 | [justlovemaki/PrismFlowAgent](https://github.com/justlovemaki/PrismFlowAgent/tree/HEAD/integrations/dsh) | Native PrismFlow plugins and one-stop dashboard for DeepSeek Harness | 0.1.1-rc.2 (2026-09-04) |
| dsh-whale-report | 30 | [SenmuuuuW/dsh-whale-report](https://github.com/SenmuuuuW/dsh-whale-report) · [npm](https://www.npmjs.com/package/dsh-whale-report) | 鲸鱼记事本 — 你的 Agent 年度/月度/周度/日报：从会话事件日志生成数据新闻官式报告，任意区间、定时生成。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-harbor | 24 | [ZSeven-W/dsh-harbor](https://github.com/ZSeven-W/dsh-harbor) · [npm](https://www.npmjs.com/package/@zseven-w/dsh-harbor) | A read-only mirror for installed DeepSeek Harness plugins: capability inventory with evidence, cross-plugin conflicts, and a diff of what changed since the last scan | 0.1.0-rc.8 (2026-08-25) |
| oh-my-knowledge | 23 | [lizhiyao/oh-my-knowledge](https://github.com/lizhiyao/oh-my-knowledge) · [npm](https://www.npmjs.com/package/oh-my-knowledge) | OMK — Observe. Measure. Know. Evidence-backed knowledge changes for AI applications. | 0.1.0-rc.8 (2026-08-25) |
| dsh-harmonyos-pc | 22 | [QinpanWan/dsh-harmonyos-pc](https://github.com/QinpanWan/dsh-harmonyos-pc/tree/HEAD/plugins/dsh-prompt-antivirus) | 全局提示注入 / 上下文病毒（context virus）防御插件：tools/pre-execute 扫工具参数、tools/post-execute 扫工具结果、agent/pre-step 扫进入模型前的消息并注入金丝雀守卫、llm/stream 出站消毒；支持 block / quarantine / monitor 三模式、磁盘化可演进病毒库（学习/导入/导出）与审计日志。纯 JS | 0.1.7-rc.2 (2026-09-29) |
| dshx-liyown | 15 | [liyown/dshx](https://github.com/liyown/dshx/tree/HEAD/packages/dshx) · [npm](https://www.npmjs.com/package/@becomeopc/dshx) | Build and debug DeepSeek Harness Host and Client plugins. | 0.1.1-rc.2 (2026-09-04) |
| dsh-deepcanary | 14 | [Oscar-Williams/dsh-deepcanary](https://github.com/Oscar-Williams/dsh-deepcanary) · [npm](https://www.npmjs.com/package/dsh-deepcanary) | Local attention supervision for DeepSeek Harness: evidence-first signals, quiet notifications, and an actionable inbox. | 0.1.1-rc.2 (2026-09-01) |
| dsh-security-audit | 14 | [omdsh-dev/dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) | Read-only local security audit: config, credential metadata, plugin provenance, sessions, and network exposure. | 0.1.0-rc.8 (2026-08-20) |
| OmniOps | 13 | [luxiu666/OmniOps](https://github.com/luxiu666/OmniOps/tree/HEAD/packages/bundle/mysql-diag) | MySQL 慢查询诊断 bundle：skill（mysql-slow-query-analysis）+ mcp-client（stdio 自动拉起 mysql-diag-mcp） | 0.1.1-rc.2 (2026-08-28) |
| dsh-a2a-ryubyte | 12 | [ryubyte/dsh-a2a](https://github.com/ryubyte/dsh-a2a) · [npm](https://www.npmjs.com/package/@ryubyte/dsh-a2a) | Agent2Agent (A2A) protocol v1.0 plugin for DeepSeek Harness (DSH): outbound client (remote AgentCard skills as ctx.tools), inbound server (A2A JSON-RPC + AgentCard endpoint), and a settings dashboard | 0.1.0-rc.8 (2026-08-20) |
| upstream-radar | 12 | [MicroMilo/upstream-radar](https://github.com/MicroMilo/upstream-radar) · [npm](https://www.npmjs.com/package/upstream-radar) | Always-on vulnerability and breaking-change impact monitoring for DeepSeek Harness plugins. | 0.1.0-rc.8 (2026-08-20) |
| dsh-anchored-monitor | 10 | [Aik358/dsh-anchored-monitor](https://github.com/Aik358/dsh-anchored-monitor) · [npm](https://www.npmjs.com/package/@a9i5k4/dsh-anchored-monitor) | DSH 实时思维链锚定监控插件: we/let's/let me 指纹波段检测(spec/mixed/react) + L1温和引导/L2强制重置/L3会话重启分级干预; 左侧栏入口 + 液体毛玻璃浮层 + 变阻器式思考强度条; 独立监控进程 + JSONL 实验日志 + 离线回放/参数校准; 变阻器条可选严肃/「滑动变祖器」梗双皮肤。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-comfyui-canvas | 10 | [wbin0001/dsh-comfyui-canvas](https://github.com/wbin0001/dsh-comfyui-canvas) · [npm](https://www.npmjs.com/package/dsh-comfyui-canvas) | Give DeepSeek Harness agents live control of your ComfyUI canvas (local or cloud): embed it as a split-screen tab, then read/edit/run workflows, debug errors, fetch output images, and batch-sweep | 0.1.1-rc.2 (2026-09-01) |
| dsh-mall | 10 | [hoyyang/dsh-mall](https://github.com/hoyyang/dsh-mall) · [npm](https://www.npmjs.com/package/dsh-mall) | 全网最强 DeepSeek Harness 插件商场：全量收录 GitHub #dsh-plugin 生态插件，五维实用评分雷达图，智能搜索（AI 理解需求）、智能安装/更新/卸载（AI 装前审查+装后诊断）、一键批量更新、编辑精选与个性化推荐，自带 Skills 工具与 dsh-mall 技能，中英多语言界面。 | 0.1.1-rc.2 (2026-08-26) |
| dsh-otel-tma1ai | 9 | [tma1-ai/dsh-otel](https://github.com/tma1-ai/dsh-otel) · [npm](https://www.npmjs.com/package/@tma1-ai/dsh-plugin-greptimedb) | OpenTelemetry traces, metrics, and logs for DeepSeek Harness, written straight into GreptimeDB. | 0.1.1-rc.2 (2026-08-26) |
| dsh-runtime-capabilities | 9 | [goatliamia/dsh-runtime](https://github.com/goatliamia/dsh-runtime/tree/HEAD/experiments/harness/plugin/dsh-runtime-experiment) | Isolated real-DSH runtime-exposure A/B experiment host bundle. No client, no SQLite, no default model-visible side effects; metrics go to EXP_RESULTS_DIR only. | 0.1.1-rc.2 (2026-09-01) |
| dsh-tool-turbo | 9 | [Electricitysheep/dsh-tool-turbo](https://github.com/Electricitysheep/dsh-tool-turbo) | DSH host plugin: cuts tool-call latency by auto-downgrading reasoning_effort for simple tool tasks, with per-tool timing telemetry. | 0.1.0-rc.8 (2026-08-20) |
| dsh-session-header | 8 | [homily707/dsh-session-header](https://github.com/homily707/dsh-session-header) | Inject an x-session-id HTTP header onto every DeepSeek Harness LLM provider request, carrying the harness session id of that exact call. | 0.1.0-rc.8 (2026-08-20) |
| dsh-session-health | 8 | [omdsh-dev/dsh-session-health](https://github.com/omdsh-dev/dsh-session-health) | Frame-level diagnostics over multi-frame zstd session logs: torn, corrupt, or empty session detection. | 0.1.0-rc.8 (2026-08-20) |
| dsh-thinking-levels | 8 | [drscrewdriver/dsh-thinking-levels](https://github.com/drscrewdriver/dsh-thinking-levels) · [npm](https://www.npmjs.com/package/dsh-thinking-levels) | DSH host plugin: thinking-level (reasoning_effort) control for dsh — auto-adjust per tool round, with optional manual lock and per-tool timing telemetry. | 0.1.0-rc.8 (2026-08-20) |
| dsh-acp-enhanced | 7 | [grunmin/dsh-acp-enhanced](https://github.com/grunmin/dsh-acp-enhanced) · [npm](https://www.npmjs.com/package/dsh-acp-enhanced) | Enhanced ACP server for DeepSeek Harness: block-level streaming, usage/stat telemetry (cache hit rate, token speed, input/output tokens, context length, turns, tool timing), model & reasoning-effort | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-ui-debug | 7 | [FeatherHunter/dsh-plugin-ui-debug](https://github.com/FeatherHunter/dsh-plugin-ui-debug) · [npm](https://www.npmjs.com/package/@feather_wch/dsh-plugin-ui-debug) | DSH 插件 UI 调试神器：让 AI 在真实 Chrome（Playwright）中自动看界面、点按钮、拖组件，一键安装零配置 | 0.1.0-rc.8 (2026-08-24) |
| context-assembler-DSH | 6 | [i1j/context-assembler-DSH](https://github.com/i1j/context-assembler-DSH) | Context Assembler DSH V0.99 — Context Assembler plugin for DeepSeek Harness (dsh): context compaction, cache-friendly topic-block management, water-pressure topic splitting, tool trace/rewrite | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 271. **[all 271 →](lists/observability-evidence.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Safety & approvals

Permission tiers, gates, redaction, protection.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| penguin-harness | 2442 | [Prism-Shadow/penguin-harness](https://github.com/Prism-Shadow/penguin-harness/tree/HEAD/plugins/sandbox-dsh) · [npm](https://www.npmjs.com/package/@penguinharness/sandbox-dsh) | DeepSeek Harness sandbox adaptor for PenguinHarness: the DSH local backend chain behind the harness's own sandbox interface. | 0.1.1-rc.2 (2026-09-18) |
| Aegis | 1317 | [GanyuanRan/Aegis](https://github.com/GanyuanRan/Aegis) | Make AI coding agents architecture-aware: baseline-first, evidence-verified, drift-checked, and safe across long tasks. | 0.1.0-rc.8 (2026-08-20) |
| SkillCorpus | 675 | [EverMind-AI/SkillCorpus](https://github.com/EverMind-AI/SkillCorpus/tree/HEAD/skillcorpus_plugin/engine-typescript) | Per-turn skill retrieval for the DeepSeek Harness: fuse local and remote sources, gate by relevance, inject what fits | 0.1.1-rc.2 (2026-09-18) |
| k8e | 499 | [xiaods/k8e](https://github.com/xiaods/k8e/tree/HEAD/plugins/deepseek-harness/packages/dsh-k8e-sandbox-bundle) · [npm](https://www.npmjs.com/package/@k8e-sandbox/dsh-k8e-sandbox-bundle) | Installable dsh bundle mounting the k8e-sandbox execution world (KIP-20). | 0.1.0-rc.8 (2026-08-20) |
| DeepSec | 453 | [Unclecheng-li/DeepSec](https://github.com/Unclecheng-li/DeepSec/tree/HEAD/dsh-plugins/deepsec-shield) | DeepSec Shield code-security audit tools for DeepSeek Harness (dsh): L1/L2/L3 scanning, agent-config audit, supply-chain checks and report generation. | 0.1.0-rc.8 (2026-08-25) |
| dsh-mobile-sayach | 367 | [saya-ch/dsh-mobile](https://github.com/saya-ch/dsh-mobile) · [npm](https://www.npmjs.com/package/dsh-mobile) | DeepSeek Harness 移动端适配与安全局域网访问插件，支持 Android App 和手机浏览器。 | 0.1.0-rc.8 (2026-08-20) |
| DeepSeekGUI | 254 | [See-Sol-Lab/DeepSeekGUI](https://github.com/See-Sol-Lab/DeepSeekGUI/tree/HEAD/apps/desktop/browser-plugin) | DeepSeekGUI browser capability: embedded in-window pane (CDP) or headed Edge, driven over playwright-core with an SSRF gate. | 0.1.1-rc.2 (2026-08-28) |
| dsh-alpha-desk | 181 | [JingHao-Leon/dsh-alpha-desk](https://github.com/JingHao-Leon/dsh-alpha-desk/tree/HEAD/plugins/risk-gate) | Alpha Desk compliance gate for deepseek-harness: denies live-trading and credential-access tool calls at tools/pre-execute. | 0.1.0-rc.8 (2026-08-20) |
| dsh-auto-mode | 164 | [NanmiCoder/dsh-auto-mode](https://github.com/NanmiCoder/dsh-auto-mode) · [npm](https://www.npmjs.com/package/@nanmicoder/dsh-auto-mode) | Fail-closed automatic permission policy for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| codex-guard | 138 | [Akimiya-z/codex-guard](https://github.com/Akimiya-z/codex-guard) · [npm](https://www.npmjs.com/package/codex-guard) | Quality gate for AI/Codex-generated pull requests: blocks TODO leftovers, leaked secrets, messy commits and failing CI before they hit main. | 0.1.1-rc.2 (2026-09-04) |
| dsh-permission-rules | 117 | [PerryLink/dsh-permission-rules](https://github.com/PerryLink/dsh-permission-rules) · [npm](https://www.npmjs.com/package/dsh-permission-rules) | Declarative Claude Code-style permission rules for DeepSeek Harness: ordered allow/deny/ask rules with tool-name, argument (glob/regex), and workspace-path matching on the tools/pre-execute waterfall, | 0.1.6-alpha.2 (2026-09-20) |
| dsh-network-settings | 105 | [kanneiren/dsh-network-settings](https://github.com/kanneiren/dsh-network-settings) · [npm](https://www.npmjs.com/package/dsh-network-settings) | DSH Network Settings: Windows / WSL network status, diagnostics and safe repair for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-secure-audit | 85 | [PensiveFei/dsh-secure-audit](https://github.com/PensiveFei/dsh-secure-audit) · [npm](https://www.npmjs.com/package/dsh-secure-audit) | Read-only security & compliance toolkit for DeepSeek Harness: prompt-injection detection (rule engine with a pluggable model classifier), Chinese-PII redaction, and a local configuration security | 0.1.0-rc.8 (2026-08-20) |
| dsh-approval-gate | 81 | [moon09300731/dsh-approval-gate](https://github.com/moon09300731/dsh-approval-gate) | DeepSeek Harness 自动审批门控：Flash 模型预判写入/命令是否不可回补，安全自动批准、危险转人工（fail-safe） | 0.1.0-rc.8 (2026-08-20) |
| dsh-remote-mrrisega | 68 | [mrRisega/dsh-remote](https://github.com/mrRisega/dsh-remote/tree/HEAD/packages/dsh-remote-web) · [npm](https://www.npmjs.com/package/dsh-remote-web) | 公网远程控制 DeepSeek Harness（dsh web）：安装即得专属加密地址，人在外面也能用手机访问电脑上的 dsh——无需同一局域网/WiFi、无需公网 IP 与内网穿透，全程加密；手机端 100% 还原电脑体验（对话/工具/审批/设置）。技术用户可选自建服务，流量走自己的服务器。Remote control DeepSeek Harness (dsh web) from | 0.1.7-rc.2 (2026-09-29) |
| sofagent | 52 | [KongFangXun/sofagent](https://github.com/KongFangXun/sofagent/tree/HEAD/engine/dsh-plugins/cordis-plugin-sofagent-audit) · [npm](https://www.npmjs.com/package/cordis-plugin-sofagent-audit) | 变更机器审阅——24 规则 + git diff 硬证据 + 节点级审计（seam: tools/result + tools/pre-execute + fs/write-intent）——桥接 @sofagent/audit runRules（sofagent 品牌插件 · 主色 #16B8F3） | 0.1.0-rc.8 (2026-08-25) |
| dsh-jev-interceptor | 23 | [AskTheWay/dsh-jev-interceptor](https://github.com/AskTheWay/dsh-jev-interceptor) · [npm](https://www.npmjs.com/package/dsh-jev-interceptor) | Millisecond System-1 judgement for every tool call in DeepSeek Harness: Jev-powered risk classification and evidence-gated auto-approval, fail-closed by construction. | 0.1.7-rc.2 (2026-09-29) |
| dsh-remote-mobile | 22 | [IceApriler/dsh-remote-mobile](https://github.com/IceApriler/dsh-remote-mobile) · [npm](https://www.npmjs.com/package/dsh-remote-mobile) | DeepSeek Harness 远程与移动端安全网关插件：零修改 DSH 底层代码安全开放局域网与 Tailscale 连接 \| DeepSeek Harness (DSH) Remote & Mobile Security Guard: safely opens Tailscale/LAN with zero core modifications, QR scan auth, RSA | 0.1.0-rc.8 (2026-08-25) |
| dsh-clawrouter | 21 | [BlockRunAI/dsh-clawrouter](https://github.com/BlockRunAI/dsh-clawrouter) · [npm](https://www.npmjs.com/package/dsh-clawrouter) | Strong-model review before risky tool calls, plus many models from one wallet. | 0.1.0-rc.8 (2026-08-20) |
| dsh-defend | 21 | [PerryLink/dsh-defend](https://github.com/PerryLink/dsh-defend) · [npm](https://www.npmjs.com/package/dsh-defend) | Prompt-injection, jailbreak, and secret-leak detection with allow/ask/block interception for DeepSeek Harness: an Aho-Corasick pattern engine and heuristics ported from the Prompt-Injection-Payloads | 0.1.6-alpha.2 (2026-09-20) |
| dsh-reminder | 19 | [Aisland-SJL/dsh-reminder](https://github.com/Aisland-SJL/dsh-reminder) | Bottom-right reminder cards for the DeepSeek Harness web GUI: an amber persistent card when an approval waits for you, a green self-dismissing card when a task completes | 0.1.0-rc.8 (2026-08-20) |
| dsh-approve-for-me | 18 | [timeance/dsh-approve-for-me](https://github.com/timeance/dsh-approve-for-me) · [npm](https://www.npmjs.com/package/dsh-approve-for-me) | Rule-gated automatic approval for DeepSeek Harness sandbox escalations with an optional LLM reviewer and native human fallback. | 0.1.0-rc.8 (2026-08-20) |
| dsh-sandbox-escalation-fix | 18 | [inmny/dsh-sandbox-escalation-fix](https://github.com/inmny/dsh-sandbox-escalation-fix) · [npm](https://www.npmjs.com/package/dsh-plugin-sandbox-escalation-fix) | Normalize redundant same-mode sandbox escalation arguments in DeepSeek Harness tools | 0.1.0-rc.8 (2026-08-20) |
| dsh-git-worktree-wloops | 17 | [wloops/dsh-git-worktree](https://github.com/wloops/dsh-git-worktree) · [npm](https://www.npmjs.com/package/dsh-git-worktree) | Domi-grade git worktree isolation and delivery for DeepSeek Harness: permanent worktrees, ready-for-review / apply / discard / finish lifecycle, conflict handling, and safe cleanup. | 0.1.0-rc.8 (2026-08-20) |
| dsh-ponytail-mengyuil | 16 | [MengYuil/dsh-ponytail](https://github.com/MengYuil/dsh-ponytail) · [npm](https://www.npmjs.com/package/@mengyuly/dsh-ponytail) | Lazy senior dev mode for DeepSeek Harness: always-on minimal-code ruleset, intensity switching, and short review/audit/debt/gain/help skills | 0.1.0-rc.8 (2026-08-25) |

<sub>Showing the 25 most-starred of 561. **[all 561 →](lists/safety-approvals.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Plugin managers & stores

In-UI stores, installers, skill managers.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-market | 5467 | [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) · [npm](https://www.npmjs.com/package/dshmarket) | Visual plugin market inside DeepSeek Harness — browse, search, and one-click install community plugins. · DSH 可视化插件市场：逛一逛，点一下，装好。 | 0.1.0-rc.8 (2026-08-20) |
| agentrq | 1137 | [agentrq/agentrq](https://github.com/agentrq/agentrq/tree/HEAD/plugins/deepseek-harness) · [npm](https://www.npmjs.com/package/@agentrq/dsh-plugin-agentrq) | AgentRQ task manager for DeepSeek Harness: create, manage, and auto-pull AgentRQ tasks without leaving the harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-shop | 1002 | [LivXue/dsh-plugin-shop](https://github.com/LivXue/dsh-plugin-shop/tree/HEAD/packages/dsh-plugin-shop) · [npm](https://www.npmjs.com/package/dsh-plugin-shop) | The DeepSeek Harness plugin store: browse, install, enable, and update dsh plugins from a git-auditable catalog. | 0.1.1-rc.2 (2026-08-26) |
| dsh-plugin-store-livxue | 1002 | [LivXue/dsh-plugin-shop](https://github.com/LivXue/dsh-plugin-shop/tree/HEAD/packages/dsh-plugin-store) | The DeepSeek Harness plugin store: browse, install, enable, and update dsh plugins from a git-auditable catalog. | 0.1.1-rc.2 (2026-08-26) |
| dsh-hub-cli | 458 | [pax-beehive/dsh-hub-cli](https://github.com/pax-beehive/dsh-hub-cli/tree/HEAD/packages/dsh-plugin) · [npm](https://www.npmjs.com/package/@dsh-plugin-hub/dsh-plugin) | DSH tools for planning and applying reproducible Plugin Hub Profiles through the local dsh-hub CLI | 0.1.1-rc.2 (2026-09-04) |
| awesome-deepseek-harness | 360 | [Dominic789654/awesome-deepseek-harness](https://github.com/Dominic789654/awesome-deepseek-harness/tree/HEAD/plugins/dsh-code-review) | Code review assistant for DeepSeek Harness: code_review_context collects deterministic git diff context; a bundled skill drives the review checklist. | 0.1.0-rc.8 (2026-08-20) |
| awesome-deepseek-harness-plugins | 262 | [imsai-sh/awesome-deepseek-harness-plugins](https://github.com/imsai-sh/awesome-deepseek-harness-plugins/tree/HEAD/packages/dsh-1024store) | The 1024 Store plugin market inside DeepSeek Harness. | unverified |
| dsh-trading-zhu10900 | 224 | [zhu1090093659/dsh-trading](https://github.com/zhu1090093659/dsh-trading) | Your next trading terminal can also be DSH. Full-market (Crypto/US/CN/HK) modular AI trading terminal and plugin ecosystem on DeepSeek Harness. | 0.1.1-rc.2 (2026-09-04) |
| dsh-echocat-skill-panel | 196 | [VDERR/dsh-echocat-skill-panel](https://github.com/VDERR/dsh-echocat-skill-panel) · [npm](https://www.npmjs.com/package/dsh-echocat-skill-panel) | Per-turn skill audit for DeepSeek Harness, plus an in-app skill manager: a native notification and a resident panel showing which skills each turn invoked, an install sheet that adds, replaces and | 0.1.7-rc.2 (2026-09-29) |
| dsh-plugin-marketplace | 169 | [bradeGithub/DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) | Web GUI plugin marketplace: browse, install, and update GitHub topic dsh-plugin packages from inside DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-find-plugin | 167 | [awesome-dsh-plugin/dsh-find-plugin](https://github.com/awesome-dsh-plugin/dsh-find-plugin) · [npm](https://www.npmjs.com/package/dsh-find-plugin) | Find DeepSeek Harness plugins from inside the agent via live GitHub dsh-plugin topic search, ranked by stars. | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-hub-dshplugi | 165 | [dshplugin/dsh-plugin-hub](https://github.com/dshplugin/dsh-plugin-hub) · [npm](https://www.npmjs.com/package/dsh-plugin) | A community plugin marketplace for DeepSeek Harness, built to the official plugin spec — browse, search and install 4000+ human-curated community plugins without leaving the app. · DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-market-2binglin | 131 | [2BingLing/dsh-market](https://github.com/2BingLing/dsh-market/tree/HEAD/plugin/ui) · [npm](https://www.npmjs.com/package/@dsh-market/plugin) | DSH Market 插件端：cordis 侧边栏插件（浏览/搜索/猜你喜欢/一键安装/已装管理），核心逻辑来自 @dsh-market/core | 0.1.0-rc.8 (2026-08-20) |
| ru-marketplace-mcp | 129 | [Vladimir-Human/ru-marketplace-mcp](https://github.com/Vladimir-Human/ru-marketplace-mcp/tree/HEAD/dsh) | Девять российских маркетплейсов и китайский Taobao как MCP-серверы: Wildberries, Ozon, Яндекс Маркет, Детский мир, Авито, Мегамаркет, Lamoda, DNS, Ситилинк. Плюс сравнение цен по всем сразу. Только чт | 0.1.0-rc.8 (2026-08-20) |
| dsh-webui-market-plugin | 104 | [Sanqi-normal/dsh-webui-market-plugin](https://github.com/Sanqi-normal/dsh-webui-market-plugin) · [npm](https://www.npmjs.com/package/@sanqi-normal/dsh-webui-market-plugin) | In-harness community plugin market for the dsh web GUI: browse, install, and uninstall into a profile. | 0.1.0-rc.8 (2026-08-20) |
| dsh-archive-manager-michenga | 97 | [MichengAI/dsh-archive-manager](https://github.com/MichengAI/dsh-archive-manager) · [npm](https://www.npmjs.com/package/@michengai/dsh-archive-manager) | NPM-installable DSH Web plugin for managing archived sessions. | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-hub | 93 | [Noob-stupid/dsh-plugin-gating-hub](https://github.com/Noob-stupid/dsh-plugin-gating-hub) | DSH plugin management panel & marketplace: one-click enable/disable, multi-source market (GitHub/Gitee/custom), static-index market (500+ plugins / 300 skills), skills, suites, and one-click | 0.1.1-rc.2 (2026-09-18) |
| dsh-capability-menu | 87 | [PKUfudawei/dsh-capability-menu](https://github.com/PKUfudawei/dsh-capability-menu) · [npm](https://www.npmjs.com/package/@daweifu/capability-menu) | Unified capability management for the DeepSeek Harness: catalog (registry) + meta_search/meta_invoke + Exposed/Progressive/Blocked projection policy + 能力管理 surface, in one installable bundle. | 0.1.0-rc.8 (2026-08-24) |
| zat-dsh-engine | 78 | [mishibeikejie/zat-dsh-engine](https://github.com/mishibeikejie/zat-dsh-engine) | Visual plugin marketplace for DeepSeek Harness: browse, search, install, update, and uninstall community plugins. | 0.1.0-rc.8 (2026-08-20) |
| dsh-novel-writer-akira399 | 76 | [akira399/dsh-novel-writer](https://github.com/akira399/dsh-novel-writer) | 大肥鱼的小说工坊 — DSH 网络小说创作插件：九阶段门禁式创作流程 + 世界书(lorebook)设定注入 + 本地书籍导入 + AI 一键润色 + 去AI味 + 黄金三章诊断 + 百万字一致性 + 市场调研与模板复制，面向开源用户的开箱即用方案。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-fund-research | 68 | [PerryLink/dsh-fund-research](https://github.com/PerryLink/dsh-fund-research) · [npm](https://www.npmjs.com/package/dsh-fund-research) | Research plugin for Chinese public mutual funds on DeepSeek Harness: collects fund data from public sources (Tiantian Fund / Eastmoney), computes deterministic metrics (manager profile, holdings | 0.1.6-alpha.2 (2026-09-20) |
| dsh-plugins-store | 68 | [ZASENJC/dsh-plugins-store](https://github.com/ZASENJC/dsh-plugins-store) · [npm](https://www.npmjs.com/package/dsh-plugins-store) | 自动分类、收录和验证 GitHub dsh-plugin Topic 项目的静态 DSH 插件市场。 A static DSH plugin marketplace that automatically categorizes, curates, and verifies GitHub dsh-plugin Topic projects. | 0.1.0-rc.8 (2026-08-20) |
| dsh-web-plugin-manager | 68 | [LX2000WASD/dsh-web-plugin-manager](https://github.com/LX2000WASD/dsh-web-plugin-manager) · [npm](https://www.npmjs.com/package/dsh-web-plugin-manager) | Manage DeepSeek Harness (DSH) plugins from the Web UI: list, enable/disable, install/remove, environments, and a GitHub-awesome-driven marketplace. | 0.1.0-rc.8 (2026-08-20) |
| plugin-registry | 58 | [vlln/plugin-registry](https://github.com/vlln/plugin-registry/tree/HEAD/packages/plugin/console) · [npm](https://www.npmjs.com/package/@vlln/plugin-console) | 薄控制台：浏览器 UI 管理 web profile 插件安装态（bundle 层栈 + cordis.patch.yml insert 行/disabled），0 patch | 0.1.0-rc.8 (2026-08-20) |
| BioDSH | 52 | [sagirimo/BioDSH](https://github.com/sagirimo/BioDSH/tree/HEAD/desktop) | BioDSH Desktop — DeepSeek Harness + 生信技能商店 | 0.1.1-rc.2 (2026-09-02) |

<sub>Showing the 25 most-starred of 545. **[all 545 →](lists/plugin-managers-stores.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Developer tools

Building, testing, and publishing plugins.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-web-zhu10900 | 8341 | [zhu1090093659/dsh-web](https://github.com/zhu1090093659/dsh-web/tree/HEAD/market/shell) | Pure-static, browser-only build of DeepSeek Harness (dsh web) — no server, deployable to GitHub Pages | 0.1.1-rc.2 (2026-09-04) |
| dsh-ios | 312 | [ZSeven-W/dsh-ios](https://github.com/ZSeven-W/dsh-ios) · [npm](https://www.npmjs.com/package/@zseven-w/dsh-ios) | DeepSeek Harness plugin for the iOS Simulator — build, run, and interact with a live simulator stream inside a conversation. Tested with DSH 0.1.0-rc.6. | 0.1.0-rc.8 (2026-08-21) |
| dsh-android | 168 | [ZSeven-W/dsh-android](https://github.com/ZSeven-W/dsh-android) · [npm](https://www.npmjs.com/package/@zseven-w/dsh-android) | DeepSeek Harness plugin for Android — build, run, and interact with a live emulator or USB device stream inside a conversation, driven entirely through adb. Tested with DSH 0.1.1-rc.1. | 0.1.0-rc.8 (2026-08-24) |
| fylar-office-editor | 144 | [FylarOpen/dsh-fylar-office-editor](https://github.com/FylarOpen/dsh-fylar-office-editor) · [npm](https://www.npmjs.com/package/@fylar/dsh-fylar-office-editor) | Fylar Office Editor integration for the DeepSeek Harness Web profile, powered by Fylar Office SDK | 0.1.1-rc.2 (2026-09-09) |
| dsh-plugin-template | 110 | [bugmaker2/dsh-plugin-template](https://github.com/bugmaker2/dsh-plugin-template) | Minimal Hello World plugin template for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| superpowers-dsh | 101 | [LayneChai/superpowers-dsh](https://github.com/LayneChai/superpowers-dsh) · [npm](https://www.npmjs.com/package/superpowers-dsh) | TDD, debugging, planning, and collaboration skills for DeepSeek Harness, adapted from obra/superpowers. | 0.1.0-rc.8 (2026-08-20) |
| gongwen-skill | 71 | [linhut/gongwen-skill](https://github.com/linhut/gongwen-skill) · [npm](https://www.npmjs.com/package/gongwen-skill) | 中文公文全流程处理工具 - GB/T 9704 格式检查/修复/内容优化/模板生成/版式注入 | 0.1.0-rc.8 (2026-08-20) |
| DSHBox-wskbuild | 66 | [WSK-build/DSHBox](https://github.com/WSK-build/DSHBox/tree/HEAD/app/src/main/assets/plugins/dsh-mobile-adapt/plugin) | Run DeepSeek Harness locally on Android phones and tablets. One APK with Debian, Node.js, DSH, and WebView — no root or Termux required. 在安卓手机和平板上本机运行完整 DSH。 | 0.1.1-rc.2 (2026-09-09) |
| dsh-doublecheck | 54 | [PerryLink/dsh-doublecheck](https://github.com/PerryLink/dsh-doublecheck) · [npm](https://www.npmjs.com/package/dsh-doublecheck) | Double-check before you ship: grill the requirements, test the implementation, prove the delivery. | 0.1.6-alpha.2 (2026-09-20) |
| dsh-tianshu-build | 47 | [huiliyi37/oh-my-tianshu](https://github.com/huiliyi37/oh-my-tianshu/tree/HEAD/packages/bundle/base) · [npm](https://www.npmjs.com/package/@huiliyi37/dsh-base) | The shared dsh core as a profile bundle: every profile's first patch layer, inserting the base plugin rows over the empty profile root | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-kit-hyzyn | 45 | [hyzyn/dsh-plugin-kit](https://github.com/hyzyn/dsh-plugin-kit) · [npm](https://www.npmjs.com/package/@hyzyn/dsh-plugin-kit) | 通用 DSH 插件库（pnpm monorepo）：模板插件、插件开发工具包、一键聚合安装包。根包同时是全家桶 bundle（dsh.bundle.patch），DSH 与插件市场可直接识别安装。 | 0.1.0-rc.8 (2026-08-20) |
| qa-skills | 35 | [fishzjp/qa-skills](https://github.com/fishzjp/qa-skills) · [npm](https://www.npmjs.com/package/dsh-qa-skills) | DeepSeek Harness (dsh) plugin: 10 testing skills (requirement analysis, test strategy, case writing/review, E2E/API automation, exploratory, regression, bug analysis) + shared core knowledge base — a | 0.1.0-rc.8 (2026-08-25) |
| webdsh | 32 | [futrime/webdsh](https://github.com/futrime/webdsh) | Pure-static, browser-only build of DeepSeek Harness (dsh web) — no server, deployable to GitHub Pages | 0.1.1-rc.2 (2026-09-04) |
| dsh-plugin-check | 25 | [omdsh-dev/dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) | DSH plugin health checker: scan plugin repos for manifest protocol / patch format / build pitfalls / hub registration, zero-dependency read-only diagnostics | 0.1.0-rc.8 (2026-08-20) |
| dsh-qa | 25 | [naodeng/dsh-qa](https://github.com/naodeng/dsh-qa) · [npm](https://www.npmjs.com/package/dsh-qa) | dsh-qa QA Workbench: a local software testing workbench plugin for DeepSeek Harness. Project/iteration dual-mode, full-flow requirements / test cases / defects / milestones / reports, native QA | 0.1.0-rc.8 (2026-08-20) |
| dsh-user-experience | 21 | [DietCokewithSugar/dsh-user-experience](https://github.com/DietCokewithSugar/dsh-user-experience) · [npm](https://www.npmjs.com/package/dsh-user-experience) | DeepSeek Harness UX walkthrough plugin: persona-driven source-code UX review for React (TypeScript/JavaScript) and Vue 3 projects, with change-triggered automatic walkthroughs | 0.1.0-rc.8 (2026-08-20) |
| dsh-prompt | 20 | [FeatherHunter/dsh-prompt](https://github.com/FeatherHunter/dsh-prompt) · [npm](https://www.npmjs.com/package/dsh-prompt) | DSH prompt 工具箱：预制 + 自定义 prompt 模板，点击即插入当前对话输入框（v1 常规模式 + v1.1 智能模式悬浮卡） \| Prompt toolbox for DeepSeek Harness: preset + custom prompt templates, one-click insert into the conversation. | 0.1.0-rc.8 (2026-08-20) |
| dsh-minecraft-ui | 19 | [TFboy1/dsh-minecraft-ui](https://github.com/TFboy1/dsh-minecraft-ui) · [npm](https://www.npmjs.com/package/dsh-minecraft-ui) | Playable Minecraft-inspired voxel client that replaces the DSH Web shell on an isolated test profile | 0.1.0-rc.8 (2026-08-21) |
| dsh-ios-everettj | 14 | [everettjf/dsh-ios](https://github.com/everettjf/dsh-ios/tree/HEAD/rootfs/staging) | Pins the @deepseek-ai/dsh tree that build-rootfs.sh installs into the guest (linux/arm64/musl). | 0.1.0-rc.8 (2026-08-21) |
| dsh-kanban-alpacach | 14 | [alpacachen/dsh-kanban](https://github.com/alpacachen/dsh-kanban) · [npm](https://www.npmjs.com/package/@alpacachen/dsh-kanban) | A kanban board plugin for DeepSeek Harness: a 'Board' tab in conversations plus 14 kanban_* AI tools, per-workspace isolation and disk persistence. Built with React, TypeScript, dnd-kit, shadcn/ui | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-healthcheck | 14 | [chenw2759-wq/dsh-plugin-healthcheck](https://github.com/chenw2759-wq/dsh-plugin-healthcheck) | DSH 插件健康检查：设置面板内的「插件检测」向导 — L0 静态检查（files 白名单/依赖声明/高危副本/依赖可解析/Windows 命令/lockfile 一致性）+ L1 配置组合检查 + L2 隔离试跑（子进程 boot 全树），发现即自动回滚（写 home patch 前弹确认），复杂问题打包预制提示词交给 agent 修复。铁律：只修改插件代码与配置层，严禁修改 harness. | 0.1.0-rc.8 (2026-08-20) |
| tencentcloud-agentobs-sdk-dsh | 14 | [TencentCloud/tencentcloud-agentobs-sdk-dsh](https://github.com/TencentCloud/tencentcloud-agentobs-sdk-dsh) · [npm](https://www.npmjs.com/package/tencentcloud-agentobs-sdk-dsh) | Tencent Cloud Service CLS observability plugin for DeepSeek Harness — direct upload to Tencent Cloud CLS | 0.1.0-rc.8 (2026-08-20) |
| dsh-eval-harness | 13 | [BiBoyang/dsh-eval-harness](https://github.com/BiBoyang/dsh-eval-harness) · [npm](https://www.npmjs.com/package/dsh-eval-harness) | DSH 插件回归评测门禁：yaml 用例 + headless 驱动 + trace 断言 + baseline 门禁（eval_run / eval_gate） | 0.1.0-rc.8 (2026-08-20) |
| plugin-template | 13 | [omdsh-dev/plugin-template](https://github.com/omdsh-dev/plugin-template) | Standalone Cordis plugin template for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-test-drive | 12 | [PerryLink/dsh-test-drive](https://github.com/PerryLink/dsh-test-drive) · [npm](https://www.npmjs.com/package/dsh-test-drive) | Isolated install-and-smoke test drives for DeepSeek Harness plugins: installs a repo or npm package into a throwaway DSH_HOME profile, verifies the bundle patch layer and boot logs, records a | 0.1.6-alpha.2 (2026-09-20) |

<sub>Showing the 25 most-starred of 233. **[all 233 →](lists/developer-tools.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Knowledge & research

Research workbenches, RAG, learning modes.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| WeKnora | 31944 | [Tencent/WeKnora](https://github.com/Tencent/WeKnora/tree/HEAD/packages/dsh-weknora) · [npm](https://www.npmjs.com/package/@wxg-prc-cpg/dsh-weknora) | WeKnora knowledge retrieval tools for DeepSeek Harness (dsh): semantic search, document reading and RAG/agent answers over your own knowledge bases. | 0.1.0-rc.8 (2026-08-24) |
| dsh-Mimir-Academic-research | 542 | [1692775560/dsh-Mimir-Academic-research](https://github.com/1692775560/dsh-Mimir-Academic-research) | Mimir — 一站式科研工作台插件：LaTeX 论文边写边编译、arXiv 文献管理、实验追踪、指标图表、GPU 服务器 SSH 任务编排，管理科研全周期。An open-source research workbench plugin for the whole research cycle. | 0.1.0-rc.8 (2026-08-25) |
| de-anthropocentric-research-engine | 504 | [yogsoth-ai/de-anthropocentric-research-engine](https://github.com/yogsoth-ai/de-anthropocentric-research-engine/tree/HEAD/dsh-plugin) · [npm](https://www.npmjs.com/package/@yogsoth-ai/dare-dsh) | DeepSeek Harness plugin for the De-Anthropocentric Research Engine: 920 research skills, with an opt-in MCP server fleet | 0.1.1-rc.2 (2026-09-04) |
| movo | 219 | [himovo/movo](https://github.com/himovo/movo/tree/HEAD/services/chat-api/dsh/runtime-host) | Turn DeepSeek Harness into a self-hosted enterprise Agent platform with knowledge, deep research, content generation, vibe coding, browser automation, governance, and admin controls. | 0.1.1-rc.2 (2026-09-09) |
| dsh-industry-research | 205 | [PerryLink/dsh-industry-research](https://github.com/PerryLink/dsh-industry-research) · [npm](https://www.npmjs.com/package/dsh-industry-research) | Industry and company research domain pack for DeepSeek Harness: methodology skills, an industry-chain structure model (industry_map), public-source policy/news tracking over ctx.web (industry_track) | 0.1.6-alpha.2 (2026-09-20) |
| pawwork | 202 | [Astro-Han/pawwork](https://github.com/Astro-Han/pawwork/tree/HEAD/packages/desktop-electron) | Desktop AI workstation for knowledge workers | 0.1.1-rc.2 (2026-09-04) |
| dsh-reverse-skill | 196 | [dhicoc/dsh-reverse-skill](https://github.com/dhicoc/dsh-reverse-skill) · [npm](https://www.npmjs.com/package/@dhicoc/dsh-reverse-skill) | Reverse-engineering skill pack as a Cordis plugin: 85 SKILL.md units for authorized security research. | 0.1.0-rc.8 (2026-08-20) |
| hanai-investment-dsh | 114 | [hancao97/hanai-investment-dsh](https://github.com/hancao97/hanai-investment-dsh) | Hanai Investment — a local-first A-share research workbench powered by DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| OpenQuantum | 74 | [xi-zhao/OpenQuantum](https://github.com/xi-zhao/OpenQuantum) | A DeepSeek Harness distribution for open quantum research | 0.1.0-rc.8 (2026-08-24) |
| dsh-web-search-pro | 73 | [anweat/dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) · [npm](https://www.npmjs.com/package/dsh-web-search-pro) | Enhanced, persistent web search plugin for DeepSeek Harness — multi-engine routing (DeepSeek/Exa/DDG/Bing/Jina + GitHub/B站/YouTube/V2EX/小红书/Twitter/Reddit/RSS), SQLite+LRU cache, userscript-style | 0.1.0-rc.8 (2026-08-20) |
| SpecFusion | 69 | [wxkingstar/SpecFusion](https://github.com/wxkingstar/SpecFusion/tree/HEAD/dsh-plugin) · [npm](https://www.npmjs.com/package/@wxkingstar/specfusion-dsh) | SpecFusion skill + native API-docs search tools for DeepSeek Harness: 65,000+ API docs across 20 Chinese open platforms | 0.1.0-rc.8 (2026-08-20) |
| hn-cli | 51 | [heartleo/hn-cli](https://github.com/heartleo/hn-cli/tree/HEAD/plugins/hacker-news) · [npm](https://www.npmjs.com/package/dsh-hacker-news) | Hacker News tools for DeepSeek Harness: front-page feeds, item comment trees, Algolia search, user profiles. | 0.1.0-rc.8 (2026-08-20) |
| dsh-sticky-note | 48 | [Meredith2328/dsh-sticky-note](https://github.com/Meredith2328/dsh-sticky-note) | 左下角便签：随手记点子/感想/TODO，实时保存到归档目录，清单+悬浮归档 | 0.1.0-rc.8 (2026-08-20) |
| dsh-scholar | 47 | [lzszq/dsh-scholar](https://github.com/lzszq/dsh-scholar) | DSH Research OS — a fully automated scientific research plugin for DSH (DeepSeek Harness): survey, idea, experiment contract, durable runner jobs, claim-evidence ledger, manuscript and release bundle. | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-guide | 46 | [PerryLink/dsh-plugin-guide](https://github.com/PerryLink/dsh-plugin-guide) · [npm](https://www.npmjs.com/package/dsh-plugin-guide) | The dsh-plugin-guide knowledge base as an installable DeepSeek Harness plugin: official docs, Cordis primer, community deep-dives, and battle-tested pitfalls registered as an on-demand agent skill. | 0.1.6-alpha.2 (2026-09-20) |
| dsh-science | 42 | [biociao/dsh-science](https://github.com/biociao/dsh-science) · [npm](https://www.npmjs.com/package/dsh-science) | Claude Science-style research workbench for DeepSeek Harness: ReAct research-loop engine (research_* tools), versioned artifacts with provenance (artifact_* tools), and 10 science skills for. | 0.1.0-rc.8 (2026-08-20) |
| dsh-directorx | 34 | [LaplaceYoung/dsh-directorx](https://github.com/LaplaceYoung/dsh-directorx) | DirectorX：给 DeepSeek Harness 装上 AI 视频导演能力——视频生成、智能剪辑、成片质检、无限画布分镜与 350+ 导演知识库。AI video director plugin for DeepSeek Harness: text-to-video, smart editing, QC, storyboard canvas. | 0.1.0-rc.8 (2026-08-20) |
| prts-terrarchive | 34 | [HTian-qwq/prts-terrarchive](https://github.com/HTian-qwq/prts-terrarchive) · [npm](https://www.npmjs.com/package/prts-terrarchive) | PRTS.chat local corpus search/read tools as a deepseek-harness plugin | 0.1.1-rc.2 (2026-09-01) |
| deep-read-summarize | 30 | [PensiveFei/deep-read-summarize](https://github.com/PensiveFei/deep-read-summarize) · [npm](https://www.npmjs.com/package/deep-read-summarize) | Deep reading & summarization for DSH: books/papers/videos/web → structured Obsidian notes. Plugin parsers, MapReduce deep-read, JSON Schema output, idempotent cache. | 0.1.0-rc.8 (2026-08-21) |
| dsh-ai4scholar | 29 | [literaf/dsh-ai4scholar](https://github.com/literaf/dsh-ai4scholar) · [npm](https://www.npmjs.com/package/dsh-ai4scholar) | AI4Scholar for DeepSeek Harness (dsh): 38 native academic tools — Semantic Scholar, PubMed, Google Scholar, arXiv, bioRxiv/medRxiv, DOI resolution, PDF full text, auto-cite, scientific figures | 0.1.0-rc.8 (2026-08-20) |
| dsh-zotero-vncntvx | 28 | [Vncntvx/dsh-zotero](https://github.com/Vncntvx/dsh-zotero) · [npm](https://www.npmjs.com/package/dsh-zotero) | Let agents search, read, and cite your local Zotero library: find papers, browse notes and annotations, pull evidence by question, open the source document, generate citations. | 0.1.0-rc.8 (2026-08-20) |
| dsh-deep-research | 27 | [omdsh-dev/dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research) | Deep Research orchestrator extension for DeepSeek Harness: an adaptive cybernetics/information-theory deep_research tool on the official workflow engine, reusing built-in web_search/web_fetch. | 0.1.0-rc.8 (2026-08-20) |
| dsh-robotic-harness | 22 | [dingkaihu63/dsh-robotic-harness](https://github.com/dingkaihu63/dsh-robotic-harness) | Robotic Harness — an embodied-intelligence research plugin suite for DeepSeek Harness (demo) | 0.1.1-rc.2 (2026-09-04) |
| project-blueprint | 22 | [shuguang1994/project-blueprint](https://github.com/shuguang1994/project-blueprint) · [npm](https://www.npmjs.com/package/project-blueprint) | DSH (DeepSeek Harness) plugin packaging of the Project Blueprint skill — one-command AI coding conventions (AGENTS.md, docs skeleton, CI/CD, git rules, testing policy) with an autonomous discovery | 0.1.0-rc.8 (2026-08-20) |
| dsh-design-skills | 21 | [zhaiyateng/dsh-design-skills](https://github.com/zhaiyateng/dsh-design-skills) | Design aesthetics skill pack for DeepSeek Harness (DSH): 6 styles — dark SaaS, minimal white, neumorphism, brutalism, glassmorphism, Japanese minimal — with runnable landing-page demos. Keeps vibe-... | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 570. **[all 570 →](lists/knowledge-research.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Fun

Games, pets, memes, ambience. The reef has coral.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-pet | 1018 | [PC2005-cloud/dsh-pet](https://github.com/PC2005-cloud/dsh-pet/tree/HEAD/dsh-pet) · [npm](https://www.npmjs.com/package/dsh-pet) | A floating desktop pet for the DeepSeek Harness Web UI: idle breathing, occasional direction turns, random actions, and screen wandering. | 0.1.0-rc.8 (2026-08-20) |
| dsh-ads | 647 | [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) · [npm](https://www.npmjs.com/package/@nagi-ovo/dsh-ads) | Satirical 2005-portal fake-ad plugin for the web UI (sidebar ads, in-conversation feed, corner popups); ad slots also surface real dsh-plugin topic repos | 0.1.0-rc.8 (2026-08-20) |
| dsh-tavern-flizzywi | 647 | [flizzywine/dsh-tavern](https://github.com/flizzywine/dsh-tavern) · [npm](https://www.npmjs.com/package/dsh-profile-tavern) | 基于 DeepSeek Harness（DSH）的 SillyTavern 类文字游戏 Agent，支持候选项生成、对话式人物卡编辑、剧本模式与素材抽取。 | 0.1.0-rc.8 (2026-08-20) |
| DSH-Transparent-UI-Plugin | 413 | [WYH66666666/DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin) | Aqua: a highly customizable glassmorphism theme for the Web surface — adjustable blur, frost, fluid or wallpaper backdrop, unified corners, and motion | 0.1.0-rc.8 (2026-08-20) |
| whale-girl ⭐ | 344 | [vlln/whale-girl](https://github.com/vlln/whale-girl) · [npm](https://www.npmjs.com/package/whale-girl) | Desktop-pet companion for the web GUI (QQ-pet style): draggable, feedable, levels up with session activity; migrated from the removed .dsh-plugin format to dsh.bundle | 0.1.0-rc.8 (2026-08-20) |
| gal-view | 194 | [Ayase34/gal-view](https://github.com/Ayase34/gal-view) | DSH Web GUI 会话页的 GAL 视窗：Galgame 风格对话视图 + 场景元素可视化编辑器 | 0.1.0-rc.8 (2026-08-20) |
| dsh-meme-yyh001 | 137 | [yyh-001/dsh-meme](https://github.com/yyh-001/dsh-meme) · [npm](https://www.npmjs.com/package/dsh-meme) | DeepSeek Harness 表情包插件:内置默认图库(官方-001,92 张),按情绪随机抽图,send_meme 发图(Web/QQ),设置页管理面板。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-personal-center | 118 | [PolinniZhong/dsh-personal-center](https://github.com/PolinniZhong/dsh-personal-center) · [npm](https://www.npmjs.com/package/dsh-personal-center) | DSH 个人中心:设置 →「个人」分区(个人资料统计 UI + 个性化自定义指令 + 成本估算 + 桌面宠物) | 0.1.0-rc.8 (2026-08-20) |
| dsh-whale-musume | 111 | [Sutera-Diffusus/dsh-whale-musume](https://github.com/Sutera-Diffusus/dsh-whale-musume) | A whale-girl Kanban Musume mascot for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-token-pet-jimmy012 | 56 | [Jimmy0123-ux/dsh-token-pet](https://github.com/Jimmy0123-ux/dsh-token-pet) · [npm](https://www.npmjs.com/package/dsh-token-pet) | DeepSeek Harness Desktop 用量小宠物：用逐帧角色动作反馈运行状态，并展示上下文、终身 Token 用量与历史趋势。 | 0.1.1-rc.2 (2026-09-02) |
| dsh-jingling | 54 | [Yi-111-a/dsh-jingling](https://github.com/Yi-111-a/dsh-jingling) | Jingling companion for DeepSeek Harness: reviewable local memory, a restricted preset, and an optional desktop-pet sidecar. | 0.1.0-rc.8 (2026-08-20) |
| dsh-pet-remielle | 50 | [Gin-7/dsh-pet-remielle](https://github.com/Gin-7/dsh-pet-remielle) · [npm](https://www.npmjs.com/package/dsh-pet-remielle) | Hot-pluggable Remielle (蕾米埃尔) sticker pet for the dsh web GUI: a transparent floating companion from Zenless Zone Zero that switches animated GIF moods with the harness work state | 0.1.0-rc.8 (2026-08-20) |
| deepseek-pet | 49 | [keleus/deepseek-pet](https://github.com/keleus/deepseek-pet) · [npm](https://www.npmjs.com/package/deepseek-pet) | DeepSeek Pet plugin: an interactive, state-aware companion embedded in DeepSeek Harness Web | 0.1.0-rc.8 (2026-08-20) |
| dsh-emoji | 46 | [hellodigua/dsh-emoji](https://github.com/hellodigua/dsh-emoji) · [npm](https://www.npmjs.com/package/dsh-emoji) | Tiny semantic inline emoji for DSH Agent responses | 0.1.0-rc.8 (2026-08-20) |
| dsh-desktop-pet-xiaoshih | 42 | [xiaoshihou514/dsh-desktop-pet](https://github.com/xiaoshihou514/dsh-desktop-pet) | Linux and Windows desktop companion for DeepSeek Harness | 0.1.1-rc.2 (2026-09-09) |
| dsh-ui-whale | 40 | [lhh010/dsh-ui-whale](https://github.com/lhh010/dsh-ui-whale) | DSH Web UI 像素鲸鱼伙伴插件：会话标题栏常驻，平时眨眼/偶尔摆尾/动胸鳍，思考运行时持续动起来，回合完成头顶喷水，点击冒爱心，零核心改动。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-client-ui-custom | 37 | [yoli-mi/dsh-client-ui-custom](https://github.com/yoli-mi/dsh-client-ui-custom) · [npm](https://www.npmjs.com/package/@ha-na-bi/dsh-client-ui-custom) | 客制化DSH（Custom DSH）: web-surface theming (wallpaper, frosted glass, accent, translucent surfaces), configurable keyboard shortcuts (new conversation / model / thinking effort / composer gestures / | 0.1.0-rc.8 (2026-08-20) |
| dsh-minigames-lhh010 | 34 | [lhh010/dsh-minigames](https://github.com/lhh010/dsh-minigames) | DSH Web UI 右侧小游戏面板：18 款离线小游戏，可扩展游戏注册表。等待模型回复或修 bug 时的摸鱼神器。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-whale-galgame | 33 | [JAdpp/dsh-whale-galgame](https://github.com/JAdpp/dsh-whale-galgame) · [npm](https://www.npmjs.com/package/dsh-whale-galgame) | A multi-character Galgame interface and optional desktop companion for DeepSeek Harness Web. | 0.1.0-rc.8 (2026-08-20) |
| dsh-godot-skill | 32 | [akira399/dsh-godot-skill](https://github.com/akira399/dsh-godot-skill) | Godot Engine 4.x full-stack game development skill for DeepSeek Harness (DSH). A host plugin that registers the `godot-4-development` skill — covering renderers, 2D/3D graphics & physics | 0.1.0-rc.8 (2026-08-20) |
| dsh-game-material-master | 31 | [universe-st/dsh-game-material-master](https://github.com/universe-st/dsh-game-material-master) · [npm](https://www.npmjs.com/package/dsh-game-material-master) | 游戏素材大师：DSH 插件，包含八方向图生成、图片生成、序列帧生成三个游戏素材模块，以及实验性的骨骼动画生成模块。八方向图默认「转圈截帧」（一段原地匀速转一圈的绿幕视频 → 按时间轴截出八个方向），也可逐方向生图；火山方舟 Seedream 生图 + MiniMax 图生视频 + 本地抠绿幕合成。 | 0.1.7-rc.2 (2026-09-29) |
| dsh-pet-live2d | 31 | [A8Chann/dsh-pet-live2d](https://github.com/A8Chann/dsh-pet-live2d/tree/HEAD/dsh-live2d-pet-desktop/npm) | Live2D 桌宠插件：为 DSH Web GUI 挂一只可拖动、会跟随鼠标、能换动作与表情的 Live2D 宠物。 | 0.1.7-rc.2 (2026-09-29) |
| whale-purse | 30 | [Suiwan/whale-purse](https://github.com/Suiwan/whale-purse) | 鲸鱼娘桌宠 · DeepSeek 余额 + 会话用量/花费监视，直接挂进 DSH Web profile 的组合层（cordis.patch.yml insert，热重载） | 0.1.0-rc.8 (2026-08-20) |
| dsh-live2d-pets | 27 | [cyanfish-x/dsh-live2d-pets](https://github.com/cyanfish-x/dsh-live2d-pets) · [npm](https://www.npmjs.com/package/dsh-live2d-pets) | Live2D pet plugin for DeepSeek Harness: load models from any external URL or local model path | 0.1.0-rc.8 (2026-08-20) |
| dsh-gomoku | 26 | [omdsh-dev/dsh-gomoku](https://github.com/omdsh-dev/dsh-gomoku) · [npm](https://www.npmjs.com/package/@yejiming/dsh-gomoku) | Gomoku (five-in-a-row) for the dsh web GUI: AI move routes, model catalog, and default prompt (node half) plus the conversation-view tab with the board (browser half) | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 534. **[all 534 →](lists/fun.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Bundles

npm packages with a `dsh.bundle` manifest: composition layers a profile boots from.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-base (official) | 243091 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/bundle/base) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-base) | The shared dsh core as a profile bundle: every profile's first patch layer, inserting the base plugin rows over the empty profile root | 0.1.0-rc.5 (2026-08-13) |
| dsh-headless (official) | 243091 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/bundle/headless) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-headless) | The one-shot bundle: a direct core Agent/Session runner over dsh-base with no Host, HTTP, or browser layer | 0.1.0-rc.5 (2026-08-13) |
| dsh-web-app (official) | 243091 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/bundle/web-app) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-web-app) | The browser-surface bundle: the web patch layer over dsh-base plus the runtime glue plugin (frontend dist serving, web-surface prompt, URL line) | 0.1.0-rc.5 (2026-08-13) |
| dsh-tui-ccch1mneyyy | 4001 | [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) · [npm](https://www.npmjs.com/package/@deepseek-harness-tui/dsh-tui) | Claude Code-style interactive TUI front door for DeepSeek Harness agents, built on a ported Ink core. | 0.1.0-rc.8 (2026-08-20) |
| dsh-im | 1590 | [xmanrui/dsh-im](https://github.com/xmanrui/dsh-im) · [npm](https://www.npmjs.com/package/@xmanrui/dsh-im) | QR-code IM channel plugin that connects Feishu, WeChat, and DingTalk bots to DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-invoice-downloader | 486 | [EthanYoQ/Invoice-Downloader](https://github.com/EthanYoQ/Invoice-Downloader/tree/HEAD/plugins/dsh-invoice-downloader) · [npm](https://www.npmjs.com/package/@ethanyoq/dsh-invoice-downloader) | Local IMAP invoice download, OCR, archival, and Excel reimbursement summaries through a DSH profile bundle. | 0.1.0-rc.5 (2026-08-22) |
| oh-dsh | 325 | [hust-open-atom-club/oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) | Community distribution bundling TUI, desktop, and web UI surfaces with layered installation, pinned to an exact harness revision via dsh-source.json | 0.1.0-rc.8 (2026-08-20) |
| dsh-memory-safe | 180 | [seriousz158/dsh-memory](https://github.com/seriousz158/dsh-memory) · [npm](https://www.npmjs.com/package/dsh-git-memory) | Local Git-backed long-term memory for DeepSeek Harness with cited context, usage-aware read tools, safe sync, preview, and rollback. | 0.1.0-rc.7 (2026-08-21) |
| dsh-super-injector | 167 | [yjh051108/dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) | Runtime injector for local DSH plugin packages with hot reload and a settings-page manager. | 0.1.0-rc.8 (2026-08-20) |
| dsh-config-manager | 150 | [xiajiajun516/dsh-config-manager](https://github.com/xiajiajun516/dsh-config-manager) · [npm](https://www.npmjs.com/package/dsh-config-manager) | Backup, export, import, and migrate DeepSeek Harness configuration from the web UI. | 0.1.0-rc.8 (2026-08-20) |
| dsh-mneme | 138 | [slow-stack/mneme](https://github.com/slow-stack/mneme/tree/HEAD/dsh-mneme) · [npm](https://www.npmjs.com/package/@modusensus/dsh-mneme) | Cross-session memory with SQLite, Markdown mirrors, autoDream consolidation, and a web panel. | 0.1.0-rc.8 (2026-08-20) |
| dsh-stock-watch | 82 | [Awu12277/dsh-stock-watch](https://github.com/Awu12277/dsh-stock-watch) | Collapsible A-share watchlist popup with live quotes, charts, and a target-price panel. | 0.1.0-rc.8 (2026-08-20) |
| dsh-code | 43 | [UNLINEARITY/dsh-code](https://github.com/UNLINEARITY/dsh-code) · [npm](https://www.npmjs.com/package/dsh-code) | Claude-Code-style interactive TUI bundle for DeepSeek Harness with a DeepSeek-blue whale banner and live session transcript. | 0.1.0-rc.8 (2026-08-20) |
| dsh-agent-team | 41 | [wowyuarm/dsh-agent-team](https://github.com/wowyuarm/dsh-agent-team) · [npm](https://www.npmjs.com/package/@wowyuarm/dsh-agent-team) | Help humans organize tasks and let agents collaborate - a Team plugin for DeepSeek Harness | 0.1.1-rc.2 (2026-08-26) |
| dsh-any-background | 38 | [Tkingxiao/dsh-any-background](https://github.com/Tkingxiao/dsh-any-background) · [npm](https://www.npmjs.com/package/dsh-any-background) | Custom wallpaper and theme-color controls for the DeepSeek Harness web UI, including opacity, blur, and a color wheel. | 0.1.0-rc.8 (2026-08-20) |
| dsh-toolkit | 28 | [omdsh-dev/dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit) | Zero-dependency toolkit collection: time, encoding, json, calculator, csv, regex, markdown, diff, stat, and schema in one entry. | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-marketplace-yelebai | 20 | [YELEBAI/dsh-plugin-marketplace](https://github.com/YELEBAI/dsh-plugin-marketplace) | A plugin marketplace for DeepSeek Harness with categories, trending discovery, install management, and controlled restart. | 0.1.0-rc.8 (2026-08-20) |
| dsh-fabric | 18 | [omdsh-dev/stent](https://github.com/omdsh-dev/stent) · [npm](https://www.npmjs.com/package/@oh-my-dsh/stent-pack) | Stent/Mixin extension workspace: installable profile bundle carrier over the stent package trio | 0.1.1-rc.2 (2026-09-09) |
| dsh-harmony | 17 | [memorax-ai/dsh-harmony](https://github.com/memorax-ai/dsh-harmony) · [npm](https://www.npmjs.com/package/dsh-harmony) | Runtime library to patch, replace, and decorate DeepSeek Harness plugins with hot reload. | 0.1.0-rc.8 (2026-08-20) |
| pptfast | 17 | [liustack/pptwise](https://github.com/liustack/pptwise) · [npm](https://www.npmjs.com/package/@liustack/pptwise) | Stable editable PPTX generation for DeepSeek Harness agents: semantic IR in, native DrawingML out. | 0.1.0-rc.8 (2026-08-20) |
| dsh-desk | 15 | [majiayu000/dsh-desk](https://github.com/majiayu000/dsh-desk) | Tauri desktop companion for DeepSeek Harness: wraps official dsh 0.1.0-rc.6 in a system WebView with isolated DSH_HOME and a plugin-manager UI. | 0.1.0-rc.8 (2026-08-20) |
| dsh-bash-win | 12 | [zimzaza4/dsh-bash-win](https://github.com/zimzaza4/dsh-bash-win) · [npm](https://www.npmjs.com/package/@zimzaza4/dsh-bash-win) | Windows-first bash tools for DeepSeek Harness: Git Bash and WSL2 bash with bwrap sandbox, approval mode, and background jobs. | 0.1.0-rc.8 (2026-08-20) |
| dsh-codex-port | 9 | [STARDUSTLC666/dsh-codex-port](https://github.com/STARDUSTLC666/dsh-codex-port) · [npm](https://www.npmjs.com/package/dsh-codex-port) | One-command port of Codex plugins from ~/.codex into DeepSeek Harness skills, with frontmatter conversion. | 0.1.0-rc.8 (2026-08-20) |
| dsh-hyperframes | 9 | [STARDUSTLC666/dsh-hyperframes](https://github.com/STARDUSTLC666/dsh-hyperframes) · [npm](https://www.npmjs.com/package/dsh-hyperframes) | Registers HyperFrames by HeyGen video-creation skills for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-mermaid | 9 | [AKS1st/dsh-mermaid](https://github.com/AKS1st/dsh-mermaid) | Renders Mermaid code fences as SVG diagrams in DeepSeek Harness web conversations. | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 91. **[all 91 →](lists/bundles.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Skills

Anthropic-format `SKILL.md` units; dsh discovers them from its skill roots (no nested discovery, kebab-case names only).

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| ECC | 272480 | [affaan-m/ECC](https://github.com/affaan-m/ECC/tree/HEAD/skills/accessibility) | Harness-native agent operating system for Codex, OpenCode, Cursor, Gemini, Claude Code, and terminal workflows - skills, hooks, rules, MCP conventions, and operator control-plane patterns | 0.1.0-rc.8 (2026-08-25) |
| paperclip | 96867 | [paperclipai/paperclip](https://github.com/paperclipai/paperclip/tree/HEAD/skills/paperclip-board) | The open-source app everyone uses to manage agents at work | 0.1.0-rc.8 (2026-08-25) |
| ruflo | 73824 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | Ruflo - Enterprise AI agent orchestration for Claude Code. Deploy 60+ specialized agents in coordinated swarms with self-learning, fault-tolerant consensus, vector memory, and MCP integration | 0.1.0-rc.8 (2026-08-24) |
| compound-engineering-plugin | 25387 | [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin/tree/HEAD/skills/ce-babysit-pr) | Official Compound Engineering skills plugin for coding agents | 0.1.0-rc.8 (2026-08-25) |
| colleague-skill | 25278 | [titanwings/distilly](https://github.com/titanwings/distilly) | Digital-companion skill in the Anthropic SKILL.md format dsh reads; install by copying it into a dsh skill root such as .agents/skills | unverified |
| NemoClaw | 22651 | [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw/tree/HEAD/skills/nemoclaw-user-guide) | NemoClaw — run OpenClaw inside OpenShell with NVIDIA inference | 0.1.0-rc.8 (2026-08-25) |
| learn-harness-engineering | 18772 | [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering/tree/HEAD/skills/harness-creator) | Course docs for Learn Harness Engineering powered by VitePress. | 0.1.1-rc.2 (2026-09-09) |
| skill | 7519 | [anbeime/skill](https://github.com/anbeime/skill) | 收录最全、更新最快的技能Skills商店：416个精选原创技能包（涵盖文档处理、内容创作、编程开发、机器学习、自动化工作流），全部打包好可直接安装使用！同时自动抓取GitHub上万个Skills项目，按分类、更新时间、Star数量整理。 | 0.1.1-rc.2 (2026-09-02) |
| honcho | 7455 | [plastic-labs/honcho](https://github.com/plastic-labs/honcho/tree/HEAD/skills/honcho-cli) | Memory library for building stateful agents | 0.1.7-rc.2 (2026-09-29) |
| Vibe-Skills | 3551 | [foryourhealth111-pixel/Vibe-Skills](https://github.com/foryourhealth111-pixel/Vibe-Skills) | Intelligent Skill routing and workflow orchestration for AI agents — +21.12 pp reward, −29.6% tokens on SkillsBench with DeepSeekV4Flash-VE. | 0.1.1-rc.2 (2026-09-09) |
| deepwiki-rs | 3105 | [sopaco/deepwiki-rs](https://github.com/sopaco/deepwiki-rs/tree/HEAD/assets/skill-litho) | Turn code into clarity. Generate accurate technical docs and AI-ready context in minutes—perfectly structured for human teams and intelligent agents. | 0.1.1-rc.2 (2026-09-18) |
| J-Space-Cognition-Suite-V3.7 | 3000 | [Tiger3807861189/J-Space-Cognition-Suite](https://github.com/Tiger3807861189/J-Space-Cognition-Suite/tree/HEAD/j-space) | J-Space Cognition Suite — a model-agnostic inference-time control suite for deep reasoning, long-horizon work, verification, and recovery. Based on Anthropic's J-space global workspace research. | 0.1.1-rc.2 (2026-09-18) |
| grida | 2655 | [gridaco/grida](https://github.com/gridaco/grida/tree/HEAD/skills/dotcanvas) | Grida — Open Canvas | 0.1.7-rc.2 (2026-09-29) |
| vox-director | 2118 | [Alisa0808/vox-director](https://github.com/Alisa0808/vox-director) | Vox Director — an open-source Agent Skill that turns one topic into a finished Vox-style paper-collage explainer/ad video: script, collage keyframes, motion, voice-over, music and captions, automated | 0.1.0-rc.8 (2026-08-21) |
| last30days-skill-cn | 1867 | [Jesseovo/last30days-skill-cn](https://github.com/Jesseovo/last30days-skill-cn) | last30days-cn 是一个 AI Agent 技能（Skill），能够自动搜索中国互联网 8 大主流平台最近 30 天的内容，综合分析后生成有据可查的研究报告。 | 0.1.0-rc.8 (2026-08-21) |
| math-modeling-skill | 1848 | [XiaoMaColtAI/math-modeling-skill](https://github.com/XiaoMaColtAI/math-modeling-skill) | 数学建模技能 - 面向 CUMCM、MCM/ICM 等数学建模竞赛的三阶段工作流：建模分析、Python/MATLAB 编程与 DOCX 论文生成。包含丰富的算法资源库(优化/预测/评价/图论/机器学习等)、角色指导文档、论文模板和实用工具脚本 | 0.1.0-rc.8 (2026-08-21) |
| brooks-lint | 1503 | [hyhmrright/brooks-lint](https://github.com/hyhmrright/brooks-lint/tree/HEAD/skills/brooks-audit) | AI code reviews grounded in 12 classic engineering books — decay risk diagnostics with book citations, severity labels, and 6 analysis modes including full-sweep auto-fix | 0.1.1-rc.2 (2026-09-09) |
| AI_Animation | 1435 | [Unclecheng-li/AI_Animation](https://github.com/Unclecheng-li/AI_Animation/tree/HEAD/skills/card-theater) | AI-powered HTML animation & visualization skill collection | 0.1.7-rc.2 (2026-09-29) |
| openpets-openpets | 1262 | [OpenPetsHQ/openpets](https://github.com/OpenPetsHQ/openpets/tree/HEAD/skills/openpets) | OpenPets 2.0 workspace | 0.1.1-rc.2 (2026-09-04) |
| ex-skill | 1088 | [titanwings/ex-skill](https://github.com/titanwings/ex-skill) | Builds a digital persona skill of your ex from WeChat chat logs (create-ex); SKILL.md documents dsh discovery paths alongside other hosts | unverified |
| Skills-Manager | 1009 | [jiweiyeah/Skills-Manager](https://github.com/jiweiyeah/Skills-Manager/tree/HEAD/skills/skills-manager-cli) | Free, open-source desktop manager for AI Agent Skills. Write a skill once, sync it to 32 AI coding tools (Claude Code, Codex, Cursor, Gemini CLI, and more) via symlinks. Local-first, MIT licensed. mac | 0.1.1-rc.2 (2026-09-18) |
| wesight | 938 | [freestylefly/wesight](https://github.com/freestylefly/wesight/tree/HEAD/SKILLs/article-writer) | AI-Powered WeChat Intelligence | 0.1.1-rc.2 (2026-09-09) |
| agent-qa | 897 | [vostride/agent-qa](https://github.com/vostride/agent-qa/tree/HEAD/skills/agent-qa-authoring) | Open-source self-improving QA agent for software teams. A test harness with memory. Write tests in natural language for web and mobile. agent-qa learns from every run, adapts to UI changes, and catche | 0.1.1-rc.2 (2026-09-09) |
| hol-guard | 751 | [hashgraph-online/hol-guard](https://github.com/hashgraph-online/hol-guard/tree/HEAD/docs/guard) | Open-source antivirus for AI agents: block risky tools, secret access, prompt injection, malicious packages, MCP servers, plugins, and skills at runtime. | 0.2.0-rc.2 (2026-09-30) |
| helloagents | 703 | [hellowind777/helloagents](https://github.com/hellowind777/helloagents/tree/HEAD/skills/_meta) | HelloAGENTS — The orchestration kernel that makes any AI CLI smarter. Adds intelligent routing, unified QA gates, safety guards, and notifications. | 0.1.1-rc.2 (2026-09-09) |

<sub>Showing the 25 most-starred of 604. **[all 604 →](lists/skills.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Themes

UI skins. The dedicated registry is [awesome-dsh-themes](https://github.com/dshworks/awesome-dsh-themes); only themes that also ship plugin machinery live here.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-deep-whale | 2385 | [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale/tree/HEAD/maid-atelier) · [npm](https://www.npmjs.com/package/@smalltailqwq/dsh-client-ui-skin-maid-atelier) | Whale-girl skin series for the web UI; maid-atelier ships as a dsh.bundle package installed from a local clone (CC BY-NC-SA, non-commercial) | 0.1.0-rc.8 (2026-08-20) |
| dsh-homepage-skin | 3 | [yushi-xxh/dsh-homepage-skin](https://github.com/yushi-xxh/dsh-homepage-skin) · [npm](https://www.npmjs.com/package/dsh-homepage-skin) | DeepSeek Harness homepage-style background skin: WebGL fluid, dot grid and digital whale. Dark and light variants included. | 0.1.0-rc.8 (2026-08-20) |

### Tools

Developer tooling around dsh.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| create-dsh-plugin | 55 | [whyihaveyou/dsh-suite](https://github.com/whyihaveyou/dsh-suite/tree/HEAD/packages/create-dsh-plugin) · [npm](https://www.npmjs.com/package/create-dsh-plugin) | Scaffold a DeepSeek Harness plugin in seconds: tool, events, and webui templates with next-tag version pinning and a built-in --verify smoke test. | unverified |
| oh-my-dsh-amplift | 16 | [amplifthq/oh-my-dsh](https://github.com/amplifthq/oh-my-dsh) · [npm](https://www.npmjs.com/package/oh-my-dsh) | Plugins, sensible defaults, and a launcher for DeepSeek Harness (dsh) — everything you're missing, without forking upstream. | 0.1.0-rc.8 (2026-08-20) |
| dsh-forge | 3 | [zhn1100/dsh-forge](https://github.com/zhn1100/dsh-forge) | Reproducible DeepSeek Harness plugin development profile with a cordis patch, CLI, and runtime-aware preset. | 0.1.0-rc.8 (2026-08-20) |

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
