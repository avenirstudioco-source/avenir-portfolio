import { cn } from '@/lib/utils'
import { Sparkle } from '@/components/sparkle'

export function Wordmark({
  className,
  showStudio = true,
}: {
  className?: string
  showStudio?: boolean
}) {
  return (
    <a
      href="#top"
      className={cn('group inline-flex items-center gap-2.5 leading-none', className)}
      aria-label="Avenir Studio, ir al inicio"
    >
      <Sparkle className="h-3.5 w-3.5 text-rosa transition-transform duration-500 group-hover:rotate-90" />
      <span className="flex flex-col">
        <span className="font-serif text-lg font-medium tracking-[0.4em]">AVENIR</span>
        {showStudio && (
          <span className="text-[0.5rem] font-light tracking-[0.5em] text-rosa">
            STUDIO
          </span>
        )}
      </span>
    </a>
  )
}
