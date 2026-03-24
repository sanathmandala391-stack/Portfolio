export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'database';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone?: string;
  location: string;
  profileImage: string;
  resumeUrl: string;
  skills: Skill[];
  projects: Project[];
  socialLinks: SocialLink[];
}
