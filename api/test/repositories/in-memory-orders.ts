import { OrdersRepository } from '../../src/app/repositories';
import { Order, OrderProps } from '../../src/app/entities';

type CreateOrderRequest = Omit<OrderProps, 'id' | 'createdAt' | 'updatedAt'>;

export class InMemoryOrdersRepository implements OrdersRepository {
  private order;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(request: CreateOrderRequest): Promise<OrderProps> {
    this.order = new Order(request);

    return this.order;
  }
}
