import { rest } from 'msw'

import { variables } from '@/config'

const baseUrl = variables.API_BASE_URL
export const listItems = rest.get(`${baseUrl}items`, async (req, res, ctx) =>
  res(
    ctx.delay(2000),
    ctx.status(200),
    ctx.json([
      {
        category_id: 1,
        id: 1,
        image_id: '293202f9d9f7f4',
        name: 'Bagel',
        price: 200,
      },
      {
        category_id: 1,
        id: 2,
        image_id: '808916fd5ddf96',
        name: 'Croissant',
        price: 100,
      },
      {
        category_id: 1,
        id: 3,
        image_id: '95d02a230fe050',
        name: 'Muffin',
        price: 125,
      },
      {
        category_id: 1,
        id: 4,
        image_id: '23f95765b967ff',
        name: 'Toast / Bread',
        price: 100,
      },
      {
        category_id: 1,
        id: 5,
        image_id: '5650be5d48a99b',
        name: 'English Muffin',
        price: 250,
      },
      {
        category_id: 2,
        id: 6,
        image_id: 'bd237a0c0d19ef',
        name: 'Pasta Bar',
        price: 1299,
      },
      {
        category_id: 2,
        id: 7,
        image_id: '3e1bd1342800f7',
        name: 'Mediterranean Entree',
        price: 1099,
      },
      {
        category_id: 2,
        id: 8,
        image_id: '72589c4c990f97',
        name: 'Indian Entree',
        price: 1195,
      },
      {
        category_id: 3,
        id: 9,
        image_id: '70c2a6247e7b58',
        name: 'Small Drink',
        price: 75,
      },
      {
        category_id: 3,
        id: 10,
        image_id: 'dba0fc03da30ca',
        name: 'Medium Drink',
        price: 15,
      },
      {
        category_id: 3,
        id: 11,
        image_id: 'ffc9bf61e441cd',
        name: 'Large Drink',
        price: 200,
      },
    ])
  )
)
