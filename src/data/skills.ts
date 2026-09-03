import type { Skill, Language } from '../types/cv';

export const skills: Skill[] = [
  // Technical
  { id: 'python', name: 'Python', category: 'technical' },
  { id: 'sql', name: 'SQL (PostgreSQL, MySQL)', category: 'technical' },

  // Data & Tools
  { id: 'tableau', name: 'Tableau', category: 'data-tools' },
  { id: 'docker', name: 'Docker', category: 'data-tools' },
  { id: 'cloud', name: 'Alibaba Cloud', category: 'data-tools' },
  { id: 'github', name: 'GitHub', category: 'data-tools' },
  { id: 'jupyter', name: 'Jupyter / Colab', category: 'data-tools' },

  // Professional
  { id: 'data-analysis', name: 'Data Analysis', category: 'professional' },
  { id: 'workflow-automation', name: 'Workflow Automation', category: 'professional' },
  { id: 'reporting', name: 'Report Writing & Visualisation', category: 'professional' },
  { id: 'content-operations', name: 'Content Operations', category: 'professional' },
  { id: 'community-engagement', name: 'Community Engagement & Moderation', category: 'professional' },
  { id: 'user-segmentation', name: 'User Segmentation & Targeting', category: 'professional' },
  { id: 'student-consultation', name: 'Student Consultation & Advising', category: 'professional' },
  { id: 'event-coordination', name: 'Event & Course Coordination', category: 'professional' },
  { id: 'cross-cultural', name: 'Cross-cultural Communication', category: 'professional' },
  { id: 'stakeholder', name: 'Stakeholder & Faculty Liaison', category: 'professional' },
];

export const languages: Language[] = [
  { name: 'English', nameZh: '英语', level: 'Full Professional', proficiency: 90 },
  { name: 'Mandarin', nameZh: '普通话', level: 'Native', proficiency: 100 },
  { name: 'Cantonese', nameZh: '粤语', level: 'Basic', proficiency: 35 },
];
