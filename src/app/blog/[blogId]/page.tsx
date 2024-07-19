export default function BlogArticle({ params }: { params: { blogId: string } }) {
  const { blogId } = params;

  return (
    <article className='h-screen flex justify-center items-center text-3xl'>
      <div className='flex flex-col'>
        <h1>blog: {blogId}</h1>
        <span>Fetch data for specific blog here...</span>
      </div>
    </article>
  );
}
