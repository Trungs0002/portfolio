import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code2, Terminal, User, Briefcase, Cpu, Award, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { data, t, lang, setLang } = useLanguage();
  const { personalInfo } = data;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: '#about', id: 'about', icon: User },
    { name: t('nav.projects'), href: '#projects', id: 'projects', icon: Code2 },
    { name: t('nav.experience'), href: '#experience', id: 'experience', icon: Briefcase },
    { name: lang === 'vi' ? 'Chuyên môn' : 'Expertise', href: '#expertise', id: 'expertise', icon: Cpu },
    { name: lang === 'vi' ? 'Kỹ năng' : 'Tech Stack', href: '#tech-stack', id: 'tech-stack', icon: Terminal },
    { name: lang === 'vi' ? 'Thành tựu' : 'Achievements', href: '#achievements', id: 'achievements', icon: Award },
    { name: t('nav.contact'), href: '#contact', id: 'contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-[#08090d]/80 backdrop-blur-xl border-b border-zinc-800/80 py-3 shadow-2xl'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand / Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-12 h-12 shrink-0 group-hover:scale-110 transition-transform drop-shadow-lg">
              <img src="/logotrungtrans.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-zinc-100 text-sm tracking-tight flex items-center gap-1.5 group-hover:text-emerald-400 transition-colors">
                {personalInfo.name}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="text-[11px] text-zinc-400 font-mono tracking-tight block">
                Software Engineer & AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${isActive
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'vi' : 'en')}
              className="relative flex items-center p-1 rounded-full bg-zinc-900 border border-zinc-800/80 w-14 h-8 cursor-pointer group hover:border-emerald-500/50 transition-colors"
              aria-label="Toggle Language"
            >
              {/* Sliding Background */}
              <div
                className={`absolute left-1 top-1 bottom-1 w-6 rounded-full bg-emerald-500 transition-transform duration-300 ease-in-out ${lang === 'en' ? 'translate-x-0' : 'translate-x-6'
                  }`}
              />

              {/* Text Labels */}
              <div className="relative w-6 flex items-center justify-center z-10">
                <span className={`text-[10px] font-bold transition-colors duration-300 ${lang === 'en' ? 'text-zinc-950' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                  EN
                </span>
              </div>
              <div className="relative w-6 flex items-center justify-center z-10">
                <span className={`text-[10px] font-bold transition-colors duration-300 ${lang === 'vi' ? 'text-zinc-950' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                  VI
                </span>
              </div>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-all duration-200 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25 active:scale-95"
            >
              <span>{lang === 'en' ? 'Get In Touch' : 'Liên Hệ'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0c12]/95 backdrop-blur-2xl border-b border-zinc-800 px-4 py-6 shadow-2xl mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-colors"
                >
                  <Icon className="w-4 h-4 text-emerald-400" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            <div className="pt-4 mt-2 border-t border-zinc-800/80 space-y-4">
              <div className="flex items-center justify-between px-2">
                <span className="text-sm font-medium text-zinc-400">Ngôn ngữ / Language</span>
                <button
                  onClick={() => setLang(lang === 'en' ? 'vi' : 'en')}
                  className="relative flex items-center p-1 rounded-full bg-zinc-900 border border-zinc-800/80 w-14 h-8 cursor-pointer group"
                >
                  <div
                    className={`absolute left-1 top-1 bottom-1 w-6 rounded-full bg-emerald-500 transition-transform duration-300 ease-in-out ${lang === 'en' ? 'translate-x-0' : 'translate-x-6'
                      }`}
                  />
                  <div className="relative w-6 flex items-center justify-center z-10">
                    <span className={`text-[10px] font-bold transition-colors duration-300 ${lang === 'en' ? 'text-zinc-950' : 'text-zinc-500'}`}>
                      EN
                    </span>
                  </div>
                  <div className="relative w-6 flex items-center justify-center z-10">
                    <span className={`text-[10px] font-bold transition-colors duration-300 ${lang === 'vi' ? 'text-zinc-950' : 'text-zinc-500'}`}>
                      VI
                    </span>
                  </div>
                </button>
              </div>

              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-all text-center"
              >
                <span>{lang === 'en' ? 'Get In Touch' : 'Liên Hệ'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
