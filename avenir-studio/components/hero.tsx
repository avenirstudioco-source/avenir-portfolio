import { Sparkle } from '@/components/sparkle'

const tags = ['Web Design', 'Development', 'AI Solutions']

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-noir text-crema"
    >
      {/* Pink aurora glow */}
      <div
        aria-hidden="true"
        className="avenir-glow pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
        style={{
          background:
            'radial-gradient(120% 80% at 30% 120%, oklch(0.68 0.12 8 / 0.55), transparent 60%)',
        }}
      />
      <div
        aria-hidden="true"
        className="avenir-glow pointer-events-none absolute -right-20 top-1/4 h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{
          background: 'radial-gradient(circle, oklch(0.7 0.1 8 / 0.5), transparent 70%)',
          animationDelay: '-4s',
        }}
      />
      {/* Faint decorative twinkles */}
      <Sparkle
        aria-hidden="true"
        className="avenir-twinkle absolute right-[12%] top-[22%] hidden h-4 w-4 text-rosa/70 md:block"
      />
      <Sparkle
        aria-hidden="true"
        className="avenir-twinkle absolute left-[8%] top-1/2 hidden h-3 w-3 text-rosa/50 md:block"
        style={{ animationDelay: '-2s' }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-28 pb-16 md:pt-32">
        <div className="avenir-enter flex items-center gap-3 text-crema/60">
          <Sparkle className="h-3 w-3 text-rosa" />
          <span className="text-[0.65rem] font-light uppercase tracking-[0.4em]">
            Buenos Aires — Argentina
          </span>
        </div>

        <h1 className="mt-8 text-balance font-serif text-6xl font-light leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-[8.5rem]">
          <span
            className="avenir-enter inline-block"
            style={{ animationDelay: '0.1s' }}
          >
            Diseñamos <span className="italic text-rosa">el futuro</span>
          </span>
          <br />
          <span
            className="avenir-enter inline-block"
            style={{ animationDelay: '0.22s' }}
          >
            de tu marca.
          </span>
        </h1>

        <p
          className="avenir-enter mt-8 max-w-xl text-pretty text-base font-light leading-relaxed text-crema/70 md:text-lg"
          style={{ animationDelay: '0.34s' }}
        >
          Estudio de diseño de identidad de marca y experiencias web. Creamos
          interfaces que se sienten inevitables — claras hoy, vigentes mañana.
        </p>

        <div
          className="avenir-enter mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: '0.46s' }}
        >
          <a
            href="#portfolio"
            className="inline-flex items-center rounded-full bg-crema px-8 py-3.5 text-xs font-medium uppercase tracking-[0.28em] text-noir transition-transform hover:-translate-y-0.5"
          >
            Ver portfolio
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center rounded-full border border-crema/25 px-8 py-3.5 text-xs font-light uppercase tracking-[0.28em] text-crema transition-colors hover:bg-crema/10"
          >
            Empecemos
          </a>
        </div>
      </div>

      {/* Bottom tag strip */}
      <div className="relative border-t border-crema/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 py-5 md:justify-start">
          {tags.map((tag, i) => (
            <div key={tag} className="flex items-center gap-6">
              {i > 0 && <Sparkle className="h-3 w-3 text-rosa" />}
              <span className="text-[0.65rem] font-light uppercase tracking-[0.35em] text-crema/70">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
