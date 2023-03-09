import { CategoryPropsSnakeCase } from '../entities';

export abstract class CategoriesRepository {
  abstract list(): Promise<CategoryPropsSnakeCase[]>;
}
