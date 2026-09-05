const tableHeadData = ['Feature', 'White Composite Fillings', 'Amalgam Fillings', 'Do Nothing'];

const tableBodyData = [
  {
    feature: 'Aesthetic Appearance',
    data: ['Natural tooth colour', 'Metallic silver', 'Visible decay/damage'],
  },
  {
    feature: 'Durability',
    data: ['Strong & long-lasting', 'Very durable', 'Weakens tooth structure'],
  },
  {
    feature: 'Mercury-Free',
    data: ['Yes', 'No', 'N/A'],
  },
  {
    feature: 'Preserves Tooth Structure',
    data: ['Minimal removal of healthy tooth', 'Requires more removal', 'Tooth decay progresses'],
  },
  {
    feature: 'Cost-Effectiveness',
    data: ['Moderate', 'Lower initial cost', 'Leads to expensive repairs later'],
  },
  {
    feature: 'Longevity of Tooth Health',
    data: ['Excellent when maintained', 'Good', 'Poor-risk of infection or tooth loss'],
  },
];

export const tableData = {
  title: 'Composite Fillings Comparison',
  description:
    'See how white composite fillings compare with traditional amalgam fillings or leaving a cavity untreated:',
  content: {
    tableHeadData,
    tableBodyData,
  },
};
