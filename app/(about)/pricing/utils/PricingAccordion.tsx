// components/utils/PricingAccordion.tsx

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';

export const PricingAccordion: React.FC<PricingAccordionProps> = ({ pricingItems }) => {
  return (
    <Accordion type='single' collapsible className='border border-gray-200 rounded-lg shadow-md'>
      {pricingItems.map((pricingItem, index) => (
        <AccordionItem value={index.toString()} key={index} className='border-t border-gray-200'>
          <AccordionTrigger className='flex justify-between items-center py-3 px-4 bg-gray-100 hover:bg-gray-200 cursor-pointer'>
            <span className='text-lg font-medium'>{pricingItem.title}</span>
          </AccordionTrigger>
          <AccordionContent className='py-3 px-4'>
            {pricingItem.products.map((product, idx) => (
              <div key={idx} className='flex justify-between'>
                <span>{product.description}</span>
                <span>${product.price}</span>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
