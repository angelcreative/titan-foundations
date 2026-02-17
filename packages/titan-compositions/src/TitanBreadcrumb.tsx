import { Breadcrumb, Breadcrumbs, Button } from 'react-aria-components'
import { ChevronRight } from 'lucide-react'

export interface TitanBreadcrumbItem {
  id: string
  label: string
  onPress?: () => void
}

export interface TitanBreadcrumbProps {
  items: TitanBreadcrumbItem[]
  currentLabel: string
  ariaLabel?: string
}

/**
 * Reusable breadcrumb composition matching Titan structure:
 * - React Aria Breadcrumbs/Breadcrumb anatomy
 * - ChevronRight separator between items
 * - Current item marked with aria-current="page"
 */
export function TitanBreadcrumb({
  items,
  currentLabel,
  ariaLabel = 'Breadcrumb',
}: TitanBreadcrumbProps) {
  return (
    <Breadcrumbs className="breadcrumb-nav" aria-label={ariaLabel}>
      {items.map((item) => (
        <Breadcrumb key={item.id} className="breadcrumb-item">
          <Button className="breadcrumb-link" onPress={item.onPress}>
            {item.label}
          </Button>
          <span className="breadcrumb-separator" aria-hidden="true">
            <ChevronRight />
          </span>
        </Breadcrumb>
      ))}
      <Breadcrumb className="breadcrumb-item">
        <span className="breadcrumb-current" aria-current="page">
          {currentLabel}
        </span>
      </Breadcrumb>
    </Breadcrumbs>
  )
}
