# Next.js App Router + titan-compositions

This doc explains the **client-boundary requirement** when using `titan-compositions` in a Next.js App Router project, and gives two patterns that work for all LLMs and setups.

## Why the error happens

- `titan-compositions` uses **react-aria-components** (and in places like `TitanSidebar`, **React.createContext**).
- Those APIs exist only in the **client** React runtime.
- In Next.js App Router, **pages and layouts are Server Components by default**. The RSC (React Server Components) runtime does **not** provide `createContext`, so importing `titan-compositions` in a Server Component leads to:

```text
TypeError: createContext is not a function
  at module evaluation (...@react-aria/utils...)
  at ... app/page.tsx
```

So the failure is at the **first file** that imports from `titan-compositions` in a server boundary (e.g. `app/page.tsx` or `app/layout.tsx`).

## Universal rule

**Any module that imports from `titan-compositions` must run on the client.**

So either:

- That file has **`"use client"`** at the top, or  
- That file is only ever imported by other files that already have `"use client"` (e.g. a client shell).

This applies **only** to Next.js App Router. In Vite, CRA, Remix, etc., everything is client; the rule is not needed and adding `"use client"` does not break anything (other bundlers ignore the directive).

## Pattern A: Page (or layout) as Client Component

Use when the whole page (or layout) uses Titan (navbar, sidebar, table, etc.) and you are fine with the entire tree being client-rendered.

Add `"use client"` at the very top of the file that imports from `titan-compositions`:

```tsx
"use client"

import { TitanNavbar } from "titan-compositions"
import { ReportsSidebar } from "@/components/reports/ReportsSidebar"
import { ReportsTable } from "@/components/reports/ReportsTable"

export default function ReportsPage() {
  return (
    <>
      <TitanNavbar theme="audiense" />
      <ReportsSidebar />
      <main>
        <ReportsTable />
      </main>
    </>
  )
}
```

Child components (e.g. `ReportsSidebar`, `ReportsTable`) can also use Titan; if they import Titan themselves, they should have `"use client"` too (typical when they use hooks or interactivity).

## Pattern B: Client shell (layout stays Server)

Use when you want the **root layout** to remain a Server Component and only the “Titan part” to run on the client.

1. Create a **client shell** component that imports and renders Titan:

```tsx
// components/TitanAppShell.tsx
"use client"

import { TitanNavbar } from "titan-compositions"
import { ReportsSidebar } from "@/components/reports/ReportsSidebar"

export function TitanAppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TitanNavbar theme="audiense" />
      <ReportsSidebar />
      <main>{children}</main>
    </>
  )
}
```

2. In the **layout** (Server Component), do **not** import from `titan-compositions`; only import the client shell:

```tsx
// app/layout.tsx (no "use client")
import { TitanAppShell } from "@/components/TitanAppShell"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme="audiense">
      <body>
        <TitanAppShell>{children}</TitanAppShell>
      </body>
    </html>
  )
}
```

Pages under that layout can be Server or Client as needed; any page that imports Titan directly must still have `"use client"` (or be rendered inside a client component that does).

## MCP / LLM setup

When configuring or generating a **Next.js** app that uses `titan-compositions`:

- For **layout** or **pages** that use Titan (navbar, sidebar, tables, etc.), ensure a **client boundary**:
  - Either add **`"use client"`** to that layout/page, or  
  - Introduce a **client shell** component (e.g. `TitanAppShell.tsx` with `"use client"`) that imports Titan, and have the layout only import that shell.

Applying this by default avoids the `createContext is not a function` error for any consumer (v0 or any other LLM-generated Next + Titan app).

## Summary

| Context                    | Action                                                                 |
|---------------------------|------------------------------------------------------------------------|
| Next.js App Router        | Only import `titan-compositions` from Client Components (`"use client"` or client shell). |
| Vite / CRA / Remix / etc. | No change; optional `"use client"` is harmless.                        |
