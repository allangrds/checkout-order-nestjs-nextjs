import { Injectable } from '@nestjs/common';

import { ItemsRepository } from '@app/repositories';
import { ItemPropsSnakeCase } from '@app/entities';
import { PrismaService } from '../prisma.service';
import { PrismaItemMapper } from '../mappers';

@Injectable()
export class PrismaItemsRepository implements ItemsRepository {
  constructor(private prismaService: PrismaService) {}

  async list(): Promise<ItemPropsSnakeCase[]> {
    const items = await this.prismaService.item.findMany();
    const formatedItems = items.map((category) =>
      PrismaItemMapper.toDomain(category),
    );

    return formatedItems;
  }
}
