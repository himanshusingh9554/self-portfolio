import type { ProfileData, Experience, Education, SkillCategory, Project } from '@/types';

/* ── Profile ── */
export const profile: ProfileData = {
  fullName: 'Himanshu Singh',
  title: 'Full Stack Developer',
  headline: 'Building Thoughtful Web Experiences & Reliable Software.',
  headlineTechnologies: ['NestJS', 'Next.js', 'TypeScript', 'Node.js', 'React'],
  phone: '+91 9554241582',
  email: 'himanshusingh829936@gmail.com',
  location: 'Ayodhya, Uttar Pradesh, India',
  github: 'https://github.com/himanshusingh9554',
  linkedin: null, // Set actual LinkedIn URL when available
  resumePath: '/profile/Himanshu-Singh-Resume.pdf',
  resumeFilename: 'Himanshu-Singh-Resume.pdf',
  avatarUrl: '/profile/photo.jpg',
  summary:
    'Full Stack Developer with 1+ year of professional experience building web applications with the MERN stack and NestJS/Next.js. Experienced in designing REST APIs, optimizing PostgreSQL and MongoDB schemas, and delivering end-to-end features in Agile teams. Most recently worked on a dental SaaS platform involving EMR integration, appointment management, and payments.',
};

/* ── Experience ── */
export const experiences: Experience[] = [
  {
    id: 'media-nv',
    role: 'Associate Full Stack Engineer',
    company: 'Media Nv',
    location: 'Ahmedabad, Gujarat',
    type: 'onsite',
    startDate: 'December 2025',
    endDate: 'July 2026',
    responsibilities: [
      'Developed full-stack applications using TypeScript, NestJS, and Next.js.',
      'Designed REST APIs and backend systems using NestJS guards, interceptors, and custom decorators.',
      'Designed and optimized PostgreSQL schemas, indexes, and relational models.',
      'Worked on a dental SaaS platform with EMR connectivity, appointment scheduling, automated reminders, payment processing, CWP, and digital forms.',
      'Participated in Agile/Scrum sprints, code reviews, sprint planning, and technical design discussions.',
    ],
  },
  {
    id: 'technoglobe',
    role: 'Freelance Full Stack Instructor',
    company: 'Technoglobe',
    location: 'Lucknow, Uttar Pradesh — Remote',
    type: 'remote',
    startDate: 'January 2024',
    endDate: 'November 2024',
    responsibilities: [
      'Mentored 20+ students through the full-stack development lifecycle.',
      'Taught Node.js, Express.js, JWT authentication, CRUD APIs, validation, MySQL, and MongoDB.',
      'Guided students in deploying applications.',
      'Provided code reviews and architecture feedback focused on clean code, scalability, and performance.',
    ],
  },
  {
    id: 'chegg',
    role: 'Freelance Subject Matter Expert — Computer Science',
    company: 'Chegg',
    location: 'Remote',
    type: 'remote',
    startDate: 'July 2022',
    endDate: 'November 2022',
    responsibilities: [
      'Delivered solutions covering Data Structures and Algorithms, OOP, and web development.',
      'Achieved 90%+ client satisfaction.',
    ],
  },
];

/* ── Education ── */
export const education: Education = {
  degree: 'Bachelor of Technology',
  field: 'Electronics & Instrumentation Engineering',
  institution: 'KIIT University',
  location: 'Bhubaneswar, Odisha',
};

/* ── Skills ── */
export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express.js', 'NestJS', 'RESTful APIs', 'Socket.IO', 'JWT', 'bcrypt', 'FastAPI'],
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Vector Databases'],
  },
  {
    name: 'AI & LLM',
    skills: ['Google Gemini API', 'Retrieval-Augmented Generation (RAG)'],
  },
  {
    name: 'Cloud & DevOps',
    skills: ['AWS EC2', 'AWS RDS', 'AWS S3', 'Netlify', 'Render', 'Git', 'GitHub'],
  },
  {
    name: 'Computer Science',
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'System Design'],
  },
  {
    name: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Java', 'Python'],
  },
];

