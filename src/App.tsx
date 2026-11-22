import { useEffect, useState } from 'react';
import { ThemeLanguageProvider } from './context/ThemeLanguageContext';
import { NAV_ITEMS, TopNavBar } from './components/TopNavBar';
import { HeroBento } from './components/HeroBento';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TechStackSection } from './components/TechStackSection';
import { WritingSection } from './components/WritingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function ProfileLayout() {
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.1, 0.3, 0.6],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#FBFBFD] dark:bg-black text-[#1D1D1F] dark:text-[#F5F5F7] flex flex-col font-sans selection:bg-[#0071E3]/15 selection:text-[#0071E3] transition-colors duration-300">
      <TopNavBar activeSection={activeSection} />

      <main className="flex-1 w-full max-w-[1120px] mx-auto px-5 sm:px-8 pb-20 space-y-16 sm:space-y-20">
        <HeroBento />
        <ProjectsSection />
        <ExperienceSection />
        <TechStackSection />
        <WritingSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export function App() {
  return (
    <ThemeLanguageProvider>
      <ProfileLayout />
    </ThemeLanguageProvider>
  );
}

export default App;
