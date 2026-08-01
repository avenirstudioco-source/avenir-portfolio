import { NextResponse } from 'next/server'
import { insertQuoteRequest } from '@/lib/db'
import { isLanguage, translations } from '@/i18n/translations'

export const runtime = 'nodejs'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  const body = (await request.json()) as {
    fullName?: string
    email?: string
    phone?: string
    company?: string
    service?: string
    originalBudgetUsd?: string
    convertedBudget?: string
    currency?: string
    exchangeRate?: number
    language?: string
    message?: string
  }

  const fullName = body.fullName?.trim()
  const email = body.email?.trim()
  const message = body.message?.trim()
  const originalBudgetUsd = body.originalBudgetUsd?.trim()
  const convertedBudget = body.convertedBudget?.trim()
  const currency = body.currency?.trim()
  const requestedLanguage = body.language ?? null
  const language = isLanguage(requestedLanguage) ? requestedLanguage : 'es'
  const copy = translations[language].contact

  if (!fullName || !email || !message) {
    return NextResponse.json({ error: copy.requiredError }, { status: 400 })
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: copy.emailError }, { status: 400 })
  }

  const quote = await insertQuoteRequest({
    fullName,
    email,
    phone: body.phone?.trim(),
    company: body.company?.trim(),
    service: body.service?.trim(),
    budget: originalBudgetUsd
      ? [
          `${copy.base}: ${originalBudgetUsd}`,
          `${copy.converted}: ${convertedBudget}`,
          `${copy.labels.currency}: ${currency}`,
          `${copy.rate}: ${body.exchangeRate}`,
        ].join(' · ')
      : undefined,
    message,
  })

  return NextResponse.json({
    ok: true,
    quote,
  })
}
