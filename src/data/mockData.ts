import { Property, Development, Developer, Community, Consultant, Testimonial, Guide, NewsArticle, MarketReport, PodcastEpisode, JobVacancy, ServiceItem } from '@/types';

export const COMPANY_INFO = {
  name: "haus & haus",
  legalName: "Haus & Haus Real Estate Broker",
  tagline: "Built on relationships. Driven by opportunity.",
  phone: "+971 4 302 5800",
  whatsapp: "+971588229123",
  email: "info@hausandhaus.com",
  careersEmail: "careers@hausandhaus.com",
  address: "Building 7, Gold & Diamond Park, Sheikh Zayed Road, Dubai, UAE",
  pobox: "P.O. Box 478418, Dubai, UAE",
  reraOrn: "16618",
  tradeLicense: "695697",
  foundedYear: 2013,
  founders: [
    { name: "James Perry", role: "Managing Director & Co-Founder" },
    { name: "Luke Remington", role: "Managing Director & Co-Founder" },
    { name: "Simon Baker", role: "Managing Director & Co-Founder" }
  ],
  stats: {
    agentsCount: "360+",
    yearsInDubai: "12+",
    nationalities: "45+",
    awardsWon: "28+",
    clientSatisfaction: "98.4%",
    totalTransactions: "AED 32B+"
  },
  socials: {
    instagram: "https://instagram.com/hausandhaus",
    linkedin: "https://linkedin.com/company/haus-&-haus",
    youtube: "https://youtube.com/@hausandhausdubai",
    facebook: "https://facebook.com/hausandhaus"
  }
};

