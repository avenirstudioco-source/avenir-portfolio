import { NextResponse } from 'next/server'
import { logoutAdmin } from '@/lib/admin-session'

export const runtime = 'nodejs'

export async function POST() {
  await logoutAdmin()
  return NextResponse.json({ ok: true })
}
