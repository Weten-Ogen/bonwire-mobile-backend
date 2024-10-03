const {PrismaClient} = require('@prisma/client')

const uri = "postgres://default:7y0tNIaiJqor@ep-proud-poetry-a2xkg4iq-pooler.eu-central-1.aws.neon.tech/verceldb?pgbouncer=true&connect_timeout=15&sslmode=require"
const prisma = new PrismaClient()

module.exports = prisma