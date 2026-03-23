# Titan DS Architecture and Workflow

This document explains, in operational terms, how the Titan system works today across:

- `titan-foundations` (source repository),
- `mcp-remote-worker` (Titan MCP server),
- `titan-compositions` (runtime npm package),
- IDE/AI tools (Cursor, Claude Code, v0, Figma Make).

Use this as the onboarding and day-to-day reference for developers and AI-assisted UI generation.

---

## 1) System map (what exists and where)

| Layer | Location | Purpose |
|---|---|---|
| Source of truth | `titan-foundations` repo | Tokens, themes, docs, contracts, composition source code |
| Runtime package | npm package `titan-compositions` | Components + CSS consumed by product apps |
| Remote AI server | `mcp-remote-worker` (Cloudflare Worker) | Exposes Titan MCP tools for discovery, theme/bootstrap, validation, setup |
| Registry/pattern data | `docs/integration/component-registry.json` and `docs/integration/composition-patterns.json` | Machine-readable data used by MCP tools |
| Skills (repo-side) | `titan-foundations/.claude/skills/titan-foundations/SKILL.md` | Guidance for editing the DS repository itself |
| Skills (worker-side) | `mcp-remote-worker/.cursor/skills/titan-ds/*.md` + embedded `SKILL_FILES` in worker code | Guidance delivered to consumer environments through `titan_setup` |

High-level flow:

1. Developers maintain DS assets in `titan-foundations`.
2. `titan-compositions` is built/published from there.
3. The MCP worker fetches Titan metadata from GitHub raw/CDN and serves tooling to AI clients.
4. Apps use `titan-compositions` at runtime; AI uses MCP for discovery/validation/orchestration.

---

## 2) What is in `titan-foundations` today

Core areas:

- `tokens/foundations/`: primitive token JSON (spacing, typography, borders, elevation, colors).
- `tokens/themes/`: theme CSS (`_insights.css`, `_brand.css`, etc.).
- `tokens/css/titan.css`: consolidated token output used in apps.
- `packages/titan-compositions/`: React component compositions + package build outputs.
- `component-specs/`: machine-readable component contracts.
- `docs/anatomies/`: reusable UI anatomy patterns for LLM mapping.
- `docs/integration/component-registry.json`: component catalog for MCP.
- `docs/integration/composition-patterns.json`: JSX composition recipes for MCP.
- `docs/integration/*`: operational policies (ownership, usage, fallbacks).
- `AGENTS.md`: mandatory global execution order for Titan work.

Repository skill (for contributors editing this repo):

- `titan-foundations/.claude/skills/titan-foundations/SKILL.md`
- Scope: navigation order, contracts/anatomy lookup, Titan-only rules inside the DS repo.

---

## 3) What is in `mcp-remote-worker` today

The worker is a Cloudflare Worker MCP server that exposes Titan tools and policy.

### 3.1 Runtime behavior

- Worker version is declared in code (`WORKER_VERSION` in `mcp-remote-worker/src/index.ts`).
- Data is fetched from:
  - `https://raw.githubusercontent.com/angelcreative/titan-foundations/main/...`
  - `https://cdn.jsdelivr.net/gh/angelcreative/titan-foundations@main/...`
- It is stateless from a product-data perspective and hydrates Titan metadata via `titan_syncFromGithub`.

### 3.2 Supported themes in code

`insights` (default), `neutral`, `default`, `audiense`, `demand`, `linkedin`, `tweetbinder`, `brand`.

### 3.3 MCP tools exposed

- `titan_setup`
- `titan_syncFromGithub`
- `titan_getTheme`
- `titan_getOverview`
- `titan_getComponentRegistry`
- `titan_getCompositionPattern`
- `titan_validateAndRewrite`
- `titan_getFoundations`
- `titan_getDesignQualityGuidelines`

Dot-style aliases are normalized (for example `titan.getTheme` -> `titan_getTheme`).

### 3.4 Worker skills model (important)

Worker-side Titan skill content exists in two places:

1. Markdown files under `mcp-remote-worker/.cursor/skills/titan-ds/`
2. Embedded strings in `SKILL_FILES` inside `mcp-remote-worker/src/index.ts` (used by `titan_setup`)

These two should stay aligned. If only one side is updated, consumers can receive stale guidance.

---

## 4) `titan-compositions` npm package (what consumers get)

From `packages/titan-compositions/package.json`:

- Name: `titan-compositions`
- Current version in repo: `0.1.26`
- Exports:
  - `titan-compositions` (JS + types)
  - `titan-compositions/styles` (CSS)
- Build output is in `dist/` (CJS, ESM, d.ts, CSS)
- Peer dependencies include:
  - `react`
  - `react-dom`
  - `react-aria-components`
  - `@internationalized/date`
  - `lucide-react`
  - `@tabler/icons-react`

Operational rule: **import-first**.  
If a component exists in `titan-compositions`, do not re-create it with custom markup/CSS.

---

## 5) Registry and pattern data (and how AI uses them)

### 5.1 Component registry

File: `docs/integration/component-registry.json`

Contains:

- package/css metadata
- peer dependency hints
- component entries (import, props, slots, category, composability)
- coverage map (`covered` vs `fallbackToReactAria`)

Used by: `titan_getComponentRegistry`

### 5.2 Composition patterns

File: `docs/integration/composition-patterns.json`

Contains:

- layout/page/card/dialog/form/micro patterns
- pattern IDs, descriptions, Titan components used
- JSX templates and known gaps

Used by: `titan_getCompositionPattern`

### 5.3 AI execution contract

Expected order for AI-assisted UI generation:

1. `titan_getTheme` + `titan_getFoundations`
2. `titan_getComponentRegistry`
3. `titan_getCompositionPattern`
4. Implement with `titan-compositions` import-first
5. `titan_validateAndRewrite`

