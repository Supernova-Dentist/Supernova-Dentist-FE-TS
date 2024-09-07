import React, { useRef } from 'react';
import Button from '@/components/Button/Button';
import { FaShareAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5'; // Importing close icon

const ImageModal = ({ open, onClose, selectedImage }: { open: boolean; onClose: () => void; selectedImage: any }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  if (!open || !selectedImage) return null;

  function ImageContent({ content }: { content: string }) {
    return <div className='post-content' dangerouslySetInnerHTML={{ __html: content }} />;
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      className='fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50'
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className='relative bg-white z-50 p-8 rounded-lg shadow-lg max-w-[80vw] max-h-[80vh] overflow-auto'
      >
        <button
          onClick={onClose}
          className='absolute top-1 right-1 p-2 bg-gray-200 rounded-full text-black hover:bg-gray-300'
          aria-label='Close'
        >
          <IoClose size={24} />
        </button>
        <div className='flex justify-center mt-1 mb-4'>
          <img
            src={selectedImage.jetpack_featured_media_url}
            alt={selectedImage.alt_text}
            width={800}
            height={600}
            className='object-contain'
          />
        </div>
        <div className='p-4 bg-background'>
          <h2 className='text-center text-2xl font-bold mb-4'>{selectedImage.title.rendered}</h2>
          <ImageContent content={selectedImage.content?.rendered} />
        </div>
        <div className='flex justify-end p-4'>
          <Button type='button' variant='secondary' className='flex items-center space-x-2'>
            <FaShareAlt size={16} /> {/* Share icon */}
            {/* <span>Share</span> */}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
