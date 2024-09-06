import { Compare } from '../ui/compare';

export default function ServiceTestimonial({
  name,
  text,
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: ServiceTestimonial) {
  return (
    <div className='bg-cream p-6 rounded-lg shadow-lg'>
      <p className='text-lightGrey'>{text}</p>
      <p className='my-4 font-medium text-gold'>{name}</p>
      <div className='flex justify-center p-4 border rounded-3xl bg-neutral-100  border-neutral-200 px-4'>
        <Compare
          firstImage={beforeSrc}
          secondImage={afterSrc}
          firstImageClassName='object-cover object-left-top'
          secondImageClassname='object-cover object-left-top'
          className='h-64 w-64'
          slideMode='hover'
        />
      </div>
    </div>
  );
}
