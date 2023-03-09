import { Controller, Get } from '@nestjs/common';

import { GetItems } from './../../../app/use-cases';

@Controller('items')
export class ItemsController {
  constructor(private getItems: GetItems) {}

  @Get()
  list() {
    const items = this.getItems.execute();

    return items;
  }
}
