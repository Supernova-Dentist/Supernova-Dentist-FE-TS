import { KayleighOutlineCards } from '@/components/OutlineCards/KayleighOutlineCards';
import KayleighTestimonials from '@/components/StackedCardTestimonials/KayleighTestimonials';
import KayleighWaterDropHero from '@/components/WaterDropHeros/KayleighWaterDropHero';
import { Reveal } from '@/utils/anim/Reveal';

export default function Component() {
  return (
    <div className='flex flex-col min-h-[100vh]'>
      <KayleighWaterDropHero />

      <section className='w-full py-12 md:py-24 lg:py-32 bg-grey'>
        <div className='container mx-auto flex flex-col items-center justify-center gap-8 px-4 md:px-6 text-center'>
          <div className='flex flex-col items-center justify-center space-y-4'>
            <Reveal>
              <>
                <h2 className='text-3xl font-bold tracking-tight md:text-4xl text-gold pt-4'>
                  How Kayleigh Can Brighten Your Smile
                </h2>
                <hr className='bg-gold h-1 w-16 mx-auto mt-4' />
              </>
            </Reveal>
            <Reveal>
              <KayleighOutlineCards />
            </Reveal>
          </div>
        </div>
      </section>

      <KayleighTestimonials />
    </div>
  );
}
