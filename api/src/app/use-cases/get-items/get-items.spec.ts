import { InMemoryItemsRepository } from '../../../../test/repositories';
import { GetItems } from './get-items';

describe('GetItems', () => {
  it('should be able to get items list', async () => {
    const itemsRepository = new InMemoryItemsRepository();
    const getItems = new GetItems(itemsRepository);
    const items = await getItems.execute();

    expect(items).toEqual([
      {
        _id: 1,
        _name: 'Bakery',
        _imageId: 'f3fbf57b118fa9',
        _categoryId: 1,
        _price: 199,
        _createdAt: new Date('2023-03-08T16:49:26.177Z'),
        _updatedAt: new Date('2023-03-08T16:49:26.177Z'),
      },
      {
        _id: 2,
        _name: 'Entrees',
        _imageId: 'b271afbefdc554',
        _categoryId: 2,
        _price: 299,
        _createdAt: new Date('2023-03-08T16:49:26.177Z'),
        _updatedAt: new Date('2023-03-08T16:49:26.177Z'),
      },
    ]);
  });
});
