export interface PersonalInfo {
  name: string;
  title: string;
  roleTagline: string;
  bioSummary: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  availability: string;
  yearsOfExperience: string;
  resumeUrl: string;
}

export interface ImpactStat {
  id: string;
  metric: string;
  label: string;
  description: string;
  iconName: string;
}

export interface AboutDetails {
  headline: string;
  paragraphs: string[];
  engineeringPrinciples: {
    title: string;
    description: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Distributed Systems' | 'Fullstack Platform' | 'Infrastructure & Cloud' | 'Developer Tooling' | 'AI Integration' | 'Event Management' | 'E-commerce';
  coverImage: string;
  description: string;
  role: string;
  technologies: string[];
  impactMetrics: {
    label: string;
    value: string;
  }[];
  githubUrl?: string;
  liveUrl?: string;
  architectureDetails: string[];
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  keyAchievements: string[];
  techStack: string[];
  companyLogoText?: string;
}

export interface ExpertiseArea {
  id: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  iconName: string;
}

export interface TechCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    icon?: string;
    highlight?: boolean;
    level?: string;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  link?: string;
  badgeText?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  honors: string;
  keyCoursework: string[];
}

export interface LeadershipActivity {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Dao Duc Trung",
  title: "Software Engineering student & Fullstack Developer",
  roleTagline: "Engineering real-world products that people actually use with a focus on backend systems and AI.",
  bioSummary: "I build and deploy production web applications, from user requirements and interface design to APIs, databases, authentication, deployment and long-term maintenance.",
  location: "Ho Chi Minh City, Vietnam",
  email: "trungnho0512@gmail.com",
  githubUrl: "https://github.com/Trungs0002",
  linkedinUrl: "https://linkedin.com",
  twitterUrl: "https://twitter.com",
  availability: "AVAILABLE FOR SOFTWARE ENGINEERING OPPORTUNITIES",
  yearsOfExperience: "2+",
  resumeUrl: "/Dao-Duc-Trung-CV.pdf"
};

export const impactStats: ImpactStat[] = [
  {
    id: "1",
    metric: "04+",
    label: "Years Coding",
    description: "Continuous learning and practical development.",
    iconName: "Terminal"
  },
  {
    id: "2",
    metric: "03",
    label: "Major Projects",
    description: "Production systems built and actively used.",
    iconName: "Code2"
  },
  {
    id: "3",
    metric: "02+",
    label: "Major Partners",
    description: "Successfully delivered solutions for organizations.",
    iconName: "Briefcase"
  },
  {
    id: "4",
    metric: "1500+",
    label: "Total Users",
    description: "People utilizing the platforms I have built.",
    iconName: "Users"
  }
];

export const aboutData: AboutDetails = {
  headline: "I build software with both engineering and product thinking.",
  paragraphs: [
    "I am a Software Engineering student at Van Lang University with a strong focus on Fullstack and Backend Development. I enjoy understanding how an entire product works, from user requirements and interface design to APIs, databases, authentication, deployment and long-term maintenance.",
    "My professional experience includes working as a Backend Developer Intern at Tanca, teaching programming at Digital University and independently building production web platforms."
  ],
  engineeringPrinciples: [
    {
      title: "Fullstack Product Development",
      description: "Delivering end-to-end features bridging the gap between slick user interfaces and robust APIs."
    },
    {
      title: "AI Integration",
      description: "Incorporating AI/LLMs (OpenRouter, Scikit-learn) to automate and personalize real-world workflows."
    },
    {
      title: "Scalable Deployments",
      description: "Managing deployments on Docker, AWS, and modern cloud platforms for resilience."
    }
  ]
};

