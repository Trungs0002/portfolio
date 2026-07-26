import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Sparkles, Terminal, Code2 } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const TechStackSection: React.FC = () => {
  const { data, t } = useLanguage();
  const { techStackCategories } = data;
  return (
    <section id="tech-stack" className="py-24 bg-[#08090d] relative overflow-hidden">
      
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <SectionTitle
            as="h2"
            eyebrow={t('tech.header')}
            title={t('tech.title')}
          />
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-6 leading-relaxed">
            {t('tech.desc')}
          </p>
        </div>

        {/* Stack Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStackCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#0e1017] border border-zinc-800/90 rounded-2xl p-6 hover:border-zinc-700 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {cat.category}
                  </h3>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {cat.description}
                </p>

                {/* Tech Chips List */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-mono transition-colors ${
                        skill.highlight
                          ? 'bg-zinc-900/90 border-emerald-500/30 text-emerald-300'
                          : 'bg-zinc-900/40 border-zinc-800 text-zinc-300'
                      }`}
                    >
                      <span className="font-semibold">{skill.name}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded ${
                        skill.highlight
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-zinc-800 text-zinc-400'
                      }`}>
                        {skill.level || 'Production'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
