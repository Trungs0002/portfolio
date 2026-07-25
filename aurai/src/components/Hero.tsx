import React from 'react';
import { ArrowDown, Github, Mail, Terminal, Cpu, Database, Server, ExternalLink, FileText, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const quickStackTop = ["JavaScript", "TypeScript", "Python", "React", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Docker", "Git", "OpenRouter"];
  const quickStackBottom = ["Golang", "PHP", "Flask", "Redis", "AWS", "Scikit-learn", "Postman", "Swagger"];

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-radial-gradient">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Decorative Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-teal-500/10 blur-[140px] rounded-full pointer-events-none" />

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
              Hello, I'm <span className="text-zinc-100 font-bold">{personalInfo.name}</span>
            </p>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
              {personalInfo.title}
            </h1>

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
                <span>Explore Selected Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white hover:bg-zinc-800 transition-all duration-200 active:scale-95"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Contact Me</span>
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
                    Dao Duc Trung CV
                  </span>
                  <span className="text-[9px] text-emerald-500 mt-0.5 flex items-center gap-1 font-mono uppercase tracking-wider">
                    VIEW PDF
                    <ArrowRight className="w-2.5 h-2.5" />
                  </span>
                </div>
              </a>
            </div>

            {/* Quick Tech Highlights Badge List */}
            <div className="flex flex-col gap-3 w-full max-w-[600px]">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Core Tech Engine & Architecture
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

          {/* Right Hero Visual Card - Avatar */}
          <div className="lg:col-span-4 w-full flex justify-center lg:justify-end relative mt-12 lg:mt-0 max-w-sm mx-auto lg:max-w-none">
            <div className="w-full aspect-[3/4] bg-[#0f1118]/80 backdrop-blur-xl border border-zinc-800 rounded-2xl relative overflow-hidden flex items-center justify-center p-6 shadow-2xl group hover:border-zinc-700 transition-all duration-500">
              {/* Radial gradient background similar to the old client */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/40 via-zinc-900/40 to-black/80"></div>
              
              <div className="relative z-10 w-full h-full border border-zinc-700/50 rounded-xl flex items-center justify-center bg-zinc-900/50 overflow-hidden">
                <img 
                  src="/anhcv.jpg" 
                  alt="Portrait" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" 
                />
                {/* Subtle gradient overlay at bottom for blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
