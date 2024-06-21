import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Supernova Dental | Social Media',
  description:
    'Explore Supernova Dental Clinic on social media. Stay updated with patient stories, dental tips, and community involvement.',
};

export default function SocialMedia() {
  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-start py-12 bg-gray-50'>
        <div className='w-full max-w-7xl px-6 sm:px-8 lg:px-12'>
          <BreadCrumb />

          <section className='mb-12'>
            <h1 className='text-5xl font-bold my-8 text-left text-gray-800'>Supernova Dental on Social Media</h1>
            <p className='text-xl mb-6 text-left text-gray-700'>
              Connect with Supernova Dental Clinic on social media to stay updated with our latest news, patient
              stories, dental tips, and community events.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='mb-6'>
                <a href='https://www.facebook.com/supernovadentalclinic' target='_blank' rel='noopener noreferrer'>
                  <Image
                    src='https://via.placeholder.com/800x500.png?text=Facebook'
                    alt='Facebook Page'
                    width={800}
                    height={500}
                    className='rounded-md shadow-lg'
                  />
                </a>
                <p className='text-lg mt-4 text-gray-700'>
                  Follow us on Facebook for updates on dental care tips, patient testimonials, and community events.
                </p>
              </div>
              <div className='mb-6'>
                <a href='https://www.instagram.com/supernovadentalclinic' target='_blank' rel='noopener noreferrer'>
                  <Image
                    src='https://via.placeholder.com/800x500.png?text=Instagram'
                    alt='Instagram Feed'
                    width={800}
                    height={500}
                    className='rounded-md shadow-lg'
                  />
                </a>
                <p className='text-lg mt-4 text-gray-700'>
                  Explore our Instagram feed for visual updates, behind-the-scenes glimpses, and dental health tips.
                </p>
              </div>
            </div>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-semibold mb-6 text-left text-gray-800'>Patient Stories and Testimonials</h2>
            <p className='text-xl mb-6 text-left text-gray-700'>
              Read inspiring stories from our patients about their experiences at Supernova Dental Clinic.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div>
                <Image
                  src='https://via.placeholder.com/800x500.png?text=Patient+Testimonial'
                  alt='Patient Testimonial'
                  width={800}
                  height={500}
                  className='rounded-md shadow-lg'
                />
                <p className='text-lg mt-4 text-gray-700'>
                  &quot;Supernova Dental Clinic transformed my smile! Thank you for the amazing care.&quot;
                </p>
              </div>
              <div>
                <Image
                  src='https://via.placeholder.com/800x500.png?text=Patient+Testimonial'
                  alt='Patient Testimonial'
                  width={800}
                  height={500}
                  className='rounded-md shadow-lg'
                />
                <p className='text-lg mt-4 text-gray-700'>
                  "I highly recommend Supernova Dental Clinic. Professional and caring team!"
                </p>
              </div>
            </div>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-semibold mb-6 text-left text-gray-800'>Community Involvement</h2>
            <p className='text-xl mb-6 text-left text-gray-700'>
              Learn about our efforts to give back to the community and participate in local events.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div>
                <Image
                  src='https://via.placeholder.com/800x500.png?text=Community+Event'
                  alt='Community Event'
                  width={800}
                  height={500}
                  className='rounded-md shadow-lg'
                />
                <p className='text-lg mt-4 text-gray-700'>
                  Supporting local health fairs to promote dental awareness in our community.
                </p>
              </div>
              <div>
                <Image
                  src='https://via.placeholder.com/800x500.png?text=Community+Event'
                  alt='Community Event'
                  width={800}
                  height={500}
                  className='rounded-md shadow-lg'
                />
                <p className='text-lg mt-4 text-gray-700'>
                  Hosting educational sessions at local schools to teach children about oral hygiene.
                </p>
              </div>
            </div>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-semibold mb-6 text-left text-gray-800'>Educational Content</h2>
            <p className='text-xl mb-6 text-left text-gray-700'>
              Access valuable dental health tips and educational articles shared by Supernova Dental Clinic.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div>
                <Image
                  src='https://via.placeholder.com/800x500.png?text=Educational+Content'
                  alt='Educational Content'
                  width={800}
                  height={500}
                  className='rounded-md shadow-lg'
                />
                <p className='text-lg mt-4 text-gray-700'>
                  Tips for maintaining healthy gums and preventing gum disease.
                </p>
              </div>
              <div>
                <Image
                  src='https://via.placeholder.com/800x500.png?text=Educational+Content'
                  alt='Educational Content'
                  width={800}
                  height={500}
                  className='rounded-md shadow-lg'
                />
                <p className='text-lg mt-4 text-gray-700'>
                  Importance of regular dental check-ups and preventive care.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
