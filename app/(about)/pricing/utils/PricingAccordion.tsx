import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';

export const PricingAccordion = ({ pricingItems }: PricingProps) => {
  return (
    <Accordion type='single' collapsible className='border border-gray-200 rounded-lg shadow-md'>
      {pricingItems.map((pricingItem: PricingItem, index: number) => (
        <AccordionItem value={index.toString()} key={index} className='border-t border-gray-200'>
          <AccordionTrigger className='flex justify-between items-center py-3 px-4 bg-gray-100 hover:bg-gray-200 cursor-pointer'>
            <span className='text-lg font-medium'>{pricingItem.title}</span>
          </AccordionTrigger>
          <AccordionContent className='py-3 px-4 flex justify-between'>
            <div className='w-3/4'>{pricingItem.description}</div>
            <div className='w-1/4 text-right'>{pricingItem.price}</div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
