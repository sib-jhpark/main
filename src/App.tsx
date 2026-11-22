import { useEffect, useState } from 'react';
import { ThemeLanguageProvider } from './context/ThemeLanguageContext';
import { TopNavBar, type TopTabId } from './components/TopNavBar';
import { HeroBento } from './components/HeroBento';
import { TechStackSection } from './components/TechStackSection';
import { WritingSection } from './components/WritingSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { TwoStateMbrlPage } from './components/TwoStateMbrlPage';
import { SogsPage } from './components/SogsPage';
import { MapfPage } from './components/MapfPage';
import { DeckTemplatePage } from './components/DeckTemplatePage';
import { Footer } from './components/Footer';

function getTabFromHash(): TopTabId {
  if (typeof window === 'undefined') return 'home';
  if (window.location.hash === '#two-state-mbrl') return 'two-state-mbrl';
  if (window.location.hash === '#sogs') return 'sogs';
  if (window.location.hash === '#mapf-rl') return 'mapf-rl';
  if (window.location.hash === '#deck-template') return 'deck-template';
  return 'home';
}

function ProfileLayout() {
  const [activeTab, setActiveTab] = useState<TopTabId>(getTabFromHash);

  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash === '#two-state-mbrl') {
        setActiveTab('two-state-mbrl');
      } else if (window.location.hash === '#sogs') {
        setActiveTab('sogs');
      } else if (window.location.hash === '#mapf-rl') {
        setActiveTab('mapf-rl');
      } else if (window.location.hash === '#deck-template') {
        setActiveTab('deck-template');
      } else if (window.location.hash === '#home' || window.location.hash === '') {
        setActiveTab('home');
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const preventImageSave = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (target && target.tagName === 'IMG') {
        e.preventDefault();
      }
    };
    document.addEventListener('contextmenu', preventImageSave);
    document.addEventListener('dragstart', preventImageSave);
    return () => {
      document.removeEventListener('contextmenu', preventImageSave);
      document.removeEventListener('dragstart', preventImageSave);
    };
  }, []);

  const handleSelectTab = (tab: TopTabId) => {
    setActiveTab(tab);
    const nextHash = `#${tab}`;
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, '', nextHash);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD] dark:bg-black text-[#1D1D1F] dark:text-[#F5F5F7] flex flex-col font-sans selection:bg-[#0071E3]/15 selection:text-[#0071E3] transition-colors duration-300">
      <TopNavBar activeTab={activeTab} onSelectTab={handleSelectTab} />

      <main className="flex-1 w-full max-w-[1120px] mx-auto px-5 sm:px-8 pb-20">
        {activeTab === 'two-state-mbrl' ? (
          <TwoStateMbrlPage />
        ) : activeTab === 'sogs' ? (
          <SogsPage />
        ) : activeTab === 'mapf-rl' ? (
          <MapfPage />
        ) : activeTab === 'deck-template' ? (
          <DeckTemplatePage />
        ) : (
          <div className="space-y-16 sm:space-y-20">
            <HeroBento />
            <TechStackSection />
            <WritingSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
          </div>
        )}
      </main>

      <Footer onSelectTab={handleSelectTab} />
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
