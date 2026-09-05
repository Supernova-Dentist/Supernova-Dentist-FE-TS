'use client';

import GoogleReview from '@/components/GoogleReview/GoogleReview';
import googleReviewMockData from '@/components/GoogleReview/googleReviewMockData';
import Modal from '@/components/Modal/Modal';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import { useState } from 'react';
import { IoStar } from 'react-icons/io5';

export default function GoogleReviewsCarousel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState<GoogleReviewProps | null>(null);

  const toggleModal = (review: GoogleReviewProps | null = null) => {
    setIsModalOpen(!isModalOpen);
    setSelectedReview(review);
  };

  const onClickReview = (review: GoogleReviewProps) => {
    toggleModal(review);
  };

  return (
    <div className='mx-auto w-full max-w-[2000px] px-10 sm:px-12 md:px-24'>
      <Carousel
        opts={{ align: 'start', loop: true }}
        className='w-full'
        aria-label='Patient reviews'
      >
        <CarouselContent className='mx-auto items-stretch'>
          {googleReviewMockData
            .filter((review) => review !== undefined)
            .map(({ id, name, review, rating, date, url, previewUrl }) => (
              // Hacky flex basis fix atm. Couldnt figure out how to center without messing up the carousel.
              // Will need to increase the basis when we get more reviews.
              <CarouselItem
                key={id}
                className='mt-4 flex w-full sm:basis-1/2 lg:basis-1/3 2xl:basis-1/4'
              >
                <Card className='flex w-full border-0 bg-transparent shadow-none'>
                  <CardContent className='flex w-full p-0 py-4'>
                    <GoogleReview
                      name={name}
                      review={review}
                      rating={rating}
                      date={date}
                      url={url}
                      previewUrl={previewUrl}
                      onClickReview={onClickReview}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      

      {isModalOpen && selectedReview != null && (
        <Modal isOpen={isModalOpen} onClose={() => toggleModal(null)}>
            <Image
              src='/assets/svgs/GoogleTrustIcon.svg'
              width={48}
              height={48}
              className='w-[48px] h-[48px] mx-auto'
              alt='google trust'
            />
          <div className='max-h-[80vh] w-full overflow-y-auto p-4'>
            <h2 className='text-lg font-semibold mb-2'>{selectedReview.name}</h2>
            {/* <p className='text-gray-500 text-sm'>{selectedReview.date}</p> */}
            <div className='flex mt-2 mb-4'>
              {Array(selectedReview.rating)
                .fill(0)
                .map((_, i) => (
                  <IoStar color='#F6BB06' key={i} />
                ))}
            </div>
            <p>{selectedReview.review}</p>
          </div>
          <div className='flex justify-center mt-2'>
            <a
              href={selectedReview.url}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex min-h-11 items-center rounded-sm px-2 text-sm text-taupe underline underline-offset-4 hover:text-obsidian focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-light'
            >
              View on Google
            </a>
          </div>
        </Modal>
      )}
    </div>
  );
}
