import * as React from 'react'

import { request } from '@/services/request'

const ApiContext = React.createContext(request)

type ProviderProps = {
  children: React.ReactNode
}
export const Provider = ({ children }: ProviderProps) => (
  <ApiContext.Provider value={request}>
    { children}
  </ApiContext.Provider>
)

export const useApiContext = () => {
  const context = React.useContext(ApiContext)

  if (!context) {
    throw new Error('useApiContext must be used within a Provider')
  }

  return {
    api: context
  }
}
