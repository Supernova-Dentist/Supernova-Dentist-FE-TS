'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

interface Props {
  referringPage: string;
}

const EnquiryButton = ({ referringPage }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className='service-floating-enquiry sticky bottom-20 z-10 mb-8 flex justify-center md:bottom-5'
    >
      <div className='flex justify-center mx-auto'>
        <Link
          href={`/enquiry?ref=${encodeURIComponent(referringPage)}`}
          className='inline-flex min-h-11 items-center rounded-full border border-champagne bg-champagne px-7 py-3 font-semibold text-obsidian shadow-[0_12px_30px_rgba(11,18,24,0.18)] transition-[background-color,box-shadow,transform] duration-200 hover:bg-lightGold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 active:scale-[0.98]'
        >
          Enquiry
        </Link>
      </div>
    </motion.div>
  );
};

export default EnquiryButton;
