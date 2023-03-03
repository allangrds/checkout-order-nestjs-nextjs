import { createOrder } from '@/services/create-order/create-order.msw'
import { listCategories } from '@/services/list-categories/list-categories.msw'
import { listItems } from '@/services/list-items/list-items.msw'

export const handlers = [createOrder, listCategories, listItems]
