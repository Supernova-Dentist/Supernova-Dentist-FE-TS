export const scrollToPromotionForm = () => {
  const section = document.getElementById('form');
  section?.scrollIntoView({ behavior: 'smooth' });
};
