import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Language, LocalizedText, Theme } from '../types/profile';

interface ThemeLanguageContextValue {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  toggleLanguage: () => void;
  pick: (text: LocalizedText) => string;
}

const ThemeLanguageContext = createContext<ThemeLanguageContextValue | null>(null);

const THEME_KEY = 'jhpark_theme';
const LANG_KEY = 'jhpark_lang';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
    if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) return 'dark';
  } catch {
    // ignore storage errors
  }
  return 'light';
}

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'ko' || saved === 'en') return saved;
  } catch {
    // ignore storage errors
  }
  return 'en';
}

export function ThemeLanguageProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem(LANG_KEY, language);
    } catch {
      // ignore storage errors
    }
  }, [language]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  const toggleLanguage = () => setLanguage((prev) => (prev === 'ko' ? 'en' : 'ko'));
  const pick = (text: LocalizedText) => text[language];

  return (
    <ThemeLanguageContext.Provider
      value={{ theme, language, toggleTheme, toggleLanguage, pick }}
    >
      {children}
    </ThemeLanguageContext.Provider>
  );
}

export function useThemeLanguage() {
  const ctx = useContext(ThemeLanguageContext);
  if (!ctx) {
    throw new Error('useThemeLanguage must be used within ThemeLanguageProvider');
  }
  return ctx;
}
