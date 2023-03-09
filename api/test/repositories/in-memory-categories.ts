import { CategoriesRepository } from '../../src/app/repositories/categories';
import { Category, CategoryPropsSnakeCase } from '../../src/app/entities';

export class InMemoryCategoriesRepository implements CategoriesRepository {
  public categories: Category[] = [];

  constructor() {
    this.categories = [
      new Category({
        id: 1,
        name: 'Bakery',
        imageId: 'f3fbf57b118fa9',
        createdAt: new Date('2023-03-08T16:49:26.177Z'),
        updatedAt: new Date('2023-03-08T16:49:26.177Z'),
      }),
      new Category({
        id: 2,
        name: 'Entrees',
        imageId: 'b271afbefdc554',
        createdAt: new Date('2023-03-08T16:49:26.177Z'),
        updatedAt: new Date('2023-03-08T16:49:26.177Z'),
      }),
    ];
  }

  async list(): Promise<CategoryPropsSnakeCase[]> {
    return this.categories.map((category) => category.toJSON());
  }
}
