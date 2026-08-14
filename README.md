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

136 entries. Data updated 2026-08-14.

### Bundles

npm packages with a `dsh.bundle` manifest: composition layers a profile boots from.

| Name | Repo | npm | Description | Verified against |
|---|---|---|---|---|
| dsh-base (official) | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/bundle/base) | [`@deepseek-ai/dsh-base`](https://www.npmjs.com/package/@deepseek-ai/dsh-base) | The shared dsh core as a profile bundle: every profile's first patch layer, inserting the base plugin rows over the empty profile root | 0.1.0-rc.5 (2026-08-13) |
| dsh-headless (official) | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/bundle/headless) | [`@deepseek-ai/dsh-headless`](https://www.npmjs.com/package/@deepseek-ai/dsh-headless) | The one-shot bundle: a direct core Agent/Session runner over dsh-base with no Host, HTTP, or browser layer | 0.1.0-rc.5 (2026-08-13) |
| dsh-web-app (official) | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/bundle/web-app) | [`@deepseek-ai/dsh-web-app`](https://www.npmjs.com/package/@deepseek-ai/dsh-web-app) | The browser-surface bundle: the web patch layer over dsh-base plus the runtime glue plugin (frontend dist serving, web-surface prompt, URL line) | 0.1.0-rc.5 (2026-08-13) |
| dsh-fabric | [omdsh-dev/fabric](https://github.com/omdsh-dev/fabric) | - | Fabric/Mixin extension workspace: an installable profile bundle carrier over the cordis-fabric package trio. | 0.1.0-rc.6 (2026-08-14) |
| dsh-toolkit | [omdsh-dev/dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit) | - | Zero-dependency toolkit collection: time, encoding, json, calculator, csv, regex, markdown, diff, stat, and schema in one entry. | 0.1.0-rc.6 (2026-08-14) |
| oh-dsh | [hust-open-atom-club/oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) | - | Community distribution bundling TUI, desktop, and web UI surfaces with layered installation, pinned to an exact harness revision via dsh-source.json | 0.1.0-rc.5 (2026-08-13) |

### Plugins

Cordis plugins activated through patch rows in a bundle or profile.

| Name | Repo | npm | Description | Verified against |
|---|---|---|---|---|
| dsh-hooks-claude-code (official) | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/hooks/hooks-claude-code) | [`@deepseek-ai/dsh-hooks-claude-code`](https://www.npmjs.com/package/@deepseek-ai/dsh-hooks-claude-code) | Bridge plugin: runs an existing Claude Code hooks.json on the harness interception seams (command hooks only; http, mcp_tool, prompt, and agent hooks are skipped with a warning) | 0.1.0-rc.5 (2026-08-13) |
| dsh-hooks-codex (official) | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/hooks/hooks-codex) | [`@deepseek-ai/dsh-hooks-codex`](https://www.npmjs.com/package/@deepseek-ai/dsh-hooks-codex) | Bridge plugin: runs a Codex hooks.json on the harness interception seams (regex-only matchers, snake_case payloads, only blocking decisions honored) | 0.1.0-rc.5 (2026-08-13) |
| 7d7d | [omdsh-dev/7d7d](https://github.com/omdsh-dev/7d7d) | - | 7d7d —— 7k7k 风格的 DSH 游戏门户：在 Web UI 内生成、同步并游玩 HTML5 与自托管 Ruffle Flash 小游戏。 | 0.1.0-rc.6 (2026-08-14) |
| anysearch-dsh | [anysearch-team/anysearch-dsh](https://github.com/anysearch-team/anysearch-dsh) | - | AnySearch web search provider and advanced tools for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| deepseek-harness-acp | [openma-ai/deepseek-harness-acp](https://github.com/openma-ai/deepseek-harness-acp) | - | Agent Client Protocol (ACP) adapter for DeepSeek Harness — use DeepSeek Harness from ACP clients such as Zed. | 0.1.0-rc.6 (2026-08-14) |
| dizzy-dsh | [Acidmoon/DIzzy-DSH](https://github.com/Acidmoon/DIzzy-DSH) | - | Dizzy-DSH 插件合集仓库:git clone 后 dsh plugin add 即装,无需 npm 发布。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-ads | [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) | - | Satirical 2005-portal fake-ad plugin for the web UI (sidebar ads, in-conversation feed, corner popups); ad slots also surface real dsh-plugin topic repos | 0.1.0-rc.5 (2026-08-13) |
| dsh-advisor | [omdsh-dev/dsh-advisor](https://github.com/omdsh-dev/dsh-advisor) | - | Per-session reviewer model that watches the primary transcript and injects severity-ranked advice. | 0.1.0-rc.6 (2026-08-14) |
| dsh-agent-teams | [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | - | AgentTeams plugin: coordinate teams of subagents from the web UI | 0.1.0-rc.5 (2026-08-13) |
| dsh-agentmemory | [elementor-i/dsh-agentmemory](https://github.com/elementor-i/dsh-agentmemory) | - | agentmemory for DeepSeek Harness (dsh): full memory_* tools, capture hooks, and context injection over the local REST server | 0.1.0-rc.6 (2026-08-14) |
| dsh-annotation | [omdsh-dev/dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) | - | DSH Web selection-annotation plugin: select assistant text, annotate (optional), and press Enter to send the annotation block with your message — the model replies to each annotation by number,. | 0.1.0-rc.6 (2026-08-14) |
| dsh-archived-sessions | [Zephyr-vibe/dsh-archived-sessions](https://github.com/Zephyr-vibe/dsh-archived-sessions) | - | DSH web plugin: an Archived Sessions manager in Settings — browse archived conversations, expand per-session details (disk usage, downloads, tool usage, lineage, cross-session recall),. | 0.1.0-rc.6 (2026-08-14) |
| dsh-at-file | [omdsh-dev/dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) | - | Codex-style @file mentions in the composer: search workspace files and attach their contents to prompts | 0.1.0-rc.5 (2026-08-13) |
| dsh-auto-approval | [StyxNether/dsh-auto-approval](https://github.com/StyxNether/dsh-auto-approval) | - | A middle permission tier for DeepSeek Harness between workspace-write and danger-full-access: auto-approves harmless commands and operations targeting configured trusted areas, beyond the current. | 0.1.0-rc.6 (2026-08-14) |
| dsh-auto-approve | [Jiao-XXX/dsh-auto-approve](https://github.com/Jiao-XXX/dsh-auto-approve) | - | A conservative automatic approval preset for DeepSeek Harness sandbox escalations | 0.1.0-rc.6 (2026-08-14) |
| dsh-auto-chess | [omdsh-dev/dsh-auto-chess](https://github.com/omdsh-dev/dsh-auto-chess) | - | Minimal auto chess for the dsh web GUI: AI action routes, model catalog, and default prompt (node half) plus the conversation-view tab with the boards (browser half) | 0.1.0-rc.6 (2026-08-14) |
| dsh-auto-memory | [Aik358/dsh-auto-memory](https://github.com/Aik358/dsh-auto-memory) | - | DSH 自动记忆插件:三层记忆(用户级/项目笔记/每日日志)自动注入与检索、每日反思、可视化面板与设置页,支持继承其他 AI 工具的记忆。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-background-agents | [PerryLink/dsh-background-agents](https://github.com/PerryLink/dsh-background-agents) | - | Durable continuable child agents: watch progress in the Web UI sidebar, message anytime, and interrupt through the subagent seam. | 0.1.0-rc.6 (2026-08-14) |
| dsh-bash-encoding | [omdsh-dev/dsh-bash-encoding](https://github.com/omdsh-dev/dsh-bash-encoding) | - | Replaces ctx.bash to collect raw bytes and auto-detect UTF-16LE/UTF-8/GBK, fixing Chinese mojibake on WSL/Windows. | 0.1.0-rc.6 (2026-08-14) |
| dsh-better-sidebar | [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | [`dsh-better-sidebar`](https://www.npmjs.com/package/dsh-better-sidebar) | Full sidebar workbench with file rendering/editing, terminal, Git, and subagents; third-party extensions can register new tabs | 0.1.0-rc.5 (2026-08-13) |
| dsh-book2skill | [omdsh-dev/dsh-book2skill](https://github.com/omdsh-dev/dsh-book2skill) | - | DSH book-to-skill plugin: a 5-stage long task (fetch → parse → understand → generate → install) with 3 human gates, host tools for the agent and a browser timeline panel | 0.1.0-rc.6 (2026-08-14) |
| dsh-bottom-bar | [kc0ed/dsh-bottom-bar](https://github.com/kc0ed/dsh-bottom-bar) | - | 底栏统计设置（固化版）：可组装的输入框下方统计行 + 预估费用标注 + 设置页（底栏）。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-browser | [Lum1104/dsh-browser](https://github.com/Lum1104/dsh-browser) | - | Chrome sidebar plugin that lets dsh operate the browser directly, without vision. | 0.1.0-rc.6 (2026-08-14) |
| dsh-cc-tui | [ccch1mneyyy/dsh-cc-tui](https://github.com/ccch1mneyyy/dsh-cc-tui) | [`dsh-cc-tui`](https://www.npmjs.com/package/dsh-cc-tui) | Claude Code-style fullscreen terminal UI: streaming thinking, double-Esc rewind, context progress bar, and TPS meter over the headless runner | 0.1.0-rc.5 (2026-08-13) |
| dsh-clawrouter | [BlockRunAI/dsh-clawrouter](https://github.com/BlockRunAI/dsh-clawrouter) | - | Strong-model review before risky tool calls, plus many models from one wallet. | 0.1.0-rc.6 (2026-08-14) |
| dsh-client-ui-monitor | [Auran-Lu/dsh-client-ui-monitor](https://github.com/Auran-Lu/dsh-client-ui-monitor) | - | Sidebar usage dashboard: session token usage, estimated cost in CNY/USD, and DeepSeek API balance. | 0.1.0-rc.6 (2026-08-14) |
| dsh-context | [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) | [`dsh-context`](https://www.npmjs.com/package/dsh-context) | Context insight panel — a Context tab in the dsh web UI showing what the model's context window is made of and how it evolves. | 0.1.0-rc.6 (2026-08-14) |
| dsh-conv-search | [beijingwahw/dsh-conv-search](https://github.com/beijingwahw/dsh-conv-search) | - | In-conversation text search for the dsh Web UI (Ctrl+F), match case, whole word, and streaming-aware hits. | 0.1.0-rc.6 (2026-08-14) |
| dsh-conversation-cost | [Ayaka157/dsh-conversation-cost](https://github.com/Ayaka157/dsh-conversation-cost) | - | 在 DSH 对话底部统计行实时显示 DeepSeek 用量费用（人民币/美元双币，含缓存命中与峰谷定价） | 0.1.0-rc.6 (2026-08-14) |
| dsh-conversation-share | [omdsh-dev/dsh-conversation-share](https://github.com/omdsh-dev/dsh-conversation-share) | - | Select a conversation range and share it as a branded PNG long image, with draggable magnetically snapping markers. | 0.1.0-rc.6 (2026-08-14) |
| dsh-custom-tool | [omdsh-dev/dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool) | - | Create and manage sandboxed JavaScript tools with a Monaco editor and a model-driven tool lifecycle | 0.1.0-rc.5 (2026-08-13) |
| dsh-daily-fortune | [omdsh-dev/dsh-daily-fortune](https://github.com/omdsh-dev/dsh-daily-fortune) | - | DSH daily fortune plugin with Guan Yin lots, Tarot spreads, and daily quotes | 0.1.0-rc.6 (2026-08-14) |
| dsh-daily-progress | [omdsh-dev/dsh-daily-progress](https://github.com/omdsh-dev/dsh-daily-progress) | - | DSH daily progress achievement plugin: evening plans for tomorrow, a todo-style checklist today, and a thermometer completion-rate widget in the composer dock | 0.1.0-rc.6 (2026-08-14) |
| dsh-data-agent | [omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) | - | Session-scoped MySQL/PostgreSQL/SQLite connections, an sqlcmd tool, a data-agent preset, and a database tab. | 0.1.0-rc.6 (2026-08-14) |
| dsh-deep-research | [omdsh-dev/dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research) | - | Deep Research orchestrator extension for DeepSeek Harness: an adaptive cybernetics/information-theory deep_research tool on the official workflow engine, reusing built-in web_search/web_fetch. | 0.1.0-rc.6 (2026-08-14) |
| dsh-deep-sleep | [omdsh-dev/dsh-deep-sleep](https://github.com/omdsh-dev/dsh-deep-sleep) | - | DSH Web 的猫猫早睡提醒：每日墙钟触发、持续使用逐步撒娇、支持稍后提醒和今晚跳过。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-easyssh | [chenw2759-wq/dsh-easyssh](https://github.com/chenw2759-wq/dsh-easyssh) | - | Remote SSH workspace plugin: local brain, remote hands, with a Web GUI frontend for the remote host. | 0.1.0-rc.6 (2026-08-14) |
| dsh-engram-relay | [yjh051108/dsh-engram-relay](https://github.com/yjh051108/dsh-engram-relay) | - | Cross-session layered memory relay with hash, semantic, and causal sparse recall via engram_* tools. | 0.1.0-rc.6 (2026-08-14) |
| dsh-ernie-image | [omdsh-dev/dsh-ernie-image](https://github.com/omdsh-dev/dsh-ernie-image) | - | DSH ERNIE-Image-Turbo text-to-image plugin: generate images via Baidu AI Studio, save them as durable session attachments, plus a settings card and a generation gallery panel | 0.1.0-rc.6 (2026-08-14) |
| dsh-essential | [omdsh-dev/dsh-essential](https://github.com/omdsh-dev/dsh-essential) | - | Recoverable conversation deletion for dsh: menu integration, instant hide, and restart-safe archive. | 0.1.0-rc.6 (2026-08-14) |
| dsh-ex-setting | [omdsh-dev/ex-setting](https://github.com/omdsh-dev/ex-setting) | - | Automatic Web settings and composition configuration bundle for dsh. | 0.1.0-rc.6 (2026-08-14) |
| dsh-explain | [yuezengwu/dsh-explain](https://github.com/yuezengwu/dsh-explain) | - | Local-first learning-mode plugin with a global learning thread, per-source explanations, and a diagnostics settings UI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-expression | [yyh-001/dsh-expression](https://github.com/yyh-001/dsh-expression) | - | Meme plugin: built-in gallery, bigram Dice semantic search, send_meme over Web/QQ, and a settings management panel. | 0.1.0-rc.6 (2026-08-14) |
| dsh-file-explorer | [joejojoking-cloud/dsh-file-explorer](https://github.com/joejojoking-cloud/dsh-file-explorer) | - | Right-side resizable file tree with search, syntax-highlighted preview, in-panel editing, and one-click VS Code open. | 0.1.0-rc.6 (2026-08-14) |
| dsh-fun-typewriter | [omdsh-dev/dsh-fun-typewriter](https://github.com/omdsh-dev/dsh-fun-typewriter) | - | DSH Typewriter: WebAudio typing ambience with a plugin-owned settings API and zero audio assets | 0.1.0-rc.6 (2026-08-14) |
| dsh-fun-weather | [omdsh-dev/dsh-fun-weather](https://github.com/omdsh-dev/dsh-fun-weather) | - | DSH weather tab and weather-following themes powered by Open-Meteo | 0.1.0-rc.6 (2026-08-14) |
| dsh-fusion | [omdsh-dev/dsh-fusion](https://github.com/omdsh-dev/dsh-fusion) | - | Fuse two or more dsh conversations into one durable, continuable session with pruning, grouping, and sort. | 0.1.0-rc.6 (2026-08-14) |
| dsh-genui | [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) | - | Renders interactive UI components inline in assistant replies via the dsh-ui fence: layout, charts, plots, forms, quizzes, mermaid, 3D scenes, and an action event loop back to the model. | 0.1.0-rc.6 (2026-08-14) |
| dsh-github | [PerryLink/dsh-github](https://github.com/PerryLink/dsh-github) | - | GitHub integration for DeepSeek Harness: create pull requests, review PRs with background jobs, and read issues — every write gated by human approval | 0.1.0-rc.6 (2026-08-14) |
| dsh-gomoku | [omdsh-dev/dsh-gomoku](https://github.com/omdsh-dev/dsh-gomoku) | - | Gomoku (five-in-a-row) for the dsh web GUI: AI move routes, model catalog, and default prompt (node half) plus the conversation-view tab with the board (browser half) | 0.1.0-rc.6 (2026-08-14) |
| dsh-governed-workflow | [zcx369658780/governed-workflow-for-dsh](https://github.com/zcx369658780/governed-workflow-for-dsh) | - | Policy-enforced, evidence-first governed workflows for DeepSeek Harness agents — installable community plugin (governance core + authority provider) | 0.1.0-rc.6 (2026-08-14) |
| dsh-gpu | [zytsyj/dsh-gpu](https://github.com/zytsyj/dsh-gpu) | - | GPU-aware execution layer for DeepSeek Harness: gpu_status / gpu_exec / gpu_run_bg tools, per-step GPU context injection, automatic CUDA_VISIBLE_DEVICES card selection | 0.1.0-rc.6 (2026-08-14) |
| dsh-hub | [omdsh-dev/dsh-hub](https://github.com/omdsh-dev/dsh-hub) | - | OMDSH community extension hub built on official DeepSeek Harness contracts | 0.1.0-rc.6 (2026-08-14) |
| dsh-image-subagent | [yuqingsh/dsh-image-subagent](https://github.com/yuqingsh/dsh-image-subagent) | - | 让纯文本主模型（DeepSeek V4 等）也能接收图片附件：图片投影为显式占位文本，由主模型委托视觉子代理经 read_attachment/read_image 读取。零核心补丁，纯插件实现。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-imagecraft | [SPYQWER1/dsh-imagecraft](https://github.com/SPYQWER1/dsh-imagecraft) | - | image_gen and image_vision model tools for the DeepSeek Harness, powered by the ChatGPT subscription (no API key). | 0.1.0-rc.6 (2026-08-14) |
| dsh-input-history | [omdsh-dev/dsh-input-history](https://github.com/omdsh-dev/dsh-input-history) | - | Composer input history: Ctrl+Up / Ctrl+Down recalls and cycles already-sent messages like a terminal. | 0.1.0-rc.6 (2026-08-14) |
| dsh-inspect | [omdsh-dev/dsh-inspect](https://github.com/omdsh-dev/dsh-inspect) | - | 发现问题 → 修复交付 → 质量复查 的简单闭环插件：checkup（对抗式检查+红队验证）/ fix（根因→修复→验证）/ review（对抗式复查）三个工具，基于官方 workflow 引擎。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-kb-sieve | [omdsh-dev/dsh-kb-sieve](https://github.com/omdsh-dev/dsh-kb-sieve) | - | 知识库筛子：把文档（md/txt/docx/pdf）构建成可审计知识包（references + SQLite FTS5），提供确定性检索（kb_query）与原文精读（kb_read）工具，可生成零脚本的 DSH skill 并动态加载。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-lark | [omdsh-dev/dsh-lark](https://github.com/omdsh-dev/dsh-lark) | - | Lark/Feishu IM bot channel: chats drive agents, replies and approvals come back as messages and cards. | 0.1.0-rc.6 (2026-08-14) |
| dsh-llm-fallback | [Visol-456/dsh-llm-fallback](https://github.com/Visol-456/dsh-llm-fallback) | - | Provider fallback chain for the DeepSeek Harness LLM seam. | 0.1.0-rc.6 (2026-08-14) |
| dsh-llm-fallbacks | [omdsh-dev/dsh-llm-fallbacks](https://github.com/omdsh-dev/dsh-llm-fallbacks) | - | Automatic provider/model fallback chains when LLM requests keep failing after retries, auth, quota, or rate limits. | 0.1.0-rc.6 (2026-08-14) |
| dsh-mcp-panel | [PerryLink/dsh-mcp-panel](https://github.com/PerryLink/dsh-mcp-panel) | - | Read-only runtime management panel for the official DeepSeek Harness MCP client: /mcp command, a Settings page MCP tab with connection status, recent errors, reconnect counts and tool inventory. | 0.1.0-rc.6 (2026-08-14) |
| dsh-minigames | [omdsh-dev/dsh-minigames](https://github.com/omdsh-dev/dsh-minigames) | - | Right-side offline minigames panel: dino, tetris, tanks, minesweeper, 2048, sudoku, pac-man, and more. | 0.1.0-rc.6 (2026-08-14) |
| dsh-mnemon | [omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) | - | Local-first three-tier memory for dsh: runtime memory, searchable documents, and supervised memory spaces. | 0.1.0-rc.6 (2026-08-14) |
| dsh-mobile | [lehhair/dsh-mobile](https://github.com/lehhair/dsh-mobile) | - | Narrow-screen pager: the stock three-column frame becomes a swipeable sidebar\|chat pager with safe-area insets. | 0.1.0-rc.6 (2026-08-14) |
| dsh-net-proxy | [mafeis/dsh-net-proxy](https://github.com/mafeis/dsh-net-proxy) | - | DeepSeek Harness network-proxy plugin: route the agent's own network requests (web_search / web_fetch / external APIs) through a configured HTTP/HTTPS-CONNECT/SOCKS5 proxy, persisted and. | 0.1.0-rc.6 (2026-08-14) |
| dsh-node-nav | [Seryta/dsh-node-nav](https://github.com/Seryta/dsh-node-nav) | - | Conversation node navigator: a right-side node string with hover preview, click-to-jump, and an active pill. | 0.1.0-rc.6 (2026-08-14) |
| dsh-notification | [omdsh-dev/dsh-notification](https://github.com/omdsh-dev/dsh-notification) | - | Desktop notifications for turn completions, with per-outcome controls and include/exclude keyword rules | 0.1.0-rc.5 (2026-08-13) |
| dsh-notification-center | [610la/dsh-notification-center](https://github.com/610la/dsh-notification-center) | - | 通知中心：对话/任务完成、报错、等待批准等事件触发浏览器通知 + 21 种匹配音效，每类事件独立配置（音效/文件/URL/音量/开关）。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-open-in-vscode | [omdsh-dev/dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) | - | Open workspace directories in VS Code directly from the web GUI | 0.1.0-rc.5 (2026-08-13) |
| dsh-openpencil | [ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) | [`@zseven-w/dsh-openpencil`](https://www.npmjs.com/package/@zseven-w/dsh-openpencil) | OpenPencil design preview and editing inside the web UI | 0.1.0-rc.5 (2026-08-13) |
| dsh-outline | [urzeye/dsh-outline](https://github.com/urzeye/dsh-outline) | - | DSH web plugin: a realtime conversation outline panel (user questions + markdown headings) for the DeepSeek Harness Web GUI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-paddle-ocr | [omdsh-dev/dsh-paddle-ocr](https://github.com/omdsh-dev/dsh-paddle-ocr) | - | DSH PaddleOCR (百度 PaddleOCR-VL 文档布局解析) plugin: OCR tools plus a settings card and task panel | 0.1.0-rc.6 (2026-08-14) |
| dsh-paste-input | [omdsh-dev/dsh-paste-input](https://github.com/omdsh-dev/dsh-paste-input) | - | WebUI file input: Ctrl+V paste with a first-run notice, drag-and-drop, and copy-into-session-workspace on send. | 0.1.0-rc.6 (2026-08-14) |
| dsh-personalize | [Zephyr-vibe/dsh-personalize](https://github.com/Zephyr-vibe/dsh-personalize) | - | DSH web plugin: per-host personalization — global custom instructions, local long-term memory (collect / retain / integrate / manage), and reply tone presets. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-check | [omdsh-dev/dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) | - | DSH plugin health checker: scan plugin repos for manifest protocol / patch format / build pitfalls / hub registration, zero-dependency read-only diagnostics | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-installer | [zhang66633/dsh-plugin-installer](https://github.com/zhang66633/dsh-plugin-installer) | - | DSH 插件商店 + 安装排障技能一体包：Web GUI「插件商店」页签浏览插件目录（名称/介绍/原链接），一键触发安装；内置 dsh-plugin-installer 技能作为安装后端引擎。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-prime-agent | [yoke233/dsh-prime-agent](https://github.com/yoke233/dsh-prime-agent) | - | Prime Agent-inspired persistent RLM control plane for DeepSeek Harness Code Mode. | 0.1.0-rc.6 (2026-08-14) |
| dsh-provider-model-configurator | [LiangYin233/dsh-provider-model-configurator](https://github.com/LiangYin233/dsh-provider-model-configurator) | - | Provider Model Configurator for DeepSeek Harness: view, create, edit, copy and delete model entries (context window, max output, modalities, reasoning efforts) across your configured providers,. | 0.1.0-rc.6 (2026-08-14) |
| dsh-qwen-mm | [omdsh-dev/Qwen-MM-Plugins](https://github.com/omdsh-dev/Qwen-MM-Plugins) | - | Qwen-MM capabilities as runtime-fetched Agent Skills and strict MCP tool servers | 0.1.0-rc.6 (2026-08-14) |
| dsh-revive | [omdsh-dev/dsh-revive](https://github.com/omdsh-dev/dsh-revive) | - | DSH 一键复活：重启后给所有被打断的会话自动发送「继续」指令（/revive 命令 + revive_sessions 工具 + 浏览器一键按钮） | 0.1.0-rc.6 (2026-08-14) |
| dsh-role-router | [SnowAmberX/dsh-role-router](https://github.com/SnowAmberX/dsh-role-router) | - | Route agent requests by role: planner model in plan mode, default otherwise, and a subagent model for subagents. | 0.1.0-rc.6 (2026-08-14) |
| dsh-scholar | [lzszq/dsh-scholar](https://github.com/lzszq/dsh-scholar) | - | DSH Research OS — a fully automated scientific research plugin for DSH (DeepSeek Harness): survey, idea, experiment contract, durable runner jobs, claim-evidence ledger, manuscript and release bundle. | 0.1.0-rc.6 (2026-08-14) |
| dsh-scout | [omdsh-dev/dsh-scout](https://github.com/omdsh-dev/dsh-scout) | - | Read-only environment probe tool: runtime, PATH commands, software versions, and host resources on demand. | 0.1.0-rc.6 (2026-08-14) |
| dsh-security-audit | [omdsh-dev/dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) | - | Read-only local security audit: config, credential metadata, plugin provenance, sessions, and network exposure. | 0.1.0-rc.6 (2026-08-14) |
| dsh-session-health | [omdsh-dev/dsh-session-health](https://github.com/omdsh-dev/dsh-session-health) | - | Frame-level diagnostics over multi-frame zstd session logs: torn, corrupt, or empty session detection. | 0.1.0-rc.6 (2026-08-14) |
| dsh-session-hub | [Asaiuta/dsh-session-hub](https://github.com/Asaiuta/dsh-session-hub) | - | Aggregate and control sessions across multiple remote dsh web servers from one pane: registry, merged list, history. | 0.1.0-rc.6 (2026-08-14) |
| dsh-shuttle | [omdsh-dev/dsh-shuttle](https://github.com/omdsh-dev/dsh-shuttle) | - | Bidirectional conversation migration between dsh, Codex, Claude Code, Pi, Reasonix, and OpenCode. | 0.1.0-rc.6 (2026-08-14) |
| dsh-sidechain | [omdsh-dev/dsh-sidechain](https://github.com/omdsh-dev/dsh-sidechain) | - | /side persistent side conversations and /btw one-shot side questions in an ephemeral fork that does not write main history. | 0.1.0-rc.6 (2026-08-14) |
| dsh-skill-panel | [hexbee/dsh-skill-panel](https://github.com/hexbee/dsh-skill-panel) | - | DSH settings panel for viewing and managing ~/.agents/skills and per-project .agents/skills skill directories | 0.1.0-rc.6 (2026-08-14) |
| dsh-smarthome | [YLifeOnlyOnce/dsh-smarthome](https://github.com/YLifeOnlyOnce/dsh-smarthome) | - | Home Assistant control behind an approval gate: read entity states, query history, and call services. | 0.1.0-rc.6 (2026-08-14) |
| dsh-ssh | [UynajGI/dsh-ssh](https://github.com/UynajGI/dsh-ssh) | - | SSH remote-execution plugin: ProxyJump chain, SFTP filesystem, subprocess and PTY over ssh2. | 0.1.0-rc.6 (2026-08-14) |
| dsh-ssh-remote | [CrazyShout/dsh-ssh-remote](https://github.com/CrazyShout/dsh-ssh-remote) | - | SSH remote workspaces: browse, read/write, run commands and open terminals on remote hosts, with sidebar status dots. | 0.1.0-rc.6 (2026-08-14) |
| dsh-terminal-panel | [wuwuzhige-sudo/dsh-terminal-panel](https://github.com/wuwuzhige-sudo/dsh-terminal-panel) | - | Manual Terminal tab in the web conversation view: host commands, persistent cwd, sudo prompt, and history. | 0.1.0-rc.6 (2026-08-14) |
| dsh-text-translation | [1738348785/dsh-plugin-text-translation](https://github.com/1738348785/dsh-plugin-text-translation) | - | Text & document localization plugin for DeepSeek Harness (DSH): lossless tag-protected extraction, batch slicing and assembly for translation workflows | 0.1.0-rc.6 (2026-08-14) |
| dsh-tianshu-tui | [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | [`@huiliyi37/dsh-tianshu-tui`](https://www.npmjs.com/package/@huiliyi37/dsh-tianshu-tui) | Terminal UI for dsh shipped as an installable profile bundle | 0.1.0-rc.5 (2026-08-13) |
| dsh-tokenledger | [zh667/TokenLedger](https://github.com/zh667/TokenLedger) | - | Token usage accounting for DeepSeek Harness, reconciled against New API and Sub2API relay-site billing | 0.1.0-rc.6 (2026-08-14) |
| dsh-toy | [c3ll256/dsh-toy](https://github.com/c3ll256/dsh-toy) | - | Connects toys/devices to DSH: asks brand/model then picks Intiface (Bluetooth, serial, USB; auto-starts Engine) or MonsterParty for known share-link models; unknown starts generic Bluetooth search. | 0.1.0-rc.6 (2026-08-14) |
| dsh-track | [fakechris/dsh-track](https://github.com/fakechris/dsh-track) | - | Embedded task-management engine: decision-point protocol, capture wall, and Linear-shaped issues over session events. | 0.1.0-rc.6 (2026-08-14) |
| dsh-turn-rewind | [Anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) | - | Rewind conversation and workspace state to a previous turn, backed by a persistent change ledger | 0.1.0-rc.5 (2026-08-13) |
| dsh-ui-progress | [omdsh-dev/dsh-ui-progress](https://github.com/omdsh-dev/dsh-ui-progress) | - | Composer-dock session progress bar: real todo progress, live token rate, interrupted orange state, and reminder. | 0.1.0-rc.6 (2026-08-14) |
| dsh-ui-quote-selection | [nekogpt/dsh-ui-quote-selection](https://github.com/nekogpt/dsh-ui-quote-selection) | - | Select chat text and quote it into the composer as an inline reference chip; full text materializes on submit. | 0.1.0-rc.6 (2026-08-14) |
| dsh-ui-status-label | [alingalingling/ui-status-label](https://github.com/alingalingling/ui-status-label) | - | Web UI plugin that makes the assistant's thinking status label ('deep diving') user-configurable through settings | 0.1.0-rc.5 (2026-08-13) |
| dsh-ui-topbar-compact | [maque2333/dsh-ui-topbar-compact](https://github.com/maque2333/dsh-ui-topbar-compact) | - | Compact dsh web top bar: single-line header, pill-style view switcher, and a subtler divider. | 0.1.0-rc.6 (2026-08-14) |
| dsh-usage-billing | [940842546/dsh-usage-billing](https://github.com/940842546/dsh-usage-billing) | - | DeepSeek Harness 用量与消费统计插件：按 2026-08-17 调价前后峰谷价格计费，含主界面汇总面板、会话级明细与图表 | 0.1.0-rc.6 (2026-08-14) |
| dsh-vision-proxy | [Flyvhidbwo/dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) | - | deepseek-vision provider route that transcribes attached images via an OpenAI-compatible VLM before DeepSeek answers. | 0.1.0-rc.6 (2026-08-14) |
| dsh-vision-router | [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) | - | Turn-level vision routing with provider fallbacks, a cached vision_describe tool, JSON output, and optional per-host proxy. | 0.1.0-rc.6 (2026-08-14) |
| dsh-vision-toolkit | [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | - | Harness-native integration of agent-vision-toolkit for text-only models: image Q&A with intent, long-screenshot OCR, UI restoration, grounding, and pixel diff | 0.1.0-rc.5 (2026-08-13) |
| dsh-visualize | [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) | - | Generative UI in conversation: a visualize tool plus companion skill renders interactive HTML cards in sandboxed frames with streaming preview | 0.1.0-rc.5 (2026-08-13) |
| dsh-voice-funasr | [omdsh-dev/dsh-voice-funasr](https://github.com/omdsh-dev/dsh-voice-funasr) | - | DSH web plugin: local offline FunASR voice input (paraformer int8 onnx sidecar, Web Speech fallback, LLM polish). | 0.1.0-rc.6 (2026-08-14) |
| dsh-web-search-exa | [TonyDua/dsh-web-search-exa](https://github.com/TonyDua/dsh-web-search-exa) | - | Zero-config Exa web search provider for DeepSeek Harness (dsh): keyless anonymous MCP fallback (mcp.exa.ai/mcp) plus keyed REST search — a drop-in WebSearchProvider for the ctx.web seam, no API. | 0.1.0-rc.6 (2026-08-14) |
| dsh-web-ui | [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) | - | Plugin and skin collection for the dsh Web UI: task board, git graph, right-side panel, remote mobile UI, live token stats, and a skin center that routes around the theme-persistence gap | 0.1.0-rc.5 (2026-08-13) |
| dsh-web-ui-notify | [bill9109/dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) | - | Desktop notifications for approvals, questions, and turn completion so you can leave the dsh tab. | 0.1.0-rc.6 (2026-08-14) |
| dsh-webbridge | [omdsh-dev/dsh-webbridge](https://github.com/omdsh-dev/dsh-webbridge) | - | Kimi WebBridge host plugin: model tools that drive the user browser to navigate, snapshot, click, fill, and screenshot. | 0.1.0-rc.6 (2026-08-14) |
| dsh-wecom | [TtTRz/dsh-wecom](https://github.com/TtTRz/dsh-wecom) | - | dsh-wecom: a WeCom AI Bot channel for DeepSeek Harness — each chat runs a persistent, preset-backed agent over the official long connection. | 0.1.0-rc.6 (2026-08-14) |
| dsh-workflow | [icetomoyo/dsh_workflow](https://github.com/icetomoyo/dsh_workflow) | - | Workflow layer that upgrades one-shot multi-agent dispatch into savable, governable, observable, and resumable workflows | 0.1.0-rc.5 (2026-08-13) |
| dsh-zen | [zealot00/dsh-zen](https://github.com/zealot00/dsh-zen) | - | Zen mode: one-click immersive focus that hides sidebar and topbar, with Ctrl+Shift+Z and pet auto-hide linkage. | 0.1.0-rc.6 (2026-08-14) |
| ego-browser | [Fisfzy/ego-browser](https://github.com/Fisfzy/ego-browser) | - | ego-lite browser tools for dsh: structured ego actions plus a realtime watch panel with live SSE screencast. | 0.1.0-rc.6 (2026-08-14) |
| modlens | [liustack/modlens](https://github.com/liustack/modlens) | [`@liustack/modlens`](https://www.npmjs.com/package/@liustack/modlens) | Vision plugin for text-only models: image understanding bridged into the harness via a dsh.bundle patch layer, shipping a modlens skill alongside | 0.1.0-rc.5 (2026-08-13) |
| modsearch | [liustack/modsearch](https://github.com/liustack/modsearch) | [`@liustack/modsearch`](https://www.npmjs.com/package/@liustack/modsearch) | Web plugin for dsh that gives a text-only model the web: search, X, and any page as structured evidence. | 0.1.0-rc.6 (2026-08-14) |
| session-teleport | [omdsh-dev/session-teleport](https://github.com/omdsh-dev/session-teleport) | - | PostgreSQL-backed single-writer session handoff service for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
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

### Tools

Developer tooling around dsh.

| Name | Repo | npm | Description | Verified against |
|---|---|---|---|---|
| create-dsh-plugin | [whyihaveyou/dsh-suite](https://github.com/whyihaveyou/dsh-suite/tree/HEAD/packages/create-dsh-plugin) | [`create-dsh-plugin`](https://www.npmjs.com/package/create-dsh-plugin) | Scaffold a DeepSeek Harness plugin in seconds: tool, events, and webui templates with next-tag version pinning and a built-in --verify smoke test. | 0.1.0-rc.6 (2026-08-14) |

## Add your plugin

Open a PR against [`data/plugins.json`](data/plugins.json) only; the README is regenerated. See [CONTRIBUTING.md](CONTRIBUTING.md). The spam gate in short: a real install path (a `dsh.bundle` manifest, a published npm package, or a `SKILL.md` layout dsh discovers), not a renamed template fork, and it loads against the dsh version you claim.

A scheduled workflow also sweeps the `dsh-plugin` topic, npm, and GitHub code search; new finds queue in [`data/candidates.json`](data/candidates.json) on a single reused triage PR and never enter the registry without review. Rejected candidates are recorded with one-line reasons in [`data/rejected.json`](data/rejected.json) and are not re-queued.

## Field notes

Verified dsh traps, skill discovery rules, and hook-bridge limits live in [howto-dsh](https://github.com/dshworks/howto-dsh).

## License

MIT. Not affiliated with DeepSeek; the harness README calls itself "an idea, an official showcase, and a source of inspiration", and the ecosystem belongs to the community.
