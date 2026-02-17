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
 * Reusable page composition:
 * - Navbar
 * - Breadcrumb
 * - Content: 2/4 + 2/4 in first row, 4/4 in second row
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
      <main className="page">
        <section className="card">
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
