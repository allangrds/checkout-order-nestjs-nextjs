import { ItemProps } from '../entities';

export abstract class ItemsRepository {
  abstract list(): Promise<ItemProps[]>;
  abstract findManyByIds(ids: number[]): Promise<ItemProps[]>;
}
