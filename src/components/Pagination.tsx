'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  totalItems?: number
}

function getPageNumbers(current: number, total: number, maxButtons = 7): (number | '...')[] {
  if (total <= maxButtons) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const pages: (number | '...')[] = []
  const leftBound = Math.max(2, current - 2)
  const rightBound = Math.min(total - 1, current + 2)

  pages.push(1)

  if (leftBound > 2) pages.push('...')

  for (let i = leftBound; i <= rightBound; i++) {
    pages.push(i)
  }

  if (rightBound < total - 1) pages.push('...')

  pages.push(total)

  return pages
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
}: PaginationProps) {
  if (totalPages <= 1) return null

  function goToPage(page: number) {
    if (page < 1 || page > totalPages) return
    onPageChange(page)
  }

  const pageNumbers = getPageNumbers(currentPage, totalPages)

  return (
    <div className="flex flex-col md:flex-row justify-end items-center gap-2 mt-4">
      <nav className="flex justify-center space-x-2">
        <Button
          variant="outline"
          size={'icon'}
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft />
        </Button>

        {pageNumbers.map((page, index) =>
          page === '...' ? (
            <span key={`ellipsis-${index}`} className="px-3 py-1 select-none">
              &hellip;
            </span>
          ) : (
            <Button
              size={'icon'}
              key={page}
              variant={page === currentPage ? 'default' : 'outline'}
              onClick={() => goToPage(page as number)}
            >
              {page}
            </Button>
          )
        )}

        <Button
          variant="outline"
          size={'icon'}
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight />
        </Button>
      </nav>

      {(totalItems !== undefined) && (
        <p className="text-sm text-muted-foreground">
          Total {totalItems} items
        </p>
      )}
    </div>
  )
}
