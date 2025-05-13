// components/InstagramPaginationControls/InstagramPaginationControls.tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

type InstagramPaginationProps = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPageCursor?: string;
  prevPageCursor?: string;
  currentPage: number;
  currentCursor?: string;
};

export default function InstagramPaginationControls({
  hasNextPage,
  hasPrevPage,
  nextPageCursor,
  prevPageCursor,
  currentPage,
  currentCursor,
}: InstagramPaginationProps) {
  const shouldDisablePrev = currentPage <= 1 || prevPageCursor === currentCursor;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={shouldDisablePrev ? 'cursor-not-allowed opacity-50' : undefined}
            href={shouldDisablePrev ? '#' : `?cursor=${prevPageCursor}&page=${currentPage - 1}&direction=before`}
            disabled={shouldDisablePrev}
            scroll={false}
          />
        </PaginationItem>

        <PaginationItem>
          <span className='px-4 py-2 text-sm font-medium'>{currentPage}</span>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            className={!hasNextPage ? 'cursor-not-allowed opacity-50' : undefined}
            href={!hasNextPage ? '#' : `?cursor=${nextPageCursor}&page=${currentPage + 1}&direction=after`}
            disabled={!hasNextPage}
            scroll={false}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
