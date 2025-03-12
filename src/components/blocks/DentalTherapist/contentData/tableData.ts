const tableHeadData = ['Treatments', 'Hygienist', 'Dental Therapist', 'Dentist'];

const tableBodyData = [
  {
    feature: 'Clinical exam inc MH + DH. Oral cancer screening.',
    data: [true, true, true],
  },
  {
    feature: 'Periodontal exam + indices',
    data: [true, true, true],
  },
  {
    feature: 'Diagnosis + treatment plan within competence',
    data: [true, true, true],
  },
  {
    feature: 'Prescribe radiographs',
    data: [true, true, true],
  },
  {
    feature: 'Take, process, and interpret radiographic films within scope',
    data: [true, true, true],
  },
  {
    feature: 'Plan delivery of care for patients',
    data: [true, true, true],
  },
  {
    feature: 'Sub and supra PMPR including adjustments of PRFs',
    data: [true, true, true],
  },
  {
    feature: 'Fissure sealants',
    data: [true, true, true],
  },
  {
    feature: 'Administer LA',
    data: [true, true, true],
  },
  {
    feature: 'Impressions',
    data: [true, true, true],
  },
  {
    feature: 'Temporarily recement crowns and bridges',
    data: [true, true, true],
  },
  {
    feature: 'Direct + indirect restorations of primary teeth',
    data: [false, true, true],
  },
  {
    feature: 'Pulpotomies of primary teeth',
    data: [false, true, true],
  },
  {
    feature:
      'Direct restorations of secondary teeth (including multi surface, large + “deep” restorations not involving the pulp)',
    data: [false, true, true],
  },
  {
    feature: 'Direct and indirect pulp capping',
    data: [false, true, true],
  },
  {
    feature: 'Extraction of primary teeth',
    data: [false, true, true],
  },
  {
    feature: 'Extraction of secondary teeth',
    data: [false, false, true],
  },
  {
    feature: 'Fit lab made items- crowns, bridges, dentures',
    data: [false, false, true],
  },
  {
    feature: 'Endo on secondary teeth',
    data: [false, false, true],
  },
  {
    feature: 'Surgical procedures including placement of implants',
    data: [false, false, true],
  },
];

export const tableData = {
  title: 'Comparison of Scopes',
  description:
    'Compare the scope of practice between hygienists, dental therapists, and dentists to understand their roles in oral healthcare.',
  content: {
    tableHeadData,
    tableBodyData,
  },
};
