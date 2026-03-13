'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FAQ from '../FAQ/FAQ';

export default function PracticeFAQsSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const faqItems = [
    {
      question: 'Why choose Supernova Dental Practice?',
      answer:
        'We combine the latest dental technology with a personalised patient journey tailored to your needs. With over 100 five-star Google reviews, patients trust us for our high standards of care and comfort.',
    },
    {
      question: 'What are your opening hours?',
      answer: 'We are open Monday to Friday from 08:15 to 18:15, and on Saturdays from 09:00 to 13:00.',
    },
    {
      question: 'Where are you located?',
      answer:
        'We are located at the Supernova Building, Marsh Lane, Huntworth Gate, Bridgwater, Somerset TA6 6LQ - just off Junction 24 of the M5, making us easily accessible for patients travelling from surrounding areas.',
    },
    {
      question: 'Do you have parking available?',
      answer:
        'Yes, we have 10 clearly signposted reserved parking spaces directly opposite the building for our patients.',
    },
    {
      question: 'Do you offer same-day emergency appointments?',
      answer:
        'Yes, we reserve 2 emergency slots Monday to Thursday and 1 slot on Saturdays for same-day urgent dental care.',
    },
  ];

  return (
    <section className=' py-16 px-6 md:px-12' ref={ref}>
      <motion.div
        className='max-w-4xl mx-auto text-center'
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-8'>General Questions About the Practice</h2>

        <div className='space-y-8 text-left'>
          <FAQ faqItems={faqItems} />
        </div>
      </motion.div>
    </section>
  );
}
