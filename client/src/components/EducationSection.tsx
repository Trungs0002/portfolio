import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Sparkles, GraduationCap, BookOpen, Award } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const EducationSection: React.FC = () => {
  const { data, t } = useLanguage();
  const { educations } = data;
  return (
    <section id="education" className="py-20 bg-[#08090d] relative overflow-hidden border-t border-zinc-800/80">
      
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <SectionTitle
            as="h2"
            eyebrow={t('edu.header')}
            title={t('edu.title')}
          />
        </div>

        <div className="space-y-6">
          {educations.map((edu) => (
            <div
              key={edu.id}
              className="bg-[#0e1017] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div>
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">
                  {edu.degree}
                </h3>

                <p className="text-sm font-semibold text-zinc-300">
                  {edu.institution}
                </p>
              </div>

              <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 mt-2 md:mt-0 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-mono shrink-0 md:self-center self-start">
                <Award className="w-3.5 h-3.5" />
                <span>{edu.honors}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
