import { styled } from '@/theme'

export const Button = styled('button', {
  alignItems: 'center',
  appearance: 'none',
  cursor: 'pointer',
  display: 'inline-flex',
  fontWeight: '$semibold',
  flexGrow: '$$flexGrow',
  lineHeight: 1.2,
  justifyContent: 'center',
  outline: 'transparent solid 2px',
  outlineOffset: '2px',
  position: 'relative',
  transitionProperty: 'background-color,border-color,color,fill,stroke,opacity,box-shadow,transform',
  transitionDuration: '200ms',
  userSelect: 'none',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
  fontSize: '$md',
  borderRadius: '$base',

  height: '$10',
  minWidth: '$10',
  paddingInlineStart: '$4',
  paddingInlineEnd: '$4',

  variants: {
    colorScheme: {
      green: {},
      gray: {},
    },
    variant: {
      solid: {
        border: 'none',
      },
      outline: {},
    },
  },
  compoundVariants: [
    {
      colorScheme: 'green',
      variant: 'solid',
      css: {
        backgroundColor: '$green9',
        '&:hover': {
          backgroundColor: '$green10',
        },
        '&:enabled': {
          color: 'white',
        },
        '&:disabled': {
          backgroundColor: '$green5',
          color: '$green12',
        },
      },
    },
    {
      colorScheme: 'green',
      variant: 'outline',
      css: {
        border: '1px solid $green6',
        backgroundColor: 'white',
        '&:hover': {
          backgroundColor: '$green1',
          color: '$green12',
        },
        '&:enabled': {
          color: '$green11',
        },
      },
    },
    {
      colorScheme: 'gray',
      variant: 'solid',
      css: {
        backgroundColor: '$gray9',
        color: 'white',
        '&:hover': {
          backgroundColor: '$gray10',
        },
        '&:enabled': {
          color: 'white',
        },
      },
    },
    {
      colorScheme: 'gray',
      variant: 'outline',
      css: {
        backgroundColor: 'transparent',
        border: '1px solid $gray6',
        color: '$gray12',
        '&:hover': {
          backgroundColor: '$gray1',
          color: '$gray12',
        },
        '&:enabled': {
          color: '$gray11',
        },
      },
    },
  ],
  defaultVariants: {
    colorScheme: 'gray',
    variant: 'solid',
  },
})
