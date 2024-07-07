import { ChatBubbleIcon, HeartIcon } from '@radix-ui/react-icons';
import { useEffect, useRef } from 'react';

// Mock image URL for testing
const mockImageUrl = 'https://via.placeholder.com/600'; // Replace with an actual image URL

export default function InstagramPostModal({ post, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div ref={modalRef} className='rounded-lg overflow-hidden shadow-xl max-w-3xl w-full aspect-w-1 aspect-h-1'>
        <div className='relative w-full h-full'>
          <button className='absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-50' onClick={onClose}>
            X
          </button>
          {/* Mock image */}
          <img src={mockImageUrl} alt='Instagram Post' className='w-full h-full object-cover rounded-t-lg' />
        </div>
        <div className='p-6 bg-lightGrey'>
          <div className='h-20 overflow-y-auto'>
            <p className='text-sm mb-2 text-cream'>{post.caption}</p>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <HeartIcon className='w-5 h-5 text-red-500' />
              <span className='text-sm font-medium text-cream'>{post.likes}</span>
            </div>
            <div className='flex items-center gap-2'>
              <ChatBubbleIcon className='w-5 h-5 text-cream' />
              <span className='text-sm font-medium text-cream'>{post.comments}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
