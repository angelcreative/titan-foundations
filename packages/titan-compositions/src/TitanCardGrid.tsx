import type { ReactNode } from 'react'

export type TitanCardSpan = 4 | 8 | 12 | 16

export interface TitanCardGridProps {
  children: ReactNode
}

export interface TitanCardProps {
  children: ReactNode
  span?: TitanCardSpan
  className?: string
}

/**
 * 16-column Titan layout grid.
 */
export function TitanCardGrid({ children }: TitanCardGridProps) {
  return <div className="cards-layout-grid">{children}</div>
}

/**
 * Reusable card with 4/8/12/16 span contract.
 */
export function TitanCard({ children, span = 16, className = '' }: TitanCardProps) {
  const spanClass = `span-${span}`
  const mergedClassName = ['card', 'layout-card', spanClass, className].filter(Boolean).join(' ')
  return <article className={mergedClassName}>{children}</article>
}
