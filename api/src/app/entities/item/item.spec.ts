import { Item } from './item';

describe('Item', () => {
  it('should create an instance', () => {
    const props = {
      name: 'test',
      imageId: 'test',
      categoryId: 1,
      price: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const item = new Item(props);

    expect(item).toBeTruthy();
  });
});
