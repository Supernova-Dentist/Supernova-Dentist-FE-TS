import advantagesData from '@/app/(cosmetic-services)/dental-implants/utils/advantagesData';
import useCaseData from '@/app/(cosmetic-services)/dental-implants/utils/useCaseData';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ServiceDescription from '@/components/ServiceDescription/ServiceDescription';
import ServiceGridList from '@/components/ServiceGridList/ServiceGridList';
import ServiceGridTitle from '@/components/ServiceGridTitle/ServiceGridTitle';

export default function InfoSection() {
  return (
    <section className='py-8 px-4 md:py-18 lg:pb-28'>
      <div className='container mx-auto px-4 md:px-6'>
        <SectionTitle title='What are Dental Implants?' />
        <ServiceDescription
          className='mt-6 mb-4'
          description='Dental implants are a modern solution for replacing missing teeth. They consist of a titanium post that is
        surgically inserted into the jawbone, which acts as a replacement root for a new tooth. This procedure
        provides a stable and durable foundation for attaching crowns, bridges, or dentures.'
        />
        <ServiceDescription
          description='Implants offer a natural look and feel, effectively restoring both the function and aesthetics of your
        smile. They can be used to replace a single tooth, multiple teeth, or even support full dentures. Our expert
        team ensures a precise and comfortable procedure with long-lasting results.'
        />
        <ServiceGridTitle title='Advantages of Dental Implants:' />
        <ServiceGridList listItems={advantagesData} />
        <ServiceGridTitle title='Use Cases of Dental Implants' />
        <ServiceGridList listItems={useCaseData} />
      </div>
    </section>
  );
}
