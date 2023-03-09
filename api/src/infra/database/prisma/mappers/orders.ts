import { OrderProps } from '@app/entities';

export class PrismaOrderMapper {
  static toPrisma(order: OrderProps) {
    return {
      id: order.id,
      creditCardNumber: order.creditCardNumber,
      creditCardHolderName: order.creditCardHolderName,
      creditCardExpirationAt: order.creditCardExpirationAt,
      creditCardCvv: order.creditCardCvv,
      totalItems: order.totalItems,
      totalPrice: order.totalPrice,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt,
    };
  }
  static toDomain(order: OrderProps) {
    return {
      id: order.id,
      creditCardNumber: order.creditCardNumber,
      creditCardHolderName: order.creditCardHolderName,
      creditCardExpirationAt: order.creditCardExpirationAt,
      creditCardCvv: order.creditCardCvv,
      totalItems: order.totalItems,
      totalPrice: order.totalPrice,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt,
    };
  }
}
