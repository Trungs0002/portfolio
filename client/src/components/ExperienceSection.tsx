import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Sparkles, Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const ExperienceSection: React.FC = () => {
  const { data, t } = useLanguage();
  const { experiences } = data;
  return (
    <section id="experience" className="py-24 bg-[#08090d] relative overflow-hidden">
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <SectionTitle
            as="h2"
            eyebrow={t('exp.header')}
            title={t('exp.title')}
          />
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l-2 border-zinc-800 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#08090d] border-2 border-emerald-400 group-hover:bg-emerald-400 group-hover:scale-125 transition-all duration-200" />

              {/* Experience Card */}
              <div className="bg-[#0e1017] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 hover:border-zinc-700 transition-all shadow-xl">
                
                {/* Role Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider block mb-1">
                      {exp.companyLogoText}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role} <span className="text-zinc-400 font-normal">@ {exp.companyUrl ? (
                        <a href={exp.companyUrl} target="_blank" rel="noreferrer" className="hover:text-emerald-400 underline decoration-emerald-500/30 underline-offset-4 transition-colors">
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}</span>
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full text-zinc-300">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full text-zinc-300">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Achievements Bullet Points */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                    Key Deliverables & System Impact
                  </h4>
                  <ul className="space-y-2">
                    {exp.keyAchievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Employed */}
                <div className="pt-4 border-t border-zinc-800/80">
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
