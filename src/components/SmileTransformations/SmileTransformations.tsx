import GoogleReviews from '../blocks/GoogleReviews/GoogleReviews';
import { Compare } from '../ui/compare';

export default function SmileTransformations() {
  const transformations = [
    {
      id: 1,
      before: '/assets/images/teeth-before.jpg',
      after: '/assets/images/teeth-after.png',
      description: 'Teeth Whitening',
    },
    // {
    //   id: 2,
    //   before: '/assets/images/teeth-before.jpg',
    //   after: '/assets/images/teeth-after.png',
    //   description: 'Invisalign Treatment',
    // },
    // {
    //   id: 3,
    //   before: '/assets/images/teeth-before.jpg',
    //   after: '/assets/images/teeth-after.png',
    //   description: 'Dental Veneers',
    // },
  ];

  return (
    <section id='results' className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-cream to-white'>
      <div className='container mx-auto'>
        <div className='flex justify-center mb-4 '>
          <div className='rounded-xl bg-gold px-4 py-1 text-sm text-gray-50'>Our Results</div>
        </div>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 text-gold'>
          Our Smile Transformations
        </h2>
        <hr className='border-t-2 border-gold w-20 mx-auto mt-6 mb-8' />
        <p className='text-xl md:text-2xl lg:text-2xl text-center text-gray-800 mb-12'>
          See the difference we can make
        </p>
        {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'> */}
        <div className='flex justify-center'>
          {transformations.map((item) => (
            <div
              key={item.id}
              className='flex justify-center p-4 border rounded-3xl bg-neutral-100 border-neutral-200 mt-auto'
            >
              <Compare
                firstImage={item.before}
                secondImage={item.after}
                firstImageClassName='object-cover object-left-top'
                secondImageClassname='object-cover object-left-top'
                className='h-[30vh] lg:h-[50vh] w-[70vw] md:w-[50vw] lg:w-[40vw]'
                slideMode='hover'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
