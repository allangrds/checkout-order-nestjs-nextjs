import { Category } from './category';

describe('Category', () => {
  it('should create an instance', () => {
    const props = {
      name: 'test',
      imageId: 'test',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const category = new Category(props);

    expect(category).toBeTruthy();
  });
});
