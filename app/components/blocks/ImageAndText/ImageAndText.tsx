import Image, { type StaticImageData } from 'next/image';

type ImageAndTextProps = {
  src: StaticImageData | string;
  alt: string;
  imagePosition?: 'left' | 'right';
  children?: React.ReactNode;
  textBox?: React.ReactNode;
};

// Can still improve this components customizability
export default function ImageAndText({ src, alt, children, textBox, imagePosition = 'left' }: ImageAndTextProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row w-full min-h-[420px] ${
        imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <div className='relative w-full lg:w-1/2 min-h-[420px] lg:min-h-[550px]'>
        <Image className='object-cover' fill src={src} alt={alt} />
      </div>
      {textBox ?? children}
    </div>
  );
}
