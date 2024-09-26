import { Reveal } from '@/utils/anim/Reveal';

const WaterDropHero = () => {
  return (
    <section className='text-slate-100 overflow-hidden bg-lightGrey px-8 py-24 md:px-12 md:py-32'>
      <div className='relative mx-auto max-w-5xl flex flex-col md:flex-row items-center'>
        <div className='pointer-events-none relative z-10 md:flex-1'>
          <Reveal>
            <h1 className='pointer-events-auto text-6xl font-black text-slate-100 md:text-8xl'>
              Hi, I&apos;m Scott<span className='text-gold'>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <>
              <h2 className='pointer-events-auto my-2 text-2xl text-cream md:my-4 md:text-4xl'>
                I&apos;m a <span className='font-semibold text-gold'> Dental Practitioner</span>
              </h2>
              <h3 className='text-gold'>GPhC Registration Number: 12345678</h3>
            </>
          </Reveal>
          <Reveal>
            <p className='pointer-events-auto max-w-xl text-sm text-cream md:text-base mt-4'>
              With extensive experience in dental practice, I am dedicated to providing top-notch care to all my
              patients. My goal is to ensure a comfortable and efficient experience for everyone who walks through our
              doors. Let&apos;s connect!
            </p>
          </Reveal>
          <Reveal>
            <div className='flex gap-4 mt-4'>
              <button className='pointer-events-auto mt-4 rounded bg-gold px-4 py-2 font-medium text-slate-100 transition-all active:scale-95 md:mt-6'>
                Book with me
              </button>
              <button className='pointer-events-auto mt-4 rounded bg-gold px-4 py-2 font-medium text-slate-100 transition-all active:scale-95 md:mt-6'>
                Contact me
              </button>
            </div>
          </Reveal>
        </div>
        <div className='pointer-events-none relative z-10 mt-8 md:mt-0 md:ml-12 md:flex-1'>
          <Reveal>
            <img
              src='/assets/images/scottAiImage.jpg'
              alt='Scott'
              className='pointer-events-auto w-72 h-72 object-cover rounded-full shadow-lg lg:w-96 lg:h-96'
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WaterDropHero;
