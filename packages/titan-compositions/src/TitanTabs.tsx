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
  ariaLabel?: string
}

export function TitanTabs({
  items,
  defaultSelectedKey,
  overflow = false,
  ariaLabel = 'Tabs',
}: TitanTabsProps) {
  return (
    <Tabs className={overflow ? 'tabs-root tabs-root-overflow' : 'tabs-root'} defaultSelectedKey={defaultSelectedKey}>
      <TabList
        className={overflow ? 'tabs-list tabs-list-scroll' : 'tabs-list'}
        aria-label={ariaLabel}
      >
        {items.map((item) => (
          <Tab key={item.id} id={item.id} className="tab-trigger" isDisabled={item.disabled}>
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
