import * as React from 'react'
import { renderHook, waitFor } from '@testing-library/react'

import { ApiProvider, useCategories } from '@/hooks'
import { CategoriesResponse } from '@/types'

describe('useCategories', () => {
  const mockApi = {
    get: async () => {
      const response = [
        {
          "id": 1,
          "image_id": "f3fbf57b118fa9",
          "name": "Bakery"
        },
      ]

      return response
    },
    post: jest.fn(),
  }

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <ApiProvider api={mockApi}>{children}</ApiProvider>
  )

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return categories, loading, error and listCategories', async () => {
    const { result } = renderHook(() => useCategories(), {
      wrapper,
    })

    expect(result.current.categories).toEqual([])
    expect(result.current.loading).toEqual(true)
    expect(result.current.error).toEqual(null)
    expect(typeof result.current.listCategories).toBe('function')

    result.current.listCategories()

    await waitFor(() => {
      expect(result.current.categories).toEqual(
        expect.arrayContaining<CategoriesResponse>([
          expect.objectContaining({
            "id": 1,
            "image_id": "f3fbf57b118fa9",
            "name": "Bakery"
          })
        ])
      )
      expect(result.current.loading).toEqual(false)
      expect(result.current.error).toEqual(null)
    }, { timeout: 3000 })

  })
})
