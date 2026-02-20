import { useMemo, useState } from 'react'
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
} from 'react-aria-components'
import {
  today,
  getLocalTimeZone,
  type CalendarDate,
} from '@internationalized/date'

export type { CalendarDate } from '@internationalized/date'

/* ── Props ─────────────────────────────────────────────────────────── */

export interface TitanCalendarProps {
  /** Uncontrolled default selected date */
  defaultValue?: CalendarDate
  /** Controlled selected date */
  value?: CalendarDate
  /** Fires when the user selects a date */
  onChange?: (date: CalendarDate) => void
  /** Show hour/minute inputs below the grid */
  showTime?: boolean
  defaultHour?: number
  defaultMinute?: number
  onTimeChange?: (hour: number, minute: number) => void
  minValue?: CalendarDate
  maxValue?: CalendarDate
  isDisabled?: boolean
  className?: string
}

/* ── Chevron icons ─────────────────────────────────────────────────── */

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const SelectChevron = () => (
  <svg className="calendar-select-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* ── Component ─────────────────────────────────────────────────────── */

export function TitanCalendar({
  defaultValue,
  value,
  onChange,
  showTime = false,
  defaultHour = 1,
  defaultMinute = 0,
  onTimeChange,
  minValue,
  maxValue,
  isDisabled = false,
  className = '',
}: TitanCalendarProps) {
  const tz = getLocalTimeZone()
  const initial = value ?? defaultValue ?? today(tz)

  const [focusedDate, setFocusedDate] = useState(initial)
  const [hour, setHour] = useState(defaultHour)
  const [minute, setMinute] = useState(defaultMinute)

  const months = useMemo(() => {
    const fmt = new Intl.DateTimeFormat(undefined, { month: 'long' })
    return Array.from({ length: 12 }, (_, i) => ({
      value: i + 1,
      label: fmt.format(new Date(2024, i, 1)),
    }))
  }, [])

  const years = useMemo(() => {
    const y = today(tz).year
    return Array.from({ length: 201 }, (_, i) => y - 100 + i)
  }, [tz])

  return (
    <div className={`calendar-wrapper ${className}`.trim()}>
      <Calendar
        aria-label="Calendar"
        focusedValue={focusedDate}
        onFocusChange={setFocusedDate}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        minValue={minValue}
        maxValue={maxValue}
        isDisabled={isDisabled}
      >
        <header className="calendar-header">
          <Button slot="previous" className="calendar-nav-btn">
            <ChevronLeft />
          </Button>

          <div className="calendar-selects">
            <div className="calendar-select-wrap">
              <select
                className="calendar-select"
                value={focusedDate.month}
                onChange={(e) => setFocusedDate(focusedDate.set({ month: +e.target.value }))}
              >
                {months.map((m) => (
                  <option key={m.value} value={m.value}>{m.label}</option>
                ))}
              </select>
              <SelectChevron />
            </div>
            <div className="calendar-select-wrap">
              <select
                className="calendar-select calendar-select-year"
                value={focusedDate.year}
                onChange={(e) => setFocusedDate(focusedDate.set({ year: +e.target.value }))}
              >
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
              <SelectChevron />
            </div>
          </div>

          <Button slot="next" className="calendar-nav-btn">
            <ChevronRight />
          </Button>
        </header>

        <CalendarGrid className="calendar-grid">
          <CalendarGridHeader>
            {(day) => <CalendarHeaderCell className="calendar-header-cell" />}
          </CalendarGridHeader>
          <CalendarGridBody>
            {(date) => <CalendarCell date={date} className="calendar-cell" />}
          </CalendarGridBody>
        </CalendarGrid>
      </Calendar>

      {showTime && (
        <div className="calendar-time">
          <div className="calendar-time-field">
            <label className="calendar-time-label">Hour</label>
            <input
              type="text"
              inputMode="numeric"
              className="calendar-time-input"
              value={String(hour).padStart(2, '0')}
              onChange={(e) => {
                const raw = e.target.value.replace(/\D/g, '')
                if (raw === '') { setHour(0); onTimeChange?.(0, minute); return }
                const n = Math.min(23, parseInt(raw, 10))
                if (!isNaN(n)) { setHour(n); onTimeChange?.(n, minute) }
              }}
            />
          </div>
          <span className="calendar-time-separator">:</span>
          <div className="calendar-time-field">
            <label className="calendar-time-label">Minute</label>
            <input
              type="text"
              inputMode="numeric"
              className="calendar-time-input"
              value={String(minute).padStart(2, '0')}
              onChange={(e) => {
                const raw = e.target.value.replace(/\D/g, '')
                if (raw === '') { setMinute(0); onTimeChange?.(hour, 0); return }
                const n = Math.min(59, parseInt(raw, 10))
                if (!isNaN(n)) { setMinute(n); onTimeChange?.(hour, n) }
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
