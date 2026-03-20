import type { ReactNode } from 'react'
import { Button, Dialog, DialogTrigger, Modal, ModalOverlay } from 'react-aria-components'
import { renderIconNode } from './icons'

export interface TitanDrawerProps {
  /** When provided, used as the trigger instead of the default button. */
  trigger?: ReactNode
  /** Used when `trigger` is not provided. */
  triggerLabel?: string
  /** Class for the default trigger button (e.g. "btn btn-tertiary"). Ignored when `trigger` is provided. */
  triggerClassName?: string
  /** Optional icon to show after the label on the default trigger. Ignored when `trigger` is provided. */
  triggerIcon?: ReactNode
  title: string
  children: ReactNode
  isOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
  onClose?: () => void
}

export function TitanDrawer({
  trigger,
  triggerLabel,
  triggerClassName,
  triggerIcon,
  title,
  children,
  isOpen,
  onOpenChange,
  onClose,
}: TitanDrawerProps) {
  const isControlled = isOpen !== undefined || onOpenChange !== undefined || onClose !== undefined
  if (isControlled && !trigger) {
    return (
      <ModalOverlay
        isDismissable
        className="drawer-overlay"
        isOpen={isOpen}
        onOpenChange={(open) => {
          onOpenChange?.(open)
          if (!open) onClose?.()
        }}
      >
        <Modal className="drawer-modal">
          <Dialog className="drawer-panel">
            {({ close }) => (
              <>
                <header className="drawer-header">
                  <h3 className="drawer-title">{title}</h3>
                  <Button className="icon-ghost drawer-close-button" aria-label="Close drawer" onPress={close}>
                    {renderIconNode('x')}
                  </Button>
                </header>
                <div className="drawer-body">{children}</div>
              </>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    )
  }
  return (
    <DialogTrigger>
      {trigger ?? (
        <Button className={triggerClassName ?? 'btn btn-secondary'}>
          {triggerLabel ?? 'Open'}
          {triggerIcon != null ? <> {triggerIcon}</> : null}
        </Button>
      )}
      <ModalOverlay isDismissable className="drawer-overlay">
        <Modal className="drawer-modal">
          <Dialog className="drawer-panel">
            {({ close }) => (
              <>
                <header className="drawer-header">
                  <h3 className="drawer-title">{title}</h3>
                  <Button className="icon-ghost drawer-close-button" aria-label="Close drawer" onPress={close}>
                    {renderIconNode('x')}
                  </Button>
                </header>
                <div className="drawer-body">{children}</div>
              </>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  )
}
