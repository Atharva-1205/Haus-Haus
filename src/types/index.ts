export type PropertyType = 
  | 'Apartment' 
  | 'Villa' 
  | 'Townhouse' 
  | 'Penthouse' 
  | 'Duplex' 
  | 'Office' 
  | 'Retail' 
  | 'Warehouse' 
  | 'Commercial Building';

export type ListingStatus = 'For Sale' | 'For Rent' | 'Off Plan';

export interface Property {
  id: string;
  reference: string;
  title: string;
  slug: string;
  status: ListingStatus;
  type: PropertyType;
  price: number;
  rentalFrequency?: 'yearly' | 'monthly' | 'weekly';
  community: string;
  subCommunity?: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  bua: number; // sq ft
  plotSize?: number; // sq ft
  furnished: 'Furnished' | 'Unfurnished' | 'Semi-Furnished';
  completionStatus?: 'Ready' | 'Off-Plan' | 'Under Construction';
  featured?: boolean;
  luxury?: boolean;
  commercial?: boolean;
  images: string[];
  description: string;
  features: string[];
  amenities: string[];
  floorPlanUrl?: string;
  virtualTourUrl?: string;
  agent: {
    id: string;
    name: string;
    title: string;
    phone: string;
    whatsapp: string;
    email: string;
    image: string;
    languages: string[];
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  fitOut?: 'Shell & Core' | 'Fitted' | 'Fully Furnished';
  annualServiceCharge?: number;
}

export interface Development {
  id: string;
  name: string;
  slug: string;
  developer: {
    name: string;
    slug: string;
    logo?: string;
  };
  community: string;
  startingPrice: number;
  handoverDate: string;
  paymentPlan: string;
  description: string;
  images: string[];
  heroImage: string;
  unitTypes: string[];
  bedroomRange: string;
  amenities: string[];
  features: string[];
  status: 'New Launch' | 'Under Construction' | 'Ready Soon' | 'Sold Out';
  highlights: string[];
  masterplanDetails?: string;
}

export interface Developer {
  slug: string;
  name: string;
  founded: string;
  headquarters: string;
  description: string;
  portfolioHighlights: string;
  image: string;
  featuredProjects: string[];
  totalProjects: number;
}

export interface Community {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  lifestyle: string;
  heroImage: string;
  gallery: string[];
  propertyTypes: string[];
  avgSalePriceApt: string;
  avgSalePriceVilla: string;
  avgRentalYield: string;
  highlights: string[];
  amenities: string[];
  schools: string[];
  transport: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  featured: boolean;
}

export interface Consultant {
  id: string;
  slug: string;
  name: string;
  title: string;
  department: 'Residential Sales' | 'Residential Leasing' | 'Off Plan' | 'Commercial' | 'Property Management' | 'Mortgages' | 'Management';
  phone: string;
  whatsapp: string;
  email: string;
  image: string;
  languages: string[];
  communities: string[];
  experienceYears: number;
  bio: string;
  activeListingsCount: number;
  awards?: string[];
  quote?: string;
}

export interface Testimonial {
  id: string;
  reviewerName: string;
  date: string;
  rating: number;
  text: string;
  department: string;
  consultantName?: string;
  community?: string;
  verified: boolean;
}

export interface Guide {
  slug: string;
  title: string;
  category: 'Investment Playbook' | 'Buyers Guide' | 'Sellers Guide' | 'Tenants Guide' | 'Landlords Guide' | 'Commercial Guide';
  description: string;
  readTime: string;
  image: string;
  publishedDate: string;
  tableOfContents: string[];
  contentSections: {
    heading: string;
    body: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface NewsArticle {
  slug: string;
  title: string;
  category: 'Market Insights' | 'Investment' | 'Off Plan' | 'Dubai Living' | 'Company News';
  summary: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    title: string;
    image: string;
  };
  heroImage: string;
  content: string[];
  tags: string[];
}

export interface MarketReport {
  id: string;
  title: string;
  quarter: string;
  year: number;
  summary: string;
  coverImage: string;
  keyStats: {
    label: string;
    value: string;
    trend?: string;
  }[];
  downloadUrl: string;
  fileSize: string;
}

export interface PodcastEpisode {
  id: string;
  episodeNumber: number;
  title: string;
  guest: string;
  guestRole: string;
  duration: string;
  publishedDate: string;
  description: string;
  thumbnail: string;
  youtubeId?: string;
  spotifyUrl?: string;
  topics: string[];
}

export interface JobVacancy {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Commission-based';
  experienceLevel: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export interface ServiceItem {
  slug: string;
  name: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string[];
  heroImage: string;
  features: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  ctaText: string;
}

