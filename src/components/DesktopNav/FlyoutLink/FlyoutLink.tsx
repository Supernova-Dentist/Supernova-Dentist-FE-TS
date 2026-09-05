import { ChevronDownIcon } from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useId, useMemo, useState } from 'react';
import FlyoutList from '../FlyoutList/FlyoutList';

export default function FlyoutLink({ children, href, flyoutItems }: FlyoutLinkProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const hasFlyout = Array.isArray(flyoutItems) && flyoutItems.length > 0;

  const showFlyout = useMemo(() => hasFlyout && open, [hasFlyout, open]);
  const linkClasses =
    'relative flex min-h-11 items-center rounded-sm text-white transition-colors hover:text-gold-text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-dark';

  return (
    <li
      onMouseEnter={() => hasFlyout && setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      className='relative z-50 h-fit w-fit'
    >
      {hasFlyout ? (
        <button
          type='button'
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((current) => !current)}
          className={linkClasses}
        >
          {children}
          <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden='true' />
        </button>
      ) : (
        <Link href={href ?? '/'} className={linkClasses}>
          {children}
        </Link>
      )}
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            id={menuId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: '-50%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='absolute left-1/2 top-12 bg-white text-black shadow-lg'
          >
            <div className='absolute -top-6 left-0 right-0 h-6 bg-transparent' />
            <div className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-cream' />
            <div className='z-50 w-64 bg-cream p-6 shadow-xl'>
              <FlyoutList flyoutItems={flyoutItems} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
