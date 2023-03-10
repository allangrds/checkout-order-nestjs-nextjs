export type OrdersRequest = {
  credit_card_number: string
  credit_card_holder_name: string
  credit_card_expiration_at: string
  credit_card_cvv: string
}

export type OrdersResponse = {
  id: number
  created_at: string
}
