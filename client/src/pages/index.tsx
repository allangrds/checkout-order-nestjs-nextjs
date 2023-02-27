import * as React from 'react'

import Head from 'next/head'

import { useCategories, useItems, useOrders } from '@/hooks'

const FAD = () => {
  const { categories, listCategories } = useCategories()
  const { items, listItems } = useItems()
  const { order, createOrder } = useOrders()

  React.useEffect(() => {
    listCategories()
    listItems()
    createOrder({})
  }, [])

  console.log('categories -> ', categories)
  console.log('items -> ', items)
  console.log('order -> ', order)

  return (
    <>
      <Head>
        <title>Mashgin - Client</title>
      </Head>
      <p>FAD</p>
    </>
  )
}

export default FAD
