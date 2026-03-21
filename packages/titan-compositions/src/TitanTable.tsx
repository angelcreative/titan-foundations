/**
 * TitanTable — Primitives based on React Aria Table API (https://react-aria.adobe.com/Table).
 * Same API as RAC Table; styling is Titan (borderless, sortable th, selection).
 */
import type { ReactNode } from 'react'
import { useLayoutEffect, useRef } from 'react'
import {
  Table as RACTable,
  TableHeader as RACTableHeader,
  TableBody as RACTableBody,
  Column as RACColumn,
  Row as RACRow,
  Cell as RACCell,
  Checkbox,
  Collection,
  useTableOptions,
  ResizableTableContainer,
  ColumnResizer,
  TableLoadMoreItem as RACTableLoadMoreItem,
} from 'react-aria-components'
import type { TableHeaderProps, TableBodyProps, ColumnProps, RowProps, CellProps } from 'react-aria-components'
import { Button } from 'react-aria-components'
import { renderIconNode } from './icons'

function SortIcon({ sortDirection }: { sortDirection?: 'ascending' | 'descending' }) {
  return (
    <span className="column-sort-icon-wrap" aria-hidden>
      <span key={sortDirection ?? 'none'} className="column-sort-icon">
        {sortDirection === 'ascending' && renderIconNode('arrow-up')}
        {sortDirection === 'descending' && renderIconNode('arrow-down')}
        {!sortDirection && renderIconNode('arrow-up-down')}
      </span>
    </span>
  )
}

function SortableHeaderContent({
  label,
  sortDirection,
  sortIconPosition = 'right',
  showInfoIcon = false,
  infoIconAriaLabel = 'More information',
}: {
  label: ReactNode
  sortDirection?: 'ascending' | 'descending'
  sortIconPosition?: 'left' | 'right'
  showInfoIcon?: boolean
  infoIconAriaLabel?: string
}) {
  return (
    <span className={`column-sort-header ${sortIconPosition === 'left' ? 'column-sort-header--sort-left' : ''} ${showInfoIcon ? 'column-sort-header--has-info' : ''}`}>
      {sortIconPosition === 'left' && <SortIcon sortDirection={sortDirection} />}
      {label}
      {sortIconPosition === 'right' && <SortIcon sortDirection={sortDirection} />}
      {showInfoIcon && (
        <span className="column-header-info-wrap" aria-hidden>
          {renderIconNode('info', { className: 'column-header-info-icon' })}
        </span>
      )}
    </span>
  )
}

function HeaderWithInfoOnly({
  label,
  infoIconAriaLabel = 'More information',
}: {
  label: ReactNode
  infoIconAriaLabel?: string
}) {
  return (
    <span className="column-sort-header column-sort-header--info-only">
      {label}
      <span className="column-header-info-wrap" aria-hidden>
        {renderIconNode('info', { className: 'column-header-info-icon' })}
      </span>
    </span>
  )
}

export interface TitanTableProps extends Omit<React.ComponentProps<typeof RACTable>, 'className'> {
  className?: string
  wrapperClassName?: string
  /** When true (e.g. inside TitanResizableTableContainer), do not wrap in div. */
  noWrapper?: boolean
  /** When true, thead stays visible when scrolling (use only for async/load-more tables). Default false. */
  stickyHeader?: boolean
  /** Number of left columns that remain sticky. */
  stickyColumns?: number
}

function applyStickyColumns(table: HTMLTableElement, count: number) {
  const headerRow = table.querySelector('thead tr')
  if (!headerRow) return

  const headerCells = Array.from(headerRow.querySelectorAll<HTMLElement>(':scope > th'))
  const stickyCount = Math.min(count, headerCells.length)

  const offsets: number[] = []
  let left = 0
  for (let i = 0; i < stickyCount; i++) {
    offsets.push(left)
    left += headerCells[i].offsetWidth
  }

  for (const row of table.querySelectorAll('tr')) {
    const cells = Array.from(row.querySelectorAll<HTMLElement>(':scope > th, :scope > td'))
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i]
      if (i < stickyCount) {
        cell.setAttribute('data-sticky', '')
        cell.style.left = `${offsets[i]}px`
        if (i === stickyCount - 1) {
          cell.setAttribute('data-sticky-last', '')
        } else {
          cell.removeAttribute('data-sticky-last')
        }
      } else {
        cell.removeAttribute('data-sticky')
        cell.removeAttribute('data-sticky-last')
        cell.style.removeProperty('left')
      }
    }
  }
}

