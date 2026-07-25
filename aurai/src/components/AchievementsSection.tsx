import React from 'react';
import { achievements } from '../data/portfolioData';
import { Sparkles, Award, ExternalLink, ShieldCheck, Mic, BookOpen } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-24 bg-[#090b10] relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 px-3 py-1 bg-emerald-950/40 border border-emerald-500/20 rounded-full">

            <span>06 // CERTIFICATIONS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Achievements & Public Speaking
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className="bg-[#0e1017] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 hover:border-zinc-700 transition-all shadow-xl group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                  {ach.badgeText || 'Achievement'}
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  {ach.year}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight mb-1 group-hover:text-emerald-300 transition-colors">
                {ach.title}
              </h3>

              <p className="text-xs font-mono text-zinc-400 mb-3">
                Issuer: {ach.issuer}
              </p>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {ach.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
