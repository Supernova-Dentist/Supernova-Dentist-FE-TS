'use client';

import { useState } from 'react';
import { IoStar } from 'react-icons/io5';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import googleReviewMockData from '@/components/GoogleReview/googleReviewMockData';
import GoogleReview from '@/components/GoogleReview/GoogleReview';
import Modal from '@/components/Modal/Modal';
import ReviewLink from '../ReviewLink/ReviewLink';

export default function GoogleReviewsCarousel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState<GoogleReviewProps | null>(null);

  const toggleModal = (review: GoogleReviewProps | null = null) => {
    setIsModalOpen(!isModalOpen);
    setSelectedReview(review);
  };

  return (
    <div className='max-w-[80%] overflow-hidden mx-auto md:px-24 px-12'>
      <Carousel
        opts={{ align: 'start', loop: true }}
        plugins={[Autoplay({ delay: 8000 })]}
        className='w-full cursor-grab'
      >
        <CarouselContent>
          {googleReviewMockData.map(({ id, name, review, rating, date }) => (
            <CarouselItem
              key={id}
              onClick={() => toggleModal({ id, name, review, rating, date })}
              className='w-full mt-4 sm:basis-1/2 lg:basis-1/3 2xl:basis-1/5'
            >
              <Card className='shadow-none bg-transparent'>
                <CardContent className='p-0 py-4'>
                  <GoogleReview name={name} review={review} rating={rating} date={date} />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/* <div className='flex justify-center p-4 mt-4'>
        <ReviewLink />
      </div> */}

      {isModalOpen && selectedReview != null && (
        <Modal isOpen={isModalOpen} onClose={() => toggleModal(null)}>
          <div>
            <h2 className='text-lg font-semibold mb-2'>{selectedReview.name}</h2>
            <p className='text-gray-500 text-sm'>{selectedReview.date}</p>
            <div className='flex mt-2 mb-4'>
              {Array(selectedReview.rating)
                .fill(0)
                .map((_, i) => (
                  <IoStar color='#F6BB06' key={i} />
                ))}
            </div>
            <p>{selectedReview.review}</p>
          </div>
        </Modal>
      )}
    </div>
  );
}
