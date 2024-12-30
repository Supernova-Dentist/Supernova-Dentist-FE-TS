import SectionTitle from '@/components/SectionTitle/SectionTitle';
import React, { useState } from 'react';
import ServiceProcess from '../ServiceProcess/ServiceProcess';
import { InvisalignTimeline } from '../ServiceTimelines/InvisalignTimeline';
import { Timeline } from '../ui/timeline';

interface ProcessData {
  title: string;
  description: string;
  stepContent: any;
  timelineData?: any;
}

export default function ProcessSection({ data, id }: { data: ProcessData; id: string }) {
  const { title, description, stepContent, timelineData } = data;

  return (
    <section id={id} className='py-12 px-4 md:py-20 lg:py-28 bg-gradient-to-b from-cream to-white'>
      <div className='container mx-auto px-4 md:px-6'>
        <SectionTitle title={title} />
        <hr className='border-t-2 border-gold w-20 mx-auto mt-4 mb-8' />
        <div className='flex justify-center'>
          <p className='mt-4 mb-8 max-w-[720px] text-lg'>{description}</p>
        </div>
        {/* Conditionally render Timeline or SteppedProgress based on the presence of timelineData */}
        {timelineData && timelineData.length > 0 ? (
          <InvisalignTimeline data={timelineData} />
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
