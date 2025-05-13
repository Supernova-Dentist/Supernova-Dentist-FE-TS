import Image from 'next/image';
import React from 'react';
import { Timeline } from '@/components/ui/timeline';

export function ServiceTimeline() {
  const data = [
    {
      title: 'Initial Consultation (Week 1)',
      content: (
        <div>
          <p className=' text-sm md:text-md lg:text-lg font-normal mb-8'>
            Your journey begins with a consultation to discuss your goals and assess your dental health. The dentist
            will take digital scans and X-rays to create a customized treatment plan.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/assets/images/consultation.jpg'
              alt='Initial Consultation'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Receiving Your Aligners (Week 2)',
      content: (
        <div>
          <p className=' text-sm md:text-md lg:text-lg font-normal mb-8'>
            Once your aligners are ready, you will receive them along with instructions on how to wear and care for
            them. Your dentist will check the fit and make adjustments if necessary.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/assets/images/aligners.jpg'
              alt='Receiving Aligners'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Progress Check-ups (Every 6-8 Weeks)',
      content: (
        <div>
          <p className=' text-sm md:text-md lg:text-lg font-normal mb-8'>
            Regular check-ups are scheduled to monitor your progress. Your dentist will ensure that your teeth are
            moving according to the treatment plan and make adjustments as needed.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/assets/images/checkup.jpg'
              alt='Progress Check-ups'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Final Stages and Retainers (Month 12+)',
      content: (
        <div>
          <p className=' text-sm md:text-md lg:text-lg font-normal mb-8'>
            As you near the end of your treatment, you will receive your final set of aligners. After completing the
            treatment, you will be given retainers to maintain the new position of your teeth.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/assets/images/retainers.jpg'
              alt='Final Stages'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className='w-full'>
      <Timeline data={data} />
    </div>
  );
}
