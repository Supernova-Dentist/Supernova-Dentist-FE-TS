import React from 'react';
import { pricing } from '@/lib/constants';
import PricingCard from './PricingCard';
import MainPricingCard from '../MainPricingCard/MainPricingCard';

export default function PricingCards({ monthly }: { monthly: boolean }) {
  return (
    <div className='flex justify-center w-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-16 gap-8 px-4 sm:px-20 md:px-6 max-w-7xl place-items-center'>
        <div className='col-span-full w-full flex justify-center'>
          <MainPricingCard />
        </div>
        {pricing.map((plan, index) => (
          <PricingCard
            key={plan.id}
            plan={plan.plan}
            price={plan.price}
            features={plan.features}
            isMiddle={index === 1}
            monthly={monthly}
            offerPrice={plan.offerPrice}
          />
        ))}
      </div>
    </div>
  );
}
