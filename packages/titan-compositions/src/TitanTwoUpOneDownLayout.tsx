import type { ReactNode } from 'react'
import { TitanBreadcrumb, type TitanBreadcrumbItem } from './TitanBreadcrumb'
import { TitanCard, TitanCardGrid } from './TitanCardGrid'
import { TitanNavbar, type TitanNavbarTheme } from './TitanNavbar'

export interface TitanTwoUpOneDownLayoutProps {
  theme?: TitanNavbarTheme
  userInitial?: string
  breadcrumbItems: TitanBreadcrumbItem[]
  breadcrumbCurrentLabel: string
  leftTop: ReactNode
  rightTop: ReactNode
  bottom: ReactNode
}

/**
 * Reusable page composition (no sidebar):
 * - Navbar (full width; inner content centered via `TitanNavBar`)
 * - Breadcrumb (flush under navbar via `page--flush-breadcrumb` + `page-breadcrumb-host`)
 * - Content: 2/4 + 2/4 in first row, 4/4 in second row
 *
 * For **navbar + sidebar + breadcrumb + main**, use `TitanAppShell` instead.
 *
 * For pages with **navbar only** (no breadcrumb), use `<main className="page">` without
 * `page--flush-breadcrumb` so normal top padding remains. Do not use the flush classes
 * unless navbar and breadcrumb appear together.
 */
export function TitanTwoUpOneDownLayout({
  theme = 'insights',
  userInitial = 'A',
  breadcrumbItems,
  breadcrumbCurrentLabel,
  leftTop,
  rightTop,
  bottom,
}: TitanTwoUpOneDownLayoutProps) {
  return (
    <>
      <TitanNavbar theme={theme} userInitial={userInitial} />
      <main className="page page--flush-breadcrumb">
        <section className="page-breadcrumb-host">
          <TitanBreadcrumb items={breadcrumbItems} currentLabel={breadcrumbCurrentLabel} />
        </section>
        <TitanCardGrid>
          <TitanCard span={8}>{leftTop}</TitanCard>
          <TitanCard span={8}>{rightTop}</TitanCard>
          <TitanCard span={16}>{bottom}</TitanCard>
        </TitanCardGrid>
      </main>
    </>
  )
}
