'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import useMeasure from 'react-use-measure';

export const TabsFAQ = () => {
  const [selected, setSelected] = useState(TABS[0]);

  return (
    <section className='flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white to-cream  px-4 py-4 min-h-screen'>
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
        <span className='mb-8 text-5xl font-bold text-gold'>FAQs</span>
      </div>
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
            selected === tab ? 'border-cream text-white' : 'border-grey bg-transparent text-gold'
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
                className='absolute inset-0 z-0 bg-gold'
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
      className={`rounded-xl border-[1px] border-lightGrey p-4 transition-colors ${open ? 'bg-grey' : 'bg-grey'}`}
    >
      <button onClick={() => setOpen((pv) => !pv)} className='flex w-full items-center justify-between gap-4 py-4'>
        <span className={`text-left text-lg font-medium transition-colors ${open ? 'text-gold' : 'text-white'}`}>
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
          <FiPlus className={`text-2xl transition-colors ${open ? 'text-white' : 'text-white'}`} />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : '0px',
          marginBottom: open ? '24px' : '0px',
        }}
        className='overflow-hidden text-white'
      >
        <p ref={ref}>{answer}</p>
      </motion.div>
    </motion.div>
  );
};

const TABS = ['General', 'Appointments', 'Parking & Location', 'Insurance'];

const QUESTIONS = {
  General: [
    {
      question: 'What are your opening hours?',
      answer:
        'Our opening hours are from 8:15 AM to 6:15 PM, Monday through Thursday and 9 AM to 1PM on Saturdays. We are closed on Sundays and major holidays.',
    },
    {
      question: 'Do you accept new patients?',
      answer:
        'Yes, we are currently accepting new patients. You can register and schedule your first appointment by calling us at 01278 228665 or through our patient portal at https://supernova.portal.dental.',
    },
    {
      question: 'What services do you offer?',
      answer:
        'We offer a wide range of procedures, including routine cleanings and examinations, fillings, crowns, bridges, root canals and cosmetic dentistry like Invisalign, teeth whitening and veneers.',
    },
  ],
  Location: [
    {
      question: 'Where are you located?',
      answer: `We are located at Supernova Building,
                  Marsh Lane,
                  Huntworth Gate, 
                  Bridgwater
                  TA6 6LQ`,
    },
    {
      question: 'Is there parking?',
      answer: `Yes we have 10 reserved parking spaces for patients on your right hand side as your driving down Marsh Lane.`,
    },
  ],
  Appointments: [
    {
      question: 'How do I schedule an appointment?',
      answer:
        'You can schedule an appointment calling us at 01278 228665 or through our patient portal at https://supernova.portal.dental. We recommend booking in advance to secure your preferred time.',
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        'We ask that you provide at least 48 hours notice if you need to cancel or reschedule your appointment. This allows us to offer the time slot to another patient, if we are not able to fill your slot if you cancel within 48 hours of your appointment you will lose your deposit.',
    },
    {
      question: 'How often should I visit the dentist?',
      answer:
        'We recommend visiting the dentist every six months for a routine checkup and cleaning. However, some patients may need to visit more frequently depending on their oral health.',
    },
    {
      question: 'What if I have an emergency?',
      answer:
        'If you have a dental emergency, please call/email us immediately. We will do our best to see you as soon as possible, often the same day.',
    },
  ],
  Insurance: [
    {
      question: 'Do you accept my insurance?',
      answer:
        'We accept most major dental insurance plans. Please contact our office with your insurance information and we can confirm whether your plan is accepted.',
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
};
