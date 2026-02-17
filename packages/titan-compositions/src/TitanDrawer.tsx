import type { ReactNode } from 'react'
import { Button, Dialog, DialogTrigger, Modal, ModalOverlay } from 'react-aria-components'
import { X } from 'lucide-react'

export interface TitanDrawerProps {
  triggerLabel: string
  title: string
  children: ReactNode
}

export function TitanDrawer({ triggerLabel, title, children }: TitanDrawerProps) {
  return (
    <DialogTrigger>
      <Button className="btn btn-secondary">{triggerLabel}</Button>
      <ModalOverlay isDismissable className="drawer-overlay">
        <Modal className="drawer-modal">
          <Dialog className="drawer-panel">
            {({ close }) => (
              <>
                <header className="drawer-header">
                  <h3 className="drawer-title">{title}</h3>
                  <Button className="icon-ghost drawer-close-button" aria-label="Close drawer" onPress={close}>
                    <X />
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
