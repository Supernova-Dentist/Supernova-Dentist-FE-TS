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
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: (index: number) => void;
  index: number;
}) => {
  const [ref, { height }] = useMeasure();

  return (
    <motion.div animate={isOpen ? 'open' : 'closed'} className='border-b-[1px] border-b-slate-300'>
      <button onClick={() => onToggle(index)} className='flex w-full items-center justify-between gap-4 py-2'>
        <motion.span
          variants={{
            open: {
              color: 'rgba(3, 6, 23, 0)',
            },
            closed: {
              color: 'rgba(3, 6, 23, 1)',
            },
          }}
          className='bg-gold bg-clip-text text-left text-lg font-medium'
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
        className='overflow-hidden text-slate-800'
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
          >
            {item.answer}
          </Question>
          {index < faqItems.length - 1 && <hr className='my-6 border-b-[1px] border-b-gray-200' />}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