export const PROPERTIES: Property[] = [
  {
    id: "prop-1",
    reference: "H&H-S-10492",
    title: "Ultra-Luxury 4-Bedroom Villa with Private Pool & Lagoon View",
    slug: "ultra-luxury-4-bedroom-villa-dubai-hills",
    status: "For Sale",
    type: "Villa",
    price: 18500000,
    community: "Dubai Hills Estate",
    subCommunity: "Golf Grove",
    location: "Dubai Hills Estate, Dubai",
    bedrooms: 4,
    bathrooms: 5,
    bua: 6850,
    plotSize: 8400,
    furnished: "Unfurnished",
    completionStatus: "Ready",
    featured: true,
    luxury: true,
    commercial: false,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "haus & haus is delighted to present this immaculate 4-bedroom contemporary villa located in the prestigious Dubai Hills Estate. Boasting direct views of the championship 18-hole golf course and tranquil lagoons, this residence has been custom-designed with Italian marble finishes, Miele fitted kitchen, bespoke cabinetry, and smart home automation throughout.",
    features: ["Private Infinity Pool", "Smart Home Automation", "Golf Course Views", "Driver's Room & Maid's Room", "Landscaped Garden", "Double Garage", "Walk-in Closets"],
    amenities: ["Gated Community", "24/7 Security", "Championship Golf Club", "Dubai Hills Mall Nearby", "Bicycle Tracks", "Parks & Playgrounds"],
    agent: {
      id: "agent-1",
      name: "Marcus Vance",
      title: "Senior Luxury Villa Consultant",
      phone: "+971 4 302 5800",
      whatsapp: "+971588229123",
      email: "marcus.v@hausandhaus.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
      languages: ["English", "French"]
    },
    coordinates: { lat: 25.1118, lng: 55.2589 },
    annualServiceCharge: 18.5
  },
  {
    id: "prop-2",
    reference: "H&H-S-20188",
    title: "Panoramic Sea View Penthouse at The Palm Tower",
    slug: "panoramic-sea-view-penthouse-palm-jumeirah",
    status: "For Sale",
    type: "Penthouse",
    price: 32000000,
    community: "Palm Jumeirah",
    subCommunity: "The Palm Tower",
    location: "Palm Jumeirah, Dubai",
    bedrooms: 3,
    bathrooms: 4,
    bua: 4920,
    furnished: "Furnished",
    completionStatus: "Ready",
    featured: true,
    luxury: true,
    commercial: false,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An exceptional trophy penthouse on the high floors of The Palm Tower, offering breathtaking 360-degree vistas encompassing the Arabian Gulf, Dubai Marina skyline, and Ain Dubai. Finished with handcrafted wood, natural stone, and designer Italian furnishings.",
    features: ["Private Elevator Access", "360-Degree Views", "Designer Furnished", "Wrap-around Terrace", "Private Jacuzzi", "Concierge Service"],
    amenities: ["Direct Mall Access", "St. Regis Beach Club Access", "AURA Skypool Access", "Valet Parking", "Spa & Wellness"],
    agent: {
      id: "agent-2",
      name: "Sophia Al-Mansoori",
      title: "Head of Palm Jumeirah & Waterfront",
      phone: "+971 4 302 5800",
      whatsapp: "+971588229123",
      email: "sophia.m@hausandhaus.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      languages: ["English", "Arabic"]
    },
    coordinates: { lat: 25.1189, lng: 55.1394 },
    annualServiceCharge: 24.0
  },
  {
    id: "prop-3",
    reference: "H&H-R-30441",
    title: "High-Floor 2-Bedroom with Direct Burj Khalifa & Fountain Views",
    slug: "burj-khalifa-fountain-view-2-bedroom-downtown",
    status: "For Rent",
    type: "Apartment",
    price: 245000,
    rentalFrequency: "yearly",
    community: "Downtown Dubai",
    subCommunity: "Address Residences Dubai Opera",
    location: "Downtown Dubai, Dubai",
    bedrooms: 2,
    bathrooms: 3,
    bua: 1380,
    furnished: "Furnished",
    completionStatus: "Ready",
    featured: true,
    luxury: false,
    commercial: false,
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "haus & haus presents this serviced 2-bedroom luxury residence situated next to Dubai Opera in Downtown Dubai. Enjoy front-row views of the iconic Burj Khalifa and the Dubai Fountains from the floor-to-ceiling glass and private corner terrace.",
    features: ["Burj Khalifa View", "Fountain View", "Serviced by The Address", "High Floor", "Covered Parking", "Fully Equipped Kitchen"],
    amenities: ["Infinity Pool", "State of the Art Gym", "Children's Play Area", "24hr Concierge", "Walking distance to Dubai Mall"],
    agent: {
      id: "agent-3",
      name: "Oliver Wright",
      title: "Senior Downtown Leasing Specialist",
      phone: "+971 4 302 5800",
      whatsapp: "+971588229123",
      email: "oliver.w@hausandhaus.com",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      languages: ["English"]
    },
    coordinates: { lat: 25.1972, lng: 55.2744 }
  },
  {
    id: "prop-4",
    reference: "H&H-R-40112",
    title: "Chic Waterfront 1-Bedroom Apartment with Marina Skyline View",
    slug: "chic-waterfront-1-bedroom-dubai-marina",
    status: "For Rent",
    type: "Apartment",
    price: 135000,
    rentalFrequency: "yearly",
    community: "Dubai Marina",
    subCommunity: "Marina Gate II",
    location: "Dubai Marina, Dubai",
    bedrooms: 1,
    bathrooms: 2,
    bua: 920,
    furnished: "Semi-Furnished",
    completionStatus: "Ready",
    featured: false,
    luxury: false,
    commercial: false,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1502005229762-ee1b2b8ab00f?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Located within the flagship Marina Gate development by Select Group, this spacious one-bedroom unit benefits from pristine modern finishes, an open plan kitchen, and a sunny balcony overlooking the yachts along Marina Walk.",
    features: ["Balcony with Marina View", "Built-in Wardrobes", "High-spec Appliances", "Allocated Parking"],
    amenities: ["Olympic-sized Pool", "Dual-level Gymnasium", "Squash Courts", "On-site Retail & Cafes", "Direct Marina Walk Access"],
    agent: {
      id: "agent-4",
      name: "Hannah Clarke",
      title: "Marina Leasing Consultant",
      phone: "+971 4 302 5800",
      whatsapp: "+971588229123",
      email: "hannah.c@hausandhaus.com",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
      languages: ["English", "German"]
    },
    coordinates: { lat: 25.0805, lng: 55.1403 }
  },
  {
    id: "prop-5",
    reference: "H&H-S-50293",
    title: "Contemporary 3-Bedroom Family Townhouse in Arabian Ranches 3",
    slug: "contemporary-3-bedroom-townhouse-arabian-ranches",
    status: "For Sale",
    type: "Townhouse",
    price: 3600000,
    community: "Arabian Ranches",
    subCommunity: "Joy, Arabian Ranches III",
    location: "Arabian Ranches, Dubai",
    bedrooms: 3,
    bathrooms: 4,
    bua: 2450,
    plotSize: 2200,
    furnished: "Unfurnished",
    completionStatus: "Ready",
    featured: true,
    luxury: false,
    commercial: false,
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A brand new, light-filled townhouse in Arabian Ranches III by Emaar. Designed for relaxed family living, this home offers private garden space, a modern open layout, and close proximity to community splash parks, sports hubs, and cycling trails.",
    features: ["Private Garden", "Covered Carport", "Maid's Room", "Balconies", "Floor-to-Ceiling Windows"],
    amenities: ["Clubhouse", "Splash Park", "Tennis & Basketball Courts", "Community Retail Centre", "Parks"],
    agent: {
      id: "agent-5",
      name: "David Sterling",
      title: "Emaar Master Communities Lead",
      phone: "+971 4 302 5800",
      whatsapp: "+971588229123",
      email: "david.s@hausandhaus.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      languages: ["English"]
    },
    coordinates: { lat: 25.0566, lng: 55.2678 }
  },
  {
    id: "prop-6",
    reference: "H&H-C-60882",
    title: "Grade A Fitted Commercial Office with Canal Views in Business Bay",
    slug: "grade-a-fitted-commercial-office-business-bay",
    status: "For Sale",
    type: "Office",
    price: 4950000,
    community: "Business Bay",
    subCommunity: "The Opus by Omniyat",
    location: "Business Bay, Dubai",
    bedrooms: 0,
    bathrooms: 2,
    bua: 2150,
    furnished: "Furnished",
    completionStatus: "Ready",
    featured: true,
    luxury: true,
    commercial: true,
    fitOut: "Fitted",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An extraordinary commercial workspace inside the architectural masterpiece designed by Dame Zaha Hadid. Fully fitted to corporate institutional standards with partitioned executive cabins, meeting rooms, reception area, and panoramic Dubai Canal views.",
    features: ["Zaha Hadid Architecture", "High Ceilings", "Fitted Boardroom", "Executive Offices", "High Speed Fiber", "6 Parking Bays"],
    amenities: ["Valet Parking", "Michelin-starred Dining on-site", "Hotel Amenities", "24/7 Security & Concierge"],
    agent: {
      id: "agent-6",
      name: "Tariq Mansour",
      title: "Director of Commercial Sales",
      phone: "+971 4 302 5800",
      whatsapp: "+971588229123",
      email: "tariq.m@hausandhaus.com",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      languages: ["English", "Arabic"]
    },
    coordinates: { lat: 25.1857, lng: 55.2635 }
  },
  {
    id: "prop-7",
    reference: "H&H-C-70194",
    title: "Prime Ground Floor Retail Space on Sheikh Zayed Road",
    slug: "prime-ground-floor-retail-space-sheikh-zayed-road",
    status: "For Rent",
    type: "Retail",
    price: 520000,
    rentalFrequency: "yearly",
    community: "Business Bay",
    subCommunity: "Sheikh Zayed Road Frontage",
    location: "Sheikh Zayed Road, Dubai",
    bedrooms: 0,
    bathrooms: 2,
    bua: 3100,
    furnished: "Unfurnished",
    completionStatus: "Ready",
    featured: false,
    luxury: false,
    commercial: true,
    fitOut: "Shell & Core",
    images: [
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Prime glass frontage showroom/retail premises with maximum brand visibility along Dubai's busiest commercial corridor. Ideal for luxury automotive, flagship banking, premium furnishings, or corporate showroom.",
    features: ["Massive Street Frontage", "High Footfall & Traffic Visibility", "Outdoor Terrace Area", "Delivery Loading Bay", "Customer Parking"],
    amenities: ["Metro Connected", "Building Security", "Commercial Loading Bay"],
    agent: {
      id: "agent-6",
      name: "Tariq Mansour",
      title: "Director of Commercial Sales",
      phone: "+971 4 302 5800",
      whatsapp: "+971588229123",
      email: "tariq.m@hausandhaus.com",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      languages: ["English", "Arabic"]
    },
    coordinates: { lat: 25.192, lng: 55.268 }
  },
  {
    id: "prop-8",
    reference: "H&H-S-80331",
    title: "Parkside 5-Bedroom Independent Mansion in Emirates Living",
    slug: "parkside-5-bedroom-independent-mansion-emirates-living",
    status: "For Sale",
    type: "Villa",
    price: 27500000,
    community: "Emirates Living",
    subCommunity: "Emirates Hills, Sector E",
    location: "Emirates Hills, Dubai",
    bedrooms: 5,
    bathrooms: 7,
    bua: 9800,
    plotSize: 14200,
    furnished: "Furnished",
    completionStatus: "Ready",
    featured: true,
    luxury: true,
    commercial: false,
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Commonly referred to as the 'Beverly Hills of Dubai', this palatial custom villa in Emirates Hills offers unparalleled privacy, opulent entertaining spaces, championship golf frontage, and a private cinema and subterranean temperature-controlled car showroom.",
    features: ["Private Cinema", "Basement Car Showcase", "Temperature Controlled Pool", "Staff Quarters (3)", "Elevator", "Wine Cellar"],
    amenities: ["Montgomerie Championship Golf", "Exclusive 24/7 Gated Entry", "Clubhouse", "Lake Trails"],
    agent: {
      id: "agent-1",
      name: "Marcus Vance",
      title: "Senior Luxury Villa Consultant",
      phone: "+971 4 302 5800",
      whatsapp: "+971588229123",
      email: "marcus.v@hausandhaus.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
      languages: ["English", "French"]
    },
    coordinates: { lat: 25.0683, lng: 55.1762 }
  }
];

export const DEVELOPMENTS: Development[] = [
  {
    id: "dev-1",
    name: "Creek Waters 2",
    slug: "creek-waters-2",
    developer: {
      name: "Emaar Properties",
      slug: "emaar"
    },
    community: "Dubai Creek Harbour",
    startingPrice: 1780000,
    handoverDate: "Q4 2027",
    paymentPlan: "90/10 Payment Plan",
    description: "Creek Waters 2 reflects modern architectural elegance rising directly above Dubai Creek Harbour Island, offering panoramic views of the water, Downtown skyline, and the Ras Al Khor Flamingo Sanctuary.",
    images: [
      "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1600&q=80",
    unitTypes: ["1, 2, 3 & 4 Bed Apartments", "Townhouses", "Penthouses"],
    bedroomRange: "1 to 4 Beds",
    amenities: ["Infinity Pool", "Yoga Deck", "Kids Playground", "Observation Deck", "Retail Promenade"],
    features: ["Waterfront Promenade", "Skyline Views", "High Investment Yield", "Prime Master Community"],
    status: "Under Construction",
    highlights: ["Frontline Creek location", "Minutes from Dubai International Airport", "Direct marina boardwalk access"]
  },
  {
    id: "dev-2",
    name: "Palm Beach Towers",
    slug: "palm-beach-towers",
    developer: {
      name: "Nakheel",
      slug: "nakheel"
    },
    community: "Palm Jumeirah",
    startingPrice: 3800000,
    handoverDate: "Q1 2026",
    paymentPlan: "80/20 on Handover",
    description: "An amalgamation of style and luxury that inspires a fresh perspective on waterfront living. Located at the entrance to Palm Jumeirah with private beach access and unmatched panoramic vistas.",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    unitTypes: ["1, 2, 3 Bed Apartments", "Crown Penthouses"],
    bedroomRange: "1 to 4 Beds",
    amenities: ["Private Beach Access", "Rooftop Sky Lounge", "Boat Jetty", "Wellness Spa", "Indoor & Outdoor Gyms"],
    features: ["Unobstructed Sea Views", "Palm Monorail Connected", "Hotel-grade Services"],
    status: "Ready Soon",
    highlights: ["Direct gateway to the Palm", "Private beach frontage", "Infinity rooftop viewing deck"]
  },
  {
    id: "dev-3",
    name: "Sobha Hartland II - Riverside Crescent",
    slug: "sobha-hartland-2-riverside-crescent",
    developer: {
      name: "Sobha Realty",
      slug: "sobha"
    },
    community: "Sobha Hartland",
    startingPrice: 1540000,
    handoverDate: "Q2 2027",
    paymentPlan: "80/20 Linked to Construction",
    description: "Nestled in an enclave of tranquility with shimmering crystal lagoons, manicured landscapes, and waterfront boulevards, located just 7 minutes from Downtown Dubai and the Dubai Canal.",
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    heroImage: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80",
    unitTypes: ["1, 2 & 3 Bed Apartments"],
    bedroomRange: "1 to 3 Beds",
    amenities: ["Crystal Lagoons", "Wave Pool", "Water Sports", "Zen Gardens", "Running Tracks"],
    features: ["Sobha Signature Quality", "Lagoon Frontage", "Proximity to Meydan Racecourse"],
    status: "Under Construction",
    highlights: ["Twin crystal lagoons", "100% backward integrated build quality", "High capital appreciation"]
  },
  {
    id: "dev-4",
    name: "Ellington Mercer House",
    slug: "ellington-mercer-house",
    developer: {
      name: "Ellington Properties",
      slug: "ellington"
    },
    community: "Jumeirah Lake Towers",
    startingPrice: 2200000,
    handoverDate: "Q3 2027",
    paymentPlan: "70/30 Payment Plan",
    description: "A sanctuary of design-led living where urban energy meets holistic wellness. Featuring an artificial urban beach, multi-tier pools, and curated residential art installations.",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
    ],
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    unitTypes: ["Studios", "1, 2, 3 Bed Apartments", "Penthouse Collection"],
    bedroomRange: "Studio to 4 Beds",
    amenities: ["Urban Beach Pool", "Sauna & Ice Bath", "Karaoke Room", "Design Library", "Sports Hall"],
    features: ["Boutique Finishes", "Custom Millwork", "Smart Home Ready"],
    status: "New Launch",
    highlights: ["Uptown Dubai district views", "Artisan interior detailing", "Resort-inspired beach club"]
  }
];

export const DEVELOPERS: Developer[] = [
  {
    slug: "emaar",
    name: "Emaar Properties",
    founded: "1997",
    headquarters: "Dubai, UAE",
    description: "Emaar Properties is the master developer behind global icons including Burj Khalifa, The Dubai Mall, and master communities like Downtown Dubai, Dubai Marina, Dubai Hills Estate, and Arabian Ranches.",
    portfolioHighlights: "Over 85,000 residential units delivered across the globe with a track record of enduring capital value and community management excellence.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    featuredProjects: ["Burj Khalifa", "Dubai Hills Estate", "Creek Waters 2", "Arabian Ranches"],
    totalProjects: 140
  },
  {
    slug: "nakheel",
    name: "Nakheel",
    founded: "2000",
    headquarters: "Dubai, UAE",
    description: "Nakheel is world-renowned for shaping Dubai's iconic coastline through waterfront marvels including Palm Jumeirah, The World Islands, and Dubai Islands.",
    portfolioHighlights: "Pioneered landmark coastal developments, luxury resorts, and high-yielding waterfront retail and hospitality ecosystems.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    featuredProjects: ["Palm Jumeirah", "Palm Beach Towers", "Dubai Islands", "Jumeirah Islands"],
    totalProjects: 95
  },
  {
    slug: "sobha",
    name: "Sobha Realty",
    founded: "1976",
    headquarters: "Dubai, UAE",
    description: "Sobha Realty is distinguished by its proprietary 'backward integration' model, ensuring German-engineered quality control from architectural design through precision manufacturing and on-time delivery.",
    portfolioHighlights: "Creator of Sobha Hartland and Sobha Hartland II, setting Dubai's benchmark for bespoke luxury and crystal lagoon lifestyle.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
    featuredProjects: ["Sobha Hartland", "Riverside Crescent", "Sobha SeaHaven", "The S Tower"],
    totalProjects: 65
  },
  {
    slug: "ellington",
    name: "Ellington Properties",
    founded: "2014",
    headquarters: "Dubai, UAE",
    description: "Ellington Properties is Dubai's leading design-led boutique developer, crafting artistically inspired residences with refined architectural aesthetics, resort amenities, and enduring rental appeal.",
    portfolioHighlights: "Known for prime developments in Downtown, Palm Jumeirah, JVC, and JLT with superior capital retention.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    featuredProjects: ["Mercer House", "Ocean House Palm", "DT1 Downtown", "Belgravia"],
    totalProjects: 40
  }
];

export const COMMUNITIES: Community[] = [
  {
    slug: "dubai-hills-estate",
    name: "Dubai Hills Estate",
    tagline: "The Green Heart of Dubai",
    description: "A tranquil 2,700-acre master-planned community offering an 18-hole championship golf course, the sprawling Dubai Hills Park, Dubai Hills Mall, and premier international schools.",
    lifestyle: "Family-oriented, wellness-focused, green and outdoor lifestyle with seamless road connectivity to Downtown and Dubai Marina.",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    propertyTypes: ["Villas", "Mansions", "Townhouses", "Luxury Apartments"],
    avgSalePriceApt: "AED 1,650,000",
    avgSalePriceVilla: "AED 14,500,000",
    avgRentalYield: "6.8%",
    highlights: ["18-Hole Championship Golf Course", "Dubai Hills Mall with indoor rollercoaster", "Kings College Hospital", "3 Top British curriculum schools"],
    amenities: ["Dubai Hills Park", "Bicycle Loops", "Dog Parks", "Tennis Academies", "Splash Park"],
    schools: ["GEMS Wellington Academy", "Kings School Al Barsha", "GEMS New Millennium School"],
    transport: "Direct access to Al Khail Road (E44) and Umm Suqeim Road. 15 mins to Downtown Dubai.",
    coordinates: { lat: 25.1118, lng: 55.2589 },
    featured: true
  },
  {
    slug: "palm-jumeirah",
    name: "Palm Jumeirah",
    tagline: "World's Most Celebrated Offshore Landmark",
    description: "An engineering marvel and global symbol of luxury living, offering private beachfront villas along its fronds, luxury hotel residences on the Crescent, and vibrant dining along The Boardwalk.",
    lifestyle: "Exclusive resort lifestyle with private beaches, superyacht marinas, Michelin-starred culinary institutions, and beach clubs.",
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
    ],
    propertyTypes: ["Beachfront Villas", "Signature Mansions", "Luxury Penthouses", "Serviced Apartments"],
    avgSalePriceApt: "AED 3,800,000",
    avgSalePriceVilla: "AED 35,000,000",
    avgRentalYield: "6.2%",
    highlights: ["Atlantis The Royal & Atlantis The Palm", "Nakheel Mall & The Palm Tower", "Private beach frontage for every villa", "The View at The Palm"],
    amenities: ["Private Marinas", "Beach Clubs", "Helipads", "Jogging Boardwalk (11km)"],
    schools: ["Regent International School nearby", "American School of Dubai (Al Barsha)"],
    transport: "Palm Monorail connecting to Dubai Tram and Dubai Metro. Sheikh Zayed Road in 7 minutes.",
    coordinates: { lat: 25.1189, lng: 55.1394 },
    featured: true
  },
  {
    slug: "downtown-dubai",
    name: "Downtown Dubai",
    tagline: "The Centre of Now",
    description: "The cultural and commercial heart of Dubai, home to the Burj Khalifa, The Dubai Fountain, Dubai Opera, and the world's premier retail destination, The Dubai Mall.",
    lifestyle: "High-octane cosmopolitan luxury with world-class fine dining, cultural arts, high-fashion avenues, and high-floor penthouse vistas.",
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
    ],
    propertyTypes: ["High-rise Apartments", "Duplexes", "Ultra-Luxury Penthouses"],
    avgSalePriceApt: "AED 2,400,000",
    avgSalePriceVilla: "N/A",
    avgRentalYield: "7.1%",
    highlights: ["Burj Khalifa", "The Dubai Mall & Chinatown", "Dubai Opera", "Burj Park & Lake Promenade"],
    amenities: ["Souk Al Bahar", "Skyline Infinity Pools", "Concierge Services", "Direct Metro Link"],
    schools: ["Hartland International School (10 mins)", "JSS Private School"],
    transport: "Burj Khalifa/Dubai Mall Metro Station, quick access to Financial Centre Road and Sheikh Zayed Road.",
    coordinates: { lat: 25.1972, lng: 55.2744 },
    featured: true
  },
  {
    slug: "dubai-marina",
    name: "Dubai Marina",
    tagline: "Vibrant Waterfront Living",
    description: "One of the world's largest meticulously planned waterfront developments, featuring over 200 luxury high-rise towers, a 7-kilometre palm-lined marina promenade, and Marina Mall.",
    lifestyle: "Active nautical lifestyle, seaside dining, watersports, beach access at JBR, and vibrant nightlife.",
    heroImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502005229762-ee1b2b8ab00f?auto=format&fit=crop&w=800&q=80"
    ],
    propertyTypes: ["Waterfront Apartments", "Marina Penthouses", "Podium Villas"],
    avgSalePriceApt: "AED 1,900,000",
    avgSalePriceVilla: "AED 8,500,000",
    avgRentalYield: "7.4%",
    highlights: ["Dubai Marina Mall", "7km Marina Walk", "Dubai Marina Yacht Club", "Direct bridge to JBR Beach"],
    amenities: ["Yacht Charters", "Outdoor Gyms", "Water Taxi Stations", "Tram Loop"],
    schools: ["Dubai British School (Emirates Hills)", "Emirates International School Meadows"],
    transport: "Connected by Dubai Tram, DMCC and Sobha Realty Metro Stations, water taxis.",
    coordinates: { lat: 25.0805, lng: 55.1403 },
    featured: true
  },
  {
    slug: "arabian-ranches",
    name: "Arabian Ranches",
    tagline: "Timeless Desert Living & Community",
    description: "Dubai's premier suburban villa sanctuary, master-developed by Emaar with Spanish, Mediterranean, and contemporary architectural influences, community polo club, and golf course.",
    lifestyle: "Peaceful family suburban paradise, tree-lined avenues, championship equestrian facilities, community retail centres, and strong neighborhood camaraderie.",
    heroImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
    ],
    propertyTypes: ["Detached Villas", "Townhouses"],
    avgSalePriceApt: "N/A",
    avgSalePriceVilla: "AED 6,200,000",
    avgRentalYield: "6.0%",
    highlights: ["Arabian Ranches Golf Club", "Dubai Polo & Equestrian Club", "Ranches Primary School", "Retail Souks"],
    amenities: ["Community Pools", "Tennis Courts", "Skate Parks", "Barbecue Enclaves", "Dog Parks"],
    schools: ["Jumeirah English Speaking School (JESS) Ranches", "Ranches Primary School"],
    transport: "Located along Sheikh Mohammed Bin Zayed Road (E311) and Al Qudra Road.",
    coordinates: { lat: 25.0566, lng: 55.2678 },
    featured: true
  },
  {
    slug: "business-bay",
    name: "Business Bay",
    tagline: "The Commercial & Residential Powerhouse",
    description: "Dubai's central business capital located along the scenic Dubai Water Canal, featuring an eclectic mix of headquarters towers, chic residences, design hotels, and canal-side restaurants.",
    lifestyle: "Fast-paced corporate and cosmopolitan living, ideal for working professionals, investors, and business leaders.",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
    ],
    propertyTypes: ["Corporate Offices", "Retail Frontage", "Residential Apartments", "Waterfront Penthouses"],
    avgSalePriceApt: "AED 1,550,000",
    avgSalePriceVilla: "N/A",
    avgRentalYield: "7.8%",
    highlights: ["Dubai Water Canal boardwalk", "The Opus by Zaha Hadid", "JW Marriott Marquis", "Bay Square"],
    amenities: ["Canal Cruises", "Cycling Paths", "Co-working spaces", "Fine dining hotels"],
    schools: ["GEMS Our Own Indian School", "Dubai International School"],
    transport: "Business Bay Metro Station, marine ferries, direct connection to Sheikh Zayed and Al Khail Roads.",
    coordinates: { lat: 25.1857, lng: 55.2635 },
    featured: false
  }
];

