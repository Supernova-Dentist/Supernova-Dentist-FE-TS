const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export default function GoogleMap() {
  return (
    <div className='relative'>
      <iframe
        width='100%'
        height='350'
        referrerPolicy='no-referrer-when-downgrade'
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=supernova+dental+marsh+lane+huntworth+bridgwater+TA6 6LQ`}
        allowFullScreen
      ></iframe>
    </div>
  );
}
