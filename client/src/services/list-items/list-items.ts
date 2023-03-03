import { Api, ItemsResponse } from '@/types'

export const listItems = (api: Api): Promise<ItemsResponse> => {
  const endpoint = 'items'

  return api.get(endpoint)
}
