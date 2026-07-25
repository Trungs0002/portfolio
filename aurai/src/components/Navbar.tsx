import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code2, Terminal, User, Briefcase, Cpu, Award, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
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
    { name: 'About', href: '#about', id: 'about', icon: User },
    { name: 'Projects', href: '#projects', id: 'projects', icon: Code2 },
    { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
    { name: 'Expertise', href: '#expertise', id: 'expertise', icon: Cpu },
    { name: 'Tech Stack', href: '#tech-stack', id: 'tech-stack', icon: Terminal },
    { name: 'Achievements', href: '#achievements', id: 'achievements', icon: Award },
    { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
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
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 p-[1px] shadow-lg shadow-emerald-950/40 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0d0e15] rounded-[11px] flex items-center justify-center">
                <Terminal className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-zinc-100 text-sm tracking-tight flex items-center gap-1.5 group-hover:text-emerald-400 transition-colors">
                {personalInfo.name}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="text-[11px] text-zinc-400 font-mono tracking-tight hidden sm:inline-block">
                Software & Systems
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
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
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
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-all duration-200 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25 active:scale-95"
            >
              <span>Get In Touch</span>
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
            <div className="pt-4 mt-2 border-t border-zinc-800/80">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-all text-center"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
