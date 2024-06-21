'use client';

import GoogleReview from '@/components/GoogleReview/GoogleReview';
import googleReviewMockData from '@/components/GoogleReview/googleReviewMockData';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';

export default function GoogleReviewsCarousel() {
  return (
    <div className='w-full overflow-hidden mx-auto md:px-24 px-12'>
      <Carousel
        opts={{ align: 'start', loop: true }}
        plugins={[Autoplay({ delay: 8000 })]}
        className='w-full cursor-grab'
      >
        <CarouselContent>
          {googleReviewMockData.map(({ id, name, review, rating, date }) => (
            <CarouselItem key={id} className='w-full sm:basis-1/2 lg:basis-1/3 2xl:basis-1/6'>
              <Card className='shadow-none'>
                <CardContent className='bg-cream py-4 px-0'>
                  <GoogleReview name={name} review={review} rating={rating} date={date} />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className='flex justify-center p-4 mt-4'>
        <Link href='https://g.page/r/Cd1EdVyvZxVIEAI/review'>
          <button className='bg-primary text-white px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-700'>
            Write a Review
          </button>
        </Link>
      </div>
    </div>
  );
}
