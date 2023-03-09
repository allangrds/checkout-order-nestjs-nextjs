import { OrderProps } from '../entities';

type CreateOrderRequest = Omit<OrderProps, 'id' | 'createdAt' | 'updatedAt'>;

export abstract class OrdersRepository {
  abstract create(request: CreateOrderRequest): Promise<OrderProps>;
}
