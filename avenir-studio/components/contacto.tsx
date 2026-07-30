import { Sparkle } from '@/components/sparkle'
import { Reveal } from '@/components/reveal'

const INSTAGRAM_URL = 'https://instagram.com/avenir.studio.co'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  )
}

export function Contacto() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-noir py-24 text-crema md:py-36">
      <div
        aria-hidden="true"
        className="avenir-glow pointer-events-none absolute inset-x-0 top-0 h-1/2"
        style={{
          background:
            'radial-gradient(100% 80% at 70% -20%, oklch(0.68 0.12 8 / 0.5), transparent 60%)',
        }}
      />

      <Reveal className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="flex items-center justify-center gap-3 text-crema/60">
          <Sparkle className="h-3 w-3 text-rosa" />
          <span className="text-[0.65rem] font-light uppercase tracking-[0.4em]">
            ¿Empezamos?
          </span>
          <Sparkle className="h-3 w-3 text-rosa" />
        </div>

        <h2 className="mt-8 text-balance font-serif text-5xl font-light leading-[1] tracking-tight sm:text-6xl md:text-7xl">
          Tu marca, lista <br />
          <span className="italic text-rosa">para brillar.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-md text-pretty text-base font-light leading-relaxed text-crema/70">
          Diseñemos lo que sigue para tu marca. Escribinos por DM y contanos tu
          próximo proyecto.
        </p>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-12 inline-flex items-center gap-3 rounded-full bg-crema px-9 py-4 text-xs font-medium uppercase tracking-[0.28em] text-noir transition-transform hover:-translate-y-0.5"
        >
          <InstagramIcon className="h-5 w-5" />
          @avenir.studio.co
        </a>

        <p className="mt-6 text-[0.65rem] font-light uppercase tracking-[0.4em] text-crema/40">
          Escribinos por DM
        </p>
      </Reveal>
    </section>
  )
}
