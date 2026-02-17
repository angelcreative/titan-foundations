# Playground Smoke Demo

This folder is an isolated visual demo and smoke-review harness for all `titan-compositions` components. It does not modify foundations contracts.

## Run locally (recommended)

Use the Vite React app (no CDN runtime conflicts):

```bash
cd /Users/angelsanchez/Desktop/titan-foundations/playground/react-buttons-app
npm install
npm run dev -- --host 127.0.0.1
```

Open:

- `http://127.0.0.1:5179/` (if free)
- `http://127.0.0.1:5180/` (automatic fallback if 5179 is busy)

## How it works

- Imports all components directly from `titan-compositions` via `file:` link (not duplicated code).
- Loads `titan.css` + all 6 theme files (`insights`, `audiense`, `neutral`, `demand`, `linkedin`, `tweetbinder`).
- Includes a live theme switcher to validate visual parity across themes.

## Components covered

All 22 visual components exported by `titan-compositions` are imported and demonstrated:

| Category | Components |
|----------|------------|
| Shell / Navigation | `TitanNavbar`, `TitanBreadcrumb` |
| Layout | `TitanCardGrid`, `TitanCard` (span 8 / span 16 grid) |
| Buttons | `TitanButton` (6 variants), `TitanIconButton` (3 variants) |
| Badges | `TitanPill` (dismissable, multi-tone), `TitanTag` (7 tones) |
| Menus | `TitanMenuDropdown` (normal, icon-only, cascading) |
| Select | `TitanSelect` (with/without icons, disabled items) |
| Tabs | `TitanTabs` (with disabled tab) |
| Pagination | `TitanPagination` (with ellipsis) |
| Overlays | `TitanDrawer`, `TitanDialog` |
| Feedback | `TitanTooltip`, `TitanToastRegion` (success/error/info/warning) |
| Forms | `TitanInputField`, `TitanTextareaField` (with label, hint, counter, icons, error) |
| Form controls | `TitanCheckboxField`, `TitanRadioGroupField`, `TitanSwitchField`, `TitanFormControlsGroup` |
| Data | `TitanBorderlessTable` (inside card grid) |

`getToneStyle` (utility) and `TitanTwoUpOneDownLayout` (convenience wrapper) are not shown separately but are covered indirectly through Pills/Tags and the CardGrid layout respectively.

## Legacy HTML

`react-buttons.html` remains only as fallback, but the primary path is now `react-buttons-app` because it avoids `Invalid hook call` issues.
