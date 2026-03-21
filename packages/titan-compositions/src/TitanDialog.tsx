import type { ReactNode } from 'react'
import { Button, Dialog, DialogTrigger, Modal, ModalOverlay } from 'react-aria-components'
import { renderIconNode } from './icons'

export interface TitanDialogProps {
  triggerLabel?: string
  title?: string
  body?: ReactNode
  leftAction?: ReactNode
  rightAction?: ReactNode
  isOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
  onClose?: () => void
  'aria-label'?: string
  children?: ReactNode
}

function DialogContent({
  title,
  ariaLabel,
  body,
  leftAction,
  rightAction,
  close,
}: {
  title?: string
  ariaLabel?: string
  body?: ReactNode
  leftAction?: ReactNode
  rightAction?: ReactNode
  close: () => void
}) {
  return (
    <>
      <Button className="dialog-close-button" aria-label="Close dialog" onPress={close}>
        {renderIconNode('x')}
      </Button>
      {(title || ariaLabel) && (
        <header className="dialog-header">
          <h3 className="dialog-title">{title ?? ariaLabel}</h3>
        </header>
      )}
      {body != null && <div className="dialog-body">{body}</div>}
      {(leftAction || rightAction) && (
        <footer className="dialog-footer">
          {leftAction}
          {rightAction}
        </footer>
      )}
    </>
  )
}

export function TitanDialog({
  triggerLabel,
  title,
  body,
  leftAction,
  rightAction,
  isOpen,
  onOpenChange,
  onClose,
  children,
  'aria-label': ariaLabel,
}: TitanDialogProps) {
  if (triggerLabel == null) {
    return (
      <ModalOverlay
        isDismissable
        className="dialog-overlay"
        isOpen={isOpen}
        onOpenChange={(open) => {
          onOpenChange?.(open)
          if (!open) onClose?.()
        }}
      >
        <Modal className="dialog-modal">
          <Dialog className="dialog-panel" aria-label={ariaLabel}>
            {({ close }) =>
              children ?? (
                <DialogContent
                  title={title}
                  ariaLabel={ariaLabel}
                  body={body}
                  leftAction={leftAction}
                  rightAction={rightAction}
                  close={close}
                />
              )
            }
          </Dialog>
        </Modal>
      </ModalOverlay>
    )
  }

  return (
    <DialogTrigger>
      <Button className="btn btn-secondary">{triggerLabel}</Button>
      <ModalOverlay isDismissable className="dialog-overlay">
        <Modal className="dialog-modal">
          <Dialog className="dialog-panel" aria-label={ariaLabel}>
            {({ close }) =>
              children ?? (
                <DialogContent
                  title={title}
                  ariaLabel={ariaLabel}
                  body={body}
                  leftAction={leftAction}
                  rightAction={rightAction}
                  close={close}
                />
              )
            }
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  )
}
