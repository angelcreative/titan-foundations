# Skills Table

Universal UI anatomy for the **same table as Top Cities** (3 columns: name, two comparative bars + %, affinity pill; legend) **plus a search input** above the table. Col 1 = Skill (or name), col 2 = two bars (e.g. Audience / Baseline) each with its %, col 3 = pill.

## When to use

- User asks for “table with search”, “filterable table”, “skills list”, “searchable penetration table”.
- You need the Top Cities–style table (name, dual bar + %, pill) with a search/filter control above.

## Anatomy

| Region | Content |
|--------|---------|
| **Toolbar** | Search input (leading Search icon, placeholder e.g. “Search for a skill”). Full width above table. |
| **Legend** | Same as Top Cities: Audience / Baseline (or equivalent) with color dots. |
| **Table** | Same as Top Cities: col 1 = name (Skill), col 2 = two comparative bars + % each, col 3 = affinity pill. |

## Titan usage

- **Search:** `TitanInputField` with leading icon (Search), placeholder; `--input-*` tokens.
- **Table, bars, legend, pill:** Same as Top Cities Table (see top-cities-table.md).

## Implementation notes

- Filter rows client-side or server-side by the search term; show loading state if needed. Empty state: “No results”.
- Reference: playground `id="skills-table-card"`.
