import * as React from 'react'

import * as S from './input.styles'

type Props = {
  type: string
  placeholder: string
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { error, ...rest } = props

  return (
    <S.Fieldset>
      <S.Input {...rest} hasError={Boolean(error)} ref={ref} />
      {
        error
          ? (
            <S.ErrorMessage>
              {error}
            </S.ErrorMessage>
          )
          : undefined
      }
    </S.Fieldset>
  )
})

Input.displayName = 'Input'

export { Input }
