'use client';

import Button from '@/components/Button/Button';
import { LinkPreview } from '@/components/ui/link-preview';

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
      <Button onClick={handleButtonClick} className='text-white'>
        Write a Review
      </Button>
    </LinkPreview>
  );
}
