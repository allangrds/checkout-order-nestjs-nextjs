import { OrdersItemsRepository } from '../../src/app/repositories';
import { OrderItem, OrderItemProps } from '../../src/app/entities';

type CreateOrderItemRequest = Omit<
  OrderItemProps,
  'id' | 'createdAt' | 'updatedAt'
>[];

export class InMemoryOrdersItemsRepository implements OrdersItemsRepository {
  public orderItems: OrderItem[] = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async createMany(request: CreateOrderItemRequest): Promise<void> {
    this.orderItems = request.map(
      (item) =>
        new OrderItem({
          ...item,
          id: undefined,
          createdAt: undefined,
          updatedAt: undefined,
        }),
    );

    return Promise.resolve();
  }
}
