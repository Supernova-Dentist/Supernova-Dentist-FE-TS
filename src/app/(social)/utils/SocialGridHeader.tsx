'use client';

import { InstagramLogoIcon } from '@radix-ui/react-icons';
import { Facebook } from 'react-feather';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

// Define the functional component with proper syntax
interface SocialGridHeaderProps {
  username: string;
  instaSrc: string;
}

const SocialGridHeader: React.FC<SocialGridHeaderProps> = ({ username, instaSrc }) => {
  const { ref, inView } = useInView({
    threshold: 0.025, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className='flex flex-col sm:flex-row sm:items-center justify-between'
    >
      <div>
        <h1 className='text-3xl font-bold break-words text-grey'>{username}</h1>
      </div>
      <div className='flex gap-4 justify-center mt-4'>
        <a
          href='https://www.facebook.com/profile.php?id=61567279201971'
          target='_blank'
          rel='noreferrer'
          className='inline-flex w-fit items-center gap-2 bg-grey rounded-md px-4 py-2 hover:bg-primary/90 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring mt-2 sm:mt-0'
        >
          <Facebook className='w-5 h-5 text-cream' />
          <span className='text-white'>Like</span>
        </a>
        <a
          href={instaSrc} // Make sure to use the correct prop here
          target='_blank'
          rel='noreferrer'
          className='inline-flex w-fit items-center gap-2 bg-grey rounded-md px-4 py-2 hover:bg-primary/90 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring mt-2 sm:mt-0'
        >
          <InstagramLogoIcon className='w-5 h-5 text-cream' />
          <span className='text-white'>Follow</span>
        </a>
      </div>
    </motion.div>
  );
};

export default SocialGridHeader;
