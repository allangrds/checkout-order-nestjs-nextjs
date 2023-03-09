import { Controller, Get } from '@nestjs/common';

import { GetItems } from './../../../app/use-cases';
import { ItemMapper } from '../mappers';

@Controller('items')
export class ItemsController {
  constructor(private getItems: GetItems) {}

  @Get()
  async list() {
    const items = await this.getItems.execute();
    const response = items.map((item) => ItemMapper.toHttp(item));

    return response;
  }
}
