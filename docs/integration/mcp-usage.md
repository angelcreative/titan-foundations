# MCP Usage (Cursor + Titan)

This is the practical usage contract so you can request interfaces and get consistent Titan outputs.

## What MCP should do by default

1. Build requested components from `react-aria-components`.
2. Apply Titan semantic tokens/foundations for visuals.
3. Reuse `titan-aria` wrappers when they fit and avoid rework.
4. Reuse `titan-compositions` when available (import-first).
5. Use **lucide-react** for icons first, then **@tabler/icons-react** as fallback; Titan token-driven size/color.

## Import-first policy (mandatory)

Before generating JSX/CSS from scratch:

1. Try to import from `titan-compositions`.
2. If component exists there, **do not** recreate it.
3. If component does not exist, then fallback to `titan-aria`/React Aria + tokens.
4. If required package/component is missing in the consumer project, return `BLOCKER` with install steps.

This prevents drift and keeps output aligned with validated Titan compositions.

## Next.js App Router (client boundary)

When the consumer is a **Next.js App Router** project and uses `titan-compositions`, any file that imports from `titan-compositions` must be a **Client Component** (or only imported from one). Otherwise the app can throw `createContext is not a function` because react-aria uses client-only APIs.

- When **setting up** or **generating** layout/pages that use Titan in Next.js: add **`"use client"`** at the top of the file that imports Titan, or create a **client shell** component (e.g. `TitanAppShell.tsx` with `"use client"`) that imports Titan and have the layout import only that shell.
- Full patterns and rationale: **`docs/integration/nextjs-app-router.md`**.

For Vite, CRA, Remix, etc., this is not required; adding `"use client"` there is harmless.

## Ready-to-use prompts

### Generic UI request

```text
Create this UI with Titan rules:
- Import-first: reuse titan-compositions components if they exist.
- Use react-aria-components as base behavior/accessibility layer.
- Paint with Titan tokens/foundations from this repo.
- Reuse titan-aria wrappers if already available and appropriate.
- Use lucide-react first, then @tabler/icons-react for icons; token-based size/color.
- Do not create two active implementations of the same component.
```

### Layout request (navbar + breadcrumb + 2/4 + 2/4 + 4/4)

```text
Build this layout with import-first policy:
- Navbar
- Breadcrumb
- Content grid: two cards 2/4 + 2/4, then one card 4/4 below

Rules:
- Reuse titan-compositions components (TitanNavbar, TitanBreadcrumb, TitanCardGrid/TitanCard, TitanTwoUpOneDownLayout).
- If these components exist, do not regenerate equivalent markup/CSS.
- Use TitanBorderlessTable for table content when requested.
- Fallback to Aria/tokens only if composition is missing.
```

### Navbar request

```text
Build page shell with navbar:
- Implement navbar with React Aria/titan-aria + tokens.
- Use foundations/navbar.json + docs/logos-and-navbar.md as the required structural contract.
- Keep exact icon policy and theme logo mapping.
```

### Menu/Select request

```text
Build filters area with Menu and Select:
- Use React Aria/titan-aria structure for Menu and Select.
- Use foundations/menu.json and foundations/select.json as operational token/structure contract.
- Keep tokens/theme behavior aligned with titan.css + active theme.
```

### Exploratory component request

```text
Create a new exploratory component pattern:
- Build with React Aria + Titan semantic tokens.
- Mark output as snowflake fallback (temporary).
- Keep empty/loading/error/success states and accessibility parity.
```

## Theme and style invariants

- Load order: `titan.css` -> one theme file -> component styles.
- Set `<html data-theme="...">`.
- Use semantic Titan tokens; avoid hardcoded brand values.
- **Secondary/muted text** (counts, “Showing X–Y of Z”, descriptions): use `color: var(--copy-slot-secondary)` or `var(--copy-slot-muted)`; there is **no** `.copy-secondary` CSS class in Titan.

## Using UI anatomy skills (how the LLM knows what to use)

When building or changing UI (with or without MCP), the LLM should **resolve user intent to a Titan UI anatomy skill** and **follow that skill** so output matches the common patterns.

1. **Resolve intent → skill file**  
   Use the index and mapping in **`docs/skills/README.md`** (section “How the LLM (or MCP) should choose a skill”). Examples:
   - “Segment card”, “donut + keywords”, “affinities” → `docs/skills/audience-segment-card.md`
   - “Comparison bars”, “Bio vs baseline”, “show full table” → `docs/skills/comparison-bar-cards.md`
   - “Sortable table”, “table with column sort” → `docs/skills/table-advanced.md`
   - “Drawer”, “panel that opens from the side” → `docs/drawer.md`

2. **Load the skill**  
   - **Without MCP:** Read the chosen file from the repo (e.g. `docs/skills/audience-segment-card.md`).
   - **With MCP:** If the Titan worker exposes a “get skill” (or similar) tool, call it with the pattern name (e.g. `audience-segment-card`) and use the returned text as the anatomy to follow.

3. **Generate from the anatomy**  
   Follow the skill’s sections (Anatomy, Titan usage, Implementation notes) and the import-first policy. Do not invent a different layout or component set.

If the consumer exposes **list_skills** / **get_skill** via MCP, the LLM should call **list_skills** when the request is generic (e.g. “add a card”) to choose a pattern, then **get_skill(name)** to load the full anatomy before generating.

## Sources of truth

- **UI patterns (skills):** `docs/skills/README.md` (index) + `docs/skills/*.md` (anatomy files).
- Policy: `docs/integration/decision-policy.md`
- Inventory: `docs/integration/component-inventory.md`
- Fallback contract: `docs/integration/fallback-contract.md`
