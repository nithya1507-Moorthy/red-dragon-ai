'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from './types';
import { TRANSLATIONS, AppTranslations } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: AppTranslations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: TRANSLATIONS.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('upi_safety_coach_lang') as Language;
      if (saved === 'en' || saved === 'ta') {
        setLanguageState(saved);
      }
    } catch {
      // ignore in environments without localStorage
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('upi_safety_coach_lang', lang);
    } catch {
      // ignore
    }
  };

  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
