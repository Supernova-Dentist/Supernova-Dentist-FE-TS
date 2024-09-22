import { cn } from '@/lib/utils';

export default function SubHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h2 className={cn('text-2xl font-semibold mb-2 text-gray-900', className)}>{children}</h2>;
}
