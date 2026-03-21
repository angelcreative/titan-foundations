export interface TitanTagProps {
  label: string
  tone: string
}

export function TitanTag({ label, tone }: TitanTagProps) {
  return (
    <span className={['tag-chip', tone ? `tag-tone-${tone}` : ''].filter(Boolean).join(' ')}>
      {label}
    </span>
  )
}
