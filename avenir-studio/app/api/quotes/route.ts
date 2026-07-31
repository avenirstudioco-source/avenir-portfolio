import { NextResponse } from 'next/server'
import { insertQuoteRequest } from '@/lib/db'

export const runtime = 'nodejs'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  const body = (await request.json()) as {
    fullName?: string
    email?: string
    phone?: string
    company?: string
    service?: string
    budget?: string
    message?: string
  }

  const fullName = body.fullName?.trim()
  const email = body.email?.trim()
  const message = body.message?.trim()

  if (!fullName || !email || !message) {
    return NextResponse.json({ error: 'Nombre, email y mensaje son obligatorios.' }, { status: 400 })
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: 'Ingresá un email válido.' }, { status: 400 })
  }

  const quote = await insertQuoteRequest({
    fullName,
    email,
    phone: body.phone?.trim(),
    company: body.company?.trim(),
    service: body.service?.trim(),
    budget: body.budget?.trim(),
    message,
  })

  return NextResponse.json({
    ok: true,
    quote,
  })
}
