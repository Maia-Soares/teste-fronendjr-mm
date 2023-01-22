import Head from 'next/head'

import { HomeView } from "../views/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - MobiMark</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeView/>
    </>
  )
}
