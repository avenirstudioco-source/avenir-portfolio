'use client'

import Image from 'next/image'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { LanguageSelector } from '@/components/language-selector'
import { useLanguage } from '@/i18n/language-context'

type NavbarTheme = 'dark' | 'light'

export function SiteHeader() {
  const { t } = useLanguage()
  const [navbarTheme, setNavbarTheme] = useState<NavbarTheme>('dark')
  const [atTop, setAtTop] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY <= 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useLayoutEffect(() => {
    const themedSections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-navbar-theme]'),
    )
    let observer: IntersectionObserver | null = null

    const updateTheme = () => {
      const detectionLine = headerRef.current?.getBoundingClientRect().height ?? 80
      const activeSection = themedSections.find((section) => {
        const rect = section.getBoundingClientRect()
        return rect.top <= detectionLine && rect.bottom > detectionLine
      })

      const theme = activeSection?.dataset.navbarTheme
      if (theme === 'dark' || theme === 'light') setNavbarTheme(theme)
    }

    const observeSections = () => {
      observer?.disconnect()

      const headerHeight = headerRef.current?.getBoundingClientRect().height ?? 80
      const bottomMargin = Math.max(0, window.innerHeight - headerHeight - 1)

      observer = new IntersectionObserver(updateTheme, {
        rootMargin: `-${headerHeight}px 0px -${bottomMargin}px 0px`,
        threshold: 0,
      })

      themedSections.forEach((section) => observer?.observe(section))
      updateTheme()
    }

    observeSections()
    window.addEventListener('resize', observeSections)

    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', observeSections)
    }
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
  const links = [
    { label: t.nav.studio, href: '#estudio' },
    { label: t.nav.portfolio, href: '#portfolio' },
    { label: t.nav.services, href: '#servicios' },
    { label: t.nav.contact, href: '#contacto' },
  ]

  return (
    <>
      <header
        ref={headerRef}
        data-theme={navbarTheme}
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,color,border-color] duration-300',
          navbarTheme === 'light'
            ? 'navbar-light border-border/60 bg-crema/85 text-foreground backdrop-blur-md'
            : atTop
              ? 'navbar-dark border-transparent bg-transparent text-crema'
              : 'navbar-dark border-crema/10 bg-noir/85 text-crema backdrop-blur-md',
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="group inline-flex items-center gap-2.5 leading-none"
            aria-label={t.nav.open}
          >
            <span
              role="img"
              aria-label="Avenir Studio"
              className="grid h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-transparent p-1.5"
            >
              <Image
                src="/logo-navbar-oscuro.png"
                alt=""
                width={442}
                height={364}
                aria-hidden="true"
                className={cn(
                  'col-start-1 row-start-1 h-full min-h-0 w-full min-w-0 object-contain transition-opacity duration-[250ms]',
                  navbarTheme === 'dark' ? 'opacity-100' : 'opacity-0',
                )}
                priority
              />
              <Image
                src="/logo-navbar-claro.png"
                alt=""
                width={442}
                height={364}
                aria-hidden="true"
                className={cn(
                  'col-start-1 row-start-1 h-full min-h-0 w-full min-w-0 object-contain transition-opacity duration-[250ms]',
                  navbarTheme === 'light' ? 'opacity-100' : 'opacity-0',
                )}
                priority
              />
            </span>
            <span className="flex flex-col text-left">
              <span className="font-serif text-lg font-medium tracking-[0.4em]">AVENIR</span>
              <span className="text-[0.5rem] font-light tracking-[0.5em] text-rosa">STUDIO</span>
            </span>
          </button>

          <nav className="hidden items-center gap-5 lg:gap-10 md:flex" aria-label={t.nav.primary}>
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

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSelector theme={navbarTheme} />
            <a
              href="https://instagram.com/avenir.studio.co"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center rounded-full border px-5 py-2 text-xs font-light uppercase tracking-[0.28em] transition-colors',
                navbarTheme === 'light'
                  ? 'border-foreground/25 hover:bg-foreground hover:text-crema'
                  : 'border-crema/30 hover:bg-crema hover:text-noir',
              )}
            >
              {t.nav.work}
            </a>
          </div>

          <a
            href="#contacto"
            className="text-xs font-light uppercase tracking-[0.28em] md:hidden"
          >
            {t.nav.contact}
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
                {t.nav.menu}
              </span>
              <button
                type="button"
                onClick={closeMenu}
                className="text-[0.62rem] font-light uppercase tracking-[0.4em] text-foreground/70"
              >
                {t.nav.close}
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-4" aria-label={t.nav.navigation}>
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
                {t.nav.login}
              </a>
            </nav>

            <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-5">
              <span className="text-[0.62rem] font-light uppercase tracking-[0.3em] text-foreground/60">
                {t.nav.language}
              </span>
              <LanguageSelector theme="light" placement="top" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
