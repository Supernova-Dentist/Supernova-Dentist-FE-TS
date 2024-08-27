'use client';

import Button from '../Button/Button';

export default function LearnMoreButton() {
  // Function to handle scroll
  const scrollToFaq = () => {
    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Button
      onClick={scrollToFaq}
      className='inline-flex h-10 items-center justify-center rounded-md border border-input bg-grey text-cream px-6 text-sm font-medium shadow-sm transition-colors hover:bg-lightGrey focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
    >
      Learn More
    </Button>
  );
}
