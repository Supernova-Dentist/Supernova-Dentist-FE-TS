import React from 'react';
import testimonialsData from '@/app/(cosmetic-services)/dental-implants/utils/testimonialsData';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ServiceTestimonialBox from '@/components/ServiceTestimonialBox/ServiceTestimonialBox';

export default function TestimonialsSection() {
  return (
    <section className='py-12 px-4 md:py-20 lg:py-28 bg-white'>
      <div className='container mx-auto px-4 md:px-6'>
        <SectionTitle title='Client Testimonials' />
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6'>
          {testimonialsData.map(({ id, text, name, beforeSrc, afterSrc, beforeAlt, afterAlt }) => (
            <React.Fragment key={id}>
              <ServiceTestimonialBox
                name={name}
                text={text}
                beforeSrc={beforeSrc}
                afterSrc={afterSrc}
                beforeAlt={beforeAlt}
                afterAlt={afterAlt}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
