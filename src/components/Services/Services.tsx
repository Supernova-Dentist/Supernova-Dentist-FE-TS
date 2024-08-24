import Link from 'next/link';
import { TiltCard } from '../blocks/HoverTiltCard/TiltCard';
import { serviceData } from './utils/serviceData';

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple hyphens with a single hyphen
    .replace(/^-+/, '') // Remove leading hyphens
    .replace(/-+$/, ''); // Remove trailing hyphens
};

const Services = () => {
  return (
    <section className='py-[6rem] bg-gray-50' id='service' aria-label='service'>
      <div className='container mx-auto px-4'>
        <p className='text-center text-lg text-gray-600'>Our Services</p>
        <h2 className='text-center text-3xl font-bold mt-2'>What We Provide</h2>

        {/* Cosmetic Services */}
        <div className='my-16'>
          <div className='text-center mb-8'>
            <h3 className='text-2xl font-semibold'>Cosmetic Services</h3>
          </div>
          <div className='flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12'>
            {serviceData.slice(0, 4).map((service, index) => (
              <Link href={`/${slugify(service.title)}`} key={index}>
                <TiltCard icon={service.icon} title={service.title} text={service.text} />
              </Link>
            ))}
          </div>
        </div>

        {/* General Services */}
        <div className='my-16'>
          <div className='text-center mb-8'>
            <h3 className='text-2xl font-semibold'>General Services</h3>
          </div>
          <div className='flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12'>
            {serviceData.slice(4).map((service, index) => (
              <Link href={`/${slugify(service.title)}`} key={index}>
                <TiltCard icon={service.icon} title={service.title} text={service.text} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
