import React from 'react';
import { impactStats } from '../data/portfolioData';
import { ShieldCheck, Zap, TrendingUp, Cpu, Terminal, Code2, Briefcase, Users } from 'lucide-react';

export const ImpactStats: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return ShieldCheck;
      case 'Zap': return Zap;
      case 'TrendingUp': return TrendingUp;
      case 'Cpu': return Cpu;
      case 'Terminal': return Terminal;
      case 'Code2': return Code2;
      case 'Briefcase': return Briefcase;
      case 'Users': return Users;
      default: return Zap;
    }
  };

  return (
    <section className="py-12 bg-[#0b0d13] border-y border-zinc-800/80 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat) => {
            const Icon = getIcon(stat.iconName);
            return (
              <div
                key={stat.id}
                className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 hover:border-emerald-500/40 hover:bg-zinc-900/90 transition-all duration-300 group shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                    #{stat.id}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono mb-1 text-emerald-400">
                  {stat.metric}
                </div>

                <div className="text-sm font-semibold text-zinc-200 mb-2">
                  {stat.label}
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
