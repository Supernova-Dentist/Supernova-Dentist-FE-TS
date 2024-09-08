import dynamic from 'next/dynamic';
import { MapSkeletonWithSpinner } from '@/components/Loaders/MapSkeletonWithSpinner';

const DynamicGoogleMap = dynamic(async () => await import('@/components/blocks/GoogleMap/GoogleMap'), {
  ssr: false,
  loading: () => <MapSkeletonWithSpinner />,
});

export default DynamicGoogleMap;
