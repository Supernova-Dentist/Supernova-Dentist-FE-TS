'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import FAQ from '../FAQ/FAQ';

export const faqItems: FAQItem[] = [
  {
    question: 'What is Invisalign?',
    answer:
      'Invisalign is a modern orthodontic solution that uses clear, custom-made aligners to gradually straighten your teeth. They are virtually invisible and removable, making them a popular choice for discreet treatment.',
  },
  {
    question: 'How does Invisalign work?',
    answer:
      'Invisalign uses a series of aligners that you wear over your teeth, shifting them into the correct position. You’ll switch to a new set every two weeks as guided by your orthodontist.',
  },
  {
    question: 'What are the advantages of Invisalign?',
    answer:
      'Invisalign is discreet, removable, and more comfortable than traditional braces. It allows you to eat freely and maintain better oral hygiene without the irritation caused by metal brackets.',
  },
  {
    question: 'How long does treatment take?',
    answer:
      'Treatment typically lasts between 12 to 18 months, depending on your individual needs. Your orthodontist will provide a personalized timeline during your consultation.',
  },
  {
    question: 'Are there food restrictions?',
    answer:
      'No, there are no food restrictions with Invisalign since the aligners are removable. Just brush your teeth before putting them back in to keep everything clean.',
  },
  {
    question: 'Does insurance cover Invisalign?',
    answer:
      'Many dental insurance plans cover Invisalign treatment. Coverage varies, so check with your provider. Our team can help you navigate insurance benefits and payment options.',
  },
];

export default function PromotionFAQ() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Could add the same form here or just a button to go to the sign up form above?
    console.log('Submitted email:', email);
    setEmail('');
  };

  return (
    <section id='faq' className='w-full py-12 md:py-24 lg:py-32 text-gray-900 bg-gradient-to-b from-cream to-white'>
      <div className='px-4 md:px-6 w-full'>
        <div className='flex flex-col items-center space-y-6 text-center'>
          <div className='space-y-2'>
            <div className='flex justify-center mb-4 '>
              <div className='rounded-xl bg-gold px-4 py-1 text-sm text-gray-50'>FAQs</div>
            </div>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter pb-6 '>
              Frequently Asked Questions
            </h2>
            <hr className='border-t-2 border-grey w-20 mx-auto mt-4 pb-8 ' />
            <div className='w-full max-w-2xl shadow-lg rounded-lg p-6'>
              <FAQ faqItems={faqItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
