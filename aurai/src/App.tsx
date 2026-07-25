import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactStats } from './components/ImpactStats';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { TechStackSection } from './components/TechStackSection';
import { AchievementsSection } from './components/AchievementsSection';
import { EducationSection } from './components/EducationSection';
import { LeadershipSection } from './components/LeadershipSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about',
        'projects',
        'experience',
        'expertise',
        'tech-stack',
        'achievements',
        'education',
        'leadership',
        'contact'
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Fixed Header Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <ImpactStats />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ExpertiseSection />
        <TechStackSection />
        <AchievementsSection />
        <EducationSection />
        <LeadershipSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
