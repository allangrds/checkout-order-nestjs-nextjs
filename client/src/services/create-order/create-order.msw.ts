import { rest } from 'msw'

import { variables } from '@/config'

const baseUrl = variables.API_BASE_URL
export const createOrder = rest.post(
  `${baseUrl}orders`,
  async (req, res, ctx) =>
    res(
      ctx.delay(2000),
      ctx.status(201),
      ctx.json({
        id: 1,
        created_at: '2021-01-01T00:00:00.000Z',
      })
    )
)
