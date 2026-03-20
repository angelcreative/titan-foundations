# @titan-ds/runtime

Single-package Titan runtime: one install brings compositions, React Aria, Lucide, and Tabler. Use this when setting up Titan in a new project (e.g. from Cursor, Claude, V0, or Figma Make) so the LLM only runs one command instead of four.

## Install

```bash
npm i @titan-ds/runtime
```

This installs:

- `titan-compositions`
- `react` / `react-dom`
- `react-aria-components`
- `@internationalized/date`
- `lucide-react`
- `@tabler/icons-react`

**pnpm:** With pnpm, `titan-compositions` may not appear in root `node_modules` (it lives in the store). Always import from `@titan-ds/runtime` and `@titan-ds/runtime/styles`; the runtime re-exports everything and resolution works correctly.

## Usage

Import components from `@titan-ds/runtime` (same API as `titan-compositions`):

```tsx
import {
  TitanButton,
  TitanTable,
  TitanTableHeader,
  TitanColumn,
  TitanTableBody,
  TitanRow,
  TitanCell,
} from "@titan-ds/runtime";
import "@titan-ds/runtime/styles";
```

Use Lucide or Tabler for icons (already installed):

```tsx
import { Check } from "lucide-react";
import { IconCalendar } from "@tabler/icons-react";
```

Load Titan tokens and theme in your app (e.g. in `index.html` or layout):

1. Google Fonts: Poppins (400, 500, 600, 700)
2. `tokens/css/titan.css` (from CDN or copied from [titan-foundations](https://github.com/angelcreative/titan-foundations))
3. Theme CSS, e.g. `tokens/themes/_insights.css`
4. Set `<html data-theme="insights">` (or another theme name)

## Next.js App Router

Any file that imports from `@titan-ds/runtime` must be a Client Component: add `"use client"` at the top, or import Titan only from components that already have `"use client"`.

## Publishing

From this directory:

```bash
npm login
npm publish --access public
```

Uses the `titan-ds` org on npm (same account as titan-compositions).
