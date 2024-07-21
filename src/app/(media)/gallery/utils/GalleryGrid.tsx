'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTitle } from '@/components/ui/dialog';
import fetchMediaPostsById from '@/services/wordpress/fetchMediaPostsById';
import fetchMediaPosts from '@/services/wordpress/fetchMediaPosts';
import { useMemo, useState, useEffect } from 'react';
import { FaShareAlt } from 'react-icons/fa';
import { Skeleton } from '@/components/ui/skeleton';

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [mediaItems, setMediaItems] = useState<MediaPost[]>([]);
  const [selectedImage, setSelectedImage] = useState<MediaPost | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch media items when the component mounts
  useEffect(() => {
    const loadMedia = async () => {
      try {
        const data = await fetchMediaPosts();
        setMediaItems(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching media files:', error);
        setLoading(false);
      }
    };

    void loadMedia();
  }, []);

  // Filter media items based on the selected category
  const filteredImages = useMemo(() => {
    if (activeFilter === 'All') {
      return mediaItems;
    } else {
      return mediaItems.filter((mediaItem: MediaPost) => {
        // Check if the class_list includes the class for the active filter
        return mediaItem.class_list.some((className) => className === `category-${activeFilter}`);
      });
    }
  }, [activeFilter, mediaItems]);

  const handleImageClick = async (mediaItem: MediaPost) => {
    try {
      const data: MediaPost = await fetchMediaPostsById(mediaItem.id);
      setSelectedImage(data);
    } catch (error) {
      console.error('Error fetching media details:', error);
    }
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  function ImageContent({ content }: { content: string }) {
    // Example of a simple React component rendering HTML content
    return <div className='post-content' dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return (
    <div className='w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16'>
      <div className='flex justify-center mb-8 md:mb-12'>
        <div className='flex flex-wrap gap-4 md:gap-6'>
          {['All', 'practice', 'invisalign'].map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'secondary' : 'outline'}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === 'image'
                ? 'Image'
                : filter === 'practice'
                ? 'Practice'
                : filter === 'invisalign'
                ? 'Invisalign'
                : 'All'}
            </Button>
          ))}
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8'>
        {loading
          ? Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className='relative overflow-hidden rounded-lg'>
                <Skeleton className='w-full h-64' />
              </div>
            ))
          : filteredImages.map((image) => (
              <div
                key={image.id}
                className='relative overflow-hidden rounded-lg cursor-pointer group'
                onClick={() => {
                  handleImageClick(image)
                    .then(() => {
                      // Handle successful resolution of the promise, if needed
                    })
                    .catch((error) => {
                      // Handle any errors that occurred during the execution of handleImageClick
                      console.error('Error handling image click:', error);
                    });
                }}
              >
                <img
                  src={image.jetpack_featured_media_url}
                  alt={image.alt_text}
                  width={600}
                  height={400}
                  className='w-full h-64 object-cover transition-all duration-300 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <h3 className='text-white text-lg font-semibold'>{image.title.rendered}</h3>
                </div>
              </div>
            ))}
      </div>
      {selectedImage != null && (
        <Dialog open onOpenChange={handleClose}>
          <DialogClose>
            <FaShareAlt size={24} />
            <span className='sr-only'>Close</span>
          </DialogClose>
          <DialogContent className='p-0 max-w-[90vw] max-h-[90vh] overflow-auto'>
            <img
              src={selectedImage.jetpack_featured_media_url}
              alt={selectedImage.alt_text}
              width={800}
              height={600}
              className='w-full h-auto object-contain'
            />
            <div className='p-4 bg-background'>
              <DialogTitle className='text-center text-2xl font-bold mb-4'>{selectedImage.title.rendered}</DialogTitle>
              <ImageContent content={selectedImage.content?.rendered} />
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
