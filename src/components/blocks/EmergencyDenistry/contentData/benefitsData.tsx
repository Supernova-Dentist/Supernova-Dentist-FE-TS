import { FaRegHospital } from 'react-icons/fa';
import { GiBrokenHeart } from 'react-icons/gi';
import { IoMdAlert } from 'react-icons/io';

export default {
  title: 'How Emergency Dentistry Can Benefit You',
  description:
    'Emergency dentistry provides quick and effective solutions for urgent dental issues, ensuring you get the relief you need when you need it most:',
  content: [
    {
      id: 1,
      icon: <IoMdAlert className='h-12 w-12 text-red-600' />,
      header: 'Severe Toothaches',
      text: 'Dental pain can be excruciating and debilitating. Emergency dentistry provides fast pain relief and treatment to address the cause of your toothache and restore comfort.',
    },
    {
      id: 2,
      icon: <FaRegHospital className='h-12 w-12 text-red-600' />,
      header: 'Accidents & Injuries',
      text: 'If you’ve suffered a dental injury whether it’s a chipped tooth, a knocked-out tooth, or a broken filling, emergency care can address these issues quickly, preventing further damage and restoring your smile.',
    },
    {
      id: 3,
      icon: <GiBrokenHeart className='h-12 w-12 text-red-600' />,
      header: 'Urgent Situations',
      text: 'From sudden swelling to lost fillings, emergency dental services are here to help in a variety of urgent dental situations, ensuring you receive prompt treatment and avoid complications.',
    },
  ],
};
