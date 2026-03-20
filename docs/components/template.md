# Page Template (navbar + content)

When a user asks for a **template** or **layout**, build a **full-width navbar** with a **centered content area** below it, max width 1920px (responsive 1440/1280), ready for a 16-column grid.

## Structure

1. **Navbar** — implement according to `component-specs/navbar.json` (source of truth: `titan-comp-doc/navbar.pdf`): 100% width, Change Product + ring/product lockup on the left, neutral icon buttons + avatar + menu chevron on the right.
2. **Content container** — centered (`margin: 0 auto`), `max-width: var(--layout-content-max-width)`, horizontal padding `var(--layout-content-pad-x)`, and 16-column grid inside (`docs/components/grid.md`).
3. **Sidebar (if requested)** — floating behavior (overlay or independent column) without pushing main content beyond 1920px.
4. **Drawer** — overlay layer; it does not change page content width.

## Tokens

| Token | Use |
|-------|-----|
| `--layout-navbar-width` | 100% |
| `--layout-content-max-width` | 1920px |
| `--layout-content-max-width-md` | 1440px |
| `--layout-content-max-width-sm` | 1280px |
| `--layout-content-pad-x` | Horizontal content padding |

## Responsive

- Up to 1440px: use `--layout-content-max-width-md`
- Up to 1280px: use `--layout-content-max-width-sm`

## When to apply

Use this template when the request includes: **template**, **layout**, or equivalent.

Spec: `component-specs/template.json`.
