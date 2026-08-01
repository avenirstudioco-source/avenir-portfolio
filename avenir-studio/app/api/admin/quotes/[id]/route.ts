import { NextResponse } from 'next/server'
import { getAdminSession } from '@/lib/admin-session'
import { updateQuoteStatus, type QuoteStatus } from '@/lib/db'
import { isLanguage, translations } from '@/i18n/translations'

export const runtime = 'nodejs'

const VALID_STATUSES: QuoteStatus[] = ['NUEVA', 'CONTACTADA', 'EN_PROCESO', 'CERRADA']

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const body = (await request.json()) as { status?: string; language?: string }
  const requestedLanguage = body.language ?? null
  const language = isLanguage(requestedLanguage) ? requestedLanguage : 'es'
  const copy = translations[language].admin
  const session = await getAdminSession()

  if (!session) {
    return NextResponse.json({ error: copy.unauthorized }, { status: 401 })
  }

  const { id } = await params
  const quoteId = Number(id)

  if (!Number.isInteger(quoteId)) {
    return NextResponse.json({ error: copy.invalidId }, { status: 400 })
  }

  if (!body.status || !VALID_STATUSES.includes(body.status as QuoteStatus)) {
    return NextResponse.json({ error: copy.invalidStatus }, { status: 400 })
  }

  const quote = await updateQuoteStatus(quoteId, body.status as QuoteStatus)

  return NextResponse.json({ ok: true, quote })
}
