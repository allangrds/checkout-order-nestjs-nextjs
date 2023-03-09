import { Injectable } from '@nestjs/common';
import { ItemsRepository } from '../../repositories';

type GetItemsResponse = {
  id: number;
  name: string;
  image_id: string;
  category_id: number;
  price: number;
  created_at: Date;
  updated_at: Date;
};

@Injectable()
export class GetItems {
  constructor(private itemsRepository: ItemsRepository) {}

  async execute(): Promise<GetItemsResponse[]> {
    const items = await this.itemsRepository.list();

    return items;
  }
}
