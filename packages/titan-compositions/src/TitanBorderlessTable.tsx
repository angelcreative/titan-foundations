/**
 * TitanBorderlessTable — Mothership table: sticky header, checkbox selection,
 * sortable columns (ArrowUpDown/ArrowUp/ArrowDown), kebab actions, clickable name.
 * Uses React Aria Table under the hood. Default: Report name | Created | Author | Status | Actions + 2 sample rows.
 */
import type { ReactNode } from 'react'
import { useMemo, useState } from 'react'
import {
  Table as RACTable,
  TableHeader,
  TableBody,
  Column,
  Row,
  Cell,
  Checkbox,
  MenuTrigger,
  Menu,
  MenuItem,
} from 'react-aria-components'
import { ArrowUp, ArrowDown, ArrowUpDown, MoreVertical } from 'lucide-react'
import type { Key } from 'react-aria-components'
import { TitanIconButton } from './TitanButton'
import { Check } from 'lucide-react'

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

export interface TitanTableColumn {
  key: string
  header: string
  sortable?: boolean
  render?: (row: TitanTableRow) => ReactNode
}

export interface TitanTableRow {
  id: string
  [key: string]: ReactNode
}

export type TitanBorderlessTableAction = 'edit' | 'clone' | 'share' | 'delete'

export interface TitanBorderlessTableProps {
  /** Data columns (checkbox and actions columns are added automatically). */
  columns?: TitanTableColumn[]
  /** Data rows. If not provided, default sample rows are used. */
  rows?: TitanTableRow[]
  /** Controlled selected row keys (e.g. Set of ids). */
  selectedKeys?: Iterable<Key>
  /** Called when selection changes. */
  onSelectionChange?: (keys: Set<Key>) => void
  /** Current sort (column key and direction). */
  sortDescriptor?: { column: Key; direction: 'ascending' | 'descending' }
  /** Called when user requests sort change. */
  onSortChange?: (descriptor: { column: Key; direction: 'ascending' | 'descending' }) => void
  /** Called when the first cell (name) is clicked; receives row id. */
  onRowNameClick?: (rowId: string) => void
  /** Called when a row action is chosen; receives row id and action. */
  onAction?: (rowId: string, action: TitanBorderlessTableAction) => void
  /** Optional aria-label for the table. */
  'aria-label'?: string
  /** Optional class name for the wrapper (e.g. cities-table). */
  className?: string
}

/* -------------------------------------------------------------------------- */
/*  Default data                                                              */
/* -------------------------------------------------------------------------- */

const DEFAULT_COLUMNS: TitanTableColumn[] = [
  { key: 'name', header: 'Report name', sortable: true },
  { key: 'created', header: 'Created', sortable: true },
  { key: 'author', header: 'Author', sortable: true },
  { key: 'status', header: 'Status', sortable: true },
]

function DefaultNameCell({ row, onRowNameClick }: { row: TitanTableRow; onRowNameClick?: (id: string) => void }) {
  const name = row.name ?? row.id
  const icons = row.socialIcons as ReactNode | undefined
  return (
    <div className="table-cell-name-wrap">
      <button
        type="button"
        className="table-cell-name-link"
        onClick={() => onRowNameClick?.(row.id as string)}
      >
        {name}
      </button>
      {icons != null && <div className="table-cell-name-icons">{icons}</div>}
    </div>
  )
}

const DEFAULT_ROWS: TitanTableRow[] = [
  {
    id: 'audiense-segments',
    name: 'Audiense segments',
    socialIcons: (
      <>
        <span className="table-social-icon" aria-hidden title="X">𝕏</span>
        <span className="table-social-icon" aria-hidden title="Meta">M</span>
      </>
    ),
    created: '01 Jan 2026',
    author: (
      <span className="table-avatar-initials" aria-hidden>AS</span>
    ),
    status: (
      <span className="table-status-dot-wrap">
        <span className="table-status-dot" aria-hidden />
        <span>Demo</span>
      </span>
    ),
  },
  {
    id: 'audiense-intelligence',
    name: 'Audiense intelligence',
    socialIcons: (
      <>
        <span className="table-social-icon" aria-hidden title="Instagram">IG</span>
        <span className="table-social-icon" aria-hidden title="TikTok">TT</span>
        <span className="table-social-icon" aria-hidden title="YouTube">YT</span>
      </>
    ),
    created: '01 Jan 2026',
    author: (
      <span className="table-avatar-initials" aria-hidden>AS</span>
    ),
    status: (
      <span className="table-status-dot-wrap">
        <span className="table-status-dot" aria-hidden />
        <span>Demo</span>
      </span>
    ),
  },
]

/* -------------------------------------------------------------------------- */
/*  Sort header (sortable column th with icon)                                */
/* -------------------------------------------------------------------------- */

