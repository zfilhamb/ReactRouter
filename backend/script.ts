import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const book = await prisma.book.create({
    data: {
      title: 'harry potter',
      author: 'Rowling',
      publisher: 'bloomsbury',
      year: 1997,
      pages: 500
    }
  })
  console.log(book)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })