import BaseInputMask from 'react-input-mask'

import { styled } from '@/theme'

export const Fieldset = styled('fieldset', {
  padding: 0,
  border: 'none',
  marginBottom: '$2',
})

export const Input = styled('input', {
  border: '1px solid $gray8',
  borderRadius: '$sm',
  padding: '$2',
  width: '100%',
  marginBottom: '$1',
  '&:focus': {
    borderRadius: '$sm',
    outline: '2px solid $blue9',
  },
  variants: {
    hasError: {
      true: {
        borderColor: '$red9',
      },
    },
  },
})

export const InputMask = styled(BaseInputMask, {
  border: '1px solid $gray8',
  borderRadius: '$sm',
  padding: '$2',
  width: '100%',
  marginBottom: '$1',
  '&:focus': {
    borderRadius: '$sm',
    outline: '2px solid $blue9',
  },
  variants: {
    hasError: {
      true: {
        borderColor: '$red9',
      },
    },
  },
})

export const ErrorMessage = styled('p', {
  color: '$red9',
  fontSize: '$sm',
})
