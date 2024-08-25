import { FaBriefcase, FaUsers } from 'react-icons/fa6';
import { IoHappy } from 'react-icons/io5';

export default {
  title: 'Who Can Benefit from a General Checkup?',
  description: 'General checkups are essential for everyone, helping to maintain overall health and well-being:',
  content: [
    {
      id: 1,
      icon: <FaUsers className='h-12 w-12 text-gold' />,
      header: 'Everyone',
      text: 'Regular checkups are crucial for all individuals, regardless of age or lifestyle, to monitor health and catch potential issues early.',
    },
    {
      id: 2,
      icon: <IoHappy className='h-12 w-12 text-gold' />,
      header: 'Teenagers',
      text: 'Checkups for teenagers are essential for tracking growth and development, ensuring they stay healthy during these key years.',
    },
    {
      id: 3,
      icon: <FaBriefcase className='h-12 w-12 text-gold' />,
      header: 'Professionals',
      text: 'Busy professionals benefit from regular checkups to manage stress-related health issues and maintain their well-being amidst a hectic schedule.',
    },
  ],
};
