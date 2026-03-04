/**
 * Celdas preparadas para usar dentro de TitanTable: fecha con icono, iniciales, acciones (menú), status.
 */
import type { ReactNode } from 'react'
import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components'
import { Calendar, MoreVertical, Pencil, Trash2 } from 'lucide-react'

/* -------------------------------------------------------------------------- */
/*  Colores Titan 500 para iniciales (sin gris ni slate)                      */
/* -------------------------------------------------------------------------- */

const TITAN_500_COLORS = [
  'var(--color-blueberry-500, #6f6dde)',
  'var(--color-violet-500, #967af8)',
  'var(--color-purple-500, #a452f7)',
  'var(--color-ocean-500, #5c98f8)',
  'var(--color-indigo-500, #6caad1)',
  'var(--color-turquoise-500, #35c0cb)',
  'var(--color-teal-500, #6ec091)',
  'var(--color-green-500, #83e46e)',
  'var(--color-orange-500, #ef8251)',
  'var(--color-red-500, #ed655c)',
  'var(--color-pink-500, #ed57a3)',
] as const

function getInitialsColor(seed: string | number): string {
  const idx = typeof seed === 'string' ? seed.split('').reduce((a, c) => a + c.charCodeAt(0), 0) : seed
  const safe = Math.abs(idx) % TITAN_500_COLORS.length
  return TITAN_500_COLORS[safe] || TITAN_500_COLORS[0]
}

/* -------------------------------------------------------------------------- */
/*  TableCellDate — fecha con icono calendario, formato por defecto            */
/* -------------------------------------------------------------------------- */

export interface TitanTableCellDateProps {
  /** Fecha: Date, string ISO o timestamp */
  value: Date | string | number
  /** Formato por defecto: "Nov 15, 2025" */
  format?: (d: Date) => string
  className?: string
}

const defaultFormat = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

export function TitanTableCellDate({ value, format = defaultFormat, className = '' }: TitanTableCellDateProps) {
  const d = value instanceof Date ? value : new Date(value)
  const str = Number.isNaN(d.getTime()) ? String(value) : format(d)
  return (
    <span className={`table-cell-date ${className}`.trim()}>
      <Calendar size={14} className="table-cell-date-icon" aria-hidden />
      <span>{str}</span>
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/*  TableCellInitials — iniciales en círculo con bg Titan 500 (random)       */
/* -------------------------------------------------------------------------- */

export interface TitanTableCellInitialsProps {
  /** Iniciales (ej. "AW") o nombre del que derivar (ej. "Alice Smith" → "AS") */
  initials?: string
  name?: string
  /** Seed para color estable por fila (ej. id) */
  seed?: string | number
  className?: string
}

function deriveInitials(initials?: string, name?: string): string {
  if (initials && initials.length >= 1) return initials.slice(0, 2).toUpperCase()
  if (name && name.length >= 1) {
    const parts = name.trim().split(/\s+/)
    if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    return name.slice(0, 2).toUpperCase()
  }
  return '??'
}

export function TitanTableCellInitials({
  initials,
  name,
  seed = '',
  className = '',
}: TitanTableCellInitialsProps) {
  const text = deriveInitials(initials, name)
  const bg = getInitialsColor(seed || text)
  return (
    <span
      className={`table-avatar-initials ${className}`.trim()}
      style={{ background: bg }}
      title={name || text}
    >
      {text}
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/*  TableCellActions — icon button (kebab) + menú Titan (Edit / Delete)       */
/* -------------------------------------------------------------------------- */

export interface TitanTableCellActionsItem {
  id: string
  label: string
  onAction: () => void
}

export interface TitanTableCellActionsProps {
  onEdit?: () => void
  onDelete?: () => void
  /** Items extra (ej. "Rename", "Clone") */
  extraItems?: TitanTableCellActionsItem[]
  ariaLabel?: string
  className?: string
}

export function TitanTableCellActions({
  onEdit,
  onDelete,
  extraItems = [],
  ariaLabel = 'Actions',
  className = '',
}: TitanTableCellActionsProps) {
  const hasEdit = typeof onEdit === 'function'
  const hasDelete = typeof onDelete === 'function'
  const hasAny = hasEdit || hasDelete || extraItems.length > 0
  if (!hasAny) return null

  return (
    <div className={`table-cell-actions-wrap ${className}`.trim()}>
      <MenuTrigger>
        <Button className="icon-ghost table-cell-actions-trigger" aria-label={ariaLabel}>
          <MoreVertical size={16} aria-hidden />
        </Button>
        <Popover
          className="menu-popover table-row-menu-popover"
          placement="bottom end"
          offset={4}
          shouldFlip={true}
        >
          <Menu
            className="menu-list"
            onAction={(key) => {
              if (key === 'edit') onEdit?.()
              else if (key === 'delete') onDelete?.()
              else extraItems.find((i) => i.id === key)?.onAction()
            }}
          >
            {extraItems.map((item) => (
              <MenuItem key={item.id} id={item.id} className="menu-item" textValue={item.label}>
                <span className="menu-item-start">
                  <span className="menu-item-label">{item.label}</span>
                </span>
              </MenuItem>
            ))}
            {extraItems.length > 0 && (hasEdit || hasDelete) && (
              <div role="separator" className="menu-separator" />
            )}
            {hasEdit && (
              <MenuItem id="edit" className="menu-item" textValue="Edit">
                <span className="menu-item-start">
                  <span className="menu-item-icon" aria-hidden>
                    <Pencil size={14} />
                  </span>
                  <span className="menu-item-label">Edit</span>
                </span>
              </MenuItem>
            )}
            {hasDelete && (
              <MenuItem id="delete" className="menu-item menu-item-destructive" textValue="Delete">
                <span className="menu-item-start">
                  <span className="menu-item-icon" aria-hidden>
                    <Trash2 size={14} />
                  </span>
                  <span className="menu-item-label">Delete</span>
                </span>
              </MenuItem>
            )}
          </Menu>
        </Popover>
      </MenuTrigger>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  TableCellStatus — punto de color + etiqueta (Processing, Finished, Demo, Failed) */
/* -------------------------------------------------------------------------- */

export type TitanTableCellStatusVariant = 'processing' | 'finished' | 'demo' | 'failed'

export interface TitanTableCellStatusProps {
  status: TitanTableCellStatusVariant
  /** Si no se pasa, se usa el label por defecto del status */
  label?: string
  className?: string
}

const STATUS_CONFIG: Record<
  TitanTableCellStatusVariant,
  { label: string; colorVar: string }
> = {
  processing: { label: 'Processing', colorVar: 'var(--color-orange-500, #ef8251)' },
  finished: { label: 'Finished', colorVar: 'var(--color-green-500, #83e46e)' },
  demo: { label: 'Demo', colorVar: 'var(--color-ocean-500, #5c98f8)' },
  failed: { label: 'Failed', colorVar: 'var(--color-red-500, #ed655c)' },
}

export function TitanTableCellStatus({ status, label, className = '' }: TitanTableCellStatusProps) {
  const config = STATUS_CONFIG[status]
  const text = label ?? config.label
  return (
    <span className={`table-status-dot-wrap ${className}`.trim()}>
      <span
        className="table-status-dot"
        style={{ background: config.colorVar }}
        aria-hidden
      />
      <span>{text}</span>
    </span>
  )
}
