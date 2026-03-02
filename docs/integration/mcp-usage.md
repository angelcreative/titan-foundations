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

## Hard constraints (non-negotiable)

These rules exist to prevent LLM “panic fallbacks” (inventing HTML/CSS) when something is unclear or fails.

- **NEVER** replace `titan-compositions` / `titan-aria` / React Aria usage with bespoke HTML/CSS as a “fix”.
  - Raw HTML is allowed only for **structural wrappers** that have no Titan equivalent (e.g. `<main>`, `<section>`, grid wrappers), and must still be styled using Titan semantic tokens.
- If the UI request depends on knowing a Titan component API and the registry/docs are unavailable: **return `BLOCKER`** with the missing dependency/tooling needed. Do not guess.
- If something “seems unsupported” by Titan, do not decide by intuition. **Verify** against registry/docs and skills/patterns first.

## Failure playbook (when something doesn’t work)

If a Titan component does not render as expected, a prop seems missing, or behavior conflicts appear:

1. **Verify the API** (registry/docs in this repo or via MCP).
2. **Load the relevant anatomy/pattern** (skills + composition-patterns).
3. **Choose the Titan-native alternative** (example: sortable table headers → use `TitanTable` + `docs/skills/table-advanced.md`, not `TitanBorderlessTable`).
4. If still not possible, propose a **temporary `snowflake`** that follows `docs/integration/fallback-contract.md` (and includes exit criteria). Do not silently invent look & feel.

## Next.js App Router (client boundary)

When the consumer is a **Next.js App Router** project and uses `titan-compositions`, any file that imports from `titan-compositions` must be a **Client Component** (or only imported from one). Otherwise the app can throw `createContext is not a function` because react-aria uses client-only APIs.

- When **setting up** or **generating** layout/pages that use Titan in Next.js: add **`"use client"`** at the top of the file that imports Titan, or create a **client shell** component (e.g. `TitanAppShell.tsx` with `"use client"`) that imports Titan and have the layout import only that shell.
- Do **not** use `next/dynamic(..., { ssr: false })` inside Server Components (e.g. `app/page.tsx`). If needed, create a `"use client"` wrapper that owns the `dynamic()` call and import that wrapper from the Server Component.
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

Vertical spacing (mandatory):
- Breadcrumb must have margin-bottom (e.g. var(--spacing-m) or var(--layout-grid-gap)) so it does not stick to the content below.
- Card grids must have vertical gap: TitanCardGrid uses --layout-grid-gap for row and column gap. If you stack multiple TitanCardGrid rows (or breadcrumb + grid), wrap them in a container with display: flex; flex-direction: column; gap: var(--layout-grid-gap). Never leave breadcrumb or card rows with no vertical spacing.
```

### Layout with sidebar (scroll rules — mandatory)

When the layout includes a **sidebar** (appLayoutWithSidebar in composition-patterns.json):

1. **Sidebar does NOT scroll** — It is fixed on the left, full height. It must never scroll or go under the navbar.
2. **Breadcrumb does NOT scroll** — Place the breadcrumb above the scrollable main area with `flexShrink: 0` and margin-bottom; only the main content below it scrolls.
3. **Only the main content area scrolls** — The right column structure: Navbar (fixed) → Breadcrumb (fixed, no scroll) → `<main style={{ flex: 1, overflow: 'auto', minHeight: 0 }}>`. The right column wrapper must have `overflow: hidden` so only `<main>` scrolls.

Use the exact structure from `appLayoutWithSidebar` in composition-patterns.json (right column: overflow hidden; main: flex 1, overflow auto, minHeight 0).

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
- **Non-link text (titles, labels, body, counts, deltas):** Use **typography tokens only** (steel / hades: `--text-title`, `--copy-slot-title`, `--copy-slot-body`, `--copy-slot-secondary`, `--copy-slot-muted`). **Never** use theme color (e.g. ocean, blueberry) for non-link text. **Theme color is only for links** (and button/tab active states).
- **Positive delta (e.g. +3%):** Always `--color-aquamarine-600` or `--color-aquamarine-700`. Never theme color.
- **Negative delta (e.g. -2%):** Use `--text-error-primary`.
- **Secondary/muted text** (counts, “Showing X–Y of Z”, descriptions): use `color: var(--copy-slot-secondary)` or `var(--copy-slot-muted)`; there is **no** `.copy-secondary` CSS class in Titan.
- **Tables:** Standalone table (not inside a UI card) **never** has a card wrapper or border; it floats, full width. Table inside a card: the card is the container; do not add an extra wrapper. **TitanBorderlessTable** column config: use **`key`** (not `id`) for each column; cell keys are `${row.id}-${column.key}` — wrong key causes "undefined" and duplicate keys.

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
