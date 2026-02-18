// ============================================
// Portfolio Data — All content as typed constants
// ============================================

export interface NavItem {
  label: string;
  sectionId: string;
}

export interface Experience {
  period: string;
  startYear: number;
  endYear: number | null;
  company: string;
  role: string;
  description: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'aws' | 'devops' | 'tools';
  years: number;
  level: number; // 0-100
}

export interface AgenticTopic {
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

// Navigation
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', sectionId: 'hero' },
  { label: 'About', sectionId: 'about' },
  { label: 'Experience', sectionId: 'experience' },
  { label: 'Skills', sectionId: 'skills' },
  { label: 'AI & Robotics', sectionId: 'agentic-ai' },
  { label: 'Projects', sectionId: 'projects' },
  { label: 'Contact', sectionId: 'contact' },
];

// Hero
export const HERO_DATA = {
  greeting: 'Hello, I\'m',
  name: 'Mohammed Ahmer Khan',
  title: 'Senior MEAN Stack Developer',
  tagline: '20+ years of IT experience — building modern web applications with Angular, Node.js, and MongoDB.',
  cta: {
    primary: { label: 'Get In Touch', sectionId: 'contact' },
    secondary: { label: 'View My Work', sectionId: 'projects' },
  },
};

// About
export const ABOUT_DATA = {
  summary: `I'm a Senior MEAN Stack Developer based in Karachi, Pakistan, with over 20 years of experience
in the IT industry. My journey began in 1999 as a Network Administrator, and I've since evolved into
a full-stack web developer specializing in Angular, Node.js, Express.js, and MongoDB.`,
  narrative: `Over two decades, I've had the privilege of working across diverse domains — from network
administration at Dancom Pakistan, to IT infrastructure at National Bank of Pakistan, to building modern
web applications at Zaavia and Matech Consulting. Each role has deepened my understanding of technology
and strengthened my problem-solving abilities.`,
  currentFocus: `Currently, I'm expanding my horizons into Agentic AI & Robotics, combining my extensive
development experience with cutting-edge AI technologies. I believe in continuous learning and staying
ahead of the technology curve.`,
  stats: [
    { value: '20+', label: 'Years in IT' },
    { value: '7+', label: 'Years MEAN Stack' },
    { value: '5', label: 'Companies' },
    { value: '∞', label: 'Passion for Learning' },
  ],
};

// Experience
export const EXPERIENCES: Experience[] = [
  {
    period: 'May 2019 — Present',
    startYear: 2019,
    endYear: null,
    company: 'Matech Consulting & Outsourcing',
    role: 'Senior MEAN Stack Developer / Senior Angular Developer',
    description: 'Leading frontend and full-stack development of enterprise web applications using Angular and Node.js.',
    highlights: [
      'Architecting scalable Angular applications with modern best practices',
      'Full-stack development with Node.js, Express.js, and MongoDB',
      'AWS deployment, debugging, and server management',
      'Mentoring junior developers and conducting code reviews',
    ],
  },
  {
    period: 'Feb 2015 — May 2019',
    startYear: 2015,
    endYear: 2019,
    company: 'Zaavia',
    role: 'Senior Web Developer (MEAN Stack)',
    description: 'Transitioned into full-stack MEAN development, building dynamic web applications.',
    highlights: [
      'Built and maintained MEAN stack applications from scratch',
      'Implemented RESTful APIs with Node.js and Express.js',
      'Worked with MongoDB for flexible data modeling',
      'Adopted modern JavaScript (ES6+) practices',
    ],
  },
  {
    period: 'Jul 2010 — Jan 2015',
    startYear: 2010,
    endYear: 2015,
    company: 'National Bank of Pakistan',
    role: 'IT Specialist',
    description: 'Managed IT infrastructure and systems for one of Pakistan\'s largest banks.',
    highlights: [
      'Maintained and secured banking IT infrastructure',
      'Provided technical support across multiple branches',
      'Managed network systems and server environments',
      'Ensured compliance with banking IT standards',
    ],
  },
  {
    period: 'Feb 2007 — Jun 2010',
    startYear: 2007,
    endYear: 2010,
    company: 'Union Exports Textile Mills',
    role: 'Network Administrator',
    description: 'Administered network infrastructure for a textile manufacturing company.',
    highlights: [
      'Designed and managed corporate network architecture',
      'Implemented network security protocols',
      'Maintained server infrastructure and backups',
    ],
  },
  {
    period: 'Mar 1999 — Feb 2007',
    startYear: 1999,
    endYear: 2007,
    company: 'Dancom Pakistan',
    role: 'Asst. Network Administrator',
    description: 'Started IT career managing network systems and infrastructure.',
    highlights: [
      'Network setup, configuration, and troubleshooting',
      'Hardware and software support for the organization',
      'Early exposure to web technologies and IT operations',
    ],
  },
];

