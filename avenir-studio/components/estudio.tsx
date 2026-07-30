import { Sparkle } from '@/components/sparkle'
import { Reveal } from '@/components/reveal'

const services = [
  {
    number: '01',
    title: 'Estrategia',
    description:
      'Definimos una dirección clara antes de diseñar, para que cada decisión tenga un propósito.',
  },
  {
    number: '02',
    title: 'Identidad',
    description:
      'Creamos sistemas visuales coherentes, reconocibles y preparados para crecer junto con la marca.',
  },
  {
    number: '03',
    title: 'Experiencia web',
    description:
      'Diseñamos sitios funcionales, atractivos y fáciles de usar, cuidando cada detalle de la experiencia.',
  },
]

export function Estudio() {
  return (
    <section id="estudio" className="relative bg-crema py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Sparkle className="h-3 w-3 text-rosa" />
          <span className="text-[0.65rem] font-light uppercase tracking-[0.4em]">
            Sobre el estudio
          </span>
        </div>

        <Reveal className="mt-10 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <h2 className="text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Diseñamos marcas y experiencias digitales que se sienten{' '}
              <span className="italic text-rosa">inevitables.</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <div className="space-y-5 text-pretty text-base font-light leading-relaxed text-foreground/75">
              <p>
                Avenir Studio es un estudio creativo especializado en identidad de
                marca y diseño web. Transformamos ideas en sistemas visuales claros,
                coherentes y preparados para crecer.
              </p>
              <p>
                Trabajamos cada proyecto de forma personalizada, combinando
                estrategia, diseño y funcionalidad para construir marcas que no
                solo se vean bien, sino que también comuniquen, conecten y generen
                confianza.
              </p>
            </div>
            <p className="mt-7 font-serif text-2xl italic text-foreground/90">
              Menos ruido. Más intención.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-20 grid md:mt-24 md:grid-cols-3" delay={120}>
          {services.map((service, index) => (
            <article
              key={service.number}
              className={`border-t border-border py-8 md:py-0 md:pt-8 ${
                index > 0
                  ? 'md:border-l md:pl-8 lg:pl-10'
                  : 'md:pr-8 lg:pr-10'
              } ${index === 1 ? 'md:pr-8 lg:pr-10' : ''}`}
            >
              <p className="text-[0.65rem] font-light tracking-[0.4em] text-rosa">
                {service.number}
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
