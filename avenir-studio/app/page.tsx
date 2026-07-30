import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Estudio } from '@/components/estudio'
import { Portfolio } from '@/components/portfolio'
import { Servicios } from '@/components/servicios'
import { Contacto } from '@/components/contacto'
import { SiteFooter } from '@/components/site-footer'
import { Marquee } from '@/components/marquee'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Estudio />
        <Portfolio />
        <Servicios />
        <Contacto />
      </main>
      <SiteFooter />
    </>
  )
}
