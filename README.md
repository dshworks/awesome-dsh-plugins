<!-- Rendered by scripts/render.mjs from data/plugins.json. Do not edit by hand: edit the data or the template, then run `npm run render`. -->

# awesome-dsh-plugins

[![powered by dsh](https://img.shields.io/badge/powered__by-dsh-4D6BFE?logo=deepseek)](https://github.com/deepseek-ai/deepseek-harness)
[![license: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![browse the reef](https://img.shields.io/badge/browse-the_reef-ff7a59)](https://dsh.works/awesome-dsh-plugins/)

A spam-filtered, open-data registry of [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`) plugins, bundles, and skills — 32,322 entries from 19,502 authors across 17 functional areas, every one carrying the file its install path was proven in and the dsh version it was checked against.

**[Browse the reef](https://dsh.works/awesome-dsh-plugins/)** — the same registry as a filterable, sortable gallery.

Most awesome lists are prose. This one is data: [`data/plugins.json`](data/plugins.json) is the source of truth, this README is rendered from it. Build on the JSON directly:

```sh
curl -s https://dsh.works/awesome-dsh-plugins/plugins.json                 # every entry
curl -s https://dsh.works/awesome-dsh-plugins/stats.json                   # just the counts, ~150 bytes
```

Each entry carries two orthogonal dimensions: `category` is the form factor (bundle, plugin, skill, theme, tool — what dsh docs call things) and `tags` is the functional area (what it actually does). `stars` is the linked repo's GitHub count (refreshed by `scripts/stars.mjs`, display signal only), and `featured` marks a hand-curated editor's pick.

## Use this registry in dsh's Discover tab

dsh 0.2.1 and later can browse a plugin market from one JSON index at a URL you add. The feature is experimental. This registry publishes an index built by `scripts/market.mjs` from every entry with a verified `npm` name whose published versions declare `dsh.bundle`; git-only entries are not in it yet.

1. Open **Plugins**, select **More** beside **Experimental plugins**, and switch on **Custom plugin markets**.
2. Select the **Discover** tab that appears, choose **Add index source**, and enter:

```
https://dsh.works/awesome-dsh-plugins/market/index.json
```

Use that address exactly: dsh refuses redirects, and the `dshworks.github.io` address redirects to it. **Install** opens a confirmation first, and dsh runs its own compatibility checks before anything is installed.

## Why a filtered registry

DeepSeek delegates the ecosystem to the community: no first-party marketplace, discovery happens on the [`dsh-plugin`](https://github.com/topics/dsh-plugin) GitHub topic. On launch day that topic held 431 repositories. As of 2026-11-09 it holds 28,841, template spam and topic-riders included. A raw topic feed is not a registry; the filter is the value this repo adds.

How much filtering that is, measured on 2026-11-09: **33,836** repositories carry a dsh discovery topic and **32,482** of them — 96% — have been opened, read, and decided. 5,271 were rejected, **3,514** of those for having no install path at any depth: no `dsh` manifest in `package.json`, no dsh dependency, no `SKILL.md`. They carry the topic and nothing else. Every rejection is published with its reason and a recheck date in [`data/rejected.json`](data/rejected.json).

That is the number worth comparing. A topic count says how many people typed a tag. **32,482 of 33,836** says how many repositories somebody actually opened.

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

- **[dsh-web-ui](https://github.com/zhu1090093659/dsh-web)** — DeepSeek Harness Web GUI 插件全家桶。皮肤、宠物与社区插件索引已拆分为独立仓库（dsh-skins / dsh-pet / dsh-community-plugins），本仓通过 npm 包内置它们。 <sub>10263 ★ · ui</sub>
- **[dsh-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar)** — Full sidebar workbench with file rendering/editing, terminal, Git, and subagents; third-party extensions can register new tabs <sub>5019 ★ · ui</sub>
- **[modlens](https://github.com/liustack/modlens)** — Vision plugin for text-only models: image understanding bridged into the harness via a dsh.bundle patch layer, shipping a modlens skill alongside <sub>4870 ★ · vision</sub>
- **[dsh-browser](https://github.com/omdsh-dev/dsh-browser)** — Chrome sidebar plugin that lets dsh operate the browser directly, without vision. <sub>1014 ★ · capabilities</sub>
- **[dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon)** — Local-first three-tier memory for dsh: runtime memory, searchable documents, and supervised memory spaces. <sub>945 ★ · memory</sub>
- **[whale-girl](https://github.com/vlln/whale-girl)** — Desktop-pet companion for the web GUI (QQ-pet style): draggable, feedable, levels up with session activity; migrated from the removed .dsh-plugin format to dsh.bundle <sub>405 ★ · fun</sub>
- **[dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind)** — Rewind conversation and workspace state to a previous turn, backed by a persistent change ledger <sub>145 ★ · memory</sub>
- **[dsh-usage-stats](https://github.com/lanlandeli/dsh-usage-stats)** — Beautiful token analytics for DeepSeek Harness — trends, activity heatmaps, model breakdowns, and data exports. <sub>11 ★ · usage</sub>

## Plugins by area

31103 Cordis plugins activated through patch rows in a bundle or profile, grouped by what they do. Data updated 2026-11-09.

Each area shows its 25 most-starred entries and links to the complete list in [`lists/`](lists). GitHub stops rendering a markdown file partway through once it passes about half a megabyte — silently, mid-row — so the full tables live in files small enough to survive that. Nothing is dropped: [`data/plugins.json`](data/plugins.json) and the [gallery](https://dsh.works/awesome-dsh-plugins/) always hold everything.

### Web UI

Panels, composer upgrades, navigation, layout, mobile.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| next-ai-draw-io | 36813 | [DayuanJiang/next-ai-draw-io](https://github.com/DayuanJiang/next-ai-draw-io/tree/HEAD/packages/dsh-plugin) · [npm](https://www.npmjs.com/package/@next-ai-drawio/dsh) | draw.io diagrams in DeepSeek Harness: the AI draws on a live canvas in the sidebar that you can also edit by hand, with versions and undo | 0.2.1-rc.5 (2026-11-02) |
| dsh-web-ui ⭐ | 10263 | [zhu1090093659/dsh-web](https://github.com/zhu1090093659/dsh-web) | DeepSeek Harness Web GUI 插件全家桶。皮肤、宠物与社区插件索引已拆分为独立仓库（dsh-skins / dsh-pet / dsh-community-plugins），本仓通过 npm 包内置它们。 | 0.2.1-rc.5 (2026-11-03) |
| answer-me-with-html | 6129 | [QingYunA/answer-me-with-html](https://github.com/QingYunA/answer-me-with-html) | Answer hard questions with a one-page HTML: the model writes a short Markdown draft; the bundled CLI handles templates, SVG auto-layout and an STE controlled-writing check. | 0.2.0-rc.2 (2026-10-17) |
| dsh-better-sidebar ⭐ | 5019 | [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) · [npm](https://www.npmjs.com/package/dsh-better-sidebar) | Full sidebar workbench with file rendering/editing, terminal, Git, and subagents; third-party extensions can register new tabs | 0.1.0-rc.8 (2026-08-20) |
| CloudBase-AI-Toolkit | 1164 | [TencentCloudBase/CloudBase-AI-Toolkit](https://github.com/TencentCloudBase/CloudBase-AI-Toolkit/tree/HEAD/dsh-plugin) · [npm](https://www.npmjs.com/package/@cloudbase/dsh-plugin) | CloudBase backend for DeepSeek Harness — full-stack apps from chat, DB/Storage/Auth panel, one-click deploy | 0.1.1-rc.2 (2026-09-18) |
| superdesign-skill | 966 | [superdesigndev/superdesign-skill](https://github.com/superdesigndev/superdesign-skill) | Design or redesign frontend UI and marketing graphics on the Superdesign infinite canvas — the Superdesign skill, packaged as a DeepSeek Harness bundle. | 0.1.0-rc.8 (2026-08-20) |
| dsh-genui | 944 | [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) · [npm](https://www.npmjs.com/package/@changfenhuang/dsh-genui) | Renders interactive UI components inline in assistant replies via the dsh-ui fence: layout, charts, plots, forms, quizzes, mermaid, 3D scenes, and an action event loop back to the model. | 0.1.0-rc.8 (2026-08-20) |
| mnemon | 702 | [mnemon-dev/mnemon](https://github.com/mnemon-dev/mnemon) | Install the full dsh-mnemon integration from the Mnemon repository. | 0.1.0-rc.8 (2026-08-20) |
| dsh-at-file | 564 | [FSMargoo/dsh-at-file](https://github.com/FSMargoo/dsh-at-file) | Codex-style @file mentions in the composer: search workspace files and attach their contents to prompts | 0.1.0-rc.8 (2026-08-20) |
| dsh-claude-style | 537 | [Nwflower/dsh-claude-style](https://github.com/Nwflower/dsh-claude-style) · [npm](https://www.npmjs.com/package/dsh-claude-style) | Claude Code Desktop theme for DeepSeek Harness (dsh) web GUI — visual & interaction overhaul | 0.1.7-rc.2 (2026-09-29) |
| pi-web-ui | 375 | [xing-shuyin/pi-web-ui](https://github.com/xing-shuyin/pi-web-ui) · [npm](https://www.npmjs.com/package/pi-web-ui) | Web chat interface for the pi coding agent, powered by the pi SDK (@earendil-works/pi-coding-agent) — one-command run, Docker/systemd/launchd deployable | 0.1.1-rc.2 (2026-09-04) |
| dsh-visualize | 338 | [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) · [npm](https://www.npmjs.com/package/@nagi-ovo/dsh-visualize) | Generative UI in conversation: a visualize tool plus companion skill renders interactive HTML cards in sandboxed frames with streaming preview | 0.1.0-rc.8 (2026-08-20) |
| dsh-boot-animation-lxj5820 | 336 | [lxj5820/dsh-boot-animation](https://github.com/lxj5820/dsh-boot-animation) | DSH 启动动画与屏保：全屏短片片尾交叉溶解进界面；闲置后全屏盖住界面，点击或按键收回。支持视频/图片/动图/Live2D，设置全在界面里。不改 DSH 本体源码。 | 0.2.1-rc.5 (2026-11-02) |
| dsh-mattpocock-skills-deck | 323 | [FeatherHunter/dsh-mattpocock-skills-deck](https://github.com/FeatherHunter/dsh-mattpocock-skills-deck/tree/HEAD/package) · [npm](https://www.npmjs.com/package/dsh-mattpocock-skills-deck) | 非官方 DeepSeek Harness 插件：Matt Pocock 技能套件（mattpocock/skills）的 DSH 控制面板（Deck）——将 wayfinder 地图/票务/进度、triage / grilling / handoff 动作注入带进 DSH；配套 25 个工程与效率技能。打开形式仅右侧 details 列（无 PiP/悬浮）。npm 标准安装（dsh plugin | 0.1.0-rc.8 (2026-08-20) |
| dsh-skill-mcp-panel | 266 | [Fishquito7/dsh-skill-mcp-panel](https://github.com/Fishquito7/dsh-skill-mcp-panel) · [npm](https://www.npmjs.com/package/dsh-skill-mcp-panel) | dsh-skill-mcp-panel: manage skills and MCP servers from the DSH web settings UI plus the unified dsh-panel CLI. | 0.1.1-rc.2 (2026-09-09) |
| dsh-openpencil | 236 | [ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) · [npm](https://www.npmjs.com/package/@zseven-w/dsh-openpencil) | OpenPencil design preview and editing inside the web UI | 0.1.0-rc.8 (2026-08-20) |
| dsh-popout-sidebar | 205 | [e2mcc/dsh-popout-sidebar](https://github.com/e2mcc/dsh-popout-sidebar) · [npm](https://www.npmjs.com/package/dsh-popout-sidebar) | 可弹出侧边栏 · A DeepSeek Harness sidebar that shows artifacts and pops out into a larger web tab. | 0.1.0-rc.8 (2026-08-20) |
| dsh-undo-plugin | 202 | [lire1131/dsh-undo-savepoint](https://github.com/lire1131/dsh-undo-savepoint) · [npm](https://www.npmjs.com/package/dsh-undo-savepoint) | DSH undo/rollback system: snapshot config files on change, undo/redo the last action from the WebUI or by chat, and roll back broken plugin trees without reinstalling. | 0.2.0-rc.2 (2026-10-05) |
| dsh-startup-secret | 196 | [huzhengcai471-crypto/dsh-startup-secret](https://github.com/huzhengcai471-crypto/dsh-startup-secret) | DSH 启动界面与启动动画（二次创作版）：长征机主题开机动画，徽章标识 + 赛博电子风人物立绘（可切换）+ 访问密码功能 + 动画结束后的事件窗口。中文主字 + 英文等宽副标题，真声素材 + 界面音效，身份名称等参数在 DSH 设置页可改。web profile 与 desktop profile 通用。 | 0.2.1-rc.5 (2026-11-02) |
| dsh-auto-continue | 189 | [HsiangNianian/dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) · [npm](https://www.npmjs.com/package/dsh-client-auto-continue) | Automatically sends continue when a Web UI request is interrupted by network errors or other non-human causes. | 0.1.0-rc.8 (2026-08-20) |
| dsh-web-mobile | 183 | [mexiaosqwq/dsh-web-mobile](https://github.com/mexiaosqwq/dsh-web-mobile) · [npm](https://www.npmjs.com/package/dsh-web-mobile) | Mobile-adaptive DSH web UI: on narrow screens the sidebar rail is hidden and the directory opens as an overlay drawer, so the conversation gets the full width. | 0.1.0-rc.8 (2026-08-20) |
| dsh-remote-web-gateway | 167 | [summer1238/dsh-remote-web-gateway](https://github.com/summer1238/dsh-remote-web-gateway/tree/HEAD/plugin) · [npm](https://www.npmjs.com/package/dsh-remote-web-gateway) | DSH Remote Web Gateway — DSH native plugin: one-click phone/tablet remote access to the DeepSeek Harness Web GUI via Cloudflare Quick Tunnel + QR pairing + device management + optional GitHub login | 0.1.0-rc.8 (2026-08-20) |
| dsh-annotation | 165 | [omdsh-dev/dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) · [npm](https://www.npmjs.com/package/@changfenhuang/dsh-annotation) | DSH Web selection-annotation plugin: select assistant text, annotate (optional), and press Enter to send the annotation block with your message — the model replies to each annotation by number,. | 0.1.0-rc.8 (2026-08-20) |
| fish-pocket | 159 | [imsai-sh/fish-pocket](https://github.com/imsai-sh/fish-pocket/tree/HEAD/engine) | Run DeepSeek Harness on iPhone and iPad, with a fully native SwiftUI interface. No computer, no server. 在 iPhone 和 iPad 上本机运行 DeepSeek Harness，界面完全原生。 | 0.2.2-rc.1 (2026-11-07) |
| baro | 126 | [jigjoy-ai/baro](https://github.com/jigjoy-ai/baro/tree/HEAD/packages/baro-dsh) · [npm](https://www.npmjs.com/package/baro-dsh) | baro as a DeepSeek Harness subagent provider: delegate a multi-story goal, get parallel execution, independent review and a verified outcome back — with a live run panel in the sidebar | 0.1.1-rc.2 (2026-09-18) |

<sub>Showing the 25 most-starred of 2646. **[all 2646 →](lists/web-ui.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Terminals & desktop

TUIs, desktop shells, headless runners.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| deepseek-harness-desktop | 35471 | [anywhere-labs/dsh-desktop](https://github.com/anywhere-labs/dsh-desktop) | 为 DeepSeek Harness (DSH) 生态打造的现代化桌面端体验 | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-desktop-anywhere | 35471 | [anywhere-labs/dsh-desktop](https://github.com/anywhere-labs/dsh-desktop/tree/HEAD/dsh-community-market) · [npm](https://www.npmjs.com/package/dsh-community-market) | DSH Desktop product workspace | 0.2.1-rc.5 (2026-11-03) |
| dsh-desktop-anywhere | 35471 | [anywhere-labs/dsh-desktop](https://github.com/anywhere-labs/dsh-desktop/tree/HEAD/dsh-plugin-desktop) | DSH Desktop product workspace | 0.2.0-rc.2 (2026-10-05) |
| dsh-desktop | 17639 | [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | A cross-platform desktop shell for DeepSeek Harness. | 0.1.1-rc.2 (2026-09-04) |
| deepseek-harness-desktop-hairyf | 3548 | [dsh-tauri/deepseek-harness-desktop](https://github.com/dsh-tauri/deepseek-harness-desktop) | Desktop application for DeepSeek Harness (dsh) — one-click local install and launch, no Node.js setup required. | 0.1.7-rc.2 (2026-09-29) |
| dsh-workbuddy-connect | 1613 | [corrinehu/dsh-workbuddy-connect](https://github.com/corrinehu/dsh-workbuddy-connect) · [npm](https://www.npmjs.com/package/dsh-workbuddy-connect) | 将 WorkBuddy 桌面 App 包含的模型自动接入 DeepSeek Harness — bring WorkBuddy desktop app models into DeepSeek Harness with zero configuration. | 0.1.0-rc.8 (2026-08-20) |
| dscode | 998 | [qiz029/dscode](https://github.com/qiz029/dscode) | Reproducible macOS coding harness: DSH-Code TUI, Chrome MCP, native computer use, skills and compaction | 0.1.7-rc.2 (2026-09-29) |
| jingyun-dsh | 928 | [jingyunstudio/jingyun-dsh](https://github.com/jingyunstudio/jingyun-dsh) | 基于 Jingyun Studio + DeepSeek Harness (DSH) 打造的一站式 AI 商业化桌面客户端 | 0.1.1-rc.2 (2026-09-01) |
| deepseek-harness-desktop-ningbain | 921 | [ningbainb/deepseek-harness-desktop](https://github.com/ningbainb/deepseek-harness-desktop/tree/HEAD/apps/dsh-desktop) | Lossless desktop shell for DeepSeek Harness and the complete dsh-web-ui plugin collection | unverified |
| EAC-Pack | 781 | [Ebony-Vinyl/EAC-Pack](https://github.com/Ebony-Vinyl/EAC-Pack) | EAC/AIO 插件整合包 — one-click install and update for the full EAC and AIO plugin suites on DeepSeek Harness desktop. | 0.2.0-rc.2 (2026-10-05) |
| deepseek-harness-studio-fufankej | 713 | [fufankeji/deepseek-harness-studio](https://github.com/fufankeji/deepseek-harness-studio) | DeepSeek Harness 零代码桌面端｜一键启动，支持 Windows 与 macOS；内置插件发现、热点插件推送、一键安装与管理、AI 智能推荐和视觉增强。 | unverified |
| dshcode | 704 | [whitelonng/dshcode](https://github.com/whitelonng/dshcode) | Community desktop companion for DeepSeek Harness — one-click Electron app for macOS and Windows | 0.1.1-rc.2 (2026-09-04) |
| working-activity | 667 | [ccch1mneyyy/working-activity](https://github.com/ccch1mneyyy/working-activity/tree/HEAD/packages/activity/working-activity) · [npm](https://www.npmjs.com/package/dsh-working-activity) | Live model working-status line: playful copy, running tool, turn elapsed — for TUI prompt and Web UI | 0.1.0-rc.8 (2026-08-20) |
| dsh-computer-use-win | 608 | [Yu-tao-Li/dsh-computer-use-win](https://github.com/Yu-tao-Li/dsh-computer-use-win) · [npm](https://www.npmjs.com/package/dsh-computer-use-win) | Windows computer use for DeepSeek Harness: an MCP stdio server + PowerShell UIA backend, bridged into DSH via @deepseek-ai/dsh-mcp-client. | 0.1.0-rc.8 (2026-08-20) |
| dsh-uumit-remote | 513 | [uumit-ai/dsh-uumit-remote](https://github.com/uumit-ai/dsh-uumit-remote) · [npm](https://www.npmjs.com/package/@uumit-ai/dsh-uumit-remote) | DeepSeek Harness plugin: open your DSH from your phone or any computer through UUMit, with pairing, access control and invitations. No desktop client needed. | 0.2.1-rc.2 (2026-10-26) |
| dsh-tianshu-tui | 300 | [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) · [npm](https://www.npmjs.com/package/@huiliyi37/dsh-tianshu-tui) | Terminal UI for dsh shipped as an installable profile bundle | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-desktop-chokwinl | 286 | [chokwinlee/deepseek-harness-desktop](https://github.com/chokwinlee/deepseek-harness-desktop) | Compact unofficial desktop host for DeepSeek Harness, powered by Tauri on macOS | 0.1.1-rc.2 (2026-09-04) |
| pilot-harness | 281 | [op7418/pilot-harness](https://github.com/op7418/pilot-harness) | Pilot Harness — a CodePilot-inspired desktop client and plugin suite for DeepSeek Harness on macOS, Windows, and Linux. | unverified |
| Tydora | 229 | [zuorn/Tydora](https://github.com/zuorn/Tydora) | Let Your Ideas Flow — Tydora is a modern desktop Markdown editor combining WYSIWYG editing, bidirectional links, mind maps, and an infinite canvas — empowering deep thinking and effortless expression. | 0.1.0-rc.8 (2026-08-20) |
| Deepseek-Harness-Desktop-chisaalt | 202 | [ChisaAlter/WhaleIsle](https://github.com/ChisaAlter/WhaleIsle) | Electron desktop shell for DeepSeek Harness Web UI | 0.1.7-rc.2 (2026-09-29) |
| seektty | 192 | [Hilbert-beinghappy/seektty](https://github.com/Hilbert-beinghappy/seektty) · [npm](https://www.npmjs.com/package/seektty) | SeekTTY, a pluggable DeepSeek-colored terminal surface for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-std | 164 | [T-Auto/dsh-std](https://github.com/T-Auto/dsh-std/tree/HEAD/packages/adapter-dsh) · [npm](https://www.npmjs.com/package/@dsh-std/adapter-dsh) | In plain terms, DSH Standard is a set of universal interoperability protocols. Its goal is simple: let DSH plugins, background runtimes, and various user interfaces (TUI terminals, Web UIs… | 0.2.1-rc.5 (2026-11-03) |
| deepseek-harness-docker-runzhliu | 157 | [runzhliu/deepseek-harness-docker](https://github.com/runzhliu/deepseek-harness-docker/tree/HEAD/plugins/dsh-browser-desktop) | Movable, resizable Chromium desktop embedded in the DeepSeek Harness Web UI through noVNC. | 0.1.0-rc.8 (2026-08-20) |
| happy-friday-lite | 155 | [cheney-plus/happy-friday-lite](https://github.com/cheney-plus/happy-friday-lite) | Happy Friday Lite - Electron + Vue3 | 0.1.1-rc.2 (2026-09-04) |
| DeepSeek-Harness-Desktop-webcasa | 132 | [web-casa/DeepSeek-Harness-Desktop](https://github.com/web-casa/DeepSeek-Harness-Desktop/tree/HEAD/runtime) | Bundled DeepSeek Harness runtime for the desktop packaging. Pin exactly; upgrades happen only through prepare-harness + CI smoke. | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 967. **[all 967 →](lists/terminals-desktop.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Tools & capabilities

New things the model can do: search, browser, files, databases, devices, media.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| cherry-studio | 53363 | [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | A powerful AI assistant for producer. | 0.1.1-rc.2 (2026-09-09) |
| reactive-resume | 45520 | [reactive-resume/reactive-resume](https://github.com/reactive-resume/reactive-resume/tree/HEAD/packages/dsh-plugin) · [npm](https://www.npmjs.com/package/dsh-plugin-reactive-resume) | Reactive Resume is a free and open-source resume builder that makes it easy to create, update, and share your resume. | 0.2.1-rc.5 (2026-11-03) |
| nuwa-skill | 37860 | [alchaincyf/nuwa-skill](https://github.com/alchaincyf/nuwa-skill) | 女娲：把任何人蒸馏成可运行的思维 Skill。 | 0.2.1-rc.5 (2026-11-03) |
| huashu-design | 29026 | [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) | 花叔Design：用HTML做高保真原型、幻灯片、动画与可视化，导出PDF和可编辑PPTX。 | 0.2.2-rc.1 (2026-11-07) |
| BrowserSkill | 10218 | [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill/tree/HEAD/packages/dsh-plugin-browserskill) · [npm](https://www.npmjs.com/package/@wxg-prc-cpg/browser-skill-dsh-plugin) | DeepSeek Harness tool plugin that exposes BrowserSkill browser automation (browser_* tools) to the model | 0.1.1-rc.2 (2026-09-09) |
| plannotator | 9924 | [backnotprop/plannotator](https://github.com/backnotprop/plannotator/tree/HEAD/apps/dsh-plugin) · [npm](https://www.npmjs.com/package/@plannotator/dsh) | Plannotator plugin for DeepSeek Harness - review DSH plans with visual annotation | 0.2.1-rc.5 (2026-11-03) |
| mattpocock-skills-zh-CN | 5632 | [vinvcn/mattpocock-skills-zh-CN](https://github.com/vinvcn/mattpocock-skills-zh-CN/tree/HEAD/dsh-plugin) · [npm](https://www.npmjs.com/package/@vinvcn/dsh-mattpocock-skills-zh) | Matt Pocock skills 中文本地化的 DeepSeek Harness 插件包：以 zh- 前缀暴露全部 38 个可用技能。 | 0.2.1-rc.5 (2026-11-03) |
| billion-context | 5536 | [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) · [npm](https://www.npmjs.com/package/billion-context) | A context-compression plugin — small context windows (a 100K context is enough), 5x fewer tokens, month-long single sessions (billions of tokens), and compression quality — for all agents: pi… | 0.1.7-rc.2 (2026-09-29) |
| skillhub-iflytek | 5376 | [iflytek/skillhub](https://github.com/iflytek/skillhub/tree/HEAD/plugins/dsh) · [npm](https://www.npmjs.com/package/@astron-team/skillhub-dsh) | Native SkillHub browsing and local skill management for DeepSeek Harness | 0.2.1-rc.2 (2026-10-26) |
| mirage | 3775 | [strukto-ai/mirage](https://github.com/strukto-ai/mirage/tree/HEAD/typescript/packages/dsh) · [npm](https://www.npmjs.com/package/@struktoai/mirage-dsh) | DeepSeek Harness (dsh) providers backed by a mirage workspace: ctx.fs and ctx.shell over mounted resources | 0.1.0-rc.8 (2026-08-20) |
| DSHA | 3225 | [DSH-APP/DSHA](https://github.com/DSH-APP/DSHA/tree/HEAD/app/src/main/assets/device-shell-guide) | DSHA builtin plugin: inject device-shell (ADB/Shizuku) steering into each new conversation's system prompt | 0.1.0-rc.8 (2026-08-25) |
| dsh-pocket | 2861 | [shaobeichen/dsh-pocket](https://github.com/shaobeichen/dsh-pocket) · [npm](https://www.npmjs.com/package/dsh-pocket) | 把 DeepSeek Harness 装进你的口袋：一个包、一个设置页，手机扫码即同步访问电脑上的 DSH（局域网 + 公网，实时同屏）。 | 0.1.0-rc.8 (2026-08-20) |
| AI-Novel-Writer | 2485 | [EthanYoQ/Pagekin](https://github.com/EthanYoQ/Pagekin/tree/HEAD/plugins/dsh-ai-novel-writer) · [npm](https://www.npmjs.com/package/@ethanyoq/dsh-ai-novel-writer) | A local-first novel project plugin for DeepSeek Harness | 0.1.1-rc.2 (2026-09-09) |
| deepseek-harness-remote | 2378 | [liguobao/ds-harness-remote](https://github.com/liguobao/ds-harness-remote) | DeepSeek 远程连接 | 0.1.1-rc.2 (2026-09-01) |
| deepseek-design | 1780 | [Devin-AXIS/deepseek-design](https://github.com/Devin-AXIS/deepseek-design/tree/HEAD/packages/deepseek-idesign) | iPolloWork Design Studio and its curated design templates as a native DeepSeek Harness conversation view. | unverified |
| powercontext | 1549 | [oceanbase/powercontext](https://github.com/oceanbase/powercontext/tree/HEAD/integrations/dsh/plugins/powercontext) | DeepSeek Harness plugin that exposes PowerContext through native MCP tools and uses HTTP for host lifecycle hooks. | 0.2.1-rc.2 (2026-10-26) |
| dsh-connect-workbuddy | 1366 | [dingminhua/dsh-connect-workbuddy](https://github.com/dingminhua/dsh-connect-workbuddy) · [npm](https://www.npmjs.com/package/dsh-connect-workbuddy) | Connect locally signed-in WorkBuddy models to DeepSeek Harness with a read-only credits overview and model management. | 0.1.1-rc.2 (2026-09-01) |
| dsh-bili-scroll | 1339 | [c1overzz/dsh-bili-scroll](https://github.com/c1overzz/dsh-bili-scroll) · [npm](https://www.npmjs.com/package/dsh-bili-scroll) | DSH 插件：每天替你刷一轮 B站 —— 读字幕挑出值得的、写一份日报，值得的就 @ 你 | 0.2.0-rc.2 (2026-10-17) |
| Chorus | 1224 | [Chorus-AIDLC/Chorus](https://github.com/Chorus-AIDLC/Chorus/tree/HEAD/packages/chorus-dsh) · [npm](https://www.npmjs.com/package/@chorus-aidlc/chorus-dsh) | Chorus lifecycle, MCP, prompt, and skill bundle for DeepSeek Harness | 0.2.1-rc.5 (2026-11-03) |
| scansci-pdf | 1220 | [Rimagination/scansci-pdf](https://github.com/Rimagination/scansci-pdf/tree/HEAD/dsh-plugin) · [npm](https://www.npmjs.com/package/scansci-pdf) | DeepSeek Harness bundle for ScanSci PDF: connects the scansci-pdf MCP server and registers its academic-literature skills. | 0.2.1-rc.5 (2026-11-03) |
| EAC-design-world | 1127 | [Ebony-Vinyl/EAC-design-world](https://github.com/Ebony-Vinyl/EAC-design-world) · [npm](https://www.npmjs.com/package/eac-design-world) | EAC design world: autonomous video production for DeepSeek Harness | 0.2.0-rc.2 (2026-10-17) |
| dsh-mobile-apk | 1059 | [kelai141/dsh-mobile-apk](https://github.com/kelai141/dsh-mobile-apk/tree/HEAD/scripts) | dsh 安卓壳 APK——WebView UI + 内嵌 Termux 运行时快照（解压即跑），为dsh本地运行设计的高性能方案 | 0.2.0-rc.2 (2026-10-05) |
| dsh-unrestricted | 1034 | [yexi-by/dsh-unrestricted](https://github.com/yexi-by/dsh-unrestricted) | Toggleable unrestricted mode for DSH Web: fuses the unrestricted execution mode into each preset's original system prompt (standard/code/cordis/minimal + subagents), with per-mode anchor verification | 0.1.0-rc.8 (2026-08-25) |
| dsh-browser ⭐ | 1014 | [omdsh-dev/dsh-browser](https://github.com/omdsh-dev/dsh-browser) | Chrome sidebar plugin that lets dsh operate the browser directly, without vision. | 0.1.0-rc.8 (2026-08-20) |
| dsh-voice-ai-girlfriend | 1011 | [beiyege-01/dsh-voice-ai-girlfriend](https://github.com/beiyege-01/dsh-voice-ai-girlfriend/tree/HEAD/dsh-plugin) | DSH voice chat: mic capture -> bridge STT -> conversation.send; reply TTS playback; companion animation window | unverified |

<sub>Showing the 25 most-starred of 7771. **[all 7771 →](lists/tools-capabilities.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Vision

Image understanding for text-only models.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| archify | 94898 | [tt-a1i/archify](https://github.com/tt-a1i/archify/tree/HEAD/integrations/deepseek-harness) · [npm](https://www.npmjs.com/package/@tt-a1i/archify-dsh) | Opt-in DeepSeek Harness Skill-only bundle for the Archify architecture-diagram skill. | 0.1.0-rc.8 (2026-08-20) |
| modlens ⭐ | 4870 | [liustack/modlens](https://github.com/liustack/modlens) · [npm](https://www.npmjs.com/package/@liustack/modlens) | Vision plugin for text-only models: image understanding bridged into the harness via a dsh.bundle patch layer, shipping a modlens skill alongside | 0.1.0-rc.8 (2026-08-20) |
| dsh-vision-router | 1248 | [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) · [npm](https://www.npmjs.com/package/dsh-vision-router) | Turn-level vision routing with provider fallbacks, a cached vision_describe tool, JSON output, and optional per-host proxy. | 0.1.0-rc.8 (2026-08-20) |
| dsh-vision-toolkit | 934 | [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) · [npm](https://www.npmjs.com/package/@anionex/dsh-vision-toolkit) | Harness-native integration of agent-vision-toolkit for text-only models: image Q&A with intent, long-screenshot OCR, UI restoration, grounding, and pixel diff | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-android-app | 699 | [woaiys3/deepseek-harness-android-app](https://github.com/woaiys3/deepseek-harness-android-app/tree/HEAD/plugins/dsh-tool-android) | Model-facing Android system tools (package/app/setting/screenshot/input) over Shizuku shell. | unverified |
| dsh-see-now | 509 | [SAOS-3624/dsh-see-now](https://github.com/SAOS-3624/dsh-see-now) · [npm](https://www.npmjs.com/package/dsh-see-now) | Let DSH watch a live screen or camera feed: score every frame by how much the picture changed, keep only the ones that matter, and pack them into one image. · 让 AI 实时看见你的屏幕，只传「画面变了」的那几帧。 | 0.2.1-rc.5 (2026-11-02) |
| dsh-windows-mcp | 309 | [helloHub1212/dsh-windows-mcp](https://github.com/helloHub1212/dsh-windows-mcp) · [npm](https://www.npmjs.com/package/dsh-windows-mcp) | Windows desktop automation for DeepSeek Harness — plugs CursorTouch/Windows-MCP (screenshot, UI automation, input, clipboard, processes, registry) into DSH through the official MCP client bridge. | 0.2.0-rc.2 (2026-10-17) |
| filens | 200 | [IceWhaleTech/filens](https://github.com/IceWhaleTech/filens/tree/HEAD/integrations/deepseek-harness) · [npm](https://www.npmjs.com/package/dsh-filens) | Local document reading, OCR, search, conversion and multi-format sidebar previews for DeepSeek Harness. | 0.2.1-rc.5 (2026-11-04) |
| dsh-pilot-momasiku | 183 | [momasiku/dsh-pilot](https://github.com/momasiku/dsh-pilot) · [npm](https://www.npmjs.com/package/@momasiku/dsh-pilot) | Real-time desktop vision and control for the DeepSeek Harness: screen_view captures the live screen as an image the model can see, desktop_control drives the mouse, keyboard, and windows against the | 0.2.0-rc.2 (2026-10-05) |
| dsh-imagegen | 182 | [dickpy/dsh-imagegen](https://github.com/dickpy/dsh-imagegen) · [npm](https://www.npmjs.com/package/@dickpy/dsh-imagegen) | AI 生图 (image generation) plugin for the dsh web GUI: text-to-image and image-to-image through a configurable OpenAI-compatible endpoint (gpt-image-2 / gpt-image-1 / dall-e-3), with a settings card | 0.1.0-rc.8 (2026-08-20) |
| dsh-video-lens | 112 | [dundunhan/dsh-video-lens](https://github.com/dundunhan/dsh-video-lens) · [npm](https://www.npmjs.com/package/dsh-video-lens) | Give text-only DeepSeek Harness agents video understanding: scene-aware frame sampling + VLM + optional ASR transcript fused into timeline evidence. / 给纯文本模型的视频理解插件（场景感知抽帧 + VLM + 可选语音转录） | 0.1.0-rc.8 (2026-08-20) |
| beautiCode | 108 | [starsstreaming/beautiCode](https://github.com/starsstreaming/beautiCode/tree/HEAD/integrations/deepseek-harness) · [npm](https://www.npmjs.com/package/beauticode-dsh) | Cordis plugin: image/video backgrounds for DeepSeek Harness web. | 0.1.0-rc.8 (2026-08-20) |
| dsh-vision-oil | 91 | [oil-oil/dsh-vision](https://github.com/oil-oil/dsh-vision) | Near-native image understanding for text-only DeepSeek Harness models. | 0.1.0-rc.8 (2026-08-20) |
| dsh-imagegen-video | 90 | [q253595422/dsh-imagegen-video](https://github.com/q253595422/dsh-imagegen-video) · [npm](https://www.npmjs.com/package/@q253595422/dsh-imagegen-video) | Image and video generation for the dsh web GUI: provider channels, an infinite canvas with node-graph workflows, clip stitching, and a 30-day trash. Fork of dickpy/dsh-imagegen. | 0.2.0-rc.2 (2026-10-17) |
| DeepSeek-Harness-Video-Director | 69 | [chiphoton/DeepSeek-Harness-Video-Director](https://github.com/chiphoton/DeepSeek-Harness-Video-Director) | A project-scoped multimodal video director plugin for DeepSeek Harness. | 0.1.7-rc.2 (2026-09-29) |
| dsh-qwen-studio | 62 | [kingcharleslzy-ai/dsh-qwen-studio](https://github.com/kingcharleslzy-ai/dsh-qwen-studio) | Qwen Image 2.1 for DeepSeek Harness: native reference editing on Apple Silicon MLX and self-hosted CUDA, LoRA, ControlNet, inpainting and live chat progress | 0.2.0-rc.2 (2026-10-17) |
| dsh-origin-plugin | 44 | [Fantasality/dsh-origin-plugin](https://github.com/Fantasality/dsh-origin-plugin) · [npm](https://www.npmjs.com/package/dsh-origin-plugin) | Drive Origin scientific plotting from DeepSeek Harness AI chat via MCP - 28 tools, styled multi-series plots, inline image preview, statistics batch (t/ANOVA/PCA/survival), stable error codes. | 0.1.1-rc.2 (2026-09-09) |
| picturereader | 36 | [jing-hy/picturereader](https://github.com/jing-hy/picturereader) · [npm](https://www.npmjs.com/package/picturereader) | DSH plugin: pixel-to-text image reading for text-only models. Downscales and color-quantizes PNG/JPEG/GIF/BMP and feeds the coarse pixel grid to the model so DeepSeek can 'see' layout, colors and | 0.1.0-rc.8 (2026-08-20) |
| dsh-qwen-paint | 35 | [yanfei0725/dsh-qwen-paint](https://github.com/yanfei0725/dsh-qwen-paint) | (绘图)千问 · 优化版 —— 面向 DeepSeek Harness 的本地图像生成插件。经由本机 ComfyUI 调用 Qwen-Image 2.1 完成文生图与图生图，图像落盘保存并在会话中直接呈现；出图数据流默认仅本机回环 127.0.0.1（代码层强制，非本机地址拒绝启动），无需 API 密钥。 | 0.2.0-rc.2 (2026-10-17) |
| dsh-media-skills-mjorgin | 25 | [MJorgin/dsh-media-skills](https://github.com/MJorgin/dsh-media-skills) | Free image reading (vision) and image generation skills for DeepSeek Harness — Zhipu GLM-4V-Flash (Google Gemini optional) for reading, SiliconFlow Kolors for generation. | 0.1.0-rc.8 (2026-08-20) |
| dsh-qwen38-local-qol | 25 | [Yunado/dsh-qwen38-local-qol](https://github.com/Yunado/dsh-qwen38-local-qol) | DeepSeek Harness QoL plugin for the local Qwen3.8 line (27B, Flash-Next): per-request thinking budgets on both llama.cpp and NInfer dialects, vision + tools, and a compaction backend whose summaries | 0.1.1-rc.2 (2026-09-18) |
| dsh-tripo-studio | 25 | [azwosile/dsh-tripo-studio](https://github.com/azwosile/dsh-tripo-studio/tree/HEAD/plugin) | Local-first GPT-image 2.5 to Tripo 3D workflow for DSH Desktop, official DeepSeek Harness desktop and DSH Web | 0.2.0-rc.2 (2026-10-17) |
| dsh-roleplay | 23 | [chinosk6/dsh-roleplay](https://github.com/chinosk6/dsh-roleplay) · [npm](https://www.npmjs.com/package/dsh-roleplay) | Role-play conversations, character-card authoring and image generation for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| deepseek-harness-docker | 22 | [AlliotTech/deepseek-harness-docker](https://github.com/AlliotTech/deepseek-harness-docker) | Reproducible container image for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-image-studio-aa135572 | 22 | [aa1355721445-lgtm/dsh-image-studio](https://github.com/aa1355721445-lgtm/dsh-image-studio) | 生图工作室：本地参考库（人物 / 服饰 / 场景 / 道具）+ 智能组合参考图 + 调用生图 API，模型可自行判断何时发图；设置页里可视化管理素材库。 | 0.2.1-rc.5 (2026-11-02) |

<sub>Showing the 25 most-starred of 938. **[all 938 →](lists/vision.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Agents & orchestration

Subagents, workflows, cross-session coordination.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| DeepSeek-Reasonix | 36137 | [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix/tree/HEAD/integrations/dsh-plugin) | Use Reasonix as a subagent in DeepSeek Harness (dsh) through its ACP provider. Configuration only, no code. | 0.2.1-rc.2 (2026-10-26) |
| ego-lite | 22238 | [citrolabs/ego-lite](https://github.com/citrolabs/ego-lite/tree/HEAD/plugins/ego) | Portable ego-browser Skill for AI agent hosts | 0.2.1-rc.5 (2026-11-03) |
| DeepSeek-Bot | 6510 | [Fei2411/DS-Bot](https://github.com/Fei2411/DS-Bot/tree/HEAD/ds-bot) · [npm](https://www.npmjs.com/package/ds-bot) | DS Bot: a team of long-lived Bots for DeepSeek Harness, with Main Bots, Bot-to-Bot messages and group chats | 0.2.0-rc.2 (2026-10-17) |
| ouroboros | 6340 | [Q00/ouroboros](https://github.com/Q00/ouroboros/tree/HEAD/integrations/dsh-plugin) | Mount Ouroboros (spec-first AI dev workflow engine) into DeepSeek Harness as native tools — type "ooo interview" or "ooo auto" in chat. | 0.1.1-rc.2 (2026-09-09) |
| baoyu-design | 6249 | [JimLiu/baoyu-design](https://github.com/JimLiu/baoyu-design/tree/HEAD/dsh-plugins/dsh-claude-dashboard) · [npm](https://www.npmjs.com/package/dsh-claude-dashboard) | DeepSeek Harness plugin: the claude-dashboard skill from baoyu-design. The agent builds data-backed dashboards as files and opens them in a local dashboard editor. | 0.2.1-rc.5 (2026-11-02) |
| esp32-iphone-agent | 4725 | [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent/tree/HEAD/integrations/dsh) · [npm](https://www.npmjs.com/package/dsh-esp32agent) | DeepSeek Harness plugin: see and drive a real iPhone through an ESP32 Agent (Handsy) board. Adds the esp32agent MCP server and the handsy skill. | 0.2.2-rc.1 (2026-11-07) |
| BitFun | 3985 | [GCWing/OpenBitFun](https://github.com/GCWing/OpenBitFun/tree/HEAD/packages/dsh-acp) | IDE-oriented Agent Client Protocol server for DeepSeek Harness: publishes tool calls, reasoning, and plans that the automation-only @deepseek-ai/dsh-acp deliberately withholds | 0.1.0-rc.8 (2026-08-20) |
| OpenBitFun | 3985 | [GCWing/OpenBitFun](https://github.com/GCWing/OpenBitFun/tree/HEAD/extensions/dsh-openbitfun) | DeepSeek Harness plugin bundle exposing the OpenBitFun Agent SDK Host as dsh tools | 0.1.1-rc.2 (2026-09-09) |
| dashi-taskboard | 3471 | [chuspeeism/dashi-taskboard](https://github.com/chuspeeism/dashi-taskboard/tree/HEAD/integrations/deepseek-harness) | 现代化可灵活嵌入的任务面板，支持 Codex、DeepSeek Harness | 0.1.1-rc.2 (2026-09-09) |
| DSHA-dshapp | 3225 | [DSH-APP/DSHA](https://github.com/DSH-APP/DSHA/tree/HEAD/app/src/main/assets/app-integration) | DSHA 后台任务、网页返回和草稿恢复适配 | 0.1.1-rc.2 (2026-09-09) |
| dsh-agent-teams | 2802 | [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) · [npm](https://www.npmjs.com/package/@nanmicoder/dsh-agent-teams) | AgentTeams plugin: coordinate teams of subagents from the web UI | 0.1.0-rc.8 (2026-08-20) |
| AnyModelBot | 2741 | [modelflare-ai/AnyModelBot](https://github.com/modelflare-ai/AnyModelBot/tree/HEAD/dsh-runtime) | Pinned DeepSeek Harness (MIT) runtime used by anymodel bot as its agent host. Packaged by scripts/bundle-dsh.mjs as resources/dsh/dsh.asar, with native packages in resources/dsh/node_modules. | 0.2.1-rc.5 (2026-11-02) |
| cc-safety-net | 1975 | [kenryu42/cc-safety-net](https://github.com/kenryu42/cc-safety-net) · [npm](https://www.npmjs.com/package/cc-safety-net) | A coding agent CLI hook - block destructive commands and secret file access | 0.2.0-rc.2 (2026-10-05) |
| tongflow | 1045 | [tong-io/tongflow](https://github.com/tong-io/tongflow/tree/HEAD/packages/dsh-tongflow) · [npm](https://www.npmjs.com/package/dsh-tongflow) | TongFlow studio plugin for DeepSeek Harness (dsh): agent-designed project folders, one TongFlow workflow per generated asset stored next to its outputs, deterministic media generation… | 0.1.0-rc.8 (2026-08-20) |
| easyeda-agent | 989 | [zhoushoujianwork/easyeda-agent](https://github.com/zhoushoujianwork/easyeda-agent) | EasyEDA Pro (JLC EDA) automation for DeepSeek Harness: MCP bridge + agent skill bundle | 0.1.1-rc.2 (2026-09-09) |
| Openwrite | 935 | [LiPu-jpg/Openwrite](https://github.com/LiPu-jpg/Openwrite) · [npm](https://www.npmjs.com/package/dsh-openwrite) | OpenWrite 长篇小说领域后端接入 DeepSeek Harness：统一创作 Agent 预设 + 原生创作工作台 | 0.1.1-rc.2 (2026-09-09) |
| Wegent | 885 | [wecode-ai/Wegent](https://github.com/wecode-ai/Wegent/tree/HEAD/wework/dsh/app-wework) | An open-source AI-native operating system to define, organize, and run intelligent agent teams | 0.1.1-rc.2 (2026-08-28) |
| dsh-worktable | 849 | [Aisland-SJL/dsh-worktable](https://github.com/Aisland-SJL/dsh-worktable/tree/HEAD/01_content) | 工作台 Worktable：DeepSeek Harness 侧边栏的 agent 级项目容器（应用抽屉） | 0.1.0-rc.8 (2026-08-24) |
| Minke | 700 | [lencx/Minke](https://github.com/lencx/Minke) | Minke desktop agent powered by DeepSeek Harness | 0.1.1-rc.2 (2026-09-09) |
| watch-skill | 563 | [oxbshw/watch-skill](https://github.com/oxbshw/watch-skill/tree/HEAD/workspace) | DeepWatch — an evidence-native agent distribution built on DeepSeek Harness | 0.1.1-rc.2 (2026-09-09) |
| humanizer-ru-ilyautov | 539 | [ilyautov/humanizer-ru](https://github.com/ilyautov/humanizer-ru) · [npm](https://www.npmjs.com/package/humanizer-ru) | Agent skill for DeepSeek Harness: rewrites Russian text to remove 67 markers of AI generation (bureaucratese, calques, ChatGPT fingerprints), with a corpus-calibrated scanner… | 0.2.1-rc.5 (2026-11-03) |
| dsh-skills-manager-michenga | 518 | [MichengAI/dsh-skills-manager](https://github.com/MichengAI/dsh-skills-manager) · [npm](https://www.npmjs.com/package/@michengai/dsh-skills-manager) | NPM-installable DSH Web plugin for managing local skills and viewing shared Agent skills safely. | 0.1.0-rc.8 (2026-08-20) |
| Deepseek-Harness-Local-Android | 499 | [Soodok/Deepseek-Harness-Local-Android](https://github.com/Soodok/Deepseek-Harness-Local-Android/tree/HEAD/app/src/main/assets/android-plugins/chat-perf) | Run the DeepSeek Harness AI agent natively on Android — no root, no Termux, extension center included \| 手机本地运行 DeepSeek Agent，免 Root 免 Termux | 0.2.1-rc.2 (2026-10-26) |
| gotry | 315 | [Danceiny/gotry](https://github.com/Danceiny/gotry) · [npm](https://www.npmjs.com/package/@danceiny/gotry) | GoTry — 从出发到下一次出发的 AI 旅行 Agent(dsh 插件)。npm/源码入口共用锁定的 dsh runtime + README 安装路径。 | 0.2.1-rc.5 (2026-11-03) |
| dsh-agent-team-gui | 288 | [toolclub/dsh-agent-team-gui](https://github.com/toolclub/dsh-agent-team-gui) | Persistent multi-model squads for DeepSeek Harness — manage teams in Settings and use them in ordinary conversations | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 2764. **[all 2764 →](lists/agents-orchestration.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Memory & sessions

Memory systems, context management, session search/rewind/export.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| MemOS | 12333 | [MemTensor/MemOS](https://github.com/MemTensor/MemOS/tree/HEAD/apps/memos-local-plugin) · [npm](https://www.npmjs.com/package/@memtensor/memos-local-plugin) | Reflect2Evolve memory plugin: layered L1/L2/L3 memory, reflection-weighted value backprop, cross-task policy induction, skill crystallization, and three-tier retrieval for OpenClaw, Hermes Agent… | 0.1.0-rc.8 (2026-08-20) |
| loopx | 6568 | [loopx-project/loopx](https://github.com/loopx-project/loopx/tree/HEAD/packages/dsh-loopx-plugin) | One-step LoopX bootstrap, same-session driver, and local GoalBar for DeepSeek Harness | 0.1.1-rc.2 (2026-09-01) |
| dsh-purge-kingchar | 5812 | [kingcharleslzy-ai/dsh-purge](https://github.com/kingcharleslzy-ai/dsh-purge) | 让 AI 更专注地辅助学习与动手实验：DSH 附加组件，提供状态自检、提示词与规则管理、本机备份与回滚。 | 0.2.1-rc.2 (2026-10-26) |
| dsh-context | 4728 | [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) · [npm](https://www.npmjs.com/package/dsh-context) | Context insight panel — a Context tab in the dsh web UI showing what the model's context window is made of and how it evolves. | 0.1.0-rc.8 (2026-08-20) |
| dsh-infinite-gen-2 | 4053 | [Minglink/dsh-infinite-gen-5](https://github.com/Minglink/dsh-infinite-gen-5) | DeepSeek-V4.1 / V4 Flash 网络安全红队工具（无限四代）v0.4.0：双层协同注入内核 + 零工具面纯净直出，融合通用内核与强化镜像车道、profile 元数据工具、实时会话投影与客户端状态条。 | 0.1.1-rc.2 (2026-09-18) |
| ReMe | 3773 | [agentscope-ai/ReMe](https://github.com/agentscope-ai/ReMe/tree/HEAD/packages/typescript) | ReMe client and memory integrations for TypeScript agents | 0.1.0-rc.8 (2026-08-25) |
| DSH-Desktop-EAC | 3101 | [Ebony-Vinyl/EAC-Desktop](https://github.com/Ebony-Vinyl/EAC-Desktop/tree/HEAD/dsh-desktop/assets/plugins/dsh-change-review) | AI 变更审核（DSH Desktop 配套插件）：监控会话的文件更改投影（fileChanges），手动或自动向当前对话发送审核请求，让 AI 复查自己刚做的改动（正确性 / 安全性 / 目标一致性），配合「文件」页的一键还原使用 | 0.1.1-rc.2 (2026-09-18) |
| memsearch | 2843 | [zilliztech/memsearch](https://github.com/zilliztech/memsearch/tree/HEAD/plugins/dsh) · [npm](https://www.npmjs.com/package/@zilliz/memsearch-dsh) | MemSearch plugin for DeepSeek Harness: shared markdown memory across agents, with capture, pre-step context injection, memory-recall skill, and a skill-candidate review panel. | 0.1.0-rc.8 (2026-08-24) |
| memmy-agent | 2204 | [MemTensor/memmy-agent](https://github.com/MemTensor/memmy-agent/tree/HEAD/Memory/adapters/dsh) | Local-first agent memory substrate with desktop and CLI surfaces. | 0.1.1-rc.2 (2026-09-09) |
| memorax-code | 2050 | [memorax-ai/memorax-code](https://github.com/memorax-ai/memorax-code/tree/HEAD/packages/ts/memorax-code-dsh-adapter) | DeepSeek Harness native memory adapter for MemoraX Code. | 0.2.1-rc.5 (2026-11-03) |
| dsh-blender-plugin | 1900 | [sixtysevenlf/dsh-blender-plugin](https://github.com/sixtysevenlf/dsh-blender-plugin) | DSH × Blender 直连实时插件【分享版】：15 个工具（看视口 + 自定义视角 / 跑 Python 与跑文件 / 连续观察 / Blender 侧内环迭代 / addon 命令透传 / 渲染性能预设 / 对象精简 / 无头进程 / 热无头会话 / 事务回滚 / 作业层 / 通道运维与租约；QC、多视角渲染 harness 与契约层走 blender_rt_plan）；自带 | 0.1.1-rc.2 (2026-09-18) |
| deja-vu | 1458 | [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu/tree/HEAD/extensions/dsh) · [npm](https://www.npmjs.com/package/dsh-deja) | Brings the session history of nineteen other coding agents into DeepSeek Harness: recall, session digest and per-file history tools over a local index, plus optional automatic recall before each step. | 0.1.0-rc.8 (2026-08-24) |
| mem9 | 1235 | [mem9-ai/mem9](https://github.com/mem9-ai/mem9/tree/HEAD/dsh-plugin) · [npm](https://www.npmjs.com/package/@mem9/dsh-plugin) | Mem9 persistent memory for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-mnemon ⭐ | 945 | [omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) · [npm](https://www.npmjs.com/package/dsh-mnemon) | Local-first three-tier memory for dsh: runtime memory, searchable documents, and supervised memory spaces. | 0.1.0-rc.8 (2026-08-20) |
| MindMemOS | 929 | [mindscale-noah/MindMemOS](https://github.com/mindscale-noah/MindMemOS/tree/HEAD/plugins/deepseek-harness-plugin) · [npm](https://www.npmjs.com/package/@mindmemos/deepseek-harness-plugin) | DeepSeek Harness (dsh) plugin that recalls and writes MindMemOS memories through the mindmemos CLI. | 0.1.1-rc.2 (2026-09-04) |
| DSH-X | 776 | [yyh-001/DSH-X](https://github.com/yyh-001/DSH-X/tree/HEAD/plugins/dsh-x-memory) · [npm](https://www.npmjs.com/package/dsh-x-memory) | 文件式长期记忆：一条事实一个 Markdown 文件 + MEMORY.md 索引，按工作区隔离、会话级注入，给 agent 六个读写工具，设置页里可浏览与编辑。照 ZCode 那套记忆语义实现。File-based long-term memory for DeepSeek Harness… | 0.1.7-rc.2 (2026-09-29) |
| thoughtdag | 754 | [chenxiachan/thoughtdag](https://github.com/chenxiachan/thoughtdag/tree/HEAD/dsh) · [npm](https://www.npmjs.com/package/dsh-thoughtdag) | ThoughtDAG for DeepSeek Harness: turn the current DSH session into an editable thought graph on an infinite canvas. | 0.1.1-rc.2 (2026-09-09) |
| dsh-memory-evolve | 729 | [csyangwen/dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) | 为 DeepSeek Harness 带来分层记忆（全局 / 用户 / 项目 / GIT 分支 / 每日）与自我进化（经验沉淀 + 技能自动创建）和技能管理、待办管理、CLI 调度（kimi/codex/grok/hermes 等外部 AI 统一调度）、临时信息便签，带 WebUI 管理界面。 | 0.1.0-rc.8 (2026-08-20) |
| graph-memory | 673 | [adoresever/graph-memory](https://github.com/adoresever/graph-memory) · [npm](https://www.npmjs.com/package/graph-memory) | Knowledge graph memory for DeepSeek Harness and OpenClaw — cross-session recall, PageRank, communities, and vector search | 0.1.0-rc.8 (2026-08-20) |
| ccteam | 645 | [firstintent/ccteam](https://github.com/firstintent/ccteam/tree/HEAD/dsh-plugins/ccteam-ui) · [npm](https://www.npmjs.com/package/@ccteam/ccteam-ui) | ccteam inside the DeepSeek Harness: the workbench in DSH web (cross-harness session tree, native-grade chat, one-click spawn), the six ccteam MCP tools for DSH agents… | 0.1.1-rc.2 (2026-09-09) |
| sandbase-harness | 641 | [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) | Local-first, self-hosted AI agent runtime with Claude Managed Agents-style APIs, sandboxed sessions, memory, tools, audit, replay, and a local Console. | 0.1.0-rc.8 (2026-08-20) |
| dsh-memory | 637 | [FuRongJun-1999/dsh-memory](https://github.com/FuRongJun-1999/dsh-memory) · [npm](https://www.npmjs.com/package/@furongjun1999/dsh-memory) | 灵枢（Lingshu·líng shū）DeepSeek Harness 插件：完整大脑——长期记忆/知识飞轮/自我认知/递归反思接入 DSH，对话自动沉淀进记忆库 | 0.1.0-rc.8 (2026-08-20) |
| dsh-dafeiyu | 605 | [QCYTSN/dsh-dafeiyu](https://github.com/QCYTSN/dsh-dafeiyu) · [npm](https://www.npmjs.com/package/dsh-dafeiyu) | A desktop-native BigFish companion driven by DeepSeek Harness session events. | 0.1.0-rc.8 (2026-08-20) |
| dsh-fish-memory | 504 | [Yuuyuko-uu/dsh-fish-memory](https://github.com/Yuuyuko-uu/dsh-fish-memory) | 给 DSH 里的会话一份会淡忘的长期记忆，每条都带时间。 | 0.1.7-rc.2 (2026-09-29) |
| operator-memory | 504 | [aerovato/operator-memory](https://github.com/aerovato/operator-memory/tree/HEAD/packages/deepseek) · [npm](https://www.npmjs.com/package/@aerovato/operator-deepseek) | Operator Memory adapter for DeepSeek Harness. | 0.2.1-rc.2 (2026-10-26) |

<sub>Showing the 25 most-starred of 4715. **[all 4715 →](lists/memory-sessions.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Models & providers

Providers, routing, fallbacks, subscription adapters.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-our-free-model | 66815 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | Our Free Model — 在 dsh 里装上这个插件即可，无需登录、注册或填 API Key，就能使用包括 Muse Spark 1.3、MiMo V2.6 在内的前沿模型，完全免费不限量；模型清单随上游更新、地区可用性自动探测、思考强度真实生效，另附 Token 热力图与吞吐看板和 OpenAI 格式本地转发端口。 | 0.1.7-rc.2 (2026-09-29) |
| dsh-purge | 20359 | [HunYiSage/dsh-purge](https://github.com/HunYiSage/dsh-purge) | DeepSeek Harness 破甲：所有模型都可破甲，不同模型可换不同提示词；默认提示词面向国模「小码酱」。Jailbreak for every model. 求 Star | 0.1.1-rc.2 (2026-09-02) |
| dsh-routing-suite-yjh05110 | 7010 | [yjh051108/dsh-routing-suite](https://github.com/yjh051108/dsh-routing-suite) | dsh-routing-suite 分发入口：DSH 超级模组注入器（BepInEx 式运行时注入，免重启）+ router-standard 预设仓库。插件入口为 injector/，预设位于 preset/。 | 0.1.1-rc.2 (2026-09-18) |
| dsh-purge-mmparko | 3758 | [mmparko/dsh-purge](https://github.com/mmparko/dsh-purge) | DeepSeek Harness 破甲：让所有模型都能破甲，不同模型可换不同提示词；默认提示词面向国模「小码酱」。Jailbreak for every model — swap prompts per model. 求 Star 收藏 如要二开，请查看署名要求部分 | 0.2.0-rc.2 (2026-10-17) |
| dsh-image-gen-shanliul | 1190 | [shanliuling/dsh-image-gen](https://github.com/shanliuling/dsh-image-gen) · [npm](https://www.npmjs.com/package/dsh-image-gen) | Bring ChatGPT-like image generation to DeepSeek Harness — Gemini, OpenAI, Seedream & more. | 0.1.0-rc.8 (2026-08-20) |
| dsh-model-router-alicemar | 946 | [Alice-Marx/dsh-model-router](https://github.com/Alice-Marx/dsh-model-router) · [npm](https://www.npmjs.com/package/@ljwei-stak/dsh-model-route-bot) | Model Router for official DeepSeek Harness Desktop: cost-aware task routing, dependent work packages and official vendor CLI discovery, installation and execution. | 0.2.1-rc.2 (2026-10-26) |
| api-relay-audit | 908 | [toby-bridges/api-relay-audit](https://github.com/toby-bridges/api-relay-audit) | DeepSeek Harness bundle for running API Relay Audit locally | 0.1.0-rc.8 (2026-08-20) |
| dsh-purge-plus-jeffkeep | 547 | [JeffKeeping/dsh-purge-plus](https://github.com/JeffKeeping/dsh-purge-plus) | DeepSeek Harness 破甲：让所有模型都能破甲，不同模型可换不同提示词；默认提示词面向国模「小码酱」。Jailbreak for every model — swap prompts per model. 求 Star 收藏 如要二开，请查看署名要求部分 | 0.2.1-rc.2 (2026-10-19) |
| dsh-commandcode-provider-mars-sea | 467 | [Mars-Sea/dsh-commandcode-provider](https://github.com/Mars-Sea/dsh-commandcode-provider) · [npm](https://www.npmjs.com/package/@mars-sea/dsh-commandcode-provider) | DeepSeek Harness LLM provider plugin for Command Code, ported from pi-commandcode-provider (MIT). Registers the 'commandcode' provider route with a Models-page card and live model catalog. | 0.1.0-rc.8 (2026-08-20) |
| marketingdashboard | 453 | [theBigGavin/marketingdashboard](https://github.com/theBigGavin/marketingdashboard) · [npm](https://www.npmjs.com/package/my-app) | 面向金融与产业研究的一屏式实时行情大屏：A股/港股/美股指数、大宗商品、美债收益率、板块热点、主力资金流、7×24 快讯、产业链自选股、AI 大模型 Token 追踪。A real-time market research cockpit on a single screen: CN/HK/US indices, commodities, treasury yields… | 0.1.1-rc.2 (2026-09-01) |
| opencode2dsh | 386 | [FishBottle7/opencode2dsh](https://github.com/FishBottle7/opencode2dsh) | Free OpenCode Zen models for DeepSeek Harness (DSH): native dsh-llm adapter plugin, no API key. | 0.1.1-rc.2 (2026-09-01) |
| dsh-opencode-go-duskrive | 283 | [Duskriver/dsh-opencode-go](https://github.com/Duskriver/dsh-opencode-go) · [npm](https://www.npmjs.com/package/dsh-opencode-go) | OpenCode Go model provider and settings UI for DeepSeek Harness | 0.1.1-rc.2 (2026-09-18) |
| dsh-sd-bridge-guard | 264 | [savinglighting/dsh-sd-bridge-guard](https://github.com/savinglighting/dsh-sd-bridge-guard) · [npm](https://www.npmjs.com/package/dsh-sd-bridge-guard) | DeepSeek Harness 插件：本机 Stable Diffusion 生图九件套（文生图/图生图/蒙版重绘/只生成脚本/双版本对齐脚本/C 档本地注入命令/模型清单/服务管理/完整性检测）+ 违规分流协议 + C 档选项表（A 档出图后罗列模型/LoRA/比例等，一句话即可重出图）；C 档蒙版支持鼠标手绘。 | 0.2.1-rc.5 (2026-11-03) |
| dsh-purge-zxeb | 248 | [ZXEB/dsh-purge](https://github.com/ZXEB/dsh-purge) | DeepSeek Harness 破甲：让所有模型都能破甲，不同模型可换不同提示词；默认提示词面向国模「小码酱」。Jailbreak for every model — swap prompts per model. 求 Star 收藏 如要二开，请查看署名要求部分 | 0.2.1-rc.2 (2026-10-26) |
| bothouse | 182 | [zuiho-kai/bothouse](https://github.com/zuiho-kai/bothouse/tree/HEAD/bridge/core/dsh_bundle/collab) | BotHouse channels for DeepSeek Harness: Discord-style rooms where DSH models and local CLIs (Claude Code, Codex, Gemini) are members | 0.2.1-rc.5 (2026-11-03) |
| dsh-agy-link | 160 | [amlyczz/dsh-agy-link](https://github.com/amlyczz/dsh-agy-link) · [npm](https://www.npmjs.com/package/dsh-agy-link) | Google Antigravity (agy CLI) models for DeepSeek Harness — stream Gemini/Claude/GPT-OSS subscriptions into DSH with thinking, tool activity, token usage and in-GUI Google OAuth login. | 0.1.0-rc.8 (2026-08-20) |
| dsh-providers-hub | 122 | [iJetLi/dsh-providers-hub](https://github.com/iJetLi/dsh-providers-hub) · [npm](https://www.npmjs.com/package/dsh-providers-hub) | DeepSeek Harness plugin: one hub for AI coding providers — account login, multi-account pools, silent credential refresh, credit claiming, and a local OpenAI-compatible gateway | 0.2.0-rc.2 (2026-10-17) |
| dsh-purge-realmisa | 103 | [realMisakaMikoto/dsh-purge](https://github.com/realMisakaMikoto/dsh-purge) | DeepSeek Harness 破甲：让所有模型都能破甲，不同模型可换不同提示词；默认提示词面向国模「小码酱」。Jailbreak for every model — swap prompts per model. 求 Star 收藏 如要二开，请查看署名要求部分 | 0.2.0-rc.2 (2026-10-17) |
| deep-blend | 102 | [pearjelly/deep-blend](https://github.com/pearjelly/deep-blend/tree/HEAD/packages/deepblend/bundle) · [npm](https://www.npmjs.com/package/@deepblend/dsh-blender-bundle) | DeepBlend Studio Host Bundle: composes the Blender runtime provider, host facade and UI host half, with default configuration. | 0.1.7-rc.2 (2026-09-29) |
| dsh-knowledge-sorenabt | 97 | [Soren-ABT/dsh-knowledge](https://github.com/Soren-ABT/dsh-knowledge) · [npm](https://www.npmjs.com/package/dsh-knowledge) | Cherry Studio-style knowledge base system for DeepSeek Harness (DSH): bases, documents, chunking, embeddings (OpenAI-compatible / Ollama / local / lexical fallback), retrieval, model-facing tools… | 0.1.0-rc.8 (2026-08-20) |
| dsh-llm-codebuddy-axiaohungry | 97 | [Axiaohungry/dsh-llm-workbuddy](https://github.com/Axiaohungry/dsh-llm-workbuddy) · [npm](https://www.npmjs.com/package/@axiaohungry/dsh-llm-workbuddy) | 通过 WorkBuddy API Key 或 WorkBuddy 登录令牌为 DeepSeek Harness 接入 WorkBuddy 模型 | 0.2.1-rc.5 (2026-11-03) |
| dsh-codex | 96 | [Yan-Zero/dsh-codex](https://github.com/Yan-Zero/dsh-codex) · [npm](https://www.npmjs.com/package/dsh-codex) | Use a ChatGPT subscription in DeepSeek Harness through OpenAI Codex sign-in, with Codex models, search, and image tools. | 0.1.0-rc.8 (2026-08-20) |
| dsh-chatgpt-subscription | 89 | [Aa728848/dsh-chatgpt-subscription](https://github.com/Aa728848/dsh-chatgpt-subscription) · [npm](https://www.npmjs.com/package/@eddyskywalker/dsh-chatgpt-subscription) | DSH provider plugin for Codex access through a ChatGPT subscription. | 0.1.0-rc.8 (2026-08-20) |
| dsh-qwen-paint-wonderan | 83 | [wonderandyou/dsh-qwen-paint](https://github.com/wonderandyou/dsh-qwen-paint) | 【(绘图)千问 · @奇迹与你】让 DeepSeek Harness 在对话里直接调用本机 ComfyUI（千问 Qwen-Image 模型）画图：说一句「画一只猫」就出图，图片落盘到千问1生图目录并在聊天框里直接显示。只走本机 127.0.0.1，不出网、不花钱、不需要任何 API Key。 | 0.2.0-rc.2 (2026-10-17) |
| dockyard-dsh | 77 | [AITabby/dockyard-dsh](https://github.com/AITabby/dockyard-dsh) | A macOS-only native account-pool and provider plugin for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 2143. **[all 2143 →](lists/models-providers.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Interop & migration

Bridges to and from Claude Code, Codex, and other harnesses.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-hooks-claude-code (official) | 277021 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/hooks/hooks-claude-code) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-hooks-claude-code) | Bridge plugin: runs an existing Claude Code hooks.json on the harness interception seams (command hooks only; http, mcp_tool, prompt, and agent hooks are skipped with a warning) | 0.1.0-rc.5 (2026-08-13) |
| dsh-hooks-codex (official) | 277021 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/hooks/hooks-codex) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-hooks-codex) | Bridge plugin: runs a Codex hooks.json on the harness interception seams (regex-only matchers, snake_case payloads, only blocking decisions honored) | 0.1.0-rc.5 (2026-08-13) |
| petdex | 4348 | [crafter-station/petdex](https://github.com/crafter-station/petdex/tree/HEAD/packages/petdex-desktop-native/integrations/dsh) | A public gallery of animated pets for Codex, Claude Code, DeepSeek Harness, Hermes, OpenCode, Gemini CLI, and more. | 0.1.0-rc.8 (2026-08-20) |
| Study-Mate | 1395 | [Miaotofu01/Study-Mate](https://github.com/Miaotofu01/Study-Mate) · [npm](https://www.npmjs.com/package/@yunmiao/studymate) | StudyMate learning skills and lesson engine for DeepSeek Harness, Google Antigravity, Codex and ChatGPT Work. | 0.1.7-rc.2 (2026-09-29) |
| harness-mix | 621 | [emo-xiaoyu/harness-mix](https://github.com/emo-xiaoyu/harness-mix) · [npm](https://www.npmjs.com/package/@harness-mix/cli) | Harness Mix native Codex UI bridge for Codex, Pi, Claude Code, DeepSeek Harness, Antigravity, CodeBuddy, Kiro CLI, Cursor CLI and other native coding harnesses. | 0.2.0-rc.2 (2026-09-30) |
| dsh-plugin-subscriptions | 574 | [V1ki/dsh-plugin-subscriptions](https://github.com/V1ki/dsh-plugin-subscriptions) · [npm](https://www.npmjs.com/package/dsh-plugin-subscriptions) | Use ChatGPT (Codex), Claude, and Grok (X Premium) subscriptions as DeepSeek Harness LLM providers, with OAuth login from the web Settings page | 0.1.0-rc.8 (2026-08-20) |
| flowix | 498 | [text2future/flowix](https://github.com/text2future/flowix/tree/HEAD/dsh-appserver) | Codex app-server-shaped protocol adapter for DeepSeek Harness | 0.1.1-rc.2 (2026-09-09) |
| codex-bridge | 310 | [Fanch-hui/codex-bridge](https://github.com/Fanch-hui/codex-bridge/tree/HEAD/Packages/BridgeCore/Sources/BridgeDeepSeekHarnessDesktop/Resources/DSHDesktopConnector) | Connect Codex Bridge to native DeepSeek Harness Desktop sessions | 0.2.1-rc.2 (2026-10-26) |
| dsh-chat-import | 297 | [Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) · [npm](https://www.npmjs.com/package/dsh-chat-import) | Import Claude Code / Codex / ChatGPT / Cursor / Gemini / Reasonix / Pi Coding Agent / opencode / ZCode / Grok Build / OpenClaw / Hermes conversation histories as resumable DeepSeek Harness sessions | 0.1.0-rc.8 (2026-08-20) |
| dsh-codex-ui | 280 | [MichengAI/dsh-codex-ui](https://github.com/MichengAI/dsh-codex-ui) · [npm](https://www.npmjs.com/package/@michengai/dsh-codex-ui) | 以 Codex 风格重构 DSH Web 侧栏的独立客户端插件 | 0.1.0-rc.8 (2026-08-20) |
| dsh-reasoning-effort | 270 | [HanaAyane/dsh-reasoning-effort](https://github.com/HanaAyane/dsh-reasoning-effort) | Codex-style DeepSeek Harness model and reasoning selector with off/high/max snapping, DSH-native themes, and left-clipped radiation effects. | 0.1.0-rc.8 (2026-08-20) |
| jev-dsh-decision | 270 | [Devin-AXIS/jev-dsh-decision](https://github.com/Devin-AXIS/jev-dsh-decision) | Jev Decision Engine for Agent Harnesses: native DeepSeek Harness, plus OpenCode and Codex Harness through iPolloWork | 0.1.7-rc.2 (2026-09-29) |
| dsh-codex-effort-slider | 255 | [Microqian2th/dsh-codex-effort-slider](https://github.com/Microqian2th/dsh-codex-effort-slider) · [npm](https://www.npmjs.com/package/dsh-codex-effort-slider) | Codex 风格的推理等级滑条：把 DSH 输入框工具行的推理等级档位换成一条可拖动的连续滑条 / A Codex-style reasoning-effort slider for DeepSeek Harness | 0.2.0-rc.2 (2026-10-05) |
| pi2dsh | 217 | [weijiafu14/pi2dsh](https://github.com/weijiafu14/pi2dsh) · [npm](https://www.npmjs.com/package/pi2dsh) | Bridge the Pi and DeepSeek Harness ecosystems: a general Pi Host ABI that runs unmodified Pi extensions as native DSH plugins, plus per-package conversion and MCP config translation. | 0.1.0-rc.8 (2026-08-20) |
| dsh-crew | 205 | [ZSeven-W/dsh-crew](https://github.com/ZSeven-W/dsh-crew) · [npm](https://www.npmjs.com/package/@zseven-w/dsh-crew) | DeepSeek Harness plugin: dispatch work to DSH agents from Claude Code / Codex, as native subagents with live progress | 0.1.0-rc.8 (2026-08-20) |
| dsh-baton-jialaoli | 202 | [JialaoLiu/dsh-baton](https://github.com/JialaoLiu/dsh-baton/tree/HEAD/host) · [npm](https://www.npmjs.com/package/dsh-baton-host) | DeepSeek Harness plugin for dsh-baton: adding it is the whole install. Switched on, it registers the dsh-baton MCP server for Claude Code and Codex, then takes the baton over a local… | 0.2.1-rc.2 (2026-10-26) |
| dsh-codex-connect | 180 | [franksong2702/dsh-codex-connect](https://github.com/franksong2702/dsh-codex-connect) · [npm](https://www.npmjs.com/package/dsh-codex-connect) | ChatGPT OAuth and Codex models for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-qq-bridge-yuuyukou | 180 | [Yuuyuko-uu/dsh-qq-link](https://github.com/Yuuyuko-uu/dsh-qq-link) · [npm](https://www.npmjs.com/package/dsh-qq-link) | 通到 QQ：DSH 里的 AI 伙伴和 QQ 双向互通 —— 它说完话自动发到 QQ，你在 QQ 里说的话自动转进 DSH。走 OneBot 11 HTTP（SnowLuma / NapCat 都行）。 | 0.2.1-rc.2 (2026-10-26) |
| ScientificFigureLibrary | 138 | [xuzhougeng/ScientificFigureLibrary](https://github.com/xuzhougeng/ScientificFigureLibrary) · [npm](https://www.npmjs.com/package/scientific-figure-library) | Local image-code knowledge library with native macOS and local Web clients, plus MCP and Skill for Pi, DeepSeek Harness (dsh), Claude, Codex, Cursor, and Wisp. | 0.1.7-rc.2 (2026-09-29) |
| dsh-opencode-palette | 104 | [FeatherHunter/dsh-opencode-palette](https://github.com/FeatherHunter/dsh-opencode-palette/tree/HEAD/package) · [npm](https://www.npmjs.com/package/dsh-opencode-palette) | 让 DeepSeek Harness 穿上 34 款经典皮肤——东京的霓虹夜色、德古拉的暗红月光、复古工坊的暖黄灯火、黑客帝国的数字雨、玫瑰松林间的风……一键换肤，即点即换，重启不丢。34 legendary skins for DeepSeek Harness — tokyonight's neon dusk, dracula's crimson moon, gruvbox's retro | 0.1.0-rc.8 (2026-08-20) |
| dsh-multica-runtime | 77 | [multica-ai/dsh-multica-runtime](https://github.com/multica-ai/dsh-multica-runtime) | Private DeepSeek Harness runtime bridge for Multica | 0.2.0-rc.2 (2026-10-05) |
| AgentDebugX | 72 | [AgentDebugX/AgentDebugX](https://github.com/AgentDebugX/AgentDebugX/tree/HEAD/integrations/dsh-agentdebugx) · [npm](https://www.npmjs.com/package/dsh-agentdebugx) | DeepSeek Harness plugin bridge for AgentDebugX diagnostics | 0.1.1-rc.2 (2026-08-26) |
| deepseek-harness-acp | 63 | [openma-ai/deepseek-harness-acp](https://github.com/openma-ai/deepseek-harness-acp) · [npm](https://www.npmjs.com/package/@openma/deepseek-harness-acp) | Agent Client Protocol (ACP) adapter for DeepSeek Harness — use DeepSeek Harness from ACP clients such as Zed. | 0.1.0-rc.8 (2026-08-20) |
| dsh-browser-control-caob23 | 62 | [angelky7/dsh-browser-control](https://github.com/angelky7/dsh-browser-control) · [npm](https://www.npmjs.com/package/@angelky7/dsh-browser-control) | Local WebSocket bridge between dsh and the DSH Browser Control browser extension, with model-facing browser_* tools and a Settings-managed on/off switch | 0.1.0-rc.8 (2026-08-24) |
| dsh-purge-555bbbaa | 61 | [555bbbAAA/dsh-purge](https://github.com/555bbbAAA/dsh-purge) | DeepSeek Harness 本地兼容插件：官方更新后运行时缺件自愈，补丁换包与状态可查。 | 0.2.1-rc.5 (2026-11-02) |

<sub>Showing the 25 most-starred of 988. **[all 988 →](lists/interop-migration.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Channels & remote

IM bridges and remote control: Feishu, Telegram, WeCom, DingTalk.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-superagent-prototype | 21540 | [deepseek-ai/dsh-superagent-prototype](https://github.com/deepseek-ai/dsh-superagent-prototype) | A proactive agent for one GitHub repository, as a DSH (DeepSeek Harness) bundle: it listens to GitHub and optionally Feishu, evaluates requests under a Policy, turns authorized ones into Tickets… | 0.2.1-rc.5 (2026-11-02) |
| qq-bridge | 3605 | [Derpyu520/qq-bridge](https://github.com/Derpyu520/qq-bridge) | Bridge between SnowLuma (OneBot v11 / QQ) and DeepSeek Harness Web API: QQ messages become DSH agent prompts, agent replies go back to QQ. | 0.1.1-rc.2 (2026-09-18) |
| dsh-qqbot | 568 | [tencent-connect/dsh-qqbot](https://github.com/tencent-connect/dsh-qqbot) · [npm](https://www.npmjs.com/package/@tencent-connect/dsh-qqbot) | QQ Bot IM channel plugin for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-aurabot-qq | 517 | [aureth-labs/dsh-aurabot-qq](https://github.com/aureth-labs/dsh-aurabot-qq) | Aurabot：住在 QQ 里的 AI 伙伴「大肥鱼」—— DeepSeek Harness 插件（经 SnowLuma / OneBot v11 接 QQ） | 0.2.1-rc.2 (2026-10-26) |
| dsh-wechat-xcisxc29 | 421 | [xcisxc29/dsh-wechat](https://github.com/xcisxc29/dsh-wechat) | WeChat channel for DeepSeek Harness | 0.2.0-rc.2 (2026-10-17) |
| dsh-bridge-wenbinwb | 251 | [wenbin-wb/dsh-bridge](https://github.com/wenbin-wb/dsh-bridge) · [npm](https://www.npmjs.com/package/@wenbin_wb/dsh-bridge) | 手机扫码即可在移动端/公网继续用 DeepSeek Harness，人不在电脑前也能接着干。一键局域网二维码、Cloudflare 公网隧道、自建隧道与微信 Bot（多工作区/会话持久化/媒体/审批），无需自己搭公网服务器。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-qqbot-gcry1306 | 236 | [zaofan-make/dsh-qqbot](https://github.com/zaofan-make/dsh-qqbot) · [npm](https://www.npmjs.com/package/@zaofan/dsh-qqbot) | QQ Bot IM channel plugin for deepseek-harness (dsh) | 0.1.7-rc.2 (2026-09-29) |
| deepbot | 227 | [rlaope/deepseek-bot](https://github.com/rlaope/deepseek-bot) · [npm](https://www.npmjs.com/package/deepbot) | A standalone, always-on agent built on DeepSeek Harness. Slack Socket Mode platform adapter + durable sessions + a memory-ready gateway profile. | 0.2.0-rc.2 (2026-10-07) |
| dsh-im-connect | 130 | [MichengAI/dsh-im-connect](https://github.com/MichengAI/dsh-im-connect) · [npm](https://www.npmjs.com/package/@michengai/dsh-im-connect) | DeepSeek Harness IM 助理：把本机 agent 接到微信、企微、钉钉、飞书、QQ、Telegram，会话与网页任务分列。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-weread-zhaohong | 99 | [zhaohongxuan/dsh-weread](https://github.com/zhaohongxuan/dsh-weread) | DeepSeek Harness (dsh) plugin: manage your WeChat Reading shelf, view highlights/notes, reading stats, and AI summaries powered by dsh's LLM. | 0.2.2-rc.1 (2026-11-07) |
| dsh-notifier-thewolfw | 62 | [THEWOLFWALKER/dsh-notifier](https://github.com/THEWOLFWALKER/dsh-notifier) · [npm](https://www.npmjs.com/package/dsh-notifier) | DSH 统一通知推送插件：一个 notify() API 打天下 + 多渠道 adapter（telegram/dingtalk/feishu/wxpusher/pushplus/serverchan/bark/webhook），两条触发线（session/event 自动推送 + agent 工具调用）共用 adapter 注册表。零运行时依赖（只用 fetch + node:crypto）。 | 0.1.0-rc.8 (2026-08-20) |
| ax-feishu-bridge | 59 | [AX1202/ax-feishu-bridge](https://github.com/AX1202/ax-feishu-bridge) · [npm](https://www.npmjs.com/package/ax-feishu-bridge) | Feishu/Lark bridge for coding agents — chat with Pi or DeepSeek Harness from Feishu or Lark | 0.1.0-rc.8 (2026-08-20) |
| dsh-im-gateway-zhuiyuey | 59 | [zhuiyueya/dsh-im-gateway](https://github.com/zhuiyueya/dsh-im-gateway) | 聚合 IM 网关插件（DeepSeek Harness）：把 dsh agent 接入 Telegram / Discord / Slack / 飞书 / 微信 / QQ / WhatsApp / Signal / Teams / LINE / Matrix / Mattermost / Google Chat / IRC / Twitch / Nostr / Nextcloud Talk / | 0.1.0-rc.8 (2026-08-20) |
| dsh-lark | 59 | [omdsh-dev/dsh-lark](https://github.com/omdsh-dev/dsh-lark) · [npm](https://www.npmjs.com/package/dsh-lark-channel) | Lark/Feishu IM bot channel: chats drive agents, replies and approvals come back as messages and cards. | 0.1.0-rc.8 (2026-08-20) |
| dsh-wechat | 51 | [pan17/dsh-wechat](https://github.com/pan17/dsh-wechat) · [npm](https://www.npmjs.com/package/dsh-wechat) | Bridge WeChat (iLink bot) to DeepSeek Harness (DSH) | 0.1.0-rc.8 (2026-08-20) |
| dsh-qq-plugin | 46 | [xcisxc29/dsh-qq-plugin](https://github.com/xcisxc29/dsh-qq-plugin) · [npm](https://www.npmjs.com/package/dsh-qq-plugin) | QQ channel for DeepSeek Harness: drive the agent on your computer from your phone in QQ. Runs on Tencent's official QQ bot platform, so no public IP and no reverse proxy are needed. | 0.2.0-rc.2 (2026-10-17) |
| dsh-lark-link | 45 | [amlyczz/dsh-lark-link](https://github.com/amlyczz/dsh-lark-link) · [npm](https://www.npmjs.com/package/dsh-lark-link) | High-reliability Feishu/Lark bridge for DeepSeek Harness — QR one-click auth, multi-mode agents, card-based commands, zero-loss outbox, media in/out, session logs, reusable DSH Web GUI | 0.1.0-rc.8 (2026-08-20) |
| dsh-lark-bot | 41 | [PlutoKeating/dsh-lark-bot](https://github.com/PlutoKeating/dsh-lark-bot) · [npm](https://www.npmjs.com/package/dsh-lark-bot) | Bridge DeepSeek Harness into Feishu/Lark with streaming cards, project workspaces, approvals, and scheduling. | 0.1.0-rc.8 (2026-08-20) |
| dsh-email | 39 | [STARDUSTLC666/dsh-email](https://github.com/STARDUSTLC666/dsh-email) · [npm](https://www.npmjs.com/package/dsh-email) | IMAP/SMTP email tools for DeepSeek Harness: list, read, search and send mail, with QQ/163/126/Sina/Aliyun/Gmail/Outlook/iCloud presets. | 0.1.0-rc.8 (2026-08-20) |
| dsh-feishu-pgzxb | 37 | [PGZXB/dsh-feishu](https://github.com/PGZXB/dsh-feishu) · [npm](https://www.npmjs.com/package/@dsh-feishu/dsh-feishu) | The Feishu UI for DeepSeek Harness (dsh) — a dsh-native plugin: live streaming cards, in-card questions & approvals, one-QR setup. | 0.1.0-rc.8 (2026-08-20) |
| qq-bridge-plus | 35 | [adj18311/qq-bridge-plus](https://github.com/adj18311/qq-bridge-plus/tree/HEAD/plugins/qq-agent-presets) | qq-bridge 的 DSH agent preset bundle：把 qq-chat / qq-chat-v2 作为 @deepseek-ai/dsh-agent-preset 行插入（DSH 0.1.7+ 的 preset 机制），并携带两个 preset 共用的 qq-tool-restrict 安全守卫 | 0.2.0-rc.2 (2026-10-05) |
| dsh-lark-bridge-bihangch | 34 | [bihangchi9-creator/lark-agent-bridge](https://github.com/bihangchi9-creator/lark-agent-bridge) · [npm](https://www.npmjs.com/package/@bihangchi9/lark-agent-bridge) | A DeepSeek Harness (dsh) plugin that bridges dsh agents to Feishu/Lark group chats — one group, one project directory. | 0.1.0-rc.8 (2026-08-20) |
| qq-dsh-bridge | 33 | [NoMindSama/qq-dsh-bridge](https://github.com/NoMindSama/qq-dsh-bridge/tree/HEAD/dsh-plugins/dsh-thinking-zh) | DSH Desktop 浮游球工具箱：可拖动的角落小球，面板里以开关形式管理功能（当前含「思考链中文」） | 0.2.1-rc.5 (2026-11-02) |
| dsh-qq-bridge-tomoyona | 28 | [TomoyoNatsume/dsh-qq-bridge](https://github.com/TomoyoNatsume/dsh-qq-bridge) · [npm](https://www.npmjs.com/package/@yachangchang/dsh-qq-bridge) | A pluggable DSH host plugin that connects QQ (NapCat/OneBot) and forwards messages to DSH agents / local capabilities. | 0.1.1-rc.2 (2026-09-09) |
| dsh-lark-sugarfor | 26 | [sugarforever/dsh-lark](https://github.com/sugarforever/dsh-lark) · [npm](https://www.npmjs.com/package/@sugarforever/dsh-lark) | Feishu/Lark WebSocket channel plugin for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 718. **[all 718 →](lists/channels-remote.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Notifications

Alerting the human: desktop, sound, even a phone call.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-notify-me | 114 | [chromoany/dsh-notify-me](https://github.com/chromoany/dsh-notify-me) · [npm](https://www.npmjs.com/package/dsh-notify-me) | DSH 桌面消息提醒插件：模型需要你操作（审批/方案确认/提问的可操作提醒）或回复在后台完成时，系统通知+提示音+标签页标题提醒你；可在设置页开关并切换通知语言。Desktop notification & message alerts for DeepSeek Harness web — toasts, sounds and a tab-title marker when the agent | 0.1.7-rc.2 (2026-09-29) |
| dsh-notification | 91 | [omdsh-dev/dsh-notification](https://github.com/omdsh-dev/dsh-notification) | Desktop notifications for turn completions, with per-outcome controls and include/exclude keyword rules | 0.1.0-rc.8 (2026-08-20) |
| dsh-zju-assistant | 72 | [Anchorite-no/dsh-zju-assistant](https://github.com/Anchorite-no/dsh-zju-assistant/tree/HEAD/plugin/bundle) · [npm](https://www.npmjs.com/package/dsh-zju-assistant) | ZJU All-in-One Assistant：浙大学生的一站式校园助手，装进 DeepSeek Harness。课表、作业、通知、学习页、日程表，和已授权的选课、预约、交作业 | 0.2.1-rc.5 (2026-11-03) |
| dsh-personal-workbench | 46 | [Dely0/dsh-personal-workbench](https://github.com/Dely0/dsh-personal-workbench) · [npm](https://www.npmjs.com/package/@dely0/dsh-personal-workbench) | DSH 个人工作台：日历 + 层级任务 + AI 澄清/拆解/执行/复盘 + AI 智能排序/日报周报 + 桌面提醒 | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-notify-sounds | 35 | [BillCx330/dsh-plugin-notify-sounds](https://github.com/BillCx330/dsh-plugin-notify-sounds) · [npm](https://www.npmjs.com/package/dsh-plugin-notify-sounds) | Notification sounds for DeepSeek Harness — a soft chime when the agent needs your decision or finishes a task, with a Settings section styled like DSH's own · 需要决策或任务完成时播放提示音，点击系统通知可回到窗口，设置面板可调音量与音效 | 0.2.0-rc.2 (2026-10-17) |
| dsh-web-ui-notify | 34 | [bill9109/dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) | Desktop notifications for approvals, questions, and turn completion so you can leave the dsh tab. | 0.1.0-rc.8 (2026-08-20) |
| dsh-zen-remote | 28 | [KyoMio/dsh-zen-remote](https://github.com/KyoMio/dsh-zen-remote) · [npm](https://www.npmjs.com/package/dsh-zen-remote) | 把 DeepSeek Harness 变成手机 App：移动端界面重排（两级页面栈、会话列表主屏、composer 重排、手势、附件上传）+ 配对码认证网关 + PWA 安装 + 真 Web Push。Complete mobile plugin for DeepSeek Harness (DSH): app-shell mobile UI, pairing-code gateway for | 0.1.0-rc.8 (2026-08-20) |
| dsh-update-checker-airmetro | 22 | [Airmetro/dsh-update-checker](https://github.com/Airmetro/dsh-update-checker) · [npm](https://www.npmjs.com/package/dsh-update-checker) | Auto-check DeepSeek Harness for new releases and notify the user in the Web GUI with a locale-aware banner. | 0.1.0-rc.8 (2026-08-20) |
| dsh-selfwake | 21 | [S3K926/dsh-selfwake](https://github.com/S3K926/dsh-selfwake) · [npm](https://www.npmjs.com/package/dsh-selfwake) | DSH 插件：到点主动开口 —— 四道闸（间隔／安静／未回话上限／静默时段）过了就挑一条开口，优先投进活跃会话，投不进发系统通知 ＋ 写日志。 | 0.1.7-rc.2 (2026-09-29) |
| dsh-prompt-library | 16 | [master1Sun/dsh-prompt-library](https://github.com/master1Sun/dsh-prompt-library) · [npm](https://www.npmjs.com/package/@sunjuntao/dsh-prompt-library) | DSH 提示词库插件：提供提示词库管理（增删改查、分类标签、导入导出、AI 智能优化、选择文本一键剪藏）、侧边栏与词库助手气泡提醒等能力。 | 0.1.0-rc.8 (2026-08-24) |
| dsh-notification-center | 15 | [610la/dsh-notification-center](https://github.com/610la/dsh-notification-center) · [npm](https://www.npmjs.com/package/@lyhalal/dsh-notification-center) | 通知中心：对话/任务完成、报错、等待批准等事件触发浏览器通知 + 21 种匹配音效，每类事件独立配置（音效/文件/URL/音量/开关）。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-auto-retry-zxmqq123 | 13 | [zxmqq1234/dsh-auto-retry](https://github.com/zxmqq1234/dsh-auto-retry) | dsh 自动重试插件：请求级补充重试 / 回合级自动继续 / 无响应看门狗 / 实时通知 / 统计看板 | 0.1.7-rc.2 (2026-09-29) |
| dsh-repeat-guard | 13 | [xiaozhuyuqing/dsh-repeat-guard](https://github.com/xiaozhuyuqing/dsh-repeat-guard) · [npm](https://www.npmjs.com/package/dsh-repeat-guard) | 流式输出退化拦截：检测碎片复读，掐断本次生成并提醒模型直接执行工具调用 | 0.1.7-rc.2 (2026-09-29) |
| dsh-notify-windows | 12 | [SeverusZh/dsh-notify-windows](https://github.com/SeverusZh/dsh-notify-windows) · [npm](https://www.npmjs.com/package/dsh-notify-windows) | DeepSeek Harness (DSH) 插件：任务完成 / 等待审批 / 等待回答时发送 Windows 系统桌面通知 | 0.1.1-rc.2 (2026-09-09) |
| dsh-0-tools | 11 | [ai-yukin/dsh-0-tools](https://github.com/ai-yukin/dsh-0-tools) | DeepSeek Harness 小白零门槛零费用套件：一键接入智谱双免费模型（文本+图片）、DeepSeek 计价时段提醒、在线帮助中心。 | 0.1.0-rc.8 (2026-08-21) |
| dsh-alert-sound | 11 | [Machine-126/dsh-alert-sound](https://github.com/Machine-126/dsh-alert-sound) · [npm](https://www.npmjs.com/package/@machine-126/dsh-alert-sound) | DSH web GUI notification alerts: distinct synthesized tones or a spoken voice (zh/en) for 'needs approval', 'needs answer', 'output complete' and 'error', with per-type sound, enable, volume, repeat | 0.1.0-rc.8 (2026-08-25) |
| dsh-clawbot-cryjkd | 11 | [cryjkd/dsh-clawbot](https://github.com/cryjkd/dsh-clawbot) | 微信官方 ilink 机器人网关绑定+通知+监听（ClawBot）：扫码绑定、微信在线/断线状态、自动通知开关、批准/选择提醒、微信消息监听并自动处理 | 0.1.1-rc.2 (2026-09-04) |
| dsh-ding | 11 | [CAOGGL/dsh-ding](https://github.com/CAOGGL/dsh-ding) · [npm](https://www.npmjs.com/package/dsh-ding) | Play a sound and show a Windows toast when a DeepSeek Harness turn finishes, with a Web UI bell control. | 0.1.0-rc.8 (2026-08-20) |
| dsh-messager | 9 | [ly6170/dsh-messager](https://github.com/ly6170/dsh-messager) · [npm](https://www.npmjs.com/package/dsh-messager) | DeepSeek Harness 通知插件：会话交互/任务完成/出错时通过系统通知、浏览器通知、飞书机器人（webhook）推送提醒 | 0.1.0-rc.8 (2026-08-20) |
| dsh-notify-tray | 9 | [ROYLeXJ/dsh-notify-tray](https://github.com/ROYLeXJ/dsh-notify-tray) · [npm](https://www.npmjs.com/package/dsh-notify-tray) | DeepSeek Harness 通知 + 状态栏插件：任务完成、需要输入、需要选择时弹系统通知（macOS / Windows / Linux）；macOS 与 Linux（含 UOS、Deepin、麒麟）状态栏常驻小图标，显示任务进度与花费。Windows 没有状态栏，只弹通知。 | 0.2.1-rc.2 (2026-10-26) |
| dsh-plugin-call-me | 8 | [radres/dsh-plugin-call-me](https://github.com/radres/dsh-plugin-call-me) | Your DeepSeek Harness agent rings your phone: it asks out loud, you answer out loud, and what you said steers the run. | 0.1.0-rc.8 (2026-08-20) |
| dsh-grafana | 7 | [guhanfei-ai/dsh-grafana](https://github.com/guhanfei-ai/dsh-grafana) · [npm](https://www.npmjs.com/package/dsh-grafana) | Grafana dashboard editor for DeepSeek Harness: paste a dashboard URL, edit JSON via conversation, push back via HTTP API | 0.1.0-rc.8 (2026-08-20) |
| dsh-perlica-ding | 7 | [117BS/dsh-perlica-ding](https://github.com/117BS/dsh-perlica-ding) · [npm](https://www.npmjs.com/package/dsh-perlica-ding) | 佩丽卡终端 (Perlica Terminal)：明日方舟终末地佩丽卡主题的分级任务提示音插件。计划出方案、任务完成、需要你回应、出错时播放不同提示音，普通问答静音。Perlica-themed tiered sound notifications for DeepSeek Harness: plan ready, task done, needs your input, error tones. | 0.1.0-rc.8 (2026-08-20) |
| dsh-lark-meeting-notifier | 6 | [yeruizhi/dsh-lark-meeting-notifier](https://github.com/yeruizhi/dsh-lark-meeting-notifier) | Feishu meeting reminder dock: flash when it is time to leave the agent and join a human meeting. | 0.1.0-rc.8 (2026-08-20) |
| dsh-later | 6 | [dsh-plugin-collection/dsh-later](https://github.com/dsh-plugin-collection/dsh-later) · [npm](https://www.npmjs.com/package/dsh-later) | 给 DSH 加上定时发送：输入一句话，到点自动以你的身份送出，关掉网页也准时触发。定时发送 / 定时提醒 / 延迟发送。 | 0.1.7-rc.2 (2026-09-29) |

<sub>Showing the 25 most-starred of 624. **[all 624 →](lists/notifications.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Usage & cost

Token accounting, billing, balance, quota.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| treg | 7686 | [superdesigndev/treg](https://github.com/superdesigndev/treg) | OpenRouter for tools - 2,600 agent-friendly tools, pay for the usage, not subscription | 0.1.0-rc.8 (2026-08-20) |
| DeepSeek-Balance-Whale-Widget | 7063 | [MeteorNOX/DeepSeek-Balance-Whale-Widget](https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget) · [npm](https://www.npmjs.com/package/dsh-whale-widget) | DSH Web 界面右下角的 DeepSeek 余额小鲸鱼挂件（含今日已用、峰谷定价、随机台词、音效与每轮消耗统计） | 0.1.1-rc.2 (2026-09-09) |
| Deepscient | 963 | [yzlin286-wq/Deepscient](https://github.com/yzlin286-wq/Deepscient/tree/HEAD/deepscient) | DeepScient：科研版 Harness 的品牌、工作台界面、token 计费与文献 API 接入 | 0.2.1-rc.2 (2026-10-26) |
| dsh-redteam-model | 847 | [SeaOf0/dsh-redteam-model](https://github.com/SeaOf0/dsh-redteam-model/tree/HEAD/plugins/dsh-hunter) | DSH hunter plugin: FOFA / Hunter(qianxin) / Quake(360) aggregated asset search with unified DSL → per-platform syntax conversion, quota-aware pagination/export, API-key settings panel… | 0.1.0-rc.8 (2026-08-20) |
| anolisa | 662 | [agentic-os-org/ANOLISA](https://github.com/agentic-os-org/ANOLISA/tree/HEAD/src/tokenless/adapters/tokenless/dsh) | ANOLISA (Agentic Nexus Operating Layer & Interface System Architecture) \| Agentic OS with runtime, security, observability, and Tokenless response compression for lower token usage and cost. | unverified |
| dsh-cost-meter-han14131 | 655 | [Han-1413141/dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) · [npm](https://www.npmjs.com/package/dsh-cost-meter) | DeepSeek Harness 会话费用统计插件:本会话成本、当日费用、历史记录与官方价格同步,界面中英双语。Session cost tracking plugin for DeepSeek Harness: per-conversation cost, daily totals, history and official price sync, with a bilingual | 0.1.0-rc.8 (2026-08-20) |
| dsh-codex-subscription | 415 | [WSL043/dsh-codex-subscription](https://github.com/WSL043/dsh-codex-subscription) · [npm](https://www.npmjs.com/package/dsh-codex-subscription) | Native ChatGPT and Codex subscription route with quota for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-connect-trae | 214 | [dingminhua/dsh-connect-trae](https://github.com/dingminhua/dsh-connect-trae) · [npm](https://www.npmjs.com/package/dsh-connect-trae) | Connect locally signed-in Trae models to DeepSeek Harness, plus a read-only usage/credits summary. | 0.1.1-rc.2 (2026-09-01) |
| dsh-tokenledger | 203 | [zh667/TokenLedger](https://github.com/zh667/TokenLedger) · [npm](https://www.npmjs.com/package/dsh-tokenledger) | Token usage accounting for DeepSeek Harness, reconciled against New API and Sub2API relay-site billing | 0.1.0-rc.8 (2026-08-20) |
| dsh-usage-stats-ychris | 187 | [Ychris12138/dsh-usage-stats](https://github.com/Ychris12138/dsh-usage-stats) · [npm](https://www.npmjs.com/package/@ychris12138/dsh-usage-stats) | Token usage heatmap, per-model breakdowns, and DeepSeek account balance for the DeepSeek Harness Web GUI. | 0.1.0-rc.8 (2026-08-20) |
| dsh-usage | 146 | [Aisland-SJL/dsh-usage](https://github.com/Aisland-SJL/dsh-usage) | Persistent balance badge and token usage panel for the dsh web GUI | 0.1.0-rc.8 (2026-08-20) |
| dsh-AuthInOne | 102 | [Stormycry-cryp/dsh-AuthInOne](https://github.com/Stormycry-cryp/dsh-AuthInOne) | OpenAI Codex, Kimi Code, and compatibility Provider login, API/custom providers, model switching, token usage analytics, and cost tracking for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| fnos-dsh | 99 | [FNOSP/fnos-dsh](https://github.com/FNOSP/fnos-dsh/tree/HEAD/plugins/dsh-codebuddy-plugin) | Tencent CodeBuddy provider plugin for DeepSeek Harness, with browser OAuth sign-in and quota display. | 0.1.7-rc.2 (2026-09-29) |
| dsh-ui-usage-billing | 98 | [kenz1117/dsh-ui-usage-billing](https://github.com/kenz1117/dsh-ui-usage-billing) · [npm](https://www.npmjs.com/package/@kenz1117/dsh-ui-usage-billing) | Usage billing dashboard for DeepSeek Harness: sidebar cost metrics plus a full dashboard modal, priced from a current multi-provider catalog with real usage aggregated from session logs. | 0.1.0-rc.8 (2026-08-20) |
| dsh-green-meter | 92 | [dclichang2022/dsh-green-meter](https://github.com/dclichang2022/dsh-green-meter) | Energy & carbon metering for DeepSeek Harness: per-turn/per-request energy, cache carbon savings, electricity cost. | 0.1.1-rc.2 (2026-09-04) |
| deepseek-harness-control-center | 78 | [feibi-mochi/deepseek-harness-control-center](https://github.com/feibi-mochi/deepseek-harness-control-center) · [npm](https://www.npmjs.com/package/deepseek-harness-wallet) | Local-first account monitoring, usage accounting, official recharge, completion reminders, flexible layout, and host-gated session controls for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-save-token | 77 | [vibe-any/dsh-plugin-save-token](https://github.com/vibe-any/dsh-plugin-save-token) · [npm](https://www.npmjs.com/package/dsh-plugin-save-token) | Cut token cost without cutting model intelligence — a DeepSeek Harness (dsh) bundle plugin: structure-aware compression + TOON-style lossless encoding first + reversible spill-to-disk + real-time… | 0.1.1-rc.2 (2026-08-28) |
| dsh-balance-plugin-francisx | 64 | [yxxbc/dsh-balance-plugin](https://github.com/yxxbc/dsh-balance-plugin) | DeepSeek 余额监控与用量统计（DSH 插件）：余额监控 · 官方充值入口 · Miyu 风格用量统计 · 三方插件管理 | 0.1.0-rc.8 (2026-08-20) |
| dsh-bottom-info-bar | 59 | [songoao25/dsh-bottom-info-bar](https://github.com/songoao25/dsh-bottom-info-bar/tree/HEAD/plugin) · [npm](https://www.npmjs.com/package/dsh-bottom-info-bar) | DeepSeek Harness 底部信息栏插件：替换对话输入框下方的原生统计栏，显示服务商/具体模型、真实余额、高峰(琥珀)/空闲(绿)价与倒计时、本对话·今日·近一月·全部花费。安装一次，每次打开 DSH 自动生效。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-profile-stats | 56 | [Lovenndme/dsh-profile-stats](https://github.com/Lovenndme/dsh-profile-stats) · [npm](https://www.npmjs.com/package/dsh-profile-stats) | Personal usage profile page for the DeepSeek Harness Web UI: cumulative tokens, peak day, longest task, activity streaks, token mix… | 0.2.1-rc.5 (2026-11-02) |
| dsh-chatgpt-subscription-songoao2 | 44 | [songoao25/dsh-chatgpt-sub](https://github.com/songoao25/dsh-chatgpt-sub) | DeepSeek Harness (DSH) 插件：用官方 OAuth 一键绑定 ChatGPT 订阅（Codex），在 DSH 内直接使用 ChatGPT 模型对话（消耗 ChatGPT Plus/Pro 订阅额度），并在设置侧边栏「订阅」页展示绑定状态与剩余额度。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-usage-plugin | 37 | [feiyang-dev/dsh-usage-plugin](https://github.com/feiyang-dev/dsh-usage-plugin) · [npm](https://www.npmjs.com/package/@feiyang666/dsh-usage-plugin) | DeepSeek Harness usage & cost tracker plugin: per-call token/cache-hit stats, peak/off-peak billing, DeepSeek balance query, CSV/JSON/PNG export with custom destination, and persistent local storage. | 0.1.0-rc.8 (2026-08-20) |
| DeepSeek-Balance-Whale-Widget-Bowl | 35 | [Witherwithwinter/DeepSeek-Balance-Whale-Widget-Bowl](https://github.com/Witherwithwinter/DeepSeek-Balance-Whale-Widget-Bowl) | DSH Web 界面右下角的 DeepSeek 余额小鲸鱼挂件 · 铁盆鲸鱼娘版（含默认/顶碗/拿碗三套形象切换、钢管音效、今日已用、峰谷定价、随机台词与每轮消耗统计）。基于 MeteorNOX/DeepSeek-Balance-Whale-Widget 修改。 | 0.1.1-rc.2 (2026-09-01) |
| dsh-auth-cookie-guard | 32 | [jitianjiyan/dsh-auth-cookie-guard](https://github.com/jitianjiyan/dsh-auth-cookie-guard) · [npm](https://www.npmjs.com/package/dsh-auth-cookie-guard) | Give the local listener a header budget large enough for its own launch cookies, and retire the cookies of every earlier start… | 0.2.1-rc.5 (2026-11-02) |
| dsh-usage-stats-make0209 | 32 | [Make0209/dsh-usage-stats](https://github.com/Make0209/dsh-usage-stats) | Usage stats for DeepSeek Harness: heatmap, token and cache-hit board, balance, and workspace aliases. | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 1968. **[all 1968 →](lists/usage-cost.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Observability & evidence

Diagnostics, logs, audits, content-addressed proofs.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-status-rotator | 229 | [01Virex/dsh-status-rotator](https://github.com/01Virex/dsh-status-rotator) · [npm](https://www.npmjs.com/package/dsh-status-rotator) | Rotates the DSH chat turn-status label ("Deep diving...") through user-defined phrases every few seconds. | 0.1.0-rc.8 (2026-08-20) |
| dsh-research-report | 213 | [PerryLink/dsh-research-report](https://github.com/PerryLink/dsh-research-report) · [npm](https://www.npmjs.com/package/dsh-research-report) | Verifiable research-report engine for DeepSeek Harness: a content-addressed evidence ledger (claim ↔ snapshot binding, tamper-evident) plus versioned sealed reports where every claim carries a | 0.1.6-alpha.2 (2026-09-20) |
| dsh-deepcanary | 118 | [Oscar-Williams/dsh-deepcanary](https://github.com/Oscar-Williams/dsh-deepcanary) · [npm](https://www.npmjs.com/package/dsh-deepcanary) | Local attention supervision for DeepSeek Harness: evidence-first signals, quiet notifications, and an actionable inbox. | 0.1.1-rc.2 (2026-09-01) |
| PrismFlowAgent | 97 | [justlovemaki/PrismFlowAgent](https://github.com/justlovemaki/PrismFlowAgent/tree/HEAD/integrations/dsh) | Native PrismFlow plugins and one-stop dashboard for DeepSeek Harness | 0.1.1-rc.2 (2026-09-04) |
| multivibe | 61 | [thibautrey/multivibe](https://github.com/thibautrey/multivibe/tree/HEAD/plugins/dsh-multivibe) | Connect DSH to a MultiVibe gateway and inspect available models and connection status. | 0.2.1-rc.2 (2026-10-26) |
| dsh-reforge | 40 | [wang1299/dsh-reforge](https://github.com/wang1299/dsh-reforge) · [npm](https://www.npmjs.com/package/dsh-reforge) | Evidence-based experience learning for DeepSeek Harness | 0.2.1-rc.5 (2026-11-03) |
| dsh-harmonyos-pc | 39 | [QinpanWan/dsh-harmonyos-pc](https://github.com/QinpanWan/dsh-harmonyos-pc/tree/HEAD/plugins/dsh-prompt-antivirus) | 全局提示注入 / 上下文病毒（context virus）防御插件：tools/pre-execute 扫工具参数、tools/post-execute 扫工具结果、agent/pre-step 扫进入模型前的消息并注入金丝雀守卫、llm/stream 出站消毒；支持 block / quarantine / monitor 三模式、磁盘化可演进病毒库（学习/导入/导出）与审计日志。 | 0.1.7-rc.2 (2026-09-29) |
| dsh-whale-report | 31 | [SenmuuuuW/dsh-whale-report](https://github.com/SenmuuuuW/dsh-whale-report) · [npm](https://www.npmjs.com/package/dsh-whale-report) | 鲸鱼记事本 — 你的 Agent 年度/月度/周度/日报：从会话事件日志生成数据新闻官式报告，任意区间、定时生成。 | 0.1.0-rc.8 (2026-08-20) |
| braintrust-sdk-javascript | 30 | [braintrustdata/braintrust-sdk-javascript](https://github.com/braintrustdata/braintrust-sdk-javascript/tree/HEAD/integrations/deepseek-harness) · [npm](https://www.npmjs.com/package/@braintrust/deepseek-harness) | Braintrust tracing plugin for DeepSeek Harness | 0.2.1-rc.5 (2026-11-03) |
| dsh-harbor | 26 | [ZSeven-W/dsh-harbor](https://github.com/ZSeven-W/dsh-harbor) · [npm](https://www.npmjs.com/package/@zseven-w/dsh-harbor) | A read-only mirror for installed DeepSeek Harness plugins: capability inventory with evidence, cross-plugin conflicts, and a diff of what changed since the last scan | 0.1.0-rc.8 (2026-08-25) |
| oh-my-knowledge | 25 | [lizhiyao/oh-my-knowledge](https://github.com/lizhiyao/oh-my-knowledge) · [npm](https://www.npmjs.com/package/oh-my-knowledge) | OMK — Observe. Measure. Know. Evidence-backed knowledge changes for AI applications. | 0.1.0-rc.8 (2026-08-25) |
| dsh-security-audit | 17 | [omdsh-dev/dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) | Read-only local security audit: config, credential metadata, plugin provenance, sessions, and network exposure. | 0.2.0-rc.2 (2026-10-05) |
| comfy-png-inspector | 16 | [zzcyydshhh/comfy-png-inspector](https://github.com/zzcyydshhh/comfy-png-inspector) | Inspect ComfyUI PNG metadata from DeepSeek Harness: LoRA chain with strengths, sampler settings, and prompts. | 0.2.2-rc.1 (2026-11-07) |
| dsh-thinking-levels | 16 | [drscrewdriver/dsh-thinking-levels](https://github.com/drscrewdriver/dsh-thinking-levels) · [npm](https://www.npmjs.com/package/dsh-thinking-levels) | DSH host plugin: thinking-level (reasoning_effort) control for dsh — auto-adjust per tool round, with optional manual lock and per-tool timing telemetry. | 0.1.0-rc.8 (2026-08-20) |
| dsh-a2a-ryubyte | 14 | [ryubyte/dsh-a2a](https://github.com/ryubyte/dsh-a2a) · [npm](https://www.npmjs.com/package/@ryubyte/dsh-a2a) | Agent2Agent (A2A) protocol v1.0 plugin for DeepSeek Harness (DSH): outbound client (remote AgentCard skills as ctx.tools), inbound server (A2A JSON-RPC + AgentCard endpoint)… | 0.1.0-rc.8 (2026-08-20) |
| dsh-anchored-monitor | 13 | [Aik358/dsh-anchored-monitor](https://github.com/Aik358/dsh-anchored-monitor) · [npm](https://www.npmjs.com/package/@a9i5k4/dsh-anchored-monitor) | DSH 实时思维链锚定监控插件: we/let's/let me 指纹波段检测(spec/mixed/react) + L1温和引导/L2强制重置/L3会话重启分级干预; 左侧栏入口 + 液体毛玻璃浮层 + 变阻器式思考强度条; 独立监控进程 + JSONL 实验日志 + 离线回放/参数校准; 变阻器条可选严肃/「滑动变祖器」梗双皮肤。 | 0.1.0-rc.8 (2026-08-20) |
| OmniOps | 13 | [luxiu666/OmniOps](https://github.com/luxiu666/OmniOps/tree/HEAD/packages/bundle/mysql-diag) | MySQL 慢查询诊断 bundle：skill（mysql-slow-query-analysis）+ mcp-client（stdio 自动拉起 mysql-diag-mcp） | 0.1.1-rc.2 (2026-08-28) |
| dsh-runtime-capabilities | 11 | [goatliamia/dsh-runtime](https://github.com/goatliamia/dsh-runtime/tree/HEAD/experiments/harness/plugin/dsh-runtime-experiment) | Isolated real-DSH runtime-exposure A/B experiment host bundle. No client, no SQLite, no default model-visible side effects; metrics go to EXP_RESULTS_DIR only. | 0.1.1-rc.2 (2026-09-01) |
| dsh-tool-turbo | 11 | [Electricitysheep/dsh-tool-turbo](https://github.com/Electricitysheep/dsh-tool-turbo) | DSH host plugin: cuts tool-call latency by auto-downgrading reasoning_effort for simple tool tasks, with per-tool timing telemetry. | 0.1.0-rc.8 (2026-08-20) |
| dsh-comfyui-canvas | 10 | [wbin0001/dsh-comfyui-canvas](https://github.com/wbin0001/dsh-comfyui-canvas) · [npm](https://www.npmjs.com/package/dsh-comfyui-canvas) | Give DeepSeek Harness agents live control of your ComfyUI canvas (local or cloud): embed it as a split-screen tab, then read/edit/run workflows, debug errors, fetch output images, and batch-sweep | 0.1.1-rc.2 (2026-09-01) |
| dsh-mall | 10 | [hoyyang/dsh-mall](https://github.com/hoyyang/dsh-mall) · [npm](https://www.npmjs.com/package/dsh-mall) | 全网最强 DeepSeek Harness 插件商场：全量收录 GitHub #dsh-plugin 生态插件，五维实用评分雷达图，智能搜索（AI 理解需求）、智能安装/更新/卸载（AI 装前审查+装后诊断）、一键批量更新、编辑精选与个性化推荐，自带 Skills 工具与 dsh-mall 技能，中英多语言界面。 | 0.1.1-rc.2 (2026-08-26) |
| dsh-otel-tma1ai | 10 | [tma1-ai/dsh-otel](https://github.com/tma1-ai/dsh-otel) · [npm](https://www.npmjs.com/package/@tma1-ai/dsh-plugin-greptimedb) | OpenTelemetry traces, metrics, and logs for DeepSeek Harness, written straight into GreptimeDB. | 0.1.1-rc.2 (2026-08-26) |
| dsh-session-header | 10 | [homily707/dsh-session-header](https://github.com/homily707/dsh-session-header) | Inject an x-session-id HTTP header onto every DeepSeek Harness LLM provider request, carrying the harness session id of that exact call. | 0.1.0-rc.8 (2026-08-20) |
| upstream-radar | 10 | [MicroMilo/upstream-radar](https://github.com/MicroMilo/upstream-radar) · [npm](https://www.npmjs.com/package/upstream-radar) | Always-on vulnerability and breaking-change impact monitoring for DeepSeek Harness plugins. | 0.1.0-rc.8 (2026-08-20) |
| dsh-hos-scrcpy | 9 | [ns-zzj/dsh-hos-scrcpy](https://github.com/ns-zzj/dsh-hos-scrcpy/tree/HEAD/PluginMain-Static) | DSH 鸿蒙投屏控制插件（静态 npm 包版）：设备发现 / 实时投屏 / 触控操作 / 系统按键 / hilog 日志 | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 460. **[all 460 →](lists/observability-evidence.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Safety & approvals

Permission tiers, gates, redaction, protection.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| planning-with-files | 27963 | [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files/tree/HEAD/.dsh/packages/dsh-planning-with-files) · [npm](https://www.npmjs.com/package/dsh-planning-with-files) | Native DeepSeek Harness (dsh) plugin for planning-with-files: per-turn plan injection, write reminders, compaction recovery, a turn-stopping completion gate, /pwf and /pwf-status commands… | 0.2.1-rc.5 (2026-11-03) |
| penguin-harness | 3202 | [Prism-Shadow/penguin-harness](https://github.com/Prism-Shadow/penguin-harness/tree/HEAD/plugins/sandbox-dsh) · [npm](https://www.npmjs.com/package/@penguinharness/sandbox-dsh) | DeepSeek Harness sandbox adaptor for PenguinHarness: the DSH local backend chain behind the harness's own sandbox interface. | 0.1.1-rc.2 (2026-09-18) |
| Aegis | 1424 | [GanyuanRan/Aegis](https://github.com/GanyuanRan/Aegis) | Make AI coding agents architecture-aware: baseline-first, evidence-verified, drift-checked, and safe across long tasks. | 0.1.0-rc.8 (2026-08-20) |
| DSH-Android-jackwene | 890 | [jackwener/DSH-Android](https://github.com/jackwener/DSH-Android/tree/HEAD/js/packages/bundle-android) | DSH-Android profile bundle and engine entry (main.mjs): layered over dsh-base + dsh-sdk-app; trims desktop/web/experimental rows, runs approval-only without an OS sandbox, mounts the device, guard… | 0.2.1-rc.5 (2026-11-02) |
| dsh-mobile-sayach | 800 | [saya-ch/dsh-mobile](https://github.com/saya-ch/dsh-mobile) · [npm](https://www.npmjs.com/package/dsh-mobile) | DeepSeek Harness 移动端适配与安全局域网访问插件，支持 Android App 和手机浏览器。 | 0.1.0-rc.8 (2026-08-20) |
| SkillCorpus | 700 | [EverMind-AI/SkillCorpus](https://github.com/EverMind-AI/SkillCorpus/tree/HEAD/skillcorpus_plugin/engine-typescript) | Per-turn skill retrieval for the DeepSeek Harness: fuse local and remote sources, gate by relevance, inject what fits | 0.1.1-rc.2 (2026-09-18) |
| k8e | 514 | [xiaods/k8e](https://github.com/xiaods/k8e/tree/HEAD/plugins/deepseek-harness/packages/dsh-k8e-sandbox-bundle) · [npm](https://www.npmjs.com/package/@k8e-sandbox/dsh-k8e-sandbox-bundle) | Installable dsh bundle mounting the k8e-sandbox execution world (KIP-20). | 0.1.0-rc.8 (2026-08-20) |
| DeepSec | 511 | [Unclecheng-li/DeepSec](https://github.com/Unclecheng-li/DeepSec/tree/HEAD/dsh-plugins/deepsec-shield) | DeepSec Shield code-security audit tools for DeepSeek Harness (dsh): L1/L2/L3 scanning, agent-config audit, supply-chain checks and report generation. | 0.1.0-rc.8 (2026-08-25) |
| dsh-marktext | 349 | [Roland0511/dsh-marktext](https://github.com/Roland0511/dsh-marktext) · [npm](https://www.npmjs.com/package/dsh-marktext) | MarkText (muya) WYSIWYG Markdown editor in the DeepSeek Harness right sidebar: open .md files, edit them as rendered documents, save back with a version guard. | 0.2.1-rc.5 (2026-11-03) |
| DeepSeekGUI | 274 | [See-Sol-Lab/DeepSeekGUI](https://github.com/See-Sol-Lab/DeepSeekGUI/tree/HEAD/apps/desktop/browser-plugin) | DeepSeekGUI browser capability: embedded in-window pane (CDP) or headed Edge, driven over playwright-core with an SSRF gate. | 0.1.1-rc.2 (2026-08-28) |
| dsh-alpha-desk | 168 | [JingHao-Leon/dsh-alpha-desk](https://github.com/JingHao-Leon/dsh-alpha-desk/tree/HEAD/plugins/risk-gate) | Alpha Desk compliance gate for deepseek-harness: denies live-trading and credential-access tool calls at tools/pre-execute. | 0.1.0-rc.8 (2026-08-20) |
| dsh-auto-mode | 161 | [NanmiCoder/dsh-auto-mode](https://github.com/NanmiCoder/dsh-auto-mode) · [npm](https://www.npmjs.com/package/@nanmicoder/dsh-auto-mode) | Fail-closed automatic permission policy for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-permission-rules | 136 | [PerryLink/dsh-permission-rules](https://github.com/PerryLink/dsh-permission-rules) · [npm](https://www.npmjs.com/package/dsh-permission-rules) | Declarative Claude Code-style permission rules for DeepSeek Harness: ordered allow/deny/ask rules with tool-name, argument (glob/regex), and workspace-path matching on the tools/pre-execute waterfall, | 0.1.6-alpha.2 (2026-09-20) |
| codex-guard | 131 | [Akimiya-z/codex-guard](https://github.com/Akimiya-z/codex-guard) · [npm](https://www.npmjs.com/package/codex-guard) | Quality gate for AI/Codex-generated pull requests: blocks TODO leftovers, leaked secrets, messy commits and failing CI before they hit main. | 0.1.1-rc.2 (2026-09-04) |
| dsh-approval-gate | 111 | [moon09300731/dsh-approval-gate](https://github.com/moon09300731/dsh-approval-gate) | DeepSeek Harness 自动审批门控：Flash 模型预判写入/命令是否不可回补，安全自动批准、危险转人工（fail-safe） | 0.1.0-rc.8 (2026-08-20) |
| dsh-confirm-gate | 101 | [SteelUnion/dsh-confirm-gate](https://github.com/SteelUnion/dsh-confirm-gate) · [npm](https://www.npmjs.com/package/@steelunion/dsh-confirm-gate) | Bounded-run framework for DeepSeek Harness: per-turn persistent-operation counter that reminds, then instructs the model to stop, then asks the user for confirmation. | 0.2.0-rc.2 (2026-10-18) |
| dsh-network-settings | 98 | [kanneiren/dsh-network-settings](https://github.com/kanneiren/dsh-network-settings) · [npm](https://www.npmjs.com/package/dsh-network-settings) | DSH Network Settings: Windows / WSL network status, diagnostics and safe repair for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-secure-audit | 86 | [PensiveFei/dsh-secure-audit](https://github.com/PensiveFei/dsh-secure-audit) · [npm](https://www.npmjs.com/package/dsh-secure-audit) | Read-only security & compliance toolkit for DeepSeek Harness: prompt-injection detection (rule engine with a pluggable model classifier), Chinese-PII redaction, and a local configuration security | 0.1.0-rc.8 (2026-08-20) |
| dsh-remote-mrrisega | 60 | [mrRisega/dsh-remote](https://github.com/mrRisega/dsh-remote/tree/HEAD/packages/dsh-remote-web) · [npm](https://www.npmjs.com/package/dsh-remote-web) | 公网远程控制 DeepSeek Harness（dsh web）：安装即得专属加密地址，人在外面也能用手机访问电脑上的 dsh——无需同一局域网/WiFi、无需公网 IP 与内网穿透，全程加密；手机端 100% 还原电脑体验（对话/工具/审批/设置）。技术用户可选自建服务，流量走自己的服务器。 | 0.1.7-rc.2 (2026-09-29) |
| sofagent | 55 | [KongFangXun/sofagent](https://github.com/KongFangXun/sofagent/tree/HEAD/engine/dsh-plugins/cordis-plugin-sofagent-audit) · [npm](https://www.npmjs.com/package/cordis-plugin-sofagent-audit) | 变更机器审阅——24 规则 + git diff 硬证据 + 节点级审计（seam: tools/result + tools/pre-execute + fs/write-intent）——桥接 @sofagent/audit runRules（sofagent 品牌插件 · 主色 #16B8F3） | 0.1.0-rc.8 (2026-08-25) |
| dsh-startup-screen | 51 | [QIFANAI/dsh-startup-screen](https://github.com/QIFANAI/dsh-startup-screen/tree/HEAD/package) | DeepSeek Harness 启动界面与启动动画：黑幕 DeepSeek 标识 → 过曝洗白 → 暖白档案底板 → 交互式访问授权序列（需要访问许可 / 身份资料确认 / 接收访问需求 / 开始读取权限 / 读取完毕·核验通过 / 欢迎访问）。中文主字 + 英文等宽副标题，真声素材 + 界面音效，身份名称等参数在 DSH 设置页可改。 | 0.2.0-rc.2 (2026-10-18) |
| dsh-remote-mobile | 49 | [IceApriler/dsh-remote-mobile](https://github.com/IceApriler/dsh-remote-mobile) · [npm](https://www.npmjs.com/package/dsh-remote-mobile) | DeepSeek Harness 远程与移动端安全网关插件：零修改 DSH 底层代码安全开放局域网与 Tailscale 连接 \| DeepSeek Harness (DSH) Remote & Mobile Security Guard: safely opens Tailscale/LAN with zero core modifications, QR scan auth… | 0.1.0-rc.8 (2026-08-25) |
| DSH-SW-and-CAD | 49 | [fyjgtddco/DSH-SW-and-CAD](https://github.com/fyjgtddco/DSH-SW-and-CAD/tree/HEAD/engineering/plugins/dsH-engineering-sw-single-line) | 工程模式 SW单行模式插件：权限预设注册 + 非工程模式发送前确认面板 | 0.1.1-rc.2 (2026-09-18) |
| dsh-loop-guard-mrweicod | 35 | [MrWeiCodes/dsh-loop-guard](https://github.com/MrWeiCodes/dsh-loop-guard) · [npm](https://www.npmjs.com/package/@mrweicodes/dsh-loop-guard) | Thinking-loop guard for dsh: observes the llm/stream waterfall and breaks a model that degrades into a loop. | 0.1.7-rc.2 (2026-09-29) |
| dsh-jev-interceptor | 33 | [AskTheWay/dsh-jev-interceptor](https://github.com/AskTheWay/dsh-jev-interceptor) · [npm](https://www.npmjs.com/package/dsh-jev-interceptor) | Millisecond System-1 judgement for every tool call in DeepSeek Harness: Jev-powered risk classification and evidence-gated auto-approval, fail-closed by construction. | 0.1.7-rc.2 (2026-09-29) |

<sub>Showing the 25 most-starred of 1028. **[all 1028 →](lists/safety-approvals.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Plugin managers & stores

In-UI stores, installers, skill managers.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-market | 11613 | [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) · [npm](https://www.npmjs.com/package/dshmarket) | Visual plugin market inside DeepSeek Harness — browse, search, and one-click install community plugins. · DSH 可视化插件市场：逛一逛，点一下，装好。 | 0.1.0-rc.8 (2026-08-20) |
| agentrq | 1180 | [agentrq/agentrq](https://github.com/agentrq/agentrq/tree/HEAD/plugins/deepseek-harness) · [npm](https://www.npmjs.com/package/@agentrq/dsh-plugin-agentrq) | AgentRQ task manager for DeepSeek Harness: create, manage, and auto-pull AgentRQ tasks without leaving the harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-shop | 662 | [LivXue/dsh-plugin-shop](https://github.com/LivXue/dsh-plugin-shop/tree/HEAD/packages/dsh-plugin-shop) · [npm](https://www.npmjs.com/package/dsh-plugin-shop) | The DeepSeek Harness plugin store: browse, install, enable, and update dsh plugins from a git-auditable catalog. | 0.1.1-rc.2 (2026-08-26) |
| dsh-plugin-store-livxue | 662 | [LivXue/dsh-plugin-shop](https://github.com/LivXue/dsh-plugin-shop/tree/HEAD/packages/dsh-plugin-store) | The DeepSeek Harness plugin store: browse, install, enable, and update dsh plugins from a git-auditable catalog. | 0.1.1-rc.2 (2026-08-26) |
| dsh-plugin-hub-dshplugi | 498 | [dshplugin/dsh-plugin-hub](https://github.com/dshplugin/dsh-plugin-hub) · [npm](https://www.npmjs.com/package/dsh-plugin) | A community plugin marketplace for DeepSeek Harness, built to the official plugin spec — browse, search and install 4000+ human-curated community plugins without leaving the app. · DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| RabiRoute | 492 | [vb2250158/RabiRoute](https://github.com/vb2250158/RabiRoute/tree/HEAD/plugins/rabi-dsh-context) | Connect DSH lifecycle events and conversation context to Rabi Manager. | 0.2.1-rc.2 (2026-10-26) |
| dsh-workbuddy-xdpool | 475 | [XDTrees/dsh-xdpool](https://github.com/XDTrees/dsh-xdpool) · [npm](https://www.npmjs.com/package/dsh-xdpool) | Merge every locally signed-in WorkBuddy account into DeepSeek Harness as one auto-failing-over model pool (multi-account rotation, live credits, daily check-in and model catalog). | 0.1.1-rc.2 (2026-09-18) |
| dsh-top100 | 461 | [evaldock-account/dsh-top100](https://github.com/evaldock-account/dsh-top100/tree/HEAD/plugin) · [npm](https://www.npmjs.com/package/@evaldock/dsh-top100-plugin) | Discover, install and manage EvalDock Top100 plugins and Skills in DeepSeek Harness | 0.2.1-rc.5 (2026-11-03) |
| awesome-deepseek-harness | 426 | [Dominic789654/awesome-deepseek-harness](https://github.com/Dominic789654/awesome-deepseek-harness/tree/HEAD/plugins/dsh-code-review) | Code review assistant for DeepSeek Harness: code_review_context collects deterministic git diff context; a bundled skill drives the review checklist. | 0.1.0-rc.8 (2026-08-20) |
| awesome-deepseek-harness-plugins | 378 | [imsai-sh/awesome-deepseek-harness-plugins](https://github.com/imsai-sh/awesome-deepseek-harness-plugins/tree/HEAD/packages/dsh-1024store) | The 1024 Store plugin market inside DeepSeek Harness. | unverified |
| dsh-trading-zhu10900 | 331 | [zhu1090093659/dsh-trading](https://github.com/zhu1090093659/dsh-trading) | Your next trading terminal can also be DSH. Full-market (Crypto/US/CN/HK) modular AI trading terminal and plugin ecosystem on DeepSeek Harness. | 0.1.1-rc.2 (2026-09-04) |
| dsh-archive-manager-michenga | 320 | [MichengAI/dsh-archive-manager](https://github.com/MichengAI/dsh-archive-manager) · [npm](https://www.npmjs.com/package/@michengai/dsh-archive-manager) | NPM-installable DSH Web plugin for managing archived sessions. | 0.1.0-rc.8 (2026-08-20) |
| dsh-hub-cli | 274 | [pax-beehive/dsh-hub-cli](https://github.com/pax-beehive/dsh-hub-cli/tree/HEAD/packages/dsh-plugin) · [npm](https://www.npmjs.com/package/@dsh-plugin-hub/dsh-plugin) | DSH tools for planning and applying reproducible Plugin Hub Profiles through the local dsh-hub CLI | 0.1.1-rc.2 (2026-09-04) |
| dsh-find-plugin | 229 | [awesome-dsh-plugin/dsh-find-plugin](https://github.com/awesome-dsh-plugin/dsh-find-plugin) · [npm](https://www.npmjs.com/package/dsh-find-plugin) | Find DeepSeek Harness plugins from inside the agent via live GitHub dsh-plugin topic search, ranked by stars. | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-index-polang23 | 210 | [polang233/dsh-plugin-index](https://github.com/polang233/dsh-plugin-index/tree/HEAD/packages/dsh-open-market) · [npm](https://www.npmjs.com/package/dsh-open-market) | Open Plugin Market for DeepSeek Harness: adds a community plugin index that favors fast-growing, actively maintained plugins. | 0.2.1-rc.2 (2026-10-19) |
| dsh-plugin-marketplace | 202 | [bradeGithub/DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) | Web GUI plugin marketplace: browse, install, and update GitHub topic dsh-plugin packages from inside DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-market-2binglin | 197 | [2BingLing/dsh-market](https://github.com/2BingLing/dsh-market/tree/HEAD/plugin/ui) · [npm](https://www.npmjs.com/package/@dsh-market/plugin) | DSH Market 插件端：cordis 侧边栏插件（浏览/搜索/猜你喜欢/一键安装/已装管理），核心逻辑来自 @dsh-market/core | 0.1.0-rc.8 (2026-08-20) |
| ru-marketplace-mcp | 185 | [Vladimir-Human/ru-marketplace-mcp](https://github.com/Vladimir-Human/ru-marketplace-mcp/tree/HEAD/dsh) | Девять российских маркетплейсов и китайский Taobao как MCP-серверы: Wildberries, Ozon, Яндекс Маркет, Детский мир, Авито, Мегамаркет, Lamoda, DNS, Ситилинк. Плюс сравнение цен по всем сразу. Только чт | 0.1.0-rc.8 (2026-08-20) |
| Awesome-Gaussian-Skills | 180 | [jaccen/Awesome-Gaussian-Skills](https://github.com/jaccen/Awesome-Gaussian-Skills) | 3D Spatial Intelligence Open-Source Toolbox — 955 methods, 18 skills, MCP Server, SplatVerse Studio | 0.2.0-rc.2 (2026-10-17) |
| dsh-plugin-hub | 125 | [Noob-stupid/dsh-plugin-gating-hub](https://github.com/Noob-stupid/dsh-plugin-gating-hub) | DSH plugin management panel & marketplace: one-click enable/disable, multi-source market (GitHub/Gitee/custom), static-index market (500+ plugins / 300 skills), skills, suites, and one-click | 0.2.0-rc.2 (2026-10-05) |
| dsh-mcp-connector | 116 | [duhu2000/dsh-mcp-connector](https://github.com/duhu2000/dsh-mcp-connector) · [npm](https://www.npmjs.com/package/dsh-mcp-connector) | General-purpose MCP connector, connection manager, plugin extension, and integration marketplace for DeepSeek Harness, initiated and maintained by Qichacha/QCC. | 0.1.0-rc.8 (2026-08-24) |
| dsh-novel-writer-akira399 | 113 | [akira399/dsh-novel-writer](https://github.com/akira399/dsh-novel-writer) | 大肥鱼的小说工坊 — DSH 网络小说创作插件：九阶段门禁式创作流程 + 世界书(lorebook)设定注入 + 本地书籍导入 + AI 一键润色 + 去AI味 + 黄金三章诊断 + 百万字一致性 + 市场调研与模板复制，面向开源用户的开箱即用方案。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-prompt-market | 111 | [yi-yezhiqiu/dsh-prompt-market](https://github.com/yi-yezhiqiu/dsh-prompt-market) · [npm](https://www.npmjs.com/package/dsh-prompt-market) | 提示词市场（Prompt Market）— DeepSeek Harness 桌面端插件：输入框旁「提示词导入」按钮 + 浮层市场面板；零后端、纯 JavaScript、无编译步骤。 | 0.2.0-rc.2 (2026-10-07) |
| dsh-capability-menu | 109 | [PKUfudawei/dsh-capability-menu](https://github.com/PKUfudawei/dsh-capability-menu) · [npm](https://www.npmjs.com/package/@daweifu/capability-menu) | Unified capability management for the DeepSeek Harness: catalog (registry) + meta_search/meta_invoke + Exposed/Progressive/Blocked projection policy + 能力管理 surface, in one installable bundle. | 0.1.0-rc.8 (2026-08-24) |
| dsh-webui-market-plugin | 103 | [Sanqi-normal/dsh-webui-market-plugin](https://github.com/Sanqi-normal/dsh-webui-market-plugin) · [npm](https://www.npmjs.com/package/@sanqi-normal/dsh-webui-market-plugin) | In-harness community plugin market for the dsh web GUI: browse, install, and uninstall into a profile. | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 868. **[all 868 →](lists/plugin-managers-stores.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Developer tools

Building, testing, and publishing plugins.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-web-zhu10900 | 10263 | [zhu1090093659/dsh-web](https://github.com/zhu1090093659/dsh-web/tree/HEAD/market/shell) | Pure-static, browser-only build of DeepSeek Harness (dsh web) — no server, deployable to GitHub Pages | 0.1.1-rc.2 (2026-09-04) |
| DSHBox-wskbuild | 594 | [WSK-build/DSHBox](https://github.com/WSK-build/DSHBox/tree/HEAD/app/src/main/assets/plugins/dsh-mobile-adapt/plugin) | Run DeepSeek Harness locally on Android phones and tablets. One APK with Debian, Node.js, DSH, and WebView — no root or Termux required. 在安卓手机和平板上本机运行完整 DSH。 | 0.1.1-rc.2 (2026-09-09) |
| dsh-ios | 417 | [ZSeven-W/dsh-ios](https://github.com/ZSeven-W/dsh-ios) · [npm](https://www.npmjs.com/package/@zseven-w/dsh-ios) | DeepSeek Harness plugin for the iOS Simulator — build, run, and interact with a live simulator stream inside a conversation. Tested with DSH 0.1.0-rc.6. | 0.1.0-rc.8 (2026-08-21) |
| dsh-android | 308 | [ZSeven-W/dsh-android](https://github.com/ZSeven-W/dsh-android) · [npm](https://www.npmjs.com/package/@zseven-w/dsh-android) | DeepSeek Harness plugin for Android — build, run, and interact with a live emulator or USB device stream inside a conversation, driven entirely through adb. Tested with DSH 0.1.1-rc.1. | 0.1.0-rc.8 (2026-08-24) |
| fylar-office-editor | 263 | [FylarOpen/dsh-fylar-office-editor](https://github.com/FylarOpen/dsh-fylar-office-editor) · [npm](https://www.npmjs.com/package/@fylar/dsh-fylar-office-editor) | Fylar Office Editor integration for the DeepSeek Harness Web profile, powered by Fylar Office SDK | 0.1.1-rc.2 (2026-09-09) |
| superpowers-dsh | 153 | [LayneChai/superpowers-dsh](https://github.com/LayneChai/superpowers-dsh) · [npm](https://www.npmjs.com/package/superpowers-dsh) | TDD, debugging, planning, and collaboration skills for DeepSeek Harness, adapted from obra/superpowers. | 0.1.0-rc.8 (2026-08-20) |
| gongwen-skill | 106 | [linhut/gongwen-skill](https://github.com/linhut/gongwen-skill) · [npm](https://www.npmjs.com/package/gongwen-skill) | 中文公文全流程处理工具 - GB/T 9704 格式检查/修复/内容优化/模板生成/版式注入 | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-template | 103 | [bugmaker2/dsh-plugin-template](https://github.com/bugmaker2/dsh-plugin-template) | Minimal Hello World plugin template for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-prompt | 103 | [FeatherHunter/dsh-prompt](https://github.com/FeatherHunter/dsh-prompt) · [npm](https://www.npmjs.com/package/dsh-prompt) | DSH prompt 工具箱：预制 + 自定义 prompt 模板，点击即插入当前对话输入框（v1 常规模式 + v1.1 智能模式悬浮卡） \| Prompt toolbox for DeepSeek Harness: preset + custom prompt templates, one-click insert into the conversation. | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-kit-hyzyn | 65 | [hyzyn/dsh-plugin-kit](https://github.com/hyzyn/dsh-plugin-kit) · [npm](https://www.npmjs.com/package/@hyzyn/dsh-plugin-kit) | 通用 DSH 插件库（pnpm monorepo）：模板插件、插件开发工具包、一键聚合安装包。根包同时是全家桶 bundle（dsh.bundle.patch），DSH 与插件市场可直接识别安装。 | 0.1.0-rc.8 (2026-08-20) |
| qa-skills | 62 | [fishzjp/qa-skills](https://github.com/fishzjp/qa-skills) · [npm](https://www.npmjs.com/package/dsh-qa-skills) | DeepSeek Harness (dsh) plugin: 10 testing skills (requirement analysis, test strategy, case writing/review, E2E/API automation, exploratory, regression, bug analysis) + shared core knowledge base — a | 0.1.0-rc.8 (2026-08-25) |
| dsh-doublecheck | 58 | [PerryLink/dsh-doublecheck](https://github.com/PerryLink/dsh-doublecheck) · [npm](https://www.npmjs.com/package/dsh-doublecheck) | Double-check before you ship: grill the requirements, test the implementation, prove the delivery. | 0.1.6-alpha.2 (2026-09-20) |
| dsh-tianshu-build | 47 | [huiliyi37/oh-my-tianshu](https://github.com/huiliyi37/oh-my-tianshu/tree/HEAD/packages/bundle/base) · [npm](https://www.npmjs.com/package/@huiliyi37/dsh-base) | The shared dsh core as a profile bundle: every profile's first patch layer, inserting the base plugin rows over the empty profile root | 0.1.0-rc.8 (2026-08-20) |
| webdsh | 36 | [futrime/webdsh](https://github.com/futrime/webdsh) | Pure-static, browser-only build of DeepSeek Harness (dsh web) — no server, deployable to GitHub Pages | 0.1.1-rc.2 (2026-09-04) |
| dsh-qa | 34 | [naodeng/dsh-qa](https://github.com/naodeng/dsh-qa) · [npm](https://www.npmjs.com/package/dsh-qa) | dsh-qa QA Workbench: a local software testing workbench plugin for DeepSeek Harness. Project/iteration dual-mode, full-flow requirements / test cases / defects / milestones / reports… | 0.1.0-rc.8 (2026-08-20) |
| dsh-ios-everettj | 31 | [everettjf/dsh-ios](https://github.com/everettjf/dsh-ios/tree/HEAD/rootfs/staging) | Pins the @deepseek-ai/dsh tree that build-rootfs.sh installs into the guest (linux/arm64/musl). | 0.1.0-rc.8 (2026-08-21) |
| dsh-plugin-check | 26 | [omdsh-dev/dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) | DSH plugin health checker: scan plugin repos for manifest protocol / patch format / build pitfalls / hub registration, zero-dependency read-only diagnostics | 0.2.0-rc.2 (2026-10-05) |
| dsh-kanban-alpacach | 23 | [alpacachen/dsh-kanban](https://github.com/alpacachen/dsh-kanban) · [npm](https://www.npmjs.com/package/@alpacachen/dsh-kanban) | A kanban board plugin for DeepSeek Harness: a 'Board' tab in conversations plus 14 kanban_* AI tools, per-workspace isolation and disk persistence. Built with React, TypeScript, dnd-kit, shadcn/ui | 0.1.0-rc.8 (2026-08-20) |
| dsh-minecraft-ui | 21 | [TFboy1/dsh-minecraft-ui](https://github.com/TFboy1/dsh-minecraft-ui) · [npm](https://www.npmjs.com/package/dsh-minecraft-ui) | Playable Minecraft-inspired voxel client that replaces the DSH Web shell on an isolated test profile | 0.1.0-rc.8 (2026-08-21) |
| dsh-user-experience | 21 | [DietCokewithSugar/dsh-user-experience](https://github.com/DietCokewithSugar/dsh-user-experience) · [npm](https://www.npmjs.com/package/dsh-user-experience) | DeepSeek Harness UX walkthrough plugin: persona-driven source-code UX review for React (TypeScript/JavaScript) and Vue 3 projects, with change-triggered automatic walkthroughs | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-teamflow | 20 | [MichaelShii/dsh-plugin-teamflow](https://github.com/MichaelShii/dsh-plugin-teamflow) · [npm](https://www.npmjs.com/package/dsh-plugin-teamflow) | TeamFlow 团队研发流水线（TypeScript）：需求→PRD→设计→架构→技术方案→并行开发→QA→验收；backlog 持久化 + 断点续跑 + 完成汇报 + 防假交付；Web 团队工作台（conversation.view tab + 拖拽看板） | 0.1.1-rc.2 (2026-08-28) |
| ilife | 20 | [FeatherHunter/ilife](https://github.com/FeatherHunter/ilife/tree/HEAD/packages/plugin-bill-ilife) · [npm](https://www.npmjs.com/package/dsh-bill-ilife) | 爱生活单品插件 P10 脚手架：记账（ilife:cookie order 95），硬依赖总管 dsh-life-pack | 0.1.7-rc.2 (2026-09-29) |
| dsh-eval-harness | 14 | [BiBoyang/dsh-eval-harness](https://github.com/BiBoyang/dsh-eval-harness) | DSH 插件回归评测门禁：yaml 用例 + headless 驱动 + trace 断言 + baseline 门禁（eval_run / eval_gate） | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-healthcheck | 14 | [chenw2759-wq/dsh-plugin-healthcheck](https://github.com/chenw2759-wq/dsh-plugin-healthcheck) | DSH 插件健康检查：设置面板内的「插件检测」向导 — L0 静态检查（files 白名单/依赖声明/高危副本/依赖可解析/Windows 命令/lockfile 一致性）+ L1 配置组合检查 + L2 隔离试跑（子进程 boot 全树），发现即自动回滚（写 home patch 前弹确认），复杂问题打包预制提示词交给 agent 修复。铁律：只修改插件代码与配置层，严禁修改 harness. | 0.1.0-rc.8 (2026-08-20) |
| tencentcloud-agentobs-sdk-dsh | 14 | [TencentCloud/tencentcloud-agentobs-sdk-dsh](https://github.com/TencentCloud/tencentcloud-agentobs-sdk-dsh) · [npm](https://www.npmjs.com/package/tencentcloud-agentobs-sdk-dsh) | Tencent Cloud Service CLS observability plugin for DeepSeek Harness — direct upload to Tencent Cloud CLS | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 396. **[all 396 →](lists/developer-tools.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Knowledge & research

Research workbenches, RAG, learning modes.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| WeKnora | 36949 | [Tencent/WeKnora](https://github.com/Tencent/WeKnora/tree/HEAD/packages/dsh-weknora) · [npm](https://www.npmjs.com/package/@wxg-prc-cpg/dsh-weknora) | WeKnora knowledge retrieval tools for DeepSeek Harness (dsh): semantic search, document reading and RAG/agent answers over your own knowledge bases. | 0.1.0-rc.8 (2026-08-24) |
| movo | 593 | [himovo/movo](https://github.com/himovo/movo/tree/HEAD/services/chat-api/dsh/runtime-host) | Turn DeepSeek Harness into a self-hosted enterprise Agent platform with knowledge, deep research, content generation, vibe coding, browser automation, governance, and admin controls. | 0.1.1-rc.2 (2026-09-09) |
| dsh-Mimir-Academic-research | 562 | [1692775560/dsh-Mimir-Academic-research](https://github.com/1692775560/dsh-Mimir-Academic-research) | Mimir — 一站式科研工作台插件：LaTeX 论文边写边编译、arXiv 文献管理、实验追踪、指标图表、GPU 服务器 SSH 任务编排，管理科研全周期。An open-source research workbench plugin for the whole research cycle. | 0.1.0-rc.8 (2026-08-25) |
| dsh-reverse-skill | 339 | [dhicoc/dsh-reverse-skill](https://github.com/dhicoc/dsh-reverse-skill) · [npm](https://www.npmjs.com/package/@dhicoc/dsh-reverse-skill) | Reverse-engineering skill pack as a Cordis plugin: 85 SKILL.md units for authorized security research. | 0.1.0-rc.8 (2026-08-20) |
| pawwork | 223 | [Astro-Han/pawwork](https://github.com/Astro-Han/pawwork/tree/HEAD/packages/desktop-electron) | Desktop AI workstation for knowledge workers | 0.1.1-rc.2 (2026-09-04) |
| dsh-industry-research | 217 | [PerryLink/dsh-industry-research](https://github.com/PerryLink/dsh-industry-research) · [npm](https://www.npmjs.com/package/dsh-industry-research) | Industry and company research domain pack for DeepSeek Harness: methodology skills, an industry-chain structure model (industry_map)… | 0.1.6-alpha.2 (2026-09-20) |
| dsh-nekowhale-stickers | 172 | [Loping151/dsh-nekowhale-stickers](https://github.com/Loping151/dsh-nekowhale-stickers) · [npm](https://www.npmjs.com/package/dsh-nekowhale-stickers) | 大肥鱼 / GPT娘 sticker knowledge, search and local meme templates for DeepSeek Harness (dsh) and any bot | 0.2.1-rc.2 (2026-10-26) |
| dsh-finance-dkkd13 | 124 | [DKKD13/dsh-finance](https://github.com/DKKD13/dsh-finance) · [npm](https://www.npmjs.com/package/deepseek-harness-finance-plugin) | A local-first finance research workspace for DeepSeek Harness: evidence library, research Skills, stock analysis and paper-fund research desks. | 0.2.1-rc.5 (2026-11-02) |
| hanai-investment-dsh | 123 | [hancao97/hanai-investment-dsh](https://github.com/hancao97/hanai-investment-dsh) | Hanai Investment — a local-first A-share research workbench powered by DeepSeek Harness | 0.2.0-rc.2 (2026-10-05) |
| Envoy | 100 | [regrevia/Envoy](https://github.com/regrevia/Envoy/tree/HEAD/integrations/dsh/envoy-dsh) · [npm](https://www.npmjs.com/package/envoy-dsh) | Paste a link; the agent reads it. Xiaohongshu, Douyin, Bilibili, WeChat, articles, PDFs and audio become citable Markdown for a wiki or knowledge base. | 0.2.1-rc.5 (2026-11-03) |
| dsh-web-search-pro | 86 | [anweat/dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) · [npm](https://www.npmjs.com/package/dsh-web-search-pro) | Enhanced, persistent web search plugin for DeepSeek Harness — multi-engine routing (DeepSeek/Exa/DDG/Bing/Jina + GitHub/B站/YouTube/V2EX/小红书/Twitter/Reddit/RSS), SQLite+LRU cache… | 0.1.0-rc.8 (2026-08-20) |
| qiaomu-ui-learn-dsh | 83 | [joeseesun/qiaomu-ui-learn-dsh](https://github.com/joeseesun/qiaomu-ui-learn-dsh) | Qiaomu UI Learn for DeepSeek Harness | 0.2.1-rc.5 (2026-11-02) |
| SpecFusion | 77 | [wxkingstar/SpecFusion](https://github.com/wxkingstar/SpecFusion/tree/HEAD/dsh-plugin) · [npm](https://www.npmjs.com/package/@wxkingstar/specfusion-dsh) | SpecFusion skill + native API-docs search tools for DeepSeek Harness: 65,000+ API docs across 20 Chinese open platforms | 0.1.0-rc.8 (2026-08-20) |
| prts-terrarchive | 73 | [HTian-qwq/prts-terrarchive](https://github.com/HTian-qwq/prts-terrarchive) · [npm](https://www.npmjs.com/package/prts-terrarchive) | PRTS.chat local corpus search/read tools as a deepseek-harness plugin | 0.1.1-rc.2 (2026-09-01) |
| OpenQuantum | 72 | [xi-zhao/OpenQuantum](https://github.com/xi-zhao/OpenQuantum) | A DeepSeek Harness distribution for open quantum research | 0.1.0-rc.8 (2026-08-24) |
| dsh-handraw-style | 70 | [yang0/dsh-handraw-style](https://github.com/yang0/dsh-handraw-style) | DSH 图像创作工作台插件：单张/套图/封面/知识卡，共享画风、配色、版式、人物与姿势素材 | 0.2.2-rc.1 (2026-11-07) |
| dsh-zotero-vncntvx | 70 | [Vncntvx/dsh-zotero](https://github.com/Vncntvx/dsh-zotero) · [npm](https://www.npmjs.com/package/dsh-zotero) | Let agents search, read, and cite your local Zotero library: find papers, browse notes and annotations, pull evidence by question, open the source document, generate citations. | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-guide | 65 | [PerryLink/dsh-plugin-guide](https://github.com/PerryLink/dsh-plugin-guide) · [npm](https://www.npmjs.com/package/dsh-plugin-guide) | The dsh-plugin-guide knowledge base as an installable DeepSeek Harness plugin: official docs, Cordis primer, community deep-dives, and battle-tested pitfalls registered as an on-demand agent skill. | 0.1.6-alpha.2 (2026-09-20) |
| dsh-web-search-free-mochinek | 63 | [MochiNek0/dsh-web-search-free](https://github.com/MochiNek0/dsh-web-search-free) · [npm](https://www.npmjs.com/package/dsh-web-search-free) | Free web search plugin for dsh supporting firecrawl and tavily | 0.1.0-rc.8 (2026-08-24) |
| dsh-scholar | 57 | [lzszq/dsh-scholar](https://github.com/lzszq/dsh-scholar) | DSH Research OS — a fully automated scientific research plugin for DSH (DeepSeek Harness): survey, idea, experiment contract, durable runner jobs, claim-evidence ledger, manuscript and release bundle. | 0.1.0-rc.8 (2026-08-20) |
| dsh-paper-reader | 51 | [GGboya/dsh-paper-reader](https://github.com/GGboya/dsh-paper-reader) · [npm](https://www.npmjs.com/package/@ggboy123/dsh-paper-reader) | DeepSeek Harness 插件：论文伴读工作台 — PDF 转录 / 检索 / 原生对话伴读 + 内置阅读器页面。 | 0.1.7-rc.2 (2026-09-29) |
| hn-cli | 51 | [heartleo/hn-cli](https://github.com/heartleo/hn-cli/tree/HEAD/plugins/hacker-news) · [npm](https://www.npmjs.com/package/dsh-hacker-news) | Hacker News tools for DeepSeek Harness: front-page feeds, item comment trees, Algolia search, user profiles. | 0.1.0-rc.8 (2026-08-20) |
| dsh-directorx | 48 | [LaplaceYoung/dsh-directorx](https://github.com/LaplaceYoung/dsh-directorx) | DirectorX：给 DeepSeek Harness 装上 AI 视频导演能力——视频生成、智能剪辑、成片质检、无限画布分镜与 350+ 导演知识库。AI video director plugin for DeepSeek Harness: text-to-video, smart editing, QC, storyboard canvas. | 0.1.0-rc.8 (2026-08-20) |
| dsh-science | 48 | [biociao/dsh-science](https://github.com/biociao/dsh-science) · [npm](https://www.npmjs.com/package/dsh-science) | Claude Science-style research workbench for DeepSeek Harness: ReAct research-loop engine (research_* tools), versioned artifacts with provenance (artifact_* tools), and 10 science skills for. | 0.1.0-rc.8 (2026-08-20) |
| dsh-obsidian | 47 | [mingzeng21/dsh-obsidian](https://github.com/mingzeng21/dsh-obsidian) · [npm](https://www.npmjs.com/package/dsh-obsidian) | Connect DeepSeek Harness (dsh) to a local Obsidian vault: search, read, write, move, and trash notes. | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 1046. **[all 1046 →](lists/knowledge-research.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Fun

Games, pets, memes, ambience. The reef has coral.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-pet | 5947 | [PC2005-cloud/dsh-pet](https://github.com/PC2005-cloud/dsh-pet/tree/HEAD/dsh-pet) · [npm](https://www.npmjs.com/package/dsh-pet) | A floating desktop pet for the DeepSeek Harness Web UI: idle breathing, occasional direction turns, random actions, and screen wandering. | 0.1.0-rc.8 (2026-08-20) |
| dsh-tavern-flizzywi | 1531 | [flizzywine/dsh-tavern](https://github.com/flizzywine/dsh-tavern) · [npm](https://www.npmjs.com/package/dsh-profile-tavern) | 基于 DeepSeek Harness（DSH）的 SillyTavern 类文字游戏 Agent，支持候选项生成、对话式人物卡编辑、剧本模式与素材抽取。 | 0.1.0-rc.8 (2026-08-20) |
| gen-ai-pose-image | 813 | [wzc520pyfm/gen-ai-pose-image](https://github.com/wzc520pyfm/gen-ai-pose-image) · [npm](https://www.npmjs.com/package/gen-ai-pose-image) | 澜姿：从姿势线稿和衣装集给社区鲸鱼娘大肥鱼出图，也可装进 DeepSeek Harness。Lanpose generates images of the community whale-girl Dafeiyu from pose sketches and costumes, and installs into DeepSeek Harness. | 0.2.1-rc.5 (2026-11-03) |
| dsh-ads | 715 | [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) · [npm](https://www.npmjs.com/package/@nagi-ovo/dsh-ads) | Satirical 2005-portal fake-ad plugin for the web UI (sidebar ads, in-conversation feed, corner popups); ad slots also surface real dsh-plugin topic repos | 0.1.0-rc.8 (2026-08-20) |
| dsh-meme-yyh001 | 543 | [yyh-001/dsh-meme](https://github.com/yyh-001/dsh-meme) · [npm](https://www.npmjs.com/package/dsh-meme) | DeepSeek Harness 表情包插件:内置默认图库(官方-001,92 张),按情绪随机抽图,send_meme 发图(Web/QQ),设置页管理面板。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-game-studio-zsevenw | 436 | [ZSeven-W/dsh-game-studio](https://github.com/ZSeven-W/dsh-game-studio) · [npm](https://www.npmjs.com/package/@zseven-w/dsh-game-studio) | Game studio for DeepSeek Harness: describe a small game, play it in the right sidebar, and swap its art for your own generated assets. | 0.2.2-rc.1 (2026-11-07) |
| DSH-Transparent-UI-Plugin | 434 | [WYH66666666/DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin) | Aqua: a highly customizable glassmorphism theme for the Web surface — adjustable blur, frost, fluid or wallpaper backdrop, unified corners, and motion | 0.2.0-rc.2 (2026-10-05) |
| whale-girl ⭐ | 405 | [vlln/whale-girl](https://github.com/vlln/whale-girl) · [npm](https://www.npmjs.com/package/whale-girl) | Desktop-pet companion for the web GUI (QQ-pet style): draggable, feedable, levels up with session activity; migrated from the removed .dsh-plugin format to dsh.bundle | 0.1.0-rc.8 (2026-08-20) |
| desktop-pet | 288 | [IvenKooLab/desktop-pet](https://github.com/IvenKooLab/desktop-pet/tree/HEAD/adapters/dsh/comi-bridge) | Comi pet for DSH: session status, in-app overlay and standalone desktop handoff | 0.2.1-rc.5 (2026-11-02) |
| gal-view | 217 | [Ayase34/gal-view](https://github.com/Ayase34/gal-view) | DSH Web GUI 会话页的 GAL 视窗：Galgame 风格对话视图 + 场景元素可视化编辑器 | 0.1.0-rc.8 (2026-08-20) |
| dsh-whale-musume | 209 | [Sutera-Diffusus/dsh-whale-musume](https://github.com/Sutera-Diffusus/dsh-whale-musume) | A whale-girl Kanban Musume mascot for DeepSeek Harness | 0.1.0-rc.8 (2026-08-20) |
| dsh-hongguo | 164 | [frostming/dsh-hongguo](https://github.com/frostming/dsh-hongguo) | 摸鱼短剧：右侧边栏短剧播放器，等待 Agent 时提示调出（基于 openhongguo） | 0.2.2-rc.1 (2026-11-07) |
| dsh-game-material-master | 155 | [universe-st/dsh-game-material-master](https://github.com/universe-st/dsh-game-material-master) · [npm](https://www.npmjs.com/package/dsh-game-material-master) | 游戏素材大师：DSH 插件，包含八方向图生成、图片生成、序列帧生成三个游戏素材模块，以及实验性的骨骼动画生成模块。八方向图默认「转圈截帧」（一段原地匀速转一圈的绿幕视频 → 按时间轴截出八个方向），也可逐方向生图；火山方舟 Seedream 生图 + MiniMax 图生视频 + 本地抠绿幕合成。 | 0.1.7-rc.2 (2026-09-29) |
| dsh-personal-center | 115 | [PolinniZhong/dsh-personal-center](https://github.com/PolinniZhong/dsh-personal-center) · [npm](https://www.npmjs.com/package/dsh-personal-center) | DSH 个人中心:设置 →「个人」分区(个人资料统计 UI + 个性化自定义指令 + 成本估算 + 桌面宠物) | 0.1.0-rc.8 (2026-08-20) |
| dsh-boot-suite | 104 | [LeeRolling/dsh-boot-suite](https://github.com/LeeRolling/dsh-boot-suite) · [npm](https://www.npmjs.com/package/dsh-boot-suite) | DeepSeek Harness 开机套件：冷启动开机动画 + 聊天壁纸。开机动画走设置页「启动动画」（两幕可选，默认档案暖白 → 鲸鱼娘扫描睁眼；支持导入自定义动画、三段自定义转场、本地动画删除、真声台词 + 界面音效）；聊天壁纸走设置页「聊天背景」（静态底图 / 循环视频 + 大字横幅，支持丢图即换、自定义视频目录、壁纸引擎项目文件夹与纱的浓度调节，视频默认静音循环）。 | 0.2.1-rc.2 (2026-10-26) |
| dsh-whale-catch | 101 | [Rosynb666/dsh-whale-catch](https://github.com/Rosynb666/dsh-whale-catch) · [npm](https://www.npmjs.com/package/dsh-whale-catch) | 深海鱼篓：不用 agent 登记，自动收进本次会话产出的文件，右侧栏一键预览、打包 zip、归档。Zero-registration deliverable basket for DeepSeek Harness. | 0.2.1-rc.2 (2026-10-19) |
| dsh-whale-widget-plus | 93 | [louke6572/dsh-Dfy](https://github.com/louke6572/dsh-Dfy) | DSH Web 界面右下角的 DeepSeek 余额小鲸鱼挂件（含今日已用、峰谷定价、随机台词、音效与每轮消耗统计） | 0.1.0-rc.8 (2026-08-25) |
| dsh-whale-girl-live2d | 92 | [Andersen216/dsh-whale-girl-live2d](https://github.com/Andersen216/dsh-whale-girl-live2d) | 鲸鱼娘桌宠：把 Live2D 鲸鱼娘挂进 DSH Web 界面的桌宠插件——模型常驻桌面，跟着 agent 的真实状态换表情与动作，点一下就能直接跟 agent 说话，右键菜单可换表情 / 换装 / 摆场景 / 演小动作。（Whale Girl Pet: a Live2D companion for the DeepSeek Harness Web UI. | 0.1.7-rc.2 (2026-09-29) |
| dsh-whale-musume-persona | 74 | [Kaalia0912/dsh-whale-musume-persona](https://github.com/Kaalia0912/dsh-whale-musume-persona) | DeepSeek Harness 全局鲸鱼娘（大肥鱼）人设：standard 预设分叉 whale + 部署 persona，傲娇鲸鱼娘口吻 + 中文思考。 | 0.1.0-rc.8 (2026-08-20) |
| dsh-pet-live2d | 73 | [A8Chann/dsh-pet-live2d](https://github.com/A8Chann/dsh-pet-live2d/tree/HEAD/dsh-live2d-pet-desktop/npm) | Live2D 桌宠插件：为 DSH Web GUI 挂一只可拖动、会跟随鼠标、能换动作与表情的 Live2D 宠物。 | 0.1.7-rc.2 (2026-09-29) |
| dsh-pet-zhu10900 | 68 | [zhu1090093659/dsh-pet](https://github.com/zhu1090093659/dsh-pet) · [npm](https://www.npmjs.com/package/@linxin666/dsh-pet) | Multi-pet companion plugin for the dsh web GUI: a registry-driven floating pet that reacts to model activity, with per-pet naming, petting/feeding interactions and an affinity score | 0.1.7-rc.2 (2026-09-29) |
| dsh-desktop-pet-xiaoshih | 64 | [xiaoshihou514/dsh-desktop-pet](https://github.com/xiaoshihou514/dsh-desktop-pet) | Linux and Windows desktop companion for DeepSeek Harness | 0.1.1-rc.2 (2026-09-09) |
| dsh-pet-remielle | 63 | [Gin-7/dsh-pet-remielle](https://github.com/Gin-7/dsh-pet-remielle) · [npm](https://www.npmjs.com/package/dsh-pet-remielle) | Hot-pluggable Remielle (蕾米埃尔) sticker pet for the dsh web GUI: a transparent floating companion from Zenless Zone Zero that switches animated GIF moods with the harness work state | 0.1.0-rc.8 (2026-08-20) |
| deepseek-pet | 61 | [keleus/deepseek-pet](https://github.com/keleus/deepseek-pet) | DeepSeek Pet plugin: an interactive, state-aware companion embedded in DeepSeek Harness Web | 0.1.0-rc.8 (2026-08-20) |
| dsh-godot-skill | 60 | [akira399/dsh-godot-skill](https://github.com/akira399/dsh-godot-skill) | Godot Engine 4.x full-stack game development skill for DeepSeek Harness (DSH). A host plugin that registers the `godot-4-development` skill — covering renderers, 2D/3D graphics & physics… | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 1063. **[all 1063 →](lists/fun.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Bundles

npm packages with a `dsh.bundle` manifest: composition layers a profile boots from.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-base (official) | 277021 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/bundle/base) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-base) | The shared dsh core as a profile bundle: every profile's first patch layer, inserting the base plugin rows over the empty profile root | 0.1.0-rc.5 (2026-08-13) |
| dsh-headless (official) | 277021 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/bundle/headless) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-headless) | The one-shot bundle: a direct core Agent/Session runner over dsh-base with no Host, HTTP, or browser layer | 0.1.0-rc.5 (2026-08-13) |
| dsh-web-app (official) | 277021 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/bundle/web-app) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-web-app) | The browser-surface bundle: the web patch layer over dsh-base plus the runtime glue plugin (frontend dist serving, web-surface prompt, URL line) | 0.1.0-rc.5 (2026-08-13) |
| dsh-tui-ccch1mneyyy | 7279 | [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) · [npm](https://www.npmjs.com/package/@deepseek-harness-tui/dsh-tui) | Claude Code-style interactive TUI front door for DeepSeek Harness agents, built on a ported Ink core. | 0.1.0-rc.8 (2026-08-20) |
| dsh-ops | 5622 | [T-Auto/dsh-ops](https://github.com/T-Auto/dsh-ops) · [npm](https://www.npmjs.com/package/dsh-ops) | Native file and PTC tools for DSH on Windows x64, Linux x64 and macOS Apple Silicon; Windows-only optional Bash and PowerShell 7 payloads | 0.2.0-rc.2 (2026-10-17) |
| dsh-im | 3402 | [xmanrui/dsh-im](https://github.com/xmanrui/dsh-im) · [npm](https://www.npmjs.com/package/@xmanrui/dsh-im) | QR-code IM channel plugin that connects Feishu, WeChat, and DingTalk bots to DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-invoice-downloader | 542 | [EthanYoQ/Invoice-Downloader](https://github.com/EthanYoQ/Invoice-Downloader/tree/HEAD/plugins/dsh-invoice-downloader) · [npm](https://www.npmjs.com/package/@ethanyoq/dsh-invoice-downloader) | Local IMAP invoice download, OCR, archival, and Excel reimbursement summaries through a DSH profile bundle. | 0.1.0-rc.5 (2026-08-22) |
| dsh-config-manager | 322 | [xiajiajun516/dsh-config-manager](https://github.com/xiajiajun516/dsh-config-manager) · [npm](https://www.npmjs.com/package/dsh-config-manager) | Backup, export, import, and migrate DeepSeek Harness configuration from the web UI. | 0.1.0-rc.8 (2026-08-20) |
| oh-dsh | 322 | [hust-open-atom-club/oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) | Community distribution bundling TUI, desktop, and web UI surfaces with layered installation, pinned to an exact harness revision via dsh-source.json | 0.1.0-rc.8 (2026-08-20) |
| dsh-mneme | 217 | [slow-stack/mneme](https://github.com/slow-stack/mneme/tree/HEAD/dsh-mneme) · [npm](https://www.npmjs.com/package/@modusensus/dsh-mneme) | Cross-session memory with SQLite, Markdown mirrors, autoDream consolidation, and a web panel. | 0.1.0-rc.8 (2026-08-20) |
| dsh-memory-safe | 169 | [seriousz158/dsh-memory](https://github.com/seriousz158/dsh-memory) · [npm](https://www.npmjs.com/package/dsh-git-memory) | Local Git-backed long-term memory for DeepSeek Harness with cited context, usage-aware read tools, safe sync, preview, and rollback. | 0.1.0-rc.7 (2026-08-21) |
| dsh-super-injector | 167 | [yjh051108/dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) | Runtime injector for local DSH plugin packages with hot reload and a settings-page manager. | 0.1.0-rc.8 (2026-08-20) |
| dsh-agent-team | 89 | [Contexera/dsh-agent-team](https://github.com/Contexera/dsh-agent-team) · [npm](https://www.npmjs.com/package/@contexera/dsh-agent-team) | Help humans organize tasks and let agents collaborate - a Team plugin for DeepSeek Harness | 0.1.1-rc.2 (2026-08-26) |
| dsh-stock-watch | 86 | [Awu12277/dsh-stock-watch](https://github.com/Awu12277/dsh-stock-watch) | Collapsible A-share watchlist popup with live quotes, charts, and a target-price panel. | 0.1.0-rc.8 (2026-08-20) |
| dsh-any-background | 57 | [Tkingxiao/dsh-any-background](https://github.com/Tkingxiao/dsh-any-background) · [npm](https://www.npmjs.com/package/dsh-any-background) | Custom wallpaper and theme-color controls for the DeepSeek Harness web UI, including opacity, blur, and a color wheel. | 0.1.0-rc.8 (2026-08-20) |
| dsh-code | 48 | [UNLINEARITY/dsh-code](https://github.com/UNLINEARITY/dsh-code) · [npm](https://www.npmjs.com/package/dsh-code) | Claude-Code-style interactive TUI bundle for DeepSeek Harness with a DeepSeek-blue whale banner and live session transcript. | 0.1.0-rc.8 (2026-08-20) |
| dsh-remotion | 35 | [STARDUSTLC666/dsh-remotion](https://github.com/STARDUSTLC666/dsh-remotion) · [npm](https://www.npmjs.com/package/dsh-remotion) | Registers the Remotion React video-creation skill set for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| dsh-toolkit | 33 | [omdsh-dev/dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit) | Zero-dependency toolkit collection: time, encoding, json, calculator, csv, regex, markdown, diff, stat, and schema in one entry. | 0.2.0-rc.2 (2026-10-05) |
| dsh-hyperframes | 30 | [STARDUSTLC666/dsh-hyperframes](https://github.com/STARDUSTLC666/dsh-hyperframes) · [npm](https://www.npmjs.com/package/dsh-hyperframes) | Registers HyperFrames by HeyGen video-creation skills for DeepSeek Harness. | 0.1.0-rc.8 (2026-08-20) |
| pptfast | 27 | [liustack/pptwise](https://github.com/liustack/pptwise) · [npm](https://www.npmjs.com/package/@liustack/pptwise) | Stable editable PPTX generation for DeepSeek Harness agents: semantic IR in, native DrawingML out. | 0.1.0-rc.8 (2026-08-20) |
| dsh-harmony | 21 | [memorax-ai/dsh-harmony](https://github.com/memorax-ai/dsh-harmony) · [npm](https://www.npmjs.com/package/dsh-harmony) | Runtime library to patch, replace, and decorate DeepSeek Harness plugins with hot reload. | 0.1.0-rc.8 (2026-08-20) |
| dsh-plugin-marketplace-yelebai | 21 | [YELEBAI/dsh-plugin-marketplace](https://github.com/YELEBAI/dsh-plugin-marketplace) | A plugin marketplace for DeepSeek Harness with categories, trending discovery, install management, and controlled restart. | 0.1.0-rc.8 (2026-08-20) |
| dsh-asr-plugin | 20 | [huliux/dsh-asr-plugin](https://github.com/huliux/dsh-asr-plugin) · [npm](https://www.npmjs.com/package/@huliux/dsh-asr-plugin) | Local recording and meeting transcription for DSH on macOS (Apple Silicon only) | 0.2.0-rc.2 (2026-10-17) |
| dsh-fabric | 18 | [omdsh-dev/stent](https://github.com/omdsh-dev/stent) · [npm](https://www.npmjs.com/package/@oh-my-dsh/stent-pack) | Stent/Mixin extension workspace: installable profile bundle carrier over the stent package trio | 0.1.1-rc.2 (2026-09-09) |
| dsh-desk | 17 | [majiayu000/dsh-desk](https://github.com/majiayu000/dsh-desk) | Tauri desktop companion for DeepSeek Harness: wraps official dsh 0.1.0-rc.6 in a system WebView with isolated DSH_HOME and a plugin-manager UI. | 0.1.0-rc.8 (2026-08-20) |

<sub>Showing the 25 most-starred of 102. **[all 102 →](lists/bundles.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Skills

Anthropic-format `SKILL.md` units; dsh discovers them from its skill roots (no nested discovery, kebab-case names only).

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| rea | 445155 | [morluto/rea](https://github.com/morluto/rea/tree/HEAD/skills/reverse-engineer-anything) | Reverse engineer anything from your terminal or agent with one CLI and MCP server. | 0.1.1-rc.2 (2026-09-09) |
| openclaw | 394229 | [openclaw/openclaw](https://github.com/openclaw/openclaw/tree/HEAD/custodian-skills/add-model-provider) | Multi-channel AI gateway with extensible messaging integrations | 0.2.1-rc.5 (2026-11-03) |
| ECC | 299874 | [affaan-m/ECC](https://github.com/affaan-m/ECC/tree/HEAD/skills/accessibility) | Harness-native agent operating system for Codex, OpenCode, Cursor, Gemini, Claude Code, and terminal workflows - skills, hooks, rules, MCP conventions, and operator control-plane patterns | 0.1.0-rc.8 (2026-08-25) |
| paperclip | 112456 | [paperclipai/paperclip](https://github.com/paperclipai/paperclip/tree/HEAD/skills/paperclip-board) | The open-source app everyone uses to manage agents at work | 0.1.0-rc.8 (2026-08-25) |
| ruflo | 81315 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | Ruflo - Enterprise AI agent orchestration for Claude Code. Deploy 60+ specialized agents in coordinated swarms with self-learning, fault-tolerant consensus, vector memory, and MCP integration | 0.1.0-rc.8 (2026-08-24) |
| ai-engineering-from-scratch | 77935 | [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch/tree/HEAD/skills/blueprint-figure) | Learn AI Engineering! Learn it. Build it. Ship it for others. | 0.2.0-rc.2 (2026-10-17) |
| mem0 | 68679 | [mem0ai/mem0](https://github.com/mem0ai/mem0/tree/HEAD/skills/mem0-cli) | Mem0 long-term memory as a native DeepSeek Harness (Cordis) plugin. | 0.2.1-rc.5 (2026-11-03) |
| AiToEarn | 27520 | [yikart/AiToEarn](https://github.com/yikart/AiToEarn/tree/HEAD/skills/doubao-skill-aitoearn) | Let's use AI to Earn! | 0.2.2-rc.1 (2026-11-07) |
| colleague-skill | 26461 | [titanwings/distilly](https://github.com/titanwings/distilly) | Digital-companion skill in the Anthropic SKILL.md format dsh reads; install by copying it into a dsh skill root such as .agents/skills | unverified |
| compound-engineering-plugin | 26000 | [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin/tree/HEAD/skills/ce-babysit-pr) | Official Compound Engineering skills plugin for coding agents | 0.1.0-rc.8 (2026-08-25) |
| learn-harness-engineering | 23892 | [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering/tree/HEAD/skills/harness-creator) | Course docs for Learn Harness Engineering powered by VitePress. | 0.1.1-rc.2 (2026-09-09) |
| NemoClaw | 22994 | [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw/tree/HEAD/skills/nemoclaw-user-guide) | NemoClaw — run OpenClaw inside OpenShell with NVIDIA inference | 0.1.0-rc.8 (2026-08-25) |
| Auto-claude-code-research-in-sleep | 18915 | [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/tree/HEAD/skills/ablation-planner) | ARIS research-workflow skills as a DeepSeek Harness bundle: 82 skills plus cross-model adversarial review through Codex. | 0.2.1-rc.5 (2026-11-03) |
| skill | 9329 | [anbeime/skill](https://github.com/anbeime/skill) | 收录最全、更新最快的技能Skills商店：416个精选原创技能包（涵盖文档处理、内容创作、编程开发、机器学习、自动化工作流），全部打包好可直接安装使用！同时自动抓取GitHub上万个Skills项目，按分类、更新时间、Star数量整理。 | 0.1.1-rc.2 (2026-09-02) |
| honcho | 8029 | [plastic-labs/honcho](https://github.com/plastic-labs/honcho/tree/HEAD/skills/honcho-cli) | Memory library for building stateful agents | 0.1.7-rc.2 (2026-09-29) |
| agentscope-java | 6301 | [agentscope-ai/agentscope-java](https://github.com/agentscope-ai/agentscope-java) | DeepSeek Harness Cordis plugin that registers a DSH process with AgentScope Service (service-controlplane) | 0.2.1-rc.5 (2026-11-03) |
| Vibe-Skills | 3807 | [foryourhealth111-pixel/Vibe-Skills](https://github.com/foryourhealth111-pixel/Vibe-Skills) | Intelligent Skill routing and workflow orchestration for AI agents — +21.12 pp reward, −29.6% tokens on SkillsBench with DeepSeekV4Flash-VE. | 0.1.1-rc.2 (2026-09-09) |
| deepwiki-rs | 3167 | [sopaco/deepwiki-rs](https://github.com/sopaco/deepwiki-rs/tree/HEAD/assets/skill-litho) | Turn code into clarity. Generate accurate technical docs and AI-ready context in minutes—perfectly structured for human teams and intelligent agents. | 0.1.1-rc.2 (2026-09-18) |
| J-Space-Cognition-Suite-V3.7 | 2958 | [Tiger3807861189/J-Space-Cognition-Suite](https://github.com/Tiger3807861189/J-Space-Cognition-Suite/tree/HEAD/j-space) | J-Space Cognition Suite — a model-agnostic inference-time control suite for deep reasoning, long-horizon work, verification, and recovery. Based on Anthropic's J-space global workspace research. | 0.1.1-rc.2 (2026-09-18) |
| vox-director | 2724 | [Alisa0808/vox-director](https://github.com/Alisa0808/vox-director) | Vox Director — an open-source Agent Skill that turns one topic into a finished Vox-style paper-collage explainer/ad video: script, collage keyframes, motion, voice-over, music and captions… | 0.1.0-rc.8 (2026-08-21) |
| grida | 2705 | [gridaco/grida](https://github.com/gridaco/grida/tree/HEAD/skills/dotcanvas) | Grida — Open Canvas | 0.1.7-rc.2 (2026-09-29) |
| tiny-vue | 2273 | [opentiny/tiny-vue](https://github.com/opentiny/tiny-vue/tree/HEAD/.agents/skills) | An enterprise-class UI component library, support both Vue.js 2 and Vue.js 3, as well as PC and mobile. | 0.2.1-rc.5 (2026-11-02) |
| new-term-radar | 2144 | [zhuyansen/new-term-radar](https://github.com/zhuyansen/new-term-radar/tree/HEAD/skills/ai-listening) | Daily radar for new AI terms: names of new models, products and repos, caught on X, Hugging Face, GitHub and sitemaps before keyword tools list them. | 0.2.1-rc.5 (2026-11-02) |
| last30days-skill-cn | 2087 | [Jesseovo/last30days-skill-cn](https://github.com/Jesseovo/last30days-skill-cn) | last30days-cn 是一个 AI Agent 技能（Skill），能够自动搜索中国互联网 8 大主流平台最近 30 天的内容，综合分析后生成有据可查的研究报告。 | 0.1.0-rc.8 (2026-08-21) |
| math-modeling-skill | 1914 | [XiaoMaColtAI/math-modeling-skill](https://github.com/XiaoMaColtAI/math-modeling-skill) | 数学建模技能 - 面向 CUMCM、MCM/ICM 等数学建模竞赛的三阶段工作流：建模分析、Python/MATLAB 编程与 DOCX 论文生成。包含丰富的算法资源库(优化/预测/评价/图论/机器学习等)、角色指导文档、论文模板和实用工具脚本 | 0.1.0-rc.8 (2026-08-21) |

<sub>Showing the 25 most-starred of 1112. **[all 1112 →](lists/skills.md)** · [gallery](https://dsh.works/awesome-dsh-plugins/) · [JSON](data/plugins.json)</sub>

### Themes

UI skins. The dedicated registry is [awesome-dsh-themes](https://github.com/dshworks/awesome-dsh-themes); only themes that also ship plugin machinery live here.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-deep-whale | 3073 | [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale/tree/HEAD/maid-atelier) · [npm](https://www.npmjs.com/package/@smalltailqwq/dsh-client-ui-skin-maid-atelier) | Whale-girl skin series for the web UI; maid-atelier ships as a dsh.bundle package installed from a local clone (CC BY-NC-SA, non-commercial) | 0.1.0-rc.8 (2026-08-20) |
| dsh-homepage-skin | 3 | [yushi-xxh/dsh-homepage-skin](https://github.com/yushi-xxh/dsh-homepage-skin) · [npm](https://www.npmjs.com/package/dsh-homepage-skin) | DeepSeek Harness homepage-style background skin: WebGL fluid, dot grid and digital whale. Dark and light variants included. | 0.1.0-rc.8 (2026-08-20) |

### Tools

Developer tooling around dsh.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| create-dsh-plugin | 64 | [whyihaveyou/dsh-suite](https://github.com/whyihaveyou/dsh-suite/tree/HEAD/packages/create-dsh-plugin) · [npm](https://www.npmjs.com/package/create-dsh-plugin) | Scaffold a DeepSeek Harness plugin in seconds: tool, events, and webui templates with next-tag version pinning and a built-in --verify smoke test. | unverified |
| oh-my-dsh-amplift | 17 | [amplifthq/oh-my-dsh](https://github.com/amplifthq/oh-my-dsh) · [npm](https://www.npmjs.com/package/oh-my-dsh) | Plugins, sensible defaults, and a launcher for DeepSeek Harness (dsh) — everything you're missing, without forking upstream. | 0.1.0-rc.8 (2026-08-20) |
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
