'use client'

import Image from 'next/image'
import { Sparkle } from '@/components/sparkle'
import { Reveal } from '@/components/reveal'
import { useLanguage } from '@/i18n/language-context'

type ProjectId = 'm1' | 'gold' | 'electro' | 'ub' | 'embroider' | 'rl'
type Project = {
  id: ProjectId
  index: string
  title: string
  image: string
  webUrl?: string
}

const projects: Project[] = [
  {
    id: 'm1',
    index: '01',
    title: 'M1 Realty & Mortgage',
    image: '/m1-realty-mortgage-mockup.png',
    webUrl: 'https://m1-prime-mortgage.lovable.app/',
  },
  {
    id: 'gold',
    index: '02',
    title: 'Gold Real Estate',
    image: '/gold-real-estate-new.png',
    webUrl: 'https://bgoldestate.com/',
  },
  {
    id: 'electro',
    index: '03',
    title: 'Electro Boutique',
    image: '/electro-boutique-new.png',
    webUrl: 'https://julietacwik.github.io/Electro-Boutique-/index.html',
  },
  {
    id: 'ub',
    index: '04',
    title: 'UB Connect+',
    image: '/projects/ub-connect.png',
  },
  {
    id: 'embroider',
    index: '05',
    title: 'Embroider Factory',
    image: '/embroider-factory-mockup.png',
    webUrl: 'https://embroiderfactory.com/',
  },
  {
    id: 'rl',
    index: '06',
    title: 'R&L Marketing',
    image: '/ryl-marketing-new.png',
    webUrl: 'https://rel.marketing/rm-wishlist',
  },
]

export function Portfolio() {
  const { t } = useLanguage()
  return (
    <section id="portfolio" data-navbar-theme="dark" className="relative bg-noir py-24 text-crema md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3 text-crema/60">
              <Sparkle className="h-3 w-3 text-rosa" />
              <span className="text-[0.65rem] font-light uppercase tracking-[0.4em]">
                {t.portfolio.eyebrow}
              </span>
            </div>
            <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {t.portfolio.titleBefore}<span className="italic text-rosa">{t.portfolio.titleAccent}</span>
            </h2>
          </div>
          <p className="max-w-xs text-pretty text-sm font-light leading-relaxed text-crema/60">
            {t.portfolio.intro}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              as="article"
              key={project.index}
              delay={(i % 2) * 120}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-crema/5">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.id === 'rl' ? t.portfolio.projects.rl.imageAlt : `${t.portfolio.imageAlt} ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-noir/80 via-noir/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="flex items-center gap-2 p-6 text-[0.65rem] font-light uppercase tracking-[0.35em] text-crema">
                    <Sparkle className="h-3 w-3 text-rosa" />
                    {t.portfolio.viewProject}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-[0.65rem] font-light uppercase tracking-[0.35em] text-rosa">
                  {t.portfolio.projects[project.id].category}
                </p>
                <h3 className="mt-3 font-serif text-3xl font-light tracking-tight transition-colors group-hover:text-rosa">
                  {project.title}
                </h3>
                <p className="mt-3 text-pretty text-sm font-light leading-relaxed text-crema/65">
                  {t.portfolio.projects[project.id].description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {t.portfolio.projects[project.id].tags.map((tag, tagIndex) =>
                    project.webUrl && tagIndex === (project.id === 'm1' ? 1 : 0) ? (
                      <a
                        key={tag}
                        href={project.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer rounded-full border border-crema/20 px-3 py-1 text-[0.6rem] font-light uppercase tracking-[0.2em] text-crema/70 transition-colors hover:border-rosa/60 hover:text-rosa"
                      >
                        {tag}
                      </a>
                    ) : (
                      <span
                        key={tag}
                        className="rounded-full border border-crema/20 px-3 py-1 text-[0.6rem] font-light uppercase tracking-[0.2em] text-crema/70"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
