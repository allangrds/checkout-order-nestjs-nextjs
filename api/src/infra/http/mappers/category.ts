import { CategoryProps } from '@app/entities';

export class CategoryMapper {
  static toHttp(category: CategoryProps) {
    return {
      id: category.id,
      name: category.name,
      image_id: category.imageId,
      created_at: category.createdAt,
      updated_at: category.updatedAt,
    };
  }
}