export function TitanTable({
  className,
  wrapperClassName,
  noWrapper,
  stickyHeader = false,
  stickyColumns = 0,
  ...props
}: TitanTableProps) {
  const tableRef = useRef<HTMLTableElement>(null)

  useLayoutEffect(() => {
    const table = tableRef.current
    if (!table || stickyColumns <= 0) return

    applyStickyColumns(table, stickyColumns)

    const mutationObserver = new MutationObserver(() => {
      applyStickyColumns(table, stickyColumns)
    })
    mutationObserver.observe(table, { childList: true, subtree: true })

    let resizeObserver: ResizeObserver | undefined
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => applyStickyColumns(table, stickyColumns))
      const headerCells = table.querySelectorAll<HTMLElement>('thead tr > th')
      for (const cell of Array.from(headerCells).slice(0, stickyColumns)) {
        resizeObserver.observe(cell)
      }
    }

    return () => {
      mutationObserver.disconnect()
      resizeObserver?.disconnect()
    }
  }, [stickyColumns])

  const table = (
    <RACTable
      ref={tableRef}
      {...props}
      className={['table-borderless', 'table-sortable', 'table-aria', className].filter(Boolean).join(' ')}
    />
  )
  if (noWrapper) return table
  return (
    <div
      className={['layout-table-wrap', 'layout-table-aria', wrapperClassName].filter(Boolean).join(' ')}
      {...(stickyHeader ? { 'data-sticky-header': '' } : {})}
      {...(stickyColumns > 0 ? { 'data-sticky-cols': String(stickyColumns) } : {})}
    >
      {table}
    </div>
  )
}

export function TitanTableHeader<T extends object>({
  columns,
  children,
  ...props
}: TableHeaderProps<T>) {
  const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions()

  return (
    <RACTableHeader {...props}>
      {allowsDragging && (
        <RACColumn width={36} minWidth={36} maxWidth={36} className="table-col-drag">
          {() => null}
        </RACColumn>
      )}
      {selectionBehavior === 'toggle' && (
        <RACColumn width={44} minWidth={44} maxWidth={44} className="table-col-checkbox">
          {() => (
            <Checkbox slot="selection" aria-label="Select all" className="checkbox-root table-checkbox-header">
              {({ isIndeterminate }) => (
                <span className="checkbox-box" aria-hidden>
                  {isIndeterminate ? (
                    renderIconNode('minus', { className: 'checkbox-mark' })
                  ) : (
                    renderIconNode('check', { className: 'checkbox-mark' })
                  )}
                </span>
              )}
            </Checkbox>
          )}
        </RACColumn>
      )}
      {columns != null ? (
        <Collection items={columns}>
          {children as (column: T) => React.ReactElement}
        </Collection>
      ) : (
        (children as ReactNode)
      )}
    </RACTableHeader>
  )
}

export interface TitanColumnProps extends ColumnProps {
  alignment?: 'left' | 'center' | 'right'
  numericSort?: boolean
  allowsResizing?: boolean
  /** When allowsSorting, put sort icon on the left ([sort] label) or right (label [sort]). Default 'left' for table-advanced. */
  sortIconPosition?: 'left' | 'right'
  /** Show an info icon after the label (label [info] or [sort] label [info]). */
  showInfoIcon?: boolean
  /** Accessible label for the info icon. */
  infoIconAriaLabel?: string
}

