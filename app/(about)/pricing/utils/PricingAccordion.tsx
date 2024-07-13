// components/utils/PricingAccordion.tsx

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';

export const PricingAccordion: React.FC<PricingAccordionProps> = ({ pricingItems }) => {
  return (
    <Accordion type='single' collapsible className='border border-gray-300 rounded-xl shadow-lg max-w-3xl mx-auto'>
      {pricingItems.map((pricingItem, index) => (
        <AccordionItem value={index.toString()} key={index} className='border-t border-gray-300'>
          <AccordionTrigger className='flex justify-between items-center py-4 px-6 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-t-xl'>
            <span className='text-xl font-semibold'>{pricingItem.title}</span>
          </AccordionTrigger>
          <AccordionContent className='py-4 px-6 bg-white'>
            {pricingItem.products.map((product, idx) => (
              <div key={idx} className='flex justify-between py-2'>
                <span className='text-lg'>{product.description}</span>
                <span className='text-lg font-semibold'>${product.price}</span>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default PricingAccordion;
