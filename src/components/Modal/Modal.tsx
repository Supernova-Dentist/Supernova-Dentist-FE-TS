'use client';

import { useEffect, useId, useRef } from 'react';
import { IoClose } from 'react-icons/io5';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ isOpen, onClose, children }: ModalProps) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    dialogRef.current?.focus();

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackgroundClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className='fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-black/60 p-4'
      onClick={handleBackgroundClick}
    >
      <div
        ref={dialogRef}
        role='dialog'
        aria-modal='true'
        aria-labelledby={titleId}
        tabIndex={-1}
        className='relative max-h-[calc(100dvh-2rem)] w-full max-w-lg overflow-y-auto rounded-md bg-white p-6 shadow-lg outline-none sm:p-8'
      >
        <h2 id={titleId} className='sr-only'>Patient review</h2>
        <button className='absolute right-2 top-2 grid min-h-11 min-w-11 place-items-center rounded-sm text-gray-500 hover:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-light' onClick={onClose} aria-label='Close patient review'>
          <IoClose size={24} />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
