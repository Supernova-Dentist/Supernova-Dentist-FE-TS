import { SliderWithImageComparison } from '../SliderWithImageComparison/SliderWithImageComparison';

export default function ServiceTestimonialBox({
  name,
  text,
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: ServiceTestimonialBoxProps) {
  return (
    <div className='bg-cream p-6 rounded-lg shadow-lg'>
      <p className='text-lightGrey'>{text}</p>
      <p className='my-4 font-medium text-gold'>{name}</p>
      <SliderWithImageComparison
        beforeImageSrc={beforeSrc}
        beforeImageAlt={beforeAlt}
        afterImageSrc={afterSrc}
        afterImageAlt={afterAlt}
        imageWidth={400}
        imageHeight={300}
      />
    </div>
  );
}
