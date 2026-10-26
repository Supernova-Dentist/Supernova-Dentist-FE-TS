'use client';

import { useEffect, useState, type MouseEvent } from 'react';
import { getServiceAction } from '@/lib/serviceActions';

export default function ServiceActions({ pathname }: { pathname: string }) {
  const action = getServiceAction(pathname);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const form = action?.formId !== undefined ? document.getElementById(action.formId) : null;
    let formVisible = false;
    const update = () => {
      const editing = document.activeElement?.matches('input, textarea, select, [contenteditable="true"]') === true;
      setVisible(window.scrollY > 96 && !formVisible && !editing);
    };
    const observer = new IntersectionObserver(([entry]) => {
      formVisible = entry.isIntersecting;
      update();
    }, { rootMargin: '0px 0px -96px 0px' });

    if (form !== null) observer.observe(form);
    update();
    window.addEventListener('scroll', update, { passive: true });
    document.addEventListener('focusin', update);
    document.addEventListener('focusout', update);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', update);
      document.removeEventListener('focusin', update);
      document.removeEventListener('focusout', update);
    };
  }, [action?.formId]);

  if (action === undefined) return null;

  const openForm = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!action.href.startsWith('#') || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const form = action.formId !== undefined ? document.getElementById(action.formId) : null;
    if (form === null) return;
    event.preventDefault();
    form.focus({ preventScroll: true });
    form.scrollIntoView({ block: 'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };

  return (
    <nav
      aria-label='Treatment contact actions'
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-champagne/25 bg-obsidian px-5 pb-[calc(0.875rem+env(safe-area-inset-bottom))] pt-3.5 shadow-[0_-8px_28px_rgba(11,18,24,0.12)] transition-[transform,opacity,visibility] duration-200 motion-reduce:transition-none md:hidden ${visible ? 'visible translate-y-0 opacity-100' : 'pointer-events-none invisible translate-y-full opacity-0'}`}
    >
      <div className='mx-auto flex max-w-lg items-center gap-4'>
        <a
          href={action.href}
          onClick={openForm}
          tabIndex={visible ? undefined : -1}
          className='flex min-h-12 flex-1 items-center justify-center gap-3 rounded-full bg-champagne px-5 py-3 text-base font-semibold text-obsidian transition-colors hover:bg-lightGold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne'
        >
          {action.label}
          <svg aria-hidden='true' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.75'>
            <path d='M5 12h14m-6-6 6 6-6 6' />
          </svg>
        </a>
        <a
          href={action.emergency ? '#form' : 'tel:01278228665'}
          tabIndex={visible ? undefined : -1}
          className='flex min-h-12 min-w-16 items-center justify-center gap-2 rounded-full px-2 text-sm font-medium text-ivory underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne'
        >
          {action.emergency ? 'Triage form' : 'Call'}
        </a>
      </div>
    </nav>
  );
}
