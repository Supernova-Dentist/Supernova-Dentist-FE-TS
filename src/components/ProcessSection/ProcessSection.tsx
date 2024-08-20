import React from 'react';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ServiceProcessBox from '@/components/ServiceProcessBox/ServiceProcessBox';

export default function ProcessSection({ title, description, data }: ProcessSectionProps) {
  return (
    <section className='py-12 px-4 md:py-20 lg:py-28 bg-lightGrey'>
      <div className='container mx-auto px-4 md:px-6'>
        <SectionTitle title={title} />
        <p className='mt-4 text-cream max-w-[700px]'>{description}</p>
        <div className='mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {data.map(({ id, src, header, text }) => (
            <React.Fragment key={id}>
              <ServiceProcessBox src={src} header={header} text={text} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
