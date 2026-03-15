import { FaTooth } from 'react-icons/fa';
import { GiStethoscope } from 'react-icons/gi';
import { IoHappy } from 'react-icons/io5';

export default {
  title: 'How a New Patient Dental Examination Benefits You',
  description:
    'A new patient dental examination provides a comprehensive assessment to maintain oral health and prevent future dental issues:',
  content: [
    {
      id: 1,
      icon: <GiStethoscope className='h-12 w-12 text-gold' />,
      header: 'Comprehensive Assessment',
      text: 'Our dentists check your teeth, gums, bite, and overall oral health to identify any existing or potential issues early.',
    },
    {
      id: 2,
      icon: <FaTooth className='h-12 w-12 text-gold' />,
      header: 'Personalised Care Plan',
      text: 'Receive a tailored treatment plan and advice to ensure your oral health is maintained effectively for long-term results.',
    },
    {
      id: 3,
      icon: <IoHappy className='h-12 w-12 text-gold' />,
      header: 'Peace of Mind',
      text: 'Know your current dental health status, get preventive guidance, and feel confident about maintaining a healthy smile.',
    },
  ],
};
