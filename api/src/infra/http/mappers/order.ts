import { OrderProps } from '@app/entities';

export class OrderMapper {
  static toHttp(order: OrderProps) {
    return {
      id: order.id,
      created_at: order.createdAt,
    };
  }
}
