import { Button } from 'react-aria-components'
import { renderIconNode } from './icons'

export type TitanPaginationPage = number | 'ellipsis'

export interface TitanPaginationProps {
  ariaLabel?: string
  'aria-label'?: string
  pages?: TitanPaginationPage[]
  currentPage: number
  totalPages?: number
  setPage?: (page: number) => void
  previousDisabled?: boolean
  nextDisabled?: boolean
  onPageChange?: (page: number) => void
  onPrevious?: () => void
  onNext?: () => void
}

function buildPages(currentPage: number, totalPages: number): TitanPaginationPage[] {
  if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1)
  if (currentPage <= 3) return [1, 2, 3, 4, 5, 'ellipsis', totalPages]
  if (currentPage > 3 && currentPage < totalPages - 2) {
    return [1, 'ellipsis', currentPage - 1, currentPage, currentPage + 1, 'ellipsis', totalPages]
  }
  return [1, 'ellipsis', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
}

export function TitanPagination({
  ariaLabel = 'Pagination',
  'aria-label': ariaLabelProp,
  pages,
  currentPage,
  totalPages,
  setPage,
  previousDisabled = false,
  nextDisabled = false,
  onPageChange,
  onPrevious,
  onNext,
}: TitanPaginationProps) {
  const resolvedAriaLabel = ariaLabelProp ?? ariaLabel
  if (typeof totalPages === 'number' && totalPages <= 1) return null
  const resolvedPages =
    pages ??
    (typeof totalPages === 'number'
      ? buildPages(currentPage, totalPages)
      : [Math.max(1, currentPage - 1), currentPage, currentPage + 1])
  const handlePageChange = (page: number) => {
    onPageChange?.(page)
    setPage?.(page)
  }
  const previousIsDisabled = previousDisabled || currentPage <= 1
  const nextIsDisabled =
    nextDisabled || (typeof totalPages === 'number' ? currentPage >= totalPages : false)

  return (
    <nav className="pagination-nav" aria-label={resolvedAriaLabel}>
      <Button
        className="pagination-button pagination-nav-button"
        isDisabled={previousIsDisabled}
        aria-label="Previous page"
        onPress={() => {
          onPrevious?.()
          if (!previousIsDisabled) handlePageChange(Math.max(1, currentPage - 1))
        }}
      >
        {renderIconNode('chevron-left')}
      </Button>
      {resolvedPages.map((page, index) =>
        page === 'ellipsis' ? (
          <span key={`ellipsis-${index}`} className="pagination-ellipsis" aria-hidden="true">
            ...
          </span>
        ) : (
          <Button
            key={`${resolvedAriaLabel}-${page}`}
            className={page === currentPage ? 'pagination-button pagination-page-button pagination-page-button-selected' : 'pagination-button pagination-page-button'}
            aria-current={page === currentPage ? 'page' : undefined}
            onPress={() => handlePageChange(page)}
          >
            {page}
          </Button>
        )
      )}
      <Button
        className="pagination-button pagination-nav-button"
        isDisabled={nextIsDisabled}
        aria-label="Next page"
        onPress={() => {
          onNext?.()
          if (!nextIsDisabled) handlePageChange(currentPage + 1)
        }}
      >
        {renderIconNode('chevron-right')}
      </Button>
    </nav>
  )
}
