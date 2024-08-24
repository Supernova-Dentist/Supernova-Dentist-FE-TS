import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FlyoutList from '../FlyoutList/FlyoutList';
import MainLink from '../MainLink/MainLink';

export default function FlyoutLink({ children, href, flyoutItems }: FlyoutLinkProps) {
  const [open, setOpen] = useState(false);

  const showFlyout = useMemo(() => Array.isArray(flyoutItems) && flyoutItems.length > 0 && open, [flyoutItems, open]);

  return (
    <li onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className='relative w-fit h-fit z-50'>
      <MainLink href={href} flyoutItems={flyoutItems} open={open} showFlyout={showFlyout}>
        {children}
      </MainLink>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: '-50%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='absolute left-1/2 top-12 bg-white text-black shadow-lg'
          >
            <div className='absolute -top-6 left-0 right-0 h-6 bg-transparent' />
            <div className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-cream' />
            <nav className='w-64 bg-cream p-6 shadow-xl z-50'>
              <FlyoutList flyoutItems={flyoutItems} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
