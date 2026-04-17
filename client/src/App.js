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
          <a className="text-primary transition-colors" href="#hero">HERO</a>
          <a className="hover:text-on-surface transition-colors" href="#about">ABOUT</a>
          <a className="hover:text-on-surface transition-colors" href="#experience">EXPERIENCE</a>
          <a className="hover:text-on-surface transition-colors" href="#skills">SKILLS</a>
          <a className="hover:text-on-surface transition-colors" href="#projects">PROJECTS</a>
          <a className="hover:text-on-surface transition-colors" href="#contact">CONTACT</a>
        </div>
        <a className="hidden md:inline-flex btn-ghost py-2 px-6 text-[10px]" href="#contact">
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
                <a className="btn-primary flex items-center gap-2 text-xs" href="#projects">
                  Explore Work <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
                <a className="btn-ghost text-xs" href="#contact">
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
                  {/* Geometric wireframe suggestion */}
                  <svg className="w-full h-full opacity-20 text-primary" fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 100 100">
                    <path d="M10,50 L50,10 L90,50 L50,90 Z" strokeDasharray="2,2"></path>
                    <circle cx="50" cy="50" r="20" strokeDasharray="1,3"></circle>
                    <line x1="50" x2="50" y1="10" y2="90"></line>
                    <line x1="10" x2="90" y1="50" y2="50"></line>
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
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
                <h2 className="font-headline text-3xl md:text-5xl font-medium text-on-surface mb-6">Featured <strong>Deployments.</strong></h2>
                <p className="font-body text-lg text-on-surface-variant max-w-xl font-light">A curated selection of technical projects, demonstrating architecture, scale, and interface design.</p>
              </div>
              <div className="col-span-12 md:col-span-4 flex md:justify-end mt-8 md:mt-0">
                <a className="btn-ghost flex items-center gap-2 text-[10px] px-6 py-3" href="#github">
                  View Repository <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </a>
              </div>
            </div>
            {/* Bento Box / Alternating Layout */}
            <div className="flex flex-col gap-12">
              {/* Project 1 : Large Feature */}
              <div className="project-card glass-panel rounded-2xl overflow-hidden flex flex-col lg:flex-row group w-full relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors duration-300"></div>
                <div className="w-full lg:w-[60%] aspect-video lg:aspect-auto relative overflow-hidden bg-surface-container-low border-r border-white/5">
                  <img alt="SkyCommerce Project" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out mix-blend-lighten" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8D6LDjd1PiH555aQIq1g1uoY588kQ0OqMgtpX1qCViBesjzlp1je50fFS2mTLtKE87V9kVRC6vXcvUmVtYu41Uyn62ZXb7hSmTENDUNrCdZsivj3RtmV4isRo8MpEdmWRwkgCQ_Hte1Xol1BCPP1kAKxS30QLwz6yQ7k9-pQBQpAmQxGiANMpm4OvIRT4W1sYDIoK93ehYgmPGsiAOgzOccyEcnsPjyTeBkfs3EJDFS8niT9KbWl3v-p4XonU5mHFAgnJSqde5sFF" />
                  <div className="absolute inset-0 bg-gradient-to-r from-surface/50 to-transparent lg:hidden"></div>
                </div>
                <div className="w-full lg:w-[40%] p-8 lg:p-12 flex flex-col">
                  <div className="flex items-center gap-2 mb-8 flex-wrap">
                    <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-surface border border-white/10 text-on-surface-variant">React</span>
                    <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-surface border border-white/10 text-on-surface-variant">Node.js</span>
                    <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-surface border border-white/10 text-on-surface-variant">PostgreSQL</span>
                  </div>
                  <h3 className="font-headline text-3xl font-medium text-on-surface mb-4 group-hover:text-primary transition-colors">SkyCommerce</h3>
                  <div className="font-label text-[11px] text-on-surface-variant/70 mb-6 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary/50"></span>
                    LEAD DEVELOPER
                  </div>
                  <p className="font-body text-on-surface-variant mb-10 flex-grow font-light leading-relaxed">High-performance E-commerce platform architecture. Built for scale with advanced caching strategies and a modular micro-frontend approach.</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <a className="btn-primary py-2.5 px-6 text-[11px] flex-1 text-center" href="#live">Live Deployment</a>
                    <a className="w-11 h-11 rounded-sm border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300" href="#code" title="View Source">
                      <span className="material-symbols-outlined text-lg">code</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Grid for smaller projects */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Project 2 */}
                <div className="project-card glass-panel rounded-2xl overflow-hidden flex flex-col group relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-primary/0 group-hover:bg-primary transition-colors duration-300 z-20"></div>
                  <div className="aspect-video w-full overflow-hidden relative bg-surface-container-low border-b border-white/5">
                    <img alt="AutoTest Pro Project" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out mix-blend-lighten" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg6sHzk40K0QrOJnFVv9cvG14k-WShH83sE1vMbHyxXzyMfLlaK3WbouM6ymZgiyTWzeUA0_QTlbXr9kiXIbpQOXMEW8wYUyUyBODU03aKAOB-zF7RBC5ZrFiV0eotJeKAn_bKjdgarUi84S0gRbD3pqpOS_N4zSyBRBDOv1NMdCgH_MRy3GjHvuT86mPS5hZjMWimEGWi6FyXN9quvJx81e9FivI_pB1_PZ9CaB9O4yBaqsT4tXaR-_UIVs6mS8ksXW-TEPck-bjE" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-6 flex-wrap">
                      <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-surface border border-white/10 text-on-surface-variant">Python</span>
                      <span className="tag-pill font-label text-[10px] px-2.5 py-1 rounded bg-surface border border-white/10 text-on-surface-variant">Selenium</span>
                    </div>
                    <h3 className="font-headline text-2xl font-medium text-on-surface mb-3 group-hover:text-primary transition-colors">AutoTest Pro</h3>
                    <div className="font-label text-[11px] text-on-surface-variant/70 mb-4 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary/50"></span>
                      QA ENGINEER
                    </div>
                    <p className="font-body text-sm text-on-surface-variant mb-8 flex-grow font-light leading-relaxed">Enterprise-grade Selenium automation framework tailored for complex web applications, reducing regression testing time by 40%.</p>
                    <div className="flex gap-4 mt-auto">
                      <a className="btn-ghost py-2.5 px-6 text-[11px] w-full text-center" href="#case">Read Case Study</a>
                    </div>
                  </div>
                </div>
                {/* Placeholder for Project 3 */}
                <div className="project-card glass-panel rounded-2xl overflow-hidden flex flex-col group relative border border-white/5 border-dashed bg-surface/30">
                  <div className="flex-grow flex flex-col items-center justify-center p-12 text-center min-h-[400px]">
                    <div className="w-16 h-16 rounded-full bg-surface-container border border-white/5 flex items-center justify-center mb-6 text-on-surface-variant group-hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                    </div>
                    <h3 className="font-headline text-xl font-medium text-on-surface mb-3">In Development</h3>
                    <p className="font-body text-sm text-on-surface-variant font-light max-w-xs">Currently engineering a new microservice architecture project. Check back soon.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface border-t border-white/5 w-full py-12 px-6 md:px-12 lg:px-16 pt-[160px] pb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-lg font-headline font-semibold text-on-surface flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            Đào Đức Trung
          </div>
          <div className="flex flex-wrap justify-center gap-8 font-label text-[10px] tracking-widest text-on-surface-variant">
            <a className="hover:text-primary transition-colors" href="#linkedin">LINKEDIN</a>
            <a className="hover:text-primary transition-colors" href="#github">GITHUB</a>
            <a className="hover:text-primary transition-colors" href="#twitter">TWITTER</a>
            <a className="hover:text-primary transition-colors" href="#email">EMAIL</a>
          </div>
          <div className="font-label text-[10px] tracking-widest text-on-surface-variant/50 text-center md:text-right">
            © 2024 ĐÀO ĐỨC TRUNG. BUILT WITH KINETIC ARCHITECTURE.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
