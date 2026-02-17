import type { ReactNode } from 'react'

export interface TitanTableColumn {
  key: string
  header: string
  render?: (row: TitanTableRow) => ReactNode
}

export interface TitanTableRow {
  id: string
  [key: string]: ReactNode
}

export interface TitanBorderlessTableProps {
  columns: TitanTableColumn[]
  rows: TitanTableRow[]
}

/**
 * Reusable borderless table composition using Titan table classes.
 */
export function TitanBorderlessTable({ columns, rows }: TitanBorderlessTableProps) {
  return (
    <div className="layout-table-wrap">
      <table className="table-borderless">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={`${row.id}-${column.key}`}>
                  {column.render ? column.render(row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
