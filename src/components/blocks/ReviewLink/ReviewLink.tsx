'use client';

import { LinkPreview } from '../../ui/link-preview';

export default function ReviewLink() {
  const handleButtonClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    window.open('https://g.page/r/Cd1EdVyvZxVIEAI/review', '_blank');
  };

  return (
    <LinkPreview
      isStatic
      imageSrc='/assets/images/review.png'
      url='https://g.page/r/Cd1EdVyvZxVIEAI/review'
      className='font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500'
    >
      <button
        onClick={handleButtonClick}
        className='bg-primary text-white px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-700'
      >
        Write a Review
      </button>
    </LinkPreview>
  );
}
