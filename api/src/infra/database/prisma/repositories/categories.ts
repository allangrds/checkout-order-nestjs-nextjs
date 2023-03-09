import { Injectable } from '@nestjs/common';

import { CategoriesRepository } from '@app/repositories/categories';
import { CategoryPropsSnakeCase } from '@app/entities';
import { PrismaService } from '../prisma.service';
import { PrismaCategoryMapper } from '../mappers/categories';

@Injectable()
export class PrismaCategoriesRepository implements CategoriesRepository {
  constructor(private prismaService: PrismaService) {}

  async list(): Promise<CategoryPropsSnakeCase[]> {
    const categories = await this.prismaService.category.findMany();
    const formatedCategories = categories.map((category) =>
      PrismaCategoryMapper.toDomain(category),
    );

    return formatedCategories;
  }
}
