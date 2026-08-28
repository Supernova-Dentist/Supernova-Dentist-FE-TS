'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import useMeasure from 'react-use-measure';

export const Question = ({
  title,
  children,
  isOpen,
  onToggle,
  index,
  questionId,
  answerId,
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: (index: number) => void;
  index: number;
  questionId: string;
  answerId: string;
}) => {
  const [ref, { height }] = useMeasure();

  return (
    <motion.div animate={isOpen ? 'open' : 'closed'} className='border-b border-stone'>
      <button
        id={questionId}
        type='button'
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={() => onToggle(index)}
        className='flex min-h-11 w-full items-center justify-between gap-4 rounded-sm py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2'
      >
        <motion.span
          variants={{
            open: {
              color: 'rgba(3, 6, 23, 0)',
            },
            closed: {
              color: 'rgba(3, 6, 23, 1)',
            },
          }}
          className='bg-champagne bg-clip-text text-left text-lg font-medium'
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: '180deg',
              color: 'var(--gold)',
            },
            closed: {
              rotate: '0deg',
              color: '#030617',
            },
          }}
        >
          <FiChevronDown className='text-2xl' />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? height : '0px',
          marginBottom: isOpen ? '24px' : '0px',
        }}
        id={answerId}
        role='region'
        aria-labelledby={questionId}
        aria-hidden={!isOpen}
        className='overflow-hidden text-taupe'
      >
        <div className='text-left' ref={ref}>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

const FAQ = ({ faqItems }: { faqItems: Array<{ question: string; answer: string }> }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    // Toggle the clicked question, close others
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {faqItems.map((item, index) => (
        <div key={index}>
          <Question
            title={item.question}
            isOpen={openIndex === index} // Only open if index matches
            onToggle={handleToggle}
            index={index}
            questionId={`faq-question-${index}`}
            answerId={`faq-answer-${index}`}
          >
            {item.answer}
          </Question>
          {index < faqItems.length - 1 && <hr className='my-3 border-b border-stone/70' />}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
