import en from '@src/libs/i18n/locales/en.json';
import fr from '@src/libs/i18n/locales/fr.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// For all options read: https://www.i18next.com/overview/configuration-options
i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'fr',
        debug: false,
        supportedLngs: ['fr', 'en'],
        resources: {
            'fr': { translation: fr },
            'en': { translation: en },
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        keySeparator: false,
        react: {
            transSupportBasicHtmlNodes: true,
            transKeepBasicHtmlNodesFor: ['br'],
        },
    });

export default i18n;
