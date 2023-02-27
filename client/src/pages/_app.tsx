import { AppProps } from 'next/app'

import { variables } from '@/config'
import { Provider as ApiProvider } from '@/hooks'

if (variables.MOCK_API === 'true') {
  const { setupMocks } = require('@/mocks')

  setupMocks()
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApiProvider>
      <Component {...pageProps} />
    </ApiProvider>
  )
}
