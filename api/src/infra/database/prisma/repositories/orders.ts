import { Injectable } from '@nestjs/common';

import { OrdersRepository } from '@app/repositories';
import { OrderProps } from '@app/entities';
import { PrismaService } from '../prisma.service';
import { PrismaOrderMapper } from '../mappers';

type CreateOrderRequest = Omit<OrderProps, 'id' | 'createdAt' | 'updatedAt'>;

@Injectable()
export class PrismaOrdersRepository implements OrdersRepository {
  constructor(private prismaService: PrismaService) {}

  async create(order: CreateOrderRequest): Promise<OrderProps> {
    const savedData = await this.prismaService.order.create({
      data: order,
      select: {
        id: true,
        totalPrice: true,
        creditCardCvv: true,
        creditCardHolderName: true,
        creditCardNumber: true,
        creditCardExpirationAt: true,
        totalItems: true,
        items: {
          select: {
            id: true,
            name: true,
            price: true,
          },
        },
        createdAt: true,
        updatedAt: true,
      },
    });

    const response = PrismaOrderMapper.toDomain(savedData);

    return response;
  }
}
