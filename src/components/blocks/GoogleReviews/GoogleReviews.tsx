import GoogleReviewsCarousel from '../GoogleReviewsCarousel/GoogleReviewsCarousel';
import OverallGoogleRating from '../OverallGoogleRating/OverallGoogleRating';

export default function GoogleReviews() {
  return (
    <div className='flex flex-col bg-cream px-4 py-12 bg-gradient-to-b from-white to-cream'>
      <div className='flex justify-center mb-4 '>
        <div className='rounded-xl bg-gold px-4 py-1 text-sm text-gray-50'>Our Reviews</div>
      </div>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 text-gold'>What Our Patients Say</h2>
      <hr className='border-t-2 border-gold w-20 mx-auto mt-6 mb-8' />
      <p className='text-xl md:text-2xl lg:text-2xl text-center text-gray-600 mb-6'>
        See what our team&apos;s previous patients have to say about them
      </p>
      <OverallGoogleRating />
      <GoogleReviewsCarousel />
    </div>
  );
}
