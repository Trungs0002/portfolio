import React from 'react';
import './index.css';

function App() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl glass-nav rounded-lg shadow-2xl flex justify-between items-center px-8 py-4 z-50 transition-all duration-300">
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
        <button className="md:hidden text-on-surface">
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-40 pb-[200px] px-6 md:px-12 lg:px-16 overflow-hidden bg-surface" id="hero">
          <div className="hero-bg"></div>
          <div className="kinetic-element"></div>
          <div className="max-w-7xl mx-auto w-full grid-12 items-center relative z-10">
            <div className="col-span-12 lg:col-span-8 flex flex-col items-start gap-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-md bg-surface-container/50 border border-white/5 font-label text-xs text-on-surface-variant">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                AVAILABLE FOR NEW OPPORTUNITIES
              </div>
              <h1 className="font-headline text-[4rem] md:text-[6rem] leading-[1.05] text-on-surface">
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
              <div className="grid grid-cols-2 gap-12 mt-12 pt-10 border-t border-white/5 w-full max-w-lg">
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
            <div className="col-span-12 lg:col-span-4 hidden lg:flex justify-end relative">
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

        {/* Projects Section */}
        <section className="py-[160px] px-6 md:px-12 lg:px-16 bg-surface relative border-t border-white/5" id="projects">
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

                    <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                      <div className="font-label text-[10px] text-on-surface-variant/70 w-20 flex-shrink-0 pt-1 uppercase tracking-widest">Frontend</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 leading-none">Next.js</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 leading-none">React</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 leading-none">TypeScript</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 leading-none">TailwindCSS</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 leading-none">RadixUI</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 leading-none">Zod</span>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                      <div className="font-label text-[10px] text-on-surface-variant/70 w-20 flex-shrink-0 pt-1 uppercase tracking-widest">Backend</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 leading-none">Flask</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 leading-none">PyMongo</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 leading-none">Pydantic</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 leading-none">Prometheus</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 leading-none">Gunicorn</span>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                      <div className="font-label text-[10px] text-on-surface-variant/70 w-20 flex-shrink-0 pt-1 uppercase tracking-widest">AI / LLM</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 leading-none">OpenRouter</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 leading-none">CircuitBreaker</span>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                      <div className="font-label text-[10px] text-on-surface-variant/70 w-20 flex-shrink-0 pt-1 uppercase tracking-widest">Docs</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-500 leading-none">PyMuPDF</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-500 leading-none">Pillow</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-500 leading-none">python-docx</span>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                      <div className="font-label text-[10px] text-on-surface-variant/70 w-20 flex-shrink-0 pt-1 uppercase tracking-widest">Auth</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-rose-500/10 border border-rose-500/20 text-rose-400 leading-none">Supabase</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-rose-500/10 border border-rose-500/20 text-rose-400 leading-none">Google OAuth</span>
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-rose-500/10 border border-rose-500/20 text-rose-400 leading-none">JWT</span>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                      <div className="font-label text-[10px] text-on-surface-variant/70 w-20 flex-shrink-0 pt-1 uppercase tracking-widest">Infra</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-slate-400/10 border border-slate-400/20 text-slate-300 leading-none">SimpleTaskManager</span>
                      </div>
                    </div>

                  </div>
                  <h3 className="font-headline text-3xl font-medium text-on-surface mb-4 group-hover:text-primary transition-colors">VLU Smart CV (https://vlusmartcv.com/)</h3>
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
            
            <a href="mailto:Trungdaoduc2k2@gmail.com" className="btn-primary flex items-center justify-center gap-2 text-sm px-8 py-4 shrink-0">
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
