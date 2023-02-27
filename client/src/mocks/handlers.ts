import { listCategories } from '@/services/list-categories/list-categories.msw'
import { listItems } from '@/services/list-items/list-items.msw'
import { createOrder } from '@/services/create-order/create-order.msw'

export const handlers = [
  createOrder,
  listCategories,
  listItems,
]
