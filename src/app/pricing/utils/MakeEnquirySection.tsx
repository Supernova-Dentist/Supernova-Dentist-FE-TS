'use client';

import { motion } from 'framer-motion'; // Import motion from framer-motion
import Link from 'next/link';

const MakeEnquirySection = () => {
  return (
    <motion.div
      className='text-center mt-16 py-12 md:py-18 lg:py-24'
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className='text-2xl md:text-3xl text-gold font-semibold mb-6'>Have Questions or Need More Information?</h2>
      <p className='text-lg mb-12'>
        If you have any questions or need more details about our pricing plans, feel free to reach out to us. We&apos;re
        here to help!
      </p>
      <Link
        href={`/enquiry?ref=${encodeURIComponent('pricing')}`}
        className='bg-gold rounded-full px-6 py-3 text-md hover:bg-lightGold transition-all duration-150 text-gray-50'
      >
        Make an Enquiry
      </Link>
    </motion.div>
  );
};

export default MakeEnquirySection;
