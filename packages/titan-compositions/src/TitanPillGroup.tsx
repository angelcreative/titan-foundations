import type { ReactNode } from 'react'
import { TagGroup, TagList } from 'react-aria-components'

export interface TitanPillGroupProps {
  children: ReactNode
  label?: string
  onRemove?: (keys: Set<string>) => void
  'aria-label'?: string
  className?: string
}

export interface TitanPillListProps {
  children: ReactNode
  className?: string
}

export function TitanPillGroup({
  children,
  label,
  onRemove,
  'aria-label': ariaLabel,
  className = '',
}: TitanPillGroupProps) {
  return (
    <TagGroup
      className={['titan-pill-group', className].filter(Boolean).join(' ')}
      aria-label={ariaLabel ?? label}
      onRemove={onRemove ? (keys) => onRemove(keys as Set<string>) : undefined}
    >
      {label && <span className="titan-pill-group-label">{label}</span>}
      {children}
    </TagGroup>
  )
}

export function TitanPillList({
  children,
  className = '',
}: TitanPillListProps) {
  return (
    <TagList className={['titan-pill-list', className].filter(Boolean).join(' ')}>
      {children}
    </TagList>
  )
}
