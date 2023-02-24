import { rest } from 'msw'

import { variables } from '@/config'

const baseUrl = variables.API_BASE_URL
export const listCategories = rest.get(
  `${baseUrl}categories`,
  async (req, res, ctx) =>
    res(
      ctx.delay(2000),
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          image_id: 'f3fbf57b118fa9',
          name: 'Bakery',
        },
        {
          id: 2,
          image_id: 'b271afbefdc554',
          name: 'Entrees',
        },
        {
          id: 3,
          image_id: 'eba73b2361fae3',
          name: 'Drinks',
        },
      ])
    )
)