export const CONSULTANTS: Consultant[] = [
  {
    id: "consultant-1",
    slug: "marcus-vance",
    name: "Marcus Vance",
    title: "Associate Director — Luxury Residential Sales",
    department: "Residential Sales",
    phone: "+971 4 302 5800",
    whatsapp: "+971588229123",
    email: "marcus.v@hausandhaus.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    languages: ["English", "French"],
    communities: ["Dubai Hills Estate", "Emirates Living", "Jumeirah Golf Estates"],
    experienceYears: 10,
    bio: "With a decade of high-end property advisory in Dubai, Marcus has facilitated over AED 2.4 Billion in prime villa and mansion transactions. His methodical market analysis and discretion make him a trusted counsel for ultra-high-net-worth individuals and family offices.",
    activeListingsCount: 18,
    awards: ["haus & haus Top Sales Producer 2023", "Property Finder Outstanding Agent 2022"],
    quote: "True luxury is about bespoke attention, transparency, and deep market timing."
  },
  {
    id: "consultant-2",
    slug: "sophia-al-mansoori",
    name: "Sophia Al-Mansoori",
    title: "Senior Waterfront & Island Specialist",
    department: "Residential Sales",
    phone: "+971 4 302 5800",
    whatsapp: "+971588229123",
    email: "sophia.m@hausandhaus.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    languages: ["English", "Arabic"],
    communities: ["Palm Jumeirah", "Dubai Harbour", "Bluewaters Island"],
    experienceYears: 8,
    bio: "Sophia specializes in iconic coastal and island acquisitions across Palm Jumeirah and Dubai Harbour. Born in the UAE and educated in London, she brings an unmatched blend of local heritage and international financial acumen.",
    activeListingsCount: 14,
    awards: ["Waterfront Advisor of the Year 2023"],
    quote: "Every beachfront property tells a story of Dubai's visionary growth."
  },
  {
    id: "consultant-3",
    slug: "oliver-wright",
    name: "Oliver Wright",
    title: "Head of Prime Residential Leasing",
    department: "Residential Leasing",
    phone: "+971 4 302 5800",
    whatsapp: "+971588229123",
    email: "oliver.w@hausandhaus.com",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    languages: ["English"],
    communities: ["Downtown Dubai", "Business Bay", "City Walk"],
    experienceYears: 7,
    bio: "Oliver leads our prime leasing division across Downtown Dubai and City Walk. He has built an extensive corporate relocation network, placing corporate executives, diplomats, and discerning tenants with seamless efficiency.",
    activeListingsCount: 26,
    awards: ["Leasing Leader Award 2023"],
    quote: "Leasing is about creating immediate comfort and long-term trust for both landlord and tenant."
  },
  {
    id: "consultant-4",
    slug: "tariq-mansour",
    name: "Tariq Mansour",
    title: "Director of Commercial Advisory",
    department: "Commercial",
    phone: "+971 4 302 5800",
    whatsapp: "+971588229123",
    email: "tariq.m@hausandhaus.com",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    languages: ["English", "Arabic"],
    communities: ["Business Bay", "DIFC", "Sheikh Zayed Road", "JLT"],
    experienceYears: 12,
    bio: "Tariq leads the commercial division at haus & haus, advising multinational corporations, sovereign wealth vehicles, retail conglomerates, and private investors on Grade A office acquisitions, retail leases, and commercial yield portfolios.",
    activeListingsCount: 19,
    awards: ["Commercial Transaction of the Year 2022"],
    quote: "Commercial real estate is pure numbers, strategic zoning, and operational efficiency."
  },
  {
    id: "consultant-5",
    slug: "charlotte-evans",
    name: "Charlotte Evans",
    title: "Senior Off Plan & Investment Specialist",
    department: "Off Plan",
    phone: "+971 4 302 5800",
    whatsapp: "+971588229123",
    email: "charlotte.e@hausandhaus.com",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    languages: ["English", "Spanish"],
    communities: ["Dubai Creek Harbour", "Sobha Hartland", "Palm Jebel Ali"],
    experienceYears: 6,
    bio: "Charlotte guides international investors through off-plan allocations, developer track records, payment structuring, and exit strategies to maximize capital upside and rental returns.",
    activeListingsCount: 32,
    awards: ["Top Off-Plan Consultant 2023"],
    quote: "Dubai off-plan is the world's most dynamic wealth preservation asset when guided by data."
  },
  {
    id: "consultant-6",
    slug: "nathan-brooks",
    name: "Nathan Brooks",
    title: "Head of Property Management Operations",
    department: "Property Management",
    phone: "+971 4 302 5800",
    whatsapp: "+971588229123",
    email: "nathan.b@hausandhaus.com",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    languages: ["English"],
    communities: ["Dubai Marina", "JVC", "Downtown Dubai", "Greens"],
    experienceYears: 9,
    bio: "Overseeing more than 3,200 managed units across the UAE, Nathan ensures zero-vacancy strategies, stringent tenant vetting, Ejari compliance, and 24/7 emergency maintenance responsiveness.",
    activeListingsCount: 0,
    quote: "Asset preservation and landlord peace of mind are our day-to-day commitments."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    reviewerName: "Alexander & Claire Dupont",
    date: "October 2024",
    rating: 5,
    text: "Relocating our family and business from Geneva to Dubai seemed daunting until we engaged haus & haus. Marcus Vance's encyclopedic knowledge of Dubai Hills Estate was staggering. He navigated the entire purchase, escrow, and conveyancing without a single friction point. Truly world-class.",
    department: "Residential Sales",
    consultantName: "Marcus Vance",
    community: "Dubai Hills Estate",
    verified: true
  },
  {
    id: "test-2",
    reviewerName: "Dr. Tariq Al-Husseini",
    date: "September 2024",
    rating: 5,
    text: "haus & haus has managed our family portfolio of 8 apartments in Downtown Dubai and Dubai Marina for over 5 years. Their quarterly reporting, proactive maintenance coordination, and tenant vetting have kept our yield at an impressive 7.4% net. Couldn't ask for a better partner.",
    department: "Property Management",
    consultantName: "Nathan Brooks",
    community: "Downtown Dubai",
    verified: true
  },
  {
    id: "test-3",
    reviewerName: "Sir Julian Ross",
    date: "November 2024",
    rating: 5,
    text: "Having watched haus & haus on BBC's Dubai Hustle, I expected energy, but what truly impressed me was their analytical rigor. Sophia Al-Mansoori presented real off-market data on Palm Jumeirah that helped us secure our beachfront villa well below market ask. Superb.",
    department: "Residential Sales",
    consultantName: "Sophia Al-Mansoori",
    community: "Palm Jumeirah",
    verified: true
  },
  {
    id: "test-4",
    reviewerName: "Elena Rostova",
    date: "August 2024",
    rating: 5,
    text: "Oliver Wright handled my luxury tenancy in Address Residences Opera flawlessly. Everything from the viewing, DEWA setup, Ejari registration to keys handover happened in less than 48 hours. Excellent service.",
    department: "Residential Leasing",
    consultantName: "Oliver Wright",
    community: "Downtown Dubai",
    verified: true
  }
];

