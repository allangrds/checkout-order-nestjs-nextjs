import { Injectable } from '@nestjs/common';

import { OrdersItemsRepository } from '@app/repositories';
import { OrderItemProps } from '@app/entities';
import { PrismaService } from '../prisma.service';

type CreateOrderItemRequest = Omit<
  OrderItemProps,
  'id' | 'createdAt' | 'updatedAt'
>[];

@Injectable()
export class PrismaOrdersItemsRepository implements OrdersItemsRepository {
  constructor(private prismaService: PrismaService) {}

  async createMany(items: CreateOrderItemRequest): Promise<void> {
    await this.prismaService.orderItem.createMany({
      data: items,
    });
  }
}
