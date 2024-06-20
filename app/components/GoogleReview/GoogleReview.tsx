import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AccordionHeader } from '@radix-ui/react-accordion';
import Image from 'next/image';
import { useState } from 'react';
import { IoStar } from 'react-icons/io5';

type GoogleReviewProps = {
  name: string;
  date: string;
  review: string;
  rating: number;
};

const trimReview = (review: string, maxLength: number) => {
  if (review.length <= maxLength) return review;
  const trimmedText = review.substring(0, maxLength);
  return trimmedText.substring(0, trimmedText.lastIndexOf(' ')) + '...';
};

export default function GoogleReview({ name, date, review, rating }: GoogleReviewProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const reviewStars = Array(rating).fill(0);
  const trimmedReview = trimReview(review, 300);

  const reviewText = isExpanded ? review : trimmedReview;

  return (
    <div className='min-w-[180px] flex flex-col justify-between'>
      <div className='bg-slate-50 p-5 shadow-md cursor-pointer rounded-sm transform transition-transform duration-300 ease-in-out hover:-translate-y-2'>
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
        {review.length > 300 ? (
          <Accordion type='single' collapsible>
            <AccordionItem value='review'>
              <AccordionHeader className='text-[15px] leading-none'>
                {isExpanded ? review : trimmedReview}
              </AccordionHeader>

              <AccordionTrigger
                className='text-xs text-gray-500 leading-none cursor-pointer hover:underline hover:text-gray-800'
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? 'Hide' : 'Read more'}
              </AccordionTrigger>
            </AccordionItem>
          </Accordion>
        ) : (
          <div className='text-[15px]'>{review}</div>
        )}
      </div>
    </div>
  );
}
