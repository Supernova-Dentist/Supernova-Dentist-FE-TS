import { FaTooth, FaSadTear, FaShieldAlt } from 'react-icons/fa';
import { IoHappy } from 'react-icons/io5';

export default {
  title: 'Who Can Benefit from Root Canal Treatment?',
  description: 'Root canal treatment is beneficial for various individuals facing specific dental issues:',
  content: [
    {
      id: 1,
      icon: <FaTooth className='h-12 w-12 text-teal' />,
      header: 'Anyone with Severe Tooth Pain',
      text: 'If you are experiencing significant tooth pain or sensitivity, a root canal can relieve discomfort and save the tooth.',
    },
    {
      id: 2,
      icon: <FaSadTear className='h-12 w-12 text-teal' />,
      header: 'Patients with Infected Teeth',
      text: 'For teeth with deep decay or infection, a root canal treatment can address the infection and prevent further complications.',
    },
    {
      id: 3,
      icon: <FaShieldAlt className='h-12 w-12 text-teal' />,
      header: 'Those with Cracked or Damaged Teeth',
      text: 'If your tooth is cracked or severely damaged, a root canal can restore its health and function, preventing the need for extraction.',
    },
    {
      id: 4,
      icon: <IoHappy className='h-12 w-12 text-teal' />,
      header: 'Individuals Seeking Long-Term Tooth Preservation',
      text: 'For those looking to maintain their natural teeth and avoid extractions, a root canal treatment is a valuable option.',
    },
  ],
};
