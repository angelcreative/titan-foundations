import type { ReactNode } from 'react'
import { Collection, Tab, TabList, TabPanel, Tabs } from 'react-aria-components'
import type { Key } from 'react-aria-components'

export interface TitanTabItem {
  id: string
  label: string
  content: ReactNode
  disabled?: boolean
}

export interface TitanTabsProps {
  items: TitanTabItem[]
  defaultSelectedKey?: string
  selectedKey?: Key
  onSelectionChange?: (key: Key) => void
  overflow?: boolean
  orientation?: 'horizontal' | 'vertical'
  ariaLabel?: string
}

export function TitanTabs({
  items,
  defaultSelectedKey,
  selectedKey,
  onSelectionChange,
  overflow = false,
  orientation = 'horizontal',
  ariaLabel = 'Tabs',
}: TitanTabsProps) {
  const isVertical = orientation === 'vertical'

  const rootClass = isVertical
    ? 'tabs-root tabs-root-vertical'
    : overflow
      ? 'tabs-root tabs-root-overflow'
      : 'tabs-root'

  const listClass = isVertical
    ? 'tabs-list tabs-list-vertical'
    : overflow
      ? 'tabs-list tabs-list-scroll'
      : 'tabs-list'

  return (
    <Tabs
      className={rootClass}
      defaultSelectedKey={defaultSelectedKey}
      selectedKey={selectedKey}
      onSelectionChange={onSelectionChange}
      orientation={orientation}
    >
      <TabList className={listClass} aria-label={ariaLabel}>
        <Collection items={items}>
          {(item) => (
            <Tab
              id={item.id}
              className={isVertical ? 'tab-trigger tab-trigger-vertical' : 'tab-trigger'}
              isDisabled={item.disabled}
            >
              {item.label}
            </Tab>
          )}
        </Collection>
      </TabList>
      <Collection items={items}>
        {(item) => (
          <TabPanel id={item.id} className="tab-panel">
            {item.content}
          </TabPanel>
        )}
      </Collection>
    </Tabs>
  )
}
