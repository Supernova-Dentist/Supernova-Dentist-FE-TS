import { SaraOutlineCards } from '@/components/OutlineCards/SaraOutlineCards';
import DrSaraDBanuriWaterDropHero from '@/components/WaterDropHeros/DrSaraDBanuriWaterDropHero';
import { Reveal } from '@/utils/anim/Reveal';

export default async function Component() {
  return (
    <div className='flex flex-col min-h-[100vh]'>
      <DrSaraDBanuriWaterDropHero />
      <section className='w-full py-12 md:py-24 lg:py-32 bg-grey'>
        <div className='container mx-auto flex flex-col items-center justify-center gap-8 px-4 md:px-6 text-center'>
          <div className='flex flex-col items-center justify-center space-y-4'>
            <Reveal>
              <>
                <h2 className='text-3xl font-bold tracking-tight md:text-4xl text-gold pt-4'>
                  Interested in dental implants with Dr. Sara D Banuri?
                </h2>
                <p className='text-lg text-white md:text-xl max-w-2xl mt-2 mx-auto'>
                  Discover how advanced implant options—including single-tooth, multiple-tooth, and full-arch solutions
                  like All-on-4 can restore your smile and confidence.
                </p>
                <hr className='bg-gold h-1 w-16 mx-auto mt-4' />
              </>
            </Reveal>
            <Reveal>
              <SaraOutlineCards />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
