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
          <PaginationPrevious href={`?page=${currentPage - 1}`} disabled={currentPage === 1} scroll={false} />
        </PaginationItem>
        {createPageLinks()}
        {totalPages > 5 && <PaginationEllipsis />}
        <PaginationItem>
          <PaginationNext href={`?page=${currentPage + 1}`} disabled={currentPage === totalPages} scroll={false} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
