import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { Button } from './button'

describe('Button', () => {
  it('should render correctly', () => {
    render(
      <Button onClick={() => {}}>
        Click me
      </Button>
    )

    const button = screen.getByRole('button', {
      name: 'Click me',
    })
    expect(button).toBeInTheDocument()
  })

  it('should trigger onClick', () => {
    const onClick = jest.fn()

    render(
      <Button onClick={onClick}>
        Click me
      </Button>
    )

    expect(onClick).not.toHaveBeenCalled()

    const button = screen.getByRole('button', {
      name: 'Click me',
    })

    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
