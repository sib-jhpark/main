import { ThemeLanguageProvider } from './context/ThemeLanguageContext';
import { TopNavBar } from './components/TopNavBar';
import { HeroBento } from './components/HeroBento';
import { TechStackSection } from './components/TechStackSection';
import { WritingSection } from './components/WritingSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function ProfileLayout() {
  return (
    <div className="min-h-screen bg-[#FBFBFD] dark:bg-black text-[#1D1D1F] dark:text-[#F5F5F7] flex flex-col font-sans selection:bg-[#0071E3]/15 selection:text-[#0071E3] transition-colors duration-300">
      <TopNavBar activeTab="home" />

      <main className="flex-1 w-full max-w-[1120px] mx-auto px-5 sm:px-8 pb-20 space-y-16 sm:space-y-20">
        <HeroBento />
        <TechStackSection />
        <WritingSection />
        <ExperienceSection />
        <ProjectsSection />
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
