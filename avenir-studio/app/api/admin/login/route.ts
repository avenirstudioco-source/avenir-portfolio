import { NextResponse } from 'next/server'
import { verifyAdminCredentials } from '@/lib/admin-credentials'
import { setAdminSession } from '@/lib/admin-session'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  const body = (await request.json()) as {
    email?: string
    password?: string
  }

  const email = body.email?.trim() ?? ''
  const password = body.password ?? ''

  if (!email || !password) {
    return NextResponse.json({ error: 'Email y contraseña son obligatorios.' }, { status: 400 })
  }

  const isValid = await verifyAdminCredentials(email, password)

  if (!isValid) {
    return NextResponse.json({ error: 'Credenciales inválidas.' }, { status: 401 })
  }

  await setAdminSession(email.toLowerCase())

  return NextResponse.json({ ok: true })
}
