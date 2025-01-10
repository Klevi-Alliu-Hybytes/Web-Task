import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // For loading translations from the file system
import LanguageDetector from 'i18next-browser-languagedetector'; // Automatically detects user's language

i18n
    .use(Backend) // To load translations from the public/locales folder
    .use(LanguageDetector) // Automatically detects the user's language (en, ar)
    .use(initReactI18next) // Integrates i18next with React
    .init({
        fallbackLng: 'en', // Default language if the current language is not available
        debug: true, // Enable debug for better insights into issues
        interpolation: {
            escapeValue: false, // React already escapes values
        },
        backend: {
            loadPath: '/locales/{{lng}}/common.json', // Correct path with the dynamic language code
        },
        react: {
            useSuspense: false, // To avoid suspense issues if you're not using React Suspense
        },
    });

export default i18n; // Make sure it's correctly exported at the end
