import { ItemsResponse } from '@/types'

export const listItems = (api: any): Promise<ItemsResponse> => {
  const endpoint = 'items'

  return api.get(endpoint)
}
