import React from 'react';
import { educations } from '../data/portfolioData';
import { Sparkles, GraduationCap, BookOpen, Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#08090d] relative border-t border-zinc-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 px-3 py-1 bg-emerald-950/40 border border-emerald-500/20 rounded-full">

            <span>07 // ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & Coursework
          </h2>
        </div>

        <div className="space-y-6">
          {educations.map((edu) => (
            <div
              key={edu.id}
              className="bg-[#0e1017] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              <div>
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">
                  {edu.degree}
                </h3>

                <p className="text-sm font-semibold text-zinc-300 mb-2">
                  {edu.institution}
                </p>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-mono mb-4">
                  <Award className="w-3.5 h-3.5" />
                  <span>{edu.honors}</span>
                </div>

                <div>
                  <span className="text-xs font-mono text-zinc-400 block mb-2 uppercase tracking-wider">
                    Relevant Coursework:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {edu.keyCoursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono"
                      >
                        {course}
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
