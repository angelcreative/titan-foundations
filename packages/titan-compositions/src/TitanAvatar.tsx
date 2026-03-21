import type { ReactNode } from 'react'
import { renderIconNode } from './icons'

export interface TitanAvatarProps {
  account?: string
  icon?: ReactNode
  'aria-label'?: string
}

export function TitanAvatar({
  account,
  icon,
  'aria-label': ariaLabel,
}: TitanAvatarProps) {
  if (!account) {
    return (
      <div role="img" className="titan-avatar" aria-label={ariaLabel}>
        {icon ?? renderIconNode('user')}
      </div>
    )
  }
  const firstLetter = account.charAt(0).toUpperCase()
  return (
    <div role="img" className="titan-avatar body-m-400" aria-label={ariaLabel}>
      {firstLetter}
    </div>
  )
}
