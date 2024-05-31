'use client';

import Image from 'next/image';
import { useState } from 'react';
import { IoStar } from 'react-icons/io5';

type GoogleReviewProps = {
  name: string;
  date: string;
  review: string;
  rating: number;
};

export default function GoogleReview({ name, date, review, rating }: GoogleReviewProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const reviewStars = Array(rating).fill(0);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='min-w-[230px] flex flex-col justify-between transform transition-transform duration-300 ease-in-out hover:-translate-y-2'>
      <div className='bg-slate-50 p-5 shadow-md cursor-pointer rounded-sm'>
        <div className='flex flex-col'>
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
        </div>
        <div className='flex mt-4 mb-2'>
          {reviewStars.map((_, i) => (
            <IoStar color='#F6BB06' key={i} />
          ))}
        </div>
        <div>
          <p
            className={`text-[15px] ${
              isExpanded ? 'max-h-auto' : 'max-h-[87px] overflow-hidden'
            } transition-all duration-300`}
          >
            {review}
          </p>
        </div>
        <div>
          <span className='text-xs text-gray-500 leading-none cursor-pointer' onClick={toggleReadMore}>
            {isExpanded ? 'Hide' : 'Read more'}
          </span>
        </div>
      </div>
    </div>
  );
}
