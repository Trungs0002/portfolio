import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Sparkles, Users, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const LeadershipSection: React.FC = () => {
  const { data, t } = useLanguage();
  const { leadershipActivities } = data;
  return (
    <section id="leadership" className="py-20 bg-[#090b10] relative overflow-hidden">
      
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <SectionTitle
            as="h2"
            eyebrow={t('lead.header')}
            title={t('lead.title')}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadershipActivities.map((activity) => (
            <div
              key={activity.id}
              className="bg-[#0e1017] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-zinc-500">
                    {activity.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                  {activity.title}
                </h3>

                <p className="text-xs font-mono text-emerald-400 mb-3">
                  {activity.organization}
                </p>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                  {activity.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-zinc-800/80">
                  {activity.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
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
