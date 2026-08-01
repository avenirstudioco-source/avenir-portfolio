'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { Sparkle } from '@/components/sparkle'
import { Reveal } from '@/components/reveal'
import { useLanguage } from '@/i18n/language-context'
import type { Language } from '@/i18n/translations'

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

const MONEDAS = ['USD', 'ARS', 'EUR', 'UYU'] as const

type Currency = (typeof MONEDAS)[number]

type BudgetRange = {
  id: string
  min: number
  max: number | null
}

const BUDGET_RANGES: BudgetRange[] = [
  { id: 'under-500', min: 0, max: 500 },
  { id: '500-1000', min: 500, max: 1_000 },
  { id: '1000-2000', min: 1_000, max: 2_000 },
  { id: 'over-2000', min: 2_000, max: null },
]

const FALLBACK_RATES: Record<Currency, number> = {
  USD: 1,
  ARS: 1_490.84,
  EUR: 0.87,
  UYU: 40.07,
}

function formatAmount(value: number, language: Language) {
  const locale = { es: 'es-AR', en: 'en-US', pt: 'pt-BR' }[language]
  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(Math.round(value))
}

function formatBudgetRange(
  range: BudgetRange,
  currency: Currency,
  rate: number,
  language: Language,
  copy: { under: string; over: string },
) {
  const convertedMin = formatAmount(range.min * rate, language)

  if (range.min === 0 && range.max !== null) {
    return `${copy.under} ${currency} ${formatAmount(range.max * rate, language)}`
  }

  if (range.max === null) {
    return `${copy.over} ${currency} ${convertedMin}`
  }

  return `${currency} ${convertedMin} – ${currency} ${formatAmount(range.max * rate, language)}`
}

const inputClass =
  'w-full rounded-xl border border-crema/15 bg-crema/5 px-4 py-3 text-sm font-light text-crema placeholder:text-crema/35 outline-none transition-colors focus:border-rosa/60 focus:bg-crema/10'

