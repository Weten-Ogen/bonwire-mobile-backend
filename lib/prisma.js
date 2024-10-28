import { PrismaClient } from '@prisma/client';
import { Pool } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';

let prisma;

if (!globalThis.prisma) {
  const neon = new Pool({ connectionString: process.env.POSTGRES_PRISMA_URL });
  const adapter = new PrismaNeon(neon);
  globalThis.prisma = new PrismaClient({ adapter });
}

prisma = globalThis.prisma;

export default prisma;
