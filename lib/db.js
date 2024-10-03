import { Prisma } from "@prisma/client"
var globalThis

const prismaClientSingleton = () => {
    return new PrismaClient()
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()
module.exports = {prisma};

if(process.env.NODE_ENV != "production") globalThis.prismaGlobal = prisma

