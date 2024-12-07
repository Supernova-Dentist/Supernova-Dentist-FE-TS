import { ScottOutlineCards } from '@/components/OutlineCards/ScottOutlineCards';
import StackedCardTestimonials from '@/components/StackedCardTestimonials/StackedCardTestimonials';
import ScottWaterDropHero from '@/components/WaterDropHeros/ScottWaterDropHero';
import { Reveal } from '@/utils/anim/Reveal';

export default function Component() {
  return (
    <div className='flex flex-col min-h-[100vh]'>
      <ScottWaterDropHero />

      <section className='w-full py-12 md:py-24 lg:py-32 bg-grey'>
        <div className='container mx-auto flex flex-col items-center justify-center gap-8 px-4 md:px-6 text-center'>
          <div className='flex flex-col items-center justify-center space-y-4'>
            <Reveal>
              <>
                <h2 className='text-3xl font-bold tracking-tight md:text-4xl text-gold pt-4'>
                  How Scott Can Brighten Your Smile
                </h2>
                <hr className='bg-gold h-1 w-16 mx-auto mt-4' />
              </>
            </Reveal>
            <Reveal>
              <ScottOutlineCards />
            </Reveal>
          </div>
        </div>
      </section>

      <section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
        <div className='container mx-auto flex flex-col items-center justify-center gap-8 px-4 md:px-6 text-center'>
          <Reveal>
            <div className='space-y-4'>
              <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>Hear from Scott</h2>
              <hr className='bg-gold h-1 w-16 mx-auto' />
              <p className='max-w-[600px] text-muted-foreground md:text-xl mx-auto'>
                Get to know Scott Young, his journey and his passion for aesthetics and dentistry.
              </p>
            </div>
          </Reveal>
          <div className='w-full flex justify-center'>
            <div className='w-full max-w-[1200px] aspect-video bg-gray-200'>
              {/* Placeholder for YouTube video */}
              <iframe
                width='100%'
                height='100%'
                src='https://www.youtube.com/embed/your-video-id'
                title='Meet Scott Young'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <StackedCardTestimonials />
    </div>
  );
}