// Skills
export const SKILLS: Skill[] = [
  { name: 'Angular', category: 'frontend', years: 7, level: 90 },
  { name: 'JavaScript / ES6+', category: 'frontend', years: 8, level: 92 },
  { name: 'HTML5 & CSS3', category: 'frontend', years: 8, level: 88 },
  { name: 'jQuery', category: 'frontend', years: 6, level: 80 },
  { name: 'Node.js', category: 'backend', years: 7, level: 85 },
  { name: 'Express.js', category: 'backend', years: 7, level: 85 },
  { name: 'MongoDB', category: 'database', years: 7, level: 82 },
  { name: 'MySQL', category: 'database', years: 4, level: 75 },
  { name: 'Elastic Beanstalk', category: 'aws', years: 4, level: 75 },
  { name: 'S3', category: 'aws', years: 4, level: 78 },
  { name: 'API Gateway', category: 'aws', years: 4, level: 76 },
  { name: 'Lambda', category: 'aws', years: 4, level: 76 },
  { name: 'DynamoDB', category: 'aws', years: 4, level: 72 },
  { name: 'Step Functions', category: 'aws', years: 4, level: 70 },
  { name: 'CloudWatch', category: 'aws', years: 4, level: 74 },
  { name: 'SES', category: 'aws', years: 4, level: 72 },
  { name: 'SQS', category: 'aws', years: 4, level: 72 },
  { name: 'Serverless Framework', category: 'devops', years: 4, level: 75 },
  { name: 'Git & GitHub', category: 'tools', years: 7, level: 85 },
];

export const SKILL_CATEGORIES = [
  { key: 'frontend', label: 'Frontend', icon: '◆' },
  { key: 'backend', label: 'Backend', icon: '◆' },
  { key: 'database', label: 'Databases', icon: '◆' },
  { key: 'aws', label: 'AWS Services', icon: '◆' },
  { key: 'devops', label: 'DevOps / Tools', icon: '◆' },
  { key: 'tools', label: 'Tools', icon: '◆' },
];

// Agentic AI
export const AGENTIC_AI_TOPICS: AgenticTopic[] = [
  {
    title: 'What is Agentic AI',
    description: 'Understanding the fundamentals of autonomous AI agents and their capabilities.',
    icon: '🤖',
  },
  {
    title: 'Claude Code',
    description: 'Hands-on experience with Anthropic\'s Claude Code CLI for AI-assisted development.',
    icon: '💻',
  },
  {
    title: 'CLAUDE.md File',
    description: 'Structuring project instructions and context for AI agents using CLAUDE.md.',
    icon: '📄',
  },
  {
    title: 'AGENTS.md File',
    description: 'Defining sub-agent responsibilities and coordination strategies.',
    icon: '📋',
  },
  {
    title: 'Skills, Sub Agents, Plugins, Hooks, MCP',
    description: 'Advanced concepts in building and orchestrating AI agent systems.',
    icon: '🔧',
  },
];

// Social Links
export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ahmerkhan-724953124/', icon: 'linkedin' },
  { label: 'GitHub', url: 'https://github.com/ahmkhan', icon: 'github' },
  { label: 'Email', url: 'mailto:ahmkhan2000@yahoo.com', icon: 'email' },
];

// Contact
export const CONTACT_DATA = {
  email: 'ahmkhan2000@yahoo.com',
  phone: '+92 333 350 2989',
  location: 'Karachi, Pakistan',
};
