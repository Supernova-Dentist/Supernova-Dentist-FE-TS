export const scrollToPromotionForm = () => {
  const section = document.getElementById('consultation-form') ?? document.getElementById('form');
  if (section === null) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });

  window.requestAnimationFrame(() => {
    section.querySelector<HTMLElement>('input, select, textarea, button')?.focus({ preventScroll: true });
  });
};
