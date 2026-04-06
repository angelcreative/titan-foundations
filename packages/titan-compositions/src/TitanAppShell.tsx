import type { ReactNode } from 'react'

export interface TitanAppShellProps {
  /** Full-width top bar (wrap `TitanNavbar` in `TitanNavBar` for centered 1440px chrome). */
  navbar: ReactNode
  /** Optional left sidebar; width follows `TitanSidebar` (expanded/collapsed). */
  sidebar?: ReactNode
  /** Breadcrumb row; omit when the page has no trail. */
  breadcrumb?: ReactNode
  /** Main scrollable page content. */
  children: ReactNode
  /** Optional class on the root node. */
  className?: string
}

/**
 * Application shell: navbar (full viewport width) → body row [ sidebar | main column ].
 * The main column is `100% − sidebar` when `sidebar` is set. Breadcrumb strip + main use
 * `.titan-app-content-inner` so inner content is max **1280px** by default and **1440px**
 * from a **1440px** viewport width upward, centered in the column.
 */
export function TitanAppShell({ navbar, sidebar, breadcrumb, children, className }: TitanAppShellProps) {
  const rootClass = ['titan-app-root', className].filter(Boolean).join(' ')
  return (
    <div className={rootClass}>
      {navbar}
      <div className="titan-app-body">
        {sidebar ? <div className="titan-app-sidebar-slot">{sidebar}</div> : null}
        <div className="titan-app-main-column">
          {breadcrumb ? (
            <div className="titan-app-breadcrumb-strip">
              <div className="titan-app-content-inner">{breadcrumb}</div>
            </div>
          ) : null}
          <main className="titan-app-main">
            <div className="titan-app-content-inner">{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}
