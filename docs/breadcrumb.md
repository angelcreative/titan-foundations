# Breadcrumb (source of truth: PDF)

> Source of truth: `titan-comp-doc/breadcrumb.pdf`  
> This file defines operational implementation contract.
> Canonical glossary: `docs/terminology.md` (mandatory naming).

Canonical terminology (mandatory): `breadcrumb-nav`, `ordered-list`, `item`, `separator`, `current-item`, `overflow-ellipsis-item`; states `default/hover/pressed/focus-visible/disabled`.

## Purpose

Breadcrumb communicates user location in a hierarchy and enables quick back-navigation.

## Required structure

- `nav` with `aria-label="Breadcrumb"`
- ordered list of items
- separators between items
- current page as final item

Rules:
- previous items are interactive
- current item is non-interactive and uses `aria-current="page"`

## Optional structure

- Home icon entry
- Ellipsis collapse item for long paths
- Expandable overflow segment (menu/popover) when requested by flow

## Tokens

- Label: `--text-body`
- Muted/current: `--text-muted`
- Link/default interactive: `--text-link`
- Link hover: `--text-link-hover`
- Separator: `--divider-strong`
- Focus: `--focus-ring`, `--focus-ring-offset`
- Item gap: `--spacing-2xs`

## States

Interactive items:
- default
- hover
- pressed
- focus-visible
- disabled (if flow requires)

Current item:
- default only (not interactive)

## Responsive and overflow

- Preserve first and last path segments on narrow widths.
- Collapse middle segments first.
- Use ellipsis for collapsed middle path.

## Accessibility

- Correct landmark/aria semantics.
- Keyboard focus only on interactive items.
- Current page exposed with `aria-current="page"`.

## Validation

- Missing semantic structure -> `BLOCKER`
- Clickable current item -> `FAIL`
- Missing interactive state coverage -> `FAIL`

Spec: `foundations/breadcrumb.json`.
