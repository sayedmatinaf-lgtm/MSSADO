/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FocusArea {
  id: string;
  slug: string;
  title: string;
  icon: string;
  photo: string;
  description: string;
  keyActivities: string[];
}

export interface ProjectDetail {
  id: string;
  slug: string;
  title: string;
  mainImage: string;
  location: string;
  year: string;
  sector?: string;
  shortDesc: string;
  fullDesc: string;
  partnerLogos: { name: string; img: string }[];
  keyActivitiesHeading?: string;
  keyActivities: string[];
  infoBox: {
    title: string;
    grantOrg?: string;
    location: string;
    duration: string;
    partners?: string;
    fundingSource?: string;
    implementingOrg?: string;
  };
  overviewImages?: {
    type: 'image' | 'video';
    src: string;
    alt: string;
    videoUrl?: string;
  }[];
  bottomLogos?: { name: string; img: string }[];
}

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: 'wash',
    slug: 'water-resources-wash-climate-adaptation',
    title: 'Water Resources, WASH & Climate Adaptation',
    icon: '/assets/mirab/focus_wash.png',
    photo: '/assets/mirab/focus_detail_wash.jpg',
    description: 'Catchment and district-scale water management; groundwater quantity and quality assessment; safe drinking water, sanitation and hygiene; household treatment including biosand filtration; school water and sewage systems. Our largest area of delivery.',
    keyActivities: [
      'Catchment and district-scale water management',
      'Groundwater quantity and quality assessment',
      'Safe drinking water, sanitation and hygiene',
      'Household treatment including biosand filtration and school WASH'
    ]
  },
  {
    id: 'climate',
    slug: 'climate-adaptation-environment',
    title: 'Climate Adaptation & Environment',
    icon: '/assets/mirab/focus_climate.png',
    photo: '/assets/mirab/focus_detail_climate.jpg',
    description: 'Climate vulnerability and adaptation assessment; glacier and watershed protection; research on climate-driven displacement; tree-planting and green-space campaigns; support to farmers adapting to a drier, less predictable climate.',
    keyActivities: [
      'Climate vulnerability and adaptation assessment',
      'Glacier and watershed protection',
      'Research on climate-driven displacement',
      'Tree-planting and green-space campaigns'
    ]
  },
  {
    id: 'drr',
    slug: 'drr-early-warning-response',
    title: 'DRR, Early Warning & Response',
    icon: '/assets/mirab/focus_drr.png',
    photo: '/assets/mirab/focus_detail_drr.jpg',
    description: 'Community early-warning systems and volunteer "human sensor" networks; multi-hazard risk assessment; preparedness planning and drills; post-earthquake structural assessment training; response through the WASH and ESNFI Clusters. Warning that reaches the household in time.',
    keyActivities: [
      'Community early-warning systems and volunteer human sensor networks',
      'Multi-hazard risk assessment and emergency drills',
      'Post-earthquake structural assessment training',
      'Response through the WASH and ESNFI Clusters'
    ]
  },
  {
    id: 'research',
    slug: 'applied-research-evidence-dialogue',
    title: 'Applied Research, Evidence & Dialogue',
    icon: '/assets/mirab/focus_research.png',
    photo: '/assets/mirab/focus_detail_research.jpg',
    description: 'Primary field research, geospatial and remote sensing analysis, publication, expert webinars and multi-stakeholder dialogues. We turn evidence into policy engagement, conferences, media contribution and public awareness in Dari and Pashto.',
    keyActivities: [
      'Primary field research and geospatial analysis',
      'Remote sensing and satellite data integration',
      'Expert webinars and multi-stakeholder dialogues',
      'Policy engagement and public awareness in Dari and Pashto'
    ]
  },
  {
    id: 'partnership',
    slug: 'partnership-resource-mobilization',
    title: 'Partnership & Resource Mobilization for Afghanistan',
    icon: '/assets/mirab/focus_agriculture.png',
    photo: '/assets/mirab/focus_detail_agriculture.jpg',
    description: 'MSSADO builds donor-standard systems, brokers consortium and sub-grant partnerships, and serves as a credible national delivery partner for international organizations that need technically capable presence inside the country.',
    keyActivities: [
      'Building donor-standard systems and compliance',
      'Brokering consortium and sub-grant partnerships',
      'Credible national delivery for international organizations',
      'Channelling technical and financial support to Afghan-led solutions'
    ]
  }
];

