import { Item as RawItem } from '@prisma/client';
import { Item, ItemPropsSnakeCase } from '@app/entities';

export class PrismaItemMapper {
  static toDomain(prismaCategory: RawItem): ItemPropsSnakeCase {
    const item = new Item({
      id: prismaCategory.id,
      name: prismaCategory.name,
      imageId: prismaCategory.imageId,
      categoryId: prismaCategory.categoryId,
      price: prismaCategory.price,
      createdAt: prismaCategory.createdAt,
      updatedAt: prismaCategory.updatedAt,
    });

    return item.toJSON();
  }
}
