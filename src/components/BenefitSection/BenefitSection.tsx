import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ServiceBenefit from '@/components/ServiceBenefit/ServiceBenefit';
import React from 'react';

export default function BenefitSection({ data, id }: BenefitSection) {
  const { title, description, content } = data;

  return (
    <section id={id} className='py-12 px-4 md:py-20 lg:py-28 bg-gradient-to-b from-white to-cream'>
      <div className='container mx-auto px-4 md:px-6'>
        <SectionTitle title={title} />
        <hr className='border-t-2 border-gold w-20 mx-auto mt-4 mb-8' />
        <div className='flex justify-center'>
          <p className='mt-4 mb-6 text-lg max-w-[720px]'>{description}</p>
        </div>
        <div className='mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {content.map(({ id, icon, header, text }) => (
            <React.Fragment key={id}>
              <ServiceBenefit icon={icon} header={header} text={text} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
