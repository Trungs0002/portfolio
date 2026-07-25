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
  name: "Đào Đức Trung",
  title: "Sinh viên Kỹ thuật Phần mềm & Lập trình viên Fullstack",
  roleTagline: "Tôi xây dựng các sản phẩm thực tế, hướng tới người dùng với trọng tâm là hệ thống backend và trí tuệ nhân tạo.",
  bioSummary: "Tôi chuyên xây dựng và triển khai các ứng dụng web thực tế, từ yêu cầu người dùng, thiết kế giao diện đến API, cơ sở dữ liệu, phân quyền, triển khai và bảo trì dài hạn.",
  location: "TP. Hồ Chí Minh, Việt Nam",
  email: "trungnho0512@gmail.com",
  githubUrl: "https://github.com/Trungs0002",
  linkedinUrl: "https://linkedin.com",
  twitterUrl: "https://twitter.com",
  availability: "SẴN SÀNG CHO CÁC CƠ HỘI NGHỀ NGHIỆP",
  yearsOfExperience: "2+",
  resumeUrl: "/Dao-Duc-Trung-CV.pdf"
};

export const impactStats: ImpactStat[] = [
  {
    id: "1",
    metric: "04+",
    label: "Năm Lập trình",
    description: "Học tập liên tục và phát triển ứng dụng thực tế.",
    iconName: "Terminal"
  },
  {
    id: "2",
    metric: "03",
    label: "Dự án Lớn",
    description: "Hệ thống production đã xây dựng và đang hoạt động.",
    iconName: "Code2"
  },
  {
    id: "3",
    metric: "02+",
    label: "Đối tác Lớn",
    description: "Cung cấp giải pháp phần mềm thành công cho các tổ chức.",
    iconName: "Briefcase"
  },
  {
    id: "4",
    metric: "1500+",
    label: "Người dùng",
    description: "Sử dụng các nền tảng do tôi xây dựng.",
    iconName: "Users"
  }
];

export const aboutData: AboutDetails = {
  headline: "Tôi xây dựng phần mềm với tư duy kỹ thuật và sáng tạo.",
  paragraphs: [
    "Tôi là sinh viên Kỹ thuật Phần mềm tại Đại học Văn Lang với định hướng Fullstack Development. Tôi thích việc tìm hiểu toàn bộ quy trình hoạt động của một sản phẩm, từ yêu cầu người dùng và thiết kế giao diện đến API, cơ sở dữ liệu, xác thực, triển khai và bảo trì hệ thống.",
    "Kinh nghiệm chuyên môn của tôi bao gồm Thực tập sinh Backend tại Tanca, giảng dạy lập trình tại DigitalUni, và trực tiếp triển khai các giải pháp phần mềm thực tế cho các đối tác lớn và tổ chức trong trường học."
  ],
  engineeringPrinciples: [
    {
      title: "Phát triển Sản phẩm Fullstack",
      description: "Phát triển sản phẩm toàn diện từ giao diện người dùng đến API và cơ sở dữ liệu."
    },
    {
      title: "Tích hợp Trí tuệ Nhân tạo",
      description: "Tích hợp AI/LLMs (OpenRouter, Scikit-learn) để tự động hóa và cá nhân hóa quy trình thực tế."
    },
    {
      title: "Triển khai Mở rộng",
      description: "Quản lý triển khai trên Docker, AWS và các nền tảng đám mây hiện đại đảm bảo tính ổn định."
    }
  ]
};

