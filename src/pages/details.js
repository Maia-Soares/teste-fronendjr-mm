import Head from 'next/head'

import { DetailsView } from '../views/Details'

export default function Details() {
  return (
    <>
      <Head>
        <title>Sobre - MobiMark</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DetailsView />
    </>
  )
}
