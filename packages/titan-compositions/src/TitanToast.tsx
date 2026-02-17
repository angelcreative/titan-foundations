import type { ReactNode } from 'react'
import { Button } from 'react-aria-components'
import { X } from 'lucide-react'

export type TitanToastVariant = 'success' | 'error' | 'info' | 'warning'

export interface TitanToastItem {
  id: string | number
  variant: TitanToastVariant
  title: string
  body: string
  icon?: ReactNode
}

export interface TitanToastRegionProps {
  toasts: TitanToastItem[]
  onDismiss: (id: TitanToastItem['id']) => void
}

export function TitanToastRegion({ toasts, onDismiss }: TitanToastRegionProps) {
  return (
    <div className="toast-region" role="region" aria-label="Notifications" aria-live="polite">
      {toasts.map((toast) => (
        <article key={toast.id} className={`toast-card toast-${toast.variant}`} role="status">
          <div className="toast-content">
            {toast.icon ? (
              <span className="toast-icon" aria-hidden="true">
                {toast.icon}
              </span>
            ) : null}
            <div className="toast-text">
              <strong>{toast.title}</strong>
              <span>{toast.body}</span>
            </div>
          </div>
          <Button className="icon-ghost toast-close-button" aria-label="Dismiss toast" onPress={() => onDismiss(toast.id)}>
            <X />
          </Button>
        </article>
      ))}
    </div>
  )
}
