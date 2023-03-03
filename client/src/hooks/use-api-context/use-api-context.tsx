import * as React from 'react'

import { variables } from '@/config'
import { request } from '@/services/request'
import { Api } from '@/types'

const api = request(variables.API_BASE_URL || '')

const ApiContext = React.createContext<Api | undefined>(undefined)

type ProviderProps = {
  children: React.ReactNode
}
export const ApiProvider = ({ children }: ProviderProps) => (
  <ApiContext.Provider value={api}>{children}</ApiContext.Provider>
)

export const useApiContext = () => {
  const context = React.useContext(ApiContext)

  if (context === undefined) {
    throw new Error('useApiContext must be used within a Provider')
  }

  return {
    api: context,
  }
}
