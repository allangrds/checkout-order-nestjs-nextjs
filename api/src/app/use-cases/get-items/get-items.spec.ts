import { InMemoryItemsRepository } from '../../../../test/repositories';
import { GetItems } from './get-items';

describe('GetItems', () => {
  it('should be able to get items list', async () => {
    const itemsRepository = new InMemoryItemsRepository();
    const getItems = new GetItems(itemsRepository);
    const items = await getItems.execute();

    expect(items).toEqual([
      {
        id: 1,
        name: 'Bakery',
        image_id: 'f3fbf57b118fa9',
        category_id: 1,
        price: 199,
        created_at: new Date('2023-03-08T16:49:26.177Z'),
        updated_at: new Date('2023-03-08T16:49:26.177Z'),
      },
      {
        id: 2,
        name: 'Entrees',
        image_id: 'b271afbefdc554',
        category_id: 2,
        price: 299,
        created_at: new Date('2023-03-08T16:49:26.177Z'),
        updated_at: new Date('2023-03-08T16:49:26.177Z'),
      },
    ]);
  });
});
