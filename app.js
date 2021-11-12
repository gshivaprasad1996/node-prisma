import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const allUsers = await prisma.columns.findMany()
    console.log("Calling main method...")
    console.log(allUsers)
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })