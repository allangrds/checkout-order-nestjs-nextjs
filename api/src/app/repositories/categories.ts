import { CategoryProps } from '../entities';

export abstract class CategoriesRepository {
  abstract list(): Promise<CategoryProps[]>;
}
