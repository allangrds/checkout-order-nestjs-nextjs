import React from 'react'

import { render, screen } from '@testing-library/react'

import { Container } from './container'

describe('Container', () => {
  it('should render correctly', () => {
    render(
      <Container>
        Click me 2
      </Container>
    )

    const container = screen.getByText('Click me 2')
    expect(container).toBeInTheDocument()
  })
})
