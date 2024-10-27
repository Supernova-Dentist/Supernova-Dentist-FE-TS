'use client';

import GoogleReview from '@/components/GoogleReview/GoogleReview';
import googleReviewMockData from '@/components/GoogleReview/googleReviewMockData';
import Modal from '@/components/Modal/Modal';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { LinkPreview } from '@/components/ui/link-preview';
import Autoplay from 'embla-carousel-autoplay';
import { IoStar } from 'react-icons/io5';
import { useEffect, useState } from 'react';

export default function GoogleReviewsCarousel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState<GoogleReviewProps | null>(null);
  const [showArrows, setShowArrows] = useState(false);

  const toggleModal = (review: GoogleReviewProps | null = null) => {
    setIsModalOpen(!isModalOpen);
    setSelectedReview(review);
  };

  const onClickReview = (review: GoogleReviewProps) => {
    toggleModal(review);
  };

  const handleViewOnGoogleClick = (e: { preventDefault: () => void }, url: string) => {
    e.preventDefault();
    window.open(url, '_blank');
  };

  // Watch for resizing events
  useEffect(() => {
    const handleResize = () => {
      setShowArrows(window.innerWidth < 1536); // Adjust for when there is 4 reviews on screen
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='max-w-[2000px] w-full overflow-hidden mx-auto md:px-24 px-12'>
      <Carousel
        opts={{ align: 'start', loop: true }}
        plugins={[Autoplay({ delay: 8000 })]}
        className='w-full cursor-grab'
      >
        <CarouselContent className='mx-auto'>
          {googleReviewMockData.map(({ id, name, review, rating, date, url, previewUrl }) => (
            // Hacky flex basis fix atm. Couldnt figure out how to center without messing up the carousel.
            // Will need to increase the basis when we get more reviews.
            <CarouselItem key={id} className='w-full mt-4 sm:basis-1/2 lg:basis-1/3 2xl:basis-1/4'>
              <Card className='shadow-none bg-transparent'>
                <CardContent className='p-0 py-4'>
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
        {showArrows && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
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
          <div className='flex justify-center mt-2'>
            <LinkPreview
              isStatic
              imageSrc={selectedReview.previewUrl}
              url={selectedReview.url}
              className='font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500'
            >
              <button
                onClick={(e) => handleViewOnGoogleClick(e, selectedReview.url)}
                className='text-xs text-gray-500 leading-none cursor-pointer hover:underline hover:text-gray-800'
              >
                View on Google
              </button>
            </LinkPreview>
          </div>
        </Modal>
      )}
    </div>
  );
}
