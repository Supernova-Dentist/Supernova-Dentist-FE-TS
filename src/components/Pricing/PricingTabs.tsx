'use client';

import { useState } from 'react';
import Button from '../Button/Button';
import { cn } from '@/lib/utils';

export default function PricingTabs() {
  const [monthly, setMonthly] = useState(true);

  return (
    <div className='flex items-center border border-gray-900 rouned-sm border-solid'>
      <Button
        onClick={() => setMonthly(true)}
        className={cn(
          'border-r-gray-900 border-solid border-r text-center px-4 py-2 w-28',
          monthly && 'bg-gray-900 text-gray-50'
        )}
      >
        Monthly
      </Button>
      <Button
        onClick={() => setMonthly(false)}
        className={cn('px-4 py-2 text-center w-28', !monthly && 'bg-gray-900 text-gray-50')}
      >
        Yearly
      </Button>
    </div>
  );
}
