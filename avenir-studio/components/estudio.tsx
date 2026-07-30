import { Sparkle } from '@/components/sparkle'
import { Reveal } from '@/components/reveal'

const palette = [
  { name: 'Noir', code: '#14110F', className: 'bg-noir' },
  { name: 'Rosa', code: '#C97B8E', className: 'bg-rosa' },
  { name: 'Blush', code: '#E9CDD1', className: 'bg-blush' },
  { name: 'Crema', code: '#F3ECE3', className: 'bg-crema border border-border' },
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
              Diseñamos marcas e interfaces que se sienten{' '}
              <span className="italic text-rosa">inevitables.</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-pretty text-base font-light leading-relaxed text-foreground/75">
              Avenir Studio es un estudio de diseño enfocado en identidad de marca
              y experiencias web. Trabajamos con negocios que buscan una imagen
              prolija y atemporal: de la construcción del logo a la puesta en
              pantalla, cuidamos cada detalle tipográfico, cromático y de layout
              para que la marca se sostenga en el tiempo.
            </p>
            <p className="mt-6 font-serif text-2xl italic text-foreground/90">
              Menos, pero mejor.
            </p>
          </div>
        </Reveal>

        {/* Palette */}
        <Reveal className="mt-20 border-t border-border pt-10" delay={120}>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-serif text-2xl tracking-[0.15em]">La paleta</p>
              <p className="mt-1 text-[0.65rem] font-light uppercase tracking-[0.4em] text-muted-foreground">
                Color story
              </p>
            </div>
            <div className="flex gap-8">
              {palette.map((c) => (
                <div key={c.name} className="group/swatch flex flex-col items-center gap-3">
                  <span
                    className={`h-12 w-12 rounded-full transition-transform duration-500 group-hover/swatch:-translate-y-1 group-hover/swatch:scale-110 ${c.className}`}
                    aria-hidden="true"
                  />
                  <div className="text-center">
                    <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em]">
                      {c.name}
                    </p>
                    <p className="text-[0.6rem] font-light tracking-[0.15em] text-muted-foreground">
                      {c.code}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
