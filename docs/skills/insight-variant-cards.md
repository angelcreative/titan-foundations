# Insight Variant Cards (family)

Universal UI anatomy for a **family of cards**: same name, **three identifiable variants** (default, compact, wide). Used for insight or content blocks with icon, title, description, and optional meta.

**Family name:** Insight Variant Cards  
**Variants:** Default | Compact | Wide

## When to use

- User asks for “insight cards”, “content cards”, “feature blocks”, or “three card variants”.
- You need flexible card layouts: one with more padding and vertical stack, one compact (e.g. horizontal), one wide (e.g. full width or emphasis).

## Anatomy

| Variant | Layout | Content |
|---------|--------|---------|
| **Default** | Icon (top or left) + title + description + optional meta (e.g. date, tag). Vertical stack, card padding. |
| **Compact** | Same content in a tighter row: icon + title + short description (or title only). Less padding. |
| **Wide** | Same content spanning more columns; may include longer description or CTA. |

Common slots: **Icon** (or illustration), **Title**, **Description** (body text), **Meta** (secondary: date, category, link).

## Titan usage

- **Surface:** `TitanCard` with `--surface-0`, `--card-slot-radius`, `--dialog-slot-pad`. Compact: reduce padding (e.g. `--spacing-s`).
- **Typography:** Title: `--text-title`, `--text-weight-semibold`. Description: `--text-body`, `--text-muted`. Meta: `--text-muted`, `--font-size-s`.
- **Icon:** Use `--icon-primary` or `--text-secondary`; size M or S for compact.
- **Components:** `TitanCardGrid` + `TitanCard` (span 4/8/16 depending on variant).

## Implementation notes

- Use one component with a `variant` prop (default | compact | wide) to avoid duplication.
- Empty state: placeholder text or hide. Loading: skeleton title + lines.
- Reference: playground `id="insight-variant-cards"`.
