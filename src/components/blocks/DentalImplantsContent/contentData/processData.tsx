import Image from 'next/image';

export default {
  title: 'Your Dental Implant Journey',
  description:
    'At Supernova Dental, we guide you every step of the way to ensure a comfortable and successful dental implant experience:',
  timelineData: [
    {
      title: 'Consultation',
      content: (
        <div>
          <p className='text-sm md:text-md lg:text-lg font-normal mb-8'>
            Your journey begins with a consultation to assess your oral health and discuss your goals. We’ll create a
            plan to achieve the best results for you.
          </p>
          <Image
            src='/assets/images/dental-implants-consultation.jpg'
            alt='Consultation'
            width={500}
            height={500}
            className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
          />
        </div>
      ),
    },
    {
      title: 'Planning',
      content: (
        <div>
          <p className='text-sm md:text-md lg:text-lg font-normal mb-8'>
            We use advanced imaging and detailed planning to ensure your implants are placed precisely where needed.
          </p>
          <Image
            src='/assets/images/dental-implants-planning.jpg'
            alt='Planning'
            width={500}
            height={500}
            className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
          />
        </div>
      ),
    },
    {
      title: 'Placement',
      content: (
        <div>
          <p className='text-sm md:text-md lg:text-lg font-normal mb-8'>
            Your implant is surgically placed with precision under local anesthesia for a seamless experience.
          </p>
          <Image
            src='/assets/images/dental-implants-surgery.jpg'
            alt='Placement'
            width={500}
            height={500}
            className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
          />
        </div>
      ),
    },
    {
      title: 'Healing',
      content: (
        <div>
          <p className='text-sm md:text-md lg:text-lg font-normal mb-8'>
            The implant integrates with your jawbone during healing. We monitor your progress to ensure everything is on
            track.
          </p>
          <Image
            src='/assets/images/dental-implants-healing.jpg'
            alt='Healing'
            width={500}
            height={500}
            className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
          />
        </div>
      ),
    },
    {
      title: 'Restoration',
      content: (
        <div>
          <p className='text-sm md:text-md lg:text-lg font-normal mb-8'>
            The final restoration is placed, completing your implant and restoring your smile’s function and beauty.
          </p>
          <Image
            src='/assets/images/dental-implants-final-restoration.jpg'
            alt='Restoration'
            width={500}
            height={500}
            className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
          />
        </div>
      ),
    },
  ],
};
