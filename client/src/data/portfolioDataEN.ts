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
  category: string;
  coverImage: string;
  thumbnailImage?: string;
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
  gallery?: string[];
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
  companyUrl?: string;
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
  title: "Software Engineering Student & [Fullstack Developer]",
  roleTagline: "I build practical, user-centric products with a focus on backend systems and Artificial Intelligence.",
  bioSummary: "I specialize in building and deploying real-world web applications, from user requirements and UI design to APIs, databases, authorization, deployment, and long-term maintenance.",
  location: "Ho Chi Minh City, Vietnam",
  email: "trungnho0512@gmail.com",
  githubUrl: "https://github.com/Trungs0002",
  linkedinUrl: "https://www.linkedin.com/in/trungs0001/",
  twitterUrl: "https://twitter.com",
  availability: "AVAILABLE FOR CAREER OPPORTUNITIES",
  yearsOfExperience: "2+",
  resumeUrl: "/Dao-Duc-Trung-CV.pdf"
};

export const impactStats: ImpactStat[] = [
  {
    id: "1",
    metric: "04+",
    label: "Years Coding",
    description: "Continuous learning and practical application development.",
    iconName: "Terminal"
  },
  {
    id: "2",
    metric: "03",
    label: "Major Projects",
    description: "Production systems built and actively running.",
    iconName: "Code2"
  },
  {
    id: "3",
    metric: "02+",
    label: "Major Partners",
    description: "Successfully provided software solutions for large organizations.",
    iconName: "Briefcase"
  },
  {
    id: "4",
    metric: "1500+",
    label: "Total Users",
    description: "Using platforms built by me.",
    iconName: "Users"
  }
];

export const aboutData: AboutDetails = {
  headline: "I build software with an [engineering mindset and a creative eye].",
  paragraphs: [
    "I am a Software Engineering student at Van Lang University oriented towards Fullstack Development. I enjoy exploring the entire lifecycle of a product, from user requirements and UI design to APIs, databases, authentication, deployment, and long-term system maintenance.",
    "My professional experience includes working as a Backend Developer Intern at Tanca, teaching programming at DigitalUni, and directly deploying practical software solutions for major partners and university organizations."
  ],
  engineeringPrinciples: [
    {
      title: "Fullstack Product Development",
      description: "Developing comprehensive products from user interfaces to APIs and databases."
    },
    {
      title: "Artificial Intelligence Integration",
      description: "Integrating AI/LLMs (OpenRouter, Scikit-learn) to automate and personalize real-world processes."
    },
    {
      title: "Scalable Deployments",
      description: "Managing deployments on Docker, AWS, and modern cloud platforms to ensure stability."
    }
  ]
};

