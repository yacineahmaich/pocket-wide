import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import lngDetector from 'i18next-browser-languagedetector';

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .use(lngDetector)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr', 'ar'],
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    debug: true,
  });
