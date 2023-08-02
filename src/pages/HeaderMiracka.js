import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

// images
import logo from "../asstes/common/favicon.png"
const HeaderMiracka = () => {
  return (
    <div>
      <Head>
        <title>Miracka</title>
        <meta
          name="description"
          content="Your Creative, Media ,Technology ,VFX Animations , Sales & Marketing Partner"
        />
        <meta
          name="keywords"
          content="Graphic Designing, Website Development, UI/UX, Wordpress Websites, Social Media Ads, Social Media Marketing, Re-Branding Solutions, Video Editing & Animations,Email Marketing, Bulk Messaging, Photography & Video Shoot, Mobile Application Solutions, ERP Solutions, Sales & Marketing"
        />
        <link rel="icon" href={logo.src} />
        <meta property="og:title" content={`Miracka`} />
        <meta property="og:site_name" content="Miracka" />
        <meta property="og:url" content="https://www.Miracka.com" />
        <meta property="og:description" content="Miracka" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={logo.src} />
      </Head>
    </div>
  )
}

export default HeaderMiracka
