# Pagination (source-driven contract)

> Source of truth: Audiense Zeroheight Pagination documentation (captured image reference) + Titan pagination tokens in `tokens/css/titan.css`.
> Canonical glossary: `docs/terminology.md` (mandatory naming).

## Purpose

Pagination lets users navigate large result sets while preserving context and position awareness.

## Canonical terminology

- parts: `pagination-container`, `pagination-nav`, `page-button`, `previous-button`, `next-button`, `ellipsis-item`
- states: `default`, `hover`, `selected`, `disabled`
- densities: `default-density`, `compact-density`
- variants: `default-pagination`, `simple-pagination`

## Variants

- `default-pagination`: previous/next controls + page-button range (with optional ellipsis-item).
- `simple-pagination`: compact previous/next focused pattern for dense layouts.

## Required structure

- `pagination-container`
- `pagination-nav` (`nav` landmark with `aria-label`)
- `previous-button`
- `next-button`
- `page-button` list

Required rules:
- exactly one selected page
- `previous-button` disabled on first page
- `next-button` disabled on last page

Optional:
- `first-button`, `last-button`
- `ellipsis-item` for collapsed ranges
- `page-size-selector`
- `results-summary`

## Tokens

Use semantic pagination tokens:

- `--pagination-slot-color`
- `--pagination-slot-height`
- `--pagination-slot-radius`
- `--pagination-slot-pad-x`
- `--pagination-slot-page-hover-bg`
- `--pagination-slot-page-active-bg`
- `--focus-ring`
- `--focus-ring-offset`

## Interaction and accessibility

- keyboard and pointer activation for all interactive controls
- keyboard: Tab for traversal, Enter/Space for activation
- current page exposed semantically (for example `aria-current="page"`)
- visible focus state required on all interactive controls

## Layout behavior

- base control height: `36px`
- controls aligned in a single row where possible
- collapse middle pages with `ellipsis-item` when range is large

## Visual policy

- Pagination follows Titan button visual policy:
  - no border/stroke/outline as container styling
  - expected style: `border: none`
  - focus visibility uses focus-ring behavior, not border

## Validation

- missing required pagination semantics/structure -> `BLOCKER`
- missing required states -> `FAIL`
- more than one selected page at once -> `FAIL`
- border/stroke/outline as container styling -> `FAIL`

## State Matrix (visible)

- `page-button`: `default`, `hover`, `selected`, `disabled`, `focus-visible`.
- `previous-button` y `next-button`: `default`, `hover`, `disabled`, `focus-visible`.

## Review Harness Requirements

- Mostrar en review:
  - estado inicial (pagina 1 selected, previous disabled)
  - estado intermedio (previous y next activos)
  - estado final (last page selected, next disabled)
- Incluir prueba de teclado (Tab + Enter/Space).
- Incluir caso con muchas paginas y `ellipsis-item`.
- Verificar `aria-current="page"` en pagina activa.

## Common Implementation Traps

- No sincronizar disabled de previous/next con limites reales.
- Renderizar mas de una pagina como selected.
- Usar border como contenedor visual del control.
- No exponer `aria-current` en la pagina activa.
- Omitir focus-visible en botones de paginacion.

Spec: `foundations/pagination.json`.
