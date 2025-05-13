import { PrismaClient, Prisma } from '../src/generated/prisma';
import { withAccelerate } from '@prisma/extension-accelerate';

const prisma = new PrismaClient().$extends(withAccelerate());

const tokenData: Prisma.InstagramTokenCreateInput[] = [
  {
    access_token: process.env.INSTAGRAM_ACCESS_TOKEN || '',
    expires_in: (() => {
      const date = new Date();
      date.setMonth(date.getMonth() + 2);
      return date;
    })(),
    updatedAt: new Date(),
    createdAt: new Date(),
  },
];

export async function main() {
  console.log('Start seeding ...');
  for (const token of tokenData) {
    const tokenRecord = await prisma.instagramToken.create({
      data: token,
    });
    console.log(`Created token with id: ${tokenRecord.id}`);
  }
  console.log('Seeding finished.');
}

main();
