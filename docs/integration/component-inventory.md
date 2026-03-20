# Component Inventory (Hybrid Aria Model)

This inventory is the decision baseline to avoid two active sources of truth.

Reference note: MCP runtime generation uses `titan-compositions`. For components that also exist in the official baseline, compositions are expected to be a faithful mirror.
Validation note: parity sign-off is tracked in `docs/integration/parity-qa-matrix.md`.

## Status model

- `AriaBase`: built with `react-aria-components` + Titan tokens/foundations.
- `TitanAriaWrapper`: built using wrapper(s) from `packages/titan-aria` over the same Aria/token contract.
- `SnowflakeFallback`: temporary implementation that still needs normalization.
- `FoundationOnlySpec`: spec/guideline only, not a productized runtime component.

## Repo-focused inventory

| Item | Current source in this repo | Target status | Decision now |
| --- | --- | --- | --- |
| Navbar | `component-specs/navbar.json`, `docs/components/logos-and-navbar.md`, `.cursor/rules/navbar-logos.mdc` | `AriaBase` | Keep as active operational pattern with strict structure and theme logo mapping. |
| Button | `component-specs/button.json`, `docs/components/button.md`, `.cursor/rules/button.mdc` | `AriaBase` | Keep button/icon/destructive hierarchy aligned to PDF contract. |
| Dialog | `component-specs/dialog.json`, `docs/components/dialog.md`, `.cursor/rules/dialog.mdc` | `AriaBase` | Keep modal contract with optional illustration and strict a11y behavior. |
| Breadcrumb | `component-specs/breadcrumb.json`, `docs/components/breadcrumb.md`, `.cursor/rules/breadcrumb.mdc` | `AriaBase` | Keep hierarchical navigation semantics and overflow rules consistent. |
| Tabs | `component-specs/tabs.json`, `docs/components/tabs.md`, `.cursor/rules/tabs.mdc` | `AriaBase` | Keep tablist semantics, single-selection and responsive overflow behavior. |
| Pagination | `component-specs/pagination.json`, `docs/components/pagination.md`, `.cursor/rules/pagination.mdc` | `AriaBase` | Keep paging semantics, single current page, and state clarity across dense and regular layouts. |
| Drawer | `component-specs/drawer.json`, `docs/components/drawer.md`, React Aria structure in `titan-aria` usage paths | `AriaBase` | Build with React Aria + Titan tokens; keep overlay behavior and state coverage. |
| Menu | `component-specs/menu.json`, `docs/components/menu-and-select.md`, `.cursor/rules/menu-and-select.mdc` | `AriaBase` | Keep React Aria structure and Titan token contract as primary. |
| Select | `component-specs/select.json`, `docs/components/menu-and-select.md`, `.cursor/rules/menu-and-select.mdc` | `AriaBase` | Keep React Aria structure and Titan token contract as primary. |
| Grid/layout system | `component-specs/grid.json`, `docs/components/grid.md`, `component-specs/template.json` | `FoundationOnlySpec` | Keep as cross-cutting layout foundation. |
| Table borderless pattern | `component-specs/table-borderless.json`, `docs/components/table-borderless.md` | `FoundationOnlySpec` | Keep as optional borderless data-table pattern. |
| Copy and links conventions | `component-specs/copy-and-links.json`, `docs/components/copy-and-links.md` | `FoundationOnlySpec` | Keep as semantic writing/styling convention. |
| Icons | Titan official icons + `lucide-react` + `@tabler/icons-react` + Titan tokens | `AriaBase` | Use Titan official icons first; keep Lucide then Tabler as fallback catalogs; token-driven color/size. |

## Supporting inventory (`titan-aria` package)

Current direct wrappers in `packages/titan-aria/src`:

- `Button`
- `Card`, `CardHeader`, `CardBody`, `CardActions`
- `Icon`

All other primitives are re-exported from `react-aria-components` through `packages/titan-aria/src/index.ts`.

## Active artifacts to track

Track these operational files in each audit cycle to ensure they stay aligned:

- Navbar: `component-specs/navbar.json`, `docs/components/logos-and-navbar.md`, `.cursor/rules/navbar-logos.mdc`
- Button: `component-specs/button.json`, `docs/components/button.md`, `.cursor/rules/button.mdc`
- Dialog: `component-specs/dialog.json`, `docs/components/dialog.md`, `.cursor/rules/dialog.mdc`
- Breadcrumb: `component-specs/breadcrumb.json`, `docs/components/breadcrumb.md`, `.cursor/rules/breadcrumb.mdc`
- Tabs: `component-specs/tabs.json`, `docs/components/tabs.md`, `.cursor/rules/tabs.mdc`
- Pagination: `component-specs/pagination.json`, `docs/components/pagination.md`, `.cursor/rules/pagination.mdc`
- Menu: `component-specs/menu.json`, `docs/components/menu-and-select.md`, `.cursor/rules/menu-and-select.mdc`
- Select: `component-specs/select.json`, `docs/components/menu-and-select.md`, `.cursor/rules/menu-and-select.mdc`

## Audit cadence

Run this inventory update after each integration cycle:

1. Review `AriaBase` vs `TitanAriaWrapper` usage by component.
2. Reduce `SnowflakeFallback` entries with explicit normalization tasks.
3. Record migration notes and next review date.
