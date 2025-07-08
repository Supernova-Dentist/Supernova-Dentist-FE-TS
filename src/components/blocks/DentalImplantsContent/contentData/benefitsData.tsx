import { FaCheck, FaFaceSmile, FaFaceSmileBeam } from 'react-icons/fa6';

export default {
  title: 'Who Can Benefit from Dental Implants?',
  description:
    'Dental implants are a reliable, long-lasting solution for replacing missing teeth that can significantly improve your oral health and quality of life. You may benefit from dental implants if you’re looking to:',
  content: [
    {
      id: 1,
      icon: <FaFaceSmile className='h-12 w-12 text-gold' />,
      header: 'Restore Your Confidence',
      text: 'Whether replacing a single tooth or multiple, implants provide a natural-looking solution that restores both function and appearance.',
    },
    {
      id: 2,
      icon: <FaCheck className='h-12 w-12 text-gold' />,
      header: 'Eat and Speak with Ease',
      text: 'Enjoy the freedom to eat tougher foods and speak clearly, implants offer strong, stable support even for dentures.',
    },
    {
      id: 3,
      icon: <FaFaceSmileBeam className='h-12 w-12 text-gold' />,
      header: 'Protect Long-Term Oral Health',
      text: 'Implants help preserve jawbone density, prevent bone loss, and support the overall stability of your remaining teeth.',
    },
  ],
};
