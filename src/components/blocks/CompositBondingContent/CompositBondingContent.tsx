import HeroSection from '@/components/HeroSection/HeroSection';
import heroData from './contentData/heroData';

export default function CompositBondingContent() {
  return (
    <>
      <HeroSection data={heroData} />
    </>
  );
}
