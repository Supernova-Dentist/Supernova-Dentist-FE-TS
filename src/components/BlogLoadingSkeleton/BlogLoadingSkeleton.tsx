import { Skeleton } from '@/components/ui/skeleton';

export default function BlogLoadingSkeleton() {
  const renderSkeletons = () => {
    return Array.from({ length: 9 }).map((_, index) => (
      <div key={index} className='flex flex-col p-6 border border-solid border-gray-200 rounded-sm shadow-lg'>
        <Skeleton className='h-6 w-3/4 mb-2' />
        <Skeleton className='h-4 w-1/4 mb-4' />
        <Skeleton className='h-4 w-full mb-2' />
        <Skeleton className='h-4 w-5/6 mb-2' />
        <Skeleton className='h-4 w-3/4 mb-6' />
        <Skeleton className='h-10 w-full' />
      </div>
    ));
  };

  return (
    <section className='container mx-auto max-w-[1500px] px-4 py-12 sm:px-10'>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>{renderSkeletons()}</div>
    </section>
  );
}
