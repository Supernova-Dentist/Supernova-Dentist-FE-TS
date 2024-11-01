'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import FAQ from '../FAQ/FAQ';

export const faqItems: FAQItem[] = [
  {
    question: 'What is Invisalign?',
    answer:
      'Invisalign is a state-of-the-art orthodontic treatment that utilizes clear, custom-made aligners designed specifically for your smile. They are nearly invisible and can be easily removed, offering a discreet and convenient way to achieve the straight teeth you’ve always wanted.',
  },
  {
    question: 'How does Invisalign work?',
    answer:
      'Invisalign works by using a series of clear aligners that you wear over your teeth. Each aligner gently shifts your teeth into the desired position, and you’ll switch to a new set every two weeks, guided by our experienced orthodontic team.',
  },
  {
    question: 'What are the advantages of Invisalign?',
    answer:
      'Invisalign aligners are discreet, removable, and more comfortable compared to traditional metal braces. You can enjoy your favorite foods without restrictions and maintain optimal oral hygiene, all while avoiding the discomfort of brackets and wires.',
  },
  {
    question: 'How long does Invisalign treatment take?',
    answer:
      'The duration of Invisalign treatment typically ranges from 12 to 18 months, depending on your unique orthodontic needs. During your consultation, we will provide a tailored treatment plan and timeline just for you.',
  },
  {
    question: 'Are there food restrictions with Invisalign?',
    answer:
      'With Invisalign, there are no food restrictions! Since the aligners are removable, you can enjoy all your favorite meals. Just remember to brush your teeth before reinserting the aligners to keep your smile fresh and clean.',
  },
  {
    question: 'Does insurance cover Invisalign?',
    answer:
      'Many dental insurance plans include coverage for Invisalign treatment. Coverage can vary, so we encourage you to check with your provider. Our friendly team is here to help you navigate your insurance benefits and explore flexible payment options to make your treatment affordable.',
  },
];

export default function PromotionFAQ() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted email:', email);
    setEmail('');
  };

  return (
    <section id='faq' className='w-full py-12 md:py-24 lg:py-32 text-gray-900 bg-gradient-to-b from-cream to-white'>
      <div className='px-4 md:px-6 w-full'>
        <div className='flex flex-col items-center space-y-6 text-center'>
          <div className='space-y-2'>
            <div className='flex justify-center mb-4'>
              <div className='rounded-xl bg-gold px-4 py-1 text-sm text-gray-50'>FAQs</div>
            </div>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter pb-6'>
              Frequently Asked Questions
            </h2>
            <hr className='border-t-2 border-grey w-20 mx-auto mt-4 pb-8' />
            <div className='w-full max-w-2xl shadow-lg rounded-lg p-6'>
              <FAQ faqItems={faqItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
