import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import * as enData from '../data/portfolioDataEN';
import * as viData from '../data/portfolioDataVI';

export type Language = 'en' | 'vi';

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  data: typeof enData;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'hero.hello': "Hello, I'm",
    'hero.explore': "Explore Selected Projects",
    'hero.contact': "Contact Me",
    'hero.cv': "Dao Duc Trung CV",
    'hero.viewPdf': "VIEW PDF",
    'hero.coreTech': "Core Tech Engine & Architecture",
    'about.header': "01 // INTRODUCTION",
    'about.title': "Hello, I'm",
    'about.location': "LOCATION",
    'about.experience': "EXPERIENCE",
    'about.projects': "15+ Projects",
    'about.role': "ROLE",
    'about.dev': "Fullstack Dev",
    'about.principles': "Core Engineering Principles",
    'projects.header': "02 // SELECTED ENGINEERING WORK",
    'projects.title': "Featured Systems & Projects",
    'projects.desc': "High-scale backend architectures, real-time analytics platforms, and developer tooling built for production performance.",
    'projects.filter': "Filter Projects",
    'projects.all': "All",
    'projects.view': "View Details",
    'projects.visit': "Visit Website",
    'modal.architecture': "Architecture & Features",
    'modal.close': "Close",
    'exp.header': "03 // PROFESSIONAL EXPERIENCE",
    'exp.title': "Career Progression",
    'exp.desc': "Production environments and engineering teams I've been a part of.",
    'expertise.header': "04 // DOMAIN EXPERTISE",
    'expertise.title': "Core Architectural Capabilities",
    'expertise.desc': "The technical pillars that form the foundation of my systems design.",
    'tech.header': "05 // TECHNOLOGY LANDSCAPE",
    'tech.title': "Tools & Frameworks",
    'tech.desc': "Languages and infrastructure utilized to construct scalable software.",
    'achieve.header': "06 // RECOGNITION",
    'achieve.title': "Awards & Honors",
    'achieve.desc': "Milestones reflecting technical excellence and competitive problem solving.",
    'achieve.issuer': "Issuer",
    'edu.header': "07 // ACADEMIC BACKGROUND",
    'edu.title': "Education",
    'edu.desc': "Formal training and computer science fundamentals.",
    'edu.coursework': "Relevant Coursework:",
    'lead.header': "08 // COMMUNITY & INITIATIVES",
    'lead.title': "Engineering Leadership & Roles",
    'lead.desc': "Contributions to the tech community and organizational leadership.",
    'contact.header': "09 // INITIATE COMMS",
    'contact.title': "Contact Me",
    'contact.desc': "Seeking collaboration, architectural advice, or staff-level additions? Let's connect.",
    'contact.details': "Contact Details",
    'contact.email': "DIRECT EMAIL",
    'contact.location': "LOCATION",
    'contact.availability': "Current Availability",
    'contact.connect': "CONNECT ELSEWHERE",
    'contact.form': "Send Direct Message",
    'contact.name': "Your Name *",
    'contact.namePH': "Jane Doe",
    'contact.emailInput': "Your Email *",
    'contact.emailPH': "jane@company.com",
    'contact.subject': "Subject / Topic",
    'contact.subjectPH': "Distributed Systems Consulting / Staff Role",
    'contact.message': "Message *",
    'contact.messagePH': "Hi Alex, we'd love to chat about...",
    'contact.send': "Transmit Message",
    'footer.backToTop': "Back to top",
    'footer.cv': "CV",
    'footer.viewPdf': "VIEW PDF"
  },
  vi: {
    'nav.about': 'Giới thiệu',
    'nav.projects': 'Dự án',
    'nav.experience': 'Kinh nghiệm',
    'nav.contact': 'Liên hệ',
    'hero.hello': "Xin chào, tôi là",
    'hero.explore': "Khám Phá Các Dự Án",
    'hero.contact': "Liên Hệ",
    'hero.cv': "CV Đào Đức Trung",
    'hero.viewPdf': "XEM PDF",
    'hero.coreTech': "Kiến trúc & Công nghệ lõi",
    'about.header': "01 // GIỚI THIỆU",
    'about.title': "Xin chào, tôi là",
    'about.location': "ĐỊA ĐIỂM",
    'about.experience': "KINH NGHIỆM",
    'about.projects': "15+ Dự Án",
    'about.role': "VAI TRÒ",
    'about.dev': "Lập Trình Viên Fullstack",
    'about.principles': "Nguyên Tắc Kỹ Thuật Cốt Lõi",
    'projects.header': "02 // CÁC DỰ ÁN KỸ THUẬT NỔI BẬT",
    'projects.title': "Hệ thống & Dự án Tiêu biểu",
    'projects.desc': "Các kiến trúc dự án quy mô lớn, nền tảng phân tích thời gian thực và công cụ phát triển tối ưu cho môi trường production.",
    'projects.filter': "Lọc Dự Án",
    'projects.all': "Tất cả",
    'projects.view': "Xem chi tiết",
    'projects.visit': "Truy cập Website",
    'modal.architecture': "Kiến trúc & Tính năng",
    'modal.close': "Đóng",
    'exp.header': "03 // KINH NGHIỆM LÀM VIỆC",
    'exp.title': "Quá Trình Công Tác",
    'exp.desc': "Các môi trường và đội ngũ kỹ thuật mà tôi đã từng tham gia.",
    'expertise.header': "04 // CHUYÊN MÔN",
    'expertise.title': "Năng Lực Kiến Trúc Cốt Lõi",
    'expertise.desc': "Những nền tảng kỹ thuật hình thành nên hệ thống của tôi.",
    'tech.header': "05 // KỸ NĂNG",
    'tech.title': "Kỹ Năng & Công Nghệ",
    'tech.desc': "Ngôn ngữ và công nghệ được sử dụng để xây dựng phần mềm mở rộng.",
    'achieve.header': "06 // THÀNH TỰU",
    'achieve.title': "Giải Thưởng & Vinh Danh",
    'achieve.desc': "Những cột mốc phản ánh sự xuất sắc trong kỹ thuật và giải quyết vấn đề.",
    'achieve.issuer': "Tổ chức",
    'edu.header': "07 // HỌC VẤN",
    'edu.title': "Quá Trình Học Tập",
    'edu.desc': "Chương trình đào tạo và nền tảng lập trình phần mềm.",
    'edu.coursework': "Các Môn Học Tiêu Biểu:",
    'lead.header': "08 // HOẠT ĐỘNG",
    'lead.title': "Lãnh Đạo & Vai Trò",
    'lead.desc': "Những đóng góp cho cộng đồng công nghệ và hoạt động tổ chức.",
    'contact.header': "09 // LIÊN HỆ",
    'contact.title': "Liên Hệ Với Tôi",
    'contact.desc': "Cần hợp tác, tư vấn kiến trúc hay tuyển dụng? Hãy kết nối với tôi.",
    'contact.details': "Thông Tin Liên Hệ",
    'contact.email': "EMAIL TRỰC TIẾP",
    'contact.location': "ĐỊA ĐIỂM",
    'contact.availability': "Trạng Thái Hiện Tại",
    'contact.connect': "KẾT NỐI KHÁC",
    'contact.form': "Gửi Tin Nhắn",
    'contact.name': "Tên Của Bạn *",
    'contact.namePH': "Nguyễn Văn A",
    'contact.emailInput': "Email Của Bạn *",
    'contact.emailPH': "nguyenvana@gmail.com",
    'contact.subject': "Chủ Đề",
    'contact.subjectPH': "Hợp Tác Phát Triển Phần Mềm",
    'contact.message': "Nội Dung *",
    'contact.messagePH': "Chào Trung, tôi muốn trao đổi về...",
    'contact.send': "Gửi Tin Nhắn",
    'footer.backToTop': "Lên đầu trang",
    'footer.cv': "CV",
    'footer.viewPdf': "XEM PDF"
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('vi');
  const [hasSelected, setHasSelected] = useState<boolean>(false);

  const data = lang === 'en' ? enData : viData;
  const t = (key: string) => {
    const dict = translations[lang] as any;
    return dict[key] || key;
  };

  const handleInitialSelect = (selected: Language) => {
    setLang(selected);
    setHasSelected(true);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, data, t }}>
      {!hasSelected && (
        <div className="fixed inset-0 z-[9999] bg-[#08090d]/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4 animate-in fade-in duration-500">
           <div className="bg-[#0e1017] border border-zinc-800 rounded-3xl p-8 sm:p-12 max-w-md w-full shadow-2xl flex flex-col items-center text-center relative overflow-hidden">
             {/* Decorative blobs */}
             <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl"></div>
             <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-teal-500/20 rounded-full blur-3xl"></div>
             
             <div className="relative z-10 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Welcome / Chào mừng</h2>
                <p className="text-zinc-400 text-sm">Please select your preferred language<br/>Vui lòng chọn ngôn ngữ hiển thị</p>
             </div>
             
             <div className="flex flex-col sm:flex-row gap-4 w-full relative z-10">
               <button 
                 onClick={() => handleInitialSelect('vi')} 
                 className="flex-1 flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all group shadow-lg"
               >
                 <span className="text-4xl drop-shadow-md">🇻🇳</span>
                 <span className="font-bold text-white group-hover:text-emerald-400 transition-colors">Tiếng Việt</span>
               </button>
               <button 
                 onClick={() => handleInitialSelect('en')} 
                 className="flex-1 flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all group shadow-lg"
               >
                 <span className="text-4xl drop-shadow-md">🇺🇸</span>
                 <span className="font-bold text-white group-hover:text-emerald-400 transition-colors">English</span>
               </button>
             </div>
           </div>
        </div>
      )}
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
