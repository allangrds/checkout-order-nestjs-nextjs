import { Module } from '@nestjs/common';

import { CategoriesRepository, ItemsRepository } from '../../app/repositories';

import { PrismaService } from './prisma/prisma.service';
import {
  PrismaCategoriesRepository,
  PrismaItemsRepository,
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
  ],
  exports: [CategoriesRepository, ItemsRepository],
})
export class DatabaseModule {}
