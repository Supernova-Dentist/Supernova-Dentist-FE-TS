import Button from '@/components/Button/Button';

export default function CtaButtons() {
  return (
    <div className='flex flex-wrap gap-6 items-center justify-center'>
      <Button
        className='hover:opacity-90 transition-opacity duration-150 uppercase text-xl font-semibold bg-gold text-black px-4 py-2 w-[25rem]'
        text='Request appointment'
      />
      <Button
        className='hover:opacity-90 transition-opacity duration-150 uppercase text-xl font-semibold bg-gold text-black px-4 py-2 w-[25rem]'
        text='Call (01785) 555-555'
      />
    </div>
  );
}
