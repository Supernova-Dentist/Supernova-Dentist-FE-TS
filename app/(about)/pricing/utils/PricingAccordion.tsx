import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';

export const PricingAccordion: React.FC<PricingAccordionProps> = ({ pricingItems }) => {
  return (
    <Accordion type='single' collapsible className='space-y-6 max-w-3xl mx-auto'>
      {pricingItems.map((pricingItem, index) => (
        <AccordionItem value={index.toString()} key={index} className='overflow-hidden rounded-xl shadow-lg'>
          <AccordionTrigger className='flex justify-between items-center py-6 px-8 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-t-xl text-2xl font-semibold'>
            <span>{pricingItem.title}</span>
          </AccordionTrigger>
          <AccordionContent className='py-6 px-8 bg-white'>
            {pricingItem.products.map((product, idx) => (
              <div key={idx} className='flex justify-between py-3'>
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
