import { Api, CategoriesResponse } from '@/types'

export const listCategories = (api: Api): Promise<CategoriesResponse> => {
  const endpoint = 'categories'

  return api.get(endpoint)
}
