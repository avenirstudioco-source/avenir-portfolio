'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Estudio', href: '#estudio' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        scrolled
          ? 'border-b border-border/60 bg-crema/85 text-foreground backdrop-blur-md'
          : 'border-b border-transparent text-crema',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20">
        <a
          href="#top"
          className="group inline-flex items-center gap-3 leading-none"
          aria-label="Avenir Studio, ir al inicio"
        >
          <Image
            src="/avenir-monogram.png"
            alt="Logo de Avenir Studio"
            width={805}
            height={742}
            className="h-auto w-7 shrink-0 object-contain md:w-9"
            priority
          />
          <span className="flex flex-col">
            <span className="font-serif text-lg font-medium tracking-[0.4em]">AVENIR</span>
            <span className="text-[0.5rem] font-light tracking-[0.5em] text-rosa">STUDIO</span>
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-light uppercase tracking-[0.28em] opacity-70 transition-opacity hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://instagram.com/avenir.studio.co"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'hidden items-center rounded-full border px-5 py-2 text-xs font-light uppercase tracking-[0.28em] transition-colors md:inline-flex',
            scrolled
              ? 'border-foreground/25 hover:bg-foreground hover:text-crema'
              : 'border-crema/30 hover:bg-crema hover:text-noir',
          )}
        >
          Trabajemos
        </a>

        <a
          href="#contacto"
          className="text-xs font-light uppercase tracking-[0.28em] md:hidden"
        >
          Contacto
        </a>
      </div>
    </header>
  )
}
