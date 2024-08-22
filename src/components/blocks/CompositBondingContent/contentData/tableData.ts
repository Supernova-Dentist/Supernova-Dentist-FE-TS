const tableHeadData = ['Feature', 'Composite Bonding', 'Veneers', 'Dental Crowns'];

const tableBodyData = [
  {
    feature: 'Quick Application',
    data: [true, false, false],
  },
  {
    feature: 'Minimal Tooth Reduction',
    data: [true, true, false],
  },
  {
    feature: 'Estimated Longevity',
    data: ['5-7 years', '10 years', '15 years'],
  },
  {
    feature: 'Cost-effective',
    data: [true, false, false],
  },
  {
    feature: 'Stain Resistance',
    data: [false, true, true],
  },
];

export const tableData = {
  content: { tableHeadData, tableBodyData },
  title: 'Treatment Comparison',
  description:
    'Compare our composite bonding treatment with other common dental treatments to find the best option for your needs.',
};