export const selectedProjects: Project[] = [
  {
    id: "vlu-smart-cv",
    title: "Hệ thống AI Phân tích và Cải thiện CV",
    subtitle: "Vlusmartcv.com",
    category: "Tích hợp AI",
    coverImage: "/vlucv.png",
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
    category: "Quản lý Sự kiện",
    coverImage: "/mfc1.png",
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
    category: "Thương mại Điện tử",
    coverImage: "/loomdenim.png",
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
    role: "Thực tập sinh Backend",
    period: "Tháng 3, 2025 — Tháng 9, 2025",
    location: "Việt Nam",
    type: "Thực tập",
    description: "Đóng góp vào việc phát triển và bảo trì các dịch vụ backend cho nền tảng quản lý nhân sự.",
    keyAchievements: [
      "Tham gia phát triển và bảo trì các RESTful API phục vụ hệ thống quản lý nhân sự",
      "Hỗ trợ phát triển module backend sử dụng Golang và PHP",
      "Fix bug và cải thiện hiệu năng hệ thống, đảm bảo API hoạt động ổn định",
      "Phối hợp với Frontend và QA để tích hợp và kiểm thử chức năng",
      "Viết tài liệu API (Swagger/Postman) hỗ trợ team frontend tích hợp nhanh hơn"
    ],
    techStack: ["Golang", "PHP", "REST APIs", "Swagger", "Postman"],
    companyLogoText: "TANCA"
  },
  {
    id: "exp-2",
    company: "Digital University",
    role: "Giáo viên lập trình",
    period: "Tháng 9, 2025 — Tháng 6, 2026",
    location: "Việt Nam",
    type: "Bán thời gian",
    description: "Giảng dạy lập trình từ cơ bản, trung cấp đến nâng cao thông qua các bài tập thực hành và dự án cá nhân.",
    keyAchievements: [
      "Giảng dạy Scratch và CodeCombat cho học viên mới bắt đầu, xây dựng tư duy lập trình cơ bản",
      "Giảng dạy lập trình Python, Pygame, SQL cho học viên trung cấp, phát triển các project game đơn giản",
      "Giảng dạy lập trình HTML, CSS, JavaScript, React cho học viên nâng cao, xây dựng website cơ bản",
      "Thiết kế bài giảng và bài tập thực hành phù hợp cho học sinh",
      "Theo dõi tiến độ và hỗ trợ học viên hoàn thành các project cá nhân"
    ],
    techStack: ["Scratch", "CodeCombat", "Python", "SQL", "React", "JavaScript", "HTML/CSS", "Pygame"],
    companyLogoText: "DIGIUNI"
  }
];

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: "1",
    title: "Kỹ thuật Backend",
    tagline: "Xây dựng APIs mở rộng và dịch vụ đáng tin cậy",
    description: "Phát triển RESTful APIs dễ bảo trì, tối ưu hóa hoạt động cơ sở dữ liệu và đảm bảo luồng xác thực chặt chẽ.",
    capabilities: [
      "Node.js, Express, Flask & Golang",
      "Thiết kế RESTful API & OpenAPI (Swagger)",
      "Xác thực qua JWT & OAuth",
      "Thiết kế cấu trúc cơ sở dữ liệu (MongoDB, SQL)",
      "Xử lý dữ liệu lớn (Big Data)",
      "Tối ưu hóa hiệu năng hệ thống",
      "Đảm bảo bảo mật hệ thống"
    ],
    iconName: "Server"
  },
  {
    id: "2",
    title: "Phát triển Fullstack",
    tagline: "Kết nối logic phức tạp với UI đẹp mắt",
    description: "Làm chủ toàn bộ vòng đời ứng dụng từ giao diện React frontend đáp ứng (responsive) đến việc triển khai container hóa trên đám mây.",
    capabilities: [
      "Kiến trúc React & Next.js",
      "Tailwind CSS & Thư viện Component",
      "Quản lý State & Data Fetching",
      "Bảo mật kiểu dữ liệu End-to-End (TypeScript)",
      "Tối ưu giao diện responsive",
      "Tích hợp các thanh toán Online",
      "Tối ưu trải nghiệm người dùng"
    ],
    iconName: "Layers"
  },
  {
    id: "3",
    title: "Tích hợp Trí tuệ Nhân tạo",
    tagline: "Tính năng thông minh cho sản phẩm thực tế",
    description: "Triển khai Mô hình Ngôn ngữ Lớn (LLMs) và các thuật toán Học máy (Machine Learning) để tự động hóa quy trình và nâng cao trải nghiệm người dùng.",
    capabilities: [
      "Tích hợp LLM (OpenRouter)",
      "Các thuật toán Học máy (Scikit-learn)",
      "Xử lý và phân tích tài liệu PDF, Word, Excel...",
      "Hệ thống đề xuất sản phẩm",
      "Triển khai AI vào sản phẩm thực tế",
      "Tự động hóa quy trình",
      "Làm việc với dữ liệu lớn",
      "k-NN, LLM, Rag, Regression, Classification"
    ],
    iconName: "Cpu"
  }
];

