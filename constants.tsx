import React from 'react';
import { 
  GitHubIcon, 
  TwitterIcon, 
  LinkedInIcon, 
  MailIcon,
  ReactLogo,
  JavaScriptLogo,
  PythonLogo,
  GitLogo,
  VsCodeLogo,
  MongoDBLogo,
  PostgreSQLLogo,
  HTMLLogo,
  CSSLogo,
  TailwindLogo,
} from './components/Icons';
import { SocialLink, ExperienceItem, ProjectItem, TechItem, EducationItem } from './types';

// Create missing icon components as text fallbacks
const JavaIcon = ({ className }: { className?: string }) => 
  <span className={`font-bold ${className || ''}`}>J</span>;

const SpringIcon = ({ className }: { className?: string }) => 
  <span className={`font-bold ${className || ''}`}>S</span>;

const SpringBootIcon = ({ className }: { className?: string }) => 
  <span className={`font-bold ${className || ''}`}>SB</span>;

const ShieldIcon = ({ className }: { className?: string }) => 
  <span className={`font-bold ${className || ''}`}>🔒</span>;

const DatabaseIcon = ({ className }: { className?: string }) => 
  <span className={`font-bold ${className || ''}`}>DB</span>;

const HibernateIcon = ({ className }: { className?: string }) => 
  <span className={`font-bold ${className || ''}`}>H</span>;

const ApiIcon = ({ className }: { className?: string }) => 
  <span className={`font-bold ${className || ''}`}>API</span>;

const ReduxIcon = ({ className }: { className?: string }) => 
  <span className={`font-bold ${className || ''}`}>R</span>;

const BootstrapIcon = ({ className }: { className?: string }) => 
  <span className={`font-bold ${className || ''}`}>B</span>;

const MySqlIcon = ({ className }: { className?: string }) => 
  <span className={`font-bold ${className || ''}`}>SQL</span>;

const RedisIcon = ({ className }: { className?: string }) => 
  <span className={`font-bold ${className || ''}`}>RD</span>;

const PostmanIcon = ({ className }: { className?: string }) => 
  <span className={`font-bold ${className || ''}`}>PM</span>;

const MavenIcon = ({ className }: { className?: string }) => 
  <span className={`font-bold ${className || ''}`}>M</span>;

const SwaggerIcon = ({ className }: { className?: string }) => 
  <span className={`font-bold ${className || ''}`}>SW</span>;

const IntelliJIcon = ({ className }: { className?: string }) => 
  <span className={`font-bold ${className || ''}`}>IJ</span>;

const JUnitIcon = ({ className }: { className?: string }) => 
  <span className={`font-bold ${className || ''}`}>JU</span>;

const MockitoIcon = ({ className }: { className?: string }) => 
  <span className={`font-bold ${className || ''}`}>MT</span>;

const CCPPIcon = ({ className }: { className?: string }) => 
  <span className={`font-bold ${className || ''}`}>C++</span>;

export const BIO = {
  name: "Harsh Patil",
  firstName: "Harsh",
  lastName: "Patil",
  title: "Full Stack Java Developer",
  headline: "meet your\nnew favourite developer",
  description: "I craft robust backend systems using Java and Spring Boot. With a focus on clean architecture and reliability, I aim to build digital foundations that feel as timeless as the tools that shaped software's early days.",
  avatar: "/image.png"
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Email', url: 'mailto:itsharshhh6@gmail.com', icon: MailIcon },
  { name: 'LinkedIn', url: 'https://in.linkedin.com/in/harshpatil28', icon: LinkedInIcon },
  { name: 'Twitter', url: 'https://x.com/itsharshhh6', icon: TwitterIcon },
  { name: 'GitHub', url: 'https://github.com/CodeHarsh108', icon: GitHubIcon },
];

export const TECH_STACK: TechItem[] = [
  { name: 'Java', icon: <JavaIcon className="w-4 h-4" /> },
  { name: 'Spring Boot', icon: <SpringBootIcon className="w-4 h-4" /> },
  { name: 'Spring Framework', icon: <SpringIcon className="w-4 h-4" /> },
  { name: 'React', icon: <ReactLogo className="w-4 h-4" /> },
  { name: 'PostgreSQL', icon: <PostgreSQLLogo className="w-4 h-4" /> },
  { name: 'Hibernate', icon: <HibernateIcon className="w-4 h-4" /> },
  { name: 'REST APIs', icon: <ApiIcon className="w-4 h-4" /> },
  { name: 'Git', icon: <GitLogo className="w-4 h-4" /> },
];

