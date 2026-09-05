import { cn } from '@/lib/utils';
import Link from 'next/link';

type FooterLinkProps = {
  index: number;
  link: string;
  name: string;
  className?: string;
};

export default function FooterLink({ index, link, name, className }: FooterLinkProps) {
  return (
    <li key={index} className={cn('underline-animation', className)}>
      <Link href={link} className='inline-flex min-h-11 items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-dark'>{name}</Link>
    </li>
  );
}
