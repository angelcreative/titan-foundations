# Top Cities Table

Universal UI anatomy for a **table with 3 columns**: (1) name, (2) two comparative bars for the same item (e.g. Audience bar + %, Baseline bar + %), (3) affinity or value pill. Includes a **legend** above the table for the two bar series.

## When to use

- User asks for “top cities”, “ranked table”, “penetration by city”, “comparative bars table”.
- You need a table where each row has a name, a comparison of two values (two bars + two percentages), and a pill (e.g. affinity “x 9.63”).

## Anatomy

| Region | Content |
|--------|---------|
| **Header** | Optional card title + info icon. **Legend** (e.g. “Audience” / “Baseline” with color dot each). |
| **Table** | **Col 1:** Name (e.g. City, Skill). **Col 2:** Penetration — two comparative bars for the same item: first row = bar 1 + %, second row = bar 2 + %. **Col 3:** Pill (e.g. “x 9.63”). |
| **Body** | One table row per item; col 2 cell contains two “bar + %” rows (e.g. Audience 1.12%, Baseline 0.12%). |

## Titan usage

- **Table:** `TitanTable` + `TitanTableHeader`, `TitanColumn`, `TitanTableBody`, `TitanRow`, `TitanCell`. Use `sortDescriptor` and `onSortChange` for sortable columns; `TitanColumn allowsSorting` for Affinity/City. See [table-advanced.md](./table-advanced.md).
- **Surface:** `TitanCard`; table tokens `--table-slot-header-color`, `--table-header-separator`, `--table-row-separator`, `--table-row-hover`.
- **Bars:** Two `TitanProgressBar` (or custom) per cell; first bar `--progress-slot-fill-bg`, second bar same with lighter opacity or `--progress-slot-track-bg`. Each bar on its own row with percentage to the right.
- **Legend:** Dots: `--progress-slot-fill-bg` (Audience), `--progress-slot-track-bg` or lighter (Baseline). Text: `--text-body`.
- **Pill:** `--pill-background`, `--pill-color`, `--card-slot-radius`.

## Implementation notes

- Legend is required so users know which bar is Audience vs Baseline. Place above the table.
- Col 2: use two rows in the cell (e.g. `cities-dual-bar-row`): bar + % on same line for each series.
- Reference: playground `id="top-cities-table-card"`.

## Related patterns

- Table look & feel → [../table-borderless.md](../table-borderless.md). Sortable table (TitanTable primitives) → [table-advanced.md](./table-advanced.md).
- List variant (sort by penetration only) → [sortable-penetration-list.md](./sortable-penetration-list.md).
