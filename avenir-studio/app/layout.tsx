import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Avenir Studio — Diseño web & branding de lujo',
  description:
    'Avenir Studio es un estudio de diseño enfocado en identidad de marca y experiencias web. Diseñamos marcas e interfaces que se sienten inevitables. Buenos Aires, Argentina.',
  generator: 'v0.app',
  openGraph: {
    title: 'Avenir Studio — Diseño web & branding de lujo',
    description:
      'Diseñamos marcas e interfaces que se sienten inevitables — claras hoy, vigentes mañana.',
    type: 'website',
  },
  icons: {
    icon: '/avenir-logo-new.png',
    shortcut: '/avenir-logo-new.png',
    apple: '/avenir-logo-new.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#12100f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${jost.variable} scroll-smooth bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
