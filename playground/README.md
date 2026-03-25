# Playground Smoke Demo

This folder is an isolated visual demo and smoke-review harness for all `titan-compositions` components. It does not modify foundations contracts.

## Run locally (recommended)

Use the Vite React app (no CDN runtime conflicts):

```bash
cd playground/web
npm install
npm run dev -- --host 127.0.0.1
```

Open `http://127.0.0.1:5179/` (or the port Vite prints if that one is busy).

Production build check:

```bash
cd playground/web
npm run build
```

## How it works

- Imports components from `titan-compositions` via `file:../../packages/titan-compositions` (not duplicated code).
- Loads `titan.css` + theme files (`insights`, `audiense`, `neutral`, `demand`, `linkedin`, `tweetbinder`, `brand`).
- Includes a live theme switcher to validate visual parity across themes.
- **Components** tab: long-form showcase of primitives (avatar through toasts, tables, etc.).
- **Common patterns** tab: composed flows (KPI cards, segment cards, **Cluster Graph** D3 demo, etc.).
- **Design system** view: separate entry for token/theme exploration (`DesignSystemView`).

## Components covered

Core exported components from `titan-compositions` are imported and demonstrated:

| Category | Components |
|----------|------------|
| Shell / Navigation | `TitanNavbar`, `TitanBreadcrumb`, **`TitanSidebar`** (+ optional `TitanSidebarHeader`, `nested` items) |
| Layout | `TitanCardGrid`, `TitanCard` (span 8 / span 16 grid) |
| Buttons | `TitanButton`, `TitanIconButton`, `TitanErrorButton`, `TitanDestructiveIconButton`, `TitanButtonGroup` |
| Badges | `TitanPill` (dismissable, multi-tone), `TitanTag` (7 tones) |
| Menus | `TitanMenuDropdown` (normal, icon-only, cascading) |
| Select | `TitanSelect` (with/without icons, disabled items) |
| Tabs | `TitanTabs` (with disabled tab) |
| Pagination | `TitanPagination` (with ellipsis) |
| Overlays | `TitanDrawer`, **`TitanDialog`** (`closeButton` icon / text / none) |
| Feedback | `TitanTooltip`, `TitanToastRegion` (success/error/info/warning) |
| Forms | `TitanInputField`, `TitanTextareaField`, `TitanTextInput`, `TitanTextArea` (label, hint, counter, icons, error) |
| Form controls | `TitanCheckboxField`, `TitanRadioGroupField`, `TitanSwitchField`, `TitanFormControlsGroup` |
| Data | `TitanTable` + header/column/body/row/cell (inside card grid) |
| Other | `TitanCalendar`, `TitanCollapsible`, `TitanDivider`, `TitanLink`, `TitanLoader`, `TitanProgressBar`, `TitanSlider`, etc. |

`getToneStyle`, icon resolvers (`resolveIcon`, `renderIconNode`) and `TitanTwoUpOneDownLayout` are covered indirectly where compositions use them.

## Common patterns (second tab)

Includes **Cluster Graph** (`playground/web/src/cluster-graph/`): D3 force layout + node detail `TitanDialog` with text Close, aligned segment labels.

## Legacy HTML

`react-buttons.html` remains only as fallback; the primary path is `web` because it avoids `Invalid hook call` issues.
