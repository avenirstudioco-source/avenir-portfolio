'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Estudio', href: '#estudio' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node
      if (menuRef.current && !menuRef.current.contains(target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', onPointerDown)
    return () => document.removeEventListener('mousedown', onPointerDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
          scrolled
            ? 'border-b border-border/60 bg-crema/85 text-foreground backdrop-blur-md'
            : 'border-b border-transparent text-crema',
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="group inline-flex items-center gap-2.5 leading-none"
            aria-label="Abrir menú de navegación"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-noir p-1.5">
              <Image
                src="/avenir-mark.png"
                alt="Avenir Studio"
                width={320}
                height={310}
                className="h-full w-full object-contain"
                priority
              />
            </span>
            <span className="flex flex-col text-left">
              <span className="font-serif text-lg font-medium tracking-[0.4em]">AVENIR</span>
              <span className="text-[0.5rem] font-light tracking-[0.5em] text-rosa">STUDIO</span>
            </span>
          </button>

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

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-noir/30 backdrop-blur-[2px]">
          <div
            ref={menuRef}
            className="ml-auto flex h-full w-full max-w-sm flex-col border-l border-border bg-crema p-6 text-foreground shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border/60 pb-5">
              <span className="text-[0.62rem] font-light uppercase tracking-[0.4em] text-foreground/70">
                Menú
              </span>
              <button
                type="button"
                onClick={closeMenu}
                className="text-[0.62rem] font-light uppercase tracking-[0.4em] text-foreground/70"
              >
                Cerrar
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-4" aria-label="Menú de navegación">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-sm font-light uppercase tracking-[0.28em] text-foreground/85 transition-colors hover:text-rosa"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/login"
                onClick={closeMenu}
                className="text-sm font-light uppercase tracking-[0.28em] text-foreground/60 transition-colors hover:text-rosa"
              >
                Log in
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
