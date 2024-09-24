import React from 'react';
import { pricing } from '@/lib/constants';
import PricingCard from './PricingCard';

export default function PricingCards() {
  return (
    <div className='flex mt-16 gap-8 max-w-[1100px] w-full'>
      {pricing.map((plan, index) => (
        <React.Fragment key={plan.id}>
          <PricingCard plan={plan.plan} price={plan.price} features={plan.features} isMiddle={index === 1} />
        </React.Fragment>
      ))}
    </div>
  );
}