export const PROJECTS: ProjectDetail[] = [
  {
    id: 'herat-water-survey',
    slug: 'herat-urban-drinking-water-survey-2026',
    title: 'Herat Urban Drinking-Water Survey 2026',
    mainImage: '/assets/mirab/water-servy.jpg',
    location: 'Herat City (Districts 1, 6, 11, 15)',
    year: '2026',
    sector: 'Applied Research & GIS',
    shortDesc: 'A community-based, georeferenced drinking-water assessment surveying 387 households in Herat City with Jami University and Chashma-Sar Consulting.',
    fullDesc: 'In 2026, MSSADO partnered with the Faculty of Civil Engineering of Jami University (academic supervision and student field teams) and Chashma-Sar Consulting (GIS and dashboard) to conduct a 27-question household survey across 387 households in urban districts 1, 6, 11, and 15 of Herat City. The project deployed a live web dashboard mapping every survey point to assess sources, access, quantity, quality, and coping strategies.',
    partnerLogos: [
      { name: 'MSSADO', img: '/assets/mirab/logo.png' },
      { name: 'Jami University', img: '/assets/mirab/partner_1.png' }
    ],
    keyActivities: [
      'Face-to-face 27-question household surveys across 387 households',
      'Georeferencing survey points in districts 1, 6, 11, and 15 of Herat City',
      'Developing a live web dashboard mapping every survey point',
      'Analyzing water access, source types, costs, and self-reported health effects'
    ],
    infoBox: {
      title: 'Herat Urban Drinking-Water Survey',
      location: 'Herat City, Districts 1, 6, 11, and 15',
      duration: '2026',
      partners: 'Jami University Faculty of Civil Engineering & Chashma-Sar Consulting'
    }
  },
  {
    id: 'el-nino-webinar',
    slug: 'el-nino-2026-2027-implications-for-afghanistan',
    title: 'El Niño 2026-2027: Implications for Afghanistan',
    mainImage: '/assets/mirab/elnino.jpg',
    location: 'Virtual National Webinar',
    year: '2026',
    sector: 'Climate Risk & Coordination',
    shortDesc: 'Co-organized with AWEP Net on October 17, 2026, bringing 80+ practitioners from UN agencies and NGOs together to prepare for El Niño winter/spring hazards.',
    fullDesc: 'On October 17, 2026, MSSADO and the Afghan Water & Environment Professionals Network (AWEP Net) co-organized an online webinar bringing together over 80 participants from UN agencies, international and national organizations, and diaspora experts to evaluate the strong El Niño forecast (+2°C sea-surface temperatures) and prepare early for spring 2027 rain-on-snow floods and drought impacts.',
    partnerLogos: [
      { name: 'MSSADO', img: '/assets/mirab/logo.png' },
      { name: 'AWEP Net', img: '/assets/mirab/partner_10.png' }
    ],
    keyActivities: [
      'Hosting live online webinar with 80+ participants including UN agencies',
      'Analyzing NOAA El Niño sea-surface temperature anomalies and winter/spring flood risks',
      'Presenting hazard data from the Chashma-Sar climate & water platform',
      'Co-organizing expert discussions with AWEP Net diaspora and national specialists'
    ],
    infoBox: {
      grantOrg: 'AWEP Net & MSSADO',
      title: 'El Niño 2026-2027: Implications for Afghanistan Webinar',
      location: 'Online Virtual Event',
      duration: '17 October 2026'
    },
     overviewImages: [
      
       {

      type: 'video',

      src: 'https://img.youtube.com/vi/7a9JGYZs72k/maxresdefault.jpg',

      alt: 'Hope Flows Here: Clean Water for Afghan Girls School',

      videoUrl: 'https://www.youtube.com/embed/7a9JGYZs72k'

    }
    ]
  },
  {
    id: 'safe-water',
    slug: 'community-led-water-safety-baloch-village',
    title: 'Community-Led Water Safety Initiative, Baloch Village',
    mainImage: '/assets/mirab/project_safe_water_main.jpg',
    location: 'Kang District, Nimruz Province',
    year: '2025',
    sector: 'Water Resources & WASH',
    shortDesc: 'Community-led water safety initiative in Baloch Village, Kang District, Nimruz, providing biosand filters and training to vulnerable households with TLO.',
    fullDesc: 'From December 2024 to January 2025, MSSADO implemented a community-led water safety initiative in Baloch Village, Kang District, Nimruz Province, in partnership with The Liaison Office (TLO). After relying on pond water due to a lack of alternatives, 25 vulnerable households received biosand filters, safe storage, and hands-on installation, use, and maintenance training.',
    partnerLogos: [
      { name: 'MSSADO', img: '/assets/mirab/logo.png' },
      { name: 'TLO', img: '/assets/mirab/partner_3.png' }
    ],
    keyActivitiesHeading: 'Key activities delivered in the field:',
    keyActivities: [
      'Hands-on biosand filter installation and maintenance training',
      'Provision of safe storage and biosand filters to 25 vulnerable households',
      'Hygiene and safe drinking water awareness sessions',
      'Community training on sustainable filter maintenance'
    ],
    infoBox: {
      grantOrg: 'The Liaison Office (TLO)',
      title: 'Community-Led Water Safety Initiative',
      location: 'Baloch Village, Kang District, Nimruz Province',
      duration: 'December 2024 – January 2025'
    },
    overviewImages: [
      {
        type: 'image',
        src: '/assets/mirab/project_safe_water_overview1.jpg',
        alt: 'Community members preparing filter media together in Nimruz'
      },
       {

      type: 'video',

      src: 'https://img.youtube.com/vi/9ha5KdQF2CE/maxresdefault.jpg',

      alt: 'Hope Flows Here: Clean Water for Afghan Girls School',

      videoUrl: 'https://www.youtube.com/embed/9ha5KdQF2CE'

    }
    ]
  },
  {
    id: 'flood-reduction',
    slug: 'community-based-flood-risk-reduction-guzara',
    title: 'Community-Based Flood Risk Reduction, Guzara',
    mainImage: '/assets/mirab/project_flood_main.jpg',
    location: 'Guzara District, Herat Province',
    year: '2024',
    sector: 'DRR & Early Warning',
    shortDesc: 'Community-based flood early warning established in four flood-prone villages of Guzara District, Herat, with 52 human sensor volunteers trained under AWEC / Just Future.',
    fullDesc: 'Implemented between November and December 2024 under the AWEC / Just Future Project, MSSADO established early-warning systems in four flood-prone villages of Guzara District, Herat. Fifty-two volunteer "human sensors" were trained to read rain and water-level gauges and pass warnings downstream, supported by the distribution of over 1,000 awareness brochures and posters.',
    partnerLogos: [
      { name: 'MSSADO', img: '/assets/mirab/logo.png' },
      { name: 'AWEC', img: '/assets/mirab/partner_6.png' },
      { name: 'JUST FUTURE', img: '/assets/mirab/partner_4.png' }
    ],
    keyActivities: [
      'Setting up early-warning systems in four flood-prone villages',
      'Training 52 volunteer "human sensors" to read rain and water-level gauges',
      'Passing timely flood warnings downstream',
      'Distributing 1,000+ awareness brochures and posters'
    ],
    infoBox: {
      title: 'Community-Based Flood Early Warning',
      location: 'Guzara District, Herat Province',
      duration: 'November – December 2024',
      fundingSource: 'AWEC / Just Future Project',
      implementingOrg: 'MSSADO'
    }
  },
  {
    id: 'school-restoration',
    slug: 'school-water-supply-sewage-restoration-zindajan',
    title: 'School Water Supply & Sewage Restoration, Zindajan',
    mainImage: '/assets/mirab/project_baloch_main.jpg',
    location: 'Zindajan District, Herat Province',
    year: '2025',
    sector: 'Water Resources & WASH',
    shortDesc: 'School water supply and sewage system restoration for a girls school in Zindajan, Herat, under the AWEC / Just Future project.',
    fullDesc: 'Implemented from October to December 2025 under the AWEC / Just Future Project, MSSADO conducted joint site inspections, rebuilt cracked and damaged boundary walls, and restored the water supply and sewage system at a girls school in Zindajan District, Herat, enabling girls to learn with safe water and sanitation.',
    partnerLogos: [
      { name: 'MSSADO', img: '/assets/mirab/logo.png' },
      { name: 'AWEC', img: '/assets/mirab/partner_6.png' },
      { name: 'JUST FUTURE', img: '/assets/mirab/partner_4.png' }
    ],
    keyActivities: [
      'Joint site inspections of cracked and damaged infrastructure',
      'Rebuilding boundary walls for school security',
      'Restoring water supply and sewage systems',
      'Ensuring safe water and sanitation access for female students'
    ],
    infoBox: {
      grantOrg: 'AWEC / Just Future Project',
      title: 'School Water Supply & Sewage Restoration',
      location: 'Girls School, Zindajan District, Herat Province',
      duration: '19 October 2025 – 15 December 2025'
    }
  },
  {
    id: 'green-legacy',
    slug: 'green-legacy-zarghoon-meras-campaign-badghis',
    title: 'Green Legacy (Zarghoon Meras) Campaign',
    mainImage: '/assets/mirab/project_green_legacy_main.jpg',
    location: 'Qala-e-Naw, Badghis Province',
    year: '2025',
    sector: 'Climate Adaptation & Environment',
    shortDesc: 'Green Legacy (Zarghoon Meras) tree planting campaign across three schools in Qala-e-Naw, Badghis, with TLO and CECOP.',
    fullDesc: 'Conducted as part of environmental legacy efforts, MSSADO partnered with TLO and CECOP to implement the Green Legacy (Zarghoon Meras) tree planting campaign across three schools in Qala-e-Naw, Badghis Province, fostering green spaces and environmental stewardship among students.',
    partnerLogos: [
      { name: 'MSSADO', img: '/assets/mirab/logo.png' },
      { name: 'TLO', img: '/assets/mirab/partner_3.png' },
      { name: 'CECOP', img: '/assets/mirab/member_3.png' }
    ],
    keyActivities: [
      'Tree-planting campaigns across three schools',
      'Collaborating with TLO and CECOP in Qala-e-Naw, Badghis',
      'Promoting student and community environmental awareness',
      'Establishing green spaces in educational institutions'
    ],
    infoBox: {
      grantOrg: 'The Liaison Office (TLO) & CECOP',
      title: 'Green Legacy (Zarghoon Meras) Campaign',
      location: 'Qala-e-Naw, Badghis Province',
      duration: '2025'
    }
  },
  {
    id: 'chashma-sar-platform',
    slug: 'chashma-sar-multi-hazard-intelligence-platform',
    title: 'Chashma-Sar Climate & Water Intelligence Platform',
    mainImage: '/assets/mirab/project_fellowship_main.jpg',
    location: 'All 34 Provinces (399 Districts)',
    year: '2026',
    sector: 'Applied Research & Early Warning',
    shortDesc: 'Afghanistan\'s first free, satellite-based multi-hazard climate & water intelligence platform covering all 34 provinces and 399 districts with 51 indicators.',
    fullDesc: 'Jointly developed and operated by MSSADO and Chashma-Sar Consulting, the Chashma-Sar Platform turns global satellite and forecast data (NASA, ECMWF, ESA, CHIRPS, GRACE) into simple district-level indicators accessible via a free browser tool with no login or GIS training required. It provides intelligence across 7 hazard categories, backed by a bi-weekly risk bulletin reaching 1,000+ practitioners.',
    partnerLogos: [
      { name: 'MSSADO', img: '/assets/mirab/logo.png' }
    ],
    keyActivities: [
      'Operating Afghanistan\'s first free multi-hazard satellite platform across 34 provinces',
      'Publishing bi-weekly Climate & Water Risk Bulletins reaching 1,000+ practitioners',
      'Integrating NASA, ECMWF, ESA, CHIRPS, and GRACE data on Google Earth Engine',
      'Conducting free online training sessions on platform usage for humanitarian organizations'
    ],
    infoBox: {
      title: 'Joint MSSADO & Chashma-Sar Initiative',
      location: 'National (34 Provinces, 399 Districts)',
      duration: '2026 Ongoing',
      partners: 'Chashma-Sar Consulting'
    }
  },
  {
    id: 'women-earthquake-safety',
    slug: 'womens-earthquake-safety-psychosocial-support',
    title: 'Women\'s Earthquake Safety & Psychosocial Wellbeing',
    mainImage: '/assets/mirab/project_women_main.jpg',
    location: 'Herat Province',
    year: '2023',
    sector: 'DRR & Women Empowerment',
    shortDesc: 'Training 100 professional women in earthquake safety and psychosocial well-being in Herat, in partnership with WEFSO.',
    fullDesc: 'In response to the Herat earthquakes, MSSADO partnered with WEFSO in 2023 to train 100 professional women in earthquake structural safety awareness and psychosocial well-being, equipping community educators and leaders with vital preparedness knowledge.',
    partnerLogos: [
      { name: 'MSSADO', img: '/assets/mirab/logo.png' },
      { name: 'WEFSO', img: '/assets/mirab/partner_11.png' }
    ],
    keyActivities: [
      'Training 100 professional women in earthquake safety and preparedness',
      'Providing psychosocial support and well-being orientation',
      'Collaborating with WEFSO in Herat Province',
      'Empowering women leaders to disseminate disaster awareness'
    ],
    infoBox: {
      grantOrg: 'WEFSO',
      title: 'Women\'s Earthquake Safety & Psychosocial Support',
      location: 'Herat Province',
      duration: '2023',
      partners: 'WEFSO'
    },
    overviewImages: [
      {
        type: 'image',
        src: '/assets/mirab/project_women_overview.jpg',
        alt: 'Women awareness session in Herat'
      }
    ]
  },
  {
    id: 'university-fellowship',
    slug: 'university-research-fellowship-afghanistan',
    title: 'University Research Fellowship Afghanistan',
    mainImage: '/assets/mirab/project_fellowship_main.jpg',
    location: 'Nationwide (Jami University & Partners)',
    year: '2023',
    sector: 'Applied Research & Education',
    shortDesc: 'University Research Fellowship program implemented with Unisfere, growing to over 100 fellows with 52% women participation.',
    fullDesc: 'Partnering with Unisfere, MSSADO established the University Research Fellowship Afghanistan, providing academic research training and mentorship to over 100 fellows (52% women) to foster local research capacity in water resources, climate change, and disaster risk reduction.',
    partnerLogos: [
      { name: 'MSSADO', img: '/assets/mirab/logo.png' },
      { name: 'Unisfere', img: '/assets/mirab/partner_9.png' }
    ],
    keyActivities: [
      'Supporting 100+ research fellows with 52% female participation',
      'Partnering with Unisfere on academic research capacity building',
      'Mentoring young Afghan researchers and engineers',
      'Conducting scientific investigations into water and climate challenges'
    ],
    infoBox: {
      grantOrg: 'Unisfere',
      title: 'University Research Fellowship Afghanistan',
      location: 'Nationwide / Jami University',
      duration: '2023 – 2026 Ongoing',
      partners: 'Unisfere'
    }
  }
];

export const MEMBERSHIPS = [
  { img: '/assets/mirab/member_1.png', alt: 'WASH Cluster Member' },
  { img: '/assets/mirab/member_2.png', alt: 'ESNFI Cluster Member' },
  { img: '/assets/mirab/member_3.png', alt: 'AWAP Afghanistan Water Platform Member' }
];

export const PARTNERS_ROW1 = [
  { img: '/assets/mirab/partner_1.png', name: 'Jami University' },
  { img: '/assets/mirab/partner_3.png', name: 'The Liaison Office (TLO)' },
  { img: '/assets/mirab/partner_4.png', name: 'AWEC / Just Future' },
  { img: '/assets/mirab/partner_6.png', name: 'AWEC' },
  { img: '/assets/mirab/partner_8.png', name: 'EPTDO' }
];

export const PARTNERS_ROW2 = [
  { img: '/assets/mirab/partner_9.png', name: 'Unisfere' },
  { img: '/assets/mirab/partner_10.png', name: 'AWEP Net' },
  { img: '/assets/mirab/partner_11.png', name: 'WEFSO' },
  { img: '/assets/mirab/member_3.png', name: 'CECOP' },
  { img: '/assets/mirab/partner_5.png', name: 'U-INSPIRE' }
];