'use client';

import Image from 'next/image';
import { IoStar } from 'react-icons/io5';

export default function GoogleReview({
  name,
  date,
  review,
  rating,
  url,
  previewUrl,
  onClickReview,
}: GoogleReviewProps) {
  const reviewStars = Array(rating).fill(0);

  const handleViewOnGoogleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    window.open(url, '_blank');
  };

  return (
    <div className='min-w-[180px] flex flex-col justify-between h-full'>
      <div className='p-5 bg-white h-[265px] shadow-md cursor-pointer rounded-sm transform transition-transform duration-300 ease-in-out hover:-translate-y-2 flex flex-col'>
        <div className='flex flex-col flex-grow'>
          <div className='flex justify-between gap-2'>
            <span className='text-sm leading-none'>{name}</span>
            <Image
              src='/assets/svgs/GoogleTrustIcon.svg'
              width={48}
              height={48}
              className='w-[20px] h-[20px]'
              alt='google trust'
            />
          </div>
          <span className='text-gray-500 text-xs leading-none'>{date}</span>
          <div className='flex mt-2 mb-2'>
            {reviewStars.map((_, i) => (
              <IoStar color='#F6BB06' key={i} />
            ))}
          </div>
        </div>
        <div className='flex items-center'>
          <p className='text-[15px] max-h-[70px] overflow-hidden'>{review}</p>
        </div>

        <div className='flex flex-col mt-4'>
          <div className='flex flex-row w-full justify-center space-x-6 items-baseline'>
            <button
              onClick={() => onClickReview && onClickReview({ name, date, review, rating, url, previewUrl })}
              className='text-sm text-gray-500 bg-transparent border-none leading-none cursor-pointer hover:underline hover:text-gray-800'
            >
              Read more
            </button>

            <button
              onClick={handleViewOnGoogleClick}
              className='text-sm text-gray-500 leading-none cursor-pointer hover:underline hover:text-gray-800'
            >
              View on Google
            </button>
          </div>
          <div className='mt-4 text-xs text-center text-gray-500'>
            <p>Your Trusted Bridgwater Dentist – Supernova Dental</p>
          </div>
        </div>
      </div>
    </div>
  );
}
