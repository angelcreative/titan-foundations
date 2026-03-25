import type { ReactNode } from 'react'
import { Button, Dialog, DialogTrigger, Modal, ModalOverlay } from 'react-aria-components'
import { TitanButton } from './TitanButton'
import { renderIconNode } from './icons'

export type TitanDialogCloseButton = 'icon' | 'text' | 'none'

export interface TitanDialogProps {
  triggerLabel?: string
  title?: string
  body?: ReactNode
  leftAction?: ReactNode
  rightAction?: ReactNode
  /** Default `icon`. Use `text` for a labeled Close control (no X). */
  closeButton?: TitanDialogCloseButton
  /** Label when `closeButton` is `text`. Default `Close`. */
  closeText?: string
  isOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
  onClose?: () => void
  'aria-label'?: string
  children?: ReactNode
}

function DialogContent({
  title,
  body,
  leftAction,
  rightAction,
  close,
  closeButton,
  closeText,
}: {
  title?: string
  body?: ReactNode
  leftAction?: ReactNode
  rightAction?: ReactNode
  close: () => void
  closeButton: TitanDialogCloseButton
  closeText: string
}) {
  const showTitleHeader = title != null && title !== ''

  return (
    <>
      {closeButton === 'icon' && (
        <Button className="dialog-close-button" aria-label="Close dialog" onPress={close}>
          {renderIconNode('x')}
        </Button>
      )}
      {closeButton === 'text' && (
        <div className="dialog-close-text-wrap">
          <TitanButton variant="secondary" onPress={close}>
            {closeText}
          </TitanButton>
        </div>
      )}
      {showTitleHeader && (
        <header className="dialog-header">
          <h3 className="dialog-title">{title}</h3>
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
  closeButton = 'icon',
  closeText = 'Close',
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
                  body={body}
                  leftAction={leftAction}
                  rightAction={rightAction}
                  close={close}
                  closeButton={closeButton}
                  closeText={closeText}
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
                  body={body}
                  leftAction={leftAction}
                  rightAction={rightAction}
                  close={close}
                  closeButton={closeButton}
                  closeText={closeText}
                />
              )
            }
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  )
}
