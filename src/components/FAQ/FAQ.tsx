'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import useMeasure from 'react-use-measure';

const Question = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div animate={open ? 'open' : 'closed'} className='border-b-[1px] border-b-slate-300'>
      <button onClick={() => setOpen((pv) => !pv)} className='flex w-full items-center justify-between gap-4 py-6'>
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
          height: open ? height : '0px',
          marginBottom: open ? '24px' : '0px',
        }}
        className='overflow-hidden text-slate-800'
      >
        <p ref={ref}>{children}</p>
      </motion.div>
    </motion.div>
  );
};

const FAQ = ({ faqItems }: FAQProps) => {
  return (
    <div>
      {faqItems.map((item, index) => (
        <div key={index}>
          <Question title={item.question}>{item.answer}</Question>
          <hr className='my-6 border-b-[1px] border-b-slate-300' />
        </div>
      ))}
    </div>
  );
};

export default FAQ;
