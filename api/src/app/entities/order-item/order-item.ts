import { Replace } from 'src/helpers';

export type OrderItemProps = {
  id: number;
  orderId: number;
  itemId: number;
  quantity: number;
  unitaryPrice: number;
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
};

export class OrderItem {
  private _id: number;
  private _orderId: number;
  private _itemId: number;
  private _quantity: number;
  private _unitaryPrice: number;
  private _totalPrice: number;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(
    props: Replace<
      OrderItemProps,
      {
        id?: number;
        createdAt?: Date;
        updatedAt?: Date;
      }
    >,
  ) {
    this._updatedAt = props.updatedAt || new Date();
    this._createdAt = props.createdAt || new Date();
    this._id = props.id || 0;
    this._orderId = props.orderId;
    this._itemId = props.itemId;
    this._quantity = props.quantity;
    this._unitaryPrice = props.unitaryPrice;
    this._totalPrice = props.totalPrice;
  }

  public get id(): number {
    return this._id;
  }

  public get orderId(): number {
    return this._orderId;
  }

  public get itemId(): number {
    return this._itemId;
  }

  public get quantity(): number {
    return this._quantity;
  }

  public get unitaryPrice(): number {
    return this._unitaryPrice;
  }

  public get totalPrice(): number {
    return this._totalPrice;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public get updatedAt(): Date {
    return this._updatedAt;
  }
}
