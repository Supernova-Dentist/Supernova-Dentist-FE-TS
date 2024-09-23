import { cn } from '@/lib/utils';

export default function SectionSpacing({ children, className }: { children: React.ReactNode; className?: string }) {
  return <section className={cn('mb-4 text-gray-800 leading-relaxed', className)}>{children}</section>;
}
