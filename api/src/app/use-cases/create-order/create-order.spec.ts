import {
  InMemoryOrdersRepository,
  InMemoryItemsRepository,
  InMemoryOrdersItemsRepository,
} from '../../../../test/repositories';
import { CreateOrder } from './create-order';

describe('CreateOrder', () => {
  it('should be able to create an order', async () => {
    const ordersRepository = new InMemoryOrdersRepository();
    const itemsRepository = new InMemoryItemsRepository();
    const ordersItemsRepository = new InMemoryOrdersItemsRepository();

    const createOrder = new CreateOrder(
      ordersRepository,
      itemsRepository,
      ordersItemsRepository,
    );
    const payload = {
      creditCardNumber: '1234567890123456',
      creditCardHolderName: 'John Doe',
      creditCardCvv: '123',
      creditCardExpirationAt: '1024',
      createdAt: new Date('2023-03-08T16:49:26.177Z'),
      updatedAt: new Date('2023-03-08T16:49:26.177Z'),
      items: [
        {
          id: 1,
          quantity: 2,
        },
      ],
    };
    const order = await createOrder.execute(payload);

    expect(order).toEqual({
      _id: 0,
      _creditCardNumber: '1234567890123456',
      _creditCardHolderName: 'John Doe',
      _creditCardCvv: '123',
      _creditCardExpirationAt: '1024',
      _totalItems: 2,
      _totalPrice: 398,
      _createdAt: new Date('2023-03-08T16:49:26.177Z'),
      _updatedAt: new Date('2023-03-08T16:49:26.177Z'),
    });
  });
});
