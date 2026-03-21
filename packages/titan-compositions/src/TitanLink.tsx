import type { ReactNode } from 'react'
import { Link, type LinkProps } from 'react-aria-components'
import { renderIconNode } from './icons'

export type TitanLinkSize = 's' | 'm'

export interface TitanLinkProps extends Omit<LinkProps, 'className' | 'children'> {
  children: ReactNode
  size?: TitanLinkSize
  withIcon?: boolean
  className?: string
}

export function TitanLink({
  children,
  size = 'm',
  withIcon = false,
  className = '',
  ...props
}: TitanLinkProps) {
  const mergedClassName = [`titan-link`, `text-link-${size}`, className].filter(Boolean).join(' ')
  return (
    <Link className={mergedClassName} {...props}>
      {children}
      {withIcon && renderIconNode('redirect')}
    </Link>
  )
}
