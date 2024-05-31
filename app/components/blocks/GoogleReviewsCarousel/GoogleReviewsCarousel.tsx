'use client';

import GoogleReview from '@/components/GoogleReview/GoogleReview';
import googleReviewMockData from '@/components/GoogleReview/googleReviewMockData';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function GoogleReviewsCarousel() {
  return (
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
  );
}
