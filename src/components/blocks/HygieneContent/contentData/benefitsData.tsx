import { FaTooth } from 'react-icons/fa';
import { GiToothbrush } from 'react-icons/gi';
import { IoHappy } from 'react-icons/io5';

export default {
  title: 'How Hygiene Treatments Benefit You',
  description:
    'Regular hygiene appointments are essential for maintaining a healthy mouth and preventing dental issues:',
  content: [
    {
      id: 1,
      icon: <GiToothbrush className='h-12 w-12 text-gold' />,
      header: 'Preventative Care',
      text: 'Professional cleanings remove plaque and tartar buildup, reducing the risk of cavities and gum disease.',
    },
    {
      id: 2,
      icon: <FaTooth className='h-12 w-12 text-gold' />,
      header: 'Brighter Smile',
      text: 'Polishing helps remove stains from coffee, tea, and other foods, leaving your teeth looking fresh and clean.',
    },
    {
      id: 3,
      icon: <IoHappy className='h-12 w-12 text-gold' />,
      header: 'Fresh Breath',
      text: 'Hygiene treatments eliminate bacteria that cause bad breath, keeping your mouth feeling fresh and healthy.',
    },
  ],
};
