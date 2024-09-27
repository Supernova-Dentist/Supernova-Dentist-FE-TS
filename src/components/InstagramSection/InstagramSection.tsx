import Image from 'next/image';
import { fetchInstagramPosts } from '@/services/metaAPI/fetchInstagramPosts';
import LogoAnimation from './LogoAnimation';

export default async function InstagramSection() {
  const instagramPosts = await fetchInstagramPosts();

  console.log({ instagramPosts });

  return (
    <section className='my-20 border-t border-solid border-gray-200 max-w-[1200px] mx-auto'>
      <div className='flex flex-col items-center my-10'>
        <LogoAnimation />
        <h3 className='bg-cream rounded-full px-8 py-2 text-center w-fit text-sm text-gray-800'>Instagram</h3>
        <h4 className='text-3xl text-lightGold mt-2'>Follow us @supernovadentaltest240</h4>
        <p className='text-sm text-gray-700 mt-2'>Check out our latest Instagram posts</p>
      </div>
      <div>
        <div className='flex gap-[2px] justify-center'>
          {instagramPosts.map((post: InstagramPost) => (
            <div key={post.id}>
              <Image
                src={post.media_url}
                alt='Instagram Post'
                width={400}
                height={400}
                className='w-full h-64 object-cover'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
