import { Controller, Get } from '@nestjs/common';

import { GetCategories } from '@app/use-cases';
import { CategoryMapper } from './../mappers/category';

@Controller('categories')
export class CategoriesController {
  constructor(private getCategories: GetCategories) {}

  @Get()
  async list() {
    const categories = await this.getCategories.execute();
    const response = categories.map((category) =>
      CategoryMapper.toHttp(category),
    );

    return response;
  }
}
