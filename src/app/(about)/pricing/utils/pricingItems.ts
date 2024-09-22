// utils/pricingItems.js

export const pricingItems = [
  {
    title: 'Examinations',
    products: [
      {
        description: 'New patient exam',
        price: 99,
      },
      {
        description: '(Includes diagnostic intra oral x-rays, free intra oral scan and diagnostic pictures)',
      },
      { description: 'Routine examination', price: 55 },
      { description: 'Non-emergency consultation/assessment', price: 55 },
      { description: 'Under 16 new patient examination', price: 49 },
      { description: 'Under 16 new patient examination', price: 49 },
      { description: 'Under 16 routine examination', price: 25 },
      {
        description: `*Note all required treatment for patients under 16 is at 50% cost of quoted price (not including
cosmetic or orthodontic treatments)`,
      },
      { description: 'Small X-Rays', price: 12, priceDescription: 'each' },
      { description: 'Large full mouth X-ray (OPG)', price: 50 },
      {
        description: 'Emergency assessment (registered patient)',
        price: 65,
        priceDescription: '+ treatment cost if required',
      },
      { description: 'One off emergency appointment (non registered)', price: 175 },
      { description: 'Practice Plan', price: 25.99, priceDescription: 'per month' },
      {
        description: `Includes 2 routine examinations and 2 hygiene maintenance appointments per
year, required intra oral pictures and scans as well as up to 2 small x-rays each year if required.`,
      },
      {
        description: `Gives access to worldwide emergency cover and 10% off required treatment. (cosmetic treatments,
orthodontic and implants not included).`,
      },
    ],
  },
  {
    title: 'Hygiene Treatments',
    products: [
      { description: 'Initial direct access hygiene assessment (60 mins)', price: 195 },
      {
        description: `Includes intra oral pictures, free hygiene support
pack and superficial professional mechanical plaque removal and air polishing for stain removal`,
      },
      { description: 'Routine hygiene maintenance appointment (30 mins)', price: 85 },
      { description: 'Air polish (includes routine hygiene appointment)', price: 150 },
      {
        description: `When active management of gum disease is required this will require initial assessment
appointment with either Dentist or Dental Therapist and require full deep professional mechanical
plaque removal in each affected quadrant (45 mins each)`,
        price: 150,
      },
    ],
  },
  {
    title: 'Restorative Dentistry',
    products: [
      {
        description: `We are an amalgam free practice priding ourselves in high quality seamless tooth
restorations.`,
      },
      {
        description: `We have great pride and confidence in the work we carry out thus every restoration carried
out comes with a guarantee of 12 months unless stated otherwise.`,
      },
      { isHeader: true, description: 'Composite filling:' },
      { description: '1 surface', priceDescriptionBefore: 'from', price: 175 },
      { description: '2 surfaces', priceDescriptionBefore: 'from', price: 225 },
      { description: '3 surfaces', priceDescriptionBefore: 'from', price: 275 },
      { isHeader: true, description: 'Dental Crowns/Onlays/Inlays:' },
      { description: 'Porcelain, emax or zirconia', priceDescriptionBefore: 'from', price: 849 },
      { description: 'Gold - additional charge depending on amount of gold required/requested.' },
      { isHeader: true, description: 'Dental Bridge:' },
      { description: 'Resin bonded bridge', priceDescriptionBefore: 'from', price: 849 },
      {
        description: 'Conventional fixed bridge (fixed with crowns)',
        priceDescriptionBefore: 'from',
        price: 799,
        priceDescription: 'per unit',
      },
    ],
  },
  {
    title: 'Dental Aesthetics/Smile Makeovers',
    products: [
      {
        description: 'Composite edge bonding',
        priceDescriptionBefore: 'from',
        price: 175,
        priceDescription: 'per tooth',
      },
      {
        description: 'Composite Bonding/Veneers',
        priceDescriptionBefore: 'from',
        price: 249,
        priceDescription: 'per tooth',
      },
      {
        description: `*Note complicated cases may require a full smile design and trial/temporary smile prior to
treatment which would be additional cost to be discussed at assessment. From £50 per tooth
depending on complexity.`,
      },
      {
        isHeader: true,
        description: `Veneers:`,
      },
      {
        description: 'Highly aesthetic custom porcelain/emax veneers',
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
        description: 'Boutique tooth whitening including assessments, before/after photos and custom trays',
        price: 425,
      },
      {
        description: 'Enlighten premium tooth whitening with guaranteed B1 shade',
        price: 649,
      },
      {
        description: 'In house tooth whitening for when rapid results are required including home trays',
        price: 799,
      },
    ],
  },
  {
    title: 'Root Canal Treatment',
    products: [
      { description: 'Single rooted tooth', priceDescriptionBefore: 'from', price: 549 },
      { description: '2 rooted tooth not including molars', priceDescriptionBefore: 'from', price: 699 },
      { description: 'Molar root canal treatment', priceDescriptionBefore: 'from', price: 749 },
      {
        description: `*Note if a crown is required following root canal treatment then the gold standard would be for this
to be placed within 30 days of root treatment completion.`,
      },
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
    ],
  },
  {
    title: 'Dentures',
    products: [
      { description: 'Partial acrylic dentures', priceDescriptionBefore: 'from', price: 895 },
      { description: 'Complete acrylic dentures', priceDescriptionBefore: 'from', price: 1249 },
      { description: 'Chrome (metal) dentures', priceDescriptionBefore: 'from', price: 1249 },
      { description: 'Denture repair', priceDescriptionBefore: 'from', price: 125 },
      { description: 'Addition of tooth to denture or lab base reline', priceDescriptionBefore: 'from', price: 199 },
    ],
  },
  {
    title: 'Invisalign',
    products: [
      { description: 'Invisalign assessment', priceDescriptionBefore: 'no cost' },
      { isHeader: true, description: 'Invisalign GO (up to 26 aligners and no movement of back molars):' },
      { description: 'Single arch', priceDescriptionBefore: 'from', price: 2895 },
      { description: 'Dual arch', priceDescriptionBefore: 'from', price: 3895 },
      {
        isHeader: true,
        description: 'Invisalign comprehensive (over 26 aligners or movement of back molars required):',
      },
      { description: 'Single arch', priceDescriptionBefore: 'from', price: 3995 },
      { description: 'Dual arch', priceDescriptionBefore: 'from', price: 4999 },
      { isHeader: true, description: 'Retainers:' },
      {
        description: `1 set of essix retainers is included at no additional cost with any tooth straightening
treatments however gold standard vivera retainers are strongly recommended.`,
      },
      { description: 'Invisalign vivera retainers (3 sets included)', price: 399 },
    ],
  },
  {
    title: 'Opening Offers',
    products: [
      {
        description: `50% off new patient assessment and 1st routine hygiene appointment (+includes air polish) if
giving name/phone number/email prior to our opening date.`,
        priceDescriptionBefore: 'OVER',
        price: 150,
        priceDescription: 'OFF',
      },
      {
        isHeader: true,
        description: `Invisalign opening offers: (applicable to dual arch cases)`,
      },
      { description: 'Single arch Invisalign straightening only', price: 250, priceDescription: 'OFF' },
      {
        description: `Dual arch Invisalign go – £250 off cost including free boutique whitening worth £425 and
vivera retainers worth £399`,
        priceDescriptionBefore: 'OVER',
        price: 1000,
        priceDescription: 'OFF',
      },
    ],
  },
];
