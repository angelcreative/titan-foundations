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
4. **Scroll**: nav content is wrapped in **`.titan-sidebar-body`** (vertical scroll); the rail does not grow past the viewport.
5. **Collapsed rail**: items render as **circular icon buttons** (`border-radius: 50%`, fixed hit size); center icons with `icon` on each item.

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
- **Tree files**: `TitanSidebarTreeItem` with no `icon` **defaults to** the `file-text`/`file` icon so nested rows stay consistent with root files.
- **Search**: `TitanSidebarSearch` returns `null` when collapsed — do not duplicate a second search control.
- **Folders**: `TitanSidebarFolder` supports `defaultExpanded`, or controlled `expanded` / `onExpandedChange`. Use **`depth`** on `TitanSidebarFolder` / `TitanSidebarTreeItem` only for **extra** nesting within the same folder column (siblings under a folder usually stay `depth={0}`; CSS aligns rows and guides).

## Live reference

Playground **Common patterns** → showcase id **`sidebar-variants`** (`playground/web/src/SidebarVariantsDemo.tsx`): four columns, one variant each.

## Related

- Repo policy: root **`AGENTS.md`** and **`.claude/skills/titan-foundations/SKILL.md`** for tokens and anatomies.
