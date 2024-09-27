import { fetchInstagramPosts } from '@/services/metaAPI/fetchInstagramPosts';
import LogoAnimation from './LogoAnimation';
import InstagramPosts from './InstagramPosts';

export default async function InstagramSection() {
  const instagramPosts = await fetchInstagramPosts();
  const latestPosts = instagramPosts?.slice(0, 10);
  const username = instagramPosts?.length > 0 ? instagramPosts?.[0].username : 'Our Instagram';
  const instagramProfileUrl = `https://www.instagram.com/${username}/`;

  return (
    <section className='my-20 border-t border-solid border-gray-200 max-w-[1400px] mx-auto px-8'>
      <div className='flex flex-col items-center my-10'>
        <LogoAnimation />
        <a
          href={instagramProfileUrl}
          target='_blank'
          rel='noreferrer'
          className='bg-cream rounded-full px-8 py-2 text-center w-fit text-sm text-gray-800'
        >
          Follow us
        </a>
        <h4 className='text-3xl text-lightGold mt-2 text-center'>Follow us @supernovadentaltest240</h4>
        <p className='text-sm text-gray-700 mt-2'>Check out our latest Instagram posts</p>
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
    </section>
  );
}