export const FULL_TECH_STACK: TechItem[] = [
  // Programming Languages (Core)
  { name: 'Java', icon: <JavaIcon className="w-6 h-6" />, category: 'Languages' },
  
  // Backend Framework (Your Expertise)
  { name: 'Spring Boot', icon: <SpringBootIcon className="w-6 h-6" />, category: 'Backend' },
  { name: 'Spring Framework', icon: <SpringIcon className="w-6 h-6" />, category: 'Backend' },
  { name: 'Spring Security', icon: <ShieldIcon className="w-6 h-6" />, category: 'Backend' },
  { name: 'Spring Data JPA', icon: <DatabaseIcon className="w-6 h-6" />, category: 'Backend' },
  { name: 'Hibernate', icon: <HibernateIcon className="w-6 h-6" />, category: 'Backend' },
  { name: 'RESTful APIs', icon: <ApiIcon className="w-6 h-6" />, category: 'Backend' },
  
  // Frontend
  { name: 'React', icon: <ReactLogo className="w-6 h-6" />, category: 'Frontend' },
  { name: 'Redux', icon: <ReduxIcon className="w-6 h-6" />, category: 'Frontend' },
  { name: 'HTML5', icon: <HTMLLogo className="w-6 h-6" />, category: 'Frontend' },
  { name: 'CSS3', icon: <CSSLogo className="w-6 h-6" />, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: <TailwindLogo className="w-6 h-6" />, category: 'Frontend' },
  { name: 'Bootstrap', icon: <BootstrapIcon className="w-6 h-6" />, category: 'Frontend' },
  
  // Databases
  { name: 'PostgreSQL', icon: <PostgreSQLLogo className="w-6 h-6" />, category: 'Database' },
  { name: 'MySQL', icon: <MySqlIcon className="w-6 h-6" />, category: 'Database' },
  { name: 'MongoDB', icon: <MongoDBLogo className="w-6 h-6" />, category: 'Database' },
  { name: 'Redis', icon: <RedisIcon className="w-6 h-6" />, category: 'Database' },
  
  // Developer Tools
  { name: 'Git & GitHub', icon: <GitLogo className="w-6 h-6" />, category: 'Tools' },
  { name: 'Postman', icon: <PostmanIcon className="w-6 h-6" />, category: 'Tools' },
  { name: 'Maven', icon: <MavenIcon className="w-6 h-6" />, category: 'Tools' },
  { name: 'Swagger', icon: <SwaggerIcon className="w-6 h-6" />, category: 'Tools' },
  { name: 'IntelliJ IDEA', icon: <IntelliJIcon className="w-6 h-6" />, category: 'Tools' },
  { name: 'VS Code', icon: <VsCodeLogo className="w-6 h-6" />, category: 'Tools' },
  
  // Testing
  { name: 'JUnit', icon: <JUnitIcon className="w-6 h-6" />, category: 'Testing' },
  { name: 'Mockito', icon: <MockitoIcon className="w-6 h-6" />, category: 'Testing' },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "VaultOfCodes",
    role: "Java Developer Intern",
    period: "June 2024 - July 2024", // Update with actual dates
    description: "Developed 3 Java-based projects collaborating with a team of 4, enhancing practical software development skills and backend logic.",
    tech: ["Java", "Spring Boot", "Git"],
    current: false,
  },
  
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Acropolis Institute of Technology and Research",
    degree: "B.Tech in Computer Science and Engineering",
    period: "July 2023 – Present",
    location: "Indore, India",
    grade: "CGPA: 8.10",
    additionalInfo: undefined,
    coursework: false
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Wealth Map",
    description: "Real-time property search platform utilizing Spring Boot, PostgreSQL/PostGIS, and Leaflet, enabling bounding box and radius searches with 5000+ weekly active users.",
    tags: ["Spring Boot", "PostgreSQL", "PostGIS", "Google Maps API"],
    github: "https://github.com/CodeHarsh108/Wealth-Map",
    preview: "/projects/wealthmap.jpeg",
    subtitle: undefined
  },
  {
    title: "Journal App",
    description: "Secure journal application with Spring Boot, MongoDB, Redis, and JWT authentication, featuring real-time caching and weather API integration.",
    tags: ["Spring Boot", "MongoDB", "Redis", "JWT", "Swagger"],
    github: "https://github.com/CodeHarsh108/Journal-App",
    preview: "/projects/ja.png",
    subtitle: undefined
  },
  {
    title: "AyurSamhita - A HealthCare Platform",
    description: "Arogya: a digital bridge uniting Ayurveda and modern medicine to deliver accessible, culturally rooted healthcare to underserved India.",
    tags: ["SpringBoot", "React", "MongoDB"],
    github: "hhttps://github.com/CodeHarsh108/Minor-Sem5",
    preview: "/projects/image.png",
    subtitle: undefined
  },
 
];

export const NOW_BUILDING = {
  title: "QuickConnect",
  description: "A Real Time Chat Application using React and Spring Boot.",
};

export const NOW_PLAYING = {
  song: "Lo-Fi Beats",
  artist: "Spotify",
  cover: "https://picsum.photos/id/10/200/200", 
  link: "#"
};