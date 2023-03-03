import * as React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Input } from './input'
import { InputMask } from './input-mask'

describe('Input', () => {
  describe ('Common', () => {
    it('should render the input correcly', () => {
      const placeholder = 'Type something here...'

      render(
        <Input
          onChange={() => console.log('onChange')}
          type="text"
          placeholder={placeholder}
          name="input"
        />
      )
      const inputElement = screen.getByPlaceholderText(placeholder)
      expect(inputElement).toBeInTheDocument()
    })

    it('should display an error message when passed an error prop', () => {
      const errorMessage = 'This field is required'
      render(
        <Input
          type="text"
          placeholder="Type something here..."
          onChange={() => console.log('onChange')}
          error={errorMessage}
          name="input"
        />
      )
      const errorElement = screen.getByText(errorMessage)
      expect(errorElement).toBeInTheDocument()
    })

    it('should not display an error message when not passed an error prop', () => {
      render(
        <Input
          type="text"
          placeholder="Type something here..."
          onChange={() => console.log('onChange')}
          name="input"
        />
      )
      const errorElement = screen.queryByText(/error/i)
      expect(errorElement).not.toBeInTheDocument()
    })

    it('should trigger onChange', async () => {
      const onChange = jest.fn()
      render(
        <Input
          type="text"
          placeholder="Type something..."
          onChange={onChange}
          name="input"
        />
      )
      const inputElement = screen.getByRole('textbox') as HTMLInputElement

      const value = 'hello world'
      await userEvent.type(inputElement, value)
      expect(onChange).toHaveBeenCalledTimes(value.length)
      expect(inputElement.value).toBe(value)
    })
  })
  describe('InputMask', () => {
    it('should render the input correcly', () => {
      const placeholder = 'Type something here...'

      render(
        <InputMask
          mask="9999 9999"
          onChange={() => console.log('onChange')}
          type="text"
          placeholder={placeholder}
        />
      )
      const inputElement = screen.getByPlaceholderText(placeholder)
      expect(inputElement).toBeInTheDocument()
    })

    it('should display an error message when passed an error prop', () => {
      const errorMessage = 'This field is required'
      render(
        <InputMask
          mask="9999 9999"
          type="text"
          placeholder="Type something here..."
          onChange={() => console.log('onChange')}
          error={errorMessage}
        />
      )
      const errorElement = screen.getByText(errorMessage)
      expect(errorElement).toBeInTheDocument()
    })

    it('should not display an error message when not passed an error prop', () => {
      render(
        <InputMask
          mask="9999 9999"
          type="text"
          placeholder="Type something here..."
          onChange={() => console.log('onChange')}
        />
      )
      const errorElement = screen.queryByText(/error/i)
      expect(errorElement).not.toBeInTheDocument()
    })

    it('should trigger onChange', async () => {
      const onChange = jest.fn()
      render(
        <InputMask
          mask="9999 9999"
          type="text"
          placeholder="Type something..."
          onChange={onChange}
          alwaysShowMask={false}
        />
      )
      const inputElement = screen.getByRole('textbox') as HTMLInputElement
      const value = '99999999'
      await userEvent.type(inputElement, value)
      expect(onChange).toHaveBeenCalledTimes(9)
    })
  })
})
