export const phone = '(651) 340-1445';
export const telephone = 'tel:+16513401445';
export const email = 'info@mymedicalclinicmn.com';
export const appointment =
  'https://mymedicalclinicmn.com/request-a-new-appointment/';
export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string;
  items: string[];
  source: string;
  note: string;
  inquiry?: boolean;
  group?: string;
}
export const services: Service[] = [
  {
    slug: 'work-injury-care',
    title: 'Work injury care',
    short: 'Care for the people behind the work.',
    description:
      'Evaluation and treatment of work-related injuries, with communication between employees, employers, and the care team.',
    icon: 'cross',
    items: [
      'Workplace injury evaluation',
      'Treatment and return-to-work planning',
      'Employer and employee communication',
      'Workers’ compensation support',
    ],
    source: 'work-related-injuries/',
    note: 'Call to discuss the injury and arrange a visit. For a medical emergency, call 911.',
  },
  {
    slug: 'physicals-screenings',
    title: 'Physicals & screenings',
    short: 'A healthy start. A safer workplace.',
    description:
      'Employment, DOT, and fitness-for-duty examinations for the demands of your workforce.',
    icon: 'clipboard',
    items: [
      'DOT physical examinations',
      'Pre-employment and annual physicals',
      'Fitness-for-duty examinations',
      'Regulatory and compliance examinations',
    ],
    source: 'physical-examinations/',
    note: 'Tell our team which examination your employer requires and ask which documents to bring.',
  },
  {
    slug: 'drug-alcohol-testing',
    title: 'Drug & alcohol testing',
    short: 'Testing that supports your workplace.',
    description:
      'Drug screening and breath alcohol testing for pre-employment and random testing needs, including DOT testing.',
    icon: 'test',
    items: [
      'Pre-employment drug screening',
      'Random drug testing',
      'DOT drug screening',
      'Breath alcohol testing',
    ],
    source: 'drug-screening-alcohol-testing/',
    note: 'Drug screening walk-ins end at 3 pm. EScreen collection at Maplewood and Eagan is listed as 9 am–3 pm. Call to confirm the right location and collection window.',
  },
  {
    slug: 'on-site-services',
    title: 'On-site services',
    short: 'Employee health. At your workplace.',
    description:
      'Connect with MMC about workplace flu clinics and on-site drug testing.',
    icon: 'building',
    items: ['Employer-hosted flu vaccination clinics', 'On-site drug testing'],
    source: 'onsite-flu-clinic/',
    note: 'Call to confirm service area, scheduling, staffing, and pricing for your workplace. Ask about arrangements for after-hours on-site testing.',
  },
  {
    slug: 'exposure-exams',
    title: 'Exposure exams',
    short: 'Care for job-specific health needs.',
    description:
      'Occupational examinations and exposure testing based on the work your employees do.',
    icon: 'shield',
    items: [
      'Asbestos and silica physical exams',
      'Lead and other heavy-metal exposure testing',
      'Hazmat physicals',
      'Firefighter and law enforcement physicals',
    ],
    source: 'other-medical-services/',
    note: 'Discuss job duties and exposure requirements with our team before scheduling.',
  },
  {
    slug: 'employee-health',
    title: 'Employee health',
    short: 'Support beyond the physical.',
    description:
      'Connect your team with additional employee health services available through My Medical Clinic.',
    icon: 'heart',
    items: [
      'TB testing',
      'Vision testing',
      'Pulmonary function testing',
      'Executive physicals',
    ],
    source: 'other-medical-services/',
    note: 'Ask the clinic which service and location fit your employee health needs.',
  },
];
export const clinics = [
  {
    slug: 'eagan',
    name: 'Eagan',
    street: '4130 Blackhawk Road, Suite 112',
    city: 'Eagan, MN 55122',
    hours: [
      ['Monday–Friday', '8:30 am–5:00 pm'],
      ['Saturday', 'By appointment'],
      ['Sunday', 'Closed'],
    ],
    collection: 'EScreen collection: 9 am–3 pm.',
  },
  {
    slug: 'maplewood',
    name: 'Maplewood',
    street: '1560 Beam Avenue, Suite F',
    city: 'Maplewood, MN 55109',
    hours: [
      ['Monday–Friday', '8:30 am–5:00 pm'],
      ['Saturday–Sunday', 'Closed'],
    ],
    collection: 'EScreen collection: 9 am–3 pm.',
  },
  {
    slug: 'plymouth',
    name: 'Plymouth',
    street: '12805 Hwy 55, Suite 125',
    city: 'Plymouth, MN 55441',
    hours: [
      ['Monday', '12:30 pm–4:00 pm'],
      ['Tuesday–Friday', '10:00 am–4:00 pm'],
      ['Saturday–Sunday', 'Closed'],
    ],
    collection: 'Call to confirm your testing collection window.',
  },
];
export const team = [
  [
    'Bhavana Anand',
    'MD, MPH',
    'Medical Director',
    'Occupational medicine and employee health.',
  ],
  [
    'Chaitanya Anand',
    'MD',
    'Founder & Owner',
    'Internal medicine and lifestyle medicine.',
  ],
  ['Arshad Ahsan', 'MD', 'Medical Doctor', ''],
  [
    'Alena Nelson',
    'MSN, APRN, FNP-C',
    'Family Nurse Practitioner',
    'Occupational and general medicine.',
  ],
  ['Taylor Teichert', 'Doctor of Chiropractic', 'Chiropractic Care', ''],
  ['Kristen Bleninger', 'APRN', 'Advanced Practice Registered Nurse', ''],
];

