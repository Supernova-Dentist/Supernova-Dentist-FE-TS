import benefitBoxData from '@/app/(cosmetic-services)/dental-implants/utils/benefitBoxData';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ServiceBenefitBox from '@/components/ServiceBenefitBox/ServiceBenefitBox';
import React from 'react';

export default function BenefitSection() {
  return (
    <section className='py-12 px-4 md:py-20 lg:py-28 bg-grey'>
      <div className='container mx-auto px-4 md:px-6'>
        <SectionTitle title='Who Can Benefit from Dental Implants?' />
        <p className='mt-4 text-cream max-w-[700px]'>
          Dental implants offer a reliable solution for replacing missing teeth and can significantly enhance your oral
          health and quality of life. They are ideal for a variety of patients:
        </p>
        <div className='mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {benefitBoxData.map(({ id, icon, header, text }) => (
            <React.Fragment key={id}>
              <ServiceBenefitBox icon={icon} header={header} text={text} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
