const tableHeadData = ['Feature', 'Professional Hygiene', 'At-Home Cleaning'];

const tableBodyData = [
  {
    feature: 'Removes Plaque & Tartar',
    data: [true, false],
  },
  {
    feature: 'Prevents Gum Disease',
    data: [true, 'Limited'],
  },
  {
    feature: 'Brightens Teeth',
    data: [true, 'Moderate'],
  },
  {
    feature: 'Freshens Breath',
    data: [true, 'Temporary'],
  },
  {
    feature: 'Recommended Frequency',
    data: ['3 - 6 months', 'Daily'],
  },
];

export const tableData = {
  title: 'Hygiene Treatment Comparison',
  description: 'Compare professional hygiene treatments with at-home cleaning to understand the benefits of each:',
  content: {
    tableHeadData,
    tableBodyData,
  },
};
