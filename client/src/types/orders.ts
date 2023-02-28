export type OrdersRequest = {
  card_number: string
  card_holder_name: string
  card_expiration_at: string
  card_cvv: string
}

export type OrdersResponse = {
  id: number
  created_at: string
}
