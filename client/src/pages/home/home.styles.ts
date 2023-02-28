import { styled } from '@/theme'

export const Showcase = styled('div', {
  display: 'grid',
  gap: '$4',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
})

export const ItemName = styled('p', {
  fontWeight: '$semibold',
  fontSize: '$xl',
})

export const Header = styled('header', {
  borderBottom: '1px solid $gray6',
})

export const Nav = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row-reverse',
})
