import { Body, Controller, Post } from '@nestjs/common';

import { CreateOrder } from './../../../app/use-cases';
import { CreateOrderDto } from './../dto/create-order';
import { OrderMapper } from './../mappers/order';

@Controller('orders')
export class OrdersController {
  constructor(private createOrder: CreateOrder) {}

  @Post()
  async create(@Body() body: CreateOrderDto) {
    const {
      credit_card_number,
      credit_card_holder_name,
      credit_card_cvv,
      credit_card_expiration_at,
      items,
    } = body;
    const order = await this.createOrder.execute({
      creditCardNumber: String(credit_card_number),
      creditCardHolderName: String(credit_card_holder_name),
      creditCardCvv: String(credit_card_cvv),
      creditCardExpirationAt: String(credit_card_expiration_at),
      items,
    });
    const response = OrderMapper.toHttp(order);

    return response;
  }
}
