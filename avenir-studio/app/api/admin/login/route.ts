import { NextResponse } from 'next/server'
import { verifyAdminCredentials } from '@/lib/admin-credentials'
import { setAdminSession } from '@/lib/admin-session'
import { isLanguage, translations } from '@/i18n/translations'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  const body = (await request.json()) as {
    email?: string
    password?: string
    language?: string
  }

  const email = body.email?.trim() ?? ''
  const password = body.password ?? ''
  const requestedLanguage = body.language ?? null
  const language = isLanguage(requestedLanguage) ? requestedLanguage : 'es'
  const copy = translations[language].auth

  if (!email || !password) {
    return NextResponse.json({ error: copy.required }, { status: 400 })
  }

  const isValid = await verifyAdminCredentials(email, password)

  if (!isValid) {
    return NextResponse.json({ error: copy.invalid }, { status: 401 })
  }

  await setAdminSession(email.toLowerCase())

  return NextResponse.json({ ok: true })
}
