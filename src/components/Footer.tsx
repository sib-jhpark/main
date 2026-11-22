import { Globe, Moon, Sun } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { profileData } from '../data/profile';
import { NAV_ITEMS, type TopTabId } from './TopNavBar';

interface FooterProps {
  onSelectTab: (tab: TopTabId) => void;
}

export function Footer({ onSelectTab }: FooterProps) {
  const { theme, language, toggleTheme, toggleLanguage, pick } = useThemeLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[0.04] dark:border-white/[0.08] bg-[#FBFBFD] dark:bg-black py-8 px-5 sm:px-8 text-xs text-[#86868B] transition-colors duration-300">
      <div className="max-w-[1120px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Copyright */}
        <div className="font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
          © <span className="font-mono tabular-nums">{year}</span> {pick(profileData.name)}.{' '}
          <span className="font-normal text-[#86868B]">
            {language === 'ko' ? 'All rights reserved.' : 'All rights reserved.'}
          </span>
        </div>

        {/* Right: Single-Line Quick Links & Controls (matching SOGS footer) */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          <nav aria-label="Footer" className="flex items-center gap-4 sm:gap-5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectTab(item.id);
                }}
                className="hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors"
              >
                {pick(item.label)}
              </a>
            ))}
          </nav>

          <span className="hidden sm:inline text-[#D2D2D7] dark:text-[#3A3A3C]">|</span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              className="h-7 px-2.5 rounded-full flex items-center gap-1 text-[11px] font-bold bg-[#F5F5F7] dark:bg-[#1C1C1E] text-[#1D1D1F] dark:text-[#F5F5F7] hover:bg-[#EBEBED] dark:hover:bg-[#2C2C2E] border border-black/[0.06] dark:border-white/[0.08] transition-all select-none"
              title={language === 'ko' ? 'Switch to English' : '한국어로 전환'}
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
          </div>
        </div>
      </div>
    </footer>
  );
}
