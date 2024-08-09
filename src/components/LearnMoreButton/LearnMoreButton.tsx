'use client';

export default function LearnMoreButton() {
  // Function to handle scroll
  const scrollToFaq = () => {
    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToFaq}
      className='inline-flex h-10 items-center justify-center rounded-md border border-input bg-grey text-cream px-6 text-sm font-medium shadow-sm transition-colors hover:bg-cream hover:text-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
    >
      Learn More
    </button>
  );
}
