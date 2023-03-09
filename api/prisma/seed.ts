import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.category.createMany({
    data: [
      {
        name: 'Bakery',
        imageId: 'f3fbf57b118fa9',
      },
      {
        name: 'Entrees',
        imageId: 'b271afbefdc554',
      },
      {
        name: 'Drinks',
        imageId: 'eba73b2361fae3',
      },
    ],
  });
  const items = await prisma.item.createMany({
    data: [
      {
        categoryId: 1,
        id: 1,
        imageId: '293202f9d9f7f4',
        name: 'Bagel',
        price: 2.0,
      },
      {
        categoryId: 1,
        id: 2,
        imageId: '808916fd5ddf96',
        name: 'Croissant',
        price: 100,
      },
      {
        categoryId: 1,
        id: 3,
        imageId: '95d02a230fe050',
        name: 'Muffin',
        price: 125,
      },
      {
        categoryId: 1,
        id: 4,
        imageId: '23f95765b967ff',
        name: 'Toast / Bread',
        price: 1,
      },
      {
        categoryId: 1,
        id: 5,
        imageId: '5650be5d48a99b',
        name: 'English Muffin',
        price: 250,
      },
      {
        categoryId: 2,
        id: 6,
        imageId: 'bd237a0c0d19ef',
        name: 'Pasta Bar',
        price: 1299,
      },
      {
        categoryId: 2,
        id: 7,
        imageId: '3e1bd1342800f7',
        name: 'Mediterranean Entree',
        price: 1099,
      },
      {
        categoryId: 2,
        id: 8,
        imageId: '72589c4c990f97',
        name: 'Indian Entree',
        price: 1195,
      },
      {
        categoryId: 3,
        id: 9,
        imageId: '70c2a6247e7b58',
        name: 'Small Drink',
        price: 75,
      },
      {
        categoryId: 3,
        id: 10,
        imageId: 'dba0fc03da30ca',
        name: 'Medium Drink',
        price: 150,
      },
      {
        categoryId: 3,
        id: 11,
        imageId: 'ffc9bf61e441cd',
        name: 'Large Drink',
        price: 2,
      },
    ],
  });

  console.log({ categories, items });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
