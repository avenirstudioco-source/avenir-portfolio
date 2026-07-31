'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'

const inputClass =
  'w-full rounded-xl border border-crema/15 bg-crema/5 px-4 py-3 text-sm font-light text-crema placeholder:text-crema/35 outline-none transition-colors focus:border-rosa/60 focus:bg-crema/10'

const labelClass = 'mb-2 block text-left text-[0.62rem] font-light uppercase tracking-[0.3em] text-crema/50'

export function LoginForm() {
  const router = useRouter()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const data = new FormData(event.currentTarget)

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.get('email'),
          password: data.get('password'),
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error ?? 'No pudimos iniciar sesión.')
      }

      router.push('/admin')
      router.refresh()
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'No pudimos iniciar sesión.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input id="email" name="email" type="email" autoComplete="username" required className={inputClass} />
      </div>

      <div>
        <label htmlFor="password" className={labelClass}>
          Contraseña
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-crema px-9 py-4 text-xs font-medium uppercase tracking-[0.28em] text-noir transition-transform hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60"
      >
        {status === 'submitting' ? 'Ingresando…' : 'Ingresar'}
      </button>

      {status === 'error' && (
        <p className="text-center text-xs font-light uppercase tracking-[0.2em] text-rosa">
          {errorMessage}
        </p>
      )}
    </form>
  )
}