export const selectedProjects: Project[] = [
  {
    id: "vlu-smart-cv",
    title: "AI-Powered CV Analysis & Improvement System",
    subtitle: "Vlusmartcv.com",
    category: "AI Integration",
    coverImage: "/vlucv.png",
    thumbnailImage: "/demogif.gif",
    description: "Developed and operated an AI system for analyzing and evaluating CVs, proposing improvement directions, and allowing comparisons between current CVs and desired Job Descriptions.",
    role: "Founder / Fullstack Developer",
    technologies: ["Next.js", "TypeScript", "Flask", "MongoDB", "Redis", "OpenRouter", "Google OAuth"],
    impactMetrics: [
      { label: "Users", value: "200+" },
      { label: "Processed CVs", value: "500+" },
      { label: "INNOX 2026", value: "Top 3" }
    ],
    liveUrl: "https://vlusmartcv.com/",
    gallery: ["/demogif.gif", "/demogif2.gif", "/vlucv.png", "/vlucvstat.png"],
    architectureDetails: [
      "The system has served 200+ users and processed over 500+ CVs.",
      "Achieved 3rd place in 'INNOX 2026: Beyond Limits – Touch the Future'.",
      "Participated in university scientific research.",
      "Designed the entire UX/UI of the system.",
      "Built a pipeline to process PDF/Word CVs and images using PyMuPDF, Pillow, and multi-modal AI models.",
      "Architected a decoupled frontend-backend system communicating via RESTful APIs and asynchronous analysis tasks.",
      "Developed role-based access control, integrated Google OAuth, Supabase, and JWT.",
      "Implemented API rate limiting, monitoring, and retry mechanisms to maintain system stability."
    ],
    featured: true
  },
  {
    id: "mfc-ftu",
    title: "Ticketing & Event Organization System",
    subtitle: "Mfcftu.site",
    category: "Event Management",
    coverImage: "/mfc1.png",
    thumbnailImage: "/demogif3.gif",
    description: "Developed a platform for selling tickets, offline check-in, managing the 'Nhat' contest, recruiting collaborators, and publishing official information for FTU Fashion Show 2026.",
    role: "Fullstack Developer",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "html5-qrcode"],
    impactMetrics: [
      { label: "Users", value: "1000+" },
      { label: "Tickets Sold", value: "200+" },
      { label: "Languages", value: "EN/VI" }
    ],
    githubUrl: "https://github.com/Trungs0002/mfccine",
    liveUrl: "https://mfcftu.site/",
    gallery: ["/demogif3.gif", "/demogif4.gif", "/mfc1.png", "/mfc2.png", "/mfcstat.png"],
    architectureDetails: [
      "Developed a platform for ticketing, offline check-in, and managing official contests and attendees for FTU Fashion Show 2026.",
      "Built a bilingual (English-Vietnamese) event system supporting updates for schedules, locations, images, and program info.",
      "Developed a ticket classification system (Standard, Premium, VIP) managing prices, quantities, and status for each class.",
      "Developed a contest management and collaborator recruitment system.",
      "Automated unique QR code generation for each ticket and built a scanning and verification feature to prevent duplicate usage.",
      "Developed a User-Staff-Admin login and authorization system, while optimizing responsive design for desktop and mobile."
    ],
    featured: true
  },
  {
    id: "loom-denim",
    title: "E-commerce System",
    subtitle: "Loomdenim.site",
    category: "E-commerce",
    coverImage: "/loomdenim.png",
    thumbnailImage: "/demogif6.gif",
    description: "Developed and operated a real-world e-commerce platform with an AI-assisted storefront, integrated online payments, and modern, intuitive management features.",
    role: "Fullstack Developer",
    technologies: ["React", "Node.js", "Express", "Python", "Scikit-learn", "Docker", "VNPay"],
    impactMetrics: [
      { label: "Users", value: "100+" },
      { label: "Orders", value: "150+" },
      { label: "Integration", value: "AI" }
    ],
    githubUrl: "https://github.com/Trungs0002/loom",
    liveUrl: "https://loomdenim.site/",
    gallery: ["/demogif5.gif", "/demogif6.gif", "/demogif7.gif", "/loomdenim.png"],
    architectureDetails: [
      "Developed and operated a real-world e-commerce platform serving 100+ users and processing 150+ orders.",
      "Built a complete purchasing pipeline: product catalog, cart, checkout, payments, order tracking, and inventory management.",
      "Developed an AI Stylist using the kNN algorithm to recommend products suited to user preferences and budgets.",
      "Integrated VNPay, COD options, product personalization, and a post-purchase review system for customers.",
      "Constructed an admin dashboard and deployed the system on Vercel, Render, MongoDB Atlas, and Cloudinary."
    ],
    featured: true
  }
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Tanca.io",
    role: "Backend Developer Intern",
    period: "March 2025 — September 2025",
    location: "Ho Chi Minh City",
    type: "Internship",
    description: "Contributed to the development and maintenance of backend services for a human resource management platform.",
    keyAchievements: [
      "Participated in developing and maintaining RESTful APIs for the HR management system.",
      "Assisted in backend module development using Golang and PHP.",
      "Fixed bugs and improved system performance, ensuring stable API operations.",
      "Collaborated with Frontend and QA teams to integrate and test features.",
      "Wrote API documentation (Swagger/Postman) to help the frontend team integrate faster."
    ],
    techStack: ["Golang", "PHP", "REST APIs", "Swagger", "Postman"],
    companyLogoText: "TANCA",
    companyUrl: "https://tanca.io/"
  },
  {
    id: "exp-2",
    company: "Digiunivietnam.com",
    role: "Programming Instructor",
    period: "September 2025 — June 2026",
    location: "Ho Chi Minh City",
    type: "Part-time",
    description: "Taught programming from basic to advanced levels through practical exercises and individual projects.",
    keyAchievements: [
      "Taught Scratch and CodeCombat for beginners, building foundational programming logic.",
      "Taught Python, Pygame, SQL for intermediate students, developing simple game projects.",
      "Taught HTML, CSS, JavaScript, React for advanced students, building basic websites.",
      "Designed lesson plans and practical exercises suitable for students.",
      "Monitored progress and supported students in completing their personal projects."
    ],
    techStack: ["Scratch", "CodeCombat", "Python", "SQL", "React", "JavaScript", "HTML/CSS", "Pygame"],
    companyLogoText: "DIGIUNI",
    companyUrl: "https://digiunivietnam.com/"
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
      "RESTful API & OpenAPI (Swagger) Design",
      "Authentication via JWT & OAuth",
      "Database schema design (MongoDB, SQL)",
      "Big Data processing",
      "System performance optimization",
      "System security assurance"
    ],
    iconName: "Server"
  },
  {
    id: "2",
    title: "Fullstack Development",
    tagline: "Connecting complex logic with slick UI",
    description: "Mastering the entire application lifecycle from responsive React frontend interfaces to containerized cloud deployments.",
    capabilities: [
      "React & Next.js Architecture",
      "Tailwind CSS & Component Libraries",
      "State Management & Data Fetching",
      "End-to-End Type Safety (TypeScript)",
      "Responsive design optimization",
      "Online payment integrations",
      "User experience optimization"
    ],
    iconName: "Layers"
  },
  {
    id: "3",
    title: "AI Integration",
    tagline: "Smart features for real-world products",
    description: "Deploying Large Language Models (LLMs) and Machine Learning algorithms to automate processes and enhance user experiences.",
    capabilities: [
      "LLM Integration (OpenRouter)",
      "Machine Learning algorithms (Scikit-learn)",
      "PDF, Word, Excel document processing and analysis",
      "Product recommendation systems",
      "AI deployment in practical products",
      "Process automation",
      "Working with large datasets",
      "k-NN, LLMs, RAG, Regression, Classification"
    ],
    iconName: "Cpu"
  }
];

