import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button/Button';

export default function NotFound() {
  return (
    <div className='min-h-screen-minus-nav flex flex-col gap-4 justify-center items-center px-6 bg-cream'>
      <Image width={100} height={100} src='/favicon.ico' alt='Brand logo' />
      <div className='flex flex-col gap-2 max-w-[650px] items-center'>
        <h2 className='text-3xl'>Oops! Page not found</h2>
        <p className='text-center text-lightGrey'>{`Looks like this page has been extracted! Don't worry, we're experts at fixing gaps.`}</p>
      </div>
      <div className='flex gap-2 items-center'>
        <Button>
          <Link href='/'>Go Home</Link>
        </Button>
      </div>
    </div>
  );
}
