import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

const generatedPrisma = new PrismaClient();

if (process.env.NODE_ENV === 'production') {
    prisma = generatedPrisma;
} else {
    if (!global.prisma) {
        global.prisma = generatedPrisma;
    }
    prisma = global.prisma;
}

export default prisma;