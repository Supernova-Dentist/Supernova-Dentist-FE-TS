import { cn } from '@/lib/utils';

type TableCellProps = {
  children: React.ReactNode;
  className?: string;
};

export default function TableCell({ children, className = '' }: TableCellProps) {
  return <td className={cn('py-4 px-4 text-sm', className)}>{children}</td>;
}
