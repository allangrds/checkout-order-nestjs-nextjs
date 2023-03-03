import { Api, OrdersRequest, OrdersResponse } from '@/types'

export const createOrder = (
  api: Api,
  payload: OrdersRequest
): Promise<OrdersResponse> => {
  const endpoint = 'orders'
  const body = JSON.stringify(payload)

  return api.post(endpoint, body)
}
