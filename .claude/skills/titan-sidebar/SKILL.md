---
name: titan-sidebar
description: Titan sidebar layout variants — flat nav, titled sections, file tree, and complex (search + tree). Use when building or reviewing app chrome sidebars in titan-compositions.
---

## When to use

- Choosing or implementing a **left app sidebar** with `titan-compositions`.
- Mapping product IA (flat links vs sections vs explorer-style tree).

## Execution order

1. Start from **`TitanSidebar`** (`packages/titan-compositions/src/TitanSidebar.tsx`); styles live in **`packages/titan-compositions/src/styles/titan-compositions.css`** (`titan-sidebar*` classes).
2. Prefer **composition** over custom HTML/CSS: `TitanSidebarItem`, `TitanSidebarHeader`, `TitanSidebarSection`, `TitanSidebarSearch`, `TitanSidebarTree`, `TitanSidebarTreeItem`, `TitanSidebarFolder`.
3. **Expand/collapse** is built into `TitanSidebar` via `collapsed`, `onToggle` (toggle button is rendered at the **bottom** of the rail).

## Four variants

| Variant | Structure | Key components |
|--------|-----------|----------------|
| **Default** | Stack of primary nav rows | `TitanSidebar` → `TitanSidebarItem` × n |
| **With titles** | One or more titled blocks | `TitanSidebarSection` → `TitanSidebarHeader` + `TitanSidebarItem`s |
| **File tree** | Sections + nested folders and files | `TitanSidebarHeader`, `TitanSidebarTree`, `TitanSidebarFolder`, `TitanSidebarTreeItem` (`depth` for indent) |
| **Complex** | Tree (or titled nav) + filter | `TitanSidebarSearch` **first** (hidden automatically when `collapsed`), then same as tree |

## Rules

- **Active item**: single selection via sidebar context; pass `defaultActiveId` / `activeId` + `onActiveChange` on `TitanSidebar` when controlled.
- **Icons**: `icon` prop accepts a Lucide component or a string resolved by the Titan icon pipeline (`renderIconNode`).
- **Search**: `TitanSidebarSearch` returns `null` when collapsed — do not duplicate a second search control.
- **Folders**: `TitanSidebarFolder` supports `defaultExpanded`, or controlled `expanded` / `onExpandedChange`; nested folders pass higher `depth` on folder rows and matching `depth` on `TitanSidebarTreeItem`.

## Live reference

Playground **Common patterns** → showcase id **`sidebar-variants`** (`playground/web/src/SidebarVariantsDemo.tsx`): four columns, one variant each.

## Related

- Repo policy: root **`AGENTS.md`** and **`.claude/skills/titan-foundations/SKILL.md`** for tokens and anatomies.
