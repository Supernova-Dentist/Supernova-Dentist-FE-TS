import { FaExclamationCircle, FaAmbulance, FaHeadSideCough } from 'react-icons/fa';

export default {
  title: 'Who Can Benefit from an Emergency Dental Appointment?',
  description: 'Emergency dental appointments are crucial for addressing urgent and critical dental issues:',
  content: [
    {
      id: 1,
      icon: <FaExclamationCircle className='h-12 w-12 text-red-600' />,
      header: 'Severe Tooth Pain',
      text: 'For individuals experiencing intense or persistent tooth pain, immediate care is needed to relieve discomfort and address the underlying issue.',
    },
    {
      id: 2,
      icon: <FaAmbulance className='h-12 w-12 text-red-600' />,
      header: 'Dental Trauma',
      text: 'Patients with injuries such as broken or knocked-out teeth can benefit from urgent treatment to repair and stabilize their dental health.',
    },
    {
      id: 3,
      icon: <FaHeadSideCough className='h-12 w-12 text-red-600' />,
      header: 'Signs of Infection',
      text: 'Those showing signs of infection, such as swelling or abscesses, require immediate care to manage and prevent the spread of the infection.',
    },
  ],
};
