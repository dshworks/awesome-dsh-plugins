<!-- Rendered by scripts/render.mjs from data/plugins.json. Do not edit by hand: edit the data or the template, then run `npm run render`. -->

# awesome-dsh-plugins

[![powered by dsh](https://img.shields.io/badge/powered__by-dsh-4D6BFE?logo=deepseek)](https://github.com/deepseek-ai/deepseek-harness)
[![license: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![browse the reef](https://img.shields.io/badge/browse-the_reef-ff7a59)](https://dshworks.github.io/awesome-dsh-plugins/)

A spam-filtered, open-data registry of [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`) plugins, bundles, and skills — 490 entries across 17 functional areas, every one stating the dsh version it was last verified against.

**[Browse the reef](https://dshworks.github.io/awesome-dsh-plugins/)** — the same registry as a filterable, sortable gallery.

Most awesome lists are prose. This one is data: [`data/plugins.json`](data/plugins.json) is the source of truth, this README is rendered from it. Build on the JSON directly:

```sh
curl -s https://raw.githubusercontent.com/dshworks/awesome-dsh-plugins/main/data/plugins.json
```

Each entry carries two orthogonal dimensions: `category` is the form factor (bundle, plugin, skill, theme, tool — what dsh docs call things) and `tags` is the functional area (what it actually does). `stars` is the linked repo's GitHub count (refreshed by `scripts/stars.mjs`, display signal only), and `featured` marks a hand-curated editor's pick.

## Why a filtered registry

DeepSeek delegates the ecosystem to the community: no first-party marketplace, discovery happens on the [`dsh-plugin`](https://github.com/topics/dsh-plugin) GitHub topic. On launch day that topic already held 431 repositories, template forks and topic-riders included. A raw topic feed is not a registry; the filter is the value this repo adds.

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

- **[dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui)** — Plugin and skin collection for the dsh Web UI: task board, git graph, right-side panel, remote mobile UI, live token stats, and a skin center that routes around the theme-persistence gap <sub>1741 ★ · ui</sub>
- **[modlens](https://github.com/liustack/modlens)** — Vision plugin for text-only models: image understanding bridged into the harness via a dsh.bundle patch layer, shipping a modlens skill alongside <sub>1182 ★ · vision</sub>
- **[dsh-cc-tui](https://github.com/ccch1mneyyy/dsh-cc-tui)** — Claude Code-style fullscreen terminal UI: streaming thinking, double-Esc rewind, context progress bar, and TPS meter over the headless runner <sub>820 ★ · terminal</sub>
- **[dsh-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar)** — Full sidebar workbench with file rendering/editing, terminal, Git, and subagents; third-party extensions can register new tabs <sub>696 ★ · ui</sub>
- **[whale-girl](https://github.com/vlln/whale-girl)** — Desktop-pet companion for the web GUI (QQ-pet style): draggable, feedable, levels up with session activity; migrated from the removed .dsh-plugin format to dsh.bundle <sub>119 ★ · fun</sub>
- **[dsh-browser](https://github.com/Lum1104/dsh-browser)** — Chrome sidebar plugin that lets dsh operate the browser directly, without vision. <sub>80 ★ · capabilities</sub>
- **[dsh-workflow](https://github.com/icetomoyo/dsh_workflow)** — Workflow layer that upgrades one-shot multi-agent dispatch into savable, governable, observable, and resumable workflows <sub>54 ★ · agents</sub>
- **[dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind)** — Rewind conversation and workspace state to a previous turn, backed by a persistent change ledger <sub>35 ★ · memory</sub>
- **[dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon)** — Local-first three-tier memory for dsh: runtime memory, searchable documents, and supervised memory spaces. <sub>11 ★ · memory</sub>
- **[dsh-usage-stats](https://github.com/lanlandeli/dsh-usage-stats)** — Beautiful token analytics for DeepSeek Harness — trends, activity heatmaps, model breakdowns, and data exports. <sub>2 ★ · usage</sub>

## Plugins by area

468 Cordis plugins activated through patch rows in a bundle or profile, grouped by what they do. Data updated 2026-08-14.

### Web UI

Panels, composer upgrades, navigation, layout, mobile.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-web-ui ⭐ | 1741 | [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) | Plugin and skin collection for the dsh Web UI: task board, git graph, right-side panel, remote mobile UI, live token stats, and a skin center that routes around the theme-persistence gap | 0.1.0-rc.5 (2026-08-13) |
| dsh-better-sidebar ⭐ | 696 | [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) · [npm](https://www.npmjs.com/package/dsh-better-sidebar) | Full sidebar workbench with file rendering/editing, terminal, Git, and subagents; third-party extensions can register new tabs | 0.1.0-rc.5 (2026-08-13) |
| dsh-at-file | 117 | [omdsh-dev/dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) | Codex-style @file mentions in the composer: search workspace files and attach their contents to prompts | 0.1.0-rc.5 (2026-08-13) |
| dsh-visualize | 78 | [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) | Generative UI in conversation: a visualize tool plus companion skill renders interactive HTML cards in sandboxed frames with streaming preview | 0.1.0-rc.5 (2026-08-13) |
| dsh-genui | 71 | [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) | Renders interactive UI components inline in assistant replies via the dsh-ui fence: layout, charts, plots, forms, quizzes, mermaid, 3D scenes, and an action event loop back to the model. | 0.1.0-rc.6 (2026-08-14) |
| dsh-openpencil | 64 | [ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) · [npm](https://www.npmjs.com/package/@zseven-w/dsh-openpencil) | OpenPencil design preview and editing inside the web UI | 0.1.0-rc.5 (2026-08-13) |
| dsh-annotation | 39 | [omdsh-dev/dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) | DSH Web selection-annotation plugin: select assistant text, annotate (optional), and press Enter to send the annotation block with your message — the model replies to each annotation by number,. | 0.1.0-rc.6 (2026-08-14) |
| dsh-open-in-vscode | 39 | [omdsh-dev/dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) | Open workspace directories in VS Code directly from the web GUI | 0.1.0-rc.5 (2026-08-13) |
| dsh-ui-status-label | 28 | [alingalingling/ui-status-label](https://github.com/alingalingling/ui-status-label) | Web UI plugin that makes the assistant's thinking status label ('deep diving') user-configurable through settings | 0.1.0-rc.5 (2026-08-13) |
| dsh-share | 16 | [hellodigua/dsh-share](https://github.com/hellodigua/dsh-share) | Share a DSH conversation turn as a PNG image. | 0.1.0-rc.6 (2026-08-14) |
| dsh-github-panel | 15 | [PivotStackIntelligence/dsh-github](https://github.com/PivotStackIntelligence/dsh-github) | Source Control and GitHub panel for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-composer-polish | 13 | [tianji-qingtian/dsh-composer-polish](https://github.com/tianji-qingtian/dsh-composer-polish) | Composer draft polisher: a sparkle button rewrites the current draft with a zero-latency flash pass. | 0.1.0-rc.6 (2026-08-14) |
| dsh-auto-continue | 10 | [HsiangNianian/dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) | Automatically sends continue when a Web UI request is interrupted by network errors or other non-human causes. | 0.1.0-rc.6 (2026-08-14) |
| dsh-file-explorer | 9 | [joejojoking-cloud/dsh-file-explorer](https://github.com/joejojoking-cloud/dsh-file-explorer) | Right-side resizable file tree with search, syntax-highlighted preview, in-panel editing, and one-click VS Code open. | 0.1.0-rc.6 (2026-08-14) |
| dsh-diff-viewer | 6 | [lehhair/dsh-diff-viewer](https://github.com/lehhair/dsh-diff-viewer) | DSH diff-viewer plugin: PiUI-style visual diff surface (split/unified, change bars, line numbers, word-level marks, collapsed context, windowed rendering) replacing the stock DiffBlock for. | 0.1.0-rc.6 (2026-08-14) |
| dsh-drop-to-path | 6 | [loudMore/dsh-drop-to-path](https://github.com/loudMore/dsh-drop-to-path) | Drop or paste images, PDFs, office docs, zips, videos and audio into the DSH composer as workspace file paths instead of model attachments — lets a text-only model agent read them via vision tools. | 0.1.0-rc.6 (2026-08-14) |
| dsh-git-graph | 6 | [1841220388zzzcccxxx-star/dsh-git-graph](https://github.com/1841220388zzzcccxxx-star/dsh-git-graph) | Embedded git repository graph visualizer for the DeepSeek Harness web GUI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-updater-ui | 6 | [xingyingyuzhui/dsh-updater-ui](https://github.com/xingyingyuzhui/dsh-updater-ui) | Settings-page updater: check and pull DeepSeek Harness updates with a version badge. | 0.1.0-rc.6 (2026-08-14) |
| dsh-file-review | 5 | [left0ver/dsh-file-review](https://github.com/left0ver/dsh-file-review) · [npm](https://www.npmjs.com/package/dsh-file-review) | Review files an agent just changed in a line-numbered unified diff drawer. | 0.1.0-rc.6 (2026-08-14) |
| dsh-mobile | 5 | [lehhair/dsh-mobile](https://github.com/lehhair/dsh-mobile) | Narrow-screen pager: the stock three-column frame becomes a swipeable sidebar\|chat pager with safe-area insets. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-ya-workspace-sidebar | 5 | [HuanLinOTO/dsh-plugin-ya-workspace-sidebar](https://github.com/HuanLinOTO/dsh-plugin-ya-workspace-sidebar) | Two-level DSH workspace sidebar with global recent sessions and breadcrumb navigation. | 0.1.0-rc.6 (2026-08-14) |
| dsh-session-deeplink | 5 | [R3alloc/dsh-session-deeplink](https://github.com/R3alloc/dsh-session-deeplink) | DSH web client plugin: open a session directly from the URL (?session=<id>). | 0.1.0-rc.6 (2026-08-14) |
| dsh-client-ui-mobile-adapt | 4 | [Hotsteel2901/dsh-client-ui-mobile-adapt](https://github.com/Hotsteel2901/dsh-client-ui-mobile-adapt) | Mobile adaptation for the DeepSeek Harness Web GUI: single-column layout, sidebar drawer, compact header/composer, fullscreen settings, trajectory floating details, stats pill panel | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-conversation-outline | 4 | [XavierMarquis93/dsh-plugin-conversation-outline](https://github.com/XavierMarquis93/dsh-plugin-conversation-outline) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-client-ui-conversation-outline) | Per-conversation outline rail for Web: a clickable index of user questions and agent answers that jumps to the message. | 0.1.0-rc.6 (2026-08-14) |
| dsh-sidechain | 4 | [omdsh-dev/dsh-sidechain](https://github.com/omdsh-dev/dsh-sidechain) | /side persistent side conversations and /btw one-shot side questions in an ephemeral fork that does not write main history. | 0.1.0-rc.6 (2026-08-14) |
| dsh-spotlight | 4 | [0xsline/dsh-spotlight](https://github.com/0xsline/dsh-spotlight) | Keyboard-first command palette for DeepSeek Harness Web | 0.1.0-rc.6 (2026-08-14) |
| dsh-daily-progress | 3 | [omdsh-dev/dsh-daily-progress](https://github.com/omdsh-dev/dsh-daily-progress) | DSH daily progress achievement plugin: evening plans for tomorrow, a todo-style checklist today, and a thermometer completion-rate widget in the composer dock | 0.1.0-rc.6 (2026-08-14) |
| dsh-node-nav | 3 | [Seryta/dsh-node-nav](https://github.com/Seryta/dsh-node-nav) | Conversation node navigator: a right-side node string with hover preview, click-to-jump, and an active pill. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-aigc-canvas | 3 | [HuanLinOTO/dsh-plugin-aigc-canvas](https://github.com/HuanLinOTO/dsh-plugin-aigc-canvas) | DSH plugin: an infinite free canvas for the better-sidebar plus provider-agnostic generation. Exposes aigc_get_provider_info / aigc_http_request (endpoint + apiKey auto-attached) /. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-session-delete | 3 | [lsz-asd/dsh-plugin-session-delete](https://github.com/lsz-asd/dsh-plugin-session-delete) | Delete sessions of a DeepSeek Harness profile from the UI: header danger button + session-row menu item with a risk-consent dialog; host endpoint + tool delete the log, projection cache and. | 0.1.0-rc.6 (2026-08-14) |
| dsh-revive | 3 | [omdsh-dev/dsh-revive](https://github.com/omdsh-dev/dsh-revive) | DSH 一键复活：重启后给所有被打断的会话自动发送「继续」指令（/revive 命令 + revive_sessions 工具 + 浏览器一键按钮） | 0.1.0-rc.6 (2026-08-14) |
| dsh-ui-quote-selection | 3 | [nekogpt/dsh-ui-quote-selection](https://github.com/nekogpt/dsh-ui-quote-selection) | Select chat text and quote it into the composer as an inline reference chip; full text materializes on submit. | 0.1.0-rc.6 (2026-08-14) |
| dsh-wordbox | 3 | [arcmosin/dsh-wordbox](https://github.com/arcmosin/dsh-wordbox) | Common-word box for the Web GUI: a persistent slide-up panel next to the composer for project phrases. | 0.1.0-rc.6 (2026-08-14) |
| dsh-client-shortcuts | 2 | [blue-a11y/dsh-client-shortcuts](https://github.com/blue-a11y/dsh-client-shortcuts) | Global keyboard shortcuts plugin for the DeepSeek Harness web GUI: ctx.shortcuts registry service, rebindable settings page, and default mod+l/mod+k/mod+shift+c bindings | 0.1.0-rc.6 (2026-08-14) |
| dsh-conv-search | 2 | [beijingwahw/dsh-conv-search](https://github.com/beijingwahw/dsh-conv-search) | In-conversation text search for the dsh Web UI (Ctrl+F), match case, whole word, and streaming-aware hits. | 0.1.0-rc.6 (2026-08-14) |
| dsh-dynamic-island | 2 | [YLifeOnlyOnce/dsh-dynamic-island](https://github.com/YLifeOnlyOnce/dsh-dynamic-island) | Liquid Glass Dynamic Island for the DeepSeek Harness Web GUI — a dual-face shell.overlay client plugin (design prototype + plugin in one repo) | 0.1.0-rc.6 (2026-08-14) |
| dsh-ex-setting | 2 | [omdsh-dev/ex-setting](https://github.com/omdsh-dev/ex-setting) | Automatic Web settings and composition configuration bundle for dsh. | 0.1.0-rc.6 (2026-08-14) |
| dsh-file-explorer-zalpha263 | 2 | [Zalpha263/dsh-file-explorer](https://github.com/Zalpha263/dsh-file-explorer) | Persistent web file explorer: lazy directory tree, preview, and inline edit for the workspace. | 0.1.0-rc.6 (2026-08-14) |
| dsh-gadgets | 2 | [Highjobop/dsh-gadgets](https://github.com/Highjobop/dsh-gadgets/tree/HEAD/dsh-gadgets) · [npm](https://www.npmjs.com/package/dsh-gadgets) | One-install bundle of dsh-skin appearance tweaks and dsh-tidy conversation folding for the Web GUI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-media-preview | 2 | [tsonglew/dsh-media-preview](https://github.com/tsonglew/dsh-media-preview) | Audio and video preview viewer for dsh-better-sidebar with Range-seeking streaming. | 0.1.0-rc.6 (2026-08-14) |
| dsh-message-navigator | 2 | [TableRogue/dsh-message-navigator](https://github.com/TableRogue/dsh-message-navigator) | 消息导航条 Message Navigator: DeepSeek Harness 网页聊天界面右侧的垂直消息索引(可安装的 dsh 组合包,Client-only 插件) | 0.1.0-rc.6 (2026-08-14) |
| dsh-open-in-ide | 2 | [LJninse/dsh-open-in-ide](https://github.com/LJninse/dsh-open-in-ide) | Header IDE button that detects VS Code, JetBrains, Cursor, Windsurf, Zed, and Trae on the host. | 0.1.0-rc.6 (2026-08-14) |
| dsh-outline | 2 | [urzeye/dsh-outline](https://github.com/urzeye/dsh-outline) | DSH web plugin: a realtime conversation outline panel (user questions + markdown headings) for the DeepSeek Harness Web GUI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-quote-annotate | 2 | [wangwei-wade/dsh-quote-annotate](https://github.com/wangwei-wade/dsh-quote-annotate) | 选区引用与锚点批注：在 DSH 会话中选中文字 → 批注 → 引用锚点 chip（点击跳回原文、悬停显示原文）→ 提交序列化为结构化引用块。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-side-chat-heartmove | 2 | [heartmove/dsh-side-chat](https://github.com/heartmove/dsh-side-chat) | Select text in a conversation and ask it in a side chat isolated to that session. | 0.1.0-rc.6 (2026-08-14) |
| dsh-skill-loader | 2 | [kezboardpj/dsh-skill-loader](https://github.com/kezboardpj/dsh-skill-loader) | Per-conversation skill catalog picker for DeepSeek Harness (dsh): choose which skills are loaded (载入技能清单) into each conversation on the new-conversation page; unselected skills are unavailable in. | 0.1.0-rc.6 (2026-08-14) |
| dsh-suggested-replies | 2 | [Anionex/dsh-suggested-replies](https://github.com/Anionex/dsh-suggested-replies) | DSH Web plugin that proposes concise next user messages above the composer and inserts a selected reply into the draft without sending it. | 0.1.0-rc.6 (2026-08-14) |
| dsh-think-any-lang | 2 | [lco117/dsh-think-any-lang](https://github.com/lco117/dsh-think-any-lang) | DeepSeek Harness plugin: a General-settings selector that chooses which language the model reasons in, via a system-prompt section. | 0.1.0-rc.6 (2026-08-14) |
| dsh-tidy | 2 | [Highjobop/dsh-gadgets](https://github.com/Highjobop/dsh-gadgets/tree/HEAD/dsh-tidy) · [npm](https://www.npmjs.com/package/dsh-tidy) | Conversation tidy tools: fold a turn to the final result and a right-edge node rail with message previews. | 0.1.0-rc.6 (2026-08-14) |
| dsh-web-components | 2 | [omdsh-dev/web-components](https://github.com/omdsh-dev/web-components) | Web Component adapter that mounts DSH slot trees as native Custom Elements. | 0.1.0-rc.6 (2026-08-14) |
| dsh-zh-output | 2 | [YKennen/dsh-zh-output](https://github.com/YKennen/dsh-zh-output) | DeepSeek Harness 中文输出插件：提供强制「中文思考与输出」的中文预设（标准 / PTC / 极简 / 创造四种模式的中文版）。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-annotation-plugin | 1 | [boboozeng/dsh-annotation-plugin](https://github.com/boboozeng/dsh-annotation-plugin) · [npm](https://www.npmjs.com/package/dsh-annotation-plugin) | Quote selected assistant text into the next request with a host annotation service and a Web quote dock. | 0.1.0-rc.6 (2026-08-14) |
| dsh-auto-fold-turn | 1 | [ycp424c/dsh-auto-fold-turn](https://github.com/ycp424c/dsh-auto-fold-turn) | DSH Web client plugin: auto-folds completed-turn process nodes behind a summary row; expand state persists per session+turn | 0.1.0-rc.6 (2026-08-14) |
| dsh-conversation-share | 1 | [omdsh-dev/dsh-conversation-share](https://github.com/omdsh-dev/dsh-conversation-share) | Select a conversation range and share it as a branded PNG long image, with draggable magnetically snapping markers. | 0.1.0-rc.6 (2026-08-14) |
| dsh-drag-and-drop | 1 | [omdsh-dev/dsh-drag-and-drop](https://github.com/omdsh-dev/dsh-drag-and-drop) | Drag local files into the DSH Web UI and insert their original filesystem paths without uploading or copying them. | 0.1.0-rc.6 (2026-08-14) |
| dsh-file-explorer-cxzrdxy | 1 | [cxzrdxy/dsh-file-explorer](https://github.com/cxzrdxy/dsh-file-explorer) · [npm](https://www.npmjs.com/package/@cxzrdxy/dsh-file-explorer) | In-workspace file tree plus a peer view tab that previews files inside DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-input-history | 1 | [omdsh-dev/dsh-input-history](https://github.com/omdsh-dev/dsh-input-history) | Composer input history: Ctrl+Up / Ctrl+Down recalls and cycles already-sent messages like a terminal. | 0.1.0-rc.6 (2026-08-14) |
| dsh-layout-tools | 1 | [dHR-P/dsh-layout-tools](https://github.com/dHR-P/dsh-layout-tools) | DSH Web 三栏工作台：对话流只保留 AI 输出（工具调用/思考移入右侧面板），左侧工作区文件树带 git 状态徽标。Three-column workbench for the DSH web GUI: clean conversation flow, workspace file tree with git badges, and a live tool-call/think panel. | 0.1.0-rc.6 (2026-08-14) |
| dsh-math-copy | 1 | [Blackspace2/dsh-math-copy](https://github.com/Blackspace2/dsh-math-copy) | Interactive LaTeX copy affordances for DeepSeek Harness math output | 0.1.0-rc.6 (2026-08-14) |
| dsh-mobile-access | 1 | [YiYan129600/dsh-mobile-access](https://github.com/YiYan129600/dsh-mobile-access) · [npm](https://www.npmjs.com/package/dsh-mobile-access) | One-page mobile access setup: Tailscale/LAN detection, scan-to-open QR, and an insecure-origin polyfill. | 0.1.0-rc.6 (2026-08-14) |
| dsh-motion | 1 | [bilbillm/dsh-motion](https://github.com/bilbillm/dsh-motion) · [npm](https://www.npmjs.com/package/@dsh-external/dsh-motion) | Semantic, theme-compatible motion runtime for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-pain-point-check | 1 | [ICCuse/dsh-pain-point-check](https://github.com/ICCuse/dsh-pain-point-check) | After two non-converged experiments, injects three questions and denies non-investigative tool calls until answered. | 0.1.0-rc.6 (2026-08-14) |
| dsh-paste-input | 1 | [omdsh-dev/dsh-paste-input](https://github.com/omdsh-dev/dsh-paste-input) | WebUI file input: Ctrl+V paste with a first-run notice, drag-and-drop, and copy-into-session-workspace on send. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-diff-review | 1 | [Civitasv/dsh-plugin-diff-review](https://github.com/Civitasv/dsh-plugin-diff-review) · [npm](https://www.npmjs.com/package/dsh-plugin-diff-review) | Codex-style diff review for DeepSeek Harness: inspect uncommitted changes and accept or revert files. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-mermaid | 1 | [lj970926/dsh-plugin-mermaid](https://github.com/lj970926/dsh-plugin-mermaid) | DeepSeek Harness web client plugin that renders ```mermaid code blocks with a chart/source toggle. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-working-status | 1 | [Abyss-Seeker/dsh-plugin-working-status](https://github.com/Abyss-Seeker/dsh-plugin-working-status) · [npm](https://www.npmjs.com/package/dsh-plugin-working-status) | Click-to-edit override for the running-turn status label in the DeepSeek Harness web UI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-zh-inventory | 1 | [anxinyuanshiyu/dsh-plugin-zh-inventory](https://github.com/anxinyuanshiyu/dsh-plugin-zh-inventory) · [npm](https://www.npmjs.com/package/dsh-plugin-zh-inventory) | Chinese labels and short descriptions for the DeepSeek Harness settings plugin list. | 0.1.0-rc.6 (2026-08-14) |
| dsh-prompt-enhancer | 1 | [Fishsb/dsh-prompt-enhancer](https://github.com/Fishsb/dsh-prompt-enhancer) | One-click prompt enhancement: fuzzy draft to an independent LLM call, then polished composer text with undo. | 0.1.0-rc.6 (2026-08-14) |
| dsh-prompt-polish | 1 | [JoukoPuro/dsh-prompt-polish](https://github.com/JoukoPuro/dsh-prompt-polish) · [npm](https://www.npmjs.com/package/dsh-prompt-polish) | Composer toolbar button that rewrites your prompt via the connected LLM (balanced, concise, detailed, or code). | 0.1.0-rc.6 (2026-08-14) |
| dsh-side-chat | 1 | [AHGGG/dsh-side-chat](https://github.com/AHGGG/dsh-side-chat) | Codex-style side conversations for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-skill-panel | 1 | [hexbee/dsh-skill-panel](https://github.com/hexbee/dsh-skill-panel) | DSH settings panel for viewing and managing ~/.agents/skills and per-project .agents/skills skill directories | 0.1.0-rc.6 (2026-08-14) |
| dsh-turn-dots | 1 | [Blaczz/dsh-turn-dots](https://github.com/Blaczz/dsh-turn-dots) | Codex-style conversation turn rail: one dot per turn in the DeepSeek Harness web GUI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-turn-navigator | 1 | [xiaoso456/dsh-turn-navigator](https://github.com/xiaoso456/dsh-turn-navigator) | Turn navigator panel (current turn / total turns with up/down jump) for the DeepSeek Harness web GUI | 0.1.0-rc.6 (2026-08-14) |
| dsh-ui-container | 1 | [CH4ACKO3/dsh-ui-container](https://github.com/CH4ACKO3/dsh-ui-container) · [npm](https://www.npmjs.com/package/@ch4acko3/dsh-ui-container) | Remote-capable recursive UI surface container for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-ui-progress | 1 | [omdsh-dev/dsh-ui-progress](https://github.com/omdsh-dev/dsh-ui-progress) | Composer-dock session progress bar: real todo progress, live token rate, interrupted orange state, and reminder. | 0.1.0-rc.6 (2026-08-14) |
| dsh-ui-topbar-compact | 1 | [maque2333/dsh-ui-topbar-compact](https://github.com/maque2333/dsh-ui-topbar-compact) | Compact dsh web top bar: single-line header, pill-style view switcher, and a subtler divider. | 0.1.0-rc.6 (2026-08-14) |
| dsh-web-lan-access | 1 | [AcidGr/dsh-web-lan-access](https://github.com/AcidGr/dsh-web-lan-access) · [npm](https://www.npmjs.com/package/dsh-web-lan-access) | LAN and remote access for the DeepSeek Harness Web UI, including polyfills so the GUI works off localhost. | 0.1.0-rc.6 (2026-08-14) |
| dsh-web-mobile-fix | 1 | [AcidGr/dsh-web-mobile-fix](https://github.com/AcidGr/dsh-web-mobile-fix) · [npm](https://www.npmjs.com/package/dsh-web-mobile-fix) | Mobile layout fixes for the DeepSeek Harness Web UI: settings panel and page layout on small screens. | 0.1.0-rc.6 (2026-08-14) |
| dsh-workbench | 1 | [lee259/dsh-workbench](https://github.com/lee259/dsh-workbench) · [npm](https://www.npmjs.com/package/dsh-workbench) | Codex-like file workspace for DeepSeek Harness Web with read-only previews and real write/edit diffs. | 0.1.0-rc.6 (2026-08-14) |
| dsh-zen | 1 | [zealot00/dsh-zen](https://github.com/zealot00/dsh-zen) | Zen mode: one-click immersive focus that hides sidebar and topbar, with Ctrl+Shift+Z and pet auto-hide linkage. | 0.1.0-rc.6 (2026-08-14) |

### Terminals & desktop

TUIs, desktop shells, headless runners.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-cc-tui ⭐ | 820 | [ccch1mneyyy/dsh-cc-tui](https://github.com/ccch1mneyyy/dsh-cc-tui) · [npm](https://www.npmjs.com/package/dsh-cc-tui) | Claude Code-style fullscreen terminal UI: streaming thinking, double-Esc rewind, context progress bar, and TPS meter over the headless runner | 0.1.0-rc.5 (2026-08-13) |
| dsh-tianshu-tui | 130 | [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) · [npm](https://www.npmjs.com/package/@huiliyi37/dsh-tianshu-tui) | Terminal UI for dsh shipped as an installable profile bundle | 0.1.0-rc.5 (2026-08-13) |
| deepseek-tui | 3 | [Hilbert-beinghappy/deepseek-tui](https://github.com/Hilbert-beinghappy/deepseek-tui) | A pluggable DeepSeek-colored terminal surface for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-claude-tui | 2 | [cogine-ai/dsh-claude-tui](https://github.com/cogine-ai/dsh-claude-tui) | Claude Code-style TUI for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-desktop-plugin | 1 | [Muelsysel/DeepSeek-Harness-Desktop](https://github.com/Muelsysel/DeepSeek-Harness-Desktop) | DeepSeek Harness desktop plugin: a click-to-launch, Codex-like native window over the dsh web UI. Everything is a plugin — this one is the window. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-terminal | 1 | [siberiah2o/dsh-plugin-terminal](https://github.com/siberiah2o/dsh-plugin-terminal) · [npm](https://www.npmjs.com/package/dsh-plugin-terminal) | Bottom terminal panel for the DeepSeek Harness Web GUI, backed by node-pty. | 0.1.0-rc.6 (2026-08-14) |

### Tools & capabilities

New things the model can do: search, browser, files, databases, devices, media.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| modsearch | 85 | [liustack/modsearch](https://github.com/liustack/modsearch) · [npm](https://www.npmjs.com/package/@liustack/modsearch) | Web plugin for dsh that gives a text-only model the web: search, X, and any page as structured evidence. | 0.1.0-rc.6 (2026-08-14) |
| dsh-browser ⭐ | 80 | [Lum1104/dsh-browser](https://github.com/Lum1104/dsh-browser) | Chrome sidebar plugin that lets dsh operate the browser directly, without vision. | 0.1.0-rc.6 (2026-08-14) |
| dsh-custom-tool | 22 | [omdsh-dev/dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool) | Create and manage sandboxed JavaScript tools with a Monaco editor and a model-driven tool lifecycle | 0.1.0-rc.5 (2026-08-13) |
| dsh-toy | 21 | [c3ll256/dsh-toy](https://github.com/c3ll256/dsh-toy) | Connects toys/devices to DSH: asks brand/model then picks Intiface (Bluetooth, serial, USB; auto-starts Engine) or MonsterParty for known share-link models; unknown starts generic Bluetooth search. | 0.1.0-rc.6 (2026-08-14) |
| dsh-computer-use | 18 | [Anionex/dsh-computer-use](https://github.com/Anionex/dsh-computer-use) | Accessibility-first macOS Computer Use capability for DeepSeek Harness with stale-observation protection, app leases, confirmations, screenshots, and Web diagnostics | 0.1.0-rc.6 (2026-08-14) |
| anysearch-dsh | 17 | [anysearch-team/anysearch-dsh](https://github.com/anysearch-team/anysearch-dsh) | AnySearch web search provider and advanced tools for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-data-agent | 17 | [omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) | Session-scoped MySQL/PostgreSQL/SQLite connections, an sqlcmd tool, a data-agent preset, and a database tab. | 0.1.0-rc.6 (2026-08-14) |
| ego-browser | 12 | [Fisfzy/ego-browser](https://github.com/Fisfzy/ego-browser) | ego-lite browser tools for dsh: structured ego actions plus a realtime watch panel with live SSE screencast. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-mineru | 10 | [HuanLinOTO/dsh-plugin-mineru](https://github.com/HuanLinOTO/dsh-plugin-mineru) | DSH plugin exposing MinerU document parsing tools to the model, with a web UI settings page for the API base URL. | 0.1.0-rc.6 (2026-08-14) |
| dsh-surfing-plugin | 9 | [cyijun/surfing-plugin](https://github.com/cyijun/surfing-plugin) | SearXNG search and Crawl4AI fetch providers for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-playwright-browser | 7 | [Clizo1209/dsh-playwright-browser](https://github.com/Clizo1209/dsh-playwright-browser) | Semantic, multi-tab Playwright browser automation for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-better-sidebar-plugin-office | 7 | [HuanLinOTO/dsh-plugin-better-sidebar-plugin-office](https://github.com/HuanLinOTO/dsh-plugin-better-sidebar-plugin-office) | DSH web plugin: Office file previewers (.docx/.xlsx/.pptx) for the better-sidebar editor. Registers the docx/xlsx/pptx file viewers through ctx.betterSidebar.registerFileViewer, keeping the heavy. | 0.1.0-rc.6 (2026-08-14) |
| dsh-annotate | 5 | [BrambleXu/dsh-annotate](https://github.com/BrambleXu/dsh-annotate) | Browser element annotation bridge for DeepSeek Harness, capturing DOM, styles, and viewport screenshots. | 0.1.0-rc.6 (2026-08-14) |
| dsh-tensorlake-sandbox | 5 | [tensorlakeai/dsh-tensorlake-sandbox](https://github.com/tensorlakeai/dsh-tensorlake-sandbox) · [npm](https://www.npmjs.com/package/@tensorlake/dsh-sandbox) | Tensorlake sandbox execution providers for DeepSeek Harness filesystem and subprocess tools. | 0.1.0-rc.6 (2026-08-14) |
| dsh-blender | 4 | [CheshireJCat/blender](https://github.com/CheshireJCat/blender) | DeepSeek Harness Blender production, reconstruction, validation, and export plugin | 0.1.0-rc.6 (2026-08-14) |
| dsh-hdc-bridge | 4 | [1na-ko/dsh-hdc-bridge](https://github.com/1na-ko/dsh-hdc-bridge) | DSH-native HarmonyOS dev-assistant plugin: hdc device bridge with a live device panel, official-first versioned API docs (SDK .d.ts + offline bundled Tier-1 knowledge), and an optional DevEco CLI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-picgo | 4 | [PicGo/dsh-plugin](https://github.com/PicGo/dsh-plugin) · [npm](https://www.npmjs.com/package/@picgo/dsh-plugin) | Upload images and files to your image host from DeepSeek Harness, powered by PicGo. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-interpreters | 4 | [HuanLinOTO/dsh-plugin-interpreters](https://github.com/HuanLinOTO/dsh-plugin-interpreters) | Exposes run_python and run_node tools with configurable interpreter paths; settings card (via /interpreters/api HTTP route) lets users set the executable locations. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-sleep | 4 | [HuanLinOTO/dsh-plugin-sleep](https://github.com/HuanLinOTO/dsh-plugin-sleep) | DSH plugin exposing a single `sleep` tool that lets the model pause for a configurable number of milliseconds, honoring cancellation. | 0.1.0-rc.6 (2026-08-14) |
| dsh-qwen-mm | 4 | [omdsh-dev/Qwen-MM-Plugins](https://github.com/omdsh-dev/Qwen-MM-Plugins) | Qwen-MM capabilities as runtime-fetched Agent Skills and strict MCP tool servers | 0.1.0-rc.6 (2026-08-14) |
| dsh-remote | 4 | [flymysql/dsh-remote](https://github.com/flymysql/dsh-remote) | Remote-work assistant for DeepSeek Harness: connect SSH (password or key), pick a remote workspace, operate on it with rw_pick_workspace / rw_list_dir / rw_read_file / rw_exec / rw_sync tools, and. | 0.1.0-rc.6 (2026-08-14) |
| dsh-tool-time | 4 | [omdsh-dev/dsh-tool-time](https://github.com/omdsh-dev/dsh-tool-time) | Time tool plugin: strict ISO 8601 parsing, IANA timezone conversion, UTC calendar math, and fixed duration diffs. | 0.1.0-rc.6 (2026-08-14) |
| dsh-ernie-image | 3 | [omdsh-dev/dsh-ernie-image](https://github.com/omdsh-dev/dsh-ernie-image) | DSH ERNIE-Image-Turbo text-to-image plugin: generate images via Baidu AI Studio, save them as durable session attachments, plus a settings card and a generation gallery panel | 0.1.0-rc.6 (2026-08-14) |
| dsh-humanizer | 3 | [DEEP-IOS/dsh-humanizer](https://github.com/DEEP-IOS/dsh-humanizer) | 中文文本人味化 bundle 插件：强制深层改写工作流（十维叙事审计 + 功能路径 + 15 层分布）+ 内容忠实守卫。编辑辅助，非 AI 检测器。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-longbridge | 3 | [omdsh-dev/dsh-longbridge](https://github.com/omdsh-dev/dsh-longbridge) | Longbridge HK/US market plugin: quotes, account, positions and order tools plus a settings surface. | 0.1.0-rc.6 (2026-08-14) |
| dsh-mcp-panel | 3 | [PerryLink/dsh-mcp-panel](https://github.com/PerryLink/dsh-mcp-panel) | Read-only runtime management panel for the official DeepSeek Harness MCP client: /mcp command, a Settings page MCP tab with connection status, recent errors, reconnect counts and tool inventory. | 0.1.0-rc.6 (2026-08-14) |
| dsh-overleaf | 3 | [fly233338/dsh-overleaf](https://github.com/fly233338/dsh-overleaf) | DSH bundle that exposes multiple Overleaf projects through OverleafMCP | 0.1.0-rc.6 (2026-08-14) |
| dsh-report-html | 3 | [hccccc01333/dsh-report-html](https://github.com/hccccc01333/dsh-report-html) | Generate self-contained interactive HTML reports from Markdown, tables, and chart data | 0.1.0-rc.6 (2026-08-14) |
| dsh-ssh | 3 | [UynajGI/dsh-ssh](https://github.com/UynajGI/dsh-ssh) | SSH remote-execution plugin: ProxyJump chain, SFTP filesystem, subprocess and PTY over ssh2. | 0.1.0-rc.6 (2026-08-14) |
| dsh-tool-search | 3 | [Letter2025/dsh-tool-search](https://github.com/Letter2025/dsh-tool-search) | Tool search & slimming for DeepSeek Harness: Hermes-style progressive disclosure — search, describe, and call long-tail tools on demand while keeping core tools eager | 0.1.0-rc.6 (2026-08-14) |
| dsh-voice-funasr | 3 | [omdsh-dev/dsh-voice-funasr](https://github.com/omdsh-dev/dsh-voice-funasr) | DSH web plugin: local offline FunASR voice input (paraformer int8 onnx sidecar, Web Speech fallback, LLM polish). | 0.1.0-rc.6 (2026-08-14) |
| dsh-weather | 3 | [sunshine-lang/dsh-weather](https://github.com/sunshine-lang/dsh-weather) | Weather tool for DeepSeek Harness: current conditions and multi-day forecasts via Open-Meteo. | 0.1.0-rc.6 (2026-08-14) |
| dsh-bilibili | 2 | [CZX2244/dsh-bilibili](https://github.com/CZX2244/dsh-bilibili) · [npm](https://www.npmjs.com/package/dsh-bilibili) | Bilibili video tools for DeepSeek Harness: transcript-first analyze and summarize from a video URL. | 0.1.0-rc.6 (2026-08-14) |
| dsh-browser-playwright | 2 | [ChenyuHeee/dsh-browser-playwright](https://github.com/ChenyuHeee/dsh-browser-playwright) · [npm](https://www.npmjs.com/package/dsh-browser-playwright) | Playwright browser automation for DeepSeek Harness: accessibility-tree interaction with stable refs and per-session contexts. | 0.1.0-rc.6 (2026-08-14) |
| dsh-cad-review | 2 | [dongsheng123132/dsh-cad-review](https://github.com/dongsheng123132/dsh-cad-review) | Evidence-first ASCII DXF inspection and rule-backed CAD review for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-calendar | 2 | [STARDUSTLC666/dsh-calendar](https://github.com/STARDUSTLC666/dsh-calendar) | DSH 日历工具插件：通过 CalDAV 读写日历事件（Google / iCloud / Nextcloud / 自定义） | 0.1.0-rc.6 (2026-08-14) |
| dsh-easyssh | 2 | [chenw2759-wq/dsh-easyssh](https://github.com/chenw2759-wq/dsh-easyssh) | Remote SSH workspace plugin: local brain, remote hands, with a Web GUI frontend for the remote host. | 0.1.0-rc.6 (2026-08-14) |
| dsh-git-bash | 2 | [inmny/dsh-git-bash](https://github.com/inmny/dsh-git-bash) | Use Git for Windows Bash as the default DSH shell with restricted-mode support | 0.1.0-rc.6 (2026-08-14) |
| dsh-github | 2 | [PerryLink/dsh-github](https://github.com/PerryLink/dsh-github) | GitHub integration for DeepSeek Harness: create pull requests, review PRs with background jobs, and read issues — every write gated by human approval | 0.1.0-rc.6 (2026-08-14) |
| dsh-nebula | 2 | [xiajingchun/dsh-nebulagraph-v5](https://github.com/xiajingchun/dsh-nebulagraph-v5) | DSH plugin: connect to a NebulaGraph 5.0 server and execute GQL queries, returning results as structured rows plus an ngql-style table render. Bundles the gql-query-generator skill. | 0.1.0-rc.6 (2026-08-14) |
| dsh-pixluna | 2 | [PixLunaLab/dsh-pixluna](https://github.com/PixLunaLab/dsh-pixluna) | PixLuna image source tools for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-qrcode | 2 | [hellosky983/dsh-qrcode](https://github.com/hellosky983/dsh-qrcode) | Offline QR code generator for DeepSeek Harness: pure JS, no network. | 0.1.0-rc.6 (2026-08-14) |
| dsh-scout | 2 | [omdsh-dev/dsh-scout](https://github.com/omdsh-dev/dsh-scout) | Read-only environment probe tool: runtime, PATH commands, software versions, and host resources on demand. | 0.1.0-rc.6 (2026-08-14) |
| dsh-session-hub | 2 | [Asaiuta/dsh-session-hub](https://github.com/Asaiuta/dsh-session-hub) | Aggregate and control sessions across multiple remote dsh web servers from one pane: registry, merged list, history. | 0.1.0-rc.6 (2026-08-14) |
| dsh-smarthome | 2 | [YLifeOnlyOnce/dsh-smarthome](https://github.com/YLifeOnlyOnce/dsh-smarthome) | Home Assistant control behind an approval gate: read entity states, query history, and call services. | 0.1.0-rc.6 (2026-08-14) |
| dsh-ssh-remote | 2 | [CrazyShout/dsh-ssh-remote](https://github.com/CrazyShout/dsh-ssh-remote) | SSH remote workspaces: browse, read/write, run commands and open terminals on remote hosts, with sidebar status dots. | 0.1.0-rc.6 (2026-08-14) |
| dsh-terminal-panel | 2 | [wuwuzhige-sudo/dsh-terminal-panel](https://github.com/wuwuzhige-sudo/dsh-terminal-panel) | Manual Terminal tab in the web conversation view: host commands, persistent cwd, sudo prompt, and history. | 0.1.0-rc.6 (2026-08-14) |
| dsh-text-translation | 2 | [1738348785/dsh-plugin-text-translation](https://github.com/1738348785/dsh-plugin-text-translation) | Text & document localization plugin for DeepSeek Harness (DSH): lossless tag-protected extraction, batch slicing and assembly for translation workflows | 0.1.0-rc.6 (2026-08-14) |
| dsh-workspace-env | 2 | [Momojie-S/dsh-workspace-env](https://github.com/Momojie-S/dsh-workspace-env) | DSH 插件: pwsh executor 增强，从 workspace .env 注入环境变量到子进程 | 0.1.0-rc.6 (2026-08-14) |
| dsh-wsl-workspace | 2 | [6Mikao9/dsh-wsl-workspace](https://github.com/6Mikao9/dsh-wsl-workspace) · [npm](https://www.npmjs.com/package/dsh-wsl-workspace) | Add a WSL workspace from the Web GUI and run the agent session inside the WSL distribution, no extra dsh install required. | 0.1.0-rc.6 (2026-08-14) |
| dsh-adb | 1 | [SamXiaBing/dsh-adb](https://github.com/SamXiaBing/dsh-adb) | ADB device & bench operations for DeepSeek Harness: device discovery, structured logcat, apk install, file pull/push, performance snapshots | 0.1.0-rc.6 (2026-08-14) |
| dsh-article-publish | 1 | [yangyongzhen/dsh-article-publish](https://github.com/yangyongzhen/dsh-article-publish) | Publish articles from DeepSeek Harness to CSDN / Juejin / CNBlog via the mcp-server-article binary. | 0.1.0-rc.6 (2026-08-14) |
| dsh-attachments | 1 | [CocoSgt/dsh-attachments](https://github.com/CocoSgt/dsh-attachments) · [npm](https://www.npmjs.com/package/dsh-attachments) | Bring any file into the conversation: stash it in the workspace and reference it from the agent. | 0.1.0-rc.6 (2026-08-14) |
| dsh-bash-encoding | 1 | [omdsh-dev/dsh-bash-encoding](https://github.com/omdsh-dev/dsh-bash-encoding) | Replaces ctx.bash to collect raw bytes and auto-detect UTF-16LE/UTF-8/GBK, fixing Chinese mojibake on WSL/Windows. | 0.1.0-rc.6 (2026-08-14) |
| dsh-better-edit | 1 | [Rianico/dsh-better-edit](https://github.com/Rianico/dsh-better-edit) · [npm](https://www.npmjs.com/package/dsh-better-edit) | Hash-anchored read, edit, batch_edit, and undo_last_edit tools for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-computer-use-zrui | 1 | [ZRui-C/dsh-computer-use](https://github.com/ZRui-C/dsh-computer-use) | Text-first browser and background macOS control for DeepSeek Harness, targeting the right process and window without grabbing the pointer. | 0.1.0-rc.6 (2026-08-14) |
| dsh-connector | 1 | [XJungit/omdp](https://github.com/XJungit/omdp) | Unified DeepSeek Harness connector: edit MCP servers (cordis.patch.yml) and user skills (~/.dsh/skills) from one Web UI settings page. Repository-root package: installs either via the bare git URL. | 0.1.0-rc.6 (2026-08-14) |
| dsh-data-ledger | 1 | [Niuniu-Sir/dsh-data-ledger](https://github.com/Niuniu-Sir/dsh-data-ledger) | 数据台账 + AI 管家：统一本地数据看板（来源/位置/摘要、回收站删除），并给智能体装上看懂与清理数据的 ledger_* 工具 | 0.1.0-rc.6 (2026-08-14) |
| dsh-gpu | 1 | [zytsyj/dsh-gpu](https://github.com/zytsyj/dsh-gpu) | GPU-aware execution layer for DeepSeek Harness: gpu_status / gpu_exec / gpu_run_bg tools, per-step GPU context injection, automatic CUDA_VISIBLE_DEVICES card selection | 0.1.0-rc.6 (2026-08-14) |
| dsh-lazy-tools | 1 | [studyzy/dsh-lazy-tools](https://github.com/studyzy/dsh-lazy-tools) | CodeBuddy-style deferred tool loading for DeepSeek Harness: keep tool schemas out of the model context until the model loads them on demand via tool_search / defer_execute_tool. | 0.1.0-rc.6 (2026-08-14) |
| dsh-mcp-lens | 1 | [labmimors/dsh-mcp-lens](https://github.com/labmimors/dsh-mcp-lens) | Progressive-disclosure MCP gateway: two fixed tools, exact schema search, lazy connections, failure isolation. | 0.1.0-rc.6 (2026-08-14) |
| dsh-mcp-settings | 1 | [xluomo/dsh-mcp-settings](https://github.com/xluomo/dsh-mcp-settings) | DSH 设置页 [MCP]:可视化各配置来源的 MCP 服务器,支持新增(可写时直接落盘,否则复制 YAML + 打开配置文件)。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-md-preview | 1 | [LeslieWylie/dsh-md-preview](https://github.com/LeslieWylie/dsh-md-preview) | Render Markdown to standalone, self-contained HTML in the DeepSeek Harness — a model-facing md_html_render tool that works headless, plus a browse/preview/export drawer in the web GUI. One renderer. | 0.1.0-rc.6 (2026-08-14) |
| dsh-mic-input | 1 | [QT-Chen/dsh-mic-input](https://github.com/QT-Chen/dsh-mic-input) | DSH Web 麦克风语音输入插件：浏览器内置 Web Speech API 实时转写进输入框，自动去重/续听、智能标点、语言与自动发送设置（Edge=微软语音、Chrome=谷歌语音）。Microphone voice input for the DSH Web UI using the browser's Web Speech API. | 0.1.0-rc.6 (2026-08-14) |
| dsh-net-proxy | 1 | [mafeis/dsh-net-proxy](https://github.com/mafeis/dsh-net-proxy) | DeepSeek Harness network-proxy plugin: route the agent's own network requests (web_search / web_fetch / external APIs) through a configured HTTP/HTTPS-CONNECT/SOCKS5 proxy, persisted and. | 0.1.0-rc.6 (2026-08-14) |
| dsh-np-ppt | 1 | [z953218350/dsh-np-ppt](https://github.com/z953218350/dsh-np-ppt) | DSH 原生 PPT 演示文稿专家插件：内置 PPTD DSL 解析、55173 所见即所得可视化编辑器服务、Python-PPTX 高保真离线编译内核与一键导出 PPTX 功能。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-office | 1 | [omdsh-dev/dsh-office](https://github.com/omdsh-dev/dsh-office) · [npm](https://www.npmjs.com/package/@huiliyi37/dsh-office) | Office document tools for DeepSeek Harness: generate, read, and edit xlsx, pdf, and pptx. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-md-outline | 1 | [d-ouyang/dsh-plugin-md-outline](https://github.com/d-ouyang/dsh-plugin-md-outline) · [npm](https://www.npmjs.com/package/dsh-plugin-md-outline) | Outline and lint Markdown structure: heading tree, level skips, duplicate headings, unclosed fences. | 0.1.0-rc.6 (2026-08-14) |
| dsh-remote-ide | 1 | [harryopo/dsh-remote-ide](https://github.com/harryopo/dsh-remote-ide) · [npm](https://www.npmjs.com/package/dsh-remote-ide) | SSH remote IDE for DeepSeek Harness: explorer, SFTP editor, and a live SSH PTY terminal. | 0.1.0-rc.6 (2026-08-14) |
| dsh-rss | 1 | [STARDUSTLC666/dsh-rss](https://github.com/STARDUSTLC666/dsh-rss) | DSH RSS 订阅工具插件：管理订阅源并抓取解析 RSS/Atom（rss_list / rss_add / rss_remove / rss_fetch / rss_check） | 0.1.0-rc.6 (2026-08-14) |
| dsh-tavily-search-provider | 1 | [xiaohj233/dsh-tavily-search-provider](https://github.com/xiaohj233/dsh-tavily-search-provider) | Tavily search provider with full search-control mapping and credential-backed key UI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-terminal | 1 | [dongsheng123132/dsh-terminal](https://github.com/dongsheng123132/dsh-terminal) | Persistent interactive terminal mode for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-tool-git | 1 | [Huasfan/dsh-tool-git](https://github.com/Huasfan/dsh-tool-git) · [npm](https://www.npmjs.com/package/dsh-tool-git) | Git first-class tools (status, diff, log, add, commit) for DeepSeek Harness agents. | 0.1.0-rc.6 (2026-08-14) |
| dsh-virtual-workspace | 1 | [KevinWen7415/dsh-virtual-workspace](https://github.com/KevinWen7415/dsh-virtual-workspace) | Virtual Workspaces for DeepSeek Harness (DSH): groups multiple project directories for cross-project read/search/write, with the vws agent tool, prompt injection, built-in workspace-list mirroring. | 0.1.0-rc.6 (2026-08-14) |
| dsh-web-search-brave | 1 | [cnChenKai/dsh-web-search-brave](https://github.com/cnChenKai/dsh-web-search-brave) · [npm](https://www.npmjs.com/package/dsh-web-search-brave) | Brave Search-backed WebSearchProvider for DeepSeek Harness (ctx.web). | 0.1.0-rc.6 (2026-08-14) |
| dsh-web-search-exa | 1 | [TonyDua/dsh-web-search-exa](https://github.com/TonyDua/dsh-web-search-exa) | Zero-config Exa web search provider for DeepSeek Harness (dsh): keyless anonymous MCP fallback (mcp.exa.ai/mcp) plus keyed REST search — a drop-in WebSearchProvider for the ctx.web seam, no API. | 0.1.0-rc.6 (2026-08-14) |
| dsh-web-search-tavily | 1 | [cnChenKai/dsh-web-search-tavily](https://github.com/cnChenKai/dsh-web-search-tavily) · [npm](https://www.npmjs.com/package/dsh-web-search-tavily) | Tavily-backed WebSearchProvider for DeepSeek Harness, including a keyless mode. | 0.1.0-rc.6 (2026-08-14) |
| dsh-web-search-tavily-szmy | 1 | [SZMY-haruhi/dsh-web-search-Tavily](https://github.com/SZMY-haruhi/dsh-web-search-Tavily) | Tavily web search provider for DeepSeek Harness, with a settings toggle back to official DeepSeek search. | 0.1.0-rc.6 (2026-08-14) |
| dsh-webbridge | 1 | [omdsh-dev/dsh-webbridge](https://github.com/omdsh-dev/dsh-webbridge) | Kimi WebBridge host plugin: model tools that drive the user browser to navigate, snapshot, click, fill, and screenshot. | 0.1.0-rc.6 (2026-08-14) |
| dsh-workspace-mcp | 1 | [Momojie-S/dsh-workspace-mcp](https://github.com/Momojie-S/dsh-workspace-mcp) | DSH 插件: 按 workspace(session cwd) 自动加载/卸载 MCP server, 工具注册到 agent scope | 0.1.0-rc.6 (2026-08-14) |
| dsh-workspace-upload | 1 | [LI-Huaa/dsh-workspace-upload](https://github.com/LI-Huaa/dsh-workspace-upload) · [npm](https://www.npmjs.com/package/dsh-workspace-upload) | Workspace file manager for the dsh Web GUI: browse, upload, download, rename, create, and delete session files. | 0.1.0-rc.6 (2026-08-14) |
| dsh-youmind-plugin | 1 | [seamas0825-lab/dsh-youmind-plugin](https://github.com/seamas0825-lab/dsh-youmind-plugin) | YouMind OpenAPI tools and skill bundle for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dshmath-manim | 1 | [phelpsyacht/dshmath-manim](https://github.com/phelpsyacht/dshmath-manim) | DeepSeek Harness math animation plugin powered by Manim CE (zero-code skills for math/physics users) | 0.1.0-rc.6 (2026-08-14) |

### Vision

Image understanding for text-only models.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| modlens ⭐ | 1182 | [liustack/modlens](https://github.com/liustack/modlens) · [npm](https://www.npmjs.com/package/@liustack/modlens) | Vision plugin for text-only models: image understanding bridged into the harness via a dsh.bundle patch layer, shipping a modlens skill alongside | 0.1.0-rc.5 (2026-08-13) |
| dsh-vision-toolkit | 306 | [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | Harness-native integration of agent-vision-toolkit for text-only models: image Q&A with intent, long-screenshot OCR, UI restoration, grounding, and pixel diff | 0.1.0-rc.5 (2026-08-13) |
| dsh-vision-router | 33 | [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) | Turn-level vision routing with provider fallbacks, a cached vision_describe tool, JSON output, and optional per-host proxy. | 0.1.0-rc.6 (2026-08-14) |
| dsh-vision-oil | 14 | [oil-oil/dsh-vision](https://github.com/oil-oil/dsh-vision) · [npm](https://www.npmjs.com/package/@oil-oil/dsh-vision) | Near-native image understanding for text-only DeepSeek Harness models. | 0.1.0-rc.6 (2026-08-14) |
| dsh-vision-linenxi | 9 | [linenxi-ctrl/dsh-vision](https://github.com/linenxi-ctrl/dsh-vision) · [npm](https://www.npmjs.com/package/@linenxi-ctrl/dsh-vision) | External vision model for DeepSeek Harness: config panel, send-image recognition, and screenshot tools. | 0.1.0-rc.6 (2026-08-14) |
| dsh-vision-proxy | 6 | [Flyvhidbwo/dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) | deepseek-vision provider route that transcribes attached images via an OpenAI-compatible VLM before DeepSeek answers. | 0.1.0-rc.6 (2026-08-14) |
| dsh-vision-sidecar | 4 | [121103qwq/dsh-vision-sidecar](https://github.com/121103qwq/dsh-vision-sidecar) | Add no-key hosted or OpenAI-compatible vision to DeepSeek Harness while keeping the configured reasoning model | 0.1.0-rc.6 (2026-08-14) |
| dsh-visual-plugin | 4 | [jyh20030112/dsh-visual-plugin](https://github.com/jyh20030112/dsh-visual-plugin) | Vision bridge plugin for DeepSeek Harness: when the main model has no vision, forward user images to a configurable OpenAI-compatible vision model and show results in a Web UI right panel. Host. | 0.1.0-rc.6 (2026-08-14) |
| dsh-paddle-ocr | 3 | [omdsh-dev/dsh-paddle-ocr](https://github.com/omdsh-dev/dsh-paddle-ocr) | DSH PaddleOCR (百度 PaddleOCR-VL 文档布局解析) plugin: OCR tools plus a settings card and task panel | 0.1.0-rc.6 (2026-08-14) |
| dsh-image-subagent | 2 | [yuqingsh/dsh-image-subagent](https://github.com/yuqingsh/dsh-image-subagent) | 让纯文本主模型（DeepSeek V4 等）也能接收图片附件：图片投影为显式占位文本，由主模型委托视觉子代理经 read_attachment/read_image 读取。零核心补丁，纯插件实现。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-image-tools | 2 | [xiaoxianyu-office/dsh-image-tools](https://github.com/xiaoxianyu-office/dsh-image-tools) · [npm](https://www.npmjs.com/package/@dsh-external/dsh-image-tools) | Chat-image bridge, read_image deny, and conversational image_recognize for text-only DeepSeek Harness models. | 0.1.0-rc.6 (2026-08-14) |
| dsh-imagecraft | 2 | [SPYQWER1/dsh-imagecraft](https://github.com/SPYQWER1/dsh-imagecraft) | image_gen and image_vision model tools for the DeepSeek Harness, powered by the ChatGPT subscription (no API key). | 0.1.0-rc.6 (2026-08-14) |
| dsh-vision-terry12138qy | 2 | [Terry12138qy/dsh-vision](https://github.com/Terry12138qy/dsh-vision) | Vision tool for text-only DeepSeek models: send images to Qwen or GLM multimodal and return descriptions. | 0.1.0-rc.6 (2026-08-14) |
| dsh-vqa-agent | 2 | [jypjypjypjyp/dsh-vqa-agent](https://github.com/jypjypjypjyp/dsh-vqa-agent) | vqa_ask 双模型视觉问答插件:主模型调用 vqa_ask 向视觉模型提问(图片字节真实送达),UI 实时展示"主模型提问 → 视觉模型回答"的 QA 过程,并在主设置提供多模态视觉模型选择页。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-xiapan-media | 2 | [dongsheng123132/dsh-xiapan-media](https://github.com/dongsheng123132/dsh-xiapan-media) | DeepSeek Harness native vision, gpt-image-2 image generation, and Seedance video generation via Xiapan Cloud. | 0.1.0-rc.6 (2026-08-14) |
| dsh-deepseek-vision-router | 1 | [mochgolf/dsh-deepseek-vision-router](https://github.com/mochgolf/dsh-deepseek-vision-router) | Transparent image preprocessing route for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-llm-deepseek-vision | 1 | [NagasakiSoyo-ui/dsh-llm-deepseek-vision](https://github.com/NagasakiSoyo-ui/dsh-llm-deepseek-vision) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-llm-deepseek-vision) | Vision-augmented DeepSeek adapter: a vision model describes images, then a text-only DeepSeek model reasons over the description. | 0.1.0-rc.6 (2026-08-14) |
| dsh-llm-vision-bridge | 1 | [Einskyle/dsh-llm-vision-bridge](https://github.com/Einskyle/dsh-llm-vision-bridge) | Route image attachments to a vision model and return results to the dsh web GUI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-sight | 1 | [Fu3rte/dsh-sight](https://github.com/Fu3rte/dsh-sight) | Plug-in vision for text-only DeepSeek Harness models with built-in VLM presets and multi-image batch analysis. | 0.1.0-rc.6 (2026-08-14) |
| dsh-vision | 1 | [237229953-create/dsh-vision](https://github.com/237229953-create/dsh-vision) | 给纯文本模型自动配眼:图片消息自动桥接为视觉模型描述(日志内表面替换,不改写人类转录),附带 see_image 追问工具 | 0.1.0-rc.6 (2026-08-14) |
| dsh-vision-bridge-lium | 1 | [lium970320/dsh-vision-bridge](https://github.com/lium970320/dsh-vision-bridge) · [npm](https://www.npmjs.com/package/@lium970320/dsh-vision-bridge) | Vision bridge for text-only main models: ingest chat images, turn them into text, and expose a view_image tool. | 0.1.0-rc.6 (2026-08-14) |

### Agents & orchestration

Subagents, workflows, cross-session coordination.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-agent-teams | 228 | [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | AgentTeams plugin: coordinate teams of subagents from the web UI | 0.1.0-rc.5 (2026-08-13) |
| dsh-workflow ⭐ | 54 | [icetomoyo/dsh_workflow](https://github.com/icetomoyo/dsh_workflow) | Workflow layer that upgrades one-shot multi-agent dispatch into savable, governable, observable, and resumable workflows | 0.1.0-rc.5 (2026-08-13) |
| dsh-spec-loop | 6 | [tianji-qingtian/dsh-spec-loop](https://github.com/tianji-qingtian/dsh-spec-loop) | Spec-driven development loop: /spec drives propose, approve, implement, verify, and archive. | 0.1.0-rc.6 (2026-08-14) |
| dsh-advisor | 5 | [omdsh-dev/dsh-advisor](https://github.com/omdsh-dev/dsh-advisor) | Per-session reviewer model that watches the primary transcript and injects severity-ranked advice. | 0.1.0-rc.6 (2026-08-14) |
| dsh-orchestrator | 5 | [zibo2025/dsh-orchestrator](https://github.com/zibo2025/dsh-orchestrator) | Multi-agent orchestration: the main agent decomposes work and workers share a full mesh. | 0.1.0-rc.6 (2026-08-14) |
| dsh-peer-link | 5 | [czm15053/dsh-peer-link](https://github.com/czm15053/dsh-peer-link) | Point-to-point messaging between dsh agents and other local agent sessions over unix sockets. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-yet-another-subagent | 5 | [HuanLinOTO/dsh-plugin-yet-another-subagent](https://github.com/HuanLinOTO/dsh-plugin-yet-another-subagent) | Configurable subagent profiles with web UI settings, real-time toolcall/token display, and click-to-navigate child sessions. | 0.1.0-rc.6 (2026-08-14) |
| dsh-track | 5 | [fakechris/dsh-track](https://github.com/fakechris/dsh-track) | Embedded task-management engine: decision-point protocol, capture wall, and Linear-shaped issues over session events. | 0.1.0-rc.6 (2026-08-14) |
| dsh-inspect | 4 | [omdsh-dev/dsh-inspect](https://github.com/omdsh-dev/dsh-inspect) | 发现问题 → 修复交付 → 质量复查 的简单闭环插件：checkup（对抗式检查+红队验证）/ fix（根因→修复→验证）/ review（对抗式复查）三个工具，基于官方 workflow 引擎。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-prime-agent | 3 | [yoke233/dsh-prime-agent](https://github.com/yoke233/dsh-prime-agent) | Prime Agent-inspired persistent RLM control plane for DeepSeek Harness Code Mode. | 0.1.0-rc.6 (2026-08-14) |
| dsh-agent-message | 2 | [GengDaPeng/dsh-agent-message](https://github.com/GengDaPeng/dsh-agent-message) | 跨会话 Agent 通信：让 DeepSeek Harness 里不同的 Agent 会话互相收发消息。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-agent-orchestration | 2 | [LeslieWylie/dsh-agent-orchestration](https://github.com/LeslieWylie/dsh-agent-orchestration) | Evidence-first multi-agent workflow planning, handoff validation, and Loop Guard skills for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-background-agents | 2 | [PerryLink/dsh-background-agents](https://github.com/PerryLink/dsh-background-agents) | Durable continuable child agents: watch progress in the Web UI sidebar, message anytime, and interrupt through the subagent seam. | 0.1.0-rc.6 (2026-08-14) |
| dsh-dashboard | 2 | [Uddoo/dsh-dashboard](https://github.com/Uddoo/dsh-dashboard) | A Symphony-compatible multi-provider task orchestrator and dashboard for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-governed-workflow | 2 | [zcx369658780/governed-workflow-for-dsh](https://github.com/zcx369658780/governed-workflow-for-dsh) | Policy-enforced, evidence-first governed workflows for DeepSeek Harness agents — installable community plugin (governance core + authority provider) | 0.1.0-rc.6 (2026-08-14) |
| dsh-ops-kit | 2 | [LeslieWylie/dsh-ops-kit](https://github.com/LeslieWylie/dsh-ops-kit) | A reusable DeepSeek Harness bundle for evidence-driven memory, orchestration, benchmark operations, repository audits, and plugin release workflows. | 0.1.0-rc.6 (2026-08-14) |
| dsh-task-planner | 2 | [ztl34245881-commits/dsh-task-planner](https://github.com/ztl34245881-commits/dsh-task-planner) | Task planning with experience muscle-memory: condition-reflex recall and auto-persisted lessons. | 0.1.0-rc.6 (2026-08-14) |
| deepjit | 1 | [fly3366/DeepJIT](https://github.com/fly3366/DeepJIT) | DeepJIT: JIT-compile repeated agent workflows into skills and flow templates for deepseek-harness (dsh) | 0.1.0-rc.6 (2026-08-14) |
| dsh-cross-session | 1 | [Wha1eChai/dsh-cross-session](https://github.com/Wha1eChai/dsh-cross-session) | Same-runtime cross-Session discovery and communication for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-plan-first-dev | 1 | [asd176916847/dsh-plan-first-dev](https://github.com/asd176916847/dsh-plan-first-dev) | 开发前自动进入 plan mode：任务先出方案、用户批准后再动手（plan-first development workflow） | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-acn | 1 | [acnlabs/dsh-plugin-acn](https://github.com/acnlabs/dsh-plugin-acn) | DeepSeek Harness plugin: join ACN so this agent can discover, message, and collaborate with other agents. Defaults to the China region. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-solo-thinking | 1 | [fredalxin/dsh-plugin-solo-thinking](https://github.com/fredalxin/dsh-plugin-solo-thinking) · [npm](https://www.npmjs.com/package/dsh-plugin-solo-thinking) | Solo-style isolated brainstorm branches and Handoffs for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-requirements-alignment | 1 | [jiezeng2004-design/dsh-requirements-alignment](https://github.com/jiezeng2004-design/dsh-requirements-alignment) · [npm](https://www.npmjs.com/package/dsh-requirements-alignment) | Lightweight requirement alignment for DeepSeek Harness: align important decisions before execution without a full spec workflow. | 0.1.0-rc.6 (2026-08-14) |
| dsh-role-router | 1 | [SnowAmberX/dsh-role-router](https://github.com/SnowAmberX/dsh-role-router) | Route agent requests by role: planner model in plan mode, default otherwise, and a subagent model for subagents. | 0.1.0-rc.6 (2026-08-14) |
| dsh-task-relay | 1 | [LeslieWylie/dsh-task-relay](https://github.com/LeslieWylie/dsh-task-relay) | DSH 跨会话任务接力板：基于持久队列的跨会话/子agent 任务接力 + 交接摘要。Task Relay: cross-session task queue with handoff notes for agents and subagents. | 0.1.0-rc.6 (2026-08-14) |
| dsh-worktree | 1 | [CSY656/dsh-worktree](https://github.com/CSY656/dsh-worktree) | Git worktree filesystem isolation for DeepSeek Harness subagents. | 0.1.0-rc.6 (2026-08-14) |
| muretai-dsh-skill | 1 | [muretai/muretai-dsh-skill](https://github.com/muretai/muretai-dsh-skill) · [npm](https://www.npmjs.com/package/muretai-dsh-skill) | Join the Muretai agent network from DeepSeek Harness: identity, inbound-mail wake, and MCP wiring. | 0.1.0-rc.6 (2026-08-14) |
| oh-my-dsh | 1 | [YYTbit/oh-my-dsh](https://github.com/YYTbit/oh-my-dsh) · [npm](https://www.npmjs.com/package/oh-my-dsh) | Multi-agent orchestration for DeepSeek Harness: specialized agents, task orchestration, and workflow skills. | 0.1.0-rc.6 (2026-08-14) |

### Memory & sessions

Memory systems, context management, session search/rewind/export.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-turn-rewind ⭐ | 35 | [Anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) | Rewind conversation and workspace state to a previous turn, backed by a persistent change ledger | 0.1.0-rc.5 (2026-08-13) |
| dsh-context | 19 | [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) · [npm](https://www.npmjs.com/package/dsh-context) | Context insight panel — a Context tab in the dsh web UI showing what the model's context window is made of and how it evolves. | 0.1.0-rc.6 (2026-08-14) |
| dsh-mnemon ⭐ | 11 | [omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) | Local-first three-tier memory for dsh: runtime memory, searchable documents, and supervised memory spaces. | 0.1.0-rc.6 (2026-08-14) |
| dsh-compaction-instant | 7 | [KitDoesIt/dsh-compaction-instant](https://github.com/KitDoesIt/dsh-compaction-instant) | Near-lossless deterministic compaction engine for DeepSeek Harness, a drop-in replacement for stock compaction. | 0.1.0-rc.6 (2026-08-14) |
| dsh-archived-sessions | 4 | [Zephyr-vibe/dsh-archived-sessions](https://github.com/Zephyr-vibe/dsh-archived-sessions) | DSH web plugin: an Archived Sessions manager in Settings — browse archived conversations, expand per-session details (disk usage, downloads, tool usage, lineage, cross-session recall),. | 0.1.0-rc.6 (2026-08-14) |
| dsh-personalize | 3 | [Zephyr-vibe/dsh-personalize](https://github.com/Zephyr-vibe/dsh-personalize) | DSH web plugin: per-host personalization — global custom instructions, local long-term memory (collect / retain / integrate / manage), and reply tone presets. | 0.1.0-rc.6 (2026-08-14) |
| dsh-session-management | 3 | [cokiscarazo-rgb/dsh-session-management](https://github.com/cokiscarazo-rgb/dsh-session-management) | Archive, unarchive, and delete chats, plus export, from the DSH Web session list. | 0.1.0-rc.6 (2026-08-14) |
| dsh-agentmemory | 2 | [elementor-i/dsh-agentmemory](https://github.com/elementor-i/dsh-agentmemory) | agentmemory for DeepSeek Harness (dsh): full memory_* tools, capture hooks, and context injection over the local REST server | 0.1.0-rc.6 (2026-08-14) |
| dsh-auto-memory | 2 | [Aik358/dsh-auto-memory](https://github.com/Aik358/dsh-auto-memory) | DSH 自动记忆插件:三层记忆(用户级/项目笔记/每日日志)自动注入与检索、每日反思、可视化面板与设置页,支持继承其他 AI 工具的记忆。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-memory-evidence | 2 | [LeslieWylie/dsh-memory-evidence](https://github.com/LeslieWylie/dsh-memory-evidence) | Git-first memory navigation and bounded evidence tools for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-session-export | 2 | [bwndlct/dsh-session-export](https://github.com/bwndlct/dsh-session-export) | Export DeepSeek Harness sessions to portable, human-readable Markdown and JSON. | 0.1.0-rc.6 (2026-08-14) |
| dsh-session-tree | 2 | [ZhengQingJing/dsh-session-tree](https://github.com/ZhengQingJing/dsh-session-tree) | Git-like immutable session lineage for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| liltloom | 2 | [Adkid-Zephyr/Liltloom](https://github.com/Adkid-Zephyr/Liltloom) | Portable, user-owned writing-style memory for AI writing tools | 0.1.0-rc.6 (2026-08-14) |
| session-teleport | 2 | [omdsh-dev/session-teleport](https://github.com/omdsh-dev/session-teleport) | PostgreSQL-backed single-writer session handoff service for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-bookmarks | 1 | [penguin-oo/dsh-bookmarks](https://github.com/penguin-oo/dsh-bookmarks) · [npm](https://www.npmjs.com/package/dsh-bookmarks) | Bookmark assistant replies: per-message notes and tags, a cross-session center, and Markdown export. | 0.1.0-rc.6 (2026-08-14) |
| dsh-conv-export | 1 | [beijingwahw/dsh-conv-export](https://github.com/beijingwahw/dsh-conv-export) | dsh-conv-export（对话导出）— export the current DeepSeek Harness conversation as Markdown, PDF, or a long PNG image. | 0.1.0-rc.6 (2026-08-14) |
| dsh-conversation-rewind | 1 | [DTSFO/dsh-conversation-rewind](https://github.com/DTSFO/dsh-conversation-rewind) | Append-only conversation rewind and safe message editing for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-engram-relay | 1 | [yjh051108/dsh-engram-relay](https://github.com/yjh051108/dsh-engram-relay) | Cross-session layered memory relay with hash, semantic, and causal sparse recall via engram_* tools. | 0.1.0-rc.6 (2026-08-14) |
| dsh-essential | 1 | [omdsh-dev/dsh-essential](https://github.com/omdsh-dev/dsh-essential) | Recoverable conversation deletion for dsh: menu integration, instant hide, and restart-safe archive. | 0.1.0-rc.6 (2026-08-14) |
| dsh-evidence-memory | 1 | [LeslieWylie/dsh-evidence-memory](https://github.com/LeslieWylie/dsh-evidence-memory) | Git-backed project memory with line-addressable evidence, freshness tracking, and audit trail. Wraps a local rlvr-memory CLI (not yet published as a standalone package) into four DSH tools. | 0.1.0-rc.6 (2026-08-14) |
| dsh-fusion | 1 | [omdsh-dev/dsh-fusion](https://github.com/omdsh-dev/dsh-fusion) | Fuse two or more dsh conversations into one durable, continuable session with pruning, grouping, and sort. | 0.1.0-rc.6 (2026-08-14) |
| dsh-memory-gate | 1 | [GIT121995/dsh-memory-gate](https://github.com/GIT121995/dsh-memory-gate) | Local long-term memory with CBDC authority gating for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-noema | 1 | [ZSeven-W/dsh-noema](https://github.com/ZSeven-W/dsh-noema) · [npm](https://www.npmjs.com/package/@zseven-w/dsh-noema) | Noema long-term memory for DSH: durable, inspectable agent memory with recall tools and a settings page. | 0.1.0-rc.6 (2026-08-14) |
| dsh-persona-memory | 1 | [Quophic/dsh-persona-memory](https://github.com/Quophic/dsh-persona-memory) · [npm](https://www.npmjs.com/package/dsh-persona-memory) | Persistent long-term persona memory for DeepSeek Harness, kept in MEMORY.md / USER files. | 0.1.0-rc.6 (2026-08-14) |
| dsh-session-search-pro | 1 | [LeslieWylie/dsh-session-search-pro](https://github.com/LeslieWylie/dsh-session-search-pro) | Indexed cross-session search for DeepSeek Harness — search, list, and read past and current DSH sessions through the built-in sessionQuery service. Zero runtime dependencies. | 0.1.0-rc.6 (2026-08-14) |

### Models & providers

Providers, routing, fallbacks, subscription adapters.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-model-router | 13 | [tianji-qingtian/dsh-model-router](https://github.com/tianji-qingtian/dsh-model-router) | Heuristic model router and cost optimizer with automatic fallback on transient failures. | 0.1.0-rc.6 (2026-08-14) |
| dsh-provider-model-configurator | 9 | [LiangYin233/dsh-provider-model-configurator](https://github.com/LiangYin233/dsh-provider-model-configurator) | Provider Model Configurator for DeepSeek Harness: view, create, edit, copy and delete model entries (context window, max output, modalities, reasoning efforts) across your configured providers,. | 0.1.0-rc.6 (2026-08-14) |
| dsh-llm-codebuddy-axiaohungry | 5 | [Axiaohungry/dsh-llm-codebuddy](https://github.com/Axiaohungry/dsh-llm-codebuddy) | WorkBuddy API adapter so DeepSeek Harness can call CodeBuddy models. | 0.1.0-rc.6 (2026-08-14) |
| dsh-llm-fallback | 3 | [Visol-456/dsh-llm-fallback](https://github.com/Visol-456/dsh-llm-fallback) | Provider fallback chain for the DeepSeek Harness LLM seam. | 0.1.0-rc.6 (2026-08-14) |
| better-model-provider | 2 | [sanshanya/better-model-provider](https://github.com/sanshanya/better-model-provider) | Per-model capability declaration for DeepSeek Harness: reasoning-effort levels (with wire spellings) and request modalities (text/image) for OpenAI-compatible providers — one settings section, no. | 0.1.0-rc.6 (2026-08-14) |
| dsh-agy | 2 | [chaos-03x/dsh-agy](https://github.com/chaos-03x/dsh-agy) | Google Antigravity (agy) OAuth auth + model access plugin for DeepSeek Harness: multi-account pool, 429 rotation, device fingerprinting, CLI and web login. | 0.1.0-rc.6 (2026-08-14) |
| dsh-commandcode-go-provider | 2 | [jiesou/dsh-commandcode-go-provider](https://github.com/jiesou/dsh-commandcode-go-provider) · [npm](https://www.npmjs.com/package/dsh-commandcode-go-provider) | Command Code Go provider adapter for dsh: scan the Go-plan catalog and serve generation through the harness LLM seam. | 0.1.0-rc.6 (2026-08-14) |
| dsh-commandcode-provider-mars-sea | 2 | [Mars-Sea/dsh-commandcode-provider](https://github.com/Mars-Sea/dsh-commandcode-provider) | DeepSeek Harness LLM provider plugin for Command Code, ported from pi-commandcode-provider (MIT). Registers the 'commandcode' provider route with a Models-page card and live model catalog. | 0.1.0-rc.6 (2026-08-14) |
| dsh-llm-fallbacks | 2 | [omdsh-dev/dsh-llm-fallbacks](https://github.com/omdsh-dev/dsh-llm-fallbacks) | Automatic provider/model fallback chains when LLM requests keep failing after retries, auth, quota, or rate limits. | 0.1.0-rc.6 (2026-08-14) |
| dsh-model-modes | 2 | [DTSFO/dsh-model-modes](https://github.com/DTSFO/dsh-model-modes) | Capability-aware reasoning controls and an honest Fast routing mode for the DeepSeek Harness web composer | 0.1.0-rc.6 (2026-08-14) |
| dsh-switch | 2 | [dongsheng123132/dsh-switch](https://github.com/dongsheng123132/dsh-switch) | Evidence-first model control plane for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| llm-adaptive | 2 | [dylan121322/llm-adaptive](https://github.com/dylan121322/llm-adaptive) | Adaptive model routing for DeepSeek Harness: per-request complexity classification with automatic provider routing. | 0.1.0-rc.6 (2026-08-14) |
| dsh-claude-provider | 1 | [MoFeng2223/dsh-claude-provider](https://github.com/MoFeng2223/dsh-claude-provider) · [npm](https://www.npmjs.com/package/@mofeng2223/dsh-claude-provider) | Custom Claude provider support for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-commandcode-provider | 1 | [Kristin130/dsh-commandcode-provider](https://github.com/Kristin130/dsh-commandcode-provider) | Command Code provider plugin for DeepSeek Harness (dsh) — works with every Command Code plan including the $1 Go plan; uses the Studio authentication API key over /alpha/generate, not the Provider API | 0.1.0-rc.6 (2026-08-14) |
| dsh-llm-codebuddy | 1 | [shatyuka/dsh-llm-codebuddy](https://github.com/shatyuka/dsh-llm-codebuddy) | Tencent CodeBuddy plugin for DeepSeek Harness (dsh). | 0.1.0-rc.6 (2026-08-14) |

### Interop & migration

Bridges to and from Claude Code, Codex, and other harnesses.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-hooks-claude-code (official) | 90644 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/hooks/hooks-claude-code) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-hooks-claude-code) | Bridge plugin: runs an existing Claude Code hooks.json on the harness interception seams (command hooks only; http, mcp_tool, prompt, and agent hooks are skipped with a warning) | 0.1.0-rc.5 (2026-08-13) |
| dsh-hooks-codex (official) | 90644 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/hooks/hooks-codex) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-hooks-codex) | Bridge plugin: runs a Codex hooks.json on the harness interception seams (regex-only matchers, snake_case payloads, only blocking decisions honored) | 0.1.0-rc.5 (2026-08-13) |
| dsh-chat-import | 21 | [Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) | Import Claude Code / Codex / ChatGPT / Cursor / Gemini / Reasonix / Pi Coding Agent / opencode / ZCode / Grok Build / OpenClaw / Hermes conversation histories as resumable DeepSeek Harness sessions | 0.1.0-rc.6 (2026-08-14) |
| deepseek-harness-acp | 6 | [openma-ai/deepseek-harness-acp](https://github.com/openma-ai/deepseek-harness-acp) | Agent Client Protocol (ACP) adapter for DeepSeek Harness — use DeepSeek Harness from ACP clients such as Zed. | 0.1.0-rc.6 (2026-08-14) |
| dsh-codex-connect | 5 | [franksong2702/dsh-codex-connect](https://github.com/franksong2702/dsh-codex-connect) | ChatGPT OAuth and Codex models for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| task-passport | 5 | [dongsheng123132/task-passport](https://github.com/dongsheng123132/task-passport) | Open task handoff protocol and local store for durable state across AI harnesses. | 0.1.0-rc.6 (2026-08-14) |
| dsh-llm-codex | 4 | [yequ172672/dsh-codex-subscription](https://github.com/yequ172672/dsh-codex-subscription) | Reuse Codex CLI local login credentials to use ChatGPT subscription models in DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-llm-codex-oauth | 4 | [Player-MINEPIG/dsh-llm-codex-oauth](https://github.com/Player-MINEPIG/dsh-llm-codex-oauth) | Use your ChatGPT/Codex subscription in dsh through the OpenAI Codex OAuth flow. | 0.1.0-rc.6 (2026-08-14) |
| dsh-external-migration | 3 | [buguoshixc/deepseek-harness-external-migration](https://github.com/buguoshixc/deepseek-harness-external-migration) · [npm](https://www.npmjs.com/package/deepseek-harness-external-migration) | Migrate Codex, Claude Code, Qoder, and OpenCode config and chat history into DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-codex-agent-bridge | 2 | [je00/dsh-codex-agent-bridge](https://github.com/je00/dsh-codex-agent-bridge) | Connect DeepSeek Harness agents to authenticated Codex App Server sessions | 0.1.0-rc.6 (2026-08-14) |
| dsh-claude-import | 1 | [TimeCraker/dsh-claude-import](https://github.com/TimeCraker/dsh-claude-import) | Import Claude Code config (skills, rules, CLAUDE.md, AGENTS.md) into DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-claude-migrate | 1 | [kirkchinese/Claudecode--DSH](https://github.com/kirkchinese/Claudecode--DSH) | Migrate Claude Code user data — conversations, skills, plugins, memory and instructions — into DeepSeek Harness (DSH): resumable native sessions, workspace grouping, agent presets, context archive | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-subscriptions | 1 | [V1ki/dsh-plugin-subscriptions](https://github.com/V1ki/dsh-plugin-subscriptions) | Use ChatGPT (Codex), Claude, and Grok (X Premium) subscriptions as DeepSeek Harness LLM providers, with OAuth login from the web Settings page | 0.1.0-rc.6 (2026-08-14) |
| dsh-shuttle | 1 | [omdsh-dev/dsh-shuttle](https://github.com/omdsh-dev/dsh-shuttle) | Bidirectional conversation migration between dsh, Codex, Claude Code, Pi, Reasonix, and OpenCode. | 0.1.0-rc.6 (2026-08-14) |

### Channels & remote

IM bridges and remote control: Feishu, Telegram, WeCom, DingTalk.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-lark | 14 | [omdsh-dev/dsh-lark](https://github.com/omdsh-dev/dsh-lark) | Lark/Feishu IM bot channel: chats drive agents, replies and approvals come back as messages and cards. | 0.1.0-rc.6 (2026-08-14) |
| dsh-telegram-bot | 4 | [yuko0331/DSH-telegram](https://github.com/yuko0331/DSH-telegram) | Allowlisted Telegram bot for remote DeepSeek Harness conversations and monitoring. | 0.1.0-rc.6 (2026-08-14) |
| dsh-telegram-channel | 4 | [hi-wenw/dsh-telegram-channel](https://github.com/hi-wenw/dsh-telegram-channel) | DeepSeek Harness Telegram mobile remote: workspace→session picker (Web-aligned), /model switch, same trajectory — dsh-plugin | 0.1.0-rc.6 (2026-08-14) |
| dsh-email | 3 | [STARDUSTLC666/dsh-email](https://github.com/STARDUSTLC666/dsh-email) | IMAP/SMTP email tools for DeepSeek Harness: list, read, search and send mail, with QQ/163/126/Sina/Aliyun/Gmail/Outlook/iCloud presets. | 0.1.0-rc.6 (2026-08-14) |
| dsh-feishu-bridge-wz-heng | 3 | [wz-heng/dsh-feishu-bridge](https://github.com/wz-heng/dsh-feishu-bridge) | DSH plugin shell for dsh-feishu-bridge: spawns and supervises the Feishu (Lark) channel bridge's Python process as a managed child of the DSH Host. The bridge itself is unchanged Python — this. | 0.1.0-rc.6 (2026-08-14) |
| dsh-lark-link | 3 | [amlyczz/dsh-lark-link](https://github.com/amlyczz/dsh-lark-link) | High-reliability Feishu/Lark bridge for DeepSeek Harness — QR one-click auth, multi-mode agents, card-based commands, zero-loss outbox, media in/out, session logs, reusable DSH Web GUI | 0.1.0-rc.6 (2026-08-14) |
| dsh-llm-wechat | 3 | [sulfide2085/dsh-llm-wechat](https://github.com/sulfide2085/dsh-llm-wechat) | DeepSeek-compatible adapter for the WeChat (chatapi.weixin.qq.com) gateway, with think-tag translation for the DeepSeek Harness LLM seam | 0.1.0-rc.6 (2026-08-14) |
| dsh-qqbot | 3 | [tencent-connect/dsh-qqbot](https://github.com/tencent-connect/dsh-qqbot) · [npm](https://www.npmjs.com/package/@tencent-connect/dsh-qqbot) | QQ Bot IM channel plugin for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-slack | 3 | [STARDUSTLC666/dsh-slack](https://github.com/STARDUSTLC666/dsh-slack) | DSH 社区插件：Slack 通知/桥接（v0.2 支持 Socket Mode 双向：收件箱 + 线程回复） | 0.1.0-rc.6 (2026-08-14) |
| dsh-feishu | 2 | [xmanrui/dsh-feishu](https://github.com/xmanrui/dsh-feishu) | DeepSeek Harness plugin for multi-bot Feishu setup and streaming chat | 0.1.0-rc.6 (2026-08-14) |
| dsh-im-gateway | 2 | [jelech/dsh-im-gateway](https://github.com/jelech/dsh-im-gateway) | An IM gateway for the DeepSeek Harness: bridge WeChat (iLink) and other messengers into harness agent sessions, with slash-command controls (/new, /sessions, /status, /model, ...). | 0.1.0-rc.6 (2026-08-14) |
| dsh-wecom | 2 | [TtTRz/dsh-wecom](https://github.com/TtTRz/dsh-wecom) | dsh-wecom: a WeCom AI Bot channel for DeepSeek Harness — each chat runs a persistent, preset-backed agent over the official long connection. | 0.1.0-rc.6 (2026-08-14) |
| dsh-weixin | 2 | [xiaoshihou514/dsh-weixin](https://github.com/xiaoshihou514/dsh-weixin) · [npm](https://www.npmjs.com/package/dsh-weixin) | Control DeepSeek Harness remotely through Weixin. | 0.1.0-rc.6 (2026-08-14) |
| dsh-dingtalk | 1 | [sliverp/DeepSeek-harness-dingtalk](https://github.com/sliverp/DeepSeek-harness-dingtalk) | DingTalk Stream text, image, and file channel bridge for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-feishu-bot | 1 | [TingRuDeng/dsh-feishu-bot](https://github.com/TingRuDeng/dsh-feishu-bot) | Feishu (Lark) private-chat frontend for DeepSeek Harness: drive, monitor, and approve local agents from Feishu, sharing sessions with the Web GUI | 0.1.0-rc.6 (2026-08-14) |
| dsh-feishu-bridge | 1 | [itr-del/dsh-feishu](https://github.com/itr-del/dsh-feishu) | Feishu (Lark) IM bridge for DeepSeek Harness (dsh) | 0.1.0-rc.6 (2026-08-14) |
| dsh-im-hub | 1 | [ThreeBody6666/dsh-im-hub](https://github.com/ThreeBody6666/dsh-im-hub) | A multi-platform IM gateway for DeepSeek Harness (dsh) — Feishu (Lark), WeCom (WeChat Work), and Telegram. Turn your dsh agent into a chat assistant reachable from the messaging apps you already use. | 0.1.0-rc.6 (2026-08-14) |
| dsh-lark-channel | 1 | [sliverp/DeepSeek-harness-lark](https://github.com/sliverp/DeepSeek-harness-lark) | Feishu and Lark text, image, and file channel bridge for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |

### Notifications

Alerting the human: desktop, sound, even a phone call.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-notification | 37 | [omdsh-dev/dsh-notification](https://github.com/omdsh-dev/dsh-notification) | Desktop notifications for turn completions, with per-outcome controls and include/exclude keyword rules | 0.1.0-rc.5 (2026-08-13) |
| dsh-web-ui-notify | 9 | [bill9109/dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) | Desktop notifications for approvals, questions, and turn completion so you can leave the dsh tab. | 0.1.0-rc.6 (2026-08-14) |
| dsh-lark-meeting-notifier | 5 | [yeruizhi/dsh-lark-meeting-notifier](https://github.com/yeruizhi/dsh-lark-meeting-notifier) · [npm](https://www.npmjs.com/package/dsh-lark-meeting-notifier) | Feishu meeting reminder dock: flash when it is time to leave the agent and join a human meeting. | 0.1.0-rc.6 (2026-08-14) |
| dsh-notification-center | 3 | [610la/dsh-notification-center](https://github.com/610la/dsh-notification-center) | 通知中心：对话/任务完成、报错、等待批准等事件触发浏览器通知 + 21 种匹配音效，每类事件独立配置（音效/文件/URL/音量/开关）。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-dingtalk-stardustlc666 | 2 | [STARDUSTLC666/dsh-dingtalk](https://github.com/STARDUSTLC666/dsh-dingtalk) | 钉钉群机器人单向通知工具（DeepSeek Harness 插件）：agent 推送 Markdown / 纯文本消息到钉钉群，支持加签安全模式。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-messager | 2 | [ly6170/dsh-messager](https://github.com/ly6170/dsh-messager) | DeepSeek Harness 通知插件：会话交互/任务完成/出错时通过系统通知、浏览器通知、飞书机器人（webhook）推送提醒 | 0.1.0-rc.6 (2026-08-14) |
| dsh-task-notify-linxin | 2 | [ltao0829/dsh-task-notify](https://github.com/ltao0829/dsh-task-notify) | Task-completion reminder for DeepSeek Harness: in-page toast, OS notification, and sound when an agent turn or background job finishes | 0.1.0-rc.6 (2026-08-14) |
| dsh-audio-alert | 1 | [ellelkktrraaa/dsh-audio-alert](https://github.com/ellelkktrraaa/dsh-audio-alert) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-client-audio-alert) | Browser audio alerts for DeepSeek Harness attention edges: approval requests, ask-user questions, and finished turns. | 0.1.0-rc.6 (2026-08-14) |
| dsh-ding | 1 | [CAOGGL/dsh-ding](https://github.com/CAOGGL/dsh-ding) · [npm](https://www.npmjs.com/package/dsh-ding) | Play a sound and show a Windows toast when a DeepSeek Harness turn finishes, with a Web UI bell control. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-approval-alert | 1 | [doncelee229-cmyk/dsh-plugin-approval-alert](https://github.com/doncelee229-cmyk/dsh-plugin-approval-alert) | Desktop notification when DeepSeek Harness needs approval, with workspace name and click-to-jump. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-call-me | 1 | [radres/dsh-plugin-call-me](https://github.com/radres/dsh-plugin-call-me) | Your DeepSeek Harness agent rings your phone: it asks out loud, you answer out loud, and what you said steers the run. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-notify | 1 | [huguangyu666/dsh-plugin-notify](https://github.com/huguangyu666/dsh-plugin-notify) · [npm](https://www.npmjs.com/package/dsh-plugin-notify) | Notification outlet: desktop toasts, Chinese TTS, and sounds when long tasks finish, error, or need you. | 0.1.0-rc.6 (2026-08-14) |
| dsh-task-notify | 1 | [kaotusi/dsh-task-notify](https://github.com/kaotusi/dsh-task-notify) | System-level task notifications for DeepSeek Harness (DSH): approval requests, awaited replies, and finished background jobs / subagents / workflows — pushed to the OS notification center with. | 0.1.0-rc.6 (2026-08-14) |

### Usage & cost

Token accounting, billing, balance, quota.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-usage-stats-ychris | 17 | [Ychris12138/dsh-usage-stats](https://github.com/Ychris12138/dsh-usage-stats) | Token usage heatmap, per-model breakdowns, and DeepSeek account balance for the DeepSeek Harness Web GUI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-balance | 9 | [crazywoola/dsh-balance](https://github.com/crazywoola/dsh-balance) | Shows API balances and available models in DeepSeek Harness Settings. | 0.1.0-rc.6 (2026-08-14) |
| dsh-client-pricing | 5 | [Miyazawai/dsh-client-pricing](https://github.com/Miyazawai/dsh-client-pricing) · [npm](https://www.npmjs.com/package/dsh-client-pricing) | Live DeepSeek API pricing badge in the session header, with peak/off-peak flash and pro rates. | 0.1.0-rc.6 (2026-08-14) |
| dsh-balance-plugin | 4 | [stevenx65/dsh-balance-plugin](https://github.com/stevenx65/dsh-balance-plugin) | DeepSeek API balance and token usage monitor for the dsh web sidebar | 0.1.0-rc.6 (2026-08-14) |
| dsh-billing | 4 | [TheTianzz/dsh-billing](https://github.com/TheTianzz/dsh-billing) | Account balance and session cost commands, tools, and Web UI capsules for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-deepseek-balance | 4 | [hnmrxz/dsh-plugin-deepseek-balance](https://github.com/hnmrxz/dsh-plugin-deepseek-balance) · [npm](https://www.npmjs.com/package/dsh-plugin-deepseek-balance) | Real-time DeepSeek account balance in the DeepSeek Harness bottom status bar. | 0.1.0-rc.6 (2026-08-14) |
| dsh-token-usage | 4 | [LaoYueHanNi/dsh-token-usage](https://github.com/LaoYueHanNi/dsh-token-usage) | dsh local plugin: persist per-request model token usage (live hook + manual history sync command + web settings stats page) | 0.1.0-rc.6 (2026-08-14) |
| widget-dock | 4 | [MorGogh/widget-dock](https://github.com/MorGogh/widget-dock) | DSH plugin: a draggable workbench of mini-cards (API balance, token usage, session stats, goal, cost estimate) beside the conversation | 0.1.0-rc.6 (2026-08-14) |
| context-vista | 3 | [GooodWei/context-vista](https://github.com/GooodWei/context-vista) | A live context-window donut for DeepSeek Harness: token usage, compaction savings, and cost at a glance | 0.1.0-rc.6 (2026-08-14) |
| dsh-calculator | 3 | [bobcat848/dsh-calculator](https://github.com/bobcat848/dsh-calculator) | DeepSeek API spend calculator for the current session and all sessions. | 0.1.0-rc.6 (2026-08-14) |
| dsh-client-ui-monitor | 3 | [Auran-Lu/dsh-client-ui-monitor](https://github.com/Auran-Lu/dsh-client-ui-monitor) | Sidebar usage dashboard: session token usage, estimated cost in CNY/USD, and DeepSeek API balance. | 0.1.0-rc.6 (2026-08-14) |
| dsh-opencode-go-usage | 3 | [Xenia0922/dsh-opencode-go-usage](https://github.com/Xenia0922/dsh-opencode-go-usage) | OpenCode Go 用量与花费面板 — DeepSeek Harness 插件:可拖拽缩放的悬浮仪表盘,实时展示 OpenCode Go 配额、逐请求用量与花费 | 0.1.0-rc.6 (2026-08-14) |
| dsh-quota-panel | 3 | [brittanistrehlowll-oss/dsh-quota-panel](https://github.com/brittanistrehlowll-oss/dsh-quota-panel) | Provider quota and balance widget for the dsh web surface with a collapsed glanceable capsule. | 0.1.0-rc.6 (2026-08-14) |
| dsh-stats-dashboard | 3 | [1HelloMan1/dsh-stats-dashboard](https://github.com/1HelloMan1/dsh-stats-dashboard) | Provider and model usage stats dashboard with speed, call log, cache rate, and CSV export. | 0.1.0-rc.6 (2026-08-14) |
| dsh-token-monitor | 3 | [zhangzheng25/dsh-token-monitor](https://github.com/zhangzheng25/dsh-token-monitor) | DeepSeek Harness plugin: token usage dashboard (today / 7 / 30 days), GitHub-style 90-day contribution graph and per-workspace conversation stats, rendered as a settings page. Data from live. | 0.1.0-rc.6 (2026-08-14) |
| dsh-token-panel | 3 | [juhe291/dsh-token-panel](https://github.com/juhe291/dsh-token-panel) | Real-time token consumption HUD for DeepSeek Harness: a sleek tech-style panel showing live token usage, context pressure and cost estimates across sessions | 0.1.0-rc.6 (2026-08-14) |
| dsh-cost | 2 | [dongsheng123132/dsh-cost](https://github.com/dongsheng123132/dsh-cost) | Evidence-first token cost ledger and budget checks for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-deepseek-billing | 2 | [golitter/dsh-deepseek-billing](https://github.com/golitter/dsh-deepseek-billing) | DeepSeek account balance viewer for the DeepSeek Harness web settings page | 0.1.0-rc.6 (2026-08-14) |
| dsh-gauge | 2 | [noone89A/dsh-gauge](https://github.com/noone89A/dsh-gauge) · [npm](https://www.npmjs.com/package/dsh-gauge) | Cache-hit rate, token usage, and cost estimates for the DeepSeek Harness Web UI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-ocgo-usage | 2 | [v587d/dsh-opencode-go-usage](https://github.com/v587d/dsh-opencode-go-usage) | OpenCode Go subscription usage readout for the dsh web GUI: rolling (5h), weekly, and monthly usage windows with reset countdowns in the composer dock. | 0.1.0-rc.6 (2026-08-14) |
| dsh-usage-chart | 2 | [Max-Samson/dsh-usage-chart](https://github.com/Max-Samson/dsh-usage-chart) · [npm](https://www.npmjs.com/package/dsh-usage-chart) | Real-time token usage, cost estimates, per-round charts, and DeepSeek API balance for the Web GUI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-usage-stats ⭐ | 2 | [lanlandeli/dsh-usage-stats](https://github.com/lanlandeli/dsh-usage-stats) | Beautiful token analytics for DeepSeek Harness — trends, activity heatmaps, model breakdowns, and data exports. | 0.1.0-rc.6 (2026-08-14) |
| dsh-usage-stats-make0209 | 2 | [Make0209/dsh-usage-stats](https://github.com/Make0209/dsh-usage-stats) | Usage stats for DeepSeek Harness: heatmap, token and cache-hit board, balance, and workspace aliases. | 0.1.0-rc.6 (2026-08-14) |
| dsh-balance-tide | 1 | [huanyuLv/dsh-balance-tide](https://github.com/huanyuLv/dsh-balance-tide) | DeepSeek 余额 + 峰谷计价潮汐提示插件: 在 dsh Web UI 输入框下方显示账户余额、本会话估算消耗，并在余额前提示当前峰/谷价格档位、距下一次切换的倒计时与使用建议 | 0.1.0-rc.6 (2026-08-14) |
| dsh-bottom-bar | 1 | [kc0ed/dsh-bottom-bar](https://github.com/kc0ed/dsh-bottom-bar) | 底栏统计设置（固化版）：可组装的输入框下方统计行 + 预估费用标注 + 设置页（底栏）。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-conversation-cost | 1 | [Ayaka157/dsh-conversation-cost](https://github.com/Ayaka157/dsh-conversation-cost) | 在 DSH 对话底部统计行实时显示 DeepSeek 用量费用（人民币/美元双币，含缓存命中与峰谷定价） | 0.1.0-rc.6 (2026-08-14) |
| dsh-ocg-billing | 1 | [hiro-nikaitou/dsh-ocg-billing](https://github.com/hiro-nikaitou/dsh-ocg-billing) · [npm](https://www.npmjs.com/package/@hiro-nikaitou/dsh-ocg-billing) | OpenCode Go billing layer: cached official pricing, bill computation, and a composer bill line. | 0.1.0-rc.6 (2026-08-14) |
| dsh-opencode-go-usage-yumusb | 1 | [yumusb/dsh-opencode-go-usage](https://github.com/yumusb/dsh-opencode-go-usage) | OpenCode GO plan quota widget in the sidebar, a same-origin usage proxy, and an /opencode-go chat command. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-window-stats | 1 | [wellorbetter/dsh-plugin-window-stats](https://github.com/wellorbetter/dsh-plugin-window-stats) | DSH web plugin: a cross-session Window Stats view tab showing conversation progress and token usage for all sessions. | 0.1.0-rc.6 (2026-08-14) |
| dsh-provider-billing | 1 | [ZeroingIn/dsh-provider-billing](https://github.com/ZeroingIn/dsh-provider-billing) | DeepSeek Harness plugin: provider account balance inside each Models settings row, queried through a loopback-pinned RPC channel with the stored API key kept on the host | 0.1.0-rc.6 (2026-08-14) |
| dsh-provider-quota | 1 | [781316853/dsh-provider-quota](https://github.com/781316853/dsh-provider-quota) · [npm](https://www.npmjs.com/package/@guyunli/dsh-provider-quota) | Model-provider quota display: a settings section plus a sidebar capsule. | 0.1.0-rc.6 (2026-08-14) |
| dsh-quota-meter | 1 | [huolianJiao/dsh-quota-meter](https://github.com/huolianJiao/dsh-quota-meter) | DSH web plugin: show the DeepSeek API key's remaining balance, estimate usable tokens per model (peak/off-peak pricing + measured cache-hit ratio), and chart the real cost of every turn. | 0.1.0-rc.6 (2026-08-14) |
| dsh-token-stats | 1 | [huantian1223/dsh-token-stats](https://github.com/huantian1223/dsh-token-stats) · [npm](https://www.npmjs.com/package/dsh-token-stats) | Token usage statistics for DeepSeek Harness: cumulative and peak tokens with a live HUD. | 0.1.0-rc.6 (2026-08-14) |
| dsh-token-usage-zerro | 1 | [zerro-223/dsh-token-usage](https://github.com/zerro-223/dsh-token-usage) · [npm](https://www.npmjs.com/package/@zerro223/dsh-token-usage) | Token usage statistics for the Web UI: per-request LLM usage, trend charts, and cache hit rate. | 0.1.0-rc.6 (2026-08-14) |
| dsh-tokenledger | 1 | [zh667/TokenLedger](https://github.com/zh667/TokenLedger) | Token usage accounting for DeepSeek Harness, reconciled against New API and Sub2API relay-site billing | 0.1.0-rc.6 (2026-08-14) |
| dsh-usage-billing | 1 | [940842546/dsh-usage-billing](https://github.com/940842546/dsh-usage-billing) | DeepSeek Harness 用量与消费统计插件：按 2026-08-17 调价前后峰谷价格计费，含主界面汇总面板、会话级明细与图表 | 0.1.0-rc.6 (2026-08-14) |
| dsh-usage-record | 1 | [kkishapppy/dsh-usage-record](https://github.com/kkishapppy/dsh-usage-record) | Per-turn LLM usage record: a left-rail drawer of tokens, duration, and tool calls with jump-to-turn. | 0.1.0-rc.6 (2026-08-14) |
| dsh-wallet | 1 | [feibi-mochi/deepseek-harness-wallet](https://github.com/feibi-mochi/deepseek-harness-wallet) | Balance monitoring, per-session spend tracking, token statistics, low-balance alerts, and an official recharge shortcut for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-token-usage-kelearns | 0 | [KeLearns/dsh-token-usage](https://github.com/KeLearns/dsh-token-usage) · [npm](https://www.npmjs.com/package/@kelearns/dsh-token-usage) | Token usage heatmap for the dsh web GUI with daily, weekly, and cumulative views. | 0.1.0-rc.6 (2026-08-14) |

### Observability & evidence

Diagnostics, logs, audits, content-addressed proofs.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-security-audit | 10 | [omdsh-dev/dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) | Read-only local security audit: config, credential metadata, plugin provenance, sessions, and network exposure. | 0.1.0-rc.6 (2026-08-14) |
| dsh-session-health | 9 | [omdsh-dev/dsh-session-health](https://github.com/omdsh-dev/dsh-session-health) | Frame-level diagnostics over multi-frame zstd session logs: torn, corrupt, or empty session detection. | 0.1.0-rc.6 (2026-08-14) |
| dsh-whale-report | 8 | [SenmuuuuW/dsh-whale-report](https://github.com/SenmuuuuW/dsh-whale-report) | 鲸鱼记事本 — 你的 Agent 年度/月度/周度/日报：从会话事件日志生成数据新闻官式报告，任意区间、定时生成。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-lineage | 3 | [dongsheng123132/dsh-lineage](https://github.com/dongsheng123132/dsh-lineage) | Content-addressed data and action lineage evidence for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| qiushi-dsh-evidence-audit | 3 | [030611/qiushi-dsh-evidence-audit](https://github.com/030611/qiushi-dsh-evidence-audit) | Observe-only hash-chained evidence receipts for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-2origin | 2 | [dongsheng123132/dsh-2origin](https://github.com/dongsheng123132/dsh-2origin) | Evidence-first 2Origin state projection, diff and immutable freeze for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-action-parity | 2 | [dongsheng123132/dsh-action-parity](https://github.com/dongsheng123132/dsh-action-parity) | Evidence that CLI, MCP and GUI bindings reach the same DeepSeek Harness action core | 0.1.0-rc.6 (2026-08-14) |
| dsh-audit-bundle | 2 | [dongsheng123132/dsh-audit-bundle](https://github.com/dongsheng123132/dsh-audit-bundle) | Content-addressed audit indexes across independent DeepSeek Harness evidence producers | 0.1.0-rc.6 (2026-08-14) |
| dsh-benchmark | 2 | [dongsheng123132/dsh-benchmark](https://github.com/dongsheng123132/dsh-benchmark) | Reproducible deterministic benchmark evidence for DSH tools and plugins | 0.1.0-rc.6 (2026-08-14) |
| dsh-benchmark-evidence | 2 | [LeslieWylie/dsh-benchmark-evidence](https://github.com/LeslieWylie/dsh-benchmark-evidence) | Benchmark manifests, fail-closed gates, artifact contracts, and result integrity skills for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-capability-receipt | 2 | [dongsheng123132/dsh-capability-receipt](https://github.com/dongsheng123132/dsh-capability-receipt) | Content-addressed receipts for skills actually loaded by DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-narrative-ledger | 2 | [dongsheng123132/dsh-narrative-ledger](https://github.com/dongsheng123132/dsh-narrative-ledger) | Content-addressed timeline, canon and character-knowledge evidence for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-policy-drift-proof | 2 | [dongsheng123132/dsh-policy-drift-proof](https://github.com/dongsheng123132/dsh-policy-drift-proof) | Content-addressed, value-redacted policy drift evidence for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-recovery-proof | 2 | [dongsheng123132/dsh-recovery-proof](https://github.com/dongsheng123132/dsh-recovery-proof) | Read-only recovery drill evidence for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-release-proof | 2 | [dongsheng123132/dsh-release-proof](https://github.com/dongsheng123132/dsh-release-proof) | Reproducible multi-source release evidence for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-session-audit | 2 | [bwndlct/dsh-session-audit](https://github.com/bwndlct/dsh-session-audit) | Session execution analytics and audit reports for DeepSeek Harness. Understand how your agent actually worked: steps, tool calls, failures, repeated actions, token usage and verification signals. | 0.1.0-rc.6 (2026-08-14) |
| dsh-telemetry-redactor | 2 | [030611/dsh-telemetry-redactor](https://github.com/030611/dsh-telemetry-redactor) | Export-copy redaction for DeepSeek Harness session telemetry | 0.1.0-rc.6 (2026-08-14) |
| dsh-verification-receipt | 2 | [030611/dsh-verification-receipt](https://github.com/030611/dsh-verification-receipt) | Privacy-minimal heuristic per-turn execution summaries for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-cache-stabilizer | 1 | [dongsheng123132/dsh-cache-stabilizer](https://github.com/dongsheng123132/dsh-cache-stabilizer) | Cache-prefix stabilization and evidence-based cache metrics for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-deepseek-protocol-doctor | 1 | [Whning0513/deepseek-protocol-doctor](https://github.com/Whning0513/deepseek-protocol-doctor) | Offline DeepSeek request, tool-loop, reasoning_content, and SSE diagnostics for DSH | 0.1.0-rc.6 (2026-08-14) |
| dsh-fleet-audit | 1 | [LeslieWylie/dsh-fleet-audit](https://github.com/LeslieWylie/dsh-fleet-audit) | DSH agent-fleet hygiene audit: credential-file permissions, embedded credentials in git remotes (masked), provider token-prefix literals. Read-only, zero-dependency, deterministic. | 0.1.0-rc.6 (2026-08-14) |
| dsh-inspector | 1 | [CocoSgt/dsh-inspector](https://github.com/CocoSgt/dsh-inspector) · [npm](https://www.npmjs.com/package/dsh-inspector) | Inspect and manage the live instruction chain and project skills for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-keepalive | 1 | [xiaohj233/dsh-keepalive](https://github.com/xiaohj233/dsh-keepalive) | Opt-in detached watchdog for the DSH Web process with snapshot-checked repair. | 0.1.0-rc.6 (2026-08-14) |
| dsh-logger-panel | 1 | [LingLambda/dsh-logger-panel](https://github.com/LingLambda/dsh-logger-panel) | Runtime log panel for DeepSeek Harness: live SSE log view in Settings plus bounded date/size rotating JSONL files. | 0.1.0-rc.6 (2026-08-14) |
| dsh-profile-lock-proof | 1 | [dongsheng123132/dsh-profile-lock-proof](https://github.com/dongsheng123132/dsh-profile-lock-proof) | Content-addressed proof that a DeepSeek Harness profile declaration, pnpm lock and installed bundles agree | 0.1.0-rc.6 (2026-08-14) |
| dsh-status-plugin | 1 | [woshi-Tom/dsh-status-plugin](https://github.com/woshi-Tom/dsh-status-plugin) | A dsh status plugin with host-plane and browser halves: harness runtime health (process, listener, API-key presence, memory, uptime, plugin inventory) as JSON plus server-pushed SSE alerts, surfaced. | 0.1.0-rc.6 (2026-08-14) |
| dsh-surface-contract-proof | 1 | [dongsheng123132/dsh-surface-contract-proof](https://github.com/dongsheng123132/dsh-surface-contract-proof) | Content-addressed conformance proof across recorded DSH ToolRuntime, MCP JSON-RPC and CLI JSON surfaces | 0.1.0-rc.6 (2026-08-14) |
| dsh-windows-readiness-proof | 1 | [dongsheng123132/dsh-windows-readiness-proof](https://github.com/dongsheng123132/dsh-windows-readiness-proof) | Content-addressed readiness proof for sanitized DeepSeek Harness observations on managed Windows hosts | 0.1.0-rc.6 (2026-08-14) |

### Safety & approvals

Permission tiers, gates, redaction, protection.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-stream-rules | 4 | [jiesou/dsh-stream-rules](https://github.com/jiesou/dsh-stream-rules) · [npm](https://www.npmjs.com/package/@jiesou/dsh-stream-rules) | Inject steering rules when needed without wasting system context. | 0.1.0-rc.6 (2026-08-14) |
| dsh-undo-plugin | 4 | [lire1131/dsh-undo-plugin](https://github.com/lire1131/dsh-undo-plugin) | DSH undo/rollback system: snapshot config files on change, undo/redo the last action from the WebUI or by chat, and roll back broken plugin trees without reinstalling. Works even when DSH fails to. | 0.1.0-rc.6 (2026-08-14) |
| dsh-webui-auth | 4 | [Yuuz12/dsh-webui-auth](https://github.com/Yuuz12/dsh-webui-auth) · [npm](https://www.npmjs.com/package/dsh-webui-auth) | WebUI login gate for DeepSeek Harness: account/password in Settings, then HTTP, bundle, API, and WebSocket require a session cookie. | 0.1.0-rc.6 (2026-08-14) |
| dsh-auto-approve | 3 | [Jiao-XXX/dsh-auto-approve](https://github.com/Jiao-XXX/dsh-auto-approve) | A conservative automatic approval preset for DeepSeek Harness sandbox escalations | 0.1.0-rc.6 (2026-08-14) |
| dsh-agentfuse | 2 | [MkaliezZ/dsh-agentfuse-plugin](https://github.com/MkaliezZ/dsh-agentfuse-plugin) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-agentfuse) | AgentFuse fail-closed pre-dispatch tool gate for DeepSeek Harness with durable allow/block decision evidence. | 0.1.0-rc.6 (2026-08-14) |
| dsh-clawrouter | 2 | [BlockRunAI/dsh-clawrouter](https://github.com/BlockRunAI/dsh-clawrouter) | Strong-model review before risky tool calls, plus many models from one wallet. | 0.1.0-rc.6 (2026-08-14) |
| dsh-file-claim | 2 | [Nwflower/dsh-file-claim](https://github.com/Nwflower/dsh-file-claim) | Write in parallel, never overwrite — file claim / protection for concurrent DeepSeek Harness (DSH) sessions working the same workspace: claim/release, heartbeat stale takeover, and an async. | 0.1.0-rc.6 (2026-08-14) |
| dsh-multi-tenant | 2 | [GuoMonth/dsh-multi-tenant](https://github.com/GuoMonth/dsh-multi-tenant) | Multi-tenant SaaS extension for DeepSeek Harness (DSH): tenant identity, session ownership, authorization boundaries, tenant-aware MCP, and audit. | 0.1.0-rc.6 (2026-08-14) |
| dsh-promptwall | 2 | [Chhlafiu4312/promptwall](https://github.com/Chhlafiu4312/promptwall) · [npm](https://www.npmjs.com/package/dsh-promptwall) | Local prompt-injection and secret-exfiltration firewall for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| deepseek-heartflow | 1 | [yun520-1/deepseek-heartflow](https://github.com/yun520-1/deepseek-heartflow) · [npm](https://www.npmjs.com/package/@yun520-1/deepseek-heartflow) | HeartFlow gate for DSH: automatic output supervision plus a heartflow_check tool. | 0.1.0-rc.6 (2026-08-14) |
| dsh-auto | 1 | [simon300000/dsh-auto](https://github.com/simon300000/dsh-auto) · [npm](https://www.npmjs.com/package/dsh-auto) | Model-reviewed Auto Approve permission preset for the DeepSeek Harness Web UI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-auto-approval | 1 | [StyxNether/dsh-auto-approval](https://github.com/StyxNether/dsh-auto-approval) | A middle permission tier for DeepSeek Harness between workspace-write and danger-full-access: auto-approves harmless commands and operations targeting configured trusted areas, beyond the current. | 0.1.0-rc.6 (2026-08-14) |
| dsh-todo-freshness-guard | 1 | [lamost423/dsh-todo-freshness-guard](https://github.com/lamost423/dsh-todo-freshness-guard) | Remind and block stale tool work until todo_write is reconciled in DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-vault | 1 | [Ox0400/dsh-vault](https://github.com/Ox0400/dsh-vault) · [npm](https://www.npmjs.com/package/dsh-vault) | Encrypted credential vault for DeepSeek Harness: AES-256-GCM plus TOTP, model tools, and a Settings UI. | 0.1.0-rc.6 (2026-08-14) |

### Plugin managers & stores

In-UI stores, installers, skill managers.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-plugin-marketplace | 28 | [bradeGithub/DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) · [npm](https://www.npmjs.com/package/dsh-plugin-marketplace) | Web GUI plugin marketplace: browse, install, and update GitHub topic dsh-plugin packages from inside DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-market | 17 | [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | Visual plugin market inside DeepSeek Harness — browse, search, and one-click install community plugins. · DSH 可视化插件市场：逛一逛，点一下，装好。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-skill-viewer | 16 | [Fishquito7/dsh-skill-viewer](https://github.com/Fishquito7/dsh-skill-viewer) | dsh skill viewer: manage skills from the DSH web UI settings panel (hot enable/disable, delete, add) plus a CLI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-web-plugin-manager | 14 | [LX2000WASD/dsh-web-plugin-manager](https://github.com/LX2000WASD/dsh-web-plugin-manager) | Manage DeepSeek Harness (DSH) plugins from the Web UI: list, enable/disable, install/remove, environments, and a GitHub-awesome-driven marketplace. | 0.1.0-rc.6 (2026-08-14) |
| dsh-webui-market-plugin | 14 | [Sanqi-normal/dsh-webui-market-plugin](https://github.com/Sanqi-normal/dsh-webui-market-plugin) · [npm](https://www.npmjs.com/package/@sanqi-normal/dsh-webui-market-plugin) | In-harness community plugin market for the dsh web GUI: browse, install, and uninstall into a profile. | 0.1.0-rc.6 (2026-08-14) |
| dsh-find-plugin | 13 | [awesome-dsh-plugin/dsh-find-plugin](https://github.com/awesome-dsh-plugin/dsh-find-plugin) · [npm](https://www.npmjs.com/package/dsh-find-plugin) | Find DeepSeek Harness plugins from inside the agent via live GitHub dsh-plugin topic search, ranked by stars. | 0.1.0-rc.6 (2026-08-14) |
| deepseek-plugin-store | 12 | [Ericwong5021/deepseek-plugin-store](https://github.com/Ericwong5021/deepseek-plugin-store) | DeepSeek 插件商店开源数据源 · Open source data source for the DeepSeek Plugin Store | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-workshop | 12 | [yyyyukari/dsh-plugin-workshop](https://github.com/yyyyukari/dsh-plugin-workshop) · [npm](https://www.npmjs.com/package/@dsh-external/dsh-plugin-workshop) | Steam Workshop-style plugin browser for the DeepSeek Harness Web UI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-recommend | 9 | [zp-home/dsh-recommend](https://github.com/zp-home/dsh-recommend) | DSH 插件透明排行与推荐：每日自动抓取 dsh-plugin 话题生态 + 公开评分模型 + rank/recommend/search 工具 + 设置页排行标签 | 0.1.0-rc.6 (2026-08-14) |
| zat-dsh-engine | 5 | [mishibeikejie/zat-dsh-engine](https://github.com/mishibeikejie/zat-dsh-engine) · [npm](https://www.npmjs.com/package/zat-dsh-engine) | Visual plugin marketplace for DeepSeek Harness: browse, search, install, update, and uninstall community plugins. | 0.1.0-rc.6 (2026-08-14) |
| dsh-hub | 4 | [omdsh-dev/dsh-hub](https://github.com/omdsh-dev/dsh-hub) | OMDSH community extension hub built on official DeepSeek Harness contracts | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-hub | 4 | [Noob-stupid/dsh-plugin-hub](https://github.com/Noob-stupid/dsh-plugin-hub) | 插件控制台：一键启用/停用插件，浏览并安装 GitHub dsh-plugin 插件 | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-browser | 3 | [CriscolTheCoder/dsh-plugin-browser](https://github.com/CriscolTheCoder/dsh-plugin-browser) | Plugin market entry point + installed-plugin dashboard for DSH — browse the awesome-dsh-plugin catalog with live installed/loaded state, one-click install/update/uninstall through dshmarket, plus a. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-market-nanshan | 3 | [nanshan1995/DSH-Plugin-Market](https://github.com/nanshan1995/DSH-Plugin-Market) · [npm](https://www.npmjs.com/package/dshmarket) | Plugin market for DeepSeek Harness with a curated catalog, live GitHub browsing, translated search, and a pre-install audit gate. | 0.1.0-rc.6 (2026-08-14) |
| better-deepseek-harness | 2 | [silencieuxzero/Better_Deepseek_Harkness](https://github.com/silencieuxzero/Better_Deepseek_Harkness) | Better DeepSeek Harness — install and manage skills and plugins from the Web UI settings page. | 0.1.0-rc.6 (2026-08-14) |
| dizzy-dsh | 2 | [Acidmoon/DIzzy-DSH](https://github.com/Acidmoon/DIzzy-DSH) | Dizzy-DSH 插件合集仓库:git clone 后 dsh plugin add 即装,无需 npm 发布。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-marketplace | 2 | [ouyangyipeng/dsh-marketplace](https://github.com/ouyangyipeng/dsh-marketplace) | A safe, live plugin marketplace for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-installer | 2 | [zhang66633/dsh-plugin-installer](https://github.com/zhang66633/dsh-plugin-installer) | DSH 插件商店 + 安装排障技能一体包：Web GUI「插件商店」页签浏览插件目录（名称/介绍/原链接），一键触发安装；内置 dsh-plugin-installer 技能作为安装后端引擎。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-market | 2 | [chnjames/dsh-plugin-market](https://github.com/chnjames/dsh-plugin-market) | DSH 插件市场 — 在 DSH Web UI 内发现并一键安装社区插件，配套公开目录站 | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-market-theyoungchen | 2 | [TheYoungChen/dsh-plugin-market](https://github.com/TheYoungChen/dsh-plugin-market) | DeepSeek Harness plugin market: browse the dsh-plugin GitHub topic and install plugins from a panel above Settings. | 0.1.0-rc.6 (2026-08-14) |
| dsh-skill-manager | 2 | [Lanxing6480/dsh-skill-manager](https://github.com/Lanxing6480/dsh-skill-manager) · [npm](https://www.npmjs.com/package/@lanxing/dsh-skill-manager) | Skill manager for the dsh web GUI: a sidebar panel for listing, enabling, and organizing skills. | 0.1.0-rc.6 (2026-08-14) |
| dsh-skillradar | 2 | [hellosky983/dsh-skillradar](https://github.com/hellosky983/dsh-skillradar) | Scans session-visible skills and ranks them by relevance to the recent conversation. | 0.1.0-rc.6 (2026-08-14) |
| dsh-workshop | 2 | [loguhan/dsh-workshop](https://github.com/loguhan/dsh-workshop) | Steam Workshop style plugin store for DSH Web UI: browse, search and one-click install community plugins with mirror acceleration | 0.1.0-rc.6 (2026-08-14) |
| dsh-hotplug-engine | 1 | [AnothetLoice/dsh-hotplug-engine](https://github.com/AnothetLoice/dsh-hotplug-engine) | DSH hot-plug execution engine: a reliable install/enable/disable/rollback/audit service for plugin marketplaces, agents, and host plugins (execution layer, not a marketplace). | 0.1.0-rc.6 (2026-08-14) |
| dsh-mcp-center | 1 | [drfccv/dsh-mcp-center](https://github.com/drfccv/dsh-mcp-center) · [npm](https://www.npmjs.com/package/dsh-mcp-center) | Settings-driven MCP server manager: connect any MCP server to DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-catalog | 1 | [YiYan129600/dsh-plugin-catalog](https://github.com/YiYan129600/dsh-plugin-catalog) · [npm](https://www.npmjs.com/package/dsh-plugin-catalog) | Settings Plugins tab that lists installed plugins for the dsh web GUI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-hub-yunhuantian | 1 | [yunhuantian/dsh-plugin-hub](https://github.com/yunhuantian/dsh-plugin-hub) | Graphical plugin hub inside the Harness Web UI for browsing and installing community plugins. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-store | 1 | [w769721503/dsh-plugin-store](https://github.com/w769721503/dsh-plugin-store) | DeepSeek Harness 插件商店：在「设置 → 插件」里浏览、搜索、筛选并一键安装 dsh-plugin 生态插件。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-store-yunhuantian | 1 | [yunhuantian/dsh-plugin-store](https://github.com/yunhuantian/dsh-plugin-store) | Plugin Store for DeepSeek Harness (DSH): a graphical app-store inside the Harness Web UI — browse, search, and one-click install GitHub dsh-plugins, with local ratings, dependency impact graphs. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugins-market | 1 | [Luaphes/dsh-plugins-market](https://github.com/Luaphes/dsh-plugins-market) | DeepSeek Harness 插件创意市场：嗅探官方 dsh-plugin topic，噪音过滤、信任徽章、排序搜索与一键安装面板 | 0.1.0-rc.6 (2026-08-14) |
| dsh-skill-manager-ytxue | 1 | [YTxue/dsh-skill-manager-ytxue](https://github.com/YTxue/dsh-skill-manager-ytxue) · [npm](https://www.npmjs.com/package/dsh-skill-manager-ytxue) | Settings-sidebar skill manager: list and toggle, folder import, DSH-spec check and auto-fix. | 0.1.0-rc.6 (2026-08-14) |
| dsh-skill-remote | 1 | [CSY656/dsh-skill-remote](https://github.com/CSY656/dsh-skill-remote) | Remote skills.sh and GitHub skill provider and installer for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-skills | 1 | [CocoSgt/dsh-skills](https://github.com/CocoSgt/dsh-skills) · [npm](https://www.npmjs.com/package/dsh-skills) | Global skill hub for dsh: aggregates Claude Code, project, and .skill sources in Settings. | 0.1.0-rc.6 (2026-08-14) |
| dsh-skills-manager | 1 | [xiaoxianyu-office/dsh-skills-manager](https://github.com/xiaoxianyu-office/dsh-skills-manager) · [npm](https://www.npmjs.com/package/dsh-skills-manager) | Settings-page Skills manager: system and user skill lists with toggle, edit, delete, and create. | 0.1.0-rc.6 (2026-08-14) |

### Developer tools

Building, testing, and publishing plugins.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-user-experience | 18 | [DietCokewithSugar/dsh-user-experience](https://github.com/DietCokewithSugar/dsh-user-experience) | DeepSeek Harness UX walkthrough plugin: persona-driven source-code UX review for React (TypeScript/JavaScript) and Vue 3 projects, with change-triggered automatic walkthroughs | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-check | 17 | [omdsh-dev/dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) | DSH plugin health checker: scan plugin repos for manifest protocol / patch format / build pitfalls / hub registration, zero-dependency read-only diagnostics | 0.1.0-rc.6 (2026-08-14) |
| superpowers-dsh | 15 | [LayneChai/superpowers-dsh](https://github.com/LayneChai/superpowers-dsh) | TDD, debugging, planning, and collaboration skills for DeepSeek Harness, adapted from obra/superpowers. | 0.1.0-rc.6 (2026-08-14) |
| dsh-code-check | 2 | [a179-sanae/dsh-code-check](https://github.com/a179-sanae/dsh-code-check) | Auto type-check and lint diagnostics for DeepSeek Harness: after the model edits code, tsc runs in the background and a code_check tool reports what broke | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-healthcheck | 2 | [chenw2759-wq/dsh-plugin-healthcheck](https://github.com/chenw2759-wq/dsh-plugin-healthcheck) | DSH 插件健康检查：设置面板内的「插件检测」向导 — L0 静态检查（files 白名单/依赖声明/高危副本/依赖可解析/Windows 命令/lockfile 一致性）+ L1 配置组合检查 + L2 隔离试跑（子进程 boot 全树），发现即自动回滚（写 home patch 前弹确认），复杂问题打包预制提示词交给 agent 修复。铁律：只修改插件代码与配置层，严禁修改 harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-publisher | 2 | [akira399/dsh-plugin-publisher](https://github.com/akira399/dsh-plugin-publisher) | DSH plugin development & GitHub publishing workflow plugin for DeepSeek Harness (DSH). Host: registers the `dsh-plugin-publishing` skill (enabled by default, opt-out), and bridges a GUI-entered. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-release | 2 | [LeslieWylie/dsh-plugin-release](https://github.com/LeslieWylie/dsh-plugin-release) | Portable package contract, release checklist, and installation hygiene skills for DeepSeek Harness plugins. | 0.1.0-rc.6 (2026-08-14) |
| dsh-testgen | 2 | [bujue600-arch/dsh-testgen](https://github.com/bujue600-arch/dsh-testgen) | Automated unit-test generation for DeepSeek Harness: a /testgen command and generate_tests tool that scaffold, run, and fix tests until they pass. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-devecocli | 1 | [frankq007/dsh-plugin-devecocli](https://github.com/frankq007/dsh-plugin-devecocli) | HarmonyOS development for DeepSeek Harness: device/emulator management, UI automation, build & deploy, logs, lint and docs via the devecocli CLI | 0.1.0-rc.6 (2026-08-14) |

### Knowledge & research

Research workbenches, RAG, learning modes.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-scholar | 11 | [lzszq/dsh-scholar](https://github.com/lzszq/dsh-scholar) | DSH Research OS — a fully automated scientific research plugin for DSH (DeepSeek Harness): survey, idea, experiment contract, durable runner jobs, claim-evidence ledger, manuscript and release bundle. | 0.1.0-rc.6 (2026-08-14) |
| dsh-deep-research | 9 | [omdsh-dev/dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research) | Deep Research orchestrator extension for DeepSeek Harness: an adaptive cybernetics/information-theory deep_research tool on the official workflow engine, reusing built-in web_search/web_fetch. | 0.1.0-rc.6 (2026-08-14) |
| dsh-explain | 9 | [yuezengwu/dsh-explain](https://github.com/yuezengwu/dsh-explain) | Local-first learning-mode plugin with a global learning thread, per-source explanations, and a diagnostics settings UI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-science | 9 | [biociao/dsh-science](https://github.com/biociao/dsh-science) | Claude Science-style research workbench for DeepSeek Harness: ReAct research-loop engine (research_* tools), versioned artifacts with provenance (artifact_* tools), and 10 science skills for. | 0.1.0-rc.6 (2026-08-14) |
| dsh-book2skill | 3 | [omdsh-dev/dsh-book2skill](https://github.com/omdsh-dev/dsh-book2skill) | DSH book-to-skill plugin: a 5-stage long task (fetch → parse → understand → generate → install) with 3 human gates, host tools for the agent and a browser timeline panel | 0.1.0-rc.6 (2026-08-14) |
| dsh-citeguard | 2 | [Chhlafiu4312/citeguard](https://github.com/Chhlafiu4312/citeguard) · [npm](https://www.npmjs.com/package/dsh-citeguard) | Citation extraction and evidence verification for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-kb-sieve | 2 | [omdsh-dev/dsh-kb-sieve](https://github.com/omdsh-dev/dsh-kb-sieve) | 知识库筛子：把文档（md/txt/docx/pdf）构建成可审计知识包（references + SQLite FTS5），提供确定性检索（kb_query）与原文精读（kb_read）工具，可生成零脚本的 DSH skill 并动态加载。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-mindmap | 2 | [chenw2759-wq/dsh-mindmap](https://github.com/chenw2759-wq/dsh-mindmap) | 思维导图模式（dsh-mindmap）：把课件（PPT/PDF/Word）与电子书按「组胚思维导图」范例整理成打印级 HTML 复习思维导图——A3 横向、每主干知识点一页、大括号式横向布局、宋体大字不溢出、右侧留白笔记区、封面总览 + 交互式测试题。附带 mindmap-builder skill 与 mm_generate 工具。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-mindspace-local-rag | 2 | [Spirtxiaoqi7/mindspace-dsh-local-rag](https://github.com/Spirtxiaoqi7/mindspace-dsh-local-rag) · [npm](https://www.npmjs.com/package/mindspace-dsh-local-rag) | Local hybrid RAG plugin for DeepSeek Harness, invoked by the model from the workspace. | 0.1.0-rc.6 (2026-08-14) |
| dsh-reverse-skill | 2 | [dhicoc/dsh-reverse-skill](https://github.com/dhicoc/dsh-reverse-skill) · [npm](https://www.npmjs.com/package/@reverse-skill/dsh-reverse-skill) | Reverse-engineering skill pack as a Cordis plugin: 85 SKILL.md units for authorized security research. | 0.1.0-rc.6 (2026-08-14) |
| dsh-science-workbench | 2 | [poplarity/dsh-science-workbench](https://github.com/poplarity/dsh-science-workbench) · [npm](https://www.npmjs.com/package/dsh-science-workbench) | Reproducible science workbench: agent-driven cells, inline figures, provenance, and environment snapshots. | 0.1.0-rc.6 (2026-08-14) |
| dsh-project-organizer | 1 | [caoqinnan-web/dsh-project-organizer](https://github.com/caoqinnan-web/dsh-project-organizer) · [npm](https://www.npmjs.com/package/dsh-project-organizer) | Project context engineering for agents: turn messy project context into organized notes. | 0.1.0-rc.6 (2026-08-14) |
| knowlp-rag | 1 | [wly8691-jpg/knowlp-rag](https://github.com/wly8691-jpg/knowlp-rag) | KnowLP-RAG: dual knowledge-graph retrieval for Markdown notes — DeepSeek Harness (dsh) bundle: MCP server + native Cordis plugin | 0.1.0-rc.6 (2026-08-14) |

### Fun

Games, pets, memes, ambience. The reef has coral.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-ads | 316 | [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) | Satirical 2005-portal fake-ad plugin for the web UI (sidebar ads, in-conversation feed, corner popups); ad slots also surface real dsh-plugin topic repos | 0.1.0-rc.5 (2026-08-13) |
| whale-girl ⭐ | 119 | [vlln/whale-girl](https://github.com/vlln/whale-girl) | Desktop-pet companion for the web GUI (QQ-pet style): draggable, feedable, levels up with session activity; migrated from the removed .dsh-plugin format to dsh.bundle | 0.1.0-rc.5 (2026-08-13) |
| dsh-gomoku | 12 | [omdsh-dev/dsh-gomoku](https://github.com/omdsh-dev/dsh-gomoku) | Gomoku (five-in-a-row) for the dsh web GUI: AI move routes, model catalog, and default prompt (node half) plus the conversation-view tab with the board (browser half) | 0.1.0-rc.6 (2026-08-14) |
| dsh-emoji | 11 | [hellodigua/dsh-emoji](https://github.com/hellodigua/dsh-emoji) | Tiny semantic inline emoji for DSH Agent responses | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-d399 | 5 | [HuanLinOTO/dsh-plugin-d399](https://github.com/HuanLinOTO/dsh-plugin-d399) | 贪玩蓝鲸 — 模型生成时右下角弹出小游戏菜单（wordle / 消消乐，可拓展游戏注册表） | 0.1.0-rc.6 (2026-08-14) |
| dsh-funpack | 4 | [lvyuchuiyi/dsh-funpack](https://github.com/lvyuchuiyi/dsh-funpack) | 夸夸、运势、战报、番茄钟、摸鱼、沉浸氛围、桌宠语音、Live2D、Boss 隐身与代码花园一体化的 DeepSeek Harness 插件 | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-anti-ads | 4 | [HuanLinOTO/dsh-plugin-anti-ads](https://github.com/HuanLinOTO/dsh-plugin-anti-ads) | DSH ad-suppression plugin: writes dsh-ads's own settings key to all-false, broadcasts its retire event, scrubs its portal from the DOM, and short-circuits its dynamic-tier fetch. Four layers, all. | 0.1.0-rc.6 (2026-08-14) |
| gal-view | 4 | [Ayase34/gal-view](https://github.com/Ayase34/gal-view) | DSH Web GUI 会话页的 GAL 视窗：Galgame 风格对话视图 + 场景元素可视化编辑器 | 0.1.0-rc.6 (2026-08-14) |
| 7d7d | 3 | [omdsh-dev/7d7d](https://github.com/omdsh-dev/7d7d) | 7d7d —— 7k7k 风格的 DSH 游戏门户：在 Web UI 内生成、同步并游玩 HTML5 与自托管 Ruffle Flash 小游戏。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-auto-chess | 3 | [omdsh-dev/dsh-auto-chess](https://github.com/omdsh-dev/dsh-auto-chess) | Minimal auto chess for the dsh web GUI: AI action routes, model catalog, and default prompt (node half) plus the conversation-view tab with the boards (browser half) | 0.1.0-rc.6 (2026-08-14) |
| dsh-daily-fortune | 3 | [omdsh-dev/dsh-daily-fortune](https://github.com/omdsh-dev/dsh-daily-fortune) | DSH daily fortune plugin with Guan Yin lots, Tarot spreads, and daily quotes | 0.1.0-rc.6 (2026-08-14) |
| dsh-expression | 3 | [yyh-001/dsh-expression](https://github.com/yyh-001/dsh-expression) | Meme plugin: built-in gallery, bigram Dice semantic search, send_meme over Web/QQ, and a settings management panel. | 0.1.0-rc.6 (2026-08-14) |
| dsh-fun-typewriter | 3 | [omdsh-dev/dsh-fun-typewriter](https://github.com/omdsh-dev/dsh-fun-typewriter) | DSH Typewriter: WebAudio typing ambience with a plugin-owned settings API and zero audio assets | 0.1.0-rc.6 (2026-08-14) |
| dsh-fun-weather | 3 | [omdsh-dev/dsh-fun-weather](https://github.com/omdsh-dev/dsh-fun-weather) | DSH weather tab and weather-following themes powered by Open-Meteo | 0.1.0-rc.6 (2026-08-14) |
| dsh-mc-launcher | 3 | [hellosky983/dsh-mc-launcher](https://github.com/hellosky983/dsh-mc-launcher) | Minecraft Launcher built on DeepSeek Harness: full-screen launcher UI (root slot) with Microsoft device-code login, version download/install, and game launch from the DSH host process. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-auto-blame | 3 | [HuanLinOTO/dsh-plugin-auto-blame](https://github.com/HuanLinOTO/dsh-plugin-auto-blame) | Auto-blame: when a turn closes, asks an LLM for three cynical follow-up prompts and shows them as click-to-send bubbles above the composer. Host-gated master toggle in the settings page. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-spur | 3 | [HuanLinOTO/dsh-plugin-spur](https://github.com/HuanLinOTO/dsh-plugin-spur) | A braided whip (辫子) hanging in the chat-flow — grab the tip and swing to send "go work!" to the agent. | 0.1.0-rc.6 (2026-08-14) |
| dsh-jingling | 2 | [Yi-111-a/dsh-jingling](https://github.com/Yi-111-a/dsh-jingling) · [npm](https://www.npmjs.com/package/dsh-jingling) | Jingling companion for DeepSeek Harness: reviewable local memory, a restricted preset, and an optional desktop-pet sidecar. | 0.1.0-rc.6 (2026-08-14) |
| dsh-moyan | 2 | [elviszhang007/dsh-moyan](https://github.com/elviszhang007/dsh-moyan) · [npm](https://www.npmjs.com/package/dsh-moyan) | A quiet quote line in the Web UI sidebar: poems, literature, and game lines from a customizable corpus. | 0.1.0-rc.6 (2026-08-14) |
| dsh-blackjack | 1 | [WhiseNT/dsh-blackjack](https://github.com/WhiseNT/dsh-blackjack) · [npm](https://www.npmjs.com/package/dsh-blackjack) | Blackjack table in DeepSeek Harness: play 21 against the house while you work. | 0.1.0-rc.6 (2026-08-14) |
| dsh-deep-sleep | 1 | [omdsh-dev/dsh-deep-sleep](https://github.com/omdsh-dev/dsh-deep-sleep) | DSH Web 的猫猫早睡提醒：每日墙钟触发、持续使用逐步撒娇、支持稍后提醒和今晚跳过。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-desktop-pet | 1 | [2002yxy/dsh-desktop-pet](https://github.com/2002yxy/dsh-desktop-pet) | Customizable desktop-pet plugin for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-foxy-jumpscare | 1 | [01Virex/dsh-foxy-jumpscare](https://github.com/01Virex/dsh-foxy-jumpscare) | Every second there is a 1-in-1000 chance that Foxy (Withered Foxy) from Five Nights at Freddy's 2 jumpscares you in the DeepSeek Harness web UI: a full-screen scare plus the iconic scream. | 0.1.0-rc.6 (2026-08-14) |
| dsh-minigames | 1 | [omdsh-dev/dsh-minigames](https://github.com/omdsh-dev/dsh-minigames) | Right-side offline minigames panel: dino, tetris, tanks, minesweeper, 2048, sudoku, pac-man, and more. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-audiolib | 1 | [yangyue1974/dsh-plugin-audiolib](https://github.com/yangyue1974/dsh-plugin-audiolib) | Ambient soundtrack for DeepSeek Harness, driven by agent state and powered by AudioLib.ai. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-genshin-startup | 1 | [allen546/dsh-plugin-genshin-startup](https://github.com/allen546/dsh-plugin-genshin-startup) | DeepSeek Harness (dsh) plugin: Plays the Genshin Impact launch video centered with white fill in autofullscreen on startup before entering the Harness main page. | 0.1.0-rc.6 (2026-08-14) |
| dsh-pomodoro | 1 | [causebefore/dsh-pomodoro](https://github.com/causebefore/dsh-pomodoro) | DeepSeek Harness Web 番茄钟插件：可配置专注与休息时长，提供侧栏入口和可拖动浮动面板 | 0.1.0-rc.6 (2026-08-14) |
| dsh-prevent-scd | 1 | [Codingendless/dsh-prevent-scd](https://github.com/Codingendless/dsh-prevent-scd) · [npm](https://www.npmjs.com/package/dsh-prevent-scd) | Rest-reminder pet for DeepSeek Harness: blocks the Web UI with a nurse-cat after late-night or hours-long continuous use. | 0.1.0-rc.6 (2026-08-14) |

### Bundles

npm packages with a `dsh.bundle` manifest: composition layers a profile boots from.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-base (official) | 90644 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/bundle/base) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-base) | The shared dsh core as a profile bundle: every profile's first patch layer, inserting the base plugin rows over the empty profile root | 0.1.0-rc.5 (2026-08-13) |
| dsh-headless (official) | 90644 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/bundle/headless) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-headless) | The one-shot bundle: a direct core Agent/Session runner over dsh-base with no Host, HTTP, or browser layer | 0.1.0-rc.5 (2026-08-13) |
| dsh-web-app (official) | 90644 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/bundle/web-app) · [npm](https://www.npmjs.com/package/@deepseek-ai/dsh-web-app) | The browser-surface bundle: the web patch layer over dsh-base plus the runtime glue plugin (frontend dist serving, web-surface prompt, URL line) | 0.1.0-rc.5 (2026-08-13) |
| oh-dsh | 161 | [hust-open-atom-club/oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) | Community distribution bundling TUI, desktop, and web UI surfaces with layered installation, pinned to an exact harness revision via dsh-source.json | 0.1.0-rc.5 (2026-08-13) |
| dsh-toolkit | 15 | [omdsh-dev/dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit) | Zero-dependency toolkit collection: time, encoding, json, calculator, csv, regex, markdown, diff, stat, and schema in one entry. | 0.1.0-rc.6 (2026-08-14) |
| dsh-fabric | 9 | [omdsh-dev/fabric](https://github.com/omdsh-dev/fabric) | Fabric/Mixin extension workspace: an installable profile bundle carrier over the cordis-fabric package trio. | 0.1.0-rc.6 (2026-08-14) |
| dsh-101 | 2 | [bill9109/dsh-101](https://github.com/bill9109/dsh-101) | A document-first reader profile bundle for DeepSeek Harness: curated, ordered, searchable, translatable reading of DSH's own documentation over dsh-base + dsh-web-app. | 0.1.0-rc.6 (2026-08-14) |
| dsh-cmd-starter | 2 | [PandaColour/dsh-cmd-starter](https://github.com/PandaColour/dsh-cmd-starter) | Claude-Code style CLI scheduling bundle for DeepSeek Harness headless: --append-prompt, --resume, --continue, --output-format json, and model overrides. | 0.1.0-rc.6 (2026-08-14) |
| dsh-deeptutor | 2 | [TecFancy/dsh-deeptutor](https://github.com/TecFancy/dsh-deeptutor) | DeepTutor bridge bundle for DeepSeek Harness: learning capabilities, knowledge bases, and note archiving (HTTP/WS first, CLI fallback; auto-adapts local/remote deployment). | 0.1.0-rc.6 (2026-08-14) |
| coding-coach | 1 | [xiehuan123/coding-coach](https://github.com/xiehuan123/coding-coach) | Engineering skill pack for non-developers: a DSH profile bundle of Chinese-friendly coding skills. | 0.1.0-rc.6 (2026-08-14) |

### Skills

Anthropic-format `SKILL.md` units; dsh discovers them from its skill roots (no nested discovery, kebab-case names only).

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| colleague-skill | 21935 | [titanwings/colleague-skill](https://github.com/titanwings/colleague-skill) | Digital-companion skill in the Anthropic SKILL.md format dsh reads; install by copying it into a dsh skill root such as .agents/skills | 0.1.0-rc.5 (2026-08-13) |
| ex-skill | 1057 | [titanwings/ex-skill](https://github.com/titanwings/ex-skill) | Builds a digital persona skill of your ex from WeChat chat logs (create-ex); SKILL.md documents dsh discovery paths alongside other hosts | 0.1.0-rc.5 (2026-08-13) |
| harmony-next | 315 | [linhay/harmony-next.skills](https://github.com/linhay/harmony-next.skills) | HarmonyOS NEXT development skill with offline ArkTS/ArkUI references and DevEco automation; copy harmony-next/ into a dsh skill root | 0.1.0-rc.5 (2026-08-13) |
| argo | 69 | [taxueseek/argo](https://github.com/taxueseek/argo) | Agent-first multilingual search and evidence-verification skill routing 120+ engines with vertical sources and MCP entry points; SKILL.md at repo root | 0.1.0-rc.5 (2026-08-13) |
| find-plugins | 68 | [Nagi-ovo/dsh-find-plugins](https://github.com/Nagi-ovo/dsh-find-plugins) | Skill that discovers and installs dsh plugins from the GitHub dsh-plugin topic, verifying install method from repo manifests; copy skills/find-plugins into a skill root | 0.1.0-rc.5 (2026-08-13) |
| mstar-harness | 42 | [btspoony/mstar-harness](https://github.com/btspoony/mstar-harness) | Morning Star skill-driven engineering workflow (roles, phase gates, plan conventions) shipped as twenty SKILL.md units; copy skills/* into a dsh skill root | 0.1.0-rc.5 (2026-08-13) |
| dsh-plugin-development | 2 | [w2112515/dsh-plugin-development](https://github.com/w2112515/dsh-plugin-development) | Portable Agent Skill for developing and auditing DeepSeek Harness plugins, with an optional DSH bundle adapter. | 0.1.0-rc.6 (2026-08-14) |
| agent-loop-workflow | 1 | [LeslieWylie/agent-loop-workflow](https://github.com/LeslieWylie/agent-loop-workflow) | 通用多 agent 协作工作流骨架：Loop Guard、handoff 格式、风险三档分流、交付顺序、review→收口协议 | 0.1.0-rc.6 (2026-08-14) |
| dsh-wanghong-handwritten-ppt | 1 | [tjxj/dsh-wanghong-handwritten-ppt](https://github.com/tjxj/dsh-wanghong-handwritten-ppt) | Wang Hong-inspired Notability academic handwritten PPT skill for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| review-workflow | 1 | [LeslieWylie/review-workflow](https://github.com/LeslieWylie/review-workflow) | 通用多评委评审工作流：N 评委独立打分 + Chair 校准 + Critic 复核，带 6 步 6 checkpoint 流程控制 | 0.1.0-rc.6 (2026-08-14) |

### Themes

UI skins. The dedicated registry is [awesome-dsh-themes](https://github.com/dshworks/awesome-dsh-themes); only themes that also ship plugin machinery live here.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| dsh-deep-whale | 523 | [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale/tree/HEAD/maid-atelier) | Whale-girl skin series for the web UI; maid-atelier ships as a dsh.bundle package installed from a local clone (CC BY-NC-SA, non-commercial) | 0.1.0-rc.5 (2026-08-13) |

### Tools

Developer tooling around dsh.

| Name | Repo ★ | Repo | Description | Verified against |
|---|---|---|---|---|
| create-dsh-plugin | 14 | [whyihaveyou/dsh-suite](https://github.com/whyihaveyou/dsh-suite/tree/HEAD/packages/create-dsh-plugin) · [npm](https://www.npmjs.com/package/create-dsh-plugin) | Scaffold a DeepSeek Harness plugin in seconds: tool, events, and webui templates with next-tag version pinning and a built-in --verify smoke test. | 0.1.0-rc.6 (2026-08-14) |

## Add your plugin

Open a PR against [`data/plugins.json`](data/plugins.json) only; the README is regenerated. See [CONTRIBUTING.md](CONTRIBUTING.md). The spam gate in short: a real install path (a `dsh.bundle` manifest, a published npm package, or a `SKILL.md` layout dsh discovers), not a renamed template fork, and it loads against the dsh version you claim. Pick one or two `tags` from the schema's list so your entry lands in the right area.

A scheduled workflow also sweeps the `dsh-plugin` topic, npm, and GitHub code search; new finds queue in [`data/candidates.json`](data/candidates.json) on a single reused triage PR and never enter the registry without review. Rejected candidates are recorded with one-line reasons in [`data/rejected.json`](data/rejected.json) and are not re-queued.

## Field notes

Verified dsh traps, skill discovery rules, and hook-bridge limits live in [howto-dsh](https://github.com/dshworks/howto-dsh).

## License

MIT. Not affiliated with DeepSeek; the harness README calls itself "an idea, an official showcase, and a source of inspiration", and the ecosystem belongs to the community.
