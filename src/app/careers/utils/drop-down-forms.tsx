'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

export const FormOptionTrigger = ({
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

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key='content'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='overflow-hidden text-slate-800 mb-6'
          >
            <div className='text-left'>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const DropDownForms = ({
  dropDownFormItems,
}: {
  dropDownFormItems: Array<{
    formOptionTrigger: string;
    answer: React.ReactNode; // Changed from string to React.ReactNode
  }>;
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {dropDownFormItems.map((item, index) => (
        <div key={index}>
          <FormOptionTrigger
            title={item.formOptionTrigger}
            isOpen={openIndex === index}
            onToggle={handleToggle}
            index={index}
          >
            {item.answer}
          </FormOptionTrigger>
          {index < dropDownFormItems.length - 1 && <hr className='my-6 border-b-[1px] border-b-gray-200' />}
        </div>
      ))}
    </div>
  );
};

export default DropDownForms;
