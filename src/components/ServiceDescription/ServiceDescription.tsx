import { cn } from '@/lib/utils';

export default function ServiceDescription({ description, className }: ServiceDescription) {
  return <p className={cn('text-lightGrey text-center max-w-[32rem] mx-auto', className)}>{description}</p>;
}
