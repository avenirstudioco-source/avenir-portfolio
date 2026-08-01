import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { LanguageProvider } from '@/i18n/language-context'
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
  metadataBase: new URL('https://avenir-studio.com'),
  title: 'Avenir Studio — Diseño web e identidad digital',
  description:
    'Diseñamos y desarrollamos experiencias digitales estratégicas para marcas que buscan crecer y destacarse.',
  generator: 'v0.app',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Avenir Studio — Diseño web e identidad digital',
    description:
      'Diseñamos y desarrollamos experiencias digitales estratégicas para marcas que buscan crecer y destacarse.',
    url: 'https://avenir-studio.com',
    type: 'website',
    images: [
      {
        url: '/icon.svg',
        width: 512,
        height: 512,
        alt: 'Avenir Studio',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
        <LanguageProvider>
          {children}
          <WhatsAppButton />
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
