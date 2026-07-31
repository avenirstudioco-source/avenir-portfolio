import { NextResponse } from 'next/server'
import { getAdminSession } from '@/lib/admin-session'
import { updateQuoteStatus, type QuoteStatus } from '@/lib/db'

export const runtime = 'nodejs'

const VALID_STATUSES: QuoteStatus[] = ['NUEVA', 'CONTACTADA', 'EN_PROCESO', 'CERRADA']

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSession()

  if (!session) {
    return NextResponse.json({ error: 'No autorizado.' }, { status: 401 })
  }

  const { id } = await params
  const quoteId = Number(id)

  if (!Number.isInteger(quoteId)) {
    return NextResponse.json({ error: 'ID inválido.' }, { status: 400 })
  }

  const body = (await request.json()) as { status?: string }

  if (!body.status || !VALID_STATUSES.includes(body.status as QuoteStatus)) {
    return NextResponse.json({ error: 'Estado inválido.' }, { status: 400 })
  }

  const quote = await updateQuoteStatus(quoteId, body.status as QuoteStatus)

  return NextResponse.json({ ok: true, quote })
}
