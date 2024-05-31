import GoogleReview from '@/components/GoogleReview/GoogleReview';
import googleReviewMockData from '@/components/GoogleReview/googleReviewMockData';

export default function GoogleReviews() {
  return (
    <div className='flex gap-4 my-24 justify-center items-center bg-cream px4 py-12'>
      {googleReviewMockData.map(({ id, name, review, rating, date }) => (
        <GoogleReview key={id} name={name} review={review} rating={rating} date={date} />
      ))}
    </div>
  );
}
