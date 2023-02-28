import * as React from 'react'

import { moneyFormat } from '@/utils'
import { CartItem } from '@/types'

import { Button } from '../button'

import * as S from './cart.styles'

type Props = {
  items: CartItem[]
}

export const Cart = ({ items = [] }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const itemsOnCart = items.reduce((acc, item) => acc + item.quantity, 0)
  const totalPrice = items.reduce((acc, item) => (
    acc + (item.quantity * item.unitary_price)
  ), 0)

  return (
    <S.Wrapper>
      <Button
        colorScheme="gray"
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
      >
        Cart ({ itemsOnCart })
      </Button>
      {
        isOpen ? (
          <S.Cart>
            {
              items.length === 0 && (
                <p>Cart is empty</p>
              )
            }
            {
              items.map((item) => (
                <S.CartItem key={item.id}>
                  <S.ItemName>
                    { item.name }
                  </S.ItemName>
                  <S.ItemNormalText>
                    Quantity: { item.quantity }
                  </S.ItemNormalText>
                  <S.ItemNormalText>
                    Price: { moneyFormat(item.unitary_price * item.quantity) }
                  </S.ItemNormalText>
                </S.CartItem>
              ))
            }
            {
              items.length > 0 ? (
                <S.CartTotalPrice>
                  Total price: { moneyFormat(totalPrice) }
                </S.CartTotalPrice>
              ) : undefined
            }
            <Button
              variant="solid"
              colorScheme="green"
              fullWidth
              onClick={() => console.log('d')}
            >
              Checkout
            </Button>
          </S.Cart>
        ) : undefined
      }
    </S.Wrapper>
  )
}
