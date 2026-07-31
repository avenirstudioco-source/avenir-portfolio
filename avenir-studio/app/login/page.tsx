import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getAdminSession } from '@/lib/admin-session'
import { LoginForm } from '@/components/login-form'

export const metadata: Metadata = {
  title: 'Iniciar sesión | Avenir Studio',
  robots: { index: false, follow: false },
}

export default async function LoginPage() {
  const session = await getAdminSession()

  if (session) {
    redirect('/admin')
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-noir px-6 py-24 text-crema">
      <div className="w-full max-w-sm">
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-crema/5 p-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/avenir-mark.png" alt="Avenir Studio" className="h-full w-full object-contain" />
          </span>
          <div>
            <p className="text-[0.62rem] font-light uppercase tracking-[0.4em] text-crema/50">
              Panel de administración
            </p>
            <h1 className="mt-2 font-serif text-2xl font-light tracking-tight">
              Iniciá sesión
            </h1>
          </div>
        </div>

        <LoginForm />
      </div>
    </main>
  )
}
