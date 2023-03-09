import {
  ArrayMinSize,
  IsCreditCard,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';
import { Type } from 'class-transformer';

import { OrderProps } from '@app/entities';

class Items {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}

//todo - fix this
type ItemsProps = {
  id: number;
  quantity: number;
}[];

export class CreateOrderDto {
  @IsNotEmpty()
  @ArrayMinSize(1)
  @Type(() => Items)
  items: ItemsProps;

  @IsNotEmpty()
  @IsString()
  @IsCreditCard()
  credit_card_number: OrderProps['creditCardNumber'];

  @IsNotEmpty()
  @IsString()
  @Length(4, 80)
  credit_card_holder_name: OrderProps['creditCardHolderName'];

  @IsNotEmpty()
  @IsString()
  @Length(3, 3)
  credit_card_cvv: OrderProps['creditCardCvv'];

  @IsNotEmpty()
  @IsString()
  @Length(4, 4)
  credit_card_expiration_at: OrderProps['creditCardExpirationAt'];
}
