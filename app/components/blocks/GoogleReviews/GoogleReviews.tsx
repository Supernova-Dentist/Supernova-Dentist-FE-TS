'use client';

import Image from 'next/image';
import { IoStar } from 'react-icons/io5';
import GoogleReview from '@/components/GoogleReview/GoogleReview';
import googleReviewMockData from '@/components/GoogleReview/googleReviewMockData';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function GoogleReviews() {
  return (
    <div className='flex my-24 bg-cream px-4 py-12'>
      <div className='flex flex-col items-center gap-2 mx-8 mt-12'>
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
      <div className='w-full overflow-hidden mx-auto px-24'>
        <Carousel
          opts={{ align: 'start', loop: true }}
          plugins={[Autoplay({ delay: 8000 })]}
          className='w-full cursor-grab'
        >
          <CarouselContent>
            {googleReviewMockData.map(({ id, name, review, rating, date }) => (
              <CarouselItem key={id} className='basis-2/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/6'>
                <Card className='@@@@@@@ Card shadow-none'>
                  <CardContent className='@@@@@@@ Card content bg-cream py-4 px-0'>
                    <GoogleReview name={name} review={review} rating={rating} date={date} />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
