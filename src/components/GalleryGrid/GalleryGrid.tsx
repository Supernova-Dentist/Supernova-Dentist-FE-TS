'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PaginationControls from '@/components/PaginationControls/PaginationControls';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTitle } from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import fetchMediaPostsById from '@/services/wordpress/fetchMediaPostsById';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FaShareAlt } from 'react-icons/fa';

const categoriesMap = {
  All: '686',
  Practice: '24361',
  Invisalign: '1582372',
};

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
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<MediaPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageWidth, setImageWidth] = useState<number | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleFilterChange = (filter: keyof typeof categoriesMap) => {
    setActiveFilter(filter);

    const categoryId = categoriesMap[filter];
    const params = new URLSearchParams(searchParams.toString());

    if (filter !== undefined) {
      params.set('categories', categoryId);
    } else {
      params.delete('categories');
    }

    const newUrl = `${pathname}?categories=${categoryId}`;
    void router.replace(newUrl, { scroll: false });
  };

  useEffect(() => {
    const loadMedia = async () => {
      try {
        setLoading(false);
        console.log('mediaPosts', mediaPosts);
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
      const img = new Image();
      if (data.jetpack_featured_media_url) {
        img.src = data.jetpack_featured_media_url;
      }
      img.onload = () => {
        setImageWidth(img.naturalWidth);
      };
    } catch (error) {
      console.error('Error fetching media details:', error);
    }
  };

  const handleClose = () => {
    setSelectedImage(null);
    setImageWidth(null);
  };

  function ImageContent({ content }: { content: string }) {
    return <div className='post-content' dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return (
    <div className='w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16'>
      <div className='flex justify-center mb-8 md:mb-12'>
        <div className='flex flex-wrap gap-2 md:gap-4'>
          {Object.keys(categoriesMap).map((filter) => (
            <button
              key={filter}
              value={filter}
              onClick={() => handleFilterChange(filter as keyof typeof categoriesMap)}
              className={`${
                activeFilter === filter ? 'text-white' : ' bg-cream hover:text-slate-200 hover:bg-lightGrey'
              } text-sm transition-colors px-4 py-2 rounded-md relative`}
            >
              <span className='relative z-10'>{filter}</span>
              {activeFilter === filter && (
                <motion.span
                  layoutId='pill-tab'
                  transition={{ type: 'spring', duration: 0.5 }}
                  className='absolute inset-0 z-0 bg-gold rounded-md'
                />
              )}
            </button>
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
              <span>No images found</span>
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
      {selectedImage && (
        <Dialog open onOpenChange={handleClose}>
          <DialogClose>
            <FaShareAlt size={24} />
            <span className='sr-only'>Close</span>
          </DialogClose>
          <DialogContent
            className='p-0 max-w-[90vw] max-h-[90vh] overflow-auto'
            style={{ width: imageWidth ? `${imageWidth}px` : 'auto' }}
          >
            <div className='flex flex-col items-center'>
              <div className='w-full max-h-[60vh] flex justify-center items-center overflow-hidden'>
                <img
                  src={selectedImage.jetpack_featured_media_url}
                  alt={selectedImage.alt_text}
                  className='w-auto h-full object-contain'
                />
              </div>
              <div className='p-4 bg-background w-full'>
                <DialogTitle className='text-center text-2xl font-bold mb-4'>
                  {selectedImage.title.rendered}
                </DialogTitle>
                <ImageContent content={selectedImage.content?.rendered} />
              </div>
            </div>
            <DialogFooter className='sm:justify-start'>
              <div className='p-4 mx-auto'>
                <button
                  type='button'
                  className='flex items-center space-x-2 bg-slate-600 text-white px-4 py-2 rounded-md'
                >
                  <FaShareAlt size={16} />
                  <span>Share</span>
                </button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
