'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const serviceLinksByTitle: Record<string, Array<{ label: string; href: string; enquiryRef: string }>> = {
  Examinations: [
    {
      label: 'New patient examinations',
      href: '/general-dentistry/new-patient-examination',
      enquiryRef: 'general-dentistry/new-patient-examination',
    },
  ],
  Emergency: [
    {
      label: 'Emergency dental care',
      href: '/general-dentistry/emergency-dentistry',
      enquiryRef: 'general-dentistry/emergency-dentistry',
    },
  ],
  'Hygiene Treatments': [
    {
      label: 'Dental hygiene',
      href: '/general-dentistry/dental-hygiene',
      enquiryRef: 'general-dentistry/dental-hygiene',
    },
  ],
  'Practice Plans': [
    {
      label: 'Dental membership plans',
      href: '/general-dentistry/dental-membership-plans',
      enquiryRef: 'general-dentistry/dental-membership-plans',
    },
  ],
  'Restorative Dentistry': [
    {
      label: 'White composite fillings',
      href: '/general-dentistry/white-composite-fillings',
      enquiryRef: 'general-dentistry/white-composite-fillings',
    },
  ],
  'Dental Aesthetics/Smile Makeovers': [
    {
      label: 'Composite bonding',
      href: '/cosmetic-dentistry/composite-bonding',
      enquiryRef: 'cosmetic-dentistry/composite-bonding',
    },
    {
      label: 'Teeth whitening',
      href: '/cosmetic-dentistry/teeth-whitening',
      enquiryRef: 'cosmetic-dentistry/teeth-whitening',
    },
  ],
  'Root Canal Treatment': [
    {
      label: 'Root canal treatment',
      href: '/general-dentistry/root-canal-treatment',
      enquiryRef: 'general-dentistry/root-canal-treatment',
    },
  ],
  Dentures: [
    {
      label: 'Dentures',
      href: '/general-dentistry/dentures',
      enquiryRef: 'general-dentistry/dentures',
    },
  ],
  'Mouth Guards': [
    {
      label: 'Sports mouthguards',
      href: '/general-dentistry/sports-mouthguards',
      enquiryRef: 'general-dentistry/sports-mouthguards',
    },
  ],
  Invisalign: [
    {
      label: 'Invisalign',
      href: '/cosmetic-dentistry/invisalign',
      enquiryRef: 'cosmetic-dentistry/invisalign',
    },
  ],
  'Implant Dentistry': [
    {
      label: 'Dental implants',
      href: '/cosmetic-dentistry/dental-implants',
      enquiryRef: 'cosmetic-dentistry/dental-implants',
    },
  ],
};

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
        {pricingItems.map((pricingItem, index) => {
          const serviceLinks = serviceLinksByTitle[pricingItem.title] ?? [];

          return (
            <AccordionItem value={index.toString()} key={index} className='overflow-hidden rounded-xl shadow-lg w-auto'>
            <AccordionTrigger className='flex justify-between items-center py-6 px-8 bg-cream hover:bg-gray-50 cursor-pointer rounded-t-xl text-lg md:text-xl lg:text-2xl font-semibold'>
              <span>{pricingItem.title}</span>
            </AccordionTrigger>
            <AccordionContent className='py-6 px-8 bg-white'>
              {serviceLinks.length > 0 && (
                <div className='mb-5 flex flex-wrap gap-x-6 gap-y-2 border-b border-stone pb-5'>
                  {serviceLinks.map((serviceLink) => (
                    <React.Fragment key={serviceLink.href}>
                      <Link
                        href={serviceLink.href}
                        className='inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-obsidian underline decoration-champagne/60 underline-offset-4 transition-colors hover:text-bronze-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2'
                      >
                        View {serviceLink.label}
                        <FiArrowRight aria-hidden='true' className='size-4' />
                      </Link>
                      <Link
                        href={`/enquiry?ref=${encodeURIComponent(serviceLink.enquiryRef)}`}
                        className='inline-flex min-h-11 items-center text-sm font-semibold text-bronze-ink underline decoration-champagne/60 underline-offset-4 transition-colors hover:text-obsidian focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2'
                      >
                        Enquire about {serviceLink.label}
                      </Link>
                    </React.Fragment>
                  ))}
                </div>
              )}
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
          );
        })}
      </Accordion>
    </motion.div>
  );
};

export default PricingAccordion;
