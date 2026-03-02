# Table (Advanced)

Universal UI anatomy for a **sortable, accessible table** built with React Aria (TitanTable): column headers with sort, rows, and cells.

## When to use

- User asks for “sortable table”, “data table”, “table with column sort”, “accessible table”.
- You need full table semantics with keyboard navigation, sort, and optional selection (checkboxes).

## Anatomy

| Region | Content |
|--------|---------|
| **Header** | One `<th>` per column; sortable columns show icon (ArrowUp / ArrowDown / ArrowUpDown) and toggle sort on click. **Sortable `<th>` that is currently sorted must have a background color** (`--table-slot-header-sorted-bg`, e.g. `--color-steel-100`). |
| **Body** | Rows and cells; first column may be row header. Optional: checkbox column for selection. |

## Titan usage

- **Components:** `TitanTable`, `TableHeader`, `TableBody`, `Column`, `Row`, `Cell` from `titan-compositions`. Optional: `Checkbox` for selection.
- **Surface:** Borderless table styling: `--table-slot-cell-pad-*`, `--table-slot-header-color`. Table has class `table-sortable` (with `table-borderless`) so sort styles apply.
- **Sort (common pattern):** Use **sortDescriptor** (state: `{ column: string, direction: 'ascending' | 'descending' }`) and **onSortChange** on `TitanTable`. Sort data with `useMemo` from sortDescriptor; pass sorted list to `TableBody`. For each sortable column: `Column id="..." allowsSorting` with render prop `{({ allowsSorting, sortDirection }) => ( <span className="column-sort-header"> {allowsSorting && <span className="column-sort-icon">ArrowUp / ArrowDown / ArrowUpDown</span>} Label </span> )}`. React Aria sets `aria-sort` on the `<th>`, which triggers the sorted-header background via `.table-sortable thead th[aria-sort="ascending"]` / `[aria-sort="descending"]`.
- **Sorted header background:** Token `--table-slot-header-sorted-bg` (e.g. `var(--color-steel-100)`) in theme; ensures sortable column headers are not white when active.

## Implementation notes

- **All tables in cards** must use the same sorting pattern (sortDescriptor, onSortChange, column-sort-header + column-sort-icon, sorted th background).
- Use when you need selection, keyboard navigation, or strict accessibility (React Aria). For simpler tables (no sort, no selection), `TitanBorderlessTable` + semantic HTML may be enough.
- Provide empty state (“No rows”) and loading state (skeleton or spinner).
- Reference: playground `id="table"` and card demos (Comparison Bar Cards, Top Cities, etc.).
