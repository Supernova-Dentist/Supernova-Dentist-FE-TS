import Spinner from './Spinner';

export function MapSkeletonWithSpinner() {
  return (
    <div className='relative w-full h-[350px] bg-gray-200 animate-pulse'>
      <div className='absolute inset-0 flex items-center justify-center'>
        <Spinner />
      </div>
    </div>
  );
}