export const techStackCategories: TechCategory[] = [
  {
    category: "Languages",
    description: "Main languages used for backend, tools, and fullstack applications.",
    skills: [
      { name: "JavaScript", highlight: true, level: "Proficient" },
      { name: "TypeScript", highlight: true, level: "Proficient" },
      { name: "Python", highlight: true, level: "Proficient" },
      { name: "Golang", highlight: true, level: "Proficient" },
      { name: "PHP", highlight: false, level: "Familiar" },
      { name: "C", highlight: true, level: "Proficient" },
      { name: "C++", highlight: true, level: "Proficient" }
    ]
  },
  {
    category: "Frontend",
    description: "Client-side platforms, rendering engines, and design systems.",
    skills: [
      { name: "React", highlight: true, level: "Proficient" },
      { name: "Next.js", highlight: true, level: "Proficient" },
      { name: "Tailwind CSS", highlight: true, level: "Proficient" },
      { name: "HTML/CSS", highlight: true, level: "Proficient" },
      { name: "JavaScript", highlight: true, level: "Proficient" },
      { name: "TypeScript", highlight: true, level: "Proficient" }
    ]
  },
  {
    category: "Backend & Databases",
    description: "Frameworks, databases, and caching infrastructure.",
    skills: [
      { name: "Node.js", highlight: true, level: "Proficient" },
      { name: "Express.js", highlight: true, level: "Proficient" },
      { name: "Flask", highlight: true, level: "Proficient" },
      { name: "MongoDB", highlight: true, level: "Proficient" },
      { name: "Redis", highlight: true, level: "Proficient" },
      { name: "PostgreSQL", highlight: false, level: "Familiar" },
      { name: "Cloudinary", highlight: true, level: "Proficient" }
    ]
  },
  {
    category: "AI & Tools",
    description: "Machine Learning integration, DevOps, and development tools.",
    skills: [
      { name: "OpenRouter", highlight: true, level: "Proficient" },
      { name: "Scikit-learn", highlight: true, level: "Familiar" },
      { name: "Docker", highlight: true, level: "Proficient" },
      { name: "AWS", highlight: true, level: "Proficient" },
      { name: "Git", highlight: true, level: "Proficient" },
      { name: "Postman/Swagger", highlight: true, level: "Proficient" }
    ]
  }
];

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "Third Prize",
    issuer: "INNOX 2026: Beyond Limits - Touch the Future",
    year: "2026",
    description: "Awarded for excellence, securing top 3 in the tech competition with the VLU Smart CV project.",
    badgeText: "Award"
  },
  {
    id: "ach-2",
    title: "Top 200",
    issuer: "International Collegiate Programming Contest",
    year: "2024",
    description: "Recognized as one of the top 200 algorithmic problem solvers at the regional ICPC round.",
    badgeText: "Competition"
  },
  {
    id: "ach-3",
    title: "First Prize",
    issuer: "City-level Science & Technology Innovation Competition",
    year: "2020",
    description: "Honored for excellence in scientific research and technical engineering.",
    badgeText: "Award"
  }
];

export const educations: Education[] = [
  {
    id: "edu-1",
    institution: "Van Lang University",
    degree: "Software Engineering Bachelor's Program",
    period: "2023 — 2026",
    honors: "GPA: 3.4 / 4.0",
    keyCoursework: [
      "Object-Oriented Programming",
      "Database Management Systems",
      "Software Requirements",
      "Web Application Development"
    ]
  },
  {
    id: "edu-2",
    institution: "Vinh University High School for the Gifted",
    degree: "Specialized Informatics Class",
    period: "2020 — 2023",
    honors: "Specialized in Computer Science knowledge",
    keyCoursework: []
  }
];

export const leadershipActivities: LeadershipActivity[] = [
  {
    id: "lead-1",
    title: "Vice Chairman",
    organization: "KC STEME Club",
    period: "2021 — 2023",
    description: "Co-led technology initiatives and organized technical workshops for club members.",
    highlights: [
      "Mentored junior members in programming fundamentals.",
      "Organized technology and science events to promote STEM education."
    ]
  }
];
