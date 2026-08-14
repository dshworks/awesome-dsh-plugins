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

228 entries. Data updated 2026-08-14.

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
| better-deepseek-harness | [silencieuxzero/Better_Deepseek_Harkness](https://github.com/silencieuxzero/Better_Deepseek_Harkness) | - | Better DeepSeek Harness — install and manage skills and plugins from the Web UI settings page. | 0.1.0-rc.6 (2026-08-14) |
| better-model-provider | [sanshanya/better-model-provider](https://github.com/sanshanya/better-model-provider) | - | Per-model capability declaration for DeepSeek Harness: reasoning-effort levels (with wire spellings) and request modalities (text/image) for OpenAI-compatible providers — one settings section, no. | 0.1.0-rc.6 (2026-08-14) |
| deepseek-harness-acp | [openma-ai/deepseek-harness-acp](https://github.com/openma-ai/deepseek-harness-acp) | - | Agent Client Protocol (ACP) adapter for DeepSeek Harness — use DeepSeek Harness from ACP clients such as Zed. | 0.1.0-rc.6 (2026-08-14) |
| dizzy-dsh | [Acidmoon/DIzzy-DSH](https://github.com/Acidmoon/DIzzy-DSH) | - | Dizzy-DSH 插件合集仓库:git clone 后 dsh plugin add 即装,无需 npm 发布。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-2origin | [dongsheng123132/dsh-2origin](https://github.com/dongsheng123132/dsh-2origin) | - | Evidence-first 2Origin state projection, diff and immutable freeze for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-action-parity | [dongsheng123132/dsh-action-parity](https://github.com/dongsheng123132/dsh-action-parity) | - | Evidence that CLI, MCP and GUI bindings reach the same DeepSeek Harness action core | 0.1.0-rc.6 (2026-08-14) |
| dsh-ads | [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) | - | Satirical 2005-portal fake-ad plugin for the web UI (sidebar ads, in-conversation feed, corner popups); ad slots also surface real dsh-plugin topic repos | 0.1.0-rc.5 (2026-08-13) |
| dsh-advisor | [omdsh-dev/dsh-advisor](https://github.com/omdsh-dev/dsh-advisor) | - | Per-session reviewer model that watches the primary transcript and injects severity-ranked advice. | 0.1.0-rc.6 (2026-08-14) |
| dsh-agent-orchestration | [LeslieWylie/dsh-agent-orchestration](https://github.com/LeslieWylie/dsh-agent-orchestration) | - | Evidence-first multi-agent workflow planning, handoff validation, and Loop Guard skills for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-agent-teams | [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | - | AgentTeams plugin: coordinate teams of subagents from the web UI | 0.1.0-rc.5 (2026-08-13) |
| dsh-agentmemory | [elementor-i/dsh-agentmemory](https://github.com/elementor-i/dsh-agentmemory) | - | agentmemory for DeepSeek Harness (dsh): full memory_* tools, capture hooks, and context injection over the local REST server | 0.1.0-rc.6 (2026-08-14) |
| dsh-annotation | [omdsh-dev/dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) | - | DSH Web selection-annotation plugin: select assistant text, annotate (optional), and press Enter to send the annotation block with your message — the model replies to each annotation by number,. | 0.1.0-rc.6 (2026-08-14) |
| dsh-archived-sessions | [Zephyr-vibe/dsh-archived-sessions](https://github.com/Zephyr-vibe/dsh-archived-sessions) | - | DSH web plugin: an Archived Sessions manager in Settings — browse archived conversations, expand per-session details (disk usage, downloads, tool usage, lineage, cross-session recall),. | 0.1.0-rc.6 (2026-08-14) |
| dsh-article-publish | [yangyongzhen/dsh-article-publish](https://github.com/yangyongzhen/dsh-article-publish) | - | Publish articles from DeepSeek Harness to CSDN / Juejin / CNBlog via the mcp-server-article binary. | 0.1.0-rc.6 (2026-08-14) |
| dsh-at-file | [omdsh-dev/dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) | - | Codex-style @file mentions in the composer: search workspace files and attach their contents to prompts | 0.1.0-rc.5 (2026-08-13) |
| dsh-audit-bundle | [dongsheng123132/dsh-audit-bundle](https://github.com/dongsheng123132/dsh-audit-bundle) | - | Content-addressed audit indexes across independent DeepSeek Harness evidence producers | 0.1.0-rc.6 (2026-08-14) |
| dsh-auto-approval | [StyxNether/dsh-auto-approval](https://github.com/StyxNether/dsh-auto-approval) | - | A middle permission tier for DeepSeek Harness between workspace-write and danger-full-access: auto-approves harmless commands and operations targeting configured trusted areas, beyond the current. | 0.1.0-rc.6 (2026-08-14) |
| dsh-auto-approve | [Jiao-XXX/dsh-auto-approve](https://github.com/Jiao-XXX/dsh-auto-approve) | - | A conservative automatic approval preset for DeepSeek Harness sandbox escalations | 0.1.0-rc.6 (2026-08-14) |
| dsh-auto-chess | [omdsh-dev/dsh-auto-chess](https://github.com/omdsh-dev/dsh-auto-chess) | - | Minimal auto chess for the dsh web GUI: AI action routes, model catalog, and default prompt (node half) plus the conversation-view tab with the boards (browser half) | 0.1.0-rc.6 (2026-08-14) |
| dsh-auto-fold-turn | [ycp424c/dsh-auto-fold-turn](https://github.com/ycp424c/dsh-auto-fold-turn) | - | DSH Web client plugin: auto-folds completed-turn process nodes behind a summary row; expand state persists per session+turn | 0.1.0-rc.6 (2026-08-14) |
| dsh-auto-memory | [Aik358/dsh-auto-memory](https://github.com/Aik358/dsh-auto-memory) | - | DSH 自动记忆插件:三层记忆(用户级/项目笔记/每日日志)自动注入与检索、每日反思、可视化面板与设置页,支持继承其他 AI 工具的记忆。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-background-agents | [PerryLink/dsh-background-agents](https://github.com/PerryLink/dsh-background-agents) | - | Durable continuable child agents: watch progress in the Web UI sidebar, message anytime, and interrupt through the subagent seam. | 0.1.0-rc.6 (2026-08-14) |
| dsh-balance-tide | [huanyuLv/dsh-balance-tide](https://github.com/huanyuLv/dsh-balance-tide) | - | DeepSeek 余额 + 峰谷计价潮汐提示插件: 在 dsh Web UI 输入框下方显示账户余额、本会话估算消耗，并在余额前提示当前峰/谷价格档位、距下一次切换的倒计时与使用建议 | 0.1.0-rc.6 (2026-08-14) |
| dsh-bash-encoding | [omdsh-dev/dsh-bash-encoding](https://github.com/omdsh-dev/dsh-bash-encoding) | - | Replaces ctx.bash to collect raw bytes and auto-detect UTF-16LE/UTF-8/GBK, fixing Chinese mojibake on WSL/Windows. | 0.1.0-rc.6 (2026-08-14) |
| dsh-benchmark | [dongsheng123132/dsh-benchmark](https://github.com/dongsheng123132/dsh-benchmark) | - | Reproducible deterministic benchmark evidence for DSH tools and plugins | 0.1.0-rc.6 (2026-08-14) |
| dsh-benchmark-evidence | [LeslieWylie/dsh-benchmark-evidence](https://github.com/LeslieWylie/dsh-benchmark-evidence) | - | Benchmark manifests, fail-closed gates, artifact contracts, and result integrity skills for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-better-sidebar | [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | [`dsh-better-sidebar`](https://www.npmjs.com/package/dsh-better-sidebar) | Full sidebar workbench with file rendering/editing, terminal, Git, and subagents; third-party extensions can register new tabs | 0.1.0-rc.5 (2026-08-13) |
| dsh-blender | [CheshireJCat/blender](https://github.com/CheshireJCat/blender) | - | DeepSeek Harness Blender production, reconstruction, validation, and export plugin | 0.1.0-rc.6 (2026-08-14) |
| dsh-book2skill | [omdsh-dev/dsh-book2skill](https://github.com/omdsh-dev/dsh-book2skill) | - | DSH book-to-skill plugin: a 5-stage long task (fetch → parse → understand → generate → install) with 3 human gates, host tools for the agent and a browser timeline panel | 0.1.0-rc.6 (2026-08-14) |
| dsh-bottom-bar | [kc0ed/dsh-bottom-bar](https://github.com/kc0ed/dsh-bottom-bar) | - | 底栏统计设置（固化版）：可组装的输入框下方统计行 + 预估费用标注 + 设置页（底栏）。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-browser | [Lum1104/dsh-browser](https://github.com/Lum1104/dsh-browser) | - | Chrome sidebar plugin that lets dsh operate the browser directly, without vision. | 0.1.0-rc.6 (2026-08-14) |
| dsh-cad-review | [dongsheng123132/dsh-cad-review](https://github.com/dongsheng123132/dsh-cad-review) | - | Evidence-first ASCII DXF inspection and rule-backed CAD review for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-calendar | [STARDUSTLC666/dsh-calendar](https://github.com/STARDUSTLC666/dsh-calendar) | - | DSH 日历工具插件：通过 CalDAV 读写日历事件（Google / iCloud / Nextcloud / 自定义） | 0.1.0-rc.6 (2026-08-14) |
| dsh-capability-receipt | [dongsheng123132/dsh-capability-receipt](https://github.com/dongsheng123132/dsh-capability-receipt) | - | Content-addressed receipts for skills actually loaded by DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-cc-tui | [ccch1mneyyy/dsh-cc-tui](https://github.com/ccch1mneyyy/dsh-cc-tui) | [`dsh-cc-tui`](https://www.npmjs.com/package/dsh-cc-tui) | Claude Code-style fullscreen terminal UI: streaming thinking, double-Esc rewind, context progress bar, and TPS meter over the headless runner | 0.1.0-rc.5 (2026-08-13) |
| dsh-chat-import | [Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) | - | Import Claude Code / Codex / ChatGPT / Cursor / Gemini / Reasonix / Pi Coding Agent / opencode / ZCode / Grok Build / OpenClaw / Hermes conversation histories as resumable DeepSeek Harness sessions | 0.1.0-rc.6 (2026-08-14) |
| dsh-clawrouter | [BlockRunAI/dsh-clawrouter](https://github.com/BlockRunAI/dsh-clawrouter) | - | Strong-model review before risky tool calls, plus many models from one wallet. | 0.1.0-rc.6 (2026-08-14) |
| dsh-client-ui-monitor | [Auran-Lu/dsh-client-ui-monitor](https://github.com/Auran-Lu/dsh-client-ui-monitor) | - | Sidebar usage dashboard: session token usage, estimated cost in CNY/USD, and DeepSeek API balance. | 0.1.0-rc.6 (2026-08-14) |
| dsh-code-check | [a179-sanae/dsh-code-check](https://github.com/a179-sanae/dsh-code-check) | - | Auto type-check and lint diagnostics for DeepSeek Harness: after the model edits code, tsc runs in the background and a code_check tool reports what broke | 0.1.0-rc.6 (2026-08-14) |
| dsh-codex-agent-bridge | [je00/dsh-codex-agent-bridge](https://github.com/je00/dsh-codex-agent-bridge) | - | Connect DeepSeek Harness agents to authenticated Codex App Server sessions | 0.1.0-rc.6 (2026-08-14) |
| dsh-commandcode-provider | [Kristin130/dsh-commandcode-provider](https://github.com/Kristin130/dsh-commandcode-provider) | - | Command Code provider plugin for DeepSeek Harness (dsh) — works with every Command Code plan including the $1 Go plan; uses the Studio authentication API key over /alpha/generate, not the Provider API | 0.1.0-rc.6 (2026-08-14) |
| dsh-connector | [XJungit/omdp](https://github.com/XJungit/omdp) | - | Unified DeepSeek Harness connector: edit MCP servers (cordis.patch.yml) and user skills (~/.dsh/skills) from one Web UI settings page. Repository-root package: installs either via the bare git URL. | 0.1.0-rc.6 (2026-08-14) |
| dsh-context | [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) | [`dsh-context`](https://www.npmjs.com/package/dsh-context) | Context insight panel — a Context tab in the dsh web UI showing what the model's context window is made of and how it evolves. | 0.1.0-rc.6 (2026-08-14) |
| dsh-conv-export | [beijingwahw/dsh-conv-export](https://github.com/beijingwahw/dsh-conv-export) | - | dsh-conv-export（对话导出）— export the current DeepSeek Harness conversation as Markdown, PDF, or a long PNG image. | 0.1.0-rc.6 (2026-08-14) |
| dsh-conv-search | [beijingwahw/dsh-conv-search](https://github.com/beijingwahw/dsh-conv-search) | - | In-conversation text search for the dsh Web UI (Ctrl+F), match case, whole word, and streaming-aware hits. | 0.1.0-rc.6 (2026-08-14) |
| dsh-conversation-cost | [Ayaka157/dsh-conversation-cost](https://github.com/Ayaka157/dsh-conversation-cost) | - | 在 DSH 对话底部统计行实时显示 DeepSeek 用量费用（人民币/美元双币，含缓存命中与峰谷定价） | 0.1.0-rc.6 (2026-08-14) |
| dsh-conversation-rewind | [DTSFO/dsh-conversation-rewind](https://github.com/DTSFO/dsh-conversation-rewind) | - | Append-only conversation rewind and safe message editing for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-conversation-share | [omdsh-dev/dsh-conversation-share](https://github.com/omdsh-dev/dsh-conversation-share) | - | Select a conversation range and share it as a branded PNG long image, with draggable magnetically snapping markers. | 0.1.0-rc.6 (2026-08-14) |
| dsh-cost | [dongsheng123132/dsh-cost](https://github.com/dongsheng123132/dsh-cost) | - | Evidence-first token cost ledger and budget checks for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-cross-session | [Wha1eChai/dsh-cross-session](https://github.com/Wha1eChai/dsh-cross-session) | - | Same-runtime cross-Session discovery and communication for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-custom-tool | [omdsh-dev/dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool) | - | Create and manage sandboxed JavaScript tools with a Monaco editor and a model-driven tool lifecycle | 0.1.0-rc.5 (2026-08-13) |
| dsh-daily-fortune | [omdsh-dev/dsh-daily-fortune](https://github.com/omdsh-dev/dsh-daily-fortune) | - | DSH daily fortune plugin with Guan Yin lots, Tarot spreads, and daily quotes | 0.1.0-rc.6 (2026-08-14) |
| dsh-daily-progress | [omdsh-dev/dsh-daily-progress](https://github.com/omdsh-dev/dsh-daily-progress) | - | DSH daily progress achievement plugin: evening plans for tomorrow, a todo-style checklist today, and a thermometer completion-rate widget in the composer dock | 0.1.0-rc.6 (2026-08-14) |
| dsh-data-agent | [omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) | - | Session-scoped MySQL/PostgreSQL/SQLite connections, an sqlcmd tool, a data-agent preset, and a database tab. | 0.1.0-rc.6 (2026-08-14) |
| dsh-data-ledger | [Niuniu-Sir/dsh-data-ledger](https://github.com/Niuniu-Sir/dsh-data-ledger) | - | 数据台账 + AI 管家：统一本地数据看板（来源/位置/摘要、回收站删除），并给智能体装上看懂与清理数据的 ledger_* 工具 | 0.1.0-rc.6 (2026-08-14) |
| dsh-deep-research | [omdsh-dev/dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research) | - | Deep Research orchestrator extension for DeepSeek Harness: an adaptive cybernetics/information-theory deep_research tool on the official workflow engine, reusing built-in web_search/web_fetch. | 0.1.0-rc.6 (2026-08-14) |
| dsh-deep-sleep | [omdsh-dev/dsh-deep-sleep](https://github.com/omdsh-dev/dsh-deep-sleep) | - | DSH Web 的猫猫早睡提醒：每日墙钟触发、持续使用逐步撒娇、支持稍后提醒和今晚跳过。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-deepseek-protocol-doctor | [Whning0513/deepseek-protocol-doctor](https://github.com/Whning0513/deepseek-protocol-doctor) | - | Offline DeepSeek request, tool-loop, reasoning_content, and SSE diagnostics for DSH | 0.1.0-rc.6 (2026-08-14) |
| dsh-dingtalk | [sliverp/DeepSeek-harness-dingtalk](https://github.com/sliverp/DeepSeek-harness-dingtalk) | - | DingTalk Stream text, image, and file channel bridge for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-drag-and-drop | [omdsh-dev/dsh-drag-and-drop](https://github.com/omdsh-dev/dsh-drag-and-drop) | - | Drag local files into the DSH Web UI and insert their original filesystem paths without uploading or copying them. | 0.1.0-rc.6 (2026-08-14) |
| dsh-drop-to-path | [loudMore/dsh-drop-to-path](https://github.com/loudMore/dsh-drop-to-path) | - | Drop or paste images, PDFs, office docs, zips, videos and audio into the DSH composer as workspace file paths instead of model attachments — lets a text-only model agent read them via vision tools. | 0.1.0-rc.6 (2026-08-14) |
| dsh-easyssh | [chenw2759-wq/dsh-easyssh](https://github.com/chenw2759-wq/dsh-easyssh) | - | Remote SSH workspace plugin: local brain, remote hands, with a Web GUI frontend for the remote host. | 0.1.0-rc.6 (2026-08-14) |
| dsh-email | [STARDUSTLC666/dsh-email](https://github.com/STARDUSTLC666/dsh-email) | - | IMAP/SMTP email tools for DeepSeek Harness: list, read, search and send mail, with QQ/163/126/Sina/Aliyun/Gmail/Outlook/iCloud presets. | 0.1.0-rc.6 (2026-08-14) |
| dsh-emoji | [hellodigua/dsh-emoji](https://github.com/hellodigua/dsh-emoji) | - | Tiny semantic inline emoji for DSH Agent responses | 0.1.0-rc.6 (2026-08-14) |
| dsh-engram-relay | [yjh051108/dsh-engram-relay](https://github.com/yjh051108/dsh-engram-relay) | - | Cross-session layered memory relay with hash, semantic, and causal sparse recall via engram_* tools. | 0.1.0-rc.6 (2026-08-14) |
| dsh-ernie-image | [omdsh-dev/dsh-ernie-image](https://github.com/omdsh-dev/dsh-ernie-image) | - | DSH ERNIE-Image-Turbo text-to-image plugin: generate images via Baidu AI Studio, save them as durable session attachments, plus a settings card and a generation gallery panel | 0.1.0-rc.6 (2026-08-14) |
| dsh-essential | [omdsh-dev/dsh-essential](https://github.com/omdsh-dev/dsh-essential) | - | Recoverable conversation deletion for dsh: menu integration, instant hide, and restart-safe archive. | 0.1.0-rc.6 (2026-08-14) |
| dsh-ex-setting | [omdsh-dev/ex-setting](https://github.com/omdsh-dev/ex-setting) | - | Automatic Web settings and composition configuration bundle for dsh. | 0.1.0-rc.6 (2026-08-14) |
| dsh-explain | [yuezengwu/dsh-explain](https://github.com/yuezengwu/dsh-explain) | - | Local-first learning-mode plugin with a global learning thread, per-source explanations, and a diagnostics settings UI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-expression | [yyh-001/dsh-expression](https://github.com/yyh-001/dsh-expression) | - | Meme plugin: built-in gallery, bigram Dice semantic search, send_meme over Web/QQ, and a settings management panel. | 0.1.0-rc.6 (2026-08-14) |
| dsh-feishu | [xmanrui/dsh-feishu](https://github.com/xmanrui/dsh-feishu) | - | DeepSeek Harness plugin for multi-bot Feishu setup and streaming chat | 0.1.0-rc.6 (2026-08-14) |
| dsh-feishu-bot | [TingRuDeng/dsh-feishu-bot](https://github.com/TingRuDeng/dsh-feishu-bot) | - | Feishu (Lark) private-chat frontend for DeepSeek Harness: drive, monitor, and approve local agents from Feishu, sharing sessions with the Web GUI | 0.1.0-rc.6 (2026-08-14) |
| dsh-feishu-bridge | [itr-del/dsh-feishu](https://github.com/itr-del/dsh-feishu) | - | Feishu (Lark) IM bridge for DeepSeek Harness (dsh) | 0.1.0-rc.6 (2026-08-14) |
| dsh-file-claim | [Nwflower/dsh-file-claim](https://github.com/Nwflower/dsh-file-claim) | - | Write in parallel, never overwrite — file claim / protection for concurrent DeepSeek Harness (DSH) sessions working the same workspace: claim/release, heartbeat stale takeover, and an async. | 0.1.0-rc.6 (2026-08-14) |
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
| dsh-humanizer | [DEEP-IOS/dsh-humanizer](https://github.com/DEEP-IOS/dsh-humanizer) | - | 中文文本人味化 bundle 插件：强制深层改写工作流（十维叙事审计 + 功能路径 + 15 层分布）+ 内容忠实守卫。编辑辅助，非 AI 检测器。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-image-subagent | [yuqingsh/dsh-image-subagent](https://github.com/yuqingsh/dsh-image-subagent) | - | 让纯文本主模型（DeepSeek V4 等）也能接收图片附件：图片投影为显式占位文本，由主模型委托视觉子代理经 read_attachment/read_image 读取。零核心补丁，纯插件实现。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-imagecraft | [SPYQWER1/dsh-imagecraft](https://github.com/SPYQWER1/dsh-imagecraft) | - | image_gen and image_vision model tools for the DeepSeek Harness, powered by the ChatGPT subscription (no API key). | 0.1.0-rc.6 (2026-08-14) |
| dsh-input-history | [omdsh-dev/dsh-input-history](https://github.com/omdsh-dev/dsh-input-history) | - | Composer input history: Ctrl+Up / Ctrl+Down recalls and cycles already-sent messages like a terminal. | 0.1.0-rc.6 (2026-08-14) |
| dsh-inspect | [omdsh-dev/dsh-inspect](https://github.com/omdsh-dev/dsh-inspect) | - | 发现问题 → 修复交付 → 质量复查 的简单闭环插件：checkup（对抗式检查+红队验证）/ fix（根因→修复→验证）/ review（对抗式复查）三个工具，基于官方 workflow 引擎。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-kb-sieve | [omdsh-dev/dsh-kb-sieve](https://github.com/omdsh-dev/dsh-kb-sieve) | - | 知识库筛子：把文档（md/txt/docx/pdf）构建成可审计知识包（references + SQLite FTS5），提供确定性检索（kb_query）与原文精读（kb_read）工具，可生成零脚本的 DSH skill 并动态加载。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-lark | [omdsh-dev/dsh-lark](https://github.com/omdsh-dev/dsh-lark) | - | Lark/Feishu IM bot channel: chats drive agents, replies and approvals come back as messages and cards. | 0.1.0-rc.6 (2026-08-14) |
| dsh-lark-link | [amlyczz/dsh-lark-link](https://github.com/amlyczz/dsh-lark-link) | - | High-reliability Feishu/Lark bridge for DeepSeek Harness — QR one-click auth, multi-mode agents, card-based commands, zero-loss outbox, media in/out, session logs, reusable DSH Web GUI | 0.1.0-rc.6 (2026-08-14) |
| dsh-lazy-tools | [studyzy/dsh-lazy-tools](https://github.com/studyzy/dsh-lazy-tools) | - | CodeBuddy-style deferred tool loading for DeepSeek Harness: keep tool schemas out of the model context until the model loads them on demand via tool_search / defer_execute_tool. | 0.1.0-rc.6 (2026-08-14) |
| dsh-lineage | [dongsheng123132/dsh-lineage](https://github.com/dongsheng123132/dsh-lineage) | - | Content-addressed data and action lineage evidence for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-llm-codex-oauth | [Player-MINEPIG/dsh-llm-codex-oauth](https://github.com/Player-MINEPIG/dsh-llm-codex-oauth) | - | Use your ChatGPT/Codex subscription in dsh through the OpenAI Codex OAuth flow. | 0.1.0-rc.6 (2026-08-14) |
| dsh-llm-fallback | [Visol-456/dsh-llm-fallback](https://github.com/Visol-456/dsh-llm-fallback) | - | Provider fallback chain for the DeepSeek Harness LLM seam. | 0.1.0-rc.6 (2026-08-14) |
| dsh-llm-fallbacks | [omdsh-dev/dsh-llm-fallbacks](https://github.com/omdsh-dev/dsh-llm-fallbacks) | - | Automatic provider/model fallback chains when LLM requests keep failing after retries, auth, quota, or rate limits. | 0.1.0-rc.6 (2026-08-14) |
| dsh-logger-panel | [LingLambda/dsh-logger-panel](https://github.com/LingLambda/dsh-logger-panel) | - | Runtime log panel for DeepSeek Harness: live SSE log view in Settings plus bounded date/size rotating JSONL files. | 0.1.0-rc.6 (2026-08-14) |
| dsh-longbridge | [omdsh-dev/dsh-longbridge](https://github.com/omdsh-dev/dsh-longbridge) | - | Longbridge HK/US market plugin: quotes, account, positions and order tools plus a settings surface. | 0.1.0-rc.6 (2026-08-14) |
| dsh-mc-launcher | [hellosky983/dsh-mc-launcher](https://github.com/hellosky983/dsh-mc-launcher) | - | Minecraft Launcher built on DeepSeek Harness: full-screen launcher UI (root slot) with Microsoft device-code login, version download/install, and game launch from the DSH host process. | 0.1.0-rc.6 (2026-08-14) |
| dsh-mcp-panel | [PerryLink/dsh-mcp-panel](https://github.com/PerryLink/dsh-mcp-panel) | - | Read-only runtime management panel for the official DeepSeek Harness MCP client: /mcp command, a Settings page MCP tab with connection status, recent errors, reconnect counts and tool inventory. | 0.1.0-rc.6 (2026-08-14) |
| dsh-mcp-settings | [xluomo/dsh-mcp-settings](https://github.com/xluomo/dsh-mcp-settings) | - | DSH 设置页 [MCP]:可视化各配置来源的 MCP 服务器,支持新增(可写时直接落盘,否则复制 YAML + 打开配置文件)。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-memory-evidence | [LeslieWylie/dsh-memory-evidence](https://github.com/LeslieWylie/dsh-memory-evidence) | - | Git-first memory navigation and bounded evidence tools for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-message-navigator | [TableRogue/dsh-message-navigator](https://github.com/TableRogue/dsh-message-navigator) | - | 消息导航条 Message Navigator: DeepSeek Harness 网页聊天界面右侧的垂直消息索引(可安装的 dsh 组合包,Client-only 插件) | 0.1.0-rc.6 (2026-08-14) |
| dsh-minigames | [omdsh-dev/dsh-minigames](https://github.com/omdsh-dev/dsh-minigames) | - | Right-side offline minigames panel: dino, tetris, tanks, minesweeper, 2048, sudoku, pac-man, and more. | 0.1.0-rc.6 (2026-08-14) |
| dsh-mnemon | [omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) | - | Local-first three-tier memory for dsh: runtime memory, searchable documents, and supervised memory spaces. | 0.1.0-rc.6 (2026-08-14) |
| dsh-mobile | [lehhair/dsh-mobile](https://github.com/lehhair/dsh-mobile) | - | Narrow-screen pager: the stock three-column frame becomes a swipeable sidebar\|chat pager with safe-area insets. | 0.1.0-rc.6 (2026-08-14) |
| dsh-model-modes | [DTSFO/dsh-model-modes](https://github.com/DTSFO/dsh-model-modes) | - | Capability-aware reasoning controls and an honest Fast routing mode for the DeepSeek Harness web composer | 0.1.0-rc.6 (2026-08-14) |
| dsh-narrative-ledger | [dongsheng123132/dsh-narrative-ledger](https://github.com/dongsheng123132/dsh-narrative-ledger) | - | Content-addressed timeline, canon and character-knowledge evidence for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-nebula | [xiajingchun/dsh-nebulagraph-v5](https://github.com/xiajingchun/dsh-nebulagraph-v5) | - | DSH plugin: connect to a NebulaGraph 5.0 server and execute GQL queries, returning results as structured rows plus an ngql-style table render. Bundles the gql-query-generator skill. | 0.1.0-rc.6 (2026-08-14) |
| dsh-net-proxy | [mafeis/dsh-net-proxy](https://github.com/mafeis/dsh-net-proxy) | - | DeepSeek Harness network-proxy plugin: route the agent's own network requests (web_search / web_fetch / external APIs) through a configured HTTP/HTTPS-CONNECT/SOCKS5 proxy, persisted and. | 0.1.0-rc.6 (2026-08-14) |
| dsh-node-nav | [Seryta/dsh-node-nav](https://github.com/Seryta/dsh-node-nav) | - | Conversation node navigator: a right-side node string with hover preview, click-to-jump, and an active pill. | 0.1.0-rc.6 (2026-08-14) |
| dsh-notification | [omdsh-dev/dsh-notification](https://github.com/omdsh-dev/dsh-notification) | - | Desktop notifications for turn completions, with per-outcome controls and include/exclude keyword rules | 0.1.0-rc.5 (2026-08-13) |
| dsh-notification-center | [610la/dsh-notification-center](https://github.com/610la/dsh-notification-center) | - | 通知中心：对话/任务完成、报错、等待批准等事件触发浏览器通知 + 21 种匹配音效，每类事件独立配置（音效/文件/URL/音量/开关）。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-ocgo-usage | [v587d/dsh-opencode-go-usage](https://github.com/v587d/dsh-opencode-go-usage) | - | OpenCode Go subscription usage readout for the dsh web GUI: rolling (5h), weekly, and monthly usage windows with reset countdowns in the composer dock. | 0.1.0-rc.6 (2026-08-14) |
| dsh-open-in-vscode | [omdsh-dev/dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) | - | Open workspace directories in VS Code directly from the web GUI | 0.1.0-rc.5 (2026-08-13) |
| dsh-opencode-go-usage | [Xenia0922/dsh-opencode-go-usage](https://github.com/Xenia0922/dsh-opencode-go-usage) | - | OpenCode Go 用量与花费面板 — DeepSeek Harness 插件:可拖拽缩放的悬浮仪表盘,实时展示 OpenCode Go 配额、逐请求用量与花费 | 0.1.0-rc.6 (2026-08-14) |
| dsh-openpencil | [ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) | [`@zseven-w/dsh-openpencil`](https://www.npmjs.com/package/@zseven-w/dsh-openpencil) | OpenPencil design preview and editing inside the web UI | 0.1.0-rc.5 (2026-08-13) |
| dsh-ops-kit | [LeslieWylie/dsh-ops-kit](https://github.com/LeslieWylie/dsh-ops-kit) | - | A reusable DeepSeek Harness bundle for evidence-driven memory, orchestration, benchmark operations, repository audits, and plugin release workflows. | 0.1.0-rc.6 (2026-08-14) |
| dsh-outline | [urzeye/dsh-outline](https://github.com/urzeye/dsh-outline) | - | DSH web plugin: a realtime conversation outline panel (user questions + markdown headings) for the DeepSeek Harness Web GUI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-overleaf | [fly233338/dsh-overleaf](https://github.com/fly233338/dsh-overleaf) | - | DSH bundle that exposes multiple Overleaf projects through OverleafMCP | 0.1.0-rc.6 (2026-08-14) |
| dsh-paddle-ocr | [omdsh-dev/dsh-paddle-ocr](https://github.com/omdsh-dev/dsh-paddle-ocr) | - | DSH PaddleOCR (百度 PaddleOCR-VL 文档布局解析) plugin: OCR tools plus a settings card and task panel | 0.1.0-rc.6 (2026-08-14) |
| dsh-paste-input | [omdsh-dev/dsh-paste-input](https://github.com/omdsh-dev/dsh-paste-input) | - | WebUI file input: Ctrl+V paste with a first-run notice, drag-and-drop, and copy-into-session-workspace on send. | 0.1.0-rc.6 (2026-08-14) |
| dsh-personalize | [Zephyr-vibe/dsh-personalize](https://github.com/Zephyr-vibe/dsh-personalize) | - | DSH web plugin: per-host personalization — global custom instructions, local long-term memory (collect / retain / integrate / manage), and reply tone presets. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-audiolib | [yangyue1974/dsh-plugin-audiolib](https://github.com/yangyue1974/dsh-plugin-audiolib) | - | Ambient soundtrack for DeepSeek Harness, driven by agent state and powered by AudioLib.ai. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-check | [omdsh-dev/dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) | - | DSH plugin health checker: scan plugin repos for manifest protocol / patch format / build pitfalls / hub registration, zero-dependency read-only diagnostics | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-installer | [zhang66633/dsh-plugin-installer](https://github.com/zhang66633/dsh-plugin-installer) | - | DSH 插件商店 + 安装排障技能一体包：Web GUI「插件商店」页签浏览插件目录（名称/介绍/原链接），一键触发安装；内置 dsh-plugin-installer 技能作为安装后端引擎。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-release | [LeslieWylie/dsh-plugin-release](https://github.com/LeslieWylie/dsh-plugin-release) | - | Portable package contract, release checklist, and installation hygiene skills for DeepSeek Harness plugins. | 0.1.0-rc.6 (2026-08-14) |
| dsh-plugin-subscriptions | [V1ki/dsh-plugin-subscriptions](https://github.com/V1ki/dsh-plugin-subscriptions) | - | Use ChatGPT (Codex), Claude, and Grok (X Premium) subscriptions as DeepSeek Harness LLM providers, with OAuth login from the web Settings page | 0.1.0-rc.6 (2026-08-14) |
| dsh-policy-drift-proof | [dongsheng123132/dsh-policy-drift-proof](https://github.com/dongsheng123132/dsh-policy-drift-proof) | - | Content-addressed, value-redacted policy drift evidence for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-prime-agent | [yoke233/dsh-prime-agent](https://github.com/yoke233/dsh-prime-agent) | - | Prime Agent-inspired persistent RLM control plane for DeepSeek Harness Code Mode. | 0.1.0-rc.6 (2026-08-14) |
| dsh-profile-lock-proof | [dongsheng123132/dsh-profile-lock-proof](https://github.com/dongsheng123132/dsh-profile-lock-proof) | - | Content-addressed proof that a DeepSeek Harness profile declaration, pnpm lock and installed bundles agree | 0.1.0-rc.6 (2026-08-14) |
| dsh-provider-model-configurator | [LiangYin233/dsh-provider-model-configurator](https://github.com/LiangYin233/dsh-provider-model-configurator) | - | Provider Model Configurator for DeepSeek Harness: view, create, edit, copy and delete model entries (context window, max output, modalities, reasoning efforts) across your configured providers,. | 0.1.0-rc.6 (2026-08-14) |
| dsh-quote-annotate | [wangwei-wade/dsh-quote-annotate](https://github.com/wangwei-wade/dsh-quote-annotate) | - | 选区引用与锚点批注：在 DSH 会话中选中文字 → 批注 → 引用锚点 chip（点击跳回原文、悬停显示原文）→ 提交序列化为结构化引用块。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-qwen-mm | [omdsh-dev/Qwen-MM-Plugins](https://github.com/omdsh-dev/Qwen-MM-Plugins) | - | Qwen-MM capabilities as runtime-fetched Agent Skills and strict MCP tool servers | 0.1.0-rc.6 (2026-08-14) |
| dsh-recommend | [zp-home/dsh-recommend](https://github.com/zp-home/dsh-recommend) | - | DSH 插件透明排行与推荐：每日自动抓取 dsh-plugin 话题生态 + 公开评分模型 + rank/recommend/search 工具 + 设置页排行标签 | 0.1.0-rc.6 (2026-08-14) |
| dsh-recovery-proof | [dongsheng123132/dsh-recovery-proof](https://github.com/dongsheng123132/dsh-recovery-proof) | - | Read-only recovery drill evidence for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-release-proof | [dongsheng123132/dsh-release-proof](https://github.com/dongsheng123132/dsh-release-proof) | - | Reproducible multi-source release evidence for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-remote | [flymysql/dsh-remote](https://github.com/flymysql/dsh-remote) | - | Remote-work assistant for DeepSeek Harness: connect SSH (password or key), pick a remote workspace, operate on it with rw_pick_workspace / rw_list_dir / rw_read_file / rw_exec / rw_sync tools, and. | 0.1.0-rc.6 (2026-08-14) |
| dsh-revive | [omdsh-dev/dsh-revive](https://github.com/omdsh-dev/dsh-revive) | - | DSH 一键复活：重启后给所有被打断的会话自动发送「继续」指令（/revive 命令 + revive_sessions 工具 + 浏览器一键按钮） | 0.1.0-rc.6 (2026-08-14) |
| dsh-role-router | [SnowAmberX/dsh-role-router](https://github.com/SnowAmberX/dsh-role-router) | - | Route agent requests by role: planner model in plan mode, default otherwise, and a subagent model for subagents. | 0.1.0-rc.6 (2026-08-14) |
| dsh-scholar | [lzszq/dsh-scholar](https://github.com/lzszq/dsh-scholar) | - | DSH Research OS — a fully automated scientific research plugin for DSH (DeepSeek Harness): survey, idea, experiment contract, durable runner jobs, claim-evidence ledger, manuscript and release bundle. | 0.1.0-rc.6 (2026-08-14) |
| dsh-science | [biociao/dsh-science](https://github.com/biociao/dsh-science) | - | Claude Science-style research workbench for DeepSeek Harness: ReAct research-loop engine (research_* tools), versioned artifacts with provenance (artifact_* tools), and 10 science skills for. | 0.1.0-rc.6 (2026-08-14) |
| dsh-scout | [omdsh-dev/dsh-scout](https://github.com/omdsh-dev/dsh-scout) | - | Read-only environment probe tool: runtime, PATH commands, software versions, and host resources on demand. | 0.1.0-rc.6 (2026-08-14) |
| dsh-security-audit | [omdsh-dev/dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) | - | Read-only local security audit: config, credential metadata, plugin provenance, sessions, and network exposure. | 0.1.0-rc.6 (2026-08-14) |
| dsh-session-audit | [bwndlct/dsh-session-audit](https://github.com/bwndlct/dsh-session-audit) | - | Session execution analytics and audit reports for DeepSeek Harness. Understand how your agent actually worked: steps, tool calls, failures, repeated actions, token usage and verification signals. | 0.1.0-rc.6 (2026-08-14) |
| dsh-session-export | [bwndlct/dsh-session-export](https://github.com/bwndlct/dsh-session-export) | - | Export DeepSeek Harness sessions to portable, human-readable Markdown and JSON. | 0.1.0-rc.6 (2026-08-14) |
| dsh-session-health | [omdsh-dev/dsh-session-health](https://github.com/omdsh-dev/dsh-session-health) | - | Frame-level diagnostics over multi-frame zstd session logs: torn, corrupt, or empty session detection. | 0.1.0-rc.6 (2026-08-14) |
| dsh-session-hub | [Asaiuta/dsh-session-hub](https://github.com/Asaiuta/dsh-session-hub) | - | Aggregate and control sessions across multiple remote dsh web servers from one pane: registry, merged list, history. | 0.1.0-rc.6 (2026-08-14) |
| dsh-share | [hellodigua/dsh-share](https://github.com/hellodigua/dsh-share) | - | Share a DSH conversation turn as a PNG image. | 0.1.0-rc.6 (2026-08-14) |
| dsh-shuttle | [omdsh-dev/dsh-shuttle](https://github.com/omdsh-dev/dsh-shuttle) | - | Bidirectional conversation migration between dsh, Codex, Claude Code, Pi, Reasonix, and OpenCode. | 0.1.0-rc.6 (2026-08-14) |
| dsh-side-chat | [AHGGG/dsh-side-chat](https://github.com/AHGGG/dsh-side-chat) | - | Codex-style side conversations for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-sidechain | [omdsh-dev/dsh-sidechain](https://github.com/omdsh-dev/dsh-sidechain) | - | /side persistent side conversations and /btw one-shot side questions in an ephemeral fork that does not write main history. | 0.1.0-rc.6 (2026-08-14) |
| dsh-skill-panel | [hexbee/dsh-skill-panel](https://github.com/hexbee/dsh-skill-panel) | - | DSH settings panel for viewing and managing ~/.agents/skills and per-project .agents/skills skill directories | 0.1.0-rc.6 (2026-08-14) |
| dsh-skill-viewer | [Fishquito7/dsh-skill-viewer](https://github.com/Fishquito7/dsh-skill-viewer) | - | dsh skill viewer: manage skills from the DSH web UI settings panel (hot enable/disable, delete, add) plus a CLI. | 0.1.0-rc.6 (2026-08-14) |
| dsh-smarthome | [YLifeOnlyOnce/dsh-smarthome](https://github.com/YLifeOnlyOnce/dsh-smarthome) | - | Home Assistant control behind an approval gate: read entity states, query history, and call services. | 0.1.0-rc.6 (2026-08-14) |
| dsh-ssh | [UynajGI/dsh-ssh](https://github.com/UynajGI/dsh-ssh) | - | SSH remote-execution plugin: ProxyJump chain, SFTP filesystem, subprocess and PTY over ssh2. | 0.1.0-rc.6 (2026-08-14) |
| dsh-ssh-remote | [CrazyShout/dsh-ssh-remote](https://github.com/CrazyShout/dsh-ssh-remote) | - | SSH remote workspaces: browse, read/write, run commands and open terminals on remote hosts, with sidebar status dots. | 0.1.0-rc.6 (2026-08-14) |
| dsh-surface-contract-proof | [dongsheng123132/dsh-surface-contract-proof](https://github.com/dongsheng123132/dsh-surface-contract-proof) | - | Content-addressed conformance proof across recorded DSH ToolRuntime, MCP JSON-RPC and CLI JSON surfaces | 0.1.0-rc.6 (2026-08-14) |
| dsh-switch | [dongsheng123132/dsh-switch](https://github.com/dongsheng123132/dsh-switch) | - | Evidence-first model control plane for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| dsh-task-notify | [kaotusi/dsh-task-notify](https://github.com/kaotusi/dsh-task-notify) | - | System-level task notifications for DeepSeek Harness (DSH): approval requests, awaited replies, and finished background jobs / subagents / workflows — pushed to the OS notification center with. | 0.1.0-rc.6 (2026-08-14) |
| dsh-task-notify-linxin | [ltao0829/dsh-task-notify](https://github.com/ltao0829/dsh-task-notify) | - | Task-completion reminder for DeepSeek Harness: in-page toast, OS notification, and sound when an agent turn or background job finishes | 0.1.0-rc.6 (2026-08-14) |
| dsh-telegram-channel | [hi-wenw/dsh-telegram-channel](https://github.com/hi-wenw/dsh-telegram-channel) | - | DeepSeek Harness Telegram mobile remote: workspace→session picker (Web-aligned), /model switch, same trajectory — dsh-plugin | 0.1.0-rc.6 (2026-08-14) |
| dsh-terminal-panel | [wuwuzhige-sudo/dsh-terminal-panel](https://github.com/wuwuzhige-sudo/dsh-terminal-panel) | - | Manual Terminal tab in the web conversation view: host commands, persistent cwd, sudo prompt, and history. | 0.1.0-rc.6 (2026-08-14) |
| dsh-text-translation | [1738348785/dsh-plugin-text-translation](https://github.com/1738348785/dsh-plugin-text-translation) | - | Text & document localization plugin for DeepSeek Harness (DSH): lossless tag-protected extraction, batch slicing and assembly for translation workflows | 0.1.0-rc.6 (2026-08-14) |
| dsh-think-any-lang | [lco117/dsh-think-any-lang](https://github.com/lco117/dsh-think-any-lang) | - | DeepSeek Harness plugin: a General-settings selector that chooses which language the model reasons in, via a system-prompt section. | 0.1.0-rc.6 (2026-08-14) |
| dsh-tianshu-tui | [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | [`@huiliyi37/dsh-tianshu-tui`](https://www.npmjs.com/package/@huiliyi37/dsh-tianshu-tui) | Terminal UI for dsh shipped as an installable profile bundle | 0.1.0-rc.5 (2026-08-13) |
| dsh-token-monitor | [zhangzheng25/dsh-token-monitor](https://github.com/zhangzheng25/dsh-token-monitor) | - | DeepSeek Harness plugin: token usage dashboard (today / 7 / 30 days), GitHub-style 90-day contribution graph and per-workspace conversation stats, rendered as a settings page. Data from live. | 0.1.0-rc.6 (2026-08-14) |
| dsh-token-panel | [juhe291/dsh-token-panel](https://github.com/juhe291/dsh-token-panel) | - | Real-time token consumption HUD for DeepSeek Harness: a sleek tech-style panel showing live token usage, context pressure and cost estimates across sessions | 0.1.0-rc.6 (2026-08-14) |
| dsh-tokenledger | [zh667/TokenLedger](https://github.com/zh667/TokenLedger) | - | Token usage accounting for DeepSeek Harness, reconciled against New API and Sub2API relay-site billing | 0.1.0-rc.6 (2026-08-14) |
| dsh-toy | [c3ll256/dsh-toy](https://github.com/c3ll256/dsh-toy) | - | Connects toys/devices to DSH: asks brand/model then picks Intiface (Bluetooth, serial, USB; auto-starts Engine) or MonsterParty for known share-link models; unknown starts generic Bluetooth search. | 0.1.0-rc.6 (2026-08-14) |
| dsh-track | [fakechris/dsh-track](https://github.com/fakechris/dsh-track) | - | Embedded task-management engine: decision-point protocol, capture wall, and Linear-shaped issues over session events. | 0.1.0-rc.6 (2026-08-14) |
| dsh-turn-rewind | [Anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) | - | Rewind conversation and workspace state to a previous turn, backed by a persistent change ledger | 0.1.0-rc.5 (2026-08-13) |
| dsh-ui-progress | [omdsh-dev/dsh-ui-progress](https://github.com/omdsh-dev/dsh-ui-progress) | - | Composer-dock session progress bar: real todo progress, live token rate, interrupted orange state, and reminder. | 0.1.0-rc.6 (2026-08-14) |
| dsh-ui-quote-selection | [nekogpt/dsh-ui-quote-selection](https://github.com/nekogpt/dsh-ui-quote-selection) | - | Select chat text and quote it into the composer as an inline reference chip; full text materializes on submit. | 0.1.0-rc.6 (2026-08-14) |
| dsh-ui-status-label | [alingalingling/ui-status-label](https://github.com/alingalingling/ui-status-label) | - | Web UI plugin that makes the assistant's thinking status label ('deep diving') user-configurable through settings | 0.1.0-rc.5 (2026-08-13) |
| dsh-ui-topbar-compact | [maque2333/dsh-ui-topbar-compact](https://github.com/maque2333/dsh-ui-topbar-compact) | - | Compact dsh web top bar: single-line header, pill-style view switcher, and a subtler divider. | 0.1.0-rc.6 (2026-08-14) |
| dsh-usage-billing | [940842546/dsh-usage-billing](https://github.com/940842546/dsh-usage-billing) | - | DeepSeek Harness 用量与消费统计插件：按 2026-08-17 调价前后峰谷价格计费，含主界面汇总面板、会话级明细与图表 | 0.1.0-rc.6 (2026-08-14) |
| dsh-usage-stats | [lanlandeli/dsh-usage-stats](https://github.com/lanlandeli/dsh-usage-stats) | - | Beautiful token analytics for DeepSeek Harness — trends, activity heatmaps, model breakdowns, and data exports. | 0.1.0-rc.6 (2026-08-14) |
| dsh-user-experience | [DietCokewithSugar/dsh-user-experience](https://github.com/DietCokewithSugar/dsh-user-experience) | - | DeepSeek Harness UX walkthrough plugin: persona-driven source-code UX review for React (TypeScript/JavaScript) and Vue 3 projects, with change-triggered automatic walkthroughs | 0.1.0-rc.6 (2026-08-14) |
| dsh-vision | [237229953-create/dsh-vision](https://github.com/237229953-create/dsh-vision) | - | 给纯文本模型自动配眼:图片消息自动桥接为视觉模型描述(日志内表面替换,不改写人类转录),附带 see_image 追问工具 | 0.1.0-rc.6 (2026-08-14) |
| dsh-vision-proxy | [Flyvhidbwo/dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) | - | deepseek-vision provider route that transcribes attached images via an OpenAI-compatible VLM before DeepSeek answers. | 0.1.0-rc.6 (2026-08-14) |
| dsh-vision-router | [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) | - | Turn-level vision routing with provider fallbacks, a cached vision_describe tool, JSON output, and optional per-host proxy. | 0.1.0-rc.6 (2026-08-14) |
| dsh-vision-sidecar | [121103qwq/dsh-vision-sidecar](https://github.com/121103qwq/dsh-vision-sidecar) | - | Add no-key hosted or OpenAI-compatible vision to DeepSeek Harness while keeping the configured reasoning model | 0.1.0-rc.6 (2026-08-14) |
| dsh-vision-toolkit | [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | - | Harness-native integration of agent-vision-toolkit for text-only models: image Q&A with intent, long-screenshot OCR, UI restoration, grounding, and pixel diff | 0.1.0-rc.5 (2026-08-13) |
| dsh-visual-plugin | [jyh20030112/dsh-visual-plugin](https://github.com/jyh20030112/dsh-visual-plugin) | - | Vision bridge plugin for DeepSeek Harness: when the main model has no vision, forward user images to a configurable OpenAI-compatible vision model and show results in a Web UI right panel. Host. | 0.1.0-rc.6 (2026-08-14) |
| dsh-visualize | [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) | - | Generative UI in conversation: a visualize tool plus companion skill renders interactive HTML cards in sandboxed frames with streaming preview | 0.1.0-rc.5 (2026-08-13) |
| dsh-voice-funasr | [omdsh-dev/dsh-voice-funasr](https://github.com/omdsh-dev/dsh-voice-funasr) | - | DSH web plugin: local offline FunASR voice input (paraformer int8 onnx sidecar, Web Speech fallback, LLM polish). | 0.1.0-rc.6 (2026-08-14) |
| dsh-wallet | [feibi-mochi/deepseek-harness-wallet](https://github.com/feibi-mochi/deepseek-harness-wallet) | - | Balance monitoring, per-session spend tracking, token statistics, low-balance alerts, and an official recharge shortcut for DeepSeek Harness. | 0.1.0-rc.6 (2026-08-14) |
| dsh-web-search-exa | [TonyDua/dsh-web-search-exa](https://github.com/TonyDua/dsh-web-search-exa) | - | Zero-config Exa web search provider for DeepSeek Harness (dsh): keyless anonymous MCP fallback (mcp.exa.ai/mcp) plus keyed REST search — a drop-in WebSearchProvider for the ctx.web seam, no API. | 0.1.0-rc.6 (2026-08-14) |
| dsh-web-ui | [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) | - | Plugin and skin collection for the dsh Web UI: task board, git graph, right-side panel, remote mobile UI, live token stats, and a skin center that routes around the theme-persistence gap | 0.1.0-rc.5 (2026-08-13) |
| dsh-web-ui-notify | [bill9109/dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) | - | Desktop notifications for approvals, questions, and turn completion so you can leave the dsh tab. | 0.1.0-rc.6 (2026-08-14) |
| dsh-webbridge | [omdsh-dev/dsh-webbridge](https://github.com/omdsh-dev/dsh-webbridge) | - | Kimi WebBridge host plugin: model tools that drive the user browser to navigate, snapshot, click, fill, and screenshot. | 0.1.0-rc.6 (2026-08-14) |
| dsh-wecom | [TtTRz/dsh-wecom](https://github.com/TtTRz/dsh-wecom) | - | dsh-wecom: a WeCom AI Bot channel for DeepSeek Harness — each chat runs a persistent, preset-backed agent over the official long connection. | 0.1.0-rc.6 (2026-08-14) |
| dsh-whale-report | [SenmuuuuW/dsh-whale-report](https://github.com/SenmuuuuW/dsh-whale-report) | - | 鲸鱼记事本 — 你的 Agent 年度/月度/周度/日报：从会话事件日志生成数据新闻官式报告，任意区间、定时生成。 | 0.1.0-rc.6 (2026-08-14) |
| dsh-windows-readiness-proof | [dongsheng123132/dsh-windows-readiness-proof](https://github.com/dongsheng123132/dsh-windows-readiness-proof) | - | Content-addressed readiness proof for sanitized DeepSeek Harness observations on managed Windows hosts | 0.1.0-rc.6 (2026-08-14) |
| dsh-workflow | [icetomoyo/dsh_workflow](https://github.com/icetomoyo/dsh_workflow) | - | Workflow layer that upgrades one-shot multi-agent dispatch into savable, governable, observable, and resumable workflows | 0.1.0-rc.5 (2026-08-13) |
| dsh-workshop | [loguhan/dsh-workshop](https://github.com/loguhan/dsh-workshop) | - | Steam Workshop style plugin store for DSH Web UI: browse, search and one-click install community plugins with mirror acceleration | 0.1.0-rc.6 (2026-08-14) |
| dsh-workspace-env | [Momojie-S/dsh-workspace-env](https://github.com/Momojie-S/dsh-workspace-env) | - | DSH 插件: pwsh executor 增强，从 workspace .env 注入环境变量到子进程 | 0.1.0-rc.6 (2026-08-14) |
| dsh-workspace-mcp | [Momojie-S/dsh-workspace-mcp](https://github.com/Momojie-S/dsh-workspace-mcp) | - | DSH 插件: 按 workspace(session cwd) 自动加载/卸载 MCP server, 工具注册到 agent scope | 0.1.0-rc.6 (2026-08-14) |
| dsh-zen | [zealot00/dsh-zen](https://github.com/zealot00/dsh-zen) | - | Zen mode: one-click immersive focus that hides sidebar and topbar, with Ctrl+Shift+Z and pet auto-hide linkage. | 0.1.0-rc.6 (2026-08-14) |
| ego-browser | [Fisfzy/ego-browser](https://github.com/Fisfzy/ego-browser) | - | ego-lite browser tools for dsh: structured ego actions plus a realtime watch panel with live SSE screencast. | 0.1.0-rc.6 (2026-08-14) |
| gal-view | [Ayase34/gal-view](https://github.com/Ayase34/gal-view) | - | DSH Web GUI 会话页的 GAL 视窗：Galgame 风格对话视图 + 场景元素可视化编辑器 | 0.1.0-rc.6 (2026-08-14) |
| knowlp-rag | [wly8691-jpg/knowlp-rag](https://github.com/wly8691-jpg/knowlp-rag) | - | KnowLP-RAG: dual knowledge-graph retrieval for Markdown notes — DeepSeek Harness (dsh) bundle: MCP server + native Cordis plugin | 0.1.0-rc.6 (2026-08-14) |
| llm-adaptive | [dylan121322/llm-adaptive](https://github.com/dylan121322/llm-adaptive) | - | Adaptive model routing for DeepSeek Harness: per-request complexity classification with automatic provider routing. | 0.1.0-rc.6 (2026-08-14) |
| modlens | [liustack/modlens](https://github.com/liustack/modlens) | [`@liustack/modlens`](https://www.npmjs.com/package/@liustack/modlens) | Vision plugin for text-only models: image understanding bridged into the harness via a dsh.bundle patch layer, shipping a modlens skill alongside | 0.1.0-rc.5 (2026-08-13) |
| modsearch | [liustack/modsearch](https://github.com/liustack/modsearch) | [`@liustack/modsearch`](https://www.npmjs.com/package/@liustack/modsearch) | Web plugin for dsh that gives a text-only model the web: search, X, and any page as structured evidence. | 0.1.0-rc.6 (2026-08-14) |
| session-teleport | [omdsh-dev/session-teleport](https://github.com/omdsh-dev/session-teleport) | - | PostgreSQL-backed single-writer session handoff service for DeepSeek Harness | 0.1.0-rc.6 (2026-08-14) |
| task-passport | [dongsheng123132/task-passport](https://github.com/dongsheng123132/task-passport) | - | Open task handoff protocol and local store for durable state across AI harnesses. | 0.1.0-rc.6 (2026-08-14) |
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
