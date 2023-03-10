import * as React from 'react'

import { useApiContext } from '@/hooks'
import { createOrder as fetchCreateOrder } from '@/services'
import { OrdersRequest, OrdersResponse } from '@/types'

export const useOrders = () => {
  const [order, setOrder] = React.useState<object | OrdersResponse>({})
  const [loading, setLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | null>(null)
  const { api } = useApiContext()

  const createOrder = (payload: OrdersRequest) => {
    setLoading(true)

    return fetchCreateOrder(api, payload)
      .then((res) => {
        setOrder(res)
        setLoading(false)

        return res
      })
      .catch(async (err) => {
        setError('Your order could not be created. Please try again later.')
        setLoading(false)

        throw err
      })
  }

  return {
    order,
    loading,
    error,
    createOrder,
  }
}
