# Playground Smoke Demo

This folder is an isolated visual demo and smoke-review harness for all `titan-compositions` components. It does not modify foundations contracts.

## Run locally (recommended)

Use the Vite React app (no CDN runtime conflicts):

```bash
cd /Users/angelsanchez/Desktop/titan-foundations/playground/web
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

Core exported components from `titan-compositions` are imported and demonstrated:

| Category | Components |
|----------|------------|
| Shell / Navigation | `TitanNavbar`, `TitanBreadcrumb` |
| Layout | `TitanCardGrid`, `TitanCard` (span 8 / span 16 grid) |
| Buttons | `TitanButton`, `TitanIconButton`, `TitanErrorButton`, `TitanDestructiveIconButton` |
| Badges | `TitanPill` (dismissable, multi-tone), `TitanTag` (7 tones) |
| Menus | `TitanMenuDropdown` (normal, icon-only, cascading) |
| Select | `TitanSelect` (with/without icons, disabled items) |
| Tabs | `TitanTabs` (with disabled tab) |
| Pagination | `TitanPagination` (with ellipsis) |
| Overlays | `TitanDrawer`, `TitanDialog` |
| Feedback | `TitanTooltip`, `TitanToastRegion` (success/error/info/warning) |
| Forms | `TitanInputField`, `TitanTextareaField`, `TitanTextInput`, `TitanTextArea` (with label, hint, counter, icons, error) |
| Form controls | `TitanCheckboxField`, `TitanRadioGroupField`, `TitanSwitchField`, `TitanFormControlsGroup` |
| Data | `TitanTable` + TitanTableHeader/TitanColumn/TitanTableBody/TitanRow/TitanCell (inside card grid) |

`getToneStyle` (utility), icon resolvers (`resolveIcon`, `renderIconNode`) and `TitanTwoUpOneDownLayout` are not shown as standalone docs blocks but are covered indirectly by rendered compositions.

## Legacy HTML

`react-buttons.html` remains only as fallback, but the primary path is now `web` because it avoids `Invalid hook call` issues.
