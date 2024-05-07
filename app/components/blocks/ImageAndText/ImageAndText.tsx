import Image, { type StaticImageData } from 'next/image';
import TextBox from './TextBox';

type ImageAndTextProps = {
  src: StaticImageData | string;
  alt: string;
  descriptionOne: string;
  descriptionTwo?: string;
  imagePosition?: 'left' | 'right';
  title: {
    main: string;
    emphasis?: string;
  };
  containerBg?: string;
  descriptionOneColor?: string;
  titleColor?: string;
};

export default function ImageAndText({
  src,
  alt,
  title,
  descriptionOne,
  descriptionTwo,
  imagePosition = 'left',
  containerBg,
  descriptionOneColor,
  titleColor,
}: ImageAndTextProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row w-full min-h-[420px] ${
        imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <div className='relative w-full lg:w-1/2 h-[420px] lg:h-[550px]'>
        <Image className='object-cover' fill src={src} alt={alt} />
      </div>
      <TextBox
        main={title.main}
        emphasis={title.emphasis}
        descriptionOne={descriptionOne}
        descriptionTwo={descriptionTwo}
        containerBg={containerBg}
        descriptionOneColor={descriptionOneColor}
        titleColor={titleColor}
      />
    </div>
  );
}
