import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/db'

export async function verifyAdminCredentials(email: string, password: string) {
  const normalizedEmail = email.trim().toLowerCase()

  const admin = await prisma.adminUser.findUnique({
    where: { email: normalizedEmail },
  })

  if (!admin) {
    return false
  }

  return bcrypt.compare(password, admin.passwordHash)
}

export function hashAdminPassword(password: string) {
  return bcrypt.hash(password, 12)
}
