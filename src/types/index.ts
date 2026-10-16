/* ── Types for portfolio data ── */

export interface ProfileData {
  fullName: string;
  title: string;
  headline: string;
  headlineTechnologies: string[];
  phone: string;
  email: string;
  location: string;
  github: string;
  linkedin: string | null;
  summary: string;
  resumePath: string;
  resumeFilename: string;
  avatarUrl: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  type: 'onsite' | 'remote' | 'hybrid';
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  technologies: string[];
  category: 'fullstack' | 'frontend' | 'backend' | 'professional';
  github: string | null;
  liveDemo: string | null;
  isProfessional: boolean;
  featured: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
