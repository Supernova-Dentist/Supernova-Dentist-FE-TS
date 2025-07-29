import { FaCheck, FaPersonRunning, FaShieldHeart } from 'react-icons/fa6';

export default {
  title: 'Who Can Benefit from Sports Mouth Guards?',
  description:
    'Whether you’re an amateur, a professional, or just play for fun, a custom-fitted sports mouth guard helps protect your smile and reduce the risk of serious injury. You’ll benefit from a professionally made mouth guard if you:',
  content: [
    {
      id: 1,
      icon: <FaShieldHeart className='h-12 w-12 text-gold' />,
      header: 'Play Contact Sports',
      text: 'From rugby to boxing, custom guards help absorb impact and protect teeth, gums, and jaws from trauma.',
    },
    {
      id: 2,
      icon: <FaCheck className='h-12 w-12 text-gold' />,
      header: 'Want a Comfortable Fit',
      text: 'Our digital scan process means no messy impressions just precise, slimline guards that let you breathe and speak easily.',
    },
    {
      id: 3,
      icon: <FaPersonRunning className='h-12 w-12 text-gold' />,
      header: 'Train or Compete Regularly',
      text: 'Whether you’re a youth athlete or elite competitor, a custom-fit guard reduces injury risk and lets you perform at your best.',
    },
  ],
};
