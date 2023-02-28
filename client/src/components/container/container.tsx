import * as React from 'react'

import * as s from './styles'

type Props = {
  children: React.ReactNode
}

const BaseContainer = ({ children }: Props) => (
  <s.Wrapper>
    <s.Container>
      { children }
    </s.Container>
  </s.Wrapper>
)

export const Container = React.memo(BaseContainer)
