import * as React from 'react'

import { useApiContext } from '@/hooks'
import { listCategories as fetchListCategories } from '@/services'
import { CategoriesResponse } from '@/types'

export const useCategories = () => {
  const [categories, setCategories] = React.useState<[] | CategoriesResponse>(
    []
  )
  const [loading, setLoading] = React.useState<boolean>(true)
  const [error, setError] = React.useState<string | null>(null)
  const { api } = useApiContext()

  const listCategories = () => (
    fetchListCategories(api)
      .then((res) => {
        setCategories(res)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  )

  return {
    categories,
    loading,
    error,
    listCategories,
  }
}
