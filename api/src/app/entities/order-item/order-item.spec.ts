import { OrderItem } from './order-item';

describe('OrderItem', () => {
  it('should create an instance', () => {
    const props = {
      orderId: 1,
      itemId: 1,
      quantity: 2,
      unitaryPrice: 100,
      totalPrice: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const orderItem = new OrderItem(props);

    expect(orderItem).toBeTruthy();
  });
});
