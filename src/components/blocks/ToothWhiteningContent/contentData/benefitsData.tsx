import { FaStar } from 'react-icons/fa6';
import { IoHappy } from 'react-icons/io5';
import { MdCoffeeMaker } from 'react-icons/md';

export default [
  {
    id: 1,
    icon: <IoHappy className='h-12 w-12 text-gold' />,
    header: 'Brighten Your Smile',
    text: "If you're looking to brighten your smile and reduce the appearance of stains and discoloration, tooth whitening can offer a dramatic improvement and enhance your overall appearance.",
  },
  {
    id: 2,
    icon: <MdCoffeeMaker className='h-12 w-12 text-gold' />,
    header: 'Remove Stains',
    text: 'Whether caused by coffee, tea, red wine, or tobacco, tooth whitening can effectively address and remove stubborn stains, giving your teeth a cleaner, brighter look.',
  },
  {
    id: 3,
    icon: <FaStar className='h-12 w-12 text-gold' />,
    header: 'Quick Results',
    text: 'With in-office treatments, you can see significant results in just one visit. At-home options also offer flexibility with noticeable improvements over time.',
  },
];
