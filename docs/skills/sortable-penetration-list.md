# Sortable Penetration List

Universal UI anatomy for a **sortable list** where each row has a label and a **penetration** (percentage or rate), often with controls to sort by column.

## When to use

- User asks for “sortable list”, “penetration list”, “ranked by share”, “list with %”.
- You need a list or table of items with a penetration/percentage column and sort (e.g. by label or by %).

## Anatomy

| Region | Content |
|--------|---------|
| **Header** | Two columns: label column (e.g. “Interest”) — **not sortable**; bar + cifra column (e.g. “Avg. Penetration”) — **sortable only here**, with asc/desc toggle (click to change order). |
| **Rows** | Label (col 1) + bar + percentage (col 2). Sort order applies only by penetration value (asc or desc). |

## Titan usage

- **Surface:** Card or bordered block with `--surface-0`, `--card-slot-radius`. Table/list uses `--table-cell-background`, `--table-slot-cell-pad-*`.
- **Typography:** Headers: `--table-slot-header-color`, `--text-weight-semibold`. Cells: `--text-body`; alignment: right for numbers.
- **Sort:** Only on the column that contains the bar and the cifra (penetration). Use a button or clickable header with `aria-sort="ascending"` or `"descending"`; icon ArrowUp (asc) or ArrowDown (desc). Toggle between asc and desc on click. Label column has no sort.
- **Components:** `TitanCard` (optional wrapper), table or list with sort state; or `TitanBorderlessTable` (React Aria) if using Table Advanced pattern.

## Implementation notes

- Default sort: usually by penetration descending. Expose sort to keyboard (column header focusable, Enter/Space to sort).
- Empty state: “No data”. Loading: skeleton rows.
- Reference: playground `id="sortable-penetration-list"`.

## Related patterns

- Tabular version (name + dual bars + pill) → [top-cities-table.md](./top-cities-table.md).
- Single bar per row (proportions) → [distribution-bar-card.md](./distribution-bar-card.md). Sort implementation → [table-advanced.md](./table-advanced.md).
