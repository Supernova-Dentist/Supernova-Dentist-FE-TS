const tableHeadData = ['Feature', 'Professional Hygiene + Airflow', 'Professional Hygiene', 'Do Nothing'];

const tableBodyData = [
  {
    feature: 'Removes Plaque & Tartar',
    data: [true, true, 'N/A'],
  },
  {
    feature: 'Prevents/Treats Gum Disease',
    data: [true, true, 'N/A'],
  },
  {
    feature: 'Stain Removal',
    data: ['Moderate', 'Mild', 'N/A'],
  },
  {
    feature: 'Brightens Teeth',
    data: [true, true, 'N/A'],
  },
  {
    feature: 'Freshens Breath',
    data: [true, true, 'N/A'],
  },
  {
    feature: 'Recommended Frequency',
    data: ['3 - 6 months', '3 - 6 months', 'N/A'],
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
