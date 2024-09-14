import Image from 'next/image';

export default {
  title: 'Your Composite Bonding Process',
  description:
    'Our experienced dentists follow a simple and straightforward process to ensure your composite bonding treatment is comfortable and effective:',
  stepContent: [
    {
      id: 1,
      image: '/assets/images/composite-bonding-process.jpg',
      header: 'Consultation',
      text: 'During your initial consultation, we’ll discuss your goals and evaluate your dental health to determine if composite bonding is the right solution for you.',
    },
    {
      id: 2,
      image: '/assets/images/composite-bonding-process.jpg',
      header: 'Preparation',
      text: 'We prepare your teeth by cleaning and etching the surface to ensure the bonding material adheres properly.',
    },
    {
      id: 3,
      image: '/assets/images/composite-bonding-process.jpg',
      header: 'Application',
      text: 'The composite resin is applied and shaped to match the natural contours of your teeth. It is then cured using a special light.',
    },
  ],
  timelineData: [
    {
      title: 'Initial Consultation',
      content: (
        <div>
          <p className='text-cream text-xs md:text-sm font-normal mb-8'>
            Your journey begins with a consultation to discuss your aesthetic goals and evaluate your dental health. We
            will determine if composite bonding is the right treatment for you.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/assets/images/composite-bonding-consultation.jpg'
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
      title: 'Preparation and Shade Matching',
      content: (
        <div>
          <p className='text-cream text-xs md:text-sm font-normal mb-8'>
            We prepare the teeth for bonding and select the appropriate shade of composite resin to match your natural
            teeth. This ensures a seamless and aesthetically pleasing result.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/assets/images/composite-bonding-preparation.jpg'
              alt='Preparation and Shade Matching'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Composite Application and Curing',
      content: (
        <div>
          <p className='text-cream text-xs md:text-sm font-normal mb-8'>
            The composite resin is applied to the teeth, sculpted to the desired shape, and cured with a special light.
            This process ensures that the bonding material is securely attached and long-lasting.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/assets/images/composite-bonding-application.jpg'
              alt='Composite Application and Curing'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Finishing Touches',
      content: (
        <div>
          <p className='text-cream text-xs md:text-sm font-normal mb-8'>
            The final step involves polishing the bonded teeth to ensure a smooth finish and making any necessary
            adjustments to ensure comfort and appearance.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/assets/images/composite-bonding-finishing.jpg'
              alt='Finishing Touches'
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
