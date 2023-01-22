import Head from 'next/head'

import { SchoolsView } from "../views/Schools";

export default function Schools() {
  return (
    <>
      <Head>
        <title>Schools - MobiMark</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SchoolsView/>
    </>
  )
}
