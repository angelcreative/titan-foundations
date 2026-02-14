# Component Inventory (Titan React vs Fallback)

This inventory is the decision baseline to avoid two sources of truth.

## Status model

- `OfficialInTitanReact`: use `@audienseco/titan-react` as the only implementation source.
- `SnowflakeFallback`: temporary implementation using React Aria + Titan tokens/foundations.
- `FoundationOnlySpec`: spec/guideline only, not a productized component.

## Titan React catalog (provided by team)

The following components are treated as `OfficialInTitanReact` in your operating model.

### Stable

- `AudienseEcosystemMenu`
- `Button Group`
- `Buttons`
- `Checkbox`
- `Dialog`
- `Label`
- `NavBar`
- `Pagination`
- `Pill`
- `Radio Buttons`
- `Tabs`
- `Tooltip`

### In production (treat as stable in practice)

The following are tagged as snowflake in some sources, but your team uses them in production, so this inventory treats them as effectively stable/official for implementation decisions:

- `ActionableIcon`
- `Avatar`
- `Badge`
- `Charts`
- `Divider`
- `Flag`
- `GridList`
- `Icons`
- `Link`
- `Loading`
- `MatchHighlighter`
- `Menu`
- `PlatformIcon`
- `Popover`
- `RefreshSpinner`
- `Select`
- `Table`
- `Toast`
- `Toggle`
- `Accordion`
- `Collapsible`
- `Combobox`
- `Input`
- `TagGroup`
- `TextArea`
- `TextField`

## Repo-focused inventory

| Item | Current source in this repo | Target status | Decision now |
| --- | --- | --- | --- |
| Navbar | `foundations/navbar.json`, `docs/logos-and-navbar.md`, `.cursor/rules/navbar-logos.mdc` | `OfficialInTitanReact` | Prefer Titan React navbar; keep local assets/spec as fallback/reference only. |
| Drawer | `foundations/drawer.json`, `docs/drawer.md`, `titan-aria` React Aria structure | `SnowflakeFallback` | Use React Aria + Titan tokens until Titan React provides an official drawer in your version. |
| Menu | `foundations/menu.json`, `docs/menu-and-select.md`, `.cursor/rules/menu-and-select.mdc` | `OfficialInTitanReact` | Prefer Titan React `Menu`; keep local spec/rule as fallback/reference during migration. |
| Select | `foundations/select.json`, `docs/menu-and-select.md`, `.cursor/rules/menu-and-select.mdc` | `OfficialInTitanReact` | Prefer Titan React `Select`; keep local spec/rule as fallback/reference during migration. |
| Grid/layout system | `foundations/grid.json`, `docs/grid.md`, `foundations/template.json` | `FoundationOnlySpec` | Keep as cross-cutting layout foundation. |
| Table borderless pattern | `foundations/table-borderless.json`, `docs/table-borderless.md` | `FoundationOnlySpec` | Titan React table is available; keep this as optional borderless variant spec unless absorbed by Titan React. |
| Copy and links conventions | `foundations/copy-and-links.json`, `docs/copy-and-links.md` | `FoundationOnlySpec` | Keep as semantic writing/styling convention. |
| Icon fallback | `lucide-react` via `titan-aria` | `SnowflakeFallback` | Prefer Titan React icons; if a specific icon is missing, use Lucide. |

## Supporting inventory (titan-aria package)

Current direct wrappers in `packages/titan-aria/src`:

- `Button`
- `Card`, `CardHeader`, `CardBody`, `CardActions`
- `Icon`

All other primitives are re-exported from `react-aria-components` through `packages/titan-aria/src/index.ts`.

## Active fallback artifacts to track

For components already treated as official in Titan React, these local files are still intentionally retained as transition fallback/reference and must be reviewed in audits:

- Navbar: `foundations/navbar.json`, `docs/logos-and-navbar.md`, `.cursor/rules/navbar-logos.mdc`
- Menu: `foundations/menu.json`, `docs/menu-and-select.md`, `.cursor/rules/menu-and-select.mdc`
- Select: `foundations/select.json`, `docs/menu-and-select.md`, `.cursor/rules/menu-and-select.mdc`

## Audit cadence

Run this inventory update after each relevant Titan React update:

1. Check what became official in Titan React.
2. Move matching `SnowflakeFallback` rows to `OfficialInTitanReact`.
3. Add migration note and deprecation target for the local fallback.