If registry and installed package disagree, verify local package exports before fallback.

---

## 6) How repo and worker work together

### 6.1 Ownership split

- `titan-foundations` owns source code, docs, registry JSON, patterns JSON.
- `mcp-remote-worker` owns remote tooling behavior and setup responses.

### 6.2 Practical interaction

- Worker fetches DS metadata from `titan-foundations`.
- Worker serves MCP tools to AI clients.
- Apps run using npm/runtime artifacts (`titan-compositions` + token CSS/theme CSS).
- MCP does not replace your filesystem/workspace; it augments discovery, setup, and validation.

### 6.3 Deployment implications

- DS code/docs changes: commit/push in `titan-foundations`.
- MCP behavior/embedded skill changes: deploy `mcp-remote-worker` (`wrangler deploy`).
- Runtime availability for external apps via npm: publish `titan-compositions`.

---

## 7) Skills inventory and purpose

### 7.1 Repo skill (`titan-foundations`)

- File: `.claude/skills/titan-foundations/SKILL.md`
- Purpose: guide contributors editing DS internals (tokens/specs/anatomies/compositions)
- Audience: maintainers working inside `titan-foundations`

### 7.2 Worker skills (`titan-ds`)

Files under `mcp-remote-worker/.cursor/skills/titan-ds/`:

- `SKILL.md`: architecture + generation workflow
- `THEME_GUIDE.md`: themes, load order, typography, brand rules
- `BOOTSTRAP.md`: setup snippets and required packages
- `VALIDATION_RULES.md`: rewrite/validation constraints
- `SEMANTIC_TOKENS.md`: semantic token categories
- `FOUNDATIONS.md`: foundation token files and usage
- `COMPONENT_REGISTRY.md`: import-first and registry usage
- `COMPOSITION_PATTERNS.md`: pattern retrieval and application

Purpose: guide AI when consuming Titan in external apps through MCP-assisted setup.

---

## 8) MCP usage by environment

## 8.1 Cursor and Claude Code (persistent local workspace)

Recommended model:

- Open the workspace root (especially for monorepos).
- Install dependencies once at root.
- Keep apps in `apps/*` (or equivalent) with their own `package.json`.
- Reuse the same workspace; do not reinstall on every chat/session.

MCP role:

- use tools for discovery, theme/bootstrap guidance, and validation
- implement using project files and installed runtime package

### 8.2 One-time install + multi-app runtime pattern

This pattern is valid and recommended:

1. Create root folder (any name).
2. Configure workspaces (pnpm/npm/yarn).
3. Install once in root.
4. Create/use multiple app folders under `apps/*`.
5. AI works from root context and can operate across apps.

`titan_setup` helps with command + skill content; it does not create monorepo structure for you.

### 8.3 v0 and Figma Make (ephemeral/hosted contexts)

- Use `titan_setup` with `target: "make"`.
- In this target, no `.cursor`/`.claude` skill files are expected to be written.
- Repeated installs are normal in ephemeral environments.
- Keep implementation import-first with `titan-compositions`.

### 8.4 Figma (design tooling context)

- Use Titan MCP as policy/reference source (themes, tokens, component availability, patterns).
- Keep design generation aligned with Titan tokens/theme and composition semantics.
- When environment does not persist local files, treat it like ephemeral setup.

---

## 9) Required packages for Titan UI generation

Baseline install command used by `titan_setup`:

```bash
npm install titan-compositions react-aria-components lucide-react @tabler/icons-react
```

Why these:

- `titan-compositions`: runtime component library
- `react-aria-components`: accessibility/behavior foundation
- `lucide-react` and `@tabler/icons-react`: fallback icon catalogs when Titan official icon is unavailable

---

## 10) CSS/theme bootstrap contract

Mandatory load order:

1. Google Fonts (Poppins)
2. `tokens/css/titan.css`
3. Active theme CSS (`tokens/themes/_<theme>.css`)
4. `titan-compositions/styles`
5. `<html data-theme="<theme>">`

References:

- `docs/integration/mcp-usage.md`
- worker skill `THEME_GUIDE.md`
- worker skill `BOOTSTRAP.md`

---

## 11) How to instruct each tool to use Titan MCP reliably

Use explicit wording. Avoid plain "Titan" alone.

Base instruction:

```text
Use Audiense Titan Design System with Titan MCP.
Implement UI with React + titan-compositions (import-first), react-aria-components behavior, and Titan semantic tokens from titan-foundations.
No hardcoded hex/rgb. Use titan_getTheme, titan_getFoundations, titan_getComponentRegistry, titan_getCompositionPattern, and titan_validateAndRewrite.
```

Environment-specific add-ons:

- Cursor/Claude: "Workspace root is the monorepo root; dependencies are already installed."
- v0/Figma Make: "Use `titan_setup` target `make`; treat environment as ephemeral."
- All: "If component exists in titan-compositions, do not recreate custom HTML/CSS."

---

## 12) Deployment and release checklist

Use this to decide what to ship:

1. `titan-foundations` changes only -> commit/push `titan-foundations`
2. Need apps consuming npm to receive runtime changes -> publish `titan-compositions`
3. Worker tool behavior/embedded skill updates -> deploy `mcp-remote-worker`

These are independent levers and should be executed based on the change scope.

---

## 13) Related references

- `docs/README.md`
- `docs/integration/mcp-usage.md`
- `docs/integration/decision-policy.md`
- `AGENTS.md`
- `.claude/skills/titan-foundations/SKILL.md`
- `mcp-remote-worker/.cursor/skills/titan-ds/*.md`

---

Last updated: architecture/workflow rewrite focused on operational clarity for developers and AI tooling.
