# Vertical Filter Panel (vertical long card builder)

Universal UI anatomy for a **vertical panel** that behaves like a “long card builder”: a single column of **collapsible filter sections** stacked vertically, with a header and footer actions. Each section is a “card” stripe: title, chevron (expand/collapse), and when expanded, optional instruction text plus one or more inputs (search, dropdown, keyword field, etc.).

**Also known as:** Vertical long card builder.

---

## When to use

- User asks for “vertical filter panel”, “filter sidebar”, “add filters”, “vertical long card builder”, “collapsible filter list”.
- You need a narrow vertical panel (e.g. sidebar) where many filters live; each filter is a collapsible section to reduce clutter and scrolling.

## Anatomy

| Region | Content |
|--------|---------|
| **Panel** | Narrow vertical container (e.g. sidebar width), white background, clear separation from main content. Optional border or shadow. |
| **Header** | **Title** (e.g. “Add some filters”) — bold. **Description** (one line, e.g. “These filters will be applied to your search results.”) — lighter, smaller. |
| **Body** | **N collapsible sections** (filter “cards”), stacked vertically, separated by horizontal lines. Each section: **Title** (left, e.g. “Keywords Search”, “Creator Location”) + **Chevron** (right: up = expanded, down = collapsed). When **expanded**: optional **instruction** (short hint, e.g. “Select the location… (Max. 20)”) + **Input slot** (search with magnifier, dropdown, keyword input with “Press Enter to add”, etc.). |
| **Footer** | Two actions, horizontal: **Clear All** (secondary / outline, left) and **Apply** (primary, solid, right). |

## Section variants (filter types)

Each collapsible section can contain different input types. Structure is the same; only the label, instruction, and control change.

| Variant example | Title | Instruction (optional) | Input |
|-----------------|-------|--------------------------|-------|
| Keywords Search | “Keywords Search” | “Press Enter to add keywords. This will look in…” | Single line input, Enter to add (tags/keywords). |
| Creator Location | “Creator Location” | “Select the location where the creator is based. (Max. 20)” | Search input, “Search country or city”. |
| Audience Location | “Audience Location” | “Select the location where the audience is based. (Max. 20)” | Search input, same pattern. |
| Lookalike / Followers / Average Likes / Engagement Rate | As needed | Short hint or limit | Dropdown, range, number, etc. |

## Titan usage

- **Surface:** Panel: `--surface-0`, padding `--spacing-m` or `--dialog-slot-pad`; section separators: `--divider` or `--color-black-200`.
- **Typography:** Panel title: `--text-title`, `--text-weight-semibold`. Description: `--text-muted`, `--font-size-s`. Section title: `--text-body`, `--text-weight-medium`. Instruction: `--text-muted`, `--font-size-s`.
- **Chevron:** `--icon-secondary` or `--text-muted`; rotate 180° when expanded. Button/clickable row for the whole section header (title + chevron).
- **Inputs:** Use `TitanInputField` or select; tokens `--input-slot-*`, placeholder `--text-muted`. Search icon: `--icon-secondary`.
- **Footer:** “Clear All”: `TitanButton` secondary or outline (e.g. light teal border). “Apply”: `TitanButton` primary (solid teal or `--button-primary`).
- **Components:** Panel wrapper (e.g. aside or div); accordion or collapsible rows (one per section); `TitanInputField`, `TitanButton`.

## Implementation notes

- **Accessibility:** Section header must be focusable and toggle expand with Enter/Space. Use `aria-expanded` and `aria-controls` linking to the content region. Optional: allow one section open at a time (accordion) or multiple (independent collapse).
- **State:** Track which sections are expanded and current filter values. “Clear All” resets values (and optionally collapses all). “Apply” submits filters (e.g. callback or form submit).
- **Scroll:** If many sections, panel body can scroll; keep header and footer sticky or visible. Empty state: N/A (panel is always present with section list). Loading: disable inputs or show skeleton sections if filters load async.
- Reference: filter sidebars, search refinement panels, "add some filters" flows.

## Related patterns

- Menu/Select for dropdowns → [../menu-and-select.md](../menu-and-select.md).
- Results beside panel: e.g. [kpi-trend-card.md](./kpi-trend-card.md), [comparison-bar-cards.md](./comparison-bar-cards.md), [top-cities-table.md](./top-cities-table.md).

