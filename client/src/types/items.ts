type Item = {
  id: number
  category_id: number
  image_id: string
  name: string
  price: number
  created_at: string
  updated_at: string
}

export type ItemsResponse = Item[]
