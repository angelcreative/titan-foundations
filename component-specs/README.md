# Component Specs

JSON contracts and conventions so implementations (or Cursor/MCP) can reproduce Titan UI patterns using Titan tokens.

> Scope of this folder: **component/layout contracts**.  
> For primitive values (spacing, typography, borders, elevation, colors), use `tokens/foundations/`.

## Contents

- `table-borderless.json` — borderless table contract.
- `navbar.json` — navbar contract and theme lockup rules.
- `copy-and-links.json` — text/link color policy contract.
- `drawer.json` — drawer anatomy and behavior contract.
- `menu.json` / `select.json` — menu/select structural contracts.
- `grid.json` / `template.json` — layout contracts.
- `button.json`, `dialog.json`, `breadcrumb.json`, `tabs.json`, `pagination.json` — component contracts.

See detailed usage docs in `docs/components/`.

## Usage

Example instruction for agents:

“For report-like tables, use `component-specs/table-borderless.json` and follow `docs/components/table-borderless.md`.”

For ownership and precedence:

- `docs/integration/decision-policy.md`
- `docs/integration/component-inventory.md`

## Separation of concerns

- `component-specs/`: structure/composition contracts for components and layouts.
- `tokens/foundations/`: primitive token sources for `titan.css`.

Do not mix both in the same path to avoid ambiguous resolution in MCP and generation rules.
