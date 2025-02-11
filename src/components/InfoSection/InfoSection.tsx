'use client';

import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ServiceDescription from '@/components/ServiceDescription/ServiceDescription';
import ServiceGridList from '@/components/ServiceGridList/ServiceGridList';
import ServiceGridTitle from '@/components/ServiceGridTitle/ServiceGridTitle';
import ServiceVideo from '@/components/ServiceVideo/ServiceVideo';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function InfoSection({ data, id }: { data: any; id?: string }) {
  const {
    title,
    descriptions,
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
    <section ref={ref} id={id} className='py-8 px-4 md:py-18 lg:pb-28 max-w-[56rem] mx-auto'>
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Initial state for the animation
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate in
        transition={{ duration: 0.5 }} // Duration of the animation
        className='container mx-auto px-4 md:px-6'
      >
        <SectionTitle title={title} />
        <hr className='border-t-2 border-gold w-20 mx-auto mt-4 mb-8' />

        {/* Video and Description */}
        <div className='flex flex-col gap-8'>
          {/* Description */}
          <div>
            <ServiceDescription className='mt-6 mb-4' description={descriptions[0]} />
            <ServiceDescription description={descriptions[1]} />
          </div>

          {/* Video */}
          <ServiceVideo videoSrc={videoSrc} />
        </div>

        {/* Grids / Treatment Cases */}
        <div className='mt-8 flex flex-col gap-8'>
          <div className='flex-1'>
            <ServiceGridTitle title={advantagesTitle} />
            <ServiceGridList listItems={advantagesData} />
          </div>

          <div className='flex-1'>
            {treatmentCasesVideoSrc !== undefined && treatmentCasesVideoSrc !== null ? (
              <div className='w-full mx-auto'>
                <ServiceGridTitle title={useCaseTitle} />
                <ServiceDescription description={treatmentCasesDescription} />
                <div className='relative w-full max-w-[360px] mx-auto aspect-[9/16]'>
                  <video
                    className='w-full h-full object-cover rounded-lg lg:mt-8'
                    controls
                    preload='metadata'
                    src={treatmentCasesVideoSrc}
                  />
                </div>
              </div>
            ) : (
              <>
                <ServiceGridTitle title={useCaseTitle} />
                <ServiceGridList listItems={useCaseData} />
              </>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
