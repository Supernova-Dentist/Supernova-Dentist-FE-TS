'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const PricingAccordion: React.FC<PricingAccordionProps> = ({ pricingItems }) => {
  return (
    <motion.div
      className='max-w-6xl mx-auto'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Accordion type='single' collapsible className='space-y-6 max-w-3xl mx-auto'>
        {pricingItems.map((pricingItem, index) => (
          <AccordionItem value={index.toString()} key={index} className='overflow-hidden rounded-xl shadow-lg w-auto'>
            <AccordionTrigger className='flex justify-between items-center py-6 px-8 bg-cream hover:bg-gray-50 cursor-pointer rounded-t-xl text-lg md:text-xl lg:text-2xl font-semibold'>
              <span>{pricingItem.title}</span>
            </AccordionTrigger>
            <AccordionContent className='py-6 px-8 bg-white'>
              {pricingItem.products.map((product, idx) => (
                <div key={idx} className='flex justify-between py-3'>
                  <span
                    className={`max-w-[65%] ${
                      product.isHeader === true ? 'text-md md:text-xl font-bold py-2' : 'text-md md:text-lg'
                    } `}
                  >
                    {product.description}
                  </span>
                  <div className='flex flex-col items-center w-[27.5%]'>
                    {Boolean(product.priceDescriptionBefore) && (
                      <span className='text-md md:text-lg'>{product.priceDescriptionBefore}</span>
                    )}
                    {Boolean(product.price) && (
                      <span className='text-md md:text-lg font-semibold'>£{product.price}</span>
                    )}
                    {Boolean(product.priceDescription) && (
                      <span className='text-md md:text-lg'>{product.priceDescription}</span>
                    )}
                  </div>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
};

export default PricingAccordion;
