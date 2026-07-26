import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Project } from '../data/portfolioDataEN';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Github, ExternalLink, Filter, Code2 } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const ProjectsSection: React.FC = () => {
  const { data, t } = useLanguage();
  const { selectedProjects } = data;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', ...Array.from(new Set(selectedProjects.map(p => p.category)))];

  const filteredProjects = selectedCategory === 'All'
    ? selectedProjects
    : selectedProjects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-[#090b10] relative overflow-hidden">
      
      {/* Background decoration - Optimized for Safari (scaled up to match old blur spread) */}
      <div className="absolute top-1/3 right-0 translate-x-1/4 w-[740px] h-[740px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-emerald-500/5 to-transparent pointer-events-none rounded-full" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <SectionTitle
              as="h2"
              eyebrow={t('projects.header')}
              title={t('projects.title')}
            />
          </div>

          <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
            {t('projects.desc')}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2.5 pb-4 mb-10 border-b border-zinc-800/50">
          <div className="flex items-center justify-center w-10 h-10 bg-zinc-900/50 border border-zinc-800/80 rounded-xl mr-1 shrink-0" title={t('projects.filter')}>
            <Filter className="w-4 h-4 text-emerald-500" />
          </div>
          
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`h-10 px-4 inline-flex items-center justify-center rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-zinc-950 shadow-lg shadow-emerald-500/20 scale-105'
                  : 'bg-zinc-900/40 border border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-600 hover:bg-zinc-800'
              }`}
            >
              {cat === 'All' ? t('projects.all') : cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0e1017] border border-zinc-800/90 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 group flex flex-col justify-between shadow-xl"
            >
              
              <div>
                {/* Cover Image Container */}
                <div className="relative h-56 w-full overflow-hidden bg-zinc-950">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-[#0e1017]/80 to-transparent opacity-90" />
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 relative z-10 -mt-16">
                  
                  <div className="mb-5 flex flex-col items-start gap-2.5">
                    <div>
                      <p className="text-xs font-mono text-zinc-400 mb-1">
                        {project.subtitle}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors leading-snug">
                        {project.title}
                      </h3>
                    </div>
                    
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[10px] font-mono inline-block">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/80 mb-6 shadow-md">
                    {project.impactMetrics.map((metric, idx) => (
                      <div key={idx} className="text-center flex flex-col justify-center">
                        <span className="text-sm sm:text-base font-bold font-mono text-emerald-400 mb-0.5">
                          {metric.value}
                        </span>
                        <span className="text-[9px] sm:text-[10px] text-zinc-400 font-medium tracking-wide uppercase">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800/80 text-zinc-300 text-[11px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 sm:px-6 pb-6 pt-5 flex flex-wrap items-center gap-2 border-t border-zinc-800/60 mt-auto">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all whitespace-nowrap"
                >
                  <Code2 className="w-4 h-4 shrink-0" />
                  <span>{t('projects.view')}</span>
                </button>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-emerald-500 text-zinc-950 text-xs font-bold hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/10 whitespace-nowrap"
                  >
                    <span>{t('projects.visit')}</span>
                    <ExternalLink className="w-4 h-4 shrink-0" />
                  </a>
                )}
                
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors shrink-0"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

    </section>
  );
};
