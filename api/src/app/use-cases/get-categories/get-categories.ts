import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from '../../repositories';

type GetCategoriesResponse = {
  id: number;
  name: string;
  image_id: string;
  created_at: Date;
  updated_at: Date;
};

@Injectable()
export class GetCategories {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute(): Promise<GetCategoriesResponse[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}
