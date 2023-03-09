import { Replace } from 'src/helpers';

export type OrderProps = {
  id: number;
  creditCardNumber: string;
  creditCardHolderName: string;
  creditCardCvv: string;
  creditCardExpirationAt: string;
  totalItems: number;
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
};

export class Order {
  private _id: number;
  private _creditCardNumber: string;
  private _creditCardHolderName: string;
  private _creditCardCvv: string;
  private _creditCardExpirationAt: string;
  private _totalItems: number;
  private _totalPrice: number;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(
    props: Replace<
      OrderProps,
      {
        id?: number;
        createdAt?: Date;
        updatedAt?: Date;
      }
    >,
  ) {
    this._creditCardNumber = props.creditCardNumber;
    this._creditCardHolderName = props.creditCardHolderName;
    this._creditCardCvv = props.creditCardCvv;
    this._creditCardExpirationAt = props.creditCardExpirationAt;
    this._totalItems = props.totalItems;
    this._totalPrice = props.totalPrice;
    this._updatedAt = props.updatedAt || new Date();
    this._createdAt = props.createdAt || new Date();
    this._id = props.id || 0;
  }

  public get id(): number {
    return this._id;
  }

  public get creditCardNumber(): string {
    return this._creditCardNumber;
  }

  public get creditCardHolderName(): string {
    return this._creditCardHolderName;
  }

  public get creditCardCvv(): string {
    return this._creditCardCvv;
  }

  public get creditCardExpirationAt(): string {
    return this._creditCardExpirationAt;
  }

  public get totalItems(): number {
    return this._totalItems;
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
