import { cn } from '@/lib/utils';

export default function ServiceHeader({ title, subTitle, className }: ServiceHeaderProps) {
  return (
    <div className={cn('text-center', className)}>
      <h1 className='text-3xl font-bold text-gold md:text-4xl'>{title}</h1>
      <p className='mt-4 text-lg font-medium text-grey'>{subTitle}</p>
    </div>
  );
}
