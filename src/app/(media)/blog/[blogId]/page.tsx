import fetchBlogPostById from '@/services/wordpress/fetchPostById';
import { decodeHtmlEntities } from '@/utils/format/decodeHtmlEntities';

export default async function BlogArticle({ params }: { params: { blogId: string } }) {
  const { blogId } = params;

  const data: Post = await fetchBlogPostById(blogId);

  return (
    <article className='flex flex-col justify-center max-w-[800px] mx-auto my-12'>
      <h1 className='text-2xl'>{decodeHtmlEntities(data.title.rendered)}</h1>
      <div className='flex flex-col gap-4' dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}></div>
    </article>
  );
}
