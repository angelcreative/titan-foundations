import type { CSSProperties, ReactNode } from 'react'
import { Button, type ButtonProps } from 'react-aria-components'

export type TitanButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'link'
  | 'text'
  | 'delete'
  | 'delete-secondary'

export type TitanIconButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'base'
  | 'base-l'
  | 'neutral-base'
  | 'neutral-base-l'
  | 'delete'

export const TitanButtonVariants = {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
  Text: 'text',
  Link: 'link',
  Delete: 'delete',
  DeleteSecondary: 'delete-secondary',
} as const

export const TitanIconButtonVariants = {
  Primary: 'primary',
  Secondary: 'secondary',
  Base: 'base',
  BaseLarge: 'base-l',
  NeutralBase: 'neutral-base',
  NeutralBaseLarge: 'neutral-base-l',
  Ghost: 'ghost',
  Delete: 'delete',
} as const

const BUTTON_VARIANT_CLASS: Record<TitanButtonVariant, string> = {
  primary: 'btn btn-primary',
  secondary: 'btn btn-secondary',
  tertiary: 'btn btn-tertiary',
  link: 'btn btn-link-text',
  text: 'btn btn-link-text',
  delete: 'btn btn-delete',
  'delete-secondary': 'btn btn-delete-secondary',
}

const ICON_BUTTON_VARIANT_CLASS: Record<TitanIconButtonVariant, string> = {
  primary: 'icon-primary',
  secondary: 'icon-secondary',
  ghost: 'icon-ghost',
  base: 'icon-base',
  'base-l': 'icon-base-l',
  'neutral-base': 'icon-neutral-base',
  'neutral-base-l': 'icon-neutral-base-l',
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
  '--pill-icon-color'?: string
  '--tag-bg'?: string
  '--tag-color'?: string
}

const PILL_TONE_MAP: Record<string, { bg: string; color: string; icon: string }> = {
  success: {
    bg: 'var(--pill-slot-success-bg)',
    color: 'var(--pill-slot-success-color)',
    icon: 'var(--pill-slot-success-icon-color)',
  },
  error: {
    bg: 'var(--pill-slot-error-bg)',
    color: 'var(--pill-slot-error-color)',
    icon: 'var(--pill-slot-error-icon-color)',
  },
  alert: {
    bg: 'var(--pill-slot-alert-bg)',
    color: 'var(--pill-slot-alert-color)',
    icon: 'var(--pill-slot-alert-icon-color)',
  },
  warning: {
    bg: 'var(--pill-slot-alert-bg)',
    color: 'var(--pill-slot-alert-color)',
    icon: 'var(--pill-slot-alert-icon-color)',
  },
  information: {
    bg: 'var(--pill-slot-information-bg)',
    color: 'var(--pill-slot-information-color)',
    icon: 'var(--pill-slot-information-icon-color)',
  },
  info: {
    bg: 'var(--pill-slot-information-bg)',
    color: 'var(--pill-slot-information-color)',
    icon: 'var(--pill-slot-information-icon-color)',
  },
  disabled: {
    bg: 'var(--pill-slot-disabled-bg)',
    color: 'var(--pill-slot-disabled-color)',
    icon: 'var(--pill-slot-disabled-color)',
  },
}

export function getToneStyle(
  tone: string,
  mode: 'pill' | 'tag'
): CSSProperties & TitanToneStyle {
  if (mode === 'pill') {
    const mapped = PILL_TONE_MAP[tone]
    if (mapped) {
      return {
        '--pill-bg': mapped.bg,
        '--pill-color': mapped.color,
        '--pill-icon-color': mapped.icon,
      }
    }
    return {
      '--pill-bg': `var(--color-${tone}-100, var(--pill-slot-bg))`,
      '--pill-color': `var(--color-${tone}-700, var(--pill-slot-color))`,
      '--pill-icon-color': `var(--color-${tone}-600, var(--pill-slot-icon-color))`,
    }
  }
  return {
    '--tag-bg': `var(--color-${tone}-200, var(--pill-slot-bg))`,
    '--tag-color': `var(--color-${tone}-600, var(--pill-slot-color))`,
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
  variant = 'primary',
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

export type TitanErrorButtonVariant = 'primary' | 'secondary' | 'text'
export type TitanDestructiveIconButtonVariant = 'primary' | 'secondary' | 'base' | 'base-l'

export const TitanErrorButtonVariants = {
  Primary: 'primary',
  Secondary: 'secondary',
  Text: 'text',
} as const

export const TitanDestructiveIconButtonVariants = {
  Primary: 'primary',
  Secondary: 'secondary',
  Base: 'base',
  BaseLarge: 'base-l',
} as const

export interface TitanErrorButtonProps extends Omit<ButtonProps, 'className' | 'children'> {
  variant?: TitanErrorButtonVariant
  className?: string
  children?: ReactNode
}

export interface TitanDestructiveIconButtonProps extends Omit<ButtonProps, 'className' | 'children'> {
  variant?: TitanDestructiveIconButtonVariant
  className?: string
  children: ReactNode
}

const ERROR_BUTTON_VARIANT_CLASS: Record<TitanErrorButtonVariant, string> = {
  primary: 'btn btn-delete',
  secondary: 'btn btn-delete-secondary',
  text: 'btn btn-link-text btn-error-text',
}

const DESTRUCTIVE_ICON_BUTTON_VARIANT_CLASS: Record<TitanDestructiveIconButtonVariant, string> = {
  primary: 'icon-delete',
  secondary: 'icon-delete-secondary',
  base: 'icon-delete-base',
  'base-l': 'icon-delete-base-l',
}

export function TitanErrorButton({
  variant = 'primary',
  className = '',
  children,
  ...props
}: TitanErrorButtonProps) {
  const baseClass = ERROR_BUTTON_VARIANT_CLASS[variant]
  const mergedClassName = [baseClass, className].filter(Boolean).join(' ')
  return (
    <Button className={mergedClassName} {...props}>
      {children}
    </Button>
  )
}

export function TitanDestructiveIconButton({
  variant = 'primary',
  className = '',
  children,
  ...props
}: TitanDestructiveIconButtonProps) {
  const baseClass = DESTRUCTIVE_ICON_BUTTON_VARIANT_CLASS[variant]
  const mergedClassName = [baseClass, className].filter(Boolean).join(' ')
  return (
    <Button className={mergedClassName} {...props}>
      {children}
    </Button>
  )
}
