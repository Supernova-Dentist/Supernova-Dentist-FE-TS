const tableHeadData = ['Feature', 'Dental Implants', 'Bridges', 'Dentures'];

const tableBodyData = [
  {
    feature: 'Longevity',
    data: ['10-15 years or more', '5-10 years', '5-7 years'],
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
    'Compare dental implants with bridges and dentures to find the best option for your tooth replacement needs:',
  content: { tableHeadData, tableBodyData },
};
