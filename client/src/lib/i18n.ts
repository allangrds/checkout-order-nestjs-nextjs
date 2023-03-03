import i18n, { InitOptions } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

const baseConfig: InitOptions = {
  keySeparator: false,
  nsSeparator: false,
  fallbackLng: 'en',
  backend: {
    loadPath: './locales/{{lng}}/{{ns}}.json',
  },
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  lng: 'en',
}

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(baseConfig)

export default i18n

export {}
