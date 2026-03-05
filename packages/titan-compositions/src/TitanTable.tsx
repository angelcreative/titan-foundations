/**
 * TitanTable — Primitives based on React Aria Table API (https://react-aria.adobe.com/Table).
 * Same API as RAC Table; styling is Titan (borderless, sortable th, selection).
 */
import type { ReactNode } from 'react'
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
import { ArrowUp, ArrowDown, ArrowUpDown, GripVertical, Check, Minus } from 'lucide-react'
import { Button } from 'react-aria-components'

function SortableHeaderContent({
  label,
  sortDirection,
}: {
  label: ReactNode
  sortDirection?: 'ascending' | 'descending'
}) {
  return (
    <span className="column-sort-header">
      {label}
      <span className="column-sort-icon-wrap" aria-hidden>
        <span key={sortDirection ?? 'none'} className="column-sort-icon">
          {sortDirection === 'ascending' && <ArrowUp size={14} strokeWidth={1.5} />}
          {sortDirection === 'descending' && <ArrowDown size={14} strokeWidth={1.5} />}
          {!sortDirection && <ArrowUpDown size={14} strokeWidth={1.5} />}
        </span>
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
}

export function TitanTable({ className, wrapperClassName, noWrapper, stickyHeader = false, ...props }: TitanTableProps) {
  const table = (
    <RACTable
      {...props}
      className={['table-borderless', 'table-sortable', 'table-aria', className].filter(Boolean).join(' ')}
    />
  )
  if (noWrapper) return table
  return (
    <div
      className={['layout-table-wrap', 'layout-table-aria', wrapperClassName].filter(Boolean).join(' ')}
      {...(stickyHeader ? { 'data-sticky-header': '' } : {})}
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
                    <Minus className="checkbox-mark" size={14} strokeWidth={2.5} />
                  ) : (
                    <Check className="checkbox-mark" />
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
  allowsResizing?: boolean
}

export function TitanColumn(props: TitanColumnProps) {
  const { allowsSorting, children } = props
  const allowsResizing = props.allowsResizing
  const headerContent = allowsSorting
    ? (renderProps: { sortDirection?: 'ascending' | 'descending' }) => (
        <SortableHeaderContent
          label={
            typeof children === 'function'
              ? (children as (p: unknown) => ReactNode)(renderProps)
              : children
          }
          sortDirection={renderProps.sortDirection}
        />
      )
    : children

  return (
    <RACColumn
      {...props}
      className={allowsSorting ? [props.className, 'table-col-sortable'].filter(Boolean).join(' ') : props.className}
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
    <RACRow {...props}>
      {allowsDragging && (
        <RACCell className="table-cell-drag">
          <Button slot="drag" className="icon-ghost" aria-label="Drag">
            <GripVertical size={14} strokeWidth={1.5} />
          </Button>
        </RACCell>
      )}
      {selectionBehavior === 'toggle' && (
        <RACCell className="table-cell-checkbox">
          <Checkbox slot="selection" aria-label="Select row" className="checkbox-root">
            <span className="checkbox-box" aria-hidden>
              <Check className="checkbox-mark" />
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

export function TitanCell(props: CellProps) {
  return <RACCell {...props} />
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

export { ColumnResizer }