export const techStackCategories: TechCategory[] = [
  {
    category: "Ngôn ngữ",
    description: "Ngôn ngữ chính sử dụng cho backend, công cụ và ứng dụng fullstack.",
    skills: [
      { name: "JavaScript", highlight: true, level: "Thành thạo" },
      { name: "TypeScript", highlight: true, level: "Thành thạo" },
      { name: "Python", highlight: true, level: "Thành thạo" },
      { name: "Golang", highlight: true, level: "Thành thạo" },
      { name: "PHP", highlight: false, level: "Làm quen" },
      { name: "C", highlight: true, level: "Thành thạo" },
      { name: "C++", highlight: true, level: "Thành thạo" }
    ]
  },
  {
    category: "Frontend",
    description: "Nền tảng client-side, engine render và hệ thống thiết kế.",
    skills: [
      { name: "React", highlight: true, level: "Thành thạo" },
      { name: "Next.js", highlight: true, level: "Thành thạo" },
      { name: "Tailwind CSS", highlight: true, level: "Thành thạo" },
      { name: "HTML/CSS", highlight: true, level: "Thành thạo" },
      { name: "JavaScript", highlight: true, level: "Thành thạo" },
      { name: "TypeScript", highlight: true, level: "Thành thạo" }
    ]
  },
  {
    category: "Backend & Databases",
    description: "Framework, cơ sở dữ liệu và hạ tầng caching.",
    skills: [
      { name: "Node.js", highlight: true, level: "Thành thạo" },
      { name: "Express.js", highlight: true, level: "Thành thạo" },
      { name: "Flask", highlight: true, level: "Thành thạo" },
      { name: "MongoDB", highlight: true, level: "Thành thạo" },
      { name: "Redis", highlight: true, level: "Thành thạo" },
      { name: "PostgreSQL", highlight: false, level: "Làm quen" },
      { name: "Cloudinary", highlight: true, level: "Thành thạo" }
    ]
  },
  {
    category: "AI & Công cụ",
    description: "Tích hợp Machine Learning, DevOps, và các công cụ lập trình.",
    skills: [
      { name: "OpenRouter", highlight: true, level: "Thành thạo" },
      { name: "Scikit-learn", highlight: false, level: "Làm quen" },
      { name: "Docker", highlight: true, level: "Thành thạo" },
      { name: "AWS", highlight: true, level: "Thành thạo" },
      { name: "Git", highlight: true, level: "Thành thạo" },
      { name: "Postman/Swagger", highlight: true, level: "Thành thạo" }
    ]
  }
];

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "Giải Ba",
    issuer: "INNOX 2026: Vượt giới hạn - Chạm Tương lai",
    year: "2026",
    description: "Được vinh danh vì đã xuất sắc lọt top 3 cuộc thi công nghệ với dự án VLU Smart CV.",
    badgeText: "Giải thưởng"
  },
  {
    id: "ach-2",
    title: "Top 200",
    issuer: "International Collegiate Programming Contest",
    year: "2024",
    description: "Được công nhận là 1 trong top 200 người giải thuật toán xuất sắc tại vòng loại ICPC khu vực.",
    badgeText: "Cuộc thi"
  },
  {
    id: "ach-3",
    title: "Giải Nhất",
    issuer: "Cuộc thi Sáng tạo Khoa học & Công nghệ cấp Thành phố",
    year: "2020",
    description: "Được vinh danh vì sự xuất sắc trong nghiên cứu khoa học và kỹ thuật công nghệ.",
    badgeText: "Giải thưởng"
  }
];

export const educations: Education[] = [
  {
    id: "edu-1",
    institution: "Đại học Văn Lang",
    degree: "Chương trình Kĩ Sư ngành Kỹ thuật Phần mềm",
    period: "2023 — 2026",
    honors: "GPA: 3.4 / 4.0",
    keyCoursework: [
      "Lập trình Hướng Đối tượng",
      "Hệ quản trị Cơ sở Dữ liệu",
      "Yêu cầu Phần mềm",
      "Phát triển Ứng dụng Web"
    ]
  },
  {
    id: "edu-2",
    institution: "Trường THPT Chuyên Đại học Vinh",
    degree: "Lớp Chuyên Tin học",
    period: "2020 — 2023",
    honors: "Chuyên sâu về kiến thức Tin Học",
    keyCoursework: []
  }
];

export const leadershipActivities: LeadershipActivity[] = [
  {
    id: "lead-1",
    title: "Phó Chủ nhiệm",
    organization: "CLB KC STEME",
    period: "2021 — 2023",
    description: "Đồng lãnh đạo các sáng kiến công nghệ và tổ chức các buổi hội thảo kỹ thuật cho thành viên câu lạc bộ.",
    highlights: [
      "Hướng dẫn lập trình cơ bản cho các thành viên mới.",
      "Tổ chức các sự kiện công nghệ và khoa học nhằm thúc đẩy giáo dục STEM."
    ]
  }
];
