/**
 * Titan table examples — one per React Aria Table variant (https://react-aria.adobe.com/Table).
 * Basic, Dynamic content, Async/Load more, Links, Empty state, Selection, Sortable, Resizable, Drag and drop.
 */
import React, { useState, useMemo } from 'react'
import type { Selection, SortDescriptor } from 'react-aria-components'
import { useListData, useDragAndDrop, useAsyncList } from 'react-aria-components'
import {
  TitanTable,
  TitanTableHeader,
  TitanColumn,
  TitanTableBody,
  TitanRow,
  TitanCell,
  TitanResizableTableContainer,
  TitanTableLoadMoreItem,
} from './TitanTable'
import { TitanButton } from './TitanButton'
import { TitanLoader } from './TitanLoader'
import { TitanCheckboxField } from './TitanFormControls'
import {
  TitanTableCellDate,
  TitanTableCellInitials,
  TitanTableCellActions,
  TitanTableCellStatus,
} from './TitanTableCells'

/* -------------------------------------------------------------------------- */
/*  1. Basic — static table                                                   */
/* -------------------------------------------------------------------------- */

const basicRows = [
  { id: '1', name: 'Games', type: 'File folder', date: '6/7/2020' },
  { id: '2', name: 'Program Files', type: 'File folder', date: '4/7/2021' },
  { id: '3', name: 'bootmgr', type: 'System file', date: '11/20/2010' },
  { id: '4', name: 'log.txt', type: 'Text Document', date: '1/18/2016' },
]

export function TitanTableExampleBasic() {
  return (
    <TitanTable aria-label="Files">
      <TitanTableHeader>
        <TitanColumn isRowHeader>Name</TitanColumn>
        <TitanColumn>Type</TitanColumn>
        <TitanColumn>Date Modified</TitanColumn>
      </TitanTableHeader>
      <TitanTableBody>
        <TitanRow id="row-1">
          <TitanCell>Games</TitanCell>
          <TitanCell>File folder</TitanCell>
          <TitanCell>6/7/2020</TitanCell>
        </TitanRow>
        <TitanRow id="row-2">
          <TitanCell>Program Files</TitanCell>
          <TitanCell>File folder</TitanCell>
          <TitanCell>4/7/2021</TitanCell>
        </TitanRow>
        <TitanRow id="row-3">
          <TitanCell>bootmgr</TitanCell>
          <TitanCell>System file</TitanCell>
          <TitanCell>11/20/2010</TitanCell>
        </TitanRow>
        <TitanRow id="row-4">
          <TitanCell>log.txt</TitanCell>
          <TitanCell>Text Document</TitanCell>
          <TitanCell>1/18/2016</TitanCell>
        </TitanRow>
      </TitanTableBody>
    </TitanTable>
  )
}

/* -------------------------------------------------------------------------- */
/*  2. Dynamic content — show/hide columns, add row                            */
/* -------------------------------------------------------------------------- */

const dynamicColumns = [
  { id: 'name', name: 'Name', isRowHeader: true },
  { id: 'type', name: 'Type' },
  { id: 'date', name: 'Date Modified' },
]

const initialDynamicRows = [
  { id: 1, name: 'Games', type: 'File folder', date: '6/7/2020' },
  { id: 2, name: 'Program Files', type: 'File folder', date: '4/7/2021' },
  { id: 3, name: 'bootmgr', type: 'System file', date: '11/20/2010' },
  { id: 4, name: 'log.txt', type: 'Text Document', date: '1/18/2016' },
]

