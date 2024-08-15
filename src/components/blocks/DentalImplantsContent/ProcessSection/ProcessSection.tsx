import React from 'react';
import processBoxData from '@/app/(cosmetic-services)/dental-implants/utils/processBoxData';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ServiceProcessBox from '@/components/ServiceProcessBox/ServiceProcessBox';

export default function ProcessSection() {
  return (
    <section className='py-12 px-4 md:py-20 lg:py-28 bg-lightGrey'>
      <div className='container mx-auto px-4 md:px-6'>
        <SectionTitle title='Your Dental Implant Process' />
        <p className='mt-4 text-cream max-w-[700px]'>
          {
            "Our comprehensive dental implant process is designed to ensure a successful and comfortable experience. Here's how we guide you through each step:"
          }
        </p>
        <div className='mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {processBoxData.map(({ id, src, header, text }) => (
            <React.Fragment key={id}>
              <ServiceProcessBox src={src} header={header} text={text} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
