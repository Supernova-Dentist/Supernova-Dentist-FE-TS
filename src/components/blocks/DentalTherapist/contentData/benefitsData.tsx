import { FaTooth } from 'react-icons/fa';
import { GiToothbrush } from 'react-icons/gi';
import { IoHappy } from 'react-icons/io5';

export default {
  title: 'How a Dental Therapist Benefits You',
  description:
    'Regular visits to a dental therapist are essential for maintaining optimal oral health and preventing more serious dental issues:',
  content: [
    {
      id: 1,
      icon: <GiToothbrush className='h-12 w-12 text-gold' />,
      header: 'Preventive Care',
      text: 'Dental therapists provide treatments such as scaling and root surface debridement to help prevent gum disease and maintain oral health.',
    },
    {
      id: 2,
      icon: <FaTooth className='h-12 w-12 text-gold' />,
      header: 'Restorative Treatments',
      text: 'Dental therapists perform fillings, pulpotomies, and other treatments to restore damaged teeth and ensure long-term oral health.',
    },
    {
      id: 3,
      icon: <IoHappy className='h-12 w-12 text-gold' />,
      header: 'Gum Health',
      text: 'Dental therapists help manage gum disease and support overall oral health for a healthier, more comfortable smile.',
    },
  ],
};
