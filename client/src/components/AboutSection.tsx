import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Terminal, CheckCircle2, Sparkles, Code2, MapPin, Briefcase } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { data, t } = useLanguage();
  const { aboutData, personalInfo } = data;
  return (
    <section id="about" className="py-24 bg-[#08090d] relative overflow-hidden">

      {/* Decorative bg light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 px-3 py-1 bg-emerald-950/40 border border-emerald-500/20 rounded-full">

            <span>{t('about.header')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight max-w-3xl leading-tight">
            {aboutData.headline}
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Bio Column */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed">
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-zinc-300/90 font-normal">
                {paragraph}
              </p>
            ))}

            {/* Quick Metadata Box */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-zinc-800/80 mt-8">
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
                <span className="text-xs text-zinc-500 font-mono block mb-1">{t('about.location')}</span>
                <span className="text-sm font-semibold text-zinc-200 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  {personalInfo.location}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
                <span className="text-xs text-zinc-500 font-mono block mb-1">{t('about.experience')}</span>
                <span className="text-sm font-semibold text-zinc-200 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  {t('about.projects')}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 col-span-2 sm:col-span-1">
                <span className="text-xs text-zinc-500 font-mono block mb-1">{t('about.role')}</span>
                <span className="text-sm font-semibold text-zinc-200 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  {t('about.dev')}
                </span>
              </div>
            </div>
          </div>

          {/* Principles Column */}
          <div className="lg:col-span-5 bg-[#0e1017] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 shadow-xl relative">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-zinc-800/80">
              <Terminal className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg font-bold text-white tracking-tight">
                {t('about.principles')}
              </h3>
            </div>

            <div className="space-y-6">
              {aboutData.engineeringPrinciples.map((principle, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-100 mb-1 group-hover:text-emerald-300 transition-colors">
                      {principle.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
