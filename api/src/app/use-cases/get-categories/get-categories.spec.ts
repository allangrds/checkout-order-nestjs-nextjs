import { InMemoryCategoriesRepository } from '../../../../test/repositories/in-memory-categories';
import { GetCategories } from './get-categories';

describe('GetCategories', () => {
  it('should be able to get categories list', async () => {
    const categoriesRepository = new InMemoryCategoriesRepository();
    const getCategories = new GetCategories(categoriesRepository);
    const categories = await getCategories.execute();

    expect(categories).toEqual([
      {
        id: 1,
        name: 'Bakery',
        image_id: 'f3fbf57b118fa9',
        created_at: new Date('2023-03-08T16:49:26.177Z'),
        updated_at: new Date('2023-03-08T16:49:26.177Z'),
      },
      {
        id: 2,
        name: 'Entrees',
        image_id: 'b271afbefdc554',
        created_at: new Date('2023-03-08T16:49:26.177Z'),
        updated_at: new Date('2023-03-08T16:49:26.177Z'),
      },
    ]);
  });
});
