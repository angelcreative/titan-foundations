# Tabs (source-driven contract)

> Source of truth: Audiense Zeroheight Tabs documentation (captured) + Titan semantic tab tokens in `tokens/css/titan.css`.
> Canonical glossary: `docs/terminology.md` (mandatory naming).

Canonical terminology (mandatory): `tabs-container`, `tab-list`, `tab-trigger`, `tab-panel`; states `default/hover/selected/disabled`.

## Purpose

Tabs organize related content into peer sections and let users switch context quickly without navigating away.

## Anatomy

Required:
- Tabs container
- Tab list
- Tab trigger items
- Tab panels linked to each trigger

Optional:
- Icon in tab
- Badge/counter
- Scroll behavior for overflowing tab lists

## States

Each tab must support:
- default
- hover
- selected
- disabled

Only one selected tab per tablist.

## Tokens

Use semantic tab tokens:

- `--tabs-slot-bg`
- `--tabs-slot-radius`
- `--tabs-slot-pad`
- `--tab-slot-height`
- `--tab-slot-radius`
- `--tab-slot-bg`
- `--tab-slot-bg-selected`
- `--tab-slot-color`
- `--tab-slot-color-selected`
- `--focus-ring`
- `--focus-ring-offset`

## Interaction and accessibility

- Keyboard:
  - Arrow keys move focus across tabs.
  - Enter/Space activates focused tab.
- Focus state must be visible.
- Active panel must be associated to its tab.
- Inactive panels should be hidden from view.

## Responsive

- If tabs overflow horizontally, use horizontal scroll (or equivalent controlled overflow strategy).
- Keep labels short and readable; avoid multi-line tab labels where possible.

## Usage guidance

Use Tabs for sibling sections of the same scope.

Avoid:
- using tabs as top-level product navigation
- multiple active tabs in one tablist
- hidden critical content behind disabled tabs without explanation

## Validation

- Missing tab semantics/a11y behavior -> `BLOCKER`
- Missing required states -> `FAIL`
- Multiple selected tabs in same group -> `FAIL`

Spec: `foundations/tabs.json`.
