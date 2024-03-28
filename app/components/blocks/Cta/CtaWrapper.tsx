import CtaButtons from './CtaButtons';
import CtaText from './CtaText';

export default function CtaWrapper() {
  return (
    <div className='flex flex-col gap-8 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-8'>
      <CtaText />
      <CtaButtons />
    </div>
  );
}
