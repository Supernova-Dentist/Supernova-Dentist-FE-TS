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
    <div className='service-overview-card relative max-w-3xl rounded-[1.5rem] border border-stone bg-porcelain p-8 shadow-[0_20px_60px_rgba(11,18,24,0.1)] md:p-12'>
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
    <section ref={ref} className='service-overview mx-auto flex w-full items-center justify-center px-4 py-10 md:py-16'>
      <motion.div
        initial={{ opacity: 0.94, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.94, y: 12 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className='mx-auto px-2 text-center sm:px-6'
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
