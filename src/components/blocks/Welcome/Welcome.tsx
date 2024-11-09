import dynamic from 'next/dynamic';
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
