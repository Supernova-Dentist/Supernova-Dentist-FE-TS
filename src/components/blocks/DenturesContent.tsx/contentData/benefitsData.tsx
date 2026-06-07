import { FaTooth } from 'react-icons/fa';
import { GiStethoscope } from 'react-icons/gi';
import { IoHappy } from 'react-icons/io5';

export default {
  title: 'How Root Canal Treatment Benefits You',
  description:
    'Root canal treatment removes infection, relieves pain, and restores your tooth so you can return to normal life comfortably:',

  content: [
    {
      id: 1,
      icon: <GiStethoscope className='h-12 w-12 text-gold' />,
      header: 'Removes Infection',
      text: 'We carefully clean and disinfect the inside of your tooth to eliminate bacteria and stop the infection at its source.',
    },
    {
      id: 2,
      icon: <FaTooth className='h-12 w-12 text-gold' />,
      header: 'Saves Your Natural Tooth',
      text: 'Avoid extraction by preserving your natural tooth structure, helping maintain your bite and appearance.',
    },
    {
      id: 3,
      icon: <IoHappy className='h-12 w-12 text-gold' />,
      header: 'Relieves Pain and Restores Comfort',
      text: 'Treatment is designed to relieve discomfort and allow you to eat, speak and smile with confidence again.',
    },
  ],
};
