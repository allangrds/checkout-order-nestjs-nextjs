import * as React from 'react'

import { render, renderHook } from '@testing-library/react'

import { ApiProvider, useApiContext } from './use-api-context'

describe('ApiProvider', () => {
  it('should render correcly', () => {
    const { getByText } = render(
      <ApiProvider>
        <p>hello world</p>
      </ApiProvider>
    )

    expect(getByText('hello world')).toBeInTheDocument()
  })
})

describe('useApiContext', () => {
  it('should provide the API context', () => {
    const { result } = renderHook(() => useApiContext(), {
      wrapper: ({ children }) => <ApiProvider>{children}</ApiProvider>,
    })

    expect(result.current.api).toBeDefined()
  })

  it('should throw an error when used outside of ApiProvider', () => {
    let errorMessage = ''
    const TestComponent = () => {
      try {
        const { api } = useApiContext()
        return <div>Test 3</div>
      } catch (error: any) {
        errorMessage = error.message

        return <div>Test 4</div>
      }
    }

    render(<TestComponent />)

    expect(errorMessage).toBe('useApiContext must be used within a Provider')
  })
})