/* ── Projects ── */
export const projects: Project[] = [
  {
    slug: 'community-points-wallet',
    title: 'Community Points Wallet',
    tagline: 'A full-stack community points wallet with financial-grade reliability patterns.',
    description:
      'A full-stack application that implements a community points wallet with a focus on data integrity and concurrency safety. The system uses a double-entry, append-only ledger to ensure every transaction is traceable and auditable. Idempotency keys prevent duplicate processing of repeated requests, and row-level locking protects concurrent transfers from race conditions. The application includes role-based access control, group wallets with withdrawal approval workflows, and Server-Sent Events for real-time balance updates.',
    highlights: [
      'Double-entry append-only ledger ensuring full transaction auditability',
      'Idempotency handling for repeated requests to prevent duplicate processing',
      'Row-level locking to protect concurrent transfers from race conditions',
      'Role-based access control for different user permission levels',
      'Group wallets with withdrawal approval workflows',
      'Server-Sent Events for real-time balance updates',
      'Automated unit, integration, and concurrency tests',
    ],
    technologies: ['React 18', 'Vite', 'Zustand', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    category: 'fullstack',
    github: 'https://github.com/himanshusingh9554/community-plus-wallet',
    liveDemo: 'https://community-plus-wallet.vercel.app/',
    isProfessional: false,
    featured: true,
  },
  {
    slug: 'skillswap',
    title: 'SkillSwap — Peer-to-Peer Skill Exchange',
    tagline: 'An AI-powered platform for peer-to-peer skill exchange with real-time collaboration.',
    description:
      'A full-stack platform enabling users to list skills, discover peers, and exchange knowledge through a credit-based system. The application integrates Google Gemini and RAG for AI-powered skill matching with scored recommendations, skill description rewriting, learning roadmap generation, and a coaching chatbot. Real-time chat and notifications are powered by Socket.IO, and the platform includes JWT authentication and credit transaction workflows.',
    highlights: [
      'Credit-based skill exchange and listing system',
      'AI-powered skill matching with scored recommendations using Google Gemini and RAG',
      'Skill description rewriting and learning roadmap generation',
      'AI coaching chatbot for learning guidance',
      'Real-time chat and notifications via Socket.IO',
      'JWT authentication and secure credit transaction workflows',
    ],
    technologies: ['Node.js', 'Express.js', 'React', 'Vite', 'MongoDB Atlas', 'Socket.IO', 'Google Gemini', 'RAG', 'JWT', 'Tailwind CSS'],
    category: 'fullstack',
    github: 'https://github.com/himanshusingh9554/SkillSwap',
    liveDemo: 'https://skillswapping11.netlify.app/',
    isProfessional: false,
    featured: true,
  },
  {
    slug: 'dental-management-platform',
    title: 'Dental Management Platform',
    tagline: 'Production SaaS platform for dental practice management — built at Media Nv.',
    description:
      'A production dental SaaS platform developed during my role at Media Nv. The platform handles EMR integration, appointment management, payment processing, patient reminders, and configurable digital forms. Built with a modular NestJS architecture leveraging guards, interceptors, and custom decorators for clean, maintainable code. This was professional work and the source code is not publicly available.',
    highlights: [
      'EMR integration for electronic medical records',
      'Appointment scheduling and management system',
      'Payment processing integration',
      'Automated patient reminders',
      'Configurable digital forms (CWP)',
      'Modular NestJS architecture with guards, interceptors, and decorators',
    ],
    technologies: ['NestJS', 'PostgreSQL', 'Next.js', 'TypeScript'],
    category: 'professional',
    github: null,
    liveDemo: null,
    isProfessional: true,
    featured: true,
  },
];

/* ── Technology icon mapping ── */
export const technologyColors: Record<string, string> = {
  'React': '#61DAFB',
  'React 18': '#61DAFB',
  'React.js': '#61DAFB',
  'Next.js': '#ffffff',
  'TypeScript': '#3178C6',
  'JavaScript': '#F7DF1E',
  'JavaScript ES6+': '#F7DF1E',
  'Node.js': '#339933',
  'Express': '#ffffff',
  'Express.js': '#ffffff',
  'NestJS': '#E0234E',
  'PostgreSQL': '#4169E1',
  'MongoDB': '#47A248',
  'MongoDB Atlas': '#47A248',
  'Tailwind CSS': '#06B6D4',
  'Vite': '#646CFF',
  'Prisma': '#2D3748',
  'Zustand': '#443E38',
  'Socket.IO': '#010101',
  'JWT': '#000000',
  'Google Gemini': '#4285F4',
  'RAG': '#8B5CF6',
  'FastAPI': '#009688',
  'AWS EC2': '#FF9900',
  'AWS RDS': '#FF9900',
  'AWS S3': '#FF9900',
  'bcrypt': '#004A77',
};
