import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

type PaginationWrapperProps = {
  currentPage: number;
  totalPages: number;
};

export default function PaginationControls({ currentPage, totalPages }: PaginationWrapperProps) {
  const hasNextPage = currentPage < totalPages;
  const hasPrevPage = currentPage > 1;

  function createPageLinks() {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink href={`?page=${i}`} isActive={i === currentPage} scroll={false}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return pages;
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={!hasPrevPage ? 'cursor-not-allowed' : undefined}
            href={`?page=${currentPage - 1}`}
            disabled={!hasPrevPage}
            scroll={false}
          />
        </PaginationItem>
        {createPageLinks()}
        {totalPages > 5 && <PaginationEllipsis />}
        <PaginationItem>
          <PaginationNext
            className={!hasNextPage ? 'cursor-not-allowed' : undefined}
            href={`?page=${currentPage + 1}`}
            disabled={!hasNextPage}
            scroll={false}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
