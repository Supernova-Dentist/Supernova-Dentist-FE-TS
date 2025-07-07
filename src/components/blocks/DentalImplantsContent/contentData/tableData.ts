const tableHeadData = ['Feature', 'Dental Implants (Long-lasting)', 'Bridges', 'Dentures'];

const tableBodyData = [
  {
    feature: 'Potential Lifetime Longevity',
    data: [true, false, false],
  },
  {
    feature: 'Durability',
    data: [true, true, false],
  },
  {
    feature: 'Impact on Adjacent Teeth',
    data: [false, true, false],
  },
  {
    feature: 'Comfort and Fit',
    data: [true, true, true],
  },
  {
    feature: 'Bite Strength',
    data: ['Near natural bite force', 'Reduced bite force', 'Significantly reduced bite force'],
  },
  {
    feature: 'Maintenance',
    data: ['Regular brushing and flossing', 'Requires special cleaning', 'Daily removal and cleaning'],
  },
  {
    feature: 'Cost-effective',
    data: [false, false, true],
  },
];

export const tableData = {
  title: 'Dental Restoration Comparison',
  description:
    'Compare dental implants with bridges and dentures to find the best option for your tooth replacement needs.',
  content: { tableHeadData, tableBodyData },
};
