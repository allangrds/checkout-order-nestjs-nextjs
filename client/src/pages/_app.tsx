import * as React from 'react'

import type { AppProps } from 'next/app'

import { Layout } from '@/components'
import { variables } from '@/config'
import { ApiProvider, CartProvider } from '@/hooks'
import { request } from '@/services/request'
import { injectGlobalStyles } from '@/theme'

injectGlobalStyles()

const API_MOCKING = variables.MOCK_API === 'true'
const api = request(variables.API_BASE_URL || '')

export default function App ({ Component, pageProps }: AppProps) {
  const [shouldRender, setShouldRender] = React.useState(!API_MOCKING)

  React.useEffect(() => {
    async function initMocks () {
      const { setupMocks } = await import('@/mocks')
      await setupMocks()
      setShouldRender(true)
    }

    if (API_MOCKING) {
      initMocks()
    }
  }, [])

  if (!shouldRender) {
    return null
  }

  return (
    <ApiProvider api={api}>
      <CartProvider>
        <Layout>
          <React.Suspense fallback={<p>Loading...</p>}>
            <Component {...pageProps} />
          </React.Suspense>
        </Layout>
      </CartProvider>
    </ApiProvider>
  )
}
