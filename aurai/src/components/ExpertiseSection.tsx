import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Sparkles, Network, Layers, Database, Server, Check } from 'lucide-react';

export const ExpertiseSection: React.FC = () => {
  const { data, t } = useLanguage();
  const { expertiseAreas } = data;
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Network': return Network;
      case 'Layers': return Layers;
      case 'Database': return Database;
      case 'Server': return Server;
      default: return Network;
    }
  };

  return (
    <section id="expertise" className="py-24 bg-[#090b10] relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 px-3 py-1 bg-emerald-950/40 border border-emerald-500/20 rounded-full">

            <span>{t('expertise.header')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {t('expertise.title')}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            Deep technical domain expertise spanning low-latency distributed engines, robust storage layers, modern fullstack interfaces, and cloud native DevOps pipelines.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseAreas.map((area) => {
            const Icon = getIcon(area.iconName);
            return (
              <div
                key={area.id}
                className="bg-[#0e1017] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 hover:border-zinc-700 transition-all shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-emerald-300 transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-xs font-mono text-emerald-400 mb-4">
                    {area.tagline}
                  </p>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {area.description}
                  </p>

                  {/* Capabilities Bullet points */}
                  <div className="space-y-2.5 border-t border-zinc-800/80 pt-4">
                    {area.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
