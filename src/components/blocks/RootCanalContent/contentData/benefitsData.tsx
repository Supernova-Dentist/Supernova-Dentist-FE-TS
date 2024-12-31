import { FaTooth, FaSadTear, FaExclamationTriangle } from 'react-icons/fa';

export default {
  title: 'Who Can Benefit from Root Canal Treatment?',
  description:
    'Root canal treatment can help restore your dental health and relieve discomfort for those facing specific dental challenges:',
  content: [
    {
      id: 1,
      icon: <FaTooth className='h-12 w-12 text-gold' />,
      header: 'Anyone Experiencing Severe Tooth Pain',
      text: 'If you’re dealing with persistent tooth pain or sensitivity, a root canal can provide much-needed relief while saving your tooth from extraction.',
    },
    {
      id: 2,
      icon: <FaSadTear className='h-12 w-12 text-gold' />,
      header: 'Patients with Infected or Decayed Teeth',
      text: 'Root canal treatment is essential for treating deeply decayed or infected teeth, addressing the infection and preventing further damage to your oral health.',
    },
    {
      id: 3,
      icon: <FaExclamationTriangle className='h-12 w-12 text-gold' />,
      header: 'Those with Cracked or Damaged Teeth',
      text: 'A root canal can restore cracked or severely damaged teeth, helping to preserve their function and appearance, avoiding the need for extraction.',
    },
  ],
};
