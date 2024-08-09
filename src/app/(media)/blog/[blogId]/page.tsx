import fetchBlogPostById from '@/services/wordpress/fetchPostById';
import { decodeHtmlEntities } from '@/utils/format/decodeHtmlEntities';

export default async function BlogArticle({ params }: { params: { blogId: string } }) {
  const { blogId } = params;

  const post: Post = await fetchBlogPostById(blogId);

  return (
    <article className='flex flex-col justify-center max-w-[800px] mx-auto my-12 px-4'>
      <h1 className='text-2xl text-center sm:text-left mb-2'>{decodeHtmlEntities(post.title.rendered)}</h1>
      <div className='flex flex-col gap-4' dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}></div>
    </article>
  );
}
