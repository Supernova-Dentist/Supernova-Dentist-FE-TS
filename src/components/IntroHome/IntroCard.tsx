import Link from 'next/link';
import { Card, CardContent, CardHeader } from '../ui/card';
import Image, { type StaticImageData } from 'next/image';
import Button from '../Button/Button';

type IntroCardProps = {
  imgSrc: string | StaticImageData;
  title: string;
  description: string;
  link: string;
  btnText: string;
};

export default function IntroCard({ imgSrc, title, description, link, btnText }: IntroCardProps) {
  return (
    <Link href={link} className='group' prefetch={false}>
      <Card className='h-full p-10 group'>
        <CardHeader className='rounded-t-lg p-0 mb-2'>
          <h3 className='text-2xl text-gray-800 font-bold'>{title}</h3>
        </CardHeader>
        <CardContent className='flex flex-col justify-between p-0'>
          <p className='text-muted-foreground text-gray-700 mb-6'>{description}</p>
          <div className='mt-auto'>
            <Image src={imgSrc} alt='General Dentistry' className='w-full h-64 object-cover rounded-lg' />
            <div className='mt-4 flex justify-center lg:justify-end'>
              <Button variant='link' className='group-hover:underline'>
                {btnText}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
