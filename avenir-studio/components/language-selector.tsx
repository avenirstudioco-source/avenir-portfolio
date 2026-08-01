'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { languages, type Language } from '@/i18n/translations'
import { useLanguage } from '@/i18n/language-context'

export function LanguageSelector({
  theme = 'dark',
  placement = 'bottom',
}: {
  theme?: 'dark' | 'light'
  placement?: 'top' | 'bottom'
}) {
  const { language, setLanguage, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!open) return
    const close = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [open])

  function selectLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage)
    setOpen(false)
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label={t.nav.selectLanguage}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={(event) => event.key === 'Escape' && setOpen(false)}
        className={cn(
          'inline-flex h-9 min-w-11 items-center justify-center rounded-full border px-3 text-[0.62rem] font-light uppercase tracking-[0.2em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosa',
          theme === 'light'
            ? 'border-foreground/20 text-foreground hover:bg-foreground hover:text-crema'
            : 'border-crema/25 text-crema hover:bg-crema hover:text-noir',
        )}
      >
        {language.toUpperCase()}
      </button>

      {open && (
        <div
          role="menu"
          aria-label={t.nav.language}
          className={cn(
            'absolute right-0 z-[70] min-w-20 overflow-hidden rounded-xl border py-1 shadow-xl backdrop-blur-md',
            placement === 'top'
              ? 'bottom-[calc(100%+0.5rem)]'
              : 'top-[calc(100%+0.5rem)]',
            theme === 'light'
              ? 'border-border bg-crema/95 text-foreground'
              : 'border-crema/15 bg-noir/95 text-crema',
          )}
        >
          {languages.map((option) => (
            <button
              key={option}
              type="button"
              role="menuitemradio"
              aria-checked={language === option}
              onClick={() => selectLanguage(option)}
              className={cn(
                'block w-full px-4 py-2 text-left text-[0.62rem] font-light uppercase tracking-[0.2em] transition-colors focus-visible:bg-rosa/15 focus-visible:outline-none hover:bg-rosa/15',
                language === option && 'text-rosa',
              )}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
