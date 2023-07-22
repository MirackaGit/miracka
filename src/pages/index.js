import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

// images
import logo from "../asstes/common/favicon.png"
import Home from '@/components/HomePage/Home'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Miracka</title>
        <meta
          name="description"
          content="Miracka"
        />
        <meta
          name="keywords"
          content="Miracka"
        />
        <link rel="icon" href={logo.src} />
        <meta property="og:title" content={`Miracka`} />
        <meta property="og:site_name" content="Miracka" />
        <meta property="og:url" content="https://www.Miracka.com" />
        <meta property="og:description" content="Miracka" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={logo.src} />
      </Head>
      <main>
        <Home />
      </main>
    </div>
  )
}
