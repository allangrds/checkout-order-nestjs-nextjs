import { Category as RawCategory } from '@prisma/client';
import { Category, CategoryProps } from '@app/entities';

export class PrismaCategoryMapper {
  static toDomain(prismaCategory: RawCategory): CategoryProps {
    const category = new Category({
      id: prismaCategory.id,
      name: prismaCategory.name,
      imageId: prismaCategory.imageId,
      createdAt: prismaCategory.createdAt,
      updatedAt: prismaCategory.updatedAt,
    });

    return category;
  }
}
