interface ServiceVideoProps {
  videoSrc: string;
}

export default function ServiceVideo({ videoSrc }: ServiceVideoProps) {
  return (
    <div className='w-full relative pb-[56.25%] overflow-hidden border-4 border-gold rounded-lg'>
      {/* 16:9 Aspect Ratio */}
      <iframe
        src={videoSrc}
        title='video'
        className='absolute top-0 left-0 w-full h-full object-cover rounded-lg' 
        style={{
          border: 'none',
        }}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  );
}
