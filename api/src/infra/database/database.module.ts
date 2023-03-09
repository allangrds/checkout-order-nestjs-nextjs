import { Module } from '@nestjs/common';

import { CategoriesRepository } from '../../app/repositories/categories';

import { PrismaService } from './prisma/prisma.service';
import { PrismaCategoriesRepository } from './prisma/repositories/categories';

@Module({
  providers: [
    PrismaService,
    {
      provide: CategoriesRepository,
      useClass: PrismaCategoriesRepository,
    },
  ],
  exports: [CategoriesRepository],
})
export class DatabaseModule {}
