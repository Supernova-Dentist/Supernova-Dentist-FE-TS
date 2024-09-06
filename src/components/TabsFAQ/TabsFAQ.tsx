'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import useMeasure from 'react-use-measure';

export const TabsFAQ = () => {
  const [selected, setSelected] = useState(TABS[0]);

  return (
    <section className='overflow-hidden bg-slate-900 px-4 py-12 text-slate-50'>
      <Heading />
      <Tabs selected={selected} setSelected={setSelected} />
      <Questions selected={selected} />
    </section>
  );
};

const Heading = () => {
  return (
    <>
      <div className='relative flex flex-col items-center justify-center'>
        <span className='mb-8 bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text font-medium text-transparent'>
          Let&apos;s answer some questions
        </span>
        <span className='mb-8 text-5xl font-bold'>FAQs</span>
      </div>

      <span className='absolute -top-[350px] left-[50%] h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl' />
    </>
  );
};

const Tabs = ({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className='relative  flex flex-wrap items-center justify-center gap-4'>
      {TABS.map((tab) => (
        <button
          onClick={() => setSelected(tab)}
          className={`relative overflow-hidden whitespace-nowrap rounded-md border-[1px] px-3 py-1.5 text-sm font-medium transition-colors duration-500 ${
            selected === tab ? 'border-violet-500 text-slate-50' : 'border-slate-600 bg-transparent text-slate-400'
          }`}
          key={tab}
        >
          <span className='relative z-10'>{tab}</span>
          <AnimatePresence>
            {selected === tab && (
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                exit={{ y: '100%' }}
                transition={{
                  duration: 0.5,
                  ease: 'backIn',
                }}
                className='absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600'
              />
            )}
          </AnimatePresence>
        </button>
      ))}
    </div>
  );
};

const Questions = ({ selected }: { selected: string }) => {
  return (
    <div className='mx-auto mt-12 max-w-3xl'>
      <AnimatePresence mode='wait'>
        {Object.entries(QUESTIONS).map(([tab, questions]) => {
          return selected === tab ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                ease: 'backIn',
              }}
              className='space-y-4'
              key={tab}
            >
              {questions.map((q, idx) => (
                <Question key={idx} {...q} />
              ))}
            </motion.div>
          ) : undefined;
        })}
      </AnimatePresence>
    </div>
  );
};

const Question = ({ question, answer }: { question: string; answer: string }) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      animate={open ? 'open' : 'closed'}
      className={`rounded-xl border-[1px] border-slate-700 px-4 transition-colors ${
        open ? 'bg-slate-800' : 'bg-slate-900'
      }`}
    >
      <button onClick={() => setOpen((pv) => !pv)} className='flex w-full items-center justify-between gap-4 py-4'>
        <span
          className={`text-left text-lg font-medium transition-colors ${open ? 'text-slate-50' : 'text-slate-400'}`}
        >
          {question}
        </span>
        <motion.span
          variants={{
            open: {
              rotate: '45deg',
            },
            closed: {
              rotate: '0deg',
            },
          }}
        >
          <FiPlus className={`text-2xl transition-colors ${open ? 'text-slate-50' : 'text-slate-400'}`} />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : '0px',
          marginBottom: open ? '24px' : '0px',
        }}
        className='overflow-hidden text-slate-400'
      >
        <p ref={ref}>{answer}</p>
      </motion.div>
    </motion.div>
  );
};

const TABS = ['General', 'Procedures', 'Insurance', 'Appointments'];

const QUESTIONS = {
  General: [
    {
      question: 'What are your office hours?',
      answer:
        'Our office is open from 8 AM to 6 PM, Monday through Friday. We also offer Saturday appointments by request.',
    },
    {
      question: 'Where are you located?',
      answer:
        'We are located at 123 Dental Street, Suite 100, in Springfield. You can find us right next to the central park.',
    },
    {
      question: 'Do you accept new patients?',
      answer:
        'Yes, we are currently accepting new patients. You can schedule your first appointment by calling our office or booking online.',
    },
    {
      question: 'What should I bring to my first appointment?',
      answer:
        'Please bring a valid ID, your insurance card, and any previous dental records you might have. If you have a list of medications you are currently taking, please bring that as well.',
    },
  ],
  Procedures: [
    {
      question: 'What types of procedures do you offer?',
      answer:
        'We offer a wide range of procedures, including routine cleanings, fillings, crowns, bridges, root canals, and cosmetic dentistry like teeth whitening and veneers.',
    },
    {
      question: 'Is teeth whitening safe?',
      answer:
        'Yes, professional teeth whitening is a safe and effective way to enhance your smile. Our dentists use the latest technology to ensure optimal results with minimal sensitivity.',
    },
    {
      question: 'Do you offer orthodontic treatments?',
      answer:
        'Yes, we offer orthodontic treatments including traditional braces and Invisalign. Our orthodontist will work with you to determine the best treatment plan for your needs.',
    },
    {
      question: 'What is a root canal?',
      answer:
        'A root canal is a procedure used to treat infection or damage inside a tooth. It involves removing the affected tissue, cleaning the inside of the tooth, and sealing it to prevent further issues.',
    },
  ],
  Insurance: [
    {
      question: 'Do you accept my insurance?',
      answer:
        'We accept most major dental insurance plans. Please contact our office with your insurance information, and we can confirm whether your plan is accepted.',
    },
    {
      question: 'What if I don’t have insurance?',
      answer:
        'If you do not have insurance, we offer flexible payment plans and financing options to help you manage the cost of your dental care.',
    },
    {
      question: 'What is your policy on insurance claims?',
      answer:
        'We will file your insurance claims for you as a courtesy. However, please be aware that the patient is responsible for any costs not covered by insurance.',
    },
    {
      question: 'Do you offer payment plans?',
      answer:
        'Yes, we offer a variety of payment plans to make dental care more accessible. Please speak with our billing department to find a plan that works for you.',
    },
  ],
  Appointments: [
    {
      question: 'How do I schedule an appointment?',
      answer:
        'You can schedule an appointment by calling our office or using our online booking system. We recommend booking in advance to secure your preferred time.',
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        'We ask that you provide at least 24 hours notice if you need to cancel or reschedule your appointment. This allows us to offer the time slot to another patient.',
    },
    {
      question: 'How often should I visit the dentist?',
      answer:
        'We recommend visiting the dentist every six months for a routine checkup and cleaning. However, some patients may need to visit more frequently depending on their oral health.',
    },
    {
      question: 'What if I have an emergency?',
      answer:
        'If you have a dental emergency, please call our office immediately. We will do our best to see you as soon as possible, often the same day.',
    },
  ],
};
