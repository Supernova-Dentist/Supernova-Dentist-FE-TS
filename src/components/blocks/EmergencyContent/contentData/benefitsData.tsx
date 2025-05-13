import { FaAmbulance, FaHeadSideCough, FaExclamationTriangle } from 'react-icons/fa';

export default {
  title: 'When to Seek an Emergency Dental Appointment',
  description:
    'Emergency dental appointments are essential for addressing urgent issues that require immediate attention:',
  content: [
    {
      id: 1,
      icon: <FaExclamationTriangle className='h-12 w-12 text-gold' />,
      header: 'Severe Tooth Pain',
      text: 'Intense or persistent tooth pain needs urgent attention to relieve discomfort and identify the cause of the pain.',
    },
    {
      id: 2,
      icon: <FaAmbulance className='h-12 w-12 text-gold' />,
      header: 'Dental Trauma',
      text: 'Injuries like broken or knocked-out teeth require immediate care to repair the damage and preserve your dental health.',
    },
    {
      id: 3,
      icon: <FaHeadSideCough className='h-12 w-12 text-gold' />,
      header: 'Signs of Infection',
      text: 'If you notice swelling, abscesses, or other infection symptoms, it’s crucial to seek care immediately to prevent complications.',
    },
  ],
};
