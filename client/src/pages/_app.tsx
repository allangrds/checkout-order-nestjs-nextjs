import type { AppProps } from 'next/app'

import { variables } from '@/config'
import { ApiProvider, CartProvider } from '@/hooks'
import { injectGlobalStyles } from '@/theme'
import { Layout } from '@/components'

const startMock = async () => {
  const { setupMocks } = require('@/mocks')

  setupMocks()
}

startMock()
injectGlobalStyles()

export default function App({ Component, pageProps }: AppProps) {
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
