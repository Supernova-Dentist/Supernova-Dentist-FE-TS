'use client';

import { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const handleBackgroundClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4'
      onClick={handleBackgroundClick}
    >
      <div className='relative bg-white p-8 rounded-md shadow-lg max-w-lg w-full'>
        <button className='absolute top-2 right-2 text-gray-500 hover:text-gray-700' onClick={onClose}>
          <IoClose size={24} />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
