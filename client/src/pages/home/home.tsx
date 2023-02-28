import * as React from 'react'

import { Button, Card, Cart, Container } from '@/components'
import { useCategories, useItems, useCart } from '@/hooks'
import { moneyFormat } from '@/utils'
import { Item } from '@/types'

import * as S from './home.styles'

export const Home = () => {
  const {
    categories,
    loading: loadingCategories,
    error: errorCategories,
    listCategories
  } = useCategories()
  const {
    items,
    loading: loadingItems,
    error: errorItems,
    listItems
  } = useItems()
  const { addItem, items: cartItems } = useCart()

  React.useEffect(() => {
    listCategories()
    listItems()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAddItem = (item: Item) => {
    const formatedItem = {
      id: item.id,
      name: item.name,
      quantity: 1,
      unitary_price: item.price,
    }

    addItem(formatedItem)
  }

  const isLoading = loadingCategories || loadingItems
  const hasError = errorCategories || errorItems

  return (
    <>
      <S.Header>
        <Container>
          <S.Nav>
            <Cart items={cartItems}/>
          </S.Nav>
        </Container>
      </S.Header>
      {
        isLoading ? (
          <p>
            Loading...
          </p>
        ) : undefined
      }
      {
        !isLoading && hasError ? (
          <p>
            Error on retrieve items. Try again later.
          </p>
        ) : undefined
      }
      {
        !isLoading && !hasError && items.length === 0 ? (
          <p>
            No items found.
          </p>
        ) : undefined
      }
      <Container>
        <S.Showcase>
          {
            items.map(item => (
              <Card key={item.id}>
                <S.ItemName>{item.name}</S.ItemName>
                <p>{moneyFormat(item.price)}</p>
                <Button
                  fullWidth
                  colorScheme="green"
                  variant="outline"
                  onClick={() => handleAddItem(item)}
                  css={{
                    marginTop: '$4'
                  }}
                >
                  Add to cart
                </Button>
              </Card>
            ))
          }
        </S.Showcase>
      </Container>
    </>
  )
}
