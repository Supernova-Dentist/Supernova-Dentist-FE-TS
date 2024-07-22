import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { serviceData } from './utils/serviceData';

const Services = () => {
  return (
    <section className='py-16 bg-gray-50' id='service' aria-label='service'>
      <div className='container mx-auto px-4'>
        <p className='text-center text-lg text-gray-600'>Our Services</p>
        <h2 className='text-center text-3xl font-bold mt-2'>What We Provide</h2>
        <div className=' mt-12 md:grid md:gap-8 md:grid-cols-3'>
          <div className='space-y-8'>
            {serviceData.slice(0, 3).map((service, index) => (
              <Card key={index} className='flex flex-col h-1/3 items-center p-6 bg-cream shadow-lg rounded-lg'>
                <div className='mb-4'>
                  <img
                    src={service.icon}
                    alt={`${service.title} icon`}
                    className='w-24 h-24 object-contain'
                    loading='lazy'
                  />
                </div>
                <CardHeader className='text-center'>
                  <CardTitle className='text-xl font-semibold'>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-gray-600 text-lg'>{service.text}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className='hidden md:flex items-center justify-center'>
            <img
              src='/assets/images/service-banner.png'
              alt='service banner'
              className='mx-auto w-full max-w-md'
              loading='lazy'
            />
          </div>
          <div className='space-y-8 mt-8 md:mt-0'>
            {serviceData.slice(3).map((service, index) => (
              <Card key={index} className='flex flex-col h-1/3 items-center p-6 bg-cream shadow-lg rounded-lg'>
                <div className='mb-4'>
                  <img
                    src={service.icon}
                    alt={`${service.title} icon`}
                    className='w-24 h-24 object-contain'
                    loading='lazy'
                  />
                </div>
                <CardHeader className='text-center'>
                  <CardTitle className='text-xl font-semibold'>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-gray-600 text-lg'>{service.text}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
