import { Sparkle } from '@/components/sparkle'

const phrases = [
  'Diseñamos el futuro',
  'Menos, pero mejor',
  'Buen diseño, mejores resultados',
  'Tu marca merece destacarse',
  'Estrategia · Diseño · Experiencia',
]

export function Marquee() {
  // Duplicated once so the -50% translate loops seamlessly.
  const sequence = [...phrases, ...phrases]

  return (
    <div
      className="relative flex overflow-hidden border-y border-crema/10 bg-noir py-6 text-crema select-none"
      aria-hidden="true"
    >
      <div className="avenir-marquee-track flex shrink-0 items-center whitespace-nowrap">
        {sequence.map((phrase, i) => (
          <div key={`${phrase}-${i}`} className="flex items-center">
            <span className="px-8 font-serif text-2xl font-light italic tracking-tight text-crema/80 md:text-3xl">
              {phrase}
            </span>
            <Sparkle className="h-3.5 w-3.5 shrink-0 text-rosa" />
          </div>
        ))}
      </div>
    </div>
  )
}
