'use client'

import { Wordmark } from '@/components/wordmark'
import { Sparkle } from '@/components/sparkle'
import { useLanguage } from '@/i18n/language-context'

export function SiteFooter() {
  const { t } = useLanguage()
  return (
    <footer data-navbar-theme="dark" className="bg-noir text-crema">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 border-t border-crema/10 pt-10 md:flex-row md:justify-between">
          <Wordmark className="text-crema" />

          <div className="flex items-center gap-5">
            {t.footer.meta.map((item, i) => (
              <div key={item} className="flex items-center gap-5">
                {i > 0 && <Sparkle className="h-2.5 w-2.5 text-rosa" />}
                <span className="text-[0.6rem] font-light uppercase tracking-[0.35em] text-crema/60">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <a
            href="https://instagram.com/avenir.studio.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.65rem] font-light uppercase tracking-[0.3em] text-crema/70 transition-colors hover:text-crema"
          >
            @avenir.studio.co
          </a>
        </div>

        <p className="mt-8 text-center text-[0.6rem] font-light uppercase tracking-[0.3em] text-crema/40 md:text-left">
          © {new Date().getFullYear()} Avenir Studio — {t.footer.copyright}
        </p>
      </div>
    </footer>
  )
}
