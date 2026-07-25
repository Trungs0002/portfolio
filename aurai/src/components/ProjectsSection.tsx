import React, { useState } from 'react';
import { selectedProjects, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { Sparkles, ArrowUpRight, Github, ExternalLink, Filter, Code2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Distributed Systems', 'Fullstack Platform', 'Infrastructure & Cloud', 'Developer Tooling'];

  const filteredProjects = selectedCategory === 'All'
    ? selectedProjects
    : selectedProjects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-[#090b10] relative">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 px-3 py-1 bg-emerald-950/40 border border-emerald-500/20 rounded-full w-fit">

              <span>02 // SELECTED ENGINEERING WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Featured Systems & Projects
            </h2>
          </div>

          <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
            High-scale backend architectures, real-time analytics platforms, and developer tooling built for production performance.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <Filter className="w-4 h-4 text-zinc-500 shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-zinc-950 font-bold shadow-lg shadow-emerald-500/20'
                  : 'bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0e1017] border border-zinc-800/90 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 group flex flex-col justify-between shadow-xl"
            >
              
              <div>
                {/* Cover Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-zinc-950">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-black/30" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-emerald-300 text-[11px] font-mono">
                      {project.category}
                    </span>
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono font-semibold">
                        FLAGSHIP
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-8">
                  
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 mb-6">
                    {project.impactMetrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <span className="text-xs sm:text-sm font-bold font-mono text-emerald-400 block">
                          {metric.value}
                        </span>
                        <span className="text-[10px] text-zinc-400">
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
              <div className="px-6 sm:px-8 pb-6 pt-2 flex items-center justify-between border-t border-zinc-800/60 mt-auto">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  <Code2 className="w-4 h-4" />
                  <span>View System Details</span>
                </button>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
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
