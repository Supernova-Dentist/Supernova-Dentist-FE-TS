import { FaTooth, FaShieldAlt, FaExclamationTriangle } from 'react-icons/fa';

export default {
  title: 'Who Can Benefit from Dental Fillings?',
  description: 'Dental fillings are beneficial for various individuals, addressing different oral health needs:',
  content: [
    {
      id: 1,
      icon: <FaTooth className='h-12 w-12 text-gold' />,
      header: 'Anyone with Cavities',
      text: 'Individuals with cavities or dental decay can benefit from fillings to restore tooth function and prevent further decay.',
    },
    {
      id: 2,
      icon: <FaExclamationTriangle className='h-12 w-12 text-gold' />,
      header: 'Patients with Cracked Teeth',
      text: 'People with cracked or broken teeth can use fillings to repair damage and maintain the tooth’s structural integrity.',
    },
    {
      id: 3,
      icon: <FaShieldAlt className='h-12 w-12 text-gold' />,
      header: 'Those Seeking Preventative Care',
      text: 'Fillings can be used proactively to address small imperfections or early signs of decay before they become more severe.',
    },
  ],
};
