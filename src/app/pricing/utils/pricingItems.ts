// utils/pricingItems.js

export const pricingItems = [
  {
    title: 'Examinations',
    products: [
      {
        description: 'New patient examination',
        price: 99,
      },
      {
        description: '(Includes diagnostic small X-rays, free full mouth scan and diagnostic pictures)',
      },
      { description: 'Routine examination', price: 55 },
      { description: 'Non-emergency consultation/assessment', price: 55 },
      { description: 'Under 16 new patient examination', price: 49 },
      { description: 'Under 16 routine examination', price: 25 },

      { description: 'Small X-Rays', price: 12, priceDescription: 'each' },
      { description: 'Large full mouth X-ray (OPG)', price: 50 },
      { description: 'Cone-beam CT scan', price: 200 },
    ],
  },
  {
    title: 'Emergency',
    products: [
      {
        description: 'Emergency Assessment (registered patient)',
        price: 65,
        priceDescription: '+ Treatment cost if required',
      },
      {
        description: 'Emergency Appointment (non registered)',
        price: 150,
        priceDescription: 'Includes simple emergency treatment',
      },
    ],
  },
  {
    title: 'Hygiene Treatments',
    products: [
      { description: 'Initial direct access hygiene assessment', price: 135 },
      {
        description: `Includes pictures of teeth and gums, free hygiene support
pack, superficial professional mechanical plaque removal and air polishing for stain removal`,
      },
      { description: 'Routine hygiene maintenance appointment', price: 85 },
      { description: 'Air polish (includes routine hygiene appointment)', price: 150 },
      {
        description: `Full root surface debridement`,
        price: 150,
        priceDescription: 'per appointment',
      },
    ],
  },
  {
    title: 'Practice Plans',
    products: [
      { description: 'Adult Membership Plan (16+)', price: 24.99, priceDescription: 'per month' },
      {
        description: `Includes:`,
      },
      {
        description: `- 2 Routine examinations per year`,
      },
      {
        description: `- 2 Hygiene maintenance appointments per year`,
      },
      {
        description: `- 1 Emergency assessment per
year`,
      },
      {
        description: `- Routine small X-rays pictures and scans`,
      },
      {
        description: `- Free access to worldwide emergency cover`,
      },
      {
        description: ``,
      },
      { description: "Children's Membership Plan", price: 5.99, priceDescription: 'per month' },
      {
        description: `Includes:`,
      },
      {
        description: `- 2 Routine examinations per
year`,
      },
      {
        description: `- Fluoride varnish application`,
      },
      {
        description: `- Free access to worldwide emergency cover`,
      },
    ],
  },
  {
    title: 'Restorative Dentistry',
    products: [
      {
        description: `*Our restorations all come with a 12 month guarantee unless stated otherwise.`,
      },
      { isHeader: true, description: 'Composite filling:' },
      { description: '1 surface', priceDescriptionBefore: 'from', price: 175 },
      { description: '2 surfaces', priceDescriptionBefore: 'from', price: 225 },
      { description: '3 surfaces', priceDescriptionBefore: 'from', price: 275 },
      { isHeader: true, description: 'Dental Crowns/Onlays/Inlays:' },
      { description: 'Porcelain, Emax or Zirconia', priceDescriptionBefore: 'from', price: 849 },
      { description: 'Gold - Additional charge depending on quantity.' },
      { isHeader: true, description: 'Dental Bridge:' },
      { description: 'Resin Bonded Bridge', priceDescriptionBefore: 'from', price: 475, priceDescription: 'per unit' },
      {
        description: 'Conventional Fixed Bridge',
        priceDescriptionBefore: 'from',
        price: 649,
        priceDescription: 'per unit',
      },
    ],
  },
  {
    title: 'Dental Aesthetics/Smile Makeovers',
    products: [
      {
        isHeader: true,
        description: `Composite:`,
      },
      {
        description: 'Composite edge bonding',
        priceDescriptionBefore: 'from',
        price: 175,
        priceDescription: 'per tooth',
      },
      {
        description: 'Composite bonding/Veneers',
        priceDescriptionBefore: 'from',
        price: 275,
        priceDescription: 'per tooth',
      },

      {
        isHeader: true,
        description: `Veneers:`,
      },
      {
        description: 'Highly aesthetic custom Porcelain/Emax Veneers',
        priceDescriptionBefore: 'from',
        price: 799,
        priceDescription: 'per unit',
      },
      {
        description: 'Ultrathin specialised Lumineers (approx. 0.3mm)',
        priceDescriptionBefore: 'from',
        price: 849,
        priceDescription: 'per unit',
      },
      {
        isHeader: true,
        description: `Tooth Whitening:`,
      },
      {
        description: 'White dental beauty tooth whitening',
        price: 425,
      },

      {
        description: 'In house tooth whitening for rapid results including home trays',
        price: 799,
      },
    ],
  },
  {
    title: 'Root Canal Treatment',
    products: [
      { description: 'Single rooted tooth', priceDescriptionBefore: 'from', price: 599 },
      { description: 'Premolar tooth', priceDescriptionBefore: 'from', price: 649 },
      { description: 'Molar root canal treatment', priceDescriptionBefore: 'from', price: 749 },
      { description: 'Emergency extirpation', priceDescriptionBefore: 'from', price: 175 },
    ],
  },
  {
    title: 'Tooth Removal',
    products: [
      {
        description: `Including therapeutic procedures in an effort to reduce post-operative complications and
discomfort.`,
      },
      { description: 'Single rooted tooth', priceDescriptionBefore: 'from', price: 175 },
      { description: 'Molar extraction', priceDescriptionBefore: 'from', price: 225 },
      { description: 'Surgical or Third molar extraction (wisdom tooth)', priceDescriptionBefore: 'from', price: 275 },
      { description: 'Extraction of deciduous/child tooth', priceDescriptionBefore: 'from', price: 125 },
    ],
  },
  {
    title: 'Dentures',
    products: [
      { description: 'Partial acrylic dentures', priceDescriptionBefore: 'from', price: 895 },
      { description: 'Complete acrylic dentures', priceDescriptionBefore: 'from', price: 1249 },
      { description: 'Cobalt chrome (metal) dentures', priceDescriptionBefore: 'from', price: 1249 },
      { description: 'Addition of tooth to denture or lab based reline', priceDescriptionBefore: 'from', price: 199 },
      { description: 'Denture repair', priceDescriptionBefore: 'from', price: 125 },
    ],
  },
  {
    title: 'Mouth Guards',
    products: [
      {
        description: 'Dual laminate (soft inside/hard outside) nightguard',
        price: 175,
      },
      {
        description: 'Sports guard (selection of colours and designs available)',
        price: 150,
      },
    ],
  },
  {
    title: 'Invisalign',
    products: [
      { description: 'Invisalign consultation', priceDescriptionBefore: 'Free' },

      {
        isHeader: true,
        description: 'Invisalign:',
      },
      { description: 'Includes Invisalign Vivera retainers (3 sets included)', price: 3999 },
      { description: '*Can vary depending on complexity' },
      { isHeader: true, description: 'Retainers:' },

      { description: 'Invisalign Vivera retainers (3 sets included)', price: 399 },
      { description: 'Essix retainers', price: 199 },
      { description: 'Fixed/bonded wire retainer', price: 250, priceDescription: 'per arch' },
    ],
  },
];