export const SERVICES: ServiceItem[] = [
  {
    slug: "residential-sales",
    name: "Residential Sales",
    subtitle: "Acquire and Sell Dubai's Finest Properties with Absolute Confidence",
    shortDescription: "Our residential sales team combines localized data intelligence with global buyer outreach to maximize returns and identify trophy homes.",
    fullDescription: [
      "Whether you are acquiring a luxury golf villa in Dubai Hills, a prime beachfront sanctuary on Palm Jumeirah, or an executive apartment in Downtown Dubai, the haus & haus residential sales division provides unmatched expertise.",
      "With over a decade of verified transactions, 360+ property specialists, and an international database of pre-qualified buyers and family offices, we guide clients through valuation, bespoke marketing, contract formulation, and smooth title deed transfers at the Dubai Land Department."
    ],
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Comprehensive comparative market valuation",
      "Cinematic photography, 3D Matterport virtual tours, and aerial drone footage",
      "Exclusive syndication across leading international & regional portals",
      "Direct exposure to pre-qualified high-net-worth investor database",
      "Dedicated RERA-licensed broker handling all viewings & negotiations",
      "Complete in-house conveyancing through to Land Department transfer"
    ],
    benefits: [
      {
        title: "Maximum Price Realization",
        description: "Our strategic pricing models and multi-channel marketing ensure your property commands peak market valuation."
      },
      {
        title: "Discreet Off-Market Transactions",
        description: "For ultra-luxury assets, our private brokerage team conducts confidential transactions without public listings."
      },
      {
        title: "End-to-End Governance",
        description: "Zero administrative burden. Our in-house conveyancers oversee NOC applications, mortgage settlements, and trustee appointments."
      }
    ],
    process: [
      { step: "01", title: "Market Valuation", description: "Detailed algorithmic and historic comparable analysis of recent Land Department sales." },
      { step: "02", title: "Media & Presentation", description: "Architectural staging, HDR photography, and compelling marketing copywriting." },
      { step: "03", title: "Targeted Outreach", description: "Targeted digital campaigns, VIP investor briefings, and open houses." },
      { step: "04", title: "Deal Execution", description: "Rigorous offer negotiation, Form F signing, and escrow settlement." }
    ],
    faqs: [
      {
        question: "What are the standard fees involved in purchasing a property in Dubai?",
        answer: "Buyers typically budget 4% Dubai Land Department transfer fee, AED 4,200 trustee fee, 2% agency commission (+VAT), and mortgage registration fees (0.25% of loan amount) if applicable."
      },
      {
        question: "Can international non-residents purchase freehold property in Dubai?",
        answer: "Yes, Dubai offers designated Freehold zones where foreign nationals can acquire 100% outright ownership and apply for 2-year or 10-year Golden Visas depending on purchase value."
      }
    ],
    ctaText: "Speak to a Residential Sales Specialist"
  },
  {
    slug: "residential-leasing",
    name: "Residential Leasing",
    subtitle: "High-Quality Tenants. Premium Properties. Seamless Relocations.",
    shortDescription: "Connecting discerning tenants with Dubai's finest long-term residences while delivering reliable occupancy and optimal yields for landlords.",
    fullDescription: [
      "Our leasing team handles thousands of high-quality tenancy agreements each year across Dubai's most desirable master communities.",
      "From bespoke tenant profiling and corporate relocations to Ejari registrations, DEWA coordination, and inventory inspections, haus & haus makes renting straightforward, safe, and transparent."
    ],
    heroImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Rigorous tenant background & credit verification",
      "Corporate relocation contracts with multinational firms",
      "Rapid turnaround minimizing landlord vacancy periods",
      "Professional check-in, check-out, and photographic inventory reports",
      "Direct Ejari certified contract registration"
    ],
    benefits: [
      {
        title: "Vetted High-Calibre Tenants",
        description: "We verify employment stability and references to ensure punctual rental payments and property care."
      },
      {
        title: "Market-Leading Tenancy Retention",
        description: "Our attentive relationship management ensures high lease renewals, saving landlords re-listing fees."
      }
    ],
    process: [
      { step: "01", title: "Rental Appraisal", description: "Current market rate assessment based on real-time RERA rental index." },
      { step: "02", title: "Showcasing & Viewings", description: "Accompanied viewings with seasoned community-focused agents." },
      { step: "03", title: "Vetting & Contracts", description: "Tenant screening, payment schedule formulation, and Unified Tenancy Contract drafting." },
      { step: "04", title: "Ejari & Handover", description: "Official registration and keys handover with detailed condition report." }
    ],
    faqs: [
      {
        question: "How many rental cheques are customary in Dubai?",
        answer: "Traditionally rents were paid in 1, 2, or 4 cheques annually. Increasingly, modern landlords and corporate tenants negotiate flexible 4-12 cheque or automated direct debit options."
      }
    ],
    ctaText: "Find a Rental or List Your Property"
  },
  {
    slug: "holiday-rentals",
    name: "Holiday Rentals & Short-Term",
    subtitle: "Turn Your Property Into a High-Yielding Luxury Vacation Home",
    shortDescription: "Full-service short-term rental management licensed by Dubai Economy and Tourism (DET), generating up to 30% higher net returns than traditional leasing.",
    fullDescription: [
      "Dubai continues to break international tourism records. haus & haus Holiday Homes unlocks superior yields by transforming luxury residential properties into high-demand vacation rentals.",
      "We handle every aspect: interior design & furnishing, DET licensing, dynamic algorithmic pricing across Airbnb and Booking.com, 5-star hotel linen, concierge services, and 24/7 guest communications."
    ],
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Full Dubai Economy & Tourism (DET) permit compliance",
      "Dynamic revenue optimization algorithms adjusting rates for Dubai events & seasons",
      "Multi-channel distribution across Airbnb, Booking.com, VRBO & direct booking portal",
      "Hotel-quality linen, premium toiletries, and professional housekeeping",
      "24/7 guest reception and concierge support",
      "Monthly detailed owner statements and direct yield transfers"
    ],
    benefits: [
      {
        title: "20-35% Higher Net Income",
        description: "Capitalize on Dubai's winter tourist influx, major expos, and high daily average rates."
      },
      {
        title: "Owner Flexibility",
        description: "Block dates anytime for your personal vacation in Dubai while generating income during remaining months."
      }
    ],
    process: [
      { step: "01", title: "Property Audit", description: "Assessment of short-term earning potential and furnishing requirements." },
      { step: "02", title: "Fit-Out & Staging", description: "Bespoke hotel-grade furnishing, décor, and photography." },
      { step: "03", title: "DET Licensing", description: "Official DTCM holiday home permit acquisition and portal setup." },
      { step: "04", title: "Launch & Hospitality", description: "Live bookings, guest check-in, maintenance, and revenue dispatch." }
    ],
    faqs: [
      {
        question: "Do I need a special license to rent my home on Airbnb in Dubai?",
        answer: "Yes, Dubai law requires all holiday homes to be licensed by the Department of Economy and Tourism (DET). haus & haus handles the entire registration and ongoing tourism tax remittances."
      }
    ],
    ctaText: "Discuss Holiday Home Management"
  },
  {
    slug: "property-management",
    name: "Property Management",
    subtitle: "Complete Hands-Off Ownership for Local & Overseas Landlords",
    shortDescription: "Protecting your asset and maximizing your yields with dedicated property managers, 24/7 emergency response, proactive maintenance, and strict financial accounting.",
    fullDescription: [
      "With thousands of properties under our active care, the haus & haus Property Management division acts as your dedicated local asset steward.",
      "From rent collection and cheque banking to maintenance dispatch, lease renewals, dispute resolution, and annual financial statements, you enjoy steady passive income with total peace of mind."
    ],
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Dedicated single point of contact property manager",
      "Punctual rent collection and direct wire transfer to owner's bank account",
      "Pre-tenancy inspection, routine mid-term audits, and move-out snagging",
      "In-house certified maintenance teams with competitive trade rates",
      "RERA compliance and rental dispute handling if ever required",
      "Owner portal with real-time financial tracking and maintenance invoices"
    ],
    benefits: [
      {
        title: "Ideal for Overseas Investors",
        description: "Manage your Dubai investments from anywhere in the world without late-night tenant calls."
      },
      {
        title: "Asset Value Preservation",
        description: "Regular preventative servicing prevents minor wear from escalating into expensive structural repairs."
      }
    ],
    process: [
      { step: "01", title: "Onboarding & Audit", description: "Document collection, key handover, and initial condition inspection." },
      { step: "02", title: "Tenant Coordination", description: "Direct communication channel established for rent and service requests." },
      { step: "03", title: "Ongoing Maintenance", description: "Immediate resolution of plumbing, AC, and electrical work orders." },
      { step: "04", title: "Renewal & Accounting", description: "Annual lease renegotiation following RERA rent calculator parameters." }
    ],
    faqs: [
      {
        question: "How are maintenance repair costs managed?",
        answer: "We establish a pre-agreed expenditure threshold (typically AED 500-1000). Minor repairs below this are handled immediately to keep tenants happy; any major work requires your prior written approval."
      }
    ],
    ctaText: "Get a Property Management Proposal"
  },
  {
    slug: "home-maintenance",
    name: "Home Maintenance",
    subtitle: "Fast, Reliable, Professional Care for Your Home",
    shortDescription: "Certified technicians covering emergency air conditioning, plumbing, electrical, carpentry, painting, and annual maintenance contracts (AMCs).",
    fullDescription: [
      "Dubai's climate requires dependable, high-performance home systems. Our home maintenance division provides rapid-response technicians equipped with genuine parts and transparent pricing.",
      "Whether you need an urgent AC repair in the peak of summer, smart water pump servicing, or a comprehensive annual maintenance contract for your villa, our teams are on call 24 hours a day."
    ],
    heroImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Emergency 24/7 callout response within 2 hours",
      "AC duct cleaning, coil disinfection, and compressor overhauls",
      "Plumbing, leak detection, and sanitary ware replacement",
      "Electrical diagnostics and circuit breaker rectifications",
      "Custom annual maintenance contracts (AMC) with preventative quarterly visits",
      "30-day workmanship guarantee on all repairs"
    ],
    benefits: [
      {
        title: "Extended Equipment Lifespan",
        description: "Regular coil cleaning and filter changes keep AC efficiency high and DEWA electricity bills low."
      },
      {
        title: "Fixed Cost Predictability",
        description: "Our annual maintenance packages cover all routine labour and callouts under one clear yearly fee."
      }
    ],
    process: [
      { step: "01", title: "Request & Dispatch", description: "Book online or via 24/7 hotline with clear problem description." },
      { step: "02", title: "Diagnostic Visit", description: "Trained technician inspects system and presents transparent quote." },
      { step: "03", title: "Precision Repair", description: "Execution using genuine parts and clean, courteous protocols." },
      { step: "04", title: "Testing & Sign-off", description: "Performance testing and formal sign-off with digital receipt." }
    ],
    faqs: [
      {
        question: "What is included in an Annual Maintenance Contract (AMC)?",
        answer: "Our standard AMC includes 3 scheduled preventative services per year for AC, plumbing, and electrical systems, plus unlimited emergency callouts with zero labour charges."
      }
    ],
    ctaText: "Request Maintenance Assistance"
  },
  {
    slug: "mortgages",
    name: "Mortgages & Financing",
    subtitle: "Unlocking Dubai's Most Competitive Home Loan Rates",
    shortDescription: "Independent mortgage brokers comparing loans across 20+ UAE banks to secure preferential interest rates, higher loan-to-value, and fast pre-approvals.",
    fullDescription: [
      "Navigating UAE mortgage regulations, bank stress tests, and interest rate structures can be complex. The haus & haus mortgage advisory team provides independent, bespoke financing solutions.",
      "We partner with all major UAE Islamic and conventional lenders to secure the lowest margin rates for residents, non-residents, salaried individuals, and business owners."
    ],
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Access to exclusive bank rates not available directly to walk-in consumers",
      "Fast-track pre-approvals within 3-5 business days",
      "Financing available for both UAE residents (up to 80% LTV) and international investors (up to 60% LTV)",
      "Fixed rate, variable rate, and Sharia-compliant Islamic financing options",
      "Mortgage refinancing and equity release for existing property owners"
    ],
    benefits: [
      {
        title: "Save Tens of Thousands in Interest",
        description: "A difference of even 0.3% in your mortgage margin saves substantial capital over the lifespan of a loan."
      },
      {
        title: "Complete Paperwork Handling",
        description: "We assemble your bank dossier, liaison with underwriters, and accompany bank valuers to the property."
      }
    ],
    process: [
      { step: "01", title: "Eligibility Assessment", description: "Review of income, debt-burden ratio, and maximum borrowing capacity." },
      { step: "02", title: "Bank Pre-Approval", description: "Securing formal in-principle bank sanction so you can negotiate with confidence." },
      { step: "03", title: "Property Valuation", description: "Lender appoints certified valuer to inspect the agreed property." },
      { step: "04", title: "Final Offer & Transfer", description: "Signing the Final Offer Letter (FOL) and bank representative attendance at transfer." }
    ],
    faqs: [
      {
        question: "What is the minimum down payment required for a mortgage in Dubai?",
        answer: "For properties under AED 5 million, UAE citizens require 15% down payment; UAE residents require 20% down payment; non-resident international buyers typically require 40%."
      }
    ],
    ctaText: "Get a Free Mortgage Pre-Assessment"
  },
  {
    slug: "conveyancing",
    name: "Conveyancing & Legal Transfer",
    subtitle: "Flawless Title Transfers and Escrow Protection",
    shortDescription: "Certified conveyancing specialists safeguarding your financial interests throughout the Dubai Land Department property transfer process.",
    fullDescription: [
      "The legal transfer of real estate in Dubai involves multiple parties: buyers, sellers, developer management, mortgage banks, and the Dubai Land Department Trustee office.",
      "Our in-house conveyancers draft water-tight contracts, verify clear title deeds, secure developer No Objection Certificates (NOC), coordinate mortgage releases, and manage escrow settlements without stress."
    ],
    heroImage: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Preparation and verification of Unified RERA Contracts (Form F / MOU)",
      "Developer No Objection Certificate (NOC) application and clearing of service charges",
      "Mortgage redemption coordination and liability letter processing",
      "Power of Attorney (POA) representation for overseas parties unable to travel",
      "Coordination of manager's cheques, escrow deposits, and trustee fees",
      "Same-day issuance of new electronic Title Deed"
    ],
    benefits: [
      {
        title: "Zero Financial Risk",
        description: "All deposits and purchase funds are verified and handed over strictly upon official title deed issuance."
      },
      {
        title: "Remote Execution",
        description: "Through our licensed POA services, international buyers and sellers complete transfers without flying into Dubai."
      }
    ],
    process: [
      { step: "01", title: "Contract Formulation", description: "Drafting Form F with clear clauses protecting buyer deposit and seller timelines." },
      { step: "02", title: "Developer Clearance", description: "Submitting NOC documents to developer and reconciling maintenance dues." },
      { step: "03", title: "Bank Settlements", description: "Coordinating mortgage discharge or new buyer mortgage clearance." },
      { step: "04", title: "Trustee Transfer", description: "Final meeting at DLD Registration Trustee office and electronic Title Deed dispatch." }
    ],
    faqs: [
      {
        question: "How long does a typical property transfer take in Dubai?",
        answer: "A standard cash-to-cash transaction takes approximately 10 to 14 days from contract signing. Transactions involving mortgages on either side generally take 4 to 6 weeks."
      }
    ],
    ctaText: "Speak to a Conveyancing Specialist"
  },
  {
    slug: "currency-services",
    name: "Currency & FX Services",
    subtitle: "Protect Your Capital with Bank-Beating Exchange Rates",
    shortDescription: "Institutional foreign exchange and international wire transfer solutions ensuring you save significantly on cross-border property transactions.",
    fullDescription: [
      "When purchasing property or repatriating rental income across international borders, standard high-street banks often impose inflated exchange spreads and punitive wire fees.",
      "haus & haus partners with regulated international currency specialists to provide bank-beating exchange rates, forward contracts to hedge currency fluctuations, and zero transfer fees on property payments."
    ],
    heroImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Access to institutional wholesale FX rates (GBP, EUR, USD, CAD, AUD to AED)",
      "Zero international transfer fees on property settlements",
      "Forward exchange contracts locking in rates up to 12 months in advance",
      "Dedicated currency dealer assigned to your transaction",
      "Regulated by the UK FCA and UAE regulatory authorities",
      "Direct settlement into Dubai escrow accounts and Land Department trustees"
    ],
    benefits: [
      {
        title: "Substantial Capital Savings",
        description: "On a purchase of AED 3,000,000, saving just 1.5% on the exchange spread equates to AED 45,000 in your pocket."
      },
      {
        title: "Protection Against Currency Swings",
        description: "Forward contracts protect off-plan buyers with staged milestone payments from adverse market depreciation."
      }
    ],
    process: [
      { step: "01", title: "Free Account Setup", description: "Digital identity verification in compliance with international AML rules." },
      { step: "02", title: "Rate Quotation", description: "Live transparent quote compared directly with commercial bank rates." },
      { step: "03", title: "Order Execution", description: "Locking the rate via spot order or forward contract." },
      { step: "04", title: "Secure Dispatch", description: "Funds transferred with full swift tracking directly to the property settlement." }
    ],
    faqs: [
      {
        question: "Is the UAE Dirham (AED) pegged to the US Dollar?",
        answer: "Yes, the AED is officially pegged to the US Dollar at a fixed rate of approximately 3.6725 AED to 1 USD. However, buyers converting from GBP, EUR, CAD, or AUD remain exposed to daily market movements."
      }
    ],
    ctaText: "Discuss Currency Requirements"
  }
];

