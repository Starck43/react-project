import i18n from "i18next"
import {initReactI18next} from "react-i18next"

import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"

i18n
    .use(Backend)
// detect user language
    .use(LanguageDetector)
// pass the i18n instance to react-i18next.
    .use(initReactI18next)
// init i18next
    .init({
        fallbackLng: "ru",
        debug: __IS_DEV__,
        defaultNS: "translation",
        interpolation: {escapeValue: true}, // not needed for react as it escapes by default
        lowerCaseLng: true,
        backend: {loadPath: "locales/{{lng}}/{{ns}}.json"},
    })

export default i18n
