window.__PLUGINS__ = {
  "$schema": "./schema.json",
  "updated": "2026-08-14",
  "plugins": [
    {
      "name": "dsh-base",
      "repo": "deepseek-ai/deepseek-harness",
      "path": "packages/bundle/base",
      "npm": "@deepseek-ai/dsh-base",
      "description": "The shared dsh core as a profile bundle: every profile's first patch layer, inserting the base plugin rows over the empty profile root",
      "category": "bundle",
      "official": true,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 92808,
      "starsUpdated": "2026-08-14",
      "tags": [
        "devtools"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-web-app",
      "repo": "deepseek-ai/deepseek-harness",
      "path": "packages/bundle/web-app",
      "npm": "@deepseek-ai/dsh-web-app",
      "description": "The browser-surface bundle: the web patch layer over dsh-base plus the runtime glue plugin (frontend dist serving, web-surface prompt, URL line)",
      "category": "bundle",
      "official": true,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 92808,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-headless",
      "repo": "deepseek-ai/deepseek-harness",
      "path": "packages/bundle/headless",
      "npm": "@deepseek-ai/dsh-headless",
      "description": "The one-shot bundle: a direct core Agent/Session runner over dsh-base with no Host, HTTP, or browser layer",
      "category": "bundle",
      "official": true,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 92808,
      "starsUpdated": "2026-08-14",
      "tags": [
        "terminal"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-hooks-claude-code",
      "repo": "deepseek-ai/deepseek-harness",
      "path": "packages/hooks/hooks-claude-code",
      "npm": "@deepseek-ai/dsh-hooks-claude-code",
      "description": "Bridge plugin: runs an existing Claude Code hooks.json on the harness interception seams (command hooks only; http, mcp_tool, prompt, and agent hooks are skipped with a warning)",
      "category": "plugin",
      "official": true,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 92808,
      "starsUpdated": "2026-08-14",
      "tags": [
        "interop"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-hooks-codex",
      "repo": "deepseek-ai/deepseek-harness",
      "path": "packages/hooks/hooks-codex",
      "npm": "@deepseek-ai/dsh-hooks-codex",
      "description": "Bridge plugin: runs a Codex hooks.json on the harness interception seams (regex-only matchers, snake_case payloads, only blocking decisions honored)",
      "category": "plugin",
      "official": true,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 92808,
      "starsUpdated": "2026-08-14",
      "tags": [
        "interop"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "modlens",
      "repo": "liustack/modlens",
      "npm": "@liustack/modlens",
      "description": "Vision plugin for text-only models: image understanding bridged into the harness via a dsh.bundle patch layer, shipping a modlens skill alongside",
      "category": "plugin",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 1246,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "featured": true,
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-web-ui",
      "repo": "zhu1090093659/dsh-web-ui",
      "description": "Plugin and skin collection for the dsh Web UI: task board, git graph, right-side panel, remote mobile UI, live token stats, and a skin center that routes around the theme-persistence gap",
      "category": "plugin",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 1843,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "featured": true,
      "pushedAt": "2026-08-14"
    },
    {
      "name": "colleague-skill",
      "repo": "titanwings/colleague-skill",
      "description": "Digital-companion skill in the Anthropic SKILL.md format dsh reads; install by copying it into a dsh skill root such as .agents/skills",
      "category": "skill",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 21976,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-ui-status-label",
      "repo": "alingalingling/ui-status-label",
      "description": "Web UI plugin that makes the assistant's thinking status label ('deep diving') user-configurable through settings",
      "category": "plugin",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 29,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-turn-rewind",
      "repo": "Anionex/dsh-turn-rewind",
      "description": "Rewind conversation and workspace state to a previous turn, backed by a persistent change ledger",
      "category": "plugin",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 39,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "featured": true,
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-vision-toolkit",
      "repo": "Anionex/dsh-vision-toolkit",
      "description": "Harness-native integration of agent-vision-toolkit for text-only models: image Q&A with intent, long-screenshot OCR, UI restoration, grounding, and pixel diff",
      "category": "plugin",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 312,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-cc-tui",
      "repo": "ccch1mneyyy/dsh-cc-tui",
      "npm": "dsh-cc-tui",
      "description": "Claude Code-style fullscreen terminal UI: streaming thinking, double-Esc rewind, context progress bar, and TPS meter over the headless runner",
      "category": "plugin",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 859,
      "starsUpdated": "2026-08-14",
      "tags": [
        "terminal"
      ],
      "featured": true,
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-tianshu-tui",
      "repo": "huiliyi37/dsh-tianshu-tui",
      "npm": "@huiliyi37/dsh-tianshu-tui",
      "description": "Terminal UI for dsh shipped as an installable profile bundle",
      "category": "plugin",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 132,
      "starsUpdated": "2026-08-14",
      "tags": [
        "terminal"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "oh-dsh",
      "repo": "hust-open-atom-club/oh-dsh",
      "description": "Community distribution bundling TUI, desktop, and web UI surfaces with layered installation, pinned to an exact harness revision via dsh-source.json",
      "category": "bundle",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 164,
      "starsUpdated": "2026-08-14",
      "tags": [
        "terminal"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-workflow",
      "repo": "icetomoyo/dsh_workflow",
      "description": "Workflow layer that upgrades one-shot multi-agent dispatch into savable, governable, observable, and resumable workflows",
      "category": "plugin",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 54,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "featured": true,
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-ads",
      "repo": "Nagi-ovo/dsh-ads",
      "description": "Satirical 2005-portal fake-ad plugin for the web UI (sidebar ads, in-conversation feed, corner popups); ad slots also surface real dsh-plugin topic repos",
      "category": "plugin",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 328,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-visualize",
      "repo": "Nagi-ovo/dsh-visualize",
      "description": "Generative UI in conversation: a visualize tool plus companion skill renders interactive HTML cards in sandboxed frames with streaming preview",
      "category": "plugin",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 81,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-agent-teams",
      "repo": "NanmiCoder/dsh-agent-teams",
      "description": "AgentTeams plugin: coordinate teams of subagents from the web UI",
      "category": "plugin",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 240,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-at-file",
      "repo": "omdsh-dev/dsh-at-file",
      "description": "Codex-style @file mentions in the composer: search workspace files and attach their contents to prompts",
      "category": "plugin",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 125,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-better-sidebar",
      "repo": "omdsh-dev/DSH-better-sidebar",
      "npm": "dsh-better-sidebar",
      "description": "Full sidebar workbench with file rendering/editing, terminal, Git, and subagents; third-party extensions can register new tabs",
      "category": "plugin",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 726,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "featured": true,
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-custom-tool",
      "repo": "omdsh-dev/dsh-custom-tool",
      "description": "Create and manage sandboxed JavaScript tools with a Monaco editor and a model-driven tool lifecycle",
      "category": "plugin",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 22,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-notification",
      "repo": "omdsh-dev/dsh-notification",
      "description": "Desktop notifications for turn completions, with per-outcome controls and include/exclude keyword rules",
      "category": "plugin",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 38,
      "starsUpdated": "2026-08-14",
      "tags": [
        "notifications"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-open-in-vscode",
      "repo": "omdsh-dev/dsh-open-in-vscode",
      "description": "Open workspace directories in VS Code directly from the web GUI",
      "category": "plugin",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 39,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-openpencil",
      "repo": "ZSeven-W/dsh-openpencil",
      "npm": "@zseven-w/dsh-openpencil",
      "description": "OpenPencil design preview and editing inside the web UI",
      "category": "plugin",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 66,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "whale-girl",
      "repo": "vlln/whale-girl",
      "description": "Desktop-pet companion for the web GUI (QQ-pet style): draggable, feedable, levels up with session activity; migrated from the removed .dsh-plugin format to dsh.bundle",
      "category": "plugin",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 123,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "featured": true,
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-deep-whale",
      "repo": "Small-tailqwq/dsh-deep-whale",
      "path": "maid-atelier",
      "description": "Whale-girl skin series for the web UI; maid-atelier ships as a dsh.bundle package installed from a local clone (CC BY-NC-SA, non-commercial)",
      "category": "theme",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 559,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "find-plugins",
      "repo": "Nagi-ovo/dsh-find-plugins",
      "description": "Skill that discovers and installs dsh plugins from the GitHub dsh-plugin topic, verifying install method from repo manifests; copy skills/find-plugins into a skill root",
      "category": "skill",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 68,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "harmony-next",
      "repo": "linhay/harmony-next.skills",
      "description": "HarmonyOS NEXT development skill with offline ArkTS/ArkUI references and DevEco automation; copy harmony-next/ into a dsh skill root",
      "category": "skill",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 316,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-07-10"
    },
    {
      "name": "mstar-harness",
      "repo": "btspoony/mstar-harness",
      "description": "Morning Star skill-driven engineering workflow (roles, phase gates, plan conventions) shipped as twenty SKILL.md units; copy skills/* into a dsh skill root",
      "category": "skill",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 42,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "ex-skill",
      "repo": "titanwings/ex-skill",
      "description": "Builds a digital persona skill of your ex from WeChat chat logs (create-ex); SKILL.md documents dsh discovery paths alongside other hosts",
      "category": "skill",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 1057,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "argo",
      "repo": "taxueseek/argo",
      "description": "Agent-first multilingual search and evidence-verification skill routing 120+ engines with vertical sources and MCP entry points; SKILL.md at repo root",
      "category": "skill",
      "official": false,
      "added": "2026-08-13",
      "lastVerified": "2026-08-13",
      "verifiedAgainst": "0.1.0-rc.5",
      "status": "verified",
      "stars": 69,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-browser",
      "repo": "Lum1104/dsh-browser",
      "description": "Chrome sidebar plugin that lets dsh operate the browser directly, without vision.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 87,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "featured": true,
      "pushedAt": "2026-08-14"
    },
    {
      "name": "modsearch",
      "repo": "liustack/modsearch",
      "description": "Web plugin for dsh that gives a text-only model the web: search, X, and any page as structured evidence.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "@liustack/modsearch",
      "stars": 88,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-genui",
      "repo": "omdsh-dev/dsh-genui",
      "description": "Renders interactive UI components inline in assistant replies via the dsh-ui fence: layout, charts, plots, forms, quizzes, mermaid, 3D scenes, and an action event loop back to the model.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 73,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "create-dsh-plugin",
      "repo": "whyihaveyou/dsh-suite",
      "path": "packages/create-dsh-plugin",
      "description": "Scaffold a DeepSeek Harness plugin in seconds: tool, events, and webui templates with next-tag version pinning and a built-in --verify smoke test.",
      "category": "tool",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "create-dsh-plugin",
      "stars": 15,
      "starsUpdated": "2026-08-14",
      "tags": [
        "devtools"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-context",
      "repo": "bowenliang123/dsh-context",
      "npm": "dsh-context",
      "description": "Context insight panel — a Context tab in the dsh web UI showing what the model's context window is made of and how it evolves.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 26,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-toy",
      "repo": "c3ll256/dsh-toy",
      "description": "Connects toys/devices to DSH: asks brand/model then picks Intiface (Bluetooth, serial, USB; auto-starts Engine) or MonsterParty for known share-link models; unknown starts generic Bluetooth search.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 26,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-advisor",
      "repo": "omdsh-dev/dsh-advisor",
      "description": "Per-session reviewer model that watches the primary transcript and injects severity-ranked advice.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 6,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-background-agents",
      "repo": "PerryLink/dsh-background-agents",
      "description": "Durable continuable child agents: watch progress in the Web UI sidebar, message anytime, and interrupt through the subagent seam.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-bash-encoding",
      "repo": "omdsh-dev/dsh-bash-encoding",
      "description": "Replaces ctx.bash to collect raw bytes and auto-detect UTF-16LE/UTF-8/GBK, fixing Chinese mojibake on WSL/Windows.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-clawrouter",
      "repo": "BlockRunAI/dsh-clawrouter",
      "description": "Strong-model review before risky tool calls, plus many models from one wallet.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "safety"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-client-ui-monitor",
      "repo": "Auran-Lu/dsh-client-ui-monitor",
      "description": "Sidebar usage dashboard: session token usage, estimated cost in CNY/USD, and DeepSeek API balance.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-conv-search",
      "repo": "beijingwahw/dsh-conv-search",
      "description": "In-conversation text search for the dsh Web UI (Ctrl+F), match case, whole word, and streaming-aware hits.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-conversation-share",
      "repo": "omdsh-dev/dsh-conversation-share",
      "description": "Select a conversation range and share it as a branded PNG long image, with draggable magnetically snapping markers.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-data-agent",
      "repo": "omdsh-dev/dsh-data-agent",
      "description": "Session-scoped MySQL/PostgreSQL/SQLite connections, an sqlcmd tool, a data-agent preset, and a database tab.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 18,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-easyssh",
      "repo": "chenw2759-wq/dsh-easyssh",
      "description": "Remote SSH workspace plugin: local brain, remote hands, with a Web GUI frontend for the remote host.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-essential",
      "repo": "omdsh-dev/dsh-essential",
      "description": "Recoverable conversation deletion for dsh: menu integration, instant hide, and restart-safe archive.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-ex-setting",
      "repo": "omdsh-dev/ex-setting",
      "description": "Automatic Web settings and composition configuration bundle for dsh.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-explain",
      "repo": "yuezengwu/dsh-explain",
      "description": "Local-first learning-mode plugin with a global learning thread, per-source explanations, and a diagnostics settings UI.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 10,
      "starsUpdated": "2026-08-14",
      "tags": [
        "knowledge"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-expression",
      "repo": "yyh-001/dsh-expression",
      "description": "Meme plugin: built-in gallery, bigram Dice semantic search, send_meme over Web/QQ, and a settings management panel.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-fabric",
      "repo": "omdsh-dev/fabric",
      "description": "Fabric/Mixin extension workspace: an installable profile bundle carrier over the cordis-fabric package trio.",
      "category": "bundle",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 9,
      "starsUpdated": "2026-08-14",
      "tags": [
        "devtools"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-file-explorer",
      "repo": "joejojoking-cloud/dsh-file-explorer",
      "description": "Right-side resizable file tree with search, syntax-highlighted preview, in-panel editing, and one-click VS Code open.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 12,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-fusion",
      "repo": "omdsh-dev/dsh-fusion",
      "description": "Fuse two or more dsh conversations into one durable, continuable session with pruning, grouping, and sort.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-input-history",
      "repo": "omdsh-dev/dsh-input-history",
      "description": "Composer input history: Ctrl+Up / Ctrl+Down recalls and cycles already-sent messages like a terminal.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-lark",
      "repo": "omdsh-dev/dsh-lark",
      "description": "Lark/Feishu IM bot channel: chats drive agents, replies and approvals come back as messages and cards.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 14,
      "starsUpdated": "2026-08-14",
      "tags": [
        "channels"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-llm-fallback",
      "repo": "Visol-456/dsh-llm-fallback",
      "description": "Provider fallback chain for the DeepSeek Harness LLM seam.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-llm-fallbacks",
      "repo": "omdsh-dev/dsh-llm-fallbacks",
      "description": "Automatic provider/model fallback chains when LLM requests keep failing after retries, auth, quota, or rate limits.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-minigames",
      "repo": "omdsh-dev/dsh-minigames",
      "description": "Right-side offline minigames panel: dino, tetris, tanks, minesweeper, 2048, sudoku, pac-man, and more.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-mnemon",
      "repo": "omdsh-dev/dsh-mnemon",
      "description": "Local-first three-tier memory for dsh: runtime memory, searchable documents, and supervised memory spaces.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 14,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "featured": true,
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-node-nav",
      "repo": "Seryta/dsh-node-nav",
      "description": "Conversation node navigator: a right-side node string with hover preview, click-to-jump, and an active pill.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-paste-input",
      "repo": "omdsh-dev/dsh-paste-input",
      "description": "WebUI file input: Ctrl+V paste with a first-run notice, drag-and-drop, and copy-into-session-workspace on send.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-prime-agent",
      "repo": "yoke233/dsh-prime-agent",
      "description": "Prime Agent-inspired persistent RLM control plane for DeepSeek Harness Code Mode.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-role-router",
      "repo": "SnowAmberX/dsh-role-router",
      "description": "Route agent requests by role: planner model in plan mode, default otherwise, and a subagent model for subagents.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-scout",
      "repo": "omdsh-dev/dsh-scout",
      "description": "Read-only environment probe tool: runtime, PATH commands, software versions, and host resources on demand.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-security-audit",
      "repo": "omdsh-dev/dsh-security-audit",
      "description": "Read-only local security audit: config, credential metadata, plugin provenance, sessions, and network exposure.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 10,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-session-health",
      "repo": "omdsh-dev/dsh-session-health",
      "description": "Frame-level diagnostics over multi-frame zstd session logs: torn, corrupt, or empty session detection.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 9,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-session-hub",
      "repo": "Asaiuta/dsh-session-hub",
      "description": "Aggregate and control sessions across multiple remote dsh web servers from one pane: registry, merged list, history.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-shuttle",
      "repo": "omdsh-dev/dsh-shuttle",
      "description": "Bidirectional conversation migration between dsh, Codex, Claude Code, Pi, Reasonix, and OpenCode.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "interop"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-sidechain",
      "repo": "omdsh-dev/dsh-sidechain",
      "description": "/side persistent side conversations and /btw one-shot side questions in an ephemeral fork that does not write main history.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 5,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-smarthome",
      "repo": "YLifeOnlyOnce/dsh-smarthome",
      "description": "Home Assistant control behind an approval gate: read entity states, query history, and call services.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-ssh-remote",
      "repo": "CrazyShout/dsh-ssh-remote",
      "description": "SSH remote workspaces: browse, read/write, run commands and open terminals on remote hosts, with sidebar status dots.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-ssh",
      "repo": "UynajGI/dsh-ssh",
      "description": "SSH remote-execution plugin: ProxyJump chain, SFTP filesystem, subprocess and PTY over ssh2.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-terminal-panel",
      "repo": "wuwuzhige-sudo/dsh-terminal-panel",
      "description": "Manual Terminal tab in the web conversation view: host commands, persistent cwd, sudo prompt, and history.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-track",
      "repo": "fakechris/dsh-track",
      "description": "Embedded task-management engine: decision-point protocol, capture wall, and Linear-shaped issues over session events.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 5,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-ui-progress",
      "repo": "omdsh-dev/dsh-ui-progress",
      "description": "Composer-dock session progress bar: real todo progress, live token rate, interrupted orange state, and reminder.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-ui-quote-selection",
      "repo": "nekogpt/dsh-ui-quote-selection",
      "description": "Select chat text and quote it into the composer as an inline reference chip; full text materializes on submit.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-ui-topbar-compact",
      "repo": "maque2333/dsh-ui-topbar-compact",
      "description": "Compact dsh web top bar: single-line header, pill-style view switcher, and a subtler divider.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-vision-proxy",
      "repo": "Flyvhidbwo/dsh-vision-proxy",
      "description": "deepseek-vision provider route that transcribes attached images via an OpenAI-compatible VLM before DeepSeek answers.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 6,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-vision-router",
      "repo": "ysr666/dsh-vision-router",
      "description": "Turn-level vision routing with provider fallbacks, a cached vision_describe tool, JSON output, and optional per-host proxy.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 45,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-web-ui-notify",
      "repo": "bill9109/dsh-web-ui-notify",
      "description": "Desktop notifications for approvals, questions, and turn completion so you can leave the dsh tab.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 9,
      "starsUpdated": "2026-08-14",
      "tags": [
        "notifications"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-webbridge",
      "repo": "omdsh-dev/dsh-webbridge",
      "description": "Kimi WebBridge host plugin: model tools that drive the user browser to navigate, snapshot, click, fill, and screenshot.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "ego-browser",
      "repo": "Fisfzy/ego-browser",
      "description": "ego-lite browser tools for dsh: structured ego actions plus a realtime watch panel with live SSE screencast.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 13,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-auto-memory",
      "repo": "Aik358/dsh-auto-memory",
      "description": "DSH 自动记忆插件:三层记忆(用户级/项目笔记/每日日志)自动注入与检索、每日反思、可视化面板与设置页,支持继承其他 AI 工具的记忆。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-installer",
      "repo": "zhang66633/dsh-plugin-installer",
      "description": "DSH 插件商店 + 安装排障技能一体包：Web GUI「插件商店」页签浏览插件目录（名称/介绍/原链接），一键触发安装；内置 dsh-plugin-installer 技能作为安装后端引擎。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-imagecraft",
      "repo": "SPYQWER1/dsh-imagecraft",
      "description": "image_gen and image_vision model tools for the DeepSeek Harness, powered by the ChatGPT subscription (no API key).",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-bottom-bar",
      "repo": "kc0ed/dsh-bottom-bar",
      "description": "底栏统计设置（固化版）：可组装的输入框下方统计行 + 预估费用标注 + 设置页（底栏）。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-net-proxy",
      "repo": "mafeis/dsh-net-proxy",
      "description": "DeepSeek Harness network-proxy plugin: route the agent's own network requests (web_search / web_fetch / external APIs) through a configured HTTP/HTTPS-CONNECT/SOCKS5 proxy, persisted and.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dizzy-dsh",
      "repo": "Acidmoon/DIzzy-DSH",
      "description": "Dizzy-DSH 插件合集仓库:git clone 后 dsh plugin add 即装,无需 npm 发布。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-tokenledger",
      "repo": "zh667/TokenLedger",
      "description": "Token usage accounting for DeepSeek Harness, reconciled against New API and Sub2API relay-site billing",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-web-search-exa",
      "repo": "TonyDua/dsh-web-search-exa",
      "description": "Zero-config Exa web search provider for DeepSeek Harness (dsh): keyless anonymous MCP fallback (mcp.exa.ai/mcp) plus keyed REST search — a drop-in WebSearchProvider for the ctx.web seam, no API.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-image-subagent",
      "repo": "yuqingsh/dsh-image-subagent",
      "description": "让纯文本主模型（DeepSeek V4 等）也能接收图片附件：图片投影为显式占位文本，由主模型委托视觉子代理经 read_attachment/read_image 读取。零核心补丁，纯插件实现。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-governed-workflow",
      "repo": "zcx369658780/governed-workflow-for-dsh",
      "description": "Policy-enforced, evidence-first governed workflows for DeepSeek Harness agents — installable community plugin (governance core + authority provider)",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-mcp-panel",
      "repo": "PerryLink/dsh-mcp-panel",
      "description": "Read-only runtime management panel for the official DeepSeek Harness MCP client: /mcp command, a Settings page MCP tab with connection status, recent errors, reconnect counts and tool inventory.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-outline",
      "repo": "urzeye/dsh-outline",
      "description": "DSH web plugin: a realtime conversation outline panel (user questions + markdown headings) for the DeepSeek Harness Web GUI.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-github",
      "repo": "PerryLink/dsh-github",
      "description": "GitHub integration for DeepSeek Harness: create pull requests, review PRs with background jobs, and read issues — every write gated by human approval",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-auto-approval",
      "repo": "StyxNether/dsh-auto-approval",
      "description": "A middle permission tier for DeepSeek Harness between workspace-write and danger-full-access: auto-approves harmless commands and operations targeting configured trusted areas, beyond the current.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "safety"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-zen",
      "repo": "zealot00/dsh-zen",
      "description": "Zen mode: one-click immersive focus that hides sidebar and topbar, with Ctrl+Shift+Z and pet auto-hide linkage.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "deepseek-harness-acp",
      "repo": "openma-ai/deepseek-harness-acp",
      "description": "Agent Client Protocol (ACP) adapter for DeepSeek Harness — use DeepSeek Harness from ACP clients such as Zed.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 6,
      "starsUpdated": "2026-08-14",
      "tags": [
        "interop"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-usage-billing",
      "repo": "940842546/dsh-usage-billing",
      "description": "DeepSeek Harness 用量与消费统计插件：按 2026-08-17 调价前后峰谷价格计费，含主界面汇总面板、会话级明细与图表",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-provider-model-configurator",
      "repo": "LiangYin233/dsh-provider-model-configurator",
      "description": "Provider Model Configurator for DeepSeek Harness: view, create, edit, copy and delete model entries (context window, max output, modalities, reasoning efforts) across your configured providers,.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 10,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-agentmemory",
      "repo": "elementor-i/dsh-agentmemory",
      "description": "agentmemory for DeepSeek Harness (dsh): full memory_* tools, capture hooks, and context injection over the local REST server",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-gpu",
      "repo": "zytsyj/dsh-gpu",
      "description": "GPU-aware execution layer for DeepSeek Harness: gpu_status / gpu_exec / gpu_run_bg tools, per-step GPU context injection, automatic CUDA_VISIBLE_DEVICES card selection",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-mobile",
      "repo": "lehhair/dsh-mobile",
      "description": "Narrow-screen pager: the stock three-column frame becomes a swipeable sidebar|chat pager with safe-area insets.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 6,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-conversation-cost",
      "repo": "Ayaka157/dsh-conversation-cost",
      "description": "在 DSH 对话底部统计行实时显示 DeepSeek 用量费用（人民币/美元双币，含缓存命中与峰谷定价）",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-wecom",
      "repo": "TtTRz/dsh-wecom",
      "description": "dsh-wecom: a WeCom AI Bot channel for DeepSeek Harness — each chat runs a persistent, preset-backed agent over the official long connection.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "channels"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-auto-approve",
      "repo": "Jiao-XXX/dsh-auto-approve",
      "description": "A conservative automatic approval preset for DeepSeek Harness sandbox escalations",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "safety"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-engram-relay",
      "repo": "yjh051108/dsh-engram-relay",
      "description": "Cross-session layered memory relay with hash, semantic, and causal sparse recall via engram_* tools.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-skill-panel",
      "repo": "hexbee/dsh-skill-panel",
      "description": "DSH settings panel for viewing and managing ~/.agents/skills and per-project .agents/skills skill directories",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-notification-center",
      "repo": "610la/dsh-notification-center",
      "description": "通知中心：对话/任务完成、报错、等待批准等事件触发浏览器通知 + 21 种匹配音效，每类事件独立配置（音效/文件/URL/音量/开关）。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "notifications"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-text-translation",
      "repo": "1738348785/dsh-plugin-text-translation",
      "description": "Text & document localization plugin for DeepSeek Harness (DSH): lossless tag-protected extraction, batch slicing and assembly for translation workflows",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-archived-sessions",
      "repo": "Zephyr-vibe/dsh-archived-sessions",
      "description": "DSH web plugin: an Archived Sessions manager in Settings — browse archived conversations, expand per-session details (disk usage, downloads, tool usage, lineage, cross-session recall),.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-personalize",
      "repo": "Zephyr-vibe/dsh-personalize",
      "description": "DSH web plugin: per-host personalization — global custom instructions, local long-term memory (collect / retain / integrate / manage), and reply tone presets.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-scholar",
      "repo": "lzszq/dsh-scholar",
      "description": "DSH Research OS — a fully automated scientific research plugin for DSH (DeepSeek Harness): survey, idea, experiment contract, durable runner jobs, claim-evidence ledger, manuscript and release bundle.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 13,
      "starsUpdated": "2026-08-14",
      "tags": [
        "knowledge"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "anysearch-dsh",
      "repo": "anysearch-team/anysearch-dsh",
      "description": "AnySearch web search provider and advanced tools for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 18,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-annotation",
      "repo": "omdsh-dev/dsh-annotation",
      "description": "DSH Web selection-annotation plugin: select assistant text, annotate (optional), and press Enter to send the annotation block with your message — the model replies to each annotation by number,.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 39,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "7d7d",
      "repo": "omdsh-dev/7d7d",
      "description": "7d7d —— 7k7k 风格的 DSH 游戏门户：在 Web UI 内生成、同步并游玩 HTML5 与自托管 Ruffle Flash 小游戏。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "session-teleport",
      "repo": "omdsh-dev/session-teleport",
      "description": "PostgreSQL-backed single-writer session handoff service for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-check",
      "repo": "omdsh-dev/dsh-plugin-check",
      "description": "DSH plugin health checker: scan plugin repos for manifest protocol / patch format / build pitfalls / hub registration, zero-dependency read-only diagnostics",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 17,
      "starsUpdated": "2026-08-14",
      "tags": [
        "devtools"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-deep-research",
      "repo": "omdsh-dev/dsh-deep-research",
      "description": "Deep Research orchestrator extension for DeepSeek Harness: an adaptive cybernetics/information-theory deep_research tool on the official workflow engine, reusing built-in web_search/web_fetch.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 9,
      "starsUpdated": "2026-08-14",
      "tags": [
        "knowledge"
      ],
      "pushedAt": "2026-08-12"
    },
    {
      "name": "dsh-gomoku",
      "repo": "omdsh-dev/dsh-gomoku",
      "description": "Gomoku (five-in-a-row) for the dsh web GUI: AI move routes, model catalog, and default prompt (node half) plus the conversation-view tab with the board (browser half)",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 12,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-toolkit",
      "repo": "omdsh-dev/dsh-toolkit",
      "description": "Zero-dependency toolkit collection: time, encoding, json, calculator, csv, regex, markdown, diff, stat, and schema in one entry.",
      "category": "bundle",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 15,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-auto-chess",
      "repo": "omdsh-dev/dsh-auto-chess",
      "description": "Minimal auto chess for the dsh web GUI: AI action routes, model catalog, and default prompt (node half) plus the conversation-view tab with the boards (browser half)",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-qwen-mm",
      "repo": "omdsh-dev/Qwen-MM-Plugins",
      "description": "Qwen-MM capabilities as runtime-fetched Agent Skills and strict MCP tool servers",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-09"
    },
    {
      "name": "dsh-book2skill",
      "repo": "omdsh-dev/dsh-book2skill",
      "description": "DSH book-to-skill plugin: a 5-stage long task (fetch → parse → understand → generate → install) with 3 human gates, host tools for the agent and a browser timeline panel",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "knowledge"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-revive",
      "repo": "omdsh-dev/dsh-revive",
      "description": "DSH 一键复活：重启后给所有被打断的会话自动发送「继续」指令（/revive 命令 + revive_sessions 工具 + 浏览器一键按钮）",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-daily-progress",
      "repo": "omdsh-dev/dsh-daily-progress",
      "description": "DSH daily progress achievement plugin: evening plans for tomorrow, a todo-style checklist today, and a thermometer completion-rate widget in the composer dock",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-paddle-ocr",
      "repo": "omdsh-dev/dsh-paddle-ocr",
      "description": "DSH PaddleOCR (百度 PaddleOCR-VL 文档布局解析) plugin: OCR tools plus a settings card and task panel",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-ernie-image",
      "repo": "omdsh-dev/dsh-ernie-image",
      "description": "DSH ERNIE-Image-Turbo text-to-image plugin: generate images via Baidu AI Studio, save them as durable session attachments, plus a settings card and a generation gallery panel",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-voice-funasr",
      "repo": "omdsh-dev/dsh-voice-funasr",
      "description": "DSH web plugin: local offline FunASR voice input (paraformer int8 onnx sidecar, Web Speech fallback, LLM polish).",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-daily-fortune",
      "repo": "omdsh-dev/dsh-daily-fortune",
      "description": "DSH daily fortune plugin with Guan Yin lots, Tarot spreads, and daily quotes",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-fun-weather",
      "repo": "omdsh-dev/dsh-fun-weather",
      "description": "DSH weather tab and weather-following themes powered by Open-Meteo",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-fun-typewriter",
      "repo": "omdsh-dev/dsh-fun-typewriter",
      "description": "DSH Typewriter: WebAudio typing ambience with a plugin-owned settings API and zero audio assets",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-hub",
      "repo": "omdsh-dev/dsh-hub",
      "description": "OMDSH community extension hub built on official DeepSeek Harness contracts",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-deep-sleep",
      "repo": "omdsh-dev/dsh-deep-sleep",
      "description": "DSH Web 的猫猫早睡提醒：每日墙钟触发、持续使用逐步撒娇、支持稍后提醒和今晚跳过。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-inspect",
      "repo": "omdsh-dev/dsh-inspect",
      "description": "发现问题 → 修复交付 → 质量复查 的简单闭环插件：checkup（对抗式检查+红队验证）/ fix（根因→修复→验证）/ review（对抗式复查）三个工具，基于官方 workflow 引擎。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-12"
    },
    {
      "name": "dsh-kb-sieve",
      "repo": "omdsh-dev/dsh-kb-sieve",
      "description": "知识库筛子：把文档（md/txt/docx/pdf）构建成可审计知识包（references + SQLite FTS5），提供确定性检索（kb_query）与原文精读（kb_read）工具，可生成零脚本的 DSH skill 并动态加载。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "knowledge"
      ],
      "pushedAt": "2026-08-12"
    },
    {
      "name": "dsh-calendar",
      "repo": "STARDUSTLC666/dsh-calendar",
      "description": "DSH 日历工具插件：通过 CalDAV 读写日历事件（Google / iCloud / Nextcloud / 自定义）",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-email",
      "repo": "STARDUSTLC666/dsh-email",
      "description": "IMAP/SMTP email tools for DeepSeek Harness: list, read, search and send mail, with QQ/163/126/Sina/Aliyun/Gmail/Outlook/iCloud presets.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "channels"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "knowlp-rag",
      "repo": "wly8691-jpg/knowlp-rag",
      "description": "KnowLP-RAG: dual knowledge-graph retrieval for Markdown notes — DeepSeek Harness (dsh) bundle: MCP server + native Cordis plugin",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "knowledge"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-feishu-bot",
      "repo": "TingRuDeng/dsh-feishu-bot",
      "description": "Feishu (Lark) private-chat frontend for DeepSeek Harness: drive, monitor, and approve local agents from Feishu, sharing sessions with the Web GUI",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "channels"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-skill-viewer",
      "repo": "Fishquito7/dsh-skill-viewer",
      "description": "dsh skill viewer: manage skills from the DSH web UI settings panel (hot enable/disable, delete, add) plus a CLI.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 20,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-whale-report",
      "repo": "SenmuuuuW/dsh-whale-report",
      "description": "鲸鱼记事本 — 你的 Agent 年度/月度/周度/日报：从会话事件日志生成数据新闻官式报告，任意区间、定时生成。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 8,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-chat-import",
      "repo": "Nwflower/dsh-chat-import",
      "description": "Import Claude Code / Codex / ChatGPT / Cursor / Gemini / Reasonix / Pi Coding Agent / opencode / ZCode / Grok Build / OpenClaw / Hermes conversation histories as resumable DeepSeek Harness sessions",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 22,
      "starsUpdated": "2026-08-14",
      "tags": [
        "interop"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "gal-view",
      "repo": "Ayase34/gal-view",
      "description": "DSH Web GUI 会话页的 GAL 视窗：Galgame 风格对话视图 + 场景元素可视化编辑器",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 8,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-token-panel",
      "repo": "juhe291/dsh-token-panel",
      "description": "Real-time token consumption HUD for DeepSeek Harness: a sleek tech-style panel showing live token usage, context pressure and cost estimates across sessions",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-overleaf",
      "repo": "fly233338/dsh-overleaf",
      "description": "DSH bundle that exposes multiple Overleaf projects through OverleafMCP",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-connector",
      "repo": "XJungit/omdp",
      "description": "Unified DeepSeek Harness connector: edit MCP servers (cordis.patch.yml) and user skills (~/.dsh/skills) from one Web UI settings page. Repository-root package: installs either via the bare git URL.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-side-chat",
      "repo": "AHGGG/dsh-side-chat",
      "description": "Codex-style side conversations for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-llm-codex-oauth",
      "repo": "Player-MINEPIG/dsh-llm-codex-oauth",
      "description": "Use your ChatGPT/Codex subscription in dsh through the OpenAI Codex OAuth flow.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 5,
      "starsUpdated": "2026-08-14",
      "tags": [
        "interop"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-codex-agent-bridge",
      "repo": "je00/dsh-codex-agent-bridge",
      "description": "Connect DeepSeek Harness agents to authenticated Codex App Server sessions",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "interop"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-blender",
      "repo": "CheshireJCat/blender",
      "description": "DeepSeek Harness Blender production, reconstruction, validation, and export plugin",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-cross-session",
      "repo": "Wha1eChai/dsh-cross-session",
      "description": "Same-runtime cross-Session discovery and communication for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-ops-kit",
      "repo": "LeslieWylie/dsh-ops-kit",
      "description": "A reusable DeepSeek Harness bundle for evidence-driven memory, orchestration, benchmark operations, repository audits, and plugin release workflows.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-science",
      "repo": "biociao/dsh-science",
      "description": "Claude Science-style research workbench for DeepSeek Harness: ReAct research-loop engine (research_* tools), versioned artifacts with provenance (artifact_* tools), and 10 science skills for.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 9,
      "starsUpdated": "2026-08-14",
      "tags": [
        "knowledge"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-ocgo-usage",
      "repo": "v587d/dsh-opencode-go-usage",
      "description": "OpenCode Go subscription usage readout for the dsh web GUI: rolling (5h), weekly, and monthly usage windows with reset countdowns in the composer dock.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-file-claim",
      "repo": "Nwflower/dsh-file-claim",
      "description": "Write in parallel, never overwrite — file claim / protection for concurrent DeepSeek Harness (DSH) sessions working the same workspace: claim/release, heartbeat stale takeover, and an async.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "safety"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "better-deepseek-harness",
      "repo": "silencieuxzero/Better_Deepseek_Harkness",
      "description": "Better DeepSeek Harness — install and manage skills and plugins from the Web UI settings page.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-release",
      "repo": "LeslieWylie/dsh-plugin-release",
      "description": "Portable package contract, release checklist, and installation hygiene skills for DeepSeek Harness plugins.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "devtools"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-token-monitor",
      "repo": "zhangzheng25/dsh-token-monitor",
      "description": "DeepSeek Harness plugin: token usage dashboard (today / 7 / 30 days), GitHub-style 90-day contribution graph and per-workspace conversation stats, rendered as a settings page. Data from live.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-benchmark-evidence",
      "repo": "LeslieWylie/dsh-benchmark-evidence",
      "description": "Benchmark manifests, fail-closed gates, artifact contracts, and result integrity skills for DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-memory-evidence",
      "repo": "LeslieWylie/dsh-memory-evidence",
      "description": "Git-first memory navigation and bounded evidence tools for DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-agent-orchestration",
      "repo": "LeslieWylie/dsh-agent-orchestration",
      "description": "Evidence-first multi-agent workflow planning, handoff validation, and Loop Guard skills for DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-vision-sidecar",
      "repo": "121103qwq/dsh-vision-sidecar",
      "description": "Add no-key hosted or OpenAI-compatible vision to DeepSeek Harness while keeping the configured reasoning model",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-share",
      "repo": "hellodigua/dsh-share",
      "description": "Share a DSH conversation turn as a PNG image.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 16,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-lazy-tools",
      "repo": "studyzy/dsh-lazy-tools",
      "description": "CodeBuddy-style deferred tool loading for DeepSeek Harness: keep tool schemas out of the model context until the model loads them on demand via tool_search / defer_execute_tool.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-data-ledger",
      "repo": "Niuniu-Sir/dsh-data-ledger",
      "description": "数据台账 + AI 管家：统一本地数据看板（来源/位置/摘要、回收站删除），并给智能体装上看懂与清理数据的 ledger_* 工具",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-conversation-rewind",
      "repo": "DTSFO/dsh-conversation-rewind",
      "description": "Append-only conversation rewind and safe message editing for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-model-modes",
      "repo": "DTSFO/dsh-model-modes",
      "description": "Capability-aware reasoning controls and an honest Fast routing mode for the DeepSeek Harness web composer",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-opencode-go-usage",
      "repo": "Xenia0922/dsh-opencode-go-usage",
      "description": "OpenCode Go 用量与花费面板 — DeepSeek Harness 插件:可拖拽缩放的悬浮仪表盘,实时展示 OpenCode Go 配额、逐请求用量与花费",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-think-any-lang",
      "repo": "lco117/dsh-think-any-lang",
      "description": "DeepSeek Harness plugin: a General-settings selector that chooses which language the model reasons in, via a system-prompt section.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-workspace-mcp",
      "repo": "Momojie-S/dsh-workspace-mcp",
      "description": "DSH 插件: 按 workspace(session cwd) 自动加载/卸载 MCP server, 工具注册到 agent scope",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-workspace-env",
      "repo": "Momojie-S/dsh-workspace-env",
      "description": "DSH 插件: pwsh executor 增强，从 workspace .env 注入环境变量到子进程",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-humanizer",
      "repo": "DEEP-IOS/dsh-humanizer",
      "description": "中文文本人味化 bundle 插件：强制深层改写工作流（十维叙事审计 + 功能路径 + 15 层分布）+ 内容忠实守卫。编辑辅助，非 AI 检测器。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-user-experience",
      "repo": "DietCokewithSugar/dsh-user-experience",
      "description": "DeepSeek Harness UX walkthrough plugin: persona-driven source-code UX review for React (TypeScript/JavaScript) and Vue 3 projects, with change-triggered automatic walkthroughs",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 18,
      "starsUpdated": "2026-08-14",
      "tags": [
        "devtools"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-vision",
      "repo": "237229953-create/dsh-vision",
      "description": "给纯文本模型自动配眼:图片消息自动桥接为视觉模型描述(日志内表面替换,不改写人类转录),附带 see_image 追问工具",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "llm-adaptive",
      "repo": "dylan121322/llm-adaptive",
      "description": "Adaptive model routing for DeepSeek Harness: per-request complexity classification with automatic provider routing.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-session-audit",
      "repo": "bwndlct/dsh-session-audit",
      "description": "Session execution analytics and audit reports for DeepSeek Harness. Understand how your agent actually worked: steps, tool calls, failures, repeated actions, token usage and verification signals.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-feishu",
      "repo": "xmanrui/dsh-feishu",
      "description": "DeepSeek Harness plugin for multi-bot Feishu setup and streaming chat",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "channels"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-audiolib",
      "repo": "yangyue1974/dsh-plugin-audiolib",
      "description": "Ambient soundtrack for DeepSeek Harness, driven by agent state and powered by AudioLib.ai.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-balance-tide",
      "repo": "huanyuLv/dsh-balance-tide",
      "description": "DeepSeek 余额 + 峰谷计价潮汐提示插件: 在 dsh Web UI 输入框下方显示账户余额、本会话估算消耗，并在余额前提示当前峰/谷价格档位、距下一次切换的倒计时与使用建议",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-visual-plugin",
      "repo": "jyh20030112/dsh-visual-plugin",
      "description": "Vision bridge plugin for DeepSeek Harness: when the main model has no vision, forward user images to a configurable OpenAI-compatible vision model and show results in a Web UI right panel. Host.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-subscriptions",
      "repo": "V1ki/dsh-plugin-subscriptions",
      "description": "Use ChatGPT (Codex), Claude, and Grok (X Premium) subscriptions as DeepSeek Harness LLM providers, with OAuth login from the web Settings page",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "interop"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-mc-launcher",
      "repo": "hellosky983/dsh-mc-launcher",
      "description": "Minecraft Launcher built on DeepSeek Harness: full-screen launcher UI (root slot) with Microsoft device-code login, version download/install, and game launch from the DSH host process.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-session-export",
      "repo": "bwndlct/dsh-session-export",
      "description": "Export DeepSeek Harness sessions to portable, human-readable Markdown and JSON.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-telegram-channel",
      "repo": "hi-wenw/dsh-telegram-channel",
      "description": "DeepSeek Harness Telegram mobile remote: workspace→session picker (Web-aligned), /model switch, same trajectory — dsh-plugin",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "channels"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-feishu-bridge",
      "repo": "itr-del/dsh-feishu",
      "description": "Feishu (Lark) IM bridge for DeepSeek Harness (dsh)",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "channels"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-recommend",
      "repo": "zp-home/dsh-recommend",
      "description": "DSH 插件透明排行与推荐：每日自动抓取 dsh-plugin 话题生态 + 公开评分模型 + rank/recommend/search 工具 + 设置页排行标签",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 11,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-article-publish",
      "repo": "yangyongzhen/dsh-article-publish",
      "description": "Publish articles from DeepSeek Harness to CSDN / Juejin / CNBlog via the mcp-server-article binary.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "task-passport",
      "repo": "dongsheng123132/task-passport",
      "description": "Open task handoff protocol and local store for durable state across AI harnesses.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 5,
      "starsUpdated": "2026-08-14",
      "tags": [
        "interop"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-commandcode-provider",
      "repo": "Kristin130/dsh-commandcode-provider",
      "description": "Command Code provider plugin for DeepSeek Harness (dsh) — works with every Command Code plan including the $1 Go plan; uses the Studio authentication API key over /alpha/generate, not the Provider API",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-deepseek-protocol-doctor",
      "repo": "Whning0513/deepseek-protocol-doctor",
      "description": "Offline DeepSeek request, tool-loop, reasoning_content, and SSE diagnostics for DSH",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-code-check",
      "repo": "a179-sanae/dsh-code-check",
      "description": "Auto type-check and lint diagnostics for DeepSeek Harness: after the model edits code, tsc runs in the background and a code_check tool reports what broke",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "devtools"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-dingtalk",
      "repo": "sliverp/DeepSeek-harness-dingtalk",
      "description": "DingTalk Stream text, image, and file channel bridge for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "channels"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-lark-link",
      "repo": "amlyczz/dsh-lark-link",
      "description": "High-reliability Feishu/Lark bridge for DeepSeek Harness — QR one-click auth, multi-mode agents, card-based commands, zero-loss outbox, media in/out, session logs, reusable DSH Web GUI",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "channels"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-conv-export",
      "repo": "beijingwahw/dsh-conv-export",
      "description": "dsh-conv-export（对话导出）— export the current DeepSeek Harness conversation as Markdown, PDF, or a long PNG image.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-workshop",
      "repo": "loguhan/dsh-workshop",
      "description": "Steam Workshop style plugin store for DSH Web UI: browse, search and one-click install community plugins with mirror acceleration",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-message-navigator",
      "repo": "TableRogue/dsh-message-navigator",
      "description": "消息导航条 Message Navigator: DeepSeek Harness 网页聊天界面右侧的垂直消息索引(可安装的 dsh 组合包,Client-only 插件)",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-remote",
      "repo": "flymysql/dsh-remote",
      "description": "Remote-work assistant for DeepSeek Harness: connect SSH (password or key), pick a remote workspace, operate on it with rw_pick_workspace / rw_list_dir / rw_read_file / rw_exec / rw_sync tools, and.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 6,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-usage-stats",
      "repo": "lanlandeli/dsh-usage-stats",
      "description": "Beautiful token analytics for DeepSeek Harness — trends, activity heatmaps, model breakdowns, and data exports.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "featured": true,
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-task-notify",
      "repo": "kaotusi/dsh-task-notify",
      "description": "System-level task notifications for DeepSeek Harness (DSH): approval requests, awaited replies, and finished background jobs / subagents / workflows — pushed to the OS notification center with.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "notifications"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-task-notify-linxin",
      "repo": "ltao0829/dsh-task-notify",
      "description": "Task-completion reminder for DeepSeek Harness: in-page toast, OS notification, and sound when an agent turn or background job finishes",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "notifications"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-emoji",
      "repo": "hellodigua/dsh-emoji",
      "description": "Tiny semantic inline emoji for DSH Agent responses",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 11,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-nebula",
      "repo": "xiajingchun/dsh-nebulagraph-v5",
      "description": "DSH plugin: connect to a NebulaGraph 5.0 server and execute GQL queries, returning results as structured rows plus an ngql-style table render. Bundles the gql-query-generator skill.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-windows-readiness-proof",
      "repo": "dongsheng123132/dsh-windows-readiness-proof",
      "description": "Content-addressed readiness proof for sanitized DeepSeek Harness observations on managed Windows hosts",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-switch",
      "repo": "dongsheng123132/dsh-switch",
      "description": "Evidence-first model control plane for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-2origin",
      "repo": "dongsheng123132/dsh-2origin",
      "description": "Evidence-first 2Origin state projection, diff and immutable freeze for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-benchmark",
      "repo": "dongsheng123132/dsh-benchmark",
      "description": "Reproducible deterministic benchmark evidence for DSH tools and plugins",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-lineage",
      "repo": "dongsheng123132/dsh-lineage",
      "description": "Content-addressed data and action lineage evidence for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-cost",
      "repo": "dongsheng123132/dsh-cost",
      "description": "Evidence-first token cost ledger and budget checks for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-recovery-proof",
      "repo": "dongsheng123132/dsh-recovery-proof",
      "description": "Read-only recovery drill evidence for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-profile-lock-proof",
      "repo": "dongsheng123132/dsh-profile-lock-proof",
      "description": "Content-addressed proof that a DeepSeek Harness profile declaration, pnpm lock and installed bundles agree",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-release-proof",
      "repo": "dongsheng123132/dsh-release-proof",
      "description": "Reproducible multi-source release evidence for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-action-parity",
      "repo": "dongsheng123132/dsh-action-parity",
      "description": "Evidence that CLI, MCP and GUI bindings reach the same DeepSeek Harness action core",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-audit-bundle",
      "repo": "dongsheng123132/dsh-audit-bundle",
      "description": "Content-addressed audit indexes across independent DeepSeek Harness evidence producers",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-policy-drift-proof",
      "repo": "dongsheng123132/dsh-policy-drift-proof",
      "description": "Content-addressed, value-redacted policy drift evidence for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-cad-review",
      "repo": "dongsheng123132/dsh-cad-review",
      "description": "Evidence-first ASCII DXF inspection and rule-backed CAD review for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-surface-contract-proof",
      "repo": "dongsheng123132/dsh-surface-contract-proof",
      "description": "Content-addressed conformance proof across recorded DSH ToolRuntime, MCP JSON-RPC and CLI JSON surfaces",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-narrative-ledger",
      "repo": "dongsheng123132/dsh-narrative-ledger",
      "description": "Content-addressed timeline, canon and character-knowledge evidence for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-capability-receipt",
      "repo": "dongsheng123132/dsh-capability-receipt",
      "description": "Content-addressed receipts for skills actually loaded by DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "better-model-provider",
      "repo": "sanshanya/better-model-provider",
      "description": "Per-model capability declaration for DeepSeek Harness: reasoning-effort levels (with wire spellings) and request modalities (text/image) for OpenAI-compatible providers — one settings section, no.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-quote-annotate",
      "repo": "wangwei-wade/dsh-quote-annotate",
      "description": "选区引用与锚点批注：在 DSH 会话中选中文字 → 批注 → 引用锚点 chip（点击跳回原文、悬停显示原文）→ 提交序列化为结构化引用块。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-logger-panel",
      "repo": "LingLambda/dsh-logger-panel",
      "description": "Runtime log panel for DeepSeek Harness: live SSE log view in Settings plus bounded date/size rotating JSONL files.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-auto-fold-turn",
      "repo": "ycp424c/dsh-auto-fold-turn",
      "description": "DSH Web client plugin: auto-folds completed-turn process nodes behind a summary row; expand state persists per session+turn",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-mcp-settings",
      "repo": "xluomo/dsh-mcp-settings",
      "description": "DSH 设置页 [MCP]:可视化各配置来源的 MCP 服务器,支持新增(可写时直接落盘,否则复制 YAML + 打开配置文件)。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-drop-to-path",
      "repo": "loudMore/dsh-drop-to-path",
      "description": "Drop or paste images, PDFs, office docs, zips, videos and audio into the DSH composer as workspace file paths instead of model attachments — lets a text-only model agent read them via vision tools.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 6,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-wallet",
      "repo": "feibi-mochi/deepseek-harness-wallet",
      "description": "Balance monitoring, per-session spend tracking, token statistics, low-balance alerts, and an official recharge shortcut for DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-drag-and-drop",
      "repo": "omdsh-dev/dsh-drag-and-drop",
      "description": "Drag local files into the DSH Web UI and insert their original filesystem paths without uploading or copying them.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-longbridge",
      "repo": "omdsh-dev/dsh-longbridge",
      "description": "Longbridge HK/US market plugin: quotes, account, positions and order tools plus a settings surface.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-np-ppt",
      "repo": "z953218350/dsh-np-ppt",
      "description": "DSH 原生 PPT 演示文稿专家插件：内置 PPTD DSL 解析、55173 所见即所得可视化编辑器服务、Python-PPTX 高保真离线编译内核与一键导出 PPTX 功能。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "liltloom",
      "repo": "Adkid-Zephyr/Liltloom",
      "description": "Portable, user-owned writing-style memory for AI writing tools",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-report-html",
      "repo": "hccccc01333/dsh-report-html",
      "description": "Generate self-contained interactive HTML reports from Markdown, tables, and chart data",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-hub",
      "repo": "Noob-stupid/dsh-plugin-hub",
      "description": "插件控制台：一键启用/停用插件，浏览并安装 GitHub dsh-plugin 插件",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 5,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-token-usage",
      "repo": "LaoYueHanNi/dsh-token-usage",
      "description": "dsh local plugin: persist per-request model token usage (live hook + manual history sync command + web settings stats page)",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "agent-loop-workflow",
      "repo": "LeslieWylie/agent-loop-workflow",
      "description": "通用多 agent 协作工作流骨架：Loop Guard、handoff 格式、风险三档分流、交付顺序、review→收口协议",
      "category": "skill",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-task-relay",
      "repo": "LeslieWylie/dsh-task-relay",
      "description": "DSH 跨会话任务接力板：基于持久队列的跨会话/子agent 任务接力 + 交接摘要。Task Relay: cross-session task queue with handoff notes for agents and subagents.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "review-workflow",
      "repo": "LeslieWylie/review-workflow",
      "description": "通用多评委评审工作流：N 评委独立打分 + Chair 校准 + Critic 复核，带 6 步 6 checkpoint 流程控制",
      "category": "skill",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-fleet-audit",
      "repo": "LeslieWylie/dsh-fleet-audit",
      "description": "DSH agent-fleet hygiene audit: credential-file permissions, embedded credentials in git remotes (masked), provider token-prefix literals. Read-only, zero-dependency, deterministic.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-suggested-replies",
      "repo": "Anionex/dsh-suggested-replies",
      "description": "DSH Web plugin that proposes concise next user messages above the composer and inserts a selected reply into the draft without sending it.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-store",
      "repo": "w769721503/dsh-plugin-store",
      "description": "DeepSeek Harness 插件商店：在「设置 → 插件」里浏览、搜索、筛选并一键安装 dsh-plugin 生态插件。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-computer-use",
      "repo": "Anionex/dsh-computer-use",
      "description": "Accessibility-first macOS Computer Use capability for DeepSeek Harness with stale-observation protection, app leases, confirmations, screenshots, and Web diagnostics",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 18,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-pomodoro",
      "repo": "causebefore/dsh-pomodoro",
      "description": "DeepSeek Harness Web 番茄钟插件：可配置专注与休息时长，提供侧栏入口和可拖动浮动面板",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-session-delete",
      "repo": "lsz-asd/dsh-plugin-session-delete",
      "description": "Delete sessions of a DeepSeek Harness profile from the UI: header danger button + session-row menu item with a risk-consent dialog; host endpoint + tool delete the log, projection cache and.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-deeptutor",
      "repo": "TecFancy/dsh-deeptutor",
      "description": "DeepTutor bridge bundle for DeepSeek Harness: learning capabilities, knowledge bases, and note archiving (HTTP/WS first, CLI fallback; auto-adapts local/remote deployment).",
      "category": "bundle",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "knowledge"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-commandcode-provider-mars-sea",
      "repo": "Mars-Sea/dsh-commandcode-provider",
      "description": "DeepSeek Harness LLM provider plugin for Command Code, ported from pi-commandcode-provider (MIT). Registers the 'commandcode' provider route with a Models-page card and live model catalog.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-yet-another-subagent",
      "repo": "HuanLinOTO/dsh-plugin-yet-another-subagent",
      "description": "Configurable subagent profiles with web UI settings, real-time toolcall/token display, and click-to-navigate child sessions.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 5,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-mineru",
      "repo": "HuanLinOTO/dsh-plugin-mineru",
      "description": "DSH plugin exposing MinerU document parsing tools to the model, with a web UI settings page for the API base URL.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 10,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-md-preview",
      "repo": "LeslieWylie/dsh-md-preview",
      "description": "Render Markdown to standalone, self-contained HTML in the DeepSeek Harness — a model-facing md_html_render tool that works headless, plus a browse/preview/export drawer in the web GUI. One renderer.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-ya-workspace-sidebar",
      "repo": "HuanLinOTO/dsh-plugin-ya-workspace-sidebar",
      "description": "Two-level DSH workspace sidebar with global recent sessions and breadcrumb navigation.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 5,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-sleep",
      "repo": "HuanLinOTO/dsh-plugin-sleep",
      "description": "DSH plugin exposing a single `sleep` tool that lets the model pause for a configurable number of milliseconds, honoring cancellation.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-spur",
      "repo": "HuanLinOTO/dsh-plugin-spur",
      "description": "A braided whip (辫子) hanging in the chat-flow — grab the tip and swing to send \"go work!\" to the agent.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-interpreters",
      "repo": "HuanLinOTO/dsh-plugin-interpreters",
      "description": "Exposes run_python and run_node tools with configurable interpreter paths; settings card (via /interpreters/api HTTP route) lets users set the executable locations.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-better-sidebar-plugin-office",
      "repo": "HuanLinOTO/dsh-plugin-better-sidebar-plugin-office",
      "description": "DSH web plugin: Office file previewers (.docx/.xlsx/.pptx) for the better-sidebar editor. Registers the docx/xlsx/pptx file viewers through ctx.betterSidebar.registerFileViewer, keeping the heavy.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 7,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-anti-ads",
      "repo": "HuanLinOTO/dsh-plugin-anti-ads",
      "description": "DSH ad-suppression plugin: writes dsh-ads's own settings key to all-false, broadcasts its retire event, scrubs its portal from the DOM, and short-circuits its dynamic-tier fetch. Four layers, all.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-d399",
      "repo": "HuanLinOTO/dsh-plugin-d399",
      "description": "贪玩蓝鲸 — 模型生成时右下角弹出小游戏菜单（wordle / 消消乐，可拓展游戏注册表）",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 5,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-auto-blame",
      "repo": "HuanLinOTO/dsh-plugin-auto-blame",
      "description": "Auto-blame: when a turn closes, asks an LLM for three cynical follow-up prompts and shows them as click-to-send bubbles above the composer. Host-gated master toggle in the settings page.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-aigc-canvas",
      "repo": "HuanLinOTO/dsh-plugin-aigc-canvas",
      "description": "DSH plugin: an infinite free canvas for the better-sidebar plus provider-agnostic generation. Exposes aigc_get_provider_info / aigc_http_request (endpoint + apiKey auto-attached) /.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-github-panel",
      "repo": "PivotStackIntelligence/dsh-github",
      "description": "Source Control and GitHub panel for DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 16,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-browser",
      "repo": "CriscolTheCoder/dsh-plugin-browser",
      "description": "Plugin market entry point + installed-plugin dashboard for DSH — browse the awesome-dsh-plugin catalog with live installed/loaded state, one-click install/update/uninstall through dshmarket, plus a.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-dashboard",
      "repo": "Uddoo/dsh-dashboard",
      "description": "A Symphony-compatible multi-provider task orchestrator and dashboard for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-market-theyoungchen",
      "repo": "TheYoungChen/dsh-plugin-market",
      "description": "DeepSeek Harness plugin market: browse the dsh-plugin GitHub topic and install plugins from a panel above Settings.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-agy",
      "repo": "chaos-03x/dsh-agy",
      "description": "Google Antigravity (agy) OAuth auth + model access plugin for DeepSeek Harness: multi-account pool, 429 rotation, device fingerprinting, CLI and web login.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-market",
      "repo": "chnjames/dsh-plugin-market",
      "description": "DSH 插件市场 — 在 DSH Web UI 内发现并一键安装社区插件，配套公开目录站",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-store-yunhuantian",
      "repo": "yunhuantian/dsh-plugin-store",
      "description": "Plugin Store for DeepSeek Harness (DSH): a graphical app-store inside the Harness Web UI — browse, search, and one-click install GitHub dsh-plugins, with local ratings, dependency impact graphs.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-deepseek-billing",
      "repo": "golitter/dsh-deepseek-billing",
      "description": "DeepSeek account balance viewer for the DeepSeek Harness web settings page",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-evidence-memory",
      "repo": "LeslieWylie/dsh-evidence-memory",
      "description": "Git-backed project memory with line-addressable evidence, freshness tracking, and audit trail. Wraps a local rlvr-memory CLI (not yet published as a standalone package) into four DSH tools.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-im-hub",
      "repo": "ThreeBody6666/dsh-im-hub",
      "description": "A multi-platform IM gateway for DeepSeek Harness (dsh) — Feishu (Lark), WeCom (WeChat Work), and Telegram. Turn your dsh agent into a chat assistant reachable from the messaging apps you already use.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "channels"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-provider-billing",
      "repo": "ZeroingIn/dsh-provider-billing",
      "description": "DeepSeek Harness plugin: provider account balance inside each Models settings row, queried through a loopback-pinned RPC channel with the stored API key kept on the host",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-feishu-bridge-wz-heng",
      "repo": "wz-heng/dsh-feishu-bridge",
      "description": "DSH plugin shell for dsh-feishu-bridge: spawns and supervises the Feishu (Lark) channel bridge's Python process as a managed child of the DSH Host. The bridge itself is unchanged Python — this.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "channels"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-agent-message",
      "repo": "GengDaPeng/dsh-agent-message",
      "description": "跨会话 Agent 通信：让 DeepSeek Harness 里不同的 Agent 会话互相收发消息。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-layout-tools",
      "repo": "dHR-P/dsh-layout-tools",
      "description": "DSH Web 三栏工作台：对话流只保留 AI 输出（工具调用/思考移入右侧面板），左侧工作区文件树带 git 状态徽标。Three-column workbench for the DSH web GUI: clean conversation flow, workspace file tree with git badges, and a live tool-call/think panel.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-messager",
      "repo": "ly6170/dsh-messager",
      "description": "DeepSeek Harness 通知插件：会话交互/任务完成/出错时通过系统通知、浏览器通知、飞书机器人（webhook）推送提醒",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "notifications"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "deepjit",
      "repo": "fly3366/DeepJIT",
      "description": "DeepJIT: JIT-compile repeated agent workflows into skills and flow templates for deepseek-harness (dsh)",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "qiushi-dsh-evidence-audit",
      "repo": "030611/qiushi-dsh-evidence-audit",
      "description": "Observe-only hash-chained evidence receipts for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-verification-receipt",
      "repo": "030611/dsh-verification-receipt",
      "description": "Privacy-minimal heuristic per-turn execution summaries for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-telemetry-redactor",
      "repo": "030611/dsh-telemetry-redactor",
      "description": "Export-copy redaction for DeepSeek Harness session telemetry",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-session-search-pro",
      "repo": "LeslieWylie/dsh-session-search-pro",
      "description": "Indexed cross-session search for DeepSeek Harness — search, list, and read past and current DSH sessions through the built-in sessionQuery service. Zero runtime dependencies.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-hdc-bridge",
      "repo": "1na-ko/dsh-hdc-bridge",
      "description": "DSH-native HarmonyOS dev-assistant plugin: hdc device bridge with a live device panel, official-first versioned API docs (SDK .d.ts + offline bundled Tier-1 knowledge), and an optional DevEco CLI.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dshmath-manim",
      "repo": "phelpsyacht/dshmath-manim",
      "description": "DeepSeek Harness math animation plugin powered by Manim CE (zero-code skills for math/physics users)",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-dingtalk-stardustlc666",
      "repo": "STARDUSTLC666/dsh-dingtalk",
      "description": "钉钉群机器人单向通知工具（DeepSeek Harness 插件）：agent 推送 Markdown / 纯文本消息到钉钉群，支持加签安全模式。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "notifications"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-genshin-startup",
      "repo": "allen546/dsh-plugin-genshin-startup",
      "description": "DeepSeek Harness (dsh) plugin: Plays the Genshin Impact launch video centered with white fill in autofullscreen on startup before entering the Harness main page.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-youmind-plugin",
      "repo": "seamas0825-lab/dsh-youmind-plugin",
      "description": "YouMind OpenAPI tools and skill bundle for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "widget-dock",
      "repo": "MorGogh/widget-dock",
      "description": "DSH plugin: a draggable workbench of mini-cards (API balance, token usage, session stats, goal, cost estimate) beside the conversation",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-memory-gate",
      "repo": "GIT121995/dsh-memory-gate",
      "description": "Local long-term memory with CBDC authority gating for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-im-gateway",
      "repo": "jelech/dsh-im-gateway",
      "description": "An IM gateway for the DeepSeek Harness: bridge WeChat (iLink) and other messengers into harness agent sessions, with slash-command controls (/new, /sessions, /status, /model, ...).",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "channels"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-diff-viewer",
      "repo": "lehhair/dsh-diff-viewer",
      "description": "DSH diff-viewer plugin: PiUI-style visual diff surface (split/unified, change bars, line numbers, word-level marks, collapsed context, windowed rendering) replacing the stock DiffBlock for.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 7,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plan-first-dev",
      "repo": "asd176916847/dsh-plan-first-dev",
      "description": "开发前自动进入 plan mode：任务先出方案、用户批准后再动手（plan-first development workflow）",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-turn-navigator",
      "repo": "xiaoso456/dsh-turn-navigator",
      "description": "Turn navigator panel (current turn / total turns with up/down jump) for the DeepSeek Harness web GUI",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-acn",
      "repo": "acnlabs/dsh-plugin-acn",
      "description": "DeepSeek Harness plugin: join ACN so this agent can discover, message, and collaborate with other agents. Defaults to the China region.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-publisher",
      "repo": "akira399/dsh-plugin-publisher",
      "description": "DSH plugin development & GitHub publishing workflow plugin for DeepSeek Harness (DSH). Host: registers the `dsh-plugin-publishing` skill (enabled by default, opt-out), and bridges a GUI-entered.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "devtools"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-rss",
      "repo": "STARDUSTLC666/dsh-rss",
      "description": "DSH RSS 订阅工具插件：管理订阅源并抓取解析 RSS/Atom（rss_list / rss_add / rss_remove / rss_fetch / rss_check）",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-slack",
      "repo": "STARDUSTLC666/dsh-slack",
      "description": "DSH 社区插件：Slack 通知/桥接（v0.2 支持 Socket Mode 双向：收件箱 + 线程回复）",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "channels"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "deepseek-plugin-store",
      "repo": "Ericwong5021/deepseek-plugin-store",
      "description": "DeepSeek 插件商店开源数据源 · Open source data source for the DeepSeek Plugin Store",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 12,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-balance-plugin",
      "repo": "stevenx65/dsh-balance-plugin",
      "description": "DeepSeek API balance and token usage monitor for the dsh web sidebar",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-zh-output",
      "repo": "YKennen/dsh-zh-output",
      "description": "DeepSeek Harness 中文输出插件：提供强制「中文思考与输出」的中文预设（标准 / PTC / 极简 / 创造四种模式的中文版）。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-101",
      "repo": "bill9109/dsh-101",
      "description": "A document-first reader profile bundle for DeepSeek Harness: curated, ordered, searchable, translatable reading of DSH's own documentation over dsh-base + dsh-web-app.",
      "category": "bundle",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "knowledge"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-dynamic-island",
      "repo": "YLifeOnlyOnce/dsh-dynamic-island",
      "description": "Liquid Glass Dynamic Island for the DeepSeek Harness Web GUI — a dual-face shell.overlay client plugin (design prototype + plugin in one repo)",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-session-deeplink",
      "repo": "R3alloc/dsh-session-deeplink",
      "description": "DSH web client plugin: open a session directly from the URL (?session=<id>).",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 5,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "deepseek-tui",
      "repo": "Hilbert-beinghappy/deepseek-tui",
      "description": "A pluggable DeepSeek-colored terminal surface for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "terminal"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-llm-wechat",
      "repo": "sulfide2085/dsh-llm-wechat",
      "description": "DeepSeek-compatible adapter for the WeChat (chatapi.weixin.qq.com) gateway, with think-tag translation for the DeepSeek Harness LLM seam",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "channels"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-todo-freshness-guard",
      "repo": "lamost423/dsh-todo-freshness-guard",
      "description": "Remind and block stale tool work until todo_write is reconciled in DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "safety"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-client-ui-mobile-adapt",
      "repo": "Hotsteel2901/dsh-client-ui-mobile-adapt",
      "description": "Mobile adaptation for the DeepSeek Harness Web GUI: single-column layout, sidebar drawer, compact header/composer, fullscreen settings, trajectory floating details, stats pill panel",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-desktop-plugin",
      "repo": "Muelsysel/DeepSeek-Harness-Desktop",
      "description": "DeepSeek Harness desktop plugin: a click-to-launch, Codex-like native window over the dsh web UI. Everything is a plugin — this one is the window.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "terminal"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-xiapan-media",
      "repo": "dongsheng123132/dsh-xiapan-media",
      "description": "DeepSeek Harness native vision, gpt-image-2 image generation, and Seedance video generation via Xiapan Cloud.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-devecocli",
      "repo": "frankq007/dsh-plugin-devecocli",
      "description": "HarmonyOS development for DeepSeek Harness: device/emulator management, UI automation, build & deploy, logs, lint and docs via the devecocli CLI",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "devtools"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-vqa-agent",
      "repo": "jypjypjypjyp/dsh-vqa-agent",
      "description": "vqa_ask 双模型视觉问答插件:主模型调用 vqa_ask 向视觉模型提问(图片字节真实送达),UI 实时展示\"主模型提问 → 视觉模型回答\"的 QA 过程,并在主设置提供多模态视觉模型选择页。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-window-stats",
      "repo": "wellorbetter/dsh-plugin-window-stats",
      "description": "DSH web plugin: a cross-session Window Stats view tab showing conversation progress and token usage for all sessions.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-hotplug-engine",
      "repo": "AnothetLoice/dsh-hotplug-engine",
      "description": "DSH hot-plug execution engine: a reliable install/enable/disable/rollback/audit service for plugin marketplaces, agents, and host plugins (execution layer, not a marketplace).",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-llm-codebuddy",
      "repo": "shatyuka/dsh-llm-codebuddy",
      "description": "Tencent CodeBuddy plugin for DeepSeek Harness (dsh).",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-quota-meter",
      "repo": "huolianJiao/dsh-quota-meter",
      "description": "DSH web plugin: show the DeepSeek API key's remaining balance, estimate usable tokens per model (peak/off-peak pricing + measured cache-hit ratio), and chart the real cost of every turn.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-marketplace",
      "repo": "ouyangyipeng/dsh-marketplace",
      "description": "A safe, live plugin marketplace for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-terminal",
      "repo": "dongsheng123132/dsh-terminal",
      "description": "Persistent interactive terminal mode for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-cache-stabilizer",
      "repo": "dongsheng123132/dsh-cache-stabilizer",
      "description": "Cache-prefix stabilization and evidence-based cache metrics for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-market",
      "repo": "dsh-market/dsh-market",
      "description": "Visual plugin market inside DeepSeek Harness — browse, search, and one-click install community plugins. · DSH 可视化插件市场：逛一逛，点一下，装好。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 32,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-web-plugin-manager",
      "repo": "LX2000WASD/dsh-web-plugin-manager",
      "description": "Manage DeepSeek Harness (DSH) plugins from the Web UI: list, enable/disable, install/remove, environments, and a GitHub-awesome-driven marketplace.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 15,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-lark-channel",
      "repo": "sliverp/DeepSeek-harness-lark",
      "description": "Feishu and Lark text, image, and file channel bridge for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "channels"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-foxy-jumpscare",
      "repo": "01Virex/dsh-foxy-jumpscare",
      "description": "Every second there is a 1-in-1000 chance that Foxy (Withered Foxy) from Five Nights at Freddy's 2 jumpscares you in the DeepSeek Harness web UI: a full-screen scare plus the iconic scream.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-wanghong-handwritten-ppt",
      "repo": "tjxj/dsh-wanghong-handwritten-ppt",
      "description": "Wang Hong-inspired Notability academic handwritten PPT skill for DeepSeek Harness",
      "category": "skill",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-spotlight",
      "repo": "0xsline/dsh-spotlight",
      "description": "Keyboard-first command palette for DeepSeek Harness Web",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 5,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-git-bash",
      "repo": "inmny/dsh-git-bash",
      "description": "Use Git for Windows Bash as the default DSH shell with restricted-mode support",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-skill-loader",
      "repo": "kezboardpj/dsh-skill-loader",
      "description": "Per-conversation skill catalog picker for DeepSeek Harness (dsh): choose which skills are loaded (载入技能清单) into each conversation on the new-conversation page; unselected skills are unavailable in.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-mindmap",
      "repo": "chenw2759-wq/dsh-mindmap",
      "description": "思维导图模式（dsh-mindmap）：把课件（PPT/PDF/Word）与电子书按「组胚思维导图」范例整理成打印级 HTML 复习思维导图——A3 横向、每主干知识点一页、大括号式横向布局、宋体大字不溢出、右侧留白笔记区、封面总览 + 交互式测试题。附带 mindmap-builder skill 与 mm_generate 工具。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "knowledge"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-development",
      "repo": "w2112515/dsh-plugin-development",
      "description": "Portable Agent Skill for developing and auditing DeepSeek Harness plugins, with an optional DSH bundle adapter.",
      "category": "skill",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 6,
      "starsUpdated": "2026-08-14",
      "tags": [
        "devtools"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-claude-migrate",
      "repo": "kirkchinese/Claudecode--DSH",
      "description": "Migrate Claude Code user data — conversations, skills, plugins, memory and instructions — into DeepSeek Harness (DSH): resumable native sessions, workspace grouping, agent presets, context archive",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "interop"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-adb",
      "repo": "SamXiaBing/dsh-adb",
      "description": "ADB device & bench operations for DeepSeek Harness: device discovery, structured logcat, apk install, file pull/push, performance snapshots",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugins-market",
      "repo": "Luaphes/dsh-plugins-market",
      "description": "DeepSeek Harness 插件创意市场：嗅探官方 dsh-plugin topic，噪音过滤、信任徽章、排序搜索与一键安装面板",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-funpack",
      "repo": "lvyuchuiyi/dsh-funpack",
      "description": "夸夸、运势、战报、番茄钟、摸鱼、沉浸氛围、桌宠语音、Live2D、Boss 隐身与代码花园一体化的 DeepSeek Harness 插件",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-healthcheck",
      "repo": "chenw2759-wq/dsh-plugin-healthcheck",
      "description": "DSH 插件健康检查：设置面板内的「插件检测」向导 — L0 静态检查（files 白名单/依赖声明/高危副本/依赖可解析/Windows 命令/lockfile 一致性）+ L1 配置组合检查 + L2 隔离试跑（子进程 boot 全树），发现即自动回滚（写 home patch 前弹确认），复杂问题打包预制提示词交给 agent 修复。铁律：只修改插件代码与配置层，严禁修改 harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "devtools"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-math-copy",
      "repo": "Blackspace2/dsh-math-copy",
      "description": "Interactive LaTeX copy affordances for DeepSeek Harness math output",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-status-plugin",
      "repo": "woshi-Tom/dsh-status-plugin",
      "description": "A dsh status plugin with host-plane and browser halves: harness runtime health (process, listener, API-key presence, memory, uptime, plugin inventory) as JSON plus server-pushed SSE alerts, surfaced.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-testgen",
      "repo": "bujue600-arch/dsh-testgen",
      "description": "Automated unit-test generation for DeepSeek Harness: a /testgen command and generate_tests tool that scaffold, run, and fix tests until they pass.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "devtools"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-cmd-starter",
      "repo": "PandaColour/dsh-cmd-starter",
      "description": "Claude-Code style CLI scheduling bundle for DeepSeek Harness headless: --append-prompt, --resume, --continue, --output-format json, and model overrides.",
      "category": "bundle",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "terminal"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-pixluna",
      "repo": "PixLunaLab/dsh-pixluna",
      "description": "PixLuna image source tools for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-mermaid",
      "repo": "lj970926/dsh-plugin-mermaid",
      "description": "DeepSeek Harness web client plugin that renders ```mermaid code blocks with a chart/source toggle.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "context-vista",
      "repo": "GooodWei/context-vista",
      "description": "A live context-window donut for DeepSeek Harness: token usage, compaction savings, and cost at a glance",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-session-tree",
      "repo": "ZhengQingJing/dsh-session-tree",
      "description": "Git-like immutable session lineage for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-tool-search",
      "repo": "Letter2025/dsh-tool-search",
      "description": "Tool search & slimming for DeepSeek Harness: Hermes-style progressive disclosure — search, describe, and call long-tail tools on demand while keeping core tools eager",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-client-shortcuts",
      "repo": "blue-a11y/dsh-client-shortcuts",
      "description": "Global keyboard shortcuts plugin for the DeepSeek Harness web GUI: ctx.shortcuts registry service, rebindable settings page, and default mod+l/mod+k/mod+shift+c bindings",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-multi-tenant",
      "repo": "GuoMonth/dsh-multi-tenant",
      "description": "Multi-tenant SaaS extension for DeepSeek Harness (DSH): tenant identity, session ownership, authorization boundaries, tenant-aware MCP, and audit.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "safety"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-undo-plugin",
      "repo": "lire1131/dsh-undo-plugin",
      "description": "DSH undo/rollback system: snapshot config files on change, undo/redo the last action from the WebUI or by chat, and roll back broken plugin trees without reinstalling. Works even when DSH fails to.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "safety"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-virtual-workspace",
      "repo": "KevinWen7415/dsh-virtual-workspace",
      "description": "Virtual Workspaces for DeepSeek Harness (DSH): groups multiple project directories for cross-project read/search/write, with the vws agent tool, prompt injection, built-in workspace-list mirroring.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-mic-input",
      "repo": "QT-Chen/dsh-mic-input",
      "description": "DSH Web 麦克风语音输入插件：浏览器内置 Web Speech API 实时转写进输入框，自动去重/续听、智能标点、语言与自动发送设置（Edge=微软语音、Chrome=谷歌语音）。Microphone voice input for the DSH Web UI using the browser's Web Speech API.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-tool-time",
      "repo": "omdsh-dev/dsh-tool-time",
      "description": "Time tool plugin: strict ISO 8601 parsing, IANA timezone conversion, UTC calendar math, and fixed duration diffs.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-web-components",
      "repo": "omdsh-dev/web-components",
      "description": "Web Component adapter that mounts DSH slot trees as native Custom Elements.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-09"
    },
    {
      "name": "dsh-picgo",
      "repo": "PicGo/dsh-plugin",
      "description": "Upload images and files to your image host from DeepSeek Harness, powered by PicGo.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "@picgo/dsh-plugin",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-tensorlake-sandbox",
      "repo": "tensorlakeai/dsh-tensorlake-sandbox",
      "description": "Tensorlake sandbox execution providers for DeepSeek Harness filesystem and subprocess tools.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "@tensorlake/dsh-sandbox",
      "stars": 5,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-composer-polish",
      "repo": "tianji-qingtian/dsh-composer-polish",
      "description": "Composer draft polisher: a sparkle button rewrites the current draft with a zero-latency flash pass.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 19,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-balance",
      "repo": "crazywoola/dsh-balance",
      "description": "Shows API balances and available models in DeepSeek Harness Settings.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 9,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-auto-continue",
      "repo": "HsiangNianian/dsh-auto-continue",
      "description": "Automatically sends continue when a Web UI request is interrupted by network errors or other non-human causes.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 11,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-weather",
      "repo": "sunshine-lang/dsh-weather",
      "description": "Weather tool for DeepSeek Harness: current conditions and multi-day forecasts via Open-Meteo.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-playwright-browser",
      "repo": "Clizo1209/dsh-playwright-browser",
      "description": "Semantic, multi-tab Playwright browser automation for DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 7,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-annotate",
      "repo": "BrambleXu/dsh-annotate",
      "description": "Browser element annotation bridge for DeepSeek Harness, capturing DOM, styles, and viewport screenshots.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 5,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-compaction-instant",
      "repo": "KitDoesIt/dsh-compaction-instant",
      "description": "Near-lossless deterministic compaction engine for DeepSeek Harness, a drop-in replacement for stock compaction.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 7,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "superpowers-dsh",
      "repo": "LayneChai/superpowers-dsh",
      "description": "TDD, debugging, planning, and collaboration skills for DeepSeek Harness, adapted from obra/superpowers.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 16,
      "starsUpdated": "2026-08-14",
      "tags": [
        "devtools"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-billing",
      "repo": "TheTianzz/dsh-billing",
      "description": "Account balance and session cost commands, tools, and Web UI capsules for DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-wordbox",
      "repo": "arcmosin/dsh-wordbox",
      "description": "Common-word box for the Web GUI: a persistent slide-up panel next to the composer for project phrases.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-quota-panel",
      "repo": "brittanistrehlowll-oss/dsh-quota-panel",
      "description": "Provider quota and balance widget for the dsh web surface with a collapsed glanceable capsule.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-surfing-plugin",
      "repo": "cyijun/surfing-plugin",
      "description": "SearXNG search and Crawl4AI fetch providers for DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 9,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-peer-link",
      "repo": "czm15053/dsh-peer-link",
      "description": "Point-to-point messaging between dsh agents and other local agent sessions over unix sockets.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 5,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-codex-connect",
      "repo": "franksong2702/dsh-codex-connect",
      "description": "ChatGPT OAuth and Codex models for DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 5,
      "starsUpdated": "2026-08-14",
      "tags": [
        "interop"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-vision-oil",
      "repo": "oil-oil/dsh-vision",
      "description": "Near-native image understanding for text-only DeepSeek Harness models.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "@oil-oil/dsh-vision",
      "stars": 17,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-model-router",
      "repo": "tianji-qingtian/dsh-model-router",
      "description": "Heuristic model router and cost optimizer with automatic fallback on transient failures.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 22,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-spec-loop",
      "repo": "tianji-qingtian/dsh-spec-loop",
      "description": "Spec-driven development loop: /spec drives propose, approve, implement, verify, and archive.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 10,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-updater-ui",
      "repo": "xingyingyuzhui/dsh-updater-ui",
      "description": "Settings-page updater: check and pull DeepSeek Harness updates with a version badge.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 6,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-llm-codex",
      "repo": "yequ172672/dsh-codex-subscription",
      "description": "Reuse Codex CLI local login credentials to use ChatGPT subscription models in DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 5,
      "starsUpdated": "2026-08-14",
      "tags": [
        "interop"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-telegram-bot",
      "repo": "yuko0331/DSH-telegram",
      "description": "Allowlisted Telegram bot for remote DeepSeek Harness conversations and monitoring.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "channels"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-workshop",
      "repo": "yyyyukari/dsh-plugin-workshop",
      "description": "Steam Workshop-style plugin browser for the DeepSeek Harness Web UI.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "@dsh-external/dsh-plugin-workshop",
      "stars": 14,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-orchestrator",
      "repo": "zibo2025/dsh-orchestrator",
      "description": "Multi-agent orchestration: the main agent decomposes work and workers share a full mesh.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 5,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-git-graph",
      "repo": "1841220388zzzcccxxx-star/dsh-git-graph",
      "description": "Embedded git repository graph visualizer for the DeepSeek Harness web GUI.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 6,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-stats-dashboard",
      "repo": "1HelloMan1/dsh-stats-dashboard",
      "description": "Provider and model usage stats dashboard with speed, call log, cache rate, and CSV export.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-llm-codebuddy-axiaohungry",
      "repo": "Axiaohungry/dsh-llm-codebuddy",
      "description": "WorkBuddy API adapter so DeepSeek Harness can call CodeBuddy models.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 6,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-prompt-enhancer",
      "repo": "Fishsb/dsh-prompt-enhancer",
      "description": "One-click prompt enhancement: fuzzy draft to an independent LLM call, then polished composer text with undo.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-mcp-lens",
      "repo": "labmimors/dsh-mcp-lens",
      "description": "Progressive-disclosure MCP gateway: two fixed tools, exact schema search, lazy connections, failure isolation.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-desktop-pet",
      "repo": "2002yxy/dsh-desktop-pet",
      "description": "Customizable desktop-pet plugin for DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-pain-point-check",
      "repo": "ICCuse/dsh-pain-point-check",
      "description": "After two non-converged experiments, injects three questions and denies non-investigative tool calls until answered.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-call-me",
      "repo": "radres/dsh-plugin-call-me",
      "description": "Your DeepSeek Harness agent rings your phone: it asks out loud, you answer out loud, and what you said steers the run.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "notifications"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-worktree",
      "repo": "CSY656/dsh-worktree",
      "description": "Git worktree filesystem isolation for DeepSeek Harness subagents.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-skill-remote",
      "repo": "CSY656/dsh-skill-remote",
      "description": "Remote skills.sh and GitHub skill provider and installer for DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-tavily-search-provider",
      "repo": "xiaohj233/dsh-tavily-search-provider",
      "description": "Tavily search provider with full search-control mapping and credential-backed key UI.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-keepalive",
      "repo": "xiaohj233/dsh-keepalive",
      "description": "Opt-in detached watchdog for the DSH Web process with snapshot-checked repair.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-sight",
      "repo": "Fu3rte/dsh-sight",
      "description": "Plug-in vision for text-only DeepSeek Harness models with built-in VLM presets and multi-image batch analysis.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-token-usage-kelearns",
      "repo": "KeLearns/dsh-token-usage",
      "description": "Token usage heatmap for the dsh web GUI with daily, weekly, and cumulative views.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "@kelearns/dsh-token-usage",
      "stars": 0,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-open-in-ide",
      "repo": "LJninse/dsh-open-in-ide",
      "description": "Header IDE button that detects VS Code, JetBrains, Cursor, Windsurf, Zed, and Trae on the host.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-claude-import",
      "repo": "TimeCraker/dsh-claude-import",
      "description": "Import Claude Code config (skills, rules, CLAUDE.md, AGENTS.md) into DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "interop"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-motion",
      "repo": "bilbillm/dsh-motion",
      "description": "Semantic, theme-compatible motion runtime for DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "@dsh-external/dsh-motion",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-calculator",
      "repo": "bobcat848/dsh-calculator",
      "description": "DeepSeek API spend calculator for the current session and all sessions.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-claude-tui",
      "repo": "cogine-ai/dsh-claude-tui",
      "description": "Claude Code-style TUI for DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "terminal"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-file-explorer-cxzrdxy",
      "repo": "cxzrdxy/dsh-file-explorer",
      "description": "In-workspace file tree plus a peer view tab that previews files inside DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "@cxzrdxy/dsh-file-explorer",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-approval-alert",
      "repo": "doncelee229-cmyk/dsh-plugin-approval-alert",
      "description": "Desktop notification when DeepSeek Harness needs approval, with workspace name and click-to-jump.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "notifications"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-side-chat-heartmove",
      "repo": "heartmove/dsh-side-chat",
      "description": "Select text in a conversation and ask it in a side chat isolated to that session.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-skillradar",
      "repo": "hellosky983/dsh-skillradar",
      "description": "Scans session-visible skills and ranks them by relevance to the recent conversation.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-qrcode",
      "repo": "hellosky983/dsh-qrcode",
      "description": "Offline QR code generator for DeepSeek Harness: pure JS, no network.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-usage-record",
      "repo": "kkishapppy/dsh-usage-record",
      "description": "Per-turn LLM usage record: a left-rail drawer of tokens, duration, and tool calls with jump-to-turn.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-vision-linenxi",
      "repo": "linenxi-ctrl/dsh-vision",
      "description": "External vision model for DeepSeek Harness: config panel, send-image recognition, and screenshot tools.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "@linenxi-ctrl/dsh-vision",
      "stars": 9,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-deepseek-vision-router",
      "repo": "mochgolf/dsh-deepseek-vision-router",
      "description": "Transparent image preprocessing route for DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-media-preview",
      "repo": "tsonglew/dsh-media-preview",
      "description": "Audio and video preview viewer for dsh-better-sidebar with Range-seeking streaming.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "deepseek-heartflow",
      "repo": "yun520-1/deepseek-heartflow",
      "description": "HeartFlow gate for DSH: automatic output supervision plus a heartflow_check tool.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "@yun520-1/deepseek-heartflow",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "safety"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-token-usage-zerro",
      "repo": "zerro-223/dsh-token-usage",
      "description": "Token usage statistics for the Web UI: per-request LLM usage, trend charts, and cache hit rate.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "@zerro223/dsh-token-usage",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-task-planner",
      "repo": "ztl34245881-commits/dsh-task-planner",
      "description": "Task planning with experience muscle-memory: condition-reflex recall and auto-persisted lessons.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-provider-quota",
      "repo": "781316853/dsh-provider-quota",
      "description": "Model-provider quota display: a settings section plus a sidebar capsule.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "@guyunli/dsh-provider-quota",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-turn-dots",
      "repo": "Blaczz/dsh-turn-dots",
      "description": "Codex-style conversation turn rail: one dot per turn in the DeepSeek Harness web GUI.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 0,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-llm-vision-bridge",
      "repo": "Einskyle/dsh-llm-vision-bridge",
      "description": "Route image attachments to a vision model and return results to the dsh web GUI.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-session-management",
      "repo": "cokiscarazo-rgb/dsh-session-management",
      "description": "Archive, unarchive, and delete chats, plus export, from the DSH Web session list.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "coding-coach",
      "repo": "xiehuan123/coding-coach",
      "description": "Engineering skill pack for non-developers: a DSH profile bundle of Chinese-friendly coding skills.",
      "category": "bundle",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "knowledge"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-hub-yunhuantian",
      "repo": "yunhuantian/dsh-plugin-hub",
      "description": "Graphical plugin hub inside the Harness Web UI for browsing and installing community plugins.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-office",
      "repo": "omdsh-dev/dsh-office",
      "description": "Office document tools for DeepSeek Harness: generate, read, and edit xlsx, pdf, and pptx.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "@huiliyi37/dsh-office",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-noema",
      "repo": "ZSeven-W/dsh-noema",
      "description": "Noema long-term memory for DSH: durable, inspectable agent memory with recall tools and a settings page.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "@zseven-w/dsh-noema",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-web-lan-access",
      "repo": "AcidGr/dsh-web-lan-access",
      "description": "LAN and remote access for the DeepSeek Harness Web UI, including polyfills so the GUI works off localhost.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-web-lan-access",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-web-mobile-fix",
      "repo": "AcidGr/dsh-web-mobile-fix",
      "description": "Mobile layout fixes for the DeepSeek Harness Web UI: settings panel and page layout on small screens.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-web-mobile-fix",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-bilibili",
      "repo": "CZX2244/dsh-bilibili",
      "description": "Bilibili video tools for DeepSeek Harness: transcript-first analyze and summarize from a video URL.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-bilibili",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-browser-playwright",
      "repo": "ChenyuHeee/dsh-browser-playwright",
      "description": "Playwright browser automation for DeepSeek Harness: accessibility-tree interaction with stable refs and per-session contexts.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-browser-playwright",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-promptwall",
      "repo": "Chhlafiu4312/promptwall",
      "description": "Local prompt-injection and secret-exfiltration firewall for DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-promptwall",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "safety"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-attachments",
      "repo": "CocoSgt/dsh-attachments",
      "description": "Bring any file into the conversation: stash it in the workspace and reference it from the agent.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-attachments",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-inspector",
      "repo": "CocoSgt/dsh-inspector",
      "description": "Inspect and manage the live instruction chain and project skills for DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-inspector",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-skills",
      "repo": "CocoSgt/dsh-skills",
      "description": "Global skill hub for dsh: aggregates Claude Code, project, and .skill sources in Settings.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-skills",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-prompt-polish",
      "repo": "JoukoPuro/dsh-prompt-polish",
      "description": "Composer toolbar button that rewrites your prompt via the connected LLM (balanced, concise, detailed, or code).",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-prompt-polish",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-skill-manager",
      "repo": "Lanxing6480/dsh-skill-manager",
      "description": "Skill manager for the dsh web GUI: a sidebar panel for listing, enabling, and organizing skills.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "@lanxing/dsh-skill-manager",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-usage-stats-make0209",
      "repo": "Make0209/dsh-usage-stats",
      "description": "Usage stats for DeepSeek Harness: heatmap, token and cache-hit board, balance, and workspace aliases.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-persona-memory",
      "repo": "Quophic/dsh-persona-memory",
      "description": "Persistent long-term persona memory for DeepSeek Harness, kept in MEMORY.md / USER files.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-persona-memory",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-webui-market-plugin",
      "repo": "Sanqi-normal/dsh-webui-market-plugin",
      "description": "In-harness community plugin market for the dsh web GUI: browse, install, and uninstall into a profile.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "@sanqi-normal/dsh-webui-market-plugin",
      "stars": 23,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-mindspace-local-rag",
      "repo": "Spirtxiaoqi7/mindspace-dsh-local-rag",
      "description": "Local hybrid RAG plugin for DeepSeek Harness, invoked by the model from the workspace.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "mindspace-dsh-local-rag",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "knowledge"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-vision-terry12138qy",
      "repo": "Terry12138qy/dsh-vision",
      "description": "Vision tool for text-only DeepSeek models: send images to Qwen or GLM multimodal and return descriptions.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-blackjack",
      "repo": "WhiseNT/dsh-blackjack",
      "description": "Blackjack table in DeepSeek Harness: play 21 against the house while you work.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-blackjack",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-skill-manager-ytxue",
      "repo": "YTxue/dsh-skill-manager-ytxue",
      "description": "Settings-sidebar skill manager: list and toggle, folder import, DSH-spec check and auto-fix.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-skill-manager-ytxue",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-mobile-access",
      "repo": "YiYan129600/dsh-mobile-access",
      "description": "One-page mobile access setup: Tailscale/LAN detection, scan-to-open QR, and an insecure-origin polyfill.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-mobile-access",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-catalog",
      "repo": "YiYan129600/dsh-plugin-catalog",
      "description": "Settings Plugins tab that lists installed plugins for the dsh web GUI.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-plugin-catalog",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-file-explorer-zalpha263",
      "repo": "Zalpha263/dsh-file-explorer",
      "description": "Persistent web file explorer: lazy directory tree, preview, and inline edit for the workspace.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-external-migration",
      "repo": "buguoshixc/deepseek-harness-external-migration",
      "description": "Migrate Codex, Claude Code, Qoder, and OpenCode config and chat history into DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "deepseek-harness-external-migration",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "interop"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-project-organizer",
      "repo": "caoqinnan-web/dsh-project-organizer",
      "description": "Project context engineering for agents: turn messy project context into organized notes.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-project-organizer",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "knowledge"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-web-search-brave",
      "repo": "cnChenKai/dsh-web-search-brave",
      "description": "Brave Search-backed WebSearchProvider for DeepSeek Harness (ctx.web).",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-web-search-brave",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-web-search-tavily",
      "repo": "cnChenKai/dsh-web-search-tavily",
      "description": "Tavily-backed WebSearchProvider for DeepSeek Harness, including a keyless mode.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-web-search-tavily",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-md-outline",
      "repo": "d-ouyang/dsh-plugin-md-outline",
      "description": "Outline and lint Markdown structure: heading tree, level skips, duplicate headings, unclosed fences.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-plugin-md-outline",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-reverse-skill",
      "repo": "dhicoc/dsh-reverse-skill",
      "description": "Reverse-engineering skill pack as a Cordis plugin: 85 SKILL.md units for authorized security research.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "@reverse-skill/dsh-reverse-skill",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "knowledge"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-mcp-center",
      "repo": "drfccv/dsh-mcp-center",
      "description": "Settings-driven MCP server manager: connect any MCP server to DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-mcp-center",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-moyan",
      "repo": "elviszhang007/dsh-moyan",
      "description": "A quiet quote line in the Web UI sidebar: poems, literature, and game lines from a customizable corpus.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-moyan",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-remote-ide",
      "repo": "harryopo/dsh-remote-ide",
      "description": "SSH remote IDE for DeepSeek Harness: explorer, SFTP editor, and a live SSH PTY terminal.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-remote-ide",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-ocg-billing",
      "repo": "hiro-nikaitou/dsh-ocg-billing",
      "description": "OpenCode Go billing layer: cached official pricing, bill computation, and a composer bill line.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "@hiro-nikaitou/dsh-ocg-billing",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-token-stats",
      "repo": "huantian1223/dsh-token-stats",
      "description": "Token usage statistics for DeepSeek Harness: cumulative and peak tokens with a live HUD.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-token-stats",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-notify",
      "repo": "huguangyu666/dsh-plugin-notify",
      "description": "Notification outlet: desktop toasts, Chinese TTS, and sounds when long tasks finish, error, or need you.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-plugin-notify",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "notifications"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "muretai-dsh-skill",
      "repo": "muretai/muretai-dsh-skill",
      "description": "Join the Muretai agent network from DeepSeek Harness: identity, inbound-mail wake, and MCP wiring.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "muretai-dsh-skill",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-gauge",
      "repo": "noone89A/dsh-gauge",
      "description": "Cache-hit rate, token usage, and cost estimates for the DeepSeek Harness Web UI.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-gauge",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-bookmarks",
      "repo": "penguin-oo/dsh-bookmarks",
      "description": "Bookmark assistant replies: per-message notes and tags, a cross-session center, and Markdown export.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-bookmarks",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-science-workbench",
      "repo": "poplarity/dsh-science-workbench",
      "description": "Reproducible science workbench: agent-driven cells, inline figures, provenance, and environment snapshots.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-science-workbench",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "knowledge"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-terminal",
      "repo": "siberiah2o/dsh-plugin-terminal",
      "description": "Bottom terminal panel for the DeepSeek Harness Web GUI, backed by node-pty.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-plugin-terminal",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "terminal"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-qqbot",
      "repo": "tencent-connect/dsh-qqbot",
      "description": "QQ Bot IM channel plugin for DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "@tencent-connect/dsh-qqbot",
      "stars": 13,
      "starsUpdated": "2026-08-14",
      "tags": [
        "channels"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-weixin",
      "repo": "xiaoshihou514/dsh-weixin",
      "description": "Control DeepSeek Harness remotely through Weixin.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-weixin",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "channels"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-skills-manager",
      "repo": "xiaoxianyu-office/dsh-skills-manager",
      "description": "Settings-page Skills manager: system and user skill lists with toggle, edit, delete, and create.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "npm": "dsh-skills-manager",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-citeguard",
      "repo": "Chhlafiu4312/citeguard",
      "description": "Citation extraction and evidence verification for DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "knowledge"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-citeguard"
    },
    {
      "name": "dsh-plugin-working-status",
      "repo": "Abyss-Seeker/dsh-plugin-working-status",
      "description": "Click-to-edit override for the running-turn status label in the DeepSeek Harness web UI.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-plugin-working-status"
    },
    {
      "name": "dsh-web-search-tavily-szmy",
      "repo": "SZMY-haruhi/dsh-web-search-Tavily",
      "description": "Tavily web search provider for DeepSeek Harness, with a settings toggle back to official DeepSeek search.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-stream-rules",
      "repo": "jiesou/dsh-stream-rules",
      "description": "Inject steering rules when needed without wasting system context.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "safety"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@jiesou/dsh-stream-rules"
    },
    {
      "name": "dsh-tool-git",
      "repo": "Huasfan/dsh-tool-git",
      "description": "Git first-class tools (status, diff, log, add, commit) for DeepSeek Harness agents.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-tool-git"
    },
    {
      "name": "oh-my-dsh",
      "repo": "YYTbit/oh-my-dsh",
      "description": "Multi-agent orchestration for DeepSeek Harness: specialized agents, task orchestration, and workflow skills.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14",
      "npm": "oh-my-dsh"
    },
    {
      "name": "dsh-jingling",
      "repo": "Yi-111-a/dsh-jingling",
      "description": "Jingling companion for DeepSeek Harness: reviewable local memory, a restricted preset, and an optional desktop-pet sidecar.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-jingling"
    },
    {
      "name": "dsh-better-edit",
      "repo": "Rianico/dsh-better-edit",
      "description": "Hash-anchored read, edit, batch_edit, and undo_last_edit tools for DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-better-edit"
    },
    {
      "name": "dsh-plugin-marketplace",
      "repo": "bradeGithub/DSH-Plugins-Marketplace",
      "description": "Web GUI plugin marketplace: browse, install, and update GitHub topic dsh-plugin packages from inside DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 28,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-plugin-marketplace"
    },
    {
      "name": "dsh-commandcode-go-provider",
      "repo": "jiesou/dsh-commandcode-go-provider",
      "description": "Command Code Go provider adapter for dsh: scan the Go-plan catalog and serve generation through the harness LLM seam.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-commandcode-go-provider"
    },
    {
      "name": "dsh-ding",
      "repo": "CAOGGL/dsh-ding",
      "description": "Play a sound and show a Windows toast when a DeepSeek Harness turn finishes, with a Web UI bell control.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "notifications"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-ding"
    },
    {
      "name": "dsh-vault",
      "repo": "Ox0400/dsh-vault",
      "description": "Encrypted credential vault for DeepSeek Harness: AES-256-GCM plus TOTP, model tools, and a Settings UI.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "safety"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-vault"
    },
    {
      "name": "dsh-plugin-solo-thinking",
      "repo": "fredalxin/dsh-plugin-solo-thinking",
      "description": "Solo-style isolated brainstorm branches and Handoffs for DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-plugin-solo-thinking"
    },
    {
      "name": "dsh-agentfuse",
      "repo": "MkaliezZ/dsh-agentfuse-plugin",
      "description": "AgentFuse fail-closed pre-dispatch tool gate for DeepSeek Harness with durable allow/block decision evidence.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "safety"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@deepseek-ai/dsh-agentfuse"
    },
    {
      "name": "dsh-audio-alert",
      "repo": "ellelkktrraaa/dsh-audio-alert",
      "description": "Browser audio alerts for DeepSeek Harness attention edges: approval requests, ask-user questions, and finished turns.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "notifications"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@deepseek-ai/dsh-client-audio-alert"
    },
    {
      "name": "dsh-vision-bridge-lium",
      "repo": "lium970320/dsh-vision-bridge",
      "description": "Vision bridge for text-only main models: ingest chat images, turn them into text, and expose a view_image tool.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@lium970320/dsh-vision-bridge"
    },
    {
      "name": "dsh-image-tools",
      "repo": "xiaoxianyu-office/dsh-image-tools",
      "description": "Chat-image bridge, read_image deny, and conversational image_recognize for text-only DeepSeek Harness models.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@dsh-external/dsh-image-tools"
    },
    {
      "name": "dsh-workbench",
      "repo": "lee259/dsh-workbench",
      "description": "Codex-like file workspace for DeepSeek Harness Web with read-only previews and real write/edit diffs.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-workbench"
    },
    {
      "name": "dsh-plugin-zh-inventory",
      "repo": "anxinyuanshiyu/dsh-plugin-zh-inventory",
      "description": "Chinese labels and short descriptions for the DeepSeek Harness settings plugin list.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-plugin-zh-inventory"
    },
    {
      "name": "dsh-requirements-alignment",
      "repo": "jiezeng2004-design/dsh-requirements-alignment",
      "description": "Lightweight requirement alignment for DeepSeek Harness: align important decisions before execution without a full spec workflow.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-requirements-alignment"
    },
    {
      "name": "dsh-claude-provider",
      "repo": "MoFeng2223/dsh-claude-provider",
      "description": "Custom Claude provider support for DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@mofeng2223/dsh-claude-provider"
    },
    {
      "name": "dsh-usage-chart",
      "repo": "Max-Samson/dsh-usage-chart",
      "description": "Real-time token usage, cost estimates, per-round charts, and DeepSeek API balance for the Web GUI.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-usage-chart"
    },
    {
      "name": "dsh-plugin-market-nanshan",
      "repo": "nanshan1995/DSH-Plugin-Market",
      "description": "Plugin market for DeepSeek Harness with a curated catalog, live GitHub browsing, translated search, and a pre-install audit gate.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dshmarket"
    },
    {
      "name": "dsh-prevent-scd",
      "repo": "Codingendless/dsh-prevent-scd",
      "description": "Rest-reminder pet for DeepSeek Harness: blocks the Web UI with a nurse-cat after late-night or hours-long continuous use.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-prevent-scd"
    },
    {
      "name": "dsh-workspace-upload",
      "repo": "LI-Huaa/dsh-workspace-upload",
      "description": "Workspace file manager for the dsh Web GUI: browse, upload, download, rename, create, and delete session files.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-workspace-upload"
    },
    {
      "name": "dsh-opencode-go-usage-yumusb",
      "repo": "yumusb/dsh-opencode-go-usage",
      "description": "OpenCode GO plan quota widget in the sidebar, a same-origin usage proxy, and an /opencode-go chat command.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-wsl-workspace",
      "repo": "6Mikao9/dsh-wsl-workspace",
      "description": "Add a WSL workspace from the Web GUI and run the agent session inside the WSL distribution, no extra dsh install required.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-wsl-workspace"
    },
    {
      "name": "dsh-annotation-plugin",
      "repo": "boboozeng/dsh-annotation-plugin",
      "description": "Quote selected assistant text into the next request with a host annotation service and a Web quote dock.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-annotation-plugin"
    },
    {
      "name": "dsh-plugin-diff-review",
      "repo": "Civitasv/dsh-plugin-diff-review",
      "description": "Codex-style diff review for DeepSeek Harness: inspect uncommitted changes and accept or revert files.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-plugin-diff-review"
    },
    {
      "name": "dsh-auto",
      "repo": "simon300000/dsh-auto",
      "description": "Model-reviewed Auto Approve permission preset for the DeepSeek Harness Web UI.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "safety"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-auto"
    },
    {
      "name": "dsh-llm-deepseek-vision",
      "repo": "NagasakiSoyo-ui/dsh-llm-deepseek-vision",
      "description": "Vision-augmented DeepSeek adapter: a vision model describes images, then a text-only DeepSeek model reasons over the description.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@deepseek-ai/dsh-llm-deepseek-vision"
    },
    {
      "name": "dsh-ui-container",
      "repo": "CH4ACKO3/dsh-ui-container",
      "description": "Remote-capable recursive UI surface container for DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@ch4acko3/dsh-ui-container"
    },
    {
      "name": "dsh-gadgets",
      "repo": "Highjobop/dsh-gadgets",
      "description": "One-install bundle of dsh-skin appearance tweaks and dsh-tidy conversation folding for the Web GUI.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "path": "dsh-gadgets",
      "npm": "dsh-gadgets"
    },
    {
      "name": "dsh-tidy",
      "repo": "Highjobop/dsh-gadgets",
      "description": "Conversation tidy tools: fold a turn to the final result and a right-edge node rail with message previews.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "path": "dsh-tidy",
      "npm": "dsh-tidy"
    },
    {
      "name": "dsh-find-plugin",
      "repo": "awesome-dsh-plugin/dsh-find-plugin",
      "description": "Find DeepSeek Harness plugins from inside the agent via live GitHub dsh-plugin topic search, ranked by stars.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 13,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-find-plugin"
    },
    {
      "name": "dsh-file-review",
      "repo": "left0ver/dsh-file-review",
      "description": "Review files an agent just changed in a line-numbered unified diff drawer.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 6,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-file-review"
    },
    {
      "name": "dsh-lark-meeting-notifier",
      "repo": "yeruizhi/dsh-lark-meeting-notifier",
      "description": "Feishu meeting reminder dock: flash when it is time to leave the agent and join a human meeting.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 5,
      "starsUpdated": "2026-08-14",
      "tags": [
        "notifications"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-lark-meeting-notifier"
    },
    {
      "name": "dsh-client-pricing",
      "repo": "Miyazawai/dsh-client-pricing",
      "description": "Live DeepSeek API pricing badge in the session header, with peak/off-peak flash and pro rates.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 6,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-client-pricing"
    },
    {
      "name": "zat-dsh-engine",
      "repo": "mishibeikejie/zat-dsh-engine",
      "description": "Visual plugin marketplace for DeepSeek Harness: browse, search, install, update, and uninstall community plugins.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 5,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14",
      "npm": "zat-dsh-engine"
    },
    {
      "name": "dsh-webui-auth",
      "repo": "Yuuz12/dsh-webui-auth",
      "description": "WebUI login gate for DeepSeek Harness: account/password in Settings, then HTTP, bundle, API, and WebSocket require a session cookie.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "safety"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-webui-auth"
    },
    {
      "name": "dsh-plugin-conversation-outline",
      "repo": "XavierMarquis93/dsh-plugin-conversation-outline",
      "description": "Per-conversation outline rail for Web: a clickable index of user questions and agent answers that jumps to the message.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@deepseek-ai/dsh-client-ui-conversation-outline"
    },
    {
      "name": "dsh-plugin-deepseek-balance",
      "repo": "hnmrxz/dsh-plugin-deepseek-balance",
      "description": "Real-time DeepSeek account balance in the DeepSeek Harness bottom status bar.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-plugin-deepseek-balance"
    },
    {
      "name": "dsh-usage-stats-ychris",
      "repo": "Ychris12138/dsh-usage-stats",
      "description": "Token usage heatmap, per-model breakdowns, and DeepSeek account balance for the DeepSeek Harness Web GUI.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 17,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-computer-use-zrui",
      "repo": "ZRui-C/dsh-computer-use",
      "description": "Text-first browser and background macOS control for DeepSeek Harness, targeting the right process and window without grabbing the pointer.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-desk",
      "repo": "majiayu000/dsh-desk",
      "description": "Tauri desktop companion for DeepSeek Harness: wraps official dsh 0.1.0-rc.6 in a system WebView with isolated DSH_HOME and a plugin-manager UI.",
      "category": "bundle",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "terminal"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-manager",
      "repo": "2768651338/dsh-plugin-manager",
      "description": "插件管家——图形化插件管理：中文名与用途说明目录 + 一键启停（写入全局 cordis.patch.yml，实时热生效）",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-heatmap",
      "repo": "283Gawin/dsh-heatmap",
      "description": "Activity heatmap for the dsh web GUI sidebar: a persistent GitHub-style year grid switching between daily commits / token usage / estimated spend, plus a today line with all-session token totals,.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@linxin666/dsh-client-ui-activity-heatmap"
    },
    {
      "name": "dsh-opencodego-usage",
      "repo": "BeiZi6/dsh-opencodego-usage",
      "description": "OpenCodeGo 用量 v0.1（作者：Xu Yuanshan）：输入框右下角呼吸灯显示剩余额度，点击展开液态玻璃面板——三窗口进度条（5小时/7天/30天）+ 重置时间，Key 自动读取 DSH 凭据（opencode-go 提供商）。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-opencodego-usage"
    },
    {
      "name": "dsh-ui-workspace",
      "repo": "CH4ACKO3/dsh-ui-workspace",
      "description": "Composable workspace primitives for DeepSeek Harness UI plugins",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui",
        "devtools"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@ch4acko3/dsh-ui-workspace"
    },
    {
      "name": "dsh-openai-oauth",
      "repo": "DGPisces/dsh-openai-oauth",
      "description": "DeepSeek Harness LLM provider for Codex models using managed ChatGPT OAuth",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-openai-oauth"
    },
    {
      "name": "dsh-chem-render",
      "repo": "EQmarks/dsh-chem-render",
      "description": "Deterministic chemical-structure rendering for DeepSeek Harness: one chem_render tool turns a SMILES string into SVG, PNG, standalone HTML, Markdown and LaTeX (includegraphics + optional native.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-chem-render"
    },
    {
      "name": "dsh-client-message-tools",
      "repo": "Khorsheed/dsh-client-message-tools",
      "description": "dsh plugin: edit and withdraw user messages (inline edit, withdrawal with file-impact confirmation, snapshot-backed undo)",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@khorsheed/dsh-client-message-tools"
    },
    {
      "name": "dsh-agent-preset-recommender",
      "repo": "LeemanCheung/dsh-agent-preset-recommender",
      "description": "Privacy-safe local activity scanner and agent preset recommender for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-agent-preset-recommender"
    },
    {
      "name": "dsh-token-usage-leemancheung",
      "repo": "LeemanCheung/dsh-token-usage",
      "description": "Persistent token usage records and dashboard for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-token-usage"
    },
    {
      "name": "dsh-balance-lemcae",
      "repo": "LemCAE/dsh-balance",
      "description": "DeepSeek Open Platform balance and session consumption readout (host + web client)",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@lemcae/dsh-balance"
    },
    {
      "name": "dsh-provider-usage",
      "repo": "Lwc-LiuWenCheng/dsh-provider-usage",
      "description": "DSH web plugin: a bottom-right bubble showing the live usage/quota of every configured LLM model provider (OpenCodeGo, OpenRouter, OpenAI, DeepSeek…), with a configurable update policy (on user.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-provider-usage"
    },
    {
      "name": "dsh-plugin-msg-nav",
      "repo": "SherUnlocked-4869/dsh-plugin-msg-nav",
      "description": "DSH conversation node navigation rail: one dash per user message on the right edge, reading-position tracking, hover preview card, click-to-jump with highlight line, sliding window, auto-hide",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-plugin-msg-nav"
    },
    {
      "name": "godot-bridge",
      "repo": "Smalldy/godot-bridge",
      "description": "DSH (DeepSeek Harness) plugin: launch and drive a running Godot 4.x game through its in-game TCP interaction server — replaces the godot-mcp MCP server with native agent tools.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "godot-bridge"
    },
    {
      "name": "dsh-file-mention",
      "repo": "StephenHu09/dsh-file-mention",
      "description": "DSH Web GUI @-mention workspace file picker: input @ to filter git-tracked files plus files re-included via .aiinclude, like Codex/Claude Code file references.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@hucj/dsh-file-mention"
    },
    {
      "name": "dsh-vision-wenjin",
      "repo": "Wenjin-111/dsh-vision",
      "description": "DeepSeek Harness plugin: turn-level vision routing with provider fallback chains, a cached vision_describe tool with JSON output and image downscaling, and optional per-host proxy support.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-vision"
    },
    {
      "name": "dsh-teacher",
      "repo": "Yihong89/dsh-teacher",
      "description": "DSH teacher plugin: Socratic tutor that leads you to answers from a markdown question set, tracks knowledge gaps in-session, and retests them on a spaced-repetition schedule.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "knowledge"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-teacher"
    },
    {
      "name": "dsh-content-studio",
      "repo": "ZRui-C/dsh-content-studio",
      "description": "DSH bundle plugin: 内容创作与多平台分发 —— 桌面截屏/录屏、Markdown→小红书图文卡片（5 配色 × 4 版式、照片插图、背景图）、dev.to 官方 API 发布、发布前人工审阅（草稿落盘），并挂载 Playwright 与小红书 MCP。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-content-studio"
    },
    {
      "name": "dsh-any-attachment",
      "repo": "Zenjibad/dsh-any-attachment",
      "description": "dsh bundle: attach any file type in dsh web — text-likes inline, binaries as workspace path references, rasters via the built-in pipeline",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-any-attachment"
    },
    {
      "name": "dsh-git-guard",
      "repo": "bibibala/dsh-git-guard",
      "description": "Git-aware write guard plugin for DeepSeek Harness: blocks whole-file writes that would overwrite the user's uncommitted changes, and reports what happened to protected files at turn end",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "safety"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-git-guard"
    },
    {
      "name": "dsh-llm-inspector",
      "repo": "cdxiaodong/dsh-llm-inspector",
      "description": "统一 LLM 请求/响应检查器：调 reasoning effort、外部思考(think)导出、流量与包分析 —— DeepSeek Harness 插件",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-llm-inspector"
    },
    {
      "name": "dsh-knowledge-graph",
      "repo": "cwbcheng/dsh-knowledge-graph",
      "description": "DSH Cordis plugin: turn arbitrary source text into an AI-generated knowledge graph (facts / inferences / concepts / definitions / examples / counter-examples / rules) with two-way linking between.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "knowledge"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-knowledge-graph"
    },
    {
      "name": "dsh-balance-deepforce",
      "repo": "deepforce/dsh-balance",
      "description": "Human-facing /balance slash command that queries the DeepSeek account balance",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@deepforce/dsh-balance"
    },
    {
      "name": "dsh-default-workspace",
      "repo": "fenxin-fx/dsh-default-workspace-plugin",
      "description": "Start a DeepSeek Harness conversation without selecting a workspace: auto-provisions a default workspace and adds a \"Chat without a workspace\" option to the workspace picker",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@dsh-external/dsh-default-workspace"
    },
    {
      "name": "dsh-computer-use-geohotstan",
      "repo": "geohotstan/dsh-computer-use",
      "description": "Desktop computer use for DeepSeek Harness (DSH): macOS app listing, accessibility-tree window capture, screenshots, and synthesized input — the seam, the local Swift-daemon provider, the.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-computer-use"
    },
    {
      "name": "dsh-image-bridge",
      "repo": "gmleong/dsh-image-bridge",
      "description": "Give text-only models eyes: an analyze_image tool for DeepSeek Harness, backed by free Chinese vision APIs (GLM-4V-Flash / Qwen-VL) or any OpenAI-compatible vision endpoint. 给纯文本模型装上眼睛。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-img"
    },
    {
      "name": "dsh-agent-rp",
      "repo": "hewzhew/dsh-agent-rp",
      "description": "SillyTavern migration and next-generation Agent RP for DSH",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 104,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents",
        "fun"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@dsh-external/dsh-agent-rp"
    },
    {
      "name": "dsh-store",
      "repo": "huguangyu666/dsh-store",
      "description": "DeepSeek Harness 插件商店：npm 权威源聚合（250+ 插件）+ dsh 字段质量验证 + GitHub 星标，一键安装/卸载（自动合并 cordis.patch.yml），重启生效。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-store"
    },
    {
      "name": "dsh-whale-arcade",
      "repo": "jitengfei/dsh-whale-arcade",
      "description": "floating whale arcade for DeepSeek Harness with three browser-local games",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-whale-arcade"
    },
    {
      "name": "dsh-mcp-admin",
      "repo": "kairoz9/dsh-mcp-admin",
      "description": "MCP admin for dsh: /mcp server status and per-profile MCP server management (add/edit/delete/enable) from the settings page, via a typert remote.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-mcp-admin"
    },
    {
      "name": "dsh-system-proxy",
      "repo": "khiqwq/dsh-system-proxy",
      "description": "DSH host plugin — smart outbound HTTP(S) routing: named proxies (http/https/socks4/4a/5/5h), per-host/provider/plugin rules, direct-first fallback with health memory (global fetch + node http/https).",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-system-proxy"
    },
    {
      "name": "dsh-cohub-board",
      "repo": "kjx-talesofai/dsh-cohub-board",
      "description": "Cohub Board agent tools (draw/read/clear/export) for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-cohub-board"
    },
    {
      "name": "dsh-token-cost",
      "repo": "le-soleil-se-couche/dsh-token-cost",
      "description": "DSH web GUI plugin: token usage (input/output), cache hit/miss and cost statistics per conversation and in aggregate, with auto-switching DeepSeek pricing schemes",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-skill-panel-lywusichen",
      "repo": "lywusichen/dsh-skill-panel",
      "description": "DeepSeek Harness plugin: a skill trigger in the sidebar foot that opens a dialog listing the current session's loaded skills, each with an \"open local folder\" jump.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-skill-panel"
    },
    {
      "name": "dsh-plugin-manager-monk233",
      "repo": "monk233/dsh-plugin-manager",
      "description": "Manage dsh profile plugins from the web UI: enable / disable / delete composition rows with live hot reload, no config editing by hand",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@dsh-external/dsh-plugin-manager"
    },
    {
      "name": "dsh-research-first",
      "repo": "outnever/dsh-research-first",
      "description": "Research-first assistant for DeepSeek Harness: gently nudge the agent to investigate docs / code / community before edits, detect blocked research, and record every hint in the session log.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "knowledge"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-research-first"
    },
    {
      "name": "dsh-vision-window",
      "repo": "shinegeer/dsh-vision-window",
      "description": "DSH 网页端识图插件（dsh-vision-window）：输入框旁可拖动的图片存储框，粘贴/拖入截图后自动存到工作区并把图片路径插到消息最前；自带 vision 工具 + 识图技能，让 AI 在长工程里自动调识图模型并整理到「已识别图片」文件夹。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@dsh-external/dsh-client-ui-vision-window"
    },
    {
      "name": "dsh-engineering-services",
      "repo": "wefio/dsh-engineering-services",
      "description": "IDE engineering services for DeepSeek Harness: LSP diagnostics/navigation/rename, DAP debugging (debugpy + js-debug), and task-toolchain build/test/lint runs.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "devtools"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-llm-newapi",
      "repo": "wenzetan/dsh-llm-newapi",
      "description": "NewAPI (OpenAI-compatible gateway) chat-completions adapter for the DeepSeek Harness LLM seam. Provider route id 'newapi', display name 'NewAPI'. Dual-face: host half registers the LLM adapter and.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-llm-newapi"
    },
    {
      "name": "dsh-credential-handoff",
      "repo": "xiaohj233/dsh-credential-handoff",
      "description": "Conversation-local credential handoff that writes through the DSH credential service without returning the secret to model context.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "safety"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-credential-handoff"
    },
    {
      "name": "dsh-resume",
      "repo": "xiaohj233/dsh-resume",
      "description": "Resume interrupted DSH turns from an empty submit and restore sessions or subagents that were running at process shutdown.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-resume"
    },
    {
      "name": "dsh-gpt-file-discipline",
      "repo": "youxi-huang/dsh-gpt-file-discipline",
      "description": "A configurable DeepSeek Harness host plugin that adds file-discipline guidance to selected model steps.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-gpt-file-discipline"
    },
    {
      "name": "dsh-skills-mcp-manager",
      "repo": "zebbkira/dsh-skills-mcp-manager",
      "description": "Skills & MCP manager for the dsh web GUI: browse/enable/import/delete skills across project and user roots, and manage MCP servers with a REAL connection through @deepseek-ai/dsh-mcp-client (enabled.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@zebbkira/dsh-skills-mcp-manager"
    },
    {
      "name": "dsh-finance",
      "repo": "zhang787jun/dsh-finance",
      "description": "Financial research and portfolio risk workflow tools for DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "knowledge"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-finance"
    },
    {
      "name": "dsh-import-agents",
      "repo": "Chang-Tong/dsh-import-agents",
      "description": "Import pi / opencode sessions, chat history, and agents into DeepSeek Harness (dsh): slash commands, session-start migration prompt, and a one-click Sync button in the composer.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 5,
      "starsUpdated": "2026-08-14",
      "tags": [
        "interop"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-import-agents"
    },
    {
      "name": "dsh-workbench-dpf555",
      "repo": "Dpf555/dsh-workbench",
      "description": "VS Code-style three-column layout for the DSH web GUI: docked Explorer file tree + Monaco code editor that replaces the chat column when a file is opened",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-anydrop",
      "repo": "babutiger/dsh-anydrop",
      "description": "Drop-anything plugin for DeepSeek Harness: immutable per-message attachment IDs, streaming binary uploads, idempotent batch synchronization, restart-safe manifests, chunked large-file reads, and.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-anydrop"
    },
    {
      "name": "dsh-vision-auto",
      "repo": "babutiger/dsh-vision-auto",
      "description": "DeepSeek Harness plugin: drag images into the Web GUI — images keep showing as images, image turns route to a vision model (route mode) or a built-in vision_describe tool answers them via any.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-vision-auto"
    },
    {
      "name": "dsh-workspace-file-upload",
      "repo": "shililinghu/dsh-file-upload-deepseek-harness-plug-in",
      "description": "Generic file upload compatibility layer for DeepSeek Harness web",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@agent-hub/dsh-workspace-file-upload"
    },
    {
      "name": "dsh-openbiliclaw",
      "repo": "whiteguo233/dsh-openbiliclaw",
      "description": "OpenBiliClaw DeepSeek Harness plugin: the user-consumption side (recommendations, delight, saved, Socratic chat, profile, probes, activity) as a web-GUI sidebar, plus agent-bridge tools and the.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 21,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@openbiliclaw/dsh-plugin"
    },
    {
      "name": "dsh-multi-pet",
      "repo": "YiYan129600/dsh-multi-pet",
      "description": "Multi-pet compat for DSH Web: isolates the built-in pet service so it coexists with third-party pets (whale-girl). 多桌宠兼容：隔离内置桌宠服务，使其与第三方桌宠同时运行。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@linxin666/dsh-multi-pet"
    },
    {
      "name": "dsh-prism",
      "repo": "YOGEMOW/DeepSeek_Prism",
      "path": "dsh-plugin",
      "description": "DeepSeek Prism 仓库根：Codex Skill 与 DeepSeek Harness 插件双包发布",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@yogemow/dsh-prism"
    },
    {
      "name": "dsh-channel-feishu",
      "repo": "ZinkLu/dsh-channel",
      "path": "packages/channel-feishu",
      "description": "A DeepSeek Harness channel plugin written entirely by DeepSeek Harness itself.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "channels"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-channel-feishu"
    },
    {
      "name": "dsh-channel-telegram",
      "repo": "ZinkLu/dsh-channel",
      "path": "packages/channel-telegram",
      "description": "A DeepSeek Harness channel plugin written entirely by DeepSeek Harness itself.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "channels"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-channel-telegram"
    },
    {
      "name": "dsh-channel-wechat",
      "repo": "ZinkLu/dsh-channel",
      "path": "packages/channel-wechat",
      "description": "A DeepSeek Harness channel plugin written entirely by DeepSeek Harness itself.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "channels"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-channel-wechat"
    },
    {
      "name": "dsh-meme",
      "repo": "omdsh-dev/dsh-meme",
      "description": "让 agent 在回复正文内联渲染表情包：inject_meme 工具 + systemPrompt 引导 + webServer 图片路由",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@dsh-external/dsh-meme"
    },
    {
      "name": "dsh-tool-calculator",
      "repo": "omdsh-dev/dsh-tool-calculator",
      "description": "DSH calculator tool",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 6,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@deepseek-ai/dsh-tool-calculator"
    },
    {
      "name": "dsh-tool-csv",
      "repo": "omdsh-dev/dsh-tool-csv",
      "description": "DSH CSV data tool: parse/query/stats over RFC 4180 CSV text, zero-dependency state-machine parser",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@deepseek-ai/dsh-tool-csv"
    },
    {
      "name": "dsh-tool-diff",
      "repo": "omdsh-dev/dsh-tool-diff",
      "description": "DSH diff tool: structured comparison of text/JSON/CSV/Markdown plus unified diff generation and in-memory patch validation. Zero-dependency, read-only.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@deepseek-ai/dsh-tool-diff"
    },
    {
      "name": "dsh-tool-encoding",
      "repo": "omdsh-dev/dsh-tool-encoding",
      "description": "DSH encoding tool plugin",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@deepseek-ai/dsh-tool-encoding"
    },
    {
      "name": "dsh-tool-json",
      "repo": "omdsh-dev/dsh-tool-json",
      "description": "DSH JSON query tool",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@deepseek-ai/dsh-tool-json"
    },
    {
      "name": "dsh-tool-markdown",
      "repo": "omdsh-dev/dsh-tool-markdown",
      "description": "DSH Markdown tool: HTML-to-Markdown conversion, whitelisted Markdown-to-HTML, GFM table normalization, TOC generation. Zero-dependency lightweight parsers.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@deepseek-ai/dsh-tool-markdown"
    },
    {
      "name": "dsh-tool-regex",
      "repo": "omdsh-dev/dsh-tool-regex",
      "description": "DSH regex tool: test/find/replace over text plus static pattern explanation, zero-dependency with ReDoS guards",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@deepseek-ai/dsh-tool-regex"
    },
    {
      "name": "dsh-tool-schema",
      "repo": "omdsh-dev/dsh-tool-schema",
      "description": "DSH JSON Schema validation tool: validate, failure paths, static explain, default-only normalize; zero-network, zero-dynamic-code with resource limits and a pattern ReDoS worker budget",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@deepseek-ai/dsh-tool-schema"
    },
    {
      "name": "dsh-tool-stat",
      "repo": "omdsh-dev/dsh-tool-stat",
      "description": "DSH statistics tool: describe/percentile/frequency/correlation over explicit finite numeric arrays, zero-dependency, deterministic, numerically stable (Neumaier sum + Welford variance +.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@deepseek-ai/dsh-tool-stat"
    },
    {
      "name": "dsh-web-ui-notify-omdsh",
      "repo": "omdsh-dev/dsh-web-ui-notify",
      "description": "Desktop notifications for DeepSeek Harness approvals, questions, and turn completion — so neither DSH nor you end up waiting while you browse another tab.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "notifications"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@omdsh-dev/dsh-web-ui-notify"
    },
    {
      "name": "dsh-fun-ticker",
      "repo": "omdsh-dev/dsh-fun-ticker",
      "description": "Ticker tape: user-selected crypto/FX/A-share/index/HK/US quotes in a scrolling strip above the composer, proxied and cached host-side",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-13",
      "npm": "@deepseek-ai/dsh-fun-ticker"
    },
    {
      "name": "dsh-sandbox-microsandbox",
      "repo": "omdsh-dev/sandbox-micro",
      "description": "Fail-closed microsandbox microVM provider and model-facing guest tools",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-09",
      "npm": "@deepseek-ai/dsh-sandbox-microsandbox"
    },
    {
      "name": "dsh-sandbox-mxc",
      "repo": "omdsh-dev/sandbox-mxc",
      "description": "Microsoft eXecution Containers (MXC) backend for the DeepSeek Harness sandbox seam",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-09",
      "npm": "@deepseek-ai/dsh-sandbox-mxc"
    },
    {
      "name": "dsh-sandbox-nono",
      "repo": "omdsh-dev/sandbox-nono",
      "description": "nono (Landlock/Seatbelt) backend for the DeepSeek Harness sandbox seam with a vendored fail-closed executor",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-11",
      "npm": "@deepseek-ai/dsh-sandbox-nono"
    },
    {
      "name": "dsh-mobile-fenghuolinshan",
      "repo": "FengHuoLinShan/dsh-mobile",
      "description": "DSH 远程访问插件(out-of-tree bundle): 局域网/Tailscale 访问 + PIN 设备配对 + 移动端 UI",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "channels",
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-mobile"
    },
    {
      "name": "dsh-web-search-tavily-myflv",
      "repo": "myflv/dsh-web-search-tavily",
      "description": "Tavily-backed search provider for the DeepSeek Harness web capability seam (ctx.web)",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-quota-panel-wenzetan",
      "repo": "wenzetan/dsh-quota-panel",
      "description": "Provider quota/balance widget for the dsh web surface: collapsed glanceable capsule expanding into a Harness-native card with a settings panel (provider visibility / refresh interval / warn.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-quota-panel"
    },
    {
      "name": "dsh-weixin-skylar",
      "repo": "skylar-fei/dsh-wechat-maid",
      "path": "packages/dsh-weixin",
      "description": "DSH Web 插件合集：微信机器人（连接 + 主动消息/定时推送）+ 深蓝女仆桌宠，两个插件共享构建预设的单仓库。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "channels"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "oh-my-dsh-amplift",
      "repo": "amplifthq/oh-my-dsh",
      "description": "Plugins, sensible defaults, and a launcher for DeepSeek Harness (dsh) — everything you're missing, without forking upstream.",
      "category": "tool",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "devtools"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-hydrophone",
      "repo": "dshworks/dsh-hydrophone",
      "description": "Background stream listeners that wake the agent: matching lines from a long-running command or a growing file arrive as batched, budgeted in-session notices. Listeners are first-class jobs.",
      "category": "plugin",
      "tags": [
        "agents",
        "observability"
      ],
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 0,
      "starsUpdated": "2026-08-14",
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-monitor",
      "repo": "AbnerAI/dsh-monitor",
      "description": "Persistent watchers that wake the agent: poll a command or an append-only NDJSON inbox and deliver new content as plugin notices (followup when idle, inject when busy).",
      "category": "plugin",
      "tags": [
        "agents"
      ],
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-tool-monitor",
      "repo": "yoke233/dsh-tool-monitor",
      "description": "Subscribe to already-running background jobs via a lazy output tee: pattern-matched events from an existing bash or pwsh job, without re-running the command.",
      "category": "plugin",
      "tags": [
        "observability"
      ],
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "pushedAt": "2026-08-13"
    },
    {
      "name": "dsh-survey",
      "repo": "jinhuang712/dsh-survey",
      "description": "Questionnaire-style survey plugin for DeepSeek Harness: the do_a_survey tool asks 1-10+ questions at once (single/multi/yes-no/compare/open types) in four presentation modes (compact/inline/overlay/gr",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-survey"
    },
    {
      "name": "dsh-builtin-toggles",
      "repo": "Starfie1d1272/dsh-builtin-toggles",
      "description": "Built-in plugin catalog and safe GUI toggles for DeepSeek Harness Web.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-builtin-toggles"
    },
    {
      "name": "dsh-user-plugins-manager",
      "repo": "zdjmrq/dsh-user-plugins-manager",
      "description": "DSH 用户插件管理器:在“设置 → 插件”中统一管理用户插件——目录散件的挂载/启用/停用/卸载、运行树中部署/包插件的启用/停用、以及 profile 中已安装 npm 插件包的挂载/卸载(写入 cordis.patch.yml 补丁层,HMR 热生效)。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace",
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-user-plugins-manager"
    },
    {
      "name": "dsh-web-preview-float",
      "repo": "WJNCT55555/dsh-web-preview-float",
      "description": "DSH Web UI 悬浮预览插件：两个可拖拽/拉伸/缩小的独立悬浮窗（预览 iframe + 代码文件树），只依赖官方扩展点，不改 DSH 核心。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@dsh-external/dsh-web-preview-float"
    },
    {
      "name": "dsh-plugin-manager-d4cluv-train",
      "repo": "D4Cluv-Train/dsh-plugin-manager",
      "description": "MVP dsh bundle plugin: proves it loaded by registering a /plugin-manager web route, logging, writing a marker file, and adding a sidebar '插件' button whose modal lists the user-installed plugins",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace",
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-plugin-manager"
    },
    {
      "name": "dsh-sentinel",
      "repo": "fuhefei/dsh-sentinel",
      "description": "DSH 哨兵：条件驱动的 agent 唤醒系统——文件/进程/端口/命令传感器，订阅存为会话事件，重启自动复活；每个订阅、每次触发对用户完全可见",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 6,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@dsh-external/dsh-sentinel"
    },
    {
      "name": "dsh-skills-viewer",
      "repo": "winterhuan/dsh-skills-viewer",
      "description": "Read-only Skills settings page plugin for DeepSeek Harness Web",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@winterchenhuan/dsh-skills-viewer"
    },
    {
      "name": "dsh-usage-dashboard",
      "repo": "Cassius0924/dsh-usage-dashboard",
      "description": "DeepSeek 额度与用量仪表盘 —— DSH (DeepSeek Harness) Web 插件：右下角悬浮余额窗 + 顶部栏「额度」tab（余额、逐天/逐小时用量柱状图、每日热力图、费用估算）",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-usage-dashboard"
    },
    {
      "name": "dsh-LAN",
      "repo": "MrMu666/dsh-LAN",
      "description": "DSH Web GUI LAN access plugin: bind 0.0.0.0, manage the firewall rule, and a password-gated /lanapi proxy that re-exposes loopback-pinned settings/credential operations to LAN browsers. UI toggle card",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities",
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-chatgpt-subscription",
      "repo": "Aa728848/dsh-chatgpt-subscription",
      "description": "DSH provider plugin for Codex access through a ChatGPT subscription.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models",
        "interop"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@eddyskywalker/dsh-chatgpt-subscription"
    },
    {
      "name": "dsh-remote-ssh",
      "repo": "Yan-Zero/dsh-remote-ssh",
      "description": "Transparent local and Remote SSH workspaces for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-remote-ssh"
    },
    {
      "name": "dsh-snapshot",
      "repo": "DfsyJian/dsh-snapshot",
      "description": "Snapshot every write/edit the agent makes, then roll back to any earlier state. Includes a browser half: sidebar snapshot timeline and plugin settings card.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents",
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-snapshot"
    },
    {
      "name": "dsh-plugin-qr-connect",
      "repo": "mervyn-teo/dsh-plugin-qr-connect",
      "description": "DeepSeek Harness (DSH) Web plugin: a QR-code button above Settings that lets phones connect to the web UI through an auth-gated reverse proxy.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-plugin-qr-connect"
    },
    {
      "name": "dsh-drop-file-to-path",
      "repo": "GLFzr/dsh-drop-file-to-path",
      "description": "Codex-style drag-drop for DSH web GUI: drag any file, it lands in ~/.dsh-dropbox, the absolute path text is inserted into the composer input. Hot-pluggable: install with `dsh plugin --profile web add",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities",
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-drop-file-to-path"
    },
    {
      "name": "dsh-feishu-gateway",
      "repo": "kriskwok/dsh-feishu-gateway",
      "description": "DeepSeek Harness-native Feishu (Lark) gateway: chat with the DSH agent from Feishu via long connection, with persistent sessions, /new, Markdown replies, and proactive push.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "channels",
        "memory"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@kriskwok/dsh-feishu-gateway"
    },
    {
      "name": "dsh-plugin-manager-kyorakuyk",
      "repo": "kyorakuyk/dsh-plugin-manager",
      "description": "Web UI plugin hot lifecycle for DeepSeek Harness: hot install / uninstall / update / enable-disable of profile plugin bundles without restart. Out-of-tree dual-face bundle: host gateway + browser sett",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace",
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@kyorakuyk/dsh-plugin-manager"
    },
    {
      "name": "dsh-s1",
      "repo": "superagents-lab/dsh-s1",
      "description": "Native s1 tools for the DeepSeek Harness (DSH), registered as first-class tools (s1_search, ...).",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents",
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-s1"
    },
    {
      "name": "loongport-dsh",
      "repo": "SailingLoong/loongport-dsh",
      "description": "LoongPort DeepSeek Harness (dsh) Cordis bundle and setup CLI",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "loongport"
    },
    {
      "name": "dsh-billing-nianpangzhi233",
      "repo": "nianpangzhi233/dsh-billing",
      "description": "DSH Web GUI 实时计费监控插件：实时统计本机模型调用用量与费用，按供应商/模型单价计费（DeepSeek v4 峰谷价），余额锚定、官方单价同步、低余额告警、账本 JSON 持久化。侧边栏余额 pill + 概览面板 + 设置页「计费」分段 + Agent 工具 billing_balance。热插拔：放入 profile node_modules 并在 dsh.profile.bund",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage",
        "agents"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-billing"
    },
    {
      "name": "dsh-eval-harness",
      "repo": "BiBoyang/dsh-eval-harness",
      "description": "DSH 插件回归评测门禁：yaml 用例 + headless 驱动 + trace 断言 + baseline 门禁（eval_run / eval_gate）",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "devtools"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-eval-harness"
    },
    {
      "name": "dsh-us-stocks",
      "repo": "Realyujie/dsh-us-stocks",
      "description": "DSH US stock market data plugin, powered by yahoo-finance2",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-us-stocks"
    },
    {
      "name": "dsh-usage-meter",
      "repo": "cute-baobao/dsh-usage-meter",
      "description": "Per-model hourly token usage for the DeepSeek Harness: automatic recording with a Web GUI dashboard.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage",
        "models"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@dsh-usage-meter/usage"
    },
    {
      "name": "dsh-AuthInOne",
      "repo": "Stormycry-cryp/dsh-AuthInOne",
      "description": "OpenAI Codex, Kimi Code, and compatibility Provider login, API/custom providers, model switching, token usage analytics, and cost tracking for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage",
        "models"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-auth-in-one"
    },
    {
      "name": "dsh-status-rotator",
      "repo": "01Virex/dsh-status-rotator",
      "description": "Rotates the DSH chat turn-status label (\"Deep diving...\") through user-defined phrases every few seconds.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 8,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-status-rotator"
    },
    {
      "name": "dsh-settings-plus",
      "repo": "oneinitAI/dsh-settings-plus",
      "description": "Advanced settings management plugin for DeepSeek Harness: form-level and file-level configuration editing with an open plugin registration SDK",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities",
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@oneinitai/dsh-settings-plus"
    },
    {
      "name": "adb_dsh_plugin",
      "repo": "mang0cola/adb_dsh_plugin",
      "description": "DeepSeek Harness tools for controlling Android devices through ADB",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "adb-dsh-plugin"
    },
    {
      "name": "dsh-balance-twotwopiggy",
      "repo": "TwotwoPiggy/dsh-balance",
      "description": "DeepSeek 余额实时显示插件: 在 dsh Web UI 输入框下方的统计条(命中率/输入输出 token 行)实时显示账户余额与本次对话的估算消耗",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 5,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-balance"
    },
    {
      "name": "dsh-shift-router",
      "repo": "green-dalii/dsh-shift-router",
      "description": "Two-tier model router for DeepSeek Harness — automatic execution/judgment routing with LLM Judge, multi-model fallback chains, and exponential-backoff runtime failover. A DSH adaptation of pi-shift-ro",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-shift-router"
    },
    {
      "name": "dsh-engine-switch",
      "repo": "Yuki-takuya-kun/dsh-engine-switch",
      "description": "A pure runtime that routes DeepSeek Harness sessions to pluggable loop engines by agent-preset. Ships no engine; downstream plugins register engines via ctx.engineSwitch.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory",
        "agents"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-engine-switch"
    },
    {
      "name": "dsh-tool-git-lxj808624",
      "repo": "lxj808624/dsh-tool-git",
      "description": "Structured, safe Git tool family for DeepSeek Harness: status/diff/log/branch/stage/commit/stash/show/fetch/pull/remote/checkout with a destructive-command guard.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "safety",
        "capabilities"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin",
      "repo": "Tabbit-Browser/dsh-plugin",
      "description": "DSH bundle that packages the Tabbit Browser skill and background installer",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "tabbit-browser"
    },
    {
      "name": "dsh-failure-capsule",
      "repo": "YiHarvest/dsh-failure-capsule",
      "description": "Local-first failure evidence capsules for DeepSeek Harness sessions",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-failure-capsule"
    },
    {
      "name": "dsh-docling",
      "repo": "Sqhao-O/dsh-docling",
      "description": "Native document intelligence for DeepSeek Harness, powered by Docling.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "knowledge"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-docling"
    },
    {
      "name": "dsh-img",
      "repo": "gmleong/dsh-img",
      "description": "Give text-only models eyes: an analyze_image tool for DeepSeek Harness, backed by free Chinese vision APIs (GLM-4V-Flash / Qwen-VL) or any OpenAI-compatible vision endpoint. 给纯文本模型装上眼睛。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision",
        "models"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-cluster",
      "repo": "Lanxi26/dsh-cluster",
      "description": "Cluster mode for DeepSeek Harness: canvas node-graph, multi-agent orchestration, and flow-constrained message routing",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@lanxi266/dsh-cluster-plugin"
    },
    {
      "name": "deepseek-harness-model-config",
      "repo": "MarvekG/deepseek-harness-model-config",
      "description": "Advanced per-model reasoning and capacity settings for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models",
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-models-config-plugin"
    },
    {
      "name": "dsh-music-plugin",
      "repo": "syy-shark/dsh-music-plugin",
      "description": "DeepSeek Harness music plugin. Play and control music inside DSH.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-music-plugin"
    },
    {
      "name": "dsh-subprocess-inherit-environment",
      "repo": "zhangzujian/dsh-subprocess-inherit-environment",
      "description": "DSH plugin that explicitly forwards the complete Harness environment through the subprocess service",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@zhangzujian/dsh-subprocess-inherit-environment"
    },
    {
      "name": "dsh-llm-wiki",
      "repo": "detpecca/dsh-llm-wiki",
      "description": "DeepSeek Harness plugin — manage an LLM-Wiki knowledge base from the agent: wiki_search / wiki_read / wiki_stats / wiki_validate / wiki_fix / wiki_errorbook / wiki_ingest",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models",
        "knowledge"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@detpecca/dsh-llm-wiki"
    },
    {
      "name": "dsh-prompt-stash",
      "repo": "Wine-Red/dsh-prompt-stash",
      "description": "Local, per-session prompt stash for DeepSeek Harness Web",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-prompt-stash"
    },
    {
      "name": "dsh-ultra-ui",
      "repo": "havingautism/dsh-ultra-ui",
      "description": "Codemini-inspired compact disclosure for every DSH Web Tool call",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@deepseek-ai/dsh-ultra-ui"
    },
    {
      "name": "dsh-deepresearch",
      "repo": "havingautism/dsh-deepresearch",
      "description": "Independent evidence-first research workflow with durable state and its own Web view",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "knowledge",
        "agents"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@deepseek-ai/dsh-deepresearch"
    },
    {
      "name": "dsh-notebooks",
      "repo": "havingautism/dsh-notebooks",
      "description": "Independent cross-session notebooks with model tools, typed Remote API, and Web view",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory",
        "models"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@deepseek-ai/dsh-notebooks"
    },
    {
      "name": "dsh-skill-hub",
      "repo": "cheshireez/dsh-skill-hub",
      "description": "In-GUI skill hub for DeepSeek Harness (dsh): browse the full local skill catalog from the official ctx.skills registry (every root + third-party providers), toggle skills on/off, inspect bodies, surfa",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-skill-hub"
    },
    {
      "name": "dsh-usage-ledger",
      "repo": "beijingwahw/dsh-usage-ledger",
      "description": "DSH token usage & cost ledger: per-session token/cost aggregation with dynamic DeepSeek official pricing (peak/off-peak aware) and daily/total budget control",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage",
        "memory"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-usage-ledger"
    },
    {
      "name": "dsh-worktree-paradoxsch",
      "repo": "paradoxSCH/dsh-worktree",
      "description": "Durable Git worktree isolation and delivery for DeepSeek Harness subagents",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents",
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-worktree"
    },
    {
      "name": "dsh-deepseek-status",
      "repo": "KekuKase/dsh-deepseek-status",
      "description": "DeepSeek Harness plugin: live DeepSeek official service status (status.deepseek.com) in the sidebar — overall status, component statuses, incidents, and uptime.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui",
        "observability"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-deepseek-status"
    },
    {
      "name": "dsh-deepseek-balance",
      "repo": "kyya/dsh-deepseek-balance",
      "description": "DeepSeek Harness 插件：在侧边栏实时展示 DeepSeek API 余额",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-deepseek-balance"
    },
    {
      "name": "dsh-attachments-lcylym",
      "repo": "LCYLYM/dsh-attachments",
      "description": "Multimedia WebUI input support for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-multimedia-webui-input"
    },
    {
      "name": "dsh-memory",
      "repo": "FuRongJun-1999/dsh-memory",
      "description": "灵枢（Lingshu·líng shū）DeepSeek Harness 插件：完整大脑——长期记忆/知识飞轮/自我认知/递归反思接入 DSH，对话自动沉淀进记忆库",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@furongjun1999/dsh-memory"
    },
    {
      "name": "dsh-output-styles",
      "repo": "PerryLink/dsh-output-styles",
      "description": "Claude Code outputStyles-equivalent runtime output-style switching for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "interop"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-output-styles"
    },
    {
      "name": "dsh-beacons",
      "repo": "Da-Mie/dsh-beacons",
      "description": "Codex/OpenChamber-style prompt-navigator rail with scroll-spy — a DeepSeek Harness plugin",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "interop"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-beacons"
    },
    {
      "name": "dsh-memento",
      "repo": "PerryLink/dsh-memento",
      "description": "Bounded, layered, approval-gated, auditable cross-session memory for DeepSeek Harness — a capability seam (ctx.memory service + local SQLite provider + memory tool + frozen snapshot injection), not an",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory",
        "safety"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-memento"
    },
    {
      "name": "dsh-image-bridge-kbpoyo",
      "repo": "kbpoyo/dsh-image-bridge",
      "description": "DSH Web plugin that lets text-only models see images: paste images in the chat and send without file paths; the model discovers its own vision tools. Multimodal models pass through natively.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision",
        "models"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@kbpoyo/dsh-image-bridge"
    },
    {
      "name": "oh-my-deepseek-harness",
      "repo": "YYTbit/oh-my-deepseek-harness",
      "description": "Multi-agent orchestration for DeepSeek Harness -- specialized agents, task orchestration, workflow skills",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14",
      "npm": "oh-my-deepseek-harness"
    },
    {
      "name": "dsh-permission-rules",
      "repo": "PerryLink/dsh-permission-rules",
      "description": "Declarative Claude Code-style permission rules for DeepSeek Harness: ordered allow/deny/ask rules with tool-name, argument (glob/regex), and workspace-path matching on the tools/pre-execute waterfall,",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "safety",
        "interop"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-permission-rules"
    },
    {
      "name": "dsh-vision-xiaoshihou514",
      "repo": "xiaoshihou514/dsh-vision",
      "description": "Local vision bridge for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision",
        "interop"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-passwords",
      "repo": "slywalker2006/dsh-passwords",
      "description": "dsh-passwords: a login gateway (password door) + dsh settings plugin for DeepSeek Harness web UI — first-run setup, SQLite auth with at-rest encryption, rate-limit, audit log, TLS + 80-to-443 redirect",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-passwords"
    },
    {
      "name": "dsh-pi",
      "repo": "TGYD-helige/dsh-pi",
      "description": "Run Pi extensions as agent-scoped DeepSeek Harness plugins",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-pi-host"
    },
    {
      "name": "dsh-utility-tools",
      "repo": "sharkymew/dsh-utility-tools",
      "description": "DSH 对话工具插件：拖拽任意文件附件（发送时暂存系统临时目录）+ 选中文本引用。支持静态挂载与动态加载。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-utility-tools"
    },
    {
      "name": "dsh-portable-tavern",
      "repo": "XCNXNXNX/dsh-portable-tavern",
      "description": "Portable Tavern for the DeepSeek Harness web GUI: an RPG-style SillyTavern V2/V3 character-card generator plus tavern roleplay chat, with world-book generation and JSON/PNG import-export.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-portable-tavern"
    },
    {
      "name": "dsh-mcp-manager",
      "repo": "fishlikewater/dsh-mcp-manager",
      "description": "MCP 服务器管理器：在 DSH 设置页配置 MCP 服务器，宿主侧按配置热挂载/卸载 mcp-client 实例",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@fishlikewater/dsh-mcp-manager"
    },
    {
      "name": "dsh-windows-tray",
      "repo": "GZMULDY/dsh-windows-tray",
      "description": "System-tray whale controller for DeepSeek Harness (Windows): Start / Stop / Restart the dsh web service and open the Web UI from a tray icon.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "terminal"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@gzmuldyxx/dsh-windows-tray"
    },
    {
      "name": "dsh-delete-session",
      "repo": "dream12347/dsh-delete-session",
      "description": "Delete DSH conversation sessions from a Settings panel. A host delete API plus a web client panel; no harness changes.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory",
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-delete-session"
    },
    {
      "name": "dsh-wikilink",
      "repo": "zhaoscsc/dsh-wikilink",
      "description": "Obsidian-style [[wikilink]] mentions for the DeepSeek Harness web GUI: type [[ in the composer to fuzzy-search note titles and attach their contents to the prompt",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "knowledge",
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-wikilink"
    },
    {
      "name": "dsh-rewind",
      "repo": "2501136589/dsh-rewind",
      "description": "Conversation rollback for the DeepSeek Harness: rewind a session to the prompt before a chosen turn (restore the files that turn changed) and continue in a fresh forked session.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory",
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@xiaoxin/dsh-rewind"
    },
    {
      "name": "deepseekharnessdesktop-vault",
      "repo": "feiyang-dev/deepseekharnessdesktop-vault",
      "description": "数据保险箱：为 DeepSeek Harness 提供自动备份、清空检测与一键恢复。自动备份 ~/.dsh 的聊天记录(sessions)、工作区数据(storages)、设置(settings.yaml)、凭据与 profile 配置到用户主目录 ~/.dsh-backups，检测数据被清空并支持按范围恢复与删除备份。设置页提供「备份管理」界面（Host+Client 双面插件）。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory",
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@feiyang666/deepseekharnessdesktop-vault"
    },
    {
      "name": "dsh-usage-plugin",
      "repo": "feiyang-dev/dsh-usage-plugin",
      "description": "DeepSeek Harness usage & cost tracker plugin: per-call token/cache-hit stats, peak/off-peak billing, DeepSeek balance query, CSV/JSON/PNG export with custom destination, and persistent local storage.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@feiyang666/deepseekharnessdesktop"
    },
    {
      "name": "dsh-same-mode-sandbox-noop",
      "repo": "zhangzujian/dsh-same-mode-sandbox-noop",
      "description": "DSH compatibility plugin that treats redundant non-escalating sandbox permission fields as a no-op",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "safety"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@zhangzujian/dsh-same-mode-sandbox-noop"
    },
    {
      "name": "dsh-edit-resend",
      "repo": "mbj733/dsh-edit-resend",
      "description": "DSH plugin: edit already-sent messages and resend (stop an in-flight reply, edit, resend), plus branch-based edit/reroll/retry and a version timeline.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-edit-resend"
    },
    {
      "name": "dsh-chatgpt-bridge",
      "repo": "jiezeng2004-design/dsh-chatgpt-bridge",
      "description": "MCP bridge: lets ChatGPT Web create, view, continue and control DeepSeek Harness (DSH) agent sessions through the official MCP protocol. The bridge only connects; DSH keeps its session, agent, tool, a",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory",
        "agents"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-chatgpt-bridge"
    },
    {
      "name": "dsh-fail-logger",
      "repo": "Areium/dsh-fail-logger",
      "description": "DSH 插件：全模式工具失败自动实录——把原生工具、PTC(Code Mode) run_code、代码内嵌工具调用的失败按错因去重计数，自动写入 skill 的机器维护区段，越用越少错。Auto-record tool failures from every execution mode into a skill's machine-maintained section (dedup + cou",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 6,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-fail-logger"
    },
    {
      "name": "dsh-balance-linshule",
      "repo": "linshule/dsh-balance",
      "description": "DeepSeek API 账户余额实时显示：左下角悬浮余额徽章（可拖拽）+ 设置页；Host 经 curl 调用官方余额接口，API Key 持久化在 ~/.dsh/ds-balance.json。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@linxin666/dsh-balance"
    },
    {
      "name": "dsh-honcho-memory",
      "repo": "kingcharleslzy-ai/dsh-honcho-memory",
      "description": "DSH plugin: honcho long-term memory tools (memory_store / memory_search) over a self-hosted Honcho v3 backend",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory",
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-honcho-memory"
    },
    {
      "name": "dsh-mod-manager",
      "repo": "HamSamMike/dsh-mod-manager",
      "description": "DSH Web profile 模组管理器：在设置页里开关第三方插件，通过改写 profile 的 cordis.patch.yml 并由 patch watcher 热生效，无需手动改文件、无需重启。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace",
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@dsh-external/dsh-mod-manager"
    },
    {
      "name": "dsh-oai-oauth",
      "repo": "werifu/dsh-oai-oauth",
      "description": "DSH LLM adapter plugin: use OpenAI ChatGPT subscription (GPT-5.6-Sol, GPT-5.5, ...) via OAuth — no API key. Reuses your local Codex CLI login.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models",
        "interop"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-oai-oauth"
    },
    {
      "name": "arcana",
      "repo": "GooodWei/arcana",
      "description": "Arcana — a draggable, collapsible, usage-sorted floating deck of every slash command in DeepSeek Harness: hover for details, click to run",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14",
      "npm": "arcana"
    },
    {
      "name": "dsh-skill-manager-sulfide2085",
      "repo": "sulfide2085/dsh-skill-manager",
      "description": "DSH 设置页技能管理器：展示全部已加载 skill（含调用策略/来源/状态），支持启用/停用热开关",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-skill-manager"
    },
    {
      "name": "upstream-radar",
      "repo": "MicroMilo/upstream-radar",
      "description": "Always-on vulnerability and breaking-change impact monitoring for DeepSeek Harness plugins.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "observability"
      ],
      "pushedAt": "2026-08-14",
      "npm": "upstream-radar"
    },
    {
      "name": "dsh-model-router-superboy911",
      "repo": "superboy911/dsh-model-router",
      "description": "Thin routing policy for DeepSeek Harness: keyword routing, allowlisted model switching, and isolated image generation. / DeepSeek Harness 薄路由策略：关键词路由、白名单模型切换和隔离生图。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision",
        "models"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@dsh-external/dsh-model-router"
    },
    {
      "name": "dsh-plugin-notify-pasumao",
      "repo": "Pasumao/dsh-plugin-notify",
      "description": "DeepSeek Harness (dsh) Windows notification plugin: a native toast when the agent stops running (finished / aborted / error / waiting for your choice / session closed), plus a system-tray icon. Pure h",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "notifications",
        "memory"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-notify"
    },
    {
      "name": "dsh-codex-tools",
      "repo": "SPYQWER1/dsh-codex-tools",
      "description": "Codex-backed web search, image generation, and image understanding tools for the DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision",
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-codex-tools"
    },
    {
      "name": "dsh-memoryhub",
      "repo": "solknight48/dsh-memoryhub",
      "description": "MemoryHub (mh) integration for DeepSeek Harness: loads .memoryhub checkpoint memory on session start, saves dsh sessions back into checkpoints, and registers the mh workflow skill and tools",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory",
        "agents"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-memoryhub"
    },
    {
      "name": "dsh-timeline",
      "repo": "zhangzheng25/dsh-timeline",
      "description": "Minimal session timeline for DeepSeek Harness: one dot per question, click to jump, hover to preview. 会话提问时间线：每条提问一个圆点，点击跳转，悬停预览。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory",
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-timeline"
    },
    {
      "name": "dsh-museai-tavern",
      "repo": "yejiming/dsh-museai-tavern",
      "description": "MuseAI tavern for the dsh web GUI: a MuseAI conversation-view tab (right of Trajectory) with background / chat / adventure / bond / settings pages ported from MuseAI, running entirely on models config",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models",
        "fun"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@yejiming/dsh-museai-tavern"
    },
    {
      "name": "dsh-web-enhanced",
      "repo": "banlanzs/dsh-web-enhanced",
      "description": "Web-enhanced plugin for DeepSeek Harness: task board with cron scheduling, git graph, preview/files/SCM right panel, and DeepSeek balance line",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage",
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-web-enhanced"
    },
    {
      "name": "dsh-sidebar-mode",
      "repo": "Meredith2328/dsh-sidebar-mode",
      "description": "把默认的四种模式切换塞进「新会话」按钮里，新会话创建更方便（与设置里的 Agent 预设双向同步）。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents",
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-sidebar-mode"
    },
    {
      "name": "dsh-sandbox-escalation-fix",
      "repo": "inmny/dsh-sandbox-escalation-fix",
      "description": "Normalize redundant same-mode sandbox escalation arguments in DeepSeek Harness tools",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "safety"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-plugin-sandbox-escalation-fix"
    },
    {
      "name": "dsh-web-billing",
      "repo": "bpc-oss/dsh-web-billing",
      "description": "RMB/USD token-billing plugin for DSH web: official-policy auto pricing (incl. peak/off-peak), per-message ledger, account balance, locale-driven currency display",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-web-billing"
    },
    {
      "name": "dsh-auto-model",
      "repo": "AL-spiritphoenix/dsh-auto-model",
      "description": "Auto model selection for DeepSeek Harness: routes each turn to V4 Flash or V4 Pro through a classifier call",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-auto-model"
    },
    {
      "name": "dsh-openviking",
      "repo": "Rxiain/dsh-openviking",
      "description": "OpenViking retrieval, resource management, auto-recall and session memory for DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory",
        "devtools"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-openviking"
    },
    {
      "name": "dsh-landscape",
      "repo": "cyanseek/dsh-landscape",
      "description": "Find DeepSeek Harness plugins, verify what they implement, and identify missing capabilities.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-landscape"
    },
    {
      "name": "dsh-drag-and-drop-bill9109",
      "repo": "bill9109/dsh-drag-and-drop",
      "description": "Drag local files into the DSH Web UI and insert their original filesystem paths without uploading or copying them",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 4,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@omdsh-dev/dsh-drag-and-drop"
    },
    {
      "name": "mnemon",
      "repo": "mnemon-dev/mnemon",
      "description": "Install the full dsh-mnemon integration from the Mnemon repository.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 431,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@mnemon-dev/dsh-mnemon"
    },
    {
      "name": "dsh-filelens",
      "repo": "Han-Yao94/dsh-filelens",
      "description": "FileLens — right-column file explorer for DeepSeek Harness: lazy directory tree, multi-format preview (Markdown/JSON/CSV/diff/log/hex/image), search & grep, tabs, inline editing with containment + ver",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision",
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-filelens"
    },
    {
      "name": "dsh-notify-sound",
      "repo": "xxxxxxxyu/dsh-notify-sound",
      "description": "DSH web plugin: plays a sound when the agent finishes replying (turn/end). Sound, volume and on/off are configurable in the Settings page.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "notifications",
        "agents"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-notify-sound"
    },
    {
      "name": "dsh-dynplugin-manager",
      "repo": "Thomas-key/dsh-dynplugin-manager",
      "description": "Manage DSH dynamic plugins (Dynamic Cordis Plugins): scan directories, browse, and load via /dynload slash command. Community gap — self-built.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "marketplace"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-dynplugin-manager"
    },
    {
      "name": "dsh-btw",
      "repo": "iyllyt/dsh-btw",
      "description": "Transient /btw side questions for DeepSeek Harness: immediate while the main agent is busy, context-sharing, tool-free, one-shot, cache-aware, and invisible to the main session catalog.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory",
        "agents"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-btw"
    },
    {
      "name": "dsh-mattpocock-skills",
      "repo": "xiaoxiaosrm/dsh-mattpocock-skills",
      "description": "DeepSeek Harness (DSH) bundle porting Matt Pocock's 'Engineering for Real Engineers' + 'Productivity' Claude-Code skills (SKILL.md set) into a native DSH skill plugin. Same skill bodies, DSH skill dis",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "interop"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@mattpocock-community/dsh-engineering-skills"
    },
    {
      "name": "dsh-whale-animation",
      "repo": "LeemanCheung/dsh-whale-animation",
      "description": "Persistent black whale-dive animation beside the DeepSeek Harness Web turn status.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "fun",
        "observability"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-whale-animation"
    },
    {
      "name": "dsh-tui",
      "repo": "tomowang/dsh-tui",
      "description": "Terminal front door for DeepSeek Harness (dsh): an out-of-tree TUI mode bundle over dsh-base",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "terminal"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@tomowang/dsh-tui"
    },
    {
      "name": "dsh-session-manager",
      "repo": "Vim0x3c/dsh-session-manager",
      "description": "Session management settings section for dsh web: resume, outline, and delete any session",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory",
        "marketplace"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-session-manager"
    },
    {
      "name": "iterate-plugin",
      "repo": "jingzhao-l/iterate-plugin",
      "description": "dsh plugin that turns the iterate skill into an autonomous closed-loop harness: plan -> parallel review xN -> atomic fixes -> validate -> loop -> auto-stop, plus a dry-run pure-review mode with multi",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "iterate-plugin"
    },
    {
      "name": "dsh-session-cleaner",
      "repo": "fountunt/dsh-session-cleaner",
      "description": "Delete DeepSeek Harness sessions from the running web runtime: live store detach, workspace records, and on-disk artifacts.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-session-cleaner"
    },
    {
      "name": "dsh-left-sidebar-collapse",
      "repo": "condaThinker/dsh-left-sidebar-collapse",
      "description": "Auto-collapse / fully-collapse the DSH left sidebar on session select, as a standalone installable plugin. General-settings toggles plus a single floating expand button.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory",
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-left-sidebar-collapse"
    },
    {
      "name": "dsh-livis-connector",
      "repo": "fyy99/dsh-livis-connector",
      "description": "Connect Livis to DeepSeek Harness with in-app authorization and relay management",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-livis-connector"
    },
    {
      "name": "dsh-llm-oauth",
      "repo": "ziyou979/dsh-llm-oauth",
      "description": "DeepSeek Harness plugin: OAuth / subscription-plan LLM providers (Grok, GitHub Copilot, OpenAI Codex, Anthropic, OpenRouter)",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models",
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-llm-oauth"
    },
    {
      "name": "dsh-task-dag",
      "repo": "LeemanCheung/dsh-task-dag",
      "description": "Persistent live DAG visualization for DeepSeek Harness subagents and workflows",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-task-dag"
    },
    {
      "name": "dsh-vision-plugin",
      "repo": "Xin-Zhang-IceMan/dsh-vision-plugin",
      "description": "dsh-vision-plugin: give DeepSeek Harness text-only models a pair of eyes — pasted images are transcribed by a vision model before they reach a text-only main model, plus the vision_analyze tool and a",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision",
        "models"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-vision-plugin"
    },
    {
      "name": "dsh-commit-review",
      "repo": "the-qian/dsh-commit-review",
      "description": "DSH plugin: /commit and /review slash commands mirroring Claude Code's built-in git workflow commands.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "agents",
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-commit-review"
    },
    {
      "name": "dsh-context-provenance",
      "repo": "030611/dsh-context-provenance",
      "description": "Observe-only provenance ledger over public DeepSeek Harness runtime evidence",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-context-provenance"
    },
    {
      "name": "dsh-web-default-session",
      "repo": "wjy9902/dsh-web-default-session",
      "description": "Maintains a default-directory workspace as the no-folder choice: the generic New Session action opens it, and the workspace picker lists it — no folder picking required to chat.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-web-default-session"
    },
    {
      "name": "dsh-workspace-search",
      "repo": "tsonglew/dsh-workspace-search",
      "description": "VS Code-style workspace keyword search tab for the dsh web GUI, registered into dsh-better-sidebar",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities",
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-workspace-search"
    },
    {
      "name": "dsh-plugin-device-info",
      "repo": "lsz-asd/dsh-plugin-device-info",
      "description": "DSH plugin exposing Windows device information tools — one tool per Win32 device category (time, system, cpu, memory, disk, gpu, network, battery, processes, usb, audio, printers). Read-only WMI/CIM +",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@huanlin/dsh-plugin-device-info"
    },
    {
      "name": "dsh-billing-glass",
      "repo": "linkingoscar/dsh-billing-glass",
      "description": "Liquid-glass billing overlay for the DeepSeek Harness Web GUI: provider balances, session cost, daily spend and token buckets. DeepSeek-first with an extensible provider registry.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage",
        "memory"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-billing-glass"
    },
    {
      "name": "dsh-attachment-formats",
      "repo": "linkingoscar/dsh-attachment-formats",
      "description": "Codex-style attachment format expansion for the DeepSeek Harness Web GUI: PDF text-layer extraction (pymupdf4llm / pdfjs), Office text extraction, long-document spill + index cards, scanned-PDF OCR (t",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models",
        "interop"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-attachment-formats"
    },
    {
      "name": "dsh-image-describe",
      "repo": "sd1g1/dsh-image-describe",
      "description": "DeepSeek Harness 宿主插件：让不支持图片输入的纯文本主模型也能\"看图\"（describe_image 工具 + 图片标记替换）",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@local/dsh-image-describe"
    },
    {
      "name": "dsh-reasoning-effort-hdbzq",
      "repo": "flyemFSB/dsh-reasoning-effort-hdbzq",
      "description": "DeepSeek Harness composer model seat: model picker plus a three-stop reasoning bar (小难梁 / 梁子 / 梁圣)",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models",
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-reasoning-effort-hdbzq"
    },
    {
      "name": "dsh-sci",
      "repo": "Blaczz/dsh-sci",
      "description": "Zero-dependency scientific computing tools for DeepSeek Harness: physical-unit conversion, CODATA physical constants, and Runge-Kutta ODE/dynamical-system simulation. No core changes.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-sci"
    },
    {
      "name": "dsh-reasoning-slider",
      "repo": "qjcnmd/dsh-reasoning-slider",
      "description": "Codex-style reasoning-effort slider embedded in the DSH model selector",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models",
        "interop"
      ],
      "pushedAt": "2026-08-14",
      "npm": "reasoning-slider"
    },
    {
      "name": "dsh-subagent-model",
      "repo": "Momojie-S/dsh-subagent-model",
      "description": "DSH 插件: 可按次指定模型路由的 subagent 委派工具（fork 自 @deepseek-ai/dsh-tool-subagent，最小 diff）",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models",
        "agents"
      ],
      "pushedAt": "2026-08-14",
      "npm": "@momojie-s/dsh-subagent-model"
    },
    {
      "name": "dsh-SkillsManagePlugins",
      "repo": "z-col/dsh-SkillsManagePlugins",
      "description": "DSH web plugin: visualize and manage your skills — user-level (~/.dsh/skills) and project-level (<root>/.dsh/skills) — with a full CRUD panel.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-zotero",
      "repo": "yuzh2001/dsh-zotero",
      "description": "在 DeepSeek Harness 中浏览、搜索并引用 Zotero 文献库：better-sidebar 右侧栏文件树、双击/& 与 /zotero 快速引用、host 直读 zotero.sqlite",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "knowledge",
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsa-zotero-sidebar"
    },
    {
      "name": "dsh-guardian",
      "repo": "cdxiaodong/dsh-guardian",
      "description": "Agent 安全护栏：拦截并审计所有工具调用，命中敏感操作就要求人工确认",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "safety",
        "agents"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-guardian"
    },
    {
      "name": "dsh-opencode-go-usage-kkishapppy",
      "repo": "kkishapppy/dsh-opencode-go-usage",
      "description": "OpenCode Go 订阅用量小部件：滚动/周/月用量百分比与重置倒计时，右下偏中悬浮显示（服务端代理 opencode.ai/zen/go/v1/usage + 浏览器小部件，key 不落浏览器）",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "usage"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-opencode-go-usage"
    },
    {
      "name": "dsh-session-repacker",
      "repo": "kkishapppy/dsh-session-repacker",
      "description": "会话日志 zstd 帧重打包：把逐批写入的成千上万个独立 zstd 帧合并为官方标准形态（头部帧 + 单事件帧），大幅降低旧会话打开时的解压开销；后台自动维护 + 独立 CLI 一键执行。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-session-repacker"
    },
    {
      "name": "dsh-tailscale-sync",
      "repo": "MoonGlassKitty/dsh-tailscale-sync",
      "description": "Zero-config Tailscale sync for DeepSeek Harness — expose the web GUI to your phone over an encrypted tunnel. 零配置：在手机上继续电脑端 DeepSeek Harness 的工作，自动探测 *.ts.net 域名。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-tailscale-sync"
    },
    {
      "name": "dsh-tool-somark",
      "repo": "saurtone/dsh-tool-somark",
      "description": "Model-facing SoMark document parser tool (somark_parse) for DeepSeek Harness",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "models"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-tool-somark"
    },
    {
      "name": "dsh-dynamic-plugin-manage",
      "repo": "wacly/dsh-dynamic-plugin-manage",
      "description": "Persist and replay dynamic Cordis plugins: export the current Session's dynamic plugins to a fixed directory, then selectively load them back after a restart — and browse/import them from a Web Settin",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "memory"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-dynamic-plugin-manager"
    },
    {
      "name": "dsh-plugin-cas-kb",
      "repo": "niuniu-869/dsh-plugin-cas-kb",
      "description": "DeepSeek Harness bundle: Chinese accounting standards (CAS / ASSE) and tax law lookup with article-level citations, plus a verification-discipline skill.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-plugin-cas-kb"
    },
    {
      "name": "dsh-multi-folder",
      "repo": "AngelosZou/dsh-multi-folder",
      "description": "DeepSeek Harness plugin: secondary working directories for a project. The agent keeps the primary workspace as cwd, gains equal write/exec permissions on configured secondary directories under workspa",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "safety",
        "agents"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-multi-folder"
    },
    {
      "name": "dsh-plugin-auditor",
      "repo": "HYY-King/dsh-plugin-auditor",
      "description": "DSH 插件审核器：在新插件加入 profile 前扫描组合兼容性——重复工具注册、entry id 冲突、peer 版本不匹配、记忆插件唯一性、渠道插件凭据，输出风险报告，预防启动崩溃。",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "devtools",
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-plugin-auditor"
    },
    {
      "name": "dsh-inline-images",
      "repo": "3403473060/dsh-inline-images",
      "description": "对话内联图片:LLM 回复中输出的本地图片路径直接在消息正文内渲染为图片,支持 9 种格式、点击放大灯箱、可调尺寸",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision",
        "models"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-inline-images"
    },
    {
      "name": "dsh-vision-primitives",
      "repo": "zouyuanqing/dsh-vision-primitives",
      "description": "Native interactive visual-reasoning plugin for DeepSeek Harness: precise pixel grounding (SOM grid, zoom, annotate, measure, diff, color, OCR) + MiMo V2.5 multimodal backend, with zero external MCP se",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-vision-primitives"
    },
    {
      "name": "dsh-vision-sjakdhasdh",
      "repo": "sjakdhasdh/dsh-vision",
      "description": "dsh-vision — a DeepSeek Harness plugin (tool template).",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision"
      ],
      "pushedAt": "2026-08-14"
    },
    {
      "name": "dsh-plugin-greet",
      "repo": "0lidaxiang/dsh-plugin-greet",
      "description": "A minimal greet tool plugin for DeepSeek Harness.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 3,
      "starsUpdated": "2026-08-14",
      "tags": [
        "ui"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-plugin-greet"
    },
    {
      "name": "dsh-web-open",
      "repo": "dawsondx/dsh-web-open",
      "description": "A DeepSeek Harness (dsh) bundle: when `dsh web` is ready, print the full GUI URL and open it in your default browser. Cross-platform, dependency-free, fail-safe.",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 2,
      "starsUpdated": "2026-08-14",
      "tags": [
        "capabilities"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-web-open"
    },
    {
      "name": "dsh-vision-bridge",
      "repo": "GXX182/dsh-vision-bridge",
      "description": "DeepSeek Harness plugin that bridges images to external vision APIs and returns text-only analysis",
      "category": "plugin",
      "official": false,
      "added": "2026-08-14",
      "lastVerified": "2026-08-14",
      "verifiedAgainst": "0.1.0-rc.6",
      "status": "verified",
      "stars": 1,
      "starsUpdated": "2026-08-14",
      "tags": [
        "vision",
        "interop"
      ],
      "pushedAt": "2026-08-14",
      "npm": "dsh-vision-bridge"
    }
  ]
};
