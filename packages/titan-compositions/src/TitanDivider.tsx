export interface TitanDividerProps {
  className?: string
}

export function TitanDivider({ className = '' }: TitanDividerProps) {
  return <hr className={['titan-divider', className].filter(Boolean).join(' ')} />
}
