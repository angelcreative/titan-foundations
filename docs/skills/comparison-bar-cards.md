# Comparison Bar Cards (family)

Universal UI anatomy for a **family of cards** that compare two datasets (e.g. segment vs baseline) across multiple sub-categories. Same structure for every card; **variants are identifiable** by the card title and the list of items (Device, Content type, Bio, Age, etc.).

**Family name:** Comparison Bar Cards  
**Variants:** Identified by dimension/category — e.g. Device | Content type | Bio | Age (each card has its own title and N items with icon + two bars + two %).

---

## When to use

- User asks for “comparison cards”, “vs baseline”, “benchmark by device/content type”, “segment vs audience comparison”.
- You need one or more cards comparing two datasets across sub-categories (e.g. Desktop/Mobile for Device; Own/Replies/Shares for Content type), with bars and a shared legend.

## Family anatomy (common to all variants)

| Region | Content |
|--------|---------|
| **Header** | **Title** (card category, e.g. “Device”, “Content type”) — bold, dark. **Description** (one short paragraph explaining what the graph shows and the comparison context). **“Read more”** link (blue, after description). |
| **Body** | **Multiple comparison items.** Each item: **Icon** (left, e.g. desktop, mobile, document, chat, share) + **Label** (e.g. “Desktop”, “Mobile”, “Own”, “Replies”, “Shares”) + **Two horizontal bars** (one darker, one lighter purple; stacked or adjacent) + **Two percentage values** (right-aligned, one per bar, e.g. “33.23%” / “28.39%”). |
| **Footer** | **Legend** (two items): small colored dot + label for each dataset (e.g. “LoL Streaming”, “Madrid Gaming Audience Analysis”). **No icons** in legend items. |
| **Optional footer actions** | **“Show full table”** = **tertiary button** that opens a **TitanDrawer** with the full table (and legend) inside; table in drawer **expands downward** as much as possible (flex + overflow). “Download” = tertiary button (optional, e.g. on Age card). |

## Variants (identifiable)

The **variant** is the **dimension/category** of the card. Structure stays the same; only the title and the list of items change.

| Variant example | Title | Items (label + two bars + two %) |
|-----------------|-------|-----------------------------------|
| **Device** | “Device” | Desktop, Mobile (or Tablet, etc.) |
| **Content type** | “Content type” | Own, Replies, Shares |
| **Bio** | “Bio” | Sub-categories as needed |
| **Age** | “Age” | Age bands |

## Titan usage

- **Surface:** `TitanCard` with `--surface-0`, `--card-slot-radius`, `--dialog-slot-pad`.
- **Typography:** Title: `--text-title`, `--text-weight-semibold`. Description: `--text-muted`, `--font-size-s` or `--text-body`. “Read more”: `--text-link`, `--text-link-hover`. Percentages: `--text-body` or `--text-title` (right-aligned).
- **Bars:** Two colors for the two datasets: e.g. darker `--color-violet-600`, lighter `--color-violet-200` (or `--button-primary` and `--divider`). Track: `--progress-slot-track-bg` or transparent.
- **Legend:** Dot color matches bar color; label only (no icons). Use `--text-body`, `--text-muted`.
- **Table sorting:** Same pattern as all card tables: **sortDescriptor** + **onSortChange** on `TitanTable`; sortable column headers show icon (ArrowUp/ArrowDown/ArrowUpDown) and get **background color when sorted** (`--table-slot-header-sorted-bg`).
- **Components:** `TitanCardGrid` + `TitanCard`, `TitanTable`, `TitanProgressBar`, `TitanDrawer` (triggerLabel + triggerClassName + triggerIcon for tertiary “Show full table”), `TitanButton` (tertiary for “Read more”, “Download”).

## Implementation notes

- The LLM picks the **variant** from user intent (e.g. “compare by device” → Device card; “content type comparison” → Content type card).
- **“Show full table”** always opens a **TitanDrawer** with title e.g. “Bio – Full table” / “Age – Full table”; drawer body contains description + full table (same columns, sortable) + legend. Use `triggerLabel="Show full table"`, `triggerClassName="btn btn-tertiary comparison-footer-link"`, `triggerIcon={<ArrowRight />}` so the trigger renders as tertiary. In drawer, table container uses flex so the table area expands downward and scrolls internally.
- “Read more” can open a modal or navigate. Provide empty and loading states (skeleton bars).
- Reference: playground `id="comparison-bar-cards"`.

## Related patterns

- Same metric as ratio/donut across segments → [comparison-donut-card.md](./comparison-donut-card.md).
- Full table in a drawer uses sortable table → [table-advanced.md](./table-advanced.md); drawer contract → [../drawer.md](../drawer.md).
