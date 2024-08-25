import { FaTooth, FaShieldAlt } from 'react-icons/fa';
import { IoMedicalOutline } from 'react-icons/io5';

export default {
  title: 'Who Can Benefit from Dental Fillings?',
  description: 'Dental fillings are beneficial for various individuals, addressing different oral health needs:',
  content: [
    {
      id: 1,
      icon: <FaTooth className='h-12 w-12 text-teal' />,
      header: 'Anyone with Cavities',
      text: 'Individuals with cavities or dental decay can benefit from fillings to restore tooth function and prevent further decay.',
    },
    {
      id: 2,
      icon: <IoMedicalOutline className='h-12 w-12 text-teal' />,
      header: 'Patients with Cracked Teeth',
      text: 'People with cracked or broken teeth can use fillings to repair damage and maintain the tooth’s structural integrity.',
    },
    {
      id: 3,
      icon: <FaShieldAlt className='h-12 w-12 text-teal' />,
      header: 'Those Seeking Preventative Care',
      text: 'Fillings can be used proactively to address small imperfections or early signs of decay before they become more severe.',
    },
  ],
};
