import * as http from 'http'
import { OrdersResponse } from '@/types'

export const createOrder = (api: any, options: http.RequestOptions): Promise<OrdersResponse> => {
  const endpoint = 'orders'

  return api.post(endpoint, options)
}
