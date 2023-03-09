import { CamelCaseToSnakeCase, Replace } from 'src/helpers';

export type CategoryProps = {
  id: number;
  name: string;
  imageId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CategoryPropsSnakeCase = {
  [K in keyof CategoryProps as CamelCaseToSnakeCase<
    string & K
  >]: CategoryProps[K];
};

export class Category {
  private _id: number;
  private _name: string;
  private _imageId: string;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(
    props: Replace<
      CategoryProps,
      {
        id?: number;
        createdAt?: Date;
        updatedAt?: Date;
      }
    >,
  ) {
    this._imageId = props.imageId;
    this._createdAt = props.createdAt || new Date();
    this._name = props.name;
    this._updatedAt = props.updatedAt || new Date();
    this._id = props.id || 0;
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

  public toJSON(): CategoryPropsSnakeCase {
    return {
      id: this.id,
      name: this.name,
      image_id: this.imageId,
      created_at: this.createdAt,
      updated_at: this.updatedAt,
    };
  }
}
