import { ItemsRepository } from '../../src/app/repositories';
import { Item, ItemPropsSnakeCase } from '../../src/app/entities';

export class InMemoryItemsRepository implements ItemsRepository {
  public items: Item[] = [];

  constructor() {
    this.items = [
      new Item({
        id: 1,
        name: 'Bakery',
        imageId: 'f3fbf57b118fa9',
        categoryId: 1,
        price: 199,
        createdAt: new Date('2023-03-08T16:49:26.177Z'),
        updatedAt: new Date('2023-03-08T16:49:26.177Z'),
      }),
      new Item({
        id: 2,
        name: 'Entrees',
        imageId: 'b271afbefdc554',
        categoryId: 2,
        price: 299,
        createdAt: new Date('2023-03-08T16:49:26.177Z'),
        updatedAt: new Date('2023-03-08T16:49:26.177Z'),
      }),
    ];
  }

  async list(): Promise<ItemPropsSnakeCase[]> {
    return this.items.map((item) => item.toJSON());
  }
}
