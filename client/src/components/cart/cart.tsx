import * as React from 'react'

import { CartItem } from '@/types'
import { moneyFormat } from '@/utils'

import { Button } from '../button'

import * as S from './cart.styles'

type Props = {
  items: CartItem[]
  onClickCheckout: () => void
  onClickRemoveItem: (id: number) => void
}

export const Cart = ({
  items = [],
  onClickCheckout,
  onClickRemoveItem,
}: Props) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const itemsOnCart = items.reduce((acc, item) => acc + item.quantity, 0)
  const totalPrice = items.reduce(
    (acc, item) => acc + item.quantity * item.unitary_price,
    0
  )

  return (
    <S.Wrapper>
      <Button
        colorScheme="gray"
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
      >
        Cart ({itemsOnCart})
      </Button>
      {isOpen ? (
        <S.Cart>
          {items.length === 0 && <p>Cart is empty</p>}
          {items.length > 0 ? (
            <>
              <S.CartTotalPrice>
                Total price: {moneyFormat(totalPrice)}
              </S.CartTotalPrice>
              <Button
                variant="solid"
                colorScheme="green"
                fullWidth
                onClick={onClickCheckout}
                css={{
                  marginBottom: '$6',
                }}
              >
                Checkout
              </Button>
            </>
          ) : undefined}
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <S.ItemName>{item.name}</S.ItemName>
              <S.ItemNormalText>Quantity {item.quantity}</S.ItemNormalText>
              <S.ItemNormalText>
                Price: {moneyFormat(item.unitary_price * item.quantity)}
              </S.ItemNormalText>
              <Button
                variant="outline"
                onClick={() => onClickRemoveItem(item.id)}
                css={{
                  marginTop: '$4',
                }}
              >
                Remove
              </Button>
            </S.CartItem>
          ))}
        </S.Cart>
      ) : undefined}
    </S.Wrapper>
  )
}
