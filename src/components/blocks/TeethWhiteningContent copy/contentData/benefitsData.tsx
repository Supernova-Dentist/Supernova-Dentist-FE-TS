import { FaBusinessTime } from 'react-icons/fa';
import { GiDiamondRing } from 'react-icons/gi';
import { IoHappy } from 'react-icons/io5';

export default {
  title: 'How Teeth Whitening Can Benefit You',
  description:
    'Professional teeth whitening is ideal for anyone who wants to enhance their confidence and enjoy a naturally brighter smile:',
  content: [
    {
      id: 1,
      icon: <IoHappy className='h-12 w-12 text-gold' />,
      header: 'Everyday Confidence',
      text: 'A brighter smile can help you feel more comfortable and self-assured in your daily life — whether at work, socialising, or simply smiling for photos.',
    },
    {
      id: 2,
      icon: <FaBusinessTime className='h-12 w-12 text-gold' />,
      header: 'Professionals',
      text: 'For those in client-facing or presentation roles, a brighter smile can boost confidence and help you feel your best when making a great first impression.',
    },
    {
      id: 3,
      icon: <GiDiamondRing className='h-12 w-12 text-gold' />,
      header: 'Weddings & Special Occasions',
      text: 'Look and feel your best on your special day. Teeth whitening helps ensure your smile is radiant and photo-ready for weddings, events, and celebrations.',
    },
  ],
};
