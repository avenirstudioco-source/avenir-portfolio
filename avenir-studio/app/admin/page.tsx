import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getAdminSession } from '@/lib/admin-session'
import { listQuoteRequests } from '@/lib/db'
import { AdminDashboard } from '@/components/admin-dashboard'

export const metadata: Metadata = {
  title: 'Panel de administración | Avenir Studio',
  robots: { index: false, follow: false },
}

export default async function AdminPage() {
  const session = await getAdminSession()

  if (!session) {
    redirect('/login')
  }

  const quotes = await listQuoteRequests()

  return <AdminDashboard adminEmail={session.email} initialQuotes={quotes} />
}
