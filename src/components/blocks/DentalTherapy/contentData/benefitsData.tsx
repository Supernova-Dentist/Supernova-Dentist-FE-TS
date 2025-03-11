import { FaTooth } from 'react-icons/fa';
import { GiToothbrush } from 'react-icons/gi';
import { IoHappy } from 'react-icons/io5';

export default {
  title: 'How Dental Therapy Benefits You',
  description:
    'Regular dental therapy appointments are essential for maintaining optimal oral health and preventing more serious dental issues:',
  content: [
    {
      id: 1,
      icon: <GiToothbrush className='h-12 w-12 text-gold' />,
      header: 'Preventive Care',
      text: 'Dental therapy treatments, including scaling and root surface debridement, help prevent gum disease and manage oral health.',
    },
    {
      id: 2,
      icon: <FaTooth className='h-12 w-12 text-gold' />,
      header: 'Restorative Treatments',
      text: 'Therapists carry out fillings, pulpotomies, and other treatments to restore damaged teeth and maintain their health.',
    },
    {
      id: 3,
      icon: <IoHappy className='h-12 w-12 text-gold' />,
      header: 'Gum Health',
      text: 'Dental therapy helps manage gum disease and keeps your gums healthy, supporting overall oral health and comfort.',
    },
  ],
};
