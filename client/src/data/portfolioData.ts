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
  linkedinUrl: "https://www.linkedin.com/in/trungs0001/",
  twitterUrl: "https://twitter.com",
  availability: "AVAILABLE FOR SOFTWARE ENGINEERING OPPORTUNITIES",
  yearsOfExperience: "2+",
  resumeUrl: "https://drive.google.com/file/d/1fuvLHmG-dnX-EasUDtKamKvWyOgpTP9Z/view?usp=drive_link"
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
    "I am a Software Engineering student at Van Lang University with a strong focus on Fullstack Development. I enjoy understanding how an entire product works, from user requirements and interface design to APIs, databases, authentication, deployment and long-term maintenance.",
    "My professional experience includes working as a Backend Developer Intern at Tanca, teaching programming at Digital University, and successfully delivering production software solutions for major partners and university organizations."
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
    title: "Hệ thống AI Phân tích và Cải thiện CV",
    subtitle: "Vlusmartcv.com",
    category: "AI Integration",
    coverImage: "/vlucv.png",
    thumbnailImage: "/demogif.gif",
    description: "Phát triển và vận hành hệ thống phân tích, đánh giá CV bằng AI từ đó đề xuất hướng cải thiện cũng như cho phép so sánh CV hiện tại với Job Description mong muốn.",
    role: "Founder / Fullstack Developer",
    technologies: ["Next.js", "TypeScript", "Flask", "MongoDB", "Redis", "OpenRouter", "Google OAuth"],
    impactMetrics: [
      { label: "Người Dùng", value: "200+" },
      { label: "CVs Xử Lý", value: "500+" },
      { label: "INNOX 2026", value: "Top 3" }
    ],
    liveUrl: "https://vlusmartcv.com/",
    gallery: ["/demogif.gif", "/demogif2.gif", "/vlucv.png", "/vlucvstat.png"],
    architectureDetails: [
      "Hệ thống đã phục vụ hơn 200+ người dùng và xử lý hơn 500+ hồ sơ CV.",
      "Đạt giải ba cuộc thi “INNOX 2026: Vượt giới hạn – Chạm tương lai”.",
      "Được tham gia nghiên cứu khoa học của trường.",
      "Thiết kế UX/UI toàn bộ hệ thống.",
      "Xây dựng quy trình xử lý CV định dạng PDF/Word và hình ảnh bằng PyMuPDF, Pillow và các mô hình AI đa phương thức.",
      "Thiết kế kiến trúc frontend–backend tách biệt, giao tiếp thông qua RESTful API và xử lý tác vụ phân tích bất đồng bộ.",
      "Phát triển hệ thống phân quyền, tích hợp Google OAuth, Supabase và JWT.",
      "Xây dựng chức năng quản lý hạn mức tải CV, theo dõi API và cơ chế retry nhằm duy trì độ ổn định của hệ thống."
    ],
    featured: true
  },
  {
    id: "mfc-ftu",
    title: "Hệ thống Bán vé và tổ chức cuộc thi",
    subtitle: "Mfcftu.site",
    category: "Event Management",
    coverImage: "/mfc1.png",
    thumbnailImage: "/demogif3.gif",
    description: "Phát triển nền tảng bán vé, chekin vé offline, quản lý cuộc thi 'Nhất', tuyển cộng tác viên cùng các thông tin chính thức của FTU Fashion Show 2026.",
    role: "Fullstack Developer",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "html5-qrcode"],
    impactMetrics: [
      { label: "Người Dùng", value: "1000+" },
      { label: "Vé Đã Bán", value: "200+" },
      { label: "Ngôn Ngữ", value: "EN/VI" }
    ],
    githubUrl: "https://github.com/Trungs0002/mfccine",
    liveUrl: "https://mfcftu.site/",
    gallery: ["/demogif3.gif", "/demogif4.gif", "/mfc1.png", "/mfc2.png", "/mfcstat.png"],
    architectureDetails: [
      "Phát triển nền tảng bán vé, chekin vé và quản lý cuộc thi cũng như người tham dự chính thức cho FTU Fashion Show 2026",
      "Xây dựng hệ thống sự kiện song ngữ Anh–Việt, hỗ trợ cập nhật lịch trình, địa điểm, hình ảnh và thông tin chương trình.",
      "Phát triển hệ thống phân loại vé Standard, Premium và VIP, quản lý giá, số lượng và trạng thái từng hạng vé.",
      "Phát triển hệ thống cuộc thi và tuyển cộng tác viên.",
      "Tự động tạo mã QR duy nhất cho mỗi vé và xây dựng chức năng quét, xác thực, ngăn chặn việc sử dụng vé trùng lặp.",
      "Phát triển hệ thống đăng nhập và phân quyền User–Staff–Admin, đồng thời tối ưu giao diện responsive cho máy tính và điện thoại."
    ],
    featured: true
  },
  {
    id: "loom-denim",
    title: "Hệ thống thương mại điện tử",
    subtitle: "Loomdenim.site",
    category: "E-commerce",
    coverImage: "/loomdenim.png",
    thumbnailImage: "/demogif6.gif",
    description: "Phát triển và vận hành nền tảng thương mại điện tử thực tế, với kho giao diện được AI hỗ trợ, tích hợp thanh toán online và các tính năng quản lí hiện đại trực quan dễ sử dụng.",
    role: "Fullstack Developer",
    technologies: ["React", "Node.js", "Express", "Python", "Scikit-learn", "Docker", "VNPay"],
    impactMetrics: [
      { label: "Người Dùng", value: "100+" },
      { label: "Đơn Hàng", value: "150+" },
      { label: "Tích Hợp", value: "AI" }
    ],
    githubUrl: "https://github.com/Trungs0002/loom",
    liveUrl: "https://loomdenim.site/",
    gallery: ["/demogif5.gif", "/demogif6.gif", "/demogif7.gif", "/loomdenim.png"],
    architectureDetails: [
      "Phát triển và vận hành nền tảng thương mại điện tử thực tế, phục vụ hơn 100+ người dùng và xử lý 150+ đơn hàng.",
      "Xây dựng đầy đủ quy trình mua hàng gồm sản phẩm, giỏ hàng, đặt hàng, thanh toán, theo dõi đơn và quản lý tồn kho.",
      "Phát triển AI Stylist sử dụng thuật toán kNN để đề xuất sản phẩm phù hợp với sở thích và ngân sách của người dùng.",
      "Tích hợp thanh toán VNPay, COD, cá nhân hóa sản phẩm và hệ thống đánh giá dành cho khách hàng đã hoàn tất đơn hàng.",
      "Xây dựng dashboard quản trị và triển khai hệ thống trên Vercel, Render, MongoDB Atlas và Cloudinary."
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
