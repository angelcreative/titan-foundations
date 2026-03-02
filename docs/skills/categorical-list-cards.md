# Categorical List Cards (family)

Universal UI anatomy for a **family of list-based cards**: same container and header pattern, with **three identifiable variants** in the content area (Domains, Hashtags, Mentioned users). Use when you need categorized lists with title, description, and a vertical list of items.

**Family name:** Categorical List Cards  
**Variants:** Domains | Hashtags | Mentioned users

---

## When to use

- User asks for “list cards”, “domains card”, “hashtags list”, “mentioned users”, “categorical lists”, “audience lists”.
- You need a card (or row of cards) showing a title, a short description/sorting context, and a list of items — with item structure that varies by variant.

## Family anatomy (common to all variants)

| Region | Content |
|--------|---------|
| **Container** | White card, rounded corners, light separation from background. |
| **Header** | **Title** (bold, e.g. “Domains”, “Hashtags”, “Mentioned users”) + **Description** (lighter, smaller: sorting or context, e.g. “Sorted by the number of times found in content posted by this audience.”). |
| **Content area** | Vertical list; items separated by a thin horizontal divider. |
| **Spacing** | Uniform padding; consistent vertical spacing between header and list, and between list items. |

## Variants (identifiable)

| Variant | Purpose | Content per row | Optional footer |
|---------|---------|-----------------|-----------------|
| **Domains** | List of links (e.g. domains). | Single line: clickable link (blue), e.g. `twitch.tv`, `youtube.com`. | “Download” link + icon (export list). |
| **Hashtags** | List of hashtags with platform context. | **Left:** hashtag text (e.g. `#valorant`, `#ewc2025`). **Right:** small group of social platform icons (X, Facebook, LinkedIn, Instagram) for per-item actions or filters. | — |
| **Mentioned users** | List of users (e.g. mentioned by audience). | **Left:** circular avatar. **Right:** username/handle as clickable link (e.g. `@JeffarVlogs`, `@grok`). | — |

## Titan usage

- **Surface:** `TitanCard` with `--surface-0`, `--card-slot-radius`, `--dialog-slot-pad`.
- **Typography:** Title: `--text-title`, `--text-weight-semibold`. Description: `--text-muted`, `--font-size-s` (or `--text-body` smaller). Links: `--text-link`, `--text-link-hover`.
- **Dividers:** Thin line between list items: `--divider` or `--color-black-200`.
- **Footer link:** “Download” as `TitanButton` variant link or `<a>`; icon with `--icon-primary`.
- **Components:** `TitanCardGrid` + `TitanCard` (e.g. span 4 per card for 3 columns); optional `TitanButton` (link) for Download.

## Implementation notes

- **Family = one name, variants = identifiable.** The LLM should choose the variant from user intent (e.g. “domains” → Domains variant; “hashtags with platforms” → Hashtags variant; “mentioned users” → Mentioned users variant).
- Use list semantics (`<ul>`/`<li>`) or `role="list"`; each link/row focusable. Avatar: `alt` or `aria-hidden` + visible username.
- Empty state: “No domains” / “No hashtags” / “No users”. Loading: skeleton lines or placeholders.
- Scannability: keep density balanced; dividers and consistent row height improve scanning (Jakob’s Law, Proximity).

## Related patterns

- If the list becomes long or needs sort/pagination → use [table-advanced.md](./table-advanced.md).
- Filter panel beside results → [vertical-filter-panel.md](./vertical-filter-panel.md).
