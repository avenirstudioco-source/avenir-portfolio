import './load-env'
import { hashAdminPassword } from '../lib/admin-credentials'
import { prisma } from '../lib/db'

const MIN_PASSWORD_LENGTH = 8

async function main() {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase()
  const password = process.env.ADMIN_PASSWORD?.trim()

  if (!email || !password) {
    throw new Error('Definí ADMIN_EMAIL y ADMIN_PASSWORD en .env.local antes de correr el seed.')
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    throw new Error(`ADMIN_PASSWORD debe tener al menos ${MIN_PASSWORD_LENGTH} caracteres.`)
  }

  // Solo el hash bcrypt se guarda en la base — la contraseña en texto plano
  // nunca se persiste ni se imprime.
  const passwordHash = await hashAdminPassword(password)

  await prisma.adminUser.upsert({
    where: { email },
    update: { passwordHash },
    create: { email, passwordHash },
  })

  console.log('Administrador creado o actualizado correctamente.')
}

main()
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
