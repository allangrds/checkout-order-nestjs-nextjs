import { OrderItemProps } from '../entities';

type CreateOrderItemRequest = Omit<
  OrderItemProps,
  'id' | 'createdAt' | 'updatedAt'
>[];

export abstract class OrdersItemsRepository {
  abstract createMany(request: CreateOrderItemRequest): Promise<void>;
}
