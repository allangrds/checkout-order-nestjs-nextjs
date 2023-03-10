import { Injectable } from '@nestjs/common';

import { OrderProps } from '@app/entities';
import {
  ItemsRepository,
  OrdersItemsRepository,
  OrdersRepository,
} from '../../repositories';

//todo fix-it
type CreateOrderRequest = Omit<
  OrderProps,
  'id' | 'createdAt' | 'updatedAt' | 'totalItems' | 'totalPrice'
> & {
  items: {
    id: number;
    quantity: number;
  }[];
};

@Injectable()
export class CreateOrder {
  constructor(
    private ordersRepository: OrdersRepository,
    private itemsRepository: ItemsRepository,
    private ordersItemsRepository: OrdersItemsRepository,
  ) {}

  async execute(raw: CreateOrderRequest): Promise<OrderProps> {
    const { items: rawItems, ...restRaw } = raw;

    const getItemsInformations = async () => {
      const itemsIds = rawItems.map((item) => item.id);
      const itemsFromDatabase = await this.itemsRepository.findManyByIds(
        itemsIds,
      );
      const totalItems = raw.items.reduce(
        (acc, item) => acc + item.quantity,
        0,
      );

      const totalPrice = itemsFromDatabase.reduce((acc, item) => {
        const { quantity } = raw.items.find((i) => i.id === item.id) || {
          quantity: 0,
        };

        return acc + Number(item.price) * quantity;
      }, 0);

      return {
        items: itemsFromDatabase,
        totalItems,
        totalPrice,
      };
    };

    const { items, totalItems, totalPrice } = await getItemsInformations();

    const createOrder = async () => {
      const payload = { ...restRaw, totalItems, totalPrice };
      const response = await this.ordersRepository.create(payload);

      return response;
    };

    const response = await createOrder();

    const createOrderItems = async () => {
      const payload = rawItems.map((item) => {
        const itemPrice = items.find((i) => i.id === item.id)?.price || 0;

        return {
          orderId: response.id,
          itemId: item.id,
          quantity: item.quantity,
          unitaryPrice: Number(itemPrice),
          totalPrice: Number(itemPrice) * item.quantity,
        };
      });

      await this.ordersItemsRepository.createMany(payload);
    };

    createOrderItems();

    return response;
  }
}
