import { Globe, Moon, Sun } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { profileData } from '../data/profile';

export type TopTabId = 'home' | 'two-state-mbrl' | 'sogs' | 'mapf-rl';

export interface NavItem {
  id: TopTabId;
  href: string;
  label: { ko: string; en: string };
}

/**
 * Top-level GNB items.
 * 추후 새로운 상위 페이지/탭을 추가할 때 이 배열에 항목을 추가하면 됩니다.
 */
export const NAV_ITEMS: NavItem[] = [
  { id: 'home', href: '#home', label: { ko: '홈', en: 'Home' } },
  {
    id: 'two-state-mbrl',
    href: '#two-state-mbrl',
    label: { ko: 'Two-State MBRL', en: 'Two-State MBRL' },
  },
  { id: 'sogs', href: '#sogs', label: { ko: 'SOGS', en: 'SOGS' } },
  { id: 'mapf-rl', href: '#mapf-rl', label: { ko: 'MAPF-RL', en: 'MAPF-RL' } },
];

interface TopNavBarProps {
  activeTab: TopTabId;
  onSelectTab: (tab: TopTabId) => void;
}

export function TopNavBar({ activeTab, onSelectTab }: TopNavBarProps) {
  const { theme, language, toggleTheme, toggleLanguage, pick } = useThemeLanguage();

  return (
    <header className="sticky top-0 z-40 glass-panel transition-colors duration-300">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-8 flex flex-wrap md:flex-nowrap items-center justify-between md:h-[52px] md:gap-4">
        {/* Left: Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onSelectTab('home');
          }}
          className="order-1 h-[46px] md:h-auto flex items-center gap-2.5 group focus:outline-none shrink-0"
        >
          <span className="font-bold tracking-tight text-[15px] text-[#0071E3] dark:text-[#2997FF]">
            {profileData.brand}
          </span>
          <span className="hidden sm:inline text-xs font-medium text-[#86868B] group-hover:text-[#1D1D1F] dark:group-hover:text-[#F5F5F7] transition-colors">
            {pick(profileData.name)}
          </span>
        </a>

        {/* Center (Desktop) / Second Row (Mobile): Top-Level GNB */}
        <nav
          aria-label="Primary"
          className="order-3 md:order-2 w-full md:w-auto border-t border-black/[0.05] dark:border-white/[0.06] md:border-t-0 flex items-center h-[40px] md:h-full gap-0.5 sm:gap-1 overflow-x-auto no-scrollbar"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectTab(item.id);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative h-full px-2.5 sm:px-3.5 flex items-center text-[12.5px] sm:text-[13px] font-semibold whitespace-nowrap transition-colors shrink-0 ${
                  isActive
                    ? 'text-[#0071E3] dark:text-[#2997FF]'
                    : 'text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
                }`}
              >
                {pick(item.label)}
                {isActive && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 sm:left-3 sm:right-3 h-[2px] rounded-full bg-[#0071E3] dark:bg-[#2997FF]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Language & Theme Controls */}
        <div className="order-2 md:order-3 h-[46px] md:h-auto flex items-center gap-2 shrink-0">
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
        </div>
      </div>
    </header>
  );
}
