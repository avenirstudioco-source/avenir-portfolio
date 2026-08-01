import { NextResponse } from 'next/server'
import { getAdminSession } from '@/lib/admin-session'
import { listQuoteRequests } from '@/lib/db'
import { isLanguage, translations } from '@/i18n/translations'

export const runtime = 'nodejs'

export async function GET(request: Request) {
  const requestedLanguage = new URL(request.url).searchParams.get('language')
  const language = isLanguage(requestedLanguage) ? requestedLanguage : 'es'
  const messages = translations[language].admin
  const session = await getAdminSession()

  if (!session) {
    return NextResponse.json({ error: messages.unauthorized }, { status: 401 })
  }

  const quotes = await listQuoteRequests()
  return NextResponse.json({ ok: true, quotes })
}
