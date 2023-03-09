import { ItemPropsSnakeCase } from '../entities';

export abstract class ItemsRepository {
  abstract list(): Promise<ItemPropsSnakeCase[]>;
}
