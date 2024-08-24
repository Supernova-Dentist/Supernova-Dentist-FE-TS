import { cn } from '@/lib/utils';
import { useState } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';

export default function FlyoutLink({ children, href, flyoutItems }: FlyoutLinkProps) {
  const [open, setOpen] = useState(false);

  const showFlyout = flyoutItems.length > 0 && open;

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className='relative w-fit h-fit z-50'>
      <a href={href} className='relative text-white transition-all duration-300 ease-out flex items-center'>
        {children}
        {flyoutItems.length > 0 && (
          <ChevronDownIcon
            className={cn(`ml-1 transform transition-transform duration-300 ${showFlyout ? 'rotate-180' : ''}`)}
          />
        )}
        <span
          style={{
            transform: showFlyout ? 'scaleX(1)' : 'scaleX(0)',
          }}
          className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-gold transition-transform duration-300 ease-out'
        />
      </a>
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
            <div className='flex flex-col gap-4 w-64 bg-cream p-6 shadow-xl z-50'>
              {flyoutItems.map(({ name, link }) => (
                <a
                  key={name}
                  href={link}
                  className='block text-md text-gold transition-all duration-300 ease-out hover:text-amber-700 hover:translate-x-1'
                >
                  {name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}