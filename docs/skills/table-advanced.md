# Table (Advanced)

Universal UI anatomy for a **sortable, accessible table** built with **TitanTable** and React Aria Table primitives: sticky header, checkbox selection, sortable columns, kebab actions, clickable name.

## When to use

- User asks for "sortable table", "data table", "table with column sort", "accessible table".
- You need full table semantics with keyboard navigation, sort, and optional selection (checkboxes).

## Anatomy

| Region | Content |
|--------|---------|
| **Header** | One `<th>` per column via `TitanTableHeader` + `TitanColumn`; sortable columns use `allowsSorting` and show ArrowUp/ArrowDown/ArrowUpDown. Sorted `<th>` gets background `--table-slot-header-sorted-bg`. |
| **Body** | `TitanTableBody` + `TitanRow` + `TitanCell`; first column may be row header. Optional: checkbox column for selection. |

## Titan usage

- **Components:** `TitanTable`, `TitanTableHeader`, `TitanColumn`, `TitanTableBody`, `TitanRow`, `TitanCell` from `titan-compositions`. Table has `data-sticky-header` for sticky header; use `sortDescriptor` and `onSortChange` for sort.
- **Surface:** Borderless table styling: `--table-slot-cell-pad-*`, `--table-slot-header-color`, `--table-header-separator`, `--table-row-separator`. Table classes: `table-borderless`, `table-sortable`.
- **Layout:** Standalone table = no card wrapper; table inside a card = card is the container.
- **Sort:** Pass `sortDescriptor` and `onSortChange` to `TitanTable`. Sort data with `useMemo` from sortDescriptor; pass sorted list as `items` to `TitanTableBody`. Set `TitanColumn allowsSorting` for sortable columns.
- **Column ids:** Use `id` on `TitanColumn` (e.g. `id="name"`); row keys via `TitanRow id={row.id}`.

## Implementation notes

- All tables in cards use the same sorting pattern (sortDescriptor, onSortChange, TitanColumn allowsSorting).
- For selection: `TitanTable selectionMode="multiple"` (or single); use `selectedKeys` / `onSelectionChange`. Checkbox column is added automatically when selectionBehavior is toggle.
- Celdas preparadas: `TitanTableCellDate`, `TitanTableCellInitials`, `TitanTableCellActions`, `TitanTableCellStatus` for date+icon, initials, kebab menu, status dot.
- Reference: playground `id="table"` and card demos (Top Cities, Skills, Sortable Penetration, Comparison Bar Cards).

## Related patterns

- Tables inside cards → this pattern; report list page → `docs/integration/composition-patterns.json`.
- Top Cities / Skills table (dual bars + pill) → [top-cities-table.md](./top-cities-table.md), [skills-table.md](./skills-table.md).
- Table tokens and border → [../table-borderless.md](../table-borderless.md).
