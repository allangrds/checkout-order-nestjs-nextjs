import { Injectable } from '@nestjs/common';

import { ItemProps } from './../../entities';
import { ItemsRepository } from '../../repositories';

@Injectable()
export class GetItems {
  constructor(private itemsRepository: ItemsRepository) {}

  async execute(): Promise<ItemProps[]> {
    const items = await this.itemsRepository.list();

    return items;
  }
}
