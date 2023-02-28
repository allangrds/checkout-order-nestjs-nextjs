import type { AppProps } from 'next/app'

import { variables } from '@/config'
import { Provider as ApiProvider } from '@/hooks'
import { injectGlobalStyles } from '@/theme'
import { Layout } from '@/components'

if (variables.MOCK_API === 'true') {
  const { setupMocks } = require('@/mocks')

  setupMocks()
}

injectGlobalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApiProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApiProvider>
  )
}
