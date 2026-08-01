import { NextResponse } from 'next/server'

export const revalidate = 86_400

const FALLBACK_RATES = {
  USD: 1,
  ARS: 1_490.84,
  EUR: 0.87,
  UYU: 40.07,
}

type ExchangeRateResponse = {
  result?: string
  rates?: Record<string, number>
}

export async function GET() {
  try {
    const response = await fetch('https://open.er-api.com/v6/latest/USD', {
      next: { revalidate: 86_400 },
    })

    if (!response.ok) throw new Error('Exchange rate request failed.')

    const data = (await response.json()) as ExchangeRateResponse
    const rates = {
      USD: 1,
      ARS: data.rates?.ARS,
      EUR: data.rates?.EUR,
      UYU: data.rates?.UYU,
    }

    if (
      data.result !== 'success' ||
      Object.values(rates).some((rate) => typeof rate !== 'number' || !Number.isFinite(rate))
    ) {
      throw new Error('Exchange rate response was invalid.')
    }

    return NextResponse.json({ rates, fallback: false })
  } catch {
    return NextResponse.json({ rates: FALLBACK_RATES, fallback: true })
  }
}
