import { InMemoryCategoriesRepository } from '../../../../test/repositories';
import { GetCategories } from './get-categories';

describe('GetCategories', () => {
  it('should be able to get categories list', async () => {
    const categoriesRepository = new InMemoryCategoriesRepository();
    const getCategories = new GetCategories(categoriesRepository);
    const categories = await getCategories.execute();

    expect(categories).toEqual([
      {
        _id: 1,
        _name: 'Bakery',
        _imageId: 'f3fbf57b118fa9',
        _createdAt: new Date('2023-03-08T16:49:26.177Z'),
        _updatedAt: new Date('2023-03-08T16:49:26.177Z'),
      },
      {
        _id: 2,
        _name: 'Entrees',
        _imageId: 'b271afbefdc554',
        _createdAt: new Date('2023-03-08T16:49:26.177Z'),
        _updatedAt: new Date('2023-03-08T16:49:26.177Z'),
      },
    ]);
  });
});
