import { Module } from '@nestjs/common';

import { GetCategories, GetItems } from '@app/use-cases';
import { DatabaseModule } from '@infra/database/database.module';
import { CategoriesController, ItemsController } from './controllers';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoriesController, ItemsController],
  providers: [GetCategories, GetItems],
})
export class HttpModule {}
