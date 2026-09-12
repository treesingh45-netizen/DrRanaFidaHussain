export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'conditions'
  | 'pediatric'
  | 'sports'
  | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'core' | 'specialized' | 'rehabilitation';
  shortDesc: string;
  fullDesc: string;
  clinicalFocus: string[];
  icon: string;
  image: string;
}

export interface ConditionCategory {
  id: string;
  title: string;
  description: string;
  items: Array<{
    name: string;
    details: string;
    physioRole: string;
  }>;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  patientAge: string;
  serviceRequired: string;
  preferredDate: string;
  message: string;
}
