import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Github, Mail, Terminal, Cpu, Database, Server, ExternalLink, FileText, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { IdBadgeCard } from './IdBadgeCard';
import { SectionTitle } from './SectionTitle';


export const Hero: React.FC = () => {
  const { data, t } = useLanguage();
  const { personalInfo } = data;
  const quickStackTop = ["JavaScript", "TypeScript", "Python", "React", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Docker", "Git", "OpenRouter"];
  const quickStackBottom = ["Golang", "PHP", "Flask", "Redis", "AWS", "Scikit-learn", "Postman", "Swagger"];

  const [isCardDragging, setIsCardDragging] = useState(false);
  const topTextRef = useRef<HTMLSpanElement>(null);
  const bottomTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isCardDragging) {
      if (topTextRef.current) topTextRef.current.textContent = 'console.log("Hello World!");';
      if (bottomTextRef.current) bottomTextRef.current.textContent = 'return { status: 200 };';
      return;
    }

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*<>[]{}';
    const originalTop = 'console.log("Hello World!");';
    const originalBottom = 'return { status: 200 };';
    
    const scramble = (str: string) => str.split('').map(c => Math.random() > 0.7 ? chars[Math.floor(Math.random() * chars.length)] : c).join('');
    
    let tick = 0;
    const interval = setInterval(() => {
      tick++;
      if (tick % 4 === 0) {
        if (topTextRef.current) topTextRef.current.textContent = scramble(originalBottom);
        if (bottomTextRef.current) bottomTextRef.current.textContent = scramble(originalTop);
      } else {
        if (topTextRef.current) topTextRef.current.textContent = scramble(originalTop);
        if (bottomTextRef.current) bottomTextRef.current.textContent = scramble(originalBottom);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isCardDragging]);

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-radial-gradient">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Decorative Glow Spheres - Optimized for Safari (scaled up to match old blur spread) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[840px] h-[540px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-emerald-500/5 to-transparent rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[630px] h-[630px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/10 via-teal-500/5 to-transparent rounded-full pointer-events-none translate-x-1/4" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-8 backdrop-blur-md shadow-inner">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{personalInfo.availability}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-8 flex flex-col items-start">
            
            <p className="text-sm sm:text-base font-mono text-emerald-400 mb-3 tracking-wide">
              {t('hero.hello')} <span className="text-zinc-100 font-bold">{personalInfo.name}!</span>
            </p>

            <div className="mb-6 -ml-1">
              <SectionTitle
                as="h1"
                className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]"
                title={personalInfo.title}
              />
            </div>

            <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mb-8">
              {personalInfo.roleTagline}
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mb-10">
              {personalInfo.bioSummary}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-all duration-200 shadow-xl shadow-emerald-500/20 active:scale-95"
              >
                <span>{t('hero.explore')}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white hover:bg-zinc-800 transition-all duration-200 active:scale-95"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>{t('hero.contact')}</span>
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://drive.google.com/file/d/1fuvLHmG-dnX-EasUDtKamKvWyOgpTP9Z/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 p-2 pr-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:bg-zinc-800 hover:border-emerald-500/50 transition-all group"
                aria-label="View CV"
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <span className="font-semibold text-xs text-zinc-200 group-hover:text-emerald-400 transition-colors">
                    {t('hero.cv')}
                  </span>
                  <span className="text-[9px] text-emerald-500 mt-0.5 flex items-center gap-1 font-mono uppercase tracking-wider">
                    {t('hero.viewPdf')}
                    <ArrowRight className="w-2.5 h-2.5" />
                  </span>
                </div>
              </a>
            </div>

            {/* Quick Tech Highlights Badge List */}
            <div className="flex flex-col gap-3 w-full max-w-[600px]">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                {t('hero.coreTech')}
              </span>
              <div className="relative flex flex-col gap-2 overflow-hidden group [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                {/* Row 1 - Scrolling Left */}
                <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
                  {Array(8).fill(quickStackTop).flat().map((tech, i) => (
                    <span
                      key={`r1-${tech}-${i}`}
                      className="px-3 py-1 mx-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-xs font-mono hover:border-emerald-500/40 hover:text-emerald-300 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Row 2 - Scrolling Right */}
                <div className="flex w-max animate-marquee-reverse group-hover:[animation-play-state:paused]">
                  {Array(8).fill(quickStackBottom).flat().map((tech, i) => (
                    <span
                      key={`r2-${tech}-${i}`}
                      className="px-3 py-1 mx-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-xs font-mono hover:border-emerald-500/40 hover:text-emerald-300 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Card - ID Badge */}
          <div className="lg:col-span-4 w-full flex flex-col items-center lg:items-end justify-center relative mt-12 lg:mt-0 lg:max-w-none min-h-[520px]">
            
            {/* Top Decorative Tech Text */}
            <div 
              className={`relative z-0 text-[10px] font-mono tracking-widest mb-8 flex items-center justify-center lg:justify-end w-full max-w-[300px] sm:max-w-[330px] gap-3 ${isCardDragging ? 'text-red-500 font-bold' : 'text-emerald-500/60'}`}
            >
              <span className={`w-full h-[1px] bg-gradient-to-r from-transparent ${isCardDragging ? 'to-red-500/50' : 'to-emerald-500/30'}`}></span>
              <span ref={topTextRef} className="whitespace-nowrap">{'console.log("Hello World!");'}</span>
              <span className={`w-8 h-[1px] ${isCardDragging ? 'bg-red-500/50' : 'bg-emerald-500/30'}`}></span>
            </div>

            {/* Decorative Tech/HUD Elements Behind Card (Restored Circular Design) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[380px] sm:max-w-[420px] aspect-square pointer-events-none z-0">
              {/* Rotating Dashed Outer Ring */}
              <div className={`absolute inset-0 rounded-full border border-dashed ${isCardDragging ? 'border-red-500/40 animate-[spin_10s_linear_infinite_reverse]' : 'border-emerald-500/20 animate-[spin_60s_linear_infinite]'}`} />
              {/* Inner Glowing Core */}
              <div className={`absolute inset-[30px] rounded-full border ${isCardDragging ? 'border-red-500/30 bg-red-500/10 shadow-[0_0_80px_rgba(239,68,68,0.3)] animate-pulse' : 'border-emerald-500/10 bg-emerald-500/5 shadow-[0_0_60px_rgba(16,185,129,0.1)]'}`} />
              
              {/* Tech Crosshairs */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-8 rounded-full ${isCardDragging ? 'bg-red-500/60' : 'bg-emerald-500/40'}`} />
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1 h-8 rounded-full ${isCardDragging ? 'bg-red-500/60' : 'bg-emerald-500/40'}`} />
              <div className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-1 rounded-full ${isCardDragging ? 'bg-red-500/60' : 'bg-emerald-500/40'}`} />
              <div className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-1 rounded-full ${isCardDragging ? 'bg-red-500/60' : 'bg-emerald-500/40'}`} />
              
              {/* Floating Mini Orbs */}
              <div className={`absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-2 h-2 rounded-full shadow-[0_0_15px_rgba(16,185,129,1)] animate-pulse ${isCardDragging ? 'bg-red-400 shadow-[0_0_15px_rgba(239,68,68,1)]' : 'bg-emerald-400'}`} />
              <div className={`absolute -bottom-8 -right-4 sm:-bottom-12 sm:-right-6 w-3 h-3 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)] animate-[pulse_3s_ease-in-out_infinite] ${isCardDragging ? 'bg-red-400 shadow-[0_0_15px_rgba(239,68,68,0.8)]' : 'bg-emerald-400/80'}`} />
            </div>

            <div className="relative z-50 w-full flex justify-center lg:justify-end">
              <IdBadgeCard 
                imageSrc="/anhcv.jpg"
                imageAlt="Portrait of Đào Đức Trung"
                name={personalInfo.name}
                role={personalInfo.title}
                accent={isCardDragging ? "#ef4444" : "#10b981"}
                onDragStateChange={setIsCardDragging}
              />
            </div>

            {/* Bottom Decorative Element */}
            <div className="relative z-10 mt-10 flex flex-col items-center lg:items-end justify-center w-full max-w-[300px] sm:max-w-[330px]">
              <div className="flex items-center gap-1.5 mb-2.5 w-full justify-center lg:justify-end">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className={`w-1 h-1 rounded-full ${isCardDragging ? 'bg-red-500 animate-ping' : 'bg-emerald-500/50 animate-pulse'}`} style={{ animationDelay: `${isCardDragging ? i * 0.1 : i * 0.3}s` }} />
                ))}
              </div>
              <div className={`text-[10px] font-mono tracking-widest flex items-center gap-2 ${isCardDragging ? 'text-red-500 font-bold' : 'text-zinc-500/70'}`}>
                <span ref={bottomTextRef}>{'return { status: 200 };'}</span>
                <span className={`w-12 h-[1px] block ${isCardDragging ? 'bg-red-500/50' : 'bg-emerald-500/20'}`}></span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
