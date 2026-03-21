import type { ReactNode } from 'react'
import { renderIconNode } from './icons'

export const TitanPillStates = {
  Base: 'base',
  Success: 'success',
  Alert: 'alert',
  Disabled: 'disabled',
  Error: 'error',
  Info: 'info',
} as const

export type TitanPillState = (typeof TitanPillStates)[keyof typeof TitanPillStates]

export interface TitanPillProps {
  id?: string
  label?: string
  children?: ReactNode
  state?: TitanPillState
  tone: string
  removable?: boolean
  isDisabled?: boolean
  onDismiss?: (id: string) => void
  'aria-label'?: string
  className?: string
}

function asText(value: ReactNode): string {
  return typeof value === 'string' ? value : ''
}

export function TitanPill({
  id,
  label,
  children,
  state = TitanPillStates.Success,
  tone,
  removable = true,
  isDisabled = false,
  onDismiss,
  'aria-label': ariaLabel,
  className,
}: TitanPillProps) {
  const content = children ?? label ?? ''
  const idForDismiss = id ?? asText(content)

  return (
    <span
      className={['pill', `pill-${state}`, tone && !isDisabled ? `pill-tone-${tone}` : '', isDisabled ? 'pill-disabled' : '', className].filter(Boolean).join(' ')}
      role="status"
      aria-label={ariaLabel ?? (typeof content === 'string' ? content : undefined)}
      {...(isDisabled ? { 'aria-disabled': true } : {})}
    >
      <span className="pill-label">{content}</span>
      {removable && onDismiss && !isDisabled ? (
        <button
          type="button"
          className="pill-close"
          aria-label={`Remove ${typeof content === 'string' ? content : 'item'}`}
          onClick={() => onDismiss(idForDismiss)}
        >
          {renderIconNode('x')}
        </button>
      ) : null}
    </span>
  )
}
