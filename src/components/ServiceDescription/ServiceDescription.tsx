import { cn } from '@/lib/utils';

export default function ServiceDescription({ description, className }: ServiceDescription) {
  return <p className={cn('mx-auto max-w-[38rem] text-pretty text-center leading-7 text-taupe', className)}>{description}</p>;
}
