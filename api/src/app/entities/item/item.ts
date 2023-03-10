import { Replace } from 'src/helpers';

export type ItemProps = {
  id: number;
  name: string;
  categoryId: number;
  price: number;
  imageId: string;
  createdAt: Date;
  updatedAt: Date;
};

export class Item {
  private _id: number;
  private _name: string;
  private _categoryId: number;
  private _price: number;
  private _imageId: string;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(
    props: Replace<
      ItemProps,
      {
        id?: number;
        createdAt?: Date;
        updatedAt?: Date;
      }
    >,
  ) {
    this._imageId = props.imageId;
    this._categoryId = props.categoryId;
    this._createdAt = props.createdAt || new Date();
    this._name = props.name;
    this._updatedAt = props.updatedAt || new Date();
    this._id = props.id || 0;
    this._price = props.price;
  }

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get imageId(): string {
    return this._imageId;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public get updatedAt(): Date {
    return this._updatedAt;
  }

  public get categoryId(): number {
    return this._categoryId;
  }

  public get price(): number {
    return this._price;
  }
}
