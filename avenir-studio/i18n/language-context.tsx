'use client'

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { isLanguage, translations, type Language } from '@/i18n/translations'

const STORAGE_KEY = 'avenir-language'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: (typeof translations)[Language]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es')

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(STORAGE_KEY)
    if (isLanguage(savedLanguage)) setLanguageState(savedLanguage)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem(STORAGE_KEY, language)

    if (window.location.pathname === '/') {
      document.title = translations[language].seo.title
      const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
      description?.setAttribute('content', translations[language].seo.description)
    }
  }, [language])

  const value = useMemo(
    () => ({ language, setLanguage: setLanguageState, t: translations[language] }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
