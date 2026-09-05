
import { ScrollToPromotionFormLegacyButton } from '@/components/ScrollToPromotionFormButton/ScrollToPromotionFormLegacyButton';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { IoCheckmarkCircle } from 'react-icons/io5';

type PricingCardProps = {
  plan: string;
  price: { number: number; text?: string };
  offerPrice: number;
  features: string[];
  monthly: boolean;
  isMiddle?: boolean;
  postText?: string;
};

export default function ReferAFriendCard({
  plan,
  price,
  offerPrice,
  features,
  isMiddle,
  monthly,
  postText,
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
      <img src='/favicon.ico' alt='Supernova Dental Logo' className='mx-auto h-20 w-auto' />{' '}
      {/* Slightly larger logo */}
      <div className='flex flex-col flex-grow'>
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
        <span className='text-gray-500 text-sm'>{postText}</span>
        <div className={cn('bg-gray-200 w-full h-[1px] my-10', isMiddle ? 'bg-gray-700' : 'bg-gray-200')}></div>{' '}
        {/* Increased spacing */}
        <ul className='flex flex-col gap-4'>
          {features.map((feature) => (
            <li className={cn('flex gap-2 items-start', isMiddle ? 'text-gray-50' : null)} key={feature}>
              <div className='min-w-[24px] h-[24px] flex items-center justify-center'>
                <IoCheckmarkCircle color={isMiddle ? 'var(--gold)' : ''} size={24} />
              </div>
              <span className='leading-snug'>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='mt-auto'>
        {/* Added a div to contain the button */}
        <ScrollToPromotionFormLegacyButton
          className={cn('w-full text-gray-50 rounded-sm mt-8 px-6 py-3', isMiddle ? 'bg-gold' : 'bg-gray-900')}
          text='Refer A Friend'
        />
      </div>
    </motion.div>
  );
}
