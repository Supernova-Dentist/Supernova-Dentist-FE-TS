'use client';

import { Card, CardContent } from '../../ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function GalleryCarousel() {
  return (
    <div className='flex flex-col justify-center items-center m-12'>
      <h2 className='text-2xl font-semibold text-center text-lightGrey uppercase mb-8'>
        See pictures of our state-of-the-art facility
      </h2>
      <div className='w-full mx-auto px-4 lg:px-20'>
        <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 5000 })]} className='w-full cursor-grab'>
          <CarouselContent>
            {Array.from({ length: 8 }).map((_, index) => (
              <CarouselItem key={`Carousel image ${index + 1}`} className='w-full sm:basis-1/2 lg:basis-1/3'>
                <div className='p-1'>
                  <Card>
                    <CardContent className='flex items-center justify-center p-0 aspect-w-16 aspect-h-9'>
                      {/* TODO: ADD NEXTJS IMAGE COMPONENT HERE */}
                      <img
                        className='object-cover w-full h-full'
                        src={`/assets/images/carousel-${index + 1}.png`}
                        alt={`Carousel image ${index + 1}`}
                      />
                    </CardContent>
                  </Card>
                </div>
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
