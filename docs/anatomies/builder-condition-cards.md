# Builder Condition Cards (family)

Universal UI anatomy for **builder/query cards**: condition cards arranged horizontally, linked by logical operators (AND / OR). Each card represents one criterion (e.g. Biography, Entity) with a title, short prompt, a selected value shown as a tag/pill, and edit/delete actions. Connectors between cards show the operator; a final “add” connector lets users add another condition.

**Family name:** Builder Condition Cards  
**Variants:** Identified by the **type of criterion** (e.g. Biography | Entity | Location | …). Same structure per card; title, prompt, and value slot change.

---

## When to use

- User asks for “builder cards”, “condition cards”, “segment builder”, “filter builder”, “rule builder”, “query builder”.
- You need a visual builder where users add/remove/edit criteria; each criterion is a card; criteria are combined with AND/OR.

## Family anatomy (common to all variants)

| Region | Content |
|--------|---------|
| **Card** | Rounded rectangle, light border (`--divider` or `--color-black-200`). **Title** (top, bold, e.g. “Biography”, “Entity”). **Prompt/description** (lighter, one short line, e.g. “Include any”, “Is”). **Value tag/pill** (rounded pill with selected value, e.g. “adidas”, “Brand”; light fill, e.g. green or neutral). **Actions** (top-right): edit icon (pencil), delete icon (trash); subtle, same style for all cards. |
| **Connector (between cards)** | Small circle, thin border, centered on the vertical gap between two cards. Label: “AND” or “OR” (capital). Indicates the logical link between the two adjacent conditions. |
| **Add connector (after last card)** | Larger **solid** circle (e.g. primary purple), white text “AND” or “OR”. Click adds a new condition card. This is the primary “add condition” control. |

## Variants (identifiable)

The **variant** is the **criterion type** of each card. Structure is fixed; only title, prompt copy, and value semantics change.

| Variant example | Title | Prompt | Value example |
|-----------------|-------|--------|----------------|
| **Biography** | “Biography” | “Include any” | “adidas” (pill) |
| **Entity** | “Entity” | “Is” | “Brand” (pill) |
| **Location** | “Location” | “Is in” | “Spain” (pill) |

## Titan usage

- **Surface:** Card: `--surface-0`, `--card-slot-radius`, light border `--color-black-200` or `--divider`; padding `--dialog-slot-pad` or `--spacing-m`.
- **Typography:** Title: `--text-title`, `--text-weight-semibold`. Prompt: `--text-muted`, `--font-size-s`. Tag/pill text: `--text-body`; pill background: e.g. `--color-green-100` or `--color-steel-100`.
- **Icons:** Edit/delete: `--icon-secondary` or `--text-muted`; size S. Ensure focus and hover states.
- **Connector (between):** Circle border `--divider`; text “AND”/“OR” with `--text-body`. Background `--surface-0`.
- **Add connector:** Background `--button-primary` or `--color-violet-600`; text `--text-on-color`. Clearly focusable (e.g. `TitanIconButton` or button with aria-label “Add condition”).
- **Components:** Flex or horizontal layout (cards + connectors); `TitanTag` or custom pill for value; `TitanIconButton` for edit/delete and add.

## Implementation notes

- **Order:** Cards and connectors form a single logical chain. State: list of conditions + operator (AND/OR). Add: append a new card (and optionally open editor).
- Edit: opens inline editor, modal, or drawer to change the criterion type or value. Delete: removes that card and collapses layout.
- Keyboard: tab through cards and connectors; Enter on add to add condition. Optional: drag to reorder cards.
- Empty state: no cards, show single CTA “Add condition” (e.g. same style as add connector). Reference: segment builders, filter builders, rule engines.

## Related patterns

- Filter inputs in a vertical panel: [vertical-filter-panel.md](./vertical-filter-panel.md). Option selection before builder: [selectable-option-cards.md](./selectable-option-cards.md).

## Related patterns

- Selectable option cards (choose one/many) → [selectable-option-cards.md](./selectable-option-cards.md).
- Filters in a vertical panel → [vertical-filter-panel.md](./vertical-filter-panel.md).
