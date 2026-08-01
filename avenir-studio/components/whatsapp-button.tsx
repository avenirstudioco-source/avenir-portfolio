'use client'

import Image from 'next/image'
import { useLanguage } from '@/i18n/language-context'

const WHATSAPP_URL =
  'https://wa.me/541158578243?text=Hola%20Avenir%20Studio%2C%20quiero%20consultarles%20por%20sus%20servicios.'

export function WhatsAppButton() {
  const { t } = useLanguage()
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.aria}
      title={t.whatsapp.title}
      className="fixed right-4 bottom-4 z-[55] block h-[52px] w-[52px] rounded-full bg-transparent shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition-transform duration-300 motion-safe:hover:scale-105 motion-reduce:transition-none md:right-6 md:bottom-6 md:h-14 md:w-14"
    >
      <Image
        src="/whatsapp-icon-pink.png"
        alt=""
        width={1024}
        height={1024}
        className="block h-full w-full object-contain"
      />
    </a>
  )
}
