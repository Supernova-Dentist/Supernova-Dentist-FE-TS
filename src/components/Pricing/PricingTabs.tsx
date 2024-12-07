'use client';

import { cn } from '@/lib/utils';
import Button from '../Button/Button';

type PricingTabsProps = {
  setMonthly: (value: boolean) => void;
  monthly: boolean;
};

export default function PricingTabs({ monthly, setMonthly }: PricingTabsProps) {
  return (
    <div className='flex items-center border border-gray-900 rouned-sm border-solid'>
      <Button
        onClick={() => setMonthly(true)}
        className={cn(
          'border-r-gray-900 border-solid border-r text-center px-4 py-2 w-28',
          monthly && 'bg-gray-900 text-gray-50'
        )}
      >
        {' '}
        One Time
      </Button>
      <Button
        onClick={() => setMonthly(false)}
        className={cn('px-4 py-2 text-center w-28', !monthly && 'bg-gray-900 text-gray-50')}
      >
        Instalments
      </Button>
    </div>
  );
}
