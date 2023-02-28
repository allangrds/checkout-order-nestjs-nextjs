import type { AppProps } from 'next/app'

import { variables } from '@/config'
import { ApiProvider, CartProvider } from '@/hooks'
import { injectGlobalStyles } from '@/theme'
import { Layout } from '@/components'

if (variables.MOCK_API === 'true') {
  console.log('iniciou')
  const { setupMocks } = require('@/mocks')

  console.log('chamou')
  setupMocks()
  console.log('finalizou')
}

injectGlobalStyles()

console.log('app')
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
