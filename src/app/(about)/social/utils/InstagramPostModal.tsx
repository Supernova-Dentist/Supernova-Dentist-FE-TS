import Image from 'next/image';
import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

export default function InstagramPostModal({ post, onClose }: { post: InstagramPost; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current !== null &&
        modalRef.current !== undefined &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  // Use React portal for proper DOM placement
  return ReactDOM.createPortal(
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'>
      <div
        ref={modalRef}
        className='relative max-w-2xl w-full max-h-[90vh] mx-4 md:mx-8 overflow-y-auto bg-white rounded-lg shadow-xl'
      >
        {/* Close Button */}
        <button
          className='absolute top-2 right-2 z-50 w-8 h-8 flex items-center justify-center bg-gray-600 text-white hover:bg-gray-700 rounded-full'
          onClick={onClose}
        >
          X
        </button>

        {/* Image Section */}
        <div className='relative w-full h-[50vh] md:h-[60vh]'>
          <Image
            src={post.media_url}
            alt='Instagram Post'
            className='w-full h-full object-cover rounded-t-lg'
            layout='fill'
            objectFit='cover'
          />
        </div>

        {/* Caption Section */}
        <div className='p-4 md:p-6 bg-white'>
          <div className='overflow-y-auto max-h-32'>
            <p className='text-sm text-gray-800'>{post.caption}</p>
          </div>

          {/* Instagram Link */}
          <div className='mt-4'>
            <a
              href={post.permalink}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 underline hover:text-blue-800'
            >
              View on Instagram
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body // Portal rendering to the top of the DOM tree
  );
}
