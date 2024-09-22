import { SparklesPreview } from '@/components/SparklesPreview/SparklesPreview';
import CtaButtons from '../Cta/CtaButtons';
import { SlideTabsExample } from '../SlideTabs/SlideTabs';
import { BubbleText } from './Utils/BubbleText';
import ScrollVideoPlayer from '@/components/ScrollVideoPlayer/ScrollVideoPlayer';
import dynamic from 'next/dynamic';
const AuroraHero = dynamic(async () => await import('../AuroraHero/AuroraHero'), {
  ssr: false,
});

export default function Welcome() {
  return (
    <div className='flex flex-col min-h-[100vh]'>
      <AuroraHero />
    </div>
  );
}
