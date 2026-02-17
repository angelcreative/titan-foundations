import type { ReactNode } from 'react'
import { Button, Dialog, DialogTrigger, Modal, ModalOverlay } from 'react-aria-components'

export interface TitanDialogProps {
  triggerLabel: string
  title: string
  body: ReactNode
  leftAction?: ReactNode
  rightAction?: ReactNode
}

export function TitanDialog({
  triggerLabel,
  title,
  body,
  leftAction,
  rightAction,
}: TitanDialogProps) {
  return (
    <DialogTrigger>
      <Button className="btn btn-secondary">{triggerLabel}</Button>
      <ModalOverlay isDismissable className="dialog-overlay">
        <Modal className="dialog-modal">
          <Dialog className="dialog-panel">
            <header className="dialog-header">
              <h3 className="dialog-title">{title}</h3>
            </header>
            <div className="dialog-body">{body}</div>
            <footer className="dialog-footer">
              {leftAction}
              {rightAction}
            </footer>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  )
}
