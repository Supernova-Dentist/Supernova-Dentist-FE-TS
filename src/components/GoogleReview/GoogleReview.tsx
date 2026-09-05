'use client';

import Image from 'next/image';
import { IoStar } from 'react-icons/io5';
import { truncateText } from '@/utils/format/truncateString';

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

  const reviewExcerpt = truncateText(review, 220);

  return (
    <article className='flex h-full min-w-0 flex-col rounded-xl border border-stone bg-white p-5 shadow-[0_12px_35px_rgba(11,18,24,0.08)]'>
        <div className='flex flex-col'>
          <div className='flex justify-between gap-2'>
            <span className='text-sm leading-none'>{name}</span>
            <Image
              src='/assets/svgs/GoogleTrustIcon.svg'
              width={48}
              height={48}
              className='w-[20px] h-[20px]'
              alt='Google review'
            />
          </div>
          {/* <span className='text-gray-500 text-xs leading-none'>{date}</span> */}
          <div className='flex mt-2 mb-2'>
            {reviewStars.map((_, i) => (
              <IoStar color='#F6BB06' key={i} />
            ))}
          </div>
        </div>
        <div className='mt-3 flex flex-1 items-start'>
          <p className='break-words text-[15px] leading-6 text-taupe'>{reviewExcerpt}</p>
        </div>

        <footer className='mt-5 border-t border-stone pt-3'>
          <div className='flex flex-wrap items-center justify-center gap-x-4 gap-y-2'>
            <button
              onClick={() => onClickReview?.({ name, date, review, rating, url, previewUrl })}
              className='inline-flex min-h-11 items-center rounded-sm bg-transparent px-2 text-sm text-taupe underline underline-offset-4 hover:text-obsidian focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-light'
              aria-label={`Read ${name}'s full review`}
            >
              Read full review
            </button>

            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex min-h-11 items-center rounded-sm px-2 text-sm text-taupe underline underline-offset-4 hover:text-obsidian focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-light'
            >
              View on Google
            </a>
          </div>
          <p className='mt-2 text-center text-xs text-taupe'>Patient review shown with a link to Google</p>
        </footer>
    </article>
  );
}
