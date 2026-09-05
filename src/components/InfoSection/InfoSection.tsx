'use client';

import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ServiceDescription from '@/components/ServiceDescription/ServiceDescription';
import ServiceGridList from '@/components/ServiceGridList/ServiceGridList';
import ServiceGridTitle from '@/components/ServiceGridTitle/ServiceGridTitle';
import ServiceVideo from '@/components/ServiceVideo/ServiceVideo';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function InfoSection({ data, id }: { data: any; id?: string }) {
  const {
    title,
    descriptions,
    imageSrc,
    advantagesTitle,
    useCaseTitle,
    advantagesData,
    useCaseData,
    videoSrc,
    treatmentCasesVideoSrc,
    treatmentCasesDescription,
  } = data;

  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  return (
    <section ref={ref} id={id} className='service-info mx-auto max-w-[64rem] px-4 py-12 md:py-20 lg:pb-28'>
      <motion.div
        initial={{ opacity: 0.94, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.94, y: 12 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className='container mx-auto px-4 md:px-6'
      >
        <SectionTitle title={title} />
        <hr className='mx-auto mb-8 mt-5 w-16 border-t border-champagne' />

        {/* Video and Description */}
        <div className='flex flex-col gap-8'>
          {/* Description */}
          <div>
            <ServiceDescription className='mt-6 mb-4' description={descriptions[0]} />
            {descriptions[1] && <ServiceDescription description={descriptions[1]} />}
            {imageSrc && (
              <Image
                alt={`${title} Image`}
                width={100}
                height={800}
                layout='responsive'
                className='mx-auto mt-8 max-w-[34rem] rounded-[1.25rem] object-cover shadow-[0_18px_45px_rgba(11,18,24,0.12)]'
                src={imageSrc}
              />
            )}
          </div>

          {videoSrc && <ServiceVideo videoSrc={videoSrc} />}
        </div>

        {/* Grids / Treatment Cases */}
        <div className='flex flex-col gap-8'>
          {advantagesData && advantagesData.length > 0 && (
            // Grids / Treatment Cases
            <div className='mt-8 flex flex-col gap-8'>
              <div className='flex-1'>
                <ServiceGridTitle title={advantagesTitle} />
                <ServiceGridList listItems={advantagesData} />
              </div>
            </div>
          )}

          <div className='flex-1'>
            {treatmentCasesVideoSrc || (useCaseTitle && useCaseData?.length > 0) ? (
              treatmentCasesVideoSrc ? (
                <div className='w-full mx-auto text-center'>
                  <ServiceGridTitle title={useCaseTitle} />
                  <ServiceDescription description={treatmentCasesDescription} className='max-w-[30rem] mx-auto' />
                  <div className='relative w-full max-w-[360px] mx-auto aspect-[9/16]'>
                    <video
                      className='mt-8 h-full w-full rounded-[1.25rem] border border-stone object-cover'
                      controls
                      preload='none'
                      src={treatmentCasesVideoSrc}
                    />
                  </div>
                </div>
              ) : (
                <>
                  <ServiceGridTitle title={useCaseTitle} />
                  <ServiceGridList listItems={useCaseData} />
                </>
              )
            ) : null}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
