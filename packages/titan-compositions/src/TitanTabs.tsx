import type { ReactNode } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-aria-components'

export interface TitanTabItem {
  id: string
  label: string
  content: ReactNode
  disabled?: boolean
}

export interface TitanTabsProps {
  items: TitanTabItem[]
  defaultSelectedKey?: string
  overflow?: boolean
  orientation?: 'horizontal' | 'vertical'
  ariaLabel?: string
}

export function TitanTabs({
  items,
  defaultSelectedKey,
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
      orientation={orientation}
    >
      <TabList className={listClass} aria-label={ariaLabel}>
        {items.map((item) => (
          <Tab
            key={item.id}
            id={item.id}
            className={isVertical ? 'tab-trigger tab-trigger-vertical' : 'tab-trigger'}
            isDisabled={item.disabled}
          >
            {item.label}
          </Tab>
        ))}
      </TabList>
      {items.map((item) => (
        <TabPanel key={item.id} id={item.id} className="tab-panel">
          {item.content}
        </TabPanel>
      ))}
    </Tabs>
  )
}
