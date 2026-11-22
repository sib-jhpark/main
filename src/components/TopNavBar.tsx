import { useState } from 'react';
import { Globe, Menu, Moon, Sun, X } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { profileData } from '../data/profile';

export interface NavItem {
  id: string;
  label: { ko: string; en: string };
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: { ko: '소개', en: 'About' } },
  { id: 'projects', label: { ko: '프로젝트', en: 'Projects' } },
  { id: 'experience', label: { ko: '경력', en: 'Experience' } },
  { id: 'stack', label: { ko: '기술 스택', en: 'Stack' } },
  { id: 'writing', label: { ko: '논문 · 수상', en: 'Research' } },
  { id: 'contact', label: { ko: '연락처', en: 'Contact' } },
];

interface TopNavBarProps {
  activeSection: string;
}

export function TopNavBar({ activeSection }: TopNavBarProps) {
  const { theme, language, toggleTheme, toggleLanguage, pick } = useThemeLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 glass-panel transition-colors duration-300">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8 h-[52px] flex items-center justify-between gap-4">
        {/* Left: Brand Wordmark (matching SOGS style) */}
        <a
          href="#about"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <span className="font-bold tracking-tight text-[15px] text-[#0071E3] dark:text-[#2997FF]">
            {profileData.brand}
          </span>
          <span className="hidden sm:inline text-xs font-medium text-[#86868B] group-hover:text-[#1D1D1F] dark:group-hover:text-[#F5F5F7] transition-colors">
            {pick(profileData.name)}
          </span>
        </a>

        {/* Center: Desktop Section Navigation */}
        <nav aria-label="Primary" className="hidden md:flex items-center h-full gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative h-full px-3 flex items-center text-[13px] font-medium transition-colors ${
                  isActive
                    ? 'text-[#0071E3] dark:text-[#2997FF]'
                    : 'text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
                }`}
              >
                {pick(item.label)}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#0071E3] dark:bg-[#2997FF]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Language & Theme Controls + Mobile Toggle */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="h-7 px-2.5 rounded-full flex items-center gap-1 text-[11px] font-bold bg-[#F5F5F7] dark:bg-[#1C1C1E] text-[#1D1D1F] dark:text-[#F5F5F7] hover:bg-[#EBEBED] dark:hover:bg-[#2C2C2E] border border-black/[0.06] dark:border-white/[0.08] transition-all select-none"
            title={language === 'ko' ? 'Switch to English' : '한국어로 전환'}
            aria-label="Toggle language"
          >
            <Globe className="w-3 h-3 text-[#0071E3] dark:text-[#2997FF]" />
            <span>{language === 'ko' ? 'EN' : 'KO'}</span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="w-7 h-7 rounded-full flex items-center justify-center text-[#1D1D1F] dark:text-[#F5F5F7] bg-[#F5F5F7] dark:bg-[#1C1C1E] hover:bg-[#EBEBED] dark:hover:bg-[#2C2C2E] border border-black/[0.06] dark:border-white/[0.08] transition-all select-none"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-3.5 h-3.5 text-[#1D1D1F]" />
            ) : (
              <Sun className="w-3.5 h-3.5 text-[#FFD60A]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden w-7 h-7 rounded-full flex items-center justify-center text-[#1D1D1F] dark:text-[#F5F5F7] bg-[#F5F5F7] dark:bg-[#1C1C1E] border border-black/[0.06] dark:border-white/[0.08]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileOpen && (
        <nav
          aria-label="Mobile"
          className="md:hidden border-t border-black/[0.05] dark:border-white/[0.08] bg-[#FBFBFD]/95 dark:bg-black/95 px-5 py-3"
        >
          <div className="flex flex-wrap gap-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-[#0071E3] text-white'
                      : 'bg-[#F5F5F7] dark:bg-[#1C1C1E] text-[#1D1D1F] dark:text-[#F5F5F7]'
                  }`}
                >
                  {pick(item.label)}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
