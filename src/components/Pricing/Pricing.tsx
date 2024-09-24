import Image from 'next/image';
import PricingCards from './PricingCards';
import PricingTabs from './PricingTabs';

export default function Pricing() {
  return (
    <section className='px-4 sm:px-8 md:px-16 lg:px-24 mx-auto text-gray-900 my-20'>
      <div className='flex justify-center flex-col items-center'>
        <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold text-center max-w-[500px] mb-8'>
          Pick a plan thats right for you
        </h1>
        <PricingTabs />
        <div className='absolute -z-10'>
          <Image
            className='relative -z-10 opacity-40 top-[-40px]'
            src='/assets/svgs/bg-outlines.svg'
            alt='outline'
            width={960}
            height={380}
          />
        </div>
      </div>
      <div className='flex justify-center w-full max-xl:overflow-auto pb-10'>
        <PricingCards />
      </div>
    </section>
  );
}
