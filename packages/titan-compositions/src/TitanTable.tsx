/**
 * TitanTable — React Aria Table with Titan borderless styling.
 * Use for tables that need: sticky header, sticky columns, selection, sorting,
 * clickable rows, empty state. For simple static tables, use TitanBorderlessTable.
 *
 * Re-exports: Table, TableHeader, TableBody, Column, Row, Cell, Checkbox
 * from react-aria-components. TitanTable adds layout-table-wrap + table-borderless.
 */
import {
  Table as RACTable,
  TableHeader,
  TableBody,
  Column,
  Row,
  Cell,
  Checkbox,
} from 'react-aria-components'
import type { ComponentProps } from 'react'

type TableProps = ComponentProps<typeof RACTable>

export { TableHeader, TableBody, Column, Row, Cell, Checkbox }

/**
 * TitanTable wraps React Aria's Table with Titan borderless styling.
 * Pass all Table props (aria-label, stickyHeader, stickyColumns, selectionMode,
 * sortDescriptor, onSortChange, onRowAction, etc.).
 */
type TitanTableProps = TableProps & { stickyColumns?: number; stickyHeader?: boolean }

export function TitanTable(props: TitanTableProps) {
  const { className = '', children, stickyColumns, stickyHeader, ...rest } = props
  const stickyCols = stickyColumns != null ? Number(stickyColumns) : 0
  return (
    <div
      className="layout-table-wrap layout-table-aria"
      data-sticky-cols={stickyCols > 0 ? stickyCols : undefined}
      data-sticky-header={stickyHeader ? '' : undefined}
    >
      <RACTable
        className={`table-borderless table-aria ${className}`.trim()}
        {...rest}
      >
        {children}
      </RACTable>
    </div>
  )
}
