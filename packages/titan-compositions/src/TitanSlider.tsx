import type { ReactNode } from 'react'
import {
  Label,
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from 'react-aria-components'

/* ── Single Slider ─────────────────────────────────────────────────── */

export interface TitanSliderProps {
  label?: string
  defaultValue?: number
  minValue?: number
  maxValue?: number
  step?: number
  isDisabled?: boolean
  showOutput?: boolean
  onChange?: (value: number) => void
  formatOptions?: Intl.NumberFormatOptions
  className?: string
}

export function TitanSlider({
  label,
  defaultValue = 50,
  minValue = 0,
  maxValue = 100,
  step = 1,
  isDisabled = false,
  showOutput = true,
  onChange,
  formatOptions,
  className = '',
}: TitanSliderProps) {
  return (
    <Slider
      className={`slider-root ${className}`.trim()}
      defaultValue={defaultValue}
      minValue={minValue}
      maxValue={maxValue}
      step={step}
      isDisabled={isDisabled}
      onChange={onChange}
      formatOptions={formatOptions}
    >
      {(label || showOutput) && (
        <div className="slider-header">
          {label && <Label className="slider-label">{label}</Label>}
          {showOutput && <SliderOutput className="slider-output" />}
        </div>
      )}
      <SliderTrack className="slider-track">
        {({ state }) => (
          <>
            <div
              className="slider-track-fill"
              style={{ width: `${state.getThumbPercent(0) * 100}%` }}
            />
            <SliderThumb className="slider-thumb" index={0} />
          </>
        )}
      </SliderTrack>
    </Slider>
  )
}

/* ── Range Slider (multi-thumb) ────────────────────────────────────── */

export interface TitanRangeSliderProps {
  label?: string
  defaultValue?: [number, number]
  minValue?: number
  maxValue?: number
  step?: number
  isDisabled?: boolean
  showOutput?: boolean
  onChange?: (value: number[]) => void
  formatOptions?: Intl.NumberFormatOptions
  className?: string
}

export function TitanRangeSlider({
  label,
  defaultValue = [20, 80],
  minValue = 0,
  maxValue = 100,
  step = 1,
  isDisabled = false,
  showOutput = true,
  onChange,
  formatOptions,
  className = '',
}: TitanRangeSliderProps) {
  return (
    <Slider
      className={`slider-root slider-root-range ${className}`.trim()}
      defaultValue={defaultValue}
      minValue={minValue}
      maxValue={maxValue}
      step={step}
      isDisabled={isDisabled}
      onChange={onChange}
      formatOptions={formatOptions}
    >
      {(label || showOutput) && (
        <div className="slider-header">
          {label && <Label className="slider-label">{label}</Label>}
          {showOutput && <SliderOutput className="slider-output" />}
        </div>
      )}
      <SliderTrack className="slider-track">
        {({ state }) => {
          const left = state.getThumbPercent(0) * 100
          const right = state.getThumbPercent(1) * 100
          return (
            <>
              <div
                className="slider-track-fill"
                style={{ left: `${left}%`, width: `${right - left}%` }}
              />
              <SliderThumb className="slider-thumb" index={0} />
              <SliderThumb className="slider-thumb" index={1} />
            </>
          )
        }}
      </SliderTrack>
    </Slider>
  )
}
