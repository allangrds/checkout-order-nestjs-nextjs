import { styled } from '@/theme'

export const Wrapper = styled('div', {
  position: 'relative',
})

export const Cart = styled('div', {
  backgroundColor: '#fff',
  position: 'absolute',
  top: '120%',
  right: 0,
  paddingY: '$6',
  paddingX: '$8',
  borderRadius: '$md',
  boxShadow:
    '0 0 0 1px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%), 0 12px 24px rgb(0 0 0 / 5%);',
  zIndex: 100,
  maxHeight: '280px',
  width: '300px',
  overflowY: 'auto',
})

export const CartItem = styled('div', {
  borderTop: '1px solid $gray3',
  paddingBottom: '$4',

  '&:not(:first-child)': {
    paddingTop: '$4',
  },
})

export const ItemName = styled('p', {
  fontSize: '$md',
  fontWeight: '$semibold',
})

export const ItemNormalText = styled('p', {
  fontSize: '$sm',
})

export const CartTotalPrice = styled('p', {
  fontSize: '$lg',
  fontWeight: '$semibold',
  paddingBottom: '$4',
})
