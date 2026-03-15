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
      className='sticky bottom-20 mb-8 flex justify-center z-10'
    >
      <div className='flex justify-center mx-auto'>
        <Link
          href={`/enquiry?ref=${encodeURIComponent(referringPage)}`}
          className='bg-gold text-white py-3 px-6 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl'
        >
          Enquiry
        </Link>
      </div>
    </motion.div>
  );
};

export default EnquiryButton;
