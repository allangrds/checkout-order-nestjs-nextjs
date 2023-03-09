import { Injectable } from '@nestjs/common';

import { CategoriesRepository } from '@app/repositories/categories';
import { CategoryProps } from '@app/entities';
import { PrismaService } from '../prisma.service';
import { PrismaCategoryMapper } from '../mappers';

@Injectable()
export class PrismaCategoriesRepository implements CategoriesRepository {
  constructor(private prismaService: PrismaService) {}

  async list(): Promise<CategoryProps[]> {
    const categories = await this.prismaService.category.findMany();
    const formatedCategories = categories.map((category) =>
      PrismaCategoryMapper.toDomain(category),
    );

    return formatedCategories;
  }
}
