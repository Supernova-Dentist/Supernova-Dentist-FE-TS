import { decodeHtmlEntities } from '@/utils/format/decodeHtmlEntities';
import BlogBox from '@/components/BlogBox/BlogBox';
import PaginationControls from '@/components/PaginationControls/PaginationControls';
import BlogFilteringBar from '../BlogFilteringBar/BlogFilteringBar';

type BlogsProps = {
  posts: Post[];
  page: number;
  totalPages: number;
};

export default async function Blogs({ posts, page, totalPages }: BlogsProps) {
  return (
    <section className='container mx-auto max-w-[1500px] px-4 py-12 sm:px-10'>
      <BlogFilteringBar className='mb-12' />
      {posts.length < 1 ? (
        <div className='flex justify-center'>
          <span>No results found</span>
        </div>
      ) : (
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12'>
          {posts?.map((post: Post) => (
            <BlogBox
              key={post.id}
              id={post.id}
              title={decodeHtmlEntities(post.title.rendered)}
              date={post.date}
              excerpt={post.excerpt.rendered}
            />
          ))}
        </div>
      )}
      {posts.length >= 1 ? <PaginationControls currentPage={page} totalPages={totalPages} /> : null}
    </section>
  );
}
