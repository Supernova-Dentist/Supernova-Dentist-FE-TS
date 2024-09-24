import { IoCheckmarkCircle } from 'react-icons/io5';
import CountUp from 'react-countup';
import { cn } from '@/lib/utils';
import Button from '../Button/Button';
import PricingSquiggle from './PricingSquiggle';

type PricingCardProps = {
  plan: string;
  price: number;
  offerPrice: number;
  features: string[];
  monthly: boolean;
  isMiddle?: boolean;
};

export default function PricingCard({ plan, price, offerPrice, features, isMiddle, monthly }: PricingCardProps) {
  return (
    <div
      className={cn(
        'p-10 rounded-lg shadow-xl flex-1 border border-solid border-black/10 relative overflow-hidden min-w-[275px]',
        isMiddle ? 'bg-gray-900' : null
      )}
    >
      {isMiddle && (
        <div className='absolute top-[-59px] right-[-44px] rotate-45'>
          <PricingSquiggle />
        </div>
      )}
      <div className='flex flex-col'>
        <div className={cn('rounded-sm px-4 py-1 w-fit mb-4', isMiddle ? 'bg-gray-700 text-gray-50' : 'bg-gray-200')}>
          <span>{plan}</span>
        </div>
        <span className={cn('text-5xl mb-1 font-semibold', isMiddle ? 'text-gray-50' : null)}>
          £
          <CountUp
            className=''
            start={price}
            end={monthly ? price : offerPrice}
            duration={0.4}
            useEasing={false}
            preserveValue
          />
        </span>
        <span className='text-gray-500 text-sm'>Per month</span>
        <div className={cn('bg-gray-200 w-full h-[1px] my-8', isMiddle ? 'bg-gray-700' : 'bg-gray-200')}></div>
      </div>
      <ul className='flex flex-col gap-3'>
        {features.map((feature) => (
          <li className={cn('flex gap-1 items-center', isMiddle ? 'text-gray-50' : null)} key={feature}>
            <IoCheckmarkCircle color={isMiddle ? 'var(--lightGold)' : ''} size={20} />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        className={cn(' w-full text-gray-50 rounded-sm mt-6 px-4 py-2', isMiddle ? 'bg-lightGold' : 'bg-gray-900')}
        text='Get started'
      />
    </div>
  );
}
