import Link from 'next/link';
import { type Blog } from '../blocks/Blogs/blogMockData';
import Button from '../Button/Button';
import formatDate from '@/utils/formatDate';

export default function BlogBox({ id, title, date, description }: Blog) {
  return (
    <article className='flex flex-col gap-3 p-6 border border-solid border-gray-800 rounded-sm '>
      <h4 className='text-xl'>{title}</h4>
      <span className='text-xs text-gray-500'>{formatDate(date)}</span>
      <p className='text-gray-500'>{description}</p>
      <Link href={`/blog/${id}`}>
        <Button className='w-fit uppercase text-gold text-lg underline'>Read More</Button>
      </Link>
    </article>
  );
}
