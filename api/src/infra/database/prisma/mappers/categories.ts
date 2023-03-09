import { Category as RawCategory } from '@prisma/client';
import { Category, CategoryPropsSnakeCase } from '@app/entities';

export class PrismaCategoryMapper {
  static toDomain(prismaCategory: RawCategory): CategoryPropsSnakeCase {
    const category = new Category({
      id: prismaCategory.id,
      name: prismaCategory.name,
      imageId: prismaCategory.imageId,
      createdAt: prismaCategory.createdAt,
      updatedAt: prismaCategory.updatedAt,
    });

    return category.toJSON();
  }
}
