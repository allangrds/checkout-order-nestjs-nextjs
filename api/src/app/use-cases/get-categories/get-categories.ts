import { Injectable } from '@nestjs/common';

import { CategoryProps } from '@app/entities';
import { CategoriesRepository } from '../../repositories';

type GetCategoriesResponse = CategoryProps;
@Injectable()
export class GetCategories {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute(): Promise<GetCategoriesResponse[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}
