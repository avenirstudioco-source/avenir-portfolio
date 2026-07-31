'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { QuoteRequest } from '@/lib/generated/prisma/client'

const STATUS_LABELS: Record<string, string> = {
  NUEVA: 'Nueva',
  CONTACTADA: 'Contactada',
  EN_PROCESO: 'En proceso',
  CERRADA: 'Cerrada',
}

const STATUS_OPTIONS = Object.keys(STATUS_LABELS)

function formatDate(value: Date) {
  return new Date(value).toLocaleString('es-AR', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

export function AdminDashboard({
  adminEmail,
  initialQuotes,
}: {
  adminEmail: string
  initialQuotes: QuoteRequest[]
}) {
  const router = useRouter()
  const [quotes, setQuotes] = useState(initialQuotes)
  const [updatingId, setUpdatingId] = useState<number | null>(null)

  async function handleStatusChange(id: number, status: string) {
    setUpdatingId(id)
    const previous = quotes
    setQuotes((current) => current.map((q) => (q.id === id ? { ...q, status: status as QuoteRequest['status'] } : q)))

    try {
      const response = await fetch(`/api/admin/quotes/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })

      if (!response.ok) {
        throw new Error('No se pudo actualizar el estado.')
      }
    } catch {
      setQuotes(previous)
    } finally {
      setUpdatingId(null)
    }
  }

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/login')
    router.refresh()
  }

  return (
    <main className="min-h-screen bg-noir px-6 py-16 text-crema">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 border-b border-crema/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.62rem] font-light uppercase tracking-[0.4em] text-crema/50">
              Avenir Studio
            </p>
            <h1 className="mt-2 font-serif text-3xl font-light tracking-tight">
              Cotizaciones
            </h1>
            <p className="mt-1 text-xs font-light text-crema/50">Conectado como {adminEmail}</p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center justify-center rounded-full border border-crema/20 px-6 py-2.5 text-xs font-light uppercase tracking-[0.28em] text-crema transition-colors hover:bg-crema hover:text-noir"
          >
            Cerrar sesión
          </button>
        </div>

        {quotes.length === 0 ? (
          <p className="mt-16 text-center text-sm font-light text-crema/50">
            Todavía no hay solicitudes de cotización.
          </p>
        ) : (
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-crema/10 text-[0.62rem] font-light uppercase tracking-[0.2em] text-crema/45">
                  <th className="py-3 pr-4">Fecha</th>
                  <th className="py-3 pr-4">Nombre</th>
                  <th className="py-3 pr-4">Contacto</th>
                  <th className="py-3 pr-4">Empresa</th>
                  <th className="py-3 pr-4">Servicio</th>
                  <th className="py-3 pr-4">Presupuesto</th>
                  <th className="py-3 pr-4">Mensaje</th>
                  <th className="py-3 pr-4">Estado</th>
                </tr>
              </thead>
              <tbody>
                {quotes.map((quote) => (
                  <tr key={quote.id} className="border-b border-crema/5 align-top">
                    <td className="py-4 pr-4 text-xs font-light text-crema/60 whitespace-nowrap">
                      {formatDate(quote.createdAt)}
                    </td>
                    <td className="py-4 pr-4 font-light">{quote.fullName}</td>
                    <td className="py-4 pr-4 text-xs font-light text-crema/70">
                      <div>{quote.email}</div>
                      {quote.phone && <div className="text-crema/50">{quote.phone}</div>}
                    </td>
                    <td className="py-4 pr-4 text-xs font-light text-crema/70">{quote.company || '—'}</td>
                    <td className="py-4 pr-4 text-xs font-light text-crema/70">{quote.service || '—'}</td>
                    <td className="py-4 pr-4 text-xs font-light text-crema/70">{quote.budget || '—'}</td>
                    <td className="max-w-xs py-4 pr-4 text-xs font-light leading-relaxed text-crema/70">
                      {quote.message}
                    </td>
                    <td className="py-4 pr-4">
                      <select
                        value={quote.status}
                        disabled={updatingId === quote.id}
                        onChange={(event) => handleStatusChange(quote.id, event.target.value)}
                        className="rounded-lg border border-crema/15 bg-crema/5 px-3 py-2 text-xs font-light text-crema outline-none transition-colors focus:border-rosa/60 disabled:opacity-50"
                      >
                        {STATUS_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {STATUS_LABELS[option]}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  )
}
