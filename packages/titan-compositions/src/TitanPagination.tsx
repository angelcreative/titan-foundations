import { Button } from 'react-aria-components'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export type TitanPaginationPage = number | 'ellipsis'

export interface TitanPaginationProps {
  ariaLabel: string
  pages: TitanPaginationPage[]
  currentPage: number
  previousDisabled?: boolean
  nextDisabled?: boolean
  onPageChange?: (page: number) => void
  onPrevious?: () => void
  onNext?: () => void
}

export function TitanPagination({
  ariaLabel,
  pages,
  currentPage,
  previousDisabled = false,
  nextDisabled = false,
  onPageChange,
  onPrevious,
  onNext,
}: TitanPaginationProps) {
  return (
    <nav className="pagination-nav" aria-label={ariaLabel}>
      <Button className="pagination-button pagination-nav-button" isDisabled={previousDisabled} aria-label="Previous page" onPress={onPrevious}>
        <ChevronLeft />
      </Button>
      {pages.map((page, index) =>
        page === 'ellipsis' ? (
          <span key={`ellipsis-${index}`} className="pagination-ellipsis" aria-hidden="true">
            ...
          </span>
        ) : (
          <Button
            key={`${ariaLabel}-${page}`}
            className={page === currentPage ? 'pagination-button pagination-page-button pagination-page-button-selected' : 'pagination-button pagination-page-button'}
            aria-current={page === currentPage ? 'page' : undefined}
            onPress={() => onPageChange?.(page)}
          >
            {page}
          </Button>
        )
      )}
      <Button className="pagination-button pagination-nav-button" isDisabled={nextDisabled} aria-label="Next page" onPress={onNext}>
        <ChevronRight />
      </Button>
    </nav>
  )
}
