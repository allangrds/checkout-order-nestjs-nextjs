import * as React from 'react'

import { useApiContext } from '@/hooks'
import { listItems as fetchListitems } from '@/services'
import { ItemsResponse } from '@/types'

export const useItems = () => {
  const [items, setItems] = React.useState<[] | ItemsResponse>([])
  const [loading, setLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | null>(null)
  const { api } = useApiContext()

  const listItems = () => {
    setLoading(true)

    return fetchListitems(api)
      .then((res) => {
        setItems(res)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }

  return {
    items,
    loading,
    error,
    listItems,
  }
}
