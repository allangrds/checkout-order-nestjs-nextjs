import * as React from 'react'

import { CartItem } from '@/types'

type CartItemToAdd = Omit<CartItem, "quantity">

type Cart = {
  items: CartItem[]
  addItem: (item: CartItemToAdd) => void
  removeItem: (id: number) => void
  removeQuantity: (id: number) => void
}

type CartAction =
  | {
      type: 'ADD_ITEM'
      payload: {
        item: CartItemToAdd
      }
    }
  | {
    type: 'REMOVE_ITEM'
    payload: {
      id: number
    }
  }
  | {
    type: 'REMOVE_ITEM_QUANTITY'
    payload: {
      id: number
    }
  }


const CartContext = React.createContext<Cart>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  removeQuantity: () => {},
})

const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case 'ADD_ITEM':
      const itemExists = state.find(item => item.id === action.payload.item.id)

      if (itemExists) {
        return state.map(item => {
          if (item.id === action.payload.item.id) {
            return { ...item, quantity: item.quantity + 1 }
          }

          return item
        })
      }

      const formatedItem = {
        ...action.payload.item,
        quantity: 1
      }

      return [...state, formatedItem]
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload.id)
    case 'REMOVE_ITEM_QUANTITY':
      const stateWithoutItem = state.filter(item => item.id !== action.payload.id)
      const item = state.find(item => item.id === action.payload.id)

      if (!item) {
        return state
      }

      if (item.quantity === 1) {
        return stateWithoutItem
      }

      return [...stateWithoutItem, { ...item, quantity: item.quantity - 1 }]
    default:
      throw new Error('Invalid action type')
  }
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, dispatch] = React.useReducer(cartReducer, [])

  const addItem = (item: CartItemToAdd) => {
    dispatch({ type: 'ADD_ITEM', payload: { item } })
  }

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } })
  }

  const removeQuantity = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM_QUANTITY', payload: { id } })
  }

  const cart: Cart = {
    items,
    addItem,
    removeItem,
    removeQuantity,
  };

  return (
    <CartContext.Provider value={cart}>
      { children }
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = React.useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a Provider')
  }

  return context
}
