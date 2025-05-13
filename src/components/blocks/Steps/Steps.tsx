import Button from '@/components/Button/Button';
import { DentallyPortal } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

type Step = {
  id: number;
  image: string;
  title: string;
};

const stepsData: Step[] = [
  {
    id: 1,
    image: '/assets/images/front-office-skyline-dental.png',
    title: 'Schedule an exam',
  },
  {
    id: 2,
    image: '/assets/images/patient-exam-skyline-dental.png',
    title: 'Speak with a dentist about your goals',
  },
  {
    id: 3,
    image: '/assets/images/big-smiles-skyline-dental.png',
    title: 'Create a plan and start your smile journey',
  },
];

export default function Steps() {
  return (
    <section className='flex flex-col items-center gap-6 my-16 px-4 sm:px-8'>
      <h3 className='uppercase text-2xl font-semibold text-center'>3 simple steps to achieving your best smile</h3>
      <div className='flex flex-col items-center gap-8 w-full sm:flex-row sm:items-start sm:justify-center'>
        {stepsData.map((step: Step) => (
          <div key={step.title} className='flex flex-col items-center gap-4 max-w-xs w-full sm:max-w-xs'>
            <div className='relative'>
              <Image src={step.image} alt={step.title} width={400} height={300} className='w-full h-auto' />
              <div
                className='absolute bottom-0 translate-y-1/2 left-1/2 transform -translate-x-1/2 flex items-center justify-center rounded-full bg-gold text-slate-50
                w-12 h-12 md:w-14 md:h-14 text-xl sm:text-2xl md:text-3xl'
              >
                {step.id}
              </div>
            </div>
            <p className='text-lg sm:text-xl md:text-2xl text-lightGrey mt-6 text-center'>{step.title}</p>
          </div>
        ))}
      </div>
      <Link target='_blank' href={`${DentallyPortal}`}>
        <Button text='Book Now' className='px-8 py-2 bg-gold uppercase mt-8' />
      </Link>
    </section>
  );
}
