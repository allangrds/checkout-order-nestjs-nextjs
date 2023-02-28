import * as React from 'react'

import * as S from './container.styles'

type Props = {
  children: React.ReactNode
}

const BaseContainer = ({ children }: Props) => (
  <S.Wrapper>
    <S.Container>
      { children }
    </S.Container>
  </S.Wrapper>
)

export const Container = React.memo(BaseContainer)
