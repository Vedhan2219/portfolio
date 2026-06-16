export interface Project {
  slug: string;
  title: string;
  category: string;
  client: string;
  year: number;
  tags: string[];
  excerpt: string;
  description: string;
  image: string;
  featured: boolean;
  awards: string[];
  url?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  featured: boolean;
  content: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  features?: string[]; // Added this
  deliverables: string[];
  priceFrom: string;
  duration: string;
  highlight: boolean;
}

export interface Testimonial {
  id: string | number; // Updated this
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  project: string;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  color: string;
  features: PricingFeature[];
  cta: string;
  popular: boolean;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}
