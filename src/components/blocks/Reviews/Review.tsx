import { FaStar } from 'react-icons/fa6';

type ReviewData = {
  image: string;
  reviewText: string;
};

const reviewData: ReviewData[] = [
  {
    image: '/assets/images/review-1.jpeg',
    reviewText:
      'I love my new smile. Wish I did this sooner. The process was easy and I had complete confidence in Dr. Young and his team from start to finish.',
  },
  {
    image: '/assets/images/review-2.jpeg',
    reviewText:
      "What truly impressed me was the technology and software he and his staff operate. Unlike anything I've ever seen in other dental offices.",
  },
  {
    image: '/assets/images/review-3.jpeg',
    reviewText:
      "Dr. Young and his team are amazing. I'm so happy with my new smile and Supernova Dental made it affordable by allowing me to make payments over time.",
  },
];

export default function Reviews() {
  return (
    <div className='bg-cream flex flex-col gap-6 items-center px-6 py-12'>
      <div className='flex flex-col items-center gap-2'>
        <h1 className='uppercase text-2xl font-semibold'>Bridgewaters top-rated dentist</h1>
        <h5 className='text-xl text-lightGrey'>See what our patients are saying about our 5-star dental office</h5>
        <div className='flex items-center gap-1'>
          <FaStar size={30} color='var(--gold)' />
          <FaStar size={30} color='var(--gold)' />
          <FaStar size={30} color='var(--gold)' />
          <FaStar size={30} color='var(--gold)' />
          <FaStar size={30} color='var(--gold)' />
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-6'>
        {reviewData.map((review) => (
          <div key={review.reviewText} className='flex flex-col items-center gap-2 max-w-[25rem] min-h-[10rem]'>
            <div className='rounded-full w-[50px] h-[50px]'>
              <img
                className='rounded-full h-full w-full object-cover' // For some reason when using next js Image component, the height gets overridden and is set to auto
                src={review.image}
                alt='reviewer'
              />
            </div>
            <p className='text-center'>{review.reviewText}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
