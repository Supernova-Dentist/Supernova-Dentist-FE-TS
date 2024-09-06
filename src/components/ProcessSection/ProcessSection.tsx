import SectionTitle from '@/components/SectionTitle/SectionTitle';
import React from 'react';
import { Timeline } from '../ui/timeline';
import ServiceProcess from '../ServiceProcess/ServiceProcess';

interface ProcessData {
  title: string;
  description: string;
  stepContent: any;
  timelineData?: any;
}

export default function ProcessSection({ data }: { data: ProcessData }) {
  const { title, description, stepContent, timelineData } = data;

  return (
    <section className='py-12 px-4 md:py-20 lg:py-28 bg-lightGrey'>
      <div className='container mx-auto px-4 md:px-6'>
        <SectionTitle title={title} />
        <div className='flex justify-center'>
          <p className='mt-4 mb-6 text-cream max-w-[720px]'>{description}</p>
        </div>
        {/* Conditionally render Timeline or SteppedProgress based on the presence of timelineData */}
        {timelineData && timelineData.length > 0 ? (
          <Timeline data={timelineData} />
        ) : (
          <div className='mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {stepContent.map(
              ({ id, image, header, text }: { id: string; image: string; header: string; text: string }) => (
                <React.Fragment key={id}>
                  <ServiceProcess src={image} header={header} text={text} />
                </React.Fragment>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}
