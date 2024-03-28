import Button from '@/components/Button/Button';

export default function CtaButtons() {
  return (
    <div className='flex flex-wrap gap-6 items-center justify-center'>
      <Button
        className='uppercase text-xl font-semibold bg-[#C29470] text-black px-4 py-2 w-[25rem]'
        text='Request appointment'
      />
      <Button
        className='uppercase text-xl font-semibold bg-[#C29470] text-black px-4 py-2 w-[25rem]'
        text='(01785) 555-555'
      />
    </div>
  );
}
