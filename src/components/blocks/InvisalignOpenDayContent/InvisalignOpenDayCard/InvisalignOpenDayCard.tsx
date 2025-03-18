import { cn } from '@/lib/utils';
import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { IoCheckmarkCircle } from 'react-icons/io5';
import Button from '../../../Button/Button';

type PricingCardProps = {
  plan: string;
  price: { number: number; text?: string };
  offerPrice: number;
  features: string[];
  monthly: boolean;
  isMiddle?: boolean;
};

export default function InvisalignOpenDayCard({
  plan,
  price,
  offerPrice,
  features,
  isMiddle,
  monthly,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Initial state for animation
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      transition={{ duration: 0.5, ease: 'easeInOut' }} // Transition settings
      className={cn(
        'p-12 rounded-lg shadow-xl border border-solid border-black/10 relative overflow-hidden w-full sm:w-[500px] flex flex-col', // Increased width and padding
        isMiddle ? 'bg-gray-900' : 'bg-gray-50',
        'min-h-[600px]' // Increased height for more room
      )}
    >
      <img src='/favicon.ico' alt='Supernova Dental Logo' className='absolute top-4 right-4 h-16 w-auto' />{' '}
      {/* Slightly larger logo */}
      <div className='flex flex-col flex-grow'>
        <div className={cn('rounded-sm px-6 py-2 w-fit mb-6', isMiddle ? 'bg-gray-700 text-gray-50' : 'bg-gray-200')}>
          <span className='text-lg'>{plan}</span> {/* Slightly larger text */}
        </div>
        <span className='text-gold'>{price?.text}</span>
        <span className={cn('text-6xl mb-2 font-semibold', isMiddle ? 'text-gray-50' : null)}>
          {' '}
          {/* Increased font size */}
          £
          <CountUp
            className=''
            start={price.number}
            end={monthly ? price.number : offerPrice}
            duration={0.4}
            useEasing={false}
            preserveValue
          />
        </span>
        <span className='text-gray-500 text-sm'>SAVING</span>
        <div className={cn('bg-gray-200 w-full h-[1px] my-10', isMiddle ? 'bg-gray-700' : 'bg-gray-200')}></div>{' '}
        {/* Increased spacing */}
        <ul className='flex flex-col gap-4'>
          {' '}
          {/* Increased gap */}
          {features.map((feature) => (
            <li className={cn('flex gap-2 items-center', isMiddle ? 'text-gray-50' : null)} key={feature}>
              {' '}
              {/* Increased gap */}
              <IoCheckmarkCircle color={isMiddle ? 'var(--gold)' : ''} size={24} /> {/* Larger icon */}
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className='mt-auto'>
        {/* Added a div to contain the button */}
        <Button
          onClick={scrollToPromotionForm}
          className={cn('w-full text-gray-50 rounded-sm mt-8 px-6 py-3', isMiddle ? 'bg-gold' : 'bg-gray-900')}
          text='Claim offer'
        />
      </div>
    </motion.div>
  );
}
