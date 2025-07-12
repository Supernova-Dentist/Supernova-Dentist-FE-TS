'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import ServiceActions from '@/components/ServiceActions/ServiceActions';
import ServiceDescription from '@/components/ServiceDescription/ServiceDescription';
import ServiceHeader from '@/components/ServiceHeader/ServiceHeader';
import ServiceStatsContainer from '@/components/ServiceStatsContainer/ServiceStatsContainer';
import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';

// Rename ServiceBox to a named component
function ServiceBox({ title, subTitle, benefitText, stats, statsTitle }: ServiceBox) {
  return (
    <div className='relative max-w-3xl rounded-lg bg-white p-8 shadow-2xl md:p-12'>
      <ServiceHeader title={title} subTitle={subTitle} className='mb-4' />
      <ServiceDescription className='mt-6 mb-8' description={benefitText} />
      {stats && stats.length > 0 && <ServiceStatsContainer stats={stats} statsTitle={statsTitle} />}
      <div className={`lg:mt-6 mt-10 flex flex-col gap-4 sm:flex-row ${'justify-center'}`}>
        <motion.button className='bg-gold text-cream px-8 py-4 rounded-lg text-lg font-semibold' onClick={scrollToPromotionForm}>📝 Book Online </motion.button>
      </div>
    </div>
  );
}

// Default export remains for the page/component
export default function EmergencyHeroSection({ data }: HeroSection) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  if (!data.statsTitle) {
    data.statsTitle = 'On average:';
  }

  return (
    <section ref={ref} className='flex items-center justify-center w-full mx-auto'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className='mx-auto px-6 text-center '
      >
        <ServiceBox
          title={data.header.title}
          subTitle={data.header.subTitle}
          benefitText={data.benefitText}
          stats={data.serviceStats ?? []}
          statsTitle={data.statsTitle}
        />
      </motion.div>
    </section>
  );
}
