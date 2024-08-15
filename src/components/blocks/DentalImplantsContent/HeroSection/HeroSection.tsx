import serviceBoxData from '@/app/(cosmetic-services)/dental-implants/utils/serviceBoxData';
import ServiceBox from '../../ServiceBox/ServiceBox';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[url('/assets/images/composite-bonding-process.jpg')] bg-cover bg-center bg-no-repeat py-20 md:py-32 lg:py-40">
      <div className='container mx-auto px-4 md:px-6'>
        <ServiceBox
          title={serviceBoxData.header.title}
          subTitle={serviceBoxData.header.subTitle}
          mainText={serviceBoxData.mainText}
          benefitText={serviceBoxData.benefitText}
          stats={serviceBoxData.serviceStats}
        />
      </div>
    </section>
  );
}
