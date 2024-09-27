import { fetchInstagramPosts } from '@/services/metaAPI/fetchInstagramPosts';
import InstagramPosts from './InstagramPosts';
import LogoAnimation from './LogoAnimation';

export default async function InstagramSection() {
  const instagramPosts = await fetchInstagramPosts();
  const latestPosts = instagramPosts?.slice(0, 10);
  const username = instagramPosts?.length > 0 ? instagramPosts?.[0].username : 'Our Instagram';
  const instagramProfileUrl = `https://www.instagram.com/${username}/`;

  return (
    <section className='bg-gradient-to-b from-cream to-white py-12'>
      <div className=' border-t border-solid border-gray-200 max-w-[1400px] mx-auto px-8'>
        <div className='flex flex-col items-center my-10'>
          <LogoAnimation />
          <a
            href={instagramProfileUrl}
            target='_blank'
            rel='noreferrer'
            className='bg-gold text-cream rounded-full px-8 py-2 text-center w-fit text-sm'
          >
            Instagram
          </a>
          <h4 className='text-3xl text-lightGold mt-2 text-center'>Follow us @supernovadentaltest240</h4>
          <p className='text-md text-gray-700 mt-2'>Check out our latest Instagram posts</p>
        </div>
        <div className='flex justify-center'>
          <div
            className='grid gap-2'
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              maxWidth: '100%',
            }}
          >
            <InstagramPosts posts={latestPosts} />
          </div>
        </div>
      </div>
    </section>
  );
}
