import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getAdminSession } from '@/lib/admin-session'
import { LoginForm } from '@/components/login-form'
import { LoginHeader } from '@/components/login-header'

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
        <LoginHeader />
        <LoginForm />
      </div>
    </main>
  )
}
