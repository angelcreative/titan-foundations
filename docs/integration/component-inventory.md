# Component Inventory (Hybrid Aria Model)

This inventory is the decision baseline to avoid two active sources of truth.

## Status model

- `AriaBase`: built with `react-aria-components` + Titan tokens/foundations.
- `TitanAriaWrapper`: built using wrapper(s) from `packages/titan-aria` over the same Aria/token contract.
- `SnowflakeFallback`: temporary implementation that still needs normalization.
- `FoundationOnlySpec`: spec/guideline only, not a productized runtime component.

## Repo-focused inventory

| Item | Current source in this repo | Target status | Decision now |
| --- | --- | --- | --- |
| Navbar | `foundations/navbar.json`, `docs/logos-and-navbar.md`, `.cursor/rules/navbar-logos.mdc` | `AriaBase` | Keep as active operational pattern with strict structure and theme logo mapping. |
| Button | `foundations/button.json`, `docs/button.md`, `.cursor/rules/button.mdc` | `AriaBase` | Keep button/icon/destructive hierarchy aligned to PDF contract. |
| Dialog | `foundations/dialog.json`, `docs/dialog.md`, `.cursor/rules/dialog.mdc` | `AriaBase` | Keep modal contract with optional illustration and strict a11y behavior. |
| Breadcrumb | `foundations/breadcrumb.json`, `docs/breadcrumb.md`, `.cursor/rules/breadcrumb.mdc` | `AriaBase` | Keep hierarchical navigation semantics and overflow rules consistent. |
| Tabs | `foundations/tabs.json`, `docs/tabs.md`, `.cursor/rules/tabs.mdc` | `AriaBase` | Keep tablist semantics, single-selection and responsive overflow behavior. |
| Pagination | `foundations/pagination.json`, `docs/pagination.md`, `.cursor/rules/pagination.mdc` | `AriaBase` | Keep paging semantics, single current page, and state clarity across dense and regular layouts. |
| Drawer | `foundations/drawer.json`, `docs/drawer.md`, React Aria structure in `titan-aria` usage paths | `AriaBase` | Build with React Aria + Titan tokens; keep overlay behavior and state coverage. |
| Menu | `foundations/menu.json`, `docs/menu-and-select.md`, `.cursor/rules/menu-and-select.mdc` | `AriaBase` | Keep React Aria structure and Titan token contract as primary. |
| Select | `foundations/select.json`, `docs/menu-and-select.md`, `.cursor/rules/menu-and-select.mdc` | `AriaBase` | Keep React Aria structure and Titan token contract as primary. |
| Grid/layout system | `foundations/grid.json`, `docs/grid.md`, `foundations/template.json` | `FoundationOnlySpec` | Keep as cross-cutting layout foundation. |
| Table borderless pattern | `foundations/table-borderless.json`, `docs/table-borderless.md` | `FoundationOnlySpec` | Keep as optional borderless data-table pattern. |
| Copy and links conventions | `foundations/copy-and-links.json`, `docs/copy-and-links.md` | `FoundationOnlySpec` | Keep as semantic writing/styling convention. |
| Icons | `lucide-react` + Titan tokens | `AriaBase` | Use Lucide with token-driven color/size consistently. |

## Supporting inventory (`titan-aria` package)

Current direct wrappers in `packages/titan-aria/src`:

- `Button`
- `Card`, `CardHeader`, `CardBody`, `CardActions`
- `Icon`

All other primitives are re-exported from `react-aria-components` through `packages/titan-aria/src/index.ts`.

## Active artifacts to track

Track these operational files in each audit cycle to ensure they stay aligned:

- Navbar: `foundations/navbar.json`, `docs/logos-and-navbar.md`, `.cursor/rules/navbar-logos.mdc`
- Button: `foundations/button.json`, `docs/button.md`, `.cursor/rules/button.mdc`
- Dialog: `foundations/dialog.json`, `docs/dialog.md`, `.cursor/rules/dialog.mdc`
- Breadcrumb: `foundations/breadcrumb.json`, `docs/breadcrumb.md`, `.cursor/rules/breadcrumb.mdc`
- Tabs: `foundations/tabs.json`, `docs/tabs.md`, `.cursor/rules/tabs.mdc`
- Pagination: `foundations/pagination.json`, `docs/pagination.md`, `.cursor/rules/pagination.mdc`
- Menu: `foundations/menu.json`, `docs/menu-and-select.md`, `.cursor/rules/menu-and-select.mdc`
- Select: `foundations/select.json`, `docs/menu-and-select.md`, `.cursor/rules/menu-and-select.mdc`

## Audit cadence

Run this inventory update after each integration cycle:

1. Review `AriaBase` vs `TitanAriaWrapper` usage by component.
2. Reduce `SnowflakeFallback` entries with explicit normalization tasks.
3. Record migration notes and next review date.
