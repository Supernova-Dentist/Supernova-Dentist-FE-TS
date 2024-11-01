'use client';

import { motion } from 'framer-motion';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import Button from '../Button/Button';

const features = [
  {
    id: 1,
    was: 99,
    now: 49.5,
    text: 'New patient exam',
  },
  {
    id: 2,
    was: 85,
    now: 42.5,
    text: 'First hygiene appointment',
  },
  {
    id: 3,
    was: 150,
    now: 'Included with hygiene appointment',
    text: 'Air polish',
  },
];

export default function MainPricingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Initial state for animation
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      transition={{ duration: 0.5, ease: 'easeInOut' }} // Transition settings
      className='p-10 bg-gray-50 rounded-lg shadow-xl border border-solid border-black/10 relative overflow-hidden w-full sm:w-[400px] flex flex-col min-h-[523px]'
    >
      <img src='/favicon.ico' alt='Supernova Dental Logo' className='absolute top-2 right-2 h-14 w-auto' />
      <div className='rounded-sm px-4 py-1 w-fit mb-4 bg-gray-200'>
        <span>Dental wellness</span>
      </div>
      <div className='w-full h-[1px] my-8 bg-gray-200'></div>

      <ul className='flex flex-col gap-3'>
        {features.map(({ id, was, now, text }) => (
          <li key={id} className='flex items-start gap-2'>
            <IoCheckmarkCircle className='h-5 w-5 mt-1 flex-shrink-0 text-gray-900' />
            <div>
              <span className='text-sm text-gray-500'>{text}: </span>
              <div>
                <span className='text-gray-500 line-through text-lg'>£{was.toFixed(2)}</span>
                <span className='mx-2 text-lg'>-</span>
                <span className='font-semibold text-lg'>{typeof now === 'string' ? now : `£${now.toFixed(2)}`}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className='mt-auto'>
        {/* Added a div to contain the button */}
        <Button
          onClick={scrollToPromotionForm}
          className='w-full text-gray-50 rounded-sm mt-6 px-4 py-2 bg-gray-900'
          text='Get started'
        />
      </div>
    </motion.div>
  );
}
