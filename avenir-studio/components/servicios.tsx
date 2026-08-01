'use client'

import { Sparkle } from '@/components/sparkle'
import { Reveal } from '@/components/reveal'
import { useLanguage } from '@/i18n/language-context'

export function Servicios() {
  const { t } = useLanguage()
  return (
    <section id="servicios" data-navbar-theme="light" className="relative bg-crema py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Sparkle className="h-3 w-3 text-rosa" />
          <span className="text-[0.65rem] font-light uppercase tracking-[0.4em]">
            {t.services.eyebrow}
          </span>
        </div>

        <h2 className="mt-6 max-w-2xl text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          {t.services.titleBefore}
          <span className="italic text-rosa">{t.services.titleAccent}</span>
        </h2>

        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {t.services.cards.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 120}
              className="group flex flex-col bg-card p-8 transition-colors duration-500 hover:bg-noir hover:text-crema md:p-10"
            >
              <span className="font-serif text-2xl text-rosa transition-transform duration-500 group-hover:-translate-y-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-6 font-serif text-3xl font-light tracking-tight">
                {service.title}
              </h3>
              <p className="mt-4 flex-1 text-pretty text-sm font-light leading-relaxed text-muted-foreground transition-colors group-hover:text-crema/70">
                {service.description}
              </p>
              <ul className="mt-8 space-y-3 border-t border-border pt-6 transition-colors group-hover:border-crema/15">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-xs font-light uppercase tracking-[0.2em]"
                  >
                    <Sparkle className="h-2.5 w-2.5 text-rosa" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
