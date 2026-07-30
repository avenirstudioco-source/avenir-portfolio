import Image from 'next/image'
import { Sparkle } from '@/components/sparkle'
import { Reveal } from '@/components/reveal'

type Project = {
  index: string
  category: string
  title: string
  description: string
  tags: string[]
  image: string
  imageAlt?: string
}

const projects: Project[] = [
  {
    index: '01',
    category: 'Real Estate · Sitio web',
    title: 'M1 Realty & Mortgage',
    description:
      'Landing dual para una práctica de real estate de lujo en California y su brazo de financiamiento. Fotografía en duotono cálido y titulares serif itálicos para transmitir sobriedad y trayectoria.',
    tags: ['Branding', 'UI Web', 'Dirección de arte'],
    image: '/projects/m1-realty.png',
  },
  {
    index: '02',
    category: 'Real Estate · Sitio web',
    title: 'Gold Real Estate',
    description:
      'Sitio institucional para una inmobiliaria con oficinas en Jerusalén y Afula. Hero nocturno con render arquitectónico y acento dorado para reforzar confianza frente a clientes internacionales.',
    tags: ['UI Web', 'Sistema de color'],
    image: '/projects/gold-real-estate.png',
  },
  {
    index: '03',
    category: 'Retail premium · Sitio web',
    title: 'Electro Boutique',
    description:
      'E-commerce de electrodomésticos y climatización de alta gama. Paleta oscura y cálida que pone el foco en la fotografía de producto, con atención personalizada vía WhatsApp integrada al flujo de compra.',
    tags: ['UI Web', 'E-commerce'],
    image: '/projects/electro-boutique.png',
  },
  {
    index: '04',
    category: 'Educación · Portal digital',
    title: 'UB Connect+',
    description:
      'Portal académico de acceso para alumnos, pensado para resolver un único gesto — iniciar sesión — de forma clara y directa, sin perder la identidad institucional de fondo.',
    tags: ['UI Web', 'Producto digital'],
    image: '/projects/ub-connect.png',
  },
  {
    index: '05',
    category: 'Indumentaria · E-commerce',
    title: 'Embroider Factory',
    description:
      'Tienda online de indumentaria personalizada — estampado, bordado y DTF. Layout claro orientado a conversión, con métricas de confianza sobre la mesa desde el primer scroll.',
    tags: ['UI Web', 'E-commerce'],
    image: '/projects/embroider-factory.png',
  },
  {
    index: '06',
    category: 'Lifestyle · Marketing hub',
    title: 'R&L Marketing',
    description:
      'Hub editorial para una agencia de marketing con foco en moda y belleza. Split hero que deja convivir dos mundos visuales — editorial de moda y beauty tech — bajo una misma identidad.',
    tags: ['UI Web', 'Dirección de arte'],
    image: '/ryl-marketing-new.png',
    imageAlt: 'Sitio web de R&L Marketing presentado en una computadora',
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-noir py-24 text-crema md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3 text-crema/60">
              <Sparkle className="h-3 w-3 text-rosa" />
              <span className="text-[0.65rem] font-light uppercase tracking-[0.4em]">
                Portfolio · 2026
              </span>
            </div>
            <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Trabajos <span className="italic text-rosa">seleccionados</span>
            </h2>
          </div>
          <p className="max-w-xs text-pretty text-sm font-light leading-relaxed text-crema/60">
            Seis proyectos donde marca, tecnología y futuro conviven bajo una
            misma identidad.
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
                  alt={project.imageAlt || `Vista del proyecto ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 font-serif text-sm tracking-[0.2em] text-crema/80 mix-blend-difference">
                  {project.index} / 06
                </span>
                {/* Hover overlay */}
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-noir/80 via-noir/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="flex items-center gap-2 p-6 text-[0.65rem] font-light uppercase tracking-[0.35em] text-crema">
                    <Sparkle className="h-3 w-3 text-rosa" />
                    Ver proyecto
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-[0.65rem] font-light uppercase tracking-[0.35em] text-rosa">
                  {project.category}
                </p>
                <h3 className="mt-3 font-serif text-3xl font-light tracking-tight transition-colors group-hover:text-rosa">
                  {project.title}
                </h3>
                <p className="mt-3 text-pretty text-sm font-light leading-relaxed text-crema/65">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) =>
                    (project.title === 'Embroider Factory' ||
                      project.title === 'R&L Marketing' ||
                      project.title === 'Electro Boutique' ||
                      project.title === 'Gold Real Estate') &&
                    tag === 'UI Web' ? (
                      <a
                        key={tag}
                        href={
                          project.title === 'R&L Marketing'
                            ? 'https://rel.marketing/rm-wishlist'
                            : project.title === 'Electro Boutique'
                              ? 'https://julietacwik.github.io/Electro-Boutique-/index.html'
                              : project.title === 'Gold Real Estate'
                                ? 'https://bgoldestate.com/'
                                : 'https://embroiderfactory.com/'
                        }
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