function SortableHeaderContent({
  label,
  sortDirection,
}: {
  label: string
  sortDirection?: 'ascending' | 'descending'
}) {
  return (
    <span className="column-sort-header">
      {label}
      <span className="column-sort-icon" aria-hidden>
        {sortDirection === 'ascending' && <ArrowUp size={14} strokeWidth={1.5} />}
        {sortDirection === 'descending' && <ArrowDown size={14} strokeWidth={1.5} />}
        {!sortDirection && <ArrowUpDown size={14} strokeWidth={1.5} />}
      </span>
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export function TitanBorderlessTable({
  columns: columnsProp,
  rows: rowsProp,
  selectedKeys: selectedKeysProp,
  onSelectionChange,
  sortDescriptor: sortDescriptorProp,
  onSortChange,
  onRowNameClick,
  onAction,
  'aria-label': ariaLabel = 'Data table',
  className: wrapperClassName,
}: TitanBorderlessTableProps) {
  const columns = useMemo(() => columnsProp ?? DEFAULT_COLUMNS, [columnsProp])
  const rows = useMemo(() => rowsProp ?? DEFAULT_ROWS, [rowsProp])

  const [internalSelection, setInternalSelection] = useState<Set<Key>>(new Set())
  const [internalSort, setInternalSort] = useState<{ column: Key; direction: 'ascending' | 'descending' }>({
    column: 'name',
    direction: 'ascending',
  })

  const selectedKeys = selectedKeysProp ?? internalSelection
  const setSelectedKeys = useMemo(() => {
    if (onSelectionChange) {
      return (keys: Set<Key> | 'all') => {
        onSelectionChange(keys === 'all' ? new Set(rows.map((r) => r.id as Key)) : keys)
      }
    }
    return setInternalSelection
  }, [onSelectionChange, rows])

  const sortDescriptor = sortDescriptorProp ?? internalSort
  const handleSortChange = onSortChange ?? setInternalSort

  const selectedSet = useMemo(() => {
    if (selectedKeys === 'all') return new Set(rows.map((r) => r.id as Key))
    if (selectedKeys instanceof Set) return selectedKeys
    return new Set(selectedKeys)
  }, [selectedKeys, rows])

  const allSelected = rows.length > 0 && selectedSet.size === rows.length
  const someSelected = selectedSet.size > 0

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedKeys(new Set())
    } else {
      setSelectedKeys(new Set(rows.map((r) => r.id as Key)))
    }
  }

  const toggleRow = (id: Key) => {
    const next = new Set(selectedSet)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    setSelectedKeys(next)
  }

  return (
    <div
      className={['layout-table-wrap', 'layout-table-aria', wrapperClassName].filter(Boolean).join(' ')}
      data-sticky-header=""
    >
      <RACTable
        aria-label={ariaLabel}
        className="table-borderless table-sortable table-aria"
        sortDescriptor={sortDescriptor}
        onSortChange={handleSortChange}
      >
        <TableHeader>
          {/* Selection column */}
          <Column width={44} minWidth={44} maxWidth={44} className="table-col-checkbox">
            {() => (
              <Checkbox
                slot="selection"
                aria-label="Select all"
                isSelected={allSelected}
                isIndeterminate={someSelected && !allSelected}
                onChange={toggleSelectAll}
                className="checkbox-root table-checkbox-header"
              >
                <span className="checkbox-box" aria-hidden>
                  <Check className="checkbox-mark" />
                </span>
              </Checkbox>
            )}
          </Column>
          {/* Data columns */}
          {columns.map((col) => (
            <Column
              key={col.key}
              id={col.key}
              allowsSorting={col.sortable}
              className={col.sortable ? 'table-col-sortable' : undefined}
            >
              {col.sortable
                ? ({ sortDirection }) => (
                    <SortableHeaderContent label={col.header} sortDirection={sortDirection} />
                  )
                : (
                    col.header
                  )}
            </Column>
          ))}
          {/* Actions column */}
          <Column width={56} minWidth={56} maxWidth={56} className="table-col-actions">
            {() => 'Actions'}
          </Column>
        </TableHeader>
        <TableBody items={rows}>
          {(row) => (
            <Row id={row.id as string} textValue={String(row.name ?? row.id)}>
              <Cell className="table-cell-checkbox">
                <Checkbox
                  slot="selection"
                  aria-label={`Select ${row.name ?? row.id}`}
                  isSelected={selectedSet.has(row.id as Key)}
                  onChange={() => toggleRow(row.id as Key)}
                  className="checkbox-root"
                >
                  <span className="checkbox-box" aria-hidden>
                    <Check className="checkbox-mark" />
                  </span>
                </Checkbox>
              </Cell>
              {columns.map((col) => (
                <Cell key={col.key}>
                  {col.render
                    ? col.render(row)
                    : col.key === 'name'
                      ? (
                          <DefaultNameCell row={row} onRowNameClick={onRowNameClick} />
                        )
                      : (
                          row[col.key]
                        )}
                </Cell>
              ))}
              <Cell className="table-cell-actions">
                <MenuTrigger>
                  <TitanIconButton variant="ghost" aria-label="Row actions">
                    <MoreVertical size={16} strokeWidth={1.5} />
                  </TitanIconButton>
                  <Menu
                    className="table-row-menu"
                    onAction={(key) => onAction?.(row.id as string, key as TitanBorderlessTableAction)}
                  >
                    <MenuItem id="edit">Edit</MenuItem>
                    <MenuItem id="clone">Clone</MenuItem>
                    <MenuItem id="share">Share</MenuItem>
                    <MenuItem id="delete" className="menu-item-destructive">Delete</MenuItem>
                  </Menu>
                </MenuTrigger>
              </Cell>
            </Row>
          )}
        </TableBody>
      </RACTable>
    </div>
  )
}
