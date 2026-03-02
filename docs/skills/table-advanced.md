# Table (Advanced)

Universal UI anatomy for a **sortable, accessible table** built with React Aria (TitanTable): column headers with sort, rows, and cells.

## When to use

- User asks for “sortable table”, “data table”, “table with column sort”, “accessible table”.
- You need full table semantics with keyboard navigation, sort, and optional selection (checkboxes).

## Anatomy

| Region | Content |
|--------|---------|
| **Header** | One `<th>` per column; sortable columns show **lucide-react** icons: `ArrowUp`, `ArrowDown`, `ArrowUpDown` (size 14, strokeWidth 1.5) inside `<span className="column-sort-icon">`, and toggle sort on click. **Sortable `<th>` that is currently sorted must have a background color** (`--table-slot-header-sorted-bg`, e.g. `--color-steel-100`). |
| **Body** | Rows and cells; first column may be row header. Optional: checkbox column for selection. |

## Titan usage

- **Components:** `TitanTable`, `TableHeader`, `TableBody`, `Column`, `Row`, `Cell` from `titan-compositions`. Optional: `Checkbox` for selection.
- **Surface:** Borderless table styling: `--table-slot-cell-pad-*`, `--table-slot-header-color`. Table has class `table-sortable` (with `table-borderless`) so sort styles apply.
- **Layout (container):** A **standalone table** (not inside a UI card) **never** has a card wrapper or border; it floats and uses full width. A table **inside** a UI card: the card is the container; do not wrap the table in an extra container.
- **Sort (common pattern):** Use **sortDescriptor** (state: `{ column: string, direction: 'ascending' | 'descending' }`) and **onSortChange** on `TitanTable`. Sort data with `useMemo` from sortDescriptor; pass sorted list to `TableBody`. For each sortable column: `Column id="..." allowsSorting` with render prop `{({ allowsSorting, sortDirection }) => ( <span className="column-sort-header"> {allowsSorting && <span className="column-sort-icon" aria-hidden> {sortDirection === 'ascending' && <ArrowUp size={14} strokeWidth={1.5} />} {sortDirection === 'descending' && <ArrowDown size={14} strokeWidth={1.5} />} {!sortDirection && <ArrowUpDown size={14} strokeWidth={1.5} />} </span>} Label </span> )}`. Import `ArrowUp`, `ArrowDown`, `ArrowUpDown` from **lucide-react**. React Aria sets `aria-sort` on the `<th>`, which triggers the sorted-header background via `.table-sortable thead th[aria-sort="ascending"]` / `[aria-sort="descending"]`.
- **Sorted header background:** Token `--table-slot-header-sorted-bg` (e.g. `var(--color-steel-100)`) in theme; ensures sortable column headers are not white when active.

## Implementation notes

- **All tables in cards** must use the same sorting pattern (sortDescriptor, onSortChange, column-sort-header + column-sort-icon with lucide icons, sorted th background).
- Use when you need selection, keyboard navigation, or strict accessibility (React Aria). For simpler tables (no sort, no selection), `TitanBorderlessTable` + semantic HTML may be enough.
- **TitanBorderlessTable columns:** Each column object must have **`key`** (string), not `id`. The component builds cell keys as `${row.id}-${column.key}`; using `id` leaves `column.key` undefined and causes duplicate keys and "undefined" in cells.
- **Report list (or any page) with sortable columns:** use **TitanTable** (not TitanBorderlessTable) and this pattern; TitanBorderlessTable only accepts `header: string` and has no API for sortable headers or sort icons.
- Provide empty state (“No rows”) and loading state (skeleton or spinner).
- Reference: playground `id="table"` and card demos (Comparison Bar Cards, Top Cities, etc.).

## Related patterns

- Tables inside cards (e.g. comparison full table, report list) → use this pattern; report list page → `docs/integration/composition-patterns.json` (reportListPage).
- Simpler tables (no sort) → TitanBorderlessTable; table tokens → [../table-borderless.md](../table-borderless.md).
- Top Cities / Skills table (dual bars + pill) → [top-cities-table.md](./top-cities-table.md), [skills-table.md](./skills-table.md).
