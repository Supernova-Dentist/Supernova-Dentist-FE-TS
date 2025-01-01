'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import { StarIcon, UserCircleIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { BiSolidCalendarEvent } from 'react-icons/bi';
import { FaTooth } from 'react-icons/fa6';
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
    threshold: 0.2, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  return (
    <section ref={ref} className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-crewhiteam to-cream'>
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
              <Button onClick={scrollToPromotionForm} className='mt-4 mb-4 w-fit mx-auto'>
                Stay updated!
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
            <FaTooth className='h-12 w-12 text-gold' />
            <p className='text-sm font-medium text-center'>Advanced Treatments</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial state for the animation
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate in
            transition={{ duration: 0.5 }} // Duration of the animation
            className='flex flex-col items-center max-w-[32%] w-full md:w-auto gap-2'
          >
            <BiSolidCalendarEvent className='h-12 w-12 text-gold' />
            <p className='text-sm font-medium text-center'>Online Booking</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial state for the animation
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate in
            transition={{ duration: 0.5 }} // Duration of the animation
            className='flex flex-col items-center max-w-[32%] w-full md:w-auto gap-2'
          >
            <UserCircleIcon className='h-12 w-12 text-gold' />
            <p className='text-sm font-medium text-center'>Patient Portal</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
