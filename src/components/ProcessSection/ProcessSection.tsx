import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ServiceProcess from '@/components/ServiceProcess/ServiceProcess';
import React from 'react';

export default function ProcessSection({ data }: ProcessSection) {
  const { title, description, content } = data;

  return (
    <section className='py-12 px-4 md:py-20 lg:py-28 bg-lightGrey'>
      <div className='container mx-auto px-4 md:px-6'>
        <SectionTitle title={title} />
        <div className='flex justify-center'>
          <p className='mt-4 mb-6 text-cream max-w-[720px]'>{description}</p>
        </div>
        <div className='mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {content.map(({ id, src, header, text }) => (
            <React.Fragment key={id}>
              <ServiceProcess src={src} header={header} text={text} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
