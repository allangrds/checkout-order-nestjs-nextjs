import * as React from 'react'

import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { Button, Card, Cart, Container } from '@/components'
import { useCart, useCategories, useItems } from '@/hooks'
import * as S from '@/styles/home.styles'
import { Categories, Item } from '@/types'
import { moneyFormat } from '@/utils'

const findCategory = (categories: Categories[], categoryId: number) => {
  const choosedCategory = categories.find((category: Categories) => (
    category.id === categoryId
  ))

  return choosedCategory
}

const Home = () => {
  const router = useRouter()
  const {
    categories,
    error: errorCategories,
    listCategories,
    loading: loadingCategories,
  } = useCategories()
  const {
    error: errorItems,
    items,
    listItems,
    loading: loadingItems,
  } = useItems()
  const { addItem, items: cartItems, removeItem } = useCart()
  const { t } = useTranslation()

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

  const handleCheckout = () => router.push('/checkout')

  const isLoading = loadingItems || loadingCategories
  const hasError = errorItems || errorCategories

  return (
    <>
      <S.Header>
        <Container>
          <S.Nav>
            <Cart
              items={cartItems}
              onClickCheckout={handleCheckout}
              onClickRemoveItem={removeItem}
            />
          </S.Nav>
        </Container>
      </S.Header>
      <Container>
        <S.Showcase>
          {isLoading ? <p>{ t('pages.home.loading') }</p> : undefined}
          {!isLoading && hasError ? (
            <p>{ t('pages.home.error') }</p>
          ) : undefined}
          {!isLoading && !hasError && items.length === 0 ? (
            <p>{ t('pages.home.empty') }</p>
          ) : undefined}
          {items.map((item) => (
            <Card key={item.id}>
              <S.ItemName>{item.name}</S.ItemName>
              <p>{findCategory(categories, item.category_id)?.name}</p>
              <p>{moneyFormat(item.price)}</p>
              <Button
                fullWidth
                colorScheme="green"
                variant="outline"
                onClick={() => handleAddItem(item)}
                css={{
                  marginTop: '$4',
                }}
              >
                { t('pages.home.items.add-to-cart') }
              </Button>
            </Card>
          ))}
        </S.Showcase>
      </Container>
    </>
  )
}

export default Home
