import Image from 'next/image';
import { Card, CardContent } from '../ui/card';

export default function ServiceProcessBox({ src, header, text }: ServiceProcessBoxProps) {
  return (
    <Card>
      <CardContent>
        <Image src={src} alt='Consultation' className='w-full h-56 px-2 py-4 object-cover' width={400} height={300} />
        <h3 className='mt-4 text-lg font-medium text-gold'>{header}</h3>
        <p className='mt-2 text-lightGrey'>{text}</p>
      </CardContent>
    </Card>
  );
}
