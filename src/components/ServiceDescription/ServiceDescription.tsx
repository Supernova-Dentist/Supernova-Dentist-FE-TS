import { cn } from '@/lib/utils';

export default function ServiceDescription({ description, className }: ServiceDescription) {
  return (
    <p className={cn('text-lightGrey text-left text-lg lg:text-xl max-w-4xl mx-auto', className)}>{description}</p>
  );
}
