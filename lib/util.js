const { PrismaClient } = process.env.NODE_ENV === "production"
  ? require('/tmp/prisma')
  : require('@prisma/client');
const prisma = new PrismaClient();