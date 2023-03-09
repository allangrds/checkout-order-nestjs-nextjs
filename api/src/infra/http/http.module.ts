import { Module } from '@nestjs/common';

import { GetCategories } from '@app/use-cases/get-categories';
import { DatabaseModule } from '@infra/database/database.module';
import { CategoriesController } from './controllers/categories.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoriesController],
  providers: [GetCategories],
})
export class HttpModule {}
