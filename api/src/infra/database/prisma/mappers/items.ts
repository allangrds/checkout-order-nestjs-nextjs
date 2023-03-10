import { Item as RawItem } from '@prisma/client';
import { Item, ItemProps } from '@app/entities';

export class PrismaItemMapper {
  static toDomain(prismaCategory: RawItem): ItemProps {
    const item = new Item({
      id: prismaCategory.id,
      name: prismaCategory.name,
      imageId: prismaCategory.imageId,
      categoryId: prismaCategory.categoryId,
      price: prismaCategory.price,
      createdAt: prismaCategory.createdAt,
      updatedAt: prismaCategory.updatedAt,
    });

    return item;
  }
}
