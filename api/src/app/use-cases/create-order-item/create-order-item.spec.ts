import { InMemoryOrdersItemsRepository } from '../../../../test/repositories';
import { CreateOrderItem } from './create-order-item';

describe('CreateOrderItem', () => {
  it('should be able to get categories list', async () => {
    const ordersItemsRepository = new InMemoryOrdersItemsRepository();
    const createOrderItem = new CreateOrderItem(ordersItemsRepository);
    const payload = [
      {
        orderId: 1,
        itemId: 1,
        quantity: 2,
        unitaryPrice: 199,
        totalPrice: 398,
      },
    ];

    await createOrderItem.execute(payload);
    expect(ordersItemsRepository.orderItems).toEqual([
      {
        _id: 0,
        _orderId: 1,
        _itemId: 1,
        _quantity: 2,
        _unitaryPrice: 199,
        _totalPrice: 398,
        _createdAt: ordersItemsRepository.orderItems[0].createdAt,
        _updatedAt: ordersItemsRepository.orderItems[0].updatedAt,
      },
    ]);
  });
});