services.push(
  ...[
    {
      slug: 'pre-employment-screening',
      title: 'Pre-employment screening',
      short: 'Prepare for your next hire.',
      description:
        'Employment physicals and screening services for applicants and employees.',
      icon: 'clipboard',
      items: [
        'Employment physical examinations',
        'Pre-employment testing',
        'Job-specific exam requirements',
      ],
      source: 'physical-examinations/',
      note: 'Tell us which physical or screening your employer requires. Confirm any authorization and job-description documents before the visit.',
      group: 'Clinical services',
    },
    {
      slug: 'dot-physical-exams',
      title: 'DOT physical exams',
      short: 'A clear path to your driver examination.',
      description:
        'MMC provides Department of Transportation physical examinations. Contact the clinic to arrange your visit.',
      icon: 'clipboard',
      items: [
        'DOT physical examinations',
        'Appointment planning',
        'Exam documentation questions',
      ],
      source: 'physical-examinations/',
      note: 'Call to confirm examiner availability, the documents needed for your circumstances, and your appointment time. Certification depends on the examination.',
      group: 'Clinical services',
    },
    {
      slug: 'fitness-for-duty-exams',
      title: 'Fitness-for-duty exams',
      short: 'Care built around job demands.',
      description:
        'Discuss an examination that considers an employee’s health in relation to the physical requirements of their role.',
      icon: 'shield',
      items: [
        'Fitness-for-duty examinations',
        'Job-duty information review',
        'Employer-directed appointment planning',
      ],
      source: 'physical-examinations/',
      note: 'Provide the clinic with your employer’s examination request and ask what job-duty information is needed.',
      group: 'Clinical services',
    },
    {
      slug: 'immigration-medical-exams',
      title: 'Immigration medical exams',
      short: 'Support for your immigration physical.',
      description:
        'MMC provides immigration physicals, vaccination review, and I-693 medical examination paperwork.',
      icon: 'clipboard',
      items: [
        'Immigration medical examination',
        'Vaccination records review',
        'I-693 medical paperwork',
      ],
      source: 'immigration-physicals/',
      note: 'Call for the current preparation checklist, pricing, and scheduling. Bring existing vaccination records as instructed by the clinic. Do not assume a form or test requirement from a past visit is unchanged.',
      group: 'Clinical services',
    },
    {
      slug: 'hazmat-medical-surveillance',
      title: 'Hazmat & exposure examinations',
      short: 'Support for specialized workplace requirements.',
      description:
        'MMC lists Hazmat physicals and asbestos, silica, lead, and other heavy-metal exposure testing.',
      icon: 'shield',
      items: [
        'Hazmat physicals',
        'Asbestos and silica exams',
        'Lead and other heavy-metal exposure testing',
      ],
      source: 'other-medical-services/',
      note: 'Share the requested exam, job duties, and workplace exposure details with the clinic. Confirm the scope of testing before the visit.',
      group: 'Clinical services',
    },
    {
      slug: 'vaccine-flu-administration',
      title: 'On-site flu vaccination',
      short: 'Bring flu vaccination to your workplace.',
      description:
        'Arrange a discussion about an employer-hosted flu clinic with My Medical Clinic.',
      icon: 'heart',
      items: [
        'Employer-hosted flu clinics',
        'Scheduling and site coordination',
        'Program pricing discussion',
      ],
      source: 'onsite-flu-clinic/',
      note: 'Contact MMC with your location, estimated participation, and preferred dates. Availability and final arrangements must be confirmed.',
      group: 'On-site programs',
    },
    {
      slug: 'on-site-medical-services',
      title: 'On-site medical services',
      short: 'Bring employee health closer.',
      description:
        'Talk with MMC about its published on-site flu clinic and drug-testing services.',
      icon: 'building',
      items: [
        'On-site flu clinics',
        'On-site drug testing',
        'Workplace scheduling inquiries',
      ],
      source: '',
      note: 'Call to confirm which services can be provided at your worksite. Service area, staffing, timing, and fees are arranged with the clinic.',
      group: 'On-site programs',
    },
    {
      slug: '24-7-365-drug-and-alcohol-testing-on-site',
      title: 'On-site drug testing',
      short: 'Discuss testing at your workplace.',
      description:
        'MMC advertises on-site drug testing. Contact the clinic for arrangements and questions about after-hours availability.',
      icon: 'test',
      items: [
        'On-site drug testing inquiries',
        'Collection scheduling',
        'After-hours arrangements',
      ],
      source: '',
      note: 'Confirm the appropriate contact, collection type, location, and response arrangements with MMC. This page does not guarantee immediate dispatch or on-site alcohol testing.',
      group: 'On-site programs',
    },
    {
      slug: 'specialty-services',
      title: 'Specialty occupational services',
      short: 'Care for specialized roles.',
      description:
        'Explore MMC’s published specialty physicals and exposure testing.',
      icon: 'shield',
      items: [
        'Firefighter and law enforcement physicals',
        'Coast Guard and Hazmat physicals',
        'Asbestos, silica, lead, and other heavy-metal testing',
      ],
      source: 'other-medical-services/',
      note: 'Contact us with the examination requirements for your role. Ask which tests and documentation apply before booking.',
      group: 'Clinical services',
    },
    {
      slug: 'vision-testing',
      title: 'Vision testing',
      short: 'Discuss your employee screening needs.',
      description: 'Vision testing is listed among MMC’s medical services.',
      icon: 'clipboard',
      items: ['Vision testing', 'Employer screening inquiries'],
      source: 'other-medical-services/',
      note: 'Confirm which vision assessment is needed and where it can be completed.',
      group: 'Clinical services',
    },
    {
      slug: 'pulmonary-function-testing',
      title: 'Pulmonary function testing',
      short: 'Plan your testing visit.',
      description:
        'Pulmonary function testing is listed among MMC’s medical services.',
      icon: 'heart',
      items: [
        'Pulmonary function testing',
        'Workplace examination coordination',
      ],
      source: 'other-medical-services/',
      note: 'Contact the clinic to confirm the requested test and preparation instructions.',
      group: 'Clinical services',
    },
    {
      slug: 'on-site-programs',
      title: 'On-site programs',
      short: 'Coordinate care at work.',
      description:
        'Discuss an on-site program around MMC’s flu vaccination and drug-testing services.',
      icon: 'building',
      items: [
        'Flu vaccination clinics',
        'Drug-testing arrangements',
        'Worksite coordination',
      ],
      source: 'onsite-flu-clinic/',
      note: 'Call with your company location and the services you need. Our team can discuss availability and next steps.',
      group: 'On-site programs',
    },
    {
      slug: 'faa-medical-exams',
      title: 'FAA medical exams',
      short: 'Discuss your requirements with MMC.',
      description:
        'Contact My Medical Clinic to ask about faa medical exams. Availability and the appropriate next steps must be confirmed directly with the clinic.',
      icon: 'clipboard',
      items: [
        'Describe the service or evaluation you need',
        'Confirm whether MMC can provide or arrange it',
        'Ask about scheduling and required documentation',
      ],
      source: '',
      note: 'This is a service inquiry page. MMC’s current website does not confirm this offering. Please verify availability before booking or directing an employee to a clinic.',
      inquiry: true,
      group: 'Additional service inquiries',
    },
    {
      slug: 'mro-services',
      title: 'Medical review officer services',
      short: 'Discuss your requirements with MMC.',
      description:
        'Contact My Medical Clinic to ask about medical review officer services. Availability and the appropriate next steps must be confirmed directly with the clinic.',
      icon: 'clipboard',
      items: [
        'Describe the service or evaluation you need',
        'Confirm whether MMC can provide or arrange it',
        'Ask about scheduling and required documentation',
      ],
      source: '',
      note: 'This is a service inquiry page. MMC’s current website does not confirm this offering. Please verify availability before booking or directing an employee to a clinic.',
      inquiry: true,
      group: 'Additional service inquiries',
    },
    {
      slug: 'respirator-fit-test',
      title: 'Respirator fit testing',
      short: 'Discuss your requirements with MMC.',
      description:
        'Contact My Medical Clinic to ask about respirator fit testing. Availability and the appropriate next steps must be confirmed directly with the clinic.',
      icon: 'clipboard',
      items: [
        'Describe the service or evaluation you need',
        'Confirm whether MMC can provide or arrange it',
        'Ask about scheduling and required documentation',
      ],
      source: '',
      note: 'This is a service inquiry page. MMC’s current website does not confirm this offering. Please verify availability before booking or directing an employee to a clinic.',
      inquiry: true,
      group: 'Additional service inquiries',
    },
    {
      slug: 'vaccine-and-titers',
      title: 'Occupational immunization & titers',
      short: 'Discuss your requirements with MMC.',
      description:
        'Contact My Medical Clinic to ask about occupational immunization & titers. Availability and the appropriate next steps must be confirmed directly with the clinic.',
      icon: 'clipboard',
      items: [
        'Describe the service or evaluation you need',
        'Confirm whether MMC can provide or arrange it',
        'Ask about scheduling and required documentation',
      ],
      source: '',
      note: 'This is a service inquiry page. MMC’s current website does not confirm this offering. Please verify availability before booking or directing an employee to a clinic.',
      inquiry: true,
      group: 'Additional service inquiries',
    },
    {
      slug: 'vision-and-hearing-screening',
      title: 'Hearing & vision screening programs',
      short: 'Discuss your requirements with MMC.',
      description:
        'Contact My Medical Clinic to ask about hearing & vision screening programs. Availability and the appropriate next steps must be confirmed directly with the clinic.',
      icon: 'clipboard',
      items: [
        'Describe the service or evaluation you need',
        'Confirm whether MMC can provide or arrange it',
        'Ask about scheduling and required documentation',
      ],
      source: '',
      note: 'This is a service inquiry page. MMC’s current website does not confirm this offering. Please verify availability before booking or directing an employee to a clinic.',
      inquiry: true,
      group: 'Additional service inquiries',
    },
    {
      slug: 'work-performance-centers',
      title: 'Work performance services',
      short: 'Discuss your requirements with MMC.',
      description:
        'Contact My Medical Clinic to ask about work performance services. Availability and the appropriate next steps must be confirmed directly with the clinic.',
      icon: 'clipboard',
      items: [
        'Describe the service or evaluation you need',
        'Confirm whether MMC can provide or arrange it',
        'Ask about scheduling and required documentation',
      ],
      source: '',
      note: 'This is a service inquiry page. MMC’s current website does not confirm this offering. Please verify availability before booking or directing an employee to a clinic.',
      inquiry: true,
      group: 'Work performance inquiries',
    },
    {
      slug: 'physical-abilities-tests',
      title: 'Physical abilities tests',
      short: 'Discuss your requirements with MMC.',
      description:
        'Contact My Medical Clinic to ask about physical abilities tests. Availability and the appropriate next steps must be confirmed directly with the clinic.',
      icon: 'clipboard',
      items: [
        'Describe the service or evaluation you need',
        'Confirm whether MMC can provide or arrange it',
        'Ask about scheduling and required documentation',
      ],
      source: '',
      note: 'This is a service inquiry page. MMC’s current website does not confirm this offering. Please verify availability before booking or directing an employee to a clinic.',
      inquiry: true,
      group: 'Work performance inquiries',
    },
    {
      slug: 'work-conditioning-program',
      title: 'Work conditioning',
      short: 'Discuss your requirements with MMC.',
      description:
        'Contact My Medical Clinic to ask about work conditioning. Availability and the appropriate next steps must be confirmed directly with the clinic.',
      icon: 'clipboard',
      items: [
        'Describe the service or evaluation you need',
        'Confirm whether MMC can provide or arrange it',
        'Ask about scheduling and required documentation',
      ],
      source: '',
      note: 'This is a service inquiry page. MMC’s current website does not confirm this offering. Please verify availability before booking or directing an employee to a clinic.',
      inquiry: true,
      group: 'Work performance inquiries',
    },
    {
      slug: 'functional-capacity-evaluations',
      title: 'Functional capacity evaluations',
      short: 'Discuss your requirements with MMC.',
      description:
        'Contact My Medical Clinic to ask about functional capacity evaluations. Availability and the appropriate next steps must be confirmed directly with the clinic.',
      icon: 'clipboard',
      items: [
        'Describe the service or evaluation you need',
        'Confirm whether MMC can provide or arrange it',
        'Ask about scheduling and required documentation',
      ],
      source: '',
      note: 'This is a service inquiry page. MMC’s current website does not confirm this offering. Please verify availability before booking or directing an employee to a clinic.',
      inquiry: true,
      group: 'Work performance inquiries',
    },
    {
      slug: 'job-task-site-analysis',
      title: 'Job task analysis',
      short: 'Discuss your requirements with MMC.',
      description:
        'Contact My Medical Clinic to ask about job task analysis. Availability and the appropriate next steps must be confirmed directly with the clinic.',
      icon: 'clipboard',
      items: [
        'Describe the service or evaluation you need',
        'Confirm whether MMC can provide or arrange it',
        'Ask about scheduling and required documentation',
      ],
      source: '',
      note: 'This is a service inquiry page. MMC’s current website does not confirm this offering. Please verify availability before booking or directing an employee to a clinic.',
      inquiry: true,
      group: 'Work performance inquiries',
    },
    {
      slug: 'online-respirator-clearance-form',
      title: 'Respirator clearance',
      short: 'Discuss your requirements with MMC.',
      description:
        'Contact My Medical Clinic to ask about respirator clearance. Availability and the appropriate next steps must be confirmed directly with the clinic.',
      icon: 'clipboard',
      items: [
        'Describe the service or evaluation you need',
        'Confirm whether MMC can provide or arrange it',
        'Ask about scheduling and required documentation',
      ],
      source: '',
      note: 'This is a service inquiry page. MMC’s current website does not confirm this offering. Please verify availability before booking or directing an employee to a clinic.',
      inquiry: true,
      group: 'Additional service inquiries',
    },
  ],
);
