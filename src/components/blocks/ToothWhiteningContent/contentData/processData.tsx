import Image from 'next/image';

export default {
  title: 'Your Personalized Tooth Whitening Journey',
  description:
    'At Supernova Dental, we offer a safe and effective whitening process for a brighter, more confident smile. Here’s what to expect:',
  stepContent: [
    {
      id: 1,
      image: '/assets/images/composite-bonding-process.jpg',
      header: 'Consultation',
      text: 'We’ll assess your whitening goals and dental health, then create a customized treatment plan.',
    },
    {
      id: 2,
      image: '/assets/images/composite-bonding-process.jpg',
      header: 'Preparation',
      text: 'We clean your teeth thoroughly and apply a protective gel to ensure comfort during treatment.',
    },
    {
      id: 3,
      image: '/assets/images/composite-bonding-process.jpg',
      header: 'Application',
      text: 'We apply whitening gel and activate it with light, achieving visible results in one session.',
    },
  ],
  timelineData: [
    {
      title: 'Initial Consultation',
      content: (
        <div>
          <p className='text-black text-sm md:text-md lg:text-lg font-normal mb-8'>
            We discuss your goals and evaluate your dental health to create the best whitening plan.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/assets/images/tooth-whitening-consultation.jpg'
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
      title: 'Preparation',
      content: (
        <div>
          <p className=' text-sm md:text-md lg:text-lg font-normal mb-8'>
            We clean your teeth to remove plaque, ensuring the whitening gel works effectively.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/assets/images/tooth-whitening-preparation.jpg'
              alt='Preparation'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Whitening Treatment',
      content: (
        <div>
          <p className=' text-sm md:text-md lg:text-lg font-normal mb-8'>
            A professional whitening gel is applied and activated with light for visible results in one session.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/assets/images/tooth-whitening-treatment.jpg'
              alt='Whitening Treatment'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Aftercare and Follow-Up',
      content: (
        <div>
          <p className=' text-sm md:text-md lg:text-lg font-normal mb-8'>
            We provide aftercare instructions and schedule a follow-up to ensure satisfaction with the results.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/assets/images/tooth-whitening-aftercare.jpg'
              alt='Aftercare and Follow-Up'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </div>
        </div>
      ),
    },
  ],
};
