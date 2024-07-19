import Image from 'next/image';
import { IoStar } from 'react-icons/io5';

export default function OverallGoogleRating() {
  return (
    <div className='flex flex-col items-center gap-2 mx-8 lg:mt-12'>
      <span className='font-semibold text-2xl'>Excellent</span>
      <span className='flex gap-1'>
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <IoStar key={i} color='#F6BB06' size={28} />
          ))}
      </span>
      <span className='text-center text-sm'>
        Based on <span className='font-semibold text-sm'>53 reviews</span>
      </span>
      <Image src='/assets/svgs/GoogleLogo.svg' width={110} height={35} alt='Google logo' />
    </div>
  );
}
