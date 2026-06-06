import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './locales/en/common.json';
import enHero from './locales/en/hero.json';
import enAbout from './locales/en/about.json';
import enExperience from './locales/en/experience.json';
import enEducation from './locales/en/education.json';
import enSkills from './locales/en/skills.json';

import zhCNCommon from './locales/zh-CN/common.json';
import zhCNHero from './locales/zh-CN/hero.json';
import zhCNAbout from './locales/zh-CN/about.json';
import zhCNExperience from './locales/zh-CN/experience.json';
import zhCNEducation from './locales/zh-CN/education.json';
import zhCNSkills from './locales/zh-CN/skills.json';

import zhHKCommon from './locales/zh-HK/common.json';
import zhHKHero from './locales/zh-HK/hero.json';
import zhHKAbout from './locales/zh-HK/about.json';
import zhHKExperience from './locales/zh-HK/experience.json';
import zhHKEducation from './locales/zh-HK/education.json';
import zhHKSkills from './locales/zh-HK/skills.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        hero: enHero,
        about: enAbout,
        experience: enExperience,
        education: enEducation,
        skills: enSkills,
      },
      'zh-CN': {
        common: zhCNCommon,
        hero: zhCNHero,
        about: zhCNAbout,
        experience: zhCNExperience,
        education: zhCNEducation,
        skills: zhCNSkills,
      },
      'zh-HK': {
        common: zhHKCommon,
        hero: zhHKHero,
        about: zhHKAbout,
        experience: zhHKExperience,
        education: zhHKEducation,
        skills: zhHKSkills,
      },
    },
    fallbackLng: 'en',
    defaultNS: 'common',
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lang',
      lookupLocalStorage: 'cv-lang',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
