import { Order } from './order';

describe('Order', () => {
  it('should create an instance', () => {
    const props = {
      creditCardNumber: '1234567890123456',
      creditCardHolderName: 'John Doe',
      creditCardCvv: '123',
      creditCardExpirationAt: '1024',
      totalItems: 2,
      totalPrice: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const order = new Order(props);

    expect(order).toBeTruthy();
  });
});
