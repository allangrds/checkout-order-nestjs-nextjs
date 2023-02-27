import { CategoriesResponse } from '@/types'

export const listCategories = (api: any): Promise<CategoriesResponse> => {
  const endpoint = 'categories'

  return api.get(endpoint)
}
