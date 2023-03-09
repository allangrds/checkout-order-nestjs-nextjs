import { Module } from '@nestjs/common';

import { GetCategories, GetItems, CreateOrder } from '@app/use-cases';
import { DatabaseModule } from '@infra/database/database.module';
import {
  CategoriesController,
  ItemsController,
  OrdersController,
} from './controllers';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoriesController, ItemsController, OrdersController],
  providers: [GetCategories, GetItems, CreateOrder],
})
export class HttpModule {}
