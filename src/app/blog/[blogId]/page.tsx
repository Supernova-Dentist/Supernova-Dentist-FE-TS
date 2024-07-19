export default async function BlogArticle({ params }: { params: { blogId: string } }) {
  const { blogId } = params;

  const res = await fetch(`https://public-api.wordpress.com/wp/v2/sites/0xkamecd6.wordpress.com/posts/${blogId}`);
  const data = await res.json();

  return (
    <article className='flex flex-col justify-center max-w-[800px] mx-auto my-12'>
      <h1 className='text-2xl'>{data?.title.rendered}</h1>
      <div className='flex flex-col gap-4' dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}></div>
    </article>
  );
}
