'use client'

import { useLanguage } from '@/i18n/language-context'

export function LoginHeader() {
  const { t } = useLanguage()

  return (
    <div className="mb-10 flex flex-col items-center gap-4 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-crema/5 p-2.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/avenir-mark.png" alt="Avenir Studio" className="h-full w-full object-contain" />
      </span>
      <div>
        <p className="text-[0.62rem] font-light uppercase tracking-[0.4em] text-crema/50">
          {t.auth.adminPanel}
        </p>
        <h1 className="mt-2 font-serif text-2xl font-light tracking-tight">
          {t.auth.signInTitle}
        </h1>
      </div>
    </div>
  )
}
