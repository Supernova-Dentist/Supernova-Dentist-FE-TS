import Image from 'next/image';

export default {
  title: 'Your Tooth Whitening Process',
  description:
    "Our professional tooth whitening process is designed to safely and effectively brighten your smile. Here's how we ensure a smooth and successful treatment:",
  stepContent: [
    {
      id: 1,
      image: '/assets/images/composite-bonding-process.jpg',
      header: 'Consultation',
      text: "During your initial consultation, we'll assess your dental health and discuss your whitening goals to determine the best treatment plan for you.",
    },
    {
      id: 2,
      image: '/assets/images/composite-bonding-process.jpg',
      header: 'Preparation',
      text: 'We prepare your teeth by thoroughly cleaning them and, if needed, applying a protective gel to safeguard your gums during the whitening process.',
    },
    {
      id: 3,
      image: '/assets/images/composite-bonding-process.jpg',
      header: 'Application',
      text: 'The whitening gel is applied to your teeth and activated using a special light or laser, which accelerates the whitening process for noticeable results.',
    },
  ],
  timelineData: [
    {
      title: 'Initial Consultation',
      content: (
        <div>
          <p className='text-cream text-xs md:text-sm font-normal mb-8'>
            Your journey starts with a consultation to discuss your whitening goals and evaluate your dental health. We
            will determine the best approach to achieve the desired results.
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
          <p className='text-cream text-xs md:text-sm font-normal mb-8'>
            Your teeth are thoroughly cleaned to remove any buildup of plaque or tartar. This step is crucial for
            ensuring that the whitening treatment is effective and evenly applied.
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
          <p className='text-cream text-xs md:text-sm font-normal mb-8'>
            We apply a professional whitening gel to your teeth and use a special light or laser to activate the gel.
            This process significantly brightens your smile in just one session.
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
          <p className='text-cream text-xs md:text-sm font-normal mb-8'>
            We provide you with aftercare instructions to maintain your bright smile and schedule a follow-up
            appointment to ensure that you are satisfied with the results.
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
