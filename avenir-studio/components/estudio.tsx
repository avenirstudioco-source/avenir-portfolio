'use client'

import { Sparkle } from '@/components/sparkle'
import { Reveal } from '@/components/reveal'
import { useLanguage } from '@/i18n/language-context'

export function Estudio() {
  const { t } = useLanguage()
  return (
    <section id="estudio" data-navbar-theme="light" className="relative bg-crema py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Sparkle className="h-3 w-3 text-rosa" />
          <span className="text-[0.65rem] font-light uppercase tracking-[0.4em]">
            {t.studio.eyebrow}
          </span>
        </div>

        <Reveal className="mt-10 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <h2 className="text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {t.studio.titleBefore}
              <span className="italic text-rosa">{t.studio.titleAccent}</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <div className="space-y-5 text-pretty text-base font-light leading-relaxed text-foreground/75">
              <p>
                {t.studio.paragraph1}
              </p>
              <p>
                {t.studio.paragraph2}
              </p>
            </div>
            <p className="mt-7 font-serif text-2xl italic text-foreground/90">
              {t.studio.highlight}
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-20 grid md:mt-24 md:grid-cols-3" delay={120}>
          {t.studio.pillars.map((service, index) => (
            <article
              key={service.title}
              className={`border-t border-border py-8 md:py-0 md:pt-8 ${
                index > 0
                  ? 'md:border-l md:pl-8 lg:pl-10'
                  : 'md:pr-8 lg:pr-10'
              } ${index === 1 ? 'md:pr-8 lg:pr-10' : ''}`}
            >
              <p className="text-[0.65rem] font-light tracking-[0.4em] text-rosa">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-5 font-serif text-2xl font-light">
                {service.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-foreground/70">
                {service.description}
              </p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
