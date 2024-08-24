import { cn } from '@/lib/utils';

export default function SectionTitle({ title, className }: { title: string; className?: string }) {
  return <h2 className={cn('text-2xl font-bold text-gold md:text-3xl', className)}>{title}</h2>;
}
