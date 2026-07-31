import { NextResponse } from 'next/server'
import { getAdminSession } from '@/lib/admin-session'
import { listQuoteRequests } from '@/lib/db'

export const runtime = 'nodejs'

export async function GET() {
  const session = await getAdminSession()

  if (!session) {
    return NextResponse.json({ error: 'No autorizado.' }, { status: 401 })
  }

  const quotes = await listQuoteRequests()
  return NextResponse.json({ ok: true, quotes })
}
