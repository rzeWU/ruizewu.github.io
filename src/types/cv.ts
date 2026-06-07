export interface LogoSpec {
  src: string;
  alt: string;
  backgroundColor?: string;
}

export interface ExperienceMetric {
  label: string;
  value: string;
}

export interface Experience {
  id: string;
  organization: string;
  organizationShort: string;
  role: string;
  startDate: string;
  endDate: string | null;
  location: string;
  logo: LogoSpec;
  summaryKey: string;
  descriptionKeys: string[];
  skills: string[];
  metrics: ExperienceMetric[];
  brandColor: string;
  type: 'work' | 'internship';
  order: number;
}

export interface Education {
  id: string;
  institution: string;
  institutionShort: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number;
  logo: LogoSpec;
  descriptionKey: string;
  noteKey?: string;
  brandColor: string;
  order: number;
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
}

export type SkillCategory =
  | 'technical'
  | 'data-tools'
  | 'professional'
  | 'languages';

export interface Language {
  name: string;
  nameZh: string;
  level: string;
  proficiency: number;
}

export interface Profile {
  name: string;
  nameZh: string;
  titleKey: string;
  location: string;
  email: string;
  phone: string;
  phoneCN?: string;
  linkedin: string;
  github: string;
  avatarUrl?: string;
}

export interface NavItem {
  id: string;
  labelKey: string;
}
