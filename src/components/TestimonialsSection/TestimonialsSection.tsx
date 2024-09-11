import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ServiceTestimonial from '@/components/ServiceTestimonial/ServiceTestimonial';
import React from 'react';

export default function TestimonialsSection({ data, id }: ServiceTestimonials) {
  return (
    <section id={id} className='py-12 px-4 md:py-20 lg:py-28 bg-white'>
      <div className='container mx-auto px-4 md:px-6'>
        <SectionTitle title='Client Testimonials' />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6'>
          {data.map(({ id, text, name, beforeSrc, afterSrc, beforeAlt, afterAlt }) => (
            <React.Fragment key={id}>
              <ServiceTestimonial
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
