import Head from 'next/head'

import { Button } from '../button'
import { Container } from '../container'

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => (
  <>
    <Head>
      <title>Mashgin E-commerce</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      { children }
    </main>
  </>
)
