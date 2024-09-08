import Link from 'next/link';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';

export default function MainLink({ href, showFlyout, children, flyoutItems, open }: MainLink) {
  return (
    <Link
      href={href}
      aria-expanded={showFlyout}
      className='relative text-white transition-all duration-300 ease-out flex items-center'
    >
      {children}
      {flyoutItems.length > 0 && (
        <ChevronDownIcon
          className={cn('ml-1 transform transition-transform duration-300', {
            'rotate-180': showFlyout,
          })}
        />
      )}
      <span
        style={{
          transform: open ? 'scaleX(1)' : 'scaleX(0)',
        }}
        className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-gold transition-transform duration-300 ease-out'
      />
    </Link>
  );
}
