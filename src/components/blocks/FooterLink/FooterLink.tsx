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
      <Link href={link}>{name}</Link>
    </li>
  );
}
