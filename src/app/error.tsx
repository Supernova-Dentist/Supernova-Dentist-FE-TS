'use client'; // Error boundaries must be Client Components

import Link from 'next/link';
import { useEffect } from 'react';
import { BiError } from 'react-icons/bi';
import Button from '@/components/Button/Button';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='min-h-screen-minus-nav flex flex-col gap-4 justify-center items-center px-6 bg-cream'>
      <div className='flex flex-col gap-2 max-w-[650px] items-center'>
        <BiError size={50} />
        <h2 className='text-3xl'>Oops, something went wrong!</h2>
        <p className='text-center text-lightGrey'>{`We're sorry, but an unexpected error has occurred. Please try again later or contact support if the issue persists`}</p>
      </div>
      <div className='flex gap-2 items-center'>
        <Button
          className='bg-grey text-gray-50 hover:bg-lightGrey'
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
        <Link href='/'>
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
