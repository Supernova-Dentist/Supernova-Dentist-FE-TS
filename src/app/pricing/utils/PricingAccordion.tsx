'use client';

import React from 'react';
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
    <div className='mx-auto max-w-4xl'>
      <p className='mb-6 text-sm leading-6 text-taupe'>
        The first category is open to get you started. You can open more than one category when comparing treatments.
      </p>
      <Accordion type='multiple' defaultValue={['0']} className='space-y-4'>
        {pricingItems.map((pricingItem, index) => {
          const serviceLinks = serviceLinksByTitle[pricingItem.title] ?? [];

          return (
            <AccordionItem
              value={index.toString()}
              key={pricingItem.title}
              className='overflow-hidden rounded-[1.25rem] border border-control-border bg-white shadow-[0_12px_35px_rgba(11,18,24,0.05)]'
            >
            <AccordionTrigger className='min-h-16 bg-white px-5 py-5 text-lg font-semibold text-obsidian no-underline hover:bg-ivory hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-focus-light sm:px-7 sm:text-xl'>
              <span className='pr-4'>{pricingItem.title}</span>
            </AccordionTrigger>
            <AccordionContent className='border-0 border-t border-stone bg-white px-5 py-3 text-obsidian sm:px-7'>
              {serviceLinks.length > 0 && (
                <div className='mb-5 flex flex-wrap gap-x-6 gap-y-2 border-b border-stone pb-5'>
                  {serviceLinks.map((serviceLink) => (
                    <React.Fragment key={serviceLink.href}>
                      <Link
                        href={serviceLink.href}
                        className='inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-obsidian underline decoration-champagne/60 underline-offset-4 transition-colors hover:text-gold-text-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-light focus-visible:ring-offset-2'
                      >
                        View {serviceLink.label}
                        <FiArrowRight aria-hidden='true' className='size-4' />
                      </Link>
                      <Link
                        href={`/enquiry?ref=${encodeURIComponent(serviceLink.enquiryRef)}`}
                        className='inline-flex min-h-11 items-center text-sm font-semibold text-gold-text-light underline decoration-champagne/60 underline-offset-4 transition-colors hover:text-obsidian focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-light focus-visible:ring-offset-2'
                      >
                        Enquire about {serviceLink.label}
                      </Link>
                    </React.Fragment>
                  ))}
                </div>
              )}
              <div className='divide-y divide-stone'>
              {pricingItem.products.map((product, idx) => (
                <div key={idx} className='grid grid-cols-[minmax(0,1fr)_minmax(5.5rem,auto)] items-start gap-5 py-4'>
                  <span
                    className={`${
                      product.isHeader === true ? 'text-base font-semibold text-obsidian sm:text-lg' : 'text-sm leading-6 text-taupe sm:text-base'
                    } `}
                  >
                    {product.description}
                  </span>
                  <div className='flex flex-col items-end text-right text-sm text-obsidian sm:text-base'>
                    {Boolean(product.priceDescriptionBefore) && (
                      <span>{product.priceDescriptionBefore}</span>
                    )}
                    {Boolean(product.price) && (
                      <span className='font-semibold'>£{product.price}</span>
                    )}
                    {Boolean(product.priceDescription) && (
                      <span>{product.priceDescription}</span>
                    )}
                  </div>
                </div>
              ))}
              </div>
            </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default PricingAccordion;
