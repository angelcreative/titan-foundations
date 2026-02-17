import { Button } from 'react-aria-components'
import { X } from 'lucide-react'
import { getToneStyle } from './TitanButton'

export interface TitanPillProps {
  id: string
  label: string
  tone: string
  onDismiss?: (id: string) => void
}

export function TitanPill({ id, label, tone, onDismiss }: TitanPillProps) {
  return (
    <div className="pill" style={getToneStyle(tone, 'pill')}>
      <span>{label}</span>
      {onDismiss ? (
        <Button className="pill-close" aria-label={`Remove ${label}`} onPress={() => onDismiss(id)}>
          <X />
        </Button>
      ) : null}
    </div>
  )
}
