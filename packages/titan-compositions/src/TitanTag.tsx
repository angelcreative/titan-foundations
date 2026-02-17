import { getToneStyle } from './TitanButton'

export interface TitanTagProps {
  label: string
  tone: string
}

export function TitanTag({ label, tone }: TitanTagProps) {
  return (
    <span className="tag-chip" style={getToneStyle(tone, 'tag')}>
      {label}
    </span>
  )
}
