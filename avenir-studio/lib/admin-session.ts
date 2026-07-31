import { createHmac, timingSafeEqual } from 'node:crypto'
import { cookies } from 'next/headers'

const SESSION_COOKIE_NAME = 'avenir_admin_session'
const SESSION_TTL_MS = 1000 * 60 * 60 * 12

function getSessionSecret() {
  return process.env.SESSION_SECRET || 'dev-session-secret-change-me'
}

function encodeBase64(value: string) {
  return Buffer.from(value, 'utf8').toString('base64url')
}

function decodeBase64(value: string) {
  return Buffer.from(value, 'base64url').toString('utf8')
}

export function createSessionToken(email: string) {
  const payload = {
    email,
    exp: Date.now() + SESSION_TTL_MS,
  }

  const encodedPayload = encodeBase64(JSON.stringify(payload))
  const signature = createHmac('sha256', getSessionSecret())
    .update(encodedPayload)
    .digest('base64url')

  return `${encodedPayload}.${signature}`
}

export function verifySessionToken(token: string) {
  if (!token) {
    return null
  }

  const [encodedPayload, signature] = token.split('.')
  if (!encodedPayload || !signature) {
    return null
  }

  const expectedSignature = createHmac('sha256', getSessionSecret())
    .update(encodedPayload)
    .digest('base64url')

  const expectedBuffer = Buffer.from(expectedSignature)
  const actualBuffer = Buffer.from(signature)

  if (expectedBuffer.length !== actualBuffer.length) {
    return null
  }

  try {
    if (!timingSafeEqual(expectedBuffer, actualBuffer)) {
      return null
    }
  } catch {
    return null
  }

  try {
    const payload = JSON.parse(decodeBase64(encodedPayload)) as {
      email: string
      exp: number
    }

    if (!payload.email || payload.exp < Date.now()) {
      return null
    }

    return payload
  } catch {
    return null
  }
}

export async function getAdminSession() {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value
  return verifySessionToken(token ?? '')
}

export async function logoutAdmin() {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE_NAME)
}

export async function setAdminSession(email: string) {
  const cookieStore = await cookies()
  const token = createSessionToken(email)
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: Math.floor(SESSION_TTL_MS / 1000),
  })
}
