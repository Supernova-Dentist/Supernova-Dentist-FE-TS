import ScrollVideoPlayer from '@/components/ScrollVideoPlayer/ScrollVideoPlayer';
import { SparklesPreview } from '@/components/SparklesPreview/SparklesPreview';
import dynamic from 'next/dynamic';
import CtaButtons from '../Cta/CtaButtons';
import { SlideTabsExample } from '../SlideTabs/SlideTabs';
import { BubbleText } from './Utils/BubbleText';
const AuroraHero = dynamic(async () => await import('../AuroraHero/AuroraHero'), {
  ssr: false,
});

export default function Welcome() {
  return (
    <div id='welcome' className='flex flex-col min-h-[100vh]'>
      <AuroraHero />
    </div>
  );
}
