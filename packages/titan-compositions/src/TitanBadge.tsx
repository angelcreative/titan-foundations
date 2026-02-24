import type { ReactNode } from 'react'

export interface TitanBadgeProps {
  count: number
  max?: number
}

export interface TitanBadgeAnchorProps {
  count: number
  max?: number
  children: ReactNode
}

export function TitanBadge({ count, max = 99 }: TitanBadgeProps) {
  if (count <= 0) return null
  const isOverflow = count > max
  const label = isOverflow ? `${max}+` : String(count)
  return (
    <span className={`badge${isOverflow ? ' badge-overflow' : ''}`} aria-label={`${count} notifications`}>
      {label}
    </span>
  )
}

export function TitanBadgeAnchor({ count, max = 99, children }: TitanBadgeAnchorProps) {
  return (
    <span className="badge-anchor">
      {children}
      {count > 0 && (
        <span className="badge-indicator">
          <TitanBadge count={count} max={max} />
        </span>
      )}
    </span>
  )
}
