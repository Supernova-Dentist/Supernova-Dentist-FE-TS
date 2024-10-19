import React from 'react';
import { pricing } from '@/lib/constants';
import PricingCard from './PricingCard';

export default function PricingCards({ monthly }: { monthly: boolean }) {
  return (
    <div className='flex flex-wrap mt-16 gap-8 md:w-auto justify-center px-4 sm:px-20 md:px-6 w-full'>
      {pricing.map((plan, index) => (
        <React.Fragment key={plan.id}>
          <PricingCard
            plan={plan.plan}
            price={plan.price}
            features={plan.features}
            isMiddle={index === 1}
            monthly={monthly}
            offerPrice={plan.offerPrice}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
