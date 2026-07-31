import { config } from 'dotenv'

// .env.local tiene prioridad (ahí van ADMIN_EMAIL / ADMIN_PASSWORD reales),
// .env completa el resto (DATABASE_URL, SESSION_SECRET).
config({ path: '.env.local' })
config({ path: '.env' })