export const GUIDES: Guide[] = [
  {
    slug: "dubai-investment-playbook",
    title: "The Ultimate Dubai Property Investment Playbook",
    category: "Investment Playbook",
    description: "A comprehensive strategic blueprint for high-net-worth investors and institutions seeking superior rental yield and tax-free capital growth in Dubai.",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    publishedDate: "October 2024",
    tableOfContents: [
      "Why Dubai Outperforms Global Metros",
      "Understanding Freehold vs Leasehold",
      "Yield Analysis: Short-Term vs Long-Term",
      "Navigating Off-Plan vs Secondary Assets",
      "Taxation, Golden Visas & Wealth Structuring"
    ],
    contentSections: [
      {
        heading: "Why Dubai Outperforms Global Metros",
        body: [
          "With zero personal income tax, zero capital gains tax, and high economic resilience under the Dubai Economic Agenda (D33), the city has positioned itself as the leading wealth destination globally.",
          "While residential rental yields in London, New York, and Hong Kong hover between 2.5% and 4.2%, prime Dubai communities routinely deliver 6.5% to 8.5% net yields, supported by constant inbound population growth."
        ]
      },
      {
        heading: "Yield Analysis: Short-Term vs Long-Term",
        body: [
          "Investors must weigh the stability of annual residential leases against the seasonal peak performance of holiday rentals.",
          "Prime waterfront units in Dubai Marina and Palm Jumeirah can generate up to 25% higher gross revenues on the short-term market during the October to April tourism peak, though they incur DTCM licensing and utility charges."
        ]
      }
    ],
    faqs: [
      {
        question: "What minimum investment qualifies for the UAE 10-Year Golden Visa?",
        answer: "Real estate investment of AED 2,000,000 or more in eligible freehold property allows investors and their immediate family to obtain the 10-Year Renewable Golden Visa."
      }
    ]
  },
  {
    slug: "dubai-buyers-guide",
    title: "The Complete Dubai Property Buyers Guide",
    category: "Buyers Guide",
    description: "Step-by-step roadmap for acquiring ready and off-plan real estate in Dubai, from initial search to title deed registration.",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    publishedDate: "November 2024",
    tableOfContents: [
      "Finding the Right Area and Property",
      "Form A, B and F Explained",
      "Mortgage Financing Steps",
      "Dubai Land Department Transfer Day",
      "Post-Handover Utilities Setup"
    ],
    contentSections: [
      {
        heading: "Finding the Right Area and Property",
        body: [
          "The first step is establishing your investment objective: is this an owner-occupied sanctuary for your family, or a high-yielding buy-to-let portfolio asset?",
          "Consulting an experienced community specialist ensures you understand future infrastructure changes, school catchment areas, and upcoming developer supply."
        ]
      }
    ],
    faqs: [
      {
        question: "How long does a ready property purchase take?",
        answer: "Typically 2 to 4 weeks for cash buyers, and 4 to 6 weeks when mortgage financing is involved."
      }
    ]
  },
  {
    slug: "dubai-tenants-guide",
    title: "Dubai Tenants Guide: Renting with Confidence",
    category: "Tenants Guide",
    description: "Everything tenants need to know about Ejari registration, RERA Rental Index protections, DEWA activation, and lease contracts.",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    publishedDate: "September 2024",
    tableOfContents: [
      "Finding Your Rental Home",
      "Standard Tenancy Contract Clauses",
      "Understanding the RERA Rental Calculator",
      "Move-in Checklist & Maintenance Responsibility"
    ],
    contentSections: [
      {
        heading: "Finding Your Rental Home",
        body: [
          "When renting in Dubai, ensure you work exclusively with RERA-licensed brokers. haus & haus agents verify title deeds before marketing to ensure complete landlord authenticity."
        ]
      }
    ],
    faqs: [
      {
        question: "Can a landlord raise the rent arbitrarily upon lease renewal?",
        answer: "No. All rental increases in Dubai are strictly regulated by the official RERA Rental Index calculator and require 90 days written notice before lease expiry."
      }
    ]
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    slug: "dubai-real-estate-market-breaks-all-time-records-2024",
    title: "Dubai Real Estate Surpasses AED 400 Billion in Annual Transactions",
    category: "Market Insights",
    summary: "Record capital inflows, rising millionaire migration, and sustained infrastructure investments drive Dubai property markets to unprecedented historical peaks.",
    readTime: "5 min read",
    publishedDate: "November 12, 2024",
    author: {
      name: "Simon Baker",
      title: "Co-Founder & Managing Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
    },
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    content: [
      "The Dubai property market has officially surpassed all previous transaction benchmarks, recording more than AED 400 Billion in aggregate real estate sales across the past twelve months.",
      "Key drivers remain the sustained influx of high-net-worth individuals relocating under the UAE Golden Visa framework, geopolitical stability, and world-class lifestyle infrastructure.",
      "Prime villa communities like Dubai Hills Estate, Palm Jumeirah, and Emirates Living continue to experience robust price growth, while emerging communities like Sobha Hartland and Dubai Creek Harbour attract strong off-plan participation."
    ],
    tags: ["Market Insights", "Dubai Economy", "Luxury Real Estate", "D33"]
  },
  {
    slug: "top-5-dubai-communities-delivering-highest-rental-yields",
    title: "Top 5 Dubai Communities Delivering the Highest Rental Yields",
    category: "Investment",
    summary: "Data-driven breakdown of where savvy property investors are generating between 7.5% and 9.2% net rental yields in 2024.",
    readTime: "6 min read",
    publishedDate: "October 28, 2024",
    author: {
      name: "Marcus Vance",
      title: "Associate Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
    },
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    content: [
      "While capital appreciation often grabs headlines, cash-flow yields remain the true foundation of sustainable wealth generation.",
      "Business Bay, Jumeirah Village Circle (JVC), and Dubai Marina have consistently generated the strongest yields due to high tenant demand from corporate professionals and digital nomads.",
      "Our latest quarterly data shows well-managed 1-bedroom and 2-bedroom units yielding up to 8.4% gross, comfortably outperforming peer assets across Europe and North America."
    ],
    tags: ["Rental Yield", "ROI", "Investment Strategy", "Business Bay"]
  },
  {
    slug: "haus-and-haus-celebrates-12-years-of-excellence",
    title: "haus & haus Marks 12 Years of Innovation in Dubai Real Estate",
    category: "Company News",
    summary: "From three UK friends in 2013 to 360+ experts managing billions in assets, haus & haus reflects on a transformative journey.",
    readTime: "4 min read",
    publishedDate: "October 15, 2024",
    author: {
      name: "Luke Remington",
      title: "Co-Founder & Managing Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    },
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    content: [
      "In 2013, James Perry, Luke Remington, and Simon Baker founded haus & haus with a simple premise: apply the highest standards of British agency ethics, transparent client care, and unwavering accountability to Dubai's burgeoning property market.",
      "Today, with over 360 team members across 13 dedicated divisions, regular appearances on global television including BBC Three's Dubai Hustle, and dozens of industry awards, our commitment to people first remains unchanged."
    ],
    tags: ["Company News", "Founders Story", "Dubai Hustle", "Culture"]
  }
];

export const MARKET_REPORTS: MarketReport[] = [
  {
    id: "rep-2024-q3",
    title: "Dubai Real Estate Market Report — Q3 2024",
    quarter: "Q3",
    year: 2024,
    summary: "Comprehensive market review analyzing AED 114 Billion in sales transactions, rental index movements, luxury villa capital trends, and emerging off-plan hotspots.",
    coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    keyStats: [
      { label: "Total Sales Value", value: "AED 114.2B", trend: "+32% YoY" },
      { label: "Transaction Volume", value: "48,230 Deals", trend: "+38% YoY" },
      { label: "Average Prime Villa Growth", value: "+18.4%", trend: "Strong" },
      { label: "Average City Gross Yield", value: "7.2%", trend: "Stable" }
    ],
    downloadUrl: "#",
    fileSize: "8.4 MB (PDF)"
  },
  {
    id: "rep-2024-q2",
    title: "Dubai Real Estate Market Report — Q2 2024",
    quarter: "Q2",
    year: 2024,
    summary: "Quarterly intelligence detailing the expansion of luxury branded residences, commercial office occupancy rates at 92%, and foreign capital inflow demographics.",
    coverImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    keyStats: [
      { label: "Total Sales Value", value: "AED 106.8B", trend: "+28% YoY" },
      { label: "Off-Plan Market Share", value: "59%", trend: "+6% QoQ" },
      { label: "Commercial Office Occupancy", value: "92.4%", trend: "Peak" }
    ],
    downloadUrl: "#",
    fileSize: "7.9 MB (PDF)"
  }
];

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: "pod-1",
    episodeNumber: 42,
    title: "Inside Dubai's Multi-Million Dollar Super-Prime Property Market",
    guest: "Luke Remington",
    guestRole: "Co-Founder & Managing Director, haus & haus",
    duration: "48 mins",
    publishedDate: "November 5, 2024",
    description: "Luke sits down to break down the unprecedented demand for Palm Jumeirah mansions, Dubai Hills golf estates, and how global family offices evaluate risk and capital allocation in the UAE.",
    thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
    topics: ["Super-Prime Real Estate", "Global Millionaire Migration", "Billionaires' Row", "Market Outlook 2025"]
  },
  {
    id: "pod-2",
    episodeNumber: 41,
    title: "How to Build a High-Yielding Dubai Rental Portfolio from Scratch",
    guest: "Nathan Brooks & Marcus Vance",
    guestRole: "Property Management & Sales Leaders",
    duration: "39 mins",
    publishedDate: "October 22, 2024",
    description: "Everything you need to know about navigating secondary vs off-plan properties, selecting high-cashflow 1-beds in Business Bay, and managing remote tenant leases without stress.",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80",
    topics: ["Rental Yields", "Portfolio Diversification", "Remote Management", "Tax Efficiency"]
  }
];

