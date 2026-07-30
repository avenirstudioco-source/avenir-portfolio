import { Sparkle } from '@/components/sparkle'
import { Reveal } from '@/components/reveal'

const services = [
  {
    number: '01',
    title: 'Identidad de marca',
    description:
      'Logotipo, sistema cromático, tipografía y lineamientos de uso. Construimos una identidad prolija y atemporal, lista para sostenerse en el tiempo.',
    items: ['Logotipo & marca', 'Sistema cromático', 'Tipografía', 'Brand guidelines'],
  },
  {
    number: '02',
    title: 'Diseño web',
    description:
      'Sitios a medida, desde el concepto visual hasta la maquetación. Interfaces claras, rápidas y pensadas para convertir sin resignar estética.',
    items: ['Diseño UI/UX', 'Landing pages', 'E-commerce', 'Desarrollo'],
  },
  {
    number: '03',
    title: 'Dirección de arte',
    description:
      'Curaduría visual para redes, fotografía de producto y campañas. Una mirada editorial que mantiene coherente cada punto de contacto de la marca.',
    items: ['Curaduría visual', 'Redes sociales', 'Fotografía', 'Campañas'],
  },
]

export function Servicios() {
  return (
    <section id="servicios" className="relative bg-crema py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Sparkle className="h-3 w-3 text-rosa" />
          <span className="text-[0.65rem] font-light uppercase tracking-[0.4em]">
            Servicios
          </span>
        </div>

        <h2 className="mt-6 max-w-2xl text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          Todo lo que tu marca necesita, en un{' '}
          <span className="italic text-rosa">solo lugar.</span>
        </h2>

        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.number}
              delay={i * 120}
              className="group flex flex-col bg-card p-8 transition-colors duration-500 hover:bg-noir hover:text-crema md:p-10"
            >
              <span className="font-serif text-2xl text-rosa transition-transform duration-500 group-hover:-translate-y-1">
                {service.number}
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
