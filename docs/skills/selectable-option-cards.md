# Selectable Option Cards (family)

Universal UI anatomy for a **family of selectable cards** used to choose one (or more) options. Each card has the same structure: title, illustration, and description with optional bold keywords. **Selection state** is visible (e.g. border or highlight). Variants are the **options** offered (e.g. Profile attributes, Conversations, Upload your audience).

**Family name:** Selectable Option Cards  
**Variants:** Identified by the option — e.g. Profile attributes | Conversations | Upload your audience (or any other choice set; structure stays the same).

---

## When to use

- User asks for “selectable cards”, “choice cards”, “pick an option”, “card selection”, “audience type / source selection”.
- You need a set of options displayed as cards; the user selects one (or more) by clicking; selection is clearly indicated.

## Family anatomy (common to all variants)

| Region | Content |
|--------|---------|
| **Container** | Card with rounded corners; **default state**: subtle border or outline. **Selected state**: prominent border (e.g. solid blue) or background highlight so the chosen card is clearly distinct. |
| **Title** | Bold, dark text at the top (e.g. “Profile attributes”, “Conversations”, “Upload your audience”). |
| **Illustration** | Conceptual image in the middle: line-art, icon set, or illustration with optional subtle gradient (e.g. green–blue, orange–yellow, purple–pink). Slot for product-specific art. |
| **Description** | Text block at the bottom; short sentence explaining the option. **Keywords** can be bolded (e.g. “followers, location, biography, gender” or “hashtags, keywords and URLs”). |

## Variants (identifiable)

The **variant** is each **option** in the set. Same layout per card; only title, illustration, and description change.

| Variant example | Title | Description (summary) |
|-----------------|-------|------------------------|
| **Profile attributes** | “Profile attributes” | Audiences based on followers, location, biography, gender, etc. or Connect audience. |
| **Conversations** | “Conversations” | Audiences based on recent use of hashtags, keywords and URLs. |
| **Upload your audience** | “Upload your audience” | Upload from social listening tools, CRMs and more. |

## Titan usage

- **Surface:** `TitanCard` or clickable container with `--surface-0`, `--card-slot-radius`, `--dialog-slot-pad`. Unselected: border `--color-black-200` or `--divider`. Selected: border `--button-primary` or `--color-blue-600` (solid, e.g. 2px).
- **Typography:** Title: `--text-title`, `--text-weight-semibold`. Description: `--text-body`; bold keywords: `--text-weight-semibold` or same with stronger color.
- **Interaction:** Whole card is clickable/focusable (button or card with `role="button"` / `onClick`). Use `aria-pressed` or `aria-selected` for selection state; ensure focus visible (focus ring).
- **Illustration:** Slot (image, SVG, or gradient); decorative with `aria-hidden="true"` or provide short `alt`/label.
- **Components:** `TitanCardGrid` + `TitanCard` (or div with card styles); manage selection state (single or multi) in parent.

## Implementation notes

- **Selection:** Single-select (one card) or multi-select (several cards) depending on product. Selected card must be clearly distinguishable (border, background, or both).
- Keyboard: cards in tab order; Enter/Space to toggle selection. Prefer minimum touch target (e.g. 44px) for the whole card.
- Empty/loading: N/A for option set; if options load async, show skeleton cards. Reference: use for wizards, onboarding, or “choose audience type” flows.

## Related patterns

- After selection, next step may use [vertical-filter-panel.md](./vertical-filter-panel.md) or [builder-condition-cards.md](./builder-condition-cards.md).

## Related patterns

- Content blocks (icon + title + description) → [insight-variant-cards.md](./insight-variant-cards.md).
- Condition/rule builder (AND/OR cards) → [builder-condition-cards.md](./builder-condition-cards.md).
