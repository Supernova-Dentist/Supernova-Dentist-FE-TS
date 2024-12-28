'use client';
import GetDirectionsForm from '@/components/GetDirectionsForm/GetDirectionsForm';
import { motion } from 'framer-motion';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
const GoogleMap = dynamic(async () => await import('@/components/blocks/GoogleMap/GoogleMap'), {
  ssr: false,
});
// export const metadata: Metadata = {
//   title: 'Supernova Dental | Find Us',
//   description: 'Locate Supernova Dental Clinic on the map. Find our address, contact information, and directions.',
// };
export default function FindUs() {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only play the animation once
  });
  return (
    <div id='location' className='min-height-screen flex flex-col items-center justify-start py-12 bg-gradient-to-b from-cream to-white'>
      <div className='w-full max-w-7xl px-6 sm:px-8 lg:px-12'>
        <section ref={ref} className='mb-12'>
          <motion.h1
            className='text-4xl sm:text-5xl font-bold my-8 text-center sm:text-left text-grey'
            initial={{ opacity: 0, y: 20 }} // Initial state for the animation
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate in
            transition={{ duration: 0.5 }} // Duration of the animation
          >
            Find Us!
          </motion.h1>
          <motion.p
            className='text-lg sm:text-xl mb-6 text-center sm:text-left text-lightGrey'
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }} // Delay for the paragraph
          >
            Locate Supernova Dental Clinic on the map. Find our address, contact information, and directions.
          </motion.p>
          <div className='my-6'>
            <GoogleMap />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <motion.div
              className='md:col-span-1 mt-12'
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }} // Delay for the first column
            >
              <h2 className='text-2xl sm:text-3xl font-semibold mb-4 text-center sm:text-left text-gray'>
                Our Address
              </h2>
              <ul className='text-center sm:text-left'>
                <li className='mb-3'>The Supernova Building</li>
                <li className='mb-3'>Marsh Lane, Huntworth,</li>
                <li className='mb-3'>Bridgwater</li>
                <li className='mb-3'>TA6 6LQ</li>
                <li className='mb-3 sm:max-w-80'>
                  <GetDirectionsForm />
                </li>
              </ul>
            </motion.div>
            <motion.div
              className='md:col-span-1 mt-12'
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }} // Delay for the second column
            >
              <h2 className='text-2xl sm:text-3xl font-semibold mb-4 text-center sm:text-left text-gray'>Contact Us</h2>
              <div className='flex flex-col items-center sm:items-start'>
                <p className='text-base sm:text-lg mb-2 text-center sm:text-left text-lightGrey'>Phone: 01278 228665</p>
                <p className='text-base sm:text-lg mb-2 text-center sm:text-left text-lightGrey'>
                  Email:{' '}
                  <a href='mailto:info@supernovadentalclinic.com' className='underline'>
                    enquiries@supernovadental.co.uk
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
