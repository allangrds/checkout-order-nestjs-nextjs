import { ItemProps } from '@app/entities';

export class ItemMapper {
  static toHttp(item: ItemProps) {
    return {
      id: item.id,
      name: item.name,
      image_id: item.imageId,
      price: item.price,
      category_id: item.categoryId,
      created_at: item.createdAt,
      updated_at: item.updatedAt,
    };
  }
}
