import ServiceBox from '../blocks/ServiceBox/ServiceBox';

export default function HeroSection({ data }: HeroSection) {
  return (
    <section className="relative max-w-[100%] mx-auto bg-[url('/assets/images/Supernova-cover.jpg')] bg-cover bg-center bg-no-repeat py-20 md:py-32 lg:py-40">
      <div className='container mx-auto px-4 md:px-6'>
        <ServiceBox
          title={data.header.title}
          subTitle={data.header.subTitle}
          mainText={data.mainText}
          benefitText={data.benefitText}
          stats={data.serviceStats}
        />
      </div>
    </section>
  );
}
