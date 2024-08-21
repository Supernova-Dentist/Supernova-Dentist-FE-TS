import React from 'react';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ServiceBenefit from '@/components/ServiceBenefit/ServiceBenefit';

export default function BenefitSection({ title, description, data }: BenefitSection) {
  return (
    <section className='py-12 px-4 md:py-20 lg:py-28 bg-grey'>
      <div className='container mx-auto px-4 md:px-6'>
        <SectionTitle title={title} />
        <p className='mt-4 text-cream max-w-[700px]'>{description}</p>
        <div className='mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {data.map(({ id, icon, header, text }) => (
            <React.Fragment key={id}>
              <ServiceBenefit icon={icon} header={header} text={text} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
