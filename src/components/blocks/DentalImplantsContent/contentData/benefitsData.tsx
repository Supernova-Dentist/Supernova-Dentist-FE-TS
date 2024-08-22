import { FaCheck, FaFaceSmile, FaFaceSmileBeam } from 'react-icons/fa6';

export default {
  title: 'Who Can Benefit from Dental Implants?',
  description:
    'Dental implants offer a reliable solution for replacing missing teeth and can significantly enhance your oral health and quality of life. They are ideal for a variety of patients:',
  content: [
    {
      id: 1,
      icon: <FaFaceSmile className='h-12 w-12 text-gold' />,
      header: 'Restore Missing Teeth',
      text: 'If you have one or more missing teeth, dental implants provide a natural-looking and durable replacement, restoring both function and aesthetics.',
    },
    {
      id: 2,
      icon: <FaCheck className='h-12 w-12 text-gold' />,
      header: 'Support for Dentures',
      text: 'Dental implants can support dentures, making them more stable and comfortable, reducing movement, and improving your ability to eat and speak.',
    },
    {
      id: 3,
      icon: <FaFaceSmileBeam className='h-12 w-12 text-gold' />,
      header: 'Improve Oral Health',
      text: 'Implants help maintain the structure of your jawbone and prevent bone loss, which is important for overall oral health and the stability of your remaining teeth.',
    },
  ],
};
