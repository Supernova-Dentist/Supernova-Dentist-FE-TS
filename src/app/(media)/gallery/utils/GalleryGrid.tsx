'use client';

import PaginationControls from '@/components/PaginationControls/PaginationControls';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import fetchMediaPostsById from '@/services/wordpress/fetchMediaPostsById';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ImageModal from './ImageModal';

export default function GalleryGrid({
  categoryId,
  mediaPosts,
  page,
  totalPages,
}: {
  categoryId?: string;
  mediaPosts: MediaPost[];
  page: number;
  totalPages: number;
}) {
  const [activeFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<MediaPost | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    const value = (event.target as HTMLButtonElement).value;
    console.log({ value });
    console.log('event', event);

    const categoriesMap: { [key: string]: string } = {
      All: '686',
      practice: '24361',
      invisalign: '1582372',
    };

    // use the catergory map to use id instead of name
    const categoryId = categoriesMap[value];
    console.log({ categoryId });

    // Initialize URLSearchParams with the current query parameters
    const params = new URLSearchParams(searchParams);

    if (value !== '') {
      // Set the 'slug' parameter to the new value
      params.set('categories', categoryId);
    } else {
      // Remove the 'slug' parameter if the value is empty
      params.delete('categories');
    }

    // Construct the new URL string
    const newUrl = `${pathname}?categories=${categoryId}`;

    console.log('newUrl', newUrl);

    // Use router.replace with the URL string
    void router.replace(newUrl, { scroll: false });
  };

  // Fetch media items when the component mounts
  useEffect(() => {
    const loadMedia = async () => {
      try {
        setLoading(false);
      } catch (error) {
        console.error('Error fetching media files:', error);
        setLoading(false);
      }
    };

    void loadMedia();
  }, [mediaPosts]);

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

  

  return (
    <div className='w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16'>
      <div className='flex justify-center mb-8 md:mb-12'>
        <div className='flex flex-wrap gap-4 md:gap-6'>
          {['All', 'practice', 'invisalign'].map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'secondary' : 'outline'}
              onClick={(e) => handleChange(e)}
              value={filter}
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
      <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12'>
          {loading ? (
            Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className='relative overflow-hidden rounded-lg'>
                <Skeleton className='w-full h-64' />
              </div>
            ))
          ) : mediaPosts.length < 1 ? (
            <div className='flex justify-center'>
              <span>No results found</span>
            </div>
          ) : (
            mediaPosts?.map((image) => (
              <div
                key={image.id}
                className='relative overflow-hidden rounded-lg cursor-pointer group'
                onClick={() => {
                  void handleImageClick(image);
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
            ))
          )}
        </div>
        {mediaPosts.length >= 1 ? <PaginationControls currentPage={page} totalPages={totalPages} /> : null}
      </div>
      <ImageModal open={selectedImage != null} onClose={handleClose} selectedImage={selectedImage} />
    </div>
  );
}
