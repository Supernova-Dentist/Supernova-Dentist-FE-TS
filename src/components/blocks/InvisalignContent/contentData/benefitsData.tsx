import { FaBusinessTime } from 'react-icons/fa';
import { GiLinkedRings } from 'react-icons/gi';
import { IoHappy } from 'react-icons/io5';

export default {
  title: 'How Invisalign Can Benefit You',
  description: 'Invisalign is a versatile treatment suitable for almost everyone looking to improve their smile:',
  content: [
    {
      id: 1,
      icon: <IoHappy className='h-12 w-12 text-gold' />,
      header: 'Teenagers',
      text: 'Invisalign provides a discreet and comfortable option. This allows for better treatment compliance and less dietary restrictions for growing teenagers.',
    },
    {
      id: 2,
      icon: <FaBusinessTime className='h-12 w-12 text-gold' />,
      header: 'Adults',
      text: 'Many adults prefer Invisalign to improve their smiles while maintaining a professional appearance. The clear aligners fit seamlessly into their busy lives.',
    },
    {
      id: 3,
      icon: <GiLinkedRings className='h-12 w-12 text-gold' />,
      header: 'Weddings & Special Events',
      text: 'For weddings, reunions, or any special occasion, the results with Invisalign ensure you can confidently smile for photos and celebrations without compromising your appearance.',
    },
  ],
};