export const selectedProjects: Project[] = [
  {
    id: "vlu-smart-cv",
    title: "VLU Smart CV",
    subtitle: "AI-Assisted CV Analysis Platform",
    category: "AI Integration",
    coverImage: "/vlucv.png",
    description: "VLU Smart CV analyzes resumes, identifies strengths and weaknesses, generates improvement recommendations and compares a candidate’s CV with a target Job Description.",
    role: "Founder & Fullstack Developer",
    technologies: ["Next.js", "TypeScript", "Flask", "MongoDB", "Redis", "OpenRouter", "Google OAuth"],
    impactMetrics: [
      { label: "Users Served", value: "200+" },
      { label: "CVs Processed", value: "500+" },
      { label: "Award", value: "3rd Prize INNOX 2026" }
    ],
    liveUrl: "https://vlusmartcv.com/",
    architectureDetails: [
      "Processes PDF, Word, and image CVs asynchronously.",
      "Integrates with OpenRouter AI for tailored candidate assessments.",
      "Provides distinct Student, HR, and Admin dashboards."
    ],
    featured: true
  },
  {
    id: "mfc-ftu",
    title: "MFC FTU Platform",
    subtitle: "Event Ticketing & Competition Management",
    category: "Event Management",
    coverImage: "/images/projects/mfcftu-cover.webp",
    description: "An official bilingual platform for FTU Fashion Show 2026, supporting event information, ticketing, competition registration, collaborator recruitment and QR-based participant check-in.",
    role: "Fullstack Developer",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "html5-qrcode"],
    impactMetrics: [
      { label: "Users Served", value: "1,000+" },
      { label: "Tickets Managed", value: "200+" },
      { label: "Ticket Categories", value: "3 Types" }
    ],
    githubUrl: "https://github.com/Trungs0002/mfccine",
    liveUrl: "https://mfcftu.site/",
    architectureDetails: [
      "Built robust QR code generation and real-time check-in system.",
      "Implemented secure duplicate ticket prevention algorithms.",
      "Designed secure User, Staff, and Admin authorization roles."
    ],
    featured: true
  },
  {
    id: "loom-denim",
    title: "Loom Denim",
    subtitle: "E-commerce & AI Recommendation System",
    category: "E-commerce",
    coverImage: "/images/projects/loomdenim-cover.webp",
    description: "A production e-commerce platform for recycled denim bags, combining online shopping, product personalization, payment and an AI-powered recommendation service.",
    role: "Fullstack Developer",
    technologies: ["React", "Node.js", "Express", "Python", "Scikit-learn", "Docker", "VNPay"],
    impactMetrics: [
      { label: "Users Served", value: "100+" },
      { label: "Orders Processed", value: "150+" },
      { label: "AI Recommendations", value: "5 / result" }
    ],
    githubUrl: "https://github.com/Trungs0002/loom",
    liveUrl: "https://loomdenim.site/",
    architectureDetails: [
      "Deployed AI Stylist recommendation engine using k-Nearest Neighbors in Python.",
      "Integrated secure VNPay transaction workflows alongside Cash on Delivery.",
      "Containerized deployment using Docker for scalable inventory management."
    ],
    featured: true
  }
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Tanca",
    role: "Backend Developer Intern",
    period: "March 2025 — September 2025",
    location: "Vietnam",
    type: "Internship",
    description: "Contributed to the development and maintenance of backend services for a human resource management platform.",
    keyAchievements: [
      "Developed and maintained robust RESTful APIs for HR workflows.",
      "Assisted in backend module development using Golang and PHP.",
      "Created comprehensive API documentation using Swagger and Postman."
    ],
    techStack: ["Golang", "PHP", "REST APIs", "Swagger", "Postman"],
    companyLogoText: "TANCA"
  },
  {
    id: "exp-2",
    company: "Digital University",
    role: "Computer Science Instructor",
    period: "September 2025 — June 2026",
    location: "Vietnam",
    type: "Part-time",
    description: "Taught programming at beginner, intermediate and advanced levels through practical exercises and individual projects.",
    keyAchievements: [
      "Instructed Python, Pygame, SQL, and Web Development (HTML/CSS/JS/React).",
      "Designed project-based lesson plans accelerating student comprehension.",
      "Mentored students in architecting their own independent projects."
    ],
    techStack: ["Python", "SQL", "React", "JavaScript", "HTML/CSS"],
    companyLogoText: "DIGIUNI"
  }
];

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: "1",
    title: "Backend Engineering",
    tagline: "Building scalable APIs and reliable services",
    description: "Developing maintainable RESTful APIs, optimizing database operations, and ensuring strict authentication flows.",
    capabilities: [
      "Node.js, Express, Flask & Golang",
      "RESTful API Design & OpenAPI (Swagger)",
      "Authentication via JWT & OAuth",
      "Database schema design (MongoDB, SQL)"
    ],
    iconName: "Server"
  },
  {
    id: "2",
    title: "Fullstack Product Development",
    tagline: "Bridging complex logic with slick UI",
    description: "Owning the entire application lifecycle from responsive React frontend interfaces to containerized cloud deployments.",
    capabilities: [
      "React & Next.js Architecture",
      "Tailwind CSS & Component Libraries",
      "State Management & Data Fetching",
      "End-to-End Type Safety (TypeScript)"
    ],
    iconName: "Layers"
  },
  {
    id: "3",
    title: "AI Integration",
    tagline: "Smart capabilities for real-world products",
    description: "Implementing Large Language Models and Machine Learning algorithms to automate workflows and enhance user experiences.",
    capabilities: [
      "LLM Integration (OpenRouter)",
      "Machine Learning algorithms (Scikit-learn)",
      "Automated document processing (PyMuPDF)",
      "Recommendation Systems (k-NN)"
    ],
    iconName: "Cpu"
  }
];

