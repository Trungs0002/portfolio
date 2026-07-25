import React, { useState } from 'react';
import { X, ExternalLink, Github, Check, Cpu, Server, Layers } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      
      {/* Fixed Close Button - Always visible regardless of scroll */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 z-[60] p-2.5 rounded-full bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800/80 transition-all backdrop-blur-xl shadow-2xl hover:scale-110"
        aria-label="Close modal"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <div 
        className="bg-[#0e1017] border border-zinc-800 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header Image */}
        <div className="relative h-48 sm:h-64 w-full overflow-hidden rounded-t-2xl shrink-0">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-[#0e1017]/40 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 pr-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-2">
              {project.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] sm:text-xs font-mono inline-block">
                {project.category}
              </span>
              <p className="text-zinc-400 text-xs sm:text-sm font-medium">
                {project.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Role & Description */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
              <Server className="w-4 h-4" />
              <span>{project.role}</span>
            </div>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
              {project.description}
            </p>
            
            {/* Project Gallery (Demo Images & GIFs) */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="grid grid-cols-1 gap-4 mt-6">
                {project.gallery.map((img, i) => (
                  <div 
                    key={i} 
                    className="rounded-2xl overflow-hidden border border-zinc-800/80 shadow-2xl bg-zinc-900 cursor-zoom-in group relative"
                    onClick={() => setZoomedImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`Demo ${i + 1}`} 
                      className="w-full h-auto object-cover max-h-[500px] group-hover:opacity-90 transition-opacity" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
                      <span className="opacity-0 group-hover:opacity-100 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-md transition-opacity">
                        Click to zoom
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Impact Metrics Grid */}
          <div className="flex flex-wrap gap-2 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
            {project.impactMetrics.map((metric, i) => (
              <div key={i} className="flex-1 min-w-[80px] text-center">
                <span className="text-lg font-bold font-mono text-emerald-400 block mb-1">
                  {metric.value}
                </span>
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-medium">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Architecture & Engineering Highlights */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider mb-6 flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-400" />
              <span>Chi tiết Dự án & Thành tựu</span>
            </h4>
            
            <div className="space-y-0">
              {project.architectureDetails.map((detail, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex flex-col items-center mt-1">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                    {index !== project.architectureDetails.length - 1 && (
                      <div className="w-px flex-1 bg-zinc-800/80 my-2 group-hover:bg-emerald-500/50 transition-colors" />
                    )}
                  </div>
                  <div className="pb-6 text-sm sm:text-base text-zinc-300 leading-relaxed -mt-1">
                    {detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase font-mono tracking-wider mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Công nghệ sử dụng</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-zinc-800/80">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-zinc-950 text-sm font-bold hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20 whitespace-nowrap"
              >
                <span>Truy cập Website</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm font-semibold hover:text-white hover:border-zinc-700 transition-colors whitespace-nowrap"
              >
                <Github className="w-4 h-4 shrink-0" />
                <span>Mã nguồn</span>
              </a>
            )}
          </div>

        </div>

      </div>

      {/* Fullscreen Image Lightbox */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 cursor-zoom-out animate-in fade-in duration-200"
          onClick={(e) => {
            e.stopPropagation();
            setZoomedImage(null);
          }}
        >
          <img 
            src={zoomedImage} 
            alt="Zoomed full screen" 
            className="w-full h-full object-contain rounded-xl shadow-2xl"
          />
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              setZoomedImage(null);
            }}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-colors"
            aria-label="Close fullscreen image"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      )}

    </div>
  );
};
