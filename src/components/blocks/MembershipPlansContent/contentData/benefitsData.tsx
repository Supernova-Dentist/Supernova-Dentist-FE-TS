import { FaCalendarCheck, FaPoundSign, FaShieldAlt } from 'react-icons/fa';

export default {
  title: 'The Benefits of Dental Membership Plans',
  description:
    'Our dental membership plans make it easier to maintain regular dental care while helping you budget for your routine appointments:',
  content: [
    {
      id: 1,
      icon: <FaPoundSign className='h-12 w-12 text-gold' />,
      header: 'Simple Monthly Payments',
      text: 'Spread the cost of your routine dental care with an affordable monthly payment, making it easier to budget for your dental health.',
    },
    {
      id: 2,
      icon: <FaCalendarCheck className='h-12 w-12 text-gold' />,
      header: 'Regular Preventative Care',
      text: 'Keep up with routine dental examinations and hygiene appointments to help maintain healthy teeth and gums and identify potential problems early.',
    },
    {
      id: 3,
      icon: <FaShieldAlt className='h-12 w-12 text-gold' />,
      header: 'Added Peace of Mind',
      text: 'Enjoy additional reassurance with emergency dental cover included as part of your membership, helping you feel supported when you need dental care.',
    },
  ],
};
