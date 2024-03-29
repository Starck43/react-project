import i18n from "i18next"

import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        supportedLngs: ["en", "ru"],
        lng: "ru",
        fallbackLng: "ru",
        defaultNS: "translation",
        interpolation: { escapeValue: false },
        lowerCaseLng: true,
        // react: {useSuspense: false},
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
            addPath: "/public/locales/{{lng}}/{{ns}}.json",
        },
    })

export { i18n }
