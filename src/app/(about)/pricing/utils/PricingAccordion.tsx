import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const PricingAccordion: React.FC<PricingAccordionProps> = ({ pricingItems }) => {
  return (
    <Accordion type='single' collapsible className='space-y-6 max-w-3xl mx-auto'>
      {pricingItems.map((pricingItem, index) => (
        <AccordionItem value={index.toString()} key={index} className='overflow-hidden rounded-xl shadow-lg w-auto'>
          <AccordionTrigger className='flex justify-between items-center py-6 px-8 bg-gray-200 hover:bg-gray-50 cursor-pointer rounded-t-xl text-2xl font-semibold'>
            <span>{pricingItem.title}</span>
          </AccordionTrigger>
          <AccordionContent className='py-6 px-8 bg-white'>
            {pricingItem.products.map((product, idx) => (
              <div key={idx} className='flex justify-between py-3'>
                <span className={`max-w-[75%] ${product.isHeader === true ? 'text-xl font-bold py-2' : 'text-lg'} `}>
                  {product.description}
                </span>
                <div className='flex flex-col items-end'>
                  {Boolean(product.priceDescriptionBefore) && (
                    <span className='text-lg'>{product.priceDescriptionBefore}</span>
                  )}
                  {Boolean(product.price) && <span className='text-lg font-semibold'>£{product.price}</span>}
                  {Boolean(product.priceDescription) && <span className='text-lg'>{product.priceDescription}</span>}
                </div>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default PricingAccordion;
