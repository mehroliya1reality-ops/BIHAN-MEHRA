export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortTag: string;
  description: string;
  deliverables: string[];
  timeline: string;
  image: string;
  imageAlt: string;
}

export type PortfolioCategory =
  | 'All'
  | 'Residential'
  | 'Modular Kitchen'
  | 'Commercial & Office'
  | 'Renovation';

export interface PortfolioProject {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, 'All'>;
  location: string;
  area: string;
  year: string;
  scope: string;
  summary: string;
  materials: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface WhyChooseItem {
  number: string;
  title: string;
  summary: string;
  metric: string;
}

export interface TestimonialItem {
  quote: string;
  clientName: string;
  projectRole: string;
  location: string;
}

export const BRAND_INFO = {
  companyName: 'ALPHA HOMES',
  brandTitle: 'ALPHA HOMES INTERIORS',
  established: '2016',
  founder: 'Arpit Singh',
  directorManager: 'Ankit Singh',
  phoneDisplay: '+91 96215 42010',
  phoneHref: 'tel:+919621542010',
  whatsappNumber: '919621542010',
  whatsappHref:
    'https://wa.me/919621542010?text=Hello%20Alpha%20Homes%20Interiors%2C%20I%20would%20like%20to%20book%20an%20interior%20design%20consultation.',
  email: 'alphahomesncr@gmail.com',
  emailHref: 'mailto:alphahomesncr@gmail.com',
  website: 'alphahomesinteriors.com',
  officeAddress:
    'Greater Noida West, Sector 16B, Ufaria Mall, 12th Floor, CF1206/7',
  studioHours: 'Monday – Saturday, 10:00 AM – 7:30 PM',
};

export const HERO_IMAGE = {
  src: '/src/assets/images/hero_luxury_residence_1795598812085.jpg',
  alt: 'Luxury modern residential living room designed by Alpha Homes Interiors featuring travertine marble walls, sculpted cove lighting, and ivory upholstery',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'residential-interior-design',
    number: '01',
    title: 'Residential Interior Design',
    shortTag: 'Villas, Penthouses & Apartments',
    description:
      'Spatial planning, bespoke wall treatments, layered ambient lighting, and curated finishes tailored for contemporary residences across Greater Noida and NCR.',
    deliverables: [
      '3D architectural visualization & material mood boards',
      'Custom stone, veneer & fluted wood wall paneling',
      'End-to-end soft furnishing & lighting curation',
    ],
    timeline: '8 – 14 Weeks',
    image: '/src/assets/images/hero_luxury_residence_1795598812085.jpg',
    imageAlt:
      'Bespoke residential living room with travertine stone feature wall and curved ivory sofa',
  },
  {
    id: 'modular-kitchen',
    number: '02',
    title: 'Modular Kitchen',
    shortTag: 'Precision Culinary Architecture',
    description:
      'Ergonomic L-shaped, parallel, and island kitchens crafted with moisture-resistant marine ply, quartz or Italian marble counters, and soft-close German hardware.',
    deliverables: [
      'Factory-finished matte acrylic, PU & veneer shutters',
      'Hettich & Blum soft-close hardware integration',
      'Concealed appliance garages & under-cabinet LED strips',
    ],
    timeline: '4 – 6 Weeks',
    image: '/src/assets/images/service_modular_kitchen_1795598813066.jpg',
    imageAlt:
      'Luxury matte charcoal and walnut modular kitchen with Calacatta gold marble island',
  },
  {
    id: 'commercial-interiors',
    number: '03',
    title: 'Commercial Interiors',
    shortTag: 'Showrooms, Boutiques & Hospitality',
    description:
      'High-impact commercial spaces engineered to elevate brand prestige, optimize customer circulation, and sustain heavy daily footfall with refined materiality.',
    deliverables: [
      'Brand-aligned reception & display millwork',
      'Acoustic zoning & commercial-grade flooring',
      'HVAC, fire-safety & architectural lighting coordination',
    ],
    timeline: '6 – 12 Weeks',
    image: '/src/assets/images/portfolio_turnkey_lounge_1795598815207.jpg',
    imageAlt:
      'Luxury commercial lounge with limestone illuminated shelving, fluted glass cabinetry, and brass accents',
  },
  {
    id: 'false-ceiling',
    number: '04',
    title: 'False Ceiling',
    shortTag: 'Gypsum, Cove & Architectural Lighting',
    description:
      'Sculpted multi-tier gypsum, wooden baffle, and acoustic false ceilings designed to conceal ductwork while casting warm, shadow-free architectural illumination.',
    deliverables: [
      'Saint-Gobain gypsum framing & anti-crack finishing',
      'Warm 3000K recessed profile & linear cove lighting',
      'Integrated AC grill & acoustic dampening detail',
    ],
    timeline: '2 – 4 Weeks',
    image: '/src/assets/images/portfolio_penthouse_dining_1795598814565.jpg',
    imageAlt:
      'Layered walnut and gypsum architectural false ceiling with warm cove illumination and ring chandelier',
  },
  {
    id: 'furniture-and-wardrobes',
    number: '05',
    title: 'Furniture & Wardrobes',
    shortTag: 'Bespoke Joinery & Walk-In Closets',
    description:
      'Floor-to-ceiling tinted glass wardrobes, walk-in dressing suites, and custom-upholstered beds, dining tables, and consoles built to exact room proportions.',
    deliverables: [
      'Fluted glass & brushed champagne aluminum profile shutters',
      'Sensor-activated internal wardrobe LED lighting',
      'Handcrafted walnut dining & lounge furniture',
    ],
    timeline: '4 – 7 Weeks',
    image: '/src/assets/images/service_residential_bedroom_1795598813073.jpg',
    imageAlt:
      'Master suite featuring floor-to-ceiling fluted glass wardrobe framed in champagne gold',
  },
  {
    id: 'complete-home-renovation',
    number: '06',
    title: 'Complete Home Renovation',
    shortTag: 'Structural & Aesthetic Transformation',
    description:
      'Full-scale civil remodeling, flooring upgrades, electrical rewiring, plumbing overhaul, and contemporary architectural restyling for existing apartments and villas.',
    deliverables: [
      'Civil demolition, masonry & waterproofing works',
      'Italian marble / large-format vitrified tiling',
      'Complete electrical, plumbing & bathware upgrade',
    ],
    timeline: '8 – 16 Weeks',
    image: '/src/assets/images/portfolio_turnkey_lounge_1795598815207.jpg',
    imageAlt:
      'Renovated luxury residence lounge with custom stone bar alcove and bespoke leather armchairs',
  },
  {
    id: 'turnkey-interior-projects',
    number: '07',
    title: 'Turnkey Interior Projects',
    shortTag: 'Single-Window Design & Build',
    description:
      'From bare-shell handover to key-in-hand readiness under one accountable team—covering design, material procurement, site engineering, and final styling.',
    deliverables: [
      'Fixed-milestone execution schedule & transparent BOQ',
      'Dedicated site supervisor with weekly progress audits',
      'Deep-cleaned, ready-to-move handover guarantee',
    ],
    timeline: '10 – 18 Weeks',
    image: '/src/assets/images/portfolio_penthouse_dining_1795598814565.jpg',
    imageAlt:
      'Complete turnkey penthouse dining and living atrium with marble flooring and walnut joinery',
  },
  {
    id: 'office-interiors',
    number: '08',
    title: 'Office Interiors',
    shortTag: 'Executive Suites & Workspaces',
    description:
      'Composed executive cabins, acoustic boardrooms, and ergonomic workstations built for focused leadership, acoustic privacy, and modern corporate identity.',
    deliverables: [
      'Double-glazed acoustic partitions & brass trims',
      'Bespoke boardroom tables with concealed AV routing',
      'Ergonomic workstation planning & task lighting',
    ],
    timeline: '5 – 10 Weeks',
    image: '/src/assets/images/service_commercial_office_1795598813801.jpg',
    imageAlt:
      'Executive boardroom featuring walnut conference table, charcoal acoustic walls, and brass framing',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'jaypee-greens-villa',
    title: 'The Travertine Courtyard Residence',
    category: 'Residential',
    location: 'Jaypee Greens, Greater Noida',
    area: '4,200 sq. ft.',
    year: '2025',
    scope: 'Full Residential Design & Custom Joinery',
    summary:
      'A serene 4-bedroom villa anchored by honed travertine feature walls, curved gypsum cove ceilings, and warm walnut millwork balanced against ivory bouclé seating.',
    materials: ['Honed Travertine', 'American Walnut Veneer', 'Brushed Champagne Brass', 'Ivory Bouclé'],
    image: '/src/assets/images/hero_luxury_residence_1795598812085.jpg',
    imageAlt: 'The Travertine Courtyard Residence living room in Jaypee Greens, Greater Noida',
    featured: true,
  },
  {
    id: 'sector-150-penthouse',
    title: 'Skyline Double-Height Penthouse',
    category: 'Residential',
    location: 'Sector 150, Noida Expressway',
    area: '5,100 sq. ft.',
    year: '2025',
    scope: 'Turnkey Interior Execution & False Ceiling',
    summary:
      'Expansive double-height dining and lounge atrium unified by Italian ivory marble flooring, layered timber ceiling coffers, and a sculptural champagne-gold chandelier.',
    materials: ['Statuario Ivory Marble', 'Smoked Oak', 'Architectural Gypsum', 'Satin Brass'],
    image: '/src/assets/images/portfolio_penthouse_dining_1795598814565.jpg',
    imageAlt: 'Skyline Double-Height Penthouse dining atrium in Sector 150, Noida',
    featured: true,
  },
  {
    id: 'ats-culinary-kitchen',
    title: 'Calacatta & Charcoal Culinary Island',
    category: 'Modular Kitchen',
    location: 'Sector 16B, Greater Noida West',
    area: '340 sq. ft.',
    year: '2024',
    scope: 'Bespoke Modular Kitchen & Pantry',
    summary:
      'A precision-engineered island kitchen pairing matte charcoal PU upper cabinetry with warm walnut base drawers and a book-matched Calacatta gold waterfall island.',
    materials: ['Matte Charcoal PU', 'Calacatta Gold Quartz', 'Blum Legrabox', 'Brushed Brass Hardware'],
    image: '/src/assets/images/service_modular_kitchen_1795598813066.jpg',
    imageAlt: 'Luxury charcoal and Calacatta marble modular kitchen in Greater Noida West',
  },
  {
    id: 'gaur-city-master-suite',
    title: 'Fluted Glass & Walnut Sanctuary',
    category: 'Residential',
    location: 'Greater Noida West',
    area: '2,650 sq. ft.',
    year: '2024',
    scope: 'Master Suite, Wardrobes & Cove Ceiling',
    summary:
      'An understated master bedroom suite integrating floor-to-ceiling champagne-framed fluted glass wardrobes with warm linear sensor lighting and solid walnut wall slats.',
    materials: ['Fluted Toughened Glass', 'Champagne Anodized Frame', 'Walnut Fluting', 'Belgian Linen'],
    image: '/src/assets/images/service_residential_bedroom_1795598813073.jpg',
    imageAlt: 'Master bedroom suite with fluted glass champagne-gold wardrobes',
  },
  {
    id: 'techzone-executive-hq',
    title: 'Apex Advisory Boardroom & Suites',
    category: 'Commercial & Office',
    location: 'Techzone IV, Greater Noida',
    area: '6,800 sq. ft.',
    year: '2025',
    scope: 'Commercial & Office Interiors',
    summary:
      'Corporate headquarters designed with acoustic charcoal fabric wall panels, brass-inlaid double glass partitions, and a custom 10-seater walnut conference table.',
    materials: ['Acoustic Charcoal Felt', 'Brushed Brass Inlay', 'Double-Glazed Glass', 'Walnut Timber'],
    image: '/src/assets/images/service_commercial_office_1795598813801.jpg',
    imageAlt: 'Executive corporate boardroom designed by Alpha Homes Interiors in Techzone IV',
  },
  {
    id: 'omega-villa-renovation',
    title: 'Limestone Lounge & Private Bar Renovation',
    category: 'Renovation',
    location: 'Omega II, Greater Noida',
    area: '3,400 sq. ft.',
    year: '2024',
    scope: 'Complete Home Renovation',
    summary:
      'Complete structural and aesthetic transformation of a 12-year-old residence, anchored by a bespoke limestone and fluted-glass entertaining alcove.',
    materials: ['Beige Limestone', 'Fluted Brass Doors', 'Saddle Leather', 'Engineered Oak'],
    image: '/src/assets/images/portfolio_turnkey_lounge_1795598815207.jpg',
    imageAlt: 'Renovated private residence lounge and limestone dry bar in Greater Noida',
  },
];

