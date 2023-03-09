import { Module } from '@nestjs/common';

import { PrismaService } from './prisma/prisma.service';
import {
  CategoriesRepository,
  ItemsRepository,
  OrdersItemsRepository,
  OrdersRepository,
} from '../../app/repositories';

import {
  PrismaCategoriesRepository,
  PrismaItemsRepository,
  PrismaOrdersRepository,
  PrismaOrdersItemsRepository,
} from './prisma/repositories';

@Module({
  providers: [
    PrismaService,
    {
      provide: CategoriesRepository,
      useClass: PrismaCategoriesRepository,
    },
    {
      provide: ItemsRepository,
      useClass: PrismaItemsRepository,
    },
    {
      provide: OrdersRepository,
      useClass: PrismaOrdersRepository,
    },
    {
      provide: OrdersItemsRepository,
      useClass: PrismaOrdersItemsRepository,
    },
  ],
  exports: [
    CategoriesRepository,
    ItemsRepository,
    OrdersRepository,
    OrdersItemsRepository,
  ],
})
export class DatabaseModule {}
