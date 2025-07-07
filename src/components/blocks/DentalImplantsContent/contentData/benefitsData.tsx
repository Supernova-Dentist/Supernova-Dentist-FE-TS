import { FaCheck, FaFaceSmile, FaFaceSmileBeam } from 'react-icons/fa6';

export default {
  title: 'Who Can Benefit from Dental Implants?',
  description:
    'Dental implants are a reliable, long-lasting solution for replacing missing teeth that can significantly improve your oral health and quality of life. They are suitable for a wide range of patients, including those who:',
  content: [
    {
      id: 1,
      icon: <FaFaceSmile className='h-12 w-12 text-gold' />,
      header: 'Need to Restore Missing Teeth',
      text: 'Whether you are missing one tooth or several, dental implants offer a natural-looking, durable replacement that restores both function and your smile’s appearance.',
    },
    {
      id: 2,
      icon: <FaCheck className='h-12 w-12 text-gold' />,
      header: 'Require Support for Dentures',
      text: 'Implants provide a stable foundation for dentures, reducing movement and discomfort, and enhancing your ability to eat and speak with confidence.',
    },
    {
      id: 3,
      icon: <FaFaceSmileBeam className='h-12 w-12 text-gold' />,
      header: 'Want to Improve Oral Health',
      text: 'By preserving jawbone structure and preventing bone loss, dental implants help maintain overall oral health and the stability of your remaining natural teeth.',
    },
  ],
};
