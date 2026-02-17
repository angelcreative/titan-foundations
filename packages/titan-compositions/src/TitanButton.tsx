import type { CSSProperties, ReactNode } from 'react'
import { Button, type ButtonProps } from 'react-aria-components'

export type TitanButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'link'
  | 'delete'
  | 'delete-secondary'

export type TitanIconButtonVariant = 'secondary' | 'ghost' | 'delete'

const BUTTON_VARIANT_CLASS: Record<TitanButtonVariant, string> = {
  primary: 'btn btn-primary',
  secondary: 'btn btn-secondary',
  tertiary: 'btn btn-tertiary',
  link: 'btn btn-link-text',
  delete: 'btn btn-delete',
  'delete-secondary': 'btn btn-delete-secondary',
}

const ICON_BUTTON_VARIANT_CLASS: Record<TitanIconButtonVariant, string> = {
  secondary: 'icon-secondary',
  ghost: 'icon-ghost',
  delete: 'icon-delete',
}

export interface TitanButtonProps extends Omit<ButtonProps, 'className' | 'children'> {
  variant?: TitanButtonVariant
  className?: string
  icon?: ReactNode
  children?: ReactNode
}

export interface TitanIconButtonProps extends Omit<ButtonProps, 'className' | 'children'> {
  variant?: TitanIconButtonVariant
  className?: string
  children: ReactNode
}

export interface TitanToneStyle {
  '--pill-bg'?: string
  '--pill-color'?: string
  '--tag-bg'?: string
  '--tag-color'?: string
}

export function getToneStyle(
  tone: string,
  mode: 'pill' | 'tag'
): CSSProperties & TitanToneStyle {
  if (mode === 'pill') {
    return {
      '--pill-bg': `var(--color-${tone}-100)`,
      '--pill-color': `var(--color-${tone}-700)`,
    }
  }
  return {
    '--tag-bg': `var(--color-${tone}-200)`,
    '--tag-color': `var(--color-${tone}-600)`,
  }
}

export function TitanButton({
  variant = 'primary',
  className = '',
  icon,
  children,
  ...props
}: TitanButtonProps) {
  const baseClass = BUTTON_VARIANT_CLASS[variant]
  const withIconClass = icon ? 'with-icon' : ''
  const mergedClassName = [baseClass, withIconClass, className].filter(Boolean).join(' ')
  return (
    <Button className={mergedClassName} {...props}>
      {icon}
      {children}
    </Button>
  )
}

export function TitanIconButton({
  variant = 'ghost',
  className = '',
  children,
  ...props
}: TitanIconButtonProps) {
  const baseClass = ICON_BUTTON_VARIANT_CLASS[variant]
  const mergedClassName = [baseClass, className].filter(Boolean).join(' ')
  return (
    <Button className={mergedClassName} {...props}>
      {children}
    </Button>
  )
}
