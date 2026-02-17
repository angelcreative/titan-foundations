# MCP Usage (Cursor + Titan)

This is the practical usage contract so you can request interfaces and get consistent Titan outputs.

## What MCP should do by default

1. Build requested components from `react-aria-components`.
2. Apply Titan semantic tokens/foundations for visuals.
3. Reuse `titan-aria` wrappers when they fit and avoid rework.
4. Reuse `titan-compositions` when available (import-first).
5. Use `lucide-react` for icons with Titan token-driven size/color.

## Import-first policy (mandatory)

Before generating JSX/CSS from scratch:

1. Try to import from `titan-compositions`.
2. If component exists there, **do not** recreate it.
3. If component does not exist, then fallback to `titan-aria`/React Aria + tokens.
4. If required package/component is missing in the consumer project, return `BLOCKER` with install steps.

This prevents drift and keeps output aligned with validated Titan compositions.

## Ready-to-use prompts

### Generic UI request

```text
Create this UI with Titan rules:
- Import-first: reuse titan-compositions components if they exist.
- Use react-aria-components as base behavior/accessibility layer.
- Paint with Titan tokens/foundations from this repo.
- Reuse titan-aria wrappers if already available and appropriate.
- Use lucide-react for icons with token-based size/color.
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

## Sources of truth

- Policy: `docs/integration/decision-policy.md`
- Inventory: `docs/integration/component-inventory.md`
- Fallback contract: `docs/integration/fallback-contract.md`
