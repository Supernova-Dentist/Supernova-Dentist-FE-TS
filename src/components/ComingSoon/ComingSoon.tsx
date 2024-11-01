'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function ComingSoonSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Could add the same form here or just a button to go to the sign up form above?
    console.log('Submitted email:', email);
    setEmail('');
  };

  const { ref, inView } = useInView({
    threshold: 0.7, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  return (
    <section ref={ref} className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-cream to-white text-gray-900'>
      <div className='px-4 md:px-6 w-full'>
        <div className='flex flex-col items-center space-y-6 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial state for the animation
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate in
            transition={{ duration: 0.5 }} // Duration of the animation
          >
            <h2 className='lg:text-5xl md:text-4xl font-bold tracking-tighter text-3xl mb-4 '>Coming Soon</h2>
            <p className='max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              We&apos;re working on something special! Our full website is under construction, featuring comprehensive
              dental care information and online booking.
            </p>
          </motion.div>

          <div className='w-full max-w-sm space-y-4'>
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Initial state for the animation
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate in
              transition={{ duration: 0.5 }} // Duration of the animation
            >
              <Button onClick={scrollToPromotionForm} className='mt-4 mb-2 w-fit mx-auto'>
                Come see us!
              </Button>
              <p className='text-sm text-gray-500 '>
                Stay updated on our progress and be the first to know when we launch!
              </p>
            </motion.div>
          </div>
        </div>

        <div className='mt-12 flex justify-evenly text-gray-700 md:justify-center gap-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial state for the animation
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate in
            transition={{ duration: 0.5 }} // Duration of the animation
            className='flex flex-col items-center max-w-[32%] w-full md:w-auto gap-2'
          >
            <ToothIcon className='h-12 w-12 text-gold' />
            <p className='text-sm font-medium text-center'>Advanced Treatments</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial state for the animation
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate in
            transition={{ duration: 0.5 }} // Duration of the animation
            className='flex flex-col items-center max-w-[32%] w-full md:w-auto gap-2'
          >
            <CalendarIcon className='h-12 w-12 text-gold' />
            <p className='text-sm font-medium text-center'>Online Booking</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial state for the animation
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate in
            transition={{ duration: 0.5 }} // Duration of the animation
            className='flex flex-col items-center max-w-[32%] w-full md:w-auto gap-2'
          >
            <UserIcon className='h-12 w-12 text-gold' />
            <p className='text-sm font-medium text-center'>Patient Portal</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ToothIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M12 2.5c-1.7-.3-3.4.2-5 .8C5.4 4 4.1 5.1 3.2 6.7c-1 1.7-1 3.6-.7 5.4c.4 1.8 1 3.7 2 5.2C5.7 19 7.3 20.7 9 22c.8.5 1.8.7 2.7.8a4.5 4.5 0 0 0 2.6-.8c1.7-1.3 3.3-3 4.5-4.7a15.2 15.2 0 0 0 2-5.2c.3-1.8.3-3.7-.7-5.4c-.9-1.6-2.2-2.7-3.8-3.4a12.5 12.5 0 0 0-4.3-.8' />
    </svg>
  );
}

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect width='18' height='18' x='3' y='4' rx='2' ry='2' />
      <line x1='16' x2='16' y1='2' y2='6' />
      <line x1='8' x2='8' y1='2' y2='6' />
      <line x1='3' x2='21' y1='10' y2='10' />
    </svg>
  );
}

function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
      <circle cx='12' cy='7' r='4' />
    </svg>
  );
}
