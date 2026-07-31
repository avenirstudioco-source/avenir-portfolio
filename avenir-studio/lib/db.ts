import { PrismaClient } from '@/lib/generated/prisma/client'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'

declare global {
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined
}

// The `mariadb` driver only understands its own `ssl` option — it does not
// parse the `ssl-mode` query param used by managed providers like Aiven, so
// a raw connection-string URL silently attempts a plaintext connection and
// hangs against a TLS-only server. Translate the URL into an explicit config
// object instead of forwarding the string as-is.
function buildMariaDbConfig(databaseUrl: string) {
  if (!databaseUrl) {
    throw new Error('DATABASE_URL no está configurada.')
  }

  const url = new URL(databaseUrl)
  const sslMode = url.searchParams.get('ssl-mode')?.toUpperCase()

  if (url.protocol !== 'mysql:') {
    throw new Error('DATABASE_URL debe usar el protocolo mysql:')
  }

  if (sslMode === 'DISABLED') {
    throw new Error('Aiven MySQL requiere una conexión SSL.')
  }

  return {
    host: url.hostname,
    port: url.port ? Number(url.port) : 3306,
    user: decodeURIComponent(url.username),
    password: decodeURIComponent(url.password),
    database: decodeURIComponent(url.pathname.replace(/^\//, '')),
    // Aiven exige TLS. REQUIRED cifra la conexión sin exigir una CA provista
    // por separado, que es el comportamiento equivalente en este driver.
    ssl: { rejectUnauthorized: false },
    connectionLimit: 2,
    connectTimeout: 5_000,
    acquireTimeout: 5_000,
    initializationTimeout: 5_000,
    idleTimeout: 30,
  }
}

function createPrismaClient() {
  return new PrismaClient({
    adapter: new PrismaMariaDb(buildMariaDbConfig(process.env.DATABASE_URL ?? ''), {
      useTextProtocol: true,
    }),
  })
}

export const prisma = globalThis.__prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalThis.__prisma = prisma
}

export type QuoteStatus = 'NUEVA' | 'CONTACTADA' | 'EN_PROCESO' | 'CERRADA'

export function insertQuoteRequest(input: {
  fullName: string
  email: string
  phone?: string
  company?: string
  service?: string
  budget?: string
  message: string
}) {
  return prisma.quoteRequest.create({
    data: {
      fullName: input.fullName,
      email: input.email,
      phone: input.phone || null,
      company: input.company || null,
      service: input.service || null,
      budget: input.budget || null,
      message: input.message,
    },
  })
}

export function listQuoteRequests() {
  return prisma.quoteRequest.findMany({
    orderBy: { createdAt: 'desc' },
  })
}

export function updateQuoteStatus(id: number, status: QuoteStatus) {
  return prisma.quoteRequest.update({
    where: { id },
    data: { status },
  })
}