const labelClass = 'mb-2 block text-left text-[0.62rem] font-light uppercase tracking-[0.3em] text-crema/50'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function Contacto() {
  const { language, t } = useLanguage()
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [currency, setCurrency] = useState<Currency>('USD')
  const [rates, setRates] = useState<Record<Currency, number>>(FALLBACK_RATES)
  const [ratesLoading, setRatesLoading] = useState(true)
  const [usingFallbackRates, setUsingFallbackRates] = useState(false)

  useEffect(() => {
    let active = true

    async function loadRates() {
      try {
        const response = await fetch('/api/exchange-rates')
        if (!response.ok) throw new Error(t.contact.genericError)

        const result = (await response.json()) as {
          rates: Record<Currency, number>
          fallback: boolean
        }

        if (active) {
          setRates(result.rates)
          setUsingFallbackRates(result.fallback)
        }
      } catch {
        if (active) {
          setRates(FALLBACK_RATES)
          setUsingFallbackRates(true)
        }
      } finally {
        if (active) setRatesLoading(false)
      }
    }

    loadRates()
    return () => {
      active = false
    }
  }, [t.contact.genericError])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = event.currentTarget
    const data = new FormData(form)
    const budgetRangeId = String(data.get('estimatedBudget') ?? '')
    const budgetRange = BUDGET_RANGES.find((range) => range.id === budgetRangeId)
    const exchangeRate = rates[currency]
    const originalBudgetUsd = budgetRange
      ? formatBudgetRange(budgetRange, 'USD', 1, language, t.contact.budget)
      : ''
    const convertedBudget = budgetRange
      ? formatBudgetRange(budgetRange, currency, exchangeRate, language, t.contact.budget)
      : ''

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
          originalBudgetUsd,
          convertedBudget,
          currency,
          exchangeRate,
          language,
          message: data.get('message'),
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error ?? t.contact.genericError)
      }

      setStatus('success')
      form.reset()
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : t.contact.genericError)
    }
  }

  return (
    <section id="contacto" data-navbar-theme="dark" className="relative overflow-hidden bg-noir py-24 text-crema md:py-36">
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
            {t.contact.eyebrow}
          </span>
          <Sparkle className="h-3 w-3 text-rosa" />
        </div>

        <h2 className="mt-8 text-balance font-serif text-5xl font-light leading-[1] tracking-tight sm:text-6xl md:text-7xl">
          {t.contact.titleBefore} <br />
          <span className="italic text-rosa">{t.contact.titleAccent}</span>
        </h2>

        <p className="mx-auto mt-8 max-w-md text-pretty text-base font-light leading-relaxed text-crema/70">
          {t.contact.description}
        </p>
      </Reveal>

      <Reveal className="relative mx-auto mt-14 max-w-2xl px-6">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 text-left sm:grid-cols-2">
          <div>
            <label htmlFor="fullName" className={labelClass}>
              {t.contact.labels.name}
            </label>
            <input id="fullName" name="fullName" type="text" required className={inputClass} />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              {t.contact.labels.email}
            </label>
            <input id="email" name="email" type="email" required className={inputClass} />
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>
              {t.contact.labels.phone}
            </label>
            <input id="phone" name="phone" type="tel" className={inputClass} />
          </div>

          <div>
            <label htmlFor="company" className={labelClass}>
              {t.contact.labels.company}
            </label>
            <input id="company" name="company" type="text" className={inputClass} />
          </div>

          <div>
            <label htmlFor="service" className={labelClass}>
              {t.contact.labels.service}
            </label>
            <select id="service" name="service" defaultValue="" className={inputClass}>
              <option value="" disabled>
                {t.contact.choose}
              </option>
              {t.contact.services.map((servicio) => (
                <option key={servicio} value={servicio}>
                  {servicio}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-[minmax(0,72fr)_minmax(5.5rem,28fr)]">
            <div className="min-w-0">
              <label htmlFor="estimatedBudget" className={labelClass}>
                {t.contact.labels.budget}
              </label>
              <select
                id="estimatedBudget"
                name="estimatedBudget"
                defaultValue=""
                className={inputClass}
              >
                <option value="" disabled>
                  {t.contact.choose}
                </option>
                {BUDGET_RANGES.map((range) => (
                  <option key={range.id} value={range.id}>
                    {formatBudgetRange(range, currency, rates[currency], language, t.contact.budget)}
                  </option>
                ))}
              </select>
            </div>

            <div className="min-w-0">
              <label htmlFor="currency" className={labelClass}>
                {t.contact.labels.currency}
              </label>
              <select
                id="currency"
                name="currency"
                value={currency}
                onChange={(event) => setCurrency(event.target.value as Currency)}
                className={inputClass}
              >
                {MONEDAS.map((moneda) => (
                  <option key={moneda} value={moneda}>
                    {moneda}
                  </option>
                ))}
              </select>
            </div>

            <p
              className="min-h-4 text-[0.58rem] font-light tracking-wide text-crema/35 min-[420px]:col-span-2"
              aria-live="polite"
            >
              {ratesLoading ? (
                t.contact.loadingRates
              ) : (
                <>
                  {usingFallbackRates && t.contact.fallbackRates}
                  <a
                    href="https://www.exchangerate-api.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-crema/60"
                  >
                    {t.contact.ratesCredit}
                  </a>
                </>
              )}
            </p>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className={labelClass}>
              {t.contact.labels.message}
            </label>
            <textarea id="message" name="message" required rows={5} className={inputClass} />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-crema px-9 py-4 text-xs font-medium uppercase tracking-[0.28em] text-noir transition-transform hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60"
            >
              {status === 'submitting' ? t.contact.submitting : t.contact.submit}
            </button>

            {status === 'success' && (
              <p className="mt-4 text-center text-xs font-light uppercase tracking-[0.2em] text-rosa">
                {t.contact.success}
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
          {t.contact.direct}
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
            {t.contact.emailCta}
          </a>
        </div>
      </Reveal>
    </section>
  )
}