export const JOB_VACANCIES: JobVacancy[] = [
  {
    slug: "senior-residential-sales-consultant",
    title: "Senior Residential Sales Consultant",
    department: "Residential Sales",
    location: "Gold & Diamond Park, Dubai",
    type: "Commission-based",
    experienceLevel: "2+ Years Dubai Real Estate Experience",
    summary: "Join our industry-leading residential sales division. We provide full marketing support, dedicated qualified leads, administrative conveyancing backup, and an uncapped commission structure.",
    responsibilities: [
      "Manage high-value buyer enquiries and conduct professional viewings",
      "List luxury residential properties across assigned master communities",
      "Negotiate sales terms and oversee contract signings",
      "Build enduring relationships with property owners and institutional buyers"
    ],
    requirements: [
      "Minimum 2 years proven residential brokerage track record in Dubai or mature international real estate markets",
      "Valid UAE driving license or willingness to obtain immediately",
      "Exceptional negotiation and interpersonal skills",
      "Fluency in English (additional languages like Arabic, French, or Russian are advantageous)"
    ],
    benefits: [
      "Uncapped, highly competitive commission tiers (up to 60%)",
      "Qualified lead allocation from digital ad campaigns & walk-ins",
      "Full administrative, marketing, and conveyancing support team",
      "Medical insurance and UAE employment visa"
    ]
  },
  {
    slug: "commercial-property-broker",
    title: "Commercial Property Broker",
    department: "Commercial",
    location: "Gold & Diamond Park, Dubai",
    type: "Commission-based",
    experienceLevel: "3+ Years Commercial Brokerage",
    summary: "Represent corporate tenants, institutional landlords, and family offices in acquiring and leasing Grade A offices, retail storefronts, and industrial warehouse assets across Dubai.",
    responsibilities: [
      "Source and list commercial inventory across Business Bay, DIFC, and SZR",
      "Conduct corporate workplace consultations and financial lease analyses",
      "Liaise with developer commercial teams and facility managers"
    ],
    requirements: [
      "Demonstrable commercial property sales/leasing experience",
      "Understanding of commercial lease agreements, fit-out licenses, and zoning regulations",
      "Strong corporate business development mindset"
    ],
    benefits: [
      "Tiered corporate commission incentives",
      "Access to enterprise tenant inquiries and private landlord portfolios",
      "Professional growth opportunities into leadership"
    ]
  },
  {
    slug: "property-manager",
    title: "Portfolio Property Manager",
    department: "Property Management",
    location: "Gold & Diamond Park, Dubai",
    type: "Full-time",
    experienceLevel: "2+ Years Property Management",
    summary: "Manage a dedicated portfolio of prime residential units, acting as the primary liaison between overseas landlords, tenants, and maintenance contractors.",
    responsibilities: [
      "Supervise rent collection, lease renewals, and tenant communications",
      "Coordinate routine inspections and oversee emergency repair work orders",
      "Ensure all tenancy documentation adheres strictly to RERA requirements"
    ],
    requirements: [
      "Previous property management experience in the UAE",
      "Familiarity with Ejari, RERA rental dispute center, and DEWA procedures",
      "Organized, empathetic, and detail-oriented approach"
    ],
    benefits: [
      "Attractive tax-free basic salary + performance bonuses",
      "UAE health insurance and visa",
      "Annual flight allowance"
    ]
  }
];

