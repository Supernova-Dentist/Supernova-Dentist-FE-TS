const tableHeadData = ['Feature', 'Dental Therapy', 'Professional Hygiene'];

const tableBodyData = [
  {
    feature: 'Removes Plaque & Tartar',
    data: [true, true],
  },
  {
    feature: 'Prevents/Treats Gum Disease',
    data: [true, true],
  },
  {
    feature: 'Stain Removal',
    data: ['Moderate to High', 'Mild'],
  },
  {
    feature: 'Restores Damaged Teeth (Fillings, Crowns)',
    data: [true, 'N/A'],
  },
  {
    feature: 'Brightens Teeth',
    data: [true, true],
  },
  {
    feature: 'Freshens Breath',
    data: [true, true],
  },
  {
    feature: 'Paediatric Care (Children’s Dental Needs)',
    data: [true, 'N/A'],
  },
  {
    feature: 'Recommended Frequency',
    data: ['Every 3-6 months or as needed', 'Every 3-6 months'],
  },
];

export const tableData = {
  title: 'Dental Therapy vs. Professional Hygiene Comparison',
  description:
    'Compare dental therapy treatments, professional hygiene, and doing nothing to understand their benefits:',
  content: {
    tableHeadData,
    tableBodyData,
  },
};
