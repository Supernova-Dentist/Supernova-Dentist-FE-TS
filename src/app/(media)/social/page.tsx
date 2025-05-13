import { InstagramLogoIcon } from '@radix-ui/react-icons';
import fetchInstagramPosts from '@/actions/instagram';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import InstagramPostGrid from './utils/InstagramPostGrid';
import InstagramPaginationControls from '@/components/PaginationControls/InstagramPagination';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';

export default async function SocialMedia({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  // Parse page number (default to 1)
  const currentPage = searchParams?.page
    ? parseInt(Array.isArray(searchParams.page) ? searchParams.page[0] : searchParams.page)
    : 1;

  // Parse cursor if it exists
  const cursor = searchParams?.cursor
    ? Array.isArray(searchParams.cursor)
      ? searchParams.cursor[0]
      : searchParams.cursor
    : undefined;

  // Parse direction (default to 'after')
  const direction = searchParams?.direction
    ? Array.isArray(searchParams.direction)
      ? searchParams.direction[0]
      : searchParams.direction
    : 'after';

  // Fetch posts with the current cursor and direction
  const { data, paging } = (await fetchInstagramPosts(cursor, direction as 'after' | 'before')) || {
    data: [],
    paging: {},
  };

  // Determine if we have previous/next pages
  const hasNextPage = !!paging?.next;
  const hasPrevPage = currentPage > 1 && !!paging?.cursors?.before;

  const username = data?.length > 0 ? data?.[0].username : 'Our Instagram';
  const instagramProfileUrl = `https://www.instagram.com/${username}/`;

  return (
    <>
      <HighlightCard
        title='Social - Supernova Dental'
        description='Follow us on Instagram for the latest updates and dental tips'
        logoSrc='/assets/images/logo.png'
        className='mt-16'
      />
      <div className='flex flex-col items-center justify-start py-12'>
        <div className='w-full max-w-7xl px-6 sm:px-8 lg:px-12'>
          <BreadCrumb />
          <div className='flex flex-col sm:flex-row sm:items-center justify-between'>
            <div>
              <h1 className='text-3xl font-bold break-words text-grey'>{username}</h1>
            </div>
            <a
              href={instagramProfileUrl}
              target='_blank'
              rel='noreferrer'
              className='inline-flex w-fit items-center gap-2 bg-grey rounded-md px-4 py-2 hover:bg-primary/90 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring mt-2 sm:mt-0'
            >
              <InstagramLogoIcon className='w-5 h-5 text-cream' />
              <span className='text-white'>Follow</span>
            </a>
          </div>

          {data?.length > 0 ? (
            <div>
              <InstagramPostGrid posts={data} />
              <InstagramPaginationControls
                hasNextPage={hasNextPage}
                hasPrevPage={hasPrevPage}
                nextPageCursor={paging?.cursors?.after}
                prevPageCursor={paging?.cursors?.before}
                currentPage={currentPage}
                currentCursor={cursor}
              />
            </div>
          ) : (
            <span className='flex justify-center mt-20'>No Instagram posts yet. Check back later.</span>
          )}
        </div>
      </div>
    </>
  );
}