export function TitanTableExampleDynamic() {
  const [showColumns, setShowColumns] = useState(['name', 'type', 'date'])
  const [rows, setRows] = useState(initialDynamicRows)
  const visibleColumns = dynamicColumns.filter((c) => showColumns.includes(c.id))

  const addRow = () => {
    const date = new Date().toLocaleDateString()
    setRows((prev) => [...prev, { id: prev.length + 1, name: 'file.txt', type: 'Text Document', date }])
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start', width: '100%' }}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
        <span style={{ fontSize: 14, fontWeight: 600 }}>Show columns:</span>
        {dynamicColumns.map((c) => (
          <TitanCheckboxField
            key={c.id}
            label={c.name}
            isSelected={showColumns.includes(c.id)}
            onChange={(checked) =>
              setShowColumns((prev) =>
                checked ? [...prev, c.id] : prev.filter((x) => x !== c.id)
              )
            }
          />
        ))}
        <TitanButton onPress={addRow}>Add row</TitanButton>
      </div>
      <TitanTable aria-label="Files" style={{ width: '100%' }}>
        <TitanTableHeader columns={visibleColumns}>
          {(column) => (
            <TitanColumn key={column.id} isRowHeader={column.isRowHeader}>
              {column.name}
            </TitanColumn>
          )}
        </TitanTableHeader>
        <TitanTableBody items={rows} dependencies={[visibleColumns]}>
          {(item) => (
            <TitanRow key={item.id} id={String(item.id)} columns={visibleColumns}>
              {(column) => <TitanCell>{item[column.id as keyof typeof item]}</TitanCell>}
            </TitanRow>
          )}
        </TitanTableBody>
      </TitanTable>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  3. Async / Load more — useAsyncList + renderEmptyState + TableLoadMoreItem (fiel a React Aria) */
/* -------------------------------------------------------------------------- */

type AsyncCharacter = { id: string; name: string; height: string; mass: string; birth: string }

export function TitanTableExampleAsync() {
  const list = useAsyncList<AsyncCharacter>({
    async load({ signal, cursor }) {
      const url = cursor ?? 'https://swapi.dev/api/people/'
      const res = await fetch(url, { signal })
      const json = (await res.json()) as { results: Array<Record<string, string>>; next: string | null }
      const items: AsyncCharacter[] = (json.results ?? []).map((p) => ({
        id: p.url ?? String(Math.random()),
        name: p.name ?? '',
        height: p.height ?? '',
        mass: p.mass ?? '',
        birth: p.birth_year ?? '',
      }))
      return { items, cursor: json.next ?? undefined }
    },
    getKey: (item) => item.id,
  })

  const isLoadingMore = list.loadingState === 'loadingMore'

  return (
    <div style={{ minHeight: 200, maxHeight: 360, overflow: 'auto', width: '100%' }}>
      <TitanTable aria-label="Star Wars characters" stickyHeader style={{ width: '100%' }}>
        <TitanTableHeader>
          <TitanColumn id="name" isRowHeader>Name</TitanColumn>
          <TitanColumn id="height">Height</TitanColumn>
          <TitanColumn id="mass">Mass</TitanColumn>
          <TitanColumn id="birth">Birth Year</TitanColumn>
        </TitanTableHeader>
        <TitanTableBody
          items={list.items}
          renderEmptyState={() =>
            list.isLoading ? (
              <div style={{ display: 'flex', justifyContent: 'center', padding: 24 }}>
                <TitanLoader aria-label="Loading..." />
              </div>
            ) : list.error ? (
              <div style={{ padding: 24, textAlign: 'center', color: 'var(--color-red-600)' }}>
                {list.error.message}
              </div>
            ) : (
              <div style={{ padding: 24, textAlign: 'center', fontStyle: 'italic' }}>No data.</div>
            )
          }
        >
          {((item: AsyncCharacter) => (
            <TitanRow id={item.id}>
              <TitanCell>{item.name}</TitanCell>
              <TitanCell>{item.height}</TitanCell>
              <TitanCell>{item.mass}</TitanCell>
              <TitanCell>{item.birth}</TitanCell>
            </TitanRow>
          )) as unknown as React.ReactNode}
          <TitanTableLoadMoreItem onLoadMore={list.loadMore} isLoading={isLoadingMore} />
        </TitanTableBody>
      </TitanTable>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  4. Links — Row with href                                                   */
/* -------------------------------------------------------------------------- */

export function TitanTableExampleLinks() {
  return (
    <TitanTable aria-label="Links">
      <TitanTableHeader>
        <TitanColumn isRowHeader>Name</TitanColumn>
        <TitanColumn>URL</TitanColumn>
        <TitanColumn>Date added</TitanColumn>
      </TitanTableHeader>
      <TitanTableBody>
        <TitanRow id="row-1" href="https://adobe.com/" target="_blank">
          <TitanCell>Adobe</TitanCell>
          <TitanCell>https://adobe.com/</TitanCell>
          <TitanCell>January 28, 2023</TitanCell>
        </TitanRow>
        <TitanRow id="row-2" href="https://google.com/" target="_blank">
          <TitanCell>Google</TitanCell>
          <TitanCell>https://google.com/</TitanCell>
          <TitanCell>April 5, 2023</TitanCell>
        </TitanRow>
        <TitanRow id="row-3" href="https://nytimes.com/" target="_blank">
          <TitanCell>New York Times</TitanCell>
          <TitanCell>https://nytimes.com/</TitanCell>
          <TitanCell>July 12, 2023</TitanCell>
        </TitanRow>
      </TitanTableBody>
    </TitanTable>
  )
}

/* -------------------------------------------------------------------------- */
/*  4b. Clickable name cell (label clicable)                                  */
/* -------------------------------------------------------------------------- */

const clickableNameRows = [
  { id: '1', name: 'Games', type: 'File folder', date: '6/7/2020' },
  { id: '2', name: 'Program Files', type: 'File folder', date: '4/7/2021' },
  { id: '3', name: 'bootmgr', type: 'System file', date: '11/20/2010' },
]

export function TitanTableExampleClickableNameCell() {
  return (
    <TitanTable aria-label="Files with clickable names">
      <TitanTableHeader>
        <TitanColumn isRowHeader>Name</TitanColumn>
        <TitanColumn>Type</TitanColumn>
        <TitanColumn>Date Modified</TitanColumn>
      </TitanTableHeader>
      <TitanTableBody items={clickableNameRows}>
        {(item) => (
          <TitanRow id={item.id}>
            <TitanCell>
              <button
                type="button"
                className="table-cell-link"
                onClick={() => alert(`Open: ${item.name}`)}
              >
                {item.name}
              </button>
            </TitanCell>
            <TitanCell>{item.type}</TitanCell>
            <TitanCell>{item.date}</TitanCell>
          </TitanRow>
        )}
      </TitanTableBody>
    </TitanTable>
  )
}

/* -------------------------------------------------------------------------- */
/*  4c. Cell types (date+icon, initials, status, actions menu)                 */
/* -------------------------------------------------------------------------- */

const cellTypesRows = [
  { id: '1', name: 'Alice Wong', date: '2025-11-15', status: 'finished' as const },
  { id: '2', name: 'Diego Zapata', date: '2025-10-01', status: 'processing' as const },
  { id: '3', name: 'Diego Zapata', date: '2025-09-20', status: 'demo' as const },
  { id: '4', name: 'Jane Doe', date: '2025-08-12', status: 'failed' as const },
]

export function TitanTableExampleCellTypes() {
  return (
    <TitanTable aria-label="Rows with date, initials, status, actions">
      <TitanTableHeader>
        <TitanColumn isRowHeader>Name</TitanColumn>
        <TitanColumn>Date</TitanColumn>
        <TitanColumn>Status</TitanColumn>
        <TitanColumn className="table-col-actions">Actions</TitanColumn>
      </TitanTableHeader>
      <TitanTableBody items={cellTypesRows}>
        {(item) => (
          <TitanRow id={item.id}>
            <TitanCell>
              <TitanTableCellInitials name={item.name} seed={item.id} />
              <span style={{ marginLeft: 8 }}>{item.name}</span>
            </TitanCell>
            <TitanCell>
              <TitanTableCellDate value={item.date} />
            </TitanCell>
            <TitanCell>
              <TitanTableCellStatus status={item.status} />
            </TitanCell>
            <TitanCell className="table-cell-actions">
              <TitanTableCellActions
                onEdit={() => alert(`Edit ${item.name}`)}
                onDelete={() => alert(`Delete ${item.name}`)}
              />
            </TitanCell>
          </TitanRow>
        )}
      </TitanTableBody>
    </TitanTable>
  )
}

/* -------------------------------------------------------------------------- */
/*  5. Empty state                                                            */
/* -------------------------------------------------------------------------- */

export function TitanTableExampleEmpty() {
  return (
    <TitanTable aria-label="Search results">
      <TitanTableHeader>
        <TitanColumn isRowHeader>Name</TitanColumn>
        <TitanColumn>Type</TitanColumn>
        <TitanColumn>Date Modified</TitanColumn>
      </TitanTableHeader>
      <TitanTableBody items={[]} renderEmptyState={() => 'No results found.'}>
        {() => null}
      </TitanTableBody>
    </TitanTable>
  )
}

/* -------------------------------------------------------------------------- */
/*  6. Selection and actions                                                  */
/* -------------------------------------------------------------------------- */

const selectionRows = [
  { id: 'charizard', name: 'Charizard', type: 'Fire, Flying', level: 67 },
  { id: 'blastoise', name: 'Blastoise', type: 'Water', level: 56 },
  { id: 'venusaur', name: 'Venusaur', type: 'Grass, Poison', level: 83 },
  { id: 'pikachu', name: 'Pikachu', type: 'Electric', level: 100 },
]

export function TitanTableExampleSelection() {
  const [selected, setSelected] = useState<Selection>(new Set())

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
      <TitanTable
        aria-label="Favorite pokemon"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
        onRowAction={(key) => alert(`Clicked ${key}`)}
      >
        <TitanTableHeader>
          <TitanColumn isRowHeader>Name</TitanColumn>
          <TitanColumn>Type</TitanColumn>
          <TitanColumn>Level</TitanColumn>
        </TitanTableHeader>
        <TitanTableBody items={selectionRows}>
          {(item) => (
            <TitanRow id={item.id}>
              <TitanCell>{item.name}</TitanCell>
              <TitanCell>{item.type}</TitanCell>
              <TitanCell>{item.level}</TitanCell>
            </TitanRow>
          )}
        </TitanTableBody>
      </TitanTable>
      <p style={{ fontSize: 14, margin: 0 }}>
        Current selection: {selected === 'all' ? 'all' : [...(selected as Set<string>)].join(', ')}
      </p>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  7. Sortable                                                               */
/* -------------------------------------------------------------------------- */

const sortableRows = [
  { id: 1, name: 'Charizard', type: 'Fire, Flying', level: 67 },
  { id: 2, name: 'Blastoise', type: 'Water', level: 56 },
  { id: 3, name: 'Venusaur', type: 'Grass, Poison', level: 83 },
  { id: 4, name: 'Pikachu', type: 'Electric', level: 100 },
]

export function TitanTableExampleSortable() {
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: 'name',
    direction: 'ascending',
  })

  const sortedRows = useMemo(() => {
    if (!sortDescriptor.column) return sortableRows
    return [...sortableRows].sort((a, b) => {
      const key = sortDescriptor.column as keyof (typeof sortableRows)[0]
      const aVal = a[key]
      const bVal = b[key]
      const cmp = aVal < bVal ? -1 : aVal > bVal ? 1 : 0
      return sortDescriptor.direction === 'descending' ? -cmp : cmp
    })
  }, [sortDescriptor])

  return (
    <TitanTable
      aria-label="Favorite pokemon"
      sortDescriptor={sortDescriptor}
      onSortChange={setSortDescriptor}
    >
      <TitanTableHeader>
        <TitanColumn id="name" isRowHeader allowsSorting>Name</TitanColumn>
        <TitanColumn id="type" allowsSorting>Type</TitanColumn>
        <TitanColumn id="level" allowsSorting>Level</TitanColumn>
      </TitanTableHeader>
      <TitanTableBody items={sortedRows}>
        {(item) => (
          <TitanRow id={String(item.id)}>
            <TitanCell>{item.name}</TitanCell>
            <TitanCell>{item.type}</TitanCell>
            <TitanCell>{item.level}</TitanCell>
          </TitanRow>
        )}
      </TitanTableBody>
    </TitanTable>
  )
}

/* -------------------------------------------------------------------------- */
/*  7b. Header variants: [sort] label | label [info] | [sort] label [info] | label */
/* -------------------------------------------------------------------------- */

const headerVariantRows = [
  { id: 1, name: 'Alpha', metric: 100, note: 'First', plain: 'A' },
  { id: 2, name: 'Beta', metric: 200, note: 'Second', plain: 'B' },
  { id: 3, name: 'Gamma', metric: 150, note: 'Third', plain: 'C' },
]

export function TitanTableExampleHeaderVariants() {
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({ column: 'name', direction: 'ascending' })
  const sortedRows = useMemo(() => {
    if (!sortDescriptor.column) return headerVariantRows
    return [...headerVariantRows].sort((a, b) => {
      const key = sortDescriptor.column as keyof (typeof headerVariantRows)[0]
      const aVal = a[key]
      const bVal = b[key]
      const cmp = String(aVal).localeCompare(String(bVal), undefined, { numeric: true })
      return sortDescriptor.direction === 'descending' ? -cmp : cmp
    })
  }, [sortDescriptor])

  return (
    <TitanTable
      aria-label="Table with header variants"
      sortDescriptor={sortDescriptor}
      onSortChange={setSortDescriptor}
    >
      <TitanTableHeader>
        <TitanColumn id="name" isRowHeader allowsSorting sortIconPosition="left">
          Name
        </TitanColumn>
        <TitanColumn id="metric" showInfoIcon infoIconAriaLabel="Metric definition">
          Metric
        </TitanColumn>
        <TitanColumn id="note" allowsSorting sortIconPosition="left" showInfoIcon infoIconAriaLabel="Note tooltip">
          Note
        </TitanColumn>
        <TitanColumn id="plain">Plain</TitanColumn>
      </TitanTableHeader>
      <TitanTableBody items={sortedRows}>
        {(item) => (
          <TitanRow id={String(item.id)}>
            <TitanCell>{item.name}</TitanCell>
            <TitanCell>{item.metric}</TitanCell>
            <TitanCell>{item.note}</TitanCell>
            <TitanCell>{item.plain}</TitanCell>
          </TitanRow>
        )}
      </TitanTableBody>
    </TitanTable>
  )
}

/* -------------------------------------------------------------------------- */
/*  8. Resizable columns                                                      */
/* -------------------------------------------------------------------------- */

const resizableRows = [
  { id: 1, name: '2022 Roadmap Proposal Revision 012822 Copy (2)', date: 'November 27, 2022 at 4:56PM', size: '214 KB' },
  { id: 2, name: 'Budget', date: 'January 27, 2021 at 1:56AM', size: '14 MB' },
  { id: 3, name: 'Welcome Email Template', date: 'July 24, 2022 at 2:48 PM', size: '20 KB' },
  { id: 4, name: 'Job Posting_8301', date: 'May 30, 2025', size: '139 KB' },
]

export function TitanTableExampleResizable() {
  return (
    <TitanResizableTableContainer style={{ maxHeight: 320 }}>
      <TitanTable noWrapper aria-label="Table with resizable columns" style={{ width: '100%' }}>
        <TitanTableHeader>
          <TitanColumn id="file" isRowHeader allowsResizing defaultWidth={200} minWidth={120} maxWidth={500}>
            File Name
          </TitanColumn>
          <TitanColumn id="size" allowsResizing defaultWidth={80}>
            Size
          </TitanColumn>
          <TitanColumn id="date" allowsResizing defaultWidth={140} minWidth={100}>
            Date Modified
          </TitanColumn>
        </TitanTableHeader>
        <TitanTableBody items={resizableRows}>
          {(item) => (
            <TitanRow id={String(item.id)}>
              <TitanCell>{item.name}</TitanCell>
              <TitanCell>{item.size}</TitanCell>
              <TitanCell>{item.date}</TitanCell>
            </TitanRow>
          )}
        </TitanTableBody>
      </TitanTable>
    </TitanResizableTableContainer>
  )
}

/* -------------------------------------------------------------------------- */
/*  9. Drag and drop                                                          */
/* -------------------------------------------------------------------------- */

const dragDropInitial = [
  { id: 1, name: 'Games', date: '6/7/2020', type: 'File folder' },
  { id: 2, name: 'Program Files', date: '4/7/2021', type: 'File folder' },
  { id: 3, name: 'bootmgr', date: '11/20/2010', type: 'System file' },
  { id: 4, name: 'log.txt', date: '1/18/2016', type: 'Text Document' },
]

export function TitanTableExampleDragDrop() {
  const list = useListData({
    initialItems: dragDropInitial,
    getKey: (item) => String(item.id),
  })

  const { dragAndDropHooks } = useDragAndDrop({
    getItems: (keys, items: typeof list.items) =>
      items.map((item) => ({ 'text/plain': item.name })),
    onReorder: (e) => {
      if (e.target.dropPosition === 'before') {
        list.moveBefore(e.target.key, e.keys)
      } else if (e.target.dropPosition === 'after') {
        list.moveAfter(e.target.key, e.keys)
      }
    },
  })

  return (
    <TitanTable aria-label="Files" selectionMode="multiple" dragAndDropHooks={dragAndDropHooks}>
      <TitanTableHeader>
        <TitanColumn isRowHeader>Name</TitanColumn>
        <TitanColumn>Type</TitanColumn>
        <TitanColumn>Date Modified</TitanColumn>
      </TitanTableHeader>
      <TitanTableBody items={list.items}>
        {(item) => (
          <TitanRow id={String(item.id)}>
            <TitanCell>{item.name}</TitanCell>
            <TitanCell>{item.type}</TitanCell>
            <TitanCell>{item.date}</TitanCell>
          </TitanRow>
        )}
      </TitanTableBody>
    </TitanTable>
  )
}
