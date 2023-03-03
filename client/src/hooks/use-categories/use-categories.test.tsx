import * as React from 'react'
import { renderHook } from '@testing-library/react'

import { ApiProvider, useCategories } from '@/hooks'
import { CategoriesResponse } from '@/types'

jest.mock('@/services', () => ({
  listCategories: jest.fn(),
}))


describe('useCategories', () => {
  const mockApi = {
    get: jest.fn(),
    post: jest.fn(),
  }

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <ApiProvider api={mockApi}>{children}</ApiProvider>
  )
})
