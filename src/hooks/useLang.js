// src/hooks/useLang.js
import { useState, createContext, useContext } from 'react';
import translations from '../locales/translations.js';

export const LangContext = createContext(null);

export function useLang() {
  return useContext(LangContext);
}

export function useLangState() {
  const [lang, setLang] = useState('en');

  const t = translations[lang];
  const isRTL = lang === 'ar';

  return { lang, setLang, t, isRTL };
}
