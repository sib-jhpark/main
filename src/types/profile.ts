export type Language = 'ko' | 'en';
export type Theme = 'light' | 'dark';

export interface LocalizedText {
  ko: string;
  en: string;
}

export interface HeroMetric {
  label: LocalizedText;
  value: string;
  sublabel: LocalizedText;
}

export type ProjectCategory = 'rl' | 'optimization' | 'fintech';
export type ProjectStatus = 'live' | 'opensource' | 'wip';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: LocalizedText;
  category: ProjectCategory;
  status: ProjectStatus;
  year: string;
  featured?: boolean;
  summary: LocalizedText;
  impact: LocalizedText;
  role: LocalizedText;
  tech: string[];
  problem: LocalizedText;
  solution: LocalizedText;
  highlights: LocalizedText[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  id: string;
  type: 'work' | 'education';
  period: string;
  organization: LocalizedText;
  role: LocalizedText;
  location: LocalizedText;
  summary: LocalizedText;
  bullets: LocalizedText[];
  tags?: string[];
}

export interface TechSkill {
  name: string;
  core?: boolean;
}

export interface TechCategory {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  skills: TechSkill[];
}

export interface PublicationItem {
  id: string;
  date: string;
  venue: string;
  title: string;
  note: LocalizedText;
  url?: string;
}

export interface HonorItem {
  id: string;
  date: string;
  title: LocalizedText;
  detail: LocalizedText;
}

export interface CertificationItem {
  id: string;
  date: string;
  name: LocalizedText;
  issuer: LocalizedText;
}

export interface SocialLink {
  id: 'github' | 'linkedin' | 'blog' | 'resume';
  label: LocalizedText;
  handle: string;
  url: string;
}

export interface ProfileData {
  brand: string;
  name: LocalizedText;
  role: LocalizedText;
  location: LocalizedText;
  availability: {
    active: boolean;
    label: LocalizedText;
  };
  headline: LocalizedText;
  bio: LocalizedText;
  currentFocus: LocalizedText[];
  metrics: HeroMetric[];
  projects: ProjectItem[];
  experiences: ExperienceItem[];
  techCategories: TechCategory[];
  publications: PublicationItem[];
  honors: HonorItem[];
  certifications: CertificationItem[];
  contact: {
    email: string;
    heading: LocalizedText;
    description: LocalizedText;
    links: SocialLink[];
  };
}
