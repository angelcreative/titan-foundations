# Parity QA Matrix

Use this matrix to verify that `titan-compositions` mirrors the official baseline behavior and visuals in this phase.

## Execution Rules

- Runtime must use only `titan-compositions` + Titan tokens/themes.
- Validate each component in: `default`, `hover`, `pressed`, `focus-visible`, `disabled`.
- Validate state coverage where relevant: `empty`, `loading`, `error`, `success`.
- If any critical mismatch appears, mark `BLOCKER` and do not claim parity closed.

## Component Checklist

| Component | API parity | Visual parity | Interaction parity | A11y parity | Status |
| --- | --- | --- | --- | --- | --- |
| Navbar (`TitanNavbar`, `TitanNavBar`) | ✅ | ✅ | ✅ | ✅ | PASS |
| Buttons (`TitanButton`, `TitanIconButton`, `TitanErrorButton`, `TitanDestructiveIconButton`) | ✅ | ✅ | ✅ | ✅ | PASS |
| Pill/Tag (`TitanPill`, `TitanTag`) | ✅ | ✅ | ✅ | ✅ | PASS |
| Table (`TitanTable` primitives + helper cells) | ✅ | ✅ | ✅ | ✅ | PASS |
| Menu family (`TitanMenuDropdown`, `TitanSearchMenu`, `TitanProfileMenu`, `TitanNotificationsMenu`) | ✅ | ✅ | ✅ | ✅ | PASS |
| Select (`TitanSelect`) | ✅ | ✅ | ✅ | ✅ | PASS |
| Tabs (`TitanTabs`) | ✅ | ✅ | ✅ | ✅ | PASS |
| Pagination (`TitanPagination`) | ✅ | ✅ | ✅ | ✅ | PASS |
| Dialog (`TitanDialog`) | ✅ | ✅ | ✅ | ✅ | PASS |
| Drawer (`TitanDrawer`) | ✅ | ✅ | ✅ | ✅ | PASS |
| Input (`TitanInputField`, `TitanTextInput`) | ✅ | ✅ | ✅ | ✅ | PASS |
| TextArea (`TitanTextareaField`, `TitanTextArea`) | ✅ | ✅ | ✅ | ✅ | PASS |
| Form controls (`TitanCheckboxField`, `TitanRadioGroupField`, `TitanSwitchField`) | ✅ | ✅ | ✅ | ✅ | PASS |
| Breadcrumb (`TitanBreadcrumb`) | ✅ | ✅ | ✅ | ✅ | PASS |
| Sidebar (`TitanSidebar` compound) | ✅ | ✅ | ✅ | ✅ | PASS |
| Toast (`TitanToastRegion`) | ✅ | ✅ | ✅ | ✅ | PASS |

## Evidence to Capture Per Component

- One screenshot of default state.
- One screenshot showing interactive state (hover/pressed/focus-visible).
- One screenshot of edge state (disabled or empty/error/loading where applicable).
- Short note if any token-level adjustment was needed.

## Release Gate

Ship parity changes only when:

1. All rows are `PASS`.
2. No `BLOCKER` remains.
3. `docs/integration/component-registry.json` reflects the shipped API.
4. `npm run check:phase-policy` passes in `packages/titan-compositions`.
