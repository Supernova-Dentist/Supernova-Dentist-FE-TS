import { FaBriefcase, FaCakeCandles, FaFaceSmileBeam, FaPersonWalking, FaPlane } from 'react-icons/fa6';
import { IoHappy } from 'react-icons/io5';

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
      icon: <FaFaceSmileBeam className='h-12 w-12 text-gold' />,
      header: 'Adults',
      text: ' Many adults prefer Invisalign to improve their smiles while maintaining a professional appearance. The clear aligners fit seamlessly into their busy lives.',
    },
    {
      id: 3,
      icon: <FaPersonWalking className='h-12 w-12 text-gold' />,
      header: 'Active Individuals',
      text: 'For those with active lifestyles, Invisalign aligners are perfect as they are comfortable, removable, and allow you to continue sports and activities without interruption.',
    },
    {
      id: 4,
      icon: <FaBriefcase className='h-12 w-12 text-gold' />,
      header: 'Professionals',
      text: 'Professionals who need to maintain a polished and professional look find Invisalign to be a great solution for discreetly achieving a perfect smile.',
    },
    {
      id: 5,
      icon: <FaPlane className='h-12 w-12 text-gold' />,
      header: 'Frequent Travelers',
      text: 'For frequent travelers, Invisalign aligners offer convenience and flexibility, making it easy to maintain treatment while on the go.',
    },
    {
      id: 6,
      icon: <FaCakeCandles className='h-12 w-12 text-gold' />,
      header: 'Special Occasions',
      text: 'Whether it&apos;s a wedding, reunion, or other special event, Invisalign allows you to improve your smile without compromising your appearance for photos and celebrations.',
    },
  ],
};
