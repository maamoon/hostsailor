import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import ar from './locales/ar.json';
import en from './locales/en.json';
import cn from './locales/cn.json';
import ru from './locales/ru.json';

const resources = {
  ar: {
    translation: ar
  },
  en: {
    translation: en
  },
  cn: {
    translation: cn
  },
  ru: {
    translation: ru
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar',
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n; 