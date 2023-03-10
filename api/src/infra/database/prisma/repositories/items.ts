import { Injectable } from '@nestjs/common';

import { ItemsRepository } from '@app/repositories';
import { ItemProps } from '@app/entities';
import { PrismaService } from '../prisma.service';
import { PrismaItemMapper } from '../mappers';

@Injectable()
export class PrismaItemsRepository implements ItemsRepository {
  constructor(private prismaService: PrismaService) {}

  async list(): Promise<ItemProps[]> {
    const items = await this.prismaService.item.findMany();
    const formatedItems = items.map((category) =>
      PrismaItemMapper.toDomain(category),
    );

    return formatedItems;
  }
  async findManyByIds(ids: number[]): Promise<ItemProps[]> {
    const items = await this.prismaService.item.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    const formatedItems = items.map((category) =>
      PrismaItemMapper.toDomain(category),
    );

    return formatedItems;
  }
}
