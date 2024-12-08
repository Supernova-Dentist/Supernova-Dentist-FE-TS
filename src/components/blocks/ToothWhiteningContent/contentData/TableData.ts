const tableHeadData = ['Feature', 'Professional Tooth Whitening', 'Veneers', 'Composite Bonding'];

const tableBodyData = [
  {
    feature: 'Immediate Results',
    data: [true, true, true],
  },
  {
    feature: 'Customizable Treatment',
    data: [false, true, true],
  },
  {
    feature: 'Longevity of Results',
    data: ['6-12 months (with touch-ups)', '10-15 years', '5-7 years'],
  },
  {
    feature: 'Cost-Effective',
    data: [true, false, true],
  },
  {
    feature: 'Coverage for Imperfections',
    data: [false, true, true],
  },
  {
    feature: 'Stain Resistance',
    data: [true, true, false],
  },
];

export default {
  content: { tableHeadData, tableBodyData },
  title: 'Cosmetic Treatment Comparison',
  description:
    'Compare our professional tooth whitening with veneers and teeth bonding to discover the ideal solution for your smile enhancement:',
};
