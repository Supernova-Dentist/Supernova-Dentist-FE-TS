'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import FAQ from '../FAQ/FAQ';

export const faqItems: FAQItem[] = [
  {
    question: 'What is Invisalign?',
    answer:
      'Invisalign is a state-of-the-art orthodontic treatment that utilises clear, custom-made aligners designed specifically for your smile. They are nearly invisible and can be easily removed, offering a discreet and convenient way to achieve the straight teeth you’ve always wanted.',
  },
  {
    question: 'How does Invisalign work?',
    answer:
      'Invisalign works by using a series of clear aligners that you wear over your teeth. Each aligner gently shifts your teeth into the desired position and you’ll switch to a new set every one/two weeks.',
  },
  {
    question: 'What are the advantages of Invisalign?',
    answer:
      'Invisalign aligners are discreet, removable and more comfortable compared to traditional metal braces. You can enjoy your favorite foods without restrictions and maintain optimal oral hygiene, all while avoiding the discomfort of brackets and wires.',
  },
  {
    question: 'How long does Invisalign treatment take?',
    answer:
      'The treatment can be completed in as little as 6 months. During your consultation, we will provide a tailored treatment plan and timeline just for you.',
  },
  {
    question: 'Are there food restrictions with Invisalign?',
    answer:
      'With Invisalign, there are no food restrictions! Since the aligners are removable, you can enjoy all your favorite meals. Just remember to brush your teeth before reinserting the aligners to keep your smile fresh and clean.',
  },
  {
    question: 'How can my treatment cost be spread out?',
    answer:
      'Following the initial deposit, the treatment cost can be spread evenly throughout the course of your planned treatment. This can be discussed and planned with our team to tailor to your needs.',
  },
];

export default function PromotionFAQ() {
  const [email, setEmail] = useState('');
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted email:', email);
    setEmail('');
  };

  return (
    <section id='faq' ref={ref} className='w-full py-12 md:py-24 text-gray-900 bg-gradient-to-b from-cream to-white'>
      <div className='px-4 md:px-6 w-full'>
        <motion.div
          className='flex flex-col items-center space-y-6 text-center'
          initial={{ opacity: 0, y: 20 }} // Initial state for the animation
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate in
          transition={{ duration: 0.5 }} // Duration of the animation
        >
          <div className='space-y-2'>
            <div className='flex justify-center mb-4'>
              <div className='rounded-xl bg-grey px-4 py-1 text-sm text-white'>FAQs</div>
            </div>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter pb-6'>
              Frequently Asked Questions
            </h2>
            <hr className='border-t-2 border-grey w-20 mx-auto mt-4 pb-8' />
            <motion.div
              className='w-full max-w-2xl shadow-lg rounded-lg p-6 mt-4'
              initial={{ opacity: 0 }} // Initial state for the FAQ container
              animate={inView ? { opacity: 1 } : { opacity: 0 }} // Animate in
              transition={{ duration: 0.5, delay: 0.2 }} // Delay for the FAQ container
            >
              <FAQ faqItems={faqItems} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
