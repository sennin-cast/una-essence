export type ServiceCategory =
  | 'massagens'
  | 'spas'
  | 'faciais'
  | 'corporais'
  | 'terapias'
  | 'especiais';

export interface Service {
  id: string;
  name: string;
  slug: string;
  category: ServiceCategory;
  categoryLabel: string;
  description: string;
  fullDescription?: string;
  image: string;
  featured?: boolean;
  active: boolean;
  safetyNote?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  highlight: string;
  comment: string;
  treatment: string;
}
