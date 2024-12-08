import Image from 'next/image';

export default {
  title: 'Your Dental Implant Process',
  description:
    "Our comprehensive dental implant process is designed to ensure a successful and comfortable experience. Here's how we guide you through each step:",
  stepContent: [
    {
      id: 1,
      image: '/assets/images/composite-bonding-process.jpg',
      header: 'Consultation',
      text: 'During your initial consultation, we will evaluate your oral health, discuss your implant options, and create a customized treatment plan to meet your needs.',
    },
    {
      id: 2,
      image: '/assets/images/composite-bonding-process.jpg',
      header: 'Preparation',
      text: 'We prepare for the implant placement by taking detailed scans and possibly performing preliminary procedures to ensure a successful implantation.',
    },
    {
      id: 3,
      image: '/assets/images/composite-bonding-process.jpg',
      header: 'Implant Placement',
      text: 'The dental implant is surgically placed into the jawbone. We use advanced techniques to ensure precision and minimize discomfort.',
    },
    {
      id: 4,
      image: '/assets/images/composite-bonding-process.jpg',
      header: 'Healing & Integration',
      text: 'The implant will need time to integrate with the jawbone. During this healing period, we monitor your progress and provide guidance for optimal recovery.',
    },
    {
      id: 5,
      image: '/assets/images/composite-bonding-process.jpg',
      header: 'Restoration',
      text: 'Once healing is complete, we attach the final restoration, such as a crown or bridge, to the implant. This completes the process, giving you a fully restored smile.',
    },
    {
      id: 6,
      image: '/assets/images/composite-bonding-process.jpg',
      header: 'Completion',
      text: 'Your dental implant journey concludes with a follow-up visit to ensure everything is functioning correctly and to discuss any final adjustments needed for your perfect smile.',
    },
  ],
  timelineData: [
    {
      title: 'Initial Consultation',
      content: (
        <div>
          <p className='text-sm md:text-md lg:text-lg font-normal mb-8'>
            Your journey begins with a comprehensive consultation to assess your oral health and discuss your goals.
            We’ll determine if dental implants are the best option for you and plan the next steps.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/assets/images/dental-implants-consultation.jpg'
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
      title: 'Treatment Planning',
      content: (
        <div>
          <p className=' text-sm md:text-md lg:text-lg font-normal mb-8'>
            Advanced imaging and planning are performed to ensure precise placement of the dental implants. This step is
            crucial for a successful outcome and involves detailed planning.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/assets/images/dental-implants-planning.jpg'
              alt='Treatment Planning'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Implant Placement',
      content: (
        <div>
          <p className=' text-sm md:text-md lg:text-lg font-normal mb-8'>
            The dental implant is surgically placed into the jawbone. This procedure is performed under local anesthesia
            and involves careful placement to ensure proper healing and integration.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/assets/images/dental-implants-surgery.jpg'
              alt='Implant Placement'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Healing Period',
      content: (
        <div>
          <p className=' text-sm md:text-md lg:text-lg font-normal mb-8'>
            After the implant is placed, a healing period is required for the implant to integrate with the jawbone.
            During this time, regular check-ups will ensure proper healing and integration.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/assets/images/dental-implants-healing.jpg'
              alt='Healing Period'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Final Restoration',
      content: (
        <div>
          <p className=' text-sm md:text-md lg:text-lg font-normal mb-8'>
            Once the implant has fully integrated, we place the final restoration (crown, bridge, or denture) onto the
            implant. This final step completes your dental implant procedure and restores your smile.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/assets/images/dental-implants-final-restoration.jpg'
              alt='Final Restoration'
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
