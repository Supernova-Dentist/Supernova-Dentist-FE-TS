import { FaBusinessTime } from 'react-icons/fa';
import { IoHappy } from 'react-icons/io5';
import { GiLinkedRings } from "react-icons/gi";

export default {
  title: 'Who Can Benefit from Invisalign?',
  description: 'Invisalign is a versatile treatment suitable for almost everyone looking to improve their smile:',
  content: [
    {
      id: 1,
      icon: <IoHappy className='h-12 w-12 text-gold' />,
      header: 'Teenagers',
      text: 'Invisalign provides a discreet and comfortable option for teenagers, allowing them to straighten their teeth without the visibility of traditional braces.',
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
      text: 'For weddings, reunions, or any special occasion, Invisalign ensures you can confidently smile for photos and celebrations without compromising your appearance.',
    },
  ],
};
