export default function Cta() {
  return (
    <div className='relative h-screen w-screen overflow-hidden'>
      <video
        className='object-cover w-full h-full'
        src='https://skylinedentaltucson.com/wp-content/uploads/2022/10/hero_loop_no_mask-1080p-compressed.mp4'
        loop
        autoPlay
        playsInline
        muted
      />
      <div className='flex flex-col gap-8 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
        <div className='flex flex-col gap-4'>
          <h1 className='uppercase text-6xl text-slate-100'>Welcome to our clinic</h1>
          <p className='uppercase text-2xl text-slate-100'>
            A better life through better dentistry
          </p>
        </div>
        <div className='flex gap-6 items-center justify-center'>
          <button className='uppercase text-xl font-semibold bg-[#C29470] text-black px-4 py-2 w-[25rem]'>
            Request appointment
          </button>
          <button className='uppercase text-xl font-semibold bg-[#C29470] text-black px-4 py-2 w-[25rem]'>
            (01785) 555-555
          </button>
        </div>
      </div>
    </div>
  );
}
