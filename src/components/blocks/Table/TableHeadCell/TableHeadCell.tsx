import { cn } from '@/lib/utils';

type TableCellProps = {
  children: React.ReactNode;
  className?: string;
};

export default function TableHeadCell({ children, className = '' }: TableCellProps) {
  return <th className={cn('py-4 px-4 text-sm', className)}>{children}</th>;
}
