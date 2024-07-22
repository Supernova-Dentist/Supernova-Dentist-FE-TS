import Link from 'next/link';
import { type Blog } from '../blocks/Blogs/blogMockData';
import Button from '../Button/Button';
import formatDate from '@/utils/format/formatDate';

export default function BlogBox({ id, title, date, excerpt }: Blog) {
  return (
    <article className='flex flex-col justify-between p-6 border border-solid border-gray-200 rounded-sm shadow-lg'>
      <div className='flex flex-col'>
        <h4 className='text-xl mb-2'>{title}</h4>
        <span className='text-xs mb-4 text-gray-500'>{formatDate(date)}</span>
        {excerpt !== undefined ? (
          <p className='text-gray-500 mb-6' dangerouslySetInnerHTML={{ __html: excerpt }}></p>
        ) : null}
      </div>

      <Link href={`/blog/${id}`}>
        {/* <Button className='w-fit uppercase text-gold text-lg underline'>Read More</Button> */}
        <Button className='bg-gray-900 rounded-lg w-full px-8 py-2 text-gray-50 hover:bg-gray-800 duration-150'>
          Read More
        </Button>
      </Link>
    </article>
  );
}
