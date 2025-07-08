const tableHeadData = ['Feature', 'Dental Implants (Long-lasting)', 'Bridges', 'Dentures'];

const tableBodyData = [
  {
    feature: 'Potential Lifetime Longevity',
    data: ['95% successful at 10 years', '70-80% successful at 10 years', '60-80% successful at 10 years'],
  },
  {
    feature: 'No Impact on Neighbouring Teeth',
    data: [true, false, true],
  },
  {
    feature: 'Bite Strength',
    data: ['Near natural bite force', 'Reduced bite force', 'Significantly reduced bite force'],
  },
  {
    feature: 'Maintenance',
    data: ['Regular brushing and flossing', 'Requires special cleaning', 'Daily removal and cleaning'],
  },
];

export const tableData = {
  title: 'Dental Restoration Comparison',
  description:
    'Compare dental implants with bridges and dentures to find the best option for your tooth replacement needs.',
  content: { tableHeadData, tableBodyData },
};
