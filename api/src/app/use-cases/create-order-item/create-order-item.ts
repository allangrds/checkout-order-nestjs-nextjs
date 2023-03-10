import { Injectable } from '@nestjs/common';

import { OrderItemProps } from '@app/entities';
import { OrdersItemsRepository } from '../../repositories';

type CreateOrderItemRequest = Omit<
  OrderItemProps,
  'id' | 'createdAt' | 'updatedAt'
>[];

@Injectable()
export class CreateOrderItem {
  constructor(private ordersItemsRepository: OrdersItemsRepository) {}

  async execute(payload: CreateOrderItemRequest): Promise<void> {
    await this.ordersItemsRepository.createMany(payload);
  }
}
