import DrSaraDBanuriWaterDropHero from '@/components/WaterDropHeros/DrSaraDBanuriWaterDropHero';
import { Reveal } from '@/utils/anim/Reveal';

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function Component() {
  return (
    <>
      <div className='flex flex-col min-h-[100vh]'>
        <DrSaraDBanuriWaterDropHero />
      </div>
    </>
  );
}