export const WHY_CHOOSE_PILLARS: WhyChooseItem[] = [
  {
    number: '01',
    title: 'Experience Since 2016',
    summary:
      'Nearly a decade of navigating Greater Noida and Delhi NCR residential towers, independent villas, and commercial complexes with proven civil and structural mastery.',
    metric: 'Est. 2016 · 180+ Delivered Projects',
  },
  {
    number: '02',
    title: 'Professional Team',
    summary:
      'Led directly by Founder Arpit Singh and Director Manager Ankit Singh alongside seasoned architects, 3D visualizers, MEP engineers, and master craftsmen.',
    metric: 'Dedicated Site Supervision & Engineering',
  },
  {
    number: '03',
    title: 'Quality Workmanship',
    summary:
      'We build with IS-710 marine plywood, genuine European soft-close hardware, kiln-dried timber, and multi-stage quality inspections prior to every milestone sign-off.',
    metric: 'Multi-Stage Material & Finish Audits',
  },
  {
    number: '04',
    title: 'Customized Designs',
    summary:
      'Zero cookie-cutter templates. Every floor plan, false ceiling profile, wardrobe organizer, and stone inlay is custom-drafted around your family’s routines.',
    metric: '100% Tailored Architectural Drawings',
  },
];

export const CLIENT_TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      'Alpha Homes Interiors transformed our bare-shell 4BHK into a warm, hotel-caliber residence within our handover deadline. Arpit and Ankit’s personal oversight at every site stage gave us complete peace of mind.',
    clientName: 'Rajeshwar & Meera Kapoor',
    projectRole: 'Turnkey Residence, 3,200 sq. ft.',
    location: 'Greater Noida West',
  },
  {
    quote:
      'Their modular kitchen joinery and acoustic boardroom execution for our corporate office stood out for precision. Every brass trim and marble edge aligns seamlessly.',
    clientName: 'Vikramaditya Malhotra',
    projectRole: 'Executive Office Suite, 4,500 sq. ft.',
    location: 'Techzone IV, Greater Noida',
  },
];
