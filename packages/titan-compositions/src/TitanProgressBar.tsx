import { Label, ProgressBar } from 'react-aria-components'

export interface TitanProgressBarProps {
  label?: string
  value?: number
  minValue?: number
  maxValue?: number
  showValue?: boolean
  formatOptions?: Intl.NumberFormatOptions
  className?: string
}

export function TitanProgressBar({
  label,
  value = 0,
  minValue = 0,
  maxValue = 100,
  showValue = true,
  formatOptions,
  className = '',
}: TitanProgressBarProps) {
  const percent = ((value - minValue) / (maxValue - minValue)) * 100

  return (
    <ProgressBar
      className={`progress-root ${className}`.trim()}
      value={value}
      minValue={minValue}
      maxValue={maxValue}
      formatOptions={formatOptions}
    >
      {({ valueText }) => (
        <>
          {(label || showValue) && (
            <div className="progress-header">
              {label && <Label className="progress-label">{label}</Label>}
              {showValue && <span className="progress-value">{valueText}</span>}
            </div>
          )}
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${percent}%` }} />
          </div>
        </>
      )}
    </ProgressBar>
  )
}
