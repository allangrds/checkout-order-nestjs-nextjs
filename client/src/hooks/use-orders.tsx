import * as React from 'react'
import * as http from 'http'

import { useApiContext } from '@/hooks'
import { createOrder as fetchCreateOrder} from '@/services'
import { OrdersResponse } from '@/types'

export const useOrders = () => {
  const [order, setOrder] = React.useState<{} | OrdersResponse>({})
  const [loading, setLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | null>(null)
  const { api } = useApiContext()

  const createOrder = (options: http.RequestOptions) => {
    setLoading(true)

    return fetchCreateOrder(api, options)
      .then((res) => {
        setOrder(res)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }

  return {
    order,
    loading,
    error,
    createOrder,
  }
}
