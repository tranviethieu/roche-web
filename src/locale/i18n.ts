import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../../public/static/langs/en.json';
import viTranslations from '../../public/static/langs/vi.json';
//import HttpApi from 'i18next-http-backend';
const savedLanguage = localStorage.getItem('language') || 'en';
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    vi: {
      translation: viTranslations,
    },
  },
  lng: savedLanguage, // default language
  fallbackLng: 'en', // fallback language
  interpolation: {
    escapeValue: false,
  },
});
// i18n
//   .use(HttpApi)
//   .use(initReactI18next)
//   .init({
//     lng: 'en', // default language
//     fallbackLng: 'en', // fallback language
//     interpolation: {
//       escapeValue: false, // react already safes from xss
//     },
//     backend: {
//       loadPath: 'http://localhost:3001/api/translations/{{lng}}', // API endpoint for translations
//       crossDomain: true,
//       parse: (data: any) => JSON.parse(data),
//     },
//   });
export default i18n;
///
export const listLanguges: {
  value: string;
  label: string;
}[] = [
  { value: 'vi', label: 'Việt Nam' },
  { value: 'en', label: 'English' },
];
