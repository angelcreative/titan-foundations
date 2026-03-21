import type { ReactNode } from 'react'
import {
  ToggleButton,
  ToggleButtonGroup,
  type ToggleButtonProps,
  type ToggleButtonGroupProps,
} from 'react-aria-components'

export type TitanButtonGroupOrientation = 'horizontal' | 'vertical'

export interface TitanButtonGroupProps extends Omit<ToggleButtonGroupProps, 'className' | 'children'> {
  children: ReactNode
  orientation?: TitanButtonGroupOrientation
  className?: string
}

export interface TitanIndividualButtonProps extends Omit<ToggleButtonProps, 'className' | 'children'> {
  children: ReactNode
  className?: string
}

export function TitanButtonGroup({
  children,
  orientation = 'horizontal',
  className = '',
  ...props
}: TitanButtonGroupProps) {
  const mergedClassName = ['titan-button-group', `body-m-400`, className].filter(Boolean).join(' ')
  return (
    <ToggleButtonGroup
      selectionMode="single"
      className={mergedClassName}
      data-orientation={orientation === 'vertical' ? 'vertical' : undefined}
      {...props}
    >
      {children}
    </ToggleButtonGroup>
  )
}

export function TitanIndividualButton({
  children,
  className = '',
  ...props
}: TitanIndividualButtonProps) {
  const mergedClassName = ['titan-individual-button', 'heading-xs-500', className].filter(Boolean).join(' ')
  return (
    <ToggleButton className={mergedClassName} {...props}>
      {children}
    </ToggleButton>
  )
}