export function TitanColumn(props: TitanColumnProps) {
  const {
    allowsSorting,
    children,
    alignment = 'left',
    numericSort = false,
    sortIconPosition = 'left',
    showInfoIcon = false,
    infoIconAriaLabel,
  } = props
  const allowsResizing = props.allowsResizing

  const resolvedLabel = (renderProps: { sortDirection?: 'ascending' | 'descending' }) =>
    typeof children === 'function' ? (children as (p: unknown) => ReactNode)(renderProps) : children

  const headerContent =
    allowsSorting
      ? (renderProps: { sortDirection?: 'ascending' | 'descending' }) => (
          <SortableHeaderContent
            label={resolvedLabel(renderProps)}
            sortDirection={
              numericSort
                ? renderProps.sortDirection === 'ascending'
                  ? 'descending'
                  : renderProps.sortDirection === 'descending'
                    ? 'ascending'
                    : undefined
                : renderProps.sortDirection
            }
            sortIconPosition={sortIconPosition}
            showInfoIcon={showInfoIcon}
            infoIconAriaLabel={infoIconAriaLabel}
          />
        )
      : showInfoIcon
        ? (renderProps: { sortDirection?: 'ascending' | 'descending' }) => (
            <HeaderWithInfoOnly
              label={resolvedLabel(renderProps)}
              infoIconAriaLabel={infoIconAriaLabel}
            />
          )
        : children

  return (
    <RACColumn
      {...props}
      className={
        [
          props.className,
          allowsSorting ? 'table-col-sortable' : '',
          alignment === 'center' ? 'table-align-center' : '',
          alignment === 'right' ? 'table-align-right' : 'table-align-left',
        ]
          .filter(Boolean)
          .join(' ')
      }
    >
      {allowsResizing && typeof headerContent !== 'function' ? (
        <>
          {headerContent}
          <ColumnResizer />
        </>
      ) : allowsResizing && typeof headerContent === 'function' ? (
        (rp: unknown) => (
          <>
            {(headerContent as (p: unknown) => ReactNode)(rp)}
            <ColumnResizer />
          </>
        )
      ) : (
        headerContent
      )}
    </RACColumn>
  )
}

export function TitanTableBody<T extends object>(props: TableBodyProps<T>) {
  return <RACTableBody {...props} />
}

export function TitanRow<T extends object>({ columns, children, ...props }: RowProps<T>) {
  const { selectionBehavior, allowsDragging } = useTableOptions()

  return (
    <RACRow
      {...props}
      className={[
        props.className,
        props.onAction || props.href ? 'table-row-actionable' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {allowsDragging && (
        <RACCell className="table-cell-drag">
          <Button slot="drag" className="icon-ghost" aria-label="Drag">
            {renderIconNode('grip-vertical')}
          </Button>
        </RACCell>
      )}
      {selectionBehavior === 'toggle' && (
        <RACCell className="table-cell-checkbox">
          <Checkbox slot="selection" aria-label="Select row" className="checkbox-root">
            <span className="checkbox-box" aria-hidden>
              {renderIconNode('check', { className: 'checkbox-mark' })}
            </span>
          </Checkbox>
        </RACCell>
      )}
      {columns != null ? (
        <Collection items={columns}>
          {children as (column: T) => React.ReactElement}
        </Collection>
      ) : (
        (children as ReactNode)
      )}
    </RACRow>
  )
}

export interface TitanCellProps extends CellProps {
  alignment?: 'left' | 'center' | 'right'
}

export function TitanCell(props: TitanCellProps) {
  const { alignment = 'left' } = props
  return (
    <RACCell
      {...props}
      className={[
        props.className,
        'table-cell-body',
        alignment === 'center' ? 'table-align-center' : '',
        alignment === 'right' ? 'table-align-right' : 'table-align-left',
      ]
        .filter(Boolean)
        .join(' ')}
    />
  )
}

export function TitanResizableTableContainer({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ResizableTableContainer>) {
  return (
    <ResizableTableContainer
      {...props}
      className={['layout-table-wrap', 'layout-table-aria', 'titan-resizable-table-container', className]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </ResizableTableContainer>
  )
}

export function TitanTableLoadMoreItem(props: React.ComponentProps<typeof RACTableLoadMoreItem>) {
  return <RACTableLoadMoreItem {...props} />
}

