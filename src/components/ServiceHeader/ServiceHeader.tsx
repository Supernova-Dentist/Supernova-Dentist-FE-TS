import { cn } from '@/lib/utils';

export default function ServiceHeader({ title, subTitle, className }: ServiceHeader) {
  return (
    <div className={cn('text-center', className)}>
      <h2 className='text-balance text-3xl leading-tight text-obsidian md:text-4xl'>{title}</h2>
      <p className='mt-4 text-lg leading-7 text-taupe'>{subTitle}</p>
    </div>
  );
}
