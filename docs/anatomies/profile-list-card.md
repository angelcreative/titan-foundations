# Profile List Card

Universal UI anatomy for a **card listing profiles**: table-like layout **without th**, two columns. Col 1: avatar + handle + name; col 2: icon or a number (cifra).

## When to use

- User asks for “list of people”, “profiles list”, “avatars and names”, “top users”, “creators with metric”.
- You need a card with multiple rows: avatar, primary label (handle/name), and either an action icon or a numeric value per row.

## Anatomy

| Region | Content |
|--------|---------|
| **Header** | Optional title + optional action (e.g. “View all”) or info icon. |
| **List** | Titan th-less table (`layout-table-wrap` + `table-borderless`, `tbody` only). **Col 1:** avatar + handle (link) + name/description. **Col 2:** either an **icon** (e.g. ExternalLink) or a **number/cifra** (e.g. “1.2k”, “845”). One row per profile. |

## Variants (col 2)

| Variant | Col 2 content |
|---------|----------------|
| **Icon** | Action icon (e.g. TitanIconButton with ExternalLink). |
| **Number** | Plain value (e.g. engagement, followers). Use `--text-body`, `font-variant-numeric: tabular-nums`, right-aligned. |

## Titan usage

- **Surface:** `TitanCard` with `--surface-0`, `--card-slot-radius`, `--dialog-slot-pad`.
- **Typography:** Handle/link: `--text-link`, `--text-link-hover`. Description: `--text-muted`. Col 2 number: `--text-body`, `--text-weight-medium`, tabular-nums.
- **Spacing:** Consistent row padding; avatar size fixed (e.g. 40px) with `--card-slot-radius` or circle.
- **Components:** `TitanCard`; col 2 = `TitanIconButton` (icon variant) or `<span>` with class for value (number variant). Optional `TitanButton` (link) for “View all”.

## Implementation notes

- **Layout:** Titan th-less table: `<div class="layout-table-wrap">` + `<table class="table-borderless">` with `aria-label`, no `<thead>`, only `<tbody>` and `<tr>`/`<td>`. Col 1: wrap avatar + handle + name in a cell group (e.g. `profile-list-cell-group`). Col 2: icon (e.g. TitanIconButton) or text (e.g. number with `profile-list-value`).
- **Col 2:** Use icon (e.g. ExternalLink) for “open profile” actions, or a plain number/cifra (e.g. engagement count) with tabular-nums; right-align the second column (e.g. `profile-list-col-action`).
- Empty state: “No profiles”. Loading: skeleton avatars + lines.
- Reference: playground `id="profile-list-card"` (two cards: icon variant + number variant).

## Related patterns

- Table contract (borderless, no thead) → [../table-borderless.md](../table-borderless.md). For sort/selection → [table-advanced.md](./table-advanced.md).
