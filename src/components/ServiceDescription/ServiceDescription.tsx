import { cn } from '@/lib/utils';

export default function ServiceDescription({ description, className }: ServiceDescription) {
  return <p className={cn('text-lightGrey text-center sm:text-left', className)}>{description}</p>;
}
