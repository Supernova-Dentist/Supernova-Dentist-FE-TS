import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';

export function LuxuryLink({
  href,
  children,
  variant = 'primary',
  external = false,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'light';
  external?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={cn(
        'group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold tracking-[0.03em] transition-[background-color,border-color,color,box-shadow,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 active:scale-[0.98]',
        variant === 'primary' &&
          'border-champagne bg-champagne text-obsidian shadow-[0_12px_30px_rgba(198,161,91,0.18)] hover:border-[#D5B977] hover:bg-[#D5B977]',
        variant === 'secondary' &&
          'border-white/25 bg-transparent text-ivory hover:border-champagne/70 hover:bg-white/[0.06]',
        variant === 'light' &&
          'border-obsidian/20 bg-transparent text-obsidian hover:border-champagne hover:bg-champagne/10',
        className
      )}
    >
      {children}
      {external ? (
        <FiArrowUpRight aria-hidden='true' className='size-4' />
      ) : (
        <FiArrowRight aria-hidden='true' className='size-4 transition-transform duration-200 group-hover:translate-x-0.5' />
      )}
    </Link>
  );
}

export function BackToTeamLink({ className }: { className?: string }) {
  return (
    <Link
      href='/team'
      className={cn(
        'group inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-obsidian underline decoration-champagne/60 underline-offset-4 transition-colors duration-200 hover:decoration-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-4',
        className
      )}
    >
      <FiArrowLeft aria-hidden='true' className='size-4 transition-transform duration-200 group-hover:-translate-x-0.5' />
      Back to the full team
    </Link>
  );
}

export function EditorialDivider({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <div aria-hidden='true' className={cn('flex items-center gap-3', className)}>
      <span className={cn('h-px w-12', light ? 'bg-champagne' : 'bg-bronze')} />
      <span className={cn('size-1.5 rotate-45', light ? 'bg-champagne' : 'bg-bronze')} />
    </div>
  );
}
