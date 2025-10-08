const tableHeadData = ['Feature', 'Invisalign', 'Traditional Braces'];

const tableBodyData = [
  {
    feature: 'Barely Visible',
    data: [true, false],
  },
  {
    feature: 'Removable',
    data: [true, false],
  },
  {
    feature: 'Comfort',
    data: [true, false],
  },
  {
    feature: 'Dietary Restrictions',
    data: [false, true],
  },
  {
    feature: 'Treatment Duration (Average)',
    data: ['6 months', '12+ months'],
  }
];

export const tableData = {
  title: 'Treatment Comparison',
  description: 'Compare Invisalign with traditional braces and taking no action to find the best option for your needs:',
  content: {
    tableHeadData,
    tableBodyData,
  },
};
