'use client';

import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function GalleryCarousel() {
  return (
    <div className='flex-flex-col justify-center items-center m-12 '>
      <h2 className='text-2xl font-semibold text-center text-lightGrey uppercase mb-8'>
        See pictures of our state-of-the-art facility
      </h2>
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000 })]}
        className='w-full max-w-[100rem] mx-auto'
      >
        <CarouselContent>
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem className='basis-1/2 w-[70rem]' key={`Carousel image ${index + 1}`}>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-auto items-center justify-center p-0'>
                    {/* Could not get it to work with nextjs Image component. Didnt spend too much time trying to figure it out */}
                    <img
                      className='object-cover w-full h-full'
                      src={`/assets/images/carousel-${index + 1}.png`}
                      alt={index.toString()}
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
  );
}
