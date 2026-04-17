import React, { useState } from 'react';
import './index.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl glass-nav rounded-lg shadow-2xl flex justify-between items-center px-5 md:px-8 py-4 z-50 transition-all duration-300">
        <div className="text-xl font-headline font-semibold tracking-tight text-on-surface flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          Dao Duc Trung
        </div>
        <div className="hidden md:flex items-center gap-10 font-label text-xs tracking-widest text-on-surface-variant">
          <a className="text-primary transition-colors" href="about">ABOUT</a>
          {/* <a className="hover:text-on-surface transition-colors" href="#about">ABOUT</a> */}
          {/* <a className="hover:text-on-surface transition-colors" href="#experience">EXPERIENCE</a>
          <a className="hover:text-on-surface transition-colors" href="#skills">SKILLS</a> */}
          <a className="hover:text-on-surface transition-colors" href="projects">PROJECTS</a>
          {/* <a className="hover:text-on-surface transition-colors" href="#contact">CONTACT</a> */}
        </div>
        <a className="hidden md:inline-flex btn-ghost py-2 px-6 text-[10px]" href="contact">
          HIRE ME
        </a>
        <button className="md:hidden text-on-surface p-1" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="material-symbols-outlined text-2xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-[calc(100%+1rem)] left-0 w-full glass-panel border border-white/5 rounded-xl p-6 flex flex-col gap-6 md:hidden shadow-2xl z-[100] animate-in fade-in slide-in-from-top-4 duration-200">
            <a className="text-on-surface hover:text-primary transition-colors font-label text-sm tracking-widest" href="about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a>
            <a className="text-on-surface hover:text-primary transition-colors font-label text-sm tracking-widest" href="projects" onClick={() => setIsMobileMenuOpen(false)}>PROJECTS</a>
            <a className="btn-ghost py-3 px-6 text-[11px] w-full text-center mt-2" href="contact" onClick={() => setIsMobileMenuOpen(false)}>HIRE ME</a>
          </div>
        )}
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-40 pb-[200px] px-6 md:px-12 lg:px-16 overflow-hidden bg-surface" id="hero">
          <div className="hero-bg"></div>
          <div className="kinetic-element"></div>
          <div className="max-w-7xl mx-auto w-full grid-12 items-center relative z-10">
            <div className="col-span-12 lg:col-span-8 flex flex-col items-start gap-7 md:gap-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-md bg-surface-container/50 border border-white/5 font-label text-xs text-on-surface-variant">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                AVAILABLE FOR NEW OPPORTUNITIES
              </div>
              <h1 className="font-headline text-5xl md:text-[6rem] leading-[1.05] text-on-surface">
                Engineering <strong>Digital</strong> <br />
                Experiences.
              </h1>
              <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed font-light">
                Software Engineering student based in Ho Chi Minh City. I build scalable, high-performance web applications with a focus on refined user interfaces.
              </p>
              <div className="flex flex-wrap items-center gap-5 mt-2">
                <a className="btn-primary flex items-center gap-2 text-xs" href="projects">
                  Explore Work <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
                <a className="btn-ghost text-xs" href="contact">
                  Contact Me
                </a>
              </div>
              <div className="grid grid-cols-2 gap-6 md:gap-12 mt-10 md:mt-12 pt-8 md:pt-10 border-t border-white/5 w-full max-w-lg">
                <div className="flex flex-col gap-2">
                  <span className="font-label text-[10px] text-on-surface-variant/70">SPECIALIZATION</span>
                  <span className="font-body text-sm text-on-surface font-medium">Fullstack Development <br />&amp; UI Architecture</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-label text-[10px] text-on-surface-variant/70">BASE</span>
                  <span className="font-body text-sm text-on-surface font-medium">Ho Chi Minh City, <br />Vietnam</span>
                </div>
              </div>
            </div>
            {/* Minimalist Abstract Graphic instead of portrait */}
            <div className="col-span-12 lg:col-span-4 flex justify-center lg:justify-end relative mt-16 lg:mt-0 w-full max-w-sm mx-auto lg:max-w-none">
              <div className="w-full aspect-[3/4] glass-panel rounded-2xl relative overflow-hidden flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-container-high via-surface to-surface"></div>
                <div className="relative z-10 w-full h-full border border-white/5 rounded-xl flex items-center justify-center bg-surface/50 overflow-hidden">
                  {/* Portrait Photo */}
                  <img src="/anhcv.jpg" alt="Portrait" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
                </div>
                {/* Overlay Badge - CV Link */}
                <a
                  href="https://drive.google.com/file/d/1fuvLHmG-dnX-EasUDtKamKvWyOgpTP9Z/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-lg flex items-center gap-4 hover:bg-surface-container/80 transition-all cursor-pointer z-50 group border border-white/5 hover:border-primary/50"
                >
                  <div className="w-10 h-10 rounded-md bg-surface-container border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-primary text-xl">badge</span>
                  </div>
                  <div>
                    <div className="font-headline text-sm font-medium text-on-surface group-hover:text-primary transition-colors">Dao Duc Trung CV</div>
                    <div className="font-label text-[10px] text-primary mt-1 flex items-center gap-1">
                      OPEN GOOGLE DRIVE <span className="material-symbols-outlined text-[10px] ml-1">open_in_new</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee Section */}
        <section className="relative overflow-hidden py-10 border-t border-white/5 bg-surface hover-pause group flex items-center">
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>
          <div className="animate-marquee">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 px-6 items-center gap-12">
                {[
                  { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus" },
                  { name: "C#", icon: "https://cdn.simpleicons.org/c" },
                  { name: "Python", icon: "https://cdn.simpleicons.org/python" },
                  { name: "Golang", icon: "https://cdn.simpleicons.org/go" },
                  { name: "PHP", icon: "https://cdn.simpleicons.org/php" },
                  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
                  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5" },
                  { name: "CSS3", icon: "https://cdn.simpleicons.org/css" },
                  { name: "SQL", icon: "https://cdn.simpleicons.org/mysql" },
                  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
                  { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
                  { name: "AWS", icon: "https://cdn.simpleicons.org/icloud" },
                  { name: "Selenium", icon: "https://cdn.simpleicons.org/selenium" },
                  { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
                  { name: "UI Design", materialIcon: "design_services" },
                  { name: "UX Design", materialIcon: "touch_app" },
                  { name: "OOP", materialIcon: "data_object" },
                  { name: "Software Req.", materialIcon: "list_alt" },
                  { name: "Git", icon: "https://cdn.simpleicons.org/git" },
                  { name: "Postman", icon: "https://cdn.simpleicons.org/postman" },
                  { name: "Swagger", icon: "https://cdn.simpleicons.org/swagger" },
                  { name: "React", icon: "https://cdn.simpleicons.org/react" },
                  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
                ].map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-12 cursor-default opacity-50 hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center gap-4 text-on-surface hover:text-primary transition-colors duration-300 hover:[&>img]:grayscale-0 hover:[&>img]:opacity-100">
                      {tech.icon ? (
                        <img src={tech.icon} alt={tech.name} className="w-8 h-8 md:w-10 md:h-10 grayscale opacity-60 transition-all duration-300" />
                      ) : (
                        <span className="material-symbols-outlined text-3xl md:text-4xl opacity-60">{tech.materialIcon}</span>
                      )}
                      <span className="font-headline text-lg md:text-xl font-medium whitespace-nowrap uppercase tracking-widest">
                        {tech.name}
                      </span>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/10"></span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-24 md:py-[120px] px-6 md:px-12 lg:px-16 bg-surface relative border-t border-white/5" id="projects">
          <div className="max-w-7xl mx-auto">
            <div className="grid-12 mb-20 items-end">
              <div className="col-span-12 md:col-span-8">
                <h2 className="font-headline text-3xl md:text-5xl font-medium text-on-surface mb-6">My <strong>Work.</strong></h2>
                <p className="font-body text-lg text-on-surface-variant max-w-xl font-light">A collection of projects I have developed, showcasing my technical expertise and problem-solving capabilities.</p>
              </div>
              <div className="col-span-12 md:col-span-4 flex md:justify-end mt-8 md:mt-0">
                <a className="btn-ghost flex items-center gap-2 text-[10px] px-6 py-3" href="https://github.com/Trungs0002" target="_blank" rel="noopener noreferrer">
                  View GitHub <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </a>
              </div>
            </div>
            {/* Bento Box / Alternating Layout */}
            <div className="flex flex-col gap-12">
              {/* Project 1 : Large Feature */}
              <div className="project-card glass-panel rounded-2xl overflow-hidden flex flex-col lg:flex-row group w-full relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors duration-300"></div>
                <div className="w-full lg:w-[60%] aspect-video lg:aspect-auto relative overflow-hidden bg-surface-container-low border-r border-white/5">
                  <img alt="SkyCommerce Project" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="/vlucv.png" />
                  <div className="absolute inset-0 bg-gradient-to-r from-surface/50 to-transparent lg:hidden"></div>
                </div>
                <div className="w-full lg:w-[40%] p-8 lg:p-12 flex flex-col">
                  <div className="flex flex-col gap-4 mb-8 w-full border border-white/5 rounded-xl p-5 bg-surface-container/30">

                    <div className="grid grid-cols-[80px_1fr] items-start gap-2 md:gap-4 w-full">
                      <div className="font-label text-[10px] text-on-surface-variant/70 pt-1 uppercase tracking-widest">Frontend</div>
                      <div className="flex flex-wrap gap-2 flex-1 w-full">
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 leading-none">Next.js</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 leading-none">React</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 leading-none">TypeScript</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 leading-none">TailwindCSS</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 leading-none">RadixUI</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 leading-none">Zod</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-[80px_1fr] items-start gap-2 md:gap-4 w-full">
                      <div className="font-label text-[10px] text-on-surface-variant/70 pt-1 uppercase tracking-widest">Backend</div>
                      <div className="flex flex-wrap gap-2 flex-1 w-full">
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 leading-none">Flask</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 leading-none">PyMongo</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 leading-none">Pydantic</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 leading-none">Prometheus</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 leading-none">Gunicorn</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-[80px_1fr] items-start gap-2 md:gap-4 w-full">
                      <div className="font-label text-[10px] text-on-surface-variant/70 pt-1 uppercase tracking-widest">AI / LLM</div>
                      <div className="flex flex-wrap gap-2 flex-1 w-full">
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 leading-none">OpenRouter</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 leading-none">CircuitBreaker</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-[80px_1fr] items-start gap-2 md:gap-4 w-full">
                      <div className="font-label text-[10px] text-on-surface-variant/70 pt-1 uppercase tracking-widest">Docs</div>
                      <div className="flex flex-wrap gap-2 flex-1 w-full">
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-500 leading-none">PyMuPDF</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-500 leading-none">Pillow</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-500 leading-none">python-docx</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-[80px_1fr] items-start gap-2 md:gap-4 w-full">
                      <div className="font-label text-[10px] text-on-surface-variant/70 pt-1 uppercase tracking-widest">Auth</div>
                      <div className="flex flex-wrap gap-2 flex-1 w-full">
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-rose-500/10 border border-rose-500/20 text-rose-400 leading-none">Supabase</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-rose-500/10 border border-rose-500/20 text-rose-400 leading-none">Google OAuth</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-rose-500/10 border border-rose-500/20 text-rose-400 leading-none">JWT</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-[80px_1fr] items-start gap-2 md:gap-4 w-full">
                      <div className="font-label text-[10px] text-on-surface-variant/70 pt-1 uppercase tracking-widest">Infra</div>
                      <div className="flex flex-wrap gap-2 flex-1 w-full">
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-slate-400/10 border border-slate-400/20 text-slate-300 leading-none">SimpleTaskManager</span>
                      </div>
                    </div>

                  </div>
                  <h3 className="font-headline text-3xl font-medium text-on-surface mb-4 group-hover:text-primary transition-colors">VLU Smart CV (vlusmartcv.com)</h3>
                  <div className="font-label text-[13px] font-bold tracking-widest text-primary mb-6 flex items-center gap-2">
                    LEAD DEVELOPER
                  </div>
                  <ul className="font-body text-sm text-on-surface-variant mb-10 flex-grow font-light leading-relaxed space-y-2 list-disc pl-4">
                    <li>An AI-powered CV analysis platform where candidates upload resumes (PDF/image) for automated evaluation.</li>
                    <li>Processes documents via OpenRouter AI models to extract structured data and generate assessments, displayed on role-specific dashboards (Student, HR/Recruiter, Admin).</li>
                    <li>Secure authentication handled via Supabase and Google OAuth, syncing seamlessly with the backend for role-based routing.</li>
                  </ul>
                  <div className="flex items-center gap-4 mt-auto">
                    <a className="btn-primary py-2.5 px-6 text-[11px] flex-1 text-center whitespace-nowrap" href="https://vlusmartcv.com/" target="_blank" rel="noopener noreferrer">Live Deployment</a>
                    <a className="btn-ghost py-2.5 px-6 text-[11px] h-full flex items-center justify-center gap-2 whitespace-nowrap" href="https://youtu.be/6-4DrwzCnh0" target="_blank" rel="noopener noreferrer">
                      <span className="material-symbols-outlined text-sm">play_arrow</span> Demo
                    </a>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>
      </main>

      <footer className="relative bg-surface/80 border-t border-white/5 w-full pt-32 pb-12 px-6 md:px-12 lg:px-16 overflow-hidden" id="contact">
        {/* Subtle Background Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col gap-20 relative z-10">

          {/* Top Section - CTA & Brand */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-md bg-surface-container/50 border border-white/5 font-label text-xs text-on-surface-variant uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Actively seeking jobs
              </div>
              <h2 className="font-headline text-4xl md:text-6xl font-medium text-on-surface mb-6 leading-tight">
                Looking for your next <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Software Engineer?</span>
              </h2>
              <p className="font-body text-lg text-on-surface-variant max-w-xl font-light">
                I am currently looking for a full-time position where I can contribute my technical skills to build impactful products. If my profile aligns with your team, my inbox is open!
              </p>
            </div>

            <a href="mailto:Trungdaoduc2k2@gmail.com" className="btn-primary flex items-center justify-center gap-2 text-sm px-8 py-4 shrink-0 w-full md:w-auto">
              Get in touch <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-white/0 via-white/10 to-white/0"></div>

          {/* Bottom Section - Links & Copyright */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="text-xl font-headline font-semibold tracking-tight text-on-surface flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              Dao Duc Trung
            </div>

            <div className="flex flex-wrap justify-center gap-8 font-label text-[10px] tracking-widest text-on-surface-variant">
              <a className="hover:text-primary transition-colors" href="#linkedin">LINKEDIN</a>
              <a className="hover:text-primary transition-colors" href="https://github.com/Trungs0002" target="_blank" rel="noopener noreferrer">GITHUB</a>
              <a className="hover:text-primary transition-colors" href="#twitter">TWITTER</a>
              <a className="hover:text-primary transition-colors" href="#email">EMAIL</a>
            </div>

            <div className="font-label text-[10px] tracking-widest text-on-surface-variant/40 text-center lg:text-right flex flex-col gap-1">
              <span>© {new Date().getFullYear()} D.D.TRUNG. ALL RIGHTS RESERVED.</span>
              <span className="text-[8px]">ENGINEERED IN HCMC, VIETNAM.</span>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}

export default App;
