import { FaBusinessTime } from 'react-icons/fa';
import { GiDiamondRing } from 'react-icons/gi';
import { IoHappy } from 'react-icons/io5';

export default {
  title: 'Who Can Benefit From Composite Bonding?',
  description:
    'Composite bonding is a popular cosmetic dental treatment that can quickly improve the appearance of your smile by repairing chips, closing small gaps, and reshaping teeth:',
  content: [
    {
      id: 1,
      icon: <IoHappy className='h-12 w-12 text-gold' />,
      header: 'Everyday Confidence',
      text: 'Composite bonding can instantly enhance your smile by improving the shape, colour, and symmetry of your teeth. A more balanced smile can help you feel more confident in everyday situations, from socialising to photos.',
    },
    {
      id: 2,
      icon: <FaBusinessTime className='h-12 w-12 text-gold' />,
      header: 'Professionals',
      text: 'For people who work in professional or client-facing roles, composite bonding offers a simple way to achieve a more polished and confident smile without extensive dental treatment.',
    },
    {
      id: 3,
      icon: <GiDiamondRing className='h-12 w-12 text-gold' />,
      header: 'Weddings & Special Occasions',
      text: 'Composite bonding is ideal if you want to improve your smile before an important event such as a wedding, holiday, or celebration. It can quickly repair chipped teeth, close small gaps, and create a natural-looking smile that photographs beautifully.',
    },
  ],
};
