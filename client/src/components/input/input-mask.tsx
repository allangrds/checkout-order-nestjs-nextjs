import * as React from 'react'

import * as S from './input.styles'

type Props = {
  alwaysShowMask?: boolean
  maskPlaceholder?: string
  type?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  value?: string
  error?: string
  mask: string
  placeholder: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InputMask = React.forwardRef<any, Props>((props, ref) => {
  const { error, mask, ...rest } = props

  return (
    <S.Fieldset>
      <S.InputMask mask={mask} hasError={Boolean(error)} ref={ref} {...rest} />
      {error ? <S.ErrorMessage>{error}</S.ErrorMessage> : undefined}
    </S.Fieldset>
  )
})

InputMask.displayName = 'InputMask'

export { InputMask }
