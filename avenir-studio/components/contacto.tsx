'use client'

import { useState, type FormEvent } from 'react'
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

const MAIL_URL = 'mailto:avenir.studio.co@gmail.com'

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3.5" y="5" width="17" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.5 7.5L12 13l7.5-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const SERVICIOS = ['Identidad de marca', 'Diseño web', 'Dirección de arte', 'Otro']
const PRESUPUESTOS = ['Menos de $500', '$500 - $1.500', '$1.500 - $3.000', 'Más de $3.000', 'A definir']

const inputClass =
  'w-full rounded-xl border border-crema/15 bg-crema/5 px-4 py-3 text-sm font-light text-crema placeholder:text-crema/35 outline-none transition-colors focus:border-rosa/60 focus:bg-crema/10'

const labelClass = 'mb-2 block text-left text-[0.62rem] font-light uppercase tracking-[0.3em] text-crema/50'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function Contacto() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = event.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: data.get('fullName'),
          email: data.get('email'),
          phone: data.get('phone'),
          company: data.get('company'),
          service: data.get('service'),
          budget: data.get('budget'),
          message: data.get('message'),
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error ?? 'No pudimos enviar tu solicitud.')
      }

      setStatus('success')
      form.reset()
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'No pudimos enviar tu solicitud.')
    }
  }

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
          Diseñemos lo que sigue para tu marca. Contanos tu proyecto y te
          respondemos con una cotización.
        </p>
      </Reveal>

      <Reveal className="relative mx-auto mt-14 max-w-2xl px-6">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 text-left sm:grid-cols-2">
          <div>
            <label htmlFor="fullName" className={labelClass}>
              Nombre *
            </label>
            <input id="fullName" name="fullName" type="text" required className={inputClass} />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email *
            </label>
            <input id="email" name="email" type="email" required className={inputClass} />
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>
              Teléfono
            </label>
            <input id="phone" name="phone" type="tel" className={inputClass} />
          </div>

          <div>
            <label htmlFor="company" className={labelClass}>
              Empresa
            </label>
            <input id="company" name="company" type="text" className={inputClass} />
          </div>

          <div>
            <label htmlFor="service" className={labelClass}>
              Servicio de interés
            </label>
            <select id="service" name="service" defaultValue="" className={inputClass}>
              <option value="" disabled>
                Elegí una opción
              </option>
              {SERVICIOS.map((servicio) => (
                <option key={servicio} value={servicio}>
                  {servicio}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="budget" className={labelClass}>
              Presupuesto estimado
            </label>
            <select id="budget" name="budget" defaultValue="" className={inputClass}>
              <option value="" disabled>
                Elegí una opción
              </option>
              {PRESUPUESTOS.map((presupuesto) => (
                <option key={presupuesto} value={presupuesto}>
                  {presupuesto}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className={labelClass}>
              Mensaje *
            </label>
            <textarea id="message" name="message" required rows={5} className={inputClass} />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-crema px-9 py-4 text-xs font-medium uppercase tracking-[0.28em] text-noir transition-transform hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60"
            >
              {status === 'submitting' ? 'Enviando…' : 'Solicitar cotización'}
            </button>

            {status === 'success' && (
              <p className="mt-4 text-center text-xs font-light uppercase tracking-[0.2em] text-rosa">
                ¡Listo! Recibimos tu solicitud, te contactamos pronto.
              </p>
            )}

            {status === 'error' && (
              <p className="mt-4 text-center text-xs font-light uppercase tracking-[0.2em] text-crema/70">
                {errorMessage}
              </p>
            )}
          </div>
        </form>
      </Reveal>

      <Reveal className="relative mx-auto mt-16 max-w-4xl px-6 text-center">
        <p className="text-[0.7rem] font-light uppercase tracking-[0.4em] text-crema/75">
          O escribinos directamente
        </p>

        <div className="mt-5 flex flex-col items-center justify-center gap-4 md:flex-row">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-crema/20 px-9 py-4 text-xs font-medium uppercase tracking-[0.28em] text-crema transition-transform hover:-translate-y-0.5"
          >
            <InstagramIcon className="h-5 w-5" />
            @avenir.studio.co
          </a>

          <a
            href={MAIL_URL}
            className="group inline-flex items-center gap-3 rounded-full border border-crema/20 px-9 py-4 text-xs font-medium uppercase tracking-[0.28em] text-crema transition-transform hover:-translate-y-0.5"
          >
            <MailIcon className="h-5 w-5" />
            Enviar un mail
          </a>
        </div>
      </Reveal>
    </section>
  )
}
