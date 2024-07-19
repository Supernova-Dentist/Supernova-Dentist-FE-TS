'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTitle } from '@/components/ui/dialog';
import { useMemo, useState } from 'react';
import { FaShareAlt } from 'react-icons/fa';
import { imageItems } from './utils/galleryItems';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredImages = useMemo(() => {
    if (activeFilter === 'All') {
      return imageItems;
    } else {
      return imageItems.filter((imageItem) => imageItem.category === activeFilter);
    }
  }, [activeFilter, imageItems]);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageItem) => {
    setSelectedImage(imageItem);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className='w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16'>
      <div className='flex justify-center mb-8 md:mb-12'>
        <div className='flex flex-wrap gap-4 md:gap-6'>
          {['All', 'before-after', 'testimonials', 'facilities', 'staff', 'procedures'].map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'primary' : 'outline'}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.replace('-', ' ')}
            </Button>
          ))}
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8'>
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className='relative overflow-hidden rounded-lg cursor-pointer group'
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className='w-full h-64 object-cover transition-all duration-300 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <h3 className='text-white text-lg font-semibold'>{image.caption}</h3>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <Dialog open onOpenChange={handleClose}>
          <DialogClose>
            <FaShareAlt size={24} />
            <span className='sr-only'>Close</span>
          </DialogClose>
          <DialogContent className='p-0 max-w-[90vw] max-h-[90vh] overflow-auto'>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className='w-full h-auto object-contain'
            />
            <div className='p-4 bg-background'>
              <DialogTitle className='text-center text-2xl font-bold mb-4'>{selectedImage.caption}</DialogTitle>

              {selectedImage.description && (
                <h3 className='text-lg font-semibold text-center'>{selectedImage.description}</h3>
              )}
            </div>
            <DialogFooter className='sm:justify-start'>
              <div className='p-4'>
                <Button type='button' variant='secondary' className='flex items-center space-x-2'>
                  <FaShareAlt size={16} /> {/* Share icon */}
                  <span>Share</span>
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
