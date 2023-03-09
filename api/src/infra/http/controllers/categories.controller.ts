import { Controller, Get } from '@nestjs/common';

import { GetCategories } from './../../../app/use-cases/get-categories';

@Controller('categories')
export class CategoriesController {
  constructor(private getCategories: GetCategories) {}

  @Get()
  list() {
    const categories = this.getCategories.execute();

    return categories;
  }
}
