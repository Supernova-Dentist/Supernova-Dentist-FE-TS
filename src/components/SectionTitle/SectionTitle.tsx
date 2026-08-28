import { cn } from '@/lib/utils';

export default function SectionTitle({ title, className }: { title: string; className?: string }) {
  return (
    <h2 className={cn('text-balance text-center text-3xl leading-tight text-obsidian md:text-4xl lg:text-5xl', className)}>
      {title}
    </h2>
  );
}
