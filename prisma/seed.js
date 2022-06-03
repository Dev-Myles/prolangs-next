import { PrismaClient } from '@prisma/client';
import { hitches, shirts, signs } from './products.js';
const prisma = new PrismaClient();

async function main() {
  for (let shirt of shirts) {
    await prisma.shirt.create({
      data: shirt,
    });
  }
  for (let hitch of hitches) {
    await prisma.hitch.create({
      data: hitch,
    });
  }
  for (let sign of signs) {
    await prisma.sign.create({
      data: sign,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
