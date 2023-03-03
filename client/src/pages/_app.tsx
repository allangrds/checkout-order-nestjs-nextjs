import * as React from 'react'

import type { AppProps } from 'next/app'

import { Layout } from '@/components'
import { variables } from '@/config'
import { ApiProvider, CartProvider } from '@/hooks'
import { injectGlobalStyles } from '@/theme'

import '@/lib/i18n'

injectGlobalStyles()

const API_MOCKING = variables.MOCK_API === 'true'

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
    <ApiProvider>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </ApiProvider>
  )
}
