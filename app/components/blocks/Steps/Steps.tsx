import Button from '@/components/Button/Button';
import Image from 'next/image';

type Step = {
  id: number;
  image: string;
  title: string;
};

const stepsData: Step[] = [
  {
    id: 1,
    image: '/assets/front-office-skyline-dental.png',
    title: 'Schedule an exam',
  },
  {
    id: 2,
    image: '/assets/patient-exam-skyline-dental.png',
    title: 'Speak with a dentist about your goals',
  },
  {
    id: 3,
    image: '/assets/big-smiles-skyline-dental.png',
    title: 'Create a plan and start your smile journey',
  },
];

export default function Steps() {
  return (
    <section className='flex flex-col items-center gap-6 my-16 px-8'>
      <h3 className='uppercase text-2xl font-semibold text-center'>
        3 simple steps to achieving your best smile
      </h3>
      <div className='flex flex-wrap gap-8 justify-evenly w-full'>
        {stepsData.map((step: Step) => (
          <div
            key={step.title}
            className='flex flex-col flex-1 justify-center items-center gap-4 h-full'
          >
            <div className='relative'>
              <Image src={step.image} alt={step.title} width={400} height={300} />
              <div className='rounded-full text-2xl text-slate-50 bg-[#C29470] absolute bottom-0 translate-y-1/2 left-1/2 w-[3.5rem] h-[3.5rem] flex items-center justify-center -translate-x-1/2'>
                {step.id}
              </div>
            </div>
            <p className='text-2xl text-slate-600 mt-8 w-[350px] text-center'>{step.title}</p>
          </div>
        ))}
      </div>
      <Button text='Request Appointment' className='px-8 py-2 bg-[#C29470] uppercase mt-8' />
    </section>
  );
}