export const techStackCategories: TechCategory[] = [
  {
    category: "Languages",
    description: "Primary languages used for backend engines, tools, and fullstack apps.",
    skills: [
      { name: "JavaScript", highlight: true, level: "Production Standard" },
      { name: "TypeScript", highlight: true, level: "Production Standard" },
      { name: "Python", highlight: true, level: "Proficient" },
      { name: "Golang", highlight: false, level: "Familiar" },
      { name: "PHP", highlight: false, level: "Familiar" }
    ]
  },
  {
    category: "Frontend",
    description: "Client-side platforms, rendering engines, and design systems.",
    skills: [
      { name: "React", highlight: true, level: "Production Standard" },
      { name: "Next.js", highlight: true, level: "Advanced" },
      { name: "Tailwind CSS", highlight: true, level: "Production Standard" }
    ]
  },
  {
    category: "Backend & Databases",
    description: "Frameworks, databases, and caching infrastructure.",
    skills: [
      { name: "Node.js", highlight: true, level: "Production Standard" },
      { name: "Express.js", highlight: true, level: "Production Standard" },
      { name: "Flask", highlight: true, level: "Proficient" },
      { name: "MongoDB", highlight: true, level: "Production Standard" },
      { name: "Redis", highlight: false, level: "Proficient" }
    ]
  },
  {
    category: "AI & Tools",
    description: "Machine Learning integration, DevOps, and Development tools.",
    skills: [
      { name: "OpenRouter", highlight: true, level: "Advanced" },
      { name: "Scikit-learn", highlight: false, level: "Proficient" },
      { name: "Docker", highlight: true, level: "Proficient" },
      { name: "AWS", highlight: false, level: "Familiar" },
      { name: "Git", highlight: true, level: "Production Standard" },
      { name: "Postman/Swagger", highlight: true, level: "Production Standard" }
    ]
  }
];

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "Third Prize",
    issuer: "INNOX",
    year: "2026",
    description: "Awarded for the VLU Smart CV project demonstrating practical application of AI in recruitment.",
    badgeText: "Award"
  },
  {
    id: "ach-2",
    title: "Top 200",
    issuer: "International Collegiate Programming Contest",
    year: "2024",
    description: "Recognized among top algorithmic problem solvers in the ICPC regional round.",
    badgeText: "Competition"
  },
  {
    id: "ach-3",
    title: "First Prize",
    issuer: "City-level Science and Engineering Competition",
    year: "2020",
    description: "Honored for excellence in scientific research and technical engineering.",
    badgeText: "Award"
  }
];

export const educations: Education[] = [
  {
    id: "edu-1",
    institution: "Van Lang University",
    degree: "Bachelor’s Program in Software Engineering",
    period: "2023 — 2026",
    honors: "GPA: 3.4 / 4.0",
    keyCoursework: [
      "Object-Oriented Programming",
      "Database Systems",
      "Software Requirements",
      "Web Application Development"
    ]
  },
  {
    id: "edu-2",
    institution: "Vinh University High School for the Gifted",
    degree: "Specialized Informatics Program",
    period: "2020 — 2023",
    honors: "Specialized in Computer Science basics",
    keyCoursework: []
  }
];

export const leadershipActivities: LeadershipActivity[] = [
  {
    id: "lead-1",
    title: "Vice Chairman",
    organization: "KC STEME Club",
    period: "2021 — 2023",
    description: "Co-led technical initiatives and organized engineering workshops for club members.",
    highlights: [
      "Mentored junior members in programming fundamentals.",
      "Facilitated technology and science events to promote STEM education."
    ]
  }
];
