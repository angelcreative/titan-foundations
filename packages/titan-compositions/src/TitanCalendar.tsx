import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
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
  defaultValue?: CalendarDate
  value?: CalendarDate
  onChange?: (date: CalendarDate) => void
  showTime?: boolean
  defaultHour?: number
  defaultMinute?: number
  onTimeChange?: (hour: number, minute: number) => void
  minValue?: CalendarDate
  maxValue?: CalendarDate
  isDisabled?: boolean
  className?: string
}

/* ── Icons ─────────────────────────────────────────────────────────── */

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

const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* ── CalendarDropdown (internal) ───────────────────────────────────── */

interface DropdownOption { value: number; label: string }

function CalendarDropdown({
  options,
  value,
  onChange,
  className = '',
}: {
  options: DropdownOption[]
  value: number
  onChange: (v: number) => void
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const selected = options.find((o) => o.value === value)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) close()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open, close])

  useEffect(() => {
    if (open && listRef.current) {
      const active = listRef.current.querySelector('[data-active="true"]') as HTMLElement
      if (active) active.scrollIntoView({ block: 'nearest' })
    }
  }, [open])

  return (
    <div className={`cal-dropdown ${className}`.trim()} ref={ref}>
      <button
        type="button"
        className="cal-dropdown-trigger"
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{selected?.label ?? ''}</span>
        <ChevronDown />
      </button>
      {open && (
        <ul className="cal-dropdown-menu" role="listbox" ref={listRef}>
          {options.map((o) => (
            <li
              key={o.value}
              role="option"
              aria-selected={o.value === value}
              data-active={o.value === value ? 'true' : undefined}
              className={`cal-dropdown-item${o.value === value ? ' cal-dropdown-item-active' : ''}`}
              onClick={() => { onChange(o.value); close() }}
            >
              {o.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

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

  const yearOptions = useMemo(
    () => years.map((y) => ({ value: y, label: String(y) })),
    [years],
  )

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
            <CalendarDropdown
              options={months}
              value={focusedDate.month}
              onChange={(m) => setFocusedDate(focusedDate.set({ month: m }))}
            />
            <CalendarDropdown
              className="cal-dropdown-year"
              options={yearOptions}
              value={focusedDate.year}
              onChange={(y) => setFocusedDate(focusedDate.set({ year: y }))}
            />
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
