import OverallGoogleRating from '../OverallGoogleRating/OverallGoogleRating';
import GoogleReviewsCarousel from '../GoogleReviewsCarousel/GoogleReviewsCarousel';

export default function GoogleReviews() {
  return (
    <div className='flex flex-col lg:flex-row my-24 bg-cream px-4 py-12'>
      <OverallGoogleRating />
      <GoogleReviewsCarousel />
    </div>
  );
}
