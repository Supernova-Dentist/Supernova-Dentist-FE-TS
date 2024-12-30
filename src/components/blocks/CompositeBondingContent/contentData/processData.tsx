import Image from 'next/image';

export default {
  title: 'Your Composite Bonding Journey',
  description:
    'At Supernova Dental, we offer a simple and comfortable composite bonding process to help you achieve a beautiful smile.',
  stepContent: [
    {
      id: 1,
      image: '/assets/images/composite-bonding-process.jpg',
      header: 'Consultation',
      text: 'We start by discussing your goals and assessing your dental health to determine if composite bonding is right for you.',
    },
    {
      id: 2,
      image: '/assets/images/composite-bonding-process.jpg',
      header: 'Preparation',
      text: 'Your teeth are cleaned and prepared to ensure the bonding material bonds securely and seamlessly.',
    },
    {
      id: 3,
      image: '/assets/images/composite-bonding-process.jpg',
      header: 'Application',
      text: 'The composite resin is applied and shaped to match your teeth’s natural contours, then cured using a special light for durability.',
    },
  ],
  timelineData: [
    {
      title: 'Consultation',
      content: (
        <div>
          <p className='text-sm md:text-md lg:text-lg font-normal mb-8'>
            We discuss your aesthetic goals and assess whether composite bonding is the right solution for you.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/assets/images/composite-bonding-consultation.jpg'
              alt='Consultation'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow'
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Preparation and Shade Matching',
      content: (
        <div>
          <p className='text-sm md:text-md lg:text-lg font-normal mb-8'>
            We prepare your teeth and select the perfect shade of composite resin for a seamless, natural look.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/assets/images/composite-bonding-preparation.jpg'
              alt='Preparation and Shade Matching'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow'
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Composite Application and Curing',
      content: (
        <div>
          <p className='text-sm md:text-md lg:text-lg font-normal mb-8'>
            The resin is applied, sculpted to shape, and cured with a special light to ensure lasting results.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/assets/images/composite-bonding-application.jpg'
              alt='Composite Application'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow'
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Finishing Touches',
      content: (
        <div>
          <p className='text-sm md:text-md lg:text-lg font-normal mb-8'>
            Finally, we polish the bonded teeth to a smooth finish and make adjustments for optimal comfort and
            appearance.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/assets/images/composite-bonding-finishing.jpg'
              alt='Finishing Touches'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow'
            />
          </div>
        </div>
      ),
    },
  ],
};
