import React from 'react';
import { pricing } from '@/lib/constants';
import PricingCard from './PricingCard';

export default function PricingCards({ monthly }: { monthly: boolean }) {
  return (
    <div className='flex lg:flex-row flex-col mt-16 gap-8 max-w-[1100px] lg:w-full md:w-auto justify-center'>
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
