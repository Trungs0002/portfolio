import React from 'react';
import { X, ExternalLink, Github, Check, Cpu, Server, Layers } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="bg-[#0e1017] border border-zinc-800 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col">
        
        {/* Modal Header Image */}
        <div className="relative h-56 sm:h-72 w-full overflow-hidden rounded-t-2xl">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-[#0e1017]/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-zinc-950/80 text-zinc-300 hover:text-white hover:bg-zinc-900 border border-zinc-800 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-2 inline-block">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-zinc-400 text-sm font-medium">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Role & Description */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
              <Server className="w-4 h-4 text-emerald-400" />
              <span>ROLE: {project.role}</span>
            </div>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Impact Metrics Grid */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
            {project.impactMetrics.map((metric, i) => (
              <div key={i} className="text-center">
                <span className="text-lg sm:text-xl font-bold font-mono text-emerald-400 block">
                  {metric.value}
                </span>
                <span className="text-[11px] text-zinc-400 font-medium">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Architecture & Engineering Highlights */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span>System Architecture & Highlights</span>
            </h4>
            <ul className="space-y-2.5">
              {project.architectureDetails.map((detail, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Badges */}
          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase font-mono tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Technologies & Tools</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-zinc-800/80">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs font-semibold hover:text-white hover:border-zinc-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-zinc-950 text-xs font-bold hover:bg-emerald-400 transition-colors"
              >
                <span>Live Project Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
